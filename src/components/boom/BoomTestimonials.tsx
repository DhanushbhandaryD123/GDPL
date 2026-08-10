import { Star } from 'lucide-react';

const reviews = [
  { title: 'Completely immersive.', text: 'The 3D surround effect makes my regular headphones sound like a $200 pair. I can\'t go back.' },
  { title: 'Finally, loud enough.', text: 'My laptop speakers were always too quiet. Boom fixed that instantly without any distortion.' },
  { title: 'Best EQ I\'ve used.', text: 'The 31-band equalizer is genuinely studio-grade. I use it daily for mixing reference checks.' },
  { title: 'Works everywhere.', text: 'I have it on my Mac and my phone — same great sound wherever I am. Seamless experience.' },
  { title: 'Per-app control is genius.', text: 'Keeping Slack quiet while my music stays booming is such a small thing that makes a huge difference.' },
  { title: 'Worth every rupee.', text: 'One of the few apps I happily paid for the moment the trial ended. Total game changer for audio.' },
];

export function BoomTestimonials() {
  return (
    <section className="relative py-16 md:py-28 overflow-hidden bg-white">
      <style>{`
        @keyframes boom-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .boom-marquee { animation: boom-marquee 40s linear infinite; }
        .boom-marquee:hover { animation-play-state: paused; }
      `}</style>

      <div className="max-w-[1200px] mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-5">
          Loved by millions
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
          Real reviews from the Boom community across every platform.
        </p>
      </div>

      <div className="relative flex w-full">
        <div className="flex w-max boom-marquee">
          {[...reviews, ...reviews].map((r, idx) => (
            <div key={idx} className="w-[300px] md:w-[380px] shrink-0 px-4">
              <div className="h-full bg-[#f5f5f7] rounded-[2rem] p-8 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 border border-transparent hover:border-black/[0.03]">
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">{r.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[14px] font-medium">"{r.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-y-0 mt-[200px] md:mt-[196px] bottom-16 left-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 mt-[200px] md:mt-[196px] bottom-16 right-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </section>
  );
}
