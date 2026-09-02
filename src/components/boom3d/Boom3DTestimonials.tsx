import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/* ─── Media press quotes ─────────────────────────────────────────────────── */
const mediaItems = [
  {
    publisher: 'Malavida',
    logoImg: null,
    logoText: 'Malavida',
    logoStyle: 'font-bold text-white text-xl',
    quote:
      'Boom 3D is a very convenient utility that aims to improve the sound coming out of your PC.',
    link: '#',
  },
  {
    publisher: 'iGeeksBlog',
    logoImg: null,
    logoText: 'iGeeksBlog',
    logoStyle: 'font-bold text-white text-xl italic',
    quote:
      'If you are looking to refine, redefine, re-imagine, and refresh your audio experience, Boom 3D is the app to consider!',
    link: '#',
  },
  {
    publisher: 'Forbes',
    logoImg: null,
    logoText: 'Forbes',
    logoStyle: 'font-bold text-white text-3xl',
    quote:
      'Equalizer App For MacBook Pro, MacBook Air Can Make A Big Difference In Sound Quality: Boom 3D.',
    link: '#',
  },
  {
    publisher: '9TO5Mac',
    logoImg: null,
    logoText: '9TO5Mac',
    logoStyle: 'font-bold text-white text-2xl tracking-wider',
    quote:
      'Boom 3D is a popular volume booster and equalizer app for Mac that offers fine-grained control over volume and audio output settings either system-wide or on a per app basis.',
    link: '#',
  },
  {
    publisher: 'HostingAdvice',
    logoImg: null,
    logoText: 'HostingAdvice.com',
    logoStyle: 'font-bold text-white text-lg',
    quote:
      'Boom 3D is the culmination of nearly a decade of innovation in the computer audio space, and it provides listeners with rich, immersive sound experiences.',
    link: '#',
  },
  {
    publisher: 'mac.informer',
    logoImg: null,
    logoText: '⊙mac.informer',
    logoStyle: 'font-semibold text-white/80 text-base tracking-wide',
    quote:
      'From the videos on YouTube, Hulu, your favorite music playing on iTunes, to voice applications like Skype, iChat and your favorite Games, Boom can boost them all. Add to that the ability to boost audio and video files, you have a booming addition to your Mac.',
    link: '#',
  },
  {
    publisher: 'Cult of Mac',
    logoImg: '/boom3D/cultofmac.png',
    logoText: 'Cult of Mac',
    logoStyle: 'font-bold text-white text-xl',
    quote:
      'It\'s a system-wide volume booster and equalizer designed specifically for macOS. It\'s also surprisingly good at squeezing fresh fidelity out of common Mac speakers and headphones.',
    link: '#',
  },
  {
    publisher: 'CISION PR Newswire',
    logoImg: null,
    logoText: 'CISION',
    logoStyle: 'font-black text-white text-2xl tracking-[0.15em] uppercase',
    quote:
      'Boom 3D is an all-new pro audio app that delivers rich and immersive audio with 3D surround sound that makes any headphones sound awesome.',
    link: '#',
  },
];

/* ─── Ratings & Reviews data ─────────────────────────────────────────────── */
const storeRatings = [
  { store: 'Mac Store', score: 4.5 },
  { store: 'Windows Store', score: 4.5 },
];

const userReviews = [
  {
    store: 'Mac App Store',
    reviewer: 'FabioAndretti',
    text: "It was one of my best purchases ever! It's amazing the way it improves the sound quality.",
  },
  {
    store: 'Mac App Store',
    reviewer: 'WhyIHeartAustin',
    text: "I don't rave about a lot of products, but this one deserves it. I use it all day on my iMac. Not only does it provide great sound quality, it also lets me tweak the EQ to my liking.",
  },
  {
    store: 'Mac App Store',
    reviewer: 'Cesarblanco21',
    text: 'Excelente aplicación, pero tengo una Mac m3 y no fluye, frecuentemente se friza la aplicación... te aseguro que si lo arreglan sería perfecta.',
  },
  {
    store: 'Mac App Store',
    reviewer: 'ednico67',
    text: 'This app has brought my 500-watt sound system to life. The sound I get from my four 12-inch speakers is amazing, all thanks to Boom 3D.',
  },
  {
    store: 'Mac App Store',
    reviewer: 'Blngmaster19',
    text: 'I use this on my Mac Mini to listen to music through my stereo - love the granularity of controls that it offers. The sound quality improvement is remarkable.',
  },
  {
    store: 'Microsoft Store',
    reviewer: 'Vijay Daniel',
    text: 'Easy and Good sound effect setup available. Recommended',
  },
  {
    store: 'Microsoft Store',
    reviewer: 'Vaibhav',
    text: 'Best investment on music. Totally transformed my speakers, they are upgraded to 5th generation automatically.',
  },
  {
    store: 'Microsoft Store',
    reviewer: '',
    text: 'idk what you are saying but okie 5 star wait how it pop in my screen',
  },
  {
    store: 'Microsoft Store',
    reviewer: 'Jaspal',
    text: 'AWESOME AWESOME AWESOME AWESOME AWESOME AWESOME AWESOME AWESOME.',
  },
  {
    store: 'Microsoft Store',
    reviewer: 'JAIBHAGWAN',
    text: 'The 3D spatial Sound Experience is Mind Boggling.',
  },
];

