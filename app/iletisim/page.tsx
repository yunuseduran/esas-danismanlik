"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function IletisimPage() {
  const { translations } = useLanguage();
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [kvkkConsent, setKvkkConsent] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');

  return (
    <div className="bg-white pt-28 pb-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.3rem] text-corporate/60">{translations.contact.pageTitle}</span>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-corporate md:text-5xl">
            {translations.contact.mainTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
            {translations.contact.mainSubtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[1.1fr,1fr]">
          <div className="space-y-8 rounded-3xl bg-gray-50 p-10 shadow-md">
            <div>
              <h3 className="font-heading text-xl font-semibold text-corporate">{translations.contact.addressTitle}</h3>
              <p className="mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: translations.contact.addressText }} />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-corporate">{translations.contact.emailTitle}</h3>
              <p className="mt-2 text-gray-600">info@esasdanismanlik.com</p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-corporate">{translations.contact.phoneTitle}</h3>
              <p className="mt-2 text-gray-600">+90 212 123 45 67</p>
            </div>
            <div className="h-64 overflow-hidden rounded-2xl shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d751.9779986625487!2d28.80935146962118!3d41.070916298208886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa58307f99a65%3A0xde552d1482bafb9c!2sDeposite%20Ofis!5e0!3m2!1str!2str!4v1763036150922!5m2!1str!2str"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Esas Danışmanlık Konum Haritası"
              />
            </div>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-lg ring-1 ring-gray-100">
            <h3 className="font-heading text-2xl font-semibold text-corporate">
              {translations.contact.formTitle}
            </h3>
            <form className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold tracking-[0.28rem] text-gray-500">
                  {translations.contact.formName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-700 shadow-sm transition focus:border-corporate focus:outline-none focus:ring focus:ring-corporate/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold tracking-[0.28rem] text-gray-500">
                  {translations.contact.formEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-700 shadow-sm transition focus:border-corporate focus:outline-none focus:ring focus:ring-corporate/20"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold tracking-[0.28rem] text-gray-500">
                  {translations.contact.formSubject}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-700 shadow-sm transition focus:border-corporate focus:outline-none focus:ring focus:ring-corporate/20"
                >
                  <option value="">{translations.contact.formSubject}</option>
                  <option value="general">{translations.contact.formSubjectOptions.general}</option>
                  <option value="service1">{translations.contact.formSubjectOptions.service1}</option>
                  <option value="service2">{translations.contact.formSubjectOptions.service2}</option>
                  <option value="service3">{translations.contact.formSubjectOptions.service3}</option>
                  <option value="service4">{translations.contact.formSubjectOptions.service4}</option>
                  <option value="service5">{translations.contact.formSubjectOptions.service5}</option>
                  <option value="service6">{translations.contact.formSubjectOptions.service6}</option>
                  <option value="service7">{translations.contact.formSubjectOptions.service7}</option>
                  <option value="service8">{translations.contact.formSubjectOptions.service8}</option>
                  <option value="service9">{translations.contact.formSubjectOptions.service9}</option>
                  <option value="service10">{translations.contact.formSubjectOptions.service10}</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold tracking-[0.28rem] text-gray-500">
                  {translations.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-700 shadow-sm transition focus:border-corporate focus:outline-none focus:ring focus:ring-corporate/20"
                ></textarea>
              </div>
              <div>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="kvkkConsent"
                    name="kvkkConsent"
                    checked={kvkkConsent}
                    onChange={(e) => setKvkkConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-corporate focus:ring-corporate"
                  />
                  <label htmlFor="kvkkConsent" className="text-sm text-gray-600 leading-relaxed">
                    {translations.contact.formKvkkConsent}{' '}
                    <button
                      type="button"
                      onClick={() => setIsPrivacyModalOpen(true)}
                      className="text-corporate hover:text-corporate/80 underline font-semibold"
                    >
                      {translations.contact.formKvkkPolicy}
                    </button>{' '}
                    {translations.contact.formKvkkText}
                  </label>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={!kvkkConsent}
                  className="w-full rounded-full bg-corporate px-6 py-3 text-sm font-semibold tracking-[0.3rem] text-white transition hover:bg-corporate/90 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  {translations.contact.formSubmit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative max-w-2xl w-full mx-4 bg-white rounded-2xl shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-6 border-b border-gray-200 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl font-semibold text-corporate">
                  {translations.contact.privacyPolicy.title}
                </h3>
                <button
                  onClick={() => setIsPrivacyModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                {translations.contact.privacyPolicy.content.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="sticky bottom-0 bg-white p-6 border-t border-gray-200 rounded-b-2xl">
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="w-full rounded-full bg-corporate px-6 py-3 text-sm font-semibold tracking-[0.3rem] text-white transition hover:bg-corporate/90"
              >
                {translations.contact.formSubmit === "Gönder" ? "Kapat" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
