import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export function NewsletterSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background matching image */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-indigo-900 z-0" />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Play Icon */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-8 shadow-lg"
        >
          <Play className="text-white ml-1 w-8 h-8" fill="currentColor" />
        </motion.div>

        {/* Heading */}
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-medium text-white mb-10 max-w-2xl leading-relaxed drop-shadow-sm"
        >
          Sign up now, and stay up to date with the<br className="hidden md:block" /> latest offers from Global Delight!
        </motion.h3>

        {/* Subscription Form */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-md relative"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex bg-white rounded-lg p-1.5 shadow-2xl">
            <input 
              type="email" 
              placeholder="Enter your email ID" 
              className="flex-grow px-4 py-3 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0 text-sm md:text-base"
              required
            />
            <button 
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md font-semibold transition-colors whitespace-nowrap text-sm md:text-base"
            >
              Subscribe
            </button>
          </div>
        </motion.form>

      </div>
    </section>
  );
}
