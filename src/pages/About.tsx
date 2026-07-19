import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingSocials } from '../components/layout/FloatingSocials';
import { AboutHero } from '../components/about/AboutHero';
import { OurStory } from '../components/about/OurStory';
import { OurValues } from '../components/about/OurValues';
import { MeetOurTeam } from '../components/about/MeetOurTeam';

export function About() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-gray-900 font-sans">
      <Helmet>
        <title>About Global Delight</title>
        <meta name="description" content="Since 2007, Global Delight has created award-winning digital experiences in audio, video, photography, and productivity software." />
      </Helmet>
      
      <Navbar />
      <FloatingSocials />
      
      <main>
        <AboutHero />
        <OurStory />
        <MeetOurTeam />
        <OurValues />
      </main>

      <Footer />
    </div>
  );
}
