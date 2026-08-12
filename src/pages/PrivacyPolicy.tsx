import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';

export function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('privacy-policy');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['privacy-policy', 'cookie-policy', 'eula', 'refund-policy'];
      const scrollPosition = window.scrollY + 150; // offset for fixed header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans pt-28 pb-20">
      <Helmet>
        <title>Legal & Privacy | Global Delight</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-12 lg:gap-24">
        
        {/* Sticky Sidebar Navigation */}
        <div className="md:w-64 shrink-0 hidden md:block">
          <div className="sticky top-32">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 pl-4">Contents</h3>
            <nav className="space-y-1 border-l border-gray-200">
              <a 
                href="#privacy-policy" 
                onClick={() => setActiveSection('privacy-policy')}
                className={`block pl-4 py-2.5 text-[14px] font-medium transition-colors border-l-2 -ml-[1px] ${activeSection === 'privacy-policy' ? 'border-[#00e5ff] text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'}`}
              >
                Privacy Policy
              </a>
              <a 
                href="#cookie-policy" 
                onClick={() => setActiveSection('cookie-policy')}
                className={`block pl-4 py-2.5 text-[14px] font-medium transition-colors border-l-2 -ml-[1px] ${activeSection === 'cookie-policy' ? 'border-[#00e5ff] text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'}`}
              >
                Cookie Policy
              </a>
              <a 
                href="#eula" 
                onClick={() => setActiveSection('eula')}
                className={`block pl-4 py-2.5 text-[14px] font-medium transition-colors border-l-2 -ml-[1px] ${activeSection === 'eula' ? 'border-[#00e5ff] text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'}`}
              >
                End User License Agreement
              </a>
              <a 
                href="#refund-policy" 
                onClick={() => setActiveSection('refund-policy')}
                className={`block pl-4 py-2.5 text-[14px] font-medium transition-colors border-l-2 -ml-[1px] ${activeSection === 'refund-policy' ? 'border-[#00e5ff] text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'}`}
              >
                Refund Policy
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 max-w-[800px] text-[15px] leading-[1.8] text-gray-600">
          
          {/* Header */}
          <div className="mb-16 pb-8 border-b border-gray-100">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Legal Agreements</h1>
            <p className="text-lg text-gray-500">Boom 3D / Boom2 / Boom</p>
            <p className="text-sm text-gray-400 mt-2 font-medium">Effective date: April 17, 2023</p>
          </div>

          <div className="space-y-20">
            
            {/* Privacy Policy */}
            <section id="privacy-policy" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Privacy Policy</h2>
              <div className="space-y-5">
                <p>Boom 3D / Boom2 / Boom ("us", "we", or "our") operates on our Global Delight online Store, Mac App Store, Microsoft Store, Steam Store, and Setapp (hereinafter referred to as the "Service").</p>
                <p>This page informs you of our policies regarding the collection, use and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
                <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from <a href="https://www.globaldelight.com/boom" className="text-blue-600 hover:underline">www.globaldelight.com/boom</a> and <a href="https://www.globaldelight.com/boom2" className="text-blue-600 hover:underline">www.globaldelight.com/boom2</a>.</p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Definitions:</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-600 marker:text-gray-300">
                  <li><strong className="text-gray-900">Service:</strong> Service is www.globaldelight.com/boom and www.globaldelight.com/boom2 operated by Global Delight.</li>
                  <li><strong className="text-gray-900">Personal Data:</strong> Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</li>
                  <li><strong className="text-gray-900">Usage Data:</strong> Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                  <li><strong className="text-gray-900">Cookies:</strong> Cookies are small files stored on your device (computer or mobile device).</li>
                  <li><strong className="text-gray-900">Data Controller:</strong> Data Controller means the natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal information are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your Personal Data.</li>
                  <li><strong className="text-gray-900">Data Processors (or Service Providers):</strong> Data Processor (or Service Provider) means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.</li>
                  <li><strong className="text-gray-900">Data Subject (or User):</strong> Data Subject is any living individual who is using our Service and is the subject of Personal Data.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Information Collection and Use</h3>
                <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

                <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Types of Data Collected: Personal Data</h4>
                <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, First name and last name, Cookies and Usage Data.</p>
                <p>We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or the instructions provided in any email we send.</p>

                <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Usage Data</h4>
                <p>We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Use of Data</h3>
                <p>Boom uses the collected data for various purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 marker:text-gray-300">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features of our Service when you agreement for to do so</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical issues</li>
                  <li>To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">General Data Protection Regulation (GDPR)</h3>
                <p>If you are from the European Economic Area (EEA), Boom legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it. Boom may process your Personal Data because:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 marker:text-gray-300">
                  <li>We need to perform a contract with you</li>
                  <li>You have given us permission to do so</li>
                  <li>The processing is in our legitimate interests and it is not overridden by your rights</li>
                  <li>For payment processing purposes</li>
                  <li>To comply with the law</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Data Retention & Transfer</h3>
                <p>Boom will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes and enforce our legal agreements and policies.</p>
                <p>Your information, including Personal Data, may be transferred to - and maintained on - computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Disclosure & Security of Data</h3>
                <p>Under certain circumstances, Boom may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities.</p>
                <p>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
              </div>
            </section>

            {/* Cookie Policy */}
            <section id="cookie-policy" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Cookie Policy</h2>
              <div className="space-y-5">
                <p>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyse our Service.</p>
                <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                
                <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Examples of Cookies we use:</h4>
                <ul className="list-disc pl-6 space-y-3 text-gray-600 marker:text-gray-300">
                  <li><strong className="text-gray-900">Session Cookies:</strong> We use Session Cookies to operate our Service.</li>
                  <li><strong className="text-gray-900">Preference Cookies:</strong> We use Preference Cookies to remember your preferences and various settings.</li>
                  <li><strong className="text-gray-900">Security Cookies:</strong> We use Security Cookies for security purposes.</li>
                </ul>
              </div>
            </section>

            {/* EULA */}
            <section id="eula" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">End User License Agreement (EULA)</h2>
              <div className="space-y-6">
                <p className="font-semibold text-gray-900 p-4 bg-gray-50 rounded-lg border border-gray-100">IT IS IMPORTANT THAT YOU READ AND UNDERSTAND THIS TERMS AND CONDITIONS (“T&C”) DOCUMENT CAREFULLY BEFORE INSTALLING OR USING THE SOFTWARE PRODUCT – Boom.</p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Rights and Obligations:</h3>
                <div className="space-y-5">
                  <p><strong className="text-gray-900 block mb-1">1. Copyright:</strong> Global Delight and its Products and Logos are the Trademarks of the Company. All intellectual property rights in the Software and its associated documents are exclusively owned by the Company, and are protected by applicable Copyright, Trade Secret, Patent and Trademark laws. The Software is licensed, not sold.</p>
                  
                  <p><strong className="text-gray-900 block mb-1">2. Copyright - Third party services and Content:</strong> Boom accesses Content either residing on the local device and/or through online or streaming services. Company does not own any Copyright to such content produced and/or provided by third party services and use of unauthorized content by the USER is strictly forbidden.</p>
                  
                  <p><strong className="text-gray-900 block mb-1">3. Grant of License:</strong> USER may download Software or purchase a license from Company’s Website or through other authorized third party Websites, digital or retail storefronts.</p>
                  
                  <p><strong className="text-gray-900 block mb-1">4. Rights and Limitations:</strong> USER is not authorized to rent, lease, sell, sublicense, assign or transfer rights in the Software.</p>
                  
                  <div className="pl-6 border-l-[3px] border-gray-200 space-y-3 my-6 py-2">
                    <p className="font-semibold text-gray-900">Terms of Use:</p>
                    <ul className="list-[lower-alpha] pl-6 space-y-2 text-gray-600 marker:text-gray-400">
                      <li>Modify, adapt, translate, decompile, disassemble or reverse engineer the Software or any portion thereof, in any manner;</li>
                      <li>Attempt to break security, access, tamper with or use any unauthorized portion of the Software;</li>
                      <li>Remove any Copyright, Trade Mark or other proprietary rights notices contained in the Software;</li>
                      <li>USE the Software for transmission of any viruses, worms, defects, trojan horses or other malicious code;</li>
                      <li>USE the Software for any unlawful, copyright infringement, harassing, abusive, criminal or fraudulent purposes.</li>
                    </ul>
                  </div>
                  
                  <p><strong className="text-gray-900 block mb-1">7. Risk:</strong> Boom is intended to be used as a personal utility tool. Boom enhances the system audio output volume by using proprietary algorithms. USER is solely responsible for all the actions and results related to the use of this Software.</p>
                  
                  <p><strong className="text-gray-900 block mb-1">8. Limited Warranty:</strong> The Software is provided “As Is” without warranty of any kind, express or implied, including, but not limited to, warranties of performance or merchantability or fitness for a particular purpose. USER bears all risk relating to the use of the Software.</p>
                  
                  <p><strong className="text-gray-900 block mb-1">11. No Liability:</strong> In no event shall the Company be liable to the USER for any loss, damages, claims or costs whatsoever including any special, consequential, indirect or incidental damages, any lost profits or lost savings, lost data, loss of privacy.</p>
                  
                  <p><strong className="text-gray-900 block mb-1">14. Subscription Terms:</strong> Boom is available by auto-renewable subscriptions and lifetime purchase (One-time). Your Microsoft Store will be charged for renewal within 24-hours prior to the end of the current period.</p>
                </div>
              </div>
            </section>

            {/* Refund Policy */}
            <section id="refund-policy" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Refund Policy</h2>
              <div className="space-y-5">
                <p>Software developed by Global Delight is available on a try-before-you-buy basis; there are free Demo versions you can download to ensure that you can fully experience it prior to making your purchase. We also encourage you to review the online help documentation of the software, use the trial version of software to ensure that it meets your requirements before you make a purchase.</p>
                <p>If you are not satisfied with software purchased directly from Global Delight, please contact our Customer Support Team (by email or social media platform) within 15 days of your purchase to receive a refund.</p>
                
                <div className="bg-red-50/50 rounded-xl p-6 my-8 border border-red-100">
                  <h3 className="text-lg font-semibold text-red-700 mb-4">Non-Refundable Cases</h3>
                  <p className="mb-4 text-red-900/80">Global Delight may decline refund claims in the following cases:</p>
                  <ul className="list-disc pl-6 space-y-2 text-red-900/80 marker:text-red-300">
                    <li>Software purchased for the incorrect platform</li>
                    <li>Inability to operate the software in your computing environment.</li>
                    <li>Inability to use the software due to an operator error.</li>
                    <li>We will not refund or credit the difference between the price you were charged and the limited-time price reduction.</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Refund Policy for Respective Stores</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://support.google.com/googleplay/answer/2479637?hl=en" target="_blank" rel="noreferrer" className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition group">
                    <div>
                      <strong className="block text-gray-900 group-hover:text-blue-600 transition">Play Store Purchases</strong>
                      <span className="text-sm text-gray-500">Google Play Support</span>
                    </div>
                  </a>
                  <a href="https://support.microsoft.com/en-in/help/10558/microsoft-store-returning-items-bought-for-exchange-refund" target="_blank" rel="noreferrer" className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition group">
                    <div>
                      <strong className="block text-gray-900 group-hover:text-blue-600 transition">Microsoft Store</strong>
                      <span className="text-sm text-gray-500">Microsoft Store Returns</span>
                    </div>
                  </a>
                  <a href="https://support.apple.com/en-us/HT204084" target="_blank" rel="noreferrer" className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition group">
                    <div>
                      <strong className="block text-gray-900 group-hover:text-blue-600 transition">Apple App Store</strong>
                      <span className="text-sm text-gray-500">Apple Support</span>
                    </div>
                  </a>
                  <a href="https://store.steampowered.com/steam_refunds/" target="_blank" rel="noreferrer" className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition group">
                    <div>
                      <strong className="block text-gray-900 group-hover:text-blue-600 transition">Steam Store</strong>
                      <span className="text-sm text-gray-500">Steam Refunds</span>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="mt-16 pt-10 border-t border-gray-200">
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Need to contact us?</h3>
                <p className="text-gray-600 mb-6">If you have any queries with respect to the above terms and conditions or wish to submit a data processing request, please reach out to our privacy team.</p>
                <a href="mailto:privacy@globaldelight.com" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition">
                  privacy@globaldelight.com
                </a>
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </div>
  );
}
