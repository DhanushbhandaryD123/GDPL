import { motion } from 'motion/react';

export function OurValues() {
  return (
    <section className="relative w-full bg-[#ffffff] py-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-center items-center"
      >
        <img 
          src="/team/ourvalues.webp" 
          alt="Global Delight Our Values" 
          className="w-full h-auto md:h-[400px] lg:h-[400px] object-contain md:object-cover object-center drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
