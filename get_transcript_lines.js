const fs = require('fs');
const readline = require('readline');

async function findUserCode() {
  const fileStream = fs.createReadStream('C:\\Users\\ma567\\.gemini\\antigravity\\brain\\ab1070b7-5648-4033-ba03-608b8877fb06\\.system_generated\\logs\\transcript.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let found = [];
  let index = 0;
  for await (const line of rl) {
    if (line.includes('FIND YOUR SIGNATURE')) {
      found.push(index);
    }
    index++;
  }
  console.log('Found occurrences at lines:', found);
}

findUserCode();
