const fs = require('fs');

const filename = process.argv[2];
const word = process.argv[3];
const limit = Number(process.argv[4]);

if (!filename || !word || !Number.isInteger(limit) || limit < 1) {
  console.log('Usage: node findfirst.js <filename> <word> <positive number>');
  process.exit(1);
}

try {
  const contents = fs.readFileSync(filename, 'utf8');
  const lines = contents.split('\n');
  const matches = lines.filter(line => line.includes(word)).slice(0, limit);

  if (matches.length === 0) {
    console.log('No matches found.');
  } else {
    console.log(matches.join('\n'));
  }
} catch (error) {
  console.log(`Could not read file: ${filename}`);
}
