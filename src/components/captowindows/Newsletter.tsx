import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Newsletter() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <section id="download" className="py-14 md:py-24 bg-white relative overflow-hidden">
      {/* Background illumination on white canvas */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-t from-blue-100/30 via-slate-50 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-10 md:p-14 text-center shadow-xl shadow-slate-200/50 relative overflow-hidden"
        >
          {/* Subtle top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

          {/* App Logo */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-blue-600 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition-opacity" />
              <img
                src="/apps/Capto-window.jpeg"
                alt="Capto for Windows"
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-lg border-2 border-white object-cover"
                width={80}
                height={80}
                loading="lazy"
              />
            </div>
          </div>

          

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Start Creating with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078D7] to-indigo-600">Capto for Windows</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Experience pixel-perfect screen recordings, instant annotations, and effortless video editing. No watermarks, no time limits.
          </p>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 tracking-tight">
              {t('captoWindows.newsletter.title_1')} <span className="text-[#0078D7]">{t('captoWindows.newsletter.title_2')}</span>
            </h2>
            <p className="text-slate-500 mb-5 text-xs sm:text-sm max-w-md mx-auto">
              {t('captoWindows.newsletter.subtitle')}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto">
              <input
                type="email"
                placeholder={t('captoWindows.newsletter.email_placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0078D7] focus:ring-1 focus:ring-[#0078D7] transition-all shadow-2xs"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-[#0078D7] hover:bg-[#005a9e] text-white px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
              >
                {status === 'loading' ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : status === 'success' ? (
                  <span>{t('captoWindows.newsletter.subscribed')}</span>
                ) : (
                  <>
                    {t('captoWindows.newsletter.subscribe')}
                    <Send size={14} className="ml-0.5" />
                  </>
                )}
              </button>
            </form>

            <p className="text-slate-400 text-[11px] mt-3">
              {t('captoWindows.newsletter.privacy_note')}{' '}
              <a href="/privacy-policy" className="text-[#0078D7] hover:underline font-medium">
                {t('captoWindows.newsletter.privacy_policy')}
              </a>
              {t('captoWindows.newsletter.privacy_note_end')}
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

