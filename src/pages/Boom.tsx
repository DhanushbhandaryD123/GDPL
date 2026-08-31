import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Footer } from '../components/layout/Footer';
import { BoomHero } from '../components/boom/BoomHero';
import { BoomPlatforms } from '../components/boom/BoomPlatforms';
import { BoomFeatureShowcase } from '../components/boom/BoomFeatureShowcase';
import { BoomStats } from '../components/boom/BoomStats';
import { BoomTestimonials } from '../components/boom/BoomTestimonials';
import { BoomCTA } from '../components/boom/BoomCTA';

export function Boom() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div
      className="min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-indigo-500 selection:text-white"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", sans-serif' }}
    >
      <Helmet>
        <title>Boom | Feel Your Music in 3D Surround Sound | Mac Audio Equalizer</title>
        <meta name="description" content="Boom is Global Delight's award-winning audio family for Mac, Windows, iOS and Android — featuring 3D surround sound, advanced equalizers, and a powerful volume booster for movies, music and games." />
        <meta name="keywords" content="Boom, volume booster, Mac audio equalizer, 3D surround sound, sound enhancer, bass booster, audio booster app, system-wide equalizer, Boom 2, Boom 3D, Boom for mobile, Global Delight Boom" />
        <meta property="og:title" content="Boom | Feel Your Music in 3D Surround Sound" />
        <meta property="og:description" content="Award-winning 3D surround sound and volume booster for your devices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/boom`} />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={`${domain}/boom`} />
      
        <meta property="og:image" content={`${domain}/apps/Boom2-mac.jpeg`} />
        <meta name="subject" content="Boom | Feel Your Music in 3D Surround Sound" />
        <meta name="thumbnail" content={`${domain}/apps/Boom2-mac.jpeg`} />
        <meta name="twitter:title" content="Boom | Feel Your Music in 3D Surround Sound | Mac Audio Equalizer" />
        <meta name="twitter:description" content="Boom is Global Delight's award-winning audio family for Mac, Windows, iOS and Android — featuring 3D surround sound, advanced equalizers, and a powerful volume booster." />
        <meta name="twitter:image" content={`${domain}/apps/Boom2-mac.jpeg`} />
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
      <Breadcrumbs items={[{ name: 'Boom' }]} />

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
