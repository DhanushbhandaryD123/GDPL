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
          <p className="text-lg md:text-xl text-gray-600 max-w-[800px] mx-auto font-medium leading-relaxed">
            {t('boom3d.surround.subtitle')}
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
            <img src="/boom3D/Extension-icon.png" alt="5.1 Extension" className="w-full h-auto object-contain" />
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
                <img src="/boom3D/Chrome-icon.png" alt="Chrome" className="w-[32px] h-[32px]" />
                {t('boom3d.surround.for_chrome')}
              </a>
              <a href="https://apps.apple.com/us/app/boom3d-5-1-audio-for-netflix/id6445882848?mt=12" target="_blank" rel="noopener noreferrer" className="flex w-full sm:w-auto items-center justify-center gap-2 bg-[#2ab2da] hover:bg-[#2399bd] text-black font-bold px-6 py-2 rounded-full text-[14px] transition-colors border border-transparent shadow-md">
                <img src="/boom3D/Safari-icon.png" alt="Safari" className="w-[32px] h-[32px]" />
                {t('boom3d.surround.for_safari')}
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
