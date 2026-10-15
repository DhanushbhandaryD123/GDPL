const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function generateMobileImages() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  const imagesToResize = [
    {
      input: path.resolve(__dirname, '../public/boom3D/boom3d-hero.webp'),
      output: path.resolve(__dirname, '../public/boom3D/boom3d-hero-mobile.webp'),
      targetWidth: 640,
      quality: 0.82
    },
    {
      input: path.resolve(__dirname, '../public/boom2/boom2-hero.webp'),
      output: path.resolve(__dirname, '../public/boom2/boom2-hero-mobile.webp'),
      targetWidth: 640,
      quality: 0.82
    },
    {
      input: path.resolve(__dirname, '../public/button/DownloadonMacAppStore.png'),
      output: path.resolve(__dirname, '../public/button/DownloadonMacAppStore.webp'),
      targetWidth: 269,
      quality: 0.85
    }
  ];

  for (const item of imagesToResize) {
    if (!fs.existsSync(item.input)) {
      console.log('Skipping missing input:', item.input);
      continue;
    }

    const dataUrl = 'data:image/webp;base64,' + fs.readFileSync(item.input).toString('base64');
    
    const resultBase64 = await page.evaluate(async (src, targetW, q) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          const aspect = img.height / img.width;
          const targetH = Math.round(targetW * aspect);
          const canvas = document.createElement('canvas');
          canvas.width = targetW;
          canvas.height = targetH;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, targetW, targetH);
          const webpData = canvas.toDataURL('image/webp', q);
          resolve(webpData.split(',')[1]);
        };
        img.onerror = reject;
        img.src = src;
      });
    }, dataUrl, item.targetWidth, item.quality);

    fs.writeFileSync(item.output, Buffer.from(resultBase64, 'base64'));
    const oldSize = fs.statSync(item.input).size;
    const newSize = fs.statSync(item.output).size;
    console.log(`✅ Generated ${path.basename(item.output)}: ${(oldSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB`);
  }

  await browser.close();
}

generateMobileImages().catch(console.error);
