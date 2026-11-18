const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Find renderCart or cart upsell code in index.html
const upsellCode = html.match(/function renderCart[\s\S]*?<\/script>/i) || html.match(/upsell[\s\S]*?<\/script>/i);
if (upsellCode) {
  console.log(upsellCode[0].slice(0, 1500));
}
