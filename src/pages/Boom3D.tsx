import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Boom3DHero } from '../components/boom3d/Boom3DHero';
import { Boom3DOSSelector } from '../components/boom3d/Boom3DOSSelector';
import { Boom3DSurround } from '../components/boom3d/Boom3DSurround';
import { Boom3DEqualizer } from '../components/boom3d/Boom3DEqualizer';
import { Boom3DVolumeBooster } from '../components/boom3d/Boom3DVolumeBooster';
import { Boom3DTestimonials } from '../components/boom3d/Boom3DTestimonials';
import { Boom3DCTA } from '../components/boom3d/Boom3DCTA';
import { Boom3DAppDownload } from '../components/boom3d/Boom3DAppDownload';
import { Boom3DTailored } from '../components/boom3d/Boom3DTailored';

export function Boom3D() {
  return (
    <div 
      className="min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-[#4F46E5] selection:text-white"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", sans-serif' }}
    >
      <Helmet>
        <title>Boom 3D - Best 3D Surround Sound for Mac & Windows</title>
        <meta name="description" content="Experience audio in magical 3D. Boom 3D is a pro audio enhancement app with a 31-band equalizer, volume booster, and immersive surround sound for Mac and Windows." />
        <meta name="keywords" content="Boom 3D, 3D surround sound, volume booster, Mac equalizer, Windows equalizer, sound enhancement software" />
        <meta property="og:title" content="Boom 3D | Best Volume Booster & Equalizer" />
        <meta property="og:description" content="Transform your computer into a cinematic sound stage with Boom 3D." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.globaldelight.com/boom3D" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://www.globaldelight.com/boom3D" />
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
            "image": "https://www.globaldelight.com/apps/boom3d-window.png"
          })}
        </script>
      
        <meta property="og:image" content="https://www.globaldelight.com/apps/Boom3D-mac.jpeg" />
        <meta name="twitter:title" content="Boom 3D | Best Volume Booster & Equalizer for Mac & Windows" />
        <meta name="twitter:description" content="Experience audio in magical 3D. Boom 3D is a pro audio enhancement app with a 31-band equalizer, volume booster, and immersive surround sound for Mac and Windows." />
        <meta name="twitter:image" content="https://www.globaldelight.com/apps/Boom3D-mac.jpeg" />
      </Helmet>
      
      {/* We can use the global Navbar with a dark theme prop if needed, or just standard */}
      <div className="absolute top-0 w-full z-50">
        <Navbar />
      </div>
      
      <main className="relative pt-20">
        <Boom3DHero />
        <Boom3DOSSelector />
        <Boom3DSurround />
        <Boom3DEqualizer />
        <Boom3DVolumeBooster />
        <Boom3DAppDownload />
        <Boom3DTailored />
        <Boom3DTestimonials />
        <Boom3DCTA />
      </main>

      <div className="relative z-10 border-t border-gray-100 bg-white">
        <Footer />
      </div>
    </div>
  );
}
