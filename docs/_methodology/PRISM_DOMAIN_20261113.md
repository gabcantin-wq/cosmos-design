# Prism Intelligence domain migration

Status: prepared; DNS configuration and production cutover pending.

Gab's instruction, 13 November 2026: use the newly purchased
**prismintelligence.ai** domain for the cluster's public site, already presented
as Prism Intelligence. The company and brand are existing content; this change
only migrates the address. Coordination: ORG-14829.

## Source and scope

- Hosting: GitHub Pages, `gabcantin-wq/cosmos-design`, `main` / `docs`.
- Base: `61490165091403e36587ec53d7610bf4b63d96cb`.
- Branch: `site/prism-domain-20261113`.
- Updated: `docs/CNAME`, the central brand URL, current page metadata and links,
  text-companion URLs, robots, sitemap and maintenance instructions.
- Templates produce the two Prism pages. Layout, scripts, styles, images and
  the scientific corpus are unchanged. Historical methodology references keep
  the domain used at the time.

The existing GitHub credential was checked through the API and has repository
administration permission. No registrar password is stored in this repository
or required in the conversation.

## Observations before cutover

- `https://parti-orange.com/` returns the current Prism presentation.
- GitHub Pages reports `built`, custom domain `parti-orange.com`, `main/docs`.
- The old site's certificate is approved; HTTPS enforcement is currently off.
- The new domain did not resolve in the initial workstation DNS query. This is
  a bounded observation, not a verdict about the completed domain purchase.
- A subsequent public Google DNS query returned `ns93.worldnic.com` and
  `ns94.worldnic.com`, with apex A `208.91.197.27` (registrar parking), TTL 300.
  No `www` CNAME was returned. The registration is therefore visible publicly;
  the website records still need replacing. The initial workstation result
  does not describe the current public DNS state.

## Candidate verification

The existing static checker passed for both Prism pages: local links and anchors,
unique identifiers, and the ten original image hashes. The CNAME, central brand
URL, canonical links, Open Graph page/image URLs, robots and XML sitemap were
checked together against `https://prismintelligence.ai`. The sitemap includes
the home and architecture pages. `git diff --check` passed. No layout, script or
style changed, so no new graphical-browser session was needed for this migration.

## Activation

1. Confirm the new domain is active and its DNS zone is editable at Domain.com.
   Prepare the four apex A records and `www` CNAME in
   [the DNS guide](05_CUSTOM_DOMAIN_DNS.md). Preserve unrelated records.
2. Arrange the old-domain redirect separately. Its DNS is currently managed at
   Squarespace, according to the existing deployment record. GitHub Pages does
   not automatically redirect a second, unrelated former custom domain when
   this repository switches to the new one. Keep the old route available until
   the cutover is coordinated; preserve Google Workspace records.
3. Recheck the remote `main` SHA and the candidate branch. Integrate the verified
   source by a normal fast-forward or reviewed merge, without force-push.
4. Bind `prismintelligence.ai` in this repository's GitHub Pages settings, then
   save the prepared DNS records. GitHub recommends binding the custom domain
   before directing DNS traffic to Pages. Account-level domain verification
   with GitHub's generated TXT challenge is recommended when available.
5. Read the actual Pages build SHA and the public A/CNAME records. Wait for the
   managed certificate to become approved, then enable HTTPS enforcement.
6. Verify both apex and `www`, the home and architecture pages, the image and
   stylesheet URLs, the canonical/OG URLs, robots and sitemap over HTTPS.
   Verify the former domain's redirect independently; record any missing step.

The initial checkpoint is deliberately a branch publication: it does not change
the live GitHub Pages domain or registrar DNS. A prepared file is not evidence of
an activated domain, redirect or certificate.

## Recovery

If a coordinated cutover fails, restore the old custom-domain setting and
revert the migration commit on `main` through a new commit. The old-domain DNS
must remain available for that recovery. Keep the candidate branch and its
verification results; do not force-reset shared history.

## References

- [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Network Solutions DNS management](https://www.networksolutions.com/help/article/manage-dns-adns-records)
- [Existing Prism edition](PRISM_REFONTE_20261112.md)
