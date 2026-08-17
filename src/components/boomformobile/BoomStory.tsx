import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function BoomStory() {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-100 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:w-2/5 relative"
          >
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1000&auto=format&fit=crop"
                alt="Immersive audio engineering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 blur-2xl opacity-30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="w-full lg:w-3/5 text-left"
          >
            <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 mb-6" />
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
