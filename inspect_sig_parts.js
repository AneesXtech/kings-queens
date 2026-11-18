const fs = require('fs');
const code = fs.readFileSync('signature_code.html', 'utf8');

const styleMatch = code.match(/<style>([\s\S]*?)<\/style>/i);
console.log('Style length:', styleMatch ? styleMatch[1].length : 0);

const scriptMatch = code.match(/<script>([\s\S]*?)<\/script>/i);
console.log('Script length:', scriptMatch ? scriptMatch[1].length : 0);

const htmlWithoutStyleAndScript = code.replace(/<style>[\s\S]*?<\/style>/i, '').replace(/<script>[\s\S]*?<\/script>/i, '').replace(/<link[^>]*>/gi, '').trim();
console.log('HTML length:', htmlWithoutStyleAndScript.length);
console.log('HTML start preview:\n', htmlWithoutStyleAndScript.slice(0, 300));
console.log('HTML end preview:\n', htmlWithoutStyleAndScript.slice(-300));
