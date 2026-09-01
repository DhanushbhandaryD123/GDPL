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
    <section className="relative py-10 lg:py-16 overflow-hidden bg-[#ffffff]">
      {/* Sound Fusion – subtle morphing gradient blob behind left image (fusion effect) */}
      <motion.div
        className="absolute left-[-10%] top-[20%] w-[600px] h-[400px] rounded-full blur-[80px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, #3b82f6 0%, #8b5cf6 40%, #ec4899 75%, transparent 70%)', opacity: 0.12 }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, 3, 0] }}
        transition={{ duration: 6 + (presets.findIndex(p=>p.name===activePreset.name) * 0.3), repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="flex flex-col lg:flex-row items-center w-full max-w-[1600px] mx-auto">
        
        {/* Left Side: Card-Type Workflow – image changes as stacked cards (one-by-one) */}
        <div className="w-full lg:w-1/2 relative lg:pr-16 xl:pr-24 flex justify-center">
          <div className="relative w-[92%] max-w-[560px] aspect-[16/10] lg:aspect-[4/3]">
            {/* Card deck – each preset is a card, active card on top */}
            <div className="absolute inset-0" style={{ perspective: 1200 }}>
              {presets.map((preset, idx) => {
                const activeIdx = presets.findIndex(p => p.name === activePreset.name);
                const offset = idx - activeIdx;
                const isActive = offset === 0;
                // Card stack workflow: active in center, next cards behind with scale/offset
                const absOffset = Math.abs(offset);
                const zIndex = 20 - absOffset;
                const scale = isActive ? 1 : 0.88 - absOffset * 0.04;
                const y = isActive ? 0 : 14 + absOffset * 8;
                const x = isActive ? 0 : offset * 10; // slight horizontal fan
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
                      className="w-full h-full object-cover object-center"
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
        
        {/* Right Side: Text Content & Pills – staggered one-by-one as in Sound Fusion */}
        <div className="w-full lg:w-1/2 px-6 lg:px-12 xl:pr-32 mt-16 lg:mt-0">
          <motion.div 
            className="max-w-[600px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#111111] leading-[1.1] mb-6"
            >
              {t('boom3d.equalizer.title_1')}<br/>
              {t('boom3d.equalizer.title_2')}
            </motion.h2>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: 0.1 } } }}
              className="text-lg md:text-[1.15rem] text-gray-500 leading-relaxed font-medium mb-10"
            >
              {t('boom3d.equalizer.subtitle')}
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
                    {/* Fusion active background – morphs between pills (layoutId) like Sound Fusion */}
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

            {/* Condition-based hint – shows which app state is active (turn by one) */}
            <motion.p
              key={activePreset.waveKey}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-xs text-gray-400 font-medium"
            >
              ● Active: <span className="text-blue-600 font-semibold">{activePreset.name}</span> — {activePreset.waveKey === 'bass' ? 'Bass boosted fusion' : activePreset.waveKey === 'vocals' ? 'Vocal clarity fusion' : `${activePreset.waveKey} fusion`} • Try the next preset →
            </motion.p>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
