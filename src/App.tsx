import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { MotionConfig } from 'motion/react';
import { SplashScreen } from './components/layout/SplashScreen';

// Legacy-URL alias redirects use a real browser navigation (not React
// Router's client-side navigate/<Navigate>) so the app's language state is
// always initialized fresh from the destination URL, matching exactly what
// happens in production where vercel.json 301-redirects these same URLs at
// the edge before the SPA ever loads.
function Redirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return null;
}

// Old reversed-order "/product/lang" URLs (e.g. /boom3D/de).
function LegacyLangAlias({ lang, bareTo }: { lang: string; bareTo: string }) {
  useEffect(() => {
    rememberLanguage(lang);
    window.location.replace(`/${lang}${bareTo}`);
  }, [lang, bareTo]);
  return null;
}

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { AppCategory, AppItem } from './components/home/AppCategory';
import { FloatingSocials } from './components/layout/FloatingSocials';
import { ScrollToTopButton } from './components/layout/ScrollToTopButton';
import { getVariant, formatPrice } from './data/products';
import { useProducts } from './hooks/useProducts';

const HonorsReviews = lazy(() => import('./components/home/HonorsReviews').then(m => ({ default: m.HonorsReviews })));
const FeaturedWork = lazy(() => import('./components/home/FeaturedWork').then(m => ({ default: m.FeaturedWork })));
const GetInspired = lazy(() => import('./components/home/GetInspired').then(m => ({ default: m.GetInspired })));

