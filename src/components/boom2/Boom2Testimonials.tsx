import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function Boom2Testimonials() {
  const { t } = useTranslation();

  const reviews = [
    { title: t('boom2.testimonials.r2_title'), text: t('boom2.testimonials.r2_text') },
    { title: t('boom2.testimonials.r3_title'), text: t('boom2.testimonials.r3_text') },
    { title: t('boom2.testimonials.r4_title'), text: t('boom2.testimonials.r4_text') },
    { title: t('boom2.testimonials.r9_title'), text: t('boom2.testimonials.r9_text') },
    
    { title: t('boom2.testimonials.r5_title'), text: t('boom2.testimonials.r5_text') },
    { title: t('boom2.testimonials.r6_title'), text: t('boom2.testimonials.r6_text') },
    { title: t('boom2.testimonials.r7_title'), text: t('boom2.testimonials.r7_text') },
    { title: t('boom2.testimonials.r8_title'), text: t('boom2.testimonials.r8_text') },

    { title: "Great customization.", text: t('boom2.testimonials.r9_text') },
    { title: t('boom2.testimonials.r10_title'), text: t('boom2.testimonials.r10_text') },
    { title: t('boom2.testimonials.r11_title'), text: t('boom2.testimonials.r11_text') },
    { title: "Be careful..", text: t('boom2.testimonials.r5_text') },

    { title: "Be careful..", text: t('boom2.testimonials.r5_text') },
    { title: t('boom2.testimonials.r1_title'), text: t('boom2.testimonials.r1_text') },
    { title: t('boom2.testimonials.r2_title'), text: t('boom2.testimonials.r2_text') },
    { title: t('boom2.testimonials.r3_title'), text: t('boom2.testimonials.r3_text') },
  ];

  // Duplicate the array to create a seamless infinite scrolling effect
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="relative py-16 md:py-24 bg-[#060814] overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] text-white mb-16 md:mb-24 text-center font-normal tracking-wide px-6">
          User Reviews
        </h2>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden flex">
          {/* Fading Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#060814] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#060814] to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-6 md:gap-8 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 80,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedReviews.map((review, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-[280px] md:w-[350px] flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl"
              >
                <h3 className="text-xl md:text-[22px] text-white mb-4 font-medium">
                  {review.title}
                </h3>
                <p className="text-gray-400 leading-[1.7] text-[15px] md:text-[16px]">
                  {review.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
