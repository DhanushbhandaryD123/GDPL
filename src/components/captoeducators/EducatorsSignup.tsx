import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const initialFormState = {
  institution: '',
  name: '',
  jobTitle: '',
  email: '',
  country: '',
  requirements: '',
};

export function EducatorsSignup() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('capto_educators.signup.success'));
    setFormData(initialFormState);
  };

  const fieldClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[14px] font-medium text-[#1c2331] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6554ff]/30 focus:border-[#6554ff] transition-all';
  const labelClass = 'block text-[12px] font-bold text-gray-500 uppercase tracking-wide mb-2';

  return (
    <section id="signup" className="relative py-20 md:py-28 px-4 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto max-w-[760px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#f8f8fb] border border-gray-100 rounded-[2rem] p-8 md:p-14 shadow-[0_20px_60px_rgba(28,35,49,0.06)]"
        >
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-2xl bg-[#6554ff]/10 text-[#6554ff] flex items-center justify-center mx-auto mb-6">
              <Mail size={26} strokeWidth={2} />
            </div>
            <h2 className="text-2xl md:text-[2rem] font-bold text-[#1c2331] mb-3 tracking-tight">
              {t('capto_educators.signup.title')}
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-[480px] mx-auto font-medium">
              {t('capto_educators.signup.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="institution">
                  {t('capto_educators.signup.institution_label')} <span className="text-[#6554ff]">*</span>
                </label>
                <input
                  id="institution"
                  name="institution"
                  type="text"
                  required
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder={t('capto_educators.signup.institution_placeholder')}
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="name">
                  {t('capto_educators.signup.name_label')} <span className="text-[#6554ff]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('capto_educators.signup.name_placeholder')}
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="jobTitle">
                  {t('capto_educators.signup.job_title_label')} <span className="text-[#6554ff]">*</span>
                </label>
                <input
                  id="jobTitle"
                  name="jobTitle"
                  type="text"
                  required
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder={t('capto_educators.signup.job_title_placeholder')}
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="email">
                  {t('capto_educators.signup.email_label')} <span className="text-[#6554ff]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('capto_educators.signup.placeholder')}
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="country">
                  {t('capto_educators.signup.country_label')} <span className="text-[#6554ff]">*</span>
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  placeholder={t('capto_educators.signup.country_placeholder')}
                  className={fieldClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="requirements">
                  {t('capto_educators.signup.requirements_label')}
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows={4}
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder={t('capto_educators.signup.requirements_placeholder')}
                  className={`${fieldClass} resize-none`}
                />
              </div>
            </div>

            <p className="text-[11px] text-gray-400 font-medium">
              <span className="text-[#6554ff]">*</span> {t('capto_educators.signup.required_note')}
            </p>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#6554ff] hover:bg-[#5746df] text-white font-bold text-[14px] flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-200"
            >
              {t('capto_educators.signup.submit')}
              <Send size={15} strokeWidth={2.5} />
            </button>

            <p className="text-[11px] text-gray-400 font-medium">
              {t('capto_educators.signup.note')}
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
