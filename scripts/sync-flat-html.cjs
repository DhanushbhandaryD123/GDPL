const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');

function syncFlatHtml(dir) {
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name === 'assets') continue;

    const subDir = path.join(dir, entry.name);
    const indexFile = path.join(subDir, 'index.html');
    const flatFile = path.join(dir, `${entry.name}.html`);

    if (fs.existsSync(indexFile)) {
      fs.copyFileSync(indexFile, flatFile);
      count++;
    }

    // Recurse for nested folders like /de/capto or /faq/boom3dmac
    count += syncFlatHtml(subDir);
  }

  return count;
}

const total = syncFlatHtml(distDir);
console.log(`✅  Synced ${total} flat .html files alongside directory index.html files to eliminate Cloudflare 301 redirects!`);
