# Project Overview

## What this site is

A static, bilingual (FR/EN) presentation site for **Gabriel Cantin's structural cosmological model** — a non-standard theoretical physics framework. The site exposes the model through:

- A landing page (`index.html`) routing to FR or EN
- Long-form pages (`fr/index.html`, `en/index.html`) with sections, figures, and warnings
- 28 conceptual diagrams in `/images/` (PNG, French text inside)
- A downloadable corpus in `/downloads/` (Markdown files + ZIP archives) intended for LLM consumption to enable Phase 2 mathematical formalization

## Author / stakeholder

- **Gabriel Cantin** — author of the model, lives in Lanoraie (Quebec, Canada)
- **Bénoit** — has admin access to 101domain (registrar of qubit.coop) and the Wix DNS panel
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
- Site itself: live on `https://gabcantin-wq.github.io/cosmos-design/`, custom domain `qubit.coop` planned (DNS migration pending — see `05_QUBIT_COOP_DNS.md`)

## Key entry points

| Path | Role |
|---|---|
| `index.html` | Landing page → FR/EN selector |
| `fr/index.html` | French long-form page |
| `en/index.html` | English long-form page |
| `css/style.css` | Single stylesheet (dark theme, orange/blue accents, Inter font) |
| `images/*.png` | 28 conceptual diagrams |
| `downloads/{fr,en}/*.md` | LLM-targeted corpus |
| `downloads/corpus_*.zip` | Bundled corpus |
| `build_standalone.py` | Generates `standalone_{fr,en}.html` (offline single-file versions) |
