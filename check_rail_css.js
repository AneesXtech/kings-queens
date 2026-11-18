const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const rwLines = [];
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('.rw') || l.includes('.rail') || l.includes('.ar')) {
    rwLines.push(`L${i+1}: ${l}`);
  }
});
console.log(rwLines.slice(0, 20).join('\n'));
