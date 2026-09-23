# Suchi’s Deals — Amazon Associates content site

Static multi-page site for **Suchi Hilmim** / **Suchi’s Deals** (`suchisdeals`), built to present original editorial roundups plus clear FTC and Amazon Associates disclosures.

## Amazon Associates store ID

| Setting | Value |
|--------|--------|
| **Associates tracking / store ID** | **`suchisdeals-20`** |
| Product link shape | `https://www.amazon.com/dp/ASIN/?tag=suchisdeals-20` |
| Featured Prime promo short link | `https://amzn.to/46WvQFM` (tracking already embedded; do not append another tag) |

Change the tag in one place for JS helpers: `js/config.js` → `associateTag`.  
Also update HTML `?tag=…` attributes, `<meta name="associate-tag">`, and `data-associate-tag` on `<body>` if you ever switch IDs.

## Preview locally (no npm install required)

```bash
cd /workspace/suchis-deals-affiliate-site
```

**Option A — open files directly**

- Open `index.html` in a browser (double-click or File → Open).  
- Note: some browsers restrict `file://` fonts; a local server is nicer.

**Option B — Python (usually preinstalled)**

```bash
python3 -m http.server 8080
```

Visit `http://localhost:8080`

**Option C — npx serve (optional; needs network once)**

```bash
npx --yes serve -p 8080
```

## Deploy (one-liners / quick paths)

### GitHub Pages

1. Create a repo and push this folder to the root (or `/docs`).
2. Repo → Settings → Pages → Deploy from branch `main` / root (or `docs`).
3. Site URL will be `https://<user>.github.io/<repo>/`.

```bash
git init
git add .
git commit -m "Add Suchi's Deals affiliate site"
git branch -M main
git remote add origin git@github.com:YOUR_USER/YOUR_REPO.git
git push -u origin main
```

### Netlify

```bash
npx --yes netlify-cli deploy --dir=. --prod
```

Or drag-and-drop this folder in the Netlify UI (Publish directory = site root; no build command).

### Cloudflare Pages

```bash
npx --yes wrangler pages deploy . --project-name=suchis-deals
```

Or connect the Git repo in Cloudflare Pages with **build command empty** and **output directory** `/`.

## Site map

| Page | Path |
|------|------|
| Home | `index.html` |
| Prime young-adults offer | `prime-offer.html` |
| Kitchen roundup | `deals/kitchen.html` |
| Home roundup | `deals/home.html` |
| Tech roundup | `deals/tech.html` |
| About | `about.html` |
| Affiliate Disclosure | `disclosure.html` |
| Privacy Policy | `privacy.html` |
| Contact | `contact.html` |

## What to customize before submitting to Amazon

1. **Replace placeholder ASINs** (see table below) with real product ASINs from Amazon Associates SiteStripe / Product Linker. Keep `?tag=suchisdeals-20`.
2. **Contact** — `suchihilmin@gmail.com` / `929-760-4710` (set in `contact.html` and `js/config.js`).
3. **Prime offer copy** — eligibility and pricing change; keep “terms apply / not a guarantee” language; confirm `https://amzn.to/46WvQFM` still resolves to your current approved offer.
4. **Expand original content** — Amazon expects substantive, unique pages (not thin link lists). Add more guides in your own voice as needed.
5. **Host publicly** over HTTPS and submit that URL in Associates central.

### Placeholder ASINs to replace

| Label | Placeholder ASIN | Used on |
|-------|------------------|---------|
| Cast-iron skillet | `B00006JSUA` | Home featured + Kitchen *(example-shaped; verify live)* |
| Chef’s knife | `B07KNIFEK1` | Kitchen |
| Electric kettle | `B08KETTLE2` | Kitchen |
| Glass storage | `B09GLASS03` | Kitchen |
| Storage bins | `B08XYZHOME1` | Home featured + Home |
| Stick vacuum | `B09VACUUM2` | Home |
| Weighted blanket | `B07WEIGHT3` | Home |
| Drying rack | `B08DRYRK04` | Home |
| USB-C hub | `B09TECHHUB1` | Home featured + Tech |
| Headphones | `B08HEADPH2` | Tech |
| GaN charger | `B09GANCHRG3` | Tech |
| USB-C cable | `B07USBCBL4` | Tech |

Several IDs are intentionally fake placeholders so you do not ship wrong products — swap them before relying on outbound traffic.

## Amazon Associates content reminders (high level)

- Publish **original** content; avoid scraping Amazon copy or building a bare link farm.
- Keep **disclosures** visible (site footer + dedicated Disclosure page). FTC: material connections must be clear.
- Do **not** imply you are Amazon or that Amazon endorses the site.
- Do **not** make misleading claims (fake “verified” personal tests, guaranteed savings, or universal eligibility for Prime promos).
- Prime young-adult / student offers: state **eligibility required**, **terms apply**, and that memberships often **auto-renew** after a promo — send users to Amazon for live terms.
- Follow the current [Amazon Associates Operating Agreement](https://affiliate-program.amazon.com/) and Program Policies for your locale.

## Stack

HTML + CSS + a little JS only. No build step. Fonts load from Google Fonts (optional to self-host later).

## License / ownership

Site content prepared for Suchi Hilmim. Amazon trademarks belong to Amazon.com, Inc. or its affiliates.
