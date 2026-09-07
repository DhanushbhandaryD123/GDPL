import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EarOff, SkipForward, Sliders, CheckCircle2, Volume2, ShieldCheck, Activity, FastForward } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function AudioEnhancement() {
  const { t } = useTranslation();

  const enhancements = [
    {
      id: 'noise',
      tag: 'Voice Isolation',
      title: t('audion.enhancement.noise_title'),
      icon: EarOff,
      description: t('audion.enhancement.noise_desc'),
      metric: '-28 dB Ambient Noise',
      benefit: 'Eliminates background chatter, AC hum, and traffic',
    },
    {
      id: 'silence',
      tag: 'Smart Trim',
      title: t('audion.enhancement.silence_title'),
      icon: SkipForward,
      description: t('audion.enhancement.silence_desc'),
      metric: '38% Time Saved',
      benefit: 'Instantly skips dead air without cutting natural speech',
    },
    {
      id: 'eq',
      tag: 'Studio EQ & Reverb',
      title: t('audion.enhancement.eq_title'),
      icon: Sliders,
      description: t('audion.enhancement.eq_desc'),
      metric: '6-Band Pro Equalizer',
      benefit: 'Brings warmth, presence, and studio acoustics',
    },
  ];

  const [activeTab, setActiveTab] = useState(enhancements[0].id);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through enhancement features every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        const nextIndex = (enhancements.findIndex((e) => e.id === prev) + 1) % enhancements.length;
        return enhancements[nextIndex].id;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, enhancements.length]);

  const activeData = enhancements.find((e) => e.id === activeTab) || enhancements[0];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Soft ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-100/50 via-fuchsia-100/40 to-pink-100/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4"
          >
            {t('audion.enhancement.title_1')}{' '}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600">
              {t('audion.enhancement.title_2')}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal"
          >
            {t('audion.enhancement.subtitle')}
          </motion.p>
        </div>

        {/* Main Content: 2-Column Responsive Layout */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Column: Interactive Feature Selection Cards (Top on Mobile) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 order-1 lg:order-1">
            {enhancements.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl md:rounded-3xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-50/90 via-fuchsia-50/40 to-white border-purple-300/80 shadow-lg shadow-purple-100/70 ring-1 ring-purple-500/20'
                      : 'bg-gray-50/70 hover:bg-gray-100/80 border-gray-200/70 text-gray-600'
                  }`}
                >
                  {/* Active progress countdown line */}
                  {isActive && !isPaused && (
                    <motion.div
                      key={activeTab}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 5, ease: 'linear' }}
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 origin-left"
                    />
                  )}

                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-sm ${
                        isActive
                          ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-purple-200'
                          : 'bg-white text-gray-500 border border-gray-200/80 group-hover:text-purple-600'
                      }`}
                    >
                      <item.icon size={22} strokeWidth={2.2} />
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-bold uppercase tracking-wider ${
                            isActive ? 'text-purple-600' : 'text-gray-400'
                          }`}
                        >
                          {item.tag}
                        </span>
                        {isActive && (
                          <span className="text-[11px] font-medium text-purple-600 bg-purple-100/70 px-2 py-0.5 rounded-full">
                            Active
                          </span>
                        )}
                      </div>

                      <h3
                        className={`text-lg sm:text-xl font-bold transition-colors ${
                          isActive ? 'text-gray-900' : 'text-gray-700'
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="pt-2 flex items-center gap-2 text-xs font-semibold text-purple-700"
                        >
                          <CheckCircle2 size={14} className="text-purple-600 shrink-0" />
                          <span>{item.benefit}</span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: High-Tech Studio Audio Enhancement Console (Below Buttons on Mobile) */}
          <div className="lg:col-span-7 order-2 lg:order-2">
            <div className="relative rounded-3xl md:rounded-[2.5rem] bg-gradient-to-b from-[#18122B] via-[#120D22] to-[#0A0716] border border-white/10 shadow-2xl shadow-purple-950/40 p-6 sm:p-8 md:p-10 text-white overflow-hidden">
              {/* Subtle ambient lighting inside console */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

              {/* Console Top Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
                  <span className="text-xs font-mono uppercase tracking-widest text-gray-300">
                    AudiOn DSP Engine v4.2
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-purple-200 backdrop-blur-md">
                  {activeData.metric}
                </div>
              </div>

              {/* Dynamic Console Visualizer State */}
              <AnimatePresence mode="wait">
                {activeTab === 'noise' && (
                  <motion.div
                    key="noise-mode"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6 relative z-10"
                  >
                    {/* Raw Input Waveform (with noise spikes) */}
                    <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Activity size={13} className="text-amber-400" />
                          Raw Recording (Ambient Hum & Chatter)
                        </span>
                        <span className="text-amber-400/90 font-mono">+6.2 dB Noise</span>
                      </div>
                      <div className="h-10 flex items-center justify-between gap-1 overflow-hidden">
                        {[40, 65, 85, 30, 95, 70, 45, 90, 80, 60, 95, 35, 75, 88, 55, 92, 40, 78, 90, 62, 85, 45, 70, 95, 60, 40, 85, 75, 50, 90].map((h, i) => (
                          <motion.span
                            key={i}
                            animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.5}%`] }}
                            transition={{ duration: 1.1 + (i % 5) * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-1 rounded-full bg-amber-400/40"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Isolated Speech Waveform (Pure, Clean) */}
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-900/30 via-fuchsia-900/20 to-pink-900/30 border border-purple-500/30 space-y-2.5 shadow-inner">
                      <div className="flex items-center justify-between text-xs text-purple-200 font-medium">
                        <span className="flex items-center gap-1.5 text-white font-semibold">
                          <ShieldCheck size={14} className="text-emerald-400" />
                          Isolated Voice Output (Clean Vocal Profile)
                        </span>
                        <span className="text-emerald-400 font-mono font-bold">100% Speech Clarity</span>
                      </div>
                      <div className="h-14 flex items-center justify-between gap-1 overflow-hidden">
                        {[20, 45, 75, 95, 80, 50, 20, 10, 65, 90, 100, 85, 60, 25, 15, 70, 95, 85, 40, 15, 80, 100, 90, 65, 30, 15, 60, 90, 75, 30].map((h, i) => (
                          <motion.span
                            key={i}
                            animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] }}
                            transition={{ duration: 1.3 + (i % 6) * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-1.5 rounded-full bg-gradient-to-t from-purple-500 via-fuchsia-400 to-pink-400 shadow-sm shadow-purple-500/50"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Denoise status stats */}
                    <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-gray-400">Noise Cut</p>
                        <p className="font-bold text-white text-sm mt-0.5">-28.4 dB</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-gray-400">Latency</p>
                        <p className="font-bold text-emerald-400 text-sm mt-0.5">&lt; 1.2 ms</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-gray-400">Voice Gate</p>
                        <p className="font-bold text-purple-300 text-sm mt-0.5">Adaptive</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'silence' && (
                  <motion.div
                    key="silence-mode"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6 relative z-10"
                  >
                    {/* Audio Timeline with Auto-Skip Display */}
                    <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-300 font-medium flex items-center gap-1.5">
                          <FastForward size={14} className="text-purple-400" />
                          Smart Silence Detection Timeline
                        </span>
                        <span className="text-purple-300 font-mono">Auto-Skipping Dead Air</span>
                      </div>

                      {/* Multi-segment audio bar with trimmed gaps */}
                      <div className="relative h-12 bg-black/40 rounded-xl border border-white/10 overflow-hidden flex items-center p-2 gap-1.5">
                        {/* Speech Block 1 */}
                        <div className="h-full flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                          Speech (00:00 - 01:14)
                        </div>
                        {/* Silence Gap 1 */}
                        <div className="h-full w-14 bg-red-500/20 border border-dashed border-red-400/40 rounded-lg flex items-center justify-center text-[9px] font-mono text-red-300">
                          Skip 8s
                        </div>
                        {/* Speech Block 2 */}
                        <div className="h-full flex-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                          Speech (01:22 - 02:45)
                        </div>
                        {/* Silence Gap 2 */}
                        <div className="h-full w-12 bg-red-500/20 border border-dashed border-red-400/40 rounded-lg flex items-center justify-center text-[9px] font-mono text-red-300">
                          Skip 6s
                        </div>
                        {/* Speech Block 3 */}
                        <div className="h-full flex-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                          Speech (02:51+)
                        </div>

                        {/* Animated Scanning Playhead */}
                        <motion.div
                          animate={{ left: ['0%', '100%'] }}
                          transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg shadow-white"
                        />
                      </div>
                    </div>

                    {/* Silence skipping metrics */}
                    <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-gray-400">Total Pauses</p>
                        <p className="font-bold text-white text-sm mt-0.5">18 Skipped</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-gray-400">Time Saved</p>
                        <p className="font-bold text-emerald-400 text-sm mt-0.5">38% Faster</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-gray-400">Threshold</p>
                        <p className="font-bold text-purple-300 text-sm mt-0.5">-42 dB</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'eq' && (
                  <motion.div
                    key="eq-mode"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6 relative z-10"
                  >
                    {/* 6-Band Studio Graphic Equalizer Faders */}
                    <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-300 font-medium flex items-center gap-1.5">
                          <Volume2 size={14} className="text-pink-400" />
                          6-Band Pro Graphic Equalizer
                        </span>
                        <span className="text-pink-300 font-mono">Studio Vocal Preset</span>
                      </div>

                      {/* Fader sliders with frequency values */}
                      <div className="flex items-end justify-between gap-3 h-28 pt-2 px-3">
                        {[
                          { freq: '60Hz', gain: '+2.0', h: 55 },
                          { freq: '250Hz', gain: '-1.5', h: 42 },
                          { freq: '1kHz', gain: '+4.5', h: 80 },
                          { freq: '3kHz', gain: '+6.0', h: 92 },
                          { freq: '8kHz', gain: '+3.0', h: 68 },
                          { freq: '16kHz', gain: '+1.0', h: 50 },
                        ].map((band, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                            <span className="text-[10px] font-mono text-purple-300">{band.gain}</span>
                            <div className="w-full max-w-[18px] bg-white/10 rounded-full h-full relative flex items-end p-0.5">
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${band.h}%` }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}
                                className="w-full rounded-full bg-gradient-to-t from-purple-500 to-pink-500 shadow-sm shadow-pink-500/50"
                              />
                            </div>
                            <span className="text-[10px] font-mono text-gray-400">{band.freq}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Room Reverb & Acoustics Stats */}
                    <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-gray-400">Reverb Space</p>
                        <p className="font-bold text-white text-sm mt-0.5">Warm Studio</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-gray-400">Presence</p>
                        <p className="font-bold text-pink-400 text-sm mt-0.5">+4.5 dB</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-gray-400">Harmonics</p>
                        <p className="font-bold text-purple-300 text-sm mt-0.5">Crisp</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
