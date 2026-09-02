import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CheckCircle2, Send, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Link } from '../components/layout/LocalizedLink';

export function CaptoThankYou() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const domain = import.meta.env.VITE_SITE_URL || '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('capto.thankyou.success'));
    setEmail('');
  };

  const fieldClass =
    'flex-1 px-5 py-3.5 rounded-full border border-gray-200 bg-white text-[14px] font-medium text-[#1c2331] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6554ff]/30 focus:border-[#6554ff] transition-all';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>{t('capto.thankyou.meta_title')}</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`${domain}/capto/thankyou`} />
      </Helmet>

      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[540px] bg-[#f8f8fb] border border-gray-100 rounded-[2rem] p-8 md:p-14 shadow-[0_20px_60px_rgba(28,35,49,0.06)] text-center"
        >
          <img
            src="/apps/Capto-mac.jpeg"
            alt="Capto"
            className="w-16 h-16 rounded-2xl object-cover mx-auto mb-6 shadow-md" width={256} height={256} loading="lazy"
          />

          <div className="w-14 h-14 rounded-2xl bg-[#6554ff]/10 text-[#6554ff] flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={28} strokeWidth={2} />
          </div>

          <h1 className="text-2xl md:text-[2rem] font-bold text-[#1c2331] mb-3 tracking-tight">
            {t('capto.thankyou.title')}
          </h1>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-[420px] mx-auto font-medium mb-8">
            {t('capto.thankyou.subtitle')}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('capto.thankyou.email_placeholder')}
              aria-label={t('capto.thankyou.email_placeholder')}
              className={fieldClass}
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-full bg-[#6554ff] hover:bg-[#5746df] text-white font-bold text-[14px] flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-200 whitespace-nowrap"
            >
              {t('capto.thankyou.submit')}
              <Send size={15} strokeWidth={2.5} />
            </button>
          </form>

          <Link
            to="/capto"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#6554ff] hover:text-[#5746df] transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={2.5} />
            {t('capto.thankyou.back_link')}
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
