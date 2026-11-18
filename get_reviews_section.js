const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const revSection = html.match(/<section[^>]*id=["']reviews["'][\s\S]*?<\/section>/i);
if (revSection) {
  console.log('--- Current Reviews Section ---');
  console.log(revSection[0]);
}
