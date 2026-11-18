const fs = require('fs');
const style = fs.readFileSync('sig_extracted_style.css', 'utf8');
console.log(style.slice(0, 800));
