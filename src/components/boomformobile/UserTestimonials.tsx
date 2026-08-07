import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah J.',
    role: 'Music Lover',
    text: 'This app is incredible. The 3D surround sound actually makes my cheap earbuds sound like premium studio headphones. I can never go back to listening to music without Boom.',
    rating: 5
  },
  {
    name: 'David M.',
    role: 'Audio Enthusiast',
    text: 'The equalizer presets are perfectly tuned. Being able to connect my Spotify and Tidal accounts directly makes this my go-to music player on iOS.',
    rating: 5
  },
  {
    name: 'Alex T.',
    role: 'Podcast Listener',
    text: 'I listen to podcasts on my commute, and the vocal clarity enhancement in Boom makes it so much easier to hear every word over the train noise.',
    rating: 5
  },
  {
    name: 'Emily R.',
    role: 'Fitness Coach',
    text: 'The bass boost feature gives my workout playlists that extra punch I need. Absolutely love the sleek dark interface too.',
    rating: 5
  }
];

export function UserTestimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', slidesToScroll: 1 });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Users <span className="text-pink-500">❤️</span> Us
          </h2>
          <p className="text-gray-400 text-lg">Don't just take our word for it.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-4">
                  <div className="bg-[#111118] border border-white/5 p-8 rounded-3xl h-full flex flex-col hover:border-white/10 transition-colors">
                    <div className="flex gap-1 mb-6 text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
