// data-cases.js
//  Seurausten talo – data-cases.js
// Instituution muistikerros: päätökset ja niiden ajallinen elinkaari
 *
// Kaikki tapaukset noudattavat samaa rakennetta,
// jotta vertailu ja jatkuvuuksien tunnistaminen on mahdollista.
 */

export const CASE_LIFECYCLE = {
  1: "Päätös",
  2: "Vaikutus",
  3: "Seuraukset",
  4: "Sopeutuminen",
  5: "Kertautuminen",
  6: "Muutos normiksi",
};

export const cases = [
  {
    id: "energy-fossil-expansion-1950",
    title: "Fossiilisen energian laajamittainen käyttöönotto",
    domain: ["energia", "talous", "ympäristö"],
    timeframe: {
      decisionYear: 1950,
      horizon: "1950–2100+",
    },
    description:
      "Teollistuneiden valtioiden päätös rakentaa talouskasvu fossiilisen energian varaan.",
    lifecycle: {
      1: {
        summary: "Energiantuotannon skaalaaminen fossiilisilla polttoaineilla.",
      },
      2: {
        summary: "Nopea talouskasvu, teollinen vaurastuminen, halpa energia.",
      },
      3: {
        summary:
          "Kasvavat päästöt, ekosysteemien kuormitus, geopoliittinen riippuvuus.",
      },
      4: {
        summary:
          "Yhteiskunnat sopeutuvat korkeaan energiankulutukseen ja liikkuvuuteen.",
      },
      5: {
        summary:
          "Infrastruktuuri, elämäntapa ja politiikka lukittuvat fossiiliseen malliin.",
      },
      6: {
        summary:
          "Korkea energiankulutus nähdään normaalina ja välttämättömänä.",
      },
    },
    notes: [
      "Alkuperäinen päätös ei sisältänyt ilmastokäsitettä.",
      "Viive seurauksissa oli vuosikymmeniä.",
    ],
  },

  {
    id: "social-media-algorithms-2010",
    title: "Algoritminen sisällön optimointi sosiaalisessa mediassa",
    domain: ["teknologia", "kulttuuri", "politiikka"],
    timeframe: {
      decisionYear: 2010,
      horizon: "2010–2050+",
    },
    description:
      "Päätös optimoida näkyvyys ja sisältö käyttäjien sitoutumisen perusteella.",
    lifecycle: {
      1: {
        summary:
          "Algoritmit priorisoivat sisällön, joka lisää katseluaikaa ja reaktioita.",
      },
      2: {
        summary:
          "Käyttäjäaktiivisuus kasvaa, alustat skaalautuvat nopeasti.",
      },
      3: {
        summary:
          "Polarisaatio, disinformaatio, huomion sirpaloituminen.",
      },
      4: {
        summary:
          "Käyttäjät ja media mukautuvat algoritmien logiikkaan.",
      },
      5: {
        summary:
          "Algoritminen näkyvyys ohjaa julkista keskustelua laajasti.",
      },
      6: {
        summary:
          "Algoritmien vaikutus mielipiteisiin koetaan normaaliksi osaksi arkea.",
      },
    },
    notes: [
      "Taloudellinen kannustin ohjasi teknistä ratkaisua.",
      "Sosiaaliset seuraukset havaittiin jälkikäteen.",
    ],
  },

  {
    id: "urban-car-dependence-1960",
    title: "Autokeskeinen kaupunkisuunnittelu",
    domain: ["kaupungit", "liikenne", "terveys"],
    timeframe: {
      decisionYear: 1960,
      horizon: "1960–2080+",
    },
    description:
      "Kaupunkien suunnittelu henkilöautoliikenteen ehdoilla.",
    lifecycle: {
      1: {
        summary:
          "Tieverkkojen ja lähiöiden rakentaminen autoilun ympärille.",
      },
      2: {
        summary:
          "Liikkuminen helpottuu, asuminen laajenee kaupunkien ulkopuolelle.",
      },
      3: {
        summary:
          "Ruuhkat, päästöt, liikkumisen pakollisuus.",
      },
      4: {
        summary:
          "Arki ja palvelut rakentuvat auton varaan.",
      },
      5: {
        summary:
          "Kaupunkirakenne lukitsee vaihtoehtojen puutteen.",
      },
      6: {
        summary:
          "Autoriippuvuus nähdään normaalina infrastruktuurina.",
      },
    },
    notes: [
      "Päätökset tehtiin eri kaupungeissa erikseen, mutta malli toistui.",
    ],
  },
];

