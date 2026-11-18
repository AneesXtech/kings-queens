const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const kcIdx = html.indexOf('<aside class="kc"');
console.log(html.slice(kcIdx, kcIdx + 1200));
