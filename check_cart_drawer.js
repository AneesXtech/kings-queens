const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const drawerIdx = html.indexOf('id="cart-drawer"');
console.log(html.slice(drawerIdx, drawerIdx + 1200));
