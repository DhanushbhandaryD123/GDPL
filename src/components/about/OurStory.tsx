import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function OurStory() {
  return (
    <section className="w-full bg-[#ffffff] py-0 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.15em] text-gray-400 uppercase mb-4"
          >
          
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-[52px] font-bold text-gray-900 leading-[1.1] mb-8"
          >
            Built with Passion.<br />
            Driven by Purpose.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-[1px] w-[60%] max-w-[300px] bg-gray-300 mb-8 origin-left"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg leading-relaxed space-y-6 mb-10 pr-0 lg:pr-8"
          >
            <p>
              Founded on the southwest coast of India, Udupi, Global Delight was started in 2007. With our perfect blend of professionals, we have created leading edge, award-winning cross platform audio, video and photography applications.
            </p>
            <p>
              All this has made Global Delight the home of some of the most creative and innovative apps that are being used by over 30 million consumers globally.
            </p>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <img 
            src="/team/P1.png" 
            alt="Global Delight Office and Team" 
            className="w-full h-auto rounded-[2rem] object-cover shadow-xl"
          />
        </motion.div>
        
      </div>
    </section>
  );
}
