import { useState, useId } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

// Authentic App Icons
function IconSpotify({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="12" r="12" fill="#1DB954" />
      <path d="M17.5 16.3c-.2.3-.6.4-.9.2-2.5-1.5-5.6-1.9-9.3-1-.4.1-.7-.1-.8-.5-.1-.4.1-.7.5-.8 4-.9 7.5-.5 10.3 1.2.3.2.4.6.2.9zm1.3-2.8c-.3.4-.8.5-1.2.3-2.9-1.8-7.3-2.3-10.7-1.3-.4.1-.9-.1-1-.6-.1-.4.1-.9.6-1 3.9-1.2 8.7-.6 12 1.4.4.2.5.8.3 1.2zm.1-3c-3.5-2.1-9.2-2.3-12.6-1.2-.5.2-1.1-.1-1.3-.6-.2-.5.1-1.1.6-1.3 4-1.2 10.2-1 14.3 1.4.5.3.6.9.3 1.4-.3.5-.9.6-1.3.3z" fill="#ffffff" />
    </svg>
  );
}

function IconAppleMusic({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#FA243C" />
      <path d="M16.8 6.5v8.3c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7c.4 0 .8.1 1.2.3v-4.4l-5.3 1.5v6.9c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7c.4 0 .8.1 1.2.3V7.2c0-.5.4-.9.9-1l6.7-1.9c.5-.1.9.3.9.7v1.5z" fill="#ffffff" />
    </svg>
  );
}

function IconYouTube({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect width="24" height="24" rx="6" fill="#FF0000" />
      <path d="M10 8.5v7l6-3.5-6-3.5z" fill="#ffffff" />
    </svg>
  );
}

function IconNetflix({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#141414" />
      <path d="M7.5 5.5h2.3l3.7 9.8V5.5h2v13h-2.3L9.5 8.7v9.8h-2v-13z" fill="#E50914" />
    </svg>
  );
}

function IconSafari({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="12" fill="#006CFF" />
      <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="0.8" opacity="0.6" />
      <polygon points="12,5 15,12 12,19 9,12" fill="#FF3B30" />
      <polygon points="12,19 15,12 12,5 9,12" fill="#ffffff" />
      <circle cx="12" cy="12" r="1.5" fill="#ffffff" />
    </svg>
  );
}

function IconZoom({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#2D8CFF" />
      <rect x="6" y="8.5" width="8" height="7" rx="1.5" fill="#ffffff" />
      <polygon points="15,10.5 18,8.5 18,15.5 15,13.5" fill="#ffffff" />
    </svg>
  );
}

const APPS = [
  { id: 'spotify', name: 'Spotify', Icon: IconSpotify, color: '#1DB954' },
  { id: 'youtube', name: 'YouTube', Icon: IconYouTube, color: '#FF0000' },
  { id: 'netflix', name: 'Netflix', Icon: IconNetflix, color: '#E50914' },
  { id: 'apple_music', name: 'Apple Music', Icon: IconAppleMusic, color: '#FA243C' },
  { id: 'safari', name: 'Safari', Icon: IconSafari, color: '#006CFF' },
  { id: 'zoom', name: 'Zoom', Icon: IconZoom, color: '#2D8CFF' },
];

