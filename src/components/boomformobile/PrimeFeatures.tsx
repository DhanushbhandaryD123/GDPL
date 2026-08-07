import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Headphones, SlidersHorizontal, Settings2, Music2, Radio } from 'lucide-react';

const features = [
  {
    id: '3d-surround',
    title: '3D Surround Sound',
    description: 'Experience mind-blowing 3D Surround Sound on ANY headphones. You\'ll feel like you\'re in the studio with the artist.',
    icon: Headphones,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    color: 'text-pink-400'
  },
  {
    id: 'equalizer',
    title: 'Equalizer Presets',
    description: 'Choose from 29 handcrafted EQ presets or create your own to make every song sound exactly how you want it.',
    icon: SlidersHorizontal,
    image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=1000&auto=format&fit=crop',
    color: 'text-purple-400'
  },
  {
    id: 'intensity',
    title: 'Audio Intensity Slider',
    description: 'Control the intensity of the audio effects to perfectly match your listening environment and preferences.',
    icon: Settings2,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop',
    color: 'text-blue-400'
  },
  {
    id: 'tidal',
    title: 'Stream Tidal with Boom',
    description: 'Experience your favorite Tidal tracks in high-fidelity 3D Surround Sound directly within the Boom app.',
    icon: Music2,
    image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1000&auto=format&fit=crop',
    color: 'text-cyan-400'
  },
  {
    id: 'radio',
    title: '20,000+ Radio & Podcasts',
    description: 'Access thousands of internet radio stations and podcasts across 120 countries, all enhanced with Boom effects.',
    icon: Radio,
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1000&auto=format&fit=crop',
    color: 'text-green-400'
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
    <section className="py-24 bg-[#0a0a0f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Prime <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Features</span>
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to elevate your listening experience.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
          {/* Feature List / Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => scrollTo(index)}
                className={`flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 ${
                  selectedIndex === index 
                    ? 'bg-white/10 shadow-lg border border-white/10' 
                    : 'bg-transparent border border-transparent hover:bg-white/5 text-gray-500'
                }`}
              >
                <div className={`p-3 rounded-xl transition-colors ${
                  selectedIndex === index ? 'bg-[#111118]' : 'bg-transparent'
                }`}>
                  <feature.icon className={selectedIndex === index ? feature.color : ''} size={24} />
                </div>
                <h3 className={`font-bold text-lg ${selectedIndex === index ? 'text-white' : ''}`}>
                  {feature.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Carousel Viewport */}
          <div className="w-full lg:w-2/3">
            <div className="overflow-hidden rounded-[2rem] bg-[#111118] border border-white/5 shadow-2xl" ref={emblaRef}>
              <div className="flex">
                {features.map((feature) => (
                  <div key={feature.id} className="flex-[0_0_100%] min-w-0 p-8 md:p-12">
                    <div className="flex flex-col gap-8 h-full">
                      <div className="rounded-xl overflow-hidden aspect-video bg-black relative">
                         <img src={feature.image} alt={feature.title} className="w-full h-full object-cover opacity-80" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                           <feature.icon className={feature.color} size={32} />
                           {feature.title}
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
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
