import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Boom3DHero } from '../components/boom3d/Boom3DHero';
import { Boom3DOSSelector } from '../components/boom3d/Boom3DOSSelector';
import { Boom3DScrollReveal } from '../components/boom3d/Boom3DScrollReveal';
import { Boom3DKeyFeatures } from '../components/boom3d/Boom3DKeyFeatures';
import { Boom3DSurround } from '../components/boom3d/Boom3DSurround';
import { Boom3DEqualizer } from '../components/boom3d/Boom3DEqualizer';
import { Boom3DVolumeBooster } from '../components/boom3d/Boom3DVolumeBooster';
import { Boom3DTestimonials } from '../components/boom3d/Boom3DTestimonials';
import { Boom3DCTA } from '../components/boom3d/Boom3DCTA';
import { Boom3DAppDownload } from '../components/boom3d/Boom3DAppDownload';
import { Boom3DTailored } from '../components/boom3d/Boom3DTailored';
import { Boom3DFAQ } from '../components/boom3d/Boom3DFAQ';

export function Boom3D() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div 
      className="min-h-screen bg-white text-gray-900 selection:bg-[#4F46E5] selection:text-white"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", sans-serif' }}
    >
      <Helmet>
        <title>Boom 3D - Best 3D Surround Sound for Mac & Windows</title>
        <meta name="description" content="Experience audio in magical 3D. Boom 3D is a pro audio enhancement app with a 31-band equalizer, volume booster, and immersive surround sound for Mac and Windows, with custom presets for every genre." />
        <meta name="keywords" content="Boom 3D, 3D surround sound, volume booster, Mac equalizer, Windows equalizer, sound enhancement software, 31-band equalizer, bass booster, audio enhancer app, surround sound software, best equalizer for Mac" />
        <meta property="og:title" content="Boom 3D | Best Volume Booster & Equalizer" />
        <meta property="og:description" content="Transform your computer into a cinematic sound stage with Boom 3D." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/boom3D`} />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={`${domain}/boom3D`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Boom 3D",
            "operatingSystem": "Mac, Windows",
            "applicationCategory": "MultimediaApplication",
            "offers": {
              "@type": "Offer",
              "price": "925.37",
              "priceCurrency": "INR"
            },
            "description": "System-wide volume booster and equalizer for Mac & Windows with immersive 3D surround sound.",
            "image": `${domain}/apps/boom3d-window.webp`
          })}
        </script>
      
        <meta property="og:image" content={`${domain}/apps/Boom3D-mac.jpeg`} />
        <meta name="subject" content="Boom 3D | Best Volume Booster & Equalizer" />
        <meta name="thumbnail" content={`${domain}/apps/Boom3D-mac.jpeg`} />
        <meta name="twitter:title" content="Boom 3D | Best Volume Booster & Equalizer for Mac & Windows" />
        <meta name="twitter:description" content="Experience audio in magical 3D. Boom 3D is a pro audio enhancement app with a 31-band equalizer, volume booster, and immersive surround sound for Mac and Windows." />
        <meta name="twitter:image" content={`${domain}/apps/Boom3D-mac.jpeg`} />
        <meta name="twitter:site" content="@boomapp" />
        <meta name="twitter:creator" content="@boomapp" />
        <meta property="fb:app_id" content="574953960066003" />
        <meta property="fb:pages" content="206541726104573" />
        <meta name="apple-itunes-app" content="id948176063" />
        <meta property="og:see_also" content="https://www.instagram.com/boomaudioapp/" />
        <meta property="og:see_also" content="https://www.facebook.com/boomapp" />
        <meta property="og:see_also" content="https://twitter.com/boomapp" />
        <meta property="og:see_also" content="https://www.youtube.com/channel/UCiHp8wkTV2h7u8afCIij0YQ" />
      </Helmet>
      
      <Navbar />

      <main className="relative">
        <Boom3DHero />
        <Boom3DOSSelector />
        <Boom3DScrollReveal />
        <Boom3DKeyFeatures />
        <Boom3DSurround />
        <Boom3DEqualizer />
        <Boom3DVolumeBooster />
        <Boom3DAppDownload />
        <Boom3DTailored />
        <Boom3DTestimonials />
        <Boom3DCTA />
        <Boom3DFAQ />
      </main>

      <div className="relative z-10 border-t border-gray-100 bg-white">
        <Footer />
      </div>
    </div>
  );
}
