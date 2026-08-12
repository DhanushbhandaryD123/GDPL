import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';

export function CaptoPrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('privacy-policy');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['privacy-policy', 'terms-of-service'];
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
        <title>Legal & Privacy - Capto | Global Delight</title>
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
                href="#terms-of-service" 
                onClick={() => setActiveSection('terms-of-service')}
                className={`block pl-4 py-2.5 text-[14px] font-medium transition-colors border-l-2 -ml-[1px] ${activeSection === 'terms-of-service' ? 'border-[#00e5ff] text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'}`}
              >
                Terms of Service
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 max-w-[800px] text-[15px] leading-[1.8] text-gray-600">
          
          {/* Header */}
          <div className="mb-16 pb-8 border-b border-gray-100">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Legal Agreements</h1>
            <p className="text-lg text-gray-500">Capto</p>
          </div>

          <div className="space-y-20">
            
            {/* Privacy Policy */}
            <section id="privacy-policy" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Privacy Policy</h2>
              <div className="space-y-5">
                <p>Capto respects your privacy rights and recognizes the importance of protecting any information collected about you. This Privacy Policy defines how Capto collects and uses and shares personal and non-personal information.</p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Collection of Personal/Non-Personal Information you provide us directly:</h3>
                <p>Profile information that you provide to create account/user profile like your name, email address, address, photo etc.</p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Analytics Information:</h3>
                <p>We use third-party analytics tools to collect information like the web pages you visit, add-ons, and other information that assists us in improving the product/service. We collect and use this analytics information with analytics information from other users so that it cannot reasonably be used to identify any particular individual User.</p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Log Information:</h3>
                <p>We collect log information when you use our website. That information includes, among other things:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 marker:text-gray-300">
                  <li>details about how you've used our services.</li>
                  <li>device information, such as your web browser type and language.</li>
                  <li>session times.</li>
                  <li>pages viewed.</li>
                  <li>IP address.</li>
                  <li>identifiers associated with cookies or other technologies that may uniquely identify your device or browser.</li>
                  <li>pages you visited before or after navigating to our website.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Device Identifiers:</h3>
                <p>We may access, collect, monitor, store on your device, and/or remotely store one or more "device identifiers". Device identifiers are small data files or similar data structures stored on or associated with your mobile/desktop device a device identifier may be data stored in connection with network interface and location addressing or data sent to the device by Global Delight.</p>
                <p>A device identifier may deliver information to us or to a third-party partner about how you browse and use the service and may help us or others provide reports or personalized content and ads. Some features of the service may not function properly if use or availability of device identifiers is impaired or disabled.</p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Metadata:</h3>
                <p>Metadata is usually technical data that is associated with user content. For example, Metadata can describe how, when and by whom a piece of user content was collected and how that content is formatted.</p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How We Use Information:</h3>
                <p>The reason we collect your information is to provide you amazing products and services by relentlessly working to improve them. We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 marker:text-gray-300">
                  <li>develop, operate, improve, deliver, maintain, and protect our products and services.</li>
                  <li>send you communications, including by email. For example, we may use email to respond to support inquiries or to share information about our products, services, and promotional offers that we think may interest you.</li>
                  <li>monitor and analyze trends and usage.</li>
                  <li>Personalise our services.</li>
                  <li>contextualize your experience.</li>
                  <li>provide and improve ad targeting and measurement, including through the use of your precise location information (if you've given us permission to collect that information), both on and off our services.</li>
                  <li>enhance the safety and security of our products and services.</li>
                  <li>verify your identity and prevent fraud or other unauthorized or illegal activity.</li>
                  <li>use information we've collected from cookies and other technology to enhance our services and your experience with them.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Disclosure of Personal/Non-Personal Information:</h3>
                <p>We may share information about you in the following ways with third parties.</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 marker:text-gray-300">
                  <li><strong>With service providers:</strong> We may share information about you with service providers who perform services on our behalf.</li>
                  <li><strong>With business partners:</strong> We may share information about you with business partners that provide services and functionality.</li>
                  <li><strong>With third parties for legal reasons:</strong> We may share information about you if we reasonably believe that disclosing the information is needed to:
                    <ul className="list-[circle] pl-6 mt-2 space-y-1 text-gray-500">
                      <li>comply with any valid legal process, governmental request, or applicable law, rule, or regulation.</li>
                      <li>investigate, remedy, or enforce potential Terms of Service violations.</li>
                      <li>protect the rights, property, and safety of us, our users, or others.</li>
                      <li>detect and resolve any fraud or security concerns.</li>
                    </ul>
                  </li>
                </ul>
                <div className="bg-blue-50/50 rounded-xl p-6 my-6 border border-blue-100">
                  <p className="text-blue-900"><strong>Capto does not store screen recordings, screen captures, or audio recordings on the cloud or any other external server of any kind.</strong> These are only stored locally on the user's device.</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Data Retention:</h3>
                <p>Capto retains the information collected pursuant to this Privacy Policy. If the collected information is no longer needed for purposes specified in this Privacy Policy, Capto shall delete all aforementioned information in its possession.</p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Terms and Conditions:</h3>
                <p>Please note that your access to and the ability to use Capto may be subject to certain third-party terms and conditions and privacy policies, including but not limited to application stores, software platforms, and payment processors if any. You recognize and agree that Global Delight is not liable for any such third-party terms and conditions and their use of your personal data.</p>
                <p>Capto uses YouTube API Services in order to upload content to YouTube. Please read the Google Privacy Policy and YouTube's terms of service.</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 marker:text-gray-300">
                  <li><strong>Google Privacy Policy:</strong> <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">https://policies.google.com/privacy</a></li>
                  <li><strong>YouTube's terms of service:</strong> <a href="https://www.youtube.com/t/terms" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">https://www.youtube.com/t/terms</a></li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Revisions to Privacy Policy:</h3>
                <p>We may update this Privacy Policy from time to time. But when we do, we'll let you know one way or another. Sometimes, we'll let you know by revising the date at the top of the Privacy Policy that's available on our website and mobile application. Other times, we may provide you with additional notice (such as adding a statement to our websites' homepages or providing you with an in-app notification).</p>
                <p>If you have an unresolved privacy or data use concern that we have not addressed satisfactorily, please feel free to contact us at <a href="mailto:privacy@globaldelight.com" className="text-blue-600 hover:underline">privacy@globaldelight.com</a></p>
                <p>For more queries, please contact us at <a href="mailto:info@globaldelight.com" className="text-blue-600 hover:underline">info@globaldelight.com</a></p>
              </div>
            </section>

            {/* Terms of Service */}
            <section id="terms-of-service" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Terms of Service</h2>
              <div className="space-y-6">
                <p className="font-semibold text-gray-900 p-4 bg-gray-50 rounded-lg border border-gray-100">IT IS IMPORTANT THAT YOU READ AND UNDERSTAND THIS TERMS AND CONDITIONS ("T&C") DOCUMENT CAREFULLY BEFORE INSTALLING OR USING THE SOFTWARE PRODUCT – CAPTO.</p>
                <p>For all practical purposes, irrespective of the version nomenclature, the base product name will be used as "Capto" in the T&C. Capto includes mobile software and associated media and may include printed materials, and may include "online" or electronic documentation collectively called as 'App', 'Software' or 'Software Product'.</p>
                <p>This is a legal document between you (either an individual or an entity, herein referred to as 'USER') and Global Delight Technologies Pvt. Ltd., (herein referred to as 'Company'). By installing, copying, downloading, or otherwise using the App, USER acknowledges that USER has read this T&C, that USER understands it, and USER agrees to be bound by the T&C. USER can install the App on a Portable/ Mobile/ Detachable device or Home Computer or on a Workstation, collectively called as 'Mobile', 'Computer' or 'System/ Systems'.</p>
                <p>"Use" means downloading, installation, copying, storing, executing, loading, searching, displaying or otherwise using the Software.</p>
                <p>"Content" means audio, video or image files such as music videos, music, songs, podcasts, audio books, cover artwork, movies, streaming services, etc.</p>
                <p>In case USER does not wish to continue or does not agree with the terms and conditions of this Agreement, USER can exit from the installation or Use of the App.</p>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">RIGHTS AND OBLIGATIONS:</h3>
                
                <div className="space-y-5">
                  <p><strong className="text-gray-900 block mb-1">Copyright:</strong> Global Delight and its Products and Logos are the Trademarks of the Company. All intellectual property rights in the Software and its associated documents (including but not limited to any images, photographs, animations, video, audio, music, text, and "applets," incorporated into the Software Product) are exclusively owned by the Company, and are protected by applicable Copyright, Trade Secret, Patent and Trademark laws. The Software is licensed, not sold. USER will not remove any identification, modify or obscure any proprietary or copyright notice of the Company from any copy of the Software or documents. In case of misuse of the intellectual property by any USER in any manner or form, Company will, in appropriate circumstances, initiate Legal Procedures against the USER.</p>
                  
                  <p><strong className="text-gray-900 block mb-1">Copyright – Third party services and Content:</strong> Capto, when used on your supported System, accesses Content either residing on the local device and/or through online or streaming services. Company does not own any Copyright to such content produced and/or provided by third party services and use of unauthorized content by the USER is strictly forbidden. Company makes use of licensed programmatic access to such Content from third party providers via Software Development Kit (SDK) and/or Application Program Interface (API). Company does not allow download, persistent storage or export of unauthorized content. Company respects the Copyright, Intellectual Property Rights, Ownership of such Content by the owners of the Content and Company claims no ownership or warranties thereof. USER is responsible to respect and abide by the T&C, Copyright and Intellectual Property Rights (IPR) of all Content displayed and/or accessed via the App.</p>
                  
                  <p><strong className="text-gray-900 block mb-1">Grant of License:</strong> USER may download Software or purchase a license from Company's Website or through other authorized third party Websites, digital or retail storefronts. All licenses to the Software are non-exclusive, non-transferable, limited license to Use the copy of the Software and its associated documents.</p>
                  
                  <p><strong className="text-gray-900 block mb-1">Rights and Limitations:</strong> USER is not authorized to rent, lease, sell, sublicense, assign or transfer rights in the Software. USER is not authorized to cause any portion of the Software to be copied onto another person's System. USER has no ownership rights in the Software and its associated documents. The Ownership in the Software and its associated documents rests at all times with the Company. Failing to Use the Software as per 'Terms of Use' of the T&C by USER is strictly forbidden and is a violation of this T&C. In such case the Company may terminate the T&C and USER must destroy all copies of the Software Product and all of its associated documents. Company may, at its sole discretion, initiate legal action against USER for such violations, and USER will be prosecuted to the maximum extent possible, which may result in severe civil and/or criminal penalties.</p>
                  
                  <div className="pl-6 border-l-[3px] border-gray-200 space-y-3 my-6 py-2">
                    <p className="font-semibold text-gray-900">Terms of Use:</p>
                    <p className="text-gray-600 mb-2">USER shall not:</p>
                    <ul className="list-[lower-alpha] pl-6 space-y-2 text-gray-600 marker:text-gray-400">
                      <li>Modify, adapt, translate, decompile, disassemble or reverse engineer the Software or any portion thereof, in any manner;</li>
                      <li>Attempt to break security, access, tamper with or use any unauthorized portion of the Software;</li>
                      <li>Remove any Copyright, Trade Mark or other proprietary rights notices contained in the Software;</li>
                      <li>Attempt to collect or maintain any information about other users of the Software or other third parties for unauthorized purposes;</li>
                      <li>Transmit or attempt to transmit the Software over any network or between any devices unauthorizedly, enabling use of the Software on multiple Systems;</li>
                      <li>USE the Software for transmission of any viruses, worms, defects, trojan horses or other malicious code or items of a destructive nature; or</li>
                      <li>USE the Software for any unlawful, copyright infringement, harassing, abusive, criminal or fraudulent purposes.</li>
                    </ul>
                  </div>
                  
                  <p><strong className="text-gray-900 block mb-1">Update, Upgrade, Maintenance, Data:</strong> The Company may from time to time issue updates or upgrades of the Software, including on different application platforms. As part of necessitating an update/upgrade and maintenance or fraud detection with regards to the Software, Company may collect user information such as User's System information and/or User related information. Company undertakes to store such information securely in an encrypted form and take all reasonable measures to prevent any unauthorized use of such information.</p>
                  <p>All updates and upgrades will be available to the USER at a fixed price, subscription or free of cost, and on the conditions prescribed by the Company. Company keeps the exclusive rights whether to develop or maintain the Software further or to withdraw the Software from offering for download, without any prior notice to the USERS.</p>
                  
                  <p><strong className="text-gray-900 block mb-1">Age Factor:</strong> USERS below 18 years of age should receive parental or guardian guidance related to downloading and using the Software. If USER is below eighteen years of age, Company assumes that USER has obtained necessary permission or guidance before downloading or using the application and that USER's parents or guardian have no objection in this regard and have read and understood the T&C and have accepted the Terms and Conditions and Terms of Use on behalf of USER. In certain countries, the minimum age for downloading, installing or using digital Software may vary subject to local laws and the Company assumes that the USER has made an informed and legal decision.</p>
                  
                  <p><strong className="text-gray-900 block mb-1">Risk:</strong> Capto is intended to be used as a personal utility tool. Capto enhances the system audio output volume by using proprietary algorithms. The volume output, when synthesized through Capto, increases the system audio output to the best possible level and enhances the audibility of the audio. The Software has been designed and thoroughly tested by the Company to get the optimum audio output levels which under normal usage do not cause any damage to the sound hardware of the System or headphones or other audio accessories. USER is solely responsible for all the actions and results related to the use of this Software.</p>
                  
                  <p><strong className="text-gray-900 block mb-1">Limited Warranty:</strong> The Software is provided "As Is" without warranty of any kind, express or implied, including, but not limited to, warranties of performance or merchantability or fitness for a particular purpose. USER bears all risk relating to the use of the Software. If the Software does not perform substantially in accordance with the documentation, USER's exclusive remedy will be limited to, at Company's sole discretion, correction of the defect in the Software, if any, or refund of the actual cost paid by the User for the Software, subject to Clause No. 10 below.</p>
                  
                  <p><strong className="text-gray-900 block mb-1">Customer Remedies:</strong> Company offers online support for this Software, pre and post sale. The nature of support can be free or on payment basis and the option of switching from free or on payment basis may be amended without prior notice, at the discretion of the Company. Company will try to resolve the issues arising from this Software. USER will cooperate with the Company Support team for investigation of issues. This limited warranty is void if failure of the Software has resulted from accident, abuse, misapplication or violating the Terms of Use.</p>
                  
                  <p><strong className="text-gray-900 block mb-1">Service:</strong> While Global Delight makes reasonable efforts to ensure that its services are available at all times, Global Delight does not guarantee, represent or warrant that its services will be uninterrupted or error-free, and Global Delight does not guarantee that users will be able to access or use all the Global Delight assistance for the Software at all times.</p>

                  <p><strong className="text-gray-900 block mb-1">No Liability:</strong> In no event shall the Company be liable to the USER for any loss, damages, claims or costs whatsoever including any special, consequential, indirect or incidental damages, any lost profits or lost savings, lost data, loss of privacy, any damages resulting from business interruption, personal injury or failure to meet any duty of care, or claims by a third party arising out of the use or inability or inappropriate use of the Software, even if the Company has been advised of the possibility of such loss, damages, claims or costs in advance.</p>

                  <div className="pl-6 border-l-[3px] border-gray-200 space-y-3 my-6 py-2">
                    <p className="font-semibold text-gray-900">Legal Terms and Restrictions:</p>
                    <ul className="list-[lower-alpha] pl-6 space-y-2 text-gray-600 marker:text-gray-400">
                      <li>The Software and its associated documents are exported from India. This T&C is expressly made subject to any Laws, regulations, orders, or other restrictions on the export from India, of the Software or information about such Software, which may be imposed from time to time by the Government of India. USER shall not export the Software and its associated documents or any information thereof without the written permission from the Company.</li>
                      <li>T&C shall be governed, construed and implemented by the laws of India without giving effect to conflict of laws principle. All disputes under T&C shall be subject to the exclusive jurisdiction of the courts in Udupi District, Karnataka State, India.</li>
                      <li>No failure to enforce any term of this T&C shall constitute a waiver of such term.</li>
                      <li>USER shall not assign its obligations hereunder in whole or in part without the prior written approval of the Company.</li>
                      <li>If any part of this T&C is for any reason found to be invalid, illegal or unenforceable, the validity, legality and enforceability of the remaining provisions of this T&C shall not be affected and same shall remain in effect.</li>
                    </ul>
                  </div>

                  <p><strong className="text-gray-900 block mb-1">Complete Agreement:</strong> This T&C is the complete and exclusive statement of the agreement between the Company and the USER with respect to the subject matter, and supersedes and voids any proposal prior or agreement to this T&C, oral or written, and any other communications between the Parties.</p>

                  <p><strong className="text-gray-900 block mb-1">Amendments:</strong> Company may, at any time, and at its sole discretion update/modify the Terms and Conditions without any notice to the User. The most current version of the Terms and Conditions shall be applicable.</p>
                </div>
              </div>
            </section>

            {/* Contact & Footer Info Section */}
            <section className="mt-16 pt-10 border-t border-gray-200">
              <div className="bg-gray-50 rounded-xl p-8 text-center space-y-4">
                <p className="text-gray-600">If the USER has any queries with respect to the above terms and conditions, please write to the Company at <a href="mailto:info@globaldelight.com" className="text-blue-600 hover:underline">info@globaldelight.com</a> or visit our Website <a href="http://www.globaldelight.com" className="text-blue-600 hover:underline">http://www.globaldelight.com</a> for contact information.</p>
                <p className="text-sm text-gray-400 mt-6 pt-4 border-t border-gray-200/60 max-w-sm mx-auto">Copyright © 2008-2026, Global Delight Technologies Pvt. Ltd. All rights reserved.</p>
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </div>
  );
}
