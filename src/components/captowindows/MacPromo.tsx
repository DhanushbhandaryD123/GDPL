import { motion } from 'motion/react';
import { Apple } from 'lucide-react';
import { Link } from '@/components/layout/LocalizedLink';
import { useTranslation } from 'react-i18next';

export function MacPromo() {
  const { t } = useTranslation();
  return (
    <section className="py-10 md:py-12 bg-[#0078D7] text-white relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=1920&q=80&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0078D7] via-[#0078D7]/95 to-[#005a9e]/90" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-5xl mx-auto shadow-xl"
        >
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <div className="w-16 h-16 rounded-full bg-white text-[#0078D7] flex items-center justify-center shadow-lg">
              <Apple size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">{t('captoWindows.mac_promo.title')}</h3>
              <p className="text-blue-100">{t('captoWindows.mac_promo.subtitle')}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              to="/capto"
              className="px-8 py-3 bg-white text-[#0078D7] font-bold rounded-xl text-center hover:bg-gray-50 transition-colors shadow-lg"
            >
              {t('captoWindows.mac_promo.explore')}
            </Link>
            <a
              href="#"
              className="px-8 py-3 bg-transparent border border-white text-white font-bold rounded-xl text-center hover:bg-white/10 transition-colors"
            >
              {t('captoWindows.mac_promo.setapp')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
