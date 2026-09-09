import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  Volume2,
  VolumeX,
  Gamepad2,
  Laptop,
  Sparkles,
  Zap,
  SlidersVertical,
  Shield,
  RotateCcw,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AppItem {
  id: string;
  name: string;
  badge: string;
  accent: string;
  trackGradient: string;
  icon: () => React.ReactNode;
}

export function Boom3DAppController() {
  const { t } = useTranslation();

  // App volumes (0 to 100)
  const [volumes, setVolumes] = useState<{ [key: string]: number }>({
    spotify: 78,
    discord: 92,
    chrome: 60,
    game: 95,
    zoom: 40,
  });

  // Muted states
  const [muted, setMuted] = useState<{ [key: string]: boolean }>({
    spotify: false,
    discord: false,
    chrome: false,
    game: false,
    zoom: false,
  });

  // 3D Boost states
  const [boosted, setBoosted] = useState<{ [key: string]: boolean }>({
    spotify: true,
    discord: false,
    chrome: false,
    game: true,
    zoom: false,
  });

  // Current active scenario preset
  const [activePreset, setActivePreset] = useState<'custom' | 'balanced' | 'gaming' | 'calls' | 'music'>('gaming');

  const apps: AppItem[] = useMemo(
    () => [
      {
        id: 'spotify',
        name: 'Spotify',
        badge: 'Music',
        accent: '#10b981',
        trackGradient: 'from-emerald-400 to-teal-500',
        icon: () => (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#1db954]">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.54-1.26.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.66 12.9c.42.18.54.78.3 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        ),
      },
      {
        id: 'discord',
        name: 'Discord',
        badge: 'Voice',
        accent: '#6366f1',
        trackGradient: 'from-indigo-400 to-indigo-600',
        icon: () => (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#5865F2]">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        ),
      },
      {
        id: 'chrome',
        name: 'Google Chrome',
        badge: 'Browser',
        accent: '#f59e0b',
        trackGradient: 'from-amber-400 to-orange-500',
        icon: () => (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <circle cx="12" cy="12" r="11" fill="#fbbc04" />
            <path d="M12 1a11 11 0 0 1 11 11h-6a5 5 0 0 0-8.66-2.5L12 1z" fill="#ea4335" />
            <path d="M23 12a11 11 0 0 1-16.5 9.53l3-5.2A5 5 0 0 0 17 12h6z" fill="#34a853" />
            <circle cx="12" cy="12" r="4.5" fill="#4285f4" stroke="white" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        id: 'game',
        name: 'Cyberpunk 2077',
        badge: 'Game',
        accent: '#06b6d4',
        trackGradient: 'from-cyan-400 to-blue-500',
        icon: () => <Gamepad2 size={20} className="text-cyan-600" />,
      },
      {
        id: 'zoom',
        name: 'Zoom / Calls',
        badge: 'Meeting',
        accent: '#3b82f6',
        trackGradient: 'from-blue-400 to-indigo-500',
        icon: () => <Laptop size={20} className="text-blue-600" />,
      },
    ],
    []
  );

  const applyPreset = useCallback((preset: 'balanced' | 'gaming' | 'calls' | 'music') => {
    setActivePreset(preset);
    if (preset === 'gaming') {
      setVolumes({ spotify: 25, discord: 90, chrome: 10, game: 100, zoom: 0 });
      setMuted({ spotify: false, discord: false, chrome: false, game: false, zoom: true });
      setBoosted({ spotify: false, discord: true, chrome: false, game: true, zoom: false });
    } else if (preset === 'calls') {
      setVolumes({ spotify: 15, discord: 20, chrome: 0, game: 0, zoom: 95 });
      setMuted({ spotify: false, discord: true, chrome: true, game: true, zoom: false });
      setBoosted({ spotify: false, discord: false, chrome: false, game: false, zoom: true });
    } else if (preset === 'music') {
      setVolumes({ spotify: 100, discord: 0, chrome: 40, game: 0, zoom: 0 });
      setMuted({ spotify: false, discord: true, chrome: false, game: true, zoom: true });
      setBoosted({ spotify: true, discord: false, chrome: false, game: false, zoom: false });
    } else if (preset === 'balanced') {
      setVolumes({ spotify: 70, discord: 70, chrome: 70, game: 70, zoom: 70 });
      setMuted({ spotify: false, discord: false, chrome: false, game: false, zoom: false });
      setBoosted({ spotify: true, discord: true, chrome: true, game: true, zoom: true });
    }
  }, []);

  const handleVolumeChange = (id: string, val: number) => {
    setVolumes((prev) => ({ ...prev, [id]: val }));
    setActivePreset('custom');
  };

  const toggleMute = (id: string) => {
    setMuted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleBoost = (id: string) => {
    setBoosted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="apps-volume-controller"
      className="relative py-20 lg:py-28 overflow-hidden bg-white text-gray-900 scroll-mt-20 md:scroll-mt-24 select-none border-b border-gray-100"
    >
      {/* Subtle Ambient Light Gradients on Pure White */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-100/40 via-purple-100/30 to-pink-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimal Header: Short, Impactful, Less Text */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold tracking-wide uppercase mb-3 shadow-xs"
          >
            <SlidersVertical size={13} className="text-indigo-600" />
            <span>{t('boom3d.app_controller.badge', 'App Volume Controller')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight"
          >
            {t('boom3d.app_controller.title', 'Total Control Over Every App')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-gray-500 font-medium max-w-lg mx-auto"
          >
            {t('boom3d.app_controller.subtitle', 'Adjust, mute, or boost sound levels for individual applications independently.')}
          </motion.p>
        </div>

        {/* Sleek Modern Software Window Interface */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07),0_0_1px_1px_rgba(0,0,0,0.04)] overflow-hidden"
        >
          {/* macOS Style Window Titlebar */}
          <div className="px-5 sm:px-7 py-4 border-b border-gray-100 bg-slate-50/70 flex flex-wrap items-center justify-between gap-4">
            
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
              <span className="ml-3 text-xs font-semibold text-gray-400 font-mono tracking-wider hidden sm:inline">
                BOOM 3D • AUDIO ROUTER
              </span>
            </div>

            {/* Quick Presets Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-gray-200/80 rounded-xl shadow-xs text-xs">
              {(
                [
                  { id: 'gaming', label: 'Gaming' },
                  { id: 'calls', label: 'Meeting' },
                  { id: 'music', label: 'Music' },
                  { id: 'balanced', label: 'Balanced' },
                ] as const
              ).map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => applyPreset(preset.id)}
                  className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                    activePreset === preset.id
                      ? 'bg-gray-900 text-white shadow-xs'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
              {activePreset === 'custom' && (
                <button
                  type="button"
                  onClick={() => applyPreset('balanced')}
                  title="Reset to balanced"
                  className="px-2 py-1 text-gray-400 hover:text-gray-700 transition cursor-pointer"
                >
                  <RotateCcw size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Interactive App Rows */}
          <div className="p-4 sm:p-7 divide-y divide-gray-100/90 space-y-1">
            {apps.map((app) => {
              const currentVol = volumes[app.id] ?? 0;
              const isMuted = muted[app.id];
              const isBoosted = boosted[app.id];
              const effectiveVol = isMuted ? 0 : currentVol;

              return (
                <div
                  key={app.id}
                  className="py-4 first:pt-2 last:pb-2 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-slate-50/50 rounded-2xl px-2 sm:px-3"
                >
                  {/* Left: App Icon & Name */}
                  <div className="flex items-center gap-3.5 min-w-[210px]">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-gray-200/70 shadow-xs flex items-center justify-center shrink-0">
                      {app.icon()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className={`text-sm font-bold tracking-tight transition-colors ${isMuted ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                          {app.name}
                        </h4>
                        <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">
                          {app.badge}
                        </span>
                      </div>
                      
                      {/* Reactive Mini EQ Bars inside App Label */}
                      <div className="flex items-center gap-0.5 mt-1.5 h-3">
                        {[0.4, 0.9, 0.6, 1.0, 0.7].map((factor, barIdx) => (
                          <motion.span
                            key={barIdx}
                            animate={{
                              height: effectiveVol > 0 ? `${Math.max(3, (effectiveVol / 100) * factor * 12)}px` : '2px',
                            }}
                            transition={{
                              duration: 0.4 + barIdx * 0.1,
                              repeat: Infinity,
                              repeatType: 'reverse',
                              ease: 'easeInOut',
                            }}
                            className="w-1 rounded-full transition-colors"
                            style={{
                              backgroundColor: effectiveVol > 0 ? app.accent : '#d1d5db',
                            }}
                          />
                        ))}
                        <span className="ml-1.5 text-[11px] font-mono text-gray-400">
                          {isMuted ? 'Muted' : `${effectiveVol}%`}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Middle: Smooth Interactive Volume Slider */}
                  <div className="flex-1 flex items-center gap-4 max-w-full md:max-w-md">
                    <div className="relative w-full flex items-center">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={currentVol}
                        onChange={(e) => handleVolumeChange(app.id, Number(e.target.value))}
                        aria-label={`${app.name} volume`}
                        className="w-full h-2.5 bg-gray-100 rounded-full appearance-none cursor-pointer accent-gray-900 relative z-10 transition-all focus:outline-none"
                        style={{
                          background: `linear-gradient(to right, ${app.accent} 0%, ${app.accent} ${effectiveVol}%, #e2e8f0 ${effectiveVol}%, #e2e8f0 100%)`,
                        }}
                      />
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-700 min-w-[38px] text-right">
                      {isMuted ? '0%' : `${currentVol}%`}
                    </span>
                  </div>

                  {/* Right: Controls (3D Boost + Mute Button) */}
                  <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                    {/* 3D Boost Pill Switch */}
                    <button
                      type="button"
                      onClick={() => toggleBoost(app.id)}
                      title={isBoosted ? '3D Boost Active' : 'Enable 3D Boost'}
                      className={`h-8 px-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border ${
                        isBoosted
                          ? 'bg-indigo-50 border-indigo-200 text-indigo-700 shadow-xs'
                          : 'bg-white border-gray-200 text-gray-400 hover:text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Zap size={13} className={isBoosted ? 'fill-current text-indigo-600' : 'text-gray-400'} />
                      <span className="text-[11px]">3D Boost</span>
                    </button>

                    {/* Mute Button */}
                    <button
                      type="button"
                      onClick={() => toggleMute(app.id)}
                      title={isMuted ? 'Unmute' : 'Mute'}
                      className={`h-8 w-8 rounded-xl flex items-center justify-center transition-all cursor-pointer border ${
                        isMuted
                          ? 'bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-100'
                          : 'bg-white border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 shadow-xs'
                      }`}
                    >
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </motion.div>

        {/* Minimal Feature Highlights: 3 Clean Badges with Minimal Text */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-2xl bg-slate-50/80 border border-slate-100 text-gray-700 text-xs font-medium">
            <Zap size={15} className="text-amber-500 shrink-0" />
            <span>Zero Audio Latency Engine</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-2xl bg-slate-50/80 border border-slate-100 text-gray-700 text-xs font-medium">
            <Sparkles size={15} className="text-indigo-500 shrink-0" />
            <span>Remembers Per-App Levels</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-2xl bg-slate-50/80 border border-slate-100 text-gray-700 text-xs font-medium">
            <Shield size={15} className="text-emerald-500 shrink-0" />
            <span>Universal Desktop Support</span>
          </div>
        </div>

      </div>
    </section>
  );
}
