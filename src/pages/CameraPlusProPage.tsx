import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { ProHero } from '../components/camerapluspro/ProHero';
import { ProFeatures } from '../components/camerapluspro/ProFeatures';
import { ProEditingTools } from '../components/camerapluspro/ProEditingTools';
import { ProShare } from '../components/camerapluspro/ProShare';
import { ProCTABanner } from '../components/camerapluspro/ProCTABanner';
import { ProFooter } from '../components/camerapluspro/ProFooter';

export function CameraPlusProPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-blue-500 selection:text-white">
      <Helmet>
        <title>Camera Plus Pro | Capture. Edit. Create.</title>
        <meta name="description" content="Professional photography tools for iPhone. Faster, smarter and more powerful — capture, edit and share stunning photos with Camera Plus Pro." />
      </Helmet>

      <Navbar />

      <main>
        <ProHero />
        <ProFeatures />
        <ProEditingTools />
        <ProShare />
        <ProCTABanner />
      </main>

      <ProFooter />
    </div>
  );
}
