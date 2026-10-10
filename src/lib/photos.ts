import type { ImageMetadata } from "astro";
import creditsJson from "../data/photo-credits.json";

import bartolome from "../assets/photos/bartolome.jpg";
import booby from "../assets/photos/booby.jpg";
import chimborazo from "../assets/photos/chimborazo.jpg";
import cotopaxi from "../assets/photos/cotopaxi.jpg";
import cuenca from "../assets/photos/cuenca.jpg";
import cuencaCathedral from "../assets/photos/cuenca-cathedral.jpg";
import cuicocha from "../assets/photos/cuicocha.jpg";
import frailes from "../assets/photos/frailes.jpg";
import iguana from "../assets/photos/iguana.jpg";
import llapingachos from "../assets/photos/llapingachos.jpg";
import mindo from "../assets/photos/mindo.jpg";
import otavalo from "../assets/photos/otavalo.jpg";
import pailon from "../assets/photos/pailon.jpg";
import papallacta from "../assets/photos/papallacta.jpg";
import quilotoa from "../assets/photos/quilotoa.jpg";
import quitoBasilica from "../assets/photos/quito-basilica.jpg";
import quitoPlaza from "../assets/photos/quito-plaza.jpg";
import saquisili from "../assets/photos/saquisili.jpg";
import vilcabamba from "../assets/photos/vilcabamba.jpg";
import yasuni from "../assets/photos/yasuni.jpg";
import uioAirport from "../assets/photos/uio-airport.jpg";
import sangay from "../assets/photos/sangay.jpg";
import santoDomingo from "../assets/photos/santo-domingo.jpg";
import puenteRoto from "../assets/photos/puente-roto.jpg";
import quitoNight from "../assets/photos/quito-night.jpg";
import guaguas from "../assets/photos/guaguas.jpg";
import intiRaymi from "../assets/photos/inti-raymi.jpg";
import carnaval from "../assets/photos/carnaval.jpg";
import viernesSanto from "../assets/photos/viernes-santo.jpg";
import malecon from "../assets/photos/malecon.jpg";
import mitad from "../assets/photos/mitad.jpg";
import teleferiqo from "../assets/photos/teleferiqo.jpg";
import teleferiqoGondolas from "../assets/photos/teleferiqo-gondolas.jpg";
import cajas from "../assets/photos/cajas.jpg";
import cajasRain from "../assets/photos/cajas-rain.jpg";
import banosSwing from "../assets/photos/banos-swing.jpg";
import banosTown from "../assets/photos/banos-town.jpg";
import peguche from "../assets/photos/peguche.jpg";
import vicuna from "../assets/photos/vicuna.jpg";
import chimborazoRefuge from "../assets/photos/chimborazo-refuge.jpg";
import cuyabenoCanoe from "../assets/photos/cuyabeno-canoe.jpg";
import cuyabenoLagoon from "../assets/photos/cuyabeno-lagoon.jpg";
import napo from "../assets/photos/napo.jpg";
import antisana from "../assets/photos/antisana.jpg";
import papallactaPools from "../assets/photos/papallacta-pools.jpg";
import plazaGrande from "../assets/photos/plaza-grande.jpg";
import locroPapa from "../assets/photos/locro-papa.jpg";
import amazonasMariscal from "../assets/photos/amazonas-mariscal.jpg";
import plazaFoch from "../assets/photos/plaza-foch.jpg";
import cuencaCathedralDomes from "../assets/photos/cuenca-cathedral-domes.jpg";
import calleLarga from "../assets/photos/calle-larga.jpg";
import plazaFlores from "../assets/photos/plaza-flores.jpg";
import parqueMadre from "../assets/photos/parque-madre.jpg";
import santaAna from "../assets/photos/santa-ana.jpg";
import cevicheCamaron from "../assets/photos/ceviche-camaron.jpg";
import nueveOctubre from "../assets/photos/nueve-octubre.jpg";
import lasPenas from "../assets/photos/las-penas.jpg";
import banosChurch from "../assets/photos/banos-church.jpg";
import banosTermas from "../assets/photos/banos-termas.jpg";
import banosStreet from "../assets/photos/banos-street.jpg";
import banosPark from "../assets/photos/banos-park.jpg";
import quitoPanecillo from "../assets/photos/quito-panecillo.jpg";
import quitoHill from "../assets/photos/quito-hill.jpg";
import guayaquilSkyline from "../assets/photos/guayaquil-skyline.jpg";
import nigiri from "../assets/photos/nigiri.jpg";
import pastaAmatriciana from "../assets/photos/pasta-amatriciana.jpg";
import tunaFoie from "../assets/photos/tuna-foie.jpg";
import duckFoie from "../assets/photos/duck-foie.jpg";
import foiePras from "../assets/photos/foie-pras.jpg";
import magret from "../assets/photos/magret.jpg";
import cevichePeru from "../assets/photos/ceviche-peru.jpg";
import sushiPlatter from "../assets/photos/sushi-platter.jpg";
import oystersIce from "../assets/photos/oysters-ice.jpg";
import carpaccioDanieli from "../assets/photos/carpaccio-danieli.jpg";
import carpaccioSonoma from "../assets/photos/carpaccio-sonoma.jpg";
import tiramisu from "../assets/photos/tiramisu.jpg";
import duckConfit from "../assets/photos/duck-confit.jpg";

