const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function main() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  async function convertToWebp(filePath, maxWidth = 1200, quality = 0.8) {
    if (!fs.existsSync(filePath)) return;
    const buffer = fs.readFileSync(filePath);
    const mime = filePath.endsWith('.png') ? 'image/png' : 'image/jpeg';
    const base64 = `data:${mime};base64,${buffer.toString('base64')}`;

    const dataUrl = await page.evaluate(async (src, maxW, q) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          let targetW = img.width;
          let targetH = img.height;
          if (targetW > maxW) {
            targetH = Math.round(targetH * (maxW / targetW));
            targetW = maxW;
          }
          const canvas = document.createElement('canvas');
          canvas.width = targetW;
          canvas.height = targetH;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, targetW, targetH);
          resolve(canvas.toDataURL('image/webp', q));
        };
        img.onerror = reject;
        img.src = src;
      });
    }, base64, maxWidth, quality);

    const match = dataUrl.match(/^data:image\/webp;base64,(.+)$/);
    if (match) {
      const outPath = filePath.replace(/\.(jpg|jpeg|png)$/, '.webp');
      const outBuffer = Buffer.from(match[1], 'base64');
      fs.writeFileSync(outPath, outBuffer);
      console.log(`Converted ${path.basename(filePath)} (${(buffer.length/1024).toFixed(1)} KB) -> ${path.basename(outPath)} (${(outBuffer.length/1024).toFixed(1)} KB)`);
    }
  }

  const files = [
    'public/capto/windows/tut-record.jpg',
    'public/capto/windows/tut-edit.jpg',
    'public/capto/windows/export-app.jpg',
    'public/capto/windows/editor-app.jpg',
    'public/capto/windows/hero-app.jpg',
    'public/capto/windows/annotate-app.jpg',
  ];

  for (const f of files) {
    await convertToWebp(path.join(__dirname, '..', f));
  }

  await browser.close();
  console.log('Capto image conversion complete.');
}

main().catch(console.error);
