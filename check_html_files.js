const fs = require('fs');
console.log('Product.dc.html exists:', fs.existsSync('Product.dc.html'));
const files = fs.readdirSync('.');
console.log('HTML files in workspace:', files.filter(f => f.endsWith('.html')));
