import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Camera,
  Video,
  Scissors,
  Share2,
  Sparkles,
  Download,
  ShoppingCart,
  ArrowRight,
  Smartphone,
  FolderKanban,
  FileDown,
  Layers,
  Check
} from 'lucide-react';
import toast from 'react-hot-toast';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Link } from '../components/layout/LocalizedLink';

export function CaptoScreenRecordingPage() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  const [activeTab, setActiveTab] = useState(0);
  const [email, setEmail] = useState('');

  const featurePillars = [
    { title: 'Image Capture', desc: 'Full screen, region, or scrolling web page with 1-click.', icon: Camera },
    { title: 'Screen Recording', desc: 'High-definition 60 FPS recording with system and mic audio.', icon: Video },
    { title: 'Image Editing', desc: 'Add blur, numbers, callout bubbles, and arrows.', icon: Layers },
    { title: 'Video Editing', desc: 'Cut, trim, join, and annotate clips with ease.', icon: Scissors },
    { title: 'Quality Export', desc: 'Save in crisp MP4 and MOV formats ready for sharing.', icon: FileDown },
    { title: 'iOS Recording', desc: 'Record connected iPhone and iPad screens directly.', icon: Smartphone },
    { title: 'File Management', desc: 'Organize assets with smart folders and searchable tags.', icon: FolderKanban },
    { title: 'Easy Sharing', desc: 'Upload directly to YouTube, Dropbox, Google Drive, or Mail.', icon: Share2 }
  ];

  const showcaseTabs = [
    {
      label: 'Make Your Keynotes Amazing',
      headline: 'Flexible Image Capture',
      desc: 'Capture full screen, an entire scrolling webpage, or a specific part of it with an easy click. When you need a screenshot of a menu or a feature for your next presentation, Capto is the app to go to!',
      bullets: ['Full-screen and selected region capture', 'Scrolling web page screenshot engine', 'Timed countdown capture']
    },
    {
      label: 'Make Immersive Instructional Videos',
      headline: 'Intuitive Screen Recording',
      desc: 'Seamlessly record your screen in all its glory with crystal-clear audio. You have the flexibility to record either the full screen or selected area in 60 FPS — the perfect match for your instructional and tutorial videos.',
      bullets: ['Dual system audio and microphone recording', '60 FPS silky-smooth capture', 'Camera webcam picture-in-picture overlay']
    },
    {
      label: 'Create Images that Say It All',
      headline: 'Easy Image Editing & Annotations',
      desc: 'Astutely edit your screenshots for better understanding. Annotate them with sequential step numbers, arrows, and speech callouts, or blur sensitive personal details to make diagrams self-explanatory.',
      bullets: ['Sequential numbering tool', 'Smart blur and privacy masks', 'Custom text banners and arrows']
    },
    {
      label: 'Create Effective Tutorial Videos',
      headline: 'Quick Non-Destructive Video Editing',
      desc: 'Cut, trim, and join your video clips conveniently for the perfect output. Add pointers to highlight important clicks and text callouts to annotate actions with zero quality loss.',
      bullets: ['Multi-clip join and split tool', 'Audio track level fading and muting', 'Keyframe annotations and stickers']
    },
    {
      label: 'Export Images & Videos that are Wow!',
      headline: 'Superior Quality Export',
      desc: 'Drag and drop your images and videos with ease to save them in multiple formats — be it high-res PNG for web or MP4 for your social channels. You can even send files directly to external apps with a single click!',
      bullets: ['Optimized MP4 and MOV video exports', 'Lossless PNG and compressed JPEG', 'Direct 1-click cloud sharing']
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Thank you for subscribing to Capto tips and updates!');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col selection:bg-emerald-50 selection:text-emerald-700">
      <Helmet>
        <title>A Capto-vating Screen Recording and Capturing Experience | Global Delight</title>
        <meta
          name="description"
          content="Effortless screen recording, one-click screen capture, and an intuitive video editing suite. Capto is the ultimate all-in-one Mac screen capture app."
        />
        <meta
          name="keywords"
          content="Capto screen recording, screen capture mac, video editor mac, scrolling screenshot, screen recorder, global delight"
        />
        <link rel="canonical" href={`${domain}/capto/capto-screen-recording`} />
        <meta property="og:title" content="A Capto-vating Screen Recording and Capturing Experience" />
        <meta
          property="og:description"
          content="Effortless screen recording, one-click screen capture, and an intuitive video editing suite."
        />
        <meta property="og:url" content={`${domain}/capto/capto-screen-recording`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* HERO SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>All-In-One Mac Screen Studio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15] mb-6">
              A Capto-vating Screen Recording &amp; Capturing Experience
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-emerald-600 mb-4 tracking-tight">
              Efficient. Powerful. Time-saving.
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Effortless screen recording, one-click screen capture, and an intuitive video editing suite — Capto is the complete, must-have tool for educators, designers, vloggers, and professionals on macOS.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="https://www.globaldelight.com/capto/capto-screen-recording/thank-you/index.php"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base shadow-lg shadow-emerald-200 transition-all hover:shadow-emerald-300 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                <span>Start Free Trial</span>
              </a>

              <a
                href="https://www.globaldelight.com/storefs/upgrade-capto.php?openform=true"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gray-900 hover:bg-black text-white font-semibold text-base shadow-lg shadow-gray-200 transition-all hover:shadow-gray-300 hover:-translate-y-0.5"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Buy Now (Special Offer)</span>
              </a>
            </div>

            <p className="text-xs text-gray-400">
              15-day free trial &bull; macOS 10.12+ compatible &bull; Ready for Apple Silicon &amp; Intel
            </p>
          </div>
        </section>

        {/* 8 FEATURE CARDS GRID */}
        <section className="bg-[#fbfcfe] border-y border-gray-100 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
                Everything You Need in One Screen Suite
              </h2>
              <p className="text-gray-600 text-base">
                Eliminate the need for separate screenshot, recording, and editing apps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featurePillars.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-1.5">{feat.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{feat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* INTERACTIVE TAB SHOWCASE */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
              Capto is What You Were Looking For. Here’s Why.
            </h2>
            <p className="text-gray-600 text-base">
              Explore how Capto accelerates workflows across multiple tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tab navigation pills */}
            <div className="lg:col-span-4 space-y-2">
              {showcaseTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 rounded-xl border text-sm font-semibold transition-all ${
                    activeTab === idx
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900 shadow-sm'
                      : 'bg-white border-gray-100 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{tab.label}</span>
                    {activeTab === idx && <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" />}
                  </div>
                </button>
              ))}
            </div>

            {/* Tab active content card */}
            <div className="lg:col-span-8 bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Workflow Spotlight
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1 mb-4">
                {showcaseTabs[activeTab].headline}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base mb-8">
                {showcaseTabs[activeTab].desc}
              </p>

              <div className="space-y-3 pt-6 border-t border-gray-100 mb-8">
                {showcaseTabs[activeTab].bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.globaldelight.com/storefs/upgrade-capto.php?openform=true"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all"
                >
                  <span>Get Capto Today</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/capto/capto-screen-recording/compare"
                  className="text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  See Comparison &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3-STEP UPGRADE OFFER GUIDE */}
        <section className="bg-gray-50 border-t border-gray-100 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
              How to Avail the Special Offer
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-12 max-w-2xl mx-auto">
              Upgrading from Voila or a previous Boom purchase? Follow these 3 simple steps to unlock your discount.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                {
                  step: '1',
                  title: 'Click Buy Now',
                  desc: 'Head to our secure checkout store to begin your order.'
                },
                {
                  step: '2',
                  title: 'Enter Serial Key',
                  desc: 'Input your existing Voila or Boom registration code to validate the upgrade.'
                },
                {
                  step: '3',
                  title: 'Enjoy Capto',
                  desc: 'Receive your full lifetime Capto license key and start creating.'
                }
              ].map((s) => (
                <div key={s.step} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center text-sm mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{s.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER SIGNUP */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Signup for Capto Tutorials, Tips &amp; Tricks
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto mb-8">
              Stay ahead with masterclasses on screen capture shortcuts, pro video editing techniques, and new feature updates.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
