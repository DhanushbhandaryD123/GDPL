import { motion } from 'motion/react';
import { Lock, Wifi, Share2, Instagram, Facebook, Twitter, Youtube, FolderHeart } from 'lucide-react';

export function ManageSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Organize & <span className="text-purple-500">Share</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            Keep your photos secure, organize them flawlessly, and share your masterpieces with the world in a single tap.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 flex flex-col gap-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-6 bg-purple-50 p-8 rounded-3xl border border-purple-100"
            >
              <div className="w-16 h-16 bg-purple-500 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                <Lock size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Private Collection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Protect your personal photos and videos with a password-protected vault. Keep your memories safe from prying eyes.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-6"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Wifi size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Wi-Fi & FTP Transfer</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wirelessly transfer photos and videos between your iPhone and your Mac or PC via FTP or a standard web browser without cables.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-6"
            >
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FolderHeart size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Custom Folders</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create albums, tag photos, and add copyright signatures directly from the app to keep your library meticulously organized.
                </p>
              </div>
            </motion.div>

          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full max-w-md bg-gray-900 rounded-[3rem] p-10 text-center text-white shadow-2xl shadow-purple-900/20 border border-gray-800"
            >
              <Share2 size={64} className="mx-auto text-purple-400 mb-8" />
              <h3 className="text-3xl font-bold mb-4">One-Tap Sharing</h3>
              <p className="text-gray-400 mb-10">Broadcast your creations instantly to your favorite social networks right from the app.</p>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-[#E1306C] hover:bg-[#C13584] text-white py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <Instagram size={20} />
                  <span className="font-bold">Instagram</span>
                </button>
                <button className="bg-[#1877F2] hover:bg-[#166FE5] text-white py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <Facebook size={20} />
                  <span className="font-bold">Facebook</span>
                </button>
                <button className="bg-[#1DA1F2] hover:bg-[#1A91DA] text-white py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <Twitter size={20} />
                  <span className="font-bold">Twitter</span>
                </button>
                <button className="bg-[#FF0000] hover:bg-[#CC0000] text-white py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <Youtube size={20} />
                  <span className="font-bold">YouTube</span>
                </button>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
