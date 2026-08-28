import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is Boom 3D?",
    answer:
      "Boom 3D is a powerful, system-wide audio enhancement application for Mac and Windows. It supercharges your computer's audio output with immersive 3D surround sound, a professional 31-band equalizer, a volume booster, and a variety of handcrafted audio effects. Unlike simple per-app equalizers, Boom 3D works globally across your entire system — every app, every source — delivering a dramatically richer and more cinematic listening experience.",
  },
  {
    question: "How does Boom 3D improve sound quality?",
    answer:
      "Boom 3D improves sound quality through several layers of advanced audio processing. First, its 3D Surround Sound engine expands your stereo audio into a wide, immersive soundscape that feels like listening in a concert hall or home theatre. Second, the 31-band equalizer lets you sculpt every frequency from sub-bass to ultra-highs — or pick from expertly tuned genre presets. Third, the Volume Booster pushes audio output beyond system limits while maintaining clarity. Together, these technologies work in real time to make your audio noticeably warmer, more detailed, and more dynamic.",
  },
  {
    question: "Does Boom 3D work with all headphones and speakers?",
    answer:
      "Yes! Boom 3D is hardware-agnostic and works with virtually any audio output device — wired or wireless earbuds, premium over-ear headphones, Bluetooth speakers, home theatre systems, AirPods, and even your laptop's built-in speakers. The 3D Surround Sound effect is particularly stunning with stereo headphones, creating an expansive sense of space and directionality that standard stereo simply cannot match.",
  },
  {
    question: "Can Boom 3D improve sound on Spotify, Apple Music, YouTube, Netflix, and other apps?",
    answer:
      "Absolutely. Because Boom 3D operates at the system audio level, it automatically enhances the output of every application on your Mac or Windows PC — including Spotify, Apple Music, YouTube, Netflix, Amazon Prime Video, Disney+, Tidal, VLC, and any other app you use. There's no per-app setup required; once Boom 3D is running, every sound source instantly benefits from its processing.",
  },
  {
    question: "Is Boom 3D available for both Mac and Windows?",
    answer:
      "Yes! Boom 3D is available natively for both macOS and Windows. The Mac version is available on the Mac App Store, and the Windows version is available on the Microsoft Store. Both versions deliver the full Boom 3D feature set — 3D Surround Sound, 31-band EQ, Volume Booster, and audio effects — optimised specifically for each platform to ensure the best possible performance and system integration.",
  },
  {
    question: "What is 3D Surround Sound in Boom 3D?",
    answer:
      "3D Surround Sound in Boom 3D is an advanced audio technology that takes standard stereo audio and transforms it into a rich, three-dimensional soundscape you can hear all around you. Using psychoacoustic principles — the science of how the human brain perceives sound — it creates convincing spatial cues that make music, movies, and games feel like the sound is coming from in front, behind, above, and to the sides of you, even through ordinary stereo headphones. The result is a dramatically wider and more enveloping audio experience.",
  },
  {
    question: "Can Boom 3D improve gaming audio?",
    answer:
      "Yes, Boom 3D is a game-changer for gaming audio. The 3D Surround Sound effect creates a much stronger sense of spatial awareness — letting you hear enemy footsteps, distant gunfire, environmental ambience, and directional cues with far greater precision and realism. The equalizer lets you tune the sound profile for gaming (e.g., boosting mids for voice clarity or lows for explosive bass), and the volume booster ensures you hear every detail even in loud environments.",
  },
  {
    question: "Does Boom 3D have an equalizer?",
    answer:
      "Yes — and it's one of the most comprehensive equalizers available in a consumer audio app. Boom 3D features a professional-grade 31-band equalizer that gives you precise control over the full audio spectrum, from 20 Hz all the way up to 20,000 Hz. In addition to fully manual control, Boom 3D includes a rich library of genre-based presets such as Acoustic, Rock, Hip-Hop, Classical, Electronic, Podcast, and many more, so you can achieve a great sound instantly or use the presets as a starting point for your own customisation.",
  },
  {
    question: "Can I create custom EQ presets in Boom 3D?",
    answer:
      "Absolutely! Boom 3D lets you save your own custom EQ configurations as named presets. Once you've dialed in the perfect sound profile for your headphones, speakers, or favourite genre, you can save it with a tap and switch between your presets instantly. This makes it easy to maintain different sound signatures for different listening scenarios — a warm, bass-heavy profile for late-night music, a brighter, clearer profile for podcasts and calls, and a wide surround profile for movies and games.",
  },
  {
    question: "Does Boom 3D support specific headphone models?",
    answer:
      "Boom 3D works with all headphones universally, but it also includes headphone-specific optimisations for a curated list of popular models from brands such as Sony, Bose, Sennheiser, Audio-Technica, Beats, and Apple. When you select your specific headphone model, Boom 3D applies a tailored audio profile designed to get the most out of your hardware's unique frequency response characteristics — ensuring you always hear the best that your headphones can deliver.",
  },
  {
    question: "Is Boom 3D safe to use?",
    answer:
      "Yes, Boom 3D is completely safe to use. It is distributed through official, trusted channels — the Mac App Store and Microsoft Store — and undergoes Apple and Microsoft's rigorous security review processes. Boom 3D processes audio at the software level; it doesn't modify any system files or hardware settings. Your audio hardware is not at risk, and your system remains stable. Millions of users worldwide use Boom 3D every day without any issues.",
  },
  {
    question: "Why does music sound better with Boom 3D?",
    answer:
      "Music sounds better with Boom 3D for several interconnected reasons. The 3D Surround Sound engine opens up the stereo field, making music feel live and spacious rather than flat and confined. The 31-band EQ allows you to correct for the natural frequency-response weaknesses of your headphones or speakers, revealing detail that was always in the recording but previously masked. The Volume Booster ensures dynamics aren't lost at lower volumes. Together, these elements restore the richness and vitality that often disappears when music is played through consumer-grade audio setups.",
  },
  {
    question: "Can Boom 3D be used for movies and TV shows?",
    answer:
      "Absolutely — Boom 3D is exceptional for movies and TV shows. The 3D Surround Sound technology transforms stereo audio tracks into an immersive, theatre-like experience. Dialogue becomes crisp and intelligible, action sequences punch with deep, powerful bass, and ambient soundscapes feel truly enveloping. Whether you're watching Netflix, Disney+, YouTube, or playing back local video files, Boom 3D works automatically in the background to make every viewing session feel like a trip to the cinema.",
  },
  {
    question: "How is Boom 3D different from a normal equalizer app?",
    answer:
      "A typical equalizer app only lets you adjust frequency levels — it's a one-dimensional tool. Boom 3D goes far beyond that. In addition to its professional 31-band equalizer, it adds true 3D Surround Sound that changes how you perceive the space of the audio, a Volume Booster for going beyond hardware limits, a suite of audio effects (ambience, night mode, etc.), headphone-specific profiles, and system-wide processing that works across every app simultaneously. It's the difference between a single instrument and a full orchestra.",
  },
  {
    question: "Does Boom 3D work offline?",
    answer:
      "Yes, Boom 3D works fully offline. All audio processing happens locally on your device in real time — no internet connection is required for any of its core features, including 3D Surround Sound, the equalizer, the volume booster, or audio effects. Once the app is installed and licensed, you can enjoy the full Boom 3D experience on a plane, in a remote location, or anywhere else without needing Wi-Fi or mobile data.",
  },
];

