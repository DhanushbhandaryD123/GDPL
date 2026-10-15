const fs = require('fs');
const path = require('path');

let auditedCount = 0;
let jsonLdCount = 0;
let hreflangCount = 0;
let ogCount = 0;
let twitterCount = 0;

function checkFile(file) {
  const html = fs.readFileSync(file, 'utf8');
  auditedCount++;
  
  if (/<script\s+type=["']application\/ld\+json["']/i.test(html)) jsonLdCount++;
  if (/<link\s+rel=["']alternate["']\s+hreflang=/i.test(html)) hreflangCount++;
  if (/<meta\s+property=["']og:title["']/i.test(html)) ogCount++;
  if (/<meta\s+name=["']twitter:card["']/i.test(html)) twitterCount++;
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'assets') walk(full);
    else if (entry.name.endsWith('.html') && !entry.name.includes('404')) checkFile(full);
  }
}

walk(path.resolve(__dirname, '../dist'));
console.log('Total content HTML files audited:', auditedCount);
console.log('Files with JSON-LD structured data:', jsonLdCount, `(${((jsonLdCount/auditedCount)*100).toFixed(1)}%)`);
console.log('Files with hreflang alternate links:', hreflangCount, `(${((hreflangCount/auditedCount)*100).toFixed(1)}%)`);
console.log('Files with Open Graph tags:', ogCount, `(${((ogCount/auditedCount)*100).toFixed(1)}%)`);
console.log('Files with Twitter Card tags:', twitterCount, `(${((twitterCount/auditedCount)*100).toFixed(1)}%)`);
