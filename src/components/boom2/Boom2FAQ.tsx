import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is Boom 2?",
    answer: "Boom 2 is an award-winning volume booster and equalizer app designed specifically for Mac. It intelligently calibrates itself to your Mac type to provide a personalized audio experience. It offers precise audio control with its advanced equalizers and audio effects.",
  },
  {
    question: "How is Boom 2 different from Boom 3D?",
    answer: "Boom 2 is designed specifically for Mac users looking for a robust volume booster and equalizer with automatic calibration. Boom 3D is our newer, more advanced audio app that includes 3D Surround Sound and is available on both Mac and Windows.",
  },
  {
    question: "Will Boom 2 work on my latest macOS?",
    answer: "Boom 2 is compatible with older macOS versions. For the latest macOS versions, we highly recommend trying out Boom 3D, which is fully optimized for the latest Apple silicon and macOS updates.",
  },
  {
    question: "Can I use the Boom Remote with Boom 2?",
    answer: "Yes, you can control Boom 2 right from your iPhone or iPad using the free Boom Remote app. It lets you manage the volume, change equalizer presets, and control audio effects from across the room.",
  },
  {
    question: "Does Boom 2 work with all my Mac apps?",
    answer: "Yes! Once installed, Boom 2 works system-wide. It will enhance the audio coming from Spotify, YouTube, Netflix, iTunes, Skype, and any other application running on your Mac.",
  },
];

export function Boom2FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="relative py-20 md:py-28 bg-[#f5f5f7] overflow-hidden">
      {/* Subtle background orbs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle, #3b82f6 0%, #1d4ed8 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative max-w-[860px] mx-auto px-4 z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-4xl md:text-5xl font-bold tracking-widest uppercase text-[#000000] mb-3">
            FAQ
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl bg-white border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#3b82f6] shadow-[0_8px_32px_rgba(59,130,246,0.10)]'
                    : 'border-transparent shadow-sm hover:shadow-md'
                }`}
                style={{ willChange: 'transform, box-shadow' }}
              >
                <button
                  id={`boom2-faq-btn-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`boom2-faq-panel-${idx}`}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left cursor-pointer group"
                >
                  <span
                    className={`text-[17px] md:text-[18px] font-semibold leading-snug tracking-tight transition-colors duration-200 ${
                      isOpen ? 'text-[#1d4ed8]' : 'text-[#1d1d1f] group-hover:text-[#1d4ed8]'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#1d4ed8] text-white'
                        : 'bg-[#eff6ff] text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white'
                    }`}
                  >
                    {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                  </span>
                </button>

                {/* Answer panel with CSS-driven height animation */}
                <div
                  id={`boom2-faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`boom2-faq-btn-${idx}`}
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-7 text-[#4b5563] text-[17px] md:text-[18px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
