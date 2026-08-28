import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from '@/components/layout/LocalizedLink';
import { useTranslation } from 'react-i18next';

export function BusinessTechnologies() {
  const { t } = useTranslation();

  const technologies = [
    { id: 'audio', title: t('business.technologies.audio_title'), description: t('business.technologies.audio_desc'), bgImage: '/business/Audio_Technology.png', icon: '/business/Boom_normal.png', path: '/technology/audio' },
    { id: 'video', title: t('business.technologies.video_title'), description: t('business.technologies.video_desc'), bgImage: '/business/Video_Technology.png', icon: '/business/Vizmato_normal.png', path: '/technology/video' },
    { id: 'photo', title: t('business.technologies.photo_title'), description: t('business.technologies.photo_desc'), bgImage: '/business/Camera_Technology.png', icon: '/business/CameraTechnology_Normal.png', path: '/technology/camera' },
    { id: 'screen', title: t('business.technologies.screen_title'), description: t('business.technologies.screen_desc'), bgImage: '/business/Screen_Capture_Technology.png', icon: '/business/ScreenCapture_Normal.png', path: '/technology/screen-capture' }
  ];

  return (
    <section className="w-full py-16 bg-[#ffffff] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-medium text-[#475569]">
            {t('business.technologies.title')}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          
          {technologies.map((tech, index) => (
            <motion.div 
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <Link to={tech.path} className="absolute inset-0 z-20 outline-none focus:outline-none" aria-label={tech.title} />
              
              {/* Top Image Section */}
              <div className="relative h-48 w-full bg-gray-900 overflow-hidden">
                <img src={tech.bgImage} alt={tech.title} className="w-full h-full object-cover opacity-90" />
                {/* Wavy bottom edge - SVG divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[1px]">
                  <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[35px] block">
                    <path d="M0,60 C480,150 960,-30 1440,60 L1440,120 L0,120 Z" fill="#ffffff"></path>
                  </svg>
                </div>
              </div>

              {/* Icon in Circle */}
              <div className="absolute top-[160px] left-6 z-10">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md p-2 border border-gray-50">
                  <img src={tech.icon} alt={`${tech.title} icon`} className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 pt-12 text-left flex flex-col flex-grow bg-white">
                <h3 className="text-lg font-bold text-[#1e2330] mb-3 group-hover:text-blue-500 transition-colors relative z-10">{tech.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow relative z-10">
                  {tech.description}
                </p>
                
                <div className="flex items-center text-red-500 font-semibold text-sm transition-colors relative z-10">
                  {t('business.technologies.explore_more')} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
