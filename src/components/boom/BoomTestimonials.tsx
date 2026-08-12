import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function BoomTestimonials() {
  const { t } = useTranslation();

  const reviews = [
    { title: t('boom.testimonials.r1_title'), text: t('boom.testimonials.r1_text') },
    { title: t('boom.testimonials.r2_title'), text: t('boom.testimonials.r2_text') },
    { title: t('boom.testimonials.r3_title'), text: t('boom.testimonials.r3_text') },
    { title: t('boom.testimonials.r4_title'), text: t('boom.testimonials.r4_text') },
    { title: t('boom.testimonials.r5_title'), text: t('boom.testimonials.r5_text') },
    { title: t('boom.testimonials.r6_title'), text: t('boom.testimonials.r6_text') },
  ];

  return (
    <section className="relative py-16 md:py-28 overflow-hidden bg-white">
      <style>{`
        @keyframes boom-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .boom-marquee { animation: boom-marquee 40s linear infinite; }
        .boom-marquee:hover { animation-play-state: paused; }
      `}</style>

      <div className="max-w-[1200px] mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-5">
          {t('boom.testimonials.title')}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
          {t('boom.testimonials.subtitle')}
        </p>
      </div>

      <div className="relative flex w-full">
        <div className="flex w-max boom-marquee">
          {[...reviews, ...reviews].map((r, idx) => (
            <div key={idx} className="w-[300px] md:w-[380px] shrink-0 px-4">
              <div className="h-full bg-[#f5f5f7] rounded-[2rem] p-8 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 border border-transparent hover:border-black/[0.03]">
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">{r.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[14px] font-medium">"{r.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-y-0 mt-[200px] md:mt-[196px] bottom-16 left-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 mt-[200px] md:mt-[196px] bottom-16 right-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </section>
  );
}
