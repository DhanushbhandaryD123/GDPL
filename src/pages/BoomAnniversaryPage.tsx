import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Play, 
  Award, 
  Users, 
  Globe2, 
  Music2, 
  Laptop, 
  Heart, 
  Star, 
  Quote, 
  Download, 
  ShoppingCart, 
  ArrowRight
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingSocials } from '../components/layout/FloatingSocials';
import { ScrollToTopButton } from '../components/layout/ScrollToTopButton';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  tagline: string;
  avatar: string;
  quote: string;
  device: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'mike',
    name: 'Mike',
    location: 'United States',
    tagline: 'Just be careful — you can never go back!',
    avatar: 'M',
    device: 'MacBook Pro & Hi-Fi Headphones',
    quote: "Once you configure Boom 2 and start using it with a good pair of headphones, you aren’t going back. 'Normal' music audio will just not do anymore. Been using this for years and it really is the best way to tune music to sound enveloping, rich, and truly alive."
  },
  {
    id: 'jj',
    name: 'JJ',
    location: 'United Kingdom',
    tagline: 'This app spoils me completely.',
    avatar: 'J',
    device: 'AirPods Max & MacBook Speakers',
    quote: "I can't live without it. It's perfect. It makes audio sound so much better. Headphones, AirPods, and my MacBook speakers sound so much more rich. I can't put it into words. Thank you, Global Delight Technologies!"
  },
  {
    id: 'startrucker',
    name: 'Startrucker',
    location: 'Germany',
    tagline: 'Top notch sound right from the first listen!',
    avatar: 'S',
    device: 'Desktop Setup & Studio Monitors',
    quote: "I'm only using the trial version but already I love it. The difference in sound quality is awesome, the whole setup process is really simple as are the controls. Once the trial's up I'll certainly be paying!"
  }
];

const PRESS_QUOTES = [
  {
    source: 'Forbes',
    quote: 'Equalizer App For MacBook Pro, MacBook Air Can Make A Big Difference In Sound Quality: Boom 3D.'
  },
  {
    source: 'HostingAdvice',
    quote: 'Global Delight’s Boom 3D App Enhances Audio Capabilities so Mac and Windows Users Can Experience High-Quality Surround Sound.'
  },
  {
    source: 'iGeeksBlog',
    quote: 'If you are looking to refine, redefine, re-imagine, and refresh your audio experience, Boom 3D is the app to consider!'
  },
  {
    source: 'MacInformer',
    quote: 'From YouTube, Netflix, to your favorite music on iTunes and voice calls, Boom can boost them all with unmatched stereo depth.'
  },
  {
    source: 'Malavida',
    quote: 'With a well-designed and straightforward interface, this software delivers an aurally superior experience across all multimedia.'
  }
];

const STATS = [
  { label: 'Total Downloads', value: '20M+', icon: Download, desc: 'Across desktop and mobile app stores' },
  { label: 'Active Listeners', value: '12M+', icon: Users, desc: 'Relying on Boom daily for sound' },
  { label: '5-Star Reviews', value: '20K+', icon: Star, desc: 'Praised by audiophiles and casual listeners' },
  { label: 'Operating Systems', value: '5', icon: Laptop, desc: 'macOS, Windows, iOS, Android & iPadOS' },
  { label: 'Countries Reached', value: '140+', icon: Globe2, desc: 'Global community of music & movie lovers' },
  { label: 'Songs Played / Mo.', value: '6M+', icon: Music2, desc: 'Empowered with immersive 3D surround sound' }
];

const BOOM_FAMILY = [
  {
    name: 'Boom 3D',
    platforms: ['macOS', 'Windows'],
    tagline: 'The Best System-Wide Volume Booster with 3D Surround Sound & 31-Band EQ',
    icon: '/apps/Boom3D-mac.jpeg',
    route: '/boom3D',
    external: false,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    name: 'Boom 2',
    platforms: ['macOS Only'],
    tagline: 'Precision High-Fidelity Audio Booster with 20 dB Equalizer for Mac',
    icon: '/boom2/Boom2-icon.png',
    route: '/boom2',
    external: false,
    color: 'from-blue-600 to-cyan-500'
  },
  {
    name: 'Boom for Mobile',
    platforms: ['iOS', 'Android'],
    tagline: 'The Ultimate Mobile Music Player with Patented 3D Audio & Equalizers',
    icon: '/apps/Boom for iOS.jpeg',
    route: '/boomformobile',
    external: false,
    color: 'from-pink-500 to-rose-600'
  },
  {
    name: 'Boom Remote',
    platforms: ['iOS for Mac'],
    tagline: 'Wirelessly Control Boom 2 or Boom 3D from Anywhere in the Room',
    icon: '/boom2/remote.webp',
    route: 'https://apps.apple.com/app/boom-remote/id989780581',
    external: true,
    color: 'from-amber-500 to-orange-600'
  }
];

