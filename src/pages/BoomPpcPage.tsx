import { Helmet } from 'react-helmet-async';
import {
  Volume2,
  Headphones,
  Sliders,
  Sparkles,
  Film,
  Music,
  Gamepad2,
  Radio,
  Star,
  Check,
  ArrowRight,
  Apple,
  Monitor
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Link } from '../components/layout/LocalizedLink';

export function BoomPpcPage() {
  const domain = import.meta.env.VITE_SITE_URL || '';

  const mediaReviews = [
    {
      outlet: 'Forbes',
      quote: 'Boom 3D is easily the best system-wide equalizer and audio enhancement software for Mac and Windows.',
      rating: 5
    },
    {
      outlet: 'MacInformer',
      quote: 'An outstanding acoustic tool that breathes new life and depth into every movie, track, and game.',
      rating: 5
    },
    {
      outlet: 'iGeeksBlog',
      quote: 'The 3D surround sound experience is truly magical and works effortlessly on any pair of headphones.',
      rating: 5
    }
  ];

  const audioEffects = [
    {
      name: 'Ambience',
      desc: 'Feel the audio swirling all around you, creating a live acoustic space.'
    },
    {
      name: 'Night Mode',
      desc: 'Normalizes dynamic volume, toning down loud explosions while preserving whisper-soft dialogue.'
    },
    {
      name: 'Fidelity',
      desc: 'Revitalizes muted frequencies to restore lost vibrancy and studio-master sparkle.'
    },
    {
      name: 'Spatial',
      desc: 'Places you right in the center of the soundstage with expanded stereo breadth.'
    },
    {
      name: 'Pitch',
      desc: 'Finely tune semitones to match your exact acoustic preference or vocal pitch.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col selection:bg-purple-100 selection:text-purple-700">
      <Helmet>
        <title>Boom 3D - Best Volume Booster and Audio Enhancement App | Global Delight</title>
        <meta
          name="description"
          content="Boom 3D brings an immersive 3D audio experience to your movies, music, games, and more, along with a Volume Booster and an Advanced Equalizer for macOS & Windows 10/11."
        />
        <meta
          name="keywords"
          content="Volume Booster, Bass Booster, 3D Audio, Equalizer, Sound Enhancer, Bass Booster App, Windows Equalizer, Boom 3D, Global Delight"
        />
        <link rel="canonical" href={`${domain}/boom/boom-ppc`} />
        <meta property="og:title" content="Boom 3D - Best Volume Booster and Audio Enhancement App" />
        <meta
          property="og:description"
          content="Transform your sound with patented 3D surround audio, 31-band EQ, and volume boost on Mac & Windows."
        />
        <meta property="og:url" content={`${domain}/boom/boom-ppc`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* HERO SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16 lg:pb-24">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold tracking-wide uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Premier Audio Enhancer for Mac &amp; Windows</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-6">
              Still Listening in 2D? <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Step Into the Sound.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
              What sound should sound like. Boom 3D is an all-in-one audio enhancer designed to play all your media content with incredible 3D surround sound on any headphones, from any player, media, or streaming service.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
              <a
                href="https://www.globaldelight.com/boom3d/download.php?platform=mac"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base shadow-lg shadow-purple-200 transition-all hover:shadow-purple-300 hover:-translate-y-0.5"
              >
                <Apple className="w-5 h-5" />
                <span>Try Free for Mac</span>
              </a>

              <a
                href="https://www.globaldelight.com/boom3d/download.php?platform=win"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gray-900 hover:bg-black text-white font-semibold text-base shadow-lg shadow-gray-200 transition-all hover:shadow-gray-300 hover:-translate-y-0.5"
              >
                <Monitor className="w-5 h-5" />
                <span>Try Free for Windows</span>
              </a>
            </div>

            <p className="text-xs text-gray-400 font-medium">
              30-day full-featured free trial &bull; No credit card required &bull; macOS 10.11+ &amp; Windows 10/11
            </p>
          </div>

          {/* Embedded Video Showcase */}
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-gray-100 bg-black aspect-video relative">
            <iframe
              src="https://www.youtube.com/embed/ojgpNeMckao?rel=0"
              title="Boom 3D Demonstration"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* 3 PILLARS: MOVIES, MUSIC, GAMING */}
        <section className="bg-[#fcfcff] border-y border-gray-100 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                Redefine Everything You Listen To
              </h2>
              <p className="text-gray-600 text-base">
                Whether you are binge-watching shows, mastering tracks, or competing in intense multiplayer lobbies, Boom 3D transforms your acoustic reality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Movies */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                  <Film className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Redefine Your Movies</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Hear cinematic whispers, booming explosions, and atmospheric soundscapes in full 3D spatial fidelity, bringing theatre-grade immersion directly to your screen.
                </p>
              </div>

              {/* Music */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                  <Music className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Refine Your Music</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Unleash every hidden note and subtle instrumental layer with our 31-band equalizer and handcrafted presets engineered by audiophile acoustic designers.
                </p>
              </div>

              {/* Gaming */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reimagine Your Gaming</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pinpoint distant footsteps, reloading sounds, and incoming gunfire with crystal-clear 360-degree positional audio cues for a distinct competitive edge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE FEATURES SECTION */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-4">
                <Headphones className="w-3.5 h-3.5" />
                <span>Patented Surround Technology</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-6">
                Magical 3D Surround Sound on Any Headphones
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Boom 3D’s world-renowned virtual surround technology transports you into a three-dimensional audio sphere. Without needing proprietary expensive hardware or specialized audio monitors, any regular headphones can deliver breathtaking soundstage realism.
              </p>
              <ul className="space-y-3 mb-8">
                {['Works on all wired, USB, and Bluetooth headphones', 'Discrete channel intensity adjustments', 'Customizable virtual speaker positioning'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/boom3D"
                className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-700"
              >
                <span>Discover full 3D audio features</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50/50 p-8 sm:p-12 rounded-3xl border border-purple-100/80">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-6 h-6 text-purple-600" />
                    <span className="font-bold text-gray-900">System Volume Boost</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-green-100 text-green-700 font-bold text-xs">+100% Boost</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Safely and smoothly pushes your computer speakers and headphones beyond normal factory volume limits without clipping or harsh harmonic distortion.
                </p>
                <div className="w-full bg-gray-100 rounded-full h-3 relative overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-500 h-full rounded-full w-4/5" />
                </div>
              </div>
            </div>
          </div>

          {/* EQUALIZER & AUDIO EFFECTS GRID */}
          <div className="border-t border-gray-100 pt-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                Precision 31-Band EQ &amp; Sound Sculpting
              </h2>
              <p className="text-gray-600 text-base">
                Fine-tune every decibel across 31 individual frequencies, or take advantage of our 5 specialized audio effects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm col-span-1 md:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">31-Band Equalizer</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Offers calibrated multi-band control with up to +12dB boost or attenuation per band. Includes one-click presets for Rock, Pop, Jazz, Electronic, Bass Boost, and Vocals.
                </p>
              </div>

              {audioEffects.slice(0, 4).map((fx) => (
                <div key={fx.name} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{fx.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{fx.desc}</p>
                </div>
              ))}

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
                  <Radio className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">20,000+ Internet Radios</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Free access to curated global radio stations from 120+ countries, enhanced with Boom 3D surround sound.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MEDIA REVIEWS / SOCIAL PROOF */}
        <section className="bg-gray-50 border-t border-gray-100 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center tracking-tight mb-12">
              What the Media Says About Boom
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mediaReviews.map((rev) => (
                <div key={rev.outlet} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 italic leading-relaxed mb-6">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>
                  <span className="font-bold text-gray-900 text-sm">{rev.outlet}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CONVERSION CTA STRIP */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-14 shadow-xl shadow-purple-500/5 relative overflow-hidden">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Ready to Experience Sound in 3D?
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Join over 20 million Boomers around the world. Download your 30-day fully featured free trial today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://www.globaldelight.com/boom3d/download.php?platform=mac"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
                >
                  <Apple className="w-4 h-4" />
                  <span>Download for Mac</span>
                </a>
                <a
                  href="https://www.globaldelight.com/boom3d/download.php?platform=win"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gray-900 hover:bg-black text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
                >
                  <Monitor className="w-4 h-4" />
                  <span>Download for Windows</span>
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
