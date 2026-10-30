import importlib.util
from pathlib import Path
import tempfile
import unittest

spec = importlib.util.spec_from_file_location('sync_release', Path(__file__).with_name('sync-release.py'))
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class ReleaseSyncTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        for name in module.CURRENT_FILES:
            path = self.root / name
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text('"softwareVersion": "4.4.4"\nv4.4.4/CloudBoost_v4.4.4.dmg\n4.4.40 14.4.4 4.4.1')
        self.cask = self.root / 'Casks/cloudboost.rb'
        self.cask.parent.mkdir()
        self.cask.write_text('  version "4.4.3"\n  sha256 "' + 'a' * 64 + '"\n')
        self.manifest = {'version': '4.4.5', 'zip': {'sha256': 'b' * 64}, 'dmg': {'sha256': 'c' * 64}}

    def snapshot(self):
        return {str(p): p.read_bytes() for p in self.root.rglob('*') if p.is_file()}

    def test_sync_preserves_history_and_unrelated_versions(self):
        history = self.root / 'docs/updates/v4.4.4/manifest.json'
        history.parent.mkdir(parents=True)
        history.write_text('{"version":"4.4.4"}')
        module.sync(self.root, '4.4.5', self.manifest)
        text = (self.root / 'docs/download.html').read_text()
        self.assertIn('v4.4.5/CloudBoost_v4.4.5.dmg', text)
        self.assertIn('4.4.40 14.4.4 4.4.1', text)
        self.assertIn('"4.4.5"', self.cask.read_text())
        self.assertIn('c' * 64, self.cask.read_text())
        self.assertEqual(history.read_text(), '{"version":"4.4.4"}')
        first = self.snapshot()
        module.sync(self.root, '4.4.5', self.manifest)
        self.assertEqual(first, self.snapshot())

    def test_release_refreshes_only_changed_page_dates(self):
        page = self.root / 'docs/download.html'
        page.write_text('<link rel="canonical" href="https://getcloudboost.site/download.html">'
                        '\n"softwareVersion": "4.4.4", "dateModified": "2026-01-01"')
        sitemap = self.root / 'docs/sitemap.xml'
        sitemap.write_text('<urlset><url><loc>https://getcloudboost.site/download.html</loc>'
                           '<lastmod>2026-01-01</lastmod></url><url><loc>https://getcloudboost.site/privacy.html</loc>'
                           '<lastmod>2025-12-01</lastmod></url></urlset>')
        module.sync(self.root, '4.4.5', self.manifest, modified_date='2026-10-30')
        self.assertIn('"dateModified": "2026-10-30"', page.read_text())
        self.assertIn('<lastmod>2026-10-30</lastmod>', sitemap.read_text())
        self.assertIn('<lastmod>2025-12-01</lastmod>', sitemap.read_text())
        first = self.snapshot()
        module.sync(self.root, '4.4.5', self.manifest, modified_date='2026-10-31')
        self.assertEqual(first, self.snapshot())

    def test_invalid_input_or_cask_never_changes_files(self):
        for version in ('4.4.3', '4.4.5-rc1', '../bad'):
            before = self.snapshot()
            with self.assertRaises(ValueError):
                module.sync(self.root, version, {**self.manifest, 'version': version})
            self.assertEqual(before, self.snapshot())
        self.manifest['dmg']['sha256'] = 'invalid'
        before = self.snapshot()
        with self.assertRaises(ValueError):
            module.sync(self.root, '4.4.5', self.manifest)
        self.assertEqual(before, self.snapshot())
        self.manifest['dmg']['sha256'] = 'c' * 64
        self.cask.write_text('invalid')
        before = self.snapshot()
        with self.assertRaises(ValueError):
            module.sync(self.root, '4.4.5', self.manifest)
        self.assertEqual(before, self.snapshot())


if __name__ == '__main__':
    unittest.main()
