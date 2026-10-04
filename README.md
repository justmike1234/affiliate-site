# affiliate-site

The niche site's source and publishing machine.

- **Stack:** Astro (static output), deployed on push to `main`.
- **Where articles go:** `src/content/articles/` — see the publishing guide
  document on JAN-4 for every front-matter field and the affiliate component.
- **Configuration:** `src/config/site.ts` (brand, disclosure wording,
  affiliate programs) and build variables (`PUBLIC_SITE_ORIGIN`,
  `PUBLIC_BASE_PATH`, `PUBLIC_PLAUSIBLE_DOMAIN`, `PUBLIC_PLAUSIBLE_SRC`).
- **Deploy targets:** GitHub Pages is live now as the interim host; Cloudflare
  Pages activates automatically once the owner-gated secrets are configured
  (exact steps in the JAN-4 owner handoff document).
- **No secrets in the repo.** Ever. Secrets live in GitHub secrets or the
  host's secret store.

## Commands

```
npm install        # once
npm run dev        # local dev server
npm run build      # production build (CI runs this; failures are loud)
npm run preview    # serve the production build locally
```

## Repo map

```
astro.config.mjs          deploy origin/base path (env-driven)
src/config/site.ts        brand + affiliate program config (single source)
src/lib/urls.ts           canonical URL helpers
src/layouts/              page + article shells (head, schema, disclosure)
src/components/           AffiliateLink (the only way to link affiliates)
src/content/articles/     every article lives here
src/pages/                home, about, article route, sitemap.xml, robots.txt
.github/workflows/        CI (PRs/branches) + deploy (push to main)
wrangler.toml             Cloudflare Pages project definition
```
