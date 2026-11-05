"""Render the documentary capture gallery from its own dated selection.

Commercial editions have a separate manifest and are never modified here.
Run before build_cluster_texts.py after changing documentary captures.
"""
from html import escape
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / 'docs'
START = '<!-- documentation-captures:start -->'
END = '<!-- documentation-captures:end -->'


def gallery_markup(manifest):
    cards = []
    for item in manifest['items']:
        if not item.get('src') or item['id'] == 'overview':
            continue
        caption = f"{item['caption']} · {item['context']} · Capture du {item['observed_on']}"
        cards.append(
            f'<figure class="capture-frame documentary-capture" data-capture="{escape(item["id"], quote=True)}">\n'
            f'  <a href="{escape(item["src"], quote=True)}" aria-label="Voir la capture en grand : {escape(item["alt"], quote=True)}">'
            f'<img src="{escape(item["src"], quote=True)}" alt="{escape(item["alt"], quote=True)}" loading="lazy" decoding="async"></a>\n'
            f'  <figcaption>{escape(caption)}</figcaption>\n'
            '</figure>'
        )
    return '\n' + '\n'.join(cards) + '\n'


def generate():
    manifest = json.loads((ROOT / 'clusters-couleur/media/documentation/captures.json').read_text(encoding='utf-8'))
    assert manifest['channel'] == 'documentation'
    path = ROOT / 'clusters-couleur/index.html'
    text = path.read_text(encoding='utf-8')
    assert text.count(START) == text.count(END) == 1
    before, rest = text.split(START)
    _, after = rest.split(END)
    path.write_text(before + START + gallery_markup(manifest) + END + after, encoding='utf-8')
    print('Documentary gallery updated; commercial edition untouched.')


if __name__ == '__main__':
    generate()
