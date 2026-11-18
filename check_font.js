const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

console.log('Has Cormorant:', html.includes('Cormorant Garamond'));
