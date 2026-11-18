const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const idx = html.indexOf('Free shipping');
console.log('Snippet around Free shipping:');
console.log(html.slice(Math.max(0, idx - 200), idx + 300));
