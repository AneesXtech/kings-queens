const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const matches = [];
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<aside') || l.includes('openCart')) {
    matches.push(`L${i+1}: ${l}`);
  }
});
console.log(matches.slice(0, 10).join('\n'));
