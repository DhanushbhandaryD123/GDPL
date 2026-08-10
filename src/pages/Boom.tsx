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
        <title>Boom | Feel Your Music in 3D Surround Sound</title>
        <meta
          name="description"
          content="Boom is Global Delight's award-winning audio family for Mac, Windows, iOS and Android — 3D surround sound, a 31-band equalizer, and a powerful volume booster."
        />
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
