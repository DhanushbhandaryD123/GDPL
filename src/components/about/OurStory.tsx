import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function OurStory() {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-[#ffffff] py-4 md:py-0 px-2 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 lg:gap-24">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-0">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-sm font-bold tracking-[0.15em] text-gray-400 uppercase mb-2 md:mb-4"
          >
          
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold text-gray-900 leading-[1.2] md:leading-[1.1] mb-4 md:mb-8"
          >
            {t('about.story.title_1')}<br />
            {t('about.story.title_2')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-[1px] w-[60%] max-w-[300px] bg-gray-300 mb-6 md:mb-8 origin-center md:origin-left"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 md:space-y-6 mb-6 md:mb-10 pl-0 lg:pl-8"
          >
            <p>
              {t('about.story.p1')}
            </p>
            <p>
              {t('about.story.p2')}
            </p>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 px-4 md:px-0"
        >
          <img 
            src="/team/P1.webp" 
            alt="Global Delight Office and Team" 
            className="w-full h-auto rounded-2xl md:rounded-[2rem] object-cover shadow-xl" width={1672} height={941} loading="lazy"
          />
        </motion.div>
        
      </div>
    </section>
  );
}
