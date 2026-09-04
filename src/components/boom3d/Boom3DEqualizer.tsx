import { useState } from 'react';
import { motion } from 'motion/react';
import { Box, Radio, Music, Speaker, Activity, Mic2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Sound Fusion inspired – each preset has its own wave DNA (heights for 5 bars)
const PRESET_WAVES: Record<string, number[]> = {
  // Bass Boost – heavy lows
  bass: [95, 55, 25, 45, 85],
  acoustic: [45, 70, 60, 70, 45],
  pop: [35, 85, 50, 90, 30],
  electronic: [80, 30, 95, 30, 80],
  classical: [30, 50, 90, 50, 30],
  vocals: [60, 40, 85, 40, 60],
};

export function Boom3DEqualizer() {
  const { t } = useTranslation();
  const presets = [
    { name: t('boom3d.equalizer.preset_bass'), icon: Box, image: '/boom3D/s1.webp', waveKey: 'bass' },
    { name: t('boom3d.equalizer.preset_acoustic'), icon: Radio, image: '/boom3D/s3.webp', waveKey: 'acoustic' },
    { name: t('boom3d.equalizer.preset_pop'), icon: Music, image: '/boom3D/s4.webp', waveKey: 'pop' },
    { name: t('boom3d.equalizer.preset_electronic'), icon: Speaker, image: '/boom3D/s5.webp', waveKey: 'electronic' },
    { name: t('boom3d.equalizer.preset_classical'), icon: Activity, image: '/boom3D/s6.webp', waveKey: 'classical' },
    { name: t('boom3d.equalizer.preset_vocals'), icon: Mic2, image: '/boom3D/s7.webp', waveKey: 'vocals' },
  ];
  const [activePreset, setActivePreset] = useState(presets[0]);
  const activeWave = PRESET_WAVES[activePreset.waveKey as string] || PRESET_WAVES.bass;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-50/50 via-purple-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Header Section from Image */}
        <div className="text-center max-w-[1000px] mx-auto mb-16 md:mb-20">
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

        {/* Interactive Presets Showcase Deck */}
        <div className="flex flex-col lg:flex-row items-center w-full max-w-[1600px] mx-auto pt-4 md:pt-8 border-t border-gray-100">
          
          {/* Left Side: Card-Type Workflow – image changes as stacked cards (one-by-one) */}
          <div className="order-2 lg:order-1 w-full lg:w-1/2 relative lg:pr-16 xl:pr-24 flex justify-center mt-12 lg:mt-0">
            <div className="relative w-[92%] max-w-[560px] aspect-[16/10] lg:aspect-[4/3]">
              {/* Card deck – each preset is a card, active card on top */}
              <div className="absolute inset-0" style={{ perspective: 1200 }}>
                {presets.map((preset, idx) => {
                  const activeIdx = presets.findIndex(p => p.name === activePreset.name);
                  const offset = idx - activeIdx;
                  const isActive = offset === 0;
                  const absOffset = Math.abs(offset);
                  const zIndex = 20 - absOffset;
                  const scale = isActive ? 1 : 0.88 - absOffset * 0.04;
                  const y = isActive ? 0 : 14 + absOffset * 8;
                  const x = isActive ? 0 : offset * 10;
                  const rotate = isActive ? 0 : offset * -1.5;
                  const opacity = isActive ? 1 : absOffset > 2 ? 0 : 0.55 - absOffset * 0.15;
                  return (
                    <motion.div
                      key={preset.name}
                      className="absolute inset-0 rounded-[24px] lg:rounded-[28px] overflow-hidden bg-black shadow-2xl border border-white/10 cursor-pointer"
                      style={{ zIndex }}
                      initial={false}
                      animate={{
                        x,
                        y,
                        scale,
                        rotateZ: rotate,
                        opacity,
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 32, mass: 0.9 }}
                      onClick={() => setActivePreset(preset)}
                    >
                      <img
                        src={preset.image}
                        alt={`Boom 3D ${preset.name} Preset`}
                        className="w-full h-full object-cover object-center" width={1536} height={1024} loading="lazy"
                      />
                      {/* Card label */}
                      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur text-white text-[11px] font-bold tracking-wide border border-white/20">
                        {preset.name}
                      </div>
                      {/* Active wave overlay only on active card */}
                      {isActive && (
                        <div className="absolute bottom-4 left-4 right-4 h-10 flex items-end justify-center gap-[3px]">
                          {activeWave.map((h, i) => (
                            <motion.div
                              key={`${activePreset.waveKey}-card-${i}`}
                              className="w-[4px] bg-white/90 rounded-full shadow-[0_2px_8px_rgba(59,130,246,0.5)]"
                              initial={{ height: 6 }}
                              animate={{ height: `${h}%` }}
                              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                            />
                          ))}
                        </div>
                      )}
                      {/* Inactive card hint */}
                      {!isActive && absOffset === 1 && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
              {/* Deck shadow / ground */}
              <div className="absolute -bottom-4 left-[8%] right-[8%] h-6 bg-black/20 blur-[16px] rounded-full pointer-events-none" />
            </div>
          </div>
          
          {/* Right Side: Text Content & Pills */}
          <div className="order-1 lg:order-2 w-full lg:w-1/2 px-6 lg:px-12 xl:pr-32 mt-0">
            <motion.div 
              className="max-w-[600px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.h3 
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#111111] leading-[1.15] mb-6"
              >
                {t('boom3d.equalizer.title_1', 'Precise control.')}<br/>
                {t('boom3d.equalizer.title_2', 'Perfect sound.')}
              </motion.h3>
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: 0.1 } } }}
                className="text-lg md:text-[1.1rem] text-gray-500 leading-relaxed font-medium mb-10"
              >
                {t('boom3d.equalizer.subtitle', 'Equipped with an advanced 31-band equalizer for absolute audio tuning. Boom 3D also provides a vast array of presets carefully crafted to match different genres and individual tastes.')}
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
              >
                {presets.map((preset) => {
                  const Icon = preset.icon;
                  const isActive = activePreset.name === preset.name;
                  return (
                    <motion.div 
                      key={preset.name}
                      variants={{ hidden: { opacity: 0, y: 14, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1 } }}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setActivePreset(preset)}
                      className={`relative flex items-center gap-3 px-5 py-3.5 rounded-full cursor-pointer font-semibold shadow-sm overflow-hidden ${
                        isActive 
                          ? 'text-white shadow-blue-500/30 shadow-lg' 
                          : 'bg-white border border-gray-100 text-gray-800 hover:shadow-md'
                      }`}
                    >
                      {/* Fusion active background – morphs between pills (layoutId) */}
                      {isActive && (
                        <motion.div
                          layoutId="fusionActiveBg"
                          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-3">
                        <Icon size={18} className={isActive ? 'text-white' : 'text-blue-600'} />
                        <span className="text-[14px]">{preset.name}</span>
                      </span>
                      {/* Active sparkle */}
                      {isActive && (
                        <motion.span
                          className="absolute right-3 w-1.5 h-1.5 bg-white rounded-full"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: [0, 1.4, 0], opacity: [0, 1, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.8 }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>

            </motion.div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
