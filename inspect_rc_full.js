const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const rcIdx = html.indexOf('function renderCart()');
console.log(html.slice(rcIdx, rcIdx + 1100));
