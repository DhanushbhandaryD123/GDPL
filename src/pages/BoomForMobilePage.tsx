import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { HeroCarousel } from '../components/boomformobile/HeroCarousel';
import { BoomStory } from '../components/boomformobile/BoomStory';
import { PrimeFeatures } from '../components/boomformobile/PrimeFeatures';
import { DiscoverSection } from '../components/boomformobile/DiscoverSection';
import { StatsSection } from '../components/boomformobile/StatsSection';
import { MediaTestimonials } from '../components/boomformobile/MediaTestimonials';
import { UserTestimonials } from '../components/boomformobile/UserTestimonials';
import { Footer } from '../components/layout/Footer';

export function BoomForMobilePage() {
  const domain = import.meta.env.VITE_SITE_URL || 'http://localhost:5173';
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-pink-500/30 selection:text-white">
      <Helmet>
        <title>Boom for Mobile | 3D Surround Sound & Equalizer App</title>
        <meta name="description" content="Feel your music on the go. Boom for iOS and Android features incredible 3D surround sound, custom equalizer presets, and a powerful audio intensity slider." />
        <meta name="keywords" content="Boom for mobile, Boom iOS, Boom Android, 3D surround sound mobile, audio equalizer app, mobile volume booster" />
        <meta property="og:title" content="Boom for Mobile | Best Bass & Volume Booster" />
        <meta property="og:description" content="Transform your smartphone into an immersive sound system." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/boomformobile`} />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={`${domain}/boomformobile`} />
      
        <meta property="og:image" content={`${domain}/apps/Boom%20for%20iOS.jpeg`} />
        <meta name="twitter:title" content="Boom for Mobile | 3D Surround Sound & Equalizer App" />
        <meta name="twitter:description" content="Feel your music on the go. Boom for iOS and Android features incredible 3D surround sound, custom equalizer presets, and a powerful audio intensity slider." />
        <meta name="twitter:image" content={`${domain}/apps/Boom%20for%20iOS.jpeg`} />
      </Helmet>
      
      <Navbar />
        
      <main>
        <HeroCarousel />
        <BoomStory />
        <PrimeFeatures />
        <DiscoverSection />
        <StatsSection />
        <MediaTestimonials />
        <UserTestimonials />
      </main>

      <Footer />
    </div>
  );
}
