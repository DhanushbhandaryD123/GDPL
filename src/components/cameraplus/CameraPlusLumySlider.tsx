import { useState } from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

export function CameraPlusLumySlider() {
  const [exposure, setExposure] = useState(50);
  
  // Calculate brightness filter based on exposure (0-100)
  // 50 is normal (brightness 1)
  // 0 is dark (brightness 0.4)
  // 100 is bright (brightness 1.8)
  const brightness = 0.4 + (exposure / 100) * 1.4;

  const lowLightImage = "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop";

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
          
          {/* Left Side: Text and Custom Slider */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
           
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#00B4B4] to-[#007a7a]">
              Introducing AirSnap
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Perfect Exposure, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4B4] to-[#007a7a]">One Handed.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-12 max-w-lg">
              Say goodbye to awkward tapping and swiping. With "Lumy", an on-screen slider lets you adjust the exposure seamlessly with a single thumb, capturing the perfect light instantly.
            </p>

            {/* Interactive Web Slider Control */}
            <div className="w-full max-w-md bg-[#fafafa] p-6 md:p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
              <div className="flex justify-between items-center mb-6">
                <span className="font-semibold text-gray-700">Try it out:</span>
                <span className="text-sm font-bold bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm text-[#00B4B4]">
                  {exposure}% Exposure
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <Moon className="text-gray-400 shrink-0" size={24} />
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={exposure}
                  onChange={(e) => setExposure(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00B4B4]"
                />
                <Sun className="text-orange-400 shrink-0" size={24} />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Mock iPhone showing real-time edit */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Minimalist Phone Frame */}
            <div className="relative w-[300px] h-[600px] md:w-[350px] md:h-[700px] bg-black rounded-[50px] md:rounded-[60px] border-[12px] md:border-[14px] border-gray-900 shadow-2xl overflow-hidden flex items-center justify-center">
              
              {/* Dynamic Image */}
              <img 
                src={lowLightImage} 
                alt="Mountain landscape"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-75"
                style={{ filter: `brightness(${brightness})` }}
              />

              {/* Camera App UI Overlay (Mock) */}
              <div className="absolute inset-0 pointer-events-none flex flex-col justify-between">
                {/* Top bar */}
                <div className="h-20 bg-gradient-to-b from-black/60 to-transparent w-full flex items-start justify-between px-6 py-4">
                   <div className="w-8 h-8 rounded-full bg-white/20" />
                   <div className="w-8 h-8 rounded-full bg-white/20" />
                </div>

                {/* Lumy Slider Overlay inside the phone (Visual only) */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 h-64 w-8 bg-black/40 backdrop-blur-md rounded-full border border-white/20 flex flex-col items-center justify-center py-4">
                   <div className="w-1 h-full bg-white/30 rounded-full relative">
                     <div 
                        className="absolute bottom-0 w-full bg-[#00B4B4] rounded-full transition-all duration-75"
                        style={{ height: `${exposure}%` }}
                     />
                     <div 
                        className="absolute w-4 h-4 bg-white rounded-full -left-1.5 transition-all duration-75 shadow-lg"
                        style={{ bottom: `calc(${exposure}% - 8px)` }}
                     />
                   </div>
                </div>

                {/* Bottom bar */}
                <div className="h-32 bg-black/80 backdrop-blur-md w-full flex items-center justify-center pb-6">
                   <div className="w-16 h-16 rounded-full border-4 border-white/80 bg-white/20" />
                </div>
              </div>

            </div>

            {/* Decorative background blobs behind the phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-tr from-orange-400/20 to-blue-500/20 rounded-full blur-[100px] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
