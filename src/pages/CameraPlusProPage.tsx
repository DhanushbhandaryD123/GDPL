import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ProMainHero } from '../components/camerapluspro/ProMainHero';
import { ProFeatures } from '../components/camerapluspro/ProFeatures';
import { ProEditingTools } from '../components/camerapluspro/ProEditingTools';
import { ProShare } from '../components/camerapluspro/ProShare';
import { ProCTABanner } from '../components/camerapluspro/ProCTABanner';

export function CameraPlusProPage() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-blue-500 selection:text-white">
      <Helmet>
        <title>Camera Plus Pro | Professional Camera & Editing App for iPhone</title>
        <meta name="description" content="Experience professional photography tools for iPhone. Capture, edit, and share stunning photos with Camera Plus Pro's advanced filters, manual controls, and editing suite." />
        <meta name="keywords" content="Camera Plus Pro, professional camera app, iPhone photography, advanced photo editor iOS, pro camera features, manual camera controls iPhone, photo filters app, RAW camera app iPhone" />
        <meta name="subject" content="Camera Plus Pro | Capture. Edit. Create." />
        <meta property="og:title" content="Camera Plus Pro | Capture. Edit. Create." />
        <meta property="og:description" content="Professional photography tools and powerful editing suite for iPhone." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/camerapluspro`} />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={`${domain}/camerapluspro`} />
      
        <meta property="og:image" content={`${domain}/website/GlobalDelight/icons/CameraPlus_SubheaderLogo.png`} />
        <meta name="thumbnail" content={`${domain}/website/GlobalDelight/icons/CameraPlus_SubheaderLogo.png`} />
        <meta name="twitter:title" content="Camera Plus Pro | Professional Camera & Editing App for iPhone" />
        <meta name="twitter:description" content="Experience professional photography tools for iPhone. Capture, edit, and share stunning photos with Camera Plus Pro's advanced filters and editing suite." />
        <meta name="twitter:image" content={`${domain}/website/GlobalDelight/icons/CameraPlus_SubheaderLogo.png`} />
      </Helmet>

      <Navbar />

      <main>
        <ProMainHero />
        <ProFeatures />
        <ProEditingTools />
        <ProShare />
        <ProCTABanner />
      </main>

      <Footer />
    </div>
  );
}
