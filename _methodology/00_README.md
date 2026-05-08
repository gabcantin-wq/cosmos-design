# Methodology — Internal Reference

These markdown files are **NOT served on the public website**.
They live in `_methodology/`; Jekyll (GitHub Pages default) excludes folders prefixed with `_`.
They ARE committed to git so future maintenance work (by Claude or a human) has full context.

## Files

| File | Purpose |
|---|---|
| `00_README.md` | This file — index and rules of the methodology folder |
| `01_PROJECT_OVERVIEW.md` | What this site is, who runs it, scope |
| `02_REPO_AND_DEPLOYMENT.md` | Repo structure, GitHub Pages, custom domain plan |
| `03_TRANSLATIONS_WORKFLOW.md` | FR/EN parity, image translation pack |
| `04_IMAGES_AND_BUILD.md` | Image conventions, build_standalone.py role |
| `05_QUBIT_COOP_DNS.md` | DNS situation, Office 365 records, migration plan |

## Rules for editing the website

1. **Do not break FR/EN parity** unless explicitly told to. Both `fr/index.html` and `en/index.html` follow the same section structure. Adding/removing a section in one means adding/removing the equivalent in the other.
2. **Never add tracking, analytics, or third-party scripts** without explicit user approval.
3. **Image source files do not exist** (no PSD/SVG/AI). Only PNGs in `/images/`. Editing image internals requires AI tools or manual recreation.
4. **The `cosmos` repo (different from `cosmos-design`) is the Wix Velo repo** — never push site content there. See `02_REPO_AND_DEPLOYMENT.md`.
5. **Standalone HTML files (`standalone_*.html`) are excluded from git** via `.gitignore`. They are build artifacts of `build_standalone.py`. Do not commit them — they're ~15 MB each.
6. **Keep the pack copies in sync**: `image_translation_pack_en.md` exists at the project root AND in `site/downloads/en/`. Updates must apply to both.
