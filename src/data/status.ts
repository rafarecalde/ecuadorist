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
    /** Nov 22, 2026 IG-EPN dailies: Reventador surface moderate, internal moderate, both unchanged; Sangay surface moderate, internal low, both unchanged. Cotopaxi monthly of Nov 11 still the latest: surface low and internal low, both trends ascending. Smithsonian week of Nov 12–18 did not list Ecuador. */
    label: "Reventador moderate; Sangay moderate; Cotopaxi low",
    href: "https://volcano.si.edu/reports_weekly.cfm",
  },
  longWeekend: {
    /** The Nov 20–22 bridge has passed. Next rest is local: Monday Dec 7 in the Metropolitan District of Quito only, moved from founding day Sunday Dec 6 (El Universo, Nov 20, 2026, citing the holiday law). The next national rest is Christmas, Friday Dec 25 through Sunday Dec 27. */
    dates: "Dec 5–7",
    name: "Quito only",
  },
  currency: "US dollar",
} as const;
