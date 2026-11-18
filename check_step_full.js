const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const idx = html.indexOf('function stepTpReview');
console.log(html.slice(idx, idx + 700));