export function Boom2SystemWideControl() {
  const { t } = useTranslation();
  const [boostLevel, setBoostLevel] = useState<number>(150);
  const [activeApp, setActiveApp] = useState<string>('spotify');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const sliderId = useId();

  const currentApp = APPS.find(a => a.id === activeApp) || APPS[0];
  const effectiveBoost = isMuted ? 0 : boostLevel;

  return (
    <section 
      id="boom2-system-wide-control"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto select-none"
      aria-label="System-wide Audio Control"
    >
      {/* Top Main Content (Clean & Focused) */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 text-[#0a0a0f] tracking-tight leading-tight"
        >
          {t('boom2.system_wide_control.title', { defaultValue: 'System-wide Audio Control for Mac' })}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium"
        >
          {t('boom2.system_wide_control.subtitle', { 
            defaultValue: 'One unified audio engine that elevates everything you hear. Boost volume, calibrate frequencies, and apply rich effects seamlessly across every single application on your Mac.' 
          })}
        </motion.p>
      </div>

      {/* Main Interactive Stage (Open, Breathable, Non-Boxy) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Floating App Orbit Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          {APPS.map((app) => {
            const isSelected = app.id === activeApp;
            const Icon = app.Icon;

            return (
              <button
                key={app.id}
                type="button"
                onClick={() => setActiveApp(app.id)}
                className={`group flex items-center gap-2 px-3.5 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <Icon className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide">
                  {app.name}
                </span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1390FB] animate-pulse ml-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Central Audio Soundwave & Control Canvas */}
        <div className="w-full relative py-8 px-6 sm:px-12 flex flex-col items-center">
          
          {/* Animated Acoustic Waves Radiating Outward */}
          <div className="relative w-full max-w-lg h-32 flex items-center justify-center">
            {/* Dynamic Sound Wave Spectrum Bars */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 h-24 w-full">
              {[25, 45, 65, 80, 95, 100, 90, 75, 60, 45, 30, 20].map((h, i) => {
                const boostFactor = isMuted ? 0.1 : boostLevel / 100;
                const barHeight = Math.min(100, Math.round(h * boostFactor));

                return (
                  <motion.div
                    key={i}
                    animate={{
                      height: isMuted ? '6px' : [`${barHeight * 0.5}%`, `${barHeight}%`, `${barHeight * 0.7}%`],
                      opacity: isMuted ? 0.3 : [0.75, 1, 0.85]
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.5 + (i % 3) * 0.2,
                      ease: "easeInOut"
                    }}
                    className={`w-2 sm:w-2.5 rounded-full transition-all duration-300 ${
                      boostLevel > 160
                        ? 'bg-gradient-to-t from-[#1390FB] to-cyan-400 shadow-[0_0_10px_rgba(19,144,251,0.6)]'
                        : 'bg-gradient-to-t from-blue-600 to-[#1390FB]'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Real-time Status Caption */}
          <div className="flex items-center gap-2 mt-2 mb-6 text-sm font-medium text-slate-600">
            <Sparkles className="w-4 h-4 text-[#1390FB]" />
            <span>
              Enhancing <strong className="text-slate-900">{currentApp.name}</strong> sound with 31-Band Precision Engine
            </span>
          </div>

          {/* Master Volume Boost Slider Bar */}
          <div className="w-full max-w-md flex flex-col items-center">
            <div className="w-full flex items-center justify-between mb-2">
              <button
                type="button"
                onClick={() => setIsMuted(!isMuted)}
                className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1390FB] cursor-pointer transition-colors"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4 text-[#1390FB]" />}
                <span>System Volume</span>
              </button>

              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-[#1390FB] font-mono tracking-tight">
                  {effectiveBoost}%
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {boostLevel > 100 ? `(+${((boostLevel - 100) * 0.12).toFixed(1)} dB Boost)` : '(Standard)'}
                </span>
              </div>
            </div>

            {/* Slider Track */}
            <input
              id={sliderId}
              type="range"
              min={100}
              max={200}
              step={1}
              value={boostLevel}
              disabled={isMuted}
              onChange={(e) => {
                setBoostLevel(Number(e.target.value));
                if (isMuted) setIsMuted(false);
              }}
              className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-[#1390FB] focus:outline-none transition-all disabled:opacity-40"
              aria-label="Master System Volume Boost"
            />

            <div className="w-full flex justify-between text-[11px] font-medium text-slate-400 mt-2 font-mono">
              <span>100% (Mac Default)</span>
              <span className="text-[#1390FB]">150% (Recommended)</span>
              <span className="text-emerald-600 font-semibold">200% (Max Boost)</span>
            </div>
          </div>

        </div>

        {/* 3 Clean Bottom Feature Highlights (No Boxes, No Borders) */}
        <div className="grid sm:grid-cols-3 gap-8 md:gap-12 mt-12 text-center max-w-4xl mx-auto pt-8 border-t border-slate-100">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
              {t('boom2.system_wide_control.feature_1_title', { defaultValue: 'Universal App Integration' })}
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              {t('boom2.system_wide_control.feature_1_desc', { defaultValue: 'Automatically enhances Spotify, YouTube, Netflix, Apple Music, Safari, Zoom, FaceTime, and games without manual setup.' })}
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
              {t('boom2.system_wide_control.feature_3_title', { defaultValue: 'Distortion-Free Volume Boost' })}
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              {t('boom2.system_wide_control.feature_3_desc', { defaultValue: 'Safely amplifies system audio up to 200% with intelligent peak-limiting algorithms that prevent distortion and protect speakers.' })}
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
              {t('boom2.system_wide_control.feature_2_title', { defaultValue: 'Menu Bar & Quick Access' })}
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              {t('boom2.system_wide_control.feature_2_desc', { defaultValue: 'Quickly adjust master volume beyond limits, toggle presets, and fine-tune equalizers directly from the macOS menu bar.' })}
            </p>
          </div>
        </div>

      </motion.div>
    </section>
  );
}

export default Boom2SystemWideControl;
