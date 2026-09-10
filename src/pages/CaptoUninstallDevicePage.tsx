import { Helmet } from 'react-helmet-async';
import { Download, Trash2, ShieldAlert, Mail } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Link } from '../components/layout/LocalizedLink';

export function CaptoUninstallDevicePage() {
  const domain = import.meta.env.VITE_SITE_URL || '';

  const steps = [
    {
      num: '1',
      title: 'Download Uninstaller',
      desc: 'Click the download button below to fetch the official CaptoUninstaller archive.'
    },
    {
      num: '2',
      title: 'Extract Package',
      desc: 'Unzip the downloaded file from your Downloads folder.'
    },
    {
      num: '3',
      title: 'Execute & Finish',
      desc: 'Run the uninstaller script or utility, grant permission, and your system audio drivers will revert to standard.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col selection:bg-rose-50 selection:text-rose-700">
      <Helmet>
        <title>Capto Audio Component - Uninstaller | Global Delight</title>
        <meta
          name="description"
          content="Download the official Capto Audio Component uninstaller to safely remove the device component from your Mac."
        />
        <meta
          name="keywords"
          content="Capto audio uninstaller, uninstall capto device, mac audio driver removal, global delight"
        />
        <link rel="canonical" href={`${domain}/capto/downloads/installers/uninstall-capto-device`} />
        <meta property="og:title" content="Capto Audio Component - Uninstaller | Global Delight" />
        <meta
          property="og:description"
          content="Download the official Capto Audio Component uninstaller to safely remove the device component from your Mac."
        />
        <meta property="og:url" content={`${domain}/capto/downloads/installers/uninstall-capto-device`} />
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
          <span className="text-gray-900 font-medium">Uninstall Audio Component</span>
        </nav>

        {/* Main Card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-6">
            <Trash2 className="w-8 h-8" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldAlert className="w-4 h-4" />
            <span>Driver Removal Utility</span>
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Uninstall Capto Audio Component
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            In order to safely remove the CaptoDevice component and its kernel audio routing from your macOS system, please download and run the uninstaller utility.
          </p>

          {/* Download CTA */}
          <div className="flex flex-col items-center justify-center gap-3 mb-12">
            <a
              href="https://d3jbf8nvvpx3fh.cloudfront.net/device-assets/capto/CaptoUninstaller.zip"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gray-900 hover:bg-black text-white font-semibold text-base shadow-lg shadow-gray-200 transition-all hover:shadow-gray-300 hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5" />
              <span>Download Component Uninstaller</span>
            </a>
            <span className="text-xs text-gray-400 font-medium">
              File: CaptoUninstaller.zip &bull; Safe, clean removal script
            </span>
          </div>

          {/* Steps */}
          <div className="border-t border-gray-100 pt-10 text-left">
            <h2 className="text-lg font-bold text-gray-900 mb-6 text-center sm:text-left">
              Quick Uninstallation Steps:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div key={step.num} className="bg-gray-50/80 p-6 rounded-2xl border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-gray-900 text-white font-bold flex items-center justify-center text-sm mb-3">
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
            <Mail className="w-4 h-4 text-gray-600" />
            <span>Questions or issues? Reach out to </span>
            <a href="mailto:capto@globaldelight.com" className="font-semibold text-gray-900 hover:underline">
              capto@globaldelight.com
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