function Home() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  const { t } = useTranslation();
  const { products } = useProducts();

  const macApps: AppItem[] = [
    { id: 'm1', name: products.boom3d.name, description: t('home.apps.boom3d_desc'), iconPath: getVariant(products.boom3d, 'mac').icon, priceOriginal: formatPrice(products.boom3d.pricing, 'original'), priceDiscounted: formatPrice(products.boom3d.pricing, 'discounted'), learnMoreUrl: getVariant(products.boom3d, 'mac').route },
    { id: 'm2', name: products.boom2.name, description: t('home.apps.boom2_desc'), iconPath: getVariant(products.boom2, 'mac').icon, learnMoreUrl: getVariant(products.boom2, 'mac').route },
    { id: 'm3', name: products.capto.name, description: t('home.apps.capto_desc'), iconPath: getVariant(products.capto, 'mac').icon, priceOriginal: formatPrice(products.capto.pricing, 'original'), priceDiscounted: formatPrice(products.capto.pricing, 'discounted'), learnMoreUrl: getVariant(products.capto, 'mac').route },
  ];

  const windowsApps: AppItem[] = [
    { id: 'w1', name: products.boom3d.name, description: t('home.apps.boom3d_desc'), iconPath: getVariant(products.boom3d, 'windows').icon, priceOriginal: formatPrice(products.boom3d.pricing, 'original'), priceDiscounted: formatPrice(products.boom3d.pricing, 'discounted'), learnMoreUrl: getVariant(products.boom3d, 'windows').route },
    { id: 'w2', name: products.audimix.name, description: t('home.apps.audimix_desc'), iconPath: getVariant(products.audimix, 'windows').icon, learnMoreUrl: getVariant(products.audimix, 'windows').route },
    { id: 'w3', name: products.capto.name, description: t('home.apps.capto_desc'), iconPath: getVariant(products.capto, 'windows').icon, priceOriginal: formatPrice(products.capto.pricing, 'original'), priceDiscounted: formatPrice(products.capto.pricing, 'discounted'), learnMoreUrl: getVariant(products.capto, 'windows').route },
  ];

  const iosApps: AppItem[] = [
    { id: 'i1', name: 'Boom for iOS', description: t('home.apps.boom_ios_desc'), iconPath: getVariant(products.boomMobile, 'ios').icon, priceDiscounted: t('home.apps.free_with_iap'), learnMoreUrl: getVariant(products.boomMobile, 'ios').route },
    { id: 'i2', name: products.vizmato.name, description: t('home.apps.vizmato_desc'), iconPath: getVariant(products.vizmato, 'ios').icon, priceDiscounted: t('home.apps.free_with_iap'), learnMoreUrl: getVariant(products.vizmato, 'ios').route },
    { id: 'i3', name: products.audion.name, description: t('home.apps.audion_desc'), iconPath: getVariant(products.audion, 'ios').icon, priceDiscounted: t('home.apps.free_with_iap'), learnMoreUrl: getVariant(products.audion, 'ios').route },
  ];

  const androidApps: AppItem[] = [
    { id: 'a1', name: 'Boom for Android', description: t('home.apps.boom_ios_desc'), iconPath: getVariant(products.boomMobile, 'android').icon, priceDiscounted: t('home.apps.free_with_iap'), learnMoreUrl: getVariant(products.boomMobile, 'android').route },
    { id: 'a2', name: products.vizmato.name, description: t('home.apps.vizmato_desc'), iconPath: getVariant(products.vizmato, 'android').icon, priceDiscounted: t('home.apps.free_with_iap'), learnMoreUrl: getVariant(products.vizmato, 'android').route },
    { id: 'a3', name: products.audion.name, description: t('home.apps.audion_android_desc'), iconPath: getVariant(products.audion, 'android').icon, priceDiscounted: t('home.apps.free_with_iap'), learnMoreUrl: getVariant(products.audion, 'android').route },
  ];

  return (
    <div className="min-h-screen bg-[#fff] text-gray-900 font-sans">
      <Helmet>
        {/* =========================================
            PRIMARY SEO METADATA
            Homepage-specific <title>, description, keywords, subject.
            hreflang for all 8 locales + x-default is injected globally
            by SEOHead.tsx (mounted once in the router below), not here.
            ========================================= */}
        <title>Global Delight | Boom 3D, Capto, Vizmato & Camera Plus Pro Apps</title>
        <meta name="description" content="Global Delight builds award-winning audio, video, and photography apps ΓÇö Boom 3D volume booster & equalizer, Capto screen recorder, Vizmato video editor, and Camera Plus Pro for Mac, Windows, iOS & Android." />
        <meta name="keywords" content="Global Delight, Boom 3D, volume booster, Mac equalizer, 3D surround sound, Capto, screen recorder, screenshot tool, Vizmato, video editor app, Camera Plus Pro, iPhone camera app, AuDimix, vocal remover, AudiOn, voice recorder app, bass booster, speaker booster, amplifier" />
        <meta name="subject" content="Global Delight | Makers of Boom 3D, Capto, Vizmato & Camera Plus Pro" />

        {/* =========================================
            OPEN GRAPH METADATA
            ========================================= */}
        <meta property="og:title" content="Global Delight | Makers of Boom 3D, Capto, Vizmato & Camera Plus Pro" />
        <meta property="og:description" content="Award-winning audio, video, and photography apps for Mac, Windows, iOS & Android ΓÇö including Boom 3D, Capto, Vizmato, Camera Plus Pro, AuDimix, and AudiOn." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/`} />
        <meta property="og:locale" content="en_US" />

        {/* =========================================
            TWITTER CARD METADATA
            ========================================= */}
        <meta name="twitter:title" content="Global Delight | Makers of Boom 3D, Capto, Vizmato & Camera Plus Pro" />
        <meta name="twitter:description" content="Award-winning audio, video, and photography apps for Mac, Windows, iOS & Android ΓÇö including Boom 3D, Capto, Vizmato, Camera Plus Pro, AuDimix, and AudiOn." />
        <meta name="twitter:url" content={`${domain}/`} />

        {/* =========================================
            CANONICAL URL
            ========================================= */}
        <link rel="canonical" href={`${domain}/`} />
        <link rel="preload" as="image" href="/hero/hero-banner-mobile.webp" media="(max-width: 767px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/hero/hero-banner.webp" media="(min-width: 768px)" fetchPriority="high" />

        {/* Organization JSON-LD lives once, globally, in SEOHead.tsx (mounted
            on every route including this one) — a second copy here would
            duplicate the schema in the page's <head>. */}
      </Helmet>

      {/* =========================================
          HEADER / NAVIGATION
          Logo, primary nav links (About/Business/FAQ/Contact/Blog),
          product search, and language switcher.
          ========================================= */}
      <Navbar />
      <FloatingSocials />
      <ScrollToTopButton />

      <main>
        {/* =========================================
            HERO SECTION
            Rotating banner carousel with per-slide app badge,
            headline, subtitle, and store/CTA buttons.
            ========================================= */}
        <Hero />

        {/* =========================================
            PRODUCTS SECTION
            Four platform rows (Mac / Windows / iOS / Android), each a
            flip-card carousel of that platform's apps sourced from
            src/data/products.ts ΓÇö name, icon, price, and route.
            ========================================= */}
        <div className="pt-0 pb-4 md:py-4">
          <AppCategory
            title={t('home.categories.mac_app')}
            deviceImageAlt="MacBook"
            deviceImagePath="/devices/macbook.webp"
            imageClassName="max-w-[350px] md:max-w-[450px]"
            apps={macApps}
          />
          <AppCategory
            title={t('home.categories.windows_app')}
            deviceImageAlt="Windows Laptop"
            deviceImagePath="/devices/windows.webp"
            imageClassName="max-w-[350px] md:max-w-[450px]"
            apps={windowsApps}
            reverse={false}
          />
          <AppCategory
            title={t('home.categories.ios_app')}
            deviceImageAlt="iPhone"
            deviceImagePath="/devices/iphone.webp"
            imageClassName="max-w-[250px] md:max-w-[300px]"
            apps={iosApps}
          />
          <AppCategory
            title={t('home.categories.android_app')}
            deviceImageAlt="Android Phone"
            deviceImagePath="/devices/Android.webp"
            imageClassName="max-w-[150px] md:max-w-[180px]"
            apps={androidApps}
            reverse={false}
          />
        </div>

        <Suspense fallback={<div className="min-h-[300px]" />}>
          {/* =========================================
              GET INSPIRED
              ========================================= */}
          <GetInspired />

          {/* =========================================
              FEATURED PRODUCTS
              ========================================= */}
          <FeaturedWork />

          {/* =========================================
              AWARDS / HONORS & CUSTOMER REVIEWS
              ========================================= */}
          <HonorsReviews />
        </Suspense>
      </main>

      {/* =========================================
          FOOTER
          Product links, About/Store/Resources columns, social icons,
          language selector, and copyright ΓÇö shared across every page.
          ========================================= */}
      <Footer />
    </div>
  );
}

// Every non-Home page is route-level code-split: a visitor to /boom2 should
// not have to download every other page's JS too. Home and NotFound stay
// eager since they're on the critical path for the most common navigations.
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Business = lazy(() => import('./pages/Business').then(m => ({ default: m.Business })));
const AudioTechnology = lazy(() => import('./pages/AudioTechnology').then(m => ({ default: m.AudioTechnology })));
const VideoTechnology = lazy(() => import('./pages/VideoTechnology').then(m => ({ default: m.VideoTechnology })));
const CameraTechnology = lazy(() => import('./pages/CameraTechnology').then(m => ({ default: m.CameraTechnology })));
const ScreenCaptureTechnology = lazy(() => import('./pages/ScreenCaptureTechnology').then(m => ({ default: m.ScreenCaptureTechnology })));
const Faq = lazy(() => import('./pages/Faq').then(m => ({ default: m.Faq })));
const Boom3DMacFaq = lazy(() => import('./pages/faq/Boom3DMacFaq').then(m => ({ default: m.Boom3DMacFaq })));
const Boom3DMasFaq = lazy(() => import('./pages/faq/Boom3DMasFaq').then(m => ({ default: m.Boom3DMasFaq })));
const Boom3DWinFaq = lazy(() => import('./pages/faq/Boom3DWinFaq').then(m => ({ default: m.Boom3DWinFaq })));
const AuDimixWinFaq = lazy(() => import('./pages/faq/AuDimixWinFaq').then(m => ({ default: m.AuDimixWinFaq })));
const Boom2Faq = lazy(() => import('./pages/faq/Boom2Faq').then(m => ({ default: m.Boom2Faq })));
const BoomIosFaq = lazy(() => import('./pages/faq/BoomIosFaq').then(m => ({ default: m.BoomIosFaq })));
const VizmatoFaq = lazy(() => import('./pages/faq/VizmatoFaq').then(m => ({ default: m.VizmatoFaq })));
const CaptoMacFaq = lazy(() => import('./pages/faq/CaptoMacFaq').then(m => ({ default: m.CaptoMacFaq })));
const CaptoWinFaq = lazy(() => import('./pages/faq/CaptoWinFaq').then(m => ({ default: m.CaptoWinFaq })));
const AudionFaq = lazy(() => import('./pages/faq/AudionFaq').then(m => ({ default: m.AudionFaq })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Careers = lazy(() => import('./pages/Careers').then(m => ({ default: m.Careers })));
import { ScrollToTop } from './components/layout/ScrollToTop';
const Boom = lazy(() => import('./pages/Boom').then(m => ({ default: m.Boom })));
const Boom2 = lazy(() => import('./pages/Boom2').then(m => ({ default: m.Boom2 })));
const Boom3D = lazy(() => import('./pages/Boom3D').then(m => ({ default: m.Boom3D })));
const Capto = lazy(() => import('./pages/Capto').then(m => ({ default: m.Capto })));
const AuDimixPage = lazy(() => import('./pages/AuDimixPage').then(m => ({ default: m.AuDimixPage })));
const BoomForMobilePage = lazy(() => import('./pages/BoomForMobilePage').then(m => ({ default: m.BoomForMobilePage })));
const CaptoWindowsPage = lazy(() => import('./pages/CaptoWindowsPage').then(m => ({ default: m.CaptoWindowsPage })));
const AudiOnPage = lazy(() => import('./pages/AudiOnPage').then(m => ({ default: m.AudiOnPage })));
const VizmatoPage = lazy(() => import('./pages/VizmatoPage').then(m => ({ default: m.VizmatoPage })));
const CameraPlusPage = lazy(() => import('./pages/CameraPlusPage').then(m => ({ default: m.CameraPlusPage })));
const CameraPlusProPage = lazy(() => import('./pages/CameraPlusProPage').then(m => ({ default: m.CameraPlusProPage })));
const CaptoEducatorsPage = lazy(() => import('./pages/CaptoEducatorsPage').then(m => ({ default: m.CaptoEducatorsPage })));
const CaptoThankYou = lazy(() => import('./pages/CaptoThankYou').then(m => ({ default: m.CaptoThankYou })));
const Boom2ThankYouDownload = lazy(() => import('./pages/Boom2ThankYouDownload').then(m => ({ default: m.Boom2ThankYouDownload })));
const BoomComparePage = lazy(() => import('./pages/BoomComparePage').then(m => ({ default: m.BoomComparePage })));
const BoomAnniversaryPage = lazy(() => import('./pages/BoomAnniversaryPage').then(m => ({ default: m.BoomAnniversaryPage })));
const BoomAudioComponentPage = lazy(() => import('./pages/BoomAudioComponentPage').then(m => ({ default: m.BoomAudioComponentPage })));
const BoomPpcPage = lazy(() => import('./pages/BoomPpcPage').then(m => ({ default: m.BoomPpcPage })));
const CaptoVoilaComparePage = lazy(() => import('./pages/CaptoVoilaComparePage').then(m => ({ default: m.CaptoVoilaComparePage })));
const CaptoScreenRecordingPage = lazy(() => import('./pages/CaptoScreenRecordingPage').then(m => ({ default: m.CaptoScreenRecordingPage })));
const CaptoInstallDevicePage = lazy(() => import('./pages/CaptoInstallDevicePage').then(m => ({ default: m.CaptoInstallDevicePage })));
const CaptoUninstallDevicePage = lazy(() => import('./pages/CaptoUninstallDevicePage').then(m => ({ default: m.CaptoUninstallDevicePage })));
const CaptoHelpVideosPage = lazy(() => import('./pages/CaptoHelpVideosPage').then(m => ({ default: m.CaptoHelpVideosPage })));

import { LanguageSync } from './components/layout/LanguageSync';
import { rememberLanguage, SUPPORTED_LANGS } from './lib/languagePreference';
const NON_EN_LANGS = SUPPORTED_LANGS.filter(l => l !== 'en');
import { markSplashComplete } from './lib/splashScreenSignal';
import { SEOHead } from './components/layout/SEOHead';
import { NotFound } from './pages/NotFound';
import { Analytics } from '@vercel/analytics/react';
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const CaptoPrivacyPolicy = lazy(() => import('./pages/CaptoPrivacyPolicy').then(m => ({ default: m.CaptoPrivacyPolicy })));
const WhatsNewBoom = lazy(() => import('./pages/whatsnew/WhatsNewBoom').then(m => ({ default: m.WhatsNewBoom })));
const WhatsNewCapto = lazy(() => import('./pages/whatsnew/WhatsNewCapto').then(m => ({ default: m.WhatsNewCapto })));
const WhatsNewBoom2 = lazy(() => import('./pages/whatsnew/WhatsNewBoom2').then(m => ({ default: m.WhatsNewBoom2 })));
const WhatsNewAudion = lazy(() => import('./pages/whatsnew/WhatsNewAudion').then(m => ({ default: m.WhatsNewAudion })));
const WhatsNewAudimix = lazy(() => import('./pages/whatsnew/WhatsNewAudimix').then(m => ({ default: m.WhatsNewAudimix })));
const PressInfo = lazy(() => import('./pages/PressInfo').then(m => ({ default: m.PressInfo })));
const PressArticlePage = lazy(() => import('./pages/PressArticlePage').then(m => ({ default: m.PressArticlePage })));

function RouteFallback() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          width: 32, height: 32, borderRadius: '50%',
          border: '3px solid #E5E7EB', borderTopColor: '#4F46E5',
          animation: 'route-fallback-spin 0.7s linear infinite',
        }}
      />
      <style>{'@keyframes route-fallback-spin { to { transform: rotate(360deg); } }'}</style>
    </div>
  );
}

const appRoutes = [
  // Redirects and Aliases for Old Website URLs
  { path: "/career", element: <Redirect to="/careers" /> },
  { path: "/store/*", element: <Redirect to="/" /> },
  { path: "/lostlicense", element: <Redirect to="/contact" /> },
  { path: "/purchase/thank_you_purchase", element: <Redirect to="/" /> },
  { path: "/help/*", element: <Redirect to="/faq" /> },

  // Old Boom Language URLs
  { path: "/boom/de", element: <LegacyLangAlias lang="de" bareTo="/boom" /> },
  { path: "/boom/es", element: <LegacyLangAlias lang="es" bareTo="/boom" /> },
  { path: "/boom/fr", element: <LegacyLangAlias lang="fr" bareTo="/boom" /> },
  { path: "/boom/it", element: <LegacyLangAlias lang="it" bareTo="/boom" /> },
  { path: "/boom/ja", element: <LegacyLangAlias lang="ja" bareTo="/boom" /> },
  { path: "/boom/pt", element: <LegacyLangAlias lang="pt" bareTo="/boom" /> },
  { path: "/boom/zh-cn", element: <LegacyLangAlias lang="zh" bareTo="/boom" /> },
  { path: "/boom/zh-tw", element: <LegacyLangAlias lang="zh" bareTo="/boom" /> },
  { path: "/boom/features", element: <Redirect to="/boom" /> },

  // Old Boom2 Language URLs
  { path: "/boom2/de", element: <LegacyLangAlias lang="de" bareTo="/boom2" /> },
  { path: "/boom2/es", element: <LegacyLangAlias lang="es" bareTo="/boom2" /> },
  { path: "/boom2/fr", element: <LegacyLangAlias lang="fr" bareTo="/boom2" /> },
  { path: "/boom2/it", element: <LegacyLangAlias lang="it" bareTo="/boom2" /> },
  { path: "/boom2/ja", element: <LegacyLangAlias lang="ja" bareTo="/boom2" /> },
  { path: "/boom2/pt", element: <LegacyLangAlias lang="pt" bareTo="/boom2" /> },
  { path: "/boom2/zh-cn", element: <LegacyLangAlias lang="zh" bareTo="/boom2" /> },
  { path: "/boom2/zh-tw", element: <LegacyLangAlias lang="zh" bareTo="/boom2" /> },

  // Old Boom3D Language URLs
  { path: "/boom3D/de", element: <LegacyLangAlias lang="de" bareTo="/boom3D" /> },
  { path: "/boom3D/es", element: <LegacyLangAlias lang="es" bareTo="/boom3D" /> },
  { path: "/boom3D/fr", element: <LegacyLangAlias lang="fr" bareTo="/boom3D" /> },
  { path: "/boom3D/it", element: <LegacyLangAlias lang="it" bareTo="/boom3D" /> },
  { path: "/boom3D/ja", element: <LegacyLangAlias lang="ja" bareTo="/boom3D" /> },
  { path: "/boom3D/pt", element: <LegacyLangAlias lang="pt" bareTo="/boom3D" /> },
  { path: "/boom3D/zh-cn", element: <LegacyLangAlias lang="zh" bareTo="/boom3D" /> },
  { path: "/boom3D/zh-tw", element: <LegacyLangAlias lang="zh" bareTo="/boom3D" /> },

  // Press & Media Info
  { path: "/press-info", element: <PressInfo /> },
  { path: "/press-pages/:year/:slug", element: <PressArticlePage /> },
  { path: "/press_releases", element: <Redirect to="/press-info" /> },
  { path: "/press", element: <Redirect to="/press-info" /> },

  // Voila Discontinued Legacy Redirects
  { path: "/voila", element: <Redirect to="/capto" /> },
  { path: "/voila/*", element: <Redirect to="/capto" /> },

  // Legacy URL Aliases & Redirects
  { path: "/boom/boom-audio-component.html", element: <Redirect to="/boom/boom-audio-component" /> },
  { path: "/boom/boom-ppc.php", element: <Redirect to="/boom/boom-ppc" /> },
  { path: "/capto/features-comparison", element: <Redirect to="/capto/capto-screen-recording/compare" /> },
  { path: "/capto/capto-screen-recording/compare.php", element: <Redirect to="/capto/capto-screen-recording/compare" /> },
  { path: "/capto/capto-screen-recording/index.php", element: <Redirect to="/capto/capto-screen-recording" /> },
  { path: "/capto/downloads/installers/install-capto-device.php", element: <Redirect to="/capto/downloads/installers/install-capto-device" /> },
  { path: "/capto/downloads/installers/uninstall-capto-device.php", element: <Redirect to="/capto/downloads/installers/uninstall-capto-device" /> },
  { path: "/capto/user-guide.php", element: <Redirect to="/capto" /> },
  { path: "/captoformac", element: <Redirect to="/capto" /> },

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
  { path: "/boom/boom2-vs-boom3d-compare-features", element: <BoomComparePage /> },
  { path: "/boom/10th-anniversary", element: <BoomAnniversaryPage /> },
  { path: "/boom/boom-audio-component", element: <BoomAudioComponentPage /> },
  { path: "/boom/boom-ppc", element: <BoomPpcPage /> },
  { path: "/capto", element: <Capto /> },
  { path: "/capto/windows", element: <CaptoWindowsPage /> },
  { path: "/capto/educators", element: <CaptoEducatorsPage /> },
  { path: "/capto/thankyou", element: <CaptoThankYou /> },
  { path: "/capto/capto-screen-recording/compare", element: <CaptoVoilaComparePage /> },
  { path: "/capto/compare", element: <CaptoVoilaComparePage /> },
  { path: "/capto/capto-screen-recording", element: <CaptoScreenRecordingPage /> },
  { path: "/capto/downloads/installers/install-capto-device", element: <CaptoInstallDevicePage /> },
  { path: "/capto/downloads/installers/uninstall-capto-device", element: <CaptoUninstallDevicePage /> },
  { path: "/capto/help-videos", element: <CaptoHelpVideosPage /> },
  { path: "/boom2/thankyou/download", element: <Boom2ThankYouDownload /> },
  { path: "/audion", element: <AudiOnPage /> },
  { path: "/vizmato", element: <VizmatoPage /> },
  { path: "/cameraplus", element: <CameraPlusPage /> },
  { path: "/camerapluspro", element: <CameraPlusProPage /> },
  { path: "/audimix", element: <AuDimixPage /> },
  { path: "/boomformobile", element: <BoomForMobilePage /> },
  { path: "/boom3D/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/boom2/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/boom/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/capto/privacy-policy", element: <CaptoPrivacyPolicy /> },
  { path: "/whatsnew/boom", element: <WhatsNewBoom /> },
  { path: "/whatsnew/capto", element: <WhatsNewCapto /> },
  { path: "/whatsnew/boom2", element: <WhatsNewBoom2 /> },
  { path: "/whatsnew/audion", element: <WhatsNewAudion /> },
  { path: "/whatsnew/audimix", element: <WhatsNewAudimix /> }
];

const isAuditOrBot = () => {
  if (typeof window === 'undefined') return true;
  if (Boolean((window as any).__PRERENDER__)) return true;
  if (Boolean(navigator.webdriver)) return true;
  if (navigator.userAgent === 'ReactSnap') return true;
  if (/Headless|Puppeteer|Lighthouse|PageSpeed|Chrome-Lighthouse|PTST/i.test(navigator.userAgent)) return true;
  if (window.location.search.includes('no-splash')) return true;
  return false;
};

function App() {
  const isAudit = isAuditOrBot();
  const [isAppReady, setIsAppReady] = useState(() => isAudit);

  useEffect(() => {
    if (isAppReady) {
      markSplashComplete();
    }
  }, [isAppReady]);

  return (
    <MotionConfig reducedMotion={isAudit ? 'always' : 'user'}>
      <SEOHead />
      {typeof window !== 'undefined' && window.location.hostname.includes('vercel.app') && <Analytics />}
      {!isAppReady && (
        <SplashScreen
          onComplete={() => {
            setIsAppReady(true);
            markSplashComplete();
          }}
        />
      )}
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          {appRoutes.map((route, i) => (
            <Route key={`en-${i}`} path={route.path} element={
              <>
                <LanguageSync />
                {route.element}
              </>
            } />
          ))}
          {/* Supported non-English localized routes */}
          {NON_EN_LANGS.map(lang =>
            appRoutes.map((route, i) => (
              <Route key={`lang-${lang}-${i}`} path={`/${lang}${route.path === '/' ? '' : route.path}`} element={
                <>
                  <LanguageSync routeLang={lang} />
                  {route.element}
                </>
              } />
            ))
          )}
          {/* Explicit 404 routes */}
          <Route path="/404" element={<NotFound />} />
          {NON_EN_LANGS.map(lang => (
            <Route key={`404-${lang}`} path={`/${lang}/404`} element={<NotFound />} />
          ))}
          {/* Catch-all 404 route for unmatched paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Toaster position="bottom-right" />
    </MotionConfig>
  );
}

export default App;
