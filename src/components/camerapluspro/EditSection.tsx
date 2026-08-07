import { motion } from 'motion/react';
import { Sliders, Crop, RefreshCcw, Maximize, Palette } from 'lucide-react';

const editTools = [
  { icon: Sliders, label: 'Brightness & Contrast' },
  { icon: Palette, label: 'Saturation & Hue' },
  { icon: Maximize, label: 'Sharpness' },
  { icon: Crop, label: 'Crop & Resize' },
  { icon: RefreshCcw, label: 'Rotate & Flip' }
];

export function EditSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Full-Resolution <span className="text-blue-500">Real-Time Editing</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            A complete mobile studio. Edit your photos at their original maximum resolution without any loss in quality.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="aspect-square rounded-3xl overflow-hidden relative shadow-lg"
            >
              <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Original" />
              <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">Original</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="aspect-square rounded-3xl overflow-hidden relative shadow-lg"
            >
              <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=600&auto=format&fit=crop&sat=200&con=150" className="w-full h-full object-cover" alt="Edited" />
              <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Enhanced</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="col-span-2 rounded-3xl overflow-hidden relative shadow-lg h-48 bg-gray-900 flex items-center justify-center"
            >
              <div className="absolute inset-0 flex">
                <img src="https://images.unsplash.com/photo-1470071131384-001b85755b36?q=80&w=800&auto=format&fit=crop" className="w-1/3 h-full object-cover sepia" alt="Filter 1" />
                <img src="https://images.unsplash.com/photo-1470071131384-001b85755b36?q=80&w=800&auto=format&fit=crop&sat=-100" className="w-1/3 h-full object-cover" alt="Filter 2" />
                <img src="https://images.unsplash.com/photo-1470071131384-001b85755b36?q=80&w=800&auto=format&fit=crop&con=200" className="w-1/3 h-full object-cover" alt="Filter 3" />
              </div>
              <div className="relative z-10 bg-black/50 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                <h3 className="text-white font-bold text-xl text-center">45 Post-Capture Filters</h3>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Professional Tools</h3>
            
            <div className="space-y-6">
              {editTools.map((tool, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6 p-4 rounded-2xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center flex-shrink-0">
                    <tool.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl">{tool.label}</h4>
                  </div>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-blue-500 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