export function BoomAnniversaryPage() {
  const domain = import.meta.env.VITE_SITE_URL || 'https://www.globaldelight.com';
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-[#0A0518] text-white font-sans overflow-x-hidden selection:bg-[#2AF5FE] selection:text-black">
      {/* =========================================================================
          SEO HEAD METADATA
         ========================================================================= */}
      <Helmet>
        <title>10 Years of Boom | A Celebration of Sound | Global Delight</title>
        <meta 
          name="description" 
          content="Celebrate 10 years of Boom! Explore the journey of the world's favorite volume booster and 3D audio enhancer, from macOS launch to a global audio phenomenon." 
        />
        <meta 
          name="keywords" 
          content="Boom 10th anniversary, 10 years of Boom, Boom 3D, Boom 2, volume booster history, Mac equalizer, Global Delight celebration" 
        />
        <link rel="canonical" href={`${domain}/boom/10th-anniversary`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Global Delight Technologies" />
        <meta property="og:title" content="10 Years of Boom | A Celebration of Sound!" />
        <meta property="og:description" content="Here’s a look at the journey of Boom from a basic volume booster to an all-in-one audio enhancement suite with 3D Audio and a 31-band Equalizer." />
        <meta property="og:url" content={`${domain}/boom/10th-anniversary`} />
        <meta property="og:image" content={`${domain}/apps/Boom3D-mac.jpeg`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@boomapp" />
        <meta name="twitter:title" content="10 Years of Boom | A Celebration of Sound!" />
        <meta name="twitter:description" content="A decade of pioneering audio enhancement. Thank you to millions of listeners worldwide for being part of the Boom family." />
        <meta name="twitter:image" content={`${domain}/apps/Boom3D-mac.jpeg`} />
      </Helmet>

      <Navbar />
      <FloatingSocials />
      <ScrollToTopButton />

      <main className="pt-24 md:pt-28 pb-20">
        {/* =========================================================================
            1. HERO SECTION: A DECADE OF AUDIO INNOVATION
           ========================================================================= */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16 md:py-20 text-center">
          {/* Ambient Glow Orbs */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-purple-600/30 via-cyan-500/20 to-pink-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-400/30 shadow-lg shadow-cyan-500/10 mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#2AF5FE]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#2AF5FE]">
              10th Anniversary Milestone (2011 – 2021 &amp; Beyond)
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]">
            10 Years of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2AF5FE] via-[#A855F7] to-[#EC4899]">Boom</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-light text-cyan-200/90 max-w-3xl mx-auto">
            A Celebration of Sound. A Decade of Audio Magic.
          </p>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            It’s been ten years since Boom was introduced to the world. We’ve constantly developed features, expanded across desktop and mobile, and ensured that every audio experience has been extraordinary.
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#evolution"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2AF5FE] to-[#3B82F6] text-gray-950 font-bold text-sm sm:text-base hover:brightness-110 transition-all shadow-lg shadow-cyan-500/25"
            >
              <Play className="w-4 h-4 fill-current" />
              Watch the Evolution
            </a>
            <a
              href="#roster"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm sm:text-base transition-colors border border-white/15 backdrop-blur-md"
            >
              Explore the Boom Family
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Hero Mockup Showcase */}
          <div className="mt-14 relative max-w-4xl mx-auto">
            <div className="relative rounded-3xl p-4 sm:p-8 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-center gap-3 sm:gap-6 py-6 sm:py-10">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-2 sm:p-3 mx-auto shadow-xl shadow-cyan-500/20 border border-white/20">
                    <img src="/boom2/Boom2-icon.png" alt="Boom 2" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs font-semibold text-gray-300 mt-2 block">Boom 2</span>
                </div>

                <div className="h-12 w-px bg-white/20" />

                <div className="text-center scale-110 sm:scale-125">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-purple-600 to-pink-500 p-3 sm:p-4 mx-auto shadow-2xl shadow-purple-500/30 border border-white/30 animate-pulse">
                    <img src="/boom3D/boomLogo3D.png" alt="Boom 3D" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#2AF5FE] mt-2.5 block">Boom 3D</span>
                </div>

                <div className="h-12 w-px bg-white/20" />

                <div className="text-center">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-pink-600 to-rose-500 p-2 sm:p-3 mx-auto shadow-xl shadow-pink-500/20 border border-white/20">
                    <img src="/apps/Boom for iOS.jpeg" alt="Boom Mobile" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <span className="text-xs font-semibold text-gray-300 mt-2 block">Boom Mobile</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-cyan-200/80 font-medium text-center">
                Honoring 10 Years of Transforming Desktop &amp; Mobile Audio into Cinematic 3D
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. MILESTONE STATISTICS SECTION ("Interesting Stats")
           ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2AF5FE]">By The Numbers</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Milestones Since Our 2011 Launch
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400">
              Here are some of the remarkable statistics we've achieved together with our worldwide community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="relative group p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1C0D36] to-[#120726] border border-purple-500/20 hover:border-[#2AF5FE]/50 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-[#2AF5FE] flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-semibold text-purple-300/80 uppercase tracking-wider">Milestone</span>
                  </div>

                  <div>
                    <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#2AF5FE]">
                      {stat.value}
                    </div>
                    <h3 className="font-bold text-lg text-white mt-2">{stat.label}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">{stat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            3. "THE EVOLUTION OF BOOM" DOCUMENTARY VIDEO
           ========================================================================= */}
        <section id="evolution" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 md:py-20 scroll-mt-28">
          <div className="rounded-3xl p-6 sm:p-10 md:p-14 bg-gradient-to-b from-[#180931] via-[#100522] to-[#0D041C] border border-purple-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2AF5FE]">Anniversary Documentary</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2">
                The Evolution of Boom
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300">
                Witness how Boom evolved from a pioneering volume booster on Mac into an award-winning 3D surround sound ecosystem.
              </p>
            </div>

            {/* Responsive 16:9 Video Container */}
            <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/i1X30hN1Mco?rel=0"
                title="The Evolution of Boom - 10th Anniversary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. "BOOMERS AROUND THE WORLD" (INTERACTIVE USER STORIES)
           ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 md:py-20">
          <div className="rounded-3xl p-6 sm:p-10 md:p-14 bg-gradient-to-b from-[#1C0D38] to-[#120626] border border-purple-500/20 shadow-xl">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2AF5FE]">Global Community</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                Boomers Around the World
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300">
                Millions of listeners rely on Boom every single day. Here's what they have to say about their sound transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Selector Tabs */}
              <div className="lg:col-span-5 space-y-3">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-200 flex items-center gap-4 ${
                      activeTestimonial === idx
                        ? 'bg-gradient-to-r from-[#2AF5FE]/20 to-purple-600/20 border-2 border-[#2AF5FE] shadow-lg shadow-cyan-500/10'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 ${
                      activeTestimonial === idx
                        ? 'bg-[#2AF5FE] text-gray-950 shadow-md'
                        : 'bg-purple-900/60 text-purple-300 border border-purple-500/30'
                    }`}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">{t.name}</div>
                      <div className="text-xs text-gray-400">{t.location} • {t.device}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Quote Card */}
              <div className="lg:col-span-7">
                <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-purple-950/80 to-[#16082A] border border-purple-400/30 shadow-2xl relative">
                  <Quote className="w-12 h-12 text-[#2AF5FE]/20 absolute top-6 right-6" />

                  <div className="text-xs font-bold uppercase tracking-widest text-[#2AF5FE] mb-2">
                    {TESTIMONIALS[activeTestimonial].device}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    "{TESTIMONIALS[activeTestimonial].tagline}"
                  </h3>

                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed italic">
                    "{TESTIMONIALS[activeTestimonial].quote}"
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">{TESTIMONIALS[activeTestimonial].name}</div>
                      <div className="text-xs text-cyan-300">{TESTIMONIALS[activeTestimonial].location}</div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. "WHAT EVERYONE'S SAYING ABOUT BOOM" (SECONDARY VIDEO)
           ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-10">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2AF5FE]">User Voices</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-1">
              What Everyone's Saying About Boom
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Hear directly from reviewers and creators who transformed their listening setups.
            </p>
          </div>

          <div className="relative w-full pb-[56.25%] rounded-3xl overflow-hidden shadow-2xl border border-purple-500/20 bg-black">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/pgGbXiyDL_A?rel=0"
              title="What everyone is saying about Boom"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* =========================================================================
            6. "IN THE MEDIA" (PRESS ACCLAIM CAROUSEL / GRID)
           ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2AF5FE]">Critical Praise</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              In The Media
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Recognized and endorsed by the world's most trusted technology publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRESS_QUOTES.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all flex flex-col justify-between"
              >
                <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-bold text-white text-base tracking-wide text-[#2AF5FE]">
                    {item.source}
                  </span>
                  <Award className="w-5 h-5 text-purple-400" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            7. "A BIG THANK YOU FROM THE TEAM"
           ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12">
          <div className="rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#24044B] to-[#14022A] border border-purple-500/40 text-center relative overflow-hidden shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center mx-auto mb-6 border border-pink-500/30">
              <Heart className="w-8 h-8 fill-current" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              A Big Thank You From The Team!
            </h2>

            <div className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed space-y-4">
              <p>
                A decade back, when we launched Boom for Mac devices, we could never have imagined that we would come this far. Today, Boom has evolved across desktop and mobile, bringing rich, spatial 3D audio to listeners in over 140 countries.
              </p>
              <p>
                It would never have been possible without the support and love that you showered on us. Thank you for trusting us to enhance your audio experiences over the years and encouraging us to constantly evolve, improve, and innovate.
              </p>
              <p className="font-semibold text-cyan-200 pt-2">
                Warm regards and positive vibes from all of us here at Global Delight!
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. THE CURRENT BOOM FAMILY ROSTER
           ========================================================================= */}
        <section id="roster" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 md:py-20 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2AF5FE]">Current Product Suite</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              The Current Boom Roster
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400">
              Audio enhancement tailored for every operating system, device, and workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {BOOM_FAMILY.map((prod, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-gradient-to-b from-[#1D0C38] to-[#120625] border border-purple-500/20 hover:border-cyan-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 p-2.5 mb-4 border border-white/15">
                    <img 
                      src={prod.icon} 
                      alt={prod.name} 
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {prod.platforms.map((plat, pIdx) => (
                      <span key={pIdx} className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {plat}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{prod.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{prod.tagline}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  {prod.external ? (
                    <a
                      href={prod.route}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#2AF5FE] hover:underline"
                    >
                      Get on App Store &rarr;
                    </a>
                  ) : (
                    <Link
                      to={prod.route}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#2AF5FE] hover:underline"
                    >
                      Learn More &rarr;
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            9. FINAL DOWNLOAD & STORE CONVERSION BANNER
           ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6 pb-12">
          <div className="rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-950 to-cyan-950 text-white p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden border border-cyan-500/30">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                Join The Next Decade of Sound
              </h2>
              <p className="mt-4 text-sm sm:text-base text-cyan-200">
                Experience audio the way it was meant to be heard. Download a free trial of Boom 3D today.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/thankyou-download-mac"
                  className="px-6 py-3.5 rounded-xl bg-[#2AF5FE] hover:bg-cyan-300 text-gray-950 font-bold text-sm transition-all shadow-md inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Try Boom 3D for Mac
                </a>
                <a
                  href="/thankyou-download-win"
                  className="px-6 py-3.5 rounded-xl bg-purple-700 hover:bg-purple-600 text-white font-medium text-sm transition-all border border-purple-400/30 inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Try Boom 3D for Windows
                </a>
                <a
                  href="https://www.globaldelight.com/store/?product=boom3d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/20 inline-flex items-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Visit Store
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
export default BoomAnniversaryPage;
