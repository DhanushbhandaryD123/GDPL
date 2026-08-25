import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SEO_DATA, getSeoForPath } from '../../data/seo';

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
  const domain = import.meta.env.VITE_SITE_URL || '';
  
  // Per-page SEO: take all text/url/image/content for this route as in Home
  const seo = getSeoForPath(currentPath) || SEO_DATA['/'];
  // Resolve image URL: allow root-relative ("/apps/...") or absolute; prefix domain if needed
  const resolveImage = (img: string) => {
    if (!img) return `${domain}/logos/GDTPL_logo_.png`;
    if (img.startsWith('http')) return img;
    return `${domain}${img}`;
  };
  const pageImage = resolveImage(seo.ogImage);
  const pageTitle = seo.title;
  const pageDescription = seo.description;
  const pageKeywords = seo.keywords;
  const pageOgTitle = seo.ogTitle || seo.title;
  const pageOgDescription = seo.ogDescription || seo.description;
  const pageTwitterTitle = seo.twitterTitle || seo.title;
  const pageTwitterDescription = seo.twitterDescription || seo.description;
  const pageTwitterImage = seo.twitterImage ? resolveImage(seo.twitterImage) : pageImage;
  const canonicalPath = seo.canonicalPath || currentPath;
  
  return (
    <Helmet>
      {/* Page-connected Title & Description/Keywords – all text/url/image/content as in Home */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      {seo.subject && <meta name="subject" content={seo.subject} />}
      <meta name="author" content="Global Delight Technologies Pvt. Ltd." />

      {/* Self-referencing Canonical URL – page-connected */}
      <link rel="canonical" href={`${domain}${canonicalPath}`} />

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

      {/* Page-connected Open Graph – url/image/content as in Home structure */}
      <meta property="og:title" content={pageOgTitle} />
      <meta property="og:description" content={pageOgDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={`${domain}${canonicalPath}`} />
      <meta name="thumbnail" content={pageImage} />
      <meta property="og:type" content={seo.ogType || 'website'} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Global Delight Technologies Pvt. Ltd." />
      
      {/* Page-connected Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTwitterTitle} />
      <meta name="twitter:description" content={pageTwitterDescription} />
      <meta name="twitter:image" content={pageTwitterImage} />
      <meta name="twitter:url" content={`${domain}${canonicalPath}`} />
      <meta name="twitter:site" content="@GlobalDelight" />
      <meta name="twitter:creator" content="@GlobalDelight" />

      {/* Generic fallback robots – individual pages (Privacy/404) override via their own Helmet */}
      <meta name="robots" content="index, follow" />

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
