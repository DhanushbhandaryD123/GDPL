const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function main() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  async function convertImage(inputPath, outputPath, options = {}) {
    if (!fs.existsSync(inputPath)) {
      console.log('Skipping missing:', inputPath);
      return;
    }
    const buffer = fs.readFileSync(inputPath);
    const mime = inputPath.endsWith('.png') ? 'image/png' : inputPath.endsWith('.webp') ? 'image/webp' : 'image/jpeg';
    const base64 = `data:${mime};base64,${buffer.toString('base64')}`;

    const dataUrl = await page.evaluate(async (src, opts) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          let targetW = img.width;
          let targetH = img.height;
          if (opts.maxWidth && targetW > opts.maxWidth) {
            targetH = Math.round(targetH * (opts.maxWidth / targetW));
            targetW = opts.maxWidth;
          }
          if (opts.width && opts.height) {
            targetW = opts.width;
            targetH = opts.height;
          }
          const canvas = document.createElement('canvas');
          canvas.width = targetW;
          canvas.height = targetH;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, targetW, targetH);
          resolve(canvas.toDataURL('image/webp', opts.quality || 0.8));
        };
        img.onerror = reject;
        img.src = src;
      });
    }, base64, options);

    const match = dataUrl.match(/^data:image\/webp;base64,(.+)$/);
    if (match) {
      const outBuffer = Buffer.from(match[1], 'base64');
      fs.writeFileSync(outputPath, outBuffer);
      const oldSize = (buffer.length / 1024).toFixed(1);
      const newSize = (outBuffer.length / 1024).toFixed(1);
      console.log(`Converted ${path.basename(inputPath)} (${oldSize} KB) -> ${path.basename(outputPath)} (${newSize} KB)`);
    }
  }

  console.log('Optimizing Boom 3D image assets...');

  // 1. App Universe center badge (displayed at ~60-80px, original is 1028x1028 94 KB JPEG)
  await convertImage(
    path.join(__dirname, '../public/apps/Boom3D-mac.jpeg'),
    path.join(__dirname, '../public/apps/Boom3D-mac-badge.webp'),
    { width: 96, height: 96, quality: 0.85 }
  );

  // 2. Boom 3D CTA artwork (original is 61.4 KB PNG)
  await convertImage(
    path.join(__dirname, '../public/boom3D/u1.png'),
    path.join(__dirname, '../public/boom3D/u1.webp'),
    { maxWidth: 640, quality: 0.8 }
  );

  // 3. Extension icon (original is 19.6 KB PNG)
  await convertImage(
    path.join(__dirname, '../public/boom3D/Extension-icon.png'),
    path.join(__dirname, '../public/boom3D/Extension-icon.webp'),
    { width: 128, height: 128, quality: 0.85 }
  );

  // 4. Cult of mac logo (original is 20.3 KB PNG)
  await convertImage(
    path.join(__dirname, '../public/boom3D/cultofmac.png'),
    path.join(__dirname, '../public/boom3D/cultofmac.webp'),
    { maxWidth: 200, quality: 0.85 }
  );

  // 5. Tailored / Universe cards (original g1: 82 KB, g2: 96 KB, g3: 68 KB)
  await convertImage(
    path.join(__dirname, '../public/boom3D/g1.webp'),
    path.join(__dirname, '../public/boom3D/g1.webp'),
    { maxWidth: 600, quality: 0.75 }
  );
  await convertImage(
    path.join(__dirname, '../public/boom3D/g2.webp'),
    path.join(__dirname, '../public/boom3D/g2.webp'),
    { maxWidth: 600, quality: 0.75 }
  );
  await convertImage(
    path.join(__dirname, '../public/boom3D/g3.webp'),
    path.join(__dirname, '../public/boom3D/g3.webp'),
    { maxWidth: 600, quality: 0.75 }
  );

  // 6. Boom Logo in Hero
  await convertImage(
    path.join(__dirname, '../public/boom3D/boomLogo3D.png'),
    path.join(__dirname, '../public/boom3D/boomLogo3D.webp'),
    { maxWidth: 350, quality: 0.85 }
  );

  await browser.close();
  console.log('Image optimization finished successfully.');
}

main().catch(console.error);
