import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/audion/Hero';
import { AdvancedRecording } from '../components/audion/AdvancedRecording';
import { AudioEnhancement } from '../components/audion/AudioEnhancement';
import { EditingTranscription } from '../components/audion/EditingTranscription';
import { Newsletter } from '../components/audion/Newsletter';
import { Footer } from '../components/layout/Footer';

export function AudiOnPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-purple-200">
      <Helmet>
        <title>AudiOn | Voice Recorder for Android & iOS</title>
        <meta name="description" content="Enhance your audio recordings with AudiOn. The cutting-edge voice recorder app featuring lossless recording, noise removal, and transcription." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero />
        <AdvancedRecording />
        <AudioEnhancement />
        <EditingTranscription />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
