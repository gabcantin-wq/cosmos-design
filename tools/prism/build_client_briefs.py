"""Build unlisted, client-focused Prism pages from reviewed page data.

No pages are emitted while client-briefs.json has no ready entries. Drafts may
be rendered into an external preview directory with --include-drafts.
"""
from pathlib import Path
import argparse
import html
import json
import re
from PIL import Image

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
BRAND = json.loads((HERE / 'brand.json').read_text(encoding='utf-8'))
SHELL = (HERE / 'client-brief-shell.html').read_text(encoding='utf-8')
SLUG = re.compile(r'[a-z0-9]+(?:-[a-z0-9]+)*\Z')
TOKEN = re.compile(r'\{\{([a-z_]+)\}\}')


def plain(value, field):
    if not isinstance(value, str) or not value.strip():
        raise ValueError(f'{field}: nonempty text required')
    return html.escape(value.strip(), quote=True)


def render(page):
    slug = page.get('slug')
    if not isinstance(slug, str) or not SLUG.fullmatch(slug):
        raise ValueError('slug must be one lowercase URL segment')
    values = {field: plain(page.get(field), field) for field in (
        'title', 'summary', 'topic', 'eyebrow', 'headline', 'lead',
        'outcome_label', 'outcome', 'image_alt', 'image_caption',
        'example_title', 'example_intro')}
    image = page.get('image')
    if not isinstance(image, str) or not re.fullmatch(r'/assets/prism/[a-z0-9-]+\.(png|jpg)', image):
        raise ValueError('image must be a local Prism illustration')
    path = ROOT / 'docs' / image.lstrip('/')
    if not path.is_file():
        raise ValueError(f'image missing: {image}')
    with Image.open(path) as source:
        width, height = source.size
    benefits = page.get('benefits')
    if not isinstance(benefits, list) or len(benefits) != 3:
        raise ValueError('exactly three focused benefits required')
    cards = []
    for index, benefit in enumerate(benefits, 1):
        cards.append(f'<article><span>{index:02}</span><h3>{plain(benefit.get("title"), "benefit title")}</h3><p>{plain(benefit.get("text"), "benefit text")}</p></article>')
    steps = page.get('example_steps')
    if not isinstance(steps, list) or len(steps) != 3:
        raise ValueError('exactly three example steps required')
    items = [f'<li><strong>{plain(step.get("title"), "step title")}</strong><span>{plain(step.get("text"), "step text")}</span></li>' for step in steps]
    technical = page.get('technical')
    if technical is None:
        technical_link = ''
    else:
        href = technical.get('href')
        if not isinstance(href, str) or not href.startswith('/') or href.startswith('//') or '\\' in href or '..' in href:
            raise ValueError('technical href must be an internal path')
        technical_link = f'<aside class="deeper wrap"><div><p class="eyebrow">Go further</p><h2>Explore the details.</h2></div><a href="{html.escape(href, quote=True)}">{plain(technical.get("label"), "technical label")} ↗</a></aside>'
    values.update({
        'slug': slug, 'image': image, 'image_width': str(width), 'image_height': str(height),
        'benefit_cards': ''.join(cards), 'example_steps': ''.join(items),
        'technical_link': technical_link,
        'url': plain(BRAND['url'], 'url'), 'company': plain(BRAND['company'], 'company'),
        'tagline': plain(BRAND['tagline'], 'tagline'), 'edition': plain(BRAND['edition'], 'edition')})
    output = TOKEN.sub(lambda match: values[match.group(1)], SHELL)
    if TOKEN.search(output):
        raise ValueError('unresolved template field')
    return output.rstrip() + '\n'


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--data', type=Path, default=HERE / 'client-briefs.json')
    parser.add_argument('--output', type=Path, default=ROOT / 'docs/partages')
    parser.add_argument('--include-drafts', action='store_true')
    args = parser.parse_args()
    pages = json.loads(args.data.read_text(encoding='utf-8'))['pages']
    if not isinstance(pages, list):
        raise ValueError('pages must be a list')
    slugs = set()
    for page in pages:
        status = page.get('status')
        if status not in ('draft', 'ready'):
            raise ValueError('status must be draft or ready')
        slug = page.get('slug')
        if slug in slugs:
            raise ValueError(f'duplicate slug: {slug}')
        slugs.add(slug)
        if status == 'draft' and not args.include_drafts:
            continue
        output = args.output / slug / 'index.html'
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(render(page), encoding='utf-8', newline='\n')
        print(output)


if __name__ == '__main__':
    main()
