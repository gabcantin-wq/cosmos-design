# Repository and Deployment

## Two GitHub repos to distinguish

| Repo | Type | Use |
|---|---|---|
| `gabcantin-wq/cosmos` | Wix Velo (created by `velo-app[bot]`) | DO NOT push site content here. Reserved for Wix Velo JS code. Currently disconnected from any active Wix site. |
| `gabcantin-wq/cosmos-design` | Plain git, **public** | This site + the source corpus. Deployed via GitHub Pages from `docs/`. The directory `c:\Users\gabca\OneDrive\Bureau\MODEL_master` is its working tree. |

## Repo layout (since 2026-05-11 restructuration)

```
MODEL_master/                     ← repo root (cosmos-design)
├── .git/
├── .gitignore                    (root: artefacts + personal files gitignored)
├── 00_README_*.md ... 10_*.md    ← canonical corpus (FR + EN), versioned
├── EXECUTIVE_SUMMARY_en.md
├── NOTES_PUBLICATION{,_en}.md
├── README_images.md
├── image_translation_pack_en.md
└── docs/                         ← served by GitHub Pages (main/docs)
    ├── index.html, fr/, en/, css/, images/
    ├── downloads/{fr,en}/*.md    ← copies of the corpus served to visitors
    ├── downloads/corpus_*.zip
    ├── _methodology/             ← this folder (excluded from Pages by Jekyll `_` prefix)
    └── build_standalone.py
```

The corpus at the repo root is the **authoritative source**. `docs/downloads/{fr,en}/` currently mirrors it manually — keep them in sync until a build step automates the copy.

## Git config (local to this repo)

```
user.name = gabcantin-wq
user.email = 261086514+gabcantin-wq@users.noreply.github.com
http.sslBackend = schannel
```

`credential.helper = manager` is set globally (uses Git Credential Manager — opens browser auth on first push).

## Deployment

- **GitHub Pages** is enabled, source = `main` / `/docs`.
- Default URL: `https://gabcantin-wq.github.io/cosmos-design/`
- Every push to `main` triggers a rebuild (~30s–2min).
- Repo is public.
- No build step (no Jekyll-specific code, no React, no SSG). Plain HTML/CSS — Pages serves `docs/` as-is. Jekyll runs by default though, and excludes folders starting with `_` (this is how `_methodology/` is hidden from the served site).

## Daily workflow

```powershell
git add .
git commit -m "description"
git push
```

## Custom domain (active)

**parti-orange.com** is live since 2026-05-11. DNS managed at Squarespace (ex-Google Domains), 4 A records pointing to GitHub Pages + CNAME `www` redirect. `docs/CNAME` in this repo contains `parti-orange.com`. See `05_CUSTOM_DOMAIN_DNS.md` for the full DNS table.

The `qubit.coop` plan is suspended (kept in `05_CUSTOM_DOMAIN_DNS.md` for reference) — Gab opted for parti-orange.com because the Google-based DNS gives him direct admin without needing Bénoit's 101domain/Wix coordination.

## Files NOT to commit (gitignored at root `.gitignore`)

Artefacts:
- `docs/standalone_*.html` (build outputs, ~15 MB each)
- `__pycache__/`, `.venv/`
- `.vscode/`, `.idea/`
- `desktop.ini`, `Thumbs.db`, `~$*` (OS / OneDrive)

Personal / internal (not for the public repo):
- `verbatims_gabriel.md`, `verbatims_gabriel_2.md`
- `SESSION_*.md`
- `evangiles_selon_gabriel.md`
- `LIVRAISON.md`
- `RAPPORT_FINAL_*.md`

See `.gitignore` at the repo root for the full list.

## OneDrive caveat

The working tree lives inside OneDrive (`C:\Users\gabca\OneDrive\Bureau\MODEL_master`). Git + OneDrive can occasionally produce file lock conflicts. If `git status` reports unexpected `.~lock` or staging weirdness, pause OneDrive sync, run the git command, then resume. The `.git/` folder itself ideally should be excluded from OneDrive sync to avoid corruption — check this if working in this repo for long sessions.

## History notes

- 2026-05-07 — initial commit was force-pushed once to remove `standalone_*.html` (~30 MB) from the very first commit. The amend used `--force-with-lease` and was safe (repo was new, no other clones).
- 2026-05-11 — repo working tree expanded from `site/` to `MODEL_master/`. `.git` moved up, `site/` renamed to `docs/`, corpus added at the root, personal files gitignored. All ~65 prior tracked files were renamed (not duplicated) so history is preserved.
