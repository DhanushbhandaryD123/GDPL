import { useState } from 'react';
import { motion } from 'motion/react';
import { Radio, Globe, Signal, Play, Pause, Volume2, Sparkles, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface RadioStation {
  id: string;
  name: string;
  location: string;
  frequency: number; // in MHz, e.g. 98.8
  genre: string;
  category: 'chill' | 'electronic' | 'jazz' | 'pop';
  flag: string;
  accentColor: string;
  bitrate: string;
}

export function Boom3DRadioStations() {
  const { t } = useTranslation();

  const stations: RadioStation[] = [
    {
      id: 'bbc1',
      name: 'BBC Radio 1 London',
      location: 'London, United Kingdom',
      frequency: 98.8,
      genre: 'Global Hits & Indie',
      category: 'pop',
      flag: '🇬🇧',
      accentColor: '#ec4899',
      bitrate: '320 kbps HQ',
    },
    {
      id: 'shibuya',
      name: 'Shibuya Night Lo-Fi',
      location: 'Tokyo, Japan',
      frequency: 81.3,
      genre: 'Chillhop & Neo-Tokyo',
      category: 'chill',
      flag: '🇯🇵',
      accentColor: '#8b5cf6',
      bitrate: '256 kbps Crystal',
    },
    {
      id: 'jazz24',
      name: 'Jazz24 Pacific NW',
      location: 'Seattle, United States',
      frequency: 88.5,
      genre: 'Classic Jazz & Blues',
      category: 'jazz',
      flag: '🇺🇸',
      accentColor: '#f59e0b',
      bitrate: '320 kbps Lossless',
    },
    {
      id: 'ibiza',
      name: 'Ibiza Sonica Beach',
      location: 'Ibiza, Spain',
      frequency: 95.2,
      genre: 'Deep House & Sunset Lounge',
      category: 'electronic',
      flag: '🇪🇸',
      accentColor: '#06b6d4',
      bitrate: '320 kbps Club Master',
    },
    {
      id: 'berlin',
      name: 'Berlin Pulse Radio',
      location: 'Berlin, Germany',
      frequency: 104.1,
      genre: 'Underground Techno',
      category: 'electronic',
      flag: '🇩🇪',
      accentColor: '#10b981',
      bitrate: '320 kbps Master',
    },
    {
      id: 'paris',
      name: 'Paris Café Lounge',
      location: 'Paris, France',
      frequency: 91.7,
      genre: 'Acoustic & Nu-Chanson',
      category: 'chill',
      flag: '🇫🇷',
      accentColor: '#3b82f6',
      bitrate: '256 kbps Stereo',
    },
  ];

  const [activeCategory, setActiveCategory] = useState<'all' | 'chill' | 'electronic' | 'jazz' | 'pop'>('all');
  const [activeStation, setActiveStation] = useState<RadioStation>(stations[0]);
  const [isPlaying, setIsPlaying] = useState(true);

  const filteredStations = activeCategory === 'all'
    ? stations
    : stations.filter((s) => s.category === activeCategory);

  // Map frequency (80 MHz to 108 MHz) to percentage (0% to 100%)
  const minFreq = 80.0;
  const maxFreq = 108.0;
  const tunerPercentage = ((activeStation.frequency - minFreq) / (maxFreq - minFreq)) * 100;

  return (
    <section id="radio-stations" className="relative py-20 lg:py-28 overflow-hidden bg-[#0d0e15] text-white scroll-mt-20 md:scroll-mt-24">
      
      {/* Background Radar Waves (Radio broadcasting across globe) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] pointer-events-none opacity-20">
        {[1, 2, 3, 4].map((ring) => (
          <motion.div
            key={ring}
            animate={{
              scale: [0.8, 1.4, 0.8],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8 + ring * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full border border-indigo-400"
            style={{ margin: `${ring * 60}px` }}
          />
        ))}
      </div>

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-[850px] mx-auto mb-14 md:mb-18 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300 tracking-wide"
          >
            <Radio size={14} className="text-emerald-400" />
            <span>Over 20,000 Global Stations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
          >
            {t('boom3d.key_features.radio_title') || '20,000+ Radio Stations'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-base md:text-lg text-gray-400 leading-relaxed max-w-[760px] mx-auto"
          >
            {t('boom3d.key_features.radio_desc') ||
              'Join Boom to enjoy free access to more than 20k local and international internet radio stations across 120 countries.'}
          </motion.p>
        </div>

        {/* Radio Broadcast Tuning Console */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#13141f]/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-white/[0.08] shadow-[0_30px_90px_rgba(0,0,0,0.6)] mb-10"
        >
          {/* Active Station Display & On-Air Badge */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
            
            <div className="flex items-center gap-5">
              {/* Broadcast Icon Dial */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-xl border border-white/10 shrink-0"
                style={{ backgroundColor: `${activeStation.accentColor}20` }}
              >
                <span>{activeStation.flag}</span>
              </div>

              <div>
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-[11px] font-bold text-rose-300 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                    Live ON AIR
                  </span>
                  <span className="text-xs font-mono text-gray-400">Stream: {activeStation.bitrate}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {activeStation.name}
                </h3>
                
                <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-0.5">
                  <MapPin size={12} className="text-gray-500" />
                  {activeStation.location} • <strong className="text-indigo-300 font-semibold">{activeStation.genre}</strong>
                </p>
              </div>
            </div>

            {/* Play/Pause Stream Toggle */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all cursor-pointer"
              >
                {isPlaying ? <Pause size={17} fill="white" /> : <Play size={17} fill="white" />}
                <span>{isPlaying ? 'Streaming Live' : 'Tune In'}</span>
              </button>
            </div>

          </div>

          {/* Analog/Digital Frequency Dial */}
          <div className="py-8 border-b border-white/[0.06]">
            <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-3">
              <span className="flex items-center gap-1.5 uppercase tracking-wider">
                <Signal size={14} className="text-cyan-400" /> FM Frequency Band
              </span>
              <span className="text-xl font-bold font-mono text-cyan-300">
                {activeStation.frequency.toFixed(1)} <span className="text-xs text-gray-500">MHz</span>
              </span>
            </div>

            {/* Frequency Ruler Scale */}
            <div className="relative h-14 bg-[#0c0c14] rounded-2xl border border-white/[0.05] p-3 flex items-center overflow-hidden">
              
              {/* Tick Marks (80MHz to 108MHz) */}
              <div className="w-full flex justify-between items-center px-4 pointer-events-none opacity-40">
                {[80, 85, 90, 95, 100, 105, 108].map((f) => (
                  <div key={f} className="flex flex-col items-center gap-1">
                    <span className="text-[10px] font-mono text-gray-400">{f}</span>
                    <div className="w-0.5 h-3 bg-gray-500" />
                  </div>
                ))}
              </div>

              {/* Glowing Tuner Needle */}
              <motion.div
                animate={{ left: `${Math.min(95, Math.max(5, tunerPercentage))}%` }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-pink-500 to-indigo-500 shadow-[0_0_15px_rgba(6,182,212,0.9)] z-20"
              >
                <div className="absolute top-0 -left-1.5 w-4 h-2 bg-cyan-400 rounded-b-sm shadow-md" />
                <div className="absolute bottom-0 -left-1.5 w-4 h-2 bg-pink-500 rounded-t-sm shadow-md" />
              </motion.div>
            </div>
          </div>

          {/* Genre Category Filters */}
          <div className="pt-6 flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-gray-500 mr-2">Genres:</span>
            {[
              { id: 'all', label: 'All World Stations' },
              { id: 'chill', label: 'Chill & Ambient' },
              { id: 'electronic', label: 'Electronic / Dance' },
              { id: 'jazz', label: 'Jazz & Acoustic' },
              { id: 'pop', label: 'Pop & Radio Hits' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-gray-900 font-bold shadow-md'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* World Station Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStations.map((station) => {
              const isSelected = activeStation.id === station.id;

              return (
                <button
                  key={station.id}
                  type="button"
                  onClick={() => {
                    setActiveStation(station);
                    setIsPlaying(true);
                  }}
                  className={`p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-indigo-400/80 shadow-[0_0_20px_rgba(99,102,241,0.25)]'
                      : 'bg-[#181926]/60 border-white/[0.04] hover:bg-[#1f2030] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{station.flag}</span>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">{station.name}</h4>
                      <p className="text-[11px] text-gray-400 mt-0.5">{station.genre}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-indigo-300 block">
                      {station.frequency} MHz
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">{station.bitrate}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Banner */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-2">
              <Globe size={14} className="text-emerald-400" />
              Tune into over 20,000 radio stations from Tokyo to London, enhanced in real time with 3D Spatial Audio and Boom EQ presets.
            </span>
            <span className="font-mono text-gray-500">120+ Countries Available</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
