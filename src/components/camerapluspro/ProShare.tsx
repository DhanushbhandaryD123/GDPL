import { Instagram, Facebook, Twitter, Share2, MoreHorizontal } from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';

const floatingIcons = [
  { icon: Instagram, pos: 'top-4 -left-6' },
  { icon: Twitter, pos: 'top-1/3 -right-6' },
  { icon: Facebook, pos: 'bottom-1/4 -left-8' },
  { icon: Share2, pos: 'bottom-6 -right-4' },
];

const socialRow = [
  { label: 'Instagram', icon: Instagram },
  { label: 'Facebook', icon: Facebook },
  { label: 'Twitter', icon: Twitter },
  { label: 'Tumblr', letter: 't' },
  { label: 'More', icon: MoreHorizontal },
];

export function ProShare() {
  return (
    <section id="reviews" className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — phone with floating icons */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative w-[220px] sm:w-[260px]">
              <PhoneFrame className="shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                <img
                  src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80&auto=format&fit=crop"
                  alt="Flowers"
                  className="w-full h-full object-cover"
                />
              </PhoneFrame>

              {floatingIcons.map(({ icon: Icon, pos }, idx) => (
                <div
                  key={idx}
                  className={`absolute ${pos} w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 border border-gray-100`}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
              ))}
            </div>
          </div>

          {/* Right — copy */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Share Your Moments
            </h2>
            <p className="text-lg text-gray-500 mb-10 max-w-md leading-relaxed">
              Share instantly to your favorite platforms in the highest quality.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              {socialRow.map(({ label, icon: Icon, letter }) => (
                <div
                  key={label}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors cursor-pointer"
                  aria-label={label}
                >
                  {Icon ? <Icon className="w-5 h-5" strokeWidth={1.75} /> : <span className="font-bold text-lg leading-none">{letter}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
