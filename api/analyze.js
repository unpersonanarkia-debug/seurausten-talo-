export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { aihe } = req.body;

  if (!aihe || typeof aihe !== 'string') {
    return res.status(400).json({ error: 'Aihe puuttuu tai on virheellinen' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': Bearer ${process.env.GROQ_API_KEY},
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          {
            role: 'system',
            content: 'Olet kriittinen analyytikko Seurausten talon mallissa. Vastaa aina suomeksi, selkeästi ja strukturoidusti kuudella vaiheella: 1. Laukaisija, 2. Tulkinta, 3. Päätös, 4. Välitön seuraus, 5. Kertaantuva vaikutus, 6. Normalisoitunut tila. Ole realistinen ja ennusta mahdollisia haittoja.'
          },
          {
            role: 'user',
            content: Analysoi aihe Seurausten talon kuuden vaiheen mallilla suomeksi. Aihe: ${aihe}
          }
        ],
        temperature: 0.7,
        max_tokens: 1200
      })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(Groq API virhe: ${response.status} - ${err});
    }

    const data = await response.json();
    const vastaus = data.choices?.[0]?.message?.content || 'Ei vastausta saatavilla';

    res.status(200).json({ vastaus });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'Palvelinvirhe' });
  }
}
