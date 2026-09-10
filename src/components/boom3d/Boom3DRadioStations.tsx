import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  Play,
  Pause,
  MapPin,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface RadioStation {
  id: string;
  name: string;
  city: string;
  country: string;
  frequency: number;
  genre: string;
  flag: string;
  bitrate: string;
  badgeColor: string;
  topPct: string;
  leftPct: string;
}

export function Boom3DRadioStations() {
  const { t } = useTranslation();

  const stations: RadioStation[] = useMemo(
    () => [
      {
        id: 'london',
        name: 'BBC Radio 1',
        city: 'London',
        country: 'United Kingdom',
        frequency: 98.8,
        genre: 'Global Hits & Indie',
        flag: '🇬🇧',
        bitrate: '320 kbps HQ',
        badgeColor: '#ec4899',
        topPct: '18%',
        leftPct: '42%',
      },
      {
        id: 'tokyo',
        name: 'Shibuya Lo-Fi Radio',
        city: 'Tokyo',
        country: 'Japan',
        frequency: 81.3,
        genre: 'Chillhop & Ambient',
        flag: '🇯🇵',
        bitrate: '256 kbps Crystal',
        badgeColor: '#8b5cf6',
        topPct: '32%',
        leftPct: '78%',
      },
      {
        id: 'ny',
        name: 'New York Jazz FM',
        city: 'New York',
        country: 'United States',
        frequency: 88.5,
        genre: 'Classic Jazz & Blues',
        flag: '🇺🇸',
        bitrate: '320 kbps Lossless',
        badgeColor: '#f59e0b',
        topPct: '30%',
        leftPct: '16%',
      },
      {
        id: 'paris',
        name: 'Paris Café Lounge',
        city: 'Paris',
        country: 'France',
        frequency: 91.7,
        genre: 'Acoustic & Nu-Chanson',
        flag: '🇫🇷',
        bitrate: '256 kbps Stereo',
        badgeColor: '#3b82f6',
        topPct: '22%',
        leftPct: '54%',
      },
      {
        id: 'ibiza',
        name: 'Ibiza Sonica Beach',
        city: 'Ibiza',
        country: 'Spain',
        frequency: 95.2,
        genre: 'Deep House & Sunset',
        flag: '🇪🇸',
        bitrate: '320 kbps Club',
        badgeColor: '#06b6d4',
        topPct: '48%',
        leftPct: '46%',
      },
      {
        id: 'berlin',
        name: 'Berlin Pulse Radio',
        city: 'Berlin',
        country: 'Germany',
        frequency: 104.1,
        genre: 'Underground Techno',
        flag: '🇩🇪',
        bitrate: '320 kbps Master',
        badgeColor: '#10b981',
        topPct: '14%',
        leftPct: '60%',
      },
    ],
    []
  );

  const [activeStationIndex, setActiveStationIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const activeStation = stations[activeStationIndex];

  return (
    <section
      id="radio-stations"
      className="relative py-20 lg:py-28 overflow-hidden bg-white text-gray-900 scroll-mt-20 md:scroll-mt-24 select-none border-b border-gray-100"
    >
      {/* Subtle Ambient Light Gradients on Pure White */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-r from-emerald-100/40 via-cyan-100/30 to-blue-100/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimal Header: High Impact, Less Text */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight"
          >
            {t('boom3d.key_features.radio_title', '20,000+ Radio Stations')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-gray-500 font-medium max-w-xl mx-auto"
          >
            {t(
              'boom3d.key_features.radio_desc',
              'Stream over 20,000 local and international radio stations across 120 countries in crystal-clear 3D audio.'
            )}
          </motion.p>
        </div>

        {/* Global Object Centerpiece: 3D Holographic Radio Globe */}
        <div className="relative max-w-4xl mx-auto mb-10 md:mb-12">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            {/* The Photorealistic 3D Globe Render */}
            <img
              src="/boom3D/radio-globe-white.jpg"
              alt="Boom 3D Global Radio Stations Holographic Globe"
              className="w-full h-auto max-h-[500px] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.08)] rounded-3xl"
              width={1792}
              height={1024}
              loading="lazy"
            />

            {/* Hotspot Floating City Badge: London */}
            <div className="absolute top-[18%] left-[8%] sm:left-[14%] hidden sm:block">
              <button
                type="button"
                onClick={() => {
                  setActiveStationIndex(0);
                  setIsPlaying(true);
                }}
                className={`px-3 py-1.5 rounded-full backdrop-blur-md border text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ${
                  activeStationIndex === 0
                    ? 'bg-emerald-600 text-white border-emerald-400 scale-105 shadow-emerald-200'
                    : 'bg-white/95 text-gray-800 border-gray-200 hover:scale-105'
                }`}
              >
                <span>🇬🇧 London</span>
                <span className="font-mono text-[10px] opacity-80">98.8 MHz</span>
              </button>
            </div>

            {/* Hotspot Floating City Badge: Tokyo */}
            <div className="absolute top-[28%] right-[6%] sm:right-[12%] hidden sm:block">
              <button
                type="button"
                onClick={() => {
                  setActiveStationIndex(1);
                  setIsPlaying(true);
                }}
                className={`px-3 py-1.5 rounded-full backdrop-blur-md border text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ${
                  activeStationIndex === 1
                    ? 'bg-purple-600 text-white border-purple-400 scale-105 shadow-purple-200'
                    : 'bg-white/95 text-gray-800 border-gray-200 hover:scale-105'
                }`}
              >
                <span>🇯🇵 Tokyo</span>
                <span className="font-mono text-[10px] opacity-80">81.3 MHz</span>
              </button>
            </div>

            {/* Hotspot Floating City Badge: New York */}
            <div className="absolute bottom-[28%] left-[6%] sm:left-[12%] hidden sm:block">
              <button
                type="button"
                onClick={() => {
                  setActiveStationIndex(2);
                  setIsPlaying(true);
                }}
                className={`px-3 py-1.5 rounded-full backdrop-blur-md border text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ${
                  activeStationIndex === 2
                    ? 'bg-amber-600 text-white border-amber-400 scale-105 shadow-amber-200'
                    : 'bg-white/95 text-gray-800 border-gray-200 hover:scale-105'
                }`}
              >
                <span>🇺🇸 New York</span>
                <span className="font-mono text-[10px] opacity-80">88.5 MHz</span>
              </button>
            </div>

            {/* Hotspot Floating City Badge: Paris */}
            <div className="absolute bottom-[24%] right-[8%] sm:right-[16%] hidden sm:block">
              <button
                type="button"
                onClick={() => {
                  setActiveStationIndex(3);
                  setIsPlaying(true);
                }}
                className={`px-3 py-1.5 rounded-full backdrop-blur-md border text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ${
                  activeStationIndex === 3
                    ? 'bg-blue-600 text-white border-blue-400 scale-105 shadow-blue-200'
                    : 'bg-white/95 text-gray-800 border-gray-200 hover:scale-105'
                }`}
              >
                <span>🇫🇷 Paris</span>
                <span className="font-mono text-[10px] opacity-80">91.7 MHz</span>
              </button>
            </div>

          </motion.div>

        </div>

        {/* Interactive Global Radio Tuner Console Dock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200/80 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.06)] p-5 sm:p-7 max-w-4xl mx-auto space-y-5"
        >
          {/* Top Row: Active Station & Live Broadcast Status */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-100">
            
            {/* Station Brand */}
            <div className="flex items-center gap-3.5 min-w-[240px]">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-2xl shadow-xs shrink-0">
                {activeStation.flag}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight leading-snug">
                    {activeStation.name}
                  </h3>
                  
                </div>
                <p className="text-xs text-gray-500 font-medium mt-0.5 flex items-center gap-1">
                  <MapPin size={11} className="text-gray-400" />
                  {activeStation.city}, {activeStation.country} • <span className="font-semibold text-emerald-600">{activeStation.genre}</span>
                </p>
              </div>
            </div>

            {/* Live Radio Frequency & Signal Meter */}
            <div className="flex items-center gap-3 self-end md:self-center">
              
              {/* Signal Bars */}
              <div className="flex items-center gap-1 h-6 px-3 py-1 bg-slate-50 border border-slate-200/80 rounded-xl">
                {[0.4, 0.9, 0.6, 1.0, 0.7, 0.5, 0.8].map((scale, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      height: isPlaying ? `${Math.max(4, scale * 16)}px` : '3px',
                    }}
                    transition={{
                      duration: 0.35 + (i % 3) * 0.1,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    }}
                    className="w-1 rounded-full transition-colors"
                    style={{
                      backgroundColor: isPlaying ? '#10b981' : '#cbd5e1',
                    }}
                  />
                ))}
                <span className="ml-1.5 text-[11px] font-mono font-bold text-emerald-600">
                  {activeStation.frequency.toFixed(1)} MHz
                </span>
              </div>

              {/* Glowing Play/Pause */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                title={isPlaying ? 'Pause broadcast' : 'Tune in'}
                className="w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#ec4899] via-[#8b5cf6] to-[#00f0ff] shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 transition-all cursor-pointer shrink-0"
              >
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-white">
                  {isPlaying ? <Pause size={16} fill="white" /> : <Play size={16} fill="white" className="ml-0.5" />}
                </div>
              </button>

            </div>

          </div>

          {/* Quick World Station Switcher Pills */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
              Quick Tuner:
            </span>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {stations.map((st, idx) => {
                const isSelected = activeStationIndex === idx;
                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => {
                      setActiveStationIndex(idx);
                      setIsPlaying(true);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer flex items-center gap-1.5 border ${
                      isSelected
                        ? 'bg-gray-900 text-white border-gray-900 shadow-xs'
                        : 'bg-slate-50 text-gray-600 border-slate-200/80 hover:bg-slate-100 hover:text-gray-900'
                    }`}
                  >
                    <span>{st.flag}</span>
                    <span className="font-semibold">{st.city}</span>
                    <span className="font-mono text-[10px] opacity-70">
                      {st.frequency}M
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </motion.div>


      </div>
    </section>
  );
}
