const fs = require('fs');
const code = fs.readFileSync('signature_code.html', 'utf8');

const scriptMatch = code.match(/<script>([\s\S]*?)<\/script>/i);
if (scriptMatch) {
  console.log('--- SCRIPT ---');
  console.log(scriptMatch[1]);
}
