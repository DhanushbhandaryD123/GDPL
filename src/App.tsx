import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { AppCategory, AppItem } from './components/home/AppCategory';
import { HonorsReviews } from './components/home/HonorsReviews';
import { FloatingSocials } from './components/layout/FloatingSocials';

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
      
      <main>
        <Hero />
        
        <div className="py-4">
          <AppCategory 
            title="Mac Apps" 
            deviceImageAlt="MacBook" 
            deviceImagePath="/devices/macbook.png" 
            imageClassName="max-w-[350px] md:max-w-[450px]"
            apps={macApps} 
          />
          <AppCategory 
            title="Windows Apps" 
            deviceImageAlt="Windows Laptop" 
            deviceImagePath="/devices/windows.png" 
            imageClassName="max-w-[350px] md:max-w-[450px]"
            apps={windowsApps} 
            reverse={false} 
          />
          <AppCategory 
            title="iOS Apps" 
            deviceImageAlt="iPhone" 
            deviceImagePath="/devices/iphone.png" 
            imageClassName="max-w-[250px] md:max-w-[300px]"
            apps={iosApps} 
          />
          <AppCategory 
            title="Android Apps" 
            deviceImageAlt="Android Phone" 
            deviceImagePath="/devices/Android.png" 
            imageClassName="max-w-[150px] md:max-w-[180px]"
            apps={androidApps} 
            reverse={false} 
          />
        </div>

        <HonorsReviews />
      </main>

      <Footer />
    </div>
  );
}

import { About } from './pages/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
