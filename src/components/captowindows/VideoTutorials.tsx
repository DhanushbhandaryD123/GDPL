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
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: t('captoWindows.tutorials.t2'),
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: t('captoWindows.tutorials.t3'),
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: t('captoWindows.tutorials.t4'),
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: t('captoWindows.tutorials.t5'),
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: t('captoWindows.tutorials.t6'),
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop',
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#ffffff] relative border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {t('captoWindows.tutorials.title_1')} <span className="text-[#0078D7]">{t('captoWindows.tutorials.title_2')}</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            {t('captoWindows.tutorials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200 border border-gray-100 group"
            >
              <div className="aspect-video relative bg-black overflow-hidden cursor-pointer">
                {/* Fallback to image if react-player is not loaded, but react-player handles light mode nicely */}
                <ReactPlayer 
                  url={tutorial.url} 
                  light={tutorial.thumbnail}
                  playIcon={
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <PlayCircle className="text-[#0078D7] w-10 h-10" />
                    </div>
                  }
                  width="100%" 
                  height="100%"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#0078D7] transition-colors">
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
