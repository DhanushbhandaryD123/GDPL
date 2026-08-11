import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { CaptoHero } from '../components/capto/CaptoHero';
import { CaptoFeatures } from '../components/capto/CaptoFeatures';
import { CaptoUseCases } from '../components/capto/CaptoUseCases';
import { CaptoFooterCTA } from '../components/capto/CaptoFooterCTA';
import { Footer } from '../components/layout/Footer';

export function Capto() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-[#4F46E5] selection:text-white">
      <Helmet>
        <title>Capto | Screen Capture and Video Editing Software for Mac</title>
        <meta name="description" content="Capto is a powerful screen recording, video editing, and image editing software for Mac. It's the ultimate tool to turn your captures into creations." />
        <meta name="keywords" content="Capto, Mac screen recorder, Mac video editor, screen capture software, screenshot tool for Mac, video tutorials" />
        <meta property="og:title" content="Capto | Screen Capture & Video Editing for Mac" />
        <meta property="og:description" content="Record your screen, edit videos, and share instantly with Capto for Mac." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.globaldelight.com/capto" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://www.globaldelight.com/capto" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Capto",
            "operatingSystem": "Mac",
            "applicationCategory": "MultimediaApplication",
            "offers": {
              "@type": "Offer",
              "price": "749.50",
              "priceCurrency": "INR"
            },
            "description": "Powerful screen recording, video editing, and image editing software for Mac.",
            "image": "https://www.globaldelight.com/apps/Capto-mac.jpeg"
          })}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main>
        <CaptoHero />
        <CaptoFeatures />
        <CaptoUseCases />
        <CaptoFooterCTA />
      </main>

      <Footer />
    </div>
  );
}
