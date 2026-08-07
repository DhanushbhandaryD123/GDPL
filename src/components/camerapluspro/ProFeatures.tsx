import { Camera, Wand2, SlidersHorizontal, Share2 } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Professional Camera',
    description: 'Advanced capture modes with real-time filters and controls.',
    bg: 'bg-blue-50',
    color: 'text-blue-500',
  },
  {
    icon: Wand2,
    title: 'Smart Retouch',
    description: 'AI-powered tools to enhance and perfect every detail.',
    bg: 'bg-purple-50',
    color: 'text-purple-500',
  },
  {
    icon: SlidersHorizontal,
    title: 'Full Control',
    description: 'Manual focus, exposure, white balance & more.',
    bg: 'bg-teal-50',
    color: 'text-teal-500',
  },
  {
    icon: Share2,
    title: 'Instant Sharing',
    description: 'Share high-quality photos to social media instantly.',
    bg: 'bg-pink-50',
    color: 'text-pink-500',
  },
];

export function ProFeatures() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-500">
            Everything you need to take your photography to the next level.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, description, bg, color }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.06)] p-8 text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full ${bg} flex items-center justify-center mx-auto mb-5`}>
                <Icon className={`w-7 h-7 ${color}`} strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
