import { viatorUrl } from "../config/affiliates";

export type WeekendItem = {
  headline: string;
  when: string;
  place: string;
  line: string;
  photo: string;
  /** Affiliate id from src/config/affiliates.ts */
  partner?: string;
  /** A tracked URL built with viatorUrl or getYourGuideUrl when no id exists yet. */
  partnerHref?: string;
  partnerLabel?: string;
  sourceName: string;
  sourceUrl: string;
};

export type Weekend = {
  id: string;
  range: string;
  name: string;
  items: WeekendItem[];
};

/**
 * One record per weekly issue. The homepage shows `currentWeekendId`.
 * Add a new key each week; do not rewrite an old one.
 */
export const weekends = {
  "2026-10-12": {
    id: "2026-10-12",
    range: "Oct 9–11",
    name: "Guayaquil Independence",
    items: [
      {
        headline: "The student parade",
        when: "Fri, Oct 9 · 8:30 a.m.",
        place: "Guayaquil",
        line: "From Parque La Victoria to the Malecón, for the city’s 206th year.",
        photo: "malecon",
        partnerHref: viatorUrl("searchResults/all", { text: "Guayaquil" }),
        partnerLabel: "Guayaquil on Viator",
        sourceName: "Expreso",
        sourceUrl:
          "https://www.expreso.ec/guayaquil/fiestas-guayaquil-son-eventos-gratuitos-5-11-octubre-298130.html",
      },
      {
        headline: "Capilla del Rosario reopens",
        when: "Sat, Oct 10",
        place: "Santo Domingo, Quito",
        line: "The murals are back after three months of work.",
        photo: "santo-domingo",
        partner: "gyg-quito",
        sourceName: "Expreso",
        sourceUrl:
          "https://www.expreso.ec/quito/capilla-rosario-quito-reabre-puertas-restaurar-murales-patrimoniales-298568.html",
      },
      {
        headline: "Rotofest",
        when: "Sat, Oct 10 · 1 p.m.–midnight",
        place: "Puente Roto, Cuenca",
        line: "Free, on the broken bridge above the Tomebamba.",
        photo: "puente-roto",
        partner: "gyg-cuenca",
        sourceName: "Rio Times",
        sourceUrl: "https://www.riotimesonline.com/what-to-do-in-cuenca-in-october-2026/",
      },
      {
        headline: "Escenarios del Mundo",
        when: "Fri–Sun evenings · through Oct 14",
        place: "Teatro Pumapungo, Cuenca",
        line: "The theatre festival is in its last days.",
        photo: "cuenca",
        partner: "viator-cuenca",
        sourceName: "Rio Times",
        sourceUrl: "https://www.riotimesonline.com/what-to-do-in-cuenca-in-october-2026/",
      },
      {
        headline: "Cotopaxi for the day",
        when: "Sat or Sun · a full day",
        place: "From Quito",
        line: "Laguna Limpiopungo when the cloud lifts. Not a summit.",
        photo: "cotopaxi",
        partner: "gyg-cotopaxi",
        sourceName: "Ecuadorist",
        sourceUrl: "/visit/cotopaxi/",
      },
    ],
  },
} as const satisfies Record<string, Weekend>;

export const currentWeekendId = "2026-10-12";

export function weekendFor(id: string): Weekend | undefined {
  return weekends[id as keyof typeof weekends];
}

export function currentWeekend(): Weekend {
  const weekend = weekendFor(currentWeekendId);
  if (!weekend) throw new Error(`Missing weekend ${currentWeekendId}`);
  return weekend;
}