type Credit = {
  sourceUrl: string;
  author: string;
  license: string;
  licenseUrl: string;
};

const files = {
  bartolome,
  booby,
  chimborazo,
  cotopaxi,
  cuenca,
  "cuenca-cathedral": cuencaCathedral,
  cuicocha,
  frailes,
  iguana,
  llapingachos,
  mindo,
  otavalo,
  pailon,
  papallacta,
  quilotoa,
  "quito-basilica": quitoBasilica,
  "quito-plaza": quitoPlaza,
  saquisili,
  vilcabamba,
  yasuni,
  "uio-airport": uioAirport,
  sangay,
  "santo-domingo": santoDomingo,
  "puente-roto": puenteRoto,
  "quito-night": quitoNight,
  guaguas,
  "inti-raymi": intiRaymi,
  carnaval,
  "viernes-santo": viernesSanto,
  malecon,
  mitad,
  teleferiqo,
  "teleferiqo-gondolas": teleferiqoGondolas,
  cajas,
  "cajas-rain": cajasRain,
  "banos-swing": banosSwing,
  "banos-town": banosTown,
  peguche,
  vicuna,
  "chimborazo-refuge": chimborazoRefuge,
  "cuyabeno-canoe": cuyabenoCanoe,
  "cuyabeno-lagoon": cuyabenoLagoon,
  napo,
  antisana,
  "papallacta-pools": papallactaPools,
  "plaza-grande": plazaGrande,
  "locro-papa": locroPapa,
  "amazonas-mariscal": amazonasMariscal,
  "plaza-foch": plazaFoch,
  "cuenca-cathedral-domes": cuencaCathedralDomes,
  "calle-larga": calleLarga,
  "plaza-flores": plazaFlores,
  "parque-madre": parqueMadre,
  "santa-ana": santaAna,
  "ceviche-camaron": cevicheCamaron,
  "nueve-octubre": nueveOctubre,
  "las-penas": lasPenas,
  "banos-church": banosChurch,
  "banos-termas": banosTermas,
  "banos-street": banosStreet,
  "banos-park": banosPark,
  "quito-panecillo": quitoPanecillo,
  "quito-hill": quitoHill,
  "guayaquil-skyline": guayaquilSkyline,
  nigiri,
  "pasta-amatriciana": pastaAmatriciana,
  "tuna-foie": tunaFoie,
  "duck-foie": duckFoie,
  "foie-pras": foiePras,
  magret,
  "ceviche-peru": cevichePeru,
  "sushi-platter": sushiPlatter,
  "oysters-ice": oystersIce,
  "carpaccio-danieli": carpaccioDanieli,
  "carpaccio-sonoma": carpaccioSonoma,
  tiramisu,
  "duck-confit": duckConfit,
} as const;

