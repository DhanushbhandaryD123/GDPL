import { motion } from 'motion/react';

export function BoomStory() {
  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-[1.1] text-gray-900 tracking-tight">
              A pursuit of <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">mastery</span> in audio engineering.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Boom for Mobile isn't just an equalizer—it's a complete audio ecosystem. 
              We've engineered our 3D surround sound technology to work with any pair of headphones, 
              transforming your daily commute or workout into a private concert. Feel every beat, 
              every bass drop, and every nuance the way the artist intended.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
