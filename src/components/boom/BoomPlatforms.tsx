import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function BoomPlatforms() {
  const { t } = useTranslation();

  const platforms = [
    {
      name: 'Boom 3D',
      tag: t('boom.platforms.boom3d_tag'),
      description: t('boom.platforms.boom3d_desc'),
      image: '/devices/macbook.png',
      href: '/boom3D',
      accent: 'from-indigo-500 to-blue-500',
    },
    {
      name: 'Boom 2',
      tag: t('boom.platforms.boom2_tag'),
      description: t('boom.platforms.boom2_desc'),
      image: '/boom2/boom2-hero.png',
      href: '/boom2',
      accent: 'from-fuchsia-500 to-pink-500',
    },
    {
      name: 'Boom for Mobile',
      tag: t('boom.platforms.boom_mobile_tag'),
      description: t('boom.platforms.boom_mobile_desc'),
      image: '/devices/iphone.png',
      href: '/boomformobile',
      accent: 'from-cyan-500 to-teal-500',
    },
  ];

  return (
    <section id="platforms" className="relative bg-white py-16 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase">{t('boom.platforms.eyebrow')}</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-4">
            {t('boom.platforms.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-5 font-medium leading-relaxed">
            {t('boom.platforms.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((p) => (
            <Link
              key={p.name}
              to={p.href}
              className="group relative flex flex-col bg-white rounded-[2rem] p-8 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
              <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${p.accent} opacity-10 blur-2xl group-hover:opacity-40 group-hover:scale-150 transition-all duration-700`} />

              <div className="relative h-[140px] flex items-center justify-center mb-6">
                <img
                  src={p.image}
                  alt={p.name}
                  className="max-h-full max-w-[85%] object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.12)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <span className={`text-[11px] font-bold tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r ${p.accent} mb-2`}>
                {p.tag}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-2 flex items-center gap-2">
                {p.name}
                <ArrowUpRight size={18} className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                {p.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
