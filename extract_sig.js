const fs = require('fs');
const readline = require('readline');

async function extractLine(targetLine) {
  const filePath = 'C:\\Users\\ma567\\.gemini\\antigravity\\brain\\ab1070b7-5648-4033-ba03-608b8877fb06\\.system_generated\\logs\\transcript_full.jsonl';
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let index = 0;
  for await (const line of rl) {
    if (index === targetLine) {
      const obj = JSON.parse(line);
      fs.writeFileSync('find_your_signature_raw.txt', typeof obj.content === 'string' ? obj.content : JSON.stringify(obj.content, null, 2));
      console.log('Successfully saved find_your_signature_raw.txt, length:', (obj.content || '').length);
      return;
    }
    index++;
  }
}

extractLine(1378);
