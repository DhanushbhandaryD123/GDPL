import { motion } from 'motion/react';
import { FileAudio, Share2, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const waveformBars = [8, 14, 22, 16, 28, 20, 32, 24, 18, 26, 14, 20, 10, 24, 30, 18, 22, 14, 26, 16, 20, 12, 28, 18, 22, 10, 16, 24];

function ExportPanelMockup() {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full rounded-xl bg-[#0d0a14] flex flex-col p-6">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[11px] text-white/50 font-medium">{t('audimix.features_overview.export_stems')}</span>
        <span className="text-[10px] font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full px-3 py-1">
          {t('audimix.format_support.ready')}
        </span>
      </div>

      <div className="flex items-end gap-[3px] h-16 mb-6">
        {waveformBars.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-full bg-gradient-to-t from-blue-500 to-cyan-300"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>

      <div className="flex items-center gap-3 mb-4">
        {['MP3', 'WAV', 'FLAC'].map((fmt, idx) => (
          <span
            key={fmt}
            className={`text-[10px] font-bold px-3 py-1.5 rounded-lg border ${
              idx === 1 ? 'bg-blue-500/20 border-blue-400/40 text-blue-300' : 'border-white/10 text-white/40'
            }`}
          >
            {fmt}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-2 text-white/40 text-[10px]">
        <Check className="w-3.5 h-3.5 text-green-400" />
        {t('audimix.format_support.lossless_note')}
      </div>
    </div>
  );
}

export function FormatSupport() {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-gray-100 bg-white p-2 shadow-2xl shadow-blue-100">
              <div className="rounded-xl overflow-hidden bg-black aspect-video relative">
                <ExportPanelMockup />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('audimix.format_support.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">{t('audimix.format_support.title_2')}</span>
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">
              {t('audimix.format_support.subtitle')}
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-500">
                  <FileAudio size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t('audimix.format_support.universal_title')}</h4>
                  <p className="text-gray-500">{t('audimix.format_support.universal_desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100">
                <div className="p-3 rounded-xl bg-purple-50 text-purple-500">
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
