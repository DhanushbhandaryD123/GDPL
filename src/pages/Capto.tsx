import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { CaptoHero } from '../components/capto/CaptoHero';
import { Footer } from '../components/layout/Footer';

const CaptoFeatures = lazy(() => import('../components/capto/CaptoFeatures').then(m => ({ default: m.CaptoFeatures })));
const CaptoUseCases = lazy(() => import('../components/capto/CaptoUseCases').then(m => ({ default: m.CaptoUseCases })));
const CaptoFooterCTA = lazy(() => import('../components/capto/CaptoFooterCTA').then(m => ({ default: m.CaptoFooterCTA })));

export function Capto() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#4F46E5] selection:text-white">
      <Helmet>
        <title>Capto | Screen Capture and Video Editing Software for Mac</title>
        <meta name="description" content="Capto is a powerful screen recording, video editing, and image editing software for Mac. It's the ultimate tool to turn your captures into creations — record tutorials, annotate screenshots, and share instantly." />
        <meta name="keywords" content="Capto, Mac screen recorder, Mac video editor, screen capture software, screenshot tool for Mac, video tutorials, annotate screenshots, webcam recorder Mac, GIF recorder, record screen Mac" />
        <meta name="subject" content="Capto | Screen Capture & Video Editing for Mac" />
        <meta property="og:title" content="Capto | Screen Capture & Video Editing for Mac" />
        <meta property="og:description" content="Record your screen, edit videos, and share instantly with Capto for Mac." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/capto`} />
        <link rel="canonical" href={`${domain}/capto`} />
        <link rel="preload" as="image" href="/capto/c-hero.webp" fetchPriority="high" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Capto",
            "operatingSystem": "Mac",
            "applicationCategory": "MultimediaApplication",
            "offers": {
              "@type": "Offer",
              "price": "749.50",
              "priceCurrency": "INR"
            },
            "description": "Powerful screen recording, video editing, and image editing software for Mac.",
            "image": `${domain}/apps/Capto-mac.jpeg`
          })}
        </script>
      
        <meta property="og:image" content={`${domain}/apps/Capto-mac.jpeg`} />
        <meta name="thumbnail" content={`${domain}/apps/Capto-mac.jpeg`} />
        <meta name="twitter:title" content="Capto | Screen Capture and Video Editing Software for Mac" />
        <meta name="twitter:description" content="Capto is a powerful screen recording, video editing, and image editing software for Mac. It's the ultimate tool to turn your captures into creations." />
        <meta name="twitter:image" content={`${domain}/apps/Capto-mac.jpeg`} />
      </Helmet>
      
      <Navbar />

      <main className="relative overflow-x-clip">
        <CaptoHero />
        <Suspense fallback={null}>
          <CaptoFeatures />
          <CaptoUseCases />
          <CaptoFooterCTA />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
