import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Check, 
  X, 
  Volume2, 
  Headphones, 
  Music, 
  Laptop, 
  Sparkles, 
  ArrowRight, 
  Download, 
  ShoppingCart, 
  ChevronDown,
  SlidersHorizontal,
  Smartphone,
  Speaker
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingSocials } from '../components/layout/FloatingSocials';
import { ScrollToTopButton } from '../components/layout/ScrollToTopButton';

interface FeatureRow {
  name: string;
  description: string;
  boom2: string | boolean;
  boom3d: string | boolean;
  category: 'audio' | 'eq' | 'volume' | 'media' | 'platform';
}

const COMPARISON_FEATURES: FeatureRow[] = [
  // Sound Staging & Audio Core
  {
    name: 'Pristine Stereo Sound',
    description: 'High-fidelity stereo sound reproduction crafted for purest audio dynamics and acoustic precision.',
    boom2: 'Pristine Audiophile Stereo',
    boom3d: 'Full Stereo Staging',
    category: 'audio',
  },
  {
    name: 'Immersive 3D Surround Sound',
    description: 'Patented spatial 3D sound staging algorithm delivering realistic surround sound on any stereo headphones.',
    boom2: false,
    boom3d: 'Yes (with Intensity & Bass)',
    category: 'audio',
  },
  {
    name: 'Stereo Widening',
    description: 'Expands the perceived stereo image soundstage beyond physical speaker or earphone limits.',
    boom2: 'Yes (Advanced Spread)',
    boom3d: false,
    category: 'audio',
  },
  {
    name: 'L - R Audio Balancing',
    description: 'Dedicated Left-to-Right balance control for custom ear-specific sensitivity and monitor tuning.',
    boom2: 'Yes (Dedicated Balancer)',
    boom3d: 'System Native',
    category: 'audio',
  },
  {
    name: 'Sample Rate Control',
    description: 'Adjust and match audio hardware output sample rates for distortion-free playback.',
    boom2: 'Yes',
    boom3d: false,
    category: 'audio',
  },

  // Equalizer & Tuning
  {
    name: 'Advanced 31-Band Equalizer',
    description: 'Surgical frequency adjustment across 31 individual bands for unprecedented acoustic shaping.',
    boom2: '31 Bands (up to 20 dB gain)',
    boom3d: '31 Bands (up to 12 dB gain)',
    category: 'eq',
  },
  {
    name: 'Genre-specific Equalizer Presets',
    description: 'Professionally crafted acoustic profiles calibrated for Rock, Pop, Jazz, Classical, Hip-hop & more.',
    boom2: 'Handcrafted Presets',
    boom3d: 'Presets + 3D Profiles',
    category: 'eq',
  },
  {
    name: 'Audio Effects Suite',
    description: 'Specialized DSP audio effects including Ambience, Fidelity, Night Mode, Spatial, and Pitch.',
    boom2: 'Core Effects',
    boom3d: 'Complete 5-Effect Suite',
    category: 'eq',
  },

  // Volume & Amplification
  {
    name: 'System-wide Volume Booster',
    description: 'Safely boosts audio level beyond standard hardware maximum limits without audio distortion.',
    boom2: 'Yes (macOS only)',
    boom3d: 'Yes (macOS only)',
    category: 'volume',
  },
  {
    name: 'Individual App Volume Controller',
    description: 'Independently adjust the volume of each running application (e.g. games louder, notifications softer).',
    boom2: false,
    boom3d: 'Yes (macOS only)',
    category: 'volume',
  },
  {
    name: 'Individual & Batch File Boosting',
    description: 'Permanently amplify and enhance your audio and video media files in batches for playback on other devices.',
    boom2: 'Yes (Audio & Video Files)',
    boom3d: false,
    category: 'volume',
  },

  // Media & Extra Features
  {
    name: 'Advanced Audio Player',
    description: 'Built-in media player with smooth queue management and direct equalizer integration.',
    boom2: false,
    boom3d: 'Yes (Full Player)',
    category: 'media',
  },
  {
    name: '20,000+ Internet Radio Stations',
    description: 'Free access to global curated radio stations and podcasts across 120 countries directly inside the app.',
    boom2: false,
    boom3d: 'Yes (20,000+ Stations)',
    category: 'media',
  },
  {
    name: 'Boom Remote for iOS',
    description: 'Wirelessly control volume, equalizer presets, and effects from your iPhone or iPad.',
    boom2: 'Yes (macOS)',
    boom3d: 'Yes (macOS)',
    category: 'media',
  },

  // Platform & Hardware
  {
    name: 'macOS Compatibility',
    description: 'Tailored for Mac hardware with native Apple Silicon & Intel architecture support.',
    boom2: 'macOS 10.11 & above',
    boom3d: 'macOS 10.11 & above',
    category: 'platform',
  },
  {
    name: 'Windows Compatibility',
    description: 'Optimized for modern Windows systems with system-wide sound virtualization.',
    boom2: false,
    boom3d: 'Windows 10 & 11',
    category: 'platform',
  },
  {
    name: 'Output Device Compatibility',
    description: 'Optimizes output for built-in speakers, external speakers, gaming headsets, and studio monitors.',
    boom2: 'All Audio Devices',
    boom3d: 'All Audio Devices',
    category: 'platform',
  },
];

