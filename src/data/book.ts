import { getAffiliate, getYourGuideUrl, viatorUrl } from "../config/affiliates";
import type { PhotoId } from "../lib/photos";

export type BookSource = { name: string; href: string };

export type BookPick = {
  title: string;
  suits: string;
  duration?: string;
  included: string;
  href: string;
  partner: string;
  photo: PhotoId;
};

export type TripTips = {
  route: string[];
  routeNote: string;
  when: string;
  weather: string;
  stops: string;
  altitude: string;
  sources: BookSource[];
};

export type BookPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  dek: string;
  hero: PhotoId;
  intro: string;
  picks: BookPick[];
  know: string[];
  faqs: { q: string; a: string }[];
  /** Unsponsored cross-link to the owner’s airport company. */
  transfer: boolean;
  tripTips?: TripTips;
  guide?: { href: string; label: string };
  /** Other Ecuadorist chapters, besides the main guide. */
  reads?: { href: string; label: string }[];
  strip: string;
};

const airalo = getAffiliate("airalo").href;
const car = getAffiliate("car").href;
const klookCotopaxi = getAffiliate("klook-cotopaxi").href;
const klookOtavalo = getAffiliate("klook-otavalo").href;
const klookGalapagos = getAffiliate("klook-galapagos").href;
const klookQuito = getAffiliate("klook-quito").href;
const gygQuito = getAffiliate("gyg-quito").href;
const gygMitad = getAffiliate("gyg-mitad").href;
const viatorQuito = getAffiliate("viator-quito").href;

