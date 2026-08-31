import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Hero } from '../components/captowindows/Hero';
import { FeaturesGrid } from '../components/captowindows/FeaturesGrid';
import { Showcase } from '../components/captowindows/Showcase';
import { VideoTutorials } from '../components/captowindows/VideoTutorials';
import { MacPromo } from '../components/captowindows/MacPromo';
import { Newsletter } from '../components/captowindows/Newsletter';
import { Footer } from '../components/layout/Footer';

export function CaptoWindowsPage() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-[#0078D7] selection:text-white">
      <Helmet>
        <title>Capto for Windows | Screen Capture & Video Editing</title>
        <meta name="description" content="Capto for Windows is your all-in-one solution for screenshots, screen recording, and video editing on PC. Create tutorials, vlog, and share with ease — no watermarks, no time limits." />
        <meta name="keywords" content="Capto for Windows, Windows screen recorder, PC video editor, screenshot tool Windows, record screen PC, webcam recorder Windows, tutorial recording software, screen capture app Windows, annotate screenshots PC" />
        <meta name="subject" content="Capto for Windows | Screen Capture & Video Editing" />
        <meta property="og:title" content="Capto for Windows | Screen Capture & Video Editing" />
        <meta property="og:description" content="Your all-in-one solution for screen recording and editing on Windows." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/capto/windows`} />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={`${domain}/capto/windows`} />
      
        <meta property="og:image" content={`${domain}/apps/Capto-window.jpeg`} />
        <meta name="thumbnail" content={`${domain}/apps/Capto-window.jpeg`} />
        <meta name="twitter:title" content="Capto for Windows | Screen Capture & Video Editing" />
        <meta name="twitter:description" content="Capto for Windows is your all-in-one solution for screenshots, screen recording, and video editing on PC. Create tutorials, vlog, and share with ease." />
        <meta name="twitter:image" content={`${domain}/apps/Capto-window.jpeg`} />
      </Helmet>
      
      <Navbar />
      <Breadcrumbs items={[{ name: 'Capto', href: '/capto' }, { name: 'Capto for Windows' }]} />

      <main>
        <Hero />
        <FeaturesGrid />
        <Showcase />
        <VideoTutorials />
        <MacPromo />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
