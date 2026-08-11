import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/audimix/Hero';
import { FeaturesOverview } from '../components/audimix/FeaturesOverview';
import { UseCases } from '../components/audimix/UseCases';
import { DetailedFeatures } from '../components/audimix/DetailedFeatures';
import { FormatSupport } from '../components/audimix/FormatSupport';
import { Subscription } from '../components/audimix/Subscription';
import { Footer } from '../components/layout/Footer';

export function AuDimixPage() {
  const domain = '';
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-purple-200">
      <Helmet>
        <title>AuDimix | Vocal Extractor & Music Separation Software</title>
        <meta name="description" content="AuDimix is a powerful vocal isolation and extraction tool. Isolate vocals, extract instruments, and create your own music mix with ease on Mac." />
        <meta name="keywords" content="AuDimix, vocal extractor, instrumental extractor, music separation software, isolate vocals, remove vocals Mac" />
        <meta property="og:title" content="AuDimix | Vocal Extractor & Music Separation Software" />
        <meta property="og:description" content="Isolate vocals and extract instruments instantly with AuDimix." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/audimix`} />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={`${domain}/audimix`} />
      
        <meta property="og:image" content={`${domain}/apps/AuDimix-Window.jpeg`} />
        <meta name="twitter:title" content="AuDimix | Vocal Extractor & Music Separation Software" />
        <meta name="twitter:description" content="AuDimix is a powerful vocal isolation and extraction tool. Isolate vocals, extract instruments, and create your own music mix with ease on Mac." />
        <meta name="twitter:image" content={`${domain}/apps/AuDimix-Window.jpeg`} />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero />
        <FeaturesOverview />
        <UseCases />
        <DetailedFeatures />
        <FormatSupport />
        <Subscription />
      </main>

      <Footer />
    </div>
  );
}
