import { Helmet } from 'react-helmet-async';
import { Navbar } from '../../components/layout/Navbar';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { Footer } from '../../components/layout/Footer';
import { FloatingSocials } from '../../components/layout/FloatingSocials';
import { ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  { question: 'What is Capto?', answer: 'Capto is an indispensable tool for educators, vloggers, and professionals to record screens, capture screenshots, and edit videos.' },
  { question: 'How do I record system audio?', answer: 'When starting a screen recording, simply ensure the "Record System Audio" checkbox is ticked in the recording settings panel.' }
];

export function CaptoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#ffffff] text-gray-800 font-sans flex flex-col">
      <Helmet><title>Capto FAQ | Global Delight</title></Helmet>
      <Navbar />
      <Breadcrumbs items={[{ name: 'FAQ', href: '/faq' }, { name: 'Capto FAQ' }]} />
      <FloatingSocials />

      <main className="flex-grow container mx-auto px-6 py-24 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 text-[#2c3e50]">Capto Support</h1>
          <p className="text-xl text-[#7f8c8d] max-w-2xl mx-auto">Capture, edit and share your ideas with ease.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#ecf0f1] p-8 md:p-12">
          <div className="relative mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bdc3c7]" />
            <input 
              type="text" placeholder="Search knowledge base..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#f8faf9] border border-[#ecf0f1] text-[#2c3e50] rounded-lg px-12 py-4 outline-none focus:border-[#3498db] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="border border-[#ecf0f1] rounded-lg bg-white overflow-hidden hover:border-[#bdc3c7] transition-colors">
                <button 
                  className="w-full px-8 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-lg text-[#34495e]">{faq.question}</span>
                  <ChevronDown className={`transition-transform text-[#95a5a6] ${openIndex === index ? 'rotate-180 text-[#3498db]' : ''}`} />
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-8 pb-6 text-[#7f8c8d] leading-relaxed border-t border-[#ecf0f1] pt-4 mx-4">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
