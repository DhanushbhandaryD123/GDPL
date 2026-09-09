import { useState, useRef, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Sparkles,
  Zap,
  Radio,
  Sliders,
  Headphones,
  FileAudio,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  format: string;
  src: string;
}

export function Boom3DAudioPlayer() {
  const { t } = useTranslation();

  const tracks: Track[] = useMemo(
    () => [
      {
        id: 1,
        title: 'Midnight Odyssey (3D Spatial Master)',
        artist: 'Kavinsky & Daft Sound',
        duration: '03:48',
        format: '24-Bit / 192 kHz FLAC',
        src: '/boom3D/song1.mp3',
      },
      {
        id: 2,
        title: 'Cinematic Horizon & Strings',
        artist: 'Nordic Philharmonic',
        duration: '04:15',
        format: 'DSD 256 Lossless Master',
        src: '/boom3D/song2.mp3',
      },
      {
        id: 3,
        title: 'Cyberpulse Sub-Bass Experiment',
        artist: 'Neurotech Labs',
        duration: '03:12',
        format: '32-Bit Float Studio WAV',
        src: '/boom3D/song1.mp3',
      },
    ],
    []
  );

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(85);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(32);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Boom 3D Effect Toggles
  const [surround3D, setSurround3D] = useState(true);
  const [bassBoost, setBassBoost] = useState(true);
  const [clarity, setClarity] = useState(true);

  const currentTrack = tracks[currentTrackIndex];

  // Handle Play/Pause with real HTML5 audio
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(true)); // fallback to animation state if autoplay blocked
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setProgress(0);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.src = currentTrack.src;
      audioRef.current.play().catch(() => {});
    }
  }, [currentTrackIndex]);

  return (
    <section
      id="state-of-the-art-audio-player"
      className="relative py-20 lg:py-28 overflow-hidden bg-white text-gray-900 scroll-mt-20 md:scroll-mt-24 select-none border-b border-gray-100"
    >
      {/* Hidden native audio element */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={() => {
          if (audioRef.current && audioRef.current.duration) {
            setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
          }
        }}
        onEnded={handleNext}
      />

      {/* Subtle Ambient Light Gradients on Pure White */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-r from-blue-100/40 via-purple-100/30 to-pink-100/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimal Header: High Impact, Less Text */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold tracking-wide uppercase mb-3 shadow-xs"
          >
            <Headphones size={13} className="text-indigo-600" />
            <span>{t('boom3d.key_features.player_badge', 'High-Resolution Music Engine')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight"
          >
            {t('boom3d.key_features.player_title', 'State of the Art Audio Player')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-gray-500 font-medium max-w-xl mx-auto"
          >
            {t(
              'boom3d.key_features.player_desc',
              'Play locally stored songs with unbeatable Boom 3D effects and create customized playlists.'
            )}
          </motion.p>
        </div>

        {/* Visual Showcase: Realistic 3D Audio Hardware Object */}
        <div className="relative max-w-4xl mx-auto mb-10 md:mb-12">
          
          {/* Main Realistic Render */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <img
              src="/boom3D/state-of-the-art-player.jpg"
              alt="Boom 3D State of the Art Audio Player and Studio Headphones"
              className="w-full h-auto max-h-[520px] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.12)] rounded-3xl"
              width={1792}
              height={1024}
              loading="lazy"
            />

            {/* Floating Hotspot Badge: 24-Bit Direct Stream */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute top-4 left-4 sm:top-8 sm:left-6 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 shadow-md text-xs font-semibold text-gray-800 flex items-center gap-2 hidden sm:flex"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>24-Bit / 192 kHz FLAC Direct</span>
            </motion.div>

            {/* Floating Hotspot Badge: Patented 3D Spatial Audio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute top-4 right-4 sm:top-8 sm:right-6 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 shadow-md text-xs font-semibold text-gray-800 flex items-center gap-2 hidden sm:flex"
            >
              <Radio size={13} className="text-pink-500" />
              <span>Patented 3D Spatial Audio</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive Audio Console Dock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200/80 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.06)] p-5 sm:p-7 max-w-4xl mx-auto space-y-5"
        >
          {/* Top Row: Track Info + Dynamic EQ Waveform + Boom 3D Toggles */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Track Info */}
            <div className="flex items-center gap-3.5 min-w-[240px]">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 p-[2px] shadow-sm shrink-0">
                <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center text-white">
                  <Headphones size={20} className={isPlaying ? 'text-cyan-400 animate-pulse' : 'text-gray-400'} />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 tracking-tight leading-snug">
                  {currentTrack.title}
                </h4>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  {currentTrack.artist} • <span className="font-mono text-indigo-600 font-semibold">{currentTrack.format}</span>
                </p>
              </div>
            </div>

            {/* Reactive Dynamic EQ Mini Bars */}
            <div className="flex items-center gap-1 h-6 px-3 py-1 bg-slate-50 border border-slate-200/80 rounded-xl">
              {[0.4, 0.9, 0.6, 1.0, 0.7, 0.5, 0.8, 0.3, 0.95, 0.65].map((scale, i) => (
                <motion.span
                  key={i}
                  animate={{
                    height: isPlaying ? `${Math.max(4, scale * 18)}px` : '3px',
                  }}
                  transition={{
                    duration: 0.35 + (i % 4) * 0.1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                  className="w-1 rounded-full transition-colors"
                  style={{
                    backgroundColor: isPlaying
                      ? i > 6
                        ? '#ec4899'
                        : i > 3
                        ? '#8b5cf6'
                        : '#06b6d4'
                      : '#cbd5e1',
                  }}
                />
              ))}
              <span className="ml-2 text-[11px] font-mono font-bold text-gray-500">
                {isPlaying ? 'ACTIVE' : 'READY'}
              </span>
            </div>

            {/* Boom 3D Quick Effect Switches */}
            <div className="flex items-center gap-1.5 self-end md:self-center">
              <button
                type="button"
                onClick={() => setSurround3D(!surround3D)}
                className={`px-2.5 py-1 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition cursor-pointer ${
                  surround3D
                    ? 'bg-cyan-50 border-cyan-200 text-cyan-700 shadow-xs'
                    : 'bg-white border-gray-200 text-gray-400 hover:text-gray-700'
                }`}
              >
                <Radio size={12} className={surround3D ? 'text-cyan-600' : 'text-gray-400'} />
                <span>3D Surround</span>
              </button>

              <button
                type="button"
                onClick={() => setBassBoost(!bassBoost)}
                className={`px-2.5 py-1 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition cursor-pointer ${
                  bassBoost
                    ? 'bg-pink-50 border-pink-200 text-pink-700 shadow-xs'
                    : 'bg-white border-gray-200 text-gray-400 hover:text-gray-700'
                }`}
              >
                <Zap size={12} className={bassBoost ? 'text-pink-600' : 'text-gray-400'} />
                <span>Bass</span>
              </button>

              <button
                type="button"
                onClick={() => setClarity(!clarity)}
                className={`px-2.5 py-1 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition cursor-pointer ${
                  clarity
                    ? 'bg-purple-50 border-purple-200 text-purple-700 shadow-xs'
                    : 'bg-white border-gray-200 text-gray-400 hover:text-gray-700'
                }`}
              >
                <Sliders size={12} className={clarity ? 'text-purple-600' : 'text-gray-400'} />
                <span>Clarity</span>
              </button>
            </div>

          </div>

          {/* Scrubber Timeline */}
          <div className="space-y-1.5">
            <div className="relative w-full flex items-center">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setProgress(val);
                  if (audioRef.current && audioRef.current.duration) {
                    audioRef.current.currentTime = (val / 100) * audioRef.current.duration;
                  }
                }}
                aria-label="Audio player timeline"
                className="w-full h-1.5 bg-gray-100 rounded-full appearance-none cursor-pointer accent-indigo-600 focus:outline-none"
                style={{
                  background: `linear-gradient(to right, #00f0ff 0%, #ec4899 ${progress}%, #e2e8f0 ${progress}%, #e2e8f0 100%)`,
                }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-gray-400">
              <span>01:15</span>
              <span>{currentTrack.duration}</span>
            </div>
          </div>

          {/* Controls Bar: Prev / Play / Next & Volume */}
          <div className="flex items-center justify-between pt-1">
            
            {/* Track Switcher Pills */}
            <div className="flex items-center gap-1 text-xs">
              {tracks.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setCurrentTrackIndex(idx);
                    setIsPlaying(true);
                  }}
                  className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                    currentTrackIndex === idx
                      ? 'bg-gray-900 text-white shadow-xs'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Track {idx + 1}
                </button>
              ))}
            </div>

            {/* Center Controls: Prev, Glowing Play/Pause, Next */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                title="Previous track"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition cursor-pointer"
              >
                <SkipBack size={16} />
              </button>

              <button
                type="button"
                onClick={togglePlay}
                title={isPlaying ? 'Pause' : 'Play'}
                className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#ec4899] via-[#8b5cf6] to-[#00f0ff] shadow-[0_0_25px_rgba(236,72,153,0.35),0_0_15px_rgba(0,240,255,0.25)] hover:scale-105 transition-all cursor-pointer"
              >
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-white">
                  {isPlaying ? <Pause size={18} fill="white" /> : <Play size={18} fill="white" className="ml-0.5" />}
                </div>
              </button>

              <button
                type="button"
                onClick={handleNext}
                title="Next track"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition cursor-pointer"
              >
                <SkipForward size={16} />
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-2 text-gray-500">
              <button
                type="button"
                onClick={() => setIsMuted(!isMuted)}
                title={isMuted ? 'Unmute' : 'Mute'}
                className="hover:text-gray-900 transition cursor-pointer"
              >
                {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
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
                className="w-16 sm:w-24 h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-gray-900"
              />
            </div>

          </div>

        </motion.div>

        {/* Minimal Format Support Pills: Clean, Icon-First */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-gray-600 font-mono font-medium">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/70">
            <FileAudio size={13} className="text-indigo-600" /> FLAC Lossless
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/70">
            <Sparkles size={13} className="text-cyan-600" /> Apple ALAC
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/70">
            <Zap size={13} className="text-pink-600" /> DSD 256
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/70">
            <Radio size={13} className="text-purple-600" /> Studio WAV 32-Bit
          </span>
        </div>

      </div>
    </section>
  );
}
