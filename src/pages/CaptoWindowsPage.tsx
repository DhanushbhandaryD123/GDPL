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
        <meta name="description" content="Capto for Windows is your all-in-one solution for screenshots, screen recording, and video editing on PC. Create tutorials, vlog, and share with ease." />
        <meta name="keywords" content="Capto for Windows, Windows screen recorder, PC video editor, screenshot tool Windows, record screen PC" />
        <meta property="og:title" content="Capto for Windows | Screen Capture & Video Editing" />
        <meta property="og:description" content="Your all-in-one solution for screen recording and editing on Windows." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.globaldelight.com/capto/windows" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://www.globaldelight.com/capto/windows" />
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
