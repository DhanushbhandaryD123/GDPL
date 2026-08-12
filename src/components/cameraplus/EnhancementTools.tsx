import { motion } from 'motion/react';
import { Flower2, Camera, Video, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function EnhancementTools() {
  const { t } = useTranslation();

  const tools = [
    { title: t('cameraplus.enhancement_tools.macro_title'), description: t('cameraplus.enhancement_tools.macro_desc'), icon: Flower2, image: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=800&q=80&auto=format&fit=crop' },
    { title: t('cameraplus.enhancement_tools.airsnap_title'), description: t('cameraplus.enhancement_tools.airsnap_desc'), icon: Camera, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop' },
    { title: t('cameraplus.enhancement_tools.video_title'), description: t('cameraplus.enhancement_tools.video_desc'), icon: Video, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] mb-4 tracking-tight">
              {t('cameraplus.enhancement_tools.title')}
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              {t('cameraplus.enhancement_tools.subtitle')}
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 font-bold hover:border-[#00B4B4] hover:text-[#00B4B4] hover:shadow-lg transition-all duration-300 mt-4 md:mt-0 group">
            {t('cameraplus.enhancement_tools.view_all')}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </a>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,180,180,0.1)] transition-all duration-500 border border-gray-100 hover:border-[#00B4B4]/30 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="h-[240px] md:h-[280px] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={tool.image} 
                  alt={tool.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
              </div>
              
              {/* Text Container */}
              <div className="p-8 flex items-start gap-5 relative bg-white">
                {/* Floating Icon */}
                <div className="absolute -top-10 right-8 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#00B4B4] to-[#009b9b] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00B4B4]/30 group-hover:-translate-y-2 transition-transform duration-500">
                  <tool.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex flex-col pt-2 pr-16 w-full">
                  <h3 className="text-xl md:text-[22px] font-bold text-[#111827] mb-2 whitespace-pre-line leading-[1.2] group-hover:text-[#00B4B4] transition-colors duration-300">
                    {tool.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed whitespace-pre-line">
                    {tool.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-10 flex justify-center md:hidden">
          <a href="#" className="flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-900 font-bold active:bg-gray-50 w-full justify-center transition-colors">
            {t('cameraplus.enhancement_tools.view_all')}
            <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </section>
  );
}