export function Boom3DFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="relative py-20 md:py-28 bg-[#ffffff] overflow-hidden">
      {/* Subtle background orbs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle, #a78bfa 0%, #6d28d9 40%, transparent 70%)',
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
                    ? 'border-[#a78bfa] shadow-[0_8px_32px_rgba(109,40,217,0.10)]'
                    : 'border-transparent shadow-sm hover:shadow-md'
                }`}
                style={{ willChange: 'transform, box-shadow' }}
              >
                <button
                  id={`boom3d-faq-btn-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`boom3d-faq-panel-${idx}`}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left cursor-pointer group"
                >
                  <span
                    className={`text-[17px] md:text-[18px] font-semibold leading-snug tracking-tight transition-colors duration-200 ${
                      isOpen ? 'text-[#6d28d9]' : 'text-[#1d1d1f] group-hover:text-[#6d28d9]'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#6d28d9] text-white'
                        : 'bg-[#f0ebff] text-[#6d28d9] group-hover:bg-[#6d28d9] group-hover:text-white'
                    }`}
                  >
                    {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                  </span>
                </button>

                {/* Answer panel with CSS-driven height animation */}
                <div
                  id={`boom3d-faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`boom3d-faq-btn-${idx}`}
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-7 text-[#000000] text-[17px] md:text-[18px] leading-relaxed font-bold">
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
