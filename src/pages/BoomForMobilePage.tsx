import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { HeroCarousel } from '../components/boomformobile/HeroCarousel';
import { Footer } from '../components/layout/Footer';

const BoomStory = lazy(() => import('../components/boomformobile/BoomStory').then(m => ({ default: m.BoomStory })));
const PrimeFeatures = lazy(() => import('../components/boomformobile/PrimeFeatures').then(m => ({ default: m.PrimeFeatures })));
const DiscoverSection = lazy(() => import('../components/boomformobile/DiscoverSection').then(m => ({ default: m.DiscoverSection })));
const StatsSection = lazy(() => import('../components/boomformobile/StatsSection').then(m => ({ default: m.StatsSection })));
const MediaTestimonials = lazy(() => import('../components/boomformobile/MediaTestimonials').then(m => ({ default: m.MediaTestimonials })));
const UserTestimonials = lazy(() => import('../components/boomformobile/UserTestimonials').then(m => ({ default: m.UserTestimonials })));

export function BoomForMobilePage() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-pink-500/30 selection:text-white">
      <Helmet>
        <title>Boom for Mobile | 3D Surround Sound & Equalizer App</title>
        <meta name="description" content="Feel your music on the go. Boom for iOS and Android features incredible 3D surround sound, custom equalizer presets, and a powerful audio intensity slider for headphones and speakers." />
        <meta name="keywords" content="Boom for mobile, Boom iOS, Boom Android, 3D surround sound mobile, audio equalizer app, mobile volume booster, bass booster app, headphone equalizer, sound booster iPhone, sound booster Android" />
        <meta property="og:title" content="Boom for Mobile | Best Bass & Volume Booster" />
        <meta property="og:description" content="Transform your smartphone into an immersive sound system." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/boomformobile`} />
        <link rel="canonical" href={`${domain}/boomformobile`} />
        <link rel="preload" as="image" href="/images/external/img_98438af44226.jpg" fetchPriority="high" />
    
        <meta property="og:image" content={`${domain}/apps/Boom%20for%20iOS.jpeg`} />
        <meta name="subject" content="Boom for Mobile | Best Bass & Volume Booster" />
        <meta name="thumbnail" content={`${domain}/apps/Boom%20for%20iOS.jpeg`} />
        <meta name="twitter:title" content="Boom for Mobile | 3D Surround Sound & Equalizer App" />
        <meta name="twitter:description" content="Feel your music on the go. Boom for iOS and Android features incredible 3D surround sound, custom equalizer presets, and a powerful audio intensity slider." />
        <meta name="twitter:image" content={`${domain}/apps/Boom%20for%20iOS.jpeg`} />
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

      <main className="overflow-x-clip">
        <HeroCarousel />
        <Suspense fallback={null}>
          <div className="[content-visibility:auto] [contain-intrinsic-size:1px_600px]"><BoomStory /></div>
          <div className="[content-visibility:auto] [contain-intrinsic-size:1px_600px]"><PrimeFeatures /></div>
          <div className="[content-visibility:auto] [contain-intrinsic-size:1px_600px]"><DiscoverSection /></div>
          <div className="[content-visibility:auto] [contain-intrinsic-size:1px_600px]"><StatsSection /></div>
          <div className="[content-visibility:auto] [contain-intrinsic-size:1px_600px]"><MediaTestimonials /></div>
          <div className="[content-visibility:auto] [contain-intrinsic-size:1px_600px]"><UserTestimonials /></div>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
