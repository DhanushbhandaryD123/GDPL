import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Camera Plus has completely changed the way I shoot. Highly recommended!",
    author: "Alex Morgan"
  },
  {
    quote: "The tools are professional and easy to use. Love it!",
    author: "Sarah Lee"
  },
  {
    quote: "Best camera app I've used. Superb quality and features.",
    author: "James Walker"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#111827]">
            What Photographers Say
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto flex items-center mb-20">
          
          {/* Left Arrow */}
          <button className="hidden md:flex absolute -left-6 z-10 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg border border-gray-100 hover:scale-105 transition-transform">
            <ChevronLeft className="w-6 h-6 text-gray-400" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center relative"
              >
                <div className="text-[#00B4B4] text-6xl font-serif leading-none absolute top-4 left-6 opacity-30">
                  “
                </div>
                
                <p className="text-gray-900 text-[15px] font-medium leading-relaxed mt-6 mb-8 relative z-10">
                  {testimonial.quote}
                </p>
                
                <div className="mt-auto flex flex-col sm:flex-row items-center gap-2 justify-center w-full border-t border-gray-50 pt-6">
                  <p className="font-bold text-gray-900 text-[13px]">— {testimonial.author}</p>
                  <div className="flex gap-1 sm:ml-auto">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={12} className="fill-[#FDB022] text-[#FDB022]" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden md:flex absolute -right-6 z-10 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg border border-gray-100 hover:scale-105 transition-transform">
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </button>
          
        </div>

        {/* Logos Placeholder Area */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          <div className="text-xl font-bold font-sans tracking-tight">TC TechCrunch</div>
          <div className="text-xl font-bold font-serif tracking-tight">PetaPixel</div>
          <div className="text-xl font-bold font-sans tracking-tighter flex items-center gap-1">
            <span className="bg-gray-800 text-white px-1 text-sm rounded">d</span> digital trends
          </div>
          <div className="text-lg font-serif text-center leading-tight">Photography<br/>life</div>
          <div className="text-xl font-bold font-sans tracking-tighter text-blue-600">9TO5Mac</div>
        </div>

      </div>
    </section>
  );
}
