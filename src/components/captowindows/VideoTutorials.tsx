import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';
import ReactPlayer from 'react-player/lazy';
import { useTranslation } from 'react-i18next';

export function VideoTutorials() {
  const { t } = useTranslation();

  const tutorials = [
    {
      title: t('captoWindows.tutorials.t1'),
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder URLs
      thumbnail: '/images/external/img_98c91f503de5.jpg',
    },
    {
      title: t('captoWindows.tutorials.t2'),
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnail: '/images/external/img_9241d14f55db.jpg',
    },
    {
      title: t('captoWindows.tutorials.t3'),
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnail: '/images/external/img_9f517c78ef42.jpg',
    },
    {
      title: t('captoWindows.tutorials.t4'),
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnail: '/images/external/img_52712024c529.jpg',
    },
    {
      title: t('captoWindows.tutorials.t5'),
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnail: '/images/external/img_529f1e2ad2ea.jpg',
    },
    {
      title: t('captoWindows.tutorials.t6'),
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnail: '/images/external/img_4c0e8214600d.jpg',
    }
  ];

  return (
    <section className="py-10 md:py-14 bg-white relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight"
          >
            {t('captoWindows.tutorials.title_1')} <span className="text-[#0078D7]">{t('captoWindows.tutorials.title_2')}</span>
          </motion.h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            {t('captoWindows.tutorials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 group"
            >
              <div className="aspect-video relative bg-black overflow-hidden cursor-pointer">
                <ReactPlayer 
                  url={tutorial.url} 
                  light={tutorial.thumbnail}
                  playIcon={
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <PlayCircle className="text-[#0078D7] w-6 h-6" />
                    </div>
                  }
                  width="100%" 
                  height="100%"
                />
              </div>
              <div className="p-3.5 sm:p-4">
                <h3 className="font-semibold text-gray-900 text-xs sm:text-sm group-hover:text-[#0078D7] transition-colors leading-snug">
                  {tutorial.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
