import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Tag, 
  ArrowLeft, 
  Mail, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  Laptop, 
  Info, 
  Share2, 
  Printer 
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingSocials } from '../components/layout/FloatingSocials';
import { ScrollToTopButton } from '../components/layout/ScrollToTopButton';
import { findPressArticle, PRESS_ARTICLES_LIST } from '../data/pressArticles';

export function PressArticlePage() {
  const { year, slug } = useParams<{ year: string; slug: string }>();
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_SITE_URL || 'https://www.globaldelight.com';

  // Automatically redirect away from legacy .php URLs to clean React URLs
  useEffect(() => {
    if (slug && slug.toLowerCase().endsWith('.php')) {
      const cleanSlug = slug.replace(/\.php$/i, '');
      navigate(`/press-pages/${year}/${cleanSlug}`, { replace: true });
    }
  }, [year, slug, navigate]);

  const article = findPressArticle(year, slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
        <Helmet>
          <title>Press Release | Global Delight</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <Navbar />
        <main className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-3xl bg-gray-50 border border-gray-200">
            <Info className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Press Release Not Found</h1>
            <p className="text-gray-600 mb-6">
              The press release you are looking for might have moved or is unavailable.
            </p>
            <Link
              to="/press-info"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Media Center
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: article.seoTitle,
          text: article.seoDescription,
          url: `${domain}${article.cleanUrl}`,
        });
      } catch {
        // Fallback or ignore cancel
      }
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(`${domain}${article.cleanUrl}`);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans flex flex-col selection:bg-[#4F46E5] selection:text-white">
      {/* =========================================================================
          1. DYNAMIC SEO METADATA (NO .PHP IN URL)
         ========================================================================= */}
      <Helmet>
        <title>{article.seoTitle}</title>
        <meta name="description" content={article.seoDescription} />
        <link rel="canonical" href={`${domain}${article.cleanUrl}`} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Global Delight" />
        <meta property="og:title" content={article.seoTitle} />
        <meta property="og:description" content={article.seoDescription} />
        <meta property="og:url" content={`${domain}${article.cleanUrl}`} />
        <meta property="article:published_time" content={article.date} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.seoTitle} />
        <meta name="twitter:description" content={article.seoDescription} />
        <meta name="twitter:url" content={`${domain}${article.cleanUrl}`} />
      </Helmet>

      <Navbar />
      <FloatingSocials />
      <ScrollToTopButton />

      <main className="flex-grow pt-24 md:pt-28 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-8 overflow-x-auto py-1">
            <Link to="/" className="hover:text-indigo-600 transition-colors shrink-0">
              Home
            </Link>
            <span>/</span>
            <Link to="/press-info" className="hover:text-indigo-600 transition-colors shrink-0">
              Press Room
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate shrink-0">
              {article.year}
            </span>
          </nav>

          {/* Article Header Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm mb-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  <Tag className="w-3.5 h-3.5" />
                  {article.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  {article.date}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors text-xs font-medium inline-flex items-center gap-1.5 border border-gray-200"
                  title="Share this release"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Share</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors text-xs font-medium inline-flex items-center gap-1.5 border border-gray-200"
                  title="Print release"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print</span>
                </button>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
              {article.headline}
            </h1>

            {article.subheadline && (
              <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-6 border-l-4 border-indigo-600 pl-4 py-1">
                {article.subheadline}
              </p>
            )}

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gray-100/90 text-xs font-semibold text-gray-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {article.dateline}
            </div>
          </div>

          {/* Main Article Body */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm space-y-8">
            {/* Paragraphs */}
            <div className="prose prose-indigo max-w-none text-gray-700 leading-relaxed space-y-5 text-base sm:text-lg">
              {article.bodyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Highlights Section */}
            {article.highlights && article.highlights.length > 0 && (
              <div className="rounded-2xl bg-gradient-to-br from-indigo-50/70 via-purple-50/40 to-white p-6 sm:p-8 border border-indigo-100">
                <div className="flex items-center gap-2.5 mb-4">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    {article.highlightsTitle || "What's New in this Release"}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {article.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* System Requirements & Pricing */}
            {(article.requirements || article.pricingAvailability) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-gray-100">
                {article.requirements && (
                  <div className="rounded-2xl p-5 bg-gray-50 border border-gray-200/70">
                    <div className="flex items-center gap-2 font-bold text-gray-900 text-sm mb-2">
                      <Laptop className="w-4 h-4 text-indigo-600" />
                      Operating System Requirements
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {article.requirements}
                    </p>
                  </div>
                )}

                {article.pricingAvailability && (
                  <div className="rounded-2xl p-5 bg-gray-50 border border-gray-200/70">
                    <div className="flex items-center gap-2 font-bold text-gray-900 text-sm mb-2">
                      <Info className="w-4 h-4 text-purple-600" />
                      Pricing & Availability
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {article.pricingAvailability}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* About Global Delight */}
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-base font-bold text-gray-900 mb-2">About Global Delight:</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {article.aboutText}
              </p>
            </div>

            {/* Press Contact Box */}
            <div className="rounded-2xl bg-gray-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Media Inquiries</span>
                <h4 className="text-lg font-bold text-white mt-1">{article.contact.name}</h4>
                <p className="text-xs text-gray-400">Global Delight Technologies Pvt. Ltd.</p>
              </div>

              <div className="space-y-2 text-sm text-gray-300">
                <a 
                  href={`mailto:${article.contact.email}`} 
                  className="flex items-center gap-2 text-indigo-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{article.contact.email}</span>
                </a>
                <a 
                  href={`tel:${article.contact.phone.replace(/[^0-9+]/g, '')}`} 
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{article.contact.phone}</span>
                </a>
              </div>
            </div>

            {/* Back Navigation Bar */}
            <div className="pt-4 flex items-center justify-between">
              <Link
                to="/press-info"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                All Press Releases
              </Link>
              <Link
                to="/"
                className="text-xs text-gray-500 hover:text-indigo-600 transition-colors"
              >
                Global Delight Home
              </Link>
            </div>
          </div>

          {/* Other Milestone Releases */}
          <div className="mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Other Milestone Releases:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRESS_ARTICLES_LIST.filter((a) => a.id !== article.id)
                .slice(0, 4)
                .map((other) => (
                  <Link
                    key={other.id}
                    to={other.cleanUrl}
                    className="p-4 rounded-2xl bg-white border border-gray-200/80 hover:border-indigo-300 hover:shadow-sm transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                        <span>{other.year}</span>
                        <span>•</span>
                        <span className="text-indigo-600 font-medium">{other.category}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm line-clamp-2">
                        {other.headline}
                      </h4>
                    </div>
                    <span className="text-xs font-medium text-indigo-600 mt-3 inline-flex items-center gap-1">
                      Read release &rarr;
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
export default PressArticlePage;
