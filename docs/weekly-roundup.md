# Weekly roundup

<!-- A push to main publishes the site through GitHub Pages. -->

The living layer of the site is three files plus one new issue. A Monday update should take a few minutes.

## 1. New issue

Create `src/content/news/YYYY-MM-DD.md`. The date is the Monday of the issue, and it becomes the URL `/this-week/YYYY-MM-DD/`.

Front matter:

- `title`, `description`, `dek`, `date` (quoted, `"YYYY-MM-DD"`, so it stays a string), `hero` (a photo id from `src/lib/photos.ts`)
- `items`: 5 to 7 objects. Each needs `headline`, `photo`, `text` (two original sentences, never copied), `take` (one line), `sources` (name + url), optional `guide` (`href`, `label`), optional `partners` (ids from `src/config/affiliates.ts`)

Open every source URL before you keep it. If it does not load, drop the item. Do not use photographs from news outlets. New photos go in `src/assets/photos/`, `src/data/photo-credits.json`, and `src/lib/photos.ts` (Commons CC BY, CC BY-SA, or CC0, or Unsplash/Pexels). They then appear on `/credits/`.

Partner links must use those affiliate ids, or `viatorUrl` / `getYourGuideUrl` in `src/data/weekend.ts`. UIO Transfers stays unsponsored.

## 2. This weekend

Edit `src/data/weekend.ts`.

- Add a new key equal to the issue date. Do not rewrite an older key: the issue page reads its own weekend from that record.
- Set `currentWeekendId` to the new key. The homepage uses only that.
- 3 to 5 items. Each has `when` (day and time), `place`, `line` (one sentence), `photo`, a source, and a tracked tour link where a tour is the natural next step (`partner` id, or `partnerHref` + `partnerLabel` from the helpers).

The first issue’s weekend is October 9–11, 2026.

## 3. Status bar

Edit `src/data/status.ts` only.

- `advisory`: level, label, the date printed on the State Department page, and the Ecuador advisory URL.
- `volcanoes`: one calm line, plus the Smithsonian weekly report.
- `longWeekend`: the next bridge, not the one that just ended.
- `currency`: leave it as the US dollar unless that changes.

Quito’s temperature is not in this file. The bar fetches Open-Meteo in the browser and shows “Quito weather unavailable” if that fails.

## 4. Festivals

Dates live in `src/data/events.ts`. Change `when`, `nextStart`, and `dateNote` once a year. Do not put the year in the URL. Movable feasts are counted from Easter (2027 Easter Sunday is March 28: Good Friday March 26, Carnaval Monday–Tuesday February 8–9).

## 5. Check

`npm run build`. Confirm `/`, `/this-week/`, the new issue, `/events/`, and one festival page. The sitemap picks up new routes on its own.
