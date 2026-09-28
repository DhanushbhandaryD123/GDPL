import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PlayCircle, Clock, X, ChevronRight, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TutorialItem {
  id: string;
  category: 'all' | 'record' | 'edit' | 'annotate' | 'export';
  title: string;
  duration: string;
  difficulty: string;
  thumbnail: string;
  description: string;
  videoId: string;
}

export function VideoTutorials() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<TutorialItem | null>(null);

  const tutorials: TutorialItem[] = [
    {
      id: 't1',
      category: 'record',
      title: t('captoWindows.tutorials.t1', 'How to Capture Screen'),
      duration: '2:45 min',
      difficulty: 'Beginner',
      thumbnail: '/capto/windows/tut-record.jpg',
      description: 'Learn how to set up full display, selected window, or custom region recording with DirectX hardware acceleration.',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 't2',
      category: 'edit',
      title: t('captoWindows.tutorials.t2', 'How to Record Window'),
      duration: '3:15 min',
      difficulty: 'Intermediate',
      thumbnail: '/capto/windows/tut-edit.jpg',
      description: 'Master the trim, cut, split, and audio waveform balancing tools directly inside Capto.',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 't3',
      category: 'annotate',
      title: t('captoWindows.tutorials.t3', 'How to copy text from images?'),
      duration: '2:10 min',
      difficulty: 'Quick Guide',
      thumbnail: '/capto/windows/annotate-app.jpg',
      description: 'Create crystal-clear tutorials by placing numbered step badges and redacting sensitive customer passwords.',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 't4',
      category: 'record',
      title: t('captoWindows.tutorials.t4', 'How to Edit Video'),
      duration: '1:55 min',
      difficulty: 'Beginner',
      thumbnail: '/capto/windows/hero-app.jpg',
      description: 'Overlay your webcam with custom circular or rectangular frames and calibrate microphone levels.',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 't5',
      category: 'annotate',
      title: t('captoWindows.tutorials.t5', 'How to Add Annotations'),
      duration: '1:30 min',
      difficulty: 'Pro Tip',
      thumbnail: '/capto/windows/annotate-app.jpg',
      description: 'Use Capto OCR technology to grab text instantly from images, error dialogues, and scanned PDFs.',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 't6',
      category: 'export',
      title: t('captoWindows.tutorials.t6', 'How to Export and Share'),
      duration: '2:05 min',
      difficulty: 'Quick Guide',
      thumbnail: '/capto/windows/export-app.jpg',
      description: 'Configure quality settings, render lightweight animated GIFs, or upload directly to YouTube and Drive.',
      videoId: 'dQw4w9WgXcQ'
    }
  ];

  const filterTabs = [
    { id: 'all', label: t('captoWindows.tutorials.filter_all', 'All Guides') },
    { id: 'record', label: t('captoWindows.tutorials.filter_record', 'Recording') },
    { id: 'edit', label: t('captoWindows.tutorials.filter_edit', 'Editing') },
    { id: 'annotate', label: t('captoWindows.tutorials.filter_annotate', 'Annotations') },
    { id: 'export', label: t('captoWindows.tutorials.filter_export', 'Exporting') }
  ];

  const filteredTutorials = tutorials.filter(
    (tut) => activeFilter === 'all' || tut.category === activeFilter
  );

  return (
    <section className="py-14 md:py-24 bg-white relative border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3 border border-blue-100">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t('captoWindows.tutorials.badge', 'Mastery & How-To')}</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            {t('captoWindows.tutorials.title_1')}{' '}
            <span className="text-[#0078D7]">{t('captoWindows.tutorials.title_2')}</span>
          </motion.h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            {t('captoWindows.tutorials.subtitle')}
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/80 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Tutorial Cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTutorials.map((tutorial, index) => (
            <motion.div
              layout
              key={tutorial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedVideo(tutorial)}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Stage */}
                <div className="aspect-video relative bg-slate-100 overflow-hidden">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={640}
                    height={360}
                    loading="lazy"
                  />
                  
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#0078D7] text-[#0078D7] group-hover:text-white transition-all duration-300">
                      <PlayCircle className="w-7 h-7 fill-current/20" />
                    </div>
                  </div>

                  {/* Badges on Thumbnail */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/60 text-white backdrop-blur-md">
                      {tutorial.difficulty}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-md bg-black/75 backdrop-blur-md text-white text-[11px] font-mono">
                    <Clock size={12} />
                    <span>{tutorial.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-[#0078D7] transition-colors leading-snug line-clamp-2">
                    {tutorial.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {tutorial.description}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2 pt-3">
                <span className="text-xs font-semibold text-[#0078D7] flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t('captoWindows.tutorials.watch_guide', 'Watch Guide')} <ChevronRight size={14} />
                </span>
                <span className="text-[10px] font-medium text-slate-400">Windows 11 / 10</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Player Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-slate-200"
              >
                {/* Modal Header */}
                <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                      {selectedVideo.difficulty}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base truncate max-w-md">
                      {selectedVideo.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Video Area */}
                <div className="aspect-video bg-black relative">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${selectedVideo.videoId}?autoplay=1`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>

                {/* Modal Footer */}
                <div className="p-4 sm:p-5 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-xs text-slate-600">
                    {selectedVideo.description}
                  </p>
                  <a
                    href="#download"
                    onClick={() => setSelectedVideo(null)}
                    className="px-4 py-2 bg-[#0078D7] text-white rounded-xl text-xs font-bold shrink-0 hover:bg-[#005a9e] transition-colors"
                  >
                    Download Capto for Windows
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

