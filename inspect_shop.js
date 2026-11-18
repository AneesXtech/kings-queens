const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const shopIdx = html.indexOf('id="shop"');
console.log(html.slice(shopIdx, shopIdx + 800));
