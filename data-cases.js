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
  // ... kaikki vanhat caset pysyvät ennallaan (energy-fossil, social-media, urban-car, child-protection, mental-health, information-warfare, cyber-subversion, management-osio jne.) ...

  // UUDET BRÄNDINHALLINNAN CASE-ESIMERKIT (lisätty loppuun)

  {
    id: "brand-willy-wonka-glasgow-2024",
    title: "Willy Wonka Experience -tapahtuma Glasgowssa (tapahtumamarkkinointimoka)",
    domain: ["markkinointi", "tapahtumat", "kuluttajapalvelut"],
    impactLayers: ["sosiaalinen_luottamus", "henkinen_terveys", "hallinto_ja_valta"],
    populationExposure: ["lapset", "perheet", "kuluttajat", "media"],
    conflictMode: "rakenteellinen",
    timeframe: {
      decisionYear: 2024,
      horizon: "2024–2026+",
    },
    description: "House of Illuminati -yrityksen päätös markkinoida AI-generoidulla sisällöllä luksustapahtumaa lapsille, mutta toteutuksessa priorisoidaan kustannussäästöjä ilman riittävää valmistelua.",
    lifecycle: {
      1: { summary: "House of Illuminati päättää markkinoida AI-generoidulla sisällöllä luksustapahtumaa lapsille, luvaten suklaamaita ja ihmeitä, mutta toteutuksessa priorisoidaan kustannussäästöjä ilman riittävää valmistelua." },
      2: { summary: "Välitön pettymys osallistujille, kun tapahtuma osoittautui tyhjäksi varastotilaksi ilman luvattuja elementtejä." },
      3: { summary: "Tapahtuma aiheutti poliisin kutsun ja tuhansien valituksia, johtuen massiiviseen somekohuun ja brändin romahdukseen; vuoteen 2026 mennessä se on tullut esimerkkitapaukseksi epäonnistuneesta markkinoinnista, pahentaen kuluttajien luottamusta tapahtumiin." },
      4: { summary: "Yritys palauttaa lipunhintoja ja markkinointiala kehittää parempia valvontamekanismeja." },
      5: { summary: "Kohu leviää someen, pahentaen tulevia tapahtumia ja kuluttajaboikotteja." },
      6: { summary: "Ylimarkkinointi normalisoituu 'hypekulttuurin' sivutuotteena, mikä vaikuttaa tuleviin tapahtumapäätöksiin." }
    },
    notes: ["Ajallinen viive: 1–2 vuotta ennen brändin täyden romahduksen ilmenemistä."]
  },
  {
    id: "brand-jaguar-rebrand-2024",
    title: "Jaguarin rebrändäys (rebrändäysmoka)",
    domain: ["autoteollisuus", "markkinointi", "brändi"],
    impactLayers: ["sosiaalinen_luottamus", "hallinto_ja_valta", "informaatioymparisto"],
    populationExposure: ["asiakkaat", "sijoittajat", "media"],
    conflictMode: "kilpailullinen",
    timeframe: {
      decisionYear: 2024,
      horizon: "2024–2026+",
    },
    description: "Jaguar päättää lanseerata uuden brändi-identiteetin vuonna 2024, keskittyen monimuotoisuuteen ja moderniin kuvaan, ilman riittävää kohderyhmän kuuntelua.",
    lifecycle: {
      1: { summary: "Jaguar päättää lanseerata uuden brändi-identiteetin vuonna 2024, keskittyen monimuotoisuuteen ja moderniin kuvaan, ilman riittävää kohderyhmän kuuntelua." },
      2: { summary: "Välitön somekohu, kun uusi logo ja kampanja eivät resonoi perinteisten asiakkaiden kanssa." },
      3: { summary: "Rebrändäys johti myynnin laskuun ja negatiiviseen julkisuuteen, pahentaen Jaguarin markkina-asemaa; vuoteen 2026 mennessä se on tullut esimerkkitapaukseksi epäonnistuneesta uudistuksesta, aiheuttaen miljoonien menetykset." },
      4: { summary: "Yritys palaa osittain vanhaan imagoon ja lisää asiakasfeedbackia." },
      5: { summary: "Kritiikki vahvistuu, johtuen kilpailijoiden hyötymiseen ja brändin heikentymiseen." },
      6: { summary: "Rebrändäysvirheet normalisoituvat 'riskialttiina uudistuksina', mikä vaikuttaa tuleviin markkinointipäätöksiin." }
    },
    notes: ["Ajallinen viive: 1–3 vuotta ennen myynnin täyden laskun ilmenemistä."]
  },
  {
    id: "brand-crowdstrike-update-failure-2024",
    title: "CrowdStriken ohjelmistopäivitysvirhe (tekninen kriisimoka)",
    domain: ["kyberturvallisuus", "teknologia", "brändi"],
    impactLayers: ["hallinto_ja_valta", "sosiaalinen_luottamus", "fyysinen_terveys"],
    populationExposure: ["yritykset", "julkinen sektori", "koko yhteiskunta"],
    conflictMode: "kyber",
    timeframe: {
      decisionYear: 2024,
      horizon: "2024–2026+",
    },
    description: "CrowdStrike päättää julkaista ohjelmistopäivityksen heinäkuussa 2024 ilman kattavaa testausta, priorisoiden nopeutta turvallisuuden yli.",
    lifecycle: {
      1: { summary: "CrowdStrike päättää julkaista ohjelmistopäivityksen heinäkuussa 2024 ilman kattavaa testausta, priorisoiden nopeutta turvallisuuden yli." },
      2: { summary: "Välitön maailmanlaajuinen IT-katkos, vaikuttamalla lentokenttiin, pankkeihin ja sairaaloihin." },
      3: { summary: "Virhe aiheutti miljardeja dollareita menetyksiä ja oikeudenkäyntejä, pahentaen luottamusta kyberturvallisuuteen; vuoteen 2026 mennessä se on johtanut regulaation tiukentumiseen ja brändin mainevaurioon." },
      4: { summary: "Yritys korjaa virheen ja parantaa testausprosesseja." },
      5: { summary: "Katkokset toistuvat pienemmissä mittakaavoissa, laajentaen kyberriskejä." },
      6: { summary: "Päivitysvirheet normalisoituvat 'teknologian riskeinä', mikä vaikuttaa tuleviin päivityspäätöksiin." }
    },
    notes: ["Ajallinen viive: 1–2 vuotta ennen oikeudellisten seurausten ilmenemistä."]
  },
  {
    id: "brand-bumble-rebrand-2024",
    title: "Bumblen rebrändäys ja celibacy-kampanja (sovellusrebrändäysmoka)",
    domain: ["dating-sovellukset", "markkinointi", "brändi"],
    impactLayers: ["sosiaalinen_luottamus", "henkinen_terveys", "hallinto_ja_valta"],
    populationExposure: ["käyttäjät", "media", "nuoret aikuiset"],
    conflictMode: "rakenteellinen",
    timeframe: {
      decisionYear: 2024,
      horizon: "2024–2026+",
    },
    description: "Bumble päättää lanseerata uuden mainoskampanjan vuonna 2024, jossa pilkataan selibaattia, ilman riittävää kohderyhmän ymmärrystä.",
    lifecycle: {
      1: { summary: "Bumble päättää lanseerata uuden mainoskampanjan vuonna 2024, jossa pilkataan selibaattia, ilman riittävää kohderyhmän ymmärrystä." },
      2: { summary: "Välitön backlash someen, kun kampanja koetaan loukkaavana." },
      3: { summary: "Kampanja johti käyttäjien poistumiseen ja negatiiviseen julkisuuteen, pahentaen Bumblen markkina-asemaa; vuoteen 2026 mennessä se on tullut esimerkkitapaukseksi epäherkästä markkinoinnista." },
      4: { summary: "Yritys poistaa kampanjan ja anteeksipyytää, lisäten monimuotoisuutta tiimiin." },
      5: { summary: "Backlash vahvistuu, johtuen kilpailijoiden hyötymiseen." },
      6: { summary: "Herkkyysvirheet normalisoituvat 'sosiaalisen median riskeinä', mikä vaikuttaa tuleviin kampanjapäätöksiin." }
    },
    notes: ["Ajallinen viive: 1–2 vuotta ennen käyttäjäkadon täyden vaikutuksen näkymistä."]
  },
  {
    id: "brand-boeing-safety-crisis-2018-2025",
    title: "Boeingin turvallisuuskriisi (turvallisuusmoka)",
    domain: ["ilmailu", "brändi", "turvallisuus"],
    impactLayers: ["fyysinen_terveys", "sosiaalinen_luottamus", "hallinto_ja_valta"],
    populationExposure: ["matkustajat", "työntekijät", "regulaattorit"],
    conflictMode: "rakenteellinen",
    timeframe: {
      decisionYear: 2018,
      horizon: "2018–2026+",
    },
    description: "Boeing päättää jatkaa 737 MAX -koneiden tuotantoa turvallisuuspuutteista huolimatta, priorisoiden aikatauluja vuodesta 2018 alkaen, päivitettynä 2024–2025 kriiseillä.",
    lifecycle: {
      1: { summary: "Boeing päättää jatkaa 737 MAX -koneiden tuotantoa turvallisuuspuutteista huolimatta, priorisoiden aikatauluja vuodesta 2018 alkaen, päivitettynä 2024–2025 kriiseillä." },
      2: { summary: "Välitön myynti, mutta kasvavat onnettomuusriskit." },
      3: { summary: "Kriisi johti kahteen kohtalokkaaseen onnettomuuteen ja miljardeja dollareita sakkoja, pahentaen luottamusta ilmailuun; vuoteen 2026 mennessä se on johtanut regulaation muutoksiin ja brändin heikentymiseen." },
      4: { summary: "Yritys parantaa turvallisuusprotokollia ja viestintää." },
      5: { summary: "Ongelmat toistuvat, laajentaen ilmailualan kriisejä." },
      6: { summary: "Turvallisuuspuutteet normalisoituvat 'tuotantopaineiden' seurauksina, mikä vaikuttaa tuleviin kehityspäätöksiin." }
    },
    notes: ["Ajallinen viive: 3–5 vuotta ennen markkinavaikutusten täyden ilmenemistä."]
  }
];

// Varmistetaan, että data on saatavilla globaalisti ympyra-virtaus.html:ssä
window.dataCases = cases;
