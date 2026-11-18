const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const renderIdx = html.indexOf('function render()');
console.log(html.slice(renderIdx, renderIdx + 1100));
