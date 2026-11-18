const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
console.log('File length:', html.length);
console.log('Has fs-track:', html.includes('fs-track'));
console.log('Has Men Banner pc.png:', html.includes('Men Banner pc.png'));
console.log('Has Women banner.png:', html.includes('Women banner.png'));

const colMatch = html.match(/<section[^>]*id=["']collection["'][\s\S]*?<\/section>/i);
if (colMatch) {
  console.log('--- COLLECTION SECTION ---');
  console.log(colMatch[0]);
}

const revMatch = html.match(/<section[^>]*class=["'][^"']*rm-tp[^"']*["'][\s\S]*?<\/section>/i);
if (revMatch) {
  console.log('--- REVIEWS SECTION (first 800 chars) ---');
  console.log(revMatch[0].slice(0, 800));
}
