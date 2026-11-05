"""Regenerate public, complete text companions from the two cluster pages.

Run from any directory with Python 3; no external dependencies are required.
"""
from html.parser import HTMLParser
from pathlib import Path
from datetime import date
import json
import re

ROOT = Path(__file__).resolve().parents[1] / 'docs'

class PublicText(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.in_main = False
        self.parts = []
        self.link = None
        self.capture_manifest = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'body':
            self.capture_manifest = attrs.get('data-capture-manifest')
        if tag == 'main':
            self.in_main = True
        if not self.in_main:
            return
        if tag in ('h1', 'h2', 'h3', 'p', 'article', 'section', 'figcaption', 'details', 'tr', 'li'):
            self.parts.append('\n\n')
        if tag in ('br', 'summary'):
            self.parts.append('\n')
        if tag in ('th', 'td'):
            self.parts.append(' | ')
        if tag == 'a':
            href = attrs.get('href', '')
            self.link = 'https://parti-orange.com' + href if href.startswith('/') else href
        if tag == 'img' and attrs.get('alt'):
            self.parts.append('\n[Illustration : ' + attrs['alt'] + ']\n')

    def handle_endtag(self, tag):
        if tag == 'main':
            self.in_main = False
        if not self.in_main:
            return
        if tag == 'a' and self.link:
            self.parts.append(' (' + self.link + ') ')
            self.link = None
        if tag in ('div', 'button', 'span', 'small', 'strong', 'em'):
            self.parts.append(' ')
        if tag in ('h1', 'h2', 'h3', 'p', 'figcaption', 'summary', 'tr', 'li'):
            self.parts.append('\n\n')

    def handle_data(self, data):
        if self.in_main:
            self.parts.append(data)

    def text(self):
        lines = [re.sub(r'[ \t\r]+', ' ', line).strip() for line in ''.join(self.parts).split('\n')]
        return re.sub(r'\n{3,}', '\n\n', '\n'.join(lines)).strip() + '\n'

def generate():
    targets = [
        ('clusters-couleur/index.html', 'guide-public.txt', 'Présentation documentaire. Les scénarios et les preuves conservent leur portée datée.'),
        ('index.html', 'vision-publique.txt', 'Présentation Qubit, satirique et prospective, sans affiliation à Cohere. Les capacités envisagées ne sont pas déclarées toutes opérationnelles.'),
    ]
    for source, target, status in targets:
        parser = PublicText()
        parser.feed((ROOT / source).read_text(encoding='utf-8'))
        manifest = json.loads((ROOT / parser.capture_manifest.lstrip('/')).read_text(encoding='utf-8'))
        updated = date.fromisoformat(manifest['updated_on'])
        months = ['JANVIER', 'FÉVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN', 'JUILLET', 'AOÛT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DÉCEMBRE']
        edition_date = f'{updated.day} {months[updated.month - 1]} {updated.year}'
        header = 'CLUSTERS COULEUR — ÉDITION PUBLIQUE DU ' + edition_date + '\n' + status + '\n\n'
        out = ROOT / 'clusters-couleur/documents' / target
        out.write_text(header + parser.text() + '\nRepères et provenance : https://parti-orange.com/clusters-couleur/documents/reperes.txt\n', encoding='utf-8')
        print(out.relative_to(ROOT))

if __name__ == '__main__':
    generate()