const alts: Record<PhotoId, string> = {
  bartolome: "Pinnacle Rock and the twin bays of Bartolomé Island, Galápagos",
  booby: "A blue-footed booby at Punta Pitt on San Cristóbal, Galápagos",
  chimborazo: "The snow-covered summit of Chimborazo",
  cotopaxi: "Cotopaxi seen from the trail around Laguna Limpiopungo",
  cuenca: "Aerial view of Cuenca’s El Vado neighborhood and blue cathedral domes",
  "cuenca-cathedral": "Stone apostles on the facade of Cuenca’s New Cathedral",
  cuicocha: "Cuicocha crater lake with the Imbabura volcano behind it",
  frailes: "Los Frailes beach in Machalilla National Park, on the Pacific coast",
  iguana: "A marine iguana on the lava shore of Santa Cruz, Galápagos",
  llapingachos: "Llapingachos, Ecuadorian potato patties, with egg and salad",
  mindo: "A rufous-tailed hummingbird in the Mindo cloud forest",
  otavalo: "Textile stalls at the Otavalo artisan market",
  pailon: "The gorge and waterfall of Pailón del Diablo, near Baños",
  papallacta: "Laguna de Papallacta in the high páramo east of Quito",
  quilotoa: "The turquoise crater lake of Quilotoa, from the trail above it",
  "quito-basilica": "The Gothic towers of the Basílica del Voto Nacional in Quito",
  "quito-plaza": "Plaza de San Francisco in Quito’s old town, with El Panecillo beyond",
  saquisili: "Shoppers and produce at the Thursday market in Saquisilí",
  vilcabamba: "The green valley of Vilcabamba in southern Ecuador",
  yasuni: "A blue-throated piping guan in Yasuní National Park",
  "uio-airport": "The terminal at Mariscal Sucre International Airport, Quito",
  sangay: "Sangay volcano seen from Macas",
  "santo-domingo": "The Church of Santo Domingo in Quito’s old town",
  "puente-roto": "Puente Roto over the Tomebamba in Cuenca, seen from above",
  "quito-night": "San Francisco church and the historic center of Quito at night",
  guaguas: "Guaguas de pan, the bread baked in Ecuador for Día de los Difuntos",
  "inti-raymi": "Inti Raymi dancers in Otavalo",
  carnaval: "A Carnaval parade in Ambato",
  "viernes-santo": "A Good Friday procession in Calderón, in the Quito metropolitan district",
  malecon: "Malecón 2000 along the river in Guayaquil",
  mitad: "The Mitad del Mundo monument north of Quito",
  teleferiqo: "The TelefériQo cable car above Quito, with the city and the volcanoes beyond",
  "teleferiqo-gondolas": "Gondolas of the TelefériQo climbing the slope of Pichincha above Quito",
  cajas: "Laguna Toreadora in El Cajas National Park, west of Cuenca",
  "cajas-rain": "Laguna Toreadora in the rain, from a viewpoint in El Cajas National Park",
  "banos-swing": "The swing at the Casa del Árbol above Baños, with the valley below",
  "banos-town": "Baños de Agua Santa in the valley, with Tungurahua behind the town",
  peguche: "Peguche waterfall in the forest north of Otavalo",
  vicuna: "A vicuña in the Chimborazo wildlife reserve",
  "chimborazo-refuge": "The Carrel refuge on Chimborazo, with the summit behind it",
  "cuyabeno-canoe": "A canoe on the Cuyabeno River in the Ecuadorian Amazon",
  "cuyabeno-lagoon": "Laguna Grande in the Cuyabeno Wildlife Reserve",
  napo: "A boat on the Napo River near Coca, on the way toward the Amazon",
  antisana: "Antisana volcano, southeast of Quito, seen across the páramo",
  "papallacta-pools": "Thermal pools at Papallacta, in the high valley east of Quito",
  "plaza-grande": "Plaza de la Independencia in Quito, with Hotel Plaza Grande on the left",
  "locro-papa": "Locro de papa, an Ecuadorian potato soup with avocado",
  "amazonas-mariscal": "Cyclists on Avenida Amazonas in La Mariscal, Quito",
  "plaza-foch": "Plaza Foch in La Mariscal, Quito, at dawn",
  "cuenca-cathedral-domes": "The blue domes of Cuenca’s New Cathedral",
  "calle-larga": "Calle Larga in Cuenca’s historic center",
  "plaza-flores": "The flower market at Plaza de las Flores in Cuenca",
  "parque-madre": "Parque de la Madre in Cuenca",
  "santa-ana": "Cerro Santa Ana seen from the Malecón 2000 in Guayaquil",
  "ceviche-camaron": "Ecuadorian shrimp ceviche with tostado, chifles, and popcorn",
  "nueve-octubre": "Avenida 9 de Octubre in Guayaquil, seen from the Malecón",
  "las-penas": "A colorful street in the Las Peñas neighborhood of Guayaquil",
  "banos-church": "The church of the Virgen de Agua Santa in Baños",
  "banos-termas": "The thermal baths of the Virgen in Baños",
  "banos-street": "A downtown street in Baños de Agua Santa",
  "banos-park": "Parque Central in Baños de Agua Santa",
  "quito-panecillo": "Quito seen from El Panecillo, with the historic center and the Basilica in the haze",
  "quito-hill": "The Virgen del Panecillo above Quito, with the city spread out below",
  "guayaquil-skyline": "The Guayaquil skyline across the Guayas River",
  nigiri: "Nigiri sushi on a wooden board",
  "pasta-amatriciana": "Tagliatelle all’amatriciana in a restaurant pan",
  "tuna-foie": "A plated tuna course with seared foie gras",
  "duck-foie": "A composed duck foie gras course",
  "foie-pras": "Foie gras in a potato robe, with cabbage and a truffle-scented broth",
  magret: "Duck breast with greens on a white plate",
  "ceviche-peru": "A bowl of ceviche with red onion and sweet potato",
  "sushi-platter": "An assorted sushi platter",
  "oysters-ice": "Oysters on ice",
  "carpaccio-danieli": "Beef carpaccio dressed with olive oil and cheese",
  "carpaccio-sonoma": "Beef carpaccio on a dark plate, with greens and shaved cheese",
  tiramisu: "A slice of tiramisu",
  "duck-confit": "Duck confit with roasted vegetables and a dark sauce",
};

export type PhotoId = keyof typeof files;

export type Photo = {
  id: PhotoId;
  src: ImageMetadata;
  alt: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
};

const credits = creditsJson as Record<string, Credit>;

export function isPhotoId(value: string): value is PhotoId {
  return value in files;
}

export function getPhoto(id: string): Photo {
  if (!isPhotoId(id)) {
    throw new Error(`Unknown photo id: ${id}`);
  }
  const credit = credits[id];
  if (!credit) {
    throw new Error(`Missing credit for photo: ${id}`);
  }
  const author = credit.author.replace(/^©\s*/, "");
  return {
    id,
    src: files[id],
    alt: alts[id],
    author,
    license: credit.license,
    licenseUrl: credit.licenseUrl,
    sourceUrl: credit.sourceUrl,
  };
}

export const photoIds = Object.keys(files) as PhotoId[];
