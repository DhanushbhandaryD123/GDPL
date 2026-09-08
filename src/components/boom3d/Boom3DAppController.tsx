import { useState } from 'react';
import { motion } from 'motion/react';
import { SlidersVertical, Volume2, VolumeX, Gamepad2, Headphones, Laptop, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AppChannel {
  id: string;
  name: string;
  category: string;
  iconBg: string;
  color: string;
  defaultVol: number;
  iconSvg?: () => JSX.Element;
}

export function Boom3DAppController() {
  const { t } = useTranslation();

  const [channels, setChannels] = useState<{ [key: string]: number }>({
    spotify: 80,
    discord: 88,
    youtube: 55,
    game: 100,
    zoom: 40,
  });

  const [muted, setMuted] = useState<{ [key: string]: boolean }>({
    spotify: false,
    discord: false,
    youtube: false,
    game: false,
    zoom: false,
  });

  const [activeProfile, setActiveProfile] = useState<'custom' | 'gaming' | 'work' | 'music'>('gaming');

  const appList: AppChannel[] = [
    {
      id: 'spotify',
      name: 'Spotify',
      category: 'Music & Podcasts',
      iconBg: '#1db954',
      color: '#1db954',
      defaultVol: 80,
      iconSvg: () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.54-1.26.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.66 12.9c.42.18.54.78.3 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      )
    },
    {
      id: 'discord',
      name: 'Discord',
      category: 'Voice Chat',
      iconBg: '#5865f2',
      color: '#818cf8',
      defaultVol: 88,
      iconSvg: () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      )
    },
    {
      id: 'youtube',
      name: 'Google Chrome',
      category: 'Browser & Video',
      iconBg: '#ea4335',
      color: '#f87171',
      defaultVol: 55,
      iconSvg: () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <circle cx="12" cy="12" r="11" fill="#fbbc04"/>
          <path d="M12 1a11 11 0 0 1 11 11h-6a5 5 0 0 0-8.66-2.5L12 1z" fill="#ea4335"/>
          <path d="M23 12a11 11 0 0 1-16.5 9.53l3-5.2A5 5 0 0 0 17 12h6z" fill="#34a853"/>
          <circle cx="12" cy="12" r="4.5" fill="#4285f4" stroke="white" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      id: 'game',
      name: 'Cyberpunk 2077',
      category: 'Game Audio',
      iconBg: '#06b6d4',
      color: '#22d3ee',
      defaultVol: 100,
      iconSvg: () => <Gamepad2 size={20} className="text-white" />
    },
    {
      id: 'zoom',
      name: 'Zoom / Slack',
      category: 'Conference Calls',
      iconBg: '#2563eb',
      color: '#60a5fa',
      defaultVol: 40,
      iconSvg: () => <Laptop size={20} className="text-white" />
    }
  ];

  const applyProfile = (profile: 'gaming' | 'work' | 'music') => {
    setActiveProfile(profile);
    if (profile === 'gaming') {
      setChannels({ spotify: 25, discord: 85, youtube: 0, game: 100, zoom: 0 });
      setMuted({ spotify: false, discord: false, youtube: true, game: false, zoom: true });
    } else if (profile === 'work') {
      setChannels({ spotify: 30, discord: 0, youtube: 0, game: 0, zoom: 95 });
      setMuted({ spotify: false, discord: true, youtube: true, game: true, zoom: false });
    } else if (profile === 'music') {
      setChannels({ spotify: 100, discord: 0, youtube: 40, game: 0, zoom: 0 });
      setMuted({ spotify: false, discord: true, youtube: false, game: true, zoom: true });
    }
  };

  const handleVolumeChange = (id: string, val: number) => {
    setChannels((prev) => ({ ...prev, [id]: val }));
    setActiveProfile('custom');
  };

  const toggleMute = (id: string) => {
    setMuted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="apps-volume-controller" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#0e0e15] to-[#14141f] text-white scroll-mt-20 md:scroll-mt-24">
      
      {/* Background Studio Lights */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[350px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-[900px] mx-auto mb-14 md:mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 tracking-wide"
          >
            <SlidersVertical size={14} className="text-cyan-400" />
            <span>Multi-Stream Precision</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
          >
            {t('boom3d.key_features.apps_title') || 'Apps Volume Controller'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-base md:text-lg text-gray-400 leading-relaxed max-w-[760px] mx-auto"
          >
            {t('boom3d.key_features.apps_desc') ||
              'Boom 3D allows you to manage individual application audio levels & volumes and seamlessly have an uninterrupted movie, game, or music experience.'}
          </motion.p>
        </div>

        {/* Profile Quick-Switch Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-gray-500 mr-2">Quick Scenarios:</span>
          <button
            type="button"
            onClick={() => applyProfile('gaming')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer ${
              activeProfile === 'gaming'
                ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] font-bold'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
            }`}
          >
            <Gamepad2 size={15} />
            <span>Gaming Focus (Boost Game & Voice)</span>
          </button>
          
          <button
            type="button"
            onClick={() => applyProfile('work')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer ${
              activeProfile === 'work'
                ? 'bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] font-bold'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
            }`}
          >
            <Laptop size={15} />
            <span>Meeting & Work Mode</span>
          </button>

          <button
            type="button"
            onClick={() => applyProfile('music')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer ${
              activeProfile === 'music'
                ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)] font-bold'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
            }`}
          >
            <Headphones size={15} />
            <span>Pure Music Immersion</span>
          </button>
        </div>

        {/* Studio Mixer Rack Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#12121a]/95 backdrop-blur-2xl rounded-3xl p-6 md:p-10 border border-white/[0.08] shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        >
          {/* Top Status Bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-white/[0.06] mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-sm font-semibold text-gray-200">Virtual Audio Driver Active (5 Streams Managed)</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">Auto-Duck: Enabled</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">Latency: &lt; 1.2ms</span>
            </div>
          </div>

          {/* Mixer Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {appList.map((app) => {
              const currentVol = muted[app.id] ? 0 : channels[app.id];
              const isMuted = muted[app.id];

              return (
                <div 
                  key={app.id} 
                  className="bg-[#181824]/70 rounded-2xl p-5 border border-white/[0.05] hover:border-white/15 transition-all duration-300 flex flex-col items-center group"
                >
                  {/* App Icon & Details */}
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg mb-3 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: app.iconBg }}
                  >
                    {app.iconSvg && app.iconSvg()}
                  </div>

                  <h4 className="text-sm font-bold text-white tracking-wide text-center">{app.name}</h4>
                  <p className="text-[11px] text-gray-400 text-center mb-5">{app.category}</p>

                  {/* VU Level Meter (Live Bouncing audio levels based on volume) */}
                  <div className="w-full flex items-end justify-center gap-1 h-16 bg-[#0e0e15] rounded-xl p-2 mb-5 border border-white/[0.04]">
                    {[0.3, 0.6, 0.9, 0.5, 0.8, 0.4].map((multiplier, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: isMuted ? '4px' : [`${Math.max(6, (currentVol * multiplier * 0.5))}%`, `${Math.max(8, (currentVol * multiplier * 0.95))}%`, `${Math.max(6, (currentVol * multiplier * 0.4))}%`]
                        }}
                        transition={{
                          duration: 0.6 + i * 0.15,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        className="w-2 rounded-t transition-all duration-300"
                        style={{
                          backgroundColor: isMuted ? '#374151' : currentVol > 85 ? '#f43f5e' : currentVol > 60 ? app.color : '#60a5fa'
                        }}
                      />
                    ))}
                  </div>

                  {/* Slider Control */}
                  <div className="w-full space-y-2 mb-4">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-gray-400">Level</span>
                      <span className={`font-bold ${isMuted ? 'text-gray-500 line-through' : 'text-white'}`}>
                        {currentVol}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={channels[app.id]}
                      onChange={(e) => handleVolumeChange(app.id, Number(e.target.value))}
                      className="w-full h-1.5 bg-[#252535] rounded-lg appearance-none cursor-pointer accent-indigo-400"
                    />
                  </div>

                  {/* Mute Button */}
                  <button
                    type="button"
                    onClick={() => toggleMute(app.id)}
                    className={`w-full py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                      isMuted
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                    <span>{isMuted ? 'Muted' : 'Active'}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Bottom Callout */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-2">
              <Sparkles size={14} className="text-indigo-400" />
              Adjust sliders anytime to isolate calls, dial in background music, or prioritize high-stakes game audio.
            </span>
            <span className="font-mono text-gray-500">Supports over 10,000+ native desktop applications</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
