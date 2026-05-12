# Methodology — Internal Reference

These markdown files are **NOT served on the public website**.
They live in `docs/_methodology/`; Jekyll (GitHub Pages default) excludes folders prefixed with `_`.
They ARE committed to git so future maintenance work (by Claude or a human) has full context.

## Files

| File | Purpose |
|---|---|
| `00_README.md` | This file — index and rules of the methodology folder |
| `01_PROJECT_OVERVIEW.md` | What this site is, who runs it, scope |
| `02_REPO_AND_DEPLOYMENT.md` | Repo structure, GitHub Pages, custom domain plan |
| `03_TRANSLATIONS_WORKFLOW.md` | FR/EN parity, image translation pack |
| `04_IMAGES_AND_BUILD.md` | Image conventions, build_standalone.py role |
| `05_CUSTOM_DOMAIN_DNS.md` | Current custom domain (parti-orange.com via Squarespace) + qubit.coop plan suspendu |
| `06_V2_IMAGE_AUDIT.md` | Audit V2 des 28 images existantes — étape A (livrable 2026-05-12) |
| `07_V2_GPT_PROMPT.md` | Prompt-bloc à coller dans ChatGPT pour démarrer la génération V2 (avec catalogue + règles + plan) |
| `build_image_catalog.py` + `images_catalog.png` | Script et catalogue des 28 images V1 (référence pour ChatGPT) |

## Rules for editing the website

1. **FR is canonical, EN is translation.** When FR and EN diverge, FR wins — retranslate EN from FR. ("Il n'y a qu'un seul e.")
2. **Do not break FR/EN parity** unless explicitly told to. Both `docs/univers/fr/index.html` and `docs/univers/en/index.html` follow the same section structure. Adding/removing a section in one means adding/removing the equivalent in the other.
3. **Never add tracking, analytics, or third-party scripts** without explicit user approval.
4. **Image source files do not exist** (no PSD/SVG/AI). Only PNGs in `docs/univers/images/`. Editing image internals requires AI tools or manual recreation.
5. **The `cosmos` repo (different from `cosmos-design`) is the Wix Velo repo** — never push site content there. See `02_REPO_AND_DEPLOYMENT.md`.
6. **Standalone HTML files (`docs/univers/standalone_*.html`) are excluded from git** via `.gitignore`. They are build artifacts of `build_standalone.py`. Do not commit them — they're ~15 MB each.
7. **Keep the corpus copies in sync**: each canonical `.md` exists at the repo root AND in `docs/univers/downloads/{fr,en}/`. Same for `image_translation_pack_en.md`. Updates must apply to both until a build step automates the copy.
8. **Personal / verbatim files stay local** — `verbatims_*.md`, `SESSION_*.md`, `evangiles_*.md`, `LIVRAISON.md`, `RAPPORT_FINAL_*.md` are gitignored at the root. They must never be committed (the repo is public).
