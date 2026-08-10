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
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-pink-500/30 selection:text-white">
      <Helmet>
        <title>Boom for Mobile | Best Bass & Volume Booster</title>
        <meta name="description" content="Boom for Mobile - Don't just listen. Feel your music with 3D surround sound, equalizer presets, and audio intensity slider." />
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
