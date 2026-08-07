import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

export function Header() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-800 text-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* Logo Placeholder */}
          <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl shadow-xl shadow-orange-500/30 flex items-center justify-center mb-8">
            <Camera size={48} className="text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Camera Plus <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Pro</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-10 max-w-2xl leading-relaxed">
            Shoot and share beautiful photos & videos from your iPhone or iPod touch.
          </p>

          <a 
            href="#"
            className="transition-transform hover:scale-105"
          >
            {/* Fallback image for App Store badge */}
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Download on the App Store" 
              className="h-[56px] w-auto drop-shadow-xl"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
