import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingSocials } from '../components/layout/FloatingSocials';
import { BusinessHero } from '../components/business/BusinessHero';
import { BusinessAbout } from '../components/business/BusinessAbout';
import { BusinessTechnologies } from '../components/business/BusinessTechnologies';

export function Business() {
  return (
    <div className="min-h-screen bg-[#fff] text-gray-900 font-sans">
      <Helmet>
        <title>Business | Global Delight</title>
        <meta name="description" content="Global Delight Business Solutions" />
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
