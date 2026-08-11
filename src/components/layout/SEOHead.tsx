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
      {/* Self-referencing Canonical URL */}
      <link rel="canonical" href={`${domain}${currentPath}`} />

      {/* Global Organization JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Global Delight",
          "url": domain,
          "logo": `${domain}/logos/GDTPL_logo_.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["English"]
          },
          "sameAs": [
            "https://www.facebook.com/GlobalDelight",
            "https://twitter.com/GlobalDelight",
            "https://www.instagram.com/globaldelight"
          ]
        })}
      </script>

      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Udupi" />
      <meta name="geo.position" content="13.3409;74.7421" />
      <meta name="ICBM" content="13.3409, 74.7421" />

      {/* Default SEO Tags (can be overridden by specific pages) */}
      <meta name="description" content="Global Delight provides powerful screen recording, video editing, and audio enhancement tools for Mac, Windows, iOS, and Android." />
      <meta name="keywords" content="Global Delight, screen recording, video editing, audio enhancement, Mac apps, Windows apps, iOS apps, Android apps" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Global Delight Technologies Pvt. Ltd." />
      <meta property="og:image" content="https://d3jbf8nvvpx3fh.cloudfront.net/Boom3D-Web/OGImages/Global-Delight.jpg" />
      
      {/* Twitter Card Defaults */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@GlobalDelight" />
      <meta name="twitter:creator" content="@GlobalDelight" />
      <meta name="twitter:image" content="https://d3jbf8nvvpx3fh.cloudfront.net/Boom3D-Web/OGImages/Global-Delight.jpg" />

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
