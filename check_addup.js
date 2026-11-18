const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const addUpMatch = html.match(/function addUp[\s\S]*?}/);
if (addUpMatch) console.log(addUpMatch[0]);
