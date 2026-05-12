# Translations Workflow (FR / EN parity)

## Parity rule

FR is the canonical source — when FR and EN diverge, retranslate EN from FR. ("Il n'y a qu'un seul e.")

`docs/fr/index.html` and `docs/en/index.html` must mirror each other:
- Same section IDs (`#overview`, `#warnings`, `#genesis`, `#particles`, `#structural`, `#bonus`, `#chain`, `#downloads`).
- Same image references (same files in `/images/`).
- Same number of figures, same order, same tags (e.g., `Fig. 0`, `A1 · t=0+1`).
- Same callout structure (warnings, notes).

When updating one language, update the other. If a translation is delayed, mark the figcaption with `[EN translation pending]` rather than letting the structure drift.

## Three layers of translation in this project

| Layer | What | Where | Status |
|---|---|---|---|
| **Page text** | Headings, paragraphs, captions, callouts | `docs/fr/index.html` and `docs/en/index.html` | ✅ Translated |
| **Image text (inside the PNGs)** | Labels, headings, equations rendered into the images themselves | `docs/images/*.png` (no source files) | ❌ Still in French — see below |
| **Image transcriptions** | English text that should appear inside the EN versions of the images | `image_translation_pack_en.md` (root + `docs/downloads/en/`) | Partially complete — covers A1–A7, B1–B5, C1–C7 (19 images). 9 images still untranscribed: 00, 01, 02, 03, D1–D5. |

## Why the images are not translated

The original PNGs were rendered with French text baked in. **No source files** (PSD, SVG, AI, Figma) exist in the project. To produce English images, three options:

1. **AI image editing** (Adobe Firefly Generative Edit, GPT-4 image editing, FLUX inpainting). Risk: technical diagrams with dense small text can be corrupted. Test on one image first.
2. **Manual recreation** in a vector tool — faithful but time-intensive.
3. **Live as-is** with the translation pack as a textual fallback (current state).

The user's stated direction (2026-05-07): use option 1 (AI rewriting) once the translation pack is complete and acts as the spec.

## Image translation pack format

The pack uses one section per image, with this skeleton (see existing entries A1, A2/A3, B1 for examples):

```markdown
## <CODE> — <Short title in English>

### Title
**<Main heading exactly as it should appear in the EN image>**

### <Sub-heading or panel name>
<Plain English text from that panel of the image>

### <Another panel>
<...>

### Legend
- <each legend item>
```

Some images combine multiple variants (e.g., A2/A3 share one entry because they show the same scene with different stylings).

## Canonical English vocabulary

This is the agreed lexicon from the existing pack. Stick to it when transcribing. Do NOT replace with standard physics vocabulary — the model uses literal terms by design.

| French | English |
|---|---|
| adressage | addressing |
| lien-énergie | energy-link |
| aller / IN | outbound / IN |
| retour / OUT | return / OUT |
| tissage | weaving |
| sillage | wake |
| réfermé / fermé | closed / reclosed (depending on context) |
| énergie embouteillée | bottled energy |
| énergie libre | free energy |
| membrane d'observation | observation membrane |
| profondeur vers t=0 | depth toward t=0 |
| 4df(x) | 4df(x) (unchanged) |
| e, T, t=0, t=x, t=0+1, t=0+y | unchanged |

## Workflow when translations need updating

1. Edit BOTH `docs/fr/index.html` and `docs/en/index.html` together. Keep section IDs and structure aligned.
2. If captions describe an image whose internal text changed, update the figcaption AND the corresponding entry in `image_translation_pack_en.md` (both copies — root and `docs/downloads/en/`).
3. If a new image is added, add transcription entries to the pack for both FR and EN (current pack is EN-only; if FR transcription is needed, add a parallel `image_translation_pack_fr.md`).
4. Test locally by opening the HTML files in a browser, then push to deploy.

## Two copies of the translation pack

`image_translation_pack_en.md` exists at:
- `c:\Users\gabca\OneDrive\Bureau\MODEL_master\image_translation_pack_en.md` (repo root, canonical editorial copy)
- `c:\Users\gabca\OneDrive\Bureau\MODEL_master\docs\downloads\en\image_translation_pack_en.md` (inside the served downloads)

The root copy is the editorial copy; the `docs/downloads/` copy is what visitors download. Keep them identical. A future cleanup could symlink or generate one from the other, but for now both must be edited together.
