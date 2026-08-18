import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const inspiredPeople = [
  {
    name: 'M Ramachandra Acharya',
    image: '/business/VT/c1.png',
    description: 'Extraordinary individuals; unexpected stories. Meet the people around the world using Global',
    rotation: -15,
    yOffset: -30,
    xOffset: -310,
    zIndex: 10,
  },
  {
    name: 'Pradeep Udupi',
    image: '/business/VT/c1.png',
    description: 'Extraordinary individuals; unexpected stories. Meet the people around the world using Global Delight Apps to elevate everyday life.',
    rotation: -15,
    yOffset: -30,
    xOffset: -100,
    zIndex: 20,
  },
  {
    name: 'Deepa',
    image: '/business/VT/c1.png',
    description: 'Extraordinary individuals; unexpected stories. Meet the people around the world using Global Delight Apps to elevate everyday life. Global Delight Apps to elevate everyday life.',
    rotation: -15,
    yOffset: -5,
    xOffset: 100,
    zIndex: 30,
  },
  {
    name: 'Sherwin Vaz',
    image: '/business/VT/c1.png',
    description: 'Extraordinary individuals; unexpected stories. Meet the people around the world using Global Delight Apps to elevate everyday life. Global Delight Apps to elevate everyday life.',
    rotation: -15,
    yOffset: 35,
    xOffset: 310,
    zIndex: 40,
  },
];

export function GetInspired() {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-white py-8 lg:py-12 px-3 md:px-6 flex flex-col items-center font-sans">
      {/* Boxed blue container */}
      <div className="w-full max-w-[1400px] bg-[#cceaff] rounded-[32px] md:rounded-[48px] py-12 lg:py-20 overflow-hidden flex flex-col items-center relative">
        <div className="w-full flex flex-col items-center text-center px-4">
          
          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-[48px] text-gray-900 mb-6 tracking-tight"
          >
            <span className="font-normal">{t('home.get_inspired.get')}</span> <span className="text-[#cc0000] font-bold">{t('home.get_inspired.inspired')}</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] lg:text-[17px] text-gray-800 max-w-[600px] leading-relaxed mb-10 lg:mb-16 px-2"
          >
            {t('home.get_inspired.subtitle')}
          </motion.p>

          {/* Cards Layout */}
          <div className="relative w-full max-w-[1000px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[420px] flex justify-center items-center">
            
            {/* Unified Fan Layout (Scaled for Mobile) */}
            <div className="flex absolute inset-0 justify-center items-center scale-[0.35] xs:scale-[0.45] sm:scale-[0.6] md:scale-[0.8] lg:scale-100 origin-center transition-transform duration-300">
              {inspiredPeople.map((person, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 150, x: person.xOffset, rotate: 0 }}
                  whileInView={{ opacity: 1, y: person.yOffset, x: person.xOffset, rotate: person.rotation }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.2 + idx * 0.1, type: 'spring', stiffness: 70, damping: 15 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: person.yOffset - 20, 
                    zIndex: 50,
                    transition: { duration: 0.3 } 
                  }}
                  whileTap={{ 
                    scale: 1.05, 
                    y: person.yOffset - 20, 
                    zIndex: 50,
                    transition: { duration: 0.3 } 
                  }}
                  className="absolute w-[250px] bg-white rounded-[20px] p-3 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] flex flex-col gap-3 cursor-pointer origin-center text-center"
                  style={{ 
                    zIndex: person.zIndex,
                  }}
                >
                  {/* Image Container */}
                  <div className="w-full aspect-[1.4] bg-black rounded-[12px] overflow-hidden flex items-center justify-center">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-full object-cover opacity-95"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=000&color=fff&size=256`;
                      }}
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col flex-1 px-1 pt-1 pb-3 min-h-[120px]">
                    <p className="text-[11.5px] text-gray-500 leading-[1.6] mb-5 font-normal">
                      {person.description}
                    </p>
                    <h4 className="text-[12px] font-bold text-gray-900 mt-auto">
                      {person.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
