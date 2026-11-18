const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const storyIdx = html.indexOf('id="story"');
console.log(html.substring(storyIdx - 200, storyIdx + 150));
