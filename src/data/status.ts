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
    /** Nov 8, 2026 IG-EPN dailies: Reventador surface moderate (high on the Nov 5 daily), internal moderate; Sangay surface moderate, internal low. Cotopaxi from the Oct 21 field report. The Smithsonian week of Oct 29–Nov 4 did not list Ecuador. */
    label: "Reventador moderate; Sangay moderate; Cotopaxi low",
    href: "https://t.me/s/sismosvolcanesigepn",
  },
  longWeekend: {
    /** Decree 507 suspends the workday nationwide on Friday, Nov 20, 2026, for the Loja arts festival (Nov 12–22). Airports, banks, and other essential services stay open. */
    dates: "Nov 20–22",
    name: "Loja arts",
  },
  currency: "US dollar",
} as const;
