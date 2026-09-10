import { Helmet } from 'react-helmet-async';
import { Download, Volume2, ShieldCheck, Mail } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Link } from '../components/layout/LocalizedLink';

export function CaptoInstallDevicePage() {
  const domain = import.meta.env.VITE_SITE_URL || '';

  const steps = [
    {
      num: '1',
      title: 'Download Component',
      desc: 'Click the download button below to get the official Capto Audio Component zip package.'
    },
    {
      num: '2',
      title: 'Unzip Archive',
      desc: 'Open your Downloads folder and extract the CaptoDevice.zip archive.'
    },
    {
      num: '3',
      title: 'Run Installer',
      desc: 'Double-click the installer file, follow prompts, and restart Capto to enable internal system audio capture.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col selection:bg-teal-50 selection:text-teal-700">
      <Helmet>
        <title>Capto Audio Component - Installer | Global Delight</title>
        <meta
          name="description"
          content="Download and install the Capto Audio Component to enable computer audio recording in Capto on your Mac."
        />
        <meta
          name="keywords"
          content="Capto audio component installer, Capto device driver, mac audio capture, screen recording audio, global delight"
        />
        <link rel="canonical" href={`${domain}/capto/downloads/installers/install-capto-device`} />
        <meta property="og:title" content="Capto Audio Component - Installer | Global Delight" />
        <meta
          property="og:description"
          content="Download and install the Capto Audio Component to record computer audio on your Mac."
        />
        <meta property="og:url" content={`${domain}/capto/downloads/installers/install-capto-device`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/capto" className="hover:text-teal-600 transition-colors">Capto</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Install Audio Component</span>
        </nav>

        {/* Main Card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto mb-6">
            <Volume2 className="w-8 h-8" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>macOS Driver Component</span>
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Capto Audio Component
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            To record internal computer audio (system sounds, video playback, webinars, and apps), Capto requires the official ‘Capto Audio Component’ installed on your system.
          </p>

          {/* Download CTA */}
          <div className="flex flex-col items-center justify-center gap-3 mb-12">
            <a
              href="https://d3jbf8nvvpx3fh.cloudfront.net/device-assets/capto/CaptoDevice.zip"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base shadow-lg shadow-teal-200 transition-all hover:shadow-teal-300 hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5" />
              <span>Download Audio Component</span>
            </a>
            <span className="text-xs text-gray-400 font-medium">
              File: CaptoDevice.zip &bull; Official signed package for macOS
            </span>
          </div>

          {/* Steps */}
          <div className="border-t border-gray-100 pt-10 text-left">
            <h2 className="text-lg font-bold text-gray-900 mb-6 text-center sm:text-left">
              Follow these quick steps to get started:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div key={step.num} className="bg-gray-50/80 p-6 rounded-2xl border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-teal-600 text-white font-bold flex items-center justify-center text-sm mb-3">
                    {step.num}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1.5">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Support footnote */}
          <div className="border-t border-gray-100 mt-12 pt-8 flex items-center justify-center gap-2 text-xs text-gray-500">
            <Mail className="w-4 h-4 text-teal-600" />
            <span>Need assistance? Contact us at </span>
            <a href="mailto:capto@globaldelight.com" className="font-semibold text-teal-600 hover:underline">
              capto@globaldelight.com
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
