import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Camera Plus has completely changed the way I shoot. The advanced tools are incredibly intuitive and produce stunning results. Highly recommended!",
    author: "Alex Morgan"
  },
  {
    quote: "The macro mode and filters are professional and easy to use. Love how it integrates seamlessly with my Apple Watch for remote shots!",
    author: "Sarah Lee"
  },
  {
    quote: "Best camera app I've used. Superb quality, robust features, and the user interface is just beautiful. It's my daily driver now.",
    author: "James Walker"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            Loved by Photographers
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto flex items-center mb-16 md:mb-24">
          
          {/* Left Arrow */}
          <button className="hidden lg:flex absolute -left-8 xl:-left-16 z-20 w-14 h-14 bg-white rounded-full items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-100 hover:scale-110 hover:border-[#00B4B4]/50 transition-all text-gray-400 hover:text-[#00B4B4]">
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scrolling Container for Mobile, Grid for Desktop */}
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 gap-6 w-full hide-scrollbar snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="snap-center min-w-[280px] sm:min-w-[320px] lg:min-w-0 bg-[#FAFAFA] hover:bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,180,180,0.08)] transition-all duration-500 flex flex-col items-center text-center relative group"
              >
                {/* Quote Icon */}
                <div className="text-[#00B4B4] text-[80px] font-serif leading-none absolute -top-2 left-6 opacity-10 group-hover:opacity-20 group-hover:-translate-y-2 transition-all duration-500 pointer-events-none">
                  “
                </div>
                
                <div className="flex gap-1 mb-6 mt-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} className="fill-[#FDB022] text-[#FDB022]" />
                  ))}
                </div>

                <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed mb-10 relative z-10">
                  "{testimonial.quote}"
                </p>
                
                <div className="mt-auto flex items-center justify-center w-full pt-6 border-t border-gray-200/60">
                  <p className="font-bold text-gray-900 tracking-wide uppercase text-xs md:text-sm">{testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden lg:flex absolute -right-8 xl:-right-16 z-20 w-14 h-14 bg-white rounded-full items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-100 hover:scale-110 hover:border-[#00B4B4]/50 transition-all text-gray-400 hover:text-[#00B4B4]">
            <ChevronRight className="w-6 h-6" />
          </button>
          
        </div>

        {/* Logos Placeholder Area */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-bold font-sans tracking-tight">TC TechCrunch</div>
          <div className="text-2xl font-bold font-serif tracking-tight">PetaPixel</div>
          <div className="text-xl font-bold font-sans tracking-tighter flex items-center gap-2">
            <span className="bg-gray-800 text-white px-2 py-0.5 rounded shadow-sm">d</span> digital trends
          </div>
          <div className="text-xl font-serif text-center leading-tight border-l-2 pl-4 border-gray-300">Photography<br/>life</div>
        </div>

      </div>
    </section>
  );
}
