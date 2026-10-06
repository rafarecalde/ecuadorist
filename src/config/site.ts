export const site = {
  name: "Ecuadorist",
  url: "https://ecuadorist.com",
  description:
    "A magazine-style English guide to Ecuador for travelers, digital nomads, and retirees.",
  locale: "en_US",
} as const;

export const sections = {
  visit: {
    title: "Visit",
    description:
      "Quito, Cuenca, the Galápagos, volcanoes, cloud forest, the Pacific coast, and the Amazon.",
    dek: "Ten places that explain the country.",
    hero: "quilotoa",
  },
  retire: {
    title: "Retire & Move",
    description:
      "Cost of living, cities, visas, healthcare, banking, and renting in Ecuador. An overview, not legal advice.",
    dek: "The practical life, written without the brochure.",
    hero: "cuenca",
  },
  eat: {
    title: "Eat & Stay",
    description:
      "Ecuadorian food, a short list of real Quito kitchens, and rooms worth knowing. No invented prices or hours.",
    dek: "The table, and a few rooms with a reputation.",
    hero: "llapingachos",
  },
  do: {
    title: "Do",
    description:
      "Hiking, wildlife, markets, and hot springs in Ecuador, from the Avenue of the Volcanoes to the Galápagos.",
    dek: "Walks, wildlife, markets, and hot water.",
    hero: "chimborazo",
  },
} as const;

export type SectionId = keyof typeof sections;

export function isSection(value: string): value is SectionId {
  return value in sections;
}
