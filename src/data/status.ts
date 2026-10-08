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
    asOf: "October 14, 2025",
    href: "https://travel.state.gov/en/international-travel/travel-advisories/ecuador.html",
  },
  volcanoes: {
    label: "Sangay and Reventador active, remote from main routes",
    href: "https://volcano.si.edu/reports_weekly.cfm",
  },
  longWeekend: {
    dates: "Oct 9–11",
    name: "Guayaquil Independence",
  },
  currency: "US dollar",
} as const;
