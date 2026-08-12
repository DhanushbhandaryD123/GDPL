import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Boom3DTestimonials() {
  const { t } = useTranslation();

  const reviews = [
    { title: t('boom3d.testimonials.r1_title'), text: t('boom3d.testimonials.r1_text') },
    { title: t('boom3d.testimonials.r2_title'), text: t('boom3d.testimonials.r2_text') },
    { title: t('boom3d.testimonials.r3_title'), text: t('boom3d.testimonials.r3_text') },
    { title: t('boom3d.testimonials.r4_title'), text: t('boom3d.testimonials.r4_text') },
    { title: t('boom3d.testimonials.r5_title'), text: t('boom3d.testimonials.r5_text') },
    { title: t('boom3d.testimonials.r6_title'), text: t('boom3d.testimonials.r6_text') },
    { title: t('boom3d.testimonials.r7_title'), text: t('boom3d.testimonials.r7_text') },
    { title: t('boom3d.testimonials.r8_title'), text: t('boom3d.testimonials.r8_text') },
    { title: t('boom3d.testimonials.r9_title'), text: t('boom3d.testimonials.r9_text') },
    { title: t('boom3d.testimonials.r10_title'), text: t('boom3d.testimonials.r10_text') },
    { title: t('boom3d.testimonials.r11_title'), text: t('boom3d.testimonials.r11_text') },
  ];

  const row1 = reviews.slice(0, 6);
  const row2 = reviews.slice(6, 11);

  return (
    <section className="relative pt-16 md:pt-32 pb-16 overflow-hidden bg-white">

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 50s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 45s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-4 mb-24 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tighter">
          {t('boom3d.testimonials.title')}
        </h2>
        <p className="text-[#86868b] text-lg md:text-xl max-w-2xl mx-auto font-medium">
          {t('boom3d.testimonials.subtitle')}
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-8 w-full">
        {/* Edge Fades for Seamless Marquee Effect - Moved here to only cover the scrolling area */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-64 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-64 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* Row 1 - Moving Left */}
        <div className="flex w-max animate-marquee-left pause-on-hover">
          {[...row1, ...row1].map((review, idx) => (
            <div key={idx} className="w-[320px] md:w-[420px] shrink-0 px-4">
              <div className="h-full bg-[#f5f5f7] rounded-[2rem] p-10 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer border border-transparent hover:border-black/[0.02]">
                <div className="flex items-center gap-1 mb-8 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
                  {review.title}
                </h3>
                <p className="text-[#86868b] leading-relaxed text-[15px] font-medium">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex w-max animate-marquee-right pause-on-hover">
          {[...row2, ...row2].map((review, idx) => (
            <div key={idx} className="w-[320px] md:w-[420px] shrink-0 px-4">
              <div className="h-full bg-[#f5f5f7] rounded-[2rem] p-10 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer border border-transparent hover:border-black/[0.02]">
                <div className="flex items-center gap-1 mb-8 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
                  {review.title}
                </h3>
                <p className="text-[#86868b] leading-relaxed text-[15px] font-medium">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
