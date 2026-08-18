import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Plane, Home, Play, Pause } from 'lucide-react';

const environments = [
  {
    id: 'cafe',
    name: 'Noisy Café',
    icon: Coffee,
    description: 'Drown out the chatter and focus on your music with enhanced clarity.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1920&auto=format&fit=crop',
    audio: '/boom2/cafe.mp3'
  },
  {
    id: 'airplane',
    name: 'Airplane Cabin',
    icon: Plane,
    description: 'Boost low-volume movies over the roar of the jet engine.',
    image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1920&auto=format&fit=crop',
    audio: '/boom2/airplane.mp3'
  },
  {
    id: 'home',
    name: 'Living Room',
    icon: Home,
    description: 'Transform your room into a cinematic 3D surround sound theater.',
    image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=1920&auto=format&fit=crop',
    audio: '/boom2/home.mp3'
  }
];

export function Boom2EnvironmentSim() {
  const [activeEnv, setActiveEnv] = useState(environments[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play blocked:", e));
      }
    }
  }, [activeEnv, isPlaying]);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative py-16 md:py-20 w-full overflow-hidden bg-black">
      {/* Hidden Audio Element */}
      <audio ref={audioRef} loop>
        <source src={activeEnv.audio} type="audio/mpeg" />
      </audio>

      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeEnv.id}
            src={activeEnv.image}
            alt={activeEnv.name}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#060814]/50" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Perfect Sound, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Anywhere.</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Select an environment below to see how Boom 2 adapts your audio to overcome real-world noise.
          </p>
        </motion.div>

        {/* The "Sound Bubble" visualizer */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-10 flex items-center justify-center">
          {/* Animated sound waves radiating outwards (only animate when playing) */}
          <AnimatePresence>
            {isPlaying && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0.2, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                  className="absolute inset-0 border-2 border-blue-400 rounded-full"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0.2, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 0.6 }}
                  className="absolute inset-0 border-2 border-purple-400 rounded-full"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0.2, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 1.2 }}
                  className="absolute inset-0 border-2 border-blue-500 rounded-full"
                />
              </>
            )}
          </AnimatePresence>
          
          {/* Central element (Clickable to play/pause) */}
          <button 
            onClick={toggleAudio}
            className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-black/60 backdrop-blur-md rounded-full border border-white/20 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:scale-105 hover:bg-black/80 transition-all cursor-pointer group"
          >
            {isPlaying ? (
              <Pause className="text-white w-8 h-8 md:w-10 md:h-10 mb-1" fill="currentColor" />
            ) : (
              <Play className="text-white w-8 h-8 md:w-10 md:h-10 mb-1 ml-1" fill="currentColor" />
            )}
            <span className="text-white text-[10px] md:text-xs font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
              {isPlaying ? 'PAUSE' : 'PLAY'}
            </span>
          </button>
        </div>

        {/* Environment Selectors */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 z-20 relative w-full px-4">
          {environments.map((env) => {
            const isActive = activeEnv.id === env.id;
            const Icon = env.icon;
            return (
              <button
                key={env.id}
                onClick={() => {
                  setActiveEnv(env);
                  setIsPlaying(true);
                }}
                className={`flex items-center justify-center gap-2 px-4 py-2 md:px-5 md:py-3 rounded-xl transition-all duration-300 backdrop-blur-md border w-full sm:w-auto ${
                  isActive 
                    ? 'bg-white/20 border-white/50 text-white shadow-[0_0_30px_rgba(255,255,255,0.1)] scale-100 sm:scale-105' 
                    : 'bg-black/40 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-blue-400 shrink-0' : 'shrink-0'} />
                <span className="font-medium tracking-wide text-sm">{env.name}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Equalizer Wave (Below Buttons) */}
        <div className="mt-8 mb-4 h-12 flex items-end justify-center gap-1.5 z-20 relative">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-1.5 rounded-full ${isPlaying ? 'bg-blue-400' : 'bg-gray-600'}`}
              animate={isPlaying ? {
                height: [6, Math.random() * 30 + 10, 6],
              } : { height: 6 }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 0.5 + 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Environment Description */}
        <div className="mt-4 min-h-[80px] md:min-h-[48px] z-20 relative px-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeEnv.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-gray-300 text-sm md:text-base font-medium max-w-xl mx-auto"
            >
              {activeEnv.description}
            </motion.p>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
