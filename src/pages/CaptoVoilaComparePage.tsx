import { Helmet } from 'react-helmet-async';
import {
  Check,
  X,
  Sparkles,
  Download,
  ShoppingCart,
  ArrowRight
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Link } from '../components/layout/LocalizedLink';

export function CaptoVoilaComparePage() {
  const domain = import.meta.env.VITE_SITE_URL || '';

  const comparisonRows = [
    {
      feature: 'Video Recording',
      capto: 'Real-time tutorial video recording. Re-positioning. Re-sizing.',
      voila: 'No',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Video Editing Suite',
      capto: 'Manipulate Videos (Cut, Crop, Join, Trim), Annotations (Shapes, Arrows, Callouts, Text, Blur), Audio Control (Fade in/Fade out, Adjust/Mute select regions)',
      voila: 'Only Trim',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Dual Audio Editing',
      capto: 'Dual independent control for system audio and microphone input',
      voila: 'No',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Count-down Timer',
      capto: 'Yes (Configurable pre-recording countdown)',
      voila: 'No',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Step Numbering Tool',
      capto: 'Yes (Automated sequential numbers for tutorials)',
      voila: 'No',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Force Touch Support',
      capto: 'Yes (Haptic pressure gestures)',
      voila: 'No',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Highlighter Tool',
      capto: 'Yes (Callout emphasis & spot lighting)',
      voila: 'No',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Floating Window Capture',
      capto: 'Yes (Isolated transparent capture)',
      voila: 'No',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Export Options & Formats',
      capto: 'Export to MP4 & MOV with custom bitrate and resolution presets',
      voila: 'Export to MOV only',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: '4K Resolution Support',
      capto: 'Full 4K and 60 FPS Ultra-HD recording support',
      voila: 'Not supported',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Non-Destructive Editing',
      capto: 'Yes (All annotations and cuts can be modified or reversed at any time)',
      voila: 'Certain features could not be reversed once applied',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Base Image Rotation',
      capto: 'Yes (Arbitrary angle rotation and canvas straightening)',
      voila: 'No',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Independent Web Browser',
      capto: 'Yes (Dedicated web capture engine for scrolling webpages)',
      voila: 'No',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Turn Off Individual Hotkeys',
      capto: 'Yes (Fully re-mappable shortcuts)',
      voila: 'No',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Multiple Annotations in One Session',
      capto: 'Yes (Layered vector annotations)',
      voila: 'No',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Create Empty New Canvas',
      capto: 'Yes (Design cards & graphics from scratch)',
      voila: 'No',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Quick Preview in Capture Tray',
      capto: 'Yes (Instant hover previews for quick sorting)',
      voila: 'No',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Fullscreen Player for Videos',
      capto: 'Yes (Integrated distraction-free theater mode)',
      voila: 'No',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Control Points for Shapes & Arrows',
      capto: 'Yes (Fine curved vector control)',
      voila: 'No',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Supported Email Clients',
      capto: 'Apple Mail, Outlook, Postbox, Airmail, Thunderbird, Airmail 2 & Webmail',
      voila: 'Apple Mail, Entourage, Outlook, Sparrow, Postbox only',
      captoCheck: true,
      voilaCheck: false
    },
    {
      feature: 'Localized Languages',
      capto: 'English, German, French, Spanish, Japanese, Portuguese, Chinese',
      voila: 'English only',
      captoCheck: true,
      voilaCheck: false
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col selection:bg-teal-50 selection:text-teal-700">
      <Helmet>
        <title>Capto vs Voila Feature Comparison | Global Delight</title>
        <meta
          name="description"
          content="Compare Capto and Voila features. Capto is re-engineered with 50+ new features, 1.5x faster performance, 4K recording, and full video editing."
        />
        <meta
          name="keywords"
          content="Capto vs Voila, screen recording comparison, Mac screen capture, video editing, screen recorder, global delight"
        />
        <link rel="canonical" href={`${domain}/capto/capto-screen-recording/compare`} />
        <meta property="og:title" content="Capto vs Voila Feature Comparison | Global Delight" />
        <meta
          property="og:description"
          content="Discover how Capto replaces Voila with 50+ new features, 4K screen recording, and pro video editing."
        />
        <meta property="og:url" content={`${domain}/capto/capto-screen-recording/compare`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/capto" className="hover:text-teal-600 transition-colors">Capto</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Capto vs Voila</span>
        </nav>

        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Generation Upgrade</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            From Voila We Have Moved Onto Capto
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal mb-8 max-w-3xl mx-auto">
            Capto is built completely from scratch and re-engineered with the latest macOS technologies. It adds over 50 new features, performs 1.5x as fast, and offers pro-grade video recording and editing.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.globaldelight.com/capto/capto-screen-recording/thank-you/index.php"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-lg shadow-teal-200 transition-all hover:shadow-teal-300 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Download Free Trial</span>
            </a>

            <a
              href="https://www.globaldelight.com/store?product=capto&upgrade=true"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gray-900 hover:bg-black text-white font-semibold text-sm shadow-lg shadow-gray-200 transition-all hover:shadow-gray-300 hover:-translate-y-0.5"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Upgrade Now (Save up to 50%)</span>
            </a>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/80">
                  <th className="py-6 px-6 sm:px-8 text-sm font-bold text-gray-500 uppercase tracking-wider w-2/5">
                    Feature / Capability
                  </th>
                  <th className="py-6 px-6 sm:px-8 text-center w-3/10 bg-teal-50/60 border-x border-teal-100">
                    <div className="flex flex-col items-center">
                      <span className="text-xl font-black text-teal-900">Capto</span>
                      <span className="text-xs font-semibold text-teal-700 mt-0.5">Recommended</span>
                    </div>
                  </th>
                  <th className="py-6 px-6 sm:px-8 text-center w-3/10">
                    <div className="flex flex-col items-center">
                      <span className="text-xl font-bold text-gray-400">Voila</span>
                      <span className="text-xs text-gray-400 mt-0.5">Legacy Software</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-5 px-6 sm:px-8 text-sm font-semibold text-gray-900">
                      {row.feature}
                    </td>

                    {/* Capto Column */}
                    <td className="py-5 px-6 sm:px-8 text-sm text-gray-800 bg-teal-50/20 border-x border-teal-100/50">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="leading-relaxed font-medium">{row.capto}</span>
                      </div>
                    </td>

                    {/* Voila Column */}
                    <td className="py-5 px-6 sm:px-8 text-sm text-gray-500">
                      <div className="flex items-start gap-3">
                        {row.voilaCheck ? (
                          <div className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3.5 h-3.5" />
                          </div>
                        )}
                        <span className="leading-relaxed">{row.voila}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BOTTOM CALLOUT BOX */}
        <div className="bg-gradient-to-br from-teal-50 via-white to-gray-50 rounded-3xl border border-teal-100 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Already Own Voila or Boom?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            Existing Voila and Boom license holders are eligible for an exclusive discounted upgrade to Capto. Validate your original serial key during checkout to unlock special pricing.
          </p>
          <a
            href="https://www.globaldelight.com/store?product=capto&upgrade=true"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
          >
            <span>Claim Discounted Upgrade</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
