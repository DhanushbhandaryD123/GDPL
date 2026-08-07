import { motion } from 'motion/react';
import { 
  Camera, 
  Video, 
  MonitorPlay, 
  Type, 
  Image as ImageIcon, 
  Scissors, 
  Edit3, 
  Monitor, 
  Share2 
} from 'lucide-react';

const features = [
  {
    title: 'Screen Capture',
    description: 'Capture your entire screen, a specific window, or a selected region with a single click.',
    icon: Camera,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
  },
  {
    title: 'Screen Recording',
    description: 'Record your screen activity in high definition with system audio and microphone input.',
    icon: Video,
    color: 'text-indigo-600',
    bg: 'bg-indigo-100',
  },
  {
    title: 'Webcam Recording',
    description: 'Add a personal touch to your videos by recording yourself via webcam while capturing the screen.',
    icon: MonitorPlay,
    color: 'text-purple-600',
    bg: 'bg-purple-100',
  },
  {
    title: 'Text Capture',
    description: 'Extract text directly from images or screen captures instantly using advanced OCR technology.',
    icon: Type,
    color: 'text-pink-600',
    bg: 'bg-pink-100',
  },
  {
    title: 'Image Editing',
    description: 'Enhance your screenshots with an easy-to-use editor. Add text, shapes, arrows, or blur sensitive info.',
    icon: ImageIcon,
    color: 'text-teal-600',
    bg: 'bg-teal-100',
  },
  {
    title: 'Video Editing',
    description: 'Trim, cut, and join video clips. Add annotations and highlight important sections effortlessly.',
    icon: Scissors,
    color: 'text-orange-600',
    bg: 'bg-orange-100',
  },
  {
    title: 'Annotations',
    description: 'Draw attention to key details with customizable arrows, shapes, highlighters, and text boxes.',
    icon: Edit3,
    color: 'text-red-600',
    bg: 'bg-red-100',
  },
  {
    title: '4K Recording',
    description: 'Record your gameplay or tutorials in stunning 4K resolution at 60 FPS without any lag.',
    icon: Monitor,
    color: 'text-cyan-600',
    bg: 'bg-cyan-100',
  },
  {
    title: 'Export and Share',
    description: 'Export in various formats and share directly to YouTube, Dropbox, Google Drive, or local storage.',
    icon: Share2,
    color: 'text-green-600',
    bg: 'bg-green-100',
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Everything you need in <span className="text-[#0078D7]">One App</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            Capto provides a comprehensive suite of tools designed to make screen capture and video editing on Windows seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.bg} ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
