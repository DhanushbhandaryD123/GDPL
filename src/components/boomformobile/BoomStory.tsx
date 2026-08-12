import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function BoomStory() {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-[1.1] text-gray-900 tracking-tight">
              {t('boom_mobile.story.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">{t('boom_mobile.story.title_2')}</span> {t('boom_mobile.story.title_3')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              {t('boom_mobile.story.description')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
