import { Star } from 'lucide-react';

const reviews = [
  {
    title: "Completely immersive.",
    text: "Boom 3D totally changes how audio sounds. The 3D surround sound effect is especially apparent with headphones. It makes them sound like a $200 pair."
  },
  {
    title: "Great equalizer.",
    text: "I'm listening to all my favourite music all over again. I use studio monitors connected to my Mac and the 31-band EQ lets me tune them perfectly."
  },
  {
    title: "Best sound ever!",
    text: "This has been a well worth investment. My MacBook Pro with my 5.1 external speakers sound amazing with the 3D surround effect turned on!!"
  },
  {
    title: "Volume booster works!",
    text: "The speakers in my laptop were way too quiet. I installed Boom 3D and now at less than half volume they are louder and clearer than before. EXCELLENT APP!"
  },
  {
    title: "Really works..",
    text: "Once you configure Boom 3D and start using it with a good pair of headphones, you aren't going back. It really is the best way to tune music to sound enveloping and rich."
  },
  {
    title: "Night and day difference!",
    text: "Listening to music with and without the application on is a night and day difference. Highly recommended for any audiophile!"
  },
  {
    title: "Must-have app.",
    text: "Sound from my computer completely changes once Boom 3D is installed and activated. The per-app volume controller is incredibly useful."
  },
  {
    title: "Better than I imagined!",
    text: "I got Boom 3D and WOW. I have no idea how it works but the surround sound does! Amazing sound now blasting through my speakers. Yes!"
  },
  {
    title: "Makes music more enjoyable.",
    text: "Love having the ability to tweak the sound. The presets are fantastic. It almost reminds me of the old SRS WOW stuff from the 2000s, but better."
  },
  {
    title: "Elevates your listening experience.",
    text: "Being able to use the equalizer to adjust the sound coming out of my PC is incredible. I'm able to draw out each instrument perfectly."
  },
  {
    title: "Worth it..",
    text: "I love this app. The equalizer is amazing and simply makes everything sound better. I also like being able to turn up the volume so I can hear it from another room."
  }
];

export function Boom3DTestimonials() {
  const row1 = reviews.slice(0, 6);
  const row2 = reviews.slice(6, 11);

  return (
    <section className="relative pt-16 md:pt-32 pb-16 overflow-hidden bg-white">
      
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 50s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 45s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-4 mb-24 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tighter">
          Loved by Millions
        </h2>
        <p className="text-[#86868b] text-lg md:text-xl max-w-2xl mx-auto font-medium">
          See what our users have to say about the Boom 3D experience.
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-8 w-full">
        {/* Edge Fades for Seamless Marquee Effect - Moved here to only cover the scrolling area */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-64 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-64 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* Row 1 - Moving Left */}
        <div className="flex w-max animate-marquee-left pause-on-hover">
          {[...row1, ...row1].map((review, idx) => (
            <div key={idx} className="w-[320px] md:w-[420px] shrink-0 px-4">
              <div className="h-full bg-[#f5f5f7] rounded-[2rem] p-10 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer border border-transparent hover:border-black/[0.02]">
                <div className="flex items-center gap-1 mb-8 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
                  {review.title}
                </h3>
                <p className="text-[#86868b] leading-relaxed text-[15px] font-medium">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex w-max animate-marquee-right pause-on-hover">
          {[...row2, ...row2].map((review, idx) => (
            <div key={idx} className="w-[320px] md:w-[420px] shrink-0 px-4">
              <div className="h-full bg-[#f5f5f7] rounded-[2rem] p-10 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer border border-transparent hover:border-black/[0.02]">
                <div className="flex items-center gap-1 mb-8 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
                  {review.title}
                </h3>
                <p className="text-[#86868b] leading-relaxed text-[15px] font-medium">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
