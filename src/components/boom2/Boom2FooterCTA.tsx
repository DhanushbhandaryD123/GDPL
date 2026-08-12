import { Download, Apple } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Boom2FooterCTA() {
  const { t } = useTranslation();
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-[#040612] border-t border-white/5">
      {/* Background Abstract Glows (simulating the waves) */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        {/* Left blue glow */}
        <div className="absolute top-1/2 -left-[10%] -translate-y-1/2 w-[600px] h-[300px] bg-[#2563eb]/20 blur-[100px] rounded-full mix-blend-screen" />

        {/* Right purple glow */}
        <div className="absolute top-1/2 -right-[10%] -translate-y-1/2 w-[600px] h-[300px] bg-[#8b5cf6]/20 blur-[100px] rounded-full mix-blend-screen" />

        {/* Simulated sweeping lines */}
        <div className="absolute top-[40%] -left-10 w-[40%] h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transform rotate-6 blur-[2px]" />
        <div className="absolute top-[60%] -left-10 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transform rotate-3 blur-[1px]" />

        <div className="absolute top-[40%] -right-10 w-[40%] h-[2px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent transform -rotate-6 blur-[2px]" />
        <div className="absolute top-[60%] -right-10 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-fuchsia-400/30 to-transparent transform -rotate-3 blur-[1px]" />
      </div>

      <div className="max-w-[1000px] mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-white tracking-wide">
          {t('boom2.footer_cta.title')}
        </h2>
        <p className="text-[#a1a1aa] text-[15px] mb-7">
          {t('boom2.footer_cta.subtitle')}
        </p>

        <div className="flex flex-col items-center justify-center gap-3">
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#4481FF] to-[#8944FF] hover:from-[#376EE6] hover:to-[#7733E6] text-white px-10 py-3 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(68,129,255,0.4)] hover:shadow-[0_0_30px_rgba(137,68,255,0.6)] text-[15px] w-full sm:w-auto tracking-wide">
            <Download size={18} />
            {t('boom2.footer_cta.download')}
          </button>
          <div className="flex items-center gap-1.5 text-[13px] text-[#8a8a93] mt-1">
            <Apple size={14} className="text-[#8a8a93]" fill="currentColor" />
            {t('boom2.footer_cta.available_macos')}
          </div>
        </div>
      </div>
    </section>
  );
}
