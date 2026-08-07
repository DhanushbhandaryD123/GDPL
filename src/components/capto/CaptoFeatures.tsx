import { motion } from 'motion/react';
import { Video, MonitorPlay, Film, Image as ImageIcon, Mic, Smartphone, Folder, Share2, MonitorSmartphone } from 'lucide-react';

const features = [
  {
    title: 'Screen Recorder 333',
    description: 'Capture your screen in all its high definition glory along with clear audio! By doing so at a smooth 60 FPS, you get sharp and clear recordings that look great on any device.',
    icon: MonitorPlay,
    image: '/capto/s1.png'
  },
  {
    title: 'Video Recorder',
    description: 'Make professional tutorial videos, amazing reaction videos, and informative how-to videos with the new video recording feature of Capto. You may also use external recording devices for added flexibility.',
    icon: Video,
    image: '/capto/s2.png'
  },
  {
    title: 'Video Editor',
    description: 'Make your screen recordings look professional. Capto\'s powerful video editing suite gives you all the tools necessary to perfect your screen recordings, post capture.',
    icon: Film,
    image: '/capto/s3.png'
  },
  {
    title: 'Screen & Web Capture',
    description: 'Capto\'s options allow for effortless capturing of screenshots in different ways. Capture fullscreen or just select parts as required. You can also save a whole webpage in one click!',
    icon: MonitorSmartphone,
    image: '/capto/s4.png'
  },
  {
    title: 'Image Editor',
    description: 'Expand and build upon captured screenshots with Capto\'s image editing features. Annotate, correct, or adjust the properties of the image and make them informative and easy to comprehend.',
    icon: ImageIcon,
    image: '/capto/s5.png'
  },
  {
    title: 'Dual Audio Editor',
    description: 'Capto allows you to individually edit the audio coming from your system and from the microphone, thus adding impact and perfection to the quality of output.',
    icon: Mic,
    image: '/capto/s6.png'
  },
  {
    title: 'iOS Screen Recording',
    description: 'Video record your iPhone or iPad\'s screen by connecting it to a Mac running Capto. Capture, add a voiceover and edit them to instantly create tutorials.',
    icon: Smartphone,
    image: '/capto/s7.png'
  },
  {
    title: 'File Management',
    description: 'Capto has the best file management structure for quick searches. Your screen captures and recordings are placed in easy-to-spot folders by default. You can also add custom files to place contents in folders of your choice.',
    icon: Folder,
    image: '/capto/s8.png'
  },
  {
    title: 'Easy Sharing',
    description: 'Upload or share screenshots and screen recordings to Facebook, Tumblr, Dropbox, Evernote, YouTube and more without leaving the app. If you have your own FTP/SFTP setup, upload them in a click!',
    icon: Share2,
    image: '/capto/s9.png'
  }
];

export function CaptoFeatures() {
  return (
    <div className="w-full max-w-[1920px] mx-auto px-2 md:px-4 pb-12 pt-2 md:pt-4 bg-white">
      <section className="py-24 bg-gradient-to-br from-[#6554ff] to-[#6953ff] relative w-full rounded-3xl md:rounded-[2.5rem] shadow-2xl">
        <div className="container mx-auto px-6 max-w-[1536px]">
        
        {/* Header & Badges */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-[2rem] font-bold text-white leading-tight mb-8"
          >
            Unlock <span className="text-white drop-shadow-sm">powerful features</span> for <br className="hidden md:block" />
            seamless content creation across platforms.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center items-center gap-6"
          >
            <div className="bg-white border border-gray-100 shadow-sm rounded-xl px-5 py-3 hover:shadow-md transition-shadow cursor-pointer flex items-center justify-center">
              <span className="font-bold text-gray-800 text-lg flex items-center gap-2">
                <span className="text-pink-500 font-black text-2xl">❖</span> Setapp
              </span>
            </div>
            <a href="#" className="inline-block hover:opacity-80 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the Mac App Store" className="h-[52px]" />
            </a>
            <a href="#" className="inline-block hover:opacity-80 transition-opacity bg-white px-3 py-1.5 rounded-[14px] border border-gray-100 shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Get_it_from_Microsoft_Badge.svg" alt="Get it from Microsoft Store" className="h-[38px]" />
            </a>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="flex flex-col group"
            >
              {/* Image Container with overlapping icon */}
              <div className="relative mb-8 rounded-[1rem] shadow-sm border border-gray-100 flex items-center justify-center bg-white aspect-[1.45] w-full">
                 <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover rounded-[1rem] transform transition-transform" 
                    style={{ WebkitFontSmoothing: 'antialiased' }}
                 />
                 <div className="absolute -bottom-5 left-4 w-12 h-12 bg-white rounded-[14px] flex items-center justify-center shadow-md border border-gray-100 text-[#6554ff] group-hover:scale-110 transition-transform z-20">
                   <feature.icon size={22} strokeWidth={2.5} />
                 </div>
              </div>
              
              <h3 className="text-[20px] font-bold text-white mb-3 px-2 drop-shadow-sm">{feature.title}</h3>
              <p className="text-[15px] text-white/80 leading-relaxed px-2">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        </div>
      </section>
    </div>
  );
}
