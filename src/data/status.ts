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
    /** Nov 15, 2026 IG-EPN dailies: Reventador surface moderate, internal moderate, both unchanged; Sangay surface moderate, internal low, both unchanged. Cotopaxi monthly of Nov 11: surface low and internal low, both trends ascending. Smithsonian week of Nov 5–11 calls that week high at Reventador (Orange) and continuing at Sangay (Yellow). */
    label: "Reventador moderate; Sangay moderate; Cotopaxi low",
    href: "https://t.me/s/sismosvolcanesigepn",
  },
  longWeekend: {
    /** Kept: Friday Nov 20, 2026 has not passed. Decree 507 suspends the workday nationwide that day for the Loja arts festival (Nov 12–22). Airports, banks, and other essential services stay open. The next national rest after it is Christmas, Friday Dec 25, which already makes Fri–Sun; Quito’s local rest is Monday Dec 7. */
    dates: "Nov 20–22",
    name: "Loja arts",
  },
  currency: "US dollar",
} as const;
