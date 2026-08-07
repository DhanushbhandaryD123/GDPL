import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Edit2, Share2 } from 'lucide-react';
import { CaptureSection } from './CaptureSection';
import { EditSection } from './EditSection';
import { ManageSection } from './ManageSection';

type Mode = 'capture' | 'edit' | 'manage';

export function InteractiveModeSelector() {
  const [activeMode, setActiveMode] = useState<Mode>('capture');

  return (
    <section className="bg-gray-50 pb-24">
      {/* Tab Navigation */}
      <div className="bg-gray-800 shadow-lg border-b border-gray-700 sticky top-0 z-40 backdrop-blur-md bg-gray-800/90">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex w-full max-w-3xl border-x border-gray-700">
              
              <button
                onClick={() => setActiveMode('capture')}
                className={`flex-1 py-6 flex flex-col items-center justify-center gap-2 border-r border-gray-700 transition-all duration-300 ${
                  activeMode === 'capture' 
                    ? 'bg-orange-500 text-white shadow-inner' 
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >    
                <Camera size={28} />
                <span className="font-bold uppercase tracking-wider text-sm">Capture</span>
              </button>

              <button
                onClick={() => setActiveMode('edit')}
                className={`flex-1 py-6 flex flex-col items-center justify-center gap-2 border-r border-gray-700 transition-all duration-300 ${
                  activeMode === 'edit' 
                    ? 'bg-blue-500 text-white shadow-inner' 
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Edit2 size={28} />
                <span className="font-bold uppercase tracking-wider text-sm">Edit</span>
              </button>

              <button
                onClick={() => setActiveMode('manage')}
                className={`flex-1 py-6 flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                  activeMode === 'manage' 
                    ? 'bg-purple-500 text-white shadow-inner' 
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Share2 size={28} />
                <span className="font-bold uppercase tracking-wider text-sm">Manage & Share</span>
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Content Area */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          {activeMode === 'capture' && (
            <motion.div
              key="capture"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
            >
              <CaptureSection />
            </motion.div>
          )}
          {activeMode === 'edit' && (
            <motion.div
              key="edit"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
            >
              <EditSection />
            </motion.div>
          )}
          {activeMode === 'manage' && (
            <motion.div
              key="manage"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
            >
              <ManageSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
