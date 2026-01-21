#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const glob = require('glob');

// Ladataan schema
const schemaPath = path.join(__dirname, '../schemas/case-entry.schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

// AJV-instanssi (Draft 2020-12)
const ajv = new Ajv({
  allErrors: true,
  verbose: true,
  strict: true,
  $data: true,
  removeAdditional: 'failing'
});

const validate = ajv.compile(schema);

// Kansio, josta etsitään casebook-tiedostoja
const casebooksDir = path.join(__dirname, '../data/casebooks');

// Etsitään kaikki .casebook.json-tiedostot
const files = glob.sync(`${casebooksDir}/*.casebook.json`);

console.log(`Löydetty ${files.length} casebook-tiedostoa.\n`);

let totalCases = 0;
let validCases = 0;
let errors = [];

files.forEach(file => {
  try {
    const content = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!Array.isArray(content.cases)) {
      console.error(`Virhe tiedostossa ${path.basename(file)}: Ei "cases"-taulukkoa`);
      errors.push({ file: path.basename(file), error: 'Ei "cases"-taulukkoa' });
      return;
    }

    console.log(`Tarkistetaan: ${path.basename(file)} (${content.cases.length} casea)`);

    content.cases.forEach((caseObj, index) => {
      totalCases++;
      const valid = validate(caseObj);

      if (valid) {
        validCases++;
        // console.log(`  Case ${index + 1}: OK (${caseObj.id})`);
      } else {
        console.error(`  Case ${index + 1} epäonnistui (${caseObj.id || 'ei ID:tä'})`);
        validate.errors.forEach(err => {
          console.error(`    - ${err.instancePath || '.'} ${err.message}`);
        });
        errors.push({
          file: path.basename(file),
          caseIndex: index,
          caseId: caseObj.id || 'tuntematon',
          errors: validate.errors
        });
      }
    });
  } catch (err) {
    console.error(`Kriittinen virhe tiedostossa ${path.basename(file)}: ${err.message}`);
    errors.push({ file: path.basename(file), error: err.message });
  }
});

console.log('\n─'.repeat(60));
console.log(`Yhteenveto:`);
console.log(`  Tarkistettuja caseja: ${totalCases}`);
console.log(`  Hyväksyttyjä: ${validCases} (${((validCases / totalCases) * 100).toFixed(1)}%)`);
console.log(`  Epäonnistuneita: ${totalCases - validCases}`);

if (errors.length > 0) {
  console.log(`\nVirheet yhteensä: ${errors.length}`);
  errors.forEach(e => {
    console.log(`  • ${e.file} → case ${e.caseIndex !== undefined ? e.caseIndex + 1 : '–'} (${e.caseId || 'ei ID:tä'})`);
  });
  process.exit(1);
} else {
  console.log('\nKaikki caset ovat validit! ✓');
  process.exit(0);
}
