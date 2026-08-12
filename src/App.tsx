import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
  { id: 'm1', name: 'Boom 3D', description: 'Boom 3D is a system-wide volume booster and equalizer.', iconPath: '/apps/Boom3D-mac.jpeg', priceOriginal: 'INR 3700', priceDiscounted: 'INR 925.37', learnMoreUrl: '/boom3D' },
  { id: 'm2', name: 'Boom 2', description: 'Powerful audio enhancement tool for Mac.', iconPath: '/apps/Boom2-mac.jpeg', learnMoreUrl: '/boom2' },
  { id: 'm3', name: 'Capto', description: 'Powerful screen recording and editing tools in one place.', iconPath: '/apps/Capto-mac.jpeg', priceOriginal: 'INR 1499', priceDiscounted: 'INR 749.5', learnMoreUrl: '/capto' },
];

const windowsApps: AppItem[] = [
  { id: 'w1', name: 'Boom 3D', description: 'Boom 3D is a system-wide volume booster and equalizer.', iconPath: '/apps/boom3d-window.png', priceOriginal: 'INR 3700', priceDiscounted: 'INR 925.37', learnMoreUrl: '/boom3D' },
  { id: 'w2', name: 'AuDimix', description: 'Vocal isolation and extraction tool.', iconPath: '/apps/AuDimix-Window.jpeg', learnMoreUrl: '/audimix' },
  { id: 'w3', name: 'Capto', description: 'Powerful screen recording and editing tools in one place.', iconPath: '/apps/Capto-window.jpeg', priceOriginal: 'INR 1499', priceDiscounted: 'INR 749.5', learnMoreUrl: '/capto/windows' },
];

const iosApps: AppItem[] = [
  { id: 'i1', name: 'Boom for iOS', description: 'The Best Music Player with Magical 3D Surround Sound', iconPath: '/apps/Boom for iOS.jpeg', priceDiscounted: 'Free (with in-apps)', learnMoreUrl: '/boomformobile' },
  { id: 'i2', name: 'Vizmato', description: 'An award-winning moviemaker in your pocket.', iconPath: '/apps/Vizmato-ios.jpeg', priceDiscounted: 'Free (with in-apps)', learnMoreUrl: '/vizmato' },
  { id: 'i3', name: 'AudiOn', description: 'An Voice recorder and editor for iOS.', iconPath: '/apps/AudiOn-ios.jpeg', priceDiscounted: 'Free (with in-apps)', learnMoreUrl: '/audion' },
];

const androidApps: AppItem[] = [
  { id: 'a1', name: 'Boom for Android', description: 'The Best Music Player with Magical 3D Surround Sound', iconPath: '/apps/Boom for Android.jpeg', priceDiscounted: 'Free (with in-apps)', learnMoreUrl: '/boomformobile' },
  { id: 'a2', name: 'Vizmato', description: 'An award-winning moviemaker in your pocket.', iconPath: '/apps/Vizmato-android.png', priceDiscounted: 'Free (with in-apps)', learnMoreUrl: '/vizmato' },
  { id: 'a3', name: 'AudiOn', description: 'An Voice recorder and editor for Android.', iconPath: '/apps/AudiON-android.png', priceDiscounted: 'Free (with in-apps)', learnMoreUrl: '/audion' },
];

