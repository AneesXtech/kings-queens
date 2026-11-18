const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const upsellDef = html.match(/const upsell\s*=\s*\[[\s\S]*?\];/i);
if (upsellDef) {
  console.log('upsell array:');
  console.log(upsellDef[0]);
}

const prodsDef = html.match(/const prods\s*=\s*\[[\s\S]*?\];/i);
if (prodsDef) {
  console.log('prods array:');
  console.log(prodsDef[0]);
}
