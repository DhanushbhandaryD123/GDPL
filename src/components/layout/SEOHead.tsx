import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export function SEOHead() {
  const location = useLocation();
  const supportedLangs = ['en', 'de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];
  
  // Extract the base path without the language prefix
  let currentPath = location.pathname;
  const pathParts = currentPath.split('/').filter(Boolean);
  
  if (pathParts.length > 0 && supportedLangs.includes(pathParts[0])) {
    // Remove the language prefix
    pathParts.shift();
    currentPath = '/' + pathParts.join('/');
  }

  // Domain of the application
  const domain = 'https://www.globaldelight.com';
  
  return (
    <Helmet>
      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Udupi" />
      <meta name="geo.position" content="13.3409;74.7421" />
      <meta name="ICBM" content="13.3409, 74.7421" />

      {/* Language Hreflang Tags */}
      {supportedLangs.map((lang) => {
        const langPath = lang === 'en' ? currentPath : `/${lang}${currentPath === '/' ? '' : currentPath}`;
        return (
          <link 
            key={lang} 
            rel="alternate" 
            hrefLang={lang} 
            href={`${domain}${langPath}`} 
          />
        );
      })}
      {/* x-default points to the English version */}
      <link 
        rel="alternate" 
        hrefLang="x-default" 
        href={`${domain}${currentPath}`} 
      />
    </Helmet>
  );
}
