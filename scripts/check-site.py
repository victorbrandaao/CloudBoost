#!/usr/bin/env python3
"""Validate discoverable pages, PRO offers, local links and release references."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import re
import xml.etree.ElementTree as ET
ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / 'docs'
ORIGIN = 'https://getcloudboost.site'

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path, self.canonical, self.title = path, [], ''
        self.description, self.noindex, self.h1, self.lang = '', False, 0, ''
        self.alternates, self.refs, self.schemas = {}, [], []
        self.in_title, self.in_json, self.json_data = False, False, ''
        self.feed(path.read_text())
    def handle_starttag(self, tag, attributes):
        a = dict(attributes)
        if tag == 'html': self.lang = a.get('lang', '')
        if tag == 'h1': self.h1 += 1
        if tag == 'title': self.in_title = True
        if tag == 'meta':
            if a.get('name') == 'description': self.description = a.get('content', '')
            if a.get('name') == 'robots': self.noindex = 'noindex' in a.get('content', '')
        if tag == 'link':
            if a.get('rel') == 'canonical': self.canonical.append(a.get('href'))
            if a.get('rel') == 'alternate' and 'hreflang' in a: self.alternates[a['hreflang']] = a['href']
        if tag == 'script' and a.get('type') == 'application/ld+json': self.in_json, self.json_data = True, ''
        if tag in ('a', 'link', 'script', 'img'): self.refs.extend(a[k] for k in ('src', 'href') if k in a)
    def handle_data(self, text):
        if self.in_title: self.title += text
        if self.in_json: self.json_data += text
    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
        if tag == 'script' and self.in_json:
            self.schemas.append(json.loads(self.json_data))
            self.in_json = False

def main():
    sitemap = ET.parse(DOCS/'sitemap.xml')
    urls = [e.text for e in sitemap.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
    assert len(urls) == len(set(urls)), 'Duplicate sitemap URLs'
    assert set(urls) == set((DOCS/'sitemap.txt').read_text().splitlines()), 'Sitemap formats disagree'
    pages, titles = {}, set()
    for path in DOCS.rglob('*.html'):
        page = Page(path)
        if page.noindex or path.name.startswith('google'): continue
        relative = path.relative_to(DOCS).as_posix()
        canonical = ORIGIN + '/' + re.sub(r'(^|/)index\.html$', r'\1', relative)
        assert page.canonical == [canonical], (path, 'canonical')
        assert canonical in urls, (path, 'missing in sitemap')
        assert page.h1 == 1 and page.title.strip() and page.description and page.lang, (path, 'metadata')
        assert page.title not in titles, (path, 'duplicate title')
        titles.add(page.title)
        for ref in page.refs:
            u = urlsplit(ref)
            if u.netloc and u.netloc != 'getcloudboost.site': continue
            if u.scheme and u.scheme not in ('https', 'http'): continue
            if not u.path: continue
            target = DOCS/unquote(u.path.lstrip('/')) if u.path.startswith('/') else path.parent/unquote(u.path)
            assert target.exists(), (path, 'missing link/asset', ref)
        pages[canonical] = page
    assert set(urls) == set(pages), 'Sitemap has excluded/missing pages'
    expected = {'en':ORIGIN+'/pro.html','pt-BR':ORIGIN+'/pt/pro.html','es':ORIGIN+'/es/pro.html','x-default':ORIGIN+'/pro.html'}
    for lang, url in expected.items():
        page = pages[url]
        assert page.alternates == expected, (url, 'hreflang reciprocity')
        if lang != 'x-default': assert page.lang == lang
        app = next(x for x in page.schemas[0]['@graph'] if x['@type']=='SoftwareApplication')
        assert app['offers']['price']=='10.00' and app['offers']['priceCurrency']=='USD'
        assert app['offers']['url']=='https://payhip.com/b/Jb0XO'
        assert 'aggregateRating' not in app, 'Do not invent ratings'
    download = (DOCS/'download.html').read_text()
    version = re.search(r'"softwareVersion":\s*"([\d.]+)"',download)[1]
    manifest = json.loads((DOCS/f'updates/v{version}/manifest.json').read_text())
    cask = (ROOT/'Casks/cloudboost.rb').read_text()
    assert manifest['version']==version and f'version "{version}"' in cask
    assert manifest['dmg']['sha256'] in cask
    assert all(v==version for v in re.findall(r'CloudBoost_v([\d.]+)\.dmg',download))
    print(f'PASS: {len(pages)} indexed pages, links/assets, JSON-LD, PRO hreflang/offers and release {version}')
if __name__=='__main__': main()
