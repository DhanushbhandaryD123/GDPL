import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Boom2Testimonials() {
  const { t } = useTranslation();

  const reviews = [
    { title: t('boom2.testimonials.r2_title'), text: t('boom2.testimonials.r2_text') }, // Great sound
    { title: t('boom2.testimonials.r3_title'), text: t('boom2.testimonials.r3_text') }, // Best sound ever
    { title: t('boom2.testimonials.r4_title'), text: t('boom2.testimonials.r4_text') }, // Excellent app
    { title: t('boom2.testimonials.r9_title'), text: t('boom2.testimonials.r9_text') }, // Makes music more enjoyable
    
    { title: t('boom2.testimonials.r5_title'), text: t('boom2.testimonials.r5_text') }, // Really works..
    { title: t('boom2.testimonials.r6_title'), text: t('boom2.testimonials.r6_text') }, // Night and day difference
    { title: t('boom2.testimonials.r7_title'), text: t('boom2.testimonials.r7_text') }, // Must-have app
    { title: t('boom2.testimonials.r8_title'), text: t('boom2.testimonials.r8_text') }, // Better than I imagined

    { title: "Great customization.", text: t('boom2.testimonials.r9_text') }, // Using r9 text for Great customization
    { title: t('boom2.testimonials.r10_title'), text: t('boom2.testimonials.r10_text') }, // Elevates your listening
    { title: t('boom2.testimonials.r11_title'), text: t('boom2.testimonials.r11_text') }, // Worth it..
    { title: "Be careful..", text: t('boom2.testimonials.r5_text') }, // Using r5 text for Be careful

    { title: "Be careful..", text: t('boom2.testimonials.r5_text') },
    { title: t('boom2.testimonials.r1_title'), text: t('boom2.testimonials.r1_text') }, // Amazing!
    { title: t('boom2.testimonials.r2_title'), text: t('boom2.testimonials.r2_text') },
    { title: t('boom2.testimonials.r3_title'), text: t('boom2.testimonials.r3_text') },
  ];

  const chunkedReviews = [];
  for (let i = 0; i < reviews.length; i += 4) {
    chunkedReviews.push(reviews.slice(i, i + 4));
  }

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-16 md:py-24 bg-[#060814] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] text-white mb-16 md:mb-24 text-center font-normal tracking-wide">
          Boom 2 User Reviews
        </h2>

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full mb-16 min-h-[300px]">
            {chunkedReviews[activeIndex].map((review, idx) => (
              <div key={idx} className="flex flex-col">
                <h3 className="text-xl md:text-[22px] text-white mb-4 font-medium">
                  {review.title}
                </h3>
                <p className="text-gray-400 leading-[1.7] text-[15px] md:text-[16px]">
                  {review.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-3 justify-center mt-4">
            {chunkedReviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors duration-300 ${
                  activeIndex === idx ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
