import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Mail, Phone, MessageSquare, Briefcase, Globe, Send } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingSocials } from '../components/layout/FloatingSocials';
import toast from 'react-hot-toast';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 font-sans selection:bg-blue-500/30">
      <Helmet>
        <title>Contact Us | Global Delight</title>
        <meta name="description" content="Get in touch with Global Delight. We are here to help with support, sales, press, and partnerships." />
      </Helmet>
      
      <Navbar />
      <FloatingSocials />

      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 bg-[#0b1221] overflow-hidden">
        {/* Abstract background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-blue-600/10 blur-[100px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] rounded-full bg-purple-600/10 blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">We're here to help</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Whether you have a question about our products, need support, or want to partner with us, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="w-full relative z-20 -mt-10 mb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Customer Support */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Support</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">Need help with an app? Our support team is available to assist you.</p>
              <a href="mailto:support@globaldelight.com" className="text-blue-600 font-semibold hover:text-blue-800">support@globaldelight.com</a>
            </div>

            {/* Sales & Partnerships */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business & Sales</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">Interested in volume licensing or a partnership opportunity?</p>
              <a href="mailto:sales@globaldelight.com" className="text-purple-600 font-semibold hover:text-purple-800">sales@globaldelight.com</a>
            </div>

            {/* Media & Press */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-red-500"></div>
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Media & Press</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">For media inquiries, press kits, and promotional events.</p>
              <a href="mailto:pr@globaldelight.com" className="text-orange-600 font-semibold hover:text-orange-800">pr@globaldelight.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full py-16 mb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Form Section */}
            <div className="w-full lg:w-3/5">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Send us a Message</h2>
                <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                  <p>Use the form below for Customer Service and Media Inquiries.</p>
                  <p>Those needing assistance with registration codes can fill the <a href="#" className="text-blue-600 hover:underline font-medium">Lost License Form</a>.</p>
                  <p>For bulk purchases, affiliation queries, licensing and business development please use our <a href="#" className="text-blue-600 hover:underline font-medium">Business Development Form</a>.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block px-4 py-3.5 transition-all outline-none" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block px-4 py-3.5 transition-all outline-none" 
                      placeholder="john@company.com" 
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <select 
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block px-4 py-3.5 transition-all outline-none appearance-none"
                  >
                    <option value="" disabled>Select Subject</option>
                    <option value="media">Media Enquiry</option>
                    <option value="support">Product Support / Customer Service</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block px-4 py-3.5 transition-all outline-none resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-8 py-4 bg-[#0F172A] hover:bg-blue-600 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Global Office Info */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Headquarters</h2>
                <p className="text-gray-500 text-lg">We are located in Udupi, the coastal town of India, crafting magical experiences for the world.</p>
              </div>

              <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-gray-100 relative overflow-hidden">
                {/* Decorative Map Pattern */}
                <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none -mt-10 -mr-10">
                  <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>

                <div className="flex items-start gap-5 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Global Delight Technologies</h4>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      Robosoft Technologies Campus,<br/>
                      217, NH 66, Santhekatte,<br/>
                      Udupi, Karnataka 576105,<br/>
                      India
                    </p>
                    <a 
                      href="https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x3bbcbcf392eb3e81:0x127cba682d0150ed!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Get Directions <span className="text-lg leading-none">&rarr;</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Email Us</h4>
                    <a href="mailto:info@globaldelight.com" className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">info@globaldelight.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-500 text-sm font-medium">+91 820 259 3930</p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl overflow-hidden shadow-inner border border-gray-200 h-48 w-full relative">
                  <iframe 
                    src="https://maps.google.com/maps?q=Global%20Delight%20Technologies,%20Udupi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                    title="Global Delight Headquarters Map"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
