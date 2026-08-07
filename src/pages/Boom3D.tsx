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
        <title>Boom 3D | The Best Volume Booster & Equalizer</title>
        <meta name="description" content="Experience audio in 3D with the best bass, equalizer and volume booster. Enjoy your Movies, Music and Games in cinematic surround sound." />
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
