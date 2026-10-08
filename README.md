# Ecuadorist

A magazine-style English guide to Ecuador for travelers, digital nomads, and retirees. Static site built with [Astro](https://astro.build/) and published to GitHub Pages at [ecuadorist.com](https://ecuadorist.com).

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## What’s in the repo

- Visit, Retire & Move, Eat & Stay, and Do, with a shared article template (table of contents, related chapters, Open Graph, schema.org `Article`)
- Wikimedia Commons photographs, credited on `/credits/`
- Affiliate links in `src/config/affiliates.ts`
- `public/CNAME` set to `ecuadorist.com`

Partner links use `rel="sponsored nofollow noopener"`. GetYourGuide links use partner ID `XMZLWQZ` on location or search pages, never guessed activity IDs, and the site does not load a GetYourGuide widget. Viator links append `pid=P00324546`, `mcid=42383`, and `medium=link`. Quito uses the destination page; other places use a search. Placeholder brands (Booking.com, SafetyWing, Wise, and an expat health insurer) point at the company’s own homepage until a real tracked URL is added. Do not invent affiliate IDs. Booking.com must stay a specific property page, never a search URL. UIO Transfers is the owner’s airport company and is not a sponsored link.

The visa chapter is an overview, not legal advice.

## GitHub Pages, after this is merged

The workflow in `.github/workflows/deploy.yml` runs only on a push to `main`. It does not deploy from a pull request.

After merge, in the repository settings:

1. **Settings → Pages → Build and deployment → Source:** GitHub Actions.
2. Confirm the custom domain is `ecuadorist.com` (the `CNAME` file in the site root sets this).
3. Enforce HTTPS once the certificate has been issued.
4. If the first deploy ran before the source was switched to GitHub Actions, re-run the “Deploy to GitHub Pages” workflow.

DNS at the registrar should already point the apex domain at GitHub Pages. If the domain does not resolve after the settings above, confirm the records against GitHub’s current Pages instructions.
