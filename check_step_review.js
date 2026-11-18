const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const stepMatch = html.match(/function stepTpReview[\s\S]*?}/);
if (stepMatch) {
  console.log(stepMatch[0]);
} else {
  console.log('stepTpReview not found');
}
