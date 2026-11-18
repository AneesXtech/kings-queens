const fs = require('fs');
const content = fs.readFileSync('find_your_signature_raw.txt', 'utf8');

// Print first 500 chars and last 500 chars
console.log('--- START (500 chars) ---');
console.log(content.slice(0, 500));
console.log('--- END (500 chars) ---');
console.log(content.slice(-500));
