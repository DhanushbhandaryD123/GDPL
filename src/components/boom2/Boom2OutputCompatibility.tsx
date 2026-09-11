import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function Boom2OutputCompatibility() {
  const { t } = useTranslation();

  return (
    <section 
      id="boom2-output-compatibility"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto select-none flex flex-col items-center text-center"
      aria-label="Output Compatibility"
    >
      {/* Top Content (Extracted Text from User's Image) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mb-10 md:mb-14"
      >
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-6 text-[#0a0a0f] tracking-tight leading-tight">
          {t('boom2.output_compatibility.title', { defaultValue: 'Perfect for all output devices' })}
        </h2>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
          {t('boom2.output_compatibility.description', { 
            defaultValue: 'Boom 2 is built to provide superior control to all types of audio devices. AirPods and headphones (In / over-ear), speakers (wired / wireless), and more!' 
          })}
        </p>
      </motion.div>

      {/* Main Showcase Image (No Boxes, Pure Natural Device Display) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full max-w-5xl flex items-center justify-center"
      >
        <img
          src="/boom2/output.webp"
          alt="Boom 2 Output Device Compatibility"
          className="w-full max-w-4xl h-auto object-contain drop-shadow-2xl pointer-events-none"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}

export default Boom2OutputCompatibility;
