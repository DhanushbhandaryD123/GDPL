import Marquee from 'react-fast-marquee';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function MediaTestimonials() {
  const { t } = useTranslation();

  const mediaReviews = [
    { source: 'ЛАЙФХАКЕР', quote: t('boom_mobile.media_testimonials.m1') },
    { source: 'macitynet.it', quote: t('boom_mobile.media_testimonials.m2') },
    { source: 'The Next Web', quote: t('boom_mobile.media_testimonials.m3') },
    { source: 'Macworld', quote: t('boom_mobile.media_testimonials.m4') }
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 mb-16">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            {t('boom_mobile.media_testimonials.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">{t('boom_mobile.media_testimonials.title_2')}</span>
          </motion.h2>
        </div>
      </div>

      <div className="relative">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <Marquee speed={40} gradient={false} pauseOnHover>
          {mediaReviews.map((review, index) => (
            <div
              key={index}
              className="mx-4 md:mx-6 w-[320px] md:w-[450px] bg-[#F8FAFC] border border-gray-100 p-8 md:p-10 rounded-[2.5rem] flex flex-col h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <Quote className="text-pink-500/20 mb-6 group-hover:text-pink-500/40 transition-colors" size={40} />
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed flex-grow font-medium italic">
                "{review.quote}"
              </p>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 tracking-wider uppercase text-sm">{review.source}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
