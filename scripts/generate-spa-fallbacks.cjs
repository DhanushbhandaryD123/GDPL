const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('Error: dist/index.html not found! Build vite first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// List of all primary and known routes to ensure static index.html exists
const routes = [
  '/',
  '/boom3D',
  '/boom2',
  '/boom',
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
  '/capto',
  '/capto/windows',
  '/capto/educators',
  '/capto/thankyou',
  '/boom2/thankyou/download',
  '/audion',
  '/vizmato',
  '/cameraplus',
  '/camerapluspro',
  '/audimix',
  '/boomformobile',
  '/press-info',
  '/privacy-policy',
  '/whatsnew/boom',
  '/whatsnew/boom2',
  '/whatsnew/capto',
  '/whatsnew/audion',
  '/whatsnew/audimix'
];

// Add language prefixes as well
const langs = ['de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];
const allRoutes = [...routes];
for (const lang of langs) {
  for (const r of routes) {
    if (r === '/') {
      allRoutes.push(`/${lang}`);
    } else {
      allRoutes.push(`/${lang}${r}`);
    }
  }
}

console.log(`Generating static fallback HTML for ${allRoutes.length} routes...`);

for (const route of allRoutes) {
  if (route === '/') continue; // dist/index.html already exists
  
  // Format directory path: e.g. dist/boom3D, dist/faq/boom3dmac
  const routeRelPath = route.startsWith('/') ? route.slice(1) : route;
  const targetDir = path.join(distDir, routeRelPath);
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, baseHtml, 'utf8');
}

// Ensure dist/404.html and dist/404/index.html exist
fs.writeFileSync(path.join(distDir, '404.html'), baseHtml, 'utf8');
const dir404 = path.join(distDir, '404');
if (!fs.existsSync(dir404)) {
  fs.mkdirSync(dir404, { recursive: true });
}
fs.writeFileSync(path.join(dir404, 'index.html'), baseHtml, 'utf8');

console.log('✅ Generated static HTML fallbacks for all routes!');
