"""Check local links, fragments, metadata, images and capture declarations.

Only the new portal and cluster pages are inspected. Existing Univers content
is used as a link target but is not rewritten or re-qualified by this check.
"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import re
from datetime import date
import xml.etree.ElementTree as ET
from build_cluster_captures import START, END, gallery_markup

ROOT = Path(__file__).resolve().parents[1] / 'docs'
PAGES = ['index.html', 'clusters-couleur/index.html', 'clusters-couleur/vision/index.html']

class Inspect(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []; self.references = []; self.images = []; self.headings = 0
        self.lang = None; self.description = False; self.viewport = False; self.canonical = None
        self.external_scripts = []
        self.capture_manifest = None; self.capture_channel = None; self.capture_slots = []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'body':
            self.capture_manifest = a.get('data-capture-manifest')
            self.capture_channel = a.get('data-capture-channel')
        if a.get('data-capture'): self.capture_slots.append(a['data-capture'])
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
capture_count = 0
for relative, channel in [('clusters-couleur/index.html', 'documentation'), ('clusters-couleur/vision/index.html', 'commercial')]:
    page = cache[ROOT / relative]
    prefix = '/clusters-couleur/media/'
    pattern = prefix + ('documentation/captures.json' if channel == 'documentation' else r'commercial/edition-[a-z0-9-]+/captures.json')
    if page.capture_channel != channel or not re.fullmatch(pattern, page.capture_manifest or ''):
        errors.append(f'{relative}: wrong capture channel or manifest'); continue
    path = ROOT / page.capture_manifest.lstrip('/')
    if not path.is_file():
        errors.append(f'{relative}: missing capture manifest'); continue
    manifest = json.loads(path.read_text(encoding='utf-8'))
    if manifest.get('schema_version') != 2 or manifest.get('channel') != channel or not manifest.get('revision'):
        errors.append(f'{relative}: invalid manifest identity')
    try: date.fromisoformat(manifest['updated_on'])
    except (KeyError, TypeError, ValueError): errors.append(f'{relative}: invalid revision date')
    capture_ids = [item['id'] for item in manifest['items']]
    capture_count += len(capture_ids)
    if len(capture_ids) != len(set(capture_ids)): errors.append(f'{relative}: duplicate capture IDs')
    if set(page.capture_slots) - set(capture_ids): errors.append(f'{relative}: undeclared capture slot')
    directory = page.capture_manifest.rsplit('/', 1)[0] + '/'
    for item in manifest['items']:
        if not item.get('src'): continue
        src = item['src']
        if not src.startswith(directory) or not re.fullmatch(r'[a-zA-Z0-9_-]+\.(png|jpe?g|webp)', src[len(directory):]):
            errors.append(f'{relative}: capture crosses publication channels or invalid path'); continue
        if not all(item.get(key) for key in ('alt', 'caption', 'observed_on', 'context')):
            errors.append(f'{relative}: incomplete capture metadata')
        try: date.fromisoformat(item['observed_on'])
        except (KeyError, TypeError, ValueError): errors.append(f'{relative}: invalid observation date')
        if not (ROOT / src.lstrip('/')).is_file(): errors.append(f'{relative}: missing declared capture')
    if channel == 'documentation':
        text = (ROOT / relative).read_text(encoding='utf-8')
        if text.count(START) != 1 or text.count(END) != 1 or text.split(START)[1].split(END)[0] != gallery_markup(manifest):
            errors.append('Documentary gallery is stale: run tools/build_cluster_captures.py')
ET.parse(ROOT / 'sitemap.xml')
for name in ('cluster-mark.svg', 'cluster-field.svg'): ET.parse(ROOT / 'assets' / name)
report = {'pages': len(PAGES), 'references_checked': checked, 'capture_channels': 2, 'capture_slots': capture_count, 'errors': errors}
print(json.dumps(report, ensure_ascii=False, indent=2))
raise SystemExit(bool(errors))