function Home() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div className="min-h-screen bg-[#fff] text-gray-900 font-sans">
      <Helmet>
        <title>Global Delight | Boom 3D, Capto, Vizmato & Camera Plus Pro Apps</title>
        <meta name="description" content="Global Delight builds award-winning audio, video, and photography apps — Boom 3D volume booster & equalizer, Capto screen recorder, Vizmato video editor, and Camera Plus Pro for Mac, Windows, iOS & Android." />
        <meta name="keywords" content="Global Delight, Boom 3D, volume booster, Mac equalizer, 3D surround sound, Capto, screen recorder, screenshot tool, Vizmato, video editor app, Camera Plus Pro, iPhone camera app, AuDimix, vocal remover, AudiOn, voice recorder app, bass booster, speaker booster, amplifier" />
        <meta name="subject" content="Global Delight | Makers of Boom 3D, Capto, Vizmato & Camera Plus Pro" />
        <meta property="og:title" content="Global Delight | Makers of Boom 3D, Capto, Vizmato & Camera Plus Pro" />
        <meta property="og:description" content="Award-winning audio, video, and photography apps for Mac, Windows, iOS & Android — including Boom 3D, Capto, Vizmato, Camera Plus Pro, AuDimix, and AudiOn." />
        <meta name="twitter:title" content="Global Delight | Makers of Boom 3D, Capto, Vizmato & Camera Plus Pro" />
        <meta name="twitter:description" content="Award-winning audio, video, and photography apps for Mac, Windows, iOS & Android — including Boom 3D, Capto, Vizmato, Camera Plus Pro, AuDimix, and AudiOn." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/`} />
        <meta name="twitter:url" content={`${domain}/`} />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={`${domain}/`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Global Delight",
            "url": `${domain}/`,
            "logo": `${domain}/logos/GDTPL_logo_.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["English"]
            },
            "sameAs": [
              "https://www.facebook.com/GlobalDelight",
              "https://twitter.com/GlobalDelight",
              "https://www.instagram.com/globaldelight"
            ]
          })}
        </script>
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
import { Boom } from './pages/Boom';
import { Boom2 } from './pages/Boom2';
import { Boom3D } from './pages/Boom3D';
import { Capto } from './pages/Capto';
import { AuDimixPage } from './pages/AuDimixPage';
import { BoomForMobilePage } from './pages/BoomForMobilePage';
import { CaptoWindowsPage } from './pages/CaptoWindowsPage';
import { AudiOnPage } from './pages/AudiOnPage';
import { VizmatoPage } from './pages/VizmatoPage';
import { CameraPlusPage } from './pages/CameraPlusPage';
import { CameraPlusProPage } from './pages/CameraPlusProPage';

import { LanguageSync } from './components/layout/LanguageSync';
import { SEOHead } from './components/layout/SEOHead';
import { NotFound } from './pages/NotFound';
import { AnalyticsTracker } from './components/layout/AnalyticsTracker';

const appRoutes = [
  // Redirects and Aliases for Old Website URLs
  { path: "/career", element: <Careers /> },
  { path: "/store/*", element: <Navigate to="/" replace /> },
  { path: "/lostlicense", element: <Navigate to="/contact" replace /> },
  { path: "/purchase/thank_you_purchase", element: <Navigate to="/" replace /> },
  { path: "/help/*", element: <Navigate to="/faq" replace /> },

  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/business", element: <Business /> },
  { path: "/technology/audio", element: <AudioTechnology /> },
  { path: "/technology/video", element: <VideoTechnology /> },
  { path: "/technology/camera", element: <CameraTechnology /> },
  { path: "/technology/screen-capture", element: <ScreenCaptureTechnology /> },
  { path: "/faq", element: <Faq /> },
  { path: "/faq/boom3dmac", element: <Boom3DMacFaq /> },
  { path: "/faq/boom3dmas", element: <Boom3DMasFaq /> },
  { path: "/faq/boom3dwin", element: <Boom3DWinFaq /> },
  { path: "/faq/audimixwin", element: <AuDimixWinFaq /> },
  { path: "/faq/boom2", element: <Boom2Faq /> },
  { path: "/faq/boomios", element: <BoomIosFaq /> },
  { path: "/faq/vizmato", element: <VizmatoFaq /> },
  { path: "/faq/captomac", element: <CaptoMacFaq /> },
  { path: "/faq/captowin", element: <CaptoWinFaq /> },
  { path: "/faq/audion", element: <AudionFaq /> },
  { path: "/contact", element: <Contact /> },
  { path: "/careers", element: <Careers /> },
  { path: "/boom", element: <Boom /> },
  { path: "/boom2", element: <Boom2 /> },
  { path: "/boom3D", element: <Boom3D /> },
  { path: "/capto", element: <Capto /> },
  { path: "/capto/windows", element: <CaptoWindowsPage /> },
  { path: "/audion", element: <AudiOnPage /> },
  { path: "/vizmato", element: <VizmatoPage /> },
  { path: "/cameraplus", element: <CameraPlusPage /> },
  { path: "/camerapluspro", element: <CameraPlusProPage /> },
  { path: "/audimix", element: <AuDimixPage /> },
  { path: "/boomformobile", element: <BoomForMobilePage /> }
];

function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  return (
    <>
      <SEOHead />
      <AnalyticsTracker />
      {!isAppReady && <SplashScreen onComplete={() => setIsAppReady(true)} />}
      <ScrollToTop />
      <Routes>
        {appRoutes.map((route, i) => (
          <Route key={`en-${i}`} path={route.path} element={
            <>
              <LanguageSync />
              {route.element}
            </>
          } />
        ))}
        {appRoutes.map((route, i) => (
          <Route key={`lang-${i}`} path={`/:lang${route.path === '/' ? '' : route.path}`} element={
            <>
              <LanguageSync />
              {route.element}
            </>
          } />
        ))}
        {/* Catch-all 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
