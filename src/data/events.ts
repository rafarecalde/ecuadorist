export type Festival = {
  id: string;
  title: string;
  kicker: string;
  dek: string;
  hero: string;
  /** ISO date used to sort “Coming up”. */
  nextStart: string;
  when: string;
  dateNote: string;
  what: string;
  where: string;
  tips: string[];
  partners: string[];
  guides: { href: string; label: string }[];
};

export const festivals: Festival[] = [
  {
    id: "dia-de-los-difuntos",
    title: "Día de los Difuntos",
    kicker: "November 2",
    dek: "Cemeteries in the morning, guaguas de pan on the table.",
    hero: "guaguas",
    nextStart: "2026-11-02",
    when: "Monday, November 2, 2026",
    dateNote:
      "In 2026 the day falls on a Monday and joins Cuenca’s independence on Tuesday, November 3. The bridge runs Saturday, October 31, through Tuesday, November 3. The date is fixed; this page is updated each year.",
    what: "Families go to the cemeteries and eat guaguas de pan with colada morada, a purple drink of fruits and spices. It is a home holiday as much as a street one.",
    where: "Cemeteries in Quito and Cuenca, and kitchen tables everywhere.",
    tips: [
      "The cemeteries are fullest late morning. Go early if you want room to walk.",
      "The long bridge fills Cuenca. Rooms go before the week of the holiday.",
    ],
    partners: ["gyg-quito", "gyg-cuenca"],
    guides: [
      { href: "/visit/quito/", label: "Quito" },
      { href: "/visit/cuenca/", label: "Cuenca" },
    ],
  },
  {
    id: "fiestas-de-cuenca",
    title: "Fiestas de Cuenca",
    kicker: "November 3",
    dek: "Independence day in the marble city.",
    hero: "cuenca",
    nextStart: "2026-11-03",
    when: "Tuesday, November 3, 2026",
    dateNote:
      "Cuenca marks independence on November 3. In 2026 that Tuesday sits inside the Day of the Dead bridge, October 31 through November 3. Updated each year.",
    what: "The city remembers November 3, 1820, with civic ceremonies and a fuller historic center than a normal Tuesday. It is the southern answer to Quito’s December founding day.",
    where: "Parque Calderón, the cathedral square, and the streets along the Tomebamba.",
    tips: [
      "Treat it as a four-day trip, not a Tuesday overnight.",
      "El Cajas is close if the center feels crowded.",
    ],
    partners: ["gyg-cuenca", "viator-cuenca"],
    guides: [
      { href: "/visit/cuenca/", label: "Cuenca" },
      { href: "/do/hiking/", label: "Hiking" },
    ],
  },
  {
    id: "fiestas-de-quito",
    title: "Fiestas de Quito",
    kicker: "December 6",
    dek: "The founding of the city, in the old town.",
    hero: "quito-night",
    nextStart: "2026-12-06",
    when: "Sunday, December 6, 2026",
    dateNote:
      "Quito was founded on December 6, 1534. In 2026 the civic date is a Sunday. The parties usually build through the previous week. Updated each year.",
    what: "The city celebrates its founding with concerts, neighborhood events, and a crowded historic center. December 6 is the day. The week before is when the calendar fills.",
    where: "Plaza Grande, Plaza de San Francisco, and the avenues that feed the old town.",
    tips: [
      "Book the old town for the nights of December 5 and 6, not the morning you decide to go.",
      "Altitude is unchanged by a party. The first night is still a slow one.",
    ],
    partners: ["gyg-quito", "viator-quito"],
    guides: [{ href: "/visit/quito/", label: "Quito" }],
  },
  {
    id: "carnaval",
    title: "Carnaval",
    kicker: "February",
    dek: "Water, foam, and a parade in Ambato.",
    hero: "carnaval",
    nextStart: "2027-02-08",
    when: "Monday and Tuesday, February 8–9, 2027",
    dateNote:
      "Easter Sunday 2027 is March 28, so Ash Wednesday is February 10. Carnaval is the Monday and Tuesday before it. The dates move every year.",
    what: "The holiday is the two days before Lent. Ambato holds a parade. Guaranda is famous for water and foam in the streets. Quito is milder, and still wet if you wander into it.",
    where: "Ambato for the parade. Guaranda for the street party. The rest of the sierra keeps a lighter version.",
    tips: [
      "Anything you mind getting wet should stay at the hotel.",
      "Intercity buses fill on the Sunday before.",
    ],
    partners: ["klook", "car"],
    guides: [{ href: "/visit/banos/", label: "Baños" }],
  },
  {
    id: "semana-santa",
    title: "Semana Santa",
    kicker: "Good Friday",
    dek: "Quito’s procession, and a quiet old town.",
    hero: "viernes-santo",
    nextStart: "2027-03-26",
    when: "Good Friday, March 26, 2027",
    dateNote:
      "Easter Sunday 2027 is March 28, so Good Friday is March 26. Holy Week moves with Easter. This page is updated each year.",
    what: "The best-known procession is the Good Friday walk through Quito’s historic center, with the cucuruchos in purple. Churches stay open, and the old town is slower than a normal Friday.",
    where: "The historic center of Quito, especially the streets around San Francisco and Santo Domingo. The photograph is from Calderón, in the same metropolitan district.",
    tips: [
      "Stand on a side street if you want to see the procession without being in it.",
      "Many kitchens close or shorten the day. Eat earlier than you would in an ordinary week.",
    ],
    partners: ["gyg-quito", "viator-quito"],
    guides: [{ href: "/visit/quito/", label: "Quito" }],
  },
  {
    id: "inti-raymi",
    title: "Inti Raymi",
    kicker: "June solstice",
    dek: "The sun festival, above all in Otavalo.",
    hero: "inti-raymi",
    nextStart: "2027-06-21",
    when: "June 21, 2027",
    dateNote:
      "The solstice falls on June 21. Otavalo and other Kichwa communities mark the days around it, and the local program is set each year. This page names the solstice, not a guessed parade hour.",
    what: "Inti Raymi is the Andean sun festival. In Imbabura it is music, dance, and processions through Otavalo and the nearby communities, not a ticketed show.",
    where: "Otavalo and the towns around Imbabura. Peguche is part of the same week.",
    tips: [
      "Ask before you photograph a dancer up close.",
      "Saturday in Otavalo is the market. Inti Raymi is a different reason to be there.",
    ],
    partners: ["gyg-otavalo", "klook-otavalo"],
    guides: [{ href: "/visit/otavalo/", label: "Otavalo" }],
  },
];

export function festivalById(id: string): Festival | undefined {
  return festivals.find((festival) => festival.id === id);
}

/** Next festivals from a given ISO date, earliest first. */
export function upcomingFestivals(fromIso: string, count: number): Festival[] {
  return festivals
    .filter((festival) => festival.nextStart >= fromIso)
    .sort((a, b) => a.nextStart.localeCompare(b.nextStart))
    .slice(0, count);
}