/**
 * Tämä tiedosto ei sisällä johtopäätöksiä.
 * Se tarjoaa rakenteen, jonka avulla seuraukset pysyvät näkyvissä ajassa.
 */
Sinä lähetit
export const IMPACT_LAYERS = [
  "fyysinen_terveys",
  "henkinen_terveys",
  "lapsuus_ja_kehitys",
  "informaatioymparisto",
  "sosiaalinen_luottamus",
  "hallinto_ja_valta",
  "turvallisuus_ja_sota"
];

export const CONFLICT_MODES = [
  "rakenteellinen",
  "kilpailullinen",
  "kumouksellinen",
  "kyber",
  "hybridi",
  "aseellinen"
];

{
  id: "child-protection-overload-1990",
  title: "Lastensuojelun riskienhallintamalli",
  domain: ["hallinto", "sosiaalipolitiikka"],
  impactLayers: [
    "lapsuus_ja_kehitys",
    "henkinen_terveys",
    "sosiaalinen_luottamus"
  ],
  populationExposure: ["lapset", "perheet", "viranomaiset"],
  conflictMode: "rakenteellinen",
  lifecycle: {
    1: { summary: "Riskien minimointi hallinnollisilla prosesseilla." },
    2: { summary: "Yhtenäinen valvontamalli ja dokumentointi." },
    3: { summary: "Ylireagointi, etääntyminen, epäluottamus." },
    4: { summary: "Perheet oppivat välttelemään järjestelmää." },
    5: { summary: "Hallinnollinen suoja syrjäyttää inhimillisen tuen." },
    6: { summary: "Lastensuojelu koetaan uhkana eikä turvana." }
  }
}
{
  id: "mental-health-medicalization-2000",
  title: "Mielenterveyden yksilöllinen hoitomalli",
  domain: ["terveys", "lääketiede"],
  impactLayers: [
    "henkinen_terveys",
    "fyysinen_terveys",
    "sosiaalinen_luottamus"
  ],
  populationExposure: ["nuoret", "työikäiset"],
  conflictMode: "rakenteellinen",
  lifecycle: {
    1: { summary: "Oireiden hoito yksilötasolla." },
    2: { summary: "Diagnoosit ja lääkitys lisääntyvät." },
    3: { summary: "Juuri syyt jäävät käsittelemättä." },
    4: { summary: "Ihmiset mukautuvat alhaisempiin odotuksiin." },
    5: { summary: "Koko järjestelmä normalisoi kroonisuuden." },
    6: { summary: "Pysyvä pahoinvointi nähdään normaalina." }
  }
}
{
  id: "information-warfare-normalization-2014",
  title: "Algoritminen mielipidevaikuttaminen",
  domain: ["media", "turvallisuus"],
  impactLayers: [
    "informaatioymparisto",
    "henkinen_terveys",
    "sosiaalinen_luottamus",
    "hallinto_ja_valta"
  ],
  populationExposure: ["koko_väestö"],
  conflictMode: "hybridi",
  lifecycle: {
    1: { summary: "Huomion ja reaktioiden manipulointi." },
    2: { summary: "Narratiivien nopea leviäminen." },
    3: { summary: "Todellisuuskäsitysten eriytyminen." },
    4: { summary: "Yleisö turtuu ristiriitoihin." },
    5: { summary: "Informaatioaseista tulee pysyviä." },
    6: { summary: "Jatkuva informaatiosota koetaan normaalina." }
  }
}
{
  id: "cyber-subversion-doctrine-2005",
  title: "Kynnyksettömän vaikuttamisen doktriini",
  domain: ["turvallisuus", "puolustus"],
  impactLayers: [
    "informaatioymparisto",
    "hallinto_ja_valta",
    "sosiaalinen_luottamus",
    "turvallisuus_ja_sota"
  ],
  populationExposure: ["instituutiot", "koko_väestö"],
  conflictMode: "kumouksellinen",
  lifecycle: {
    1: { summary: "Epäsuora vaikuttaminen ilman sodanjulistusta." },
    2: { summary: "Häiriöt, epävarmuus, epäluottamus." },
    3: { summary: "Instituutioiden heikkeneminen." },
    4: { summary: "Yhteiskunta mukautuu jatkuvaan häiriöön." },
    5: { summary: "Poikkeustila pitkittyy." },
    6: { summary: "Pysyvä hybridiympäristö normalisoituu." }
  }
}
};

// Varmistetaan, että data on saatavilla globaalisti ympyra-virtaus.html:ssä
window.dataCases = dataCases;
