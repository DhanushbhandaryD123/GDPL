const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.avif'];
const imageHosts = ['images.unsplash.com', 'placehold.co', 'upload.wikimedia.org'];

function scanDir(dir, results = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      scanDir(filePath, results);
    } else if (/\.(tsx|ts|jsx|js)$/.test(file)) {
      results.push(filePath);
    }
  }
  return results;
}

const files = scanDir(srcDir);
const externalImages = new Map(); // url -> list of files

// Regex to find http/https URLs inside quotes
const urlRegex = /(https?:\/\/[^\s"'`]+)/g;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    let url = match[1];
    // Clean trailing punctuation if any
    url = url.replace(/[),;]+$/, '');
    
    try {
      const parsed = new URL(url);
      const isImageHost = imageHosts.some(h => parsed.hostname.includes(h));
      const hasImgExt = imageExtensions.some(ext => parsed.pathname.toLowerCase().endsWith(ext));
      
      if (isImageHost || hasImgExt) {
        if (!externalImages.has(url)) {
          externalImages.set(url, []);
        }
        externalImages.get(url).push(path.relative(path.join(__dirname, '..'), file));
      }
    } catch (e) {
      // not a valid URL
    }
  }
}

const outputData = [];
for (const [url, fileList] of externalImages.entries()) {
  outputData.push({ url, files: fileList });
}

fs.writeFileSync(path.join(__dirname, 'external-images.json'), JSON.stringify(outputData, null, 2));
console.log(`TOTAL UNIQUE EXTERNAL IMAGES: ${outputData.length}`);
console.log(`Saved details to scripts/external-images.json`);
