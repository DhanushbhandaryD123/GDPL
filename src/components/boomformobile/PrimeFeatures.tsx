import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import { Headphones, SlidersHorizontal, Settings2, Music2, Radio } from 'lucide-react';

const features = [
  {
    id: '3d-surround',
    title: '3D Surround Sound',
    description: 'Experience mind-blowing 3D Surround Sound on ANY headphones. You\'ll feel like you\'re in the studio with the artist.',
    icon: Headphones,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    color: 'text-pink-500',
    bgLight: 'bg-pink-50'
  },
  {
    id: 'equalizer',
    title: 'Equalizer Presets',
    description: 'Choose from 29 handcrafted EQ presets or create your own to make every song sound exactly how you want it.',
    icon: SlidersHorizontal,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
    color: 'text-purple-600',
    bgLight: 'bg-purple-50'
  },
  {
    id: 'intensity',
    title: 'Audio Intensity Slider',
    description: 'Control the intensity of the audio effects to perfectly match your listening environment and preferences.',
    icon: Settings2,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop',
    color: 'text-blue-500',
    bgLight: 'bg-blue-50'
  },
  {
    id: 'tidal',
    title: 'Stream Tidal with Boom',
    description: 'Experience your favorite Tidal tracks in high-fidelity 3D Surround Sound directly within the Boom app.',
    icon: Music2,
    image: 'https://images.unsplash.com/photo-1516280440502-86105c2a13cc?q=80&w=1000&auto=format&fit=crop',
    color: 'text-cyan-500',
    bgLight: 'bg-cyan-50'
  },
  {
    id: 'radio',
    title: '20,000+ Radio & Podcasts',
    description: 'Access thousands of internet radio stations and podcasts across 120 countries, all enhanced with Boom effects.',
    icon: Radio,
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1000&auto=format&fit=crop',
    color: 'text-green-500',
    bgLight: 'bg-green-50'
  }
];

export function PrimeFeatures() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight"
          >
            Prime <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Features</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto font-medium"
          >
            Everything you need to elevate your listening experience.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Feature List / Navigation */}
          <div className="w-full lg:w-[35%] flex flex-col gap-3">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => scrollTo(index)}
                className={`flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 group ${
                  selectedIndex === index 
                    ? 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 scale-[1.02]' 
                    : 'bg-transparent border border-transparent hover:bg-gray-50 text-gray-500'
                }`}
              >
                <div className={`p-3 rounded-xl transition-colors duration-300 ${
                  selectedIndex === index ? feature.bgLight : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <feature.icon className={`${selectedIndex === index ? feature.color : 'text-gray-400'} transition-colors duration-300`} size={24} />
                </div>
                <h3 className={`font-bold text-[17px] transition-colors duration-300 ${selectedIndex === index ? 'text-gray-900' : 'text-gray-500'}`}>
                  {feature.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Carousel Viewport */}
          <div className="w-full lg:w-[65%]">
            <div className="overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.04)]" ref={emblaRef}>
              <div className="flex">
                {features.map((feature, index) => (
                  <div key={feature.id} className="flex-[0_0_100%] min-w-0 p-6 sm:p-10">
                    <div className="flex flex-col gap-8 h-full">
                      <div className="rounded-2xl overflow-hidden aspect-video bg-gray-100 relative shadow-inner">
                         <motion.img 
                            animate={{ scale: selectedIndex === index ? 1.05 : 1 }}
                            transition={{ duration: 10, ease: "linear" }}
                            src={feature.image} 
                            alt={feature.title} 
                            className="w-full h-full object-cover" 
                          />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 tracking-tight">
                           <div className={`p-2 rounded-lg ${feature.bgLight}`}>
                             <feature.icon className={feature.color} size={28} />
                           </div>
                           {feature.title}
                        </h3>
                        <p className="text-gray-600 text-[17px] leading-relaxed font-medium">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