export const bookPages: BookPage[] = [
  {
    slug: "cotopaxi-tours-from-quito",
    title: "Quito to Cotopaxi day trip: best tours",
    description:
      "Quito to Cotopaxi day trip: park and glacier listings we could open, the drive south on the E35, and what 4,864 m asks of you.",
    eyebrow: "Avenue of the Volcanoes",
    dek: "A guided day south to the park.",
    hero: "cotopaxi",
    intro:
      "A full day south into Cotopaxi National Park, with a guide watching the weather and the clock. These are listings we could open. The price is on the partner’s page.",
    strip: "Cotopaxi",
    transfer: true,
    guide: { href: "/visit/cotopaxi/", label: "The Cotopaxi chapter" },
    picks: [
      {
        title: "Park day with a hike",
        suits: "A first look at the park, with pickup already named in Quito.",
        duration: "Listing duration: 9 hours",
        included:
          "The listing names pickups at La Carolina, Plaza Foch, and Plaza Grande, then Laguna Limpiopungo and a hike toward the José Ribas refuge. Quindetour is the provider on that page.",
        href: getYourGuideUrl("quito-l504/cotopaxi-national-park-tour-t84453"),
        partner: "GetYourGuide",
        photo: "cotopaxi",
      },
      {
        title: "Glacier hike",
        suits: "People who already walk on ice.",
        duration: "Listing duration: 7 hours",
        included:
          "The listing includes transport from Quito, time at the José Rivas refuge, and Limpiopungo.",
        href: getYourGuideUrl("quito-l504/cotopaxi-glacier-full-day-hiking-t1242449"),
        partner: "GetYourGuide",
        photo: "cotopaxi",
      },
      {
        title: "Full day, gates included",
        suits: "A longer day with a bilingual guide and the entrances paid.",
        duration: "The listing: about 12 hours",
        included:
          "Tourist transport, a bilingual guide, and park entrances. The listing leaves food and drinks to you.",
        href: viatorUrl(
          "tours/Quito/Cotopaxi-Full-Day-from-Quito-Including-Entrances/d735-18715P8",
        ),
        partner: "Viator",
        photo: "cotopaxi",
      },
      {
        title: "More Cotopaxi days",
        suits: "A wider shelf, if the three above are the wrong shape.",
        included: "Klook’s Cotopaxi destination, if you want a wider set of days.",
        href: klookCotopaxi,
        partner: "Klook",
        photo: "cotopaxi",
      },
    ],
    know: [
      "Pickups named on the park-day listing are La Carolina, Plaza Foch, and Plaza Grande. Confirm the point when you book.",
      "The glacier listing is a hike on ice, which is a different day from a walk at Limpiopungo.",
      "Park rules and any entrance fee should be checked before you go. Published fee tables go stale.",
    ],
    faqs: [
      {
        q: "How long do these Cotopaxi tours from Quito take?",
        a: "One GetYourGuide park day lists 9 hours. The glacier hike lists 7 hours. The Viator day describes about 12 hours. Those figures come from the listings.",
      },
      {
        q: "How long is the drive from Quito to Cotopaxi?",
        a: "One operator puts the park about two hours south of Quito on the E35. Another account times the park at about 90 minutes from the city, then close to another hour up to the volcano parking. The south-entrance road reaches the Caspi control about 15 minutes after the signed turn at kilometer 42.",
      },
      {
        q: "Is Cotopaxi a good plan the morning you land?",
        a: "The José Rivas refuge is at 4,864 m, and Quito itself is about 2,850 m. Writers advise at least two days in the city first, water, light meals, no alcohol, and turning back if a headache, nausea, or dizziness shows up.",
      },
      {
        q: "Which entrance do people use?",
        a: "The south entrance follows the Panamericana E35 to kilometer 42, then about 15 minutes to the Caspi control. The north road via Machachi is described as rough dirt that wants a high-clearance four-wheel drive, especially in rain.",
      },
    ],
    tripTips: {
      route: ["Quito", "E35 south", "Km 42", "Caspi control", "Limpiopungo", "Refuge parking"],
      routeNote:
        "That line is the south entrance. A bus from Quitumbe is published at about 1 hour 20 minutes to 1 hour 30 minutes to the highway entrance, followed by a walk of more than an hour to the gate. The north road via Machachi is the rough alternative.",
      when:
        "Give Quito at least two days before this drive. Listings that name a morning pickup are the practical start; the refuge is a poor plan on the morning you land.",
      weather:
        "The north dirt road is described as especially rough in rain.",
      stops:
        "Laguna Limpiopungo, around 3,800 m, sits on the way up. The museum is passed before the lake on the usual park road. The refuge parking is higher still, near 4,500 m.",
      altitude:
        "The volcano is 5,897 m. The José Rivas refuge is 4,864 m. Symptoms of altitude can begin above about 2,500 m, and Quito is already about 2,850 m. Drink water, skip alcohol, eat lightly, go slowly, and descend if you feel a headache, nausea, or dizziness.",
      sources: [
        { name: "Quito Tour Bus", href: "https://quitotourbus.com/en/how-to-get-to-cotopaxi" },
        {
          name: "Brooke Beyond",
          href: "https://brookebeyond.com/hiking-to-refugio-jose-rivas-cotopaxi-glacier-in-ecuador",
        },
        { name: "Real Dreams", href: "https://www.realdreamsecuador.com/cotopaxi-national-park/" },
        {
          name: "Frommer’s",
          href: "https://www.frommers.com/destinations/cotopaxi-national-park/planning-a-trip/",
        },
      ],
    },
  },
  {
    slug: "quilotoa-tours-from-quito",
    title: "Quilotoa loop tour from Quito",
    description:
      "Quilotoa loop tour from Quito: crater listings that return the same day, how that differs from the village loop, the road through Latacunga, and a rim at 3,914 m.",
    eyebrow: "The crater",
    dek: "A long day to the turquoise lake.",
    hero: "quilotoa",
    intro:
      "Quilotoa day trips from Quito reach the crater and come back. The loop through the villages is a different, slower trip. Prices stay on the partner’s page.",
    strip: "Quilotoa",
    transfer: true,
    guide: { href: "/visit/quilotoa/", label: "The Quilotoa chapter" },
    picks: [
      {
        title: "Crater day from Quito",
        suits: "One long day that includes the rim, with the option to go down.",
        duration: "Listing duration: 10 hours",
        included:
          "An early pickup in Quito, the Avenue of the Volcanoes, a stop at an indigenous home, Tigua, and the crater. The listing lets you descend or stay on the rim.",
        href: getYourGuideUrl("quito-l504/quilotoa-lagoon-day-tour-t61642"),
        partner: "GetYourGuide",
        photo: "quilotoa",
      },
      {
        title: "Saquisilí, then the lake",
        suits: "A day that adds a Thursday-town market and the canyon on the way.",
        duration: "Listing duration: 8–10 hours",
        included:
          "Pickups named at Plaza Foch, in Quito, or at Plaza San Blas. The route takes in Saquisilí, Tigua, Toachi Canyon, and the crater, on foot or by donkey.",
        href: getYourGuideUrl("quito-l504/quilotoa-tour-1-day-in-a-dream-landscape-from-quito-t526437"),
        partner: "GetYourGuide",
        photo: "saquisili",
      },
      {
        title: "Quilotoa on Viator",
        suits: "A second desk, if you want to compare the same kind of day.",
        included: "A Viator search for Quilotoa. Open a listing before you trust a duration.",
        href: viatorUrl("searchResults/all", { text: "Quilotoa" }),
        partner: "Viator",
        photo: "quilotoa",
      },
    ],
    know: [
      "The 10-hour listing starts with an early pickup in Quito.",
      "The 8–10 hour listing names Plaza Foch, Quito, and Plaza San Blas as pickups.",
      "Going down to the water is a choice on these listings. The rim is the view either way.",
    ],
    faqs: [
      {
        q: "How long is a Quilotoa day trip from Quito?",
        a: "One listing says 10 hours. Another says 8–10 hours. The drive itself is published as a little over three hours, or 3.5 to 4 hours once traffic is counted.",
      },
      {
        q: "How high is Quilotoa?",
        a: "The rim is given as 3,914 m. The shore is described as 364 m lower than that. A rim circuit is published at about 3 to 5 hours.",
      },
      {
        q: "Is the Quilotoa Loop the same as a day trip?",
        a: "The loop through Sigchos, Isinlivi, and Chugchilán is a multi-day trek. A day tour from Quito reaches the crater and returns.",
      },
      {
        q: "Can you swim in the crater lake?",
        a: "One operator says swimming is a poor idea: the water is very cold, and the altitude is high. Kayaks are mentioned on that same page.",
      },
    ],
    tripTips: {
      route: ["Quito", "Latacunga", "Tigua", "Zumbahua", "Quilotoa rim"],
      routeNote:
        "The published drive is the Panamericana to Latacunga, then a paved regional road. Quilotoa is about 178 km southwest of Quito and about 66 km from Latacunga. Latacunga to the crater is published at 1.5 to 2 hours by car, or about 2 to 2.5 hours by bus. A Toachi canyon viewpoint sits about 7 km from Quilotoa toward Zumbahua.",
      when:
        "A private car makes a day trip possible. Drive it in daylight. Published bus timetables were flagged as likely to change.",
      weather:
        "Mountain weather is described as cutting visibility on steep, narrow roads, with limited parking at the rim.",
      stops:
        "Tigua and Zumbahua are the stops writers single out on the way to the rim. Saquisilí appears on one of the booked days. The Toachi viewpoint is the short detour on the Zumbahua side.",
      altitude:
        "The rim village is at 3,914 m, higher than Quito. The shore is about 364 m below the rim. Carry water, and treat a swim as the cold, high-altitude dip one operator warns against.",
      sources: [
        { name: "Happy Gringo", href: "https://happygringo.com/blog/lake-quilotoa-ecuador/" },
        { name: "Explorers Away", href: "https://explorersaway.com/quilotoa-crater-hike/" },
        {
          name: "Real Dreams",
          href: "https://www.realdreamsecuador.com/how-to-get-to-quilotoa-lagoon/",
        },
        { name: "Quilotoa.com", href: "https://www.quilotoa.com/en/loop.html" },
      ],
    },
  },
  {
    slug: "otavalo-tours-from-quito",
    title: "Otavalo market day trips from Quito",
    description:
      "Otavalo market day trips from Quito, with Saturday timing, the drive north on the E35, and the lakes if the day runs long.",
    eyebrow: "Saturday",
    dek: "The textile square, and the valley around it.",
    hero: "otavalo",
    intro:
      "Otavalo market day trips from Quito are built around Saturday, when the square is full. Other days are smaller. The price is on the partner’s page.",
    strip: "Otavalo",
    transfer: true,
    guide: { href: "/visit/otavalo/", label: "The Otavalo chapter" },
    picks: [
      {
        title: "Market, lake, and Peguche",
        suits: "A private Saturday with the square, the water, and a weaving stop.",
        duration: "Listing duration: 8 hours",
        included:
          "The market, a boat on Lago San Pablo, and Peguche. The listing describes the ride from Quito as about 2.5 hours and Peguche as an 18 m waterfall.",
        href: getYourGuideUrl(
          "otavalo-l2259/quito-otavalo-market-san-pablo-lake-waterfall-t1003326",
        ),
        partner: "GetYourGuide",
        photo: "otavalo",
      },
      {
        title: "Cayambe and the ponchos",
        suits: "A fuller valley day that starts before Otavalo.",
        duration: "Listing duration: 9 hours",
        included:
          "Cayambe, a stop on the equator line, Mercado de Ponchos, Peguche, and Casa Ñanda Mañachi.",
        href: getYourGuideUrl("quito-l504/full-day-otavalo-tour-t84318"),
        partner: "GetYourGuide",
        photo: "cuicocha",
      },
      {
        title: "More Otavalo days",
        suits: "A wider shelf of northern-valley trips.",
        included: "Klook’s Otavalo destination, if you want a wider set of days.",
        href: klookOtavalo,
        partner: "Klook",
        photo: "otavalo",
      },
    ],
    know: [
      "Saturday is the full market. The animal market is the early scene; the textile square fills after that.",
      "The private listing is 8 hours and names the market, a San Pablo boat, and Peguche.",
      "The 9-hour listing adds Cayambe and the equator line before the square.",
    ],
    faqs: [
      {
        q: "Which day should an Otavalo market day trip land on?",
        a: "Saturday is the full market. Plaza de Ponchos is described as lively from about 8 a.m. until about 3 p.m., and busiest around 9 a.m. to 2 p.m. The animal market, west of the square, is about 5 a.m. to 9 a.m. Other days are smaller. One guide says craft stalls run about 7:00 to 17:00.",
      },
      {
        q: "How far is Otavalo from Quito?",
        a: "About 95 km north on the E35. Published drive times run from 1.5–2 hours to about 2–2.5 hours. A direct bus from Carcelén is described as about 2.5 hours.",
      },
      {
        q: "How long are the listed tours?",
        a: "One private listing says 8 hours. A full-day listing says 9 hours.",
      },
      {
        q: "What belongs in the same day, if there is time?",
        a: "Peguche is about 15 minutes north of town. Cuicocha is about 30 minutes west, and that crater lake is listed at 3,068 m. One guide suggests leaving Otavalo by about 3 p.m. if you want to be back in Quito before dark.",
      },
    ],
    tripTips: {
      route: ["Quito", "E35 north", "Otavalo", "Peguche", "Cuicocha"],
      routeNote:
        "The highway runs north through the Cayambe valley, with Imbabura in view on a clear day. Cayambe and the equator line show up on one booked day before the market.",
      when:
        "Saturday morning. The animal market is at dawn. The textile square is the middle of the day. Heading back by about 3 p.m. is the advice for a same-day return to Quito.",
      weather:
        "One Quito day-trip guide calls June to September the drier months. Otavalo sits at about 2,532 m, a little lower than Quito at about 2,850 m.",
      stops:
        "Peguche after the market, Lago San Pablo for the boat, and Cuicocha or Cotacachi if the day is long. Ask before you photograph people. Bargaining belongs with crafts.",
      altitude:
        "The town is about 2,532 m. Cuicocha is listed at 3,068 m and is windier than the square. You are still in the highlands, just not at Cotopaxi’s refuge.",
      sources: [
        { name: "Quito Trip", href: "https://quitotrip.com/otavalo-market-day-trip/" },
        {
          name: "Community Hostel",
          href: "https://communityhostel.com/otavalo-market-complete-guide/",
        },
        { name: "Pack Lightly", href: "https://pack-lightly.com/ecuador/otavalo/otavalo-market/" },
      ],
    },
  },
  {
    slug: "mindo-tours-from-quito",
    title: "Mindo cloud forest day trips from Quito",
    description:
      "Mindo cloud forest day trips from Quito: forest listings, the road down from the capital, and a morning that favors birds.",
    eyebrow: "Cloud forest",
    dek: "Down off the plateau, into the birds.",
    hero: "mindo",
    intro:
      "Mindo cloud forest day trips from Quito drop you into a warmer, wetter forest and bring you back the same day. The price is on the partner’s page.",
    strip: "Mindo",
    transfer: true,
    guide: { href: "/visit/mindo/", label: "The Mindo chapter" },
    picks: [
      {
        title: "Birds and a waterfall",
        suits: "A set day with the hummingbirds and a walk to the falls.",
        duration: "Listing duration: 9–10 hours",
        included:
          "A hummingbird sanctuary and a waterfall hike. Zipline and chocolate are optional on the listing.",
        href: getYourGuideUrl("quito-l504/mindo-cloud-forest-full-day-tour-t61492"),
        partner: "GetYourGuide",
        photo: "mindo",
      },
      {
        title: "Private forest day",
        suits: "A car of your own, leaving the city in the morning.",
        duration: "Listing duration: 8 hours",
        included: "A private car that the listing says leaves Quito around 8:00 a.m., and a forest hike.",
        href: getYourGuideUrl("quito-l504/quito-private-mindo-cloud-forest-tour-t72258"),
        partner: "GetYourGuide",
        photo: "mindo",
      },
      {
        title: "Mindo on Viator",
        suits: "A second desk for the same kind of day.",
        included: "A Viator search for Mindo. Open a listing before you trust a duration.",
        href: viatorUrl("searchResults/all", { text: "Mindo" }),
        partner: "Viator",
        photo: "mindo",
      },
    ],
    know: [
      "The shared day lists 9–10 hours, with hummingbirds and a waterfall hike. Zipline and chocolate are extras on that listing.",
      "The private listing says the car leaves Quito around 8:00 a.m.",
      "Some waterfall, cable-car, and farm stops charge their own entry. Check that on the day rather than trusting a blog’s price.",
    ],
    faqs: [
      {
        q: "How long does it take to reach Mindo from Quito?",
        a: "Published drives are about two hours, or about 90 minutes once you are clear of city traffic on the Calacalí–La Independencia road. Distance is given as about 80 km in two accounts and about 100 km in another. A bus from Terminal La Ofelia is described as a little over two hours, or about 2.5 hours.",
      },
      {
        q: "What do the listed Mindo tours include?",
        a: "One lists 9–10 hours with a hummingbird sanctuary and a waterfall hike. A private tour lists 8 hours and a forest hike, leaving around 8:00 a.m.",
      },
      {
        q: "When are the birds easiest to see?",
        a: "One visitor’s guide says birds are most active in the morning, with cloud and a short rain more common in the afternoon, including in the months that guide calls drier.",
      },
      {
        q: "What is the tarabita?",
        a: "A cable car across a canyon the sanctuary describes as 530 m wide and about 150 m above the Nambillo. The waterfall walk on that side names seven falls and takes about 3 to 5 hours. Bring a swimsuit, hiking shoes, and rain clothes for that trail.",
      },
    ],
    tripTips: {
      route: ["Quito", "Equator line", "Calacalí", "La Independencia", "Mindo"],
      routeNote:
        "The usual road leaves Quito to the north, crosses the equatorial line, then drops northwest. One traveler’s account reserves self-driving for people who are comfortable with mountain roads, fog, and a wet surface closer to the forest.",
      when:
        "Morning in the forest, for the birds. One private listing leaves Quito around 8:00 a.m. Afternoons are when the cloud and a short rain tend to arrive.",
      weather:
        "One operator describes sun and showers year-round, with temperatures about 15–24°C, and suggests a light rain jacket. A Quito guide calls December–February and June–September drier. Another account places the drier months in June–December and still expects afternoon cloud.",
      stops:
        "The hummingbird gardens, the tarabita, and the waterfall sanctuary (Nambillo, Reina, Ondinas, Guarumos, Colibríes, Madre, and Maderos). Chocolate stops sit on the same slope and are optional on one listing.",
      altitude:
        "Quito is about 2,850 m. Mindo is about 1,250 m. The day is a descent, which is the opposite of a Cotopaxi problem. For the falls, the sanctuary asks for a swimsuit, hiking shoes, and rain clothes.",
      sources: [
        {
          name: "Ecuatouring",
          href: "https://www.ecuatouring.com/tours/mindo-day-trip-from-quito/",
        },
        { name: "Quito Trip", href: "https://quitotrip.com/mindo-cloud-forest-ecuador/" },
        { name: "Cultures Traveled", href: "https://culturestraveled.com/quito-to-mindo-ecuador/" },
        {
          name: "Packing Up the Pieces",
          href: "https://www.packing-up-the-pieces.com/mindo-ecuador-cloud-forest-guide/",
        },
        {
          name: "Mindo.info",
          href: "https://www.mindo.info/en/activities/tarabita-y-santuario-de-cascadas-mindo",
        },
      ],
    },
  },
  {
    slug: "galapagos-day-tours-santa-cruz",
    title: "Galápagos day tours from Santa Cruz",
    description:
      "Galápagos day tours from Santa Cruz, starting in Puerto Ayora: Tortuga Bay, the Darwin station, and a day boat to North Seymour.",
    eyebrow: "Puerto Ayora",
    dek: "Days that start on the island you are already on.",
    hero: "iguana",
    intro:
      "Galápagos day tours from Santa Cruz leave from Puerto Ayora, not from Quito. A ship is a different trip. The price is on the partner’s page.",
    strip: "Galápagos days",
    transfer: false,
    guide: { href: "/visit/galapagos/", label: "The Galápagos chapter" },
    picks: [
      {
        title: "Guided Tortuga Bay",
        suits: "A walk to the beach with a guide, if you would rather not go alone.",
        included:
          "A guided visit to Tortuga Bay. The listing treats Playa Brava as closed to swimming and Playa Mansa as the swimming beach. The meeting point is Galapagos Dreams, on Avenida Cucuve in Puerto Ayora. No duration is printed on the listing we opened.",
        href: getYourGuideUrl(
          "puerto-ayora-l148437/galapagos-santa-cruz-tortuga-bay-guided-tour-t1038872",
        ),
        partner: "GetYourGuide",
        photo: "iguana",
      },
      {
        title: "Station and the beach",
        suits: "One day that pairs the research station with the bay.",
        duration: "Listing duration: 8 hours",
        included:
          "Pickup on Santa Cruz, in Puerto Ayora. The listing describes a walk of about 2.5 km, about two hours both ways, out to Tortuga Bay, then the Charles Darwin Research Station.",
        href: getYourGuideUrl(
          "puerto-ayora-l148437/private-tour-charles-darwin-station-tortuga-bay-beach-t497844",
        ),
        partner: "GetYourGuide",
        photo: "iguana",
      },
      {
        title: "North Seymour by boat",
        suits: "A day on the water, with a licensed guide, off the island.",
        included:
          "The listing’s shape of the day: a 7:50 a.m. bus from the Puerto Ayora pier, about 40 minutes to the Itabaca Channel, about an hour by yacht to North Seymour, a trail of about 2.5 hours, a possible stop at Mosquera or Las Bachas, lunch on the yacht, and a return around 4:30 p.m.",
        href: getYourGuideUrl("puerto-ayora-l148437/north-seymour-day-tour-t530526"),
        partner: "GetYourGuide",
        photo: "iguana",
      },
      {
        title: "More island days",
        suits: "A wider Galápagos shelf, still booked as a day.",
        included: "Klook’s Galápagos destination, if you want a wider set of days.",
        href: klookGalapagos,
        partner: "Klook",
        photo: "iguana",
      },
    ],
    know: [
      "These days start in Puerto Ayora. They are separate from the flight into Baltra or San Cristóbal.",
      "Playa Brava is closed to swimming. Playa Mansa is the calm beach beyond it.",
      "Most excursions need a licensed guide. Park entry is paid at the airport, not on the boat.",
    ],
    faqs: [
      {
        q: "Do Galápagos day tours from Santa Cruz start in Quito?",
        a: "They start on Santa Cruz, in or near Puerto Ayora. Quito is where many flights to the islands begin, which is a different booking.",
      },
      {
        q: "Can you walk to Tortuga Bay without a tour?",
        a: "Visit notes describe it as free and self-guided. You sign in at the gate. The paved path is about 2.5 km from the west end of Puerto Ayora, along Charles Binford. Playa Brava is closed to swimming. The calm swimming beach is Playa Mansa. The site closes in the evening.",
      },
      {
        q: "What does the national park charge?",
        a: "The Charles Darwin Foundation lists park entry for foreign visitors at $200, paid at Baltra or San Cristóbal, for a stay of up to two months. The guided tortoise route at the station is listed at $10.",
      },
      {
        q: "What are the Darwin station hours?",
        a: "The exhibition hall is free and open every day from 8:00 to 18:00, including holidays. The Fausto Llerena breeding-center route needs a certified naturalist guide. Those tours run from 8:00, and the last is at 16:45. The address is Avenida Charles Darwin, Puerto Ayora.",
      },
    ],
    tripTips: {
      route: ["Puerto Ayora", "Charles Binford", "Tortuga Bay gate", "Playa Brava", "Playa Mansa"],
      routeNote:
        "That line is the walk. A day boat is a different line: the pier, a bus of about 40 minutes to the Itabaca Channel, then about an hour by yacht to North Seymour, with a return the listing puts around 4:30 p.m.",
      when:
        "The station’s exhibition hall is open 8:00–18:00 every day. Breeding-center tours run from 8:00, last tour 16:45. The North Seymour listing starts with a 7:50 a.m. bus. Tortuga Bay closes in the evening.",
      weather:
        "The North Seymour listing describes the sea as below 20°C from June through November and up to 27°C from December through May, and it mentions a wetsuit for the cooler months. Tortuga Bay is described as full sun.",
      stops:
        "On foot: Tortuga Bay and El Garrapatero. In the highlands: tortoise farms at Rancho Manzanillo and El Chato, and Los Gemelos in the Scalesia forest. Snorkel at Playa de la Estación. Las Bachas is a day trip from Santa Cruz. The station is on Avenida Charles Darwin.",
      altitude:
        "Carry water on the Tortuga Bay path. The walk notes say there is no water along it, and the path is in full sun. Use a licensed guide where the park requires one.",
      sources: [
        {
          name: "Charles Darwin Foundation, travel tips",
          href: "https://www.darwinfoundation.org/en/visit-galapagos/travel-tips-for-galapagos/",
        },
        {
          name: "Charles Darwin Foundation, visitor center",
          href: "https://www.darwinfoundation.org/en/about/our-campus/visitor-center/",
        },
        {
          name: "Charles Darwin Foundation, visit",
          href: "https://www.darwinfoundation.org/en/visit-galapagos/",
        },
        {
          name: "Zieloadventures",
          href: "https://zieloadventures.com/galapagos/sites/tortuga-bay/",
        },
        {
          name: "Ecuador Galápagos Tours",
          href: "https://ecuadorgalapagos.tours/blog/tortuga-bay-walk/",
        },
        {
          name: "North Seymour listing",
          href: "https://www.getyourguide.com/puerto-ayora-l148437/north-seymour-day-tour-t530526/",
        },
      ],
    },
  },
  {
    slug: "quito-city-and-mitad-del-mundo-tours",
    title: "Mitad del Mundo and Quito city tours",
    description:
      "Mitad del Mundo and Quito city tours, from the old town to the monument 26 km north. Hours stay on the listing you open.",
    eyebrow: "The city",
    dek: "The old town, then the monument north of it.",
    hero: "mitad",
    intro:
      "Mitad del Mundo and Quito city tours are short days that start in the capital. These buttons open partner destination pages, where the hours and the price sit.",
    strip: "Quito & the equator",
    transfer: true,
    guide: { href: "/visit/quito/", label: "The Quito chapter" },
    picks: [
      {
        title: "Quito city tours",
        suits: "An old-town day, churches and plazas, with a guide.",
        included: "GetYourGuide’s Quito destination. Open a listing for the hours and the price.",
        href: gygQuito,
        partner: "GetYourGuide",
        photo: "quito-plaza",
      },
      {
        title: "Mitad del Mundo",
        suits: "The monument as a short trip north, rather than a city walk.",
        included: "A GetYourGuide search for Mitad del Mundo. Hours and tickets stay on the listing you choose.",
        href: gygMitad,
        partner: "GetYourGuide",
        photo: "mitad",
      },
      {
        title: "Quito on Viator",
        suits: "The same city, on a second desk.",
        included: "Viator’s Quito destination page. Duration depends on the tour you open.",
        href: viatorQuito,
        partner: "Viator",
        photo: "quito-basilica",
      },
      {
        title: "Quito on Klook",
        suits: "A third shelf of city days and tickets.",
        included: "Klook’s Quito destination, if you want a wider set of days.",
        href: klookQuito,
        partner: "Klook",
        photo: "santo-domingo",
      },
    ],
    know: [
      "The monument marks the eighteenth-century survey. The modern equator line sits a short distance away.",
      "These four buttons open destination or search pages. A duration belongs to the tour you choose there.",
      "Published taxi time from the center is about 45–60 minutes. Confirm the day’s traffic when you book.",
    ],
    faqs: [
      {
        q: "How far is Mitad del Mundo from Quito?",
        a: "About 26 km north of the center, in the parish of San Antonio. A taxi or ride-hail is published at 45–60 minutes. The other published route is Metrobús to Ofelia, then a feeder bus.",
      },
      {
        q: "Is the monument on the equator?",
        a: "It commemorates the eighteenth-century Franco-Spanish geodesic mission. The WGS84 equator is about 240 m north of the marked line. The Intiñan Solar Museum, about 200 m northeast, is private, and measurements cited for that site also put it off the modern line.",
      },
      {
        q: "Are opening hours listed here?",
        a: "No. Hours and a ticket price were not taken from an official page for this complex, so they are not shown. Use the listing you book.",
      },
      {
        q: "What else is close?",
        a: "The rim of Pululahua crater is about 4 km from the monument complex. The old-town tours are a separate day in the center.",
      },
    ],
    tripTips: {
      route: ["Quito center", "26 km north", "San Antonio", "Monument", "Intiñan"],
      routeNote:
        "Intiñan sits about 200 m northeast of the monument. Pululahua’s rim is about 4 km farther. The city itself is the other tour: plazas and churches, booked as its own day.",
      when:
        "A published taxi or ride-hail from the center takes about 45–60 minutes. Metrobús to Ofelia plus a feeder is the other published way.",
      weather:
        "The sources for this stop describe the monument and the ride. They leave the season unstated.",
      stops:
        "The monument, then the private Intiñan museum if you want the second line on the ground, then Pululahua if the day has room. Treat the painted equator lines as history and a demonstration, and check a GPS if the precise parallel is the point.",
      altitude:
        "Quito is about 2,850 m. The monument is 26 km north of the center, on the same highland approach.",
      sources: [
        { name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Ciudad_Mitad_del_Mundo" },
        {
          name: "Sight Unpacked",
          href: "https://sightunpacked.com/destinations/ecuador/quito/intinan-museum/",
        },
        {
          name: "Brooke Beyond",
          href: "https://brookebeyond.com/hiking-to-refugio-jose-rivas-cotopaxi-glacier-in-ecuador",
        },
      ],
    },
  },
  {
    slug: "ecuador-esim",
    title: "Best eSIM for Ecuador",
    description:
      "Best eSIM for Ecuador through one partner, Airalo: install it before you fly, and choose the data and the days on the listing.",
    eyebrow: "Connectivity",
    dek: "One partner. The plan is chosen on their page.",
    hero: "quito-night",
    intro:
      "The best eSIM for Ecuador, on this site, is one tracked partner: Airalo. Gigabytes and price live on the listing.",
    strip: "eSIM",
    transfer: true,
    picks: [
      {
        title: "Install before the flight",
        suits: "Set the line up while you still have wifi at home.",
        included: "The Airalo listing is where the eSIM is bought and installed. Open it before you are standing in the arrivals hall.",
        href: airalo,
        partner: "Airalo",
        photo: "quito-night",
      },
      {
        title: "Choose the data and the days",
        suits: "A short trip or a longer one. The listing is the menu.",
        included: "Data amount and number of days are chosen on Airalo’s page. They are not repeated here.",
        href: airalo,
        partner: "Airalo",
        photo: "quito-basilica",
      },
      {
        title: "A line of your own",
        suits: "When hotel wifi is the only other option.",
        included: "The same Airalo link. It is a data eSIM from that partner, not a second brand.",
        href: airalo,
        partner: "Airalo",
        photo: "uio-airport",
      },
    ],
    know: [
      "One partner only. Other eSIM brands are not listed, because no tracked link exists for them here.",
      "Pick the data amount and the length of the plan on Airalo’s page.",
      "Install it while you still have a connection.",
    ],
    faqs: [
      {
        q: "Which eSIM is this?",
        a: "Airalo, through the tracked partner link on this page. No other brand is offered here.",
      },
      {
        q: "How much data should you buy?",
        a: "Choose the amount and the number of days on the Airalo listing. The plan and the price stay there.",
      },
      {
        q: "When should you install it?",
        a: "Before you are relying on it, while another connection is still available.",
      },
    ],
  },
  {
    slug: "quito-airport-car-rental",
    title: "Renting a car at Quito airport",
    description:
      "Renting a car at Quito airport: compare vehicles for Mariscal Sucre on one partner page, or take a transfer if you would rather not drive.",
    eyebrow: "Mariscal Sucre",
    dek: "A car at the airport, compared on one page.",
    hero: "uio-airport",
    intro:
      "Renting a car at Quito airport, here, means one comparison partner: Economybookings. Rates and vehicle classes stay on that page. A private transfer is a separate choice.",
    strip: "Airport car",
    transfer: true,
    guide: { href: "/visit/quito/", label: "The Quito chapter" },
    picks: [
      {
        title: "Compare cars at the airport",
        suits: "You want a vehicle waiting at Mariscal Sucre.",
        included: "Economybookings compares cars at the airport. Rates and vehicle classes stay on that page.",
        href: car,
        partner: "Economybookings",
        photo: "uio-airport",
      },
      {
        title: "A car for the road south",
        suits: "Cotopaxi and Quilotoa under your own schedule.",
        included:
          "The same comparison link. The south entrance to Cotopaxi follows the E35; the north road via Machachi is the rough one.",
        href: car,
        partner: "Economybookings",
        photo: "cotopaxi",
      },
      {
        title: "A car for the road north",
        suits: "Otavalo, Peguche, and Cuicocha without a tour clock.",
        included: "The same comparison link, aimed at the highway north. Otavalo is about 95 km from Quito.",
        href: car,
        partner: "Economybookings",
        photo: "otavalo",
      },
    ],
    know: [
      "Mariscal Sucre sits on the eastern plateau, outside the city. The Quito chapter is the longer note on arrival.",
      "Rates are on the Economybookings page. None are copied here.",
      "If you would rather not drive away from the terminal, a private transfer is the other button on this page.",
    ],
    faqs: [
      {
        q: "Where do you compare cars at Quito airport?",
        a: "On the Economybookings partner link. Rates and vehicle classes are on that page.",
      },
      {
        q: "Is the airport in the city?",
        a: "Mariscal Sucre is on the eastern plateau, not in central Quito.",
      },
      {
        q: "What if you do not want to drive?",
        a: "UIO Transfers is a private car from the airport, run by the people behind this site. It is their company.",
      },
    ],
  },
  {
    slug: "banos-tours-from-quito",
    title: "Baños day trip from Quito",
    description:
      "Baños day trip from Quito: Pailón del Diablo, the Casa del Árbol swing, and full-day listings we could open. The price stays on the partner’s page.",
    eyebrow: "The gorge",
    dek: "A full day down to the waterfalls.",
    hero: "pailon",
    intro:
      "A Baños day trip from Quito is a long drop off the plateau, into a warmer valley under Tungurahua, and back before midnight. These are listings we could open. The price is on the partner’s page.",
    strip: "Baños",
    transfer: true,
    guide: { href: "/visit/banos/", label: "The Baños chapter" },
    reads: [
      { href: "/do/hot-springs/", label: "Hot springs" },
      { href: "/visit/the-amazon/", label: "The Amazon chapter" },
      { href: "/visit/quilotoa/", label: "Quilotoa" },
    ],
    picks: [
      {
        title: "Pailón and the swing",
        suits: "A private day that names the gorge and the Casa del Árbol.",
        duration: "The listing: a full day",
        included:
          "Private transport, pickup and drop-off inside Quito’s urban area (the listing says up to 7 km), a local guide, entrance fees, and a snack. The stops it names are Pailón del Diablo and the swing at the Casa del Árbol.",
        href: getYourGuideUrl("quito-l504/from-quito-fullday-banos-pailon-del-diablo-waterfall-t496885"),
        partner: "GetYourGuide",
        photo: "pailon",
      },
      {
        title: "Waterfalls, private car",
        suits: "A car of your own, with lunch and the famous stops already named.",
        duration: "Listing duration: 8–10 hours",
        included:
          "The listing includes a bilingual guide, private transport, breakfast, and lunch, and it names the Casa del Árbol, Manto de la Novia, and Pailón del Diablo. Pickup is in Quito.",
        href: viatorUrl("tours/Quito/Banos-de-Agua-Santa-from-Quito-Day-Tour/d735-110340P6"),
        partner: "Viator",
        photo: "banos-swing",
      },
      {
        title: "Town and the pools",
        suits: "A small-group day that spends time in Baños itself.",
        duration: "Listing duration: 10 hours",
        included:
          "A guide, hotel pickup when that option is selected, and entrance to the Huillacuna museum. The overview also names the thermal pools, the church, and the waterfalls. Offered in English and Spanish.",
        href: viatorUrl("tours/Quito/Banos-Full-Day-Tour/d735-3074P158"),
        partner: "Viator",
        photo: "banos-town",
      },
    ],
    know: [
      "Pailón del Diablo is at Río Verde, east of town. The path is slick. The Baños chapter is the longer note on the waterfall road.",
      "The Casa del Árbol swing is a photograph. Clouds decide the view of Tungurahua.",
      "These days are long. The two Viator listings say 8–10 hours and 10 hours. The GetYourGuide day calls itself a full day.",
    ],
    faqs: [
      {
        q: "Can you do Baños as a day trip from Quito?",
        a: "Yes. The listings here start in Quito and return the same day. One private day is 8–10 hours. A small-group day lists 10 hours. A third calls itself a full day and does not print a number of hours.",
      },
      {
        q: "What do the Baños tours from Quito include?",
        a: "The GetYourGuide day names private transport, a guide, entrance fees, and a snack, with stops at Pailón del Diablo and the swing. One Viator day adds lunch and names Manto de la Novia as well. The 10-hour day names the Huillacuna museum and the thermal pools.",
      },
      {
        q: "Is Baños the Amazon?",
        a: "No. It is the last comfortable town before the road drops toward Puyo. The Amazon chapter starts where this gorge ends. A lodge week is a different booking.",
      },
      {
        q: "Should you go the morning you land?",
        a: "Quito is about 2,850 m, and the day is mostly a descent, which is easier than Cotopaxi. It is still a full day on the road. Give yourself a night in the city first if the flight was long.",
      },
    ],
    tripTips: {
      route: ["Quito", "Avenue of the Volcanoes", "Baños", "Río Verde", "Pailón del Diablo"],
      routeNote:
        "The town sits in the Pastaza gorge, under Tungurahua, where the sierra starts to fall toward the Amazon. Pailón del Diablo is the famous fall at Río Verde, east of town along the waterfall road.",
      when:
        "Book a morning start. The Viator private day we opened lists a 7:00 a.m. start. You are back in Quito the same night, which is why the day is long.",
      weather:
        "The valley is warmer and wetter than Quito. The swing and the volcano disappear in cloud. The path into Pailón is slick after rain.",
      stops:
        "Pailón del Diablo, Manto de la Novia on one listing, the Casa del Árbol swing, and the thermal pools in town if the day names them. Rafting and canopy rides are a different purchase.",
      altitude:
        "The day drops off the plateau. That is the opposite of a refuge problem. Bring a light rain jacket, shoes that can handle a wet path, and a layer for the ride home, which climbs again.",
      sources: [
        { name: "Wikipedia, Pailón del Diablo", href: "https://en.wikipedia.org/wiki/Pail%C3%B3n_del_Diablo" },
        {
          name: "GetYourGuide, Baños and Pailón day",
          href: "https://www.getyourguide.com/quito-l504/from-quito-fullday-banos-pailon-del-diablo-waterfall-t496885/",
        },
        {
          name: "Viator, private Baños day",
          href: "https://www.viator.com/tours/Quito/Banos-de-Agua-Santa-from-Quito-Day-Tour/d735-110340P6",
        },
      ],
    },
  },
  {
    slug: "cuenca-cajas-tours",
    title: "Cuenca tours and a Cajas day trip",
    description:
      "Cuenca tours and a Cajas National Park day trip: two park listings from the city, plus the city shelves. Hours and prices stay on the page you open.",
    eyebrow: "The south",
    dek: "The colonial city, then the lakes above it.",
    hero: "cajas",
    intro:
      "Cuenca tours and a Cajas day trip are booked from the city, not from Quito. The park is a high plateau of lakes a short way west. The price is on the partner’s page.",
    strip: "Cuenca & Cajas",
    transfer: true,
    guide: { href: "/visit/cuenca/", label: "The Cuenca chapter" },
    reads: [
      { href: "/do/hiking/", label: "Hiking the Avenue of the Volcanoes" },
      { href: "/retire/best-cities/", label: "Where to live" },
      { href: "/visit/quilotoa/", label: "Quilotoa" },
    ],
    picks: [
      {
        title: "Cajas, full day",
        suits: "A guided day that walks both the cloud forest and the lakes.",
        duration: "Listing duration: 7–8 hours",
        included:
          "Hotel pickup in Cuenca, a walk at Llaviuco, the interpretation center, a hike on the Toreadora trail the listing calls Route 1, and lunch. Vegetarian and vegan meals are available if you ask.",
        href: getYourGuideUrl("cuenca-ecuador-l368/cajas-national-park-full-day-tour-from-cuenca-t851468"),
        partner: "GetYourGuide",
        photo: "cajas",
      },
      {
        title: "Toreadora, then Llaviuco",
        suits: "The same two altitudes, with a named operator and a set hike.",
        duration: "Listing duration: 7 hours 30 minutes",
        included:
          "Polylepis Tours picks up in Cuenca. The listing gives about 2.5 hours around Laguna Toreadora, lunch, then about 30 minutes at Laguna Llaviuco, with a bilingual guide. Shared or private.",
        href: getYourGuideUrl("cuenca-ecuador-l368/cuenca-ec-cajas-national-park-full-day-tour-t276217"),
        partner: "GetYourGuide",
        photo: "cajas-rain",
      },
      {
        title: "Cuenca city tours",
        suits: "The historic center, when the park is the wrong day.",
        included: "GetYourGuide’s Cuenca destination. Open a listing for the hours and the price.",
        href: getAffiliate("gyg-cuenca").href,
        partner: "GetYourGuide",
        photo: "cuenca",
      },
      {
        title: "Cuenca on Viator",
        suits: "A second desk for the city and the ruins nearby.",
        included: "A Viator search for Cuenca. Duration depends on the tour you open.",
        href: getAffiliate("viator-cuenca").href,
        partner: "Viator",
        photo: "cuenca-cathedral",
      },
    ],
    know: [
      "These park days start in Cuenca. They are not a day trip from Quito.",
      "El Cajas is about 30 km west of the city, between about 3,100 m and 4,450 m. Weather turns. Take a layer.",
      "Ingapirca, north of the city, is a cultural day of its own. The hiking chapter puts it next to the park.",
    ],
    faqs: [
      {
        q: "Can you visit Cajas as a day trip from Cuenca?",
        a: "Yes. One listing is 7–8 hours and walks Llaviuco and the Toreadora trail. Another is 7 hours 30 minutes, with about 2.5 hours at Toreadora and a shorter walk at Llaviuco. Both pick up in Cuenca.",
      },
      {
        q: "Is Cajas a day trip from Quito?",
        a: "No. The park sits just west of Cuenca, in the southern sierra. A Quito departure would be an overnight journey, not one of these listings.",
      },
      {
        q: "How high is El Cajas?",
        a: "The park runs from about 3,100 m to about 4,450 m. Cuenca itself is near 2,500 m, the figure this guide uses for the city. The lakes are a real step up.",
      },
      {
        q: "What if you want the city instead of the park?",
        a: "The GetYourGuide and Viator buttons open Cuenca destination pages. Hours and price belong to the tour you choose there. The Cuenca chapter is the walk through the center.",
      },
    ],
    tripTips: {
      route: ["Cuenca", "West about 30 km", "Llaviuco", "Toreadora", "Back to Cuenca"],
      routeNote:
        "That line is the park day. The city itself is a separate booking: the historic center, the Tomebamba, and the cathedral. Ingapirca is farther north, in Cañar, and is not on these two park listings.",
      when:
        "A morning pickup in Cuenca. Both full-day listings are back the same afternoon, which is the shape of a park day rather than a trek.",
      weather:
        "The Cuenca chapter calls the park a high plateau of lakes and cloud, and says the weather is not reliable. Trails are exposed. A dry morning in the city is not a promise at Toreadora.",
      stops:
        "Laguna Toreadora on the páramo, Laguna Llaviuco lower down in the forest, and the interpretation center on the longer listing. The city shelves are for the center, not for these lakes.",
      altitude:
        "The park’s published range is about 3,100–4,450 m, above Cuenca. Drink water, start slowly, and turn around if a headache shows up. This is not a first-day plan after flying into Quito.",
      sources: [
        { name: "Wikipedia, El Cajas", href: "https://en.wikipedia.org/wiki/El_Cajas_National_Park" },
        {
          name: "GetYourGuide, Cajas full day",
          href: "https://www.getyourguide.com/cuenca-ecuador-l368/cajas-national-park-full-day-tour-from-cuenca-t851468/",
        },
        {
          name: "GetYourGuide, Polylepis Cajas day",
          href: "https://www.getyourguide.com/cuenca-ecuador-l368/cuenca-ec-cajas-national-park-full-day-tour-t276217/",
        },
      ],
    },
  },
  {
    slug: "amazon-lodge-tours-from-quito",
    title: "Amazon lodge tour from Quito",
    description:
      "Amazon lodge tour from Quito: Cuyabeno listings that include the ride from the capital, and a Napo lodge week that flies from Quito. No invented prices.",
    eyebrow: "The Oriente",
    dek: "A few nights in a lodge, not a day.",
    hero: "yasuni",
    intro:
      "An Amazon lodge tour from Quito is a few nights on a river, not an afternoon. Cuyabeno and the Napo are different gates. These are listings we could open. The price is on the partner’s page.",
    strip: "Amazon lodge",
    transfer: true,
    guide: { href: "/visit/amazon-cuyabeno-yasuni-tena/", label: "Cuyabeno, Yasuní, or Tena" },
    reads: [
      { href: "/visit/the-amazon/", label: "The Amazon chapter" },
      { href: "/visit/is-ecuador-safe/", label: "Is Ecuador safe?" },
      { href: "/visit/banos/", label: "Baños" },
    ],
    picks: [
      {
        title: "Cuyabeno, four days",
        suits: "A lodge stay that names the bus or the plane from Quito.",
        duration: "Listing duration: 4 days",
        included:
          "The listing includes transport Quito to the Cuyabeno bridge and back, by bus or plane, canoe transfer to the lodge, and the nights on the river. The itinerary visits the Siona community at Tarabeaya.",
        href: getYourGuideUrl("nueva-loja-l5279/cuyabeno-4-dias-y-3-noches-t534094"),
        partner: "GetYourGuide",
        photo: "cuyabeno-canoe",
      },
      {
        title: "Cuyabeno, five days",
        suits: "A longer lodge week with the shuttle from Quito already in the price line.",
        duration: "Listing duration: 5 days",
        included:
          "The listing includes a shuttle Quito–Lago Agrio–Quito, the boat into the reserve, lodging, meals, and activities as the itinerary states them. The lodge it describes sits on the Cuyabeno River.",
        href: viatorUrl("tours/Quito/5-Day-Cuyabeno-Amazon-Eco-Lodge-Adventure/d735-11413P81"),
        partner: "Viator",
        photo: "cuyabeno-lagoon",
      },
      {
        title: "Napo, three nights",
        suits: "A lodge on the Napo, reached by a flight the listing includes.",
        duration: "Listing duration: 3 nights",
        included:
          "Round-trip flights Quito–Coca, pickup from a Quito hotel, meals on the itinerary, and a motorized canoe to the lodge. The listing names Yachana Lodge. It is a tour, not a hotel search.",
        href: viatorUrl(
          "tours/Quito/3-Night-Ecuadorian-Amazon-Tour-from-Quito-with-Accommodation-at-the-Yachana-Lodge/d735-5891GGHO",
        ),
        partner: "Viator",
        photo: "napo",
      },
    ],
    know: [
      "Cuyabeno’s usual road goes through Lago Agrio, in Sucumbíos. The comparison guide is the warning for that gate. Read it in the week you book.",
      "Yasuní is the large park between the Napo and the Curaray, about 250 km from Quito. You do not wander off a lodge program.",
      "None of these is a day trip. A night bus or a morning flight is part of the booking.",
    ],
    faqs: [
      {
        q: "Can you book an Amazon lodge from Quito?",
        a: "Yes. One Cuyabeno listing includes transport from Quito to the bridge and back, by bus or plane. A five-day listing includes a shuttle between Quito and Lago Agrio. A three-night Napo listing includes the flights between Quito and Coca.",
      },
      {
        q: "Is Cuyabeno the same trip as Yasuní?",
        a: "No. Cuyabeno is a lagoon reserve reached through Lago Agrio. Yasuní is the larger park, reached from Coca on the Napo. The comparison guide is which one matches the warning you are willing to accept.",
      },
      {
        q: "How long is a lodge tour?",
        a: "The listings here are 4 days, 5 days, and 3 nights. A day in the forest is not one of them.",
      },
      {
        q: "Do you need to think about yellow fever?",
        a: "The comparison guide quotes the CDC: yellow fever vaccine is recommended for travelers 9 months and older going below 2,300 meters in several eastern provinces, and it is not a recommendation for Quito. That page is not medical advice. Talk to your own doctor.",
      },
    ],
    tripTips: {
      route: ["Quito", "Lago Agrio or Coca", "A river", "The lodge", "Back to Quito"],
      routeNote:
        "Cuyabeno uses the northern gate, through Lago Agrio, then a canoe from the bridge. The Napo listing flies Quito to Coca and continues by motorized canoe. They are not interchangeable roads.",
      when:
        "Book the nights, not a morning. The Cuyabeno bus, when that is the ride, is described as the night before or a long daytime haul. The Napo listing starts with an early hotel pickup in Quito for the flight.",
      weather:
        "Lowland heat and rain. A rain jacket and repellent matter more than a fleece, once you are off the páramo. The climb back to Quito is the cold part.",
      stops:
        "On the Cuyabeno listings: the river, a lagoon, a night walk, and a community visit where the itinerary names one. On the Napo listing: the canoe, a jungle walk, and the lodge program. Yasuní is not a place to leave the group.",
      altitude:
        "Quito is about 2,850 m. The lodges are not. The CDC note in the comparison guide is for land below 2,300 m in the eastern provinces. Come back to the capital slowly if you can.",
      sources: [
        { name: "Wikipedia, Yasuní", href: "https://en.wikipedia.org/wiki/Yasun%C3%AD_National_Park" },
        { name: "Wikipedia, Cuyabeno", href: "https://en.wikipedia.org/wiki/Cuyabeno_Wildlife_Reserve" },
        {
          name: "GetYourGuide, 4-day Cuyabeno",
          href: "https://www.getyourguide.com/nueva-loja-l5279/cuyabeno-4-dias-y-3-noches-t534094/",
        },
        {
          name: "Viator, Yachana from Quito",
          href: "https://www.viator.com/tours/Quito/3-Night-Ecuadorian-Amazon-Tour-from-Quito-with-Accommodation-at-the-Yachana-Lodge/d735-5891GGHO",
        },
      ],
    },
  },
  {
    slug: "chimborazo-day-trip",
    title: "Chimborazo day trip from Quito or Riobamba",
    description:
      "Chimborazo day trip from Quito or Riobamba: refuge listings we could open, a summit of 6,263 m, and why the high parking is already the day.",
    eyebrow: "The colossus",
    dek: "The closest ground to the sun. The refuge is the plan.",
    hero: "chimborazo",
    intro:
      "A Chimborazo day trip from Quito or Riobamba is a drive into the reserve, not a summit. The mountain is 6,263 m. These are listings we could open. The price is on the partner’s page.",
    strip: "Chimborazo",
    transfer: true,
    guide: { href: "/do/hiking/", label: "Hiking the Avenue of the Volcanoes" },
    reads: [
      { href: "/visit/cotopaxi/", label: "Cotopaxi" },
      { href: "/visit/banos/", label: "Baños" },
      { href: "/visit/quito-altitude-sickness/", label: "Quito altitude" },
    ],
    picks: [
      {
        title: "Private hike from Riobamba",
        suits: "A day that starts in Riobamba and walks toward the second refuge.",
        duration: "Listing duration: 9 hours",
        included:
          "Pickup from a Riobamba hotel or the bus terminal, a local guide, and a traditional Andean lunch. The listing drives to about 4,800 m and describes a hike of about an hour toward 5,000–5,100 m. A drop in Baños is extra.",
        href: getYourGuideUrl("riobamba-l2234/riobamba-chimborazo-volcano-private-hiking-tour-t469501"),
        partner: "GetYourGuide",
        photo: "chimborazo",
      },
      {
        title: "Hike and a downhill bike",
        suits: "A long day whose Viator title starts in Quito.",
        duration: "Listing duration: 12 hours 30 minutes",
        included:
          "The page is titled as a hike and downhill bike from Quito, all inclusive, with a start the listing puts in the early morning. Open it for what the bike day actually covers. It is a different shape from a refuge walk.",
        href: viatorUrl(
          "tours/Quito/Chimborazo-Tour-from-Banos-Hiking-and-Downhill-Bike-All-Inclusive/d735-152993P4",
        ),
        partner: "Viator",
        photo: "vicuna",
      },
      {
        title: "From Baños, via Riobamba",
        suits: "You are already in the gorge and want the volcano on the way.",
        duration: "Listing duration: 6–8 hours",
        included:
          "A small-group day from Baños via Riobamba, in a four-wheel-drive, with a guide. The listing caps the group at 15 and mentions vicuñas on the reserve. Pickup is arranged in Baños.",
        href: viatorUrl("tours/Banos/Chimborazo-Day-Trip-Banos-Riobamba-Ecuador/d22150-114084P5"),
        partner: "Viator",
        photo: "chimborazo-refuge",
      },
    ],
    know: [
      "The summit is a glaciated climb. These listings are refuge and reserve days. Ice wants an accredited guide, which the hiking chapter names as ASEGUIM.",
      "The Riobamba hike lists a drive of about 1 hour 30 minutes from the city to the volcano, then a car to about 4,800 m.",
      "Vicuñas live on the reserve. They are not a petting zoo. Stay on the trail the guide uses.",
    ],
    faqs: [
      {
        q: "Can Chimborazo be a day trip from Quito?",
        a: "One Viator listing is titled as a day from Quito and runs about 12 hours 30 minutes, with a hike and a downhill bike. The 9-hour private hike starts in Riobamba. The 6–8 hour day starts in Baños. Quito to the refuge and back is the long version.",
      },
      {
        q: "How high do these days go?",
        a: "The Riobamba listing drives to about 4,800 m and walks toward 5,000–5,100 m. The summit is 6,263 m. That last stretch is a different trip, on ice.",
      },
      {
        q: "Is Chimborazo the highest mountain on earth?",
        a: "It is the farthest point on the earth’s surface from the planet’s center, because the earth bulges at the equator. It is not the highest above sea level. The height above the sea is 6,263 m.",
      },
      {
        q: "When should you not go?",
        a: "Not the morning you land in Quito. The altitude chapter is the reason. A headache, nausea, or dizziness is a reason to descend, not to continue toward the refuge.",
      },
    ],
    tripTips: {
      route: ["Quito or Baños", "Riobamba", "The reserve", "High parking", "A short walk"],
      routeNote:
        "Riobamba is the practical base. The private listing times the drive from there at about 1 hour 30 minutes, with a canyon stop on the way. From Quito the day is much longer. From Baños the 6–8 hour listing goes via Riobamba.",
      when:
        "A clear morning, and not your first day at altitude. The bike listing’s start is early. The refuge walk is still a full day out of Riobamba.",
      weather:
        "Wind and cloud on the páramo. The summit disappears. Turn around when the guide says the weather has changed. A sunny parking lot is not a promise an hour higher.",
      stops:
        "The high parking, the walk toward the second refuge on the Riobamba listing, and the vicuñas on the reserve road. The Carrel refuge is the hut in that landscape. It is not a café you should count on.",
      altitude:
        "Summit 6,263 m. The listing’s car reaches about 4,800 m, which is already above Cotopaxi’s Limpiopungo and close to the José Rivas refuge. Water, sun protection, a warm layer, and the honesty to go down.",
      sources: [
        { name: "Wikipedia, Chimborazo", href: "https://en.wikipedia.org/wiki/Chimborazo" },
        {
          name: "GetYourGuide, Riobamba hike",
          href: "https://www.getyourguide.com/riobamba-l2234/riobamba-chimborazo-volcano-private-hiking-tour-t469501/",
        },
        {
          name: "Viator, day from Baños",
          href: "https://www.viator.com/tours/Banos/Chimborazo-Day-Trip-Banos-Riobamba-Ecuador/d22150-114084P5",
        },
      ],
    },
  },
  {
    slug: "galapagos-tours-how-to-book",
    title: "How to book Galápagos tours",
    description:
      "How to book Galápagos tours: a cruise, an island-hopping week, and a day boat, as three listings. Park fee and transit card are the only prices printed here.",
    eyebrow: "The islands",
    dek: "Cruise, land week, or a day boat.",
    hero: "bartolome",
    intro:
      "Galápagos tour prices live on the operator’s page. The choice before that is the shape: a cruise, island-hopping on land, or a day tour once you are already there. These are listings we could open.",
    strip: "How to book",
    transfer: true,
    guide: { href: "/visit/galapagos-trip-cost/", label: "What a Galápagos trip costs" },
    reads: [
      { href: "/visit/galapagos-without-a-cruise/", label: "Galápagos without a cruise" },
      { href: "/visit/which-galapagos-island/", label: "Which island" },
      { href: "/visit/galapagos/", label: "The Galápagos chapter" },
    ],
    picks: [
      {
        title: "A small-ship cruise",
        suits: "You want the boat to be the hotel, and the sites to change overnight.",
        duration: "Listing duration: 5 days",
        included:
          "A west itinerary on the Monserrat, which the listing caps at 20 travelers, with a naturalist guide and breakfast, lunch, and dinner. It starts from Baltra. The cabin price is on that page.",
        href: viatorUrl("tours/Santa-Cruz/Monserrat-Galapagos-Cruise-Itinerary-A-5-Days/d50212-306214P3"),
        partner: "Viator",
        photo: "bartolome",
      },
      {
        title: "Island-hopping, five days",
        suits: "A hotel on Santa Cruz, and boats that come back.",
        duration: "Listing duration: 5 days",
        included:
          "The listing includes airport transfers, a hotel on Santa Cruz, a bay tour, Tortuga Bay, an Isabela day, and a Santa Fe boat, with a naturalist guide. It does not include the flight. Do not trust an old park-fee figure printed on a tour page. Use the cost chapter.",
        href: getYourGuideUrl("puerto-ayora-l148437/galapagos-land-tour-3-islands-5-days-t658983"),
        partner: "GetYourGuide",
        photo: "booby",
      },
      {
        title: "A day boat from Santa Cruz",
        suits: "You already have a bed in Puerto Ayora and want one island offshore.",
        included:
          "North Seymour by yacht: a morning bus from the Puerto Ayora pier, about 40 minutes to the Itabaca Channel, about an hour to the island, a trail of about 2.5 hours, and a return the listing puts around 4:30 p.m. More days from the same island are on the Santa Cruz page.",
        href: getYourGuideUrl("puerto-ayora-l148437/north-seymour-day-tour-t530526"),
        partner: "GetYourGuide",
        photo: "iguana",
      },
    ],
    know: [
      "Flights to Baltra or San Cristóbal leave from Quito and from Guayaquil. A Quito airport pickup is a separate decision from the boat.",
      "The park’s entry table and the $20 transit card are in the cost chapter. A tour page that still prints an older fee is behind the ordinance.",
      "A cruise sees more remote sites. A land week sees the towns. A day tour is neither of those. It starts where you already sleep.",
    ],
    faqs: [
      {
        q: "How do you book a Galápagos tour?",
        a: "Pick the shape first. A cruise listing, such as the five-day Monserrat itinerary, includes the cabin and the moves between sites. An island-hopping listing includes a hotel and day boats, and usually not the flight. A day tour is booked after you are on an island, or alongside the hotel.",
      },
      {
        q: "What are the official fees?",
        a: "The Galápagos National Park’s current table lists US $200 for a foreign tourist over 12. The transit control card is US $20. Both are separate from the tour price. Children under 2 are exempt on both pages. Open the fee pages again before you pay.",
      },
      {
        q: "Does the cruise price include the flight from Quito?",
        a: "Do not assume it. The five-day land tour we opened excludes the national flight. Read the included list on the cruise you choose. The flight is its own quote.",
      },
      {
        q: "Which island should the hotel be on?",
        a: "Santa Cruz, San Cristóbal, or Isabela. The island chapter is that choice. Baltra serves Santa Cruz. San Cristóbal’s airport is on the island. Isabela is usually a boat, not a jet.",
      },
      {
        q: "Where do the day tours start?",
        a: "The North Seymour day starts in Puerto Ayora, not in Quito. The Santa Cruz day-tours page is the longer list of that kind of booking.",
      },
    ],
    tripTips: {
      route: ["Quito or Guayaquil", "Baltra or San Cristóbal", "A town or a ship", "A visitor site"],
      routeNote:
        "The flight is the first hop. A cruise continues from the airport to the boat. A land week continues to a hotel, then to day boats. The North Seymour day is a third map: pier, bus, channel, yacht, and back by late afternoon.",
      when:
        "Book the shape before the cabin. Cruises and the better land weeks fill. A day boat can be the week you are already in Puerto Ayora. The cost chapter refuses to print a flight price because it goes stale.",
      weather:
        "The North Seymour listing, quoted on the Santa Cruz day-tours page, describes the sea as cooler from June through November and warmer from December through May. A cruise itinerary still depends on the park’s daily call.",
      stops:
        "On a cruise, the sites named on that boat’s itinerary. On the five-day land tour: Santa Cruz, an Isabela day, and Santa Fe or a similar boat. On the day tour: North Seymour, with a possible stop at Mosquera or Las Bachas.",
      altitude:
        "The islands are at sea level, which is the relief after Quito. Bring the documents the transit-card page asks for, a round-trip ticket, and the patience for two airport counters. Sun protection on the water. A licensed guide where the park requires one.",
      sources: [
        { name: "Galápagos National Park, entry fee", href: "https://galapagos.gob.ec/tributo-de-ingreso/" },
        {
          name: "CGREG, transit card",
          href: "https://www.gob.ec/cgreg/tramites/emision-tarjeta-control-transito-turistas-transeuntes",
        },
        {
          name: "GetYourGuide, 5-day land tour",
          href: "https://www.getyourguide.com/puerto-ayora-l148437/galapagos-land-tour-3-islands-5-days-t658983/",
        },
        {
          name: "Viator, Monserrat 5-day cruise",
          href: "https://www.viator.com/tours/Santa-Cruz/Monserrat-Galapagos-Cruise-Itinerary-A-5-Days/d50212-306214P3",
        },
      ],
    },
  },
  {
    slug: "papallacta-hot-springs-day-trip",
    title: "Papallacta hot springs day trip from Quito",
    description:
      "Papallacta hot springs day trip from Quito: páramo listings and a soak at 3,300 m. The village is east of the city, on the road toward the Amazon.",
    eyebrow: "The road east",
    dek: "A high soak, and the volcanoes on the way.",
    hero: "papallacta",
    intro:
      "A Papallacta hot springs day trip from Quito climbs east into the páramo, soaks, and comes back. The village sits at 3,300 m. These are listings we could open. The price is on the partner’s page.",
    strip: "Papallacta",
    transfer: true,
    guide: { href: "/do/hot-springs/", label: "Hot springs" },
    reads: [
      { href: "/visit/quito/", label: "Quito" },
      { href: "/visit/quito-altitude-sickness/", label: "Quito altitude" },
      { href: "/visit/the-amazon/", label: "The Amazon chapter" },
    ],
    picks: [
      {
        title: "Páramo, then the pools",
        suits: "A set day with a hike before the soak.",
        duration: "Listing duration: 9 hours",
        included:
          "Hotel pickup, a drive toward the eastern Andes, a hike on páramo paths in Cayambe-Coca National Park, and time at the Papallacta hot springs. The listing mentions a stop near 4,000 m when the weather allows a view of Cayambe.",
        href: getYourGuideUrl("quito-l504/quito-full-day-trip-to-papallacta-hot-springs-and-the-area-t823509"),
        partner: "GetYourGuide",
        photo: "papallacta",
      },
      {
        title: "Private soak and a walk",
        suits: "A shorter private day built around the pools.",
        duration: "Listing duration: 8 hours",
        included:
          "A certified guide, private transport, hotel pickup and drop-off in Quito, and the entrance to the Termas spa. The listing describes a walk of about 1.5 hours in the cloud forest of Cayambe-Coca. It asks for a minimum of two people.",
        href: viatorUrl("tours/Quito/Termas-Papallacta-Hot-Springs-Day-Tour/d735-10512P9"),
        partner: "Viator",
        photo: "papallacta-pools",
      },
      {
        title: "Guango and the pass",
        suits: "Birds and Antisana on the way to the same water.",
        duration: "Listing duration: 8–10 hours",
        included:
          "A private day with hotel pickup, including the airport area, a bilingual naturalist guide, and the Guango cloud-forest reserve. The listing names a stop at the hot-spring complex and Antisana on a clear pass. Read the included list for whether lunch is in the price.",
        href: viatorUrl(
          "tours/Quito/Papallacta-Hot-Springs-and-Guango-Cloud-Forest-Reserve-PRIVATE/d735-103137P3",
        ),
        partner: "Viator",
        photo: "antisana",
      },
    ],
    know: [
      "Papallacta is a village at 3,300 m in Napo, east of Quito. The pools are a resort in that valley. The lagoon is the cold water above them.",
      "The road continues toward Baeza and, eventually, the Amazon. The pools are a destination. They are not a stop on the way to a lodge the same day.",
      "One listing climbs toward 4,000 m for a view. That is higher than the village. Do not stack it on the afternoon you land.",
    ],
    faqs: [
      {
        q: "How long is a Papallacta day trip from Quito?",
        a: "One listing says 9 hours, with a páramo hike and the springs. A private spa day says 8 hours, with a walk of about 1.5 hours. A Guango and pass day says 8–10 hours.",
      },
      {
        q: "How high is Papallacta?",
        a: "The village is at 3,300 m. Quito is about 2,850 m, so the day goes up, not down. A viewpoint on one listing is near 4,000 m.",
      },
      {
        q: "Are the pools the same as the lagoon?",
        a: "No. Laguna de Papallacta is the cold lake in the páramo. The hot springs are the developed pools lower in the valley. A photograph of the lake is not a photograph of the soak.",
      },
      {
        q: "Can you continue to the Amazon the same day?",
        a: "The hot-springs chapter calls that a long drive and treats the pools as their own destination. A lodge tour is booked as nights, not as the end of this day.",
      },
    ],
    tripTips: {
      route: ["Quito", "East over the páramo", "The pass", "Papallacta", "Back to Quito"],
      routeNote:
        "The road leaves the city toward the eastern cordillera. Antisana, at 5,753 m, sits about 50 km southeast of Quito and shows on a clear pass. The village is the soak. Baeza and the Napo are farther down the same highway.",
      when:
        "A morning departure, and not your first afternoon in Quito. The 9-hour listing is the fuller hike. The 8-hour private day is the soak with a shorter walk.",
      weather:
        "Páramo cloud and a cold wind at the pass, then warm water. A view of Cayambe or Antisana is a weather event, not a guarantee. Bring a layer for the overlook and a swimsuit for the pools.",
      stops:
        "The hot springs, a páramo path in Cayambe-Coca on the longer listing, and Guango if you booked the bird day. Oyacachi, a smaller community pool in the same region, is the alternative in the hot-springs chapter. It is not on these three listings.",
      altitude:
        "3,300 m in the village, and near 4,000 m if the day climbs for the view. Drink water, eat, and skip the trip if Quito has already given you a headache. The altitude chapter is the rule for the first 48 hours.",
      sources: [
        { name: "Wikipedia, Papallacta", href: "https://en.wikipedia.org/wiki/Papallacta" },
        { name: "Wikipedia, Antisana", href: "https://en.wikipedia.org/wiki/Antisana" },
        {
          name: "GetYourGuide, Papallacta day",
          href: "https://www.getyourguide.com/quito-l504/quito-full-day-trip-to-papallacta-hot-springs-and-the-area-t823509/",
        },
      ],
    },
  },
  {
    slug: "quito-teleferico-pichincha",
    title: "Quito TelefériQo and a Pichincha hike",
    description:
      "Quito TelefériQo and a Pichincha hike: cable-car listings from the city, Cruz Loma, and why Rucu is not a first-day walk.",
    eyebrow: "Above the city",
    dek: "The gondola to Cruz Loma. The summit is extra.",
    hero: "teleferiqo",
    intro:
      "The Quito TelefériQo is a gondola from the edge of the city up Pichincha to Cruz Loma. A hike toward Rucu is a further choice, and a higher one. These are listings we could open. The price is on the partner’s page.",
    strip: "TelefériQo",
    transfer: true,
    guide: { href: "/visit/quito/", label: "The Quito chapter" },
    reads: [
      { href: "/visit/quito-altitude-sickness/", label: "Quito altitude" },
      { href: "/do/hiking/", label: "Hiking the Avenue of the Volcanoes" },
      { href: "/book/quito-city-and-mitad-del-mundo-tours/", label: "Quito and Mitad del Mundo" },
    ],
    picks: [
      {
        title: "Cable car and the old town",
        suits: "The gondola plus the historic center, in one private day.",
        included:
          "The listing rides the TelefériQo to about 4,100 m, then the Basílica, the historic center, El Panecillo, Mitad del Mundo, Intiñan, and the Pululahua viewpoint. Private transport, a bilingual guide, hotel pickup, and entrance tickets are included.",
        href: getYourGuideUrl("quito-l504/quito-full-day-teleferico-old-town-middle-of-the-world-t1330730"),
        partner: "GetYourGuide",
        photo: "quito-basilica",
      },
      {
        title: "Cable car, with a hike if you want it",
        suits: "The gondola as the point, and Rucu only as an option.",
        included:
          "A private guide and vehicle to the TelefériQo, then Cruz Loma. The listing offers an optional trek of about 4 hours toward Pichincha, or a horseback ride. Food is not included. The meeting point it names is Plaza Foch.",
        href: viatorUrl("tours/Quito/Teleferico-Volcan-Pichincha/d735-101734P3"),
        partner: "Viator",
        photo: "teleferiqo-gondolas",
      },
      {
        title: "Cable car and the equator",
        suits: "The view first, then the monument north of the city.",
        included:
          "The TelefériQo, which this listing puts above 4,000 m, and the Intiñan museum at the equator line. A guide rides with you. Volcanoes on a clear day are named as Cotopaxi, Cayambe, Antisana, and Pichincha.",
        href: getYourGuideUrl("quito-l504/quito-cable-car-middle-of-the-world-t1411818"),
        partner: "GetYourGuide",
        photo: "mitad",
      },
    ],
    know: [
      "Wikipedia puts the lift from 3,117 m to 3,945 m, about twenty minutes, over 2,237 m of line. One tour page says about 4,100 m. The altitude chapter quotes the FCDO at 4,050 m for Cruz Loma. Treat every figure as a high station, not a sea-level viewpoint.",
      "Rucu Pichincha is 4,698 m. Guagua Pichincha, the active peak, is 4,784 m. The optional trek is not a stroll at the station.",
      "The FCDO notes deaths from hypothermia on the way toward Rucu. The altitude chapter is why this is not a first-night plan.",
    ],
    faqs: [
      {
        q: "How do you visit the Quito TelefériQo?",
        a: "On these listings, with a guide and a car from the city. One pairs the gondola with the old town and the equator. One is the cable car itself, with an optional hike. One pairs it with Intiñan. Tickets bought on your own are a different errand. This page does not invent a walk-up fare.",
      },
      {
        q: "Can you hike Pichincha from the top of the cable car?",
        a: "The Viator listing offers an optional trek of about 4 hours toward Pichincha after the ride to Cruz Loma. Rucu is 4,698 m. That is a high walk, in weather that changes, and the FCDO has warned of hypothermia on that route.",
      },
      {
        q: "How high is the upper station?",
        a: "Wikipedia says 3,945 m, up from 3,117 m. A tour page says about 4,100 m. The FCDO figure in the altitude chapter is 4,050 m at Cruz Loma. The ride is short. The air is not.",
      },
      {
        q: "Is this a plan for the day you land?",
        a: "No. Quito is already about 2,850 m. The station is far above that. The altitude chapter says to leave the cable car for a later day, and to skip alcohol and heavy exercise for at least 48 hours after you arrive.",
      },
    ],
    tripTips: {
      route: ["Quito", "The lower station", "Cruz Loma", "Optional trail toward Rucu"],
      routeNote:
        "The lift climbs the east side of Pichincha from the edge of the city. The old-town and equator stops, on two of these listings, are a separate loop in the same day. They are not on the mountain.",
      when:
        "After you have slept in Quito. A clear morning is when Cotopaxi and Cayambe show up. Cloud is the more common story. Do not start the optional hike late.",
      weather:
        "Wind and a fast drop in temperature at the station. Hypothermia is the FCDO’s warning on the trail toward Rucu, not a blog’s color. Turn around when cloud or cold arrives.",
      stops:
        "Cruz Loma for the view. The Basílica, El Panecillo, and the equator only if you booked the city combination. The optional 4-hour trek is the hike. Horseback, on that same listing, is the other extra.",
      altitude:
        "Lower station 3,117 m, upper station 3,945 m on Wikipedia. Rucu 4,698 m. Bring a warm layer even if the hotel felt mild, water, and sun protection. Go down if a headache starts. The city is the cure, not another viewpoint.",
      sources: [
        { name: "Wikipedia, TelefériQo", href: "https://en.wikipedia.org/wiki/Telef%C3%A9riQo" },
        { name: "Wikipedia, Pichincha", href: "https://en.wikipedia.org/wiki/Pichincha_(volcano)" },
        {
          name: "FCDO, safety and security",
          href: "https://www.gov.uk/foreign-travel-advice/ecuador/safety-and-security",
        },
      ],
    },
  },
  {
    slug: "cuicocha-peguche-day-trip",
    title: "Cuicocha and Peguche day trip from Quito",
    description:
      "Cuicocha and Peguche day trip from Quito: a crater-lake day, a waterfall day, and a two-day that does both. The market is the Saturday context.",
    eyebrow: "Imbabura",
    dek: "The crater lake, and the waterfall in the forest.",
    hero: "cuicocha",
    intro:
      "A Cuicocha and Peguche day trip from Quito is the northern valley without making the market the whole point. One listing is the lake. One is the waterfall. A third takes two days to do both. The price is on the partner’s page.",
    strip: "Cuicocha & Peguche",
    transfer: true,
    guide: { href: "/visit/otavalo/", label: "The Otavalo chapter" },
    reads: [
      { href: "/do/hiking/", label: "Hiking the Avenue of the Volcanoes" },
      { href: "/book/otavalo-tours-from-quito/", label: "Otavalo market day trips" },
      { href: "/visit/quito/", label: "Quito" },
    ],
    picks: [
      {
        title: "Market and Cuicocha",
        suits: "The crater on the way back from the Saturday square.",
        included:
          "A day from Quito through the Otavalo market, with Cuicocha on the return and an optional stop in Cotacachi. The listing describes the lake as a crater of Cotacachi volcano. Open it for the day’s length.",
        href: getYourGuideUrl("cayambe-l2257/otavalo-market-cuicocha-day-tour-from-quito-t524327"),
        partner: "GetYourGuide",
        photo: "cuicocha",
      },
      {
        title: "Peguche waterfall",
        suits: "The forest and the fall, with the market as a stop rather than the subject.",
        duration: "Listing duration: 8 hours",
        included:
          "Pickup in Quito, the Cayambe bizcocho stop, the Miralago viewpoint, the Otavalo market, Peguche waterfall, and Ñanda Mañachi. The listing gives the waterfall walk about an hour.",
        href: getYourGuideUrl("cayambe-l2257/from-quito-to-otavalo-bizcocho-and-peguche-waterfall-t769532"),
        partner: "GetYourGuide",
        photo: "peguche",
      },
      {
        title: "Both, with a night",
        suits: "When the lake and the waterfall will not fit before dark.",
        duration: "Listing duration: 2 days",
        included:
          "Day one is the market and a night at Hacienda Pinsaqui. Day two is Peguche, a boat on Cuicocha, and Cotacachi, then Quito. The listing puts Cuicocha at 3,068 m and the fall at 18 m, inside the Peguche protected forest.",
        href: getYourGuideUrl("otavalo-l2259/otavalo-cuicocha-lagoon-relax-2-days-1-night-t832172"),
        partner: "GetYourGuide",
        photo: "otavalo",
      },
    ],
    know: [
      "Cuicocha is a crater lake about 3 km wide, at the foot of Cotacachi. The two-day listing puts it at 3,068 m.",
      "Peguche is a short way north of Otavalo. One day listing gives the walk about an hour. The fall on the two-day listing is 18 m.",
      "Saturday is the full market. The Otavalo day-trip page is the longer note on that square. This page is the lake and the waterfall.",
    ],
    faqs: [
      {
        q: "Can you see Cuicocha and Peguche in one day from Quito?",
        a: "The single-day listings here split them. One is the market and Cuicocha. One is Peguche, in 8 hours, with the market as a stop. The listing that does the waterfall and a boat on Cuicocha takes two days and a night.",
      },
      {
        q: "How high is Cuicocha?",
        a: "The two-day listing says 3,068 m. Otavalo town, on the Otavalo page, is near 2,532 m. The lake is higher than the town, and a little higher than Quito. It is windy on the rim. It is not Cotopaxi.",
      },
      {
        q: "How far is the valley from Quito?",
        a: "Otavalo is about 95 km north on the E35. The Otavalo page’s published drives run from 1.5–2 hours to about 2–2.5 hours. Peguche is a short hop north of town. Cuicocha is west, toward Cotacachi.",
      },
      {
        q: "Is this the same as an Otavalo market tour?",
        a: "The market appears on all three listings, because it is on the way. The point of this page is the crater and the waterfall. If Saturday’s square is the reason for the trip, use the Otavalo day-trip page.",
      },
    ],
    tripTips: {
      route: ["Quito", "E35 north", "Otavalo", "Peguche", "Cuicocha"],
      routeNote:
        "The highway runs north through the Cayambe valley. Peguche is just north of Otavalo, in a protected forest. Cuicocha is west, in the crater of Cotacachi, with Imbabura across the view from the other side of the valley.",
      when:
        "Saturday if the market matters. The waterfall and the lake do not require it. Leave time to be back in Quito before dark if you are not taking the overnight listing.",
      weather:
        "Highland sun and a cold wind on the crater rim. The forest at Peguche is wetter than the square. A light jacket covers both. The rim walk is the exposed part.",
      stops:
        "Peguche waterfall, the Cuicocha rim or the boat the two-day listing includes, and Cotacachi if the day names the leather town. Ask before you photograph people. The market’s bargaining belongs with crafts, not with the lake.",
      altitude:
        "Cuicocha at 3,068 m on the two-day listing. Otavalo town is lower, near 2,532 m on that same page. You are still in the highlands. Water, and a slower first hour if Quito has not felt easy yet.",
      sources: [
        { name: "Wikipedia, Cuicocha", href: "https://en.wikipedia.org/wiki/Cuicocha" },
        {
          name: "GetYourGuide, Peguche day",
          href: "https://www.getyourguide.com/cayambe-l2257/from-quito-to-otavalo-bizcocho-and-peguche-waterfall-t769532/",
        },
        {
          name: "GetYourGuide, two days with Cuicocha",
          href: "https://www.getyourguide.com/otavalo-l2259/otavalo-cuicocha-lagoon-relax-2-days-1-night-t832172/",
        },
      ],
    },
  },

];

export function findBook(slug: string | undefined): BookPage | undefined {
  return bookPages.find((page) => page.slug === slug);
}

export function bookPath(page: Pick<BookPage, "slug">): string {
  return `/book/${page.slug}/`;
}
