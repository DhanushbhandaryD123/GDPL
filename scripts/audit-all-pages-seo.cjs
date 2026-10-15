const fs = require('fs');
const path = require('path');

const issues = [];
let auditedCount = 0;

function checkFile(file) {
  const html = fs.readFileSync(file, 'utf8');
  auditedCount++;
  
  const hasCharset = /<meta\s+charset=["']?utf-8["']?\s*\/?>/i.test(html.slice(0, 500));
  const hasViewport = /<meta\s+name=["']viewport["']/i.test(html);
  const hasTitle = /<title>[^<]+<\/title>/i.test(html);
  const hasDesc = /<meta\s+name=["']description["']/i.test(html);
  const hasCanonical = /<link\s+rel=["']canonical["']/i.test(html);
  
  // check images without alt
  const missingAltImgs = (html.match(/<img(?![^>]*\balt=)[^>]*>/gi) || []);
  
  const fileIssues = [];
  if (!hasCharset) fileIssues.push('Missing/late charset');
  if (!hasViewport) fileIssues.push('Missing viewport');
  if (!hasTitle) fileIssues.push('Missing title');
  if (!hasDesc) fileIssues.push('Missing description');
  if (!hasCanonical) fileIssues.push('Missing canonical');
  if (missingAltImgs.length > 0) fileIssues.push(missingAltImgs.length + ' img missing alt');
  
  if (fileIssues.length > 0) {
    issues.push({ file: path.relative(path.resolve(__dirname, '../dist'), file), issues: fileIssues });
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'assets') walk(full);
    else if (entry.name.endsWith('.html') && !entry.name.endsWith('404.html')) checkFile(full);
  }
}

walk(path.resolve(__dirname, '../dist'));
console.log('Audited HTML files:', auditedCount);
console.log('Files with SEO/Quality issues:', issues.length);
if (issues.length > 0) {
  console.log('First 10 issues:', JSON.stringify(issues.slice(0, 10), null, 2));
} else {
  console.log('🎉 100% of all prerendered pages have complete SEO (charset, viewport, title, description, canonical, and valid alt tags)!');
}
