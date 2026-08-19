import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const filters = [
  { 
    id: 'original', 
    name: 'Original', 
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1920&auto=format&fit=crop' 
  },
  { 
    id: 'vintage', 
    name: 'Vintage', 
    image: 'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?q=80&w=1920&auto=format&fit=crop' 
  },
  { 
    id: 'noir', 
    name: 'Noir', 
    image: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291?q=80&w=1920&auto=format&fit=crop&monochrome=1' 
  },
  { 
    id: 'cinematic', 
    name: 'Cinematic', 
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1920&auto=format&fit=crop' 
  },
  { 
    id: 'vivid', 
    name: 'Vivid', 
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1920&auto=format&fit=crop' 
  }
];

export function CameraPlusLiveFilters() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <section className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
           
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Express Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4B4] to-blue-500">True Colors.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
              Instantly preview and apply professional-grade filters to set the perfect mood for your photos before you even capture them.
            </p>
          </motion.div>
        </div>

        {/* Interactive Gallery */}
        <div className="flex flex-col items-center">
          
          {/* Main Focal Image */}
          <motion.div 
            className="w-full max-w-4xl aspect-[4/3] md:aspect-video rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl relative bg-black"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeFilter.id}
                src={activeFilter.image}
                alt={`Photo with ${activeFilter.name} filter`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
            
            {/* Filter Label Overlay */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <span className="text-white font-medium text-sm md:text-base tracking-wide">
                {activeFilter.name}
              </span>
            </div>
          </motion.div>

          {/* Filter Thumbnails (Scrollable on mobile, centered on desktop) */}
          <div className="mt-8 md:mt-12 w-full max-w-4xl overflow-x-auto pb-4 no-scrollbar">
            <div className="flex flex-row justify-start md:justify-center gap-4 px-2 min-w-max md:min-w-0">
              {filters.map((filter) => {
                const isActive = activeFilter.id === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter)}
                    className={`relative group flex flex-col items-center gap-3 transition-all duration-300 ${
                      isActive ? 'scale-110' : 'hover:scale-105 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className={`w-16 h-16 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-md border-2 transition-colors ${
                      isActive ? 'border-[#00B4B4]' : 'border-transparent'
                    }`}>
                      <img 
                        src={filter.image} 
                        alt={filter.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className={`text-xs md:text-sm font-semibold tracking-wide transition-colors ${
                      isActive ? 'text-[#00B4B4]' : 'text-gray-500'
                    }`}>
                      {filter.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
