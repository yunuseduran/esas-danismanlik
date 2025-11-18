"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function IkSurecStandardizasyonuPage() {
  const { translations } = useLanguage();
  const service = translations.services.serviceDetails.service4;

  return (
    <div className="bg-white pt-28 pb-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-corporate/10 to-corporate/5">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <Link 
                  href="/hizmetlerimiz"
                  className="inline-flex items-center text-sm text-corporate hover:text-corporate/80 transition-colors"
                >
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  {translations.services.pageTitle}
                </Link>
              </div>
              <h1 className="font-heading text-4xl font-semibold text-corporate mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {service.subtitle}
              </p>
              <Link
                href="/iletisim"
                className="inline-flex items-center px-8 py-3 bg-corporate text-white text-sm font-semibold rounded-full hover:bg-corporate/90 transition-colors duration-200"
              >
                {translations.servicePages.startButton}
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative w-full max-w-[512px] aspect-[4/3] sm:aspect-[512/400] mx-auto overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/ik-surec.jpg"
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, 512px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-corporate mb-6">
              {translations.servicePages.overview}
            </h2>
            <div className="text-left space-y-4">
              {service.overview.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-corporate mb-6">
              {translations.servicePages.features}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature: string, index: number) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-corporate/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-corporate" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-corporate mb-6">
              {translations.servicePages.process}
            </h2>
          </div>
          <div className="space-y-8">
            {service.process.map((step: string, index: number) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-corporate text-white rounded-full flex items-center justify-center font-semibold mr-6">
                  {index + 1}
                </div>
                <div className="pt-2">
                  <p className="text-gray-700 leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-corporate mb-6">
              {translations.servicePages.deliverables}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((deliverable: string, index: number) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 bg-corporate/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-3 h-3 text-corporate" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{deliverable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-corporate text-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-semibold mb-6">
            {translations.servicePages.ctaTitle}
          </h2>
          <p className="text-lg mb-8 text-white/90">
            {translations.servicePages.ctaDescriptions.service4}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-corporate text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              {translations.servicePages.ctaButton}
            </Link>
            <Link
              href="/hizmetlerimiz"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              {translations.servicePages.otherServicesButton}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
