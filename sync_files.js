const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
fs.writeFileSync('index12.html', indexHtml);
fs.writeFileSync('index2.html', indexHtml);
console.log('Synchronized index12.html and index2.html with index.html.');
