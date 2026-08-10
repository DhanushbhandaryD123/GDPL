

import { motion } from 'motion/react';

export function Boom2FeatureGrid() {
  return (
    <section className="pt-12 pb-4 px-4 max-w-[1400px] mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="rounded-3xl relative overflow-hidden group shadow-lg min-h-[400px]"
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video 
              src="/boom2/boom2-efect.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Dark Overlay (Gradient from bottom) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:bg-black/70 transition-all duration-500 z-10" />
          
          {/* Text Content */}
          <div className="relative z-20 p-6 flex flex-col justify-end h-full">
            <h3 className="text-3xl md:text-[32px] text-white text-center font-normal tracking-wide leading-snug mb-4 lg:mb-0 lg:group-hover:mb-4 transition-all duration-500">
              3D<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#ec4899]">Surround sound</span>
            </h3>
            
            <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
              <div className="overflow-hidden">
                <p className="text-gray-200 text-[15px] text-center leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                  Experience immersive 3D audio that puts you in the center of the action.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="rounded-3xl relative overflow-hidden group shadow-lg min-h-[400px]"
        >
          {/* Image Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/boom2/t2.png" 
              alt="Powerful Audio Effects"
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Dark Overlay (Gradient from bottom) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:bg-black/70 transition-all duration-500 z-10" />
          
          {/* Text Content */}
          <div className="relative z-20 p-6 flex flex-col justify-end h-full">
            <h3 className="text-3xl md:text-[32px] text-white text-center font-normal tracking-wide leading-snug mb-4 lg:mb-0 lg:group-hover:mb-4 transition-all duration-500">
              Powerful<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#ec4899]">Audio Effects</span>
            </h3>
            
            <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
              <div className="overflow-hidden">
                <p className="text-gray-200 text-[15px] text-center leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                  Apply advanced effects like Ambience, Fidelity, and more to enhance every detail.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="rounded-3xl relative overflow-hidden group shadow-lg min-h-[400px]"
        >
          {/* Image Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/boom2/t4.png" 
              alt="Volume Booster"
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Dark Overlay (Gradient from bottom) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:bg-black/70 transition-all duration-500 z-10" />
          
          {/* Text Content */}
          <div className="relative z-20 p-6 flex flex-col justify-end h-full">
            <h3 className="text-3xl md:text-[32px] text-white text-center font-normal tracking-wide leading-snug mb-4 lg:mb-0 lg:group-hover:mb-4 transition-all duration-500">
              Volume<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#ec4899]">Booster</span>
            </h3>
            
            <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
              <div className="overflow-hidden">
                <p className="text-gray-200 text-[15px] text-center leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                  Boost your system volume beyond the limits and enjoy every sound at its best.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="rounded-3xl relative overflow-hidden group shadow-lg min-h-[400px]"
        >
          {/* Image Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/boom2/t3.png" 
              alt="System Wide Control"
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Dark Overlay (Gradient from bottom) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:bg-black/70 transition-all duration-500 z-10" />
          
          {/* Text Content */}
          <div className="relative z-20 p-6 flex flex-col justify-end h-full">
            <h3 className="text-3xl md:text-[32px] text-white text-center font-normal tracking-wide leading-snug mb-4 lg:mb-0 lg:group-hover:mb-4 transition-all duration-500">
              System Wide<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#ec4899]">Control</span>
            </h3>
            
            <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
              <div className="overflow-hidden">
                <p className="text-gray-200 text-[15px] text-center leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                  Control volume, boost, and effects across all apps and outputs.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
