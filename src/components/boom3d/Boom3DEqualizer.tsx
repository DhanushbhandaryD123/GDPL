import { motion } from 'motion/react';
import { Sliders, Layers, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { InteractiveAudioSection } from './scroll-equalizer/InteractiveAudioSection';

export function Boom3DEqualizer() {
  const { t } = useTranslation();

  return (
    <section id="equalizer-presets" className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-b from-[#f9fafc] via-white to-[#f4f7fb] scroll-mt-20 md:scroll-mt-24">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-50/50 via-purple-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Header Section from Image */}
        <div className="text-center max-w-[1000px] mx-auto mb-8 md:mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
          >
            {t('boom3d.equalizer.title', '31-Band Equalizer')}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg text-gray-600 leading-relaxed font-normal max-w-[950px] mx-auto"
          >
            {t(
              'boom3d.equalizer.description',
              'Boom 3D for Mac & Windows is outfitted with the most advanced equalizer that allows you to calibrate your audio with just a slide of your finger! It also comes with a range of finely handcrafted equalizer presets for different genres of music so that you can simply tweak the audio, to suit your every mood.'
            )}
          </motion.p>

          {/* 3 Pillars / Feature Columns with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12 md:mt-16 text-center">
            
            {/* Column 1: Sound Sculpting / Music */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col items-center group"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-5 text-gray-800 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
                  {/* Speaker cone */}
                  <path d="M6 17v14h8l11 9V8L14 17H6z" />
                  {/* Music eighth notes */}
                  <path d="M31 11v14.5a3.5 3.5 0 1 1-2.5-3.35V14.5l10-2.3v10.3a3.5 3.5 0 1 1-2.5-3.35V10l-5 1z" />
                </svg>
              </div>
              <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed max-w-[320px]">
                {t(
                  'boom3d.equalizer.feature_sound_desc',
                  'The power of sound sculpting at your fingertips, with complete control to fine-tune your favorite music.'
                )}
              </p>
            </motion.div>

            {/* Column 2: Cinematic Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col items-center group"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-5 text-gray-800 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
                  <path d="M6 8v32h36V8H6zm6 4h4v4h-4v-4zm0 8h4v4h-4v-4zm0 8h4v4h-4v-4zm0 8h4v4h-4v-4zm24-24h4v4h-4v-4zm0 8h4v4h-4v-4zm0 8h4v4h-4v-4zm0 8h4v4h-4v-4zm-8-12l-10-6v20l10-6z" />
                </svg>
              </div>
              <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed max-w-[320px]">
                {t(
                  'boom3d.equalizer.feature_cinematic_desc',
                  'A perfect undistorted cinematic experience with the most cutting-edge equalizer and sound staging algorithm.'
                )}
              </p>
            </motion.div>

            {/* Column 3: Gaming Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col items-center group"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-5 text-gray-800 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
                  <path d="M38 12H10c-5.5 0-9 4.5-9 10v6c0 5 3.5 9 8.5 9 2.5 0 4.8-1 6.5-2.8l2-2.2h12l2 2.2c1.7 1.8 4 2.8 6.5 2.8 5 0 8.5-4 8.5-9v-6c0-5.5-3.5-10-9-10zm-20 15h-3v3a1.5 1.5 0 0 1-3 0v-3H9a1.5 1.5 0 0 1 0-3h3v-3a1.5 1.5 0 0 1 3 0v3h3a1.5 1.5 0 0 1 0 3zm17 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm4-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </div>
              <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed max-w-[320px]">
                {t(
                  'boom3d.equalizer.feature_gaming_desc',
                  'The ultimate gaming experience with noise filtering and precise directional audio.'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full-Width Scroll-Driven Interactive 6-Image Gallery */}
      <InteractiveAudioSection />

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10">

        {/* 3 Precision EQ Breakdown Cards */}
        <div className="mt-6 md:mt-8 pt-6 border-t border-gray-200/80 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-5">
              <Sliders size={22} />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">31 Discrete Frequency Bands</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Fine-tune every audible octave from 20 Hz deep sub-bass to 20 kHz crystal treble air with surgical 0.1 dB gain precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-5">
              <Layers size={22} />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Handcrafted Genre Tunings</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Expertly tuned sound curves designed specifically for Acoustic warmth, Heavy Metal punch, Jazz brass, and Hip-Hop low ends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-5">
              <Sparkles size={22} />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Real-Time Parametric Curves</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Zero-phase distortion algorithms ensure vocal clarity remains untouched while shaping deep lows and shimmering highs.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
