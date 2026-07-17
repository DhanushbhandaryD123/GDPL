import { useState } from 'react';
import { Award, Star } from 'lucide-react';

export function HonorsReviews() {
  const [isStarClicked, setIsStarClicked] = useState(false);
  const [isTrophyClicked, setIsTrophyClicked] = useState(false);

  const honorLogos = [
    { name: 'Honor', file: '/reviews/honor.png' },
    { name: 'Honor 1', file: '/reviews/honor1.png' },
    { name: 'Honor 2', file: '/reviews/honor2.png' },
    { name: 'Honor 3', file: '/reviews/honor3.png' },
    { name: 'Honor 4', file: '/reviews/honor4.png' }
  ];

  const reviewLogos = [
    { name: 'Review 1', file: '/reviews/review1.png' },
    { name: 'Review 2', file: '/reviews/review2.png' },
    { name: 'Review 3', file: '/reviews/review3.png' },
    { name: 'Review 4', file: '/reviews/review4.png' },
    { name: 'Review 5', file: '/reviews/review5.png' },
    { name: 'Review 6', file: '/reviews/review6.png' },
    { name: 'Review 7', file: '/reviews/review7.png' }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* SVG Definitions for Icon Gradients */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="blackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#111827" offset="0%" />
            <stop stopColor="#4b5563" offset="50%" />
            <stop stopColor="#000000" offset="100%" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-4 text-center">

        {/* Honors Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Award
              className={`w-6 h-6 md:w-8 md:h-8 cursor-pointer transition-all duration-300 ${isTrophyClicked
                  ? '[&>circle]:fill-yellow-400 [&>circle]:stroke-yellow-400 [&>polyline]:fill-red-500 [&>polyline]:stroke-red-500 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]'
                  : ''
                }`}
              style={{ stroke: isTrophyClicked ? undefined : 'url(#blackGrad)' }}
              onClick={() => setIsTrophyClicked(!isTrophyClicked)}
            />
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-gray-900 via-gray-700 to-black bg-clip-text text-transparent">Honors</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            {honorLogos.map((logo, index) => (
              <div key={index} className="transition duration-300 transform hover:scale-105">
                <img
                  src={logo.file}
                  alt={logo.name}
                  className="h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-2xl font-bold text-gray-400">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-10">
            <Star
              className={`w-6 h-6 md:w-8 md:h-8 cursor-pointer transition-all duration-300 ${isStarClicked ? 'text-yellow-400 fill-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]' : ''}`}
              style={{ stroke: isStarClicked ? 'currentColor' : 'url(#blackGrad)' }}
              onClick={() => setIsStarClicked(!isStarClicked)}
            />
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-gray-900 via-gray-700 to-black bg-clip-text text-transparent">Reviews</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {reviewLogos.map((logo, index) => (
              <div key={index} className="transition duration-300 transform hover:scale-105">
                <img
                  src={logo.file}
                  alt={logo.name}
                  className="h-10 md:h-12 w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-xl font-bold text-gray-400">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
