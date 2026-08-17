const SUPPORTED_LANGS = ['en', 'de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];

const getLanguagePath = (langCode, pathname) => {
  let currentPath = pathname;
  const pathParts = currentPath.split('/').filter(Boolean);

  if (pathParts.length > 0 && SUPPORTED_LANGS.includes(pathParts[0])) {
    pathParts.shift();
    currentPath = '/' + pathParts.join('/');
  }

  return langCode === 'en' ? currentPath : `/${langCode}${currentPath === '/' ? '' : currentPath}`;
};

console.log(getLanguagePath('de', '/boom3D'));
console.log(getLanguagePath('fr', '/de/boom3D'));
console.log(getLanguagePath('en', '/fr/boom3D'));
console.log(getLanguagePath('zh', '/'));
console.log(getLanguagePath('en', '/'));
console.log(getLanguagePath('pt', '/about'));
