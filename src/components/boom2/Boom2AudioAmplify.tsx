import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function Boom2AudioAmplify() {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 px-4 max-w-[1200px] mx-auto flex flex-col items-center text-center">
      
      {/* Top Content (Text) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mb-12"
      >
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 text-[#0a0a0f] tracking-tight leading-tight">
          {t('boom2.audio_amplify.title')}
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
          {t('boom2.audio_amplify.description')}
        </p>
      </motion.div>

      {/* Bottom Video */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full max-w-5xl relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200 bg-white"
      >
        <video
          autoPlay={navigator.userAgent !== 'ReactSnap'}
          loop
          muted
          playsInline
          className="w-full h-auto object-contain"
        >
          <source src="/boom2/AudioFileBoostBoom2.mp4" type="video/mp4" />
        </video>
      </motion.div>

    </section>
  );
}
