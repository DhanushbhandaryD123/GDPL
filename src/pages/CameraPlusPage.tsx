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
        <meta name="description" content="Capture brilliant photos and videos with Camera Plus. Take control with AirSnap, Macro Focus, Lumy, and seamless Apple Watch integration." />
        <meta name="keywords" content="Camera Plus, iPhone camera app, iPad camera app, Apple Watch camera app, AirSnap remote capture, Macro Focus, mobile photography" />
        <meta property="og:title" content="Camera Plus | The Best Camera App for Apple Devices" />
        <meta property="og:description" content="Capture and enhance brilliant photos with Camera Plus." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.globaldelight.com/cameraplus" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://www.globaldelight.com/cameraplus" />
      
        <meta property="og:image" content="https://www.globaldelight.com/website/GlobalDelight/icons/CameraPlus_SubheaderLogo.png" />
        <meta name="twitter:title" content="Camera Plus | The Best Camera App for iPhone, iPad & Apple Watch" />
        <meta name="twitter:description" content="Capture brilliant photos and videos with Camera Plus. Take control with AirSnap, Macro Focus, Lumy, and seamless Apple Watch integration." />
        <meta name="twitter:image" content="https://www.globaldelight.com/website/GlobalDelight/icons/CameraPlus_SubheaderLogo.png" />
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
