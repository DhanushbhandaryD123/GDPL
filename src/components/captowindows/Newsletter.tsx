import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-gray-200/50"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Be in the <span className="text-[#0078D7]">know</span>
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Subscribe to our newsletter to get the latest updates, tutorials, and exclusive offers for Capto.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border border-gray-300 rounded-xl px-6 py-4 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-[#0078D7] focus:ring-1 focus:ring-[#0078D7] transition-all shadow-sm"
              required
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="bg-[#0078D7] hover:bg-[#005a9e] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-blue-500/20"
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : status === 'success' ? (
                <span>Subscribed!</span>
              ) : (
                <>
                  Subscribe
                  <Send size={18} className="ml-1" />
                </>
              )}
            </button>
          </form>
          
          <p className="text-gray-500 text-sm mt-6">
            By subscribing, you agree to our <a href="#" className="text-[#0078D7] hover:underline">Privacy Policy</a>. We respect your inbox.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
