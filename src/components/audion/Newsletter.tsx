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
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-purple-200/40 to-pink-200/40 rounded-full blur-[120px] opacity-70" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white/90 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-purple-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Be in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">know</span>
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Subscribe to our newsletter to get the latest updates, audio recording tips, and exclusive offers for AudiOn.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px] shadow-lg shadow-purple-500/20"
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

          <p className="text-gray-400 text-sm mt-6">
            By subscribing, you agree to our <a href="#" className="text-purple-500 hover:underline">Privacy Policy</a>. We never spam.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
