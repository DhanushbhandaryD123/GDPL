import { motion } from 'motion/react';
import { Smartphone, Tablet, Wifi, Bluetooth } from 'lucide-react';

export function AirSnapFeature() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Mockups */}
          <div className="w-full lg:w-1/2 relative h-[350px] md:h-[500px] flex justify-center items-center mb-10 lg:mb-0">
            {/* iPad (Remote) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute left-0 sm:left-[5%] md:left-[10%] z-20 w-[160px] sm:w-[200px] md:w-[280px] aspect-[3/4] bg-white rounded-[1.5rem] md:rounded-[2rem] border-4 md:border-8 border-gray-200 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-black flex flex-col items-center justify-center p-4">
                <div className="w-16 h-16 rounded-full border-4 border-white mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full" />
                </div>
                <p className="text-white font-bold tracking-widest uppercase">Remote Control</p>
                <div className="mt-8 flex gap-4 text-white/50">
                  <Wifi size={24} />
                  <Bluetooth size={24} />
                </div>
              </div>
            </motion.div>

            {/* Connection Line */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute z-10 w-full h-[2px] bg-gradient-to-r from-blue-400 to-indigo-400 border-t border-dashed border-white"
            />

            {/* iPhone (Camera) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute right-0 sm:right-[5%] md:right-[10%] z-20 w-[120px] sm:w-[160px] md:w-[220px] aspect-[9/19.5] bg-gray-900 rounded-[2rem] md:rounded-[3rem] border-4 md:border-8 border-gray-800 shadow-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1517511620798-cec17d428bc0?q=80&w=600&auto=format&fit=crop" 
                alt="Group Photo Capture"
                className="w-full h-full object-cover opacity-90"
              />
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 tracking-tight">
                Introducing <span className="text-blue-600">AirSnap</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-6">
                Remote photography made magical.
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Want to be in the group photo without setting a timer and running? AirSnap allows you to connect two iOS devices (iPhone, iPad, or iPod touch) via Wi-Fi or Bluetooth. Use one device to remotely trigger the camera on the other!
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Tablet size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Use iPad as a Remote Viewfinder</h4>
                    <p className="text-gray-600">See exactly what the iPhone camera sees on your iPad's large screen before taking the shot.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Instant Syncing</h4>
                    <p className="text-gray-600">Captured photos are instantly saved to both the capturing device and the remote device.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
