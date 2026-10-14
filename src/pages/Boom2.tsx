import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Boom2Hero } from '../components/boom2/Boom2Hero';
import { Boom2PrecisionControl } from '../components/boom2/Boom2PrecisionControl';
import { Footer } from '../components/layout/Footer';
const Boom2CoreFeatures = lazy(() => import('../components/boom2/Boom2CoreFeatures').then(m => ({ default: m.Boom2CoreFeatures })));
const Boom2FeatureGrid = lazy(() => import('../components/boom2/Boom2FeatureGrid').then(m => ({ default: m.Boom2FeatureGrid })));
const Boom2EqualizerPresetFlow = lazy(() => import('../components/boom2/Boom2EqualizerPresetFlow').then(m => ({ default: m.Boom2EqualizerPresetFlow })));
const Boom2AudioEffectsObject = lazy(() => import('../components/boom2/Boom2AudioEffectsObject').then(m => ({ default: m.Boom2AudioEffectsObject })));
const Boom2SystemWideControl = lazy(() => import('../components/boom2/Boom2SystemWideControl').then(m => ({ default: m.Boom2SystemWideControl })));
const Boom2BoomRemote = lazy(() => import('../components/boom2/Boom2BoomRemote').then(m => ({ default: m.Boom2BoomRemote })));
const Boom2AudioAmplify = lazy(() => import('../components/boom2/Boom2AudioAmplify').then(m => ({ default: m.Boom2AudioAmplify })));
const Boom2OutputCompatibility = lazy(() => import('../components/boom2/Boom2OutputCompatibility').then(m => ({ default: m.Boom2OutputCompatibility })));
const Boom2EnvironmentSim = lazy(() => import('../components/boom2/Boom2EnvironmentSim').then(m => ({ default: m.Boom2EnvironmentSim })));
const Boom2Awards = lazy(() => import('../components/boom2/Boom2Awards').then(m => ({ default: m.Boom2Awards })));
const Boom2Testimonials = lazy(() => import('../components/boom2/Boom2Testimonials').then(m => ({ default: m.Boom2Testimonials })));
const Boom2FAQ = lazy(() => import('../components/boom2/Boom2FAQ').then(m => ({ default: m.Boom2FAQ })));
const Boom2FooterCTA = lazy(() => import('../components/boom2/Boom2FooterCTA').then(m => ({ default: m.Boom2FooterCTA })));

export function Boom2() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#4F46E5] selection:text-white">
      <Helmet>
        <title>Boom 2 - Stereo Sound Enhancer for Mac</title>
        <meta name="description" content="Boom 2 is an award-winning stereo sound enhancer app for macOS that gives you precision control over your audio, with cutting-edge features for pristine sound." />
        <meta name="keywords" content="Boom 2, Mac volume booster, Mac equalizer, audio enhancer, improve Mac sound, bass booster Mac, sound booster app, system-wide audio control, equalizer presets, Boom app" />
        <link rel="canonical" href={`${domain}/boom2/`} />
        
        {/* OG Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Global Delight Technologies Pvt. Ltd." />
        <meta property="og:title" content="Boom 2 - Stereo Sound Enhancer for Mac" />
        <meta property="og:description" content="Boom 2 is an award-winning stereo sound enhancer app for macOS that gives you precision control over your audio, with cutting-edge features for pristine sound." />
        <meta property="og:url" content={`${domain}/boom2/`} />
        <meta property="og:image" content="/images/external/img_0a22d737fce8.png" />
        <meta name="subject" content="Boom 2 - Stereo Sound Enhancer for Mac" />
        <meta name="author" content="Global Delight Technologies Pvt. Ltd." />
        <meta content="index, follow" name="robots" />
        <meta name="apple-itunes-app" content="id948176063" />
        <meta name="thumbnail" content="/images/external/img_0a22d737fce8.png" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Boom 2",
            "operatingSystem": "Mac",
            "applicationCategory": "MultimediaApplication",
            "description": "System-wide volume booster and equalizer designed exclusively for Mac.",
            "image": `${domain}/apps/Boom2-mac.jpeg`
          })}
        </script>
      
        <meta property="og:see_also" content="https://www.instagram.com/boomaudioapp/" />
        <meta property="og:see_also" content="https://www.facebook.com/boomapp" />
        <meta property="og:see_also" content="https://twitter.com/boomapp" />
        <meta property="og:see_also" content="https://www.youtube.com/channel/UCiHp8wkTV2h7u8afCIij0YQ" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@boomapp" />
        <meta name="twitter:creator" content="@boomapp" />
        <meta name="twitter:title" content="Boom 2 - Stereo Sound Enhancer for Mac" />
        <meta name="twitter:description" content="Boom 2 is an award-winning stereo sound enhancer app for macOS that gives you precision control over your audio, with cutting-edge features for pristine sound." />
        <meta name="twitter:image" content="/images/external/img_0a22d737fce8.png" />
        <meta name="twitter:url" content={`${domain}/boom2/`} />
        
        <meta property="fb:app_id" content="574953960066003" />
        <meta property="fb:pages" content="206541726104573" />
      </Helmet>
      
      <Navbar />

      <main className="overflow-x-clip">
        <Boom2Hero />
        
        <div className="bg-[#ffffff] text-gray-900 pt-6 relative z-10">
          <Boom2PrecisionControl />
        </div>

        <Suspense fallback={<div className="min-h-[1200px]" />}>
          <div className="bg-[#ffffff] text-gray-900 pb-16 relative z-10">
            <Boom2CoreFeatures />
            <Boom2FeatureGrid />
            <Boom2EqualizerPresetFlow />
            <Boom2AudioEffectsObject />
            <Boom2SystemWideControl />
            <Boom2BoomRemote />
            <Boom2AudioAmplify />
            <Boom2OutputCompatibility />
          </div>

          <Boom2EnvironmentSim />
          <Boom2Awards />
          <Boom2Testimonials />
          <Boom2FAQ />
          <Boom2FooterCTA />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
