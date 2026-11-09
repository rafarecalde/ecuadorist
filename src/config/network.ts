import type { OwnerNetworkId } from "./affiliates";

/**
 * Where the richer “From our network” cards appear.
 * The sitewide strip in the footer is separate and always shows both.
 * Article markdown is unchanged; this map only chooses the card.
 */

const uioArticles = [
  "quito-airport-arrival",
  "quito",
  "quito-altitude-sickness",
  "quito-neighborhoods",
  "quito-restaurants",
  "eating-in-quito",
  "ten-days-in-ecuador",
  "two-weeks-ecuador-galapagos",
  "ecuador-entry-requirements",
  "where-to-stay",
] as const;

const farmArticles = [
  "ecuadorian-food",
  "markets",
  "eating-in-quito",
  "quito-restaurants",
  "cuenca-restaurants",
  "cumbaya-restaurants",
  "guayaquil-restaurants",
  "cost-of-living",
  "best-cities",
] as const;

/** Plan & book pages where an airport car is the subject, not a one-line aside. */
const uioBookPages = ["quito-airport-car-rental", "quito-city-and-mitad-del-mundo-tours"] as const;

function listed(ids: readonly string[], id: string): boolean {
  return ids.includes(id);
}

/** Food and retire chapters lead with the farm card. Arrival chapters lead with the airport card. */
export function networkForArticle(id: string): OwnerNetworkId[] {
  const cards: OwnerNetworkId[] = [];
  const farm = listed(farmArticles, id);
  const uio = listed(uioArticles, id);
  if (farm && uio) {
    cards.push("ecuafarmex", "uio");
    return cards;
  }
  if (uio) cards.push("uio");
  if (farm) cards.push("ecuafarmex");
  return cards;
}

export function bookShowsUio(slug: string): boolean {
  return listed(uioBookPages, slug);
}
