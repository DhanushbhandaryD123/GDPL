import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

// index.html ships static fallback <meta name="description"/"keywords"> tags so
// raw page source always shows something even before React/Helmet mounts (e.g. in
// dev mode, or for non-JS crawlers). Once Helmet takes over, its own tags (marked
// with data-rh) are the source of truth, so the static ones are removed here to
// avoid duplicate tags in the prerendered production build.
function removeStaticFallbackMetaTags() {
  document
    .querySelectorAll('meta[name="description"]:not([data-rh]), meta[name="keywords"]:not([data-rh])')
    .forEach((el) => el.remove());
}

export function SEOHead() {
  const location = useLocation();
  const supportedLangs = ['en', 'de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];

  useEffect(() => {
    removeStaticFallbackMetaTags();
  }, []);
  
  // Extract the base path without the language prefix
  let currentPath = location.pathname;
  const pathParts = currentPath.split('/').filter(Boolean);
  
  if (pathParts.length > 0 && supportedLangs.includes(pathParts[0])) {
    // Remove the language prefix
    pathParts.shift();
    currentPath = '/' + pathParts.join('/');
  }

  // Domain of the application
  const domain = '';
  
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

      {/* Default SEO Tags (can be overridden by specific pages) */}
      <meta name="description" content="Global Delight builds award-winning audio, video, and photography apps — Boom 3D volume booster & equalizer, Capto screen recorder, Vizmato video editor, and Camera Plus Pro for Mac, Windows, iOS & Android." />
      <meta name="keywords" content="Global Delight, Boom 3D, volume booster, Mac equalizer, 3D surround sound, Capto, screen recorder, Vizmato, video editor app, Camera Plus Pro, AuDimix, AudiOn, bass booster, speaker booster, amplifier" />
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
