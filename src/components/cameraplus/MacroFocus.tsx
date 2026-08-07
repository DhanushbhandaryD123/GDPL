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
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Macro Feature Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%] relative rounded-3xl overflow-hidden bg-[#1B271D] flex flex-col group"
          >
            {/* Base Image (determines container aspect ratio) */}
            <img 
              src="/cameraplus/c1.png" 
              alt="Macro Photography Before/After"
              className="w-full h-auto block opacity-90 transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

            {/* Text Content overlaying the image */}
            <div className="absolute inset-0 flex flex-col justify-end p-10 z-20 pointer-events-none">
              <div className="pointer-events-auto">
                <span className="text-[#A3D9A5] text-xs font-bold tracking-wider uppercase mb-3 block">
                  MACRO MODE
                </span>
                <h2 className="text-3xl md:text-[40px] font-bold text-white leading-tight mb-8">
                  See the tiny world<br />in incredible detail.
                </h2>
                <button className="flex items-center gap-3 px-6 py-3 bg-[#111] hover:bg-black text-white rounded-full font-medium transition-colors border border-white/20 w-fit">
                  Explore Macro
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-black" strokeWidth={3} />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Features Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[55%] flex flex-col justify-center"
          >
            <h2 className="text-[28px] font-bold text-[#111827] mb-10">
              Powerful Features
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-[#00B4B4] rounded-xl flex items-center justify-center shadow-md shadow-[#00B4B4]/20">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-gray-900 font-bold text-[15px] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-[13px] leading-snug whitespace-pre-line">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-start sm:justify-center lg:justify-start">
              <button className="flex items-center gap-2 px-8 py-3.5 bg-[#00B4B4] hover:bg-[#009b9b] text-white font-bold rounded-full transition-colors shadow-lg shadow-[#00B4B4]/20">
                View All Features
                <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}