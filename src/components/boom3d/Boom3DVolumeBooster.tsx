import { useState } from 'react';
import { motion } from 'motion/react';
import { Volume2, Zap, ShieldCheck, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Boom3DVolumeBooster() {
  const { t } = useTranslation();
  const [boostLevel, setBoostLevel] = useState<number>(200); // 100, 150, 200, 300%
  const [isHovered, setIsHovered] = useState(false);

  const boostOptions = [
    { level: 100, label: '100% Standard', db: '+0 dB', desc: 'Default OS level' },
    { level: 150, label: '150% Dynamic', db: '+6 dB', desc: 'Rich acoustic depth' },
    { level: 200, label: '200% Cinema', db: '+12 dB', desc: 'Immense immersion' },
    { level: 300, label: '300% Max Boom', db: '+18 dB', desc: 'Maximum overdrive' },
  ];

  const scaleFactor = 1 + (boostLevel - 100) / 400; // 1.0 to 1.5

  return (
    <section id="boom-volume-booster" className="relative py-20 lg:py-28 overflow-hidden bg-[#0a0a0f] text-white scroll-mt-20 md:scroll-mt-24">
      {/* Background Ambient Glows */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none transition-all duration-700"
        style={{
          background: boostLevel >= 300 
            ? 'radial-gradient(circle, rgba(236,72,153,0.22) 0%, rgba(139,92,246,0.18) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(59,130,246,0.12) 50%, transparent 70%)'
        }}
      />

      <div className="max-w-[1340px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-[850px] mx-auto mb-16 md:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 tracking-wide"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span>{t('boom3d.volume_booster.system_wide_title') || 'Boom Volume Booster'}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
          >
            {t('boom3d.volume_booster.title')}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-base md:text-lg text-gray-400 leading-relaxed max-w-[760px] mx-auto"
          >
            {t('boom3d.volume_booster.subtitle')}
          </motion.p>
        </div>

        {/* Interactive Booster Stage */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Boost Levels & Tech Specs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-[#13131a]/90 backdrop-blur-xl rounded-3xl p-8 border border-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                    <Volume2 size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Amplification Level</h3>
                    <p className="text-xs text-gray-400">Select desired volume boost headroom</p>
                  </div>
                </div>
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-mono">
                  {boostLevel}%
                </span>
              </div>

              {/* Boost Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {boostOptions.map((opt) => (
                  <button
                    key={opt.level}
                    type="button"
                    onClick={() => setBoostLevel(opt.level)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${
                      boostLevel === opt.level
                        ? 'bg-gradient-to-b from-indigo-600/30 to-purple-600/20 border-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.35)]'
                        : 'bg-[#1a1a24]/60 border-white/[0.05] hover:border-white/20 hover:bg-[#1f1f2c]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-bold ${boostLevel === opt.level ? 'text-white' : 'text-gray-300'}`}>
                        {opt.label}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-gray-300 font-semibold">
                        {opt.db}
                      </span>
                    </div>
                    <p className="text-[12px] text-gray-400">{opt.desc}</p>
                  </button>
                ))}
              </div>

              {/* Live Audio Headroom Meter */}
              <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                <div className="flex justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Zap size={13} className="text-yellow-400" /> Dynamic Headroom Gain
                  </span>
                  <span className="font-mono text-gray-300 font-semibold">{boostLevel > 100 ? `+${(boostLevel - 100) / 10} dB` : 'Unity Gain'}</span>
                </div>
                
                {/* Meter Bar */}
                <div className="relative h-3 w-full bg-[#1e1e28] rounded-full overflow-hidden p-0.5 flex items-center">
                  <motion.div 
                    animate={{ width: `${(boostLevel / 300) * 100}%` }}
                    transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                    className={`h-full rounded-full transition-colors duration-500 ${
                      boostLevel >= 300 
                        ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.8)]'
                        : 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]'
                    }`}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-semibold text-gray-500 uppercase tracking-wider pt-1">
                  <span>Standard 100%</span>
                  <span>Enhanced 200%</span>
                  <span className="text-pink-400">Max Boom 300%</span>
                </div>
              </div>

              {/* Protection Badge */}
              <div className="mt-6 flex items-center gap-3 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
                <ShieldCheck size={18} className="shrink-0 text-emerald-400" />
                <span>
                  <strong className="font-semibold text-white">Smart Hardware Limiter:</strong> Safely elevates loudness without clipping, harmonic distortion, or damaging laptop speakers.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Tech Speaker Driver Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-center justify-center relative"
          >
            {/* Speaker Enclosure */}
            <div 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-br from-[#1b1b26] via-[#101018] to-[#0a0a0f] border-4 border-white/[0.08] shadow-[0_30px_90px_rgba(0,0,0,0.8)] flex items-center justify-center"
            >
              {/* Outer Acoustic Shockwaves (Animated pulse rings) */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  animate={{
                    scale: [1, 1.25 + ring * 0.12, 1],
                    opacity: [0.35, 0, 0.35],
                  }}
                  transition={{
                    duration: 2.2 / (boostLevel / 100),
                    repeat: Infinity,
                    delay: ring * 0.4,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 rounded-full border border-purple-500/40 pointer-events-none"
                  style={{
                    boxShadow: boostLevel >= 300 
                      ? '0 0 25px rgba(236,72,153,0.3)' 
                      : '0 0 20px rgba(99,102,241,0.25)'
                  }}
                />
              ))}

              {/* Speaker Cone Suspension Ring */}
              <div className="w-[82%] h-[82%] rounded-full bg-[#12121a] border-2 border-white/[0.05] flex items-center justify-center shadow-inner">
                
                {/* Moving Speaker Driver Cone (Vibrates with boost level) */}
                <motion.div
                  animate={{
                    scale: [scaleFactor * 0.97, scaleFactor * 1.03, scaleFactor * 0.97],
                  }}
                  transition={{
                    duration: isHovered ? 0.3 : 0.8 / (boostLevel / 100),
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-[#1f1f2c] via-[#2a2a3e] to-[#151522] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.7)] flex items-center justify-center relative overflow-hidden"
                >
                  {/* Radial Carbon Weave Grooves */}
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#383850_1px,transparent_1px)] [background-size:8px_8px]" />

                  {/* Glowing Dust Cap (Center) */}
                  <motion.div 
                    animate={{
                      scale: [1, 1.06, 1],
                      boxShadow: boostLevel >= 300 
                        ? ['0 0 20px rgba(236,72,153,0.6)', '0 0 45px rgba(236,72,153,0.9)', '0 0 20px rgba(236,72,153,0.6)']
                        : ['0 0 20px rgba(99,102,241,0.4)', '0 0 35px rgba(99,102,241,0.7)', '0 0 20px rgba(99,102,241,0.4)'],
                    }}
                    transition={{
                      duration: 0.8 / (boostLevel / 100),
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-[#313145] to-[#161622] border-2 border-indigo-400/50 flex flex-col items-center justify-center z-10"
                  >
                    <Volume2 size={32} className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]" />
                    <span className="mt-1 text-xs font-mono font-black text-indigo-200">
                      {boostLevel}%
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-4 px-4 py-1.5 rounded-full bg-[#181822] border border-white/10 shadow-xl flex items-center gap-2 text-xs font-semibold text-gray-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Boom System Engine Active</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Feature Explanation Cards (3-Column Grid) */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-[#13131c]/80 border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
              <Zap size={22} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Patented Overdrive Algorithm</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Pushes acoustic volume up to 300% beyond native operating system limits without causing harsh digital clipping or audio compression artifacts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-[#13131c]/80 border border-white/[0.06] hover:border-purple-500/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck size={22} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Hardware Protection Limiter</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Proprietary dynamic headroom monitoring ensures your MacBook, desktop monitors, or high-end headphones are shielded from speaker cone damage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-[#13131c]/80 border border-white/[0.06] hover:border-pink-500/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
              <Sparkles size={22} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Acoustic Bass Calibration</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Harmonic sub-bass synthesis extracts the deepest lows from thin audio streams, delivering rich tactile warmth even at lower listening levels.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

