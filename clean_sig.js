const fs = require('fs');
let code = fs.readFileSync('signature_code.html', 'utf8');

// Strip out user prompt text at bottom if present
const secClose = code.lastIndexOf('</section>');
if (secClose !== -1) {
  const scriptClose = code.indexOf('</script>', secClose);
  if (scriptClose !== -1) {
    code = code.slice(0, scriptClose + 9).trim();
  }
}

console.log('Cleaned code length:', code.length);
fs.writeFileSync('clean_signature.html', code);

// Show where <style>, <section>, <script> are
const styleMatch = code.match(/<style>([\s\S]*?)<\/style>/i);
const scriptMatch = code.match(/<script>([\s\S]*?)<\/script>/i);
const sectionMatch = code.match(/<section[\s\S]*?<\/section>/i);

console.log('Has style:', !!styleMatch);
console.log('Has section:', !!sectionMatch);
console.log('Has script:', !!scriptMatch);
