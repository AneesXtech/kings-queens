const fs = require('fs');

const transcript = fs.readFileSync('C:/Users/ma567/.gemini/antigravity/brain/ab1070b7-5648-4033-ba03-608b8877fb06/.system_generated/logs/transcript_full.jsonl', 'utf8');

const lines = transcript.split('\n');
const line909 = lines.find(l => l.includes('"step_index":909'));
if (line909) {
  const p = JSON.parse(line909);
  console.log('Media:', JSON.stringify(p.media));
}
