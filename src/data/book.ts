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
    title: "Best Cotopaxi tours from Quito",
    description:
      "Best Cotopaxi tours from Quito: park and glacier listings we could open, the drive south on the E35, and what 4,864 m asks of you.",
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
    title: "Quilotoa day trips from Quito",
    description:
      "Quilotoa day trips from Quito: crater listings, the road through Latacunga, and a rim at 3,914 m.",
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
];

export function findBook(slug: string | undefined): BookPage | undefined {
  return bookPages.find((page) => page.slug === slug);
}

export function bookPath(page: Pick<BookPage, "slug">): string {
  return `/book/${page.slug}/`;
}
