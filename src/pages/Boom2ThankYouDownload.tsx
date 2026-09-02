import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CheckCircle2, Download, Sliders, HelpCircle, Compass } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Link } from '../components/layout/LocalizedLink';

export function Boom2ThankYouDownload() {
  const { t } = useTranslation();
  const domain = import.meta.env.VITE_SITE_URL || '';

  const nextSteps = [
    { icon: Sliders, titleKey: 'boom2.thankyouDownload.step1_title', descKey: 'boom2.thankyouDownload.step1_desc' },
    { icon: Compass, titleKey: 'boom2.thankyouDownload.step2_title', descKey: 'boom2.thankyouDownload.step2_desc' },
    { icon: HelpCircle, titleKey: 'boom2.thankyouDownload.step3_title', descKey: 'boom2.thankyouDownload.step3_desc' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>{t('boom2.thankyouDownload.meta_title')}</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`${domain}/boom2/thankyou/download`} />
      </Helmet>

      <Navbar />

      <main className="flex-1">
        <section className="px-4 pt-16 pb-14 md:pt-24 md:pb-20 text-center bg-gradient-to-b from-[#1390FB]/5 to-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[560px] mx-auto"
          >
            <img
              src="/apps/Boom2-mac.jpeg"
              alt="Boom 2"
              className="w-16 h-16 rounded-2xl object-cover mx-auto mb-6 shadow-md" width={1028} height={1028} loading="lazy"
            />

            <div className="w-14 h-14 rounded-2xl bg-[#1390FB]/10 text-[#1390FB] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={28} strokeWidth={2} />
            </div>

            <h1 className="text-2xl md:text-[2.25rem] font-bold text-[#1c2331] mb-3 tracking-tight">
              {t('boom2.thankyouDownload.title')}
            </h1>
            <p className="text-gray-500 text-[15px] md:text-base leading-relaxed max-w-[440px] mx-auto font-medium mb-8">
              {t('boom2.thankyouDownload.subtitle')}
            </p>

            <button
              type="button"
              onClick={() => window.location.assign('/boom2')}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1390FB] hover:bg-[#0f79d6] text-white font-bold text-[14px] transition-all shadow-lg shadow-blue-200"
            >
              <Download size={16} strokeWidth={2.5} />
              {t('boom2.thankyouDownload.download_again')}
            </button>
          </motion.div>
        </section>

        <section className="px-4 pb-20 md:pb-28">
          <div className="max-w-[900px] mx-auto grid sm:grid-cols-3 gap-5">
            {nextSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#f8f8fb] border border-gray-100 rounded-2xl p-6 text-center"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#1390FB]/10 text-[#1390FB] flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-[15px] font-bold text-[#1c2331] mb-2">{t(step.titleKey)}</h3>
                  <p className="text-[13.5px] text-gray-500 leading-relaxed">{t(step.descKey)}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/faq/boom2"
              className="text-[13px] font-semibold text-[#1390FB] hover:text-[#0f79d6] transition-colors"
            >
              {t('boom2.thankyouDownload.need_help')}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
