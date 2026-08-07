import Marquee from 'react-fast-marquee';
import { Quote } from 'lucide-react';

const mediaReviews = [
  {
    source: 'ЛАЙФХАКЕР',
    quote: 'Boom turns your iPhone into an advanced music player with a 3D surround sound effect.',
  },
  {
    source: 'macitynet.it',
    quote: 'Boom is an app that promises to improve the audio quality of the iPhone, especially with headphones.',
  },
  {
    source: 'The Next Web',
    quote: 'Boom makes your music sound amazing. It’s a must-have for audiophiles.',
  },
  {
    source: 'Macworld',
    quote: 'If you use headphones, Boom will make your music sound noticeably better and more immersive.',
  }
];

export function MediaTestimonials() {
  return (
    <section className="py-24 bg-[#060814] relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Media <span className="text-pink-400">Buzz</span></h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#060814] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#060814] to-transparent z-10 pointer-events-none" />
        
        <Marquee speed={40} gradient={false} pauseOnHover>
          {mediaReviews.map((review, index) => (
            <div 
              key={index} 
              className="mx-4 md:mx-8 w-[300px] md:w-[400px] bg-[#111118] border border-white/5 p-8 rounded-2xl flex flex-col h-full"
            >
              <Quote className="text-pink-500/50 mb-4" size={32} />
              <p className="text-gray-300 text-lg leading-relaxed flex-grow font-light italic">
                "{review.quote}"
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="font-bold text-white tracking-wider">{review.source}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
