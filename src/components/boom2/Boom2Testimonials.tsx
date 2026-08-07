import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    title: "Amazing!",
    text: "This will totally change how audio sounds on your Mac. It's especially apparent with headphones. If you've got weak headphones, this app will make them sound like a $200 pair."
  },
  {
    title: "Great sound.",
    text: "I'm listening to all my favourite music all over again. I use studio monitors connected to my Mac and now I know at last what they can really do. I'm very glad I got Boom."
  },
  {
    title: "Best sound ever!",
    text: "This has been a well worth investment on this app. My MacBook Pro with my 5.1 external speakers sound amazing!! Keep up the good work!"
  },
  {
    title: "Excellent app!",
    text: "The speakers in my MacBook Pro 17 were way too quiet - even at full volume. I installed Boom 2 and now at less than half volume they are louder than before at full volume. This is an EXCELLENT APP!"
  },
  {
    title: "Really works..",
    text: "Once you configure Boom 2 and start using it with a good pair of headphones, you aren't going back. \"Normal\" music audio will just not do anymore. It really is the best way to tune music to sound enveloping and rich."
  },
  {
    title: "Night and day difference!",
    text: "Listening to music with and without the application on is a night and day difference. I actually stopped listening to music on my PC because there's nothing like this on Windows OS. Highly recommended!"
  },
  {
    title: "Must-have app for any Mac.",
    text: "Sound from Mac completely changes once Boom is installed and activated. Not only Mac speakers but also external 5.1 speakers and headphones. Must-have from my point of view."
  },
  {
    title: "Better than I imagined!",
    text: "I was ready to return my MacBook because the speakers just don't project well for movies. I got Boom and WOW. I have no idea how it works but it does! Amazing sound now blasting through my MacBook. Yes!"
  },
  {
    title: "Makes music more enjoyable..",
    text: "Love having the ability to tweak the sound on my MacBook. Ambience is my favorite setting. It almost reminds me of the old SRS WOW stuff from the 2000-2010's. Almost like magically enhancing the sound."
  },
  {
    title: "Elevates your listening experience.",
    text: "Being able to use the equalizer to adjust the sound coming out of my Mac (using studio/noise canceling headphones) is incredible. I'm able to draw out each instrument. Can't imagine listening to music without Boom!"
  },
  {
    title: "Worth it..",
    text: "I love this app. The equalizer is amazing and simply makes everything sound better. I also like being able to turn up the volume so I can actually hear it if I go to another room while listening to something."
  }
];

export function Boom2Testimonials() {
  const row1 = reviews.slice(0, 6);
  const row2 = reviews.slice(6, 11);

  return (
    <section className="relative py-16 overflow-hidden bg-[#060814]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4F46E5]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B5CF6]/10 blur-[120px] rounded-full pointer-events-none" />
      
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

      <div className="max-w-[1400px] mx-auto px-4 mb-20 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Millions</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          See what our users have to say about the Boom 2 experience.
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-6 w-full">
        {/* Row 1 - Moving Left */}
        <div className="flex w-max animate-marquee-left pause-on-hover">
          {[...row1, ...row1].map((review, idx) => (
            <div key={idx} className="w-[320px] md:w-[420px] shrink-0 px-3">
              <div className="h-full bg-[#0d0e15] border border-white/5 rounded-3xl p-8 hover:bg-[#13151f] hover:border-white/10 hover:-translate-y-2 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-[#4F46E5]/20">
                <div className="flex items-center gap-1 mb-6 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <Quote size={32} className="text-[#4F46E5]/40 mb-4 group-hover:text-[#4F46E5] transition-colors duration-300" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {review.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-[15px]">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex w-max animate-marquee-right pause-on-hover mt-4">
          {[...row2, ...row2].map((review, idx) => (
            <div key={idx} className="w-[320px] md:w-[420px] shrink-0 px-3">
              <div className="h-full bg-[#0d0e15] border border-white/5 rounded-3xl p-8 hover:bg-[#13151f] hover:border-white/10 hover:-translate-y-2 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-[#8B5CF6]/20">
                <div className="flex items-center gap-1 mb-6 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <Quote size={32} className="text-[#8B5CF6]/40 mb-4 group-hover:text-[#8B5CF6] transition-colors duration-300" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {review.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-[15px]">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Edge Fades for Seamless Marquee Effect */}
      <div className="absolute top-0 bottom-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#060814] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#060814] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
