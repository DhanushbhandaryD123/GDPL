const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const distDir = path.resolve(__dirname, '..', 'dist');

const baseRoutes = [
  '/',
  '/boom',
  '/boom2',
  '/boom3D',
  '/capto',
  '/capto/windows',
  '/capto/educators',
  '/audion',
  '/audimix',
  '/vizmato',
  '/cameraplus',
  '/camerapluspro',
  '/boomformobile',
  '/about',
  '/business',
  '/technology/audio',
  '/technology/video',
  '/technology/camera',
  '/technology/screen-capture',
  '/faq',
  '/faq/boom3dmac',
  '/faq/boom3dmas',
  '/faq/boom3dwin',
  '/faq/audimixwin',
  '/faq/boom2',
  '/faq/boomios',
  '/faq/vizmato',
  '/faq/captomac',
  '/faq/captowin',
  '/faq/audion',
  '/contact',
  '/careers',
  '/press-info',
  '/privacy-policy',
  '/whatsnew/boom',
  '/whatsnew/boom2',
  '/whatsnew/capto',
  '/whatsnew/audion',
  '/whatsnew/audimix',
  '/boom/10th-anniversary',
  '/boom/boom-audio-component',
  '/boom/boom-ppc',
  '/capto/capto-screen-recording/compare',
  '/capto/capto-screen-recording',
  '/capto/downloads/installers/install-capto-device',
  '/capto/downloads/installers/uninstall-capto-device',
  '/capto/help-videos',
  '/capto/privacy-policy'
];

const langs = ['de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];

// Build complete list of routes to prerender
const allRoutes = [...baseRoutes];
for (const lang of langs) {
  for (const r of baseRoutes) {
    if (r === '/') {
      allRoutes.push(`/${lang}`);
    } else {
      allRoutes.push(`/${lang}${r}`);
    }
  }
}
// Add 404 test route (must be two-segment so it doesn't match /:lang)
allRoutes.push('/__prerender/not-found');

function createStaticServer() {
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
  };

  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      try {
        const parsedUrl = new URL(req.url, `http://127.0.0.1`);
        const pathname = decodeURI(parsedUrl.pathname);
        const filePath = path.join(distDir, pathname);

        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath).toLowerCase();
          res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
          return fs.createReadStream(filePath).pipe(res);
        }

        // Return index.html as SPA fallback
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(indexHtml);
      } catch (e) {
        res.writeHead(500);
        res.end();
      }
    });

    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

async function prerender() {
  const server = await createStaticServer();
  const PORT = server.address().port;
  console.log(`🚀 Starting local server on dynamic port ${PORT}...`);

  console.log(`🌐 Launching headless browser with Puppeteer...`);
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-first-run',
      '--no-zygote',
      '--disable-extensions'
    ]
  });

  console.log(`📄 Prerendering ${allRoutes.length} routes...`);

  // Use a pool of 4 concurrent worker pages
  const CONCURRENCY = 4;
  const queue = [...allRoutes];
  const total = allRoutes.length;
  let processed = 0;
  let successCount = 0;
  const failedRoutes = [];

  async function renderRoute(page, route, workerId, isRetry = false) {
    const url = `http://127.0.0.1:${PORT}${route}`;
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    
    await page.waitForFunction(() => {
      const root = document.getElementById('root');
      if (!root) return false;
      const text = root.innerText ? root.innerText.trim() : '';
      return root.children.length > 0 && text.length > 30;
    }, { timeout: 12000 });

    const rootHtml = await page.evaluate(() => {
      const root = document.getElementById('root');
      return root ? root.innerHTML : '';
    });

    if (rootHtml && rootHtml.length > 30) {
      if (route === '/__prerender/not-found') {
        const patch404Html = (file) => {
          if (fs.existsSync(file)) {
            let html = fs.readFileSync(file, 'utf8');
            html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${rootHtml}</div>`);
            html = html.replace(/<title>[\s\S]*?<\/title>/, '<title>404: Page Not Found | Global Delight</title>');
            if (!html.includes('name="robots"')) {
              html = html.replace('</title>', '</title>\n    <meta name="robots" content="noindex, follow">');
            } else {
              html = html.replace(/<meta[^>]*name="robots"[^>]*>/, '<meta name="robots" content="noindex, follow">');
            }
            fs.writeFileSync(file, html, 'utf8');
          }
        };
        patch404Html(path.join(distDir, '404.html'));
        patch404Html(path.join(distDir, '404', 'index.html'));
        console.log(`[Worker ${workerId}] ✅ Prerendered 404 page (${rootHtml.length} bytes)`);
      } else {
        const relPath = route === '/' ? 'index.html' : path.join(route.slice(1), 'index.html');
        const targetPath = path.join(distDir, relPath);

        if (fs.existsSync(targetPath)) {
          let html = fs.readFileSync(targetPath, 'utf8');
          html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${rootHtml}</div>`);
          fs.writeFileSync(targetPath, html, 'utf8');
          successCount++;
          if (processed % 10 === 0 || processed === total || isRetry) {
            console.log(`[Worker ${workerId}] (${processed}/${total}) Prerendered: ${route} (${rootHtml.length} bytes)${isRetry ? ' [RETRY]' : ''}`);
          }
        }
      }
      return true;
    }
    return false;
  }

  async function worker(workerId) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 ReactSnap HeadlessChrome');
    await page.evaluateOnNewDocument(() => {
      window.__PRERENDER__ = true;
    });

    // Warm-up the browser page
    try {
      await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForFunction(() => {
        const root = document.getElementById('root');
        return root && root.children.length > 0;
      }, { timeout: 12000 });
    } catch (_) {}

    while (queue.length > 0) {
      const route = queue.shift();
      if (!route) break;
      processed++;

      try {
        const ok = await renderRoute(page, route, workerId, false);
        if (!ok) {
          failedRoutes.push(route);
        }
      } catch (err) {
        failedRoutes.push(route);
        console.log(`[Worker ${workerId}] ⚠️ Queued for retry: ${route} (${err.message})`);
      }
    }

    await page.close().catch(() => {});
  }

  const workers = [];
  for (let i = 0; i < CONCURRENCY; i++) {
    workers.push(worker(i + 1));
  }

  await Promise.all(workers);

  // Retry any routes that failed during initial parallel run
  if (failedRoutes.length > 0) {
    console.log(`🔄 Retrying ${failedRoutes.length} failed routes sequentially...`);
    const retryPage = await browser.newPage();
    await retryPage.setViewport({ width: 1280, height: 800 });
    await retryPage.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 ReactSnap HeadlessChrome');
    await retryPage.evaluateOnNewDocument(() => {
      window.__PRERENDER__ = true;
    });

    for (const route of failedRoutes) {
      try {
        await renderRoute(retryPage, route, 'Retry', true);
      } catch (err) {
        console.error(`❌ Final failure on ${route}: ${err.message}`);
      }
    }
    await retryPage.close().catch(() => {});
  }

  await browser.close().catch(() => {});
  server.close();

  console.log(`🎉 Successfully prerendered ${successCount} routes into dist/ static HTML!`);
}

prerender().catch((err) => {
  console.error('Prerender error:', err);
  process.exit(1);
});
