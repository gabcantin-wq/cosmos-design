# Project Overview

## What this site is

A static, bilingual (FR/EN) presentation site for **Gabriel Cantin's structural cosmological model** — a non-standard theoretical physics framework. The site exposes the model through:

- A landing page (`index.html`) routing to FR or EN
- Long-form pages (`fr/index.html`, `en/index.html`) with sections, figures, and warnings
- 28 conceptual diagrams in `/images/` (PNG, French text inside)
- A downloadable corpus in `/downloads/` (Markdown files + ZIP archives) intended for LLM consumption to enable Phase 2 mathematical formalization

## Author / stakeholder

- **Gabriel Cantin** — author of the model, lives in Lanoraie (Quebec, Canada)
- **Bénoit** — has admin access to 101domain (registrar of qubit.coop) and the Wix DNS panel (relevant if qubit.coop migration is resumed; currently the production custom domain is parti-orange.com, managed directly by Gab via Squarespace)
- Site affiliated with **Qubit COOP de Solidarité**

## License

CC BY-NC-ND 4.0. Reading and citation allowed (attribution required). Modification or commercial use needs written permission.

## Scope of the model (for context, not for editing)

- Single `e` at `t=0` (omnipresent, dimensionless)
- Circular constant axis `T`
- Generative function `4df(x)` (integral operator)
- Energy-link outbound–return duality
- 28 figures organized in batches: founding (00–03), genesis A1–A7, particles/forces B1–B5, structural readings C1–C7, additional pedagogy D1–D5

## Status

- **Phase 1** — written exposition stabilized May 1, 2026
- **Phase 2** — mathematical formalization, not yet started (the corpus targets LLM-assisted Phase 2)
- Site itself: live on `http://parti-orange.com` (HTTPS in provisioning) + `https://gabcantin-wq.github.io/cosmos-design/`. `qubit.coop` migration suspended — see `05_CUSTOM_DOMAIN_DNS.md`.

## Key entry points

All site paths below are inside `docs/` (the repo root contains the canonical corpus + the `docs/` folder served by Pages).

| Path | Role |
|---|---|
| `docs/index.html` | Landing page → FR/EN selector |
| `docs/fr/index.html` | French long-form page |
| `docs/en/index.html` | English long-form page |
| `docs/css/style.css` | Single stylesheet (dark theme, orange/blue accents, Inter font) |
| `docs/images/*.png` | 28 conceptual diagrams |
| `docs/downloads/{fr,en}/*.md` | LLM-targeted corpus (mirror of root corpus) |
| `docs/downloads/corpus_*.zip` | Bundled corpus |
| `docs/build_standalone.py` | Generates `docs/standalone_{fr,en}.html` (offline single-file versions) |
| `<root>/0X_*.md`, `EXECUTIVE_SUMMARY_en.md`, etc. | Canonical corpus source — edit here first |
