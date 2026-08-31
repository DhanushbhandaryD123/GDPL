import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingSocials } from '../components/layout/FloatingSocials';
import { BusinessHero } from '../components/business/BusinessHero';
import { BusinessAbout } from '../components/business/BusinessAbout';
import { BusinessTechnologies } from '../components/business/BusinessTechnologies';

export function Business() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div className="min-h-screen bg-[#fff] text-gray-900 font-sans">
      <Helmet>
        <title>Business Solutions | Global Delight B2B</title>
        <meta name="description" content="Global Delight offers cutting-edge B2B solutions in audio, video, and photography technology. Partner with us for powerful OEM integrations, white-label apps, and enterprise software licensing." />
        <meta name="keywords" content="Global Delight Business, B2B software solutions, OEM integration, audio technology licensing, video engine, business software, white label app development, SDK licensing, enterprise software partner, technology licensing" />
        <meta name="subject" content="Business Solutions | Global Delight B2B" />
        <meta property="og:title" content="Business Solutions | Global Delight B2B" />
        <meta property="og:description" content="Empowering businesses with award-winning audio, video, and imaging technologies." />
        <meta name="twitter:title" content="Business Solutions | Global Delight B2B" />
        <meta name="twitter:description" content="Empowering businesses with award-winning audio, video, and imaging technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/business`} />
        <meta name="twitter:url" content={`${domain}/business`} />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={`${domain}/business`} />
      </Helmet>
      
      <Navbar logoUrl="/logos/GDL_B2B_Logo.png" />
      <FloatingSocials />

      <main>
        <BusinessHero />
        <BusinessTechnologies />
        <BusinessAbout />
      </main>

      <Footer logoUrl="/logos/GDL_B2B_Logo.png" />
    </div>
  );
}
