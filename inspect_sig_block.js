const fs = require('fs');
const content = fs.readFileSync('find_your_signature_raw.txt', 'utf8');

// Strip out <USER_REQUEST> tags and any prompt text before the code
const codeStart = content.indexOf('<!-- ============================================================');
let code = content.slice(codeStart);
const codeEnd = code.indexOf('</USER_REQUEST>');
if (codeEnd !== -1) {
  code = code.slice(0, codeEnd).trim();
}

console.log('Code length:', code.length);
fs.writeFileSync('signature_code.html', code);

// Check image paths in the signature code
const imgMatches = code.match(/src=["'][^"']+["']/g) || [];
console.log('Image paths in signature code:', imgMatches);
