const fs = require('fs');

const transcript = fs.readFileSync('C:/Users/ma567/.gemini/antigravity/brain/ab1070b7-5648-4033-ba03-608b8877fb06/.system_generated/logs/transcript_full.jsonl', 'utf8');

const lines = transcript.split('\n');
lines.forEach(l => {
  if (l.includes('10ad1094')) {
    console.log(l.substring(0, 400));
  }
});
