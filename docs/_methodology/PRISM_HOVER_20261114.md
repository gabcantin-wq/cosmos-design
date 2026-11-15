# Prism: image-native hover loops

Gab's correction of 14 November 2026 supersedes the first animation-kit
integration: preserve the original beautiful illustrations, make the movement
a little faster and place it inside the image, with no visible player panel.
Desktop playback loops on hover. Gab selected automatic playback when an image
is visible on a phone. Keyboard focus and explicit image activation remain
available; activating a playing image pauses it.

The immediate priority is the visual presentation for management and other
visitors. Technical explanations and comprehensive process Markdown form later
reading levels. This change adds neither technical panels nor process copy.
Existing page text, navigation and original illustrations remain in place.

## Rendering and integration

Seven silent raster cinemagraphs replace the runtime SVG overlays. They use
WebM/VP9 with MP4/H.264 fallback, not GIF: the browser decodes ordinary videos
without displaying controls. The PNG underneath remains the static image.
The seven WebM files total 2,978,047 bytes; one clip is 318-555 kB. Downloads
begin only when playback is requested. At most one clip plays at a time.

`tools/prism/render_hover.py` reproduces the clips from the original pixels,
route geometry and phase ordering in `hover-scenes.json`. Local exposure waves
travel through the existing light beams and material highlights; the renderer
does not draw new paths, packets or rings. Geometry, camera and text stay fixed.
This is deterministic pixel relighting, not generated 3D motion or an AI video.
The selected original scenarios run at 1.6 times the kit speed, at 24 frames per
second, with 15–24.375 second loops and a return to the original image at the
loop boundary. Encoding uses full source resolution; odd dimensions lose at
most their last row/column for 4:2:0. All ten original PNG files are unchanged.

`prism-hover.js` mirrors each image's precise rectangle, crop and mask onto its
video. Hover/focus controls desktop playback. Touch autoplay observes the image
itself, including the mobile hero crop. Offscreen images, a hidden document or
an open lightbox stop playback. Reduced-motion preference suppresses automatic
playback while preserving explicit activation. Failed media leave the original
image usable. Architecture's enlargement links remain separate from playback;
on narrow screens they sit below the image with a minimum 44 px target so they
do not cover its contents. The image alt text also describes its playback
button through aria-describedby; the action label changes without a redundant
pressed state. These two accessibility improvements follow independent review.

The two templates and `shell.html` load this runtime instead of the old SVG
engine. `build.py` generates both pages with edition `2026-11-14-vivid-1`.
The old kit files and checker remain historical material; `check_hover.py` is
the acceptance checker for the currently mounted videos.

## Verification and delivery

The browser checks use headless Chromium and do not operate Gab's GUI.
Artifacts are outside the checkout in
`F:/ORANGE-RUNTIME/prism-hover-20261114`.

```text
python tools/prism/render_hover.py --output <artifacts>/render-check --frames <artifacts>/frames
python tools/prism/build.py
python tools/prism/check.py --artifacts <artifacts>/site-qa
python tools/prism/check_hover.py --artifacts <artifacts>/hover-qa
python tools/prism/check_hover.py --live --artifacts <artifacts>/live-qa
```

Local acceptance covers all seven decoded videos at desktop 1440 px and touch
390/320 px: hover, keyboard focus, image tap pause/restart, visibility autoplay,
offscreen stop, loop boundary, one active decoder, crop/mask alignment and no
visible player controls. It also checks lightbox focus restoration, reduced
motion, no JavaScript, unavailable runtime, WebM-to-MP4 fallback and unavailable
media. The hidden-document contract is tested with a synthetic event from an
actively playing video, not a claim about a manually switched browser tab.

The ordinary site checker covers both pages at 1440/768/390/320 px and the home
at 1920/2560/3840 px, original image hashes, links, menus, tabs, lightboxes,
overflow and script failure. Captures of all seven scenes on desktop/mobile
and original-pixel frame sheets are inspected for composition and details.
These checks establish functionality and rendering; Gab's aesthetic judgment
remains distinct from the earlier approved memory-overlay prototype.

Base: `b83af8ddc1b89c845155ac3157eb685a903169b8`.
Lane: `site/prism-hover-20261114`, reserved in ORG-14829 before writes.
Commit the exact reserved files, push and read back the lane SHA, obtain the
targeted independent review, then fast-forward `main` without force. Confirm
the actual Pages build commit and public resource hashes, run live acceptance
over normal HTTPS, and record those receipts before releasing the scope.
The publication receipt and ticket carry the final SHA and actual deployment
state; this source document does not claim its own commit is already live.

Recovery uses a new revert commit through the same workflow. DNS, certificate
settings and cluster runtime are outside this visual change.

## Stronger movement, requested after publication

Gab found the first cinemagraphs too subtle and requested continuation with
less overhead. The follow-up broadens the native beam illumination, increases
the travelling bright/dark contrast and triples the core breathing amplitude.
All seven clips are re-rendered; timing, image geometry and interaction stay
unchanged. Their measured peak pixel variation is more than twice the previous
version in every scene. Video URLs carry a new version query so browsers fetch
the stronger clips. The cache query is retained by both format-fallback tests.
Source images are still unchanged. Scope and receipts remain in ORG-14829;
follow-up artifacts are in F:/ORANGE-RUNTIME/prism-vivid-20261114.
