const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

console.log('Search "Free shipping":', html.indexOf('Free shipping'));
console.log('Search "Prepaid":', html.indexOf('Prepaid'));
console.log('Search "Save up to":', html.indexOf('Save up to'));

// Check cart upsell items
const upsellMatch = html.match(/class=["'][^"']*upsell[^"']*["'][\s\S]*?<\/div>\s*<\/div>/i) || html.match(/c-up[\s\S]*?<\/div>\s*<\/div>/i);
if (upsellMatch) console.log('Upsell snippet:', upsellMatch[0].slice(0, 500));

// Check where Queen's Sapphire / Queen's Ruby are in cart
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes("Queen's Sapphire") || l.includes("Queen's Ruby") || l.includes("Men Banner pc.png") || l.includes("Prepaid")) {
    console.log(`L${i+1}: ${l.trim()}`);
  }
});
