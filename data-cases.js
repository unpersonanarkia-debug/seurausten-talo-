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
  // Vanhat caset (ennallaan)
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
      1: { summary: "Energiantuotannon skaalaaminen fossiilisilla polttoaineilla." },
      2: { summary: "Nopea talouskasvu, teollinen vaurastuminen, halpa energia." },
      3: { summary: "Kasvavat päästöt, ekosysteemien kuormitus, geopoliittinen riippuvuus." },
      4: { summary: "Yhteiskunnat sopeutuvat korkeaan energiankulutukseen ja liikkuvuuteen." },
      5: { summary: "Infrastruktuuri, elämäntapa ja politiikka lukittuvat fossiiliseen malliin." },
      6: { summary: "Korkea energiankulutus nähdään normaalina ja välttämättömänä." },
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
      1: { summary: "Algoritmit priorisoivat sisällön, joka lisää katseluaikaa ja reaktioita." },
      2: { summary: "Käyttäjäaktiivisuus kasvaa, alustat skaalautuvat nopeasti." },
      3: { summary: "Polarisaatio, disinformaatio, huomion sirpaloituminen." },
      4: { summary: "Käyttäjät ja media mukautuvat algoritmien logiikkaan." },
      5: { summary: "Algoritminen näkyvyys ohjaa julkista keskustelua laajasti." },
      6: { summary: "Algoritmien vaikutus mielipiteisiin koetaan normaaliksi osaksi arkea." },
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
      1: { summary: "Tieverkkojen ja lähiöiden rakentaminen autoilun ympärille." },
      2: { summary: "Liikkuminen helpottuu, asuminen laajenee kaupunkien ulkopuolelle." },
      3: { summary: "Ruuhkat, päästöt, liikkumisen pakollisuus." },
      4: { summary: "Arki ja palvelut rakentuvat auton varaan." },
      5: { summary: "Kaupunkirakenne lukitsee vaihtoehtojen puutteen." },
      6: { summary: "Autoriippuvuus nähdään normaalina infrastruktuurina." },
    },
    notes: [
      "Päätökset tehtiin eri kaupungeissa erikseen, mutta malli toistui.",
    ],
  },

  // Vanhat rakenteelliset caset (ennallaan)
  {
    id: "child-protection-overload-1990",
    title: "Lastensuojelun riskienhallintamalli",
    domain: ["hallinto", "sosiaalipolitiikka"],
    impactLayers: ["lapsuus_ja_kehitys", "henkinen_terveys", "sosiaalinen_luottamus"],
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
  },
  {
    id: "mental-health-medicalization-2000",
    title: "Mielenterveyden yksilöllinen hoitomalli",
    domain: ["terveys", "lääketiede"],
    impactLayers: ["henkinen_terveys", "fyysinen_terveys", "sosiaalinen_luottamus"],
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
  },
  {
    id: "information-warfare-normalization-2014",
    title: "Algoritminen mielipidevaikuttaminen",
    domain: ["media", "turvallisuus"],
    impactLayers: ["informaatioymparisto", "henkinen_terveys", "sosiaalinen_luottamus", "hallinto_ja_valta"],
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
  },
  {
    id: "cyber-subversion-doctrine-2005",
    title: "Kynnyksettömän vaikuttamisen doktriini",
    domain: ["turvallisuus", "puolustus"],
    impactLayers: ["informaatioymparisto", "hallinto_ja_valta", "sosiaalinen_luottamus", "turvallisuus_ja_sota"],
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
  },

  // Uudet management-caset (integroitu edellisestä .casebook.json-tiedostosta)
  {
    id: "management-boeing-turvallisuuskriisi",
    title: "Boeingin turvallisuuskriisi (johtajuus- ja turvallisuusvirhe)",
    domain: ["ilmailu", "teollisuus", "turvallisuus"],
    impactLayers: ["fyysinen_terveys", "sosiaalinen_luottamus", "hallinto_ja_valta"],
    populationExposure: ["matkustajat", "työntekijät", "regulaattorit", "sijoittajat"],
    conflictMode: "rakenteellinen",
    timeframe: {
      decisionYear: 2010,
      horizon: "2010–2026+",
    },
    description: "Boeingin päätökset priorisoida tuotantoa turvallisuuden yli, mikä johti onnettomuuksiin ja kriisiin.",
    lifecycle: {
      1: { summary: "Boeingin johto päättää jatkaa 737 MAX -koneiden tuotantoa ja paluuta käyttöön turvallisuuspuutteista huolimatta, priorisoiden aikatauluja ja kustannussäästöjä vuodesta 2024 alkaen." },
      2: { summary: "Välitön tuotannon jatkuminen, mutta kasvavat turvallisuusriskit ja onnettomuudet." },
      3: { summary: "Kriisi johti $2.8 miljardin tappioihin vuonna 2025, mukaan lukien lakkoja ja toimitusviiveitä, pahentaen luottamusta ilmailuun; vuoteen 2026 mennessä se on johtanut regulaation muutoksiin ja brändin heikentymiseen." },
      4: { summary: "Yritys vaihtaa johtoa ja parantaa turvallisuusprotokollia." },
      5: { summary: "Ongelmat toistuvat toimitusketjuissa, laajentaen ilmailualan kriisejä." },
      6: { summary: "Turvallisuuspuutteet normalisoituvat 'tuotantopaineiden' seurauksina, mikä vaikuttaa tuleviin kehityspäätöksiin." }
    },
    notes: ["Ajallinen viive: 1–3 vuotta ennen markkinavaikutusten täyden ilmenemistä."]
  },
  {
    id: "management-crowdstrike-paivitysvirhe",
    title: "CrowdStriken päivitysvirhe (operatiivinen management-virhe)",
    domain: ["kyberturvallisuus", "teknologia", "infrastruktuuri"],
    impactLayers: ["hallinto_ja_valta", "sosiaalinen_luottamus", "fyysinen_terveys"],
    populationExposure: ["yritykset", "julkinen sektori", "koko yhteiskunta"],
    conflictMode: "kyber",
    timeframe: {
      decisionYear: 2024,
      horizon: "2024–2026+",
    },
    description: "CrowdStriken päätös julkaista viallinen päivitys, mikä johti globaaliin IT-katastrofiin.",
    lifecycle: {
      1: { summary: "CrowdStriken johto päättää julkaista ohjelmistopäivityksen heinäkuussa 2024 ilman kattavaa testausta, priorisoiden nopeutta turvallisuuden yli." },
      2: { summary: "Välitön maailmanlaajuinen IT-katkos, vaikuttamalla lentokenttiin, pankkeihin ja sairaaloihin." },
      3: { summary: "Virhe aiheutti miljardeja dollareita menetyksiä ja oikeudenkäyntejä, pahentaen luottamusta kyberturvallisuuteen; vuoteen 2026 mennessä se on johtanut regulaation tiukentumiseen ja brändin mainevaurioon." },
      4: { summary: "Yritys korjaa virheen ja parantaa testausprosesseja." },
      5: { summary: "Katkokset toistuvat pienemmissä mittakaavoissa, laajentaen kyberriskejä." },
      6: { summary: "Päivitysvirheet normalisoituvat 'teknologian riskeinä', mikä vaikuttaa tuleviin päivityspäätöksiin." }
    },
    notes: ["Ajallinen viive: 1–2 vuotta ennen oikeudellisten seurausten ilmenemistä."]
  },
  {
    id: "management-tesla-tuotanto-ja-johtajuusongelmat",
    title: "Teslan tuotanto- ja johtajuusongelmat (strateginen management-virhe)",
    domain: ["autoteollisuus", "teknologia", "talous"],
    impactLayers: ["sosiaalinen_luottamus", "hallinto_ja_valta", "henkinen_terveys"],
    populationExposure: ["työntekijät", "asiakkaat", "sijoittajat"],
    conflictMode: "kilpailullinen",
    timeframe: {
      decisionYear: 2024,
      horizon: "2024–2026+",
    },
    description: "Teslan päätökset laajentaa tuotantoa kilpailupaineissa, mikä johti tappioihin.",
    lifecycle: {
      1: { summary: "Teslan johto päättää aggressiivisesti laajentaa tuotantoa ja markkinoita vuonna 2024–2025, priorisoiden kasvua laadunvalvonnan yli." },
      2: { summary: "Välitön myynnin kasvu, mutta kasvavat laatuongelmat ja toimitusviiveet." },
      3: { summary: "Yritys kärsi $1.9 miljardin tappioista vuonna 2025 kilpailun kiristyessä, pahentaen työntekijöiden uupumusta ja asiakaskatoa; vuoteen 2026 mennessä se on johtanut johtajuusmuutoksiin." },
      4: { summary: "Yritys monipuolistaa tuotantoa ja parantaa työoloja." },
      5: { summary: "Ongelmat vahvistuvat kilpailussa, laajentaen markkinahäiriöitä." },
      6: { summary: "Kasvupaineet normalisoituvat 'innovoinnin' sivutuotteina, mikä vaikuttaa tuleviin strategiapäätöksiin." }
    },
    notes: ["Ajallinen viive: 1–3 vuotta ennen taloudellisen romahduksen ilmenemistä."]
  },
  {
    id: "management-mcdonalds-ruokaturvakriisi",
    title: "McDonald’sin ruokaturvakriisi (operatiivinen ja toimitusketjuvirhe)",
    domain: ["ruokateollisuus", "kuluttajapalvelut"],
    impactLayers: ["fyysinen_terveys", "sosiaalinen_luottamus", "hallinto_ja_valta"],
    populationExposure: ["asiakkaat", "työntekijät", "toimittajat"],
    conflictMode: "rakenteellinen",
    timeframe: {
      decisionYear: 2024,
      horizon: "2024–2026+",
    },
    description: "McDonald’sin päätökset hallita toimitusketjua, mikä johti E.coli-epidemiaan.",
    lifecycle: {
      1: { summary: "McDonald’sin johto päättää jatkaa toimitusketjua ilman tiukempaa valvontaa vuonna 2024, priorisoiden kustannussäästöjä laadun yli." },
      2: { summary: "Välitön tuotteiden saatavuus, mutta kasvavat ruokaturvariskit." },
      3: { summary: "E.coli-epidemia johti asiakaskatoon ja oikeudenkäynteihin, aiheuttaen miljoonien menetykset; vuoteen 2026 mennessä se on pahentanut brändin mainetta ja regulaatiota." },
      4: { summary: "Yritys tiukentaa toimitusketjun valvontaa ja viestintää." },
      5: { summary: "Epidemiat toistuvat, laajentaen ruokateollisuuden kriisejä." },
      6: { summary: "Toimitusketjuvirheet normalisoituvat 'globaalin kaupan' riskeinä, mikä vaikuttaa tuleviin hankintapäätöksiin." }
    },
    notes: ["Ajallinen viive: 1–2 vuotta ennen myynnin laskun ilmenemistä."]
  },
  {
    id: "management-disney-taloudelliset-menetykset",
    title: "Disneyn taloudelliset menetykset (strateginen ja johtajuusvirhe)",
    domain: ["media", "viihde", "talous"],
    impactLayers: ["hallinto_ja_valta", "sosiaalinen_luottamus", "informaatioymparisto"],
    populationExposure: ["osakkeenomistajat", "kuluttajat", "sisällöntuottajat"],
    conflictMode: "kilpailullinen",
    timeframe: {
      decisionYear: 2019,
      horizon: "2019–2026+",
    },
    description: "Disneyn päätökset investoida streamingiin, mikä johti tappioihin.",
    lifecycle: {
      1: { summary: "Disneyn johto päättää aggressiivisesti investoida Disney+ -palveluun vuonna 2024–2025, priorisoiden kasvua kannattavuuden yli." },
      2: { summary: "Välitön käyttäjämäärän kasvu, mutta kasvavat kustannukset ja tappiot." },
      3: { summary: "Yritys kärsi $1.7 miljardin tappioista vuonna 2025 sisällöntuotannon epäonnistumisten vuoksi, pahentaen osakkeenomistajien tyytymättömyyttä; vuoteen 2026 mennessä se on johtanut johtajuusmuutoksiin." },
      4: { summary: "Yritys leikkaa kustannuksia ja monipuolistaa sisältöä." },
      5: { summary: "Tappiot vahvistuvat kilpailussa, laajentaen viihdeteollisuuden kriisejä." },
      6: { summary: "Investointivirheet normalisoituvat 'digitaalisen siirtymän' riskeinä, mikä vaikuttaa tuleviin investointipäätöksiin." }
    },
    notes: ["Ajallinen viive: 2–4 vuotta ennen strategisen uudelleenarvioinnin ilmenemistä."]
  }
];

/**
 * Tämä tiedosto ei sisällä johtopäätöksiä.
 * Se tarjoaa rakenteen, jonka avulla seuraukset pysyvät näkyvissä ajassa.
 */

// Varmistetaan, että data on saatavilla globaalisti ympyra-virtaus.html:ssä
window.dataCases = cases;
