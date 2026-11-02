/**
 * Know-before-you-go facts that change by hand.
 * Quito’s temperature is not here: the status bar fetches it in the browser.
 * Update this file with each weekly issue. See docs/weekly-roundup.md.
 */

export const travelStatus = {
  advisory: {
    level: "Level 2",
    label: "Exercise increased caution",
    /** Date printed on the State Department page, not a guessed refresh. */
    asOf: "August 18, 2026",
    href: "https://travel.state.gov/en/international-travel/travel-advisories/ecuador.html",
  },
  volcanoes: {
    /** Nov 1, 2026 IG-EPN dailies for Reventador and Sangay; Cotopaxi from the Oct 21 field report. The Smithsonian weekly was stale. */
    label: "Reventador high, orange alert; Sangay moderate; Cotopaxi low",
    href: "https://t.me/s/sismosvolcanesigepn",
  },
  longWeekend: {
    dates: "Dec 25–27",
    name: "Christmas",
  },
  currency: "US dollar",
} as const;
