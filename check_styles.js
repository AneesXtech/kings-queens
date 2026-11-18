const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const styleTags = [];
let idx = 0;
while ((idx = html.indexOf('<style', idx)) !== -1) {
  const close = html.indexOf('</style>', idx);
  styleTags.push({ start: idx, end: close });
  idx = close + 8;
}

console.log('Number of <style> blocks:', styleTags.length);
styleTags.forEach((s, i) => {
  console.log(`Style ${i+1}: start=${s.start}, end=${s.end}, length=${s.end - s.start}`);
});
