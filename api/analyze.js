import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req,res){
  if(req.method!=="POST") return res.status(405).json({error:"Only POST allowed"});

  try{
    const {aihe}=req.body || {};
    const cleanAihe=(aihe || "TS 64/2025: Grönlanti ja geopoliittiset suhteet").trim();
    if(!cleanAihe) return res.status(400).json({error:"Aihe puuttuu"});

    const prompt=`Analysoi päätös "${cleanAihe}" seurausten talon elinkaarimallilla:
Tee yli 500 sanan analyysi, muodosta selkeä polku: päätös → vaikutus → seuraukset → sopeutuminen → kertaantuminen → normi.
Sisällytä vuosiluvut ja konkreettiset esimerkit.
Esitä lopuksi polku ja oppimavihje.`

    const completion = await openai.chat.completions.create({
      model:"gpt-4",
      messages:[{role:"user", content:prompt}],
      temperature:0.7,
      max_tokens:2500
    });

    const vastaus = completion.choices[0].message.content;

    res.status(200).json({
      paatos: cleanAihe,
      paatosVuosi:"2025",
      vuosiPaatos:"2025",
      paatosKuvaus:vastaus.split("\n")[0]||cleanAihe,
      vuosiVaikutusStart:"2026",
      vuosiVaikutusEnd:"2028",
      vaikutusKuvaus:vastaus.split("\n")[1]||"",
      vuosiSeurauksetStart:"2028",
      vuosiSeurauksetEnd:"2035",
      seurauksetKuvaus:vastaus.split("\n")[2]||"",
      vuosiSopeutuminenStart:"2035",
      vuosiSopeutuminenEnd:"2045",
      sopeutuminenKuvaus:vastaus.split("\n")[3]||"",
      vuosiKertaantuminenStart:"2040",
      vuosiKertaantuminenEnd:"2060",
      kertaantuminenKuvaus:vastaus.split("\n")[4]||"",
      vuosiNormi:"2060",
      normiKuvaus:vastaus.split("\n")[5]||"",
      paatosLyhyt: cleanAihe,
      vaikutusLyhyt:"Välitön vaikutus",
      seurauksetLyhyt:"Pitkän aikavälin seuraukset",
      sopeutuminenLyhyt:"Soveltuva sopeutuminen",
      kertaantuminenLyhyt:"Normiksi kertaantuminen",
      normiLyhyt:"Normi saavutettu",
      oppi:"Analyysi auttaa ymmärtämään päätöksen pitkän aikavälin seuraukset."
    });

  }catch(error){
    console.error("OpenAI API error:",error);
    res.status(500).json({error:"Sisäinen palvelinvirhe"});
  }
}