/* ─── Types ──────────────────────────────────────────────────────────────── */
type Tab = 'media' | 'ratings';

/* ─── StarRating helper ──────────────────────────────────────────────────── */
function StarRating({ value, size = 18 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={size}
          fill={i <= Math.floor(value) ? '#a855f7' : 'transparent'}
          stroke={i <= Math.floor(value) ? '#a855f7' : '#ffffff30'}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export function Boom3DTestimonials() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<Tab>('media');

  /* Media slider state */
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<'left' | 'right'>('right');
  const [animating, setAnimating] = useState(false);
  const total = mediaItems.length;

  /* Reviews slider state */
  const [reviewPage, setReviewPage] = useState(0);
  const reviewsPerPage = 2;
  const totalReviewPages = Math.ceil(userReviews.length / reviewsPerPage);
  const visibleReviews = userReviews.slice(
    reviewPage * reviewsPerPage,
    reviewPage * reviewsPerPage + reviewsPerPage,
  );

  /* Media navigation */
  const navigate = (next: number, direction: 'left' | 'right') => {
    if (animating) return;
    setDir(direction);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(next);
      setAnimating(false);
    }, 320);
  };
  const goNext = () => navigate((current + 1) % total, 'right');
  const goPrev = () => navigate((current - 1 + total) % total, 'left');

  const item = mediaItems[current];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-10"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, #7c3aed 0%, #db2777 50%, transparent 75%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-4 z-10">

        {/* ── Section heading ── */}
        <div className="text-center mb-10">
         
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1d1d1f] tracking-tighter leading-tight">
            {t('boom3d.testimonials.title', 'Loved by Millions')}
        </h2>
        
        </div>

        {/* ── Tab switcher ── */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-black/5 border border-black/10 rounded-full p-1 gap-1">
            {(['media', 'ratings'] as Tab[]).map(tab => (
              <button
                key={tab}
                id={`boom3d-tab-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`px-7 py-2.5 rounded-full text-[14px] font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-[#7c3aed] to-[#db2777] text-white shadow-lg shadow-purple-900/20'
                    : 'text-[#86868b] hover:text-[#1d1d1f]'
                }`}
              >
                {tab === 'media' ? '📰 Media' : '⭐ Ratings & Reviews'}
              </button>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            MEDIA TAB
        ══════════════════════════════════════════ */}
        {activeTab === 'media' && (
          <div className="relative">
            {/* Keyframes */}
            <style>{`
              @keyframes slide-in-right  { from { opacity:0; transform:translateX(52px);  } to { opacity:1; transform:translateX(0); } }
              @keyframes slide-in-left   { from { opacity:0; transform:translateX(-52px); } to { opacity:1; transform:translateX(0); } }
              @keyframes slide-out-left  { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(-52px); } }
              @keyframes slide-out-right { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(52px);  } }
            `}</style>

            {/* Card */}
            <div
              className="relative rounded-[2rem] overflow-hidden min-h-[300px] md:min-h-[340px] flex items-center"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(124,58,237,0.12)',
                boxShadow: '0 8px 40px rgba(124,58,237,0.08), 0 0 0 1px rgba(124,58,237,0.08)',
              }}
            >
              {/* Inner purple glow */}
              <div
                className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)', filter: 'blur(40px)' }}
              />

              {/* Animated content */}
              <div
                key={current}
                className="relative w-full px-10 md:px-16 py-12 md:py-14 flex flex-col gap-5"
                style={{
                  animation: animating
                    ? `slide-${dir === 'right' ? 'out-left' : 'out-right'} 0.32s ease forwards`
                    : `slide-${dir === 'right' ? 'in-right' : 'in-left'} 0.42s cubic-bezier(0.22,1,0.36,1) forwards`,
                }}
              >
                {/* Opening quote */}
                <span
                  className="text-[80px] leading-none select-none"
                  style={{
                    background: 'linear-gradient(135deg, #a78bfa, #f472b6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: '0.55',
                    display: 'block',
                  }}
                >
                  "
                </span>

                {/* Quote text */}
                <p className="text-[#1d1d1f] text-xl md:text-2xl lg:text-[1.7rem] font-medium leading-relaxed max-w-[820px]">
                  {item.quote}
                </p>

                {/* Footer: publisher logo only */}
                <div className="flex items-center justify-end mt-3">
                  {/* Publisher: image if available, else styled text */}
                  {item.logoImg ? (
                    <img
                      src={item.logoImg}
                      alt={item.publisher}
                      className="h-10 w-auto object-contain"
                      style={{ filter: 'brightness(0)' }} width={202} height={204} loading="lazy"
                    />
                  ) : (
                    <span className={item.logoStyle.replace('text-white', 'text-[#1d1d1f]')}>{item.logoText}</span>
                  )}
                </div>

                {/* Closing quote */}
                <span
                  className="absolute bottom-4 right-10 text-[80px] leading-none select-none"
                  style={{
                    background: 'linear-gradient(135deg, #f472b6, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: '0.55',
                  }}
                >
                  "
                </span>
              </div>
            </div>

            {/* Navigation row */}
            <div className="flex items-center justify-between mt-6 px-2">
              {/* Arrows */}
              <div className="flex items-center gap-3">
                <button
                  id="boom3d-media-prev"
                  onClick={goPrev}
                  aria-label="Previous media quote"
                  className="w-11 h-11 rounded-full border border-black/10 bg-black/5 hover:bg-[#f0ebff] text-[#1d1d1f] flex items-center justify-center transition-all duration-200 hover:border-[#a78bfa]/50 hover:text-[#7c3aed]"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  id="boom3d-media-next"
                  onClick={goNext}
                  aria-label="Next media quote"
                  className="w-11 h-11 rounded-full border border-black/10 bg-black/5 hover:bg-[#f0ebff] text-[#1d1d1f] flex items-center justify-center transition-all duration-200 hover:border-[#a78bfa]/50 hover:text-[#7c3aed]"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {mediaItems.map((_, i) => (
                  <button
                    key={i}
                    id={`boom3d-media-dot-${i}`}
                    onClick={() => navigate(i, i > current ? 'right' : 'left')}
                    aria-label={`Go to quote ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-6 h-2 bg-gradient-to-r from-[#a78bfa] to-[#f472b6]'
                        : 'w-2 h-2 bg-black/15 hover:bg-black/30'
                    }`}
                  />
                ))}
              </div>

              {/* Counter */}
              <span className="text-[#86868b] text-sm font-medium tabular-nums">
                {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════
            RATINGS & REVIEWS TAB
        ══════════════════════════════════════════ */}
        {activeTab === 'ratings' && (
          <div className="flex flex-col gap-8">

            {/* ── Title ── */}
            <h3 className="text-3xl md:text-4xl font-light text-[#1d1d1f] text-center tracking-tight">
              Ratings &amp; Reviews
            </h3>

            {/* ── Main content row ── */}
            <div className="flex flex-col md:flex-row gap-4">

              {/* Left: Store scores */}
              <div
                className="flex flex-col gap-0 rounded-2xl overflow-hidden shrink-0 md:w-[200px]"
                style={{ border: '1px solid rgba(124,58,237,0.12)', background: '#ffffff' }}
              >
                {storeRatings.map((s, i) => (
                  <div
                    key={s.store}
                    className={`flex flex-col items-start px-6 py-6 gap-1 ${
                      i < storeRatings.length - 1 ? 'border-b border-black/10' : ''
                    }`}
                  >
                    <p className="text-[#1d1d1f] text-base font-medium">{s.store}</p>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span
                        className="text-5xl font-bold leading-none"
                        style={{
                          background: 'linear-gradient(135deg, #a855f7, #db2777)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {s.score}
                      </span>
                      <span className="text-[#86868b] text-lg font-medium">/ 5</span>
                    </div>
                    <StarRating value={s.score} size={14} />
                  </div>
                ))}
              </div>

              {/* Right: Review cards */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {visibleReviews.map((review, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-4 p-6 rounded-2xl"
                      style={{
                        background: '#ffffff',
                        border: '1px solid rgba(124,58,237,0.12)',
                      }}
                    >
                      {/* Store label + opening quote */}
                      <div className="flex items-start justify-between">
                        {/* Opening quote mark */}
                        <span
                          className="text-[44px] leading-none select-none"
                          style={{
                            background: 'linear-gradient(135deg, #a78bfa, #f472b6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            lineHeight: '0.7',
                            display: 'block',
                          }}
                        >
                          "
                        </span>
                        <span className="text-[#a78bfa] text-xs font-semibold tracking-wider uppercase">
                          {review.store}
                        </span>
                      </div>

                      {/* Review text */}
                      <p className="text-[#515154] text-[14px] leading-relaxed font-medium text-center flex-1">
                        {review.text}
                      </p>

                      {/* Reviewer name */}
                      <div className="flex flex-col items-center gap-1 mt-2">
                        <div className="w-8 h-px bg-black/15" />
                        <span className="text-[#1d1d1f] text-sm font-semibold tracking-wide">
                          {review.reviewer}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Review navigation arrows */}
                <div className="flex items-center justify-center gap-4 mt-2">
                  <button
                    id="boom3d-reviews-prev"
                    aria-label="Previous reviews"
                    onClick={() => setReviewPage(p => Math.max(0, p - 1))}
                    disabled={reviewPage === 0}
                    className="w-10 h-10 rounded-full border border-black/10 bg-black/5 hover:bg-[#f0ebff] text-[#1d1d1f] hover:text-[#7c3aed] flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    id="boom3d-reviews-next"
                    aria-label="Next reviews"
                    onClick={() => setReviewPage(p => Math.min(totalReviewPages - 1, p + 1))}
                    disabled={reviewPage >= totalReviewPages - 1}
                    className="w-10 h-10 rounded-full border border-black/10 bg-black/5 hover:bg-[#f0ebff] text-[#1d1d1f] hover:text-[#7c3aed] flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
