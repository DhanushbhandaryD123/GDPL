import Marquee from 'react-fast-marquee';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

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
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Buzz</span>
          </motion.h2>
        </div>
      </div>

      <div className="relative">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <Marquee speed={40} gradient={false} pauseOnHover>
          {mediaReviews.map((review, index) => (
            <div 
              key={index} 
              className="mx-4 md:mx-6 w-[320px] md:w-[450px] bg-[#F8FAFC] border border-gray-100 p-8 md:p-10 rounded-[2.5rem] flex flex-col h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <Quote className="text-pink-500/20 mb-6 group-hover:text-pink-500/40 transition-colors" size={40} />
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed flex-grow font-medium italic">
                "{review.quote}"
              </p>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="font-bold text-gray-900 tracking-wider uppercase text-sm">{review.source}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
