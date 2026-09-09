import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, SkipForward, SkipBack, Shuffle, Repeat, Volume2, Music2, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  format: string;
  genre: string;
  vinylColor: string;
}

export function Boom3DAudioPlayer() {
  const { t } = useTranslation();

  const tracks: Track[] = [
    {
      id: 1,
      title: 'Midnight Odyssey (3D Spatial Master)',
      artist: 'Kavinsky & Daft Sound',
      album: 'Cinematic Dimensions',
      duration: '03:48',
      format: '24-Bit / 192kHz FLAC',
      genre: 'Synthwave / Atmos',
      vinylColor: 'from-indigo-600 to-purple-600',
    },
    {
      id: 2,
      title: 'Acoustic Horizon & Strings',
      artist: 'The Nordic Philharmonic',
      album: 'Pure Natural Acoustics',
      duration: '04:15',
      format: 'DSD 256 Lossless',
      genre: 'Classical Chamber',
      vinylColor: 'from-amber-600 to-rose-600',
    },
    {
      id: 3,
      title: 'Hyperdrive Sub-Bass Pulse',
      artist: 'Neurotech Lab',
      album: 'Low End Theories',
      duration: '02:59',
      format: 'Hi-Res Spatial 3D',
      genre: 'Electronic Beats',
      vinylColor: 'from-cyan-600 to-blue-600',
    },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(85);
  const [progress, setProgress] = useState(42);

  const currentTrack = tracks[currentTrackIndex];

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <section id="state-of-the-art-audio-player" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-gray-900 scroll-mt-20 md:scroll-mt-24">
      {/* Background Soft Pastel Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-purple-100/50 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-indigo-100/50 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-[850px] mx-auto mb-16 md:mb-20 space-y-4">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight"
          >
            {t('boom3d.key_features.player_title') || 'State of the Art Audio Player'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-[760px] mx-auto"
          >
            {t('boom3d.key_features.player_desc') ||
              'Play your locally stored songs with unbeatable Boom effects with our full-fledged audio player and create playlists to organize your music collections.'}
          </motion.p>
        </div>

        {/* Player Showcase Board */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Spinning Vinyl Player in Polished Silver/Obsidian Enclosure */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-center justify-center"
          >
            <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-3xl bg-white border border-gray-200/80 shadow-[0_25px_70px_rgba(0,0,0,0.08)] p-6 flex items-center justify-center overflow-hidden">
              
              {/* Vinyl Turntable Base */}
              <div className="relative w-full h-full rounded-full bg-slate-900 border-4 border-gray-200 shadow-inner flex items-center justify-center">
                
                {/* Rotating Vinyl Record */}
                <motion.div
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="relative w-[92%] h-[92%] rounded-full bg-gradient-to-tr from-[#15151c] via-[#09090d] to-[#1c1c24] border border-white/10 shadow-2xl flex items-center justify-center cursor-pointer"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {/* Vinyl Grooves (Concentric Circles) */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full border border-white/[0.04] pointer-events-none"
                      style={{
                        width: `${48 + i * 8}%`,
                        height: `${48 + i * 8}%`,
                      }}
                    />
                  ))}

                  {/* Vinyl Center Label */}
                  <div className={`w-28 h-28 sm:w-34 sm:h-34 rounded-full bg-gradient-to-br ${currentTrack.vinylColor} p-1 shadow-lg flex flex-col items-center justify-center text-center relative z-10`}>
                    <div className="w-full h-full rounded-full bg-black/40 backdrop-blur-xs flex flex-col items-center justify-center p-2 text-white">
                      <Music2 size={18} className="mb-0.5 text-white/90" />
                      <span className="text-[10px] font-bold uppercase tracking-wider leading-tight max-w-[85px] truncate">
                        {currentTrack.artist}
                      </span>
                      <span className="text-[8px] opacity-80 font-mono">BOOM 3D</span>
                    </div>
                  </div>

                  {/* Spindle hole */}
                  <div className="absolute w-3 h-3 rounded-full bg-gray-900 border border-white/50 z-20" />
                </motion.div>

                {/* Tonearm Simulation */}
                <motion.div 
                  animate={{ rotate: isPlaying ? 24 : 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute top-4 right-4 w-24 h-32 pointer-events-none origin-top-right z-30"
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-gray-300 border-2 border-gray-600 shadow-md ml-auto" />
                  <div className="w-1 h-24 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full mx-auto -mt-1 shadow-sm" />
                  <div className="w-4 h-6 bg-indigo-500 rounded -ml-1 mt-0 shadow-lg border border-indigo-200" />
                </motion.div>

              </div>

              {/* Lossless Quality Badge Overlay */}
              <div className="absolute bottom-4 left-6 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 text-[11px] font-mono font-bold text-purple-700 flex items-center gap-1.5 shadow-md">
                <Sparkles size={12} className="text-purple-600" />
                <span>{currentTrack.format}</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Player Deck & Equalized Wave Spectrum (Light Theme) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              
              {/* Currently Playing Track Info */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-600 font-bold">
                    Now Playing with 3D Spatial Audio
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-1 leading-snug">
                    {currentTrack.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">{currentTrack.artist} • {currentTrack.album}</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 font-mono text-gray-700 border border-gray-200 shrink-0">
                  {currentTrack.genre}
                </span>
              </div>

              {/* 32-Band Live Frequency Audio Spectrum Analyzer */}
              <div className="bg-gray-950 rounded-2xl p-4 border border-gray-800 mb-6 shadow-inner">
                <div className="flex justify-between items-center text-[10px] uppercase font-mono text-gray-400 mb-2">
                  <span>32-Band Spectrum Analyzer</span>
                  <span className="text-indigo-400 font-semibold">{isPlaying ? 'Output: 192 kHz Lossless' : 'Paused'}</span>
                </div>
                <div className="flex items-end justify-between gap-1 h-16 w-full pt-2">
                  {[28, 45, 65, 80, 95, 82, 70, 55, 68, 88, 92, 74, 60, 48, 70, 85, 90, 75, 62, 50, 65, 82, 94, 76, 58, 45, 60, 75, 85, 70, 52, 40].map((baseHeight, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: isPlaying 
                          ? [`${Math.max(12, baseHeight * 0.4)}%`, `${Math.max(16, baseHeight * 0.95)}%`, `${Math.max(10, baseHeight * 0.5)}%`] 
                          : '8%'
                      }}
                      transition={{
                        duration: 0.5 + (i % 5) * 0.1,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-full rounded-t transition-all"
                      style={{
                        backgroundColor: i > 24 ? '#ec4899' : i > 12 ? '#8b5cf6' : '#3b82f6',
                        opacity: isPlaying ? 0.95 : 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Scrubbable Waveform & Timeline */}
              <div className="space-y-1.5 mb-6">
                <div className="relative w-full">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={(e) => setProgress(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-gray-500">
                  <span>01:36</span>
                  <span>{currentTrack.duration}</span>
                </div>
              </div>

              {/* Audio Controls */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-gray-500">
                  <button type="button" className="p-2 hover:text-gray-900 transition-colors cursor-pointer">
                    <Shuffle size={17} />
                  </button>
                  <button type="button" className="p-2 hover:text-gray-900 transition-colors cursor-pointer">
                    <Repeat size={17} />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={prevTrack}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-800 transition-colors cursor-pointer"
                  >
                    <SkipBack size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 flex items-center justify-center text-white shadow-lg shadow-indigo-200 transition-transform hover:scale-105 cursor-pointer"
                  >
                    {isPlaying ? <Pause size={22} fill="white" /> : <Play size={22} fill="white" className="ml-0.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={nextTrack}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-800 transition-colors cursor-pointer"
                  >
                    <SkipForward size={18} />
                  </button>
                </div>

                {/* Volume Slider Mini */}
                <div className="flex items-center gap-2 text-gray-500">
                  <Volume2 size={16} />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-16 sm:w-20 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                </div>
              </div>

              {/* Playlist Tray */}
              <div className="mt-8 pt-6 border-t border-gray-100 space-y-2">
                <span className="text-xs uppercase font-mono tracking-widest text-gray-400 block mb-2 font-bold">
                  Quick Playlist Tracks:
                </span>
                {tracks.map((t, idx) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      setCurrentTrackIndex(idx);
                      setIsPlaying(true);
                    }}
                    className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-colors cursor-pointer ${
                      currentTrackIndex === idx
                        ? 'bg-indigo-50 border border-indigo-200 text-indigo-900 font-semibold'
                        : 'bg-slate-50 border border-gray-100 hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-gray-400">{idx + 1}</span>
                      <div>
                        <p className="text-xs font-bold text-gray-900">{t.title}</p>
                        <p className="text-[10px] text-gray-500">{t.artist}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-gray-400">{t.duration}</span>
                  </button>
                ))}
              </div>

            </div>
          </motion.div>

        </div>

        {/* 4-Card Audio Engine Breakdown Strip (Light Theme) */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-gray-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow group"
          >
            <span className="text-[11px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200 mb-4 inline-block">
              DAC Bit-Perfect
            </span>
            <h4 className="text-base font-bold text-gray-900 mb-2">High-Resolution Engine</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Bypasses standard operating system audio degradation to feed raw, bit-perfect 24-bit 192kHz signals straight to your headphones or external DAC.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow group"
          >
            <span className="text-[11px] font-mono font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200 mb-4 inline-block">
              Lossless Codecs
            </span>
            <h4 className="text-base font-bold text-gray-900 mb-2">Universal Codec Support</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Native high-performance playback for FLAC, WAV, ALAC, AIFF, DSD, and OGG with zero audio conversion or downsampling quality loss.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow group"
          >
            <span className="text-[11px] font-mono font-bold text-pink-700 bg-pink-50 px-2.5 py-1 rounded-full border border-pink-200 mb-4 inline-block">
              Smart Library
            </span>
            <h4 className="text-base font-bold text-gray-900 mb-2">Dynamic Playlist Manager</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Drag-and-drop local audio folders with instant ID3 album artwork indexing, seamless playlist curation, and gapless audio playback transitions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow group"
          >
            <span className="text-[11px] font-mono font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200 mb-4 inline-block">
              Multichannel 3D
            </span>
            <h4 className="text-base font-bold text-gray-900 mb-2">Spatial Stereo Upmix</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Transforms standard 2-channel stereo tracks into an expansive soundstage with virtual height and room acoustics that feel like a live performance.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
