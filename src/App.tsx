import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

import { SplashScreen } from './components/layout/SplashScreen';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { AppCategory, AppItem } from './components/home/AppCategory';
import { HonorsReviews } from './components/home/HonorsReviews';
import { FeaturedWork } from './components/home/FeaturedWork';
import { GetInspired } from './components/home/GetInspired';
import { FloatingSocials } from './components/layout/FloatingSocials';
import { ScrollToTopButton } from './components/layout/ScrollToTopButton';

const macApps: AppItem[] = [
  { id: 'm1', name: 'Boom 3D', description: 'Boom 3D is a system-wide volume booster and equalizer.', iconPath: '/apps/Boom3D-mac.jpeg', priceOriginal: 'INR 3700', priceDiscounted: 'INR 925.37', learnMoreUrl: 'https://www.globaldelight.com/boom/' },
  { id: 'm2', name: 'Boom 2', description: 'Powerful audio enhancement tool for Mac.', iconPath: '/apps/Boom2-mac.jpeg', learnMoreUrl: 'https://www.globaldelight.com/boom2/' },
  { id: 'm3', name: 'Capto', description: 'Powerful screen recording and editing tools in one place.', iconPath: '/apps/Capto-mac.jpeg', priceOriginal: 'INR 1499', priceDiscounted: 'INR 749.5', learnMoreUrl: 'https://www.globaldelight.com/capto/' },
];

const windowsApps: AppItem[] = [
  { id: 'w1', name: 'Boom 3D', description: 'Boom 3D is a system-wide volume booster and equalizer.', iconPath: '/apps/boom3d-window.png', priceOriginal: 'INR 3700', priceDiscounted: 'INR 925.37', learnMoreUrl: 'https://www.globaldelight.com/boom/' },
  { id: 'w2', name: 'AuDimix', description: 'Vocal isolation and extraction tool.', iconPath: '/apps/AuDimix-Window.jpeg', learnMoreUrl: 'https://www.globaldelight.com/AuDimix/' },
  { id: 'w3', name: 'Capto', description: 'Powerful screen recording and editing tools in one place.', iconPath: '/apps/Capto-window.jpeg', priceOriginal: 'INR 1499', priceDiscounted: 'INR 749.5', learnMoreUrl: 'https://www.globaldelight.com/capto/windows' },
];

const iosApps: AppItem[] = [
  { id: 'i1', name: 'Boom for iOS', description: 'The Best Music Player with Magical 3D Surround Sound', iconPath: '/apps/Boom for iOS.jpeg', priceDiscounted: 'Free (with in-apps)', learnMoreUrl: 'https://www.globaldelight.com/boomformobile/' },
  { id: 'i2', name: 'Vizmato', description: 'An award-winning moviemaker in your pocket.', iconPath: '/apps/Vizmato-ios.jpeg', priceDiscounted: 'Free (with in-apps)', learnMoreUrl: 'https://itunes.apple.com/US/app/id496232649?mt=8' },
  { id: 'i3', name: 'AudiOn', description: 'An Voice recorder and editor for iOS.', iconPath: '/apps/AudiOn-ios.jpeg', priceDiscounted: 'Free (with in-apps)', learnMoreUrl: 'https://apps.apple.com/us/app/audion-voice-recorder-memos/id1633228083?ct=GD-Homepage&pt=98420' },
];

const androidApps: AppItem[] = [
  { id: 'a1', name: 'Boom for Android', description: 'The Best Music Player with Magical 3D Surround Sound', iconPath: '/apps/Boom for Android.jpeg', priceDiscounted: 'Free (with in-apps)', learnMoreUrl: 'https://www.globaldelight.com/boomformobile/' },
  { id: 'a2', name: 'Vizmato', description: 'An award-winning moviemaker in your pocket.', iconPath: '/apps/Vizmato-android.png', priceDiscounted: 'Free (with in-apps)', learnMoreUrl: 'https://play.google.com/store/apps/details?id=com.globaldelight.vizmato&hl=en&utm_source=globaldelight&utm_medium=website&utm_campaign=productlisting' },
  { id: 'a3', name: 'AudiOn', description: 'An Voice recorder and editor for Android.', iconPath: '/apps/AudiON-android.png', priceDiscounted: 'Free (with in-apps)', learnMoreUrl: 'https://play.google.com/store/apps/details?id=com.globaldelight.audiorecorder&referrer=utm_source%3DGDWebsite%26utm_medium%3DBanner%26utm_term%3DBannerCTA' },
];

