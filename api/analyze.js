export default async function handler(req, res) {
  // 1. METHOD CHECK
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    // 2. PARSE JSON BODY (KORJAUS!)
    let body;
    try {
      body = JSON.parse(req.body || '{}');
    } catch (e) {
      return res.status(400).json({ error: "Virheellinen JSON" });
    }

    const { aihe } = body;

    // 3. VALIDATION
    if (!aihe || typeof aihe !== "string" || aihe.trim().length === 0) {
      return res.status(400).json({ error: "Aihe puuttuu tai virheellinen" });
    }

    const cleanAihe = aihe.trim();

    /* ===============================
       SEURAUSTEN TALON TILA
    =============================== */
    const tila = {
      paatos: cleanAihe,
      vaikutus: "",
      seuraukset: "",
      sopeutuminen: "",
      kertautuminen: "",
      normiriski: 0
    };

    const lower = cleanAihe.toLowerCase();

    /* ===============================
       (1) PÄÄTÖS – oletukset lukitaan
    =============================== */
    if (cleanAihe.length > 50) tila.normiriski += 1;
    if (/\d+/.test(cleanAihe)) tila.normiriski += 1;

    /* ===============================
       (2) VAIKUTUS – suora vaikutus
    =============================== */
    if (/(leikkaus|säästö|supistus|vähennys|yt|purk|ryöst|pakko)/i.test(lower)) {
      tila.vaikutus = "Välitön kustannusvaikutus, joka kohdistuu suoraan toimijoihin ja kapasiteettiin.";
      tila.normiriski += 3;
    } else if (/(uudistus|tehost|muutos|keskit|pakot|velvoit)/i.test(lower)) {
      tila.vaikutus = "Rakenteellinen muutos, jonka vaikutukset näkyvät viiveellä ja epätasaisesti.";
      tila.normiriski += 2;
    } else {
      tila.vaikutus = "Rajattu tai kokeileva vaikutus ilman välitöntä rakenteellista painetta.";
      tila.normiriski += 0;
    }

    /* ===============================
       (3) SEURAUKSET – epäsuorat vaikutukset
    =============================== */
    if (tila.normiriski >= 4) {
      tila.seuraukset = "Kuormitus kasvaa eksponentiaalisesti, laatu heikkenee ja luottamus päätöksentekoon rapautuu. Piilokustannukset kumuloituvat systemaattisesti.";
      tila.normiriski += 1;
    } else if (tila.normiriski >= 2) {
      tila.seuraukset = "Seuraukset ovat hallittavia mutta vaativat aktiivista seurantaa ja korjaavia toimia.";
      tila.normiriski += 0;
    } else {
      tila.seuraukset = "Seuraukset pysyvät rajattuina eikä merkittävää haitallista kertymää synny.";
    }

    /* ===============================
       (4) SOPEUTUMINEN – käyttäytymisen muutos
    =============================== */
    tila.sopeutuminen = tila.normiriski >= 4
      ? "Toimijat sopeutuvat kuormitukseen kehittämällä kiertokeinoja, epävirallisia käytäntöjä ja varjostruktuureja."
      : "Toimijat mukautuvat maltillisesti ilman merkittävää käyttäytymisen vääristymää.";

    /* ===============================
       (5) KERTAUTUMINEN – normiksi muuttuminen
    =============================== */
    if (tila.normiriski >= 5) {
      tila.kertautuminen = "Päätöksestä tulee automaattinen normi. Samaa ratkaisua toistetaan kriittisesti ilman uutta arviointia.";
    } else if (tila.normiriski >= 3) {
      tila.kertautuminen = "Päätös on vaarassa normalisoitua pysyvästi ellei sitä tietoisesti katkaista.";
    } else {
      tila.kertautuminen = "Päätös ei lukitu normiksi ja pysyy korjattavana.";
    }

    // TURVARAJA
    if (tila.normiriski > 6) tila.normiriski = 6;

    /* ===============================
       VASTAUS
    =============================== */
    return res.status(200).json({
      malli: "Seurausten talo v2.0 – Päätöksen elinkaari",
      paatos: tila.paatos,
      vaikutus: tila.vaikutus,
      seuraukset: tila.seuraukset,
      sopeutuminen: tila.sopeutuminen,
      kertautuminen: tila.kertautuminen,
      normiriski: tila.normiriski,
      normitila: tila.normiriski >= 4 
        ? "🚨 MUUTOS ON MUUTTUMASSA NORMIKSI" 
        : "✅ Muutos ei ole lukkiutunut normiksi",
      riskiluokka: tila.normiriski >= 4 ? "KORKEA" : tila.normiriski >= 2 ? "KESKITASO" : "MATALA"
    });

  } catch (error) {
    console.error("Seurausten talo API error:", error);
    return res.status(500).json({ 
      error: "Sisäinen palvelinvirhe", 
      debug: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
}
