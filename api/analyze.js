export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { aihe } = req.body;

  if (!aihe || typeof aihe !== "string") {
    return res.status(400).json({ error: "Virheellinen syöte" });
  }

  /* ===============================
     SEURAUSTEN TALON TILA
  =============================== */

  const tila = {
    paatos: aihe,
    vaikutus: "",
    seuraukset: "",
    sopeutuminen: "",
    kertautuminen: "",
    normiriski: 0
  };

  const lower = aihe.toLowerCase();

  /* ===============================
     (1) PÄÄTÖS
     – oletukset lukitaan
  =============================== */

  if (aihe.length > 50) tila.normiriski += 1;
  if (/\d+/.test(aihe)) tila.normiriski += 1;

  /* ===============================
     (2) VAIKUTUS
     – suora vaikutus
  =============================== */

  if (/(leikkaus|säästö|supistus|vähennys|yt)/i.test(lower)) {
    tila.vaikutus =
      "Välitön kustannusvaikutus, joka kohdistuu suoraan toimijoihin ja kapasiteettiin.";
    tila.normiriski += 2;
  } else if (/(uudistus|tehost|muutos|rakennemalli)/i.test(lower)) {
    tila.vaikutus =
      "Rakenteellinen muutos, jonka vaikutukset näkyvät viiveellä ja epätasaisesti.";
    tila.normiriski += 1;
  } else {
    tila.vaikutus =
      "Rajattu tai kokeileva vaikutus ilman välitöntä rakenteellista painetta.";
  }

  /* ===============================
     (3) SEURAUKSET
     – epäsuorat vaikutukset
  =============================== */

  if (tila.normiriski >= 3) {
    tila.seuraukset =
      "Kuormitus kasvaa, laatu heikkenee ja luottamus päätöksentekoon rapautuu. Piilokustannukset alkavat kumuloitua.";
    tila.normiriski += 1;
  } else if (tila.normiriski === 2) {
    tila.seuraukset =
      "Seuraukset ovat hallittavia, mutta vaativat seurantaa ja korjaavia toimia.";
  } else {
    tila.seuraukset =
      "Seuraukset pysyvät rajattuina eikä merkittävää haitallista kertymää synny.";
  }

  /* ===============================
     (4) SOPEUTUMINEN
     – käyttäytymisen muutos
  =============================== */

  tila.sopeutuminen =
    tila.normiriski >= 3
      ? "Toimijat sopeutuvat kuormitukseen kehittämällä kiertokeinoja ja epävirallisia käytäntöjä."
      : "Toimijat mukautuvat maltillisesti ilman merkittävää käyttäytymisen vääristymää.";

  /* ===============================
     (5) KERTAUTUMINEN
     – normiksi muuttuminen
  =============================== */

  if (tila.normiriski >= 4) {
    tila.kertautuminen =
      "Päätöksestä tulee normi. Samaa ratkaisua toistetaan automaattisesti ilman uutta arviointia.";
  } else if (tila.normiriski === 3) {
    tila.kertautuminen =
      "Päätös on vaarassa normalisoitua, ellei sitä tietoisesti katkaista tai arvioida uudelleen.";
  } else {
    tila.kertautuminen =
      "Päätöstä ei lukita normiksi ja se pysyy korjattavana.";
  }

  /* ===============================
     TURVARAJA
  =============================== */

  if (tila.normiriski > 5) tila.normiriski = 5;

  /* ===============================
     VASTAUS
  =============================== */

  return res.status(200).json({
    malli: "Seurausten talo – Päätöksen elinkaari",
    paatos: tila.paatos,
    vaikutus: tila.vaikutus,
    seuraukset: tila.seuraukset,
    sopeutuminen: tila.sopeutuminen,
    kertautuminen: tila.kertautuminen,
    normiriski: tila.normiriski,
    normitila:
      tila.normiriski >= 3
        ? "MUUTOS ON MUUTTUMASSA NORMIKSI"
        : "Muutos ei ole lukkiutunut normiksi"
  });
}
