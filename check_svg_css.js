const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const matches = [];
const regex = /[^}]*svg[^}]*\{[^}]*\}/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  matches.push(m[0].trim());
}
console.log('SVG CSS rules found:', matches);
