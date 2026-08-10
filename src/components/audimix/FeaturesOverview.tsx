import { motion } from 'motion/react';
import { Upload, SlidersHorizontal, Download } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Import a track.',
    icon: Upload,
    mockup: 'import' as const,
  },
  {
    id: 2,
    title: 'Change the levels of each stem.',
    icon: SlidersHorizontal,
    mockup: 'levels' as const,
  },
  {
    id: 3,
    title: 'Export your track.',
    icon: Download,
    mockup: 'export' as const,
  },
];

function StepMockup({ type }: { type: 'import' | 'levels' | 'export' }) {
  if (type === 'import') {
    return (
      <div className="w-full h-full bg-[#0a0a12] rounded-lg flex flex-col items-center justify-center gap-3 p-4">
        <Upload className="w-6 h-6 text-white/30" strokeWidth={1.5} />
        <span className="text-[9px] text-white/30 text-center">Drop a song here to split</span>
        <span className="text-[8px] font-semibold text-white/50 border border-white/15 rounded-full px-3 py-1">
          Select a song
        </span>
      </div>
    );
  }

  if (type === 'levels') {
    const rows = [
      { label: 'Drums', pct: 40 },
      { label: 'Vocals', pct: 72 },
      { label: 'Piano', pct: 52 },
      { label: 'Bass', pct: 20 },
    ];
    return (
      <div className="w-full h-full bg-[#0a0a12] rounded-lg flex flex-col justify-center gap-2.5 p-4">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center gap-2">
            <span className="text-[8px] text-white/40 w-9 shrink-0">{row.label}</span>
            <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400" style={{ width: `${row.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#0a0a12] rounded-lg flex flex-col items-center justify-center gap-2 p-4">
      <span className="text-[9px] text-white/40">Export Stems</span>
      <div className="w-3/4 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
      </div>
      <span className="text-[8px] font-semibold text-white bg-blue-600 rounded-full px-3 py-1">Export</span>
    </div>
  );
}

export function FeaturesOverview() {
  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-32 bg-gray-50 relative border-t border-gray-100 overflow-hidden">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-cyan-100/40 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Split tracks like a pro, in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">3 simple steps.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500"
          >
            Remove vocals and instruments from any song with AuDimix for Windows. It's as easy as 1, 2, 3.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 p-5 pb-8 shadow-xl shadow-blue-900/30"
            >
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 aspect-[4/3] mb-6">
                <StepMockup type={step.mockup} />
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-11 h-11 rounded-full bg-white text-blue-700 font-extrabold flex items-center justify-center text-lg mb-4 shadow-lg">
                  {step.id}
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
