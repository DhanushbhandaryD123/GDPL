// Formats every prerendered HTML file with js-beautify so View Source (Ctrl+U)
// is immediately readable in standard view WITHOUT needing to click Line Wrap.
// Without this, headless prerendering can leave large DOM trees on a single line.
const fs = require('fs');
const path = require('path');
const { html: beautifyHtml } = require('js-beautify');

const distDir = path.resolve(__dirname, '..', 'dist');

function walk(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, fileList);
    } else if (entry.name.endsWith('.html')) {
      fileList.push(full);
    }
  }
  return fileList;
}

const beautifyOptions = {
  indent_size: 2,
  indent_char: ' ',
  max_preserve_newlines: 1,
  preserve_newlines: true,
  wrap_line_length: 120,
  wrap_attributes: 'auto',
  end_with_newline: true,
  extra_liners: ['head', 'body', '/html'],
  unformatted: ['code', 'pre']
};

function processFile(filePath) {
  try {
    const html = fs.readFileSync(filePath, 'utf8');
    const formatted = beautifyHtml(html, beautifyOptions);
    if (formatted !== html) {
      fs.writeFileSync(filePath, formatted, 'utf8');
      return true;
    }
  } catch (err) {
    console.error(`Warning: Failed to beautify ${filePath}:`, err.message);
  }
  return false;
}

(() => {
  const files = walk(distDir);
  let count = 0;
  for (const file of files) {
    if (processFile(file)) count++;
  }
  console.log(`✅  Beautified ${count} HTML files with js-beautify (printWidth 120) – View Source now standard multi-line.`);
})();

