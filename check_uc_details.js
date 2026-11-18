const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const idx = html.indexOf('.uc-top');
if (idx !== -1) {
  console.log('Around .uc-top in CSS:');
  console.log(html.slice(idx - 200, idx + 800));
}
