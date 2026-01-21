// data/query-cases.js
import { readFileSync } from 'fs';
import { join } from 'path';

const index = JSON.parse(readFileSync(join(__dirname, 'casebooks-index.json'), 'utf8'));

function findRelevantCasebooks(query) {
  const keywords = query.toLowerCase().split(/\s+/);
  return index.casebooks.filter(cb => 
    keywords.some(kw => 
      cb.kirjasto.toLowerCase().includes(kw) || 
      cb.tags.some(tag => tag.includes(kw))
    )
  );
}

function getCasesFromCasebook(fileName) {
  const filePath = join(__dirname, 'casebooks', fileName);
  const content = JSON.parse(readFileSync(filePath, 'utf8'));
  return content.cases;
}

// Esimerkki käyttö
const query = "mitä tapahtui koronan aikana terveydenhuollossa";
const relevant = findRelevantCasebooks(query); // → palauttaa terveys.casebook.json yms.

relevant.forEach(cb => {
  const cases = getCasesFromCasebook(cb.file);
  console.log(`Löytyi ${cases.length} tapausta tiedostosta ${cb.file}`);
  // Tässä voit suodattaa vielä tarkemmin lifecycle.summary tms. perusteella
});
