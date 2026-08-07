import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { HeroWithVideoBackground } from '../components/vizmato/HeroWithVideoBackground';
import { FeaturesSection } from '../components/vizmato/FeaturesSection';
import { MediaTestimonials } from '../components/vizmato/MediaTestimonials';
import { NewsletterSection } from '../components/vizmato/NewsletterSection';
import { Footer } from '../components/layout/Footer';

export function VizmatoPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-pink-500 selection:text-white">
      <Helmet>
        <title>Vizmato | Video Editor & Movie Maker</title>
        <meta name="description" content="Add ZING to your moviemaking! Vizmato is a powerful video editor and movie maker for iOS and Android." />
      </Helmet>
      
      {/* Keeping global navbar, but normally a landing page like this might have a specialized header */}
      <Navbar />
      
      <main>
        <HeroWithVideoBackground />
        <FeaturesSection />
        <MediaTestimonials />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}
