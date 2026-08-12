import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Boom2Testimonials() {
  const { t } = useTranslation();

  const reviews = [
    { title: t('boom2.testimonials.r1_title'), text: t('boom2.testimonials.r1_text') },
    { title: t('boom2.testimonials.r2_title'), text: t('boom2.testimonials.r2_text') },
    { title: t('boom2.testimonials.r3_title'), text: t('boom2.testimonials.r3_text') },
    { title: t('boom2.testimonials.r4_title'), text: t('boom2.testimonials.r4_text') },
    { title: t('boom2.testimonials.r5_title'), text: t('boom2.testimonials.r5_text') },
    { title: t('boom2.testimonials.r6_title'), text: t('boom2.testimonials.r6_text') },
    { title: t('boom2.testimonials.r7_title'), text: t('boom2.testimonials.r7_text') },
    { title: t('boom2.testimonials.r8_title'), text: t('boom2.testimonials.r8_text') },
    { title: t('boom2.testimonials.r9_title'), text: t('boom2.testimonials.r9_text') },
    { title: t('boom2.testimonials.r10_title'), text: t('boom2.testimonials.r10_text') },
    { title: t('boom2.testimonials.r11_title'), text: t('boom2.testimonials.r11_text') },
  ];

  const row1 = reviews.slice(0, 6);
  const row2 = reviews.slice(6, 11);

  return (
    <section className="relative py-10 md:py-16 overflow-hidden bg-[#060814]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4F46E5]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B5CF6]/10 blur-[120px] rounded-full pointer-events-none" />

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

      <div className="max-w-[1400px] mx-auto px-4 mb-10 md:mb-16 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          {t('boom2.testimonials.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">{t('boom2.testimonials.title_2')}</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          {t('boom2.testimonials.subtitle')}
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-6 w-full">
        {/* Edge Fades for Seamless Marquee Effect - Moved here to only cover the scrolling area */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-64 bg-gradient-to-r from-[#060814] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-64 bg-gradient-to-l from-[#060814] to-transparent z-20 pointer-events-none" />

        {/* Row 1 - Moving Left */}
        <div className="flex w-max animate-marquee-left pause-on-hover">
          {[...row1, ...row1].map((review, idx) => (
            <div key={idx} className="w-[320px] md:w-[420px] shrink-0 px-3">
              <div className="h-full bg-[#0d0e15] border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-[#13151f] hover:border-white/10 hover:-translate-y-2 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-[#4F46E5]/20">
                <div className="flex items-center gap-1 mb-4 md:mb-6 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <Quote size={28} className="text-[#4F46E5]/40 mb-3 group-hover:text-[#4F46E5] transition-colors duration-300" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                  {review.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-[13px] md:text-[15px]">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex w-max animate-marquee-right pause-on-hover mt-4">
          {[...row2, ...row2].map((review, idx) => (
            <div key={idx} className="w-[320px] md:w-[420px] shrink-0 px-3">
              <div className="h-full bg-[#0d0e15] border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-[#13151f] hover:border-white/10 hover:-translate-y-2 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-[#8B5CF6]/20">
                <div className="flex items-center gap-1 mb-4 md:mb-6 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <Quote size={28} className="text-[#8B5CF6]/40 mb-3 group-hover:text-[#8B5CF6] transition-colors duration-300" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                  {review.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-[13px] md:text-[15px]">
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
