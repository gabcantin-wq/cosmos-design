# Structural Cosmological Model — Gabriel Cantin

Original structural model of the universe by Gabriel Cantin (Lanoraie, Québec, Canada).
The corpus is written in French; V1 also has English translations.

This repository holds only the **numbered, ordered corpus files**, ready to be read
by humans and LLMs, plus the public website in `docs/` (parti-orange.com).
Working sessions, verbatims, raw sources and internal notes are kept locally.

## Public website

`docs/` is served at [parti-orange.com](https://parti-orange.com/) by GitHub Pages
from `main`. The public landing page is the Qubit presentation of Clusters Couleur.
Other content remains reachable by direct URL, without a link from the landing page:

- `/` — Qubit commercial presentation; navigation stays within this page.
- `/clusters-couleur/` — French public introduction, processes and bounded evidence.
- `/materiel/` — hardware types, strengths, modularity and social acceptability.
- `/clusters-couleur/vision/` — legacy address redirecting to `/`.
- `/cosmos/` — direct alias redirecting to `/univers/`.
- `/univers/` — existing FR/EN cosmological model and downloads.

Shared portal assets live in `docs/assets/`. Documentary screenshots evolve in
`media/documentation/`; the commercial page pins a separate selection under
`media/commercial/edition-2026-11-qubit/`. Its additional styles, provisional
vector identity and locally served fonts live in `docs/assets/`. Refresh the documentary gallery with
`python tools/build_cluster_captures.py`. Public text companions are generated
from the cluster HTML with `python tools/build_cluster_texts.py`; check links and
metadata with `python tools/check_cluster_site.py`.
See [the website maintenance guide](docs/_methodology/09_CLUSTER_PORTAL.md)
for screenshots, local preview and publication boundaries.

The [oDOC/oWeb publication agreement](docs/_methodology/10_ODOC_OWEB_PUBLICATIONS.md)
records documentary ownership, commercial contributions from DEV clusters and
color-specific editions. Hardware content has [its own source register](docs/_methodology/11_HARDWARE_SOURCES.md).

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
