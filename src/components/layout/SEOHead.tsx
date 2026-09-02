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

// schema.org/OG expects full region-qualified locale tags, not the bare
// i18next language codes this app routes on. Portuguese and Spanish don't
// have a single "generic" OG locale, so these pick the standalone-country
// form since the app doesn't distinguish regional variants of either.
const OG_LOCALE_MAP: Record<string, string> = {
  en: 'en_US',
  de: 'de_DE',
  it: 'it_IT',
  ja: 'ja_JP',
  fr: 'fr_FR',
  pt: 'pt_PT',
  es: 'es_ES',
  zh: 'zh_CN',
};

// The Navbar's own logo (and the old Organization schema before this file
// existed) both point at this CDN asset — it's the real, working brand
// image, unlike the local "/logos/GDTPL_logo_.png" path that was referenced
// here previously but never actually existed in public/.
const BRAND_LOGO_URL = 'https://d3jbf8nvvpx3fh.cloudfront.net/home/_resource/_img/website/2015/GDTPL_logo_.png';

// Real intrinsic dimensions for every image SEO_DATA uses as an og:image/twitter:image,
// read once from the actual files — social crawlers use these to size the preview card
// before the image itself loads, so a missing/wrong value produces a cropped or blank card.
const OG_IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  'https://d3jbf8nvvpx3fh.cloudfront.net/Boom3D-Web/OGImages/Global-Delight.jpg': { width: 1200, height: 628 },
  '/apps/AuDimix-Window.jpeg': { width: 1028, height: 1028 },
  '/apps/AudiOn-ios.jpeg': { width: 300, height: 300 },
  '/apps/Boom for iOS.jpeg': { width: 1028, height: 1028 },
  '/apps/Boom2-mac.jpeg': { width: 1028, height: 1028 },
  '/apps/Boom3D-mac.jpeg': { width: 1028, height: 1028 },
  '/apps/Capto-mac.jpeg': { width: 256, height: 256 },
  '/apps/Capto-window.jpeg': { width: 256, height: 256 },
  '/apps/Vizmato-ios.jpeg': { width: 300, height: 300 },
  '/business/AT/Audio-Hbanner.webp': { width: 1717, height: 916 },
  '/business/CT/CT-banner.webp': { width: 1774, height: 887 },
  '/business/ST/ST_banner.webp': { width: 1920, height: 769 },
  '/business/VT/VT-banner.webp': { width: 1718, height: 916 },
  '/faq/AudimixFaqLogo.png': { width: 160, height: 140 },
  '/faq/AudionFaqLogo.png': { width: 169, height: 57 },
  '/faq/Boom2LogoFaq.png': { width: 142, height: 134 },
  '/faq/Boom3D.png': { width: 160, height: 140 },
  '/faq/Vizmato.png': { width: 231, height: 58 },
  '/faq/iBoom.png': { width: 182, height: 136 },
  '/hero/cameraplus.webp': { width: 1122, height: 1402 },
};

export function SEOHead() {
  const location = useLocation();
  const supportedLangs = ['en', 'de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];

  useEffect(() => {
    removeStaticFallbackMetaTags();
  }, []);

  // Extract the base path without the language prefix
  let currentPath = location.pathname;
  const pathParts = currentPath.split('/').filter(Boolean);
  const currentLang = pathParts.length > 0 && supportedLangs.includes(pathParts[0]) ? pathParts[0] : 'en';

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
    if (!img) return BRAND_LOGO_URL;
    if (img.startsWith('http')) return img;
    return `${domain}${img}`;
  };
  const pageImage = resolveImage(seo.ogImage);
  const pageImageDimensions = OG_IMAGE_DIMENSIONS[seo.ogImage];
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
          "logo": BRAND_LOGO_URL,
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["English"]
          },
          "sameAs": [
            "https://www.facebook.com/GlobalDelight",
            "https://twitter.com/GlobalDelight",
            "https://www.linkedin.com/company/global-delight/",
            "https://www.youtube.com/channel/UCLjiPwteYQLEmIzDs4xmyTw",
            "https://www.instagram.com/globaldelight"
          ]
        })}
      </script>

      {/* WebSite JSON-LD — identifies the site as a single entity spanning
          all locales (no per-page inLanguage here; that belongs on WebPage). */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Global Delight",
          "url": domain,
        })}
      </script>

      {/* WebPage JSON-LD — describes this specific page as part of the WebSite above. */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": pageTitle,
          "description": pageDescription,
          "url": `${domain}${canonicalPath}`,
          "inLanguage": currentLang,
          "isPartOf": {
            "@type": "WebSite",
            "name": "Global Delight",
            "url": domain,
          },
        })}
      </script>

      {/* Product SoftwareApplication JSON-LD – for all product pages: boom/boom2/boom3D/capto(+windows)/cameraplus(+pro)/audion/audimix/vizmato/boomformobile */}
      {seo.softwareApplication && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: seo.softwareApplication.name,
            operatingSystem: seo.softwareApplication.operatingSystem,
            applicationCategory: seo.softwareApplication.applicationCategory,
            description: pageDescription,
            image: resolveImage(seo.softwareApplication.image),
            url: `${domain}${canonicalPath}`,
            offers: seo.softwareApplication.price
              ? {
                  "@type": "Offer",
                  price: seo.softwareApplication.price,
                  priceCurrency: seo.softwareApplication.priceCurrency || "INR",
                }
              : undefined,
          })}
        </script>
      )}

      {/* Page-connected Open Graph – url/image/content as in Home structure */}
      <meta property="og:title" content={pageOgTitle} />
      <meta property="og:description" content={pageOgDescription} />
      <meta property="og:image" content={pageImage} />
      {pageImageDimensions && <meta property="og:image:width" content={String(pageImageDimensions.width)} />}
      {pageImageDimensions && <meta property="og:image:height" content={String(pageImageDimensions.height)} />}
      <meta property="og:image:alt" content={pageOgTitle} />
      <meta property="og:url" content={`${domain}${canonicalPath}`} />
      <meta name="thumbnail" content={pageImage} />
      <meta property="og:type" content={seo.ogType || 'website'} />
      <meta property="og:locale" content={OG_LOCALE_MAP[currentLang] || 'en_US'} />
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
