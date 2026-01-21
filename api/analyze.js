export default async function handler(req, res) {

  /* ===============================
     1. GET = healthcheck
  =============================== */
  if (req.method === "GET") {
    return res.status(200).json({
      status: "OK",
      service: "Seurausten talo API",
      usage: "POST { aihe: string } -> analyysi"
    });
  }

  /* ===============================
     2. SALLI VAIN POST ANALYYSIIN
  =============================== */
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    /* ===============================
       3. BODY (Vercel-parsittu)
    =============================== */
    const body =
      req.body && typeof req.body === "object"
        ? req.body
        : {};

    const { aihe } = body;

    /* ===============================
       4. VALIDATION
    =============================== */
    if (!aihe || typeof aihe !== "string" || aihe.trim().length === 0) {
      return res.status(400).json({ error: "Aihe puuttuu tai on virheellinen" });
    }

    const cleanAihe = aihe.trim();
    const lower = cleanAihe.toLowerCase();

    /* ===============================
       5. SEURAUSTEN TALON TILA
    =============================== */
    const tila = {
      paatos: cleanAihe,
      vaikutus: "",
      seuraukset: "",
      sopeutuminen: "",
      kertautuminen: "",
      normiriski: 0
    };

    /* ===============================
       (1) PÄÄTÖS – lähtöriski
    =============================== */
    if (cleanAihe.length > 50) tila.normiriski += 1;
    if (/\d+/.test(cleanAihe)) tila.normiriski += 1;

    /* ===============================
       (2) VAIKUTUS – suora vaikutus
    =============================== */
    if (/(leikkaus|säästö|supistus|vähennys|yt|pakko)/i.test(lower)) {
      tila.vaikutus =
        "Välitön kustannus- ja kapasiteettivaikutus, joka kohdistuu suoraan toimijoihin.";
      tila.normiriski += 3;
    } else if (/(uudistus|tehost|muutos|keskit|velvoit)/i.test(lower)) {
      tila.vaikutus =
        "Rakenteellinen muutos, jonka vaikutukset realisoituvat viiveellä.";
      tila.normiriski += 2;
    } else {
      tila.vaikutus =
        "Rajattu tai kokeileva vaikutus ilman välitöntä rakenteellista painetta.";
    }

    /* ===============================
       (3) SEURAUKSET – epäsuorat
    =============================== */
    if (tila.normiriski >= 4) {
      tila.seuraukset =
        "Kuormitus kasvaa, laatu heikkenee ja luottamus päätöksentekoon rapautuu. Piilokustannukset kumuloituvat.";
      tila.normiriski += 1;
    } else if (tila.normiriski >= 2) {
      tila.seuraukset =
        "Seuraukset ovat hallittavia, mutta vaativat jatkuvaa seurantaa.";
    } else {
      tila.seuraukset =
        "Seuraukset pysyvät rajattuina eikä merkittävää haitallista kertymää synny.";
    }

    /* ===============================
       (4) SOPEUTUMINEN
    =============================== */
    tila.sopeutuminen =
      tila.normiriski >= 4
        ? "Toimijat sopeutuvat kuormitukseen epävirallisin käytännöin ja kiertokeinoin."
        : "Toimijat mukautuvat muutokseen ilman merkittävää käyttäytymisen vääristymää.";

    /* ===============================
       (5) KERTAUTUMINEN – normi
    =============================== */
    if (tila.normiriski >= 5) {
      tila.kertautuminen =
        "Päätöksestä muodostuu automaattinen normi, jota toistetaan ilman uutta arviointia.";
    } else if (tila.normiriski >= 3) {
      tila.kertautuminen =
        "Päätös on vaarassa normalisoitua pysyväksi käytännöksi.";
    } else {
      tila.kertautuminen =
        "Päätös ei lukkiudu normiksi ja säilyy korjattavana.";
    }

    /* ===============================
       6. TURVARAJA
    =============================== */
    if (tila.normiriski > 6) tila.normiriski = 6;

    /* ===============================
       7. VASTAUS
    =============================== */
    return res.status(200).json({
      malli: "Seurausten talo – Päätöksen elinkaari",
      paatos: tila.paatos,
      vaikutus: tila.vaikutus,
      seuraukset: tila.seuraukset,
      sopeutuminen: tila.sopeutuminen,
      kertautuminen: tila.kertautuminen,
      normiriski: tila.normiriski,
      riskiluokka:
        tila.normiriski >= 4
          ? "KORKEA"
          : tila.normiriski >= 2
          ? "KESKITASO"
          : "MATALA",
      normitila:
        tila.normiriski >= 4
          ? "🚨 MUUTOS ON MUUTTUMASSA NORMIKSI"
          : "✅ Muutos ei ole lukkiutunut normiksi"
    });

  } catch (error) {
    console.error("Seurausten talo API error:", error);
    return res.status(500).json({
      error: "Sisäinen palvelinvirhe"
    });
  }
}
