const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Cart upsells
const cartUpsell = html.match(/class=["'][^"']*cart-upsell[^"']*["'][\s\S]*?<\/section>|class=["'][^"']*c-up[^"']*["'][\s\S]*?<\/div>/i);
console.log('--- CART UPSELL SEARCH ---');
const cartDrawer = html.match(/id=["']cart-drawer["'][\s\S]*?<\/aside>/i);
if (cartDrawer) {
  console.log(cartDrawer[0].slice(0, 1500));
}

// Find reviews html
const revMatch = html.match(/<section[^>]*class=["'][^"']*rm-tp[^"']*["'][\s\S]*?<\/section>/i);
if (revMatch) {
  console.log('--- FULL REVIEWS HTML ---');
  console.log(revMatch[0]);
}

// Find reviews css
const cssReviews = html.match(/\/\*[\s\S]*?rm-tp[\s\S]*?\*\//i) || html.match(/\.rm-tp[\s\S]*?(?=\n\s*\.[a-z]|\n\s*@media|\n\s*<\/style>)/i);
console.log('--- REVIEWS CSS SAMPLE ---');
const allReviewCss = [];
const styleBlock = html.match(/<style>([\s\S]*?)<\/style>/);
if (styleBlock) {
  const lines = styleBlock[1].split('\n').filter(l => l.includes('rm-tp'));
  console.log(lines.slice(0, 20).join('\n'));
}
