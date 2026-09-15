import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function Boom2BoomRemote() {
  const { t } = useTranslation();

  return (
    <section 
      id="boom2-remote-control"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto select-none flex flex-col items-center text-center"
      aria-label="Boom Remote Control"
    >
      {/* Top Main Content (Clean & Focused, No Box) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mb-10 md:mb-14"
      >
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 text-[#0a0a0f] tracking-tight leading-tight">
          {t('boom2.boom_remote.title', { defaultValue: 'Wireless Audio Control with Boom Remote' })}
        </h2>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
          {t('boom2.boom_remote.subtitle', { 
            defaultValue: 'Control Boom 2 on your Mac wirelessly from anywhere in the room using your iPhone or iPad. Adjust volume beyond limits, switch EQ presets, and manage your music without touching your Mac.' 
          })}
        </p>
      </motion.div>

      {/* Main Showcase Video */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full max-w-5xl relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200 bg-black"
      >
        <video
          autoPlay={navigator.userAgent !== 'ReactSnap'}
          loop
          muted
          playsInline
          className="w-full h-auto object-contain"
        >
          <source src="/boom2/audio_equalizer.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
}

export default Boom2BoomRemote;
