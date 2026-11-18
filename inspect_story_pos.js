const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const storyIdx = html.indexOf('id="story"');
console.log('Before id="story":');
console.log(html.substring(storyIdx - 400, storyIdx + 200));
