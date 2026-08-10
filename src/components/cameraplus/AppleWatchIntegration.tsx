import { motion } from 'motion/react';
import { Camera, ChevronRight } from 'lucide-react';

export function AppleWatchIntegration() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="bg-gradient-to-r from-[#F0FDFD] to-[#E0F6F6] rounded-[30px] md:rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center gap-10 lg:gap-24 p-8 md:p-12 lg:p-16">
          
          {/* Left Side: Text */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[#00B4B4] font-bold text-[15px] mb-3 md:mb-4">
                Apple Watch
              </h4>
              
              <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#111827] leading-[1.1] mb-4 md:mb-6">
                Live Preview &<br />Remote Trigger
              </h2>
              
              <p className="text-[15px] text-gray-500 mb-8 max-w-sm leading-relaxed">
                Preview your shot live and capture remotely from your wrist.
              </p>

              <a href="#" className="flex items-center gap-1 text-[#00B4B4] font-medium hover:text-[#009b9b] transition-colors">
                Learn more
                <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Mockup */}
          <div className="w-full md:w-1/2 flex justify-center relative min-h-[350px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Floating Camera Icon */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-12 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg shadow-[#00B4B4]/10 z-20"
              >
                <Camera className="w-7 h-7 text-[#00B4B4]" strokeWidth={2} />
              </motion.div>

              {/* Apple Watch Mockup Frame */}
              <div className="relative w-[220px] h-[260px] bg-[#E8E8ED] rounded-[2.5rem] border-[3px] border-[#D1D1D6] shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-10 p-1.5 flex flex-col items-center">
                
                {/* Screen */}
                <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative border-4 border-black p-2 flex flex-col justify-between">
                  <img 
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=400&auto=format&fit=crop" 
                    alt="Watch Live Preview"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  
                  {/* Top Bar */}
                  <div className="relative z-10 flex justify-between w-full pt-1 px-1">
                    <span className="text-[#00B4B4] text-[9px] font-bold">Camera Plus</span>
                    <span className="text-white text-[9px] font-bold">10:09</span>
                  </div>
                  
                  {/* Shutter Button */}
                  <div className="relative z-10 self-center mb-1">
                    <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                      <div className="w-8 h-8 bg-[#00B4B4] rounded-full opacity-90" />
                    </div>
                  </div>
                </div>

                {/* Digital Crown */}
                <div className="absolute top-14 -right-[9px] w-2 h-10 bg-[#C7C7CC] rounded-r-md border-y border-[#B0B0B5] shadow-sm z-0" />
                {/* Side Button */}
                <div className="absolute bottom-16 -right-[7px] w-1 h-12 bg-[#D1D1D6] rounded-r-md z-0" />
              </div>
              
              {/* Watch Bands */}
              <div className="absolute -top-[60px] left-1/2 -translate-x-1/2 w-[140px] h-[60px] bg-gradient-to-b from-gray-100 to-[#E8E8ED] rounded-t-3xl -z-10 shadow-inner" />
              <div className="absolute -bottom-[60px] left-1/2 -translate-x-1/2 w-[140px] h-[60px] bg-gradient-to-t from-gray-100 to-[#E8E8ED] rounded-b-3xl -z-10 shadow-inner" />
              
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
