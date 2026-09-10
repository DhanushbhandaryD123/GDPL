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
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="py-10 md:py-14 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-gray-50/80 border border-gray-200/80 rounded-2xl p-6 md:p-8 text-center shadow-md"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 tracking-tight">
            {t('captoWindows.newsletter.title_1')} <span className="text-[#0078D7]">{t('captoWindows.newsletter.title_2')}</span>
          </h2>
          <p className="text-gray-500 mb-5 text-xs sm:text-sm max-w-md mx-auto">
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

          <p className="text-gray-400 text-[11px] sm:text-xs mt-4">
            {t('captoWindows.newsletter.privacy_note')} <a href="#" className="text-[#0078D7] hover:underline">{t('captoWindows.newsletter.privacy_policy')}</a>{t('captoWindows.newsletter.privacy_note_end')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
