import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Boom2Hero } from '../components/boom2/Boom2Hero';
import { Boom2FeaturesBanner } from '../components/boom2/Boom2FeaturesBanner';
import { Boom2PrecisionControl } from '../components/boom2/Boom2PrecisionControl';
import { Boom2FeatureGrid } from '../components/boom2/Boom2FeatureGrid';
import { Boom2RemoteControl } from '../components/boom2/Boom2RemoteControl';
import { Boom2Testimonials } from '../components/boom2/Boom2Testimonials';
import { Boom2FooterCTA } from '../components/boom2/Boom2FooterCTA';
import { Footer } from '../components/layout/Footer';

export function Boom2() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div className="min-h-screen bg-[#060814] text-white font-sans overflow-x-hidden selection:bg-[#4F46E5] selection:text-white">
      <Helmet>
        <title>Boom 2 | System-Wide Volume Booster & Equalizer for Mac</title>
        <meta name="description" content="Boom 2 is the ultimate audio enhancement app for Mac. Enjoy system-wide volume boosting, advanced equalizers, and immersive 3D sound for movies, music, and games." />
        <meta name="keywords" content="Boom 2, Mac volume booster, Mac equalizer, audio enhancer, improve Mac sound, Boom app" />
        <meta property="og:title" content="Boom 2 | Your Audio, Reimagined" />
        <meta property="og:description" content="System-wide volume booster and equalizer designed exclusively for Mac." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/boom2`} />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={`${domain}/boom2`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Boom 2",
            "operatingSystem": "Mac",
            "applicationCategory": "MultimediaApplication",
            "description": "System-wide volume booster and equalizer designed exclusively for Mac.",
            "image": `${domain}/apps/Boom2-mac.jpeg`
          })}
        </script>
      
        <meta property="og:image" content={`${domain}/apps/Boom2-mac.jpeg`} />
        <meta name="twitter:title" content="Boom 2 | System-Wide Volume Booster & Equalizer for Mac" />
        <meta name="twitter:description" content="Boom 2 is the ultimate audio enhancement app for Mac. Enjoy system-wide volume boosting, advanced equalizers, and immersive 3D sound for movies, music, and games." />
        <meta name="twitter:image" content={`${domain}/apps/Boom2-mac.jpeg`} />
      </Helmet>
      
      <Navbar />

      <main>
        <Boom2Hero />
        <div className="bg-white">
          <Boom2FeaturesBanner />
        </div>
        
        <div className="bg-[#f5f5f7] text-gray-900 pb-16 pt-8 relative z-10 border-t border-gray-200">
          <Boom2PrecisionControl />
          <Boom2FeatureGrid />
          <Boom2RemoteControl />
        </div>
        
        <Boom2Testimonials />
        
        <Boom2FooterCTA />
      </main>

      <Footer />
    </div>
  );
}
