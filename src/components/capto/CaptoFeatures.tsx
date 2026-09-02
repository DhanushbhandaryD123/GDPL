import { motion } from 'motion/react';
import { Video, MonitorPlay, Film, Image as ImageIcon, Mic, Smartphone, Folder, Share2, MonitorSmartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function CaptoFeatures() {
  const { t } = useTranslation();

  const features = [
    { title: t('capto.features.f1_title'), description: t('capto.features.f1_desc'), icon: MonitorPlay, image: '/capto/s1.webp' },
    { title: t('capto.features.f2_title'), description: t('capto.features.f2_desc'), icon: Video, image: '/capto/s2.webp' },
    { title: t('capto.features.f3_title'), description: t('capto.features.f3_desc'), icon: Film, image: '/capto/s3.webp' },
    { title: t('capto.features.f4_title'), description: t('capto.features.f4_desc'), icon: MonitorSmartphone, image: '/capto/s4.webp' },
    { title: t('capto.features.f5_title'), description: t('capto.features.f5_desc'), icon: ImageIcon, image: '/capto/s5.webp' },
    { title: t('capto.features.f6_title'), description: t('capto.features.f6_desc'), icon: Mic, image: '/capto/s6.webp' },
    { title: t('capto.features.f7_title'), description: t('capto.features.f7_desc'), icon: Smartphone, image: '/capto/s7.webp' },
    { title: t('capto.features.f8_title'), description: t('capto.features.f8_desc'), icon: Folder, image: '/capto/s8.webp' },
    { title: t('capto.features.f9_title'), description: t('capto.features.f9_desc'), icon: Share2, image: '/capto/s9.webp' }
  ];

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 pb-12 pt-8 bg-white">
      <section className="py-24 bg-[#616AD8] relative w-full rounded-3xl md:rounded-[2.5rem] shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1400px]">

        {/* Header & Badges */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[2.5rem] font-bold text-white leading-tight mb-8"
          >
            {t('capto.features.title_1')} <span className="text-white drop-shadow-sm">{t('capto.features.title_2')}</span> {t('capto.features.title_3')} <br className="hidden md:block" />
            {t('capto.features.title_4')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center items-center gap-6"
          >
            <div className="bg-white border border-gray-100 shadow-sm rounded-xl px-5 py-3 hover:shadow-md transition-shadow cursor-pointer flex items-center justify-center">
              <span className="font-bold text-gray-800 text-lg flex items-center gap-2">
                <span className="text-pink-500 font-black text-2xl">❖</span> Setapp
              </span>
            </div>
            <a href="#" className="inline-block hover:opacity-80 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the Mac App Store" className="h-[52px]" width={135} height={40} loading="lazy" />
            </a>
            <a href="#" className="inline-block hover:opacity-80 transition-opacity bg-white px-3 py-1.5 rounded-[14px] border border-gray-100 shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Get_it_from_Microsoft_Badge.svg" alt="Get it from Microsoft Store" className="h-[38px]" width={864} height={312} loading="lazy" />
            </a>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="flex flex-col group bg-white rounded-[2rem] p-6 pb-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container with overlapping icon */}
              <div className="relative mb-10 rounded-2xl flex items-center justify-center bg-gray-50 aspect-[1.3] w-full p-2 border border-gray-100">
                 <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-xl"
                    style={{ WebkitFontSmoothing: 'antialiased' }} width={1536} height={1024} loading="lazy"
                 />
                 <div className="absolute -bottom-6 left-6 w-14 h-14 bg-white rounded-[1rem] flex items-center justify-center shadow-lg border border-gray-100 text-[#616AD8] group-hover:scale-110 transition-transform duration-300 z-20">
                   <feature.icon size={26} strokeWidth={2.5} />
                 </div>
              </div>

              <h3 className="text-[22px] font-bold text-gray-900 mb-4 px-2">{feature.title}</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed px-2">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        </div>
      </section>
    </div>
  );
}
