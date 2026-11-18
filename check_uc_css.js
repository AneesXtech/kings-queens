const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const styleBlock = html.match(/<style>([\s\S]*?)<\/style>/)[1];
const ucLines = styleBlock.split('\n').filter(l => l.includes('.uc') || l.includes('.kc-u'));
console.log(ucLines.join('\n'));
