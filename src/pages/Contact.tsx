import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export function Contact() {
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    email: '',
    mobile: '',
    comment: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    setFormData({ subject: '', name: '', email: '', mobile: '', comment: '' });
  };

  const domain = import.meta.env.VITE_SITE_URL || '';

  return (
    <div className="min-h-screen bg-[#383838] font-sans flex flex-col">
      <Helmet>
        <title>Contact Us | Global Delight | Customer Support & Inquiries</title>
        <meta name="description" content="Get in touch with Global Delight for technical support, business inquiries, media requests, or feedback. We are here to help you with Boom, Capto, Vizmato, and our other apps." />
        <meta name="keywords" content="Contact Global Delight, customer support, tech support, business inquiries, software help, reach out, Global Delight email, app support contact, refund request, licensing inquiry" />
        <meta name="subject" content="Contact Us | Global Delight" />
        <meta property="og:title" content="Contact Us | Global Delight" />
        <meta property="og:description" content="We're here to help. Reach out to Global Delight for support, partnerships, or any questions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/contact`} />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={`${domain}/contact`} />
      </Helmet>
      
      <Navbar />

      {/* Map Section */}
      <div className="w-full h-[45vh] relative">
        {/* Google's embed script throws a parse error in the old headless
            Chromium used by the react-snap prerender step, which aborts the
            static build. Skip loading it during prerendering. */}
        {navigator.userAgent !== 'ReactSnap' && (
          <iframe
            src="https://maps.google.com/maps?q=Global%20Delight%20Technologies%20Pvt.%20Ltd.&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
        )}
      </div>

      {/* Orange Separator */}
      <div className="w-full h-1.5 bg-[#E85D22]"></div>

      {/* Dark Content Section */}
      <div className="flex-1 relative w-full overflow-hidden flex items-center">
        {/* Decorative background representing the faint wind turbines */}
        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none bg-[url('https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>

        <div className="container mx-auto px-6 md:px-16 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
            
            {/* Left Column: Contact Info */}
            <div className="w-full lg:w-5/12 text-white">
              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-2">Contact us</h2>
                <div className="h-[2px] w-24 bg-white"></div>
              </div>

              <div className="space-y-6 text-[14px] text-gray-200 leading-relaxed font-light mb-12">
                <p>
                  Grosvenor Business Tower Suite<br />
                  1207 Barsha Heights<br />
                  P.O. Box 5004400<br />
                  Dubai United Arab Emirates
                </p>

                <p>
                  +971-4-427-2420<br />
                  support.uae@codweb.com
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-4">Follow Me On Social Media</h3>
                <div className="flex items-center gap-4 mb-10">
                  <a href="https://www.facebook.com/GlobalDelight" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Facebook className="w-5 h-5 fill-current" /></a>
                  <a href="https://x.com/GlobalDelight" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Twitter className="w-5 h-5 fill-current" /></a>
                  <a href="https://www.instagram.com/globaldelight/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="https://www.linkedin.com/company/global-delight/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Linkedin className="w-5 h-5 fill-current" /></a>
                  <a href="https://www.youtube.com/channel/UCLjiPwteYQLEmIzDs4xmyTw" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Youtube className="w-5 h-5 fill-current" /></a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors font-bold text-lg leading-none font-serif">G+</a>
                </div>

                <Link to="/" className="inline-flex items-center gap-3 bg-transparent border border-[#E85D22] rounded-full pl-1 pr-5 py-1 hover:bg-[#E85D22]/10 transition-colors w-fit">
                  <span className="w-8 h-8 rounded-full bg-[#E85D22] flex items-center justify-center">
                    <ArrowLeft className="w-4 h-4 text-white" />
                  </span>
                  <span className="text-sm text-gray-300">Back to Home</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="w-full lg:w-6/12 xl:w-5/12">
              <div className="bg-[#2b2b2b] p-8 md:p-10">
                <div className="text-center mb-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">GET IN TOUCH</h3>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Please fill the form for any query or suggestion</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 text-gray-800 px-4 py-3 pr-10 focus:outline-none focus:ring-1 focus:ring-[#E85D22] appearance-none cursor-pointer"
                    >
                      <option value="">Select Subject</option>
                      <option value="Media Enquiry">Media Enquiry</option>
                      <option value="Product Support / Customer Service">Product Support / Customer Service</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-300 uppercase mb-2">Full Name*</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 text-gray-800 px-4 py-3 focus:ring-1 focus:ring-[#E85D22] outline-none"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] text-gray-300 uppercase mb-2">Email*</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 text-gray-800 px-4 py-3 focus:ring-1 focus:ring-[#E85D22] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-gray-300 uppercase mb-2">Mobile No*</label>
                      <input 
                        type="tel" 
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 text-gray-800 px-4 py-3 focus:ring-1 focus:ring-[#E85D22] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-gray-300 uppercase mb-2">Your Comment</label>
                    <textarea 
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-white border border-gray-200 text-gray-800 px-4 py-3 focus:ring-1 focus:ring-[#E85D22] outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button 
                      type="submit" 
                      className="bg-white text-black text-[11px] font-bold px-8 py-3 hover:bg-gray-200 transition-colors uppercase tracking-wider"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="bg-[#1a1a1a] py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Be in the know</h2>
        <p className="text-gray-200 text-[15px] md:text-[16px] max-w-2xl mx-auto mb-10 px-4 leading-relaxed">
          Join our mailing list to hear about new releases, product updates, feature additions, and special deals before anyone else!
        </p>
        <form 
          onSubmit={(e) => { e.preventDefault(); toast.success('Successfully subscribed to the newsletter!'); }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto px-4"
        >
          <input 
            type="email" 
            placeholder="xyz1234@example.com" 
            className="w-full sm:w-[400px] bg-[#0a0a0a] text-white px-6 py-3.5 rounded-xl border border-transparent focus:outline-none focus:border-gray-600 placeholder-gray-600"
            required
          />
          <button 
            type="submit" 
            className="w-full sm:w-auto bg-[#2399c9] hover:bg-[#1d82ab] transition-colors text-white font-bold px-8 py-3.5 rounded-xl whitespace-nowrap"
          >
            Sign me up
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
