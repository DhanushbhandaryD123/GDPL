import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { CaptoHero } from '../components/capto/CaptoHero';
import { CaptoFeatures } from '../components/capto/CaptoFeatures';
import { CaptoUseCases } from '../components/capto/CaptoUseCases';
import { CaptoFooterCTA } from '../components/capto/CaptoFooterCTA';
import { Footer } from '../components/layout/Footer';

export function Capto() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-[#4F46E5] selection:text-white">
      <Helmet>
        <title>Capto | Screen Capture and Video Editing Software for Mac</title>
        <meta name="description" content="Capto is a powerful screen recording, video editing, and image editing software for Mac. It's the ultimate tool to turn your captures into creations." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <CaptoHero />
        <CaptoFeatures />
        <CaptoUseCases />
        <CaptoFooterCTA />
      </main>

      <Footer />
    </div>
  );
}
