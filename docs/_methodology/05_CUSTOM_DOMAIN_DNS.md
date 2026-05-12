# Custom Domain & DNS

## Current production (since 2026-05-11)

| Layer | Value | Notes |
|---|---|---|
| Custom domain | **parti-orange.com** | Live, HTTP working ✅. HTTPS via Let's Encrypt (cocher Enforce HTTPS dans Pages settings une fois le cert provisionné) |
| Registrar | Squarespace (ex-Google Domains) | Accès admin direct par l'utilisateur |
| Nameservers | `ns-cloud-e1..e4.googledomains.com` | DNS hébergé Google Cloud DNS / pont Squarespace |
| A records (apex) | `185.199.108.153`, `.109.153`, `.110.153`, `.111.153` | GitHub Pages |
| CNAME `www` | `gabcantin-wq.github.io.` | Redirige www → apex |
| MX | `smtp.google.com` (priority 1) | Google Workspace email — NE PAS TOUCHER |
| TXT (DKIM) | `google._domainkey` | Google Workspace — NE PAS TOUCHER |
| TXT (SPF) | `v=spf1 include:_spf.google.com ~all` | Google Workspace — NE PAS TOUCHER |
| CNAME `_domainconnect` | `_domainconnect.domains.squarespace.com` | Inoffensif, laisser tel quel |

Le fichier `docs/CNAME` du repo contient `parti-orange.com` — c'est ce qui dit à GitHub Pages de servir sur ce domaine.

**Éditer les DNS :** Squarespace → Domains → parti-orange.com → DNS Settings → section « Enregistrements personnalisés ». La section « Enregistrements Google » est réservée à l'email Workspace — ne pas y mettre les records GitHub même si le nom est tentant.

## qubit.coop — Plan suspendu

Le domaine `qubit.coop` (registré chez 101domain.com, DNS chez Wix `ns12/ns13.wixdns.net`) était la cible initiale du custom domain. Il n'est **pas en usage actuellement** car l'utilisateur a opté pour `parti-orange.com` à la place (DNS Google déjà en place, accès admin direct, pas besoin de l'intervention de Bénoit).

Le plan de migration `qubit.coop` ci-dessous est conservé en cas de changement de priorité.

---

## Plan original qubit.coop (référence)

### Status snapshot (2026-05-08)

| Layer | Where | Notes |
|---|---|---|
| Registrar | 101domain.com | Bénoit has the credentials, not Gab |
| Nameservers (NS records) | `ns12.wixdns.net`, `ns13.wixdns.net` | Wix is the DNS host |
| A records (apex) | `185.230.63.107`, `185.230.63.171`, `185.230.63.186` (Wix) | Site disconnected — visitors get a Wix "domain not connected" 404 |
| MX | `qubit-coop.mail.protection.outlook.com` | **Office 365** — emails @qubit.coop |
| TXT (SPF) | `v=spf1 include:spf.protection.outlook.com -all` | Office 365 |
| CNAME `www` | `cdn1.wixdns.net` | Wix CDN |
| CNAME `autodiscover` | `autodiscover.outlook.com` | Office 365 |
| CNAME `enterpriseregistration`, `enterpriseenrollment` | Microsoft (Intune / Entra ID) | Office 365 / device management |
| Expiration | 2029-07-05 | No urgency |
| Status | `client transfer prohibited` | Standard transfer-lock — normal |

The domain is **not at risk** of being lost: it lives at 101domain regardless of the Wix subscription state.
The Wix DNS continues to serve records as long as the Wix account exists, even after the site has been disconnected.

## Why the site is currently 404 on qubit.coop

The user disconnected the domain from the Wix site (panel: domain settings, not subscription cancellation). Wix DNS still answers; A records still point to Wix IPs; but those IPs no longer have a site bound to them. Hence Wix's generic "Looks like this domain isn't connected to a website yet" page.

## Two migration options

### Option A — Move nameservers off Wix (clean, complete)

1. Bénoit logs into Wix DNS Manager, **exports the full zone** (including any DKIM, DMARC, MS=verification TXT not visible publicly).
2. Bénoit logs into 101domain, opens DNS Manager / Zone Editor for `qubit.coop`, **recreates every record** identically (MX, TXT, all CNAMEs, etc.) EXCEPT the apex A and `www`:
   - apex A → 4 records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (GitHub Pages)
   - CNAME `www` → `gabcantin-wq.github.io`
3. Bénoit changes nameservers at 101domain from `ns12/ns13.wixdns.net` to 101domain's own NS (will be shown in their panel).
4. DNS propagation: 15 minutes to 24h.
5. Verify: `qubit.coop` loads the site; outgoing/incoming emails to a `@qubit.coop` address still work.
6. Re-add `qubit.coop` as Custom domain in GitHub Pages settings.
7. Once HTTPS certificate is provisioned by GitHub (~1h), tick **Enforce HTTPS**.
8. Wix can then be cancelled fully.

**Pros**: Wix exits the picture completely.
**Cons**: requires careful zone reproduction; missing one record breaks Office 365.

### Option B — Keep Wix as DNS host, edit only web records

In the Wix DNS Manager:
1. Delete the apex A records (`185.230.63.107`, `.171`, `.186`).
2. Add 4 new apex A records for GitHub Pages (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`).
3. Modify the CNAME `www` from `cdn1.wixdns.net` → `gabcantin-wq.github.io`.
4. Do NOT touch any other record (MX, TXT, autodiscover, enterprise*, DKIM, DMARC, etc.).

**Pros**: 2-minute change, zero risk to Office 365.
**Cons**: Wix DNS remains in the chain; if the Wix account is closed for any reason later, DNS dies.

The user (2026-05-07 evening) defers the choice to Bénoit. Once chosen and applied, follow steps 4–8 of Option A for the GitHub side.

## Re-enabling custom domain in GitHub Pages (post-DNS)

Once Bénoit has applied either option:
1. Verify DNS resolution: `Resolve-DnsName qubit.coop -Type A` should return the 4 GitHub Pages IPs.
2. https://github.com/gabcantin-wq/cosmos-design/settings/pages → Custom domain → `qubit.coop` → Save.
3. GitHub creates the `CNAME` file automatically and starts certificate provisioning.
4. Wait ~10 min, refresh, then tick **Enforce HTTPS**.

If at step 2 the DNS check fails, wait longer and retry — propagation is the typical culprit.

## Verifying nothing broke

After DNS changes, confirm:
- `https://qubit.coop` loads the new site (test in private/incognito to bypass cache).
- Send a test email FROM an external address (e.g., Gmail) TO an `@qubit.coop` address — should arrive normally.
- Send a test email FROM the `@qubit.coop` address TO Gmail — should arrive normally.
- Outlook / Teams clients on `@qubit.coop` connect without errors (autodiscover working).
