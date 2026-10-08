/**
 * Central affiliate configuration.
 *
 * Tracked partner links are marked sponsored and must keep
 * rel="sponsored nofollow noopener".
 * Placeholder entries are plain links to a brand homepage. Never invent an
 * affiliate id, tracking code, or Booking.com search URL.
 * GetYourGuide uses location or search pages only, never guessed activity ids.
 * Viator links append pid, mcid, and medium. Quito is a destination page;
 * other places are searches. Never guess a Viator product code.
 * UIO Transfers is the site owner's airport company and is not a sponsored link.
 */

export type Affiliate = {
  id: string;
  name: string;
  href: string;
  /** Paid tracked link. Renders rel="sponsored nofollow noopener". */
  sponsored: boolean;
  /** True when href is a homepage fallback, not a tracked partner URL. */
  placeholder: boolean;
  category: string;
  blurb: string;
  /** Short label on the card. */
  label: string;
};

export const GETYOURGUIDE_PARTNER_ID = "XMZLWQZ";

/** Location or search path on getyourguide.com, with the partner query attached. */
export function getYourGuideUrl(
  path: string,
  query?: Readonly<Record<string, string>>,
): string {
  const slug = path.replace(/^\/+|\/+$/g, "");
  const url = new URL(`https://www.getyourguide.com/${slug}/`);
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      url.searchParams.set(key, value);
    }
  }
  url.searchParams.set("partner_id", GETYOURGUIDE_PARTNER_ID);
  url.searchParams.set("utm_medium", "online_publisher");
  return url.toString();
}

export const VIATOR_PID = "P00324546";
export const VIATOR_MCID = "42383";
export const VIATOR_MEDIUM = "link";

/** Destination path or searchResults/all, with Viator’s three tracking params. */
export function viatorUrl(path: string, query?: Readonly<Record<string, string>>): string {
  const slug = path.replace(/^\/+|\/+$/g, "");
  const url = new URL(`https://www.viator.com/${slug}`);
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      url.searchParams.set(key, value);
    }
  }
  url.searchParams.set("pid", VIATOR_PID);
  url.searchParams.set("mcid", VIATOR_MCID);
  url.searchParams.set("medium", VIATOR_MEDIUM);
  return url.toString();
}

