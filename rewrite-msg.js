const fs = require('fs');
try {
  const input = fs.readFileSync(0, 'utf-8');
  const output = input.split('\n').filter(line => !line.toLowerCase().includes('co-authored-by: claude')).join('\n');
  process.stdout.write(output);
} catch (e) {
  process.stdout.write('');
}
