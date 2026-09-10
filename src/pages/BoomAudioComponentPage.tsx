import { Helmet } from 'react-helmet-async';
import { Download, Volume2, ShieldCheck, CheckCircle, ArrowRight, Laptop, HelpCircle } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Link } from '../components/layout/LocalizedLink';

export function BoomAudioComponentPage() {
  const domain = import.meta.env.VITE_SITE_URL || '';

  const steps = [
    {
      num: '1',
      title: 'Download Component',
      desc: 'Click the download button below to get the official BoomDevice package.'
    },
    {
      num: '2',
      title: 'Unzip & Launch',
      desc: 'Open the downloaded .zip file and double-click the installer package.'
    },
    {
      num: '3',
      title: 'Complete Setup',
      desc: 'Follow the on-screen prompts and restart Boom to enjoy boosted system-wide audio.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col selection:bg-indigo-50 selection:text-indigo-600">
      <Helmet>
        <title>Audio Component for Boom Volume Booster App | Global Delight</title>
        <meta
          name="description"
          content="Download the official Boom audio component to boost your Mac volume beyond 10 and equalize system-wide audio."
        />
        <meta
          name="keywords"
          content="Boom, boost, volume, boost volume of mac, equalize system audio, boom audio component, global delight"
        />
        <link rel="canonical" href={`${domain}/boom/boom-audio-component`} />
        <meta property="og:title" content="Audio Component for Boom Volume Booster App | Global Delight" />
        <meta
          property="og:description"
          content="Download the official Boom audio component to boost your Mac volume beyond 10 and equalize system-wide audio."
        />
        <meta property="og:url" content={`${domain}/boom/boom-audio-component`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/boom" className="hover:text-indigo-600 transition-colors">Boom</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Audio Component</span>
        </nav>

        {/* Hero Card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative overflow-hidden">
          {/* Subtle decorative background circle */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide uppercase mb-6">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Official System Component</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6">
              Boom Audio Component
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal mb-8">
              To boost the volume of your Mac and equalize system audio beyond standard limitations, you need the official Boom Audio Component installed on your system.
            </p>

            {/* Download CTA block */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 bg-[#fbfbfe] border border-indigo-50 rounded-2xl mb-10">
              <a
                href="https://www.globaldelight.com/boom/BoomDevice.pkg.zip"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base shadow-lg shadow-indigo-200 transition-all hover:shadow-indigo-300 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                <span>Download Audio Component</span>
              </a>

              <div className="text-sm text-gray-500">
                <div className="font-medium text-gray-800 flex items-center gap-1.5">
                  <Laptop className="w-4 h-4 text-indigo-600" />
                  <span>macOS 10.7 &amp; 10.8 Compatible</span>
                </div>
                <span className="text-xs text-gray-400">Package Size: 287 KB &bull; Direct Zip Archive</span>
              </div>
            </div>

            {/* Quick installation steps */}
            <div className="border-t border-gray-100 pt-10">
              <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-600" />
                Easy 3-Step Installation
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps.map((step) => (
                  <div key={step.num} className="bg-gray-50/70 p-5 rounded-2xl border border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center text-sm mb-3">
                      {step.num}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{step.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info / Support Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-indigo-600 mb-4 shadow-sm">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Looking for the latest Boom 3D?</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Experience revolutionary 3D surround sound, a 31-band equalizer, app volume control, and audio effects for current macOS and Windows versions.
              </p>
            </div>
            <Link
              to="/boom3D"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              <span>Explore Boom 3D</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-indigo-600 mb-4 shadow-sm">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Need Technical Assistance?</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Have questions regarding component installation or audio drivers? Our support team is ready to assist you.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
