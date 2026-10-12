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
          if (opts.maxHeight && targetH > opts.maxHeight) {
            targetW = Math.round(targetW * (opts.maxHeight / targetH));
            targetH = opts.maxHeight;
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
          resolve(canvas.toDataURL('image/webp', opts.quality || 0.82));
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

  console.log('=== 1. Optimizing Device Mockups (/devices) ===');
  await convertImage(
    path.join(__dirname, '../public/devices/macbook.webp'),
    path.join(__dirname, '../public/devices/macbook.webp'),
    { maxWidth: 500, quality: 0.82 }
  );
  await convertImage(
    path.join(__dirname, '../public/devices/windows.webp'),
    path.join(__dirname, '../public/devices/windows.webp'),
    { maxWidth: 500, quality: 0.82 }
  );
  await convertImage(
    path.join(__dirname, '../public/devices/iphone.webp'),
    path.join(__dirname, '../public/devices/iphone.webp'),
    { maxWidth: 380, quality: 0.82 }
  );
  await convertImage(
    path.join(__dirname, '../public/devices/Android.webp'),
    path.join(__dirname, '../public/devices/Android.webp'),
    { maxWidth: 340, quality: 0.82 }
  );

  console.log('\n=== 2. Optimizing App Icons (/apps) ===');
  const appIcons = [
    { src: 'Boom3D-mac.jpeg', dest: 'Boom3D-mac.webp' },
    { src: 'boom3d-window.webp', dest: 'boom3d-window.webp' },
    { src: 'Boom2-mac.jpeg', dest: 'Boom2-mac.webp' },
    { src: 'Capto-mac.jpeg', dest: 'Capto-mac.webp' },
    { src: 'Capto-window.jpeg', dest: 'Capto-window.webp' },
    { src: 'AuDimix-Window.jpeg', dest: 'AuDimix-Window.webp' },
    { src: 'Boom for iOS.jpeg', dest: 'Boom for iOS.webp' },
    { src: 'Boom for Android.jpeg', dest: 'Boom for Android.webp' },
    { src: 'Vizmato-ios.jpeg', dest: 'Vizmato-ios.webp' },
    { src: 'Vizmato-android.png', dest: 'Vizmato-android.webp' },
    { src: 'AudiOn-ios.jpeg', dest: 'AudiOn-ios.webp' },
    { src: 'AudiON-android.png', dest: 'AudiON-android.webp' },
  ];

  for (const icon of appIcons) {
    await convertImage(
      path.join(__dirname, `../public/apps/${icon.src}`),
      path.join(__dirname, `../public/apps/${icon.dest}`),
      { width: 160, height: 160, quality: 0.85 }
    );
  }

  console.log('\n=== 3. Optimizing Honors & Reviews (/reviews) ===');
  const reviewImages = [
    'honor.png', 'honor1.png', 'honor2.png', 'honor3.png', 'honor4.png',
    'review1.png', 'review2.png', 'review3.png', 'review4.png', 'review5.png', 'review6.png', 'review7.png'
  ];

  for (const imgName of reviewImages) {
    const base = imgName.replace('.png', '');
    await convertImage(
      path.join(__dirname, `../public/reviews/${imgName}`),
      path.join(__dirname, `../public/reviews/${base}.webp`),
      { maxWidth: 200, maxHeight: 200, quality: 0.85 }
    );
  }

  console.log('\n=== 4. Optimizing Logos and Photos ===');
  await convertImage(
    path.join(__dirname, '../public/logos/globaldelight-logo.webp'),
    path.join(__dirname, '../public/logos/globaldelight-logo.webp'),
    { maxWidth: 400, quality: 0.85 }
  );

  await convertImage(
    path.join(__dirname, '../public/business/VT/c1.webp'),
    path.join(__dirname, '../public/business/VT/c1.webp'),
    { maxWidth: 350, quality: 0.8 }
  );

  await convertImage(
    path.join(__dirname, '../public/hero/Hlogo/Bom3D-logo.png'),
    path.join(__dirname, '../public/hero/Hlogo/Bom3D-logo.webp'),
    { maxWidth: 300, quality: 0.85 }
  );

  await browser.close();
  console.log('\nAll homepage image optimizations completed successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
