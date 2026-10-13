import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/audimix/Hero';
import { Footer } from '../components/layout/Footer';

const FeaturesOverview = lazy(() => import('../components/audimix/FeaturesOverview').then(m => ({ default: m.FeaturesOverview })));
const UseCases = lazy(() => import('../components/audimix/UseCases').then(m => ({ default: m.UseCases })));
const DetailedFeatures = lazy(() => import('../components/audimix/DetailedFeatures').then(m => ({ default: m.DetailedFeatures })));
const FormatSupport = lazy(() => import('../components/audimix/FormatSupport').then(m => ({ default: m.FormatSupport })));
const Subscription = lazy(() => import('../components/audimix/Subscription').then(m => ({ default: m.Subscription })));

export function AuDimixPage() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-200">
      <Helmet>
        <title>AuDimix | Vocal Extractor & Music Separation Software</title>
        <meta name="description" content="AuDimix is a powerful vocal isolation and extraction tool. Isolate vocals, extract instruments, remove background music, and create your own remixes or karaoke tracks with ease." />
        <meta name="keywords" content="AuDimix, vocal extractor, instrumental extractor, music separation software, isolate vocals, remove vocals, vocal remover app, karaoke track maker, stem splitter, AI music separation" />
        <meta name="subject" content="AuDimix | Vocal Extractor & Music Separation Software" />
        <meta property="og:title" content="AuDimix | Vocal Extractor & Music Separation Software" />
        <meta property="og:description" content="Isolate vocals and extract instruments instantly with AuDimix." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/audimix`} />
        <link rel="canonical" href={`${domain}/audimix`} />
      
        <meta property="og:image" content={`${domain}/apps/AuDimix-Window.jpeg`} />
        <meta name="thumbnail" content={`${domain}/apps/AuDimix-Window.jpeg`} />
        <meta name="twitter:title" content="AuDimix | Vocal Extractor & Music Separation Software" />
        <meta name="twitter:description" content="AuDimix is a powerful vocal isolation and extraction tool. Isolate vocals, extract instruments, and create your own music mix with ease on Mac." />
        <meta name="twitter:image" content={`${domain}/apps/AuDimix-Window.jpeg`} />
      </Helmet>
      
      <Navbar />

      <main className="overflow-x-clip">
        <Hero />
        <Suspense fallback={null}>
          <FeaturesOverview />
          <UseCases />
          <DetailedFeatures />
          <FormatSupport />
          <Subscription />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
