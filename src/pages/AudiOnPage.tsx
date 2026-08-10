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
        <title>AudiOn | Pro Voice Recorder & Audio Editor for iOS & Android</title>
        <meta name="description" content="AudiOn is the cutting-edge voice recorder app for mobile. Experience lossless recording, powerful noise removal, audio enhancement, and AI transcription." />
        <meta name="keywords" content="AudiOn, voice recorder app, audio editor app, noise removal app, AI transcription, professional audio recording, mobile audio editor" />
        <meta property="og:title" content="AudiOn | Voice Recorder for Android & iOS" />
        <meta property="og:description" content="Enhance your mobile audio recordings with noise removal and lossless quality." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.globaldelight.com/audion" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://www.globaldelight.com/audion" />
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