function Home() {
  return (
    <div className="min-h-screen bg-[#fff] text-gray-900 font-sans">
      <Helmet>
        <title>Global Delight | Turn Captures into Creations</title>
        <meta name="description" content="Global Delight provides powerful screen recording, video editing, and audio enhancement tools for Mac, Windows, iOS, and Android." />
      </Helmet>
      
      <Navbar />
      <FloatingSocials />
      <ScrollToTopButton />
      
      <main>
        <Hero />
        
        <div className="py-4">
          <AppCategory 
            title="Mac App" 
            deviceImageAlt="MacBook" 
            deviceImagePath="/devices/macbook.png" 
            imageClassName="max-w-[350px] md:max-w-[450px]"
            apps={macApps} 
          />
          <AppCategory 
            title="Windows App" 
            deviceImageAlt="Windows Laptop" 
            deviceImagePath="/devices/windows.png" 
            imageClassName="max-w-[350px] md:max-w-[450px]"
            apps={windowsApps} 
            reverse={false} 
          />
          <AppCategory 
            title="iOS App" 
            titleClassName="-ml-4 md:-ml-6"
            deviceImageAlt="iPhone" 
            deviceImagePath="/devices/iphone.png" 
            imageClassName="max-w-[250px] md:max-w-[300px]"
            apps={iosApps} 
          />
          <AppCategory 
            title="Android App" 
            deviceImageAlt="Android Phone" 
            deviceImagePath="/devices/Android.png" 
            imageClassName="max-w-[150px] md:max-w-[180px]"
            apps={androidApps} 
            reverse={false} 
          />
        </div>

        <GetInspired />
        <FeaturedWork />
        <HonorsReviews />
      </main>

      <Footer />
    </div>
  );
}

import { About } from './pages/About';
import { Business } from './pages/Business';
import { AudioTechnology } from './pages/AudioTechnology';
import { VideoTechnology } from './pages/VideoTechnology';
import { CameraTechnology } from './pages/CameraTechnology';
import { ScreenCaptureTechnology } from './pages/ScreenCaptureTechnology';
import { Faq } from './pages/Faq';
import { Boom3DMacFaq } from './pages/faq/Boom3DMacFaq';
import { Boom3DMasFaq } from './pages/faq/Boom3DMasFaq';
import { Boom3DWinFaq } from './pages/faq/Boom3DWinFaq';
import { AuDimixWinFaq } from './pages/faq/AuDimixWinFaq';
import { Boom2Faq } from './pages/faq/Boom2Faq';
import { BoomIosFaq } from './pages/faq/BoomIosFaq';
import { VizmatoFaq } from './pages/faq/VizmatoFaq';
import { CaptoMacFaq } from './pages/faq/CaptoMacFaq';
import { CaptoWinFaq } from './pages/faq/CaptoWinFaq';
import { AudionFaq } from './pages/faq/AudionFaq';
import { Contact } from './pages/Contact';
import { Careers } from './pages/Careers';
import { ScrollToTop } from './components/layout/ScrollToTop';

function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  return (
    <>
      {!isAppReady && <SplashScreen onComplete={() => setIsAppReady(true)} />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/technology/audio" element={<AudioTechnology />} />
        <Route path="/technology/video" element={<VideoTechnology />} />
        <Route path="/technology/camera" element={<CameraTechnology />} />
        <Route path="/technology/screen-capture" element={<ScreenCaptureTechnology />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/faq/boom3dmac" element={<Boom3DMacFaq />} />
        <Route path="/faq/boom3dmas" element={<Boom3DMasFaq />} />
        <Route path="/faq/boom3dwin" element={<Boom3DWinFaq />} />
        <Route path="/faq/audimixwin" element={<AuDimixWinFaq />} />
        <Route path="/faq/boom2" element={<Boom2Faq />} />
        <Route path="/faq/boomios" element={<BoomIosFaq />} />
        <Route path="/faq/vizmato" element={<VizmatoFaq />} />
        <Route path="/faq/captomac" element={<CaptoMacFaq />} />
        <Route path="/faq/captowin" element={<CaptoWinFaq />} />
        <Route path="/faq/audion" element={<AudionFaq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
