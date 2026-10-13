import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { HeroWithVideoBackground } from '../components/vizmato/HeroWithVideoBackground';
import { Footer } from '../components/layout/Footer';

const FeaturesSection = lazy(() => import('../components/vizmato/FeaturesSection').then(m => ({ default: m.FeaturesSection })));
const CreativeShowcase = lazy(() => import('../components/vizmato/CreativeShowcase').then(m => ({ default: m.CreativeShowcase })));
const ProcessSteps = lazy(() => import('../components/vizmato/ProcessSteps').then(m => ({ default: m.ProcessSteps })));
const ToolkitShowcase = lazy(() => import('../components/vizmato/ToolkitShowcase').then(m => ({ default: m.ToolkitShowcase })));
const MediaTestimonials = lazy(() => import('../components/vizmato/MediaTestimonials').then(m => ({ default: m.MediaTestimonials })));
const NewsletterSection = lazy(() => import('../components/vizmato/NewsletterSection').then(m => ({ default: m.NewsletterSection })));

export function VizmatoPage() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-pink-500 selection:text-white">
      <Helmet>
        <title>Vizmato | Powerful Video Editor & Movie Maker App</title>
        <meta name="description" content="Add ZING to your moviemaking! Vizmato is an easy-to-use, powerful video editor and movie maker for iOS and Android. Apply themes, FX, filters and music instantly, then share to social media." />
        <meta name="keywords" content="Vizmato, video editor app, movie maker app, iOS video editor, Android video editor, add effects to video, video creation app, video editing with music, social media video maker, slow motion video editor" />
        <meta name="subject" content="Vizmato | Video Editor & Movie Maker" />
        <meta property="og:title" content="Vizmato | Video Editor & Movie Maker" />
        <meta property="og:description" content="Create stunning videos instantly with FX, themes, and music on Vizmato." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/vizmato`} />
        <link rel="canonical" href={`${domain}/vizmato`} />
        <link rel="preload" as="image" href="/vizmato/hero.webp" fetchPriority="high" />
      
        <meta property="og:image" content={`${domain}/apps/Vizmato-ios.jpeg`} />
        <meta name="thumbnail" content={`${domain}/apps/Vizmato-ios.jpeg`} />
        <meta name="twitter:title" content="Vizmato | Powerful Video Editor & Movie Maker App" />
        <meta name="twitter:description" content="Add ZING to your moviemaking! Vizmato is an easy-to-use, powerful video editor and movie maker for iOS and Android. Apply themes, FX, and music instantly." />
        <meta name="twitter:image" content={`${domain}/apps/Vizmato-ios.jpeg`} />
      </Helmet>
      
      {/* Keeping global navbar, but normally a landing page like this might have a specialized header */}
      <Navbar />

      <main className="overflow-x-clip">
        <HeroWithVideoBackground />
        <Suspense fallback={null}>
          <FeaturesSection />
          <CreativeShowcase />
          <ProcessSteps />
          <ToolkitShowcase />
          <MediaTestimonials />
          <NewsletterSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
