import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/audion/Hero';
import { Footer } from '../components/layout/Footer';

const AdvancedRecording = lazy(() => import('../components/audion/AdvancedRecording').then(m => ({ default: m.AdvancedRecording })));
const AudioEnhancement = lazy(() => import('../components/audion/AudioEnhancement').then(m => ({ default: m.AudioEnhancement })));
const EditingTranscription = lazy(() => import('../components/audion/EditingTranscription').then(m => ({ default: m.EditingTranscription })));
const Newsletter = lazy(() => import('../components/audion/Newsletter').then(m => ({ default: m.Newsletter })));

export function AudiOnPage() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-200">
      <Helmet>
        <title>AudiOn | Pro Voice Recorder & Audio Editor for iOS & Android</title>
        <meta name="description" content="AudiOn is the cutting-edge voice recorder app for mobile. Experience lossless recording, powerful noise removal, audio enhancement, and AI transcription for interviews, lectures, and podcasts." />
        <meta name="keywords" content="AudiOn, voice recorder app, audio editor app, noise removal app, AI transcription, professional audio recording, mobile audio editor, speech to text app, podcast recording app, interview recorder app" />
        <meta name="subject" content="AudiOn | Voice Recorder for Android & iOS" />
        <meta property="og:title" content="AudiOn | Voice Recorder for Android & iOS" />
        <meta property="og:description" content="Enhance your mobile audio recordings with noise removal and lossless quality." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/audion`} />
        <link rel="canonical" href={`${domain}/audion`} />
      
        <meta property="og:image" content={`${domain}/apps/AudiOn-ios.jpeg`} />
        <meta name="thumbnail" content={`${domain}/apps/AudiOn-ios.jpeg`} />
        <meta name="twitter:title" content="AudiOn | Pro Voice Recorder & Audio Editor for iOS & Android" />
        <meta name="twitter:description" content="AudiOn is the cutting-edge voice recorder app for mobile. Experience lossless recording, powerful noise removal, audio enhancement, and AI transcription." />
        <meta name="twitter:image" content={`${domain}/apps/AudiOn-ios.jpeg`} />
      </Helmet>
      
      <Navbar />

      <main className="overflow-x-clip">
        <Hero />
        <Suspense fallback={null}>
          <div className="[content-visibility:auto] [contain-intrinsic-size:1px_600px]"><AdvancedRecording /></div>
          <div className="[content-visibility:auto] [contain-intrinsic-size:1px_600px]"><AudioEnhancement /></div>
          <div className="[content-visibility:auto] [contain-intrinsic-size:1px_600px]"><EditingTranscription /></div>
          <div className="[content-visibility:auto] [contain-intrinsic-size:1px_600px]"><Newsletter /></div>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
