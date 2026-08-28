import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function UserTestimonials() {
  const { t } = useTranslation();

  const testimonials = [
    { name: 'Sarah J.', role: t('boom_mobile.user_testimonials.u1_role'), text: t('boom_mobile.user_testimonials.u1_text'), rating: 5 },
    { name: 'David M.', role: t('boom_mobile.user_testimonials.u2_role'), text: t('boom_mobile.user_testimonials.u2_text'), rating: 5 },
    { name: 'Alex T.', role: t('boom_mobile.user_testimonials.u3_role'), text: t('boom_mobile.user_testimonials.u3_text'), rating: 5 },
    { name: 'Emily R.', role: t('boom_mobile.user_testimonials.u4_role'), text: t('boom_mobile.user_testimonials.u4_text'), rating: 5 }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', slidesToScroll: 1 });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 md:py-32 bg-[#ffffff] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100 blur-[120px] rounded-full pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 blur-[120px] rounded-full pointer-events-none opacity-60" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            {t('boom_mobile.user_testimonials.title_1')} <span className="text-pink-500">❤️</span> {t('boom_mobile.user_testimonials.title_2')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg md:text-xl font-medium"
          >
            {t('boom_mobile.user_testimonials.subtitle')}
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 py-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white border border-gray-100 p-8 md:p-10 rounded-[2.5rem] h-full flex flex-col hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] shadow-sm hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex gap-1 mb-8 text-[#FDB022]">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 flex-grow font-medium">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-pink-500/30">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 tracking-wide">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm font-medium mt-1">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-6 mt-4">
            <button 
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-14 h-14 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-pink-500 hover:shadow-lg hover:border-pink-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-x-1"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-14 h-14 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-pink-500 hover:shadow-lg hover:border-pink-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:translate-x-1"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
