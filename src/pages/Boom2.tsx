import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Boom2Hero } from '../components/boom2/Boom2Hero';
import { Boom2FeaturesBanner } from '../components/boom2/Boom2FeaturesBanner';
import { Boom2PrecisionControl } from '../components/boom2/Boom2PrecisionControl';
import { Boom2FeatureGrid } from '../components/boom2/Boom2FeatureGrid';
import { Boom2RemoteControl } from '../components/boom2/Boom2RemoteControl';
import { Boom2AudioAmplify } from '../components/boom2/Boom2AudioAmplify';
import { Boom2MoreFeatures } from '../components/boom2/Boom2MoreFeatures';
import { Boom2EnvironmentSim } from '../components/boom2/Boom2EnvironmentSim';
import { Boom2Awards } from '../components/boom2/Boom2Awards';
import { Boom2Testimonials } from '../components/boom2/Boom2Testimonials';
import { Boom2FAQ } from '../components/boom2/Boom2FAQ';
import { Boom2FooterCTA } from '../components/boom2/Boom2FooterCTA';
import { Footer } from '../components/layout/Footer';

export function Boom2() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-[#4F46E5] selection:text-white">
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
        <meta property="og:image" content="https://d3jbf8nvvpx3fh.cloudfront.net/Boom2/web/images/OGImages/Boom2OGImage.png" />
        <meta name="subject" content="Boom 2 - Stereo Sound Enhancer for Mac" />
        <meta name="author" content="Global Delight Technologies Pvt. Ltd." />
        <meta content="index, follow" name="robots" />
        <meta name="apple-itunes-app" content="id948176063" />
        <meta name="thumbnail" content="https://d3jbf8nvvpx3fh.cloudfront.net/Boom2/web/images/OGImages/Boom2OGImage.png" />
        
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
        <meta name="twitter:image" content="https://d3jbf8nvvpx3fh.cloudfront.net/Boom2/web/images/OGImages/Boom2OGImage.png" />
        <meta name="twitter:url" content={`${domain}/boom2/`} />
        
        <meta property="fb:app_id" content="574953960066003" />
        <meta property="fb:pages" content="206541726104573" />
      </Helmet>
      
      <Navbar />

      <main>
        <Boom2Hero />
        <div className="bg-white">
          <Boom2FeaturesBanner />
        </div>
        
        <div className="bg-[#ffffff] text-gray-900 pb-16 pt-8 relative z-10 border-t border-gray-200">
          <Boom2PrecisionControl />
          <Boom2FeatureGrid />
          <Boom2RemoteControl />
          <Boom2AudioAmplify />
          <Boom2MoreFeatures />
        </div>

        <Boom2EnvironmentSim />
        
        <Boom2Awards />
        <Boom2Testimonials />
        
        <Boom2FAQ />
        
        <Boom2FooterCTA />
      </main>

      <Footer />
    </div>
  );
}
