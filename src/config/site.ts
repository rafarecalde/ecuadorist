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
    dek: "The places, and the practical chapters beside them.",
    hero: "quilotoa",
  },
  retire: {
    title: "Retiring in Ecuador: the complete 2026 guide",
    description:
      "Retiring in Ecuador: the complete 2026 guide for US retirees and remote workers. Health cover, money, banking, mail, a US phone number, a VPN, and the cost of living in Quito and Cuenca. An overview, not legal advice.",
    dek: "Ten chapters, and the official pages that outrank them.",
    hero: "cuenca",
  },
  eat: {
    title: "Eat & Stay",
    description:
      "Ecuadorian food, restaurant guides for Quito, Cuenca, Guayaquil, and Baños, and rooms worth knowing.",
    dek: "The table, four cities, and a few rooms with a reputation.",
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
