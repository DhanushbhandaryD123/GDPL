import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/captowindows/Hero';
import { FeaturesGrid } from '../components/captowindows/FeaturesGrid';
import { VideoTutorials } from '../components/captowindows/VideoTutorials';
import { MacPromo } from '../components/captowindows/MacPromo';
import { Newsletter } from '../components/captowindows/Newsletter';
import { Footer } from '../components/layout/Footer';

export function CaptoWindowsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-x-hidden selection:bg-[#0078D7] selection:text-white">
      <Helmet>
        <title>Capto for Windows | Screen Capture & Video Editing</title>
        <meta name="description" content="Capto for Windows is your all-in-one solution for screenshots, screen recording, and video editing on PC." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero />
        <FeaturesGrid />
        <VideoTutorials />
        <MacPromo />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
