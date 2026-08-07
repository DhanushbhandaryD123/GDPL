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
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans overflow-x-hidden selection:bg-purple-500/30">
      <Helmet>
        <title>AuDimix | Music separation made easy.</title>
        <meta name="description" content="AuDimix - Vocal isolation and extraction tool. Isolate vocals, extract instruments, and create your own mix with ease." />
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
