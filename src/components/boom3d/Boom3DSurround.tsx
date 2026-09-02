import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const DottedWave = ({ className, color }: { className?: string, color: string }) => (
  <svg viewBox="0 0 500 200" preserveAspectRatio="none" className={className}>
    <path d="M0,100 C150,200 350,0 500,100" fill="none" stroke={color} strokeWidth="2" strokeDasharray="4 8" strokeLinecap="round" />
    <path d="M0,120 C150,220 350,20 500,120" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4 8" strokeLinecap="round" opacity="0.6" />
    <path d="M0,80 C150,180 350,-20 500,80" fill="none" stroke={color} strokeWidth="1" strokeDasharray="4 8" strokeLinecap="round" opacity="0.3" />
    <path d="M0,140 C150,240 350,40 500,140" fill="none" stroke={color} strokeWidth="1" strokeDasharray="4 8" strokeLinecap="round" opacity="0.2" />
    <path d="M0,60 C150,160 350,-40 500,60" fill="none" stroke={color} strokeWidth="0.5" strokeDasharray="4 8" strokeLinecap="round" opacity="0.1" />
  </svg>
);

export function Boom3DSurround() {
  const { t } = useTranslation();
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      
      {/* Decorative Background Elements (Animated Sound Waves) */}
      <motion.div 
        animate={{ x: [-20, 20, -20] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] -left-[10%] md:-left-[5%] w-[300px] md:w-[500px] h-[200px] opacity-40 pointer-events-none"
      >
        <DottedWave color="#3b82f6" className="w-full h-full object-cover" />
      </motion.div>

      <motion.div 
        animate={{ x: [20, -20, 20] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] -right-[10%] md:-right-[5%] w-[300px] md:w-[500px] h-[200px] opacity-40 pointer-events-none rotate-180"
      >
        <DottedWave color="#ec4899" className="w-full h-full object-cover" />
      </motion.div>

      {/* Subtle Glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40" />
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] translate-x-1/3 pointer-events-none opacity-40" />

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            {t('boom3d.surround.title')}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-[980px] mx-auto leading-relaxed text-center">
            Fortified with an innovative virtual 3D surround sound technology, Boom 3D redefines the way people listen to<br className="hidden lg:inline" />{' '}
            music, watch movies or play games on their computers with ANY headphones. 3D sound provides an option<br className="hidden lg:inline" />{' '}
            to check audio from each speaker of the virtual 3D surround audio system and also lets you adjust LFE<br className="hidden lg:inline" />{' '}
            (subwoofer) gain, and intensity of audio. Boom 3D completely upgrades the listening experience, by extracting<br className="hidden lg:inline" />{' '}
            every note and nuance from an ordinary stereo track or any compressed audio and playing it back to literally,<br />
            <span className="inline-block mt-1">"Feel the Music"</span>
          </p>
        </div>

        {/* Orbital Visualizer */}
        <div className="relative w-full max-w-[1200px] mx-auto h-[260px] sm:h-[320px] md:h-[550px] lg:h-[650px] flex items-center justify-center mt-6">
          
          {/* Animated Orbital Rings (Moving Blue Sound Waves) */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ width: '20%', height: '25%', opacity: 0.6 }}
              animate={{ width: '130%', height: '140%', opacity: 0 }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 1.5
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-blue-400/50 rounded-[100%] pointer-events-none"
            />
          ))}

          {/* Static Soft Blue Glow behind Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

          {/* Central Video Player (Replaces the Headphones Icon) */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative z-20 w-[300px] sm:w-[500px] md:w-[750px] lg:w-[950px] xl:w-[1050px] aspect-video bg-black rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(59,130,246,0.25)] border border-gray-100/50 overflow-hidden flex items-center justify-center"
          >
            <video
              src="/boom3D/video3D.mp4"
              autoPlay={navigator.userAgent !== 'ReactSnap'}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* 3 Surround Experience Pillars (Music, Movies, Gaming) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 md:mt-24 max-w-[1200px] mx-auto">
          {/* Music Pillar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-3xl p-8 sm:p-9 bg-white border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(244,63,94,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Top accent glow line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 opacity-80 group-hover:h-1.5 transition-all duration-300" />
            
            {/* Ambient hover sheen */}
            <div className="absolute inset-0 bg-gradient-to-b from-rose-50/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Icon Badge */}
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/25 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <svg viewBox="0 0 32 32" className="w-8 h-8" fill="currentColor">
                <path d="M4 11v10h5l7 6V5l-7 6H4z" />
                <path d="M22 6v10.2A3 3 0 1 0 24 19V9h4V6h-6z" />
              </svg>
            </div>

            <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3 tracking-tight">
              Music
            </h3>
            <p className="relative z-10 text-[0.95rem] text-gray-600 leading-relaxed font-normal">
              {t('boom3d.surround.feature_music')}
            </p>
          </motion.div>

          {/* Movies / Theatre Pillar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative rounded-3xl p-8 sm:p-9 bg-white border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(59,130,246,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Top accent glow line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 opacity-80 group-hover:h-1.5 transition-all duration-300" />

            {/* Ambient hover sheen */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Icon Badge */}
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow-lg shadow-blue-500/25 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <svg viewBox="0 0 32 32" className="w-8 h-8" fill="currentColor">
                <path d="M4 5v22h24V5H4zm3 3h3v3H7V8zm0 5h3v3H7v-3zm0 5h3v3H7v-3zm0 5h3v1H7v-1zm18-2h-3v-3h3v3zm0-5h-3v-3h3v3zm0-5h-3V8h3v3zm0 12h-3v-1h3v1zm-6-16v18H13V7h8z" />
                <polygon points="15.5,12.5 20.5,16 15.5,19.5" />
              </svg>
            </div>

            <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3 tracking-tight">
              Movies
            </h3>
            <p className="relative z-10 text-[0.95rem] text-gray-600 leading-relaxed font-normal">
              {t('boom3d.surround.feature_movies')}
            </p>
          </motion.div>

          {/* Gaming Pillar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative rounded-3xl p-8 sm:p-9 bg-white border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(147,51,234,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Top accent glow line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-400 opacity-80 group-hover:h-1.5 transition-all duration-300" />

            {/* Ambient hover sheen */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Icon Badge */}
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-500/25 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <svg viewBox="0 0 32 32" className="w-8 h-8" fill="currentColor">
                <path d="M25 8H7a6 6 0 0 0-6 6v6a6 6 0 0 0 9.2 5.1L13.8 23h4.4l3.6 2.1A6 6 0 0 0 31 20v-6a6 6 0 0 0-6-6zm3 12a4 4 0 0 1-6.1 3.4L18 21H14l-3.9 2.4A4 4 0 0 1 4 20v-6a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v6z" />
                <rect x="7" y="14" width="6" height="2" rx="0.5" />
                <rect x="9" y="12" width="2" height="6" rx="0.5" />
                <circle cx="21" cy="14" r="1" />
                <circle cx="24" cy="14" r="1" />
                <circle cx="22.5" cy="16.5" r="1" />
                <circle cx="22.5" cy="11.5" r="1" />
              </svg>
            </div>

            <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3 tracking-tight">
              Gaming
            </h3>
            <p className="relative z-10 text-[0.95rem] text-gray-600 leading-relaxed font-normal">
              {t('boom3d.surround.feature_gaming')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* 5.1 Extension Banner (Full Width) */}
      <div className="w-full mt-20 md:mt-24 relative bg-[#040245] flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-12 shadow-[0_20px_50px_rgba(4,2,69,0.5)] border-t border-b border-white/5">
        
        {/* Decorative Waves Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="w-full h-full">
            {[...Array(8)].map((_, i) => (
              <path key={i} d={`M0,${150 + (i*15)} C300,${50 + (i*20)} 700,${250 - (i*15)} 1000,${150 + (i*15)}`} fill="none" stroke="#2563eb" strokeWidth="1" opacity={1 - (i*0.1)} />
            ))}
          </svg>
        </div>

        <div className="w-full max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Left: Extension Icon */}
          <div className="shrink-0 relative z-10 w-[140px] md:w-[160px]">
            <img src="/boom3D/Extension-icon.png" alt="5.1 Extension" className="w-full h-auto object-contain" width={127} height={127} loading="lazy" />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left relative z-10">
            
            {/* Headline */}
            <h3 className="text-2xl md:text-[1.75rem] font-bold text-white tracking-tight whitespace-normal sm:whitespace-nowrap mb-5">
              {t('boom3d.surround.extension_title')}
            </h3>

            {/* Italic Text */}
            <p className="text-white/90 italic text-[14px] md:text-[16px] mb-8 font-medium text-center md:text-left">
              {t('boom3d.surround.extension_note')}
            </p>

            {/* Store Buttons (Centered under text) */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
              <a href="https://chromewebstore.google.com/detail/boom3d-51-surround-for-ne/ndjhebiohmanieefhnhcmlbflfljmhdn?hl=en&authuser=0" target="_blank" rel="noopener noreferrer" className="flex w-full sm:w-auto items-center justify-center gap-2 bg-[#2ab2da] hover:bg-[#2399bd] text-black font-bold px-6 py-2 rounded-full text-[14px] transition-colors border border-transparent shadow-md">
                <img src="/boom3D/Chrome-icon.png" alt="Chrome" className="w-[32px] h-[32px]" width={26} height={26} loading="lazy" />
                {t('boom3d.surround.for_chrome')}
              </a>
              <a href="https://apps.apple.com/us/app/boom3d-5-1-audio-for-netflix/id6445882848?mt=12" target="_blank" rel="noopener noreferrer" className="flex w-full sm:w-auto items-center justify-center gap-2 bg-[#2ab2da] hover:bg-[#2399bd] text-black font-bold px-6 py-2 rounded-full text-[14px] transition-colors border border-transparent shadow-md">
                <img src="/boom3D/Safari-icon.png" alt="Safari" className="w-[32px] h-[32px]" width={27} height={27} loading="lazy" />
                {t('boom3d.surround.for_safari')}
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
