import { motion } from 'motion/react';
import { Film, Music, Gamepad2 } from 'lucide-react';

export function Boom3DTailored() {
  const cards = [
    {
      title: 'Movies',
      description: 'Feel every explosion, every whisper with true 3D cinematic audio.',
      icon: <Film className="w-5 h-5 text-white" />,
      image: '/boom3D/g1.png'
    },
    {
      title: 'Music',
      description: 'Rediscover your music with rich details and deeper bass.',
      icon: <Music className="w-5 h-5 text-white" />,
      image: '/boom3D/g2.png'
    },
    {
      title: 'Gaming',
      description: 'Hear every shot, every step and every move with unmatched precision.',
      icon: <Gamepad2 className="w-5 h-5 text-white" />,
      image: '/boom3D/g3.png'
    }
  ];

  return (
    <section className="bg-white pt-10 pb-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-6">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-[28%] flex flex-col justify-center text-center lg:text-left pt-12 lg:pt-0 lg:pr-6">
          <h2 className="text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#111111] leading-[1.15] mb-6">
            Perfect Sound<br className="hidden lg:block" /> For Every Moment.
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-[400px] mx-auto lg:mx-0 font-medium">
            Boom 3D adapts to what you love<br className="hidden lg:block" /> and makes every sound extraordinary.
          </p>
         
        </div>

        {/* Right Column: Cards Grid */}
        <div className="w-full lg:w-[72%] grid grid-cols-1 md:grid-cols-3 gap-3">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="bg-[#111111] rounded-[1.5rem] overflow-hidden relative flex flex-col h-[480px] group cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-lg border border-[#222]"
            >
              {/* Image Section */}
              <div className="h-[280px] relative overflow-hidden shrink-0">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                {/* Gradient to fade image into black background */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/40 to-[#111111] translate-y-1" />
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col px-6 pb-6 relative z-10 -mt-6">
                {/* Icon Circle */}
                <div className="w-[38px] h-[38px] bg-[#6366f1] rounded-full flex items-center justify-center shadow-lg shadow-[#6366f1]/30 mb-4">
                  {card.icon}
                </div>
                
                {/* Text */}
                <h3 className="text-white text-[1.35rem] font-bold mb-2 tracking-tight">{card.title}</h3>
                <p className="text-gray-400 text-[13px] leading-[1.6] mb-6 flex-1 pr-2">
                  {card.description}
                </p>

            

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
