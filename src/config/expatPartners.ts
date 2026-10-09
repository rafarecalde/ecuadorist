/**
 * Partner links for the retire section.
 *
 * `tracked: false` is the company’s own homepage: render rel="noopener"
 * and do not show an affiliate disclosure.
 * `tracked: true` is a paid partner link: render rel="sponsored noopener"
 * and show the disclosure line.
 * Switch a partner by changing `tracked` and `href`. Do not invent an id.
 *
 * SafetyWing forbids paid ads. These article links are allowed.
 */

export type ExpatPartner = {
  id: string;
  name: string;
  href: string;
  tracked: boolean;
  blurb: string;
};

export const expatPartners = {
  safetywing: {
    id: "safetywing",
    name: "SafetyWing",
    href: "https://safetywing.com/nomad-insurance?referenceID=26614149&utm_source=26614149&utm_medium=Ambassador",
    tracked: true,
    blurb: "Nomad Insurance, the travel medical plan. The benefits and the price are on this page.",
  },
  safetywingComplete: {
    id: "safetywingComplete",
    name: "SafetyWing Complete",
    href: "https://explore.safetywing.com/nomad-insurance-complete?selectedPlan=NOMAD_INSURANCE_COMPLETE&referenceID=26614149&utm_source=26614149&utm_medium=Ambassador",
    tracked: true,
    blurb: "Nomad Insurance Complete, for a long stay. The benefits and the price are on this page.",
  },
  genki: {
    id: "genki",
    name: "Genki",
    href: "https://genki.world/",
    tracked: false,
    blurb: "Monthly worldwide health cover. The contract length and the price are on Genki’s site.",
  },
  cignaGlobal: {
    id: "cignaGlobal",
    name: "Cigna Global",
    href: "https://www.cignaglobal.com/",
    tracked: false,
    blurb: "An international health insurer. Plans and prices stay on Cigna’s site.",
  },
  img: {
    id: "img",
    name: "IMG",
    href: "https://www.imglobal.com/",
    tracked: false,
    blurb: "International Medical Group. Plans and prices stay on IMG’s site.",
  },
  wise: {
    id: "wise",
    name: "Wise",
    href: "https://wise.com/",
    tracked: false,
    blurb: "Wise’s own site, including the page for sending dollars to Ecuador. The fee is shown before you pay.",
  },
  remitly: {
    id: "remitly",
    name: "Remitly",
    href: "https://www.remitly.com/",
    tracked: false,
    blurb: "Remitly’s own site. Ecuador delivery options and fees are on the transfer you build.",
  },
  revolut: {
    id: "revolut",
    name: "Revolut",
    href: "https://www.revolut.com/",
    tracked: false,
    blurb: "Revolut’s own site. Card and transfer fees are in Revolut’s schedule, not repeated here.",
  },
  travelingMailbox: {
    id: "travelingMailbox",
    name: "Traveling Mailbox",
    href: "https://travelingmailbox.com/",
    tracked: false,
    blurb: "A US mail service. What they scan, forward, and charge is on their site.",
  },
  ipostal1: {
    id: "ipostal1",
    name: "iPostal1",
    href: "https://www.ipostal1.com/",
    tracked: false,
    blurb: "A US virtual-mailbox service. Addresses and prices are on their site.",
  },
  anytimeMailbox: {
    id: "anytimeMailbox",
    name: "Anytime Mailbox",
    href: "https://www.anytimemailbox.com/",
    tracked: false,
    blurb: "A network of US mailboxes. Locations and prices are on their site.",
  },
  nordvpn: {
    id: "nordvpn",
    name: "NordVPN",
    href: "https://nordvpn.com/",
    tracked: false,
    blurb: "A consumer VPN. What it routes, and what it costs, is on Nord’s site.",
  },
  surfshark: {
    id: "surfshark",
    name: "Surfshark",
    href: "https://surfshark.com/",
    tracked: false,
    blurb: "A consumer VPN. Plans and prices are on Surfshark’s site.",
  },
} as const;

export type ExpatPartnerId = keyof typeof expatPartners;

export function isExpatPartner(value: string): value is ExpatPartnerId {
  return value in expatPartners;
}

export function getExpatPartner(id: ExpatPartnerId): ExpatPartner {
  return expatPartners[id];
}

/** Tracked retire-section links omit nofollow, per the partner rule for this section. */
export function expatRel(partner: Pick<ExpatPartner, "tracked">): "sponsored noopener" | "noopener" {
  return partner.tracked ? "sponsored noopener" : "noopener";
}
