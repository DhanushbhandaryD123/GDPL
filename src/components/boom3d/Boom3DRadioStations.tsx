import { useState } from 'react';
import { motion } from 'motion/react';
import { Radio, Globe, Signal, Play, Pause, MapPin, Sparkles, Wifi, ShieldCheck, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface RadioStation {
  id: string;
  name: string;
  location: string;
  frequency: number;
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

  const minFreq = 80.0;
  const maxFreq = 108.0;
  const tunerPercentage = ((activeStation.frequency - minFreq) / (maxFreq - minFreq)) * 100;

  return (
    <section id="radio-stations" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-gray-900 scroll-mt-20 md:scroll-mt-24">
      
      {/* Background Radar Waves in soft pastel color */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] pointer-events-none opacity-25">
        {[1, 2, 3, 4].map((ring) => (
          <motion.div
            key={ring}
            animate={{
              scale: [0.8, 1.4, 0.8],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + ring * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full border border-emerald-300"
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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 tracking-wide shadow-xs"
          >
            <Radio size={14} className="text-emerald-600" />
            <span>Over 20,000 Global Stations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight"
          >
            {t('boom3d.key_features.radio_title') || '20,000+ Radio Stations'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-[760px] mx-auto"
          >
            {t('boom3d.key_features.radio_desc') ||
              'Join Boom to enjoy free access to more than 20k local and international internet radio stations across 120 countries.'}
          </motion.p>
        </div>

        {/* Radio Broadcast Tuning Console (Clean Light Theme) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-[0_25px_70px_rgba(0,0,0,0.06)] mb-12"
        >
          {/* Active Station Display & On-Air Badge */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-gray-100">
            
            <div className="flex items-center gap-5">
              {/* Flag Badge */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-gray-200/80 shrink-0 bg-slate-50"
              >
                <span>{activeStation.flag}</span>
              </div>

              <div>
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-[11px] font-bold text-rose-600 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                    Live ON AIR
                  </span>
                  <span className="text-xs font-mono text-gray-500">Stream: {activeStation.bitrate}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
                  {activeStation.name}
                </h3>
                
                <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
                  <MapPin size={12} className="text-gray-400" />
                  {activeStation.location} • <strong className="text-indigo-600 font-semibold">{activeStation.genre}</strong>
                </p>
              </div>
            </div>

            {/* Play/Pause Stream Toggle */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-200 transition-all cursor-pointer"
              >
                {isPlaying ? <Pause size={17} fill="white" /> : <Play size={17} fill="white" />}
                <span>{isPlaying ? 'Streaming Live' : 'Tune In'}</span>
              </button>
            </div>

          </div>

          {/* Analog/Digital Frequency Dial (Distinct Dark Console Inside Light Card) */}
          <div className="py-8 border-b border-gray-100">
            <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-3">
              <span className="flex items-center gap-1.5 uppercase tracking-wider font-semibold text-gray-700">
                <Signal size={14} className="text-emerald-600" /> FM Frequency Band
              </span>
              <span className="text-xl font-bold font-mono text-emerald-600">
                {activeStation.frequency.toFixed(1)} <span className="text-xs text-gray-400">MHz</span>
              </span>
            </div>

            {/* Frequency Ruler Scale */}
            <div className="relative h-14 bg-gray-950 rounded-2xl border border-gray-800 p-3 flex items-center overflow-hidden shadow-inner">
              
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
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-teal-300 to-cyan-400 shadow-[0_0_15px_rgba(52,211,153,0.9)] z-20"
              >
                <div className="absolute top-0 -left-1.5 w-4 h-2 bg-emerald-400 rounded-b-sm shadow-md" />
                <div className="absolute bottom-0 -left-1.5 w-4 h-2 bg-teal-400 rounded-t-sm shadow-md" />
              </motion.div>
            </div>
          </div>

          {/* Genre Category Filters */}
          <div className="pt-6 flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-gray-400 mr-2">Genres:</span>
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
                    ? 'bg-emerald-600 text-white font-bold shadow-sm shadow-emerald-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
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
                      ? 'bg-emerald-50/80 border-emerald-300 shadow-sm'
                      : 'bg-slate-50/60 border-gray-200/60 hover:bg-white hover:border-gray-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{station.flag}</span>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-tight">{station.name}</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">{station.genre}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-emerald-600 block">
                      {station.frequency} MHz
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">{station.bitrate}</span>
                  </div>
                </button>
              );
            })}
          </div>

        </motion.div>

        {/* 3 Comparative Spotlight Cards (Unique layout in light theme) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-5">
              <Wifi size={22} />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Zero-Buffer Global CDN</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Connects directly to localized edge relays across Europe, Asia, and the Americas, eliminating stream stuttering and buffering delay even on slower network connections.
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
              <Headphones size={22} />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">3D Spatial Broadcast Upmix</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Real-time spatial acoustics convert compressed mono and stereo broadcast radio frequencies into wide, immersive 3D surround sound with crisp vocal clarity.
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
              <Globe size={22} />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">120+ Countries & Heritage</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Explore authentic regional broadcasts, national talk shows, indie college radio, and live electronic festival streams with smart mood and genre sorting.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
