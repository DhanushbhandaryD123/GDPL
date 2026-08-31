import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { HeroWithVideoBackground } from '../components/vizmato/HeroWithVideoBackground';
import { FeaturesSection } from '../components/vizmato/FeaturesSection';
import { CreativeShowcase } from '../components/vizmato/CreativeShowcase';
import { ProcessSteps } from '../components/vizmato/ProcessSteps';
import { ToolkitShowcase } from '../components/vizmato/ToolkitShowcase';
import { MediaTestimonials } from '../components/vizmato/MediaTestimonials';
import { NewsletterSection } from '../components/vizmato/NewsletterSection';
import { Footer } from '../components/layout/Footer';

export function VizmatoPage() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-pink-500 selection:text-white">
      <Helmet>
        <title>Vizmato | Powerful Video Editor & Movie Maker App</title>
        <meta name="description" content="Add ZING to your moviemaking! Vizmato is an easy-to-use, powerful video editor and movie maker for iOS and Android. Apply themes, FX, filters and music instantly, then share to social media." />
        <meta name="keywords" content="Vizmato, video editor app, movie maker app, iOS video editor, Android video editor, add effects to video, video creation app, video editing with music, social media video maker, slow motion video editor" />
        <meta name="subject" content="Vizmato | Video Editor & Movie Maker" />
        <meta property="og:title" content="Vizmato | Video Editor & Movie Maker" />
        <meta property="og:description" content="Create stunning videos instantly with FX, themes, and music on Vizmato." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/vizmato`} />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={`${domain}/vizmato`} />
      
        <meta property="og:image" content={`${domain}/apps/Vizmato-ios.jpeg`} />
        <meta name="thumbnail" content={`${domain}/apps/Vizmato-ios.jpeg`} />
        <meta name="twitter:title" content="Vizmato | Powerful Video Editor & Movie Maker App" />
        <meta name="twitter:description" content="Add ZING to your moviemaking! Vizmato is an easy-to-use, powerful video editor and movie maker for iOS and Android. Apply themes, FX, and music instantly." />
        <meta name="twitter:image" content={`${domain}/apps/Vizmato-ios.jpeg`} />
      </Helmet>
      
      {/* Keeping global navbar, but normally a landing page like this might have a specialized header */}
      <Navbar />

      <main>
        <HeroWithVideoBackground />
        <FeaturesSection />
        <CreativeShowcase />
        <ProcessSteps />
        <ToolkitShowcase />
        <MediaTestimonials />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}
