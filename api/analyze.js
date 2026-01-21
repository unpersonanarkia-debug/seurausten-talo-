export default async function handler(req, res) {
  // 1. METHOD CHECK
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    /* ===============================
       2. BODY PARSING (KORJATTU)
       Vercel parsii JSONin valmiiksi
    =============================== */
    const body = req.body && typeof req.body === "object"
      ? req.body
      : {};

    const { aihe } = body;

    /* ===============================
       3. VALIDATION
    =============================== */
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
    if (/(leikkaus|säästö|supistus|vähennys|yt|purk|pakko)/i.test(lower)) {
      tila.vaikutus =
        "Välitön kustannusvaikutus, joka kohdistuu suoraan toimijoihin ja kapasiteettiin.";
      tila.normiriski += 3;
    } else if (/(uudistus|tehost|muutos|keskit|velvoit)/i.test(lower)) {
      tila.vaikutus =
        "Rakenteellinen muutos, jonka vaikutukset näkyvät viiveellä ja epätasaisesti.";
      tila.normiriski += 2;
    } else {
      tila.vaikutus =
        "Rajattu tai kokeileva vaikutus ilman välitöntä rakenteellista painetta.";
    }

    /* ===============================
       (3) SEURAUKSET – epäsuorat vaikutukset
    =============================== */
    if (tila.normiriski >= 4) {
      tila.seuraukset =
        "Kuormitus kasvaa, laatu heikkenee ja luottamus päätöksentekoon rapautuu. Piilokustannukset kumuloituvat.";
      tila.normiriski += 1;
    } else if (tila.normiriski >= 2) {
      tila.seuraukset =
        "Seuraukset ovat hallittavia mutta vaativat aktiivista seurantaa.";
    } else {
      tila.seuraukset =
        "Seuraukset pysyvät rajattuina eikä merkittävää haitallista kertymää synny.";
    }

    /* ===============================
       (4) SOPEUTUMINEN – käyttäytyminen
    =============================== */
    tila.sopeutuminen =
      tila.normiriski >= 4
        ? "Toimijat sopeutuvat kuormitukseen epävirallisin keinoin ja varjokäytännöin."
        : "Toimijat mukautuvat maltillisesti ilman merkittävää vääristymää.";

    /* ===============================
       (5) KERTAUTUMINEN – normiksi
    =============================== */
    if (tila.normiriski >= 5) {
      tila.kertautuminen =
        "Päätöksestä tulee automaattinen normi ja sitä toistetaan ilman uutta arviointia.";
    } else if (tila.normiriski >= 3) {
      tila.kertautuminen =
        "Päätös on vaarassa normalisoitua pysyväksi käytännöksi.";
    } else {
      tila.kertautuminen =
        "Päätös ei lukkiudu normiksi ja säilyy korjattavana.";
    }

    // TURVARAJA
    if (tila.normiriski > 6) tila.normiriski = 6;

    /* ===============================
       VASTAUS
    =============================== */
    return res.status(200).json({
      malli: "Seurausten talo v2.1 – Päätöksen elinkaari",
      paatos: tila.paatos,
      vaikutus: tila.vaikutus,
      seuraukset: tila.seuraukset,
      sopeutuminen: tila.sopeutuminen,
      kertautuminen: tila.kertautuminen,
      normiriski: tila.normiriski,
      normitila:
        tila.normiriski >= 4
          ? "🚨 MUUTOS ON MUUTTUMASSA NORMIKSI"
          : "✅ Muutos ei ole lukkiutunut normiksi",
      riskiluokka:
        tila.normiriski >= 4
          ? "KORKEA"
          : tila.normiriski >= 2
          ? "KESKITASO"
          : "MATALA"
    });

  } catch (error) {
    console.error("Seurausten talo API error:", error);
    return res.status(500).json({
      error: "Sisäinen palvelinvirhe"
    });
  }
}
