import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { HeroBanner } from '../components/cameraplus/HeroBanner';
import { QuickFeaturesBar } from '../components/cameraplus/QuickFeaturesBar';
import { AirSnapFeature } from '../components/cameraplus/AirSnapFeature';
import { MacroFocus } from '../components/cameraplus/MacroFocus';
import { EnhancementTools } from '../components/cameraplus/EnhancementTools';
import { AppleWatchIntegration } from '../components/cameraplus/AppleWatchIntegration';
import { Testimonials } from '../components/cameraplus/Testimonials';
import { Footer } from '../components/layout/Footer';

export function CameraPlusPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-500 selection:text-white">
      <Helmet>
        <title>Camera Plus | The Best Camera App for iPhone, iPad & Apple Watch</title>
        <meta name="description" content="Capture brilliant photos and videos with Camera Plus. Features AirSnap, Macro Focus, Lumy, and Apple Watch integration." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroBanner />
        <QuickFeaturesBar />
        <AirSnapFeature />
        <MacroFocus />
        <EnhancementTools />
        <AppleWatchIntegration />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
