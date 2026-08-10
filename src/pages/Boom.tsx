import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { BoomHero } from '../components/boom/BoomHero';
import { BoomPlatforms } from '../components/boom/BoomPlatforms';
import { BoomFeatureShowcase } from '../components/boom/BoomFeatureShowcase';
import { BoomStats } from '../components/boom/BoomStats';
import { BoomTestimonials } from '../components/boom/BoomTestimonials';
import { BoomCTA } from '../components/boom/BoomCTA';

export function Boom() {
  return (
    <div
      className="min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-indigo-500 selection:text-white"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", sans-serif' }}
    >
      <Helmet>
        <title>Boom | Feel Your Music in 3D Surround Sound | Mac Audio Equalizer</title>
        <meta name="description" content="Boom is Global Delight's award-winning audio family for Mac, Windows, iOS and Android — featuring 3D surround sound, advanced equalizers, and a powerful volume booster." />
        <meta name="keywords" content="Boom, volume booster, Mac audio equalizer, 3D surround sound, sound enhancer, Global Delight Boom" />
        <meta property="og:title" content="Boom | Feel Your Music in 3D Surround Sound" />
        <meta property="og:description" content="Award-winning 3D surround sound and volume booster for your devices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.globaldelight.com/boom" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://www.globaldelight.com/boom" />
      </Helmet>

      <Navbar />

      <main>
        <BoomHero />
        <BoomPlatforms />
        <BoomFeatureShowcase />
        <BoomStats />
        <BoomTestimonials />
        <BoomCTA />
      </main>

      <Footer />
    </div>
  );
}
