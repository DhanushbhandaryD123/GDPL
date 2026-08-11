import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingSocials } from '../components/layout/FloatingSocials';
import { AboutHero } from '../components/about/AboutHero';
import { OurStory } from '../components/about/OurStory';
import { OurValues } from '../components/about/OurValues';
import { MeetOurTeam } from '../components/about/MeetOurTeam';

export function About() {
  const domain = '';
  return (
    <div className="min-h-screen bg-[#ffffff] text-gray-900 font-sans">
      <Helmet>
        <title>About Global Delight | Innovators in Audio, Video & Photography Software</title>
        <meta name="description" content="Since 2007, Global Delight has created award-winning digital experiences. Discover our history of pioneering audio, video, and photography software for Mac, Windows, iOS, and Android, trusted by millions worldwide." />
        <meta name="keywords" content="Global Delight, software company, audio enhancement, video editing, photography apps, Mac software, iOS apps, Windows software, award-winning apps, about Global Delight, app development company, Udupi software company, Boom Capto Vizmato maker" />
        <meta property="og:title" content="About Global Delight | Innovators in Digital Media Software" />
        <meta property="og:description" content="Award-winning creators of Boom, Capto, Vizmato, and Camera Plus. Enhancing digital experiences since 2007." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/about`} />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={`${domain}/about`} />
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
