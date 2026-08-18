import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function Boom2FeatureGrid() {
  const { t } = useTranslation();
  return (
    <section className="pt-12 pb-4 px-4 max-w-[1400px] mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="rounded-3xl relative overflow-hidden group shadow-lg min-h-[400px]"
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              src="/boom2/boom2-efect.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dark Overlay (Gradient from bottom) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:bg-black/70 transition-all duration-500 z-10" />

          {/* Text Content */}
          <div className="relative z-20 p-6 flex flex-col justify-end h-full">
            <h3 className="text-3xl md:text-[32px] text-white text-center font-normal tracking-wide leading-snug mb-4 lg:mb-0 lg:group-hover:mb-4 transition-all duration-500">
              {t('boom2.feature_grid.c1_title_1')}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#ec4899]">{t('boom2.feature_grid.c1_title_2')}</span>
            </h3>

            <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
              <div className="overflow-hidden">
                <p className="text-gray-200 text-[15px] text-center leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                  {t('boom2.feature_grid.c1_desc')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="rounded-3xl relative overflow-hidden group shadow-lg min-h-[400px]"
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0 bg-black">
            <video
              src="/boom2/Product_animation_with_audio_eff…_202608171653.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-fill"
            />
          </div>

          {/* Dark Overlay (Gradient from bottom) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:bg-black/70 transition-all duration-500 z-10" />

          {/* Text Content */}
          <div className="relative z-20 p-6 flex flex-col justify-end h-full">
            <h3 className="text-3xl md:text-[32px] text-white text-center font-normal tracking-wide leading-snug mb-4 lg:mb-0 lg:group-hover:mb-4 transition-all duration-500">
              {t('boom2.feature_grid.c2_title_1')}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#ec4899]">{t('boom2.feature_grid.c2_title_2')}</span>
            </h3>

            <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
              <div className="overflow-hidden">
                <p className="text-gray-200 text-[15px] text-center leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                  {t('boom2.feature_grid.c2_desc')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="rounded-3xl relative overflow-hidden group shadow-lg min-h-[400px]"
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0 bg-black">
            <video
              src="/boom2/Volume_booster_video_generation_202608171710.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-fill"
            />
          </div>

          {/* Dark Overlay (Gradient from bottom) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:bg-black/70 transition-all duration-500 z-10" />

          {/* Text Content */}
          <div className="relative z-20 p-6 flex flex-col justify-end h-full">
            <h3 className="text-3xl md:text-[32px] text-white text-center font-normal tracking-wide leading-snug mb-4 lg:mb-0 lg:group-hover:mb-4 transition-all duration-500">
              {t('boom2.feature_grid.c3_title_1')}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#ec4899]">{t('boom2.feature_grid.c3_title_2')}</span>
            </h3>

            <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
              <div className="overflow-hidden">
                <p className="text-gray-200 text-[15px] text-center leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                  {t('boom2.feature_grid.c3_desc')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="rounded-3xl relative overflow-hidden group shadow-lg min-h-[400px]"
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0 bg-black">
            <video
              src="/boom2/Generate_product_demonstration_v…_202608171719.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-fill"
            />
          </div>

          {/* Dark Overlay (Gradient from bottom) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:bg-black/70 transition-all duration-500 z-10" />

          {/* Text Content */}
          <div className="relative z-20 p-6 flex flex-col justify-end h-full">
            <h3 className="text-3xl md:text-[32px] text-white text-center font-normal tracking-wide leading-snug mb-4 lg:mb-0 lg:group-hover:mb-4 transition-all duration-500">
              {t('boom2.feature_grid.c4_title_1')}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#ec4899]">{t('boom2.feature_grid.c4_title_2')}</span>
            </h3>

            <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
              <div className="overflow-hidden">
                <p className="text-gray-200 text-[15px] text-center leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                  {t('boom2.feature_grid.c4_desc')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
