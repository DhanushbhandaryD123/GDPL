import { motion } from 'motion/react';

export function BoomStory() {
  return (
    <section className="py-24 bg-[#060814] relative border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              A pursuit of <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">mastery</span> in audio engineering.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
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