export const affiliates = {
  airalo: {
    id: "airalo",
    name: "Airalo",
    href: "https://airalo.tpk.lu/wlqWEIpT",
    sponsored: true,
    placeholder: false,
    category: "Connectivity",
    label: "A partner",
    blurb: "An eSIM for Ecuador, ready before you land.",
  },
  car: {
    id: "car",
    name: "Economybookings",
    href: "https://economybookings.tpk.lu/SogVnqj0",
    sponsored: true,
    placeholder: false,
    category: "Driving",
    label: "A partner",
    blurb: "Compare a car for the highlands or the coast.",
  },
  klook: {
    id: "klook",
    name: "Klook",
    href: "https://klook.tpk.lu/W7nWujrL",
    sponsored: true,
    placeholder: false,
    category: "Days out",
    label: "A partner",
    blurb: "Tours and tickets across Ecuador.",
  },
  "klook-quito": {
    id: "klook-quito",
    name: "Klook",
    href: "https://klook.tpk.lu/5dU9ztBd",
    sponsored: true,
    placeholder: false,
    category: "Quito",
    label: "A partner",
    blurb: "Quito days, from the old town to the volcanoes.",
  },
  "klook-galapagos": {
    id: "klook-galapagos",
    name: "Klook",
    href: "https://klook.tpk.lu/orm6CUKt",
    sponsored: true,
    placeholder: false,
    category: "Galápagos",
    label: "A partner",
    blurb: "Galápagos day trips and island tours.",
  },
  "klook-otavalo": {
    id: "klook-otavalo",
    name: "Klook",
    href: "https://klook.tpk.lu/KDthU8eu",
    sponsored: true,
    placeholder: false,
    category: "Otavalo",
    label: "A partner",
    blurb: "Otavalo and the northern valley.",
  },
  "klook-cotopaxi": {
    id: "klook-cotopaxi",
    name: "Klook",
    href: "https://klook.tpk.lu/evdCqtdr",
    sponsored: true,
    placeholder: false,
    category: "Cotopaxi",
    label: "A partner",
    blurb: "Cotopaxi as a day from Quito, or something longer.",
  },
  uio: {
    id: "uio",
    name: "UIO Transfers",
    href: "https://uiotransfers.com",
    sponsored: false,
    placeholder: false,
    category: "Quito airport",
    label: "The owner’s company",
    blurb: "A private car from Mariscal Sucre Airport. Not a third-party ad.",
  },
  getyourguide: {
    id: "getyourguide",
    name: "GetYourGuide",
    href: getYourGuideUrl("ecuador-l169092"),
    sponsored: true,
    placeholder: false,
    category: "Days out",
    label: "A partner",
    blurb: "Guided days across Ecuador, when the trail wants a plan.",
  },
  "gyg-quito": {
    id: "gyg-quito",
    name: "GetYourGuide",
    href: getYourGuideUrl("quito-l2774"),
    sponsored: true,
    placeholder: false,
    category: "Quito",
    label: "A partner",
    blurb: "Quito city tours, from the old town outward.",
  },
  "gyg-mitad": {
    id: "gyg-mitad",
    name: "GetYourGuide",
    href: getYourGuideUrl("s", { q: "Mitad del Mundo" }),
    sponsored: true,
    placeholder: false,
    category: "Mitad del Mundo",
    label: "A partner",
    blurb: "The equator monument, as a short day from the city.",
  },
  "gyg-otavalo": {
    id: "gyg-otavalo",
    name: "GetYourGuide",
    href: getYourGuideUrl("otavalo-l2259"),
    sponsored: true,
    placeholder: false,
    category: "Otavalo",
    label: "A partner",
    blurb: "Otavalo, the market, and the lakes.",
  },
  "gyg-mindo": {
    id: "gyg-mindo",
    name: "GetYourGuide",
    href: getYourGuideUrl("mindo-valley-l129663"),
    sponsored: true,
    placeholder: false,
    category: "Mindo",
    label: "A partner",
    blurb: "A day in the Mindo cloud forest.",
  },
  "gyg-cotopaxi": {
    id: "gyg-cotopaxi",
    name: "GetYourGuide",
    href: getYourGuideUrl("cotopaxi-province-l143089"),
    sponsored: true,
    placeholder: false,
    category: "Cotopaxi",
    label: "A partner",
    blurb: "Cotopaxi from Quito, without driving yourself.",
  },
  "gyg-quilotoa": {
    id: "gyg-quilotoa",
    name: "GetYourGuide",
    href: getYourGuideUrl("s", { q: "Quilotoa" }),
    sponsored: true,
    placeholder: false,
    category: "Quilotoa",
    label: "A partner",
    blurb: "Quilotoa crater tours from the highlands.",
  },
  "gyg-banos": {
    id: "gyg-banos",
    name: "GetYourGuide",
    href: getYourGuideUrl("banos-de-agua-santa-l2262"),
    sponsored: true,
    placeholder: false,
    category: "Baños",
    label: "A partner",
    blurb: "Baños, the waterfalls, and a day from Quito.",
  },
  "gyg-cuenca": {
    id: "gyg-cuenca",
    name: "GetYourGuide",
    href: getYourGuideUrl("cuenca-ecuador-l368"),
    sponsored: true,
    placeholder: false,
    category: "Cuenca",
    label: "A partner",
    blurb: "Cuenca and the ruins nearby.",
  },
  "gyg-galapagos": {
    id: "gyg-galapagos",
    name: "GetYourGuide",
    href: getYourGuideUrl("galapagos-islands-l396"),
    sponsored: true,
    placeholder: false,
    category: "Galápagos",
    label: "A partner",
    blurb: "Galápagos day tours, once you are on the islands.",
  },
  "gyg-tena": {
    id: "gyg-tena",
    name: "GetYourGuide",
    href: getYourGuideUrl("tena-ecuador-l2688"),
    sponsored: true,
    placeholder: false,
    category: "Amazon",
    label: "A partner",
    blurb: "Shorter Amazon trips from Tena.",
  },
  "gyg-cuyabeno": {
    id: "gyg-cuyabeno",
    name: "GetYourGuide",
    href: getYourGuideUrl("nueva-loja-l5279"),
    sponsored: true,
    placeholder: false,
    category: "Cuyabeno",
    label: "A partner",
    blurb: "Cuyabeno, by way of Lago Agrio.",
  },
  viator: {
    id: "viator",
    name: "Viator",
    href: viatorUrl("searchResults/all", { text: "Ecuador" }),
    sponsored: true,
    placeholder: false,
    category: "Days out",
    label: "A partner",
    blurb: "Guided days across Ecuador, from another desk.",
  },
  "viator-quito": {
    id: "viator-quito",
    name: "Viator",
    href: viatorUrl("Quito/d4427-ttd"),
    sponsored: true,
    placeholder: false,
    category: "Quito",
    label: "A partner",
    blurb: "Quito tours, from the old town outward.",
  },
  "viator-mitad": {
    id: "viator-mitad",
    name: "Viator",
    href: viatorUrl("searchResults/all", { text: "Mitad del Mundo" }),
    sponsored: true,
    placeholder: false,
    category: "Mitad del Mundo",
    label: "A partner",
    blurb: "The equator monument, as a short day from the city.",
  },
  "viator-otavalo": {
    id: "viator-otavalo",
    name: "Viator",
    href: viatorUrl("searchResults/all", { text: "Otavalo" }),
    sponsored: true,
    placeholder: false,
    category: "Otavalo",
    label: "A partner",
    blurb: "Otavalo, the market, and the lakes.",
  },
  "viator-mindo": {
    id: "viator-mindo",
    name: "Viator",
    href: viatorUrl("searchResults/all", { text: "Mindo" }),
    sponsored: true,
    placeholder: false,
    category: "Mindo",
    label: "A partner",
    blurb: "A day in the Mindo cloud forest.",
  },
  "viator-cotopaxi": {
    id: "viator-cotopaxi",
    name: "Viator",
    href: viatorUrl("searchResults/all", { text: "Cotopaxi" }),
    sponsored: true,
    placeholder: false,
    category: "Cotopaxi",
    label: "A partner",
    blurb: "Cotopaxi from Quito, without driving yourself.",
  },
  "viator-quilotoa": {
    id: "viator-quilotoa",
    name: "Viator",
    href: viatorUrl("searchResults/all", { text: "Quilotoa" }),
    sponsored: true,
    placeholder: false,
    category: "Quilotoa",
    label: "A partner",
    blurb: "Quilotoa crater tours from the highlands.",
  },
  "viator-banos": {
    id: "viator-banos",
    name: "Viator",
    href: viatorUrl("searchResults/all", { text: "Banos" }),
    sponsored: true,
    placeholder: false,
    category: "Baños",
    label: "A partner",
    blurb: "Baños, the waterfalls, and a day from Quito.",
  },
  "viator-cuenca": {
    id: "viator-cuenca",
    name: "Viator",
    href: viatorUrl("searchResults/all", { text: "Cuenca" }),
    sponsored: true,
    placeholder: false,
    category: "Cuenca",
    label: "A partner",
    blurb: "Cuenca and the ruins nearby.",
  },
  "viator-galapagos": {
    id: "viator-galapagos",
    name: "Viator",
    href: viatorUrl("searchResults/all", { text: "Galapagos" }),
    sponsored: true,
    placeholder: false,
    category: "Galápagos",
    label: "A partner",
    blurb: "Galápagos day tours, once you are on the islands.",
  },
  "viator-tena": {
    id: "viator-tena",
    name: "Viator",
    href: viatorUrl("searchResults/all", { text: "Tena" }),
    sponsored: true,
    placeholder: false,
    category: "Amazon",
    label: "A partner",
    blurb: "Shorter Amazon trips from Tena.",
  },
  "viator-cuyabeno": {
    id: "viator-cuyabeno",
    name: "Viator",
    href: viatorUrl("searchResults/all", { text: "Cuyabeno" }),
    sponsored: true,
    placeholder: false,
    category: "Cuyabeno",
    label: "A partner",
    blurb: "Cuyabeno, by way of Lago Agrio.",
  },
  // TODO: replace href with a tracked affiliate URL to a specific property page.
  // Never use a Booking.com search URL.
  booking: {
    id: "booking",
    name: "Booking.com",
    href: "https://www.booking.com/",
    sponsored: false,
    placeholder: true,
    category: "Rooms",
    label: "A resource",
    blurb: "The brand homepage, for a first hotel search. Not a long-term lease.",
  },
  // TODO: replace href with a tracked affiliate URL. Do not invent an affiliate id.
  safetywing: {
    id: "safetywing",
    name: "SafetyWing",
    href: "https://safetywing.com/",
    sponsored: false,
    placeholder: true,
    category: "Insurance",
    label: "A resource",
    blurb: "Travel medical cover, often used by people on the move.",
  },
  // TODO: replace href with a tracked affiliate URL. Do not invent an affiliate id.
  wise: {
    id: "wise",
    name: "Wise",
    href: "https://wise.com/",
    sponsored: false,
    placeholder: true,
    category: "Money",
    label: "A resource",
    blurb: "A calmer way to move dollars. This is the company’s own site.",
  },
  // TODO: replace href with a tracked expat-health affiliate URL.
  // Homepage fallback only. Do not invent an affiliate id.
  health: {
    id: "health",
    name: "Cigna Global",
    href: "https://www.cignaglobal.com/",
    sponsored: false,
    placeholder: true,
    category: "Health cover",
    label: "A resource",
    blurb: "One international insurer’s own site. Compare more than one policy.",
  },
} as const satisfies Record<string, Affiliate>;

export type AffiliateId = keyof typeof affiliates;

export function isAffiliateId(value: string): value is AffiliateId {
  return value in affiliates;
}

export function getAffiliate(id: AffiliateId): Affiliate {
  return affiliates[id];
}

/** Affiliate (tracked) links only. Placeholders and UIO Transfers stay unsponsored. */
export function linkRel(link: Affiliate): "sponsored nofollow noopener" | "noopener" {
  return link.sponsored ? "sponsored nofollow noopener" : "noopener";
}