const COMMON_FEATURES = [
  {
    title: 'System-wide Audio Control',
    description: 'Takes complete control of your desktop audio output, elevating Spotify, YouTube, Netflix, games, and voice calls with richer sound.',
    icon: Volume2,
  },
  {
    title: 'Advanced 31-Band Equalizer',
    description: 'Gain studio-grade control over every frequency octave. Fine-tune subtle nuances to match your specific acoustic environment.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Volume Booster (macOS)',
    description: 'Push your Mac audio beyond factory speaker limits cleanly and safely, ensuring movies and quiet podcasts are crystal clear.',
    icon: Speaker,
  },
  {
    title: 'Precision Audio Effects',
    description: 'Curated DSP processing filters that enrich treble clarity, vocal depth, and spatial warmth for any style of content.',
    icon: Sparkles,
  },
  {
    title: 'Output Device Compatibility',
    description: 'Seamlessly works across all audio output gear — from built-in laptop speakers to Bluetooth earphones, gaming cans, and USB DACs.',
    icon: Headphones,
  },
  {
    title: 'Boom Remote for iOS',
    description: 'Turn your iPhone or iPad into a wireless remote. Control your volume, adjust equalizers, and trigger playback from across the room.',
    icon: Smartphone,
  },
];

const FAQS = [
  {
    q: 'What is the key fundamental difference between Boom 2 and Boom 3D?',
    a: 'Boom 2 is built specifically for Mac audiophiles and music purists seeking pristine, uncolored stereo sound reproduction, higher 20 dB EQ gain, and offline batch file boosting. Boom 3D is designed for immersive entertainment with patented 3D surround sound for any headphones, individual application volume controls, and 20,000+ internet radio stations.',
  },
  {
    q: 'Does Boom 3D require special surround sound headphones?',
    a: 'No! Boom 3D’s patented spatial staging algorithm works on ANY standard pair of stereo headphones or earphones, transforming regular two-channel audio into a full 360-degree acoustic soundstage.',
  },
  {
    q: 'Can I use Boom on Windows?',
    a: 'Yes, Boom 3D is fully compatible with Windows 10 and Windows 11. Boom 2 is an exclusive macOS application.',
  },
  {
    q: 'Can I try both applications before purchasing?',
    a: 'Absolutely. Both Boom 2 and Boom 3D offer free, full-featured trials so you can experience the acoustic upgrade directly on your own headphones and speakers.',
  },
];

