// data-cases.js
// Seurausten talo – data-cases.js
// Instituution muistikerros: päätökset ja niiden ajallinen elinkaari
//
// Kaikki tapaukset noudattavat samaa rakennetta,
// jotta vertailu ja jatkuvuuksien tunnistaminen on mahdollista.

export const CASE_LIFECYCLE = {
  1: "Päätös",
  2: "Vaikutus",
  3: "Seuraukset",
  4: "Sopeutuminen",
  5: "Kertautuminen",
  6: "Muutos normiksi",
};

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

export const cases = [
  // 1. Vanhat alkuperäiset caset (ennallaan)
  {
    id: "energy-fossil-expansion-1950",
    title: "Fossiilisen energian laajamittainen käyttöönotto",
    domain: ["energia", "talous", "ympäristö"],
    impactLayers: ["fyysinen_terveys", "hallinto_ja_valta", "sosiaalinen_luottamus"],
    populationExposure: ["koko_väestö", "teollisuusmaat"],
    conflictMode: "rakenteellinen",
    timeframe: { decisionYear: 1950, horizon: "1950–2100+" },
    description: "Teollistuneiden valtioiden päätös rakentaa talouskasvu fossiilisen energian varaan.",
    lifecycle: {
      1: { summary: "Energiantuotannon skaalaaminen fossiilisilla polttoaineilla." },
      2: { summary: "Nopea talouskasvu, teollinen vaurastuminen, halpa energia." },
      3: { summary: "Kasvavat päästöt, ekosysteemien kuormitus, geopoliittinen riippuvuus." },
      4: { summary: "Yhteiskunnat sopeutuvat korkeaan energiankulutukseen ja liikkuvuuteen." },
      5: { summary: "Infrastruktuuri, elämäntapa ja politiikka lukittuvat fossiiliseen malliin." },
      6: { summary: "Korkea energiankulutus nähdään normaalina ja välttämättömänä." }
    },
    notes: ["Alkuperäinen päätös ei sisältänyt ilmastokäsitettä.", "Viive seurauksissa oli vuosikymmeniä."]
  },
  {
    id: "social-media-algorithms-2010",
    title: "Algoritminen sisällön optimointi sosiaalisessa mediassa",
    domain: ["teknologia", "kulttuuri", "politiikka"],
    impactLayers: ["informaatioymparisto", "henkinen_terveys", "sosiaalinen_luottamus"],
    populationExposure: ["koko_väestö", "nuoret"],
    conflictMode: "hybridi",
    timeframe: { decisionYear: 2010, horizon: "2010–2050+" },
    description: "Päätös optimoida näkyvyys ja sisältö käyttäjien sitoutumisen perusteella.",
    lifecycle: {
      1: { summary: "Algoritmit priorisoivat sisällön, joka lisää katseluaikaa ja reaktioita." },
      2: { summary: "Käyttäjäaktiivisuus kasvaa, alustat skaalautuvat nopeasti." },
      3: { summary: "Polarisaatio, disinformaatio, huomion sirpaloituminen." },
      4: { summary: "Käyttäjät ja media mukautuvat algoritmien logiikkaan." },
      5: { summary: "Algoritminen näkyvyys ohjaa julkista keskustelua laajasti." },
      6: { summary: "Algoritmien vaikutus mielipiteisiin koetaan normaaliksi osaksi arkea." }
    },
    notes: ["Taloudellinen kannustin ohjasi teknistä ratkaisua.", "Sosiaaliset seuraukset havaittiin jälkikäteen."]
  },
  {
    id: "urban-car-dependence-1960",
    title: "Autokeskeinen kaupunkisuunnittelu",
    domain: ["kaupungit", "liikenne", "terveys"],
    impactLayers: ["fyysinen_terveys", "sosiaalinen_luottamus", "hallinto_ja_valta"],
    populationExposure: ["kaupunkilaiset", "perheet"],
    conflictMode: "rakenteellinen",
    timeframe: { decisionYear: 1960, horizon: "1960–2080+" },
    description: "Kaupunkien suunnittelu henkilöautoliikenteen ehdoilla.",
    lifecycle: {
      1: { summary: "Tieverkkojen ja lähiöiden rakentaminen autoilun ympärille." },
      2: { summary: "Liikkuminen helpottuu, asuminen laajenee kaupunkien ulkopuolelle." },
      3: { summary: "Ruuhkat, päästöt, liikkumisen pakollisuus." },
      4: { summary: "Arki ja palvelut rakentuvat auton varaan." },
      5: { summary: "Kaupunkirakenne lukitsee vaihtoehtojen puutteen." },
      6: { summary: "Autoriippuvuus nähdään normaalina infrastruktuurina." }
    },
    notes: ["Päätökset tehtiin eri kaupungeissa erikseen, mutta malli toistui."]
  },

  // Lisätty: Terveys-case-esimerkit (5 kpl)
  // ... (voit kopioida terveys.casebook.json:n caset tähän saman rakenteen mukaisesti) ...

  // Lisätty: Talous-case-esimerkit (5 kpl)
  // ... (voit kopioida talous.casebook.json:n caset tähän) ...

  // Lisätty: Ympäristö-case-esimerkit (5 kpl)
  // ... (kopioi ymparisto.casebook.json:n caset) ...

  // Lisätty: Teknologia-case-esimerkit (10 kpl, vanhat + uudet)
  // ... (kopioi teknologia.casebook.json:n caset) ...

  // Lisätty: Koulutus-case-esimerkit (5 kpl)
  // ... (kopioi koulutus.casebook.json:n caset) ...

  // Lisätty: Geopolitiikka-case-esimerkit (3 kpl)
  // ... (kopioi geopolitiikka.casebook.json:n caset) ...

  // Lisätty: Kriisinhallinta-case-esimerkit (5 kpl)
  // ... (kopioi kriisinhallinta.casebook.json:n caset) ...

  // Lisätty: Management-case-esimerkit (5 kpl)
  // ... (kopioi management.casebook.json:n caset) ...

  // Lisätty: Brändinhallinta-case-esimerkit (5 kpl)
  // ... (kopioi brändinhallinta.casebook.json:n caset) ...
];

// Varmistetaan, että data on saatavilla globaalisti ympyra-virtaus.html:ssä ym.
window.dataCases = cases;
