import { motion } from 'motion/react';
import CountUp from 'react-countup';
import { Calendar, Users, Package } from 'lucide-react'; // Removed MoveRight since button is removed

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#020617] font-sans h-[60vh] min-h-[450px] flex items-center">
      {/* Background Image & Heavy Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/team/GDPL-team.png" 
          alt="Global Delight Team" 
          className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
        />
        {/* Extremely dark blue/black overlay to match reference */}
        <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex flex-col lg:flex-row items-center justify-center pt-8">
        
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[50%] flex flex-col items-start text-white pt-2 lg:pt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-2"
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 text-white"
          >
            Creating Delight.<br />
            Delivering Impact.
          </motion.h1>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-y-4 mb-4"
          >
            <div className="flex items-center gap-3 pr-6 border-r border-gray-700/50">
              <div className="text-blue-500 opacity-80 p-2 border border-blue-500/30 rounded-lg bg-blue-500/10">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xl font-bold text-white leading-tight">
                  <CountUp end={2007} duration={2.5} separator="" />
                </div>
                <div className="text-[10px] text-gray-400">Founded</div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-6 border-r border-gray-700/50">
              <div className="text-blue-500 opacity-80 p-2 border border-blue-500/30 rounded-lg bg-blue-500/10">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xl font-bold text-white leading-tight">
                  <CountUp end={30} duration={2.5} />M+
                </div>
                <div className="text-[10px] text-gray-400">Users Globally</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pl-6">
              <div className="text-blue-500 opacity-80 p-2 border border-blue-500/30 rounded-lg bg-blue-500/10">
                <Package className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xl font-bold text-white leading-tight">
                  <CountUp end={50} duration={2.5} />+
                </div>
                <div className="text-[10px] text-gray-400">Products Built</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-[50%] h-[300px] lg:h-[450px] relative mt-4 lg:mt-0 flex items-center justify-center">

          {/* Static Globe Image Replacing 3D Canvas */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-10 flex justify-center items-center scale-[1.1] lg:scale-[1.2] xl:scale-[1.3]"
          >
            <img 
              src="/team/global.png" 
              alt="Global Delight Digital Globe"
              className="w-[350px] md:w-[500px] lg:w-[650px] xl:w-[750px] h-auto object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
