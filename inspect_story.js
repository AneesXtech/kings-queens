const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const storyIdx = html.indexOf('id="story"');
console.log('Story index:', storyIdx);
console.log(html.slice(Math.max(0, storyIdx - 200), storyIdx + 300));
