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
