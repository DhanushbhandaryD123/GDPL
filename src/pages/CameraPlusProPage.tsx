import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ProMainHero } from '../components/camerapluspro/ProMainHero';

const ProFeatures = lazy(() => import('../components/camerapluspro/ProFeatures').then(m => ({ default: m.ProFeatures })));
const ProEditingTools = lazy(() => import('../components/camerapluspro/ProEditingTools').then(m => ({ default: m.ProEditingTools })));
const ProShare = lazy(() => import('../components/camerapluspro/ProShare').then(m => ({ default: m.ProShare })));
const ProCTABanner = lazy(() => import('../components/camerapluspro/ProCTABanner').then(m => ({ default: m.ProCTABanner })));

export function CameraPlusProPage() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-500 selection:text-white">
      <Helmet>
        <title>Camera Plus Pro | Professional Camera & Editing App for iPhone</title>
        <meta name="description" content="Experience professional photography tools for iPhone. Capture, edit, and share stunning photos with Camera Plus Pro's advanced filters, manual controls, and editing suite." />
        <meta name="keywords" content="Camera Plus Pro, professional camera app, iPhone photography, advanced photo editor iOS, pro camera features, manual camera controls iPhone, photo filters app, RAW camera app iPhone" />
        <meta name="subject" content="Camera Plus Pro | Capture. Edit. Create." />
        <meta property="og:title" content="Camera Plus Pro | Capture. Edit. Create." />
        <meta property="og:description" content="Professional photography tools and powerful editing suite for iPhone." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/camerapluspro`} />
        <link rel="canonical" href={`${domain}/camerapluspro`} />

        <meta name="twitter:title" content="Camera Plus Pro | Professional Camera & Editing App for iPhone" />
        <meta name="twitter:description" content="Experience professional photography tools for iPhone. Capture, edit, and share stunning photos with Camera Plus Pro's advanced filters and editing suite." />
      </Helmet>

      <Navbar />

      <main className="overflow-x-clip">
        <ProMainHero />
        <Suspense fallback={null}>
          <ProFeatures />
          <ProEditingTools />
          <ProShare />
          <ProCTABanner />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
