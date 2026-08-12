import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');

if (!fs.existsSync(DIST_DIR)) {
  console.error("❌ 'dist' directory not found. Please run 'npm run build' before checking links.");
  process.exit(1);
}

const htmlFiles = [];
const allLinks = new Set();
const brokenLinks = [];

// Recursively find all HTML files in a directory
function findHtmlFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findHtmlFiles(fullPath);
    } else if (fullPath.endsWith('.html')) {
      htmlFiles.push(fullPath);
    }
  }
}

// Extract links from HTML content
function extractLinks(htmlContent, filePath) {
  const hrefRegex = /href=["'](.*?)["']/g;
  let match;
  while ((match = hrefRegex.exec(htmlContent)) !== null) {
    let link = match[1];
    
    // Ignore external links, mailto, tel, and anchor links
    if (link.startsWith('http') || link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('#') || link === '') {
      continue;
    }

    // Strip query params and hashes for file checking
    link = link.split('?')[0].split('#')[0];

    // Normalize to absolute path relative to dist root
    let absolutePath = link.startsWith('/') ? link : '/' + link;

    allLinks.add({ source: filePath, target: absolutePath });
  }
}

// Check if the target link exists in the dist folder
function checkLinkExists(target) {
  // If it's the root or ends in a slash, it should map to index.html
  if (target === '/' || target.endsWith('/')) {
    target = path.join(target, 'index.html');
  }

  let fullTargetPath = path.join(DIST_DIR, target);

  // If the path doesn't have an extension, try appending .html or /index.html
  if (!path.extname(fullTargetPath)) {
    if (fs.existsSync(fullTargetPath + '.html')) {
      return true;
    }
    if (fs.existsSync(path.join(fullTargetPath, 'index.html'))) {
      return true;
    }
  }

  return fs.existsSync(fullTargetPath);
}

console.log("🔍 Scanning for HTML files...");
findHtmlFiles(DIST_DIR);
console.log(`✅ Found ${htmlFiles.length} HTML files.`);

console.log("\n🔗 Extracting links...");
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  extractLinks(content, file);
}
console.log(`✅ Extracted ${allLinks.size} internal links to verify.`);

console.log("\n🚦 Validating links...");
for (const linkObj of allLinks) {
  if (!checkLinkExists(linkObj.target)) {
    brokenLinks.push(linkObj);
  }
}

if (brokenLinks.length === 0) {
  console.log("\n🎉 All internal links are valid! No 404s found.");
} else {
  console.error(`\n❌ Found ${brokenLinks.length} broken links:`);
  brokenLinks.forEach(link => {
    const relativeSource = path.relative(DIST_DIR, link.source);
    console.error(`  - Broken Link: "${link.target}"`);
    console.error(`    Found in: ${relativeSource}\n`);
  });
  process.exit(1);
}
