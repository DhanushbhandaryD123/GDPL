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
  return (
    <div className="min-h-screen bg-[#060814] text-white font-sans overflow-x-hidden selection:bg-[#4F46E5] selection:text-white">
      <Helmet>
        <title>Boom 2 | Your Audio, Reimagined</title>
        <meta name="description" content="Boom 2 is the ultimate audio enhancement app that brings your music, movies, and games to life with powerful tools and immersive 3D sound." />
      </Helmet>
      
      <Navbar />

      <main>
        <Boom2Hero />
        <Boom2FeaturesBanner />
        
        <div className="bg-[#f5f5f7] text-gray-900 pb-16 pt-8 rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-10 relative z-10">
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
