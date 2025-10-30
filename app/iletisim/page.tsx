"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function IletisimPage() {
  const { translations } = useLanguage();

  return (
    <div className="bg-white pt-28 pb-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3rem] text-corporate/60">{translations.contact.pageTitle}</span>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30959.931044918685!2d28.831863609763072!3d41.06948531808034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa59939b08cf5%3A0x51dbb16a702cb15a!2sMall%20of%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1761810105911!5m2!1str!2str" 
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
                <label htmlFor="name" className="block text-sm font-semibold uppercase tracking-[0.28rem] text-gray-500">
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
                <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-[0.28rem] text-gray-500">
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
                <label htmlFor="message" className="block text-sm font-semibold uppercase tracking-[0.28rem] text-gray-500">
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
                <button
                  type="submit"
                  className="w-full rounded-full bg-corporate px-6 py-3 text-sm font-semibold uppercase tracking-[0.3rem] text-white transition hover:bg-corporate/90"
                >
                  {translations.contact.formSubmit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
