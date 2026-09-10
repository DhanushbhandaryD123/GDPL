import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  Search,
  Video,
  Eye,
  X,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import toast from 'react-hot-toast';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Link } from '../components/layout/LocalizedLink';

interface TutorialVideo {
  id: string;
  title: string;
  views: number;
  category: 'audio' | 'video' | 'image' | 'general';
}

export function CaptoHelpVideosPage() {
  const domain = import.meta.env.VITE_SITE_URL || '';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'video' | 'image' | 'audio'>('all');
  const [activeVideo, setActiveVideo] = useState<TutorialVideo | null>(null);
  const [email, setEmail] = useState('');

  const tutorials: TutorialVideo[] = [
    {
      id: 'foofVUCnIVI',
      title: 'How To Adjust Audio During Video Editing',
      views: 5363,
      category: 'audio'
    },
    {
      id: 'VR4VQbcS3Qs',
      title: 'How To Trim Videos',
      views: 3326,
      category: 'video'
    },
    {
      id: 'bX4TznEVIJ4',
      title: 'How To Use The Capture Tray For Easy Access',
      views: 3134,
      category: 'general'
    },
    {
      id: 'Sfxp6J1AWCo',
      title: 'How To Add Arrows To Video',
      views: 2764,
      category: 'video'
    },
    {
      id: 'XaM4V88cmXU',
      title: 'How To Join Videos',
      views: 2390,
      category: 'video'
    },
    {
      id: 'Uhh96SvQtew',
      title: 'How To Cut Videos',
      views: 2214,
      category: 'video'
    },
    {
      id: 'QbUqmHKJVYA',
      title: 'How To Blur Regions In Video',
      views: 1943,
      category: 'video'
    },
    {
      id: 'weVaRceBLek',
      title: 'How To Crop Videos',
      views: 1672,
      category: 'video'
    },
    {
      id: 'nMDCpFTPUfQ',
      title: 'How To Add Text To Videos',
      views: 1628,
      category: 'video'
    },
    {
      id: '-APITKbRIR0',
      title: 'How To Add Callouts (Speech Bubble) In Video',
      views: 1495,
      category: 'video'
    },
    {
      id: 'rY64B-sy5-g',
      title: 'How To Edit Images',
      views: 1473,
      category: 'image'
    },
    {
      id: '21EeTG3I8_4',
      title: 'How To Add Marker Shapes To Videos',
      views: 1028,
      category: 'video'
    }
  ];

  const filteredTutorials = useMemo(() => {
    return tutorials.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Thank you for subscribing to Capto tutorials!');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col selection:bg-teal-50 selection:text-teal-700">
      <Helmet>
        <title>Capto Video Tutorials | How To Videos &amp; Guides | Global Delight</title>
        <meta
          name="description"
          content="Get started with Capto through step-by-step video tutorials explaining screen recording, audio adjustment, video editing, and annotations."
        />
        <meta
          name="keywords"
          content="Capto tutorials, how to use capto, mac screen recording tutorial, video editing guide, global delight"
        />
        <link rel="canonical" href={`${domain}/capto/help-videos`} />
        <meta property="og:title" content="Capto Video Tutorials | How To Videos & Guides" />
        <meta
          property="og:description"
          content="Step-by-step video guides to master screen recording, annotations, and video editing in Capto."
        />
        <meta property="og:url" content={`${domain}/capto/help-videos`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/capto" className="hover:text-teal-600 transition-colors">Capto</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Video Tutorials</span>
        </nav>

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Capto Academy &amp; Masterclasses</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Learn About Capto
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-10">
            Get to know Capto from these step-by-step video tutorials that explain the basics of major screen recording, image editing, and video manipulation features.
          </p>

          {/* SEARCH & FILTERS */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tutorials..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-xl w-full sm:w-auto justify-center">
              {(['all', 'video', 'image', 'audio'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                    selectedCategory === cat
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* VIDEOS GRID */}
        {filteredTutorials.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-3xl border border-gray-100">
            <Video className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600 font-medium">No tutorial videos match your search.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-sm text-teal-600 font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredTutorials.map((tut) => (
              <div
                key={tut.id}
                onClick={() => setActiveVideo(tut)}
                className="group cursor-pointer bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Thumbnail container */}
                <div className="relative aspect-video bg-gray-900 overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${tut.id}/hqdefault.jpg`}
                    alt={tut.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-teal-600 transition-colors mb-4">
                    {tut.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                    <span className="inline-flex items-center gap-1 font-medium">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{tut.views.toLocaleString()} views</span>
                    </span>
                    <span className="font-semibold text-teal-600">Watch &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* NEWSLETTER */}
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
            Be In The Know
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mx-auto mb-8">
            Stay updated with newly released Capto video guides, productivity workflows, and exclusive discount codes.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </main>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full border border-gray-200"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900 text-base truncate pr-4">
                  {activeVideo.title}
                </h3>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Responsive 16:9 YouTube iframe */}
              <div className="aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal footer */}
              <div className="p-4 px-6 bg-gray-50 flex items-center justify-between text-xs text-gray-500">
                <span>{activeVideo.views.toLocaleString()} views</span>
                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-teal-600 hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
