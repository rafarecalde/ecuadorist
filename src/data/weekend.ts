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
  "2026-10-17": {
    id: "2026-10-17",
    range: "Oct 17–18",
    name: "Concert weekend",
    items: [
      {
        headline: "Los Mirlos",
        when: "Sat, Oct 17 · 8:00 p.m.",
        place: "BASE Distrito Creativo, Quito",
        line: "Amazonian cumbia, tickets from about $45.",
        photo: "amazonas-mariscal",
        partner: "gyg-quito",
        sourceName: "Buen Plan",
        sourceUrl: "https://www.buenplan.com.ec/event/los-mirlos-2026-quito",
      },
      {
        headline: "Una Noche de Leyendas",
        when: "Sat, Oct 17 · 7:00 p.m.",
        place: "Teatro Scala, Quito",
        line: "Martín Torres and Larry Salgado’s big band play Sinatra-era standards from $30, and again Sunday at 6:00 p.m.",
        photo: "quito-night",
        partner: "gyg-quito",
        sourceName: "El Teatro",
        sourceUrl:
          "https://tickets.elteatro.com.ec/event/una-noche-de-leyendas-sabado-17-octubre-19-00-smiw5d",
      },
      {
        headline: "Sucre Viajero",
        when: "Sun, Oct 18 · from 5:00 p.m.",
        place: "Plaza Foch, Quito",
        line: "Free outdoor music and theatre from Fundación Teatro Nacional Sucre.",
        photo: "plaza-foch",
        partner: "gyg-quito",
        sourceName: "Clapzy",
        sourceUrl: "https://www.clapzy.app/event/sucre-viajero-2026-plaza-foch",
      },
      {
        headline: "Pasillo Sinfónico",
        when: "Sun, Oct 18 · 5:00 p.m.",
        place: "Teatro San Gabriel, Quito",
        line: "Filarmónica Ecuador Sinfónico plays pasillo, tickets about $25–35.",
        photo: "quito-basilica",
        partner: "gyg-quito",
        sourceName: "Teatro San Gabriel",
        sourceUrl:
          "https://tickets.teatrosangabriel.com/tc-events/pasillo-sinfonico-18-de-octubre-17h00",
      },
      {
        headline: "ROCKLATAM",
        when: "Sat, Oct 17 · 8:00 p.m.",
        place: "Estadio Modelo, Guayaquil",
        line: "Los Auténticos Decadentes, Vilma Palma e Vampiros, and Los Prisioneros with Miguel Tapia.",
        photo: "guayaquil-skyline",
        partnerHref: viatorUrl("searchResults/all", { text: "Guayaquil" }),
        partnerLabel: "Guayaquil on Viator",
        sourceName: "Buen Plan",
        sourceUrl: "https://www.buenplan.com.ec/event/rocklatam2026gye",
      },
    ],
  },
  "2026-10-19": {
    id: "2026-10-19",
    range: "Oct 23–25",
    name: "Design weekend",
    items: [
      {
        headline: "Distrito Quito Design Week",
        when: "Fri–Sun, Oct 23–25 · 9:00 a.m.–6:00 p.m.",
        place: "Palacio de Cristal, Itchimbía, Quito",
        line: "Free with registration: a market of furniture, objects, textiles, and fashion.",
        photo: "quito-hill",
        partner: "gyg-quito",
        sourceName: "Luma",
        sourceUrl: "https://luma.com/f22ypqgo",
      },
      {
        headline: "De verde a maduro",
        when: "Sat, Oct 24 · from 10:00 a.m.",
        place: "Plaza El Quinde, La Mariscal, Quito",
        line: "Free, with twenty restaurants, a bolón contest, and live music through Salsa en el Solar.",
        photo: "plaza-foch",
        partner: "gyg-quito",
        sourceName: "Quito Informa",
        sourceUrl:
          "https://quitoinforma.quito.gob.ec/2026/10/08/la-musica-en-vivo-sera-parte-del-festival-de-verde-a-maduro-en-la-mariscal/",
      },
      {
        headline: "Gypsy jazz",
        when: "Sat, Oct 24 · 6:30 p.m.",
        place: "Teatro Centro de Arte, Guayaquil",
        line: "Die Drahtzieher with Sepia Jazz Band, $15 or two for $25.",
        photo: "guayaquil-skyline",
        partnerHref: viatorUrl("searchResults/all", { text: "Guayaquil" }),
        partnerLabel: "Guayaquil on Viator",
        sourceName: "Teatro Centro de Arte",
        sourceUrl: "https://www.teatrocentrodearte.org/evento/1586-gypsy-jazz-concert-die-drahtzieher",
      },
      {
        headline: "Driving Miss Daisy",
        when: "Fri–Sun, Oct 23–25 · 3:00 p.m.",
        place: "Antonio Vega Muñoz 14-46, Cuenca",
        line: "In English, and the run continues through November 1.",
        photo: "cuenca",
        partner: "gyg-cuenca",
        sourceName: "CuencaHighLife",
        sourceUrl: "https://cuencahighlife.com/veteran-cast-brings-acts-driving-miss-daisy-to-life/",
      },
      {
        headline: "Otavalo’s Saturday market",
        when: "Sat, Oct 24 · morning",
        place: "From Quito",
        line: "Plaza de los Ponchos, the textile market, fills on Saturday.",
        photo: "otavalo",
        partner: "gyg-otavalo",
        sourceName: "Ecuadorist",
        sourceUrl: "/visit/otavalo/",
      },
    ],
  },
  "2026-10-26": {
    id: "2026-10-26",
    range: "Oct 30–Nov 3",
    name: "Day of the Dead",
    items: [
      {
        headline: "The independence pregón",
        when: "Fri, Oct 30 · 6:00 p.m.",
        place: "Parque Curiquingue, Cuenca",
        line: "Los Búfalos and Banda Rumbae open the independence festivities.",
        photo: "cuenca",
        partner: "gyg-cuenca",
        sourceName: "El Universo",
        sourceUrl:
          "https://www.eluniverso.com/comunidad/ecuador/fiestas-de-cuenca-2026-agenda-de-eventos-y-conciertos-nota/",
      },
      {
        headline: "San Diego after dark",
        when: "Sat–Mon, Oct 31–Nov 2 · 7:00 p.m.",
        place: "Cementerio de San Diego, Quito",
        line: "A two-hour theatrical walk with Quito Eterno, adults $15 or $20 with colada morada and a guagua de pan.",
        photo: "quito-night",
        partner: "gyg-quito",
        sourceName: "RedTickets",
        sourceUrl:
          "https://redtickets.ec/evento/CEMENTERIO-DE-SAN-DIEGO-LA-CIUDAD-DE-LA-MUERTE-Higienismo-y-urbanidad/1818/",
      },
      {
        headline: "Film scores, live",
        when: "Fri, Oct 30 · 7:00 p.m.",
        place: "Teatro Centro de Arte, Guayaquil",
        line: "More than 70 musicians play film and anime scores on the vía a la Costa, from $25.",
        photo: "guayaquil-skyline",
        partnerHref: viatorUrl("searchResults/all", { text: "Guayaquil" }),
        partnerLabel: "Guayaquil on Viator",
        sourceName: "Teatro Centro de Arte",
        sourceUrl: "https://www.teatrocentrodearte.org/evento/1594-kinema-sinfnico-horror-family-night",
      },
      {
        headline: "Colada in Conocoto",
        when: "Fri, Oct 30 · 9:00 a.m.",
        place: "Mercado de Conocoto, Los Chillos",
        line: "Market vendors serve colada morada and local food, a short ride south of Quito.",
        photo: "guaguas",
        sourceName: "Quito Informa",
        sourceUrl:
          "https://quitoinforma.quito.gob.ec/2026/10/23/los-chillos-se-llena-de-sabor-tradicion-y-cultura-antes-del-dia-de-los-difuntos/",
      },
      {
        headline: "Lanterns at dusk",
        when: "Sun, Nov 1 · 6:30 p.m.",
        place: "Cementerio Patrimonial, Cuenca",
        line: "A Mass at 7:30, a serenade at 8:30, and a projection at 9:30 follow the lanterns.",
        photo: "cuenca-cathedral",
        partner: "viator-cuenca",
        sourceName: "El Mercurio",
        sourceUrl:
          "https://elmercurio.com.ec/ultimas-noticias/2026/10/13/agenda-actividad-dia-difuntos-2026-cementerio-cuenca/",
      },
    ],
  },
  "2026-11-02": {
    id: "2026-11-02",
    range: "Nov 6–8",
    name: "Friday and Saturday nights",
    items: [
      {
        headline: "Cultura Profética and Gondwana",
        when: "Fri, Nov 6 · 5:00 or 7:00 p.m.",
        place: "Plaza de Toros, Quito",
        line: "The header says 5:00 p.m. and the description says 7:00 p.m., and neither says which is doors, for Cultura Profética, Gondwana, and Quique Neira, ages 12 and up, tickets $30, $55 plus tax, or $90 plus tax.",
        photo: "quito-night",
        partner: "gyg-quito",
        sourceName: "Buen Plan",
        sourceUrl: "https://www.buenplan.com.ec/event/gondwana-y-cultura-profetica-2026",
      },
      {
        headline: "Alex Alvear, Antología",
        when: "Sat, Nov 7 · 7:30 p.m.",
        place: "Teatro Prometeo, Quito",
        line: "Songs from his whole career, including Promesas Temporales, Mango Blue, and Wañukta Tonic, across from the Ejido metro stop, $15 general, half off for seniors and people with disabilities.",
        photo: "quito-basilica",
        partner: "gyg-quito",
        sourceName: "Buen Plan",
        sourceUrl: "https://www.buenplan.com.ec/event/AlexAlvearAntologia",
      },
      {
        headline: "Noche Retro",
        when: "Fri, Nov 6 · 7:30 p.m.",
        place: "Parque del Ferrocarril, Cuenca",
        line: "A free night of music from cassette to MP3, still inside the independence program.",
        photo: "puente-roto",
        partner: "gyg-cuenca",
        sourceName: "Fiestas de Cuenca agenda",
        sourceUrl:
          "https://elmercurio.com.ec/wp-content/uploads/2026/10/agenda_fiestas_Cuenca_2026.pdf",
      },
      {
        headline: "Retreta on Calle Larga",
        when: "Fri, Nov 6 · 7:15 p.m.",
        place: "Plazoleta de La Merced, Cuenca",
        line: "The Guardia Ciudadana band plays a small plaza where Calle Larga meets Presidente Borrero.",
        photo: "calle-larga",
        partner: "viator-cuenca",
        sourceName: "Fiestas de Cuenca agenda",
        sourceUrl:
          "https://elmercurio.com.ec/wp-content/uploads/2026/10/agenda_fiestas_Cuenca_2026.pdf",
      },
      {
        headline: "Ruta de Fantasmas",
        when: "Sat, Nov 7 · 7:00 p.m.",
        place: "Museo de las Madres Conceptas, Cuenca",
        line: "An evening route of legends at the convent museum on Hermano Miguel, and the agenda gives no price.",
        photo: "cuenca-cathedral",
        partner: "gyg-cuenca",
        sourceName: "Fiestas de Cuenca agenda",
        sourceUrl:
          "https://elmercurio.com.ec/wp-content/uploads/2026/10/agenda_fiestas_Cuenca_2026.pdf",
      },
    ],
  },
  "2026-11-09": {
    id: "2026-11-09",
    range: "Nov 14–15",
    name: "Saturday night",
    items: [
      {
        headline: "Martin Garrix",
        when: "Sat, Nov 14 · 8:00 p.m.",
        place: "Estadio Alejandro Serrano Aguilar, Cuenca",
        line: "The Américas Tour. Tickets from $69 and $99, plus tax and a service fee.",
        photo: "cuenca",
        partner: "gyg-cuenca",
        sourceName: "Primicias",
        sourceUrl:
          "https://www.primicias.ec/entretenimiento/musica/conciertos-luna-martin-garrix-ruben-blades-strokes-quito-guayaquil-cuenca-ecuador-noviembre2026-136019/",
      },
      {
        headline: "Rubén Blades",
        when: "Sat, Nov 14 · 8:00 p.m.",
        place: "Coliseo Voltaire Paladines Polo, Guayaquil",
        line: "Fotografías Tour with Roberto Delgado’s big band. General admission is $45 before a $4.50 fee and tax.",
        photo: "guayaquil-skyline",
        partnerHref: viatorUrl("searchResults/all", { text: "Guayaquil" }),
        partnerLabel: "Guayaquil on Viator",
        sourceName: "TicketShow",
        sourceUrl:
          "https://www.ticketshow.com.ec/evento/RUBEN-BLADES-FOTOGRAFIAS-TOUR-GUAYAQUIL--2026",
      },
      {
        headline: "Quiteñadas",
        when: "Sat, Nov 14 · 7:30 p.m.",
        place: "Casa de la Música, Quito",
        line: "A Quito tribute with 25 orchestra musicians, student singers, and dancers. Low seats $40, high seats $30, plus a $1.75 fee, with a senior discount.",
        photo: "quito-basilica",
        partner: "gyg-quito",
        sourceName: "Casa de la Música",
        sourceUrl: "https://www.casadelamusica.ec/programacion/segunda-funcin-quitenadas",
      },
      {
        headline: "Soy Luna",
        when: "Sat, Nov 14 · 8:00 p.m.",
        place: "Coliseo General Rumiñahui, Quito",
        line: "The last tour. Tickets from $45 to $190, plus tax and fees.",
        photo: "quito-night",
        partner: "gyg-quito",
        sourceName: "Primicias",
        sourceUrl:
          "https://www.primicias.ec/entretenimiento/musica/conciertos-luna-martin-garrix-ruben-blades-strokes-quito-guayaquil-cuenca-ecuador-noviembre2026-136019/",
      },
      {
        headline: "Caracol y colibrí",
        when: "Sun, Nov 15 · 11:00 a.m. and 4:00 p.m.",
        place: "Sala Zaruma, Samborondón",
        line: "A children’s play at Teatro Sánchez Aguilar. Children $8, adults $15.",
        photo: "santa-ana",
        partnerHref: viatorUrl("searchResults/all", { text: "Guayaquil" }),
        partnerLabel: "Guayaquil on Viator",
        sourceName: "Primicias",
        sourceUrl:
          "https://www.primicias.ec/entretenimiento/musica/conciertos-luna-martin-garrix-ruben-blades-strokes-quito-guayaquil-cuenca-ecuador-noviembre2026-136019/",
      },
    ],
  },
} as const satisfies Record<string, Weekend>;

export const currentWeekendId = "2026-11-09";

export function weekendFor(id: string): Weekend | undefined {
  return weekends[id as keyof typeof weekends];
}

export function currentWeekend(): Weekend {
  const weekend = weekendFor(currentWeekendId);
  if (!weekend) throw new Error(`Missing weekend ${currentWeekendId}`);
  return weekend;
}
