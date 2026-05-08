"""Build single-file standalone HTMLs (FR + EN) from site/{fr,en}/index.html.

- Inlines CSS from site/css/style.css
- Replaces <img src="../images/X.png"> with base64 data URIs (JPEG-compressed)
- Replaces <a href="../downloads/...md|.zip"> with base64 data URIs
  (downloads work natively in any browser, no JS needed)
- Outputs: site/standalone_fr.html and site/standalone_en.html
"""

import base64
import io
import re
import sys
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).parent
CSS_IN = ROOT / "css" / "style.css"
IMG_DIR = ROOT / "images"
DL_DIR = ROOT / "downloads"

JPEG_QUALITY = 88
MAX_WIDTH = 1800

LANG_TEXTS = {
    "fr": {
        "banner": (
            "<strong>Version standalone</strong> — un seul fichier, hors ligne. "
            "Toutes les images et tous les fichiers MD du corpus sont embarqués et téléchargeables."
        ),
        "lang_other_label": "EN",
        "lang_other_title": "Version standalone offline FR — voir le site en ligne pour la version EN",
    },
    "en": {
        "banner": (
            "<strong>Standalone version</strong> — single file, offline. "
            "All images and all corpus MD files are embedded and downloadable."
        ),
        "lang_other_label": "FR",
        "lang_other_title": "Standalone offline EN — see the online site for FR",
    },
}


def img_to_data_uri(path: Path) -> str:
    img = Image.open(path).convert("RGB")
    if img.width > MAX_WIDTH:
        new_h = int(img.height * MAX_WIDTH / img.width)
        img = img.resize((MAX_WIDTH, new_h), Image.LANCZOS)
    buf = io.BytesIO()
    img.save(buf, format="JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
    encoded = base64.b64encode(buf.getvalue()).decode("ascii")
    return f"data:image/jpeg;base64,{encoded}"


def file_to_data_uri(path: Path, mime: str) -> str:
    data = path.read_bytes()
    encoded = base64.b64encode(data).decode("ascii")
    return f"data:{mime};base64,{encoded}"


def build(lang: str):
    print(f"\n=== Building {lang.upper()} standalone ===")
    html_in = ROOT / lang / "index.html"
    html_out = ROOT / f"standalone_{lang}.html"

    html = html_in.read_text(encoding="utf-8")
    css = CSS_IN.read_text(encoding="utf-8")
    texts = LANG_TEXTS[lang]
    other = "fr" if lang == "en" else "en"

    # Inline CSS
    html = re.sub(
        r'<link rel="stylesheet" href="\.\./css/style\.css">',
        f"<style>\n{css}\n</style>",
        html,
    )

    # Disable navigation links (standalone is offline)
    html = html.replace('href="../index.html"', 'href="#" onclick="return false;"')
    html = html.replace(
        f'href="../{other}/index.html"',
        f'href="#" onclick="return false;" title="{texts["lang_other_title"]}"',
    )
    html = html.replace('href="index.html" class="active"', 'href="#" class="active"')

    # Embed downloads
    def replace_download(match):
        rel_path = match.group(1)
        attrs = match.group(2)
        rel = rel_path.replace("../downloads/", "")
        path = DL_DIR / rel
        if not path.exists():
            print(f"  WARN: missing download {path}")
            return match.group(0)
        if path.suffix == ".md":
            mime = "text/markdown;charset=utf-8"
        elif path.suffix == ".zip":
            mime = "application/zip"
        else:
            mime = "application/octet-stream"
        print(f"  embed download {path.name}")
        uri = file_to_data_uri(path, mime)
        return f'<a href="{uri}"{attrs}'

    html = re.sub(
        r'<a href="(\.\./downloads/[^"]+)"([^>]*)',
        replace_download,
        html,
    )

    # Standalone banner
    standalone_banner = (
        '\n<div style="background:rgba(255,183,77,0.12);'
        'border-bottom:1px solid rgba(255,183,77,0.3);padding:0.8rem 1.5rem;'
        'text-align:center;font-size:0.88rem;color:#ffd180;">\n'
        f'  {texts["banner"]}\n'
        '</div>\n'
    )
    html = html.replace('<header class="site-header">', standalone_banner + '<header class="site-header">')

    # Embed images
    pattern = re.compile(r'src="\.\./images/([^"]+)"')

    def replace_img(match):
        fname = match.group(1)
        path = IMG_DIR / fname
        if not path.exists():
            print(f"  WARN: missing image {path}")
            return match.group(0)
        print(f"  embed image  {fname}")
        uri = img_to_data_uri(path)
        return f'src="{uri}"'

    html = pattern.sub(replace_img, html)
    html = html.replace('<img src=', '<img loading="lazy" src=')

    html_out.write_text(html, encoding="utf-8")
    size_mb = html_out.stat().st_size / (1024 * 1024)
    print(f"==> {html_out.name} = {size_mb:.1f} MB")


def main():
    target = sys.argv[1] if len(sys.argv) > 1 else "all"
    if target in ("fr", "all"):
        build("fr")
    if target in ("en", "all"):
        build("en")


if __name__ == "__main__":
    main()
