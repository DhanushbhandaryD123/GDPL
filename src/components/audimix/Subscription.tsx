import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Subscription() {
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
    <div className="w-full max-w-[1920px] mx-auto px-2 md:px-4 pt-4 pb-8 md:pb-12 bg-white">
      <div className="relative w-full overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-black text-white shadow-2xl min-h-[420px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80&auto=format&fit=crop"
          alt="AuDimix vocal splitting and audio remixing background"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-60" width={1920} height={1280} loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/50" />
        <div className="absolute top-[-10%] right-[10%] w-[40%] h-[60%] rounded-full bg-violet-500/20 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
              {t('audimix.subscription.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300">{t('audimix.subscription.title_2')}</span>
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              {t('audimix.subscription.subtitle')}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('audimix.subscription.email_placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px] shadow-lg hover:scale-105"
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
                ) : status === 'success' ? (
                  <span>{t('audimix.subscription.subscribed')}</span>
                ) : (
                  <>
                    {t('audimix.subscription.subscribe')}
                    <Send size={18} className="ml-1" />
                  </>
                )}
              </button>
            </form>

            <p className="text-white/50 text-sm mt-6">
              {t('audimix.subscription.privacy_note')} <a href="#" className="text-white hover:underline">{t('audimix.subscription.privacy_policy')}</a>{t('audimix.subscription.privacy_note_end')}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}