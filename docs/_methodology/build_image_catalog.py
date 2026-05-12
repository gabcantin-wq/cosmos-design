"""Build a single contact-sheet PNG of all 28 images with their filename labels.

Goal: upload this catalog ONCE to ChatGPT (or any AI tool), then refer to
images by their canonical filename (e.g. "image A5") and the AI knows which
one you mean.

- Reads:  docs/univers/images/*.png  (28 images)
- Writes: docs/_methodology/images_catalog.png

Layout: 4 columns x 7 rows, each cell = 460px wide thumbnail + filename label.
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]          # docs/
IMG_DIR = ROOT / "univers" / "images"
OUT_PATH = Path(__file__).parent / "images_catalog.png"

# Grid
COLS = 4
THUMB_W = 460
LABEL_H = 38
PAD = 18
TITLE_H = 64
BG = (10, 10, 15)
LABEL_BG = (20, 20, 28)
LABEL_FG = (255, 183, 77)
TITLE_FG = (232, 232, 234)


def load_font(size: int) -> ImageFont.FreeTypeFont:
    candidates = [
        "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for c in candidates:
        if Path(c).exists():
            return ImageFont.truetype(c, size)
    return ImageFont.load_default()


def main():
    pngs = sorted(IMG_DIR.glob("*.png"))
    if not pngs:
        raise SystemExit(f"No PNG found in {IMG_DIR}")
    print(f"Found {len(pngs)} images")

    # Compute thumbnail height from the largest aspect ratio so all cells line up.
    # Use the first image as the reference; resize each to fit (THUMB_W, thumb_h)
    # preserving its own aspect ratio, centered in the cell.
    sample = Image.open(pngs[0])
    aspect_ref = sample.height / sample.width
    THUMB_H = int(THUMB_W * aspect_ref)

    rows = (len(pngs) + COLS - 1) // COLS
    cell_w = THUMB_W + 2 * PAD
    cell_h = THUMB_H + LABEL_H + 2 * PAD
    width = COLS * cell_w
    height = TITLE_H + rows * cell_h

    canvas = Image.new("RGB", (width, height), BG)
    draw = ImageDraw.Draw(canvas)

    # Title bar
    title_font = load_font(28)
    draw.text(
        (PAD, PAD // 2),
        f"Catalogue des images — modele cosmologique structurel  ({len(pngs)} images)",
        font=title_font,
        fill=TITLE_FG,
    )

    label_font = load_font(15)

    for i, png in enumerate(pngs):
        r, c = divmod(i, COLS)
        x0 = c * cell_w
        y0 = TITLE_H + r * cell_h

        # Open + fit
        img = Image.open(png).convert("RGB")
        img.thumbnail((THUMB_W, THUMB_H), Image.LANCZOS)
        # Center the (possibly smaller) thumb in the cell area
        thumb_x = x0 + PAD + (THUMB_W - img.width) // 2
        thumb_y = y0 + PAD + (THUMB_H - img.height) // 2
        canvas.paste(img, (thumb_x, thumb_y))

        # Label background strip
        label_y = y0 + PAD + THUMB_H
        draw.rectangle(
            [(x0 + PAD, label_y), (x0 + PAD + THUMB_W, label_y + LABEL_H)],
            fill=LABEL_BG,
        )
        # Filename centered in the label strip
        text = png.name
        bbox = draw.textbbox((0, 0), text, font=label_font)
        text_w = bbox[2] - bbox[0]
        text_h = bbox[3] - bbox[1]
        tx = x0 + PAD + (THUMB_W - text_w) // 2
        ty = label_y + (LABEL_H - text_h) // 2 - 2
        draw.text((tx, ty), text, font=label_font, fill=LABEL_FG)

        print(f"  [{i+1:2d}/{len(pngs)}] {png.name}")

    canvas.save(OUT_PATH, format="PNG", optimize=True)
    size_mb = OUT_PATH.stat().st_size / (1024 * 1024)
    print(f"\nWrote {OUT_PATH}")
    print(f"  {width} x {height} px  -  {size_mb:.1f} MB")


if __name__ == "__main__":
    main()
