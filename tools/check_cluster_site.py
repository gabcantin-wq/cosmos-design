"""Check local links, fragments, metadata, images and capture declarations.

Only the new portal and cluster pages are inspected. Existing Univers content
is used as a link target but is not rewritten or re-qualified by this check.
"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1] / 'docs'
PAGES = ['index.html', 'clusters-couleur/index.html', 'clusters-couleur/vision/index.html']

class Inspect(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []; self.references = []; self.images = []; self.headings = 0
        self.lang = None; self.description = False; self.viewport = False; self.canonical = None
        self.external_scripts = []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get('id'): self.ids.append(a['id'])
        if tag == 'html': self.lang = a.get('lang')
        if tag == 'h1': self.headings += 1
        if tag == 'meta':
            self.description |= a.get('name') == 'description' and bool(a.get('content'))
            self.viewport |= a.get('name') == 'viewport'
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical = a.get('href')
        if tag == 'img': self.images.append(a)
        if tag == 'script' and a.get('src', '').startswith(('https:', 'http:', '//')): self.external_scripts.append(a['src'])
        for key in ('href', 'src'):
            if key in a: self.references.append(a[key])
        for key in ('aria-controls', 'aria-labelledby', 'aria-describedby'):
            for target in a.get(key, '').split(): self.references.append('#' + target)

def inspect(path):
    parser = Inspect(); parser.feed(path.read_text(encoding='utf-8')); return parser

errors = []; checked = 0; cache = {}
for relative in PAGES:
    path = ROOT / relative; page = inspect(path); cache[path] = page
    if len(page.ids) != len(set(page.ids)): errors.append(f'{relative}: duplicate IDs')
    if page.headings != 1 or page.lang != 'fr': errors.append(f'{relative}: heading/language')
    if not all([page.description, page.viewport, page.canonical]): errors.append(f'{relative}: metadata')
    if page.external_scripts: errors.append(f'{relative}: third-party scripts')
    for image in page.images:
        if 'alt' not in image: errors.append(f'{relative}: missing image alt')
    for ref in page.references:
        url = urlsplit(ref)
        if url.scheme or url.netloc: continue
        target = ROOT / unquote(url.path.lstrip('/')) if url.path.startswith('/') else path.parent / unquote(url.path)
        if not url.path: target = path
        if target.is_dir(): target /= 'index.html'
        target = target.resolve(); checked += 1
        if not target.is_relative_to(ROOT.resolve()) or not target.is_file():
            errors.append(f'{relative}: missing target {ref}'); continue
        if url.fragment:
            if target not in cache: cache[target] = inspect(target)
            if unquote(url.fragment) not in cache[target].ids: errors.append(f'{relative}: missing fragment {ref}')
manifest = json.loads((ROOT / 'clusters-couleur/media/captures.json').read_text(encoding='utf-8'))
capture_ids = [item['id'] for item in manifest['items']]
if len(capture_ids) != len(set(capture_ids)): errors.append('Duplicate capture IDs')
for item in manifest['items']:
    if item['src']:
        if not all(item.get(key) for key in ('alt', 'caption', 'observed_on')): errors.append('Incomplete capture metadata')
        if not (ROOT / item['src'].lstrip('/')).is_file(): errors.append('Missing declared capture')
ET.parse(ROOT / 'sitemap.xml')
for name in ('cluster-mark.svg', 'cluster-field.svg'): ET.parse(ROOT / 'assets' / name)
report = {'pages': len(PAGES), 'references_checked': checked, 'capture_slots': len(capture_ids), 'errors': errors}
print(json.dumps(report, ensure_ascii=False, indent=2))
raise SystemExit(bool(errors))
