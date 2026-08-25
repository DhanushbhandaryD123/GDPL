// Formats every prerendered HTML file with Prettier so View Source (Ctrl+U)
// is readable both with Line Wrap ON and OFF.
// Without this, react-snap leaves the entire <body> as a single 100KB+ line
// (see your screenshot lines 129-130) which looks broken when Line Wrap is off.
// Head was already formatted by reorder-head-tags.cjs; this handles body too.
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const distDir = path.resolve(__dirname, '..', 'dist');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) processFile(full);
  }
}

async function processFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  // Prettier html parser will add proper newlines + 2-space indent for every tag
  // so that even with Line Wrap OFF each tag appears on its own line.
  const formatted = await prettier.format(html, {
    parser: 'html',
    printWidth: 120,
    htmlWhitespaceSensitivity: 'ignore',
    bracketSameLine: false,
    singleAttributePerLine: false,
  });
  if (formatted !== html) {
    fs.writeFileSync(filePath, formatted, 'utf8');
    return true;
  }
  return false;
}

(async () => {
  let count = 0;
  async function walkAsync(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) await walkAsync(full);
      else if (entry.name.endsWith('.html')) {
        if (await processFile(full)) count++;
      }
    }
  }
  await walkAsync(distDir);
  console.log(`✅  Beautified ${count} HTML files with Prettier (printWidth 120) – View Source now pretty-printed.`);
})();
