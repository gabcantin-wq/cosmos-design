# Images and the Standalone Build

## Image inventory (28 PNGs in `docs/univers/images/`)

| Code prefix | Count | Theme |
|---|---|---|
| `00`–`03` | 4 | Founding / overview images |
| `A1`–`A7` | 7 | Structural genesis from t=0 to t=x |
| `B1`–`B5` | 5 | Particles, forces, entanglement, photon |
| `C1`–`C7` | 7 | Charge, electron, reactions, angular force, first instants, T, 4df(x) |
| `D1`–`D5` | 5 | Additional pedagogy (duality, sequential plan, tennis-ball analogies) |

## Naming convention

```
<batch_letter><index>_<short_french_label>.png
```

Examples: `A1_t0p1_adressage_initial.png`, `B4_quarks_synchronisation_proton.png`, `D5_electron_retour_probabiliste.png`.

When adding a new image, follow this convention. Do not introduce English filenames — keep filenames stable so both `fr/index.html` and `en/index.html` reference the same files.

## How images are presented in HTML

Every image lives inside a `<figure class="figure">` block:

```html
<figure class="figure">
  <img src="../images/<file>.png" alt="<descriptive sentence>">
  <figcaption>
    <span class="tag"><Short label>></span>
    <strong><One-line title></strong>
    <One- or two-sentence explanation in the page language.>
  </figcaption>
</figure>
```

`../images/<file>.png` is relative to `docs/univers/fr/` or `docs/univers/en/`, so it resolves to `docs/univers/images/<file>.png`.

Conventions:
- `alt` text: descriptive, full sentence, in the page language (FR for `docs/univers/fr/index.html`, EN for `docs/univers/en/index.html`).
- `<span class="tag">`: short tag like `Fig. 0`, `A1 · t=0+1`, `B2 · 4 forces`. Same tag in FR and EN.
- `<strong>`: one-line title, translated.
- Body text after `<strong>`: the explanation; do not echo what is inside the image — give the reader what to take away.

## File sizes and lazy loading

Some images are large (1.5–3 MB). The page does not currently use `loading="lazy"` on `<img>` (only `build_standalone.py` adds it for the offline files). For the live site, this is acceptable for now but could be revisited if perceived loading is poor.

## `build_standalone.py`

A Python script (`docs/univers/build_standalone.py`) that produces `docs/univers/standalone_fr.html` and `docs/univers/standalone_en.html` — single-file offline versions of each language page. It:

1. Reads `docs/univers/fr/index.html` (or `docs/univers/en/`).
2. Inlines `docs/univers/css/style.css`.
3. Re-encodes each image as a JPEG (quality 75, max-width 1280px) and embeds as `data:image/jpeg;base64,...`.
4. Embeds every `downloads/...md` and `downloads/...zip` as a `data:` URI on the link `href` and sets `download="<filename>"` so browsers save with the correct filename — no JS needed.
5. Disables nav links (no FR↔EN switching in standalone form).
6. Adds a "Standalone version" banner.

Output files end up at `docs/univers/standalone_fr.html` and `docs/univers/standalone_en.html`. They are **gitignored** — do not commit them. Regenerate from `docs/univers/` with:

```powershell
cd docs/univers
python build_standalone.py        # both languages
python build_standalone.py fr     # FR only
python build_standalone.py en     # EN only
```

Dependencies: `Pillow` (PIL). Install with `pip install Pillow` if not already present.

## When to regenerate the standalone files

Whenever a page section or an image changes meaningfully and the offline distribution should reflect the latest content. The script is idempotent — re-running overwrites the output.

## Image source files (none)

There are no PSD, AI, Figma, or SVG source files. All editing of the images themselves must be done either by AI tools or by manual recreation. See `03_TRANSLATIONS_WORKFLOW.md` for the EN translation strategy.
