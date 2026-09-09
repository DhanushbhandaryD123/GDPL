import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Shuffle,
  Repeat,
  Volume2,
  VolumeX,
  Sparkles,
  Zap,
  Disc3,
  Sliders,
  Radio,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AudioTrack {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  format: string;
  coverGradient: string;
  vinylColor: string;
  accent: string;
}

export function Boom3DAudioPlayer() {
  const { t } = useTranslation();

  const playlist: AudioTrack[] = useMemo(
    () => [
      {
        id: 1,
        title: 'Midnight Odyssey (3D Spatial Master)',
        artist: 'Kavinsky & Daft Sound',
        album: 'Cinematic Dimensions',
        duration: '03:48',
        format: '24-Bit / 192 kHz FLAC',
        coverGradient: 'from-pink-600 via-purple-700 to-indigo-900',
        vinylColor: '#ec4899',
        accent: '#ec4899',
      },
      {
        id: 2,
        title: 'Acoustic Horizon & Strings',
        artist: 'Nordic Philharmonic',
        album: 'Pure Natural Soundstage',
        duration: '04:15',
        format: 'DSD 256 Lossless Master',
        coverGradient: 'from-amber-500 via-rose-600 to-purple-900',
        vinylColor: '#f59e0b',
        accent: '#f59e0b',
      },
      {
        id: 3,
        title: 'Cyberpulse Sub-Bass Experiment',
        artist: 'Neurotech Labs',
        album: 'Low End Resonances',
        duration: '03:12',
        format: '32-Bit Float / Studio WAV',
        coverGradient: 'from-cyan-500 via-blue-600 to-indigo-950',
        vinylColor: '#00f0ff',
        accent: '#00f0ff',
      },
    ],
    []
  );

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(85);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(38);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(true);

  // Boom 3D Effect Toggles
  const [surround3D, setSurround3D] = useState(true);
  const [bassBoost, setBassBoost] = useState(true);
  const [clarity, setClarity] = useState(false);

  const currentTrack = playlist[currentTrackIndex];

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  return (
    <section
      id="state-of-the-art-audio-player"
      className="relative py-20 lg:py-28 overflow-hidden bg-white text-gray-900 scroll-mt-20 md:scroll-mt-24 select-none border-b border-gray-100"
    >
      {/* Dynamic Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-pink-100/60 via-purple-100/40 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-cyan-100/60 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Matching Clean Boom 3D Style */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
          >
            {t('boom3d.key_features.player_title') || 'State of the Art Audio Player'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-2xl sm:max-w-3xl mx-auto"
          >
            {t('boom3d.key_features.player_desc') ||
              'Play your locally stored songs with unbeatable Boom effects with our full-fledged audio player and create playlists to organize your music collections.'}
          </motion.p>
        </div>

        {/* State of the Art Audio Player Window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-b from-[#12131a]/95 to-[#0b0b10]/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.6),0_0_1px_1px_rgba(255,255,255,0.08)] overflow-hidden"
        >
          {/* macOS Titlebar */}
          <div className="px-5 sm:px-7 py-3.5 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-xs font-mono font-medium text-gray-400 tracking-wider hidden sm:inline">
                BOOM 3D • HI-RES MUSIC ENGINE
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Bit-Perfect DAC Direct
              </span>
            </div>
          </div>

          {/* Player Interior */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Album Cover & Real-time Boom Effect Switches */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start space-y-6">
              
              {/* Cover Card with Vinyl Peek Effect */}
              <div className="relative group w-64 h-64 sm:w-72 sm:h-72 mx-auto sm:mx-0">
                {/* Vinyl Record Peeking from Behind on Playing */}
                <motion.div
                  animate={{
                    rotate: isPlaying ? 360 : 0,
                    x: isPlaying ? 40 : 0,
                  }}
                  transition={{
                    rotate: { duration: 4, repeat: Infinity, ease: 'linear' },
                    x: { duration: 0.6, ease: 'easeOut' },
                  }}
                  className="absolute top-4 right-0 w-56 h-56 rounded-full bg-[#0a0a0d] border-2 border-white/10 shadow-2xl flex items-center justify-center pointer-events-none z-0"
                >
                  <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: currentTrack.accent }}
                    >
                      <Disc3 size={20} className="text-white animate-spin" />
                    </div>
                  </div>
                </motion.div>

                {/* Album Cover Art Front Sleeve */}
                <div
                  className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${currentTrack.coverGradient} shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/15 p-6 flex flex-col justify-between z-10 overflow-hidden cursor-pointer`}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 backdrop-blur-md text-white/90 border border-white/10">
                      {currentTrack.format}
                    </span>
                    <Sparkles size={16} className="text-white/80" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-white/70 font-mono font-bold block">
                      Now Playing
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white leading-snug drop-shadow-md">
                      {currentTrack.title}
                    </h3>
                    <p className="text-xs text-white/80 font-medium">
                      {currentTrack.artist}
                    </p>
                  </div>
                </div>
              </div>

              {/* Integrated Boom 3D Effect Toggles */}
              <div className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 space-y-2.5">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-mono font-semibold block">
                  Active Boom 3D Enhancement Suite
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSurround3D(!surround3D)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer border ${
                      surround3D
                        ? 'bg-cyan-500/15 border-cyan-400/40 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    <Radio size={14} className={surround3D ? 'text-cyan-400' : 'text-gray-500'} />
                    <span className="text-[10px]">3D Surround</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setBassBoost(!bassBoost)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer border ${
                      bassBoost
                        ? 'bg-pink-500/15 border-pink-400/40 text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.2)]'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    <Zap size={14} className={bassBoost ? 'text-pink-400' : 'text-gray-500'} />
                    <span className="text-[10px]">Bass Boost</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setClarity(!clarity)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer border ${
                      clarity
                        ? 'bg-purple-500/15 border-purple-400/40 text-purple-300 shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    <Sliders size={14} className={clarity ? 'text-purple-400' : 'text-gray-500'} />
                    <span className="text-[10px]">Vocal Clarity</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Right: Live Dynamic Frequency Visualizer, Scrub Timeline, Transport & Queue */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Dynamic 36-Band Audio Visualizer Screen */}
              <div className="bg-black/60 rounded-2xl p-5 border border-white/10 shadow-inner">
                <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-3">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    LIVE 36-BAND FREQUENCY SPECTRUM
                  </span>
                  <span className="text-cyan-400 font-bold">
                    {isPlaying ? '192 kHz / 24-BIT BIT-PERFECT' : 'PLAYBACK PAUSED'}
                  </span>
                </div>

                {/* Bars */}
                <div className="flex items-end justify-between gap-1 h-20 pt-2">
                  {[
                    25, 45, 68, 88, 98, 85, 70, 55, 65, 82, 92, 75, 60, 48, 72, 86, 94, 78,
                    65, 52, 68, 84, 96, 80, 62, 48, 64, 78, 88, 72, 58, 42, 55, 68, 48, 30,
                  ].map((heightPct, idx) => (
                    <motion.div
                      key={idx}
                      animate={{
                        height: isPlaying
                          ? [
                              `${Math.max(8, heightPct * 0.35)}%`,
                              `${Math.max(14, heightPct * 0.95)}%`,
                              `${Math.max(8, heightPct * 0.45)}%`,
                            ]
                          : '6%',
                      }}
                      transition={{
                        duration: 0.4 + (idx % 6) * 0.08,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-full rounded-t transition-all"
                      style={{
                        background:
                          idx > 24
                            ? 'linear-gradient(to top, #ec4899, #f43f5e)'
                            : idx > 12
                            ? 'linear-gradient(to top, #8b5cf6, #ec4899)'
                            : 'linear-gradient(to top, #00f0ff, #8b5cf6)',
                        opacity: isPlaying ? 0.95 : 0.25,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Scrubber Timeline */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(e) => setProgress(Number(e.target.value))}
                  aria-label="Playback timeline"
                  className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #00f0ff 0%, #ec4899 ${progress}%, rgba(255,255,255,0.1) ${progress}%, rgba(255,255,255,0.1) 100%)`,
                  }}
                />
                <div className="flex justify-between text-xs font-mono text-gray-400">
                  <span>01:28</span>
                  <span>{currentTrack.duration}</span>
                </div>
              </div>

              {/* Master Playback Controls */}
              <div className="flex items-center justify-between pt-1">
                {/* Shuffle / Repeat */}
                <div className="flex items-center gap-3 text-gray-400">
                  <button
                    type="button"
                    onClick={() => setIsShuffle(!isShuffle)}
                    title="Shuffle"
                    className={`p-2 rounded-xl transition cursor-pointer ${
                      isShuffle ? 'text-cyan-400 bg-cyan-500/10' : 'hover:text-white'
                    }`}
                  >
                    <Shuffle size={17} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsRepeat(!isRepeat)}
                    title="Repeat"
                    className={`p-2 rounded-xl transition cursor-pointer ${
                      isRepeat ? 'text-pink-400 bg-pink-500/10' : 'hover:text-white'
                    }`}
                  >
                    <Repeat size={17} />
                  </button>
                </div>

                {/* Skip / Play / Skip */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={handlePrev}
                    title="Previous track"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
                  >
                    <SkipBack size={18} />
                  </button>

                  {/* Glowing Center Play/Pause */}
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    title={isPlaying ? 'Pause' : 'Play'}
                    className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-[#ec4899] via-[#8b5cf6] to-[#00f0ff] shadow-[0_0_30px_rgba(236,72,153,0.35),0_0_20px_rgba(0,240,255,0.3)] hover:scale-105 transition-all cursor-pointer"
                  >
                    <div className="w-full h-full rounded-full bg-[#0b0b10] flex items-center justify-center text-white">
                      {isPlaying ? <Pause size={22} fill="white" /> : <Play size={22} fill="white" className="ml-0.5" />}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    title="Next track"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
                  >
                    <SkipForward size={18} />
                  </button>
                </div>

                {/* Volume Slider Mini */}
                <div className="flex items-center gap-2.5 text-gray-400">
                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    title={isMuted ? 'Unmute' : 'Mute'}
                    className="hover:text-white transition cursor-pointer"
                  >
                    {isMuted || volume === 0 ? <VolumeX size={17} /> : <Volume2 size={17} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      setVolume(Number(e.target.value));
                      setIsMuted(false);
                    }}
                    aria-label="Player volume"
                    className="w-16 sm:w-20 h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>
              </div>

              {/* Quick Interactive Playlist Queue */}
              <div className="pt-5 border-t border-white/10 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block font-semibold">
                  Local Library Queue ({playlist.length} Tracks)
                </span>
                <div className="space-y-1.5">
                  {playlist.map((track, idx) => {
                    const isCurrent = currentTrackIndex === idx;
                    return (
                      <div
                        key={track.id}
                        onClick={() => {
                          setCurrentTrackIndex(idx);
                          setIsPlaying(true);
                        }}
                        className={`p-3 rounded-xl flex items-center justify-between transition-all cursor-pointer border ${
                          isCurrent
                            ? 'bg-white/10 border-white/20 text-white shadow-xs'
                            : 'bg-white/[0.02] border-white/5 hover:bg-white/5 text-gray-400'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-gray-500 w-4">
                            {idx + 1}
                          </span>
                          <div>
                            <p className={`text-xs font-bold ${isCurrent ? 'text-white' : 'text-gray-300'}`}>
                              {track.title}
                            </p>
                            <p className="text-[10px] text-gray-500">
                              {track.artist} • {track.format}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {isCurrent && isPlaying && (
                            <span className="flex items-center gap-0.5 h-3">
                              <span className="w-0.5 h-3 bg-cyan-400 rounded-full animate-pulse" />
                              <span className="w-0.5 h-2 bg-pink-400 rounded-full animate-pulse" />
                              <span className="w-0.5 h-3 bg-purple-400 rounded-full animate-pulse" />
                            </span>
                          )}
                          <span className="text-xs font-mono text-gray-400">{track.duration}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Minimal Feature Highlights: 3 Clean Icon Badges */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-gray-700 text-xs font-medium shadow-xs">
            <Sparkles size={15} className="text-cyan-500 shrink-0" />
            <span>Bit-Perfect Audiophile Engine</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-gray-700 text-xs font-medium shadow-xs">
            <Zap size={15} className="text-pink-500 shrink-0" />
            <span>Universal FLAC, DSD & ALAC Playback</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-gray-700 text-xs font-medium shadow-xs">
            <Radio size={15} className="text-purple-500 shrink-0" />
            <span>Integrated Boom 3D Surround Effects</span>
          </div>
        </div>

      </div>
    </section>
  );
}
