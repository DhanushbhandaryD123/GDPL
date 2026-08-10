import fs from 'fs';

const packageJsonStr = fs.readFileSync('./package.json', 'utf8');
const pkg = JSON.parse(packageJsonStr);

const baseRoutes = [
  "/", "/about", "/business", "/technology/audio", "/technology/video", "/technology/camera", "/technology/screen-capture",
  "/faq", "/contact", "/careers", "/boom", "/boom2", "/boom3D", "/capto", "/capto/windows", "/audion", "/vizmato", 
  "/cameraplus", "/camerapluspro", "/audimix", "/boomformobile"
];

const langs = ['de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];

let allRoutes = [...baseRoutes];

langs.forEach(lang => {
  baseRoutes.forEach(route => {
    allRoutes.push(`/${lang}${route === '/' ? '' : route}`);
  });
});

pkg.reactSnap.include = allRoutes;

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));
console.log('package.json updated with ' + allRoutes.length + ' routes');
