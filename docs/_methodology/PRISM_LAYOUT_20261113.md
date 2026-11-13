# Wide-screen commercial layout — 13 November 2026

Gab reported a large black strip on the left of the newly migrated homepage.
The centred `.wrap` container was capped at 1,300 CSS pixels. At a 2,560-pixel
viewport, the title, header and section content therefore began 630 pixels
from the left edge, although the hero artwork filled the screen.

The commercial page now uses 90% of the viewport from 1,440 pixels upwards.
At 2,560 pixels, its side margin is 128 pixels. Header, hero, following sections
and footer stay aligned. Principle-card paragraphs retain a readable line
length. The technical reading layout and mobile rules retain their existing
widths. No text or image has been changed.

The central asset edition is `2026-11-13-wide-1`; both generated pages request
that edition so the updated stylesheet is fetched after publication.

## Verification

The existing headless checker passed for both pages at 1,440, 768, 390 and
320 pixels: links, images, fonts, overflow, tabs, mobile navigation, image
dialogs, focus, disclosures, no-JavaScript fallback and no unexpected requests.
All ten original image hashes match.

Additional homepage checks at 1,920, 2,560 and 3,840 pixels verify bounded side
margins and the alignment of header, hero, first section and footer. Captures at
2,560 and 3,840 pixels were inspected. These checks address the reported gap;
an overflow check alone did not detect that excessive whitespace.

Coordination and the deployed commit/build receipt are recorded in ORG-14829.
