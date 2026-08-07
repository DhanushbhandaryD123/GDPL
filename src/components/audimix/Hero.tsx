import { motion } from 'motion/react';
import { Download, Facebook, Twitter, Instagram, Youtube, Volume2, VolumeX } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: Youtube, href: 'https://youtube.com' },
];

const stemChips = [
  { label: 'Vocals', color: 'bg-pink-600', ring: 'ring-pink-500/40', pos: 'top-[8%] left-[4%]', muted: false, bars: [6, 10, 5, 12, 7, 9] },
  { label: 'Drums', color: 'bg-purple-600', ring: 'ring-purple-500/40', pos: 'top-[42%] -right-2', muted: false, bars: [9, 5, 11, 6, 8, 4] },
  { label: 'Bass', color: 'bg-blue-600', ring: 'ring-blue-500/40', pos: 'bottom-[20%] left-[2%]', muted: true, bars: [4, 6, 4, 5, 4, 6] },
  { label: 'Instruments', color: 'bg-teal-600', ring: 'ring-teal-500/40', pos: 'bottom-[4%] right-[8%]', muted: false, bars: [8, 12, 6, 10, 9, 7] },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white flex items-center">
      {/* Dynamic Background Decor for Light Theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-200/50 blur-[120px] opacity-70" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/50 blur-[120px] opacity-70" />
        <div className="absolute top-[20%] right-[15%] w-[35%] h-[35%] rounded-full bg-pink-200/40 blur-[120px] opacity-70" />
      </div>

      {/* Vertical social rail */}
      <div className="hidden lg:flex flex-col gap-4 absolute left-6 top-1/2 -translate-y-1/2 z-20">
        {socialLinks.map(({ icon: Icon, href }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-colors"
          >
            <Icon className="w-4 h-4" strokeWidth={1.75} />
          </a>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-8"
          > 
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Music <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">separation</span> <br className="hidden lg:block" />
              made easy.
            </h1>

            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl leading-relaxed">
              Remove vocals, create instrumentals and backing tracks, and unleash
              your creativity with AuDimix for Windows.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-105"
              >
                <Download size={20} />
                Download Free Trial
              </a>
              <a
                href="#"
                className="w-full sm:w-auto flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-400 transition-colors"
              >
                <svg viewBox="0 0 23 23" className="w-6 h-6 shrink-0">
                  <path fill="#f25022" d="M1 1h10v10H1z" />
                  <path fill="#00a4ef" d="M1 12h10v10H1z" />
                  <path fill="#7fba00" d="M12 1h10v10H12z" />
                  <path fill="#ffb900" d="M12 12h10v10H12z" />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[11px] text-gray-500">Download from the</span>
                  <span className="block text-sm font-bold text-gray-900">Microsoft Store</span>
                </span>
              </a>
            </div>
          </motion.div>

          {/* Hero Visual — stem separation on a live performance photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-gray-200 shadow-2xl shadow-purple-200/60 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80&auto=format&fit=crop"
                alt="Live vocal performance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {stemChips.map((chip) => (
                <div
                  key={chip.label}
                  className={`absolute ${chip.pos} flex items-center gap-2 ${chip.color} ring-1 ${chip.ring} rounded-xl px-3 py-2 shadow-xl backdrop-blur-sm`}
                >
                  {chip.muted ? (
                    <VolumeX className="w-3.5 h-3.5 text-white/70 shrink-0" strokeWidth={2} />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 text-white shrink-0" strokeWidth={2} />
                  )}
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-[11px] font-bold leading-none">{chip.label}</span>
                    <div className="flex items-end gap-[2px] h-3">
                      {chip.bars.map((h, i) => (
                        <span
                          key={i}
                          className={`w-[2px] rounded-full ${chip.muted ? 'bg-white/30' : 'bg-white/80'}`}
                          style={{ height: `${h}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
