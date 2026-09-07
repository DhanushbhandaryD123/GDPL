const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const crypto = require('crypto');

const externalImagesPath = path.join(__dirname, 'external-images.json');
const rootDir = path.join(__dirname, '..');
const targetDir = path.join(rootDir, 'public', 'images', 'external');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const items = JSON.parse(fs.readFileSync(externalImagesPath, 'utf8'));

// Helper to determine file extension
function getExtension(url, contentType) {
  if (url.includes('.svg') || (contentType && contentType.includes('svg'))) return '.svg';
  if (url.includes('.png') || (contentType && contentType.includes('png'))) return '.png';
  if (url.includes('.webp') || (contentType && contentType.includes('webp'))) return '.webp';
  if (url.includes('.gif') || (contentType && contentType.includes('gif'))) return '.gif';
  return '.jpg';
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      // Handle redirects
      if (res.statusCode === 301 || res.statusCode === 302) {
        return resolve(downloadImage(res.headers.location, dest));
      }

      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }

      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(res.headers['content-type']);
      });
    });

    req.on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });

    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

async function run() {
  console.log(`Starting download and localization for ${items.length} external images...`);

  let successCount = 0;
  let skippedCount = 0;
  let failedCount = 0;
  const replacements = [];

  for (const item of items) {
    const url = item.url;

    // Handle template strings like placehold.co
    if (url.includes('${')) {
      console.log(`Skipping template URL: ${url}`);
      skippedCount++;
      continue;
    }

    // Generate stable hash for filename
    const hash = crypto.createHash('md5').update(url).digest('hex').slice(0, 12);
    let parsedPath = '';
    try {
      const u = new URL(url);
      parsedPath = path.basename(u.pathname);
    } catch(e) {}

    let ext = path.extname(parsedPath).toLowerCase();
    if (!['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'].includes(ext)) {
      ext = url.includes('unsplash.com') ? '.jpg' : '.png';
    }

    const filename = `img_${hash}${ext}`;
    const destPath = path.join(targetDir, filename);
    const localUrl = `/images/external/${filename}`;

    try {
      if (!fs.existsSync(destPath) || fs.statSync(destPath).size === 0) {
        console.log(`Downloading: ${url} -> ${filename}`);
        await downloadImage(url, destPath);
      } else {
        console.log(`Already exists: ${filename}`);
      }
      replacements.push({ originalUrl: url, localUrl, files: item.files });
      successCount++;
    } catch (err) {
      console.error(`Error downloading ${url}:`, err.message);
      failedCount++;
    }
  }

  console.log(`\nDownload complete: ${successCount} succeeded, ${skippedCount} skipped, ${failedCount} failed.`);
  console.log(`Now updating source code references...`);

  let updatedFilesCount = 0;
  const fileToReplacements = new Map();

  for (const rep of replacements) {
    for (const relFile of rep.files) {
      const fullPath = path.join(rootDir, relFile);
      if (!fileToReplacements.has(fullPath)) {
        fileToReplacements.set(fullPath, []);
      }
      fileToReplacements.get(fullPath).push(rep);
    }
  }

  for (const [fullPath, reps] of fileToReplacements.entries()) {
    if (!fs.existsSync(fullPath)) continue;
    let content = fs.readFileSync(fullPath, 'utf8');
    let changed = false;

    for (const rep of reps) {
      if (content.includes(rep.originalUrl)) {
        content = content.split(rep.originalUrl).join(rep.localUrl);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Updated references in: ${path.relative(rootDir, fullPath)}`);
      updatedFilesCount++;
    }
  }

  console.log(`\nSuccessfully updated ${updatedFilesCount} source files!`);
}

run().catch(console.error);
