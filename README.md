# Structural Cosmological Model — Gabriel Cantin

Original structural model of the universe by Gabriel Cantin (Lanoraie, Québec, Canada).
The corpus is written in French; V1 also has English translations.

This repository holds only the **numbered, ordered corpus files**, ready to be read
by humans and LLMs, plus the public website in `docs/` (parti-orange.com).
Working sessions, verbatims, raw sources and internal notes are kept locally.

## Public website

`docs/` is served at [parti-orange.com](https://parti-orange.com/) by GitHub Pages
from `main`. The portal links to the cosmological model and the Clusters Couleur:

- `/` — general portal.
- `/clusters-couleur/` — French public introduction, processes and bounded evidence.
- `/clusters-couleur/vision/` — clearly identified satirical and prospective presentation.
- `/univers/` — existing FR/EN cosmological model and downloads.

Shared portal assets live in `docs/assets/`. Public text companions are generated
from the cluster HTML with `python tools/build_cluster_texts.py`; check links and
metadata with `python tools/check_cluster_site.py`.
See [the website maintenance guide](docs/_methodology/09_CLUSTER_PORTAL.md)
for screenshots, local preview and publication boundaries.

## Versions

| Folder | Status | Start here |
|---|---|---|
| [`V3/`](V3/) | Current working version (consolidated 2026-09-22) | [`V3/00_README_V3.md`](V3/00_README_V3.md) |
| [`V2/`](V2/) | Audited corpus, 2026-09-02 | [`V2/00_README_fr.md`](V2/00_README_fr.md) |
| [`V1/`](V1/) | Phase 1, published on Zenodo (May 2026), FR/EN | [`V1/00_README_fr.md`](V1/00_README_fr.md) |

See [`VERSIONS.md`](VERSIONS.md) for what each version contains.

## Reading order for an LLM

1. Load the latest version folder (`V3/`) in numeric order, `00` first.
2. Respect the epistemic tags: author-validated statements, open questions and
   LLM inferences are marked distinctly and must not be merged.
3. Earlier versions are historical context; a later version prevails.

Some chapters link to local sources (`sources/`, verbatims, manifest) that are not
published here. Those links are expected to be dead on GitHub.