export function BoomComparePage() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFeatures = activeCategory === 'all' 
    ? COMPARISON_FEATURES 
    : COMPARISON_FEATURES.filter(f => f.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Features' },
    { id: 'audio', label: 'Sound Staging' },
    { id: 'eq', label: 'Equalizer & DSP' },
    { id: 'volume', label: 'Volume & Boost' },
    { id: 'media', label: 'Media & Extras' },
    { id: 'platform', label: 'OS & Devices' },
  ];

  const renderValue = (val: string | boolean, isBoom3D = false) => {
    if (typeof val === 'boolean') {
      if (val) {
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Check className="w-3.5 h-3.5 stroke-[2.5]" /> Supported
          </span>
        );
      }
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-400 border border-gray-200">
          <X className="w-3.5 h-3.5 text-gray-400" /> Not Available
        </span>
      );
    }
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
        isBoom3D 
          ? 'bg-purple-50 text-purple-700 border border-purple-200' 
          : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
      }`}>
        <Check className="w-3.5 h-3.5 stroke-[2.5]" /> {val}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-900 font-sans selection:bg-[#4F46E5] selection:text-white">
      <Helmet>
        <title>Boom 2 vs Boom 3D: Feature Comparison | Global Delight</title>
        <meta 
          name="description" 
          content="Compare Boom 2 and Boom 3D features side-by-side. Discover whether pristine stereo sound or immersive 3D surround sound is right for your Mac or Windows listening setup." 
        />
        <meta 
          name="keywords" 
          content="Boom 2 vs Boom 3D, Boom 2 comparison, Boom 3D features, compare Boom equalizer, Mac volume booster comparison, 3D surround sound vs stereo, Global Delight compare" 
        />
        <link rel="canonical" href={`${domain}/boom/boom2-vs-boom3d-compare-features`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Boom 2 vs Boom 3D: Feature Comparison | Global Delight" />
        <meta property="og:description" content="Pristine Stereo Sound or Immersive 3D Surround? Compare features, equalizer capabilities, and OS compatibility to pick your perfect audio suite." />
        <meta property="og:url" content={`${domain}/boom/boom2-vs-boom3d-compare-features`} />
        <meta property="og:image" content={`${domain}/apps/Boom3D-mac.jpeg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boom 2 vs Boom 3D: Feature Comparison" />
        <meta name="twitter:description" content="Discover which Boom is right for you: Boom 2 for pristine stereo sound or Boom 3D for immersive 3D surround." />
        <meta name="twitter:image" content={`${domain}/apps/Boom3D-mac.jpeg`} />
      </Helmet>

      <Navbar />
      <FloatingSocials />
      <ScrollToTopButton />

      <main className="pt-24 md:pt-28 pb-20 overflow-hidden">
        {/* =========================================================================
            1. HERO SECTION
           ========================================================================= */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-6 pb-12 md:pb-16">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-200/40 via-purple-200/30 to-pink-200/30 blur-3xl -z-10 pointer-events-none rounded-full" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100/80 shadow-xs mb-6">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-semibold tracking-wide uppercase text-indigo-900">
              Official Feature Comparison
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 max-w-5xl mx-auto leading-[1.15]">
            Boom 2 <span className="text-gray-400 font-light mx-1">or</span> Boom 3D
          </h1>

          <p className="mt-4 sm:mt-5 text-lg sm:text-xl md:text-2xl font-medium text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Pristine Stereo Sound or Immersive 3D Surround, <span className="text-indigo-600 font-semibold">which one is right for me?</span>
          </p>

          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Find out which audio enhancer matches your headphones, speaker setup, media habits, and operating system.
          </p>

          {/* =========================================================================
              2. SIDE-BY-SIDE PRODUCT SHOWCASE CARDS
             ========================================================================= */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left max-w-5xl mx-auto">
            {/* BOOM 2 CARD */}
            <div className="relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 bg-white border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-3xl" />
              
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <img 
                      src="/boom2/Boom2-icon.png" 
                      alt="Boom 2 Logo" 
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-md object-contain border border-gray-100 p-1 bg-white"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/apps/Boom2-mac.jpeg';
                      }}
                    />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">Pure Fidelity</span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Boom 2</h2>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                    macOS Only
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-3">
                  Boom 2 gives you finer, higher precision control over system audio on your Mac with a cutting-edge <b>31-band equalizer</b> (with 20 dB gain), volume booster, and surgical channel controls for a <b>pristine stereo sound experience</b>.
                </p>

                <div className="mt-6 space-y-2.5 border-t border-gray-100 pt-5 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>31-Band Equalizer with massive <b>20 dB Gain</b></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Batch Audio & Video file boosting for external players</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Stereo Widening, Sample Rate & L-R Channel Balancing</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="/boom2/thankyou/download"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download Trial
                  </a>
                  <a
                    href="https://www.globaldelight.com/store/?product=boom2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-900 hover:bg-black text-white font-medium text-sm transition-colors shadow-sm"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now
                  </a>
                </div>
                <p className="text-center text-[11px] text-gray-400">Available for macOS 10.11 and above</p>
              </div>
            </div>

            {/* BOOM 3D CARD */}
            <div className="relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-purple-50/50 via-white to-white border-2 border-purple-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-t-3xl" />
              <div className="absolute -top-3.5 right-6 px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm">
                Most Popular
              </div>

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <img 
                      src="/boom3D/boomLogo3D.png" 
                      alt="Boom 3D Logo" 
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-md object-contain border border-purple-100 p-1 bg-white"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/apps/Boom3D-mac.jpeg';
                      }}
                    />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">Spatial Immersion</span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Boom 3D</h2>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200">
                    macOS & Windows
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-3">
                  Boom 3D packs a patented <b>3D sound staging algorithm</b> that makes all your movies, music, and games immersive on any headphones. Complete with 31-band EQ, <b>individual app volume controller</b>, and 20K+ radio stations.
                </p>

                <div className="mt-6 space-y-2.5 border-t border-purple-100/70 pt-5 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0" />
                    <span><b>3D Surround Sound</b> with Intensity Adjustment & Bass Boost</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0" />
                    <span><b>Individual App Volume Controller</b> for per-app sliders (macOS)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Built-in Audio Player & <b>20,000+ Internet Radio Stations</b></span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 pt-6 border-t border-purple-100/70 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <a
                    href="/thankyou-download-mac"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-xs sm:text-sm transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Trial (Mac)
                  </a>
                  <a
                    href="/thankyou-download-win"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-medium text-xs sm:text-sm transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Trial (Win)
                  </a>
                  <a
                    href="https://www.globaldelight.com/store/?product=boom3d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-gray-900 hover:bg-black text-white font-medium text-xs sm:text-sm transition-colors shadow-sm"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Buy Now
                  </a>
                </div>
                <p className="text-center text-[11px] text-gray-400">Available for macOS 10.11+ and Windows 10 & 11</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. INTERACTIVE FEATURE MATRIX TABLE
           ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Feature-by-Feature Comparison
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Examine every technical capability side-by-side to find the precise toolset you need.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gray-900 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* TABLE CONTAINER */}
          <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden max-w-5xl mx-auto">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-gray-50/90 border-b border-gray-200 px-4 sm:px-6 py-4 text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider">
              <div className="col-span-6 sm:col-span-6">Feature</div>
              <div className="col-span-3 sm:col-span-3 text-center text-indigo-700">Boom 2</div>
              <div className="col-span-3 sm:col-span-3 text-center text-purple-700">Boom 3D</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-100">
              {filteredFeatures.map((feat, idx) => (
                <div 
                  key={idx} 
                  className="grid grid-cols-12 items-center px-4 sm:px-6 py-4 hover:bg-gray-50/60 transition-colors"
                >
                  <div className="col-span-6 sm:col-span-6 pr-4">
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{feat.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-relaxed hidden sm:block">{feat.description}</div>
                  </div>
                  <div className="col-span-3 sm:col-span-3 text-center">
                    {renderValue(feat.boom2, false)}
                  </div>
                  <div className="col-span-3 sm:col-span-3 text-center">
                    {renderValue(feat.boom3d, true)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. COMMON FEATURES SECTION ("Features Common to Both Apps")
           ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 md:py-16 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/80 rounded-3xl my-8 border border-gray-200/70">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Shared Heritage</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mt-1">
              Features Common to Both Applications
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Whichever version you choose, both Boom 2 and Boom 3D provide industry-leading audio enhancement engineered by Global Delight.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {COMMON_FEATURES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 border border-indigo-100">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            5. "WHERE CAN I USE EACH ONE?" (DECISION GUIDE)
           ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Where can I use each one?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Align your everyday listening routine with the ideal software profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* BOOM 2 USE CASE */}
            <div className="rounded-3xl p-8 bg-white border border-indigo-100 shadow-sm relative overflow-hidden">
              <div className="w-2 h-full bg-indigo-600 absolute left-0 top-0" />
              <div className="flex items-center gap-3 mb-4">
                <Music className="w-6 h-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-900">Boom 2 is best for:</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                Boom 2 is best used with <b>music where accurate, high fidelity sound</b> is preferred. It reveals every tiny detail of a recording, and its higher fidelity 31-band equalizer (with 20 dB gain) can be used to tune audiophile audio monitors or headphones for the purest output. It can also be used with videos and games to get an uncompromising stereo sound experience.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Hi-Fi audiophile stereo music playback</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Batch boosting media files to take on mobile devices</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Mac users desiring 20 dB deep frequency manipulation</span>
                </li>
              </ul>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/boom2/thankyou/download"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs sm:text-sm transition-colors inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download Boom 2
                </a>
                <a
                  href="https://www.globaldelight.com/store/?product=boom2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium text-xs sm:text-sm transition-colors inline-flex items-center gap-2"
                >
                  Buy Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* BOOM 3D USE CASE */}
            <div className="rounded-3xl p-8 bg-white border border-purple-100 shadow-sm relative overflow-hidden">
              <div className="w-2 h-full bg-purple-600 absolute left-0 top-0" />
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">Boom 3D is best for:</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                Boom 3D can be used with <b>any and all types of entertainment</b>, like movies, gaming, and streaming media. It transforms ordinary stereo audio into 3D surround sound for a super-immersive, realistic sound experience on any headphones, offering deeper connection to gaming worlds and cinematic films.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Cinematic 3D surround on Netflix, YouTube & movies</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Competitive gaming audio immersion & directional cues</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Controlling each application volume independently</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Users on both macOS and Windows 10 & 11</span>
                </li>
              </ul>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/thankyou-download-mac"
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-xs sm:text-sm transition-colors inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download Boom 3D
                </a>
                <a
                  href="https://www.globaldelight.com/store/?product=boom3d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium text-xs sm:text-sm transition-colors inline-flex items-center gap-2"
                >
                  Buy Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. OPERATING SYSTEM COMPATIBILITY BANNER
           ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10">
          <div className="rounded-3xl bg-gray-900 text-white p-8 md:p-12 shadow-xl max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Operating System Compatibility
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Check device requirements before installing your trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* BOOM 2 OS */}
              <div className="rounded-2xl bg-gray-800/80 border border-gray-700/60 p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/30">
                  <Laptop className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Boom 2</h3>
                  <div className="mt-2 space-y-1 text-sm text-gray-300">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                      <b>macOS:</b> 10.11 and above
                    </p>
                    <p className="text-xs text-gray-500 pl-4">Intel & Apple Silicon (Rosetta/Native)</p>
                  </div>
                </div>
              </div>

              {/* BOOM 3D OS */}
              <div className="rounded-2xl bg-gray-800/80 border border-gray-700/60 p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30">
                  <Laptop className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Boom 3D</h3>
                  <div className="mt-2 space-y-2 text-sm text-gray-300">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      <b>macOS:</b> 10.11 and above
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      <b>Windows:</b> 10 & 11 (64-bit)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. FAQ SECTION
           ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Clear answers to help you choose the right sound enhancement software.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="rounded-2xl border border-gray-200/90 bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-semibold text-gray-900 text-sm sm:text-base hover:bg-gray-50/70 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-indigo-600' : ''
                    }`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            8. FINAL CONVERSION CTA
           ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-8 pb-12">
          <div className="rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-purple-950 text-white p-8 md:p-14 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                Ready to Experience Next-Level Sound?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-indigo-200">
                Join over 15 million listeners worldwide who elevate their daily audio experience with Global Delight apps.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/thankyou-download-mac"
                  className="px-6 py-3.5 rounded-xl bg-white text-indigo-950 font-bold text-sm hover:bg-indigo-50 transition-all shadow-md inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-indigo-600" />
                  Try Boom 3D Free
                </a>
                <a
                  href="/boom2/thankyou/download"
                  className="px-6 py-3.5 rounded-xl bg-indigo-800/80 hover:bg-indigo-700 text-white font-medium text-sm transition-all border border-indigo-500/30 inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Try Boom 2 Free
                </a>
                <a
                  href="https://www.globaldelight.com/store/?product=boom3d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/10 text-white font-medium text-sm transition-all border border-white/20 inline-flex items-center gap-2"
                >
                  Visit Store <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
export default BoomComparePage;
