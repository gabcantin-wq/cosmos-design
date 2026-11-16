# Focused Prism pages shared by URL

Gab requested two specialized client paths on 16 November 2026. They are not
linked from the main site or added to its sitemap. Each page presents one useful
outcome, three relevant capabilities and one concrete example; a visitor may
choose a deeper technical link at the end. Neither page names the source client,
its sites, equipment, vendors, addresses or internal files.

`/partages/data-center/` describes a limited pilot for video streams and
facility sensors, with context-aware analysis and responses bounded by client
rules. Private source material informed the setting and the need for a
read-only, staged first slice; it is not proof that Prism already processes
those video feeds. The copy explicitly makes connection and validation in the
client environment part of the first pilot.

`/partages/control-center/` presents a software development cycle: learn an
external system, agree on requirements, implement, test, validate, document and
retain useful lessons. It describes a supported work path and does not claim
that every cluster cycle currently runs unattended. The existing public
architecture page supplies the optional deeper link.

Both pages use the existing Prism identity and illustrations. They have a
minimal header and footer, separate CSS and `noindex, nofollow`. Anyone with a
URL can still visit them; they are not private or access-controlled pages.

Source data is `tools/prism/client-briefs.json`. `build_client_briefs.py` escapes
the copy, validates local image paths and required sections, and writes only
`ready` pages into `docs/partages/`. Drafts can be rendered with
`--include-drafts --output <external preview directory>`. The main site builder
and navigation are untouched. Further documentation may later be linked from
the optional technical block after its publication route and update process
are established; these pages do not claim a live documentation feed today.

The lane is `site/prism-client-briefs-20261116`, based on the public site commit
`d4810cc6e511c750e3fadc5cf3a8882a5f31c9a5`. The path scope and delivery
receipts belong in ORG-14829. A branch commit alone does not prove publication.
