"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HizmetlerimizPage() {
  const { translations } = useLanguage();
  
  const services = [
    {
      id: 'personel-ozluk-dosyasi',
      title: translations.services.service1.title,
      description: translations.services.service1.description,
      buttonText: translations.services.service1.buttonText,
      icon: '📋',
      slug: 'personel-ozluk-dosyasi-yonetimi'
    },
    {
      id: 'kvkk-uyumlu-evraklar',
      title: translations.services.service2.title,
      description: translations.services.service2.description,
      buttonText: translations.services.service2.buttonText,
      icon: '🛡️',
      slug: 'kvkk-uyumlu-calisan-evraklari'
    },
    {
      id: 'denetime-hazirlik',
      title: translations.services.service3.title,
      description: translations.services.service3.description,
      buttonText: translations.services.service3.buttonText,
      icon: '📊',
      slug: 'denetime-hazirlik-dosya-iyilestirme'
    },
    {
      id: 'ik-standardizasyon',
      title: translations.services.service4.title,
      description: translations.services.service4.description,
      buttonText: translations.services.service4.buttonText,
      icon: '⚙️',
      slug: 'ik-surec-standardizasyonu'
    },
    {
      id: 'ise-giris-ayrilma',
      title: translations.services.service5.title,
      description: translations.services.service5.description,
      buttonText: translations.services.service5.buttonText,
      icon: '🚪',
      slug: 'ise-giris-ayrilma-surecleri'
    },
    {
      id: 'sozlesme-sablonlari',
      title: translations.services.service6.title,
      description: translations.services.service6.description,
      buttonText: translations.services.service6.buttonText,
      icon: '📝',
      slug: 'hizmet-calisan-sozlesmeleri'
    },
    {
      id: 'sirket-kurulumu',
      title: translations.services.service7.title,
      description: translations.services.service7.description,
      buttonText: translations.services.service7.buttonText,
      icon: '🏢',
      slug: 'sirket-kurulumu-operasyonel-paket'
    },
    {
      id: 'marka-patent',
      title: translations.services.service8.title,
      description: translations.services.service8.description,
      buttonText: translations.services.service8.buttonText,
      icon: '™️',
      slug: 'marka-patent-degerlendirme'
    },
    {
      id: 'raporlama-takip',
      title: translations.services.service9.title,
      description: translations.services.service9.description,
      buttonText: translations.services.service9.buttonText,
      icon: '📈',
      slug: 'raporlama-takip-kontrol-sistemi'
    },
    {
      id: 'kurumsal-egitimler',
      title: translations.services.service10.title,
      description: translations.services.service10.description,
      buttonText: translations.services.service10.buttonText,
      icon: '🎓',
      slug: 'kurumsal-egitimler-ik-kvkk'
    }
  ];

  return (
    <div className="bg-white pt-28 pb-20">
      {/* Header Section */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3rem] text-corporate/60">{translations.services.pageTitle}</span>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-corporate md:text-5xl">
            {translations.services.mainTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
            {translations.services.mainSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-corporate/20"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{service.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-corporate">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                {service.description}
              </p>
              <Link
                href={`/hizmetlerimiz/${service.slug}`}
                className="inline-flex items-center px-6 py-3 bg-corporate text-white text-sm font-semibold rounded-full hover:bg-corporate/90 transition-colors duration-200"
              >
                {service.buttonText}
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}