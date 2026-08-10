import { motion } from 'motion/react';
import { 
  Flower2, 
  Video, 
  Camera, 
  Type, 
  Wand2, 
  PlayCircle, 
  Lock,
  MoreHorizontal,
  ChevronRight
} from 'lucide-react';

export function MacroFocus() {
  const features = [
    { icon: <Flower2 className="w-5 h-5 text-white" />, title: 'Macro Mode', desc: 'Capture tiny details\nwith stunning clarity' },
    { icon: <Wand2 className="w-5 h-5 text-white" />, title: 'Filters', desc: 'Apply beautiful filters\nto make shots stand out' },
    { icon: <Video className="w-5 h-5 text-white" />, title: 'HD Camera Mode', desc: 'High resolution for\nsharp & vibrant photos' },
    { icon: <PlayCircle className="w-5 h-5 text-white" />, title: 'Live Photos', desc: 'Capture moments in\nmotion with Live Photo' },
    { icon: <Camera className="w-5 h-5 text-white" />, title: 'Photo & Video', desc: 'Take photos or record\nvideos with ease' },
    { icon: <Lock className="w-5 h-5 text-white" />, title: 'Lock Protection', desc: 'Protect your private\nphotos & videos' },
    { icon: <Type className="w-5 h-5 text-white" />, title: 'Text Capture', desc: 'Extract text instantly\nfrom any image' },
    { icon: <MoreHorizontal className="w-5 h-5 text-white" />, title: 'More Tools', desc: 'And many more\npowerful tools' }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-stretch">
          
          {/* Left Column: Macro Feature Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#1B271D] flex flex-col group relative shadow-2xl h-[450px] md:h-[650px]"
          >
            {/* Background Image (Cover to prevent mobile overflow/squishing) */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/cameraplus/c1.png" 
                alt="Macro Photography Before/After"
                className="w-full h-full object-cover opacity-80 transition-transform duration-[2s] group-hover:scale-110"
              />
            </div>
            
            {/* Gradient Overlay (stronger at bottom for text readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B271D]/40 to-transparent pointer-events-none" />

            {/* Text Content overlaying the image */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-8 md:p-12 z-20 pointer-events-none">
              <div className="pointer-events-auto translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#A3D9A5] text-xs font-bold tracking-widest uppercase mb-4">
                  <Flower2 className="w-3.5 h-3.5" />
                  MACRO MODE
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-8">
                  See the tiny world<br />in incredible detail.
                </h2>
                <button className="flex items-center gap-4 px-6 py-4 bg-white/10 hover:bg-white text-white hover:text-black rounded-full font-bold transition-all duration-300 border border-white/20 w-fit group/btn backdrop-blur-sm">
                  Explore Macro
                  <div className="w-8 h-8 rounded-full bg-white group-hover/btn:bg-black flex items-center justify-center transition-colors">
                    <ChevronRight className="w-5 h-5 text-black group-hover/btn:text-white" strokeWidth={3} />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Features Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[55%] flex flex-col justify-center py-6"
          >
            <div className="mb-10 lg:mb-14 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-4">
                Powerful Features
              </h2>
              <p className="text-gray-500 text-lg max-w-lg mx-auto lg:mx-0">
                A complete suite of creative tools packed into one intuitive interface.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 md:gap-x-10 md:gap-y-12">
              {features.map((feature, idx) => (
                <motion.div 
                  whileHover={{ y: -5 }}
                  key={idx} 
                  className="flex items-start gap-4 p-4 -m-4 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 border border-transparent hover:border-gray-100 cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#00B4B4] to-[#009b9b] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00B4B4]/30">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-gray-900 font-bold text-base md:text-lg mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex justify-center lg:justify-start">
              <button className="group flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-black text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-gray-900/20 hover:shadow-gray-900/40 hover:-translate-y-1">
                View All Features
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}