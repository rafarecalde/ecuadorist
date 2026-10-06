/**
 * Central affiliate configuration.
 *
 * Tracked partner links are marked sponsored and must keep rel="sponsored noopener".
 * Placeholder entries are plain links to a brand homepage. Never invent an
 * affiliate id, tracking code, or Booking.com search URL.
 * UIO Transfers is the site owner's airport company and is not a sponsored link.
 */

export type Affiliate = {
  id: string;
  name: string;
  href: string;
  /** Paid tracked link. Renders rel="sponsored noopener". */
  sponsored: boolean;
  /** True when href is a homepage fallback, not a tracked partner URL. */
  placeholder: boolean;
  category: string;
  blurb: string;
  /** Short label on the card. */
  label: string;
};

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
  // TODO: replace href with a tracked affiliate URL. Do not invent an affiliate id.
  getyourguide: {
    id: "getyourguide",
    name: "GetYourGuide",
    href: "https://www.getyourguide.com/",
    sponsored: false,
    placeholder: true,
    category: "Days out",
    label: "A resource",
    blurb: "Guided days, on the company’s own site.",
  },
  // TODO: replace href with a tracked affiliate URL. Do not invent an affiliate id.
  viator: {
    id: "viator",
    name: "Viator",
    href: "https://www.viator.com/",
    sponsored: false,
    placeholder: true,
    category: "Days out",
    label: "A resource",
    blurb: "Another place to look for a guide.",
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
export function linkRel(link: Affiliate): "sponsored noopener" | "noopener" {
  return link.sponsored ? "sponsored noopener" : "noopener";
}
