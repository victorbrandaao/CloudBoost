#!/usr/bin/env python3
"""Synchronize current release references; never rewrite historical update mirrors."""
import argparse
import json
from pathlib import Path
import re

CURRENT_FILES = ['README.md', 'docs/index.html', 'docs/download.html',
                 'docs/pt/index.html', 'docs/es/index.html', 'docs/ai-summary.html', 'docs/llms.txt']


def sync(root, version, manifest):
    if not re.fullmatch(r'\d+\.\d+\.\d+', version) or manifest.get('version') != version:
        raise ValueError('Expected a stable semantic version matching the manifest')
    for kind in ('zip', 'dmg'):
        if not re.fullmatch(r'[0-9a-f]{64}', manifest.get(kind, {}).get('sha256', '')):
            raise ValueError('Invalid release checksum')
    download = (root / 'docs/download.html').read_text()
    match = re.search(r'"softwareVersion":\s*"(\d+\.\d+\.\d+)"', download)
    if not match:
        raise ValueError('Missing current softwareVersion')
    current = match[1]
    if tuple(map(int, version.split('.'))) < tuple(map(int, current.split('.'))):
        raise ValueError('Refusing to downgrade current release')
    pattern = re.compile(r'(?<![\d.])' + re.escape(current) + r'(?!\d|\.\d)')
    # Read and validate every target before writing any file.
    changes = {root / name: pattern.sub(version, (root / name).read_text()) for name in CURRENT_FILES}
    cask = root / 'Casks/cloudboost.rb'
    content, count = re.subn(r'(?m)^  version "[^"]+"$', f'  version "{version}"', cask.read_text())
    if count != 1:
        raise ValueError('Expected exactly one cask version')
    content, count = re.subn(r'(?m)^  sha256 "[a-f0-9]{64}"$', f'  sha256 "{manifest["dmg"]["sha256"]}"', content)
    if count != 1:
        raise ValueError('Expected exactly one cask checksum')
    changes[cask] = content
    for path, content in changes.items():
        path.write_text(content)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('version')
    parser.add_argument('manifest', type=Path)
    args = parser.parse_args()
    sync(Path(__file__).resolve().parents[1], args.version, json.loads(args.manifest.read_text()))
