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
        <title>Vizmato | Powerful Video Editor & Movie Maker App</title>
        <meta name="description" content="Add ZING to your moviemaking! Vizmato is an easy-to-use, powerful video editor and movie maker for iOS and Android. Apply themes, FX, and music instantly." />
        <meta name="keywords" content="Vizmato, video editor app, movie maker app, iOS video editor, Android video editor, add effects to video, video creation app" />
        <meta property="og:title" content="Vizmato | Video Editor & Movie Maker" />
        <meta property="og:description" content="Create stunning videos instantly with FX, themes, and music on Vizmato." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.globaldelight.com/vizmato" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://www.globaldelight.com/vizmato" />
      
        <meta property="og:image" content="https://www.globaldelight.com/apps/Vizmato-ios.jpeg" />
        <meta name="twitter:title" content="Vizmato | Powerful Video Editor & Movie Maker App" />
        <meta name="twitter:description" content="Add ZING to your moviemaking! Vizmato is an easy-to-use, powerful video editor and movie maker for iOS and Android. Apply themes, FX, and music instantly." />
        <meta name="twitter:image" content="https://www.globaldelight.com/apps/Vizmato-ios.jpeg" />
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
