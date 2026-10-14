import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Boom3DHero } from '../components/boom3d/Boom3DHero';
import { Boom3DOSSelector } from '../components/boom3d/Boom3DOSSelector';

const Boom3DScrollReveal = lazy(() => import('../components/boom3d/Boom3DScrollReveal').then(m => ({ default: m.Boom3DScrollReveal })));
const Boom3DKeyFeatures = lazy(() => import('../components/boom3d/Boom3DKeyFeatures').then(m => ({ default: m.Boom3DKeyFeatures })));
const Boom3DSurround = lazy(() => import('../components/boom3d/Boom3DSurround').then(m => ({ default: m.Boom3DSurround })));
const Boom3DEqualizer = lazy(() => import('../components/boom3d/Boom3DEqualizer').then(m => ({ default: m.Boom3DEqualizer })));
const Boom3DVolumeBooster = lazy(() => import('../components/boom3d/Boom3DVolumeBooster').then(m => ({ default: m.Boom3DVolumeBooster })));
const Boom3DAppController = lazy(() => import('../components/boom3d/Boom3DAppController').then(m => ({ default: m.Boom3DAppController })));
const Boom3DAudioPlayer = lazy(() => import('../components/boom3d/Boom3DAudioPlayer').then(m => ({ default: m.Boom3DAudioPlayer })));
const Boom3DRadioStations = lazy(() => import('../components/boom3d/Boom3DRadioStations').then(m => ({ default: m.Boom3DRadioStations })));
const Boom3DTestimonials = lazy(() => import('../components/boom3d/Boom3DTestimonials').then(m => ({ default: m.Boom3DTestimonials })));
const Boom3DCTA = lazy(() => import('../components/boom3d/Boom3DCTA').then(m => ({ default: m.Boom3DCTA })));
const Boom3DAppDownload = lazy(() => import('../components/boom3d/Boom3DAppDownload').then(m => ({ default: m.Boom3DAppDownload })));
const Boom3DTailored = lazy(() => import('../components/boom3d/Boom3DTailored').then(m => ({ default: m.Boom3DTailored })));
const Boom3DFAQ = lazy(() => import('../components/boom3d/Boom3DFAQ').then(m => ({ default: m.Boom3DFAQ })));

export function Boom3D() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div 
      className="min-h-screen bg-white text-gray-900 selection:bg-[#4F46E5] selection:text-white"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", sans-serif' }}
    >
      <Helmet>
        <title>Boom 3D - Best 3D Surround Sound for Mac & Windows</title>
        <meta name="description" content="Experience audio in magical 3D. Boom 3D is a pro audio enhancement app with a 31-band equalizer, volume booster, and immersive surround sound for Mac and Windows, with custom presets for every genre." />
        <meta name="keywords" content="Boom 3D, 3D surround sound, volume booster, Mac equalizer, Windows equalizer, sound enhancement software, 31-band equalizer, bass booster, audio enhancer app, surround sound software, best equalizer for Mac" />
        <meta property="og:title" content="Boom 3D | Best Volume Booster & Equalizer" />
        <meta property="og:description" content="Transform your computer into a cinematic sound stage with Boom 3D." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/boom3D`} />
        <link rel="canonical" href={`${domain}/boom3D`} />
        <link rel="preload" as="image" href="/boom3D/boom3d-hero.webp" type="image/webp" fetchPriority="high" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Boom 3D",
            "operatingSystem": "Mac, Windows",
            "applicationCategory": "MultimediaApplication",
            "offers": {
              "@type": "Offer",
              "price": "925.37",
              "priceCurrency": "INR"
            },
            "description": "System-wide volume booster and equalizer for Mac & Windows with immersive 3D surround sound.",
            "image": `${domain}/apps/boom3d-window.webp`
          })}
        </script>
      
        <meta property="og:image" content={`${domain}/apps/Boom3D-mac.jpeg`} />
        <meta name="subject" content="Boom 3D | Best Volume Booster & Equalizer" />
        <meta name="thumbnail" content={`${domain}/apps/Boom3D-mac.jpeg`} />
        <meta name="twitter:title" content="Boom 3D | Best Volume Booster & Equalizer for Mac & Windows" />
        <meta name="twitter:description" content="Experience audio in magical 3D. Boom 3D is a pro audio enhancement app with a 31-band equalizer, volume booster, and immersive surround sound for Mac and Windows." />
        <meta name="twitter:image" content={`${domain}/apps/Boom3D-mac.jpeg`} />
        <meta name="twitter:site" content="@boomapp" />
        <meta name="twitter:creator" content="@boomapp" />
        <meta property="fb:app_id" content="574953960066003" />
        <meta property="fb:pages" content="206541726104573" />
        <meta name="apple-itunes-app" content="id948176063" />
        <meta property="og:see_also" content="https://www.instagram.com/boomaudioapp/" />
        <meta property="og:see_also" content="https://www.facebook.com/boomapp" />
        <meta property="og:see_also" content="https://twitter.com/boomapp" />
        <meta property="og:see_also" content="https://www.youtube.com/channel/UCiHp8wkTV2h7u8afCIij0YQ" />
      </Helmet>
      
      <Navbar />

      <main className="relative">
        <Boom3DHero />
        <Boom3DOSSelector />
        <Suspense fallback={null}>
          <Boom3DScrollReveal />
          <Boom3DKeyFeatures />
          <Boom3DSurround />
          <Boom3DEqualizer />
          <Boom3DVolumeBooster />
          <Boom3DAppController />
          <Boom3DAudioPlayer />
          <Boom3DRadioStations />
          <Boom3DAppDownload />
          <Boom3DTailored />
          <Boom3DTestimonials />
          <Boom3DCTA />
          <Boom3DFAQ />
        </Suspense>
      </main>

      <div className="relative z-10 border-t border-gray-100 bg-white">
        <Footer />
      </div>
    </div>
  );
}
