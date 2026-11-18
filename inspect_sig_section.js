const fs = require('fs');
const code = fs.readFileSync('clean_signature.html', 'utf8');

const sectionMatch = code.match(/<section[\s\S]*?<\/section>/i);
if (sectionMatch) {
  console.log('Section start:');
  console.log(sectionMatch[0].slice(0, 500));
  console.log('Section end:');
  console.log(sectionMatch[0].slice(-500));
}
