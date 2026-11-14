# Prism illustrations: gentle animation

Source integration prepared and tested on 14 November 2026. Publication and the
exact deployed SHA are recorded separately in ORG-14829 and the Pages receipt;
this document is not a claim that its own commit has already been deployed.

Gab requested integration of the seven scenes from `prism-animation-kit-20261114`.
The Downloads and workspace copies matched across all 29 files. The approved
memory prototype establishes the gentle visual direction; acceptance of the
seven integrated scenes was performed separately. The source base is
`a0b6c7cf10d74045d7150eb162712fd3b2eef654`, on the isolated branch
`site/prism-animations-20261114`. Scope was reserved on ORG-14829 before editing.

## Implementation

`tools/prism/home.html` mounts hero, memory, federation and development scenes.
`technical.html` mounts agent cooperation, spectral memory and spectral work.
The shell loads the local motion CSS, scene data and engine before `site.js`.
The generated home and architecture HTML remain reproducible through
`python tools/prism/build.py`. The central edition is `2026-11-14-motion-1`.

All ten existing PNGs are unchanged. The seven scene definitions, their timing
(24–39 seconds), paths, English/French copy and motion CSS are copied unchanged
from the kit. `tools/prism/animation-kit.json` retains provenance, dimensions,
hashes and the approved prototype's hash. There is no dependency, external
request, live cluster connection or model call in the animation.

The home uses compact playback/replay controls. Architecture retains immediate
playback controls and places variants, the timeline and explanations inside an
optional “Explore the steps” disclosure. Controls are outside lightbox links.
Opening a lightbox pauses the animations. Original images, links and captions
remain usable when JavaScript or the engine is unavailable.

The hero keeps its cover crop, 60% position, mobile placement and gradient mask.
Its layers remain image, motion, shade, content. Existing wide-screen spacing
and section layout are preserved. No mission-sales section was added.

Two defects found by browser acceptance were corrected in the engine:

- Geometry used rounded `offsetWidth`/`offsetHeight`, displacing a fractional
  height by 0.40625 CSS pixels in the first kit check. It now uses the precise
  host border box and the image content box, excluding borders and padding.
- Independent visibility callbacks could report the incoming scene before the
  outgoing scene, leaving the next animation stopped. Autoplay arbitration now
  waits one animation frame for those reports and is requested when a scene
  leaves view. Consumed scenes never restart automatically. Completion still
  neither loops nor starts another scene.

The engine additionally supports an `h3` explanation heading for the site's
existing section hierarchy. Instance cleanup cancels pending autoplay work.

## Verification

Commands, with artifacts outside the checkout:

```text
node tools/prism/verify_motion.cjs
python tools/prism/build.py
python tools/prism/check.py --artifacts <external-directory>/site-qa
python tools/prism/check_motion.py --artifacts <external-directory>/motion-qa
python tools/prism/check_motion.py --live --artifacts <external-directory>/live-qa
```

Before publication:

- Logical kit checks passed: seven original hashes/dimensions, twelve variants,
  18,012 timeline states, at most three packets, conditional reuse/adoption,
  limited federation and iteration stopping.
- The supplied browser checker passed against an external copy of the kit with
  the integrated engine. Seven desktop scenes, FR/EN at 320/390 px, conditional
  paths, reduced motion, no-JS, cover geometry and single-scene ownership passed.
  The supplied kit itself was left intact. Its initial geometry failure was
  not relabelled as a successful original run.
- Integrated acceptance passed for all seven scenes at 1440, 390 and 320 px:
  pixel alignment, masks, keyboard play/pause, real frame progression, replay,
  completion without looping, durable offscreen pause, one active scene and
  first-visibility autoplay. Reduced motion suppresses autoplay; explicit play
  remains available. Architecture variants, disclosures, lightboxes and focus
  restoration passed. No horizontal overflow or JavaScript errors occurred.
- The existing site checker passed both pages at 1440/768/390/320 px and the
  home at 1920/2560/3840 px, including navigation, tabs, ten original images,
  links, no-JS and script-failure fallbacks. No unexpected request occurred.
- Desktop/mobile captures of all seven scenes and architecture controls were
  inspected, together with diagnostic path overlays and the hero composition.

The hidden-document pause handler is exercised with a synthetic visibility
event: headless Chromium has no user-operated tab strip. This is an event
contract check, not a claim of testing Gab's browser. No user GUI was controlled.
Runtime QA artifacts are under `F:/ORANGE-RUNTIME/prism-animations-20261114`.

## Delivery and recovery

Commit exact reserved files, push the site lane to `origin`, read back its SHA,
obtain a targeted independent review, then fast-forward `main` without force.
Read the actual GitHub Pages build commit and compare public resource hashes to
the Git blobs. Run the integrated checker with `--live` over normal HTTPS.
Record the review, final SHA and deployment observations in ORG-14829 before
releasing the scope. A branch push alone is not proof of publication.

Recovery is a new revert commit through the same workflow. Domain settings,
certificate configuration, former-domain redirects and cluster runtime are
outside this change.
