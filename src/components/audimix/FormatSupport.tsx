import { motion } from 'motion/react';
import { FileAudio, Share2, AudioLines, Disc3, Music3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const formats = [
  { name: 'MP3', icon: Music3, note: 'Compressed', accent: 'bg-indigo-50 text-indigo-600' },
  { name: 'WAV', icon: AudioLines, note: 'Lossless', accent: 'bg-violet-50 text-violet-600', featured: true },
  { name: 'FLAC', icon: Disc3, note: 'Lossless', accent: 'bg-indigo-50 text-indigo-600' },
];

export function FormatSupport() {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-[2rem] bg-white border border-gray-100 shadow-2xl shadow-indigo-100 p-5 sm:p-8 md:p-10">
              <div className="flex items-center gap-2 mb-6 sm:mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{t('audimix.format_support.ready')}</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                {formats.map((fmt) => (
                  <motion.div
                    key={fmt.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`flex flex-col items-center justify-center gap-2 sm:gap-3 rounded-2xl p-3 sm:p-6 border transition-all hover:-translate-y-1 ${
                      fmt.featured ? 'border-violet-200 bg-violet-50/40 shadow-md' : 'border-gray-100 bg-white'
                    }`}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${fmt.accent}`}>
                      <fmt.icon size={20} strokeWidth={2} className="sm:hidden" />
                      <fmt.icon size={22} strokeWidth={2} className="hidden sm:block" />
                    </div>
                    <span className="font-bold text-gray-900 text-sm sm:text-base">{fmt.name}</span>
                    <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium">{fmt.note}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-sm text-gray-400 mt-6 sm:mt-8 text-center">{t('audimix.format_support.lossless_note')}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('audimix.format_support.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">{t('audimix.format_support.title_2')}</span>
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">
              {t('audimix.format_support.subtitle')}
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100">
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                  <FileAudio size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t('audimix.format_support.universal_title')}</h4>
                  <p className="text-gray-500">{t('audimix.format_support.universal_desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100">
                <div className="p-3 rounded-xl bg-violet-50 text-violet-600">
                  <Share2 size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t('audimix.format_support.sharing_title')}</h4>
                  <p className="text-gray-500">{t('audimix.format_support.sharing_desc')}</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
