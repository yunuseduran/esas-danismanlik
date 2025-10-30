"use client";

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HizmetlerimizPage() {
  const { translations } = useLanguage();
  
  const services = [
    {
      id: 'kvk-danismanligi',
      title: translations.services.card1,
      icon: '🛡️'
    },
    {
      id: 'personel-ozluk-dosyasi',
      title: translations.services.card2,
      icon: '📋'
    },
    {
      id: 'hizmet-sozlesmesi',
      title: translations.services.card3,
      icon: '📝'
    },
    {
      id: 'sirket-kurulumu',
      title: translations.services.card4,
      icon: '🏛️'
    },
    {
      id: 'marka-patent',
      title: translations.services.card5,
      icon: '™️'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white pt-28 pb-20">
      {/* Header Section */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3rem] text-corporate/60">{translations.services.pageTitle}</span>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-corporate md:text-5xl">
            {translations.services.mainTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
            {translations.services.mainSubtitle}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => scrollToSection(service.id)}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-corporate/20 hover:scale-105"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="font-heading text-sm font-semibold text-corporate group-hover:text-corporate/80 transition-colors text-center">
                {service.title}
              </h3>
            </button>
          ))}
        </div>
      </div>

      {/* Service Sections */}
      
      {/* 1. KVK Danışmanlığı - Yazı Sol, Resim Sağ */}
      <section id="kvk-danismanligi" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-corporate mb-6">
                {translations.services.section1Title}
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>{translations.services.section1Text1}</p>
                <p>{translations.services.section1Text2}</p>
                <p>{translations.services.section1Text3}</p>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/hero-bg.jpg"
                alt="KVK Danışmanlığı"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Personel Özlük Dosyası - Resim Sol, Yazı Sağ */}
      <section id="personel-ozluk-dosyasi" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/about-office.jpg"
                alt="Personel Özlük Dosyası Danışmanlığı"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-semibold text-corporate mb-6">
                {translations.services.section2Title}
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>{translations.services.section2Text1}</p>
                <p>{translations.services.section2Text2}</p>
                <p>{translations.services.section2Text3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hizmet Sözleşmesi - Yazı Sol, Resim Sağ */}
      <section id="hizmet-sozlesmesi" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-corporate mb-6">
                {translations.services.section3Title}
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>{translations.services.section3Text1}</p>
                <p>{translations.services.section3Text2}</p>
                <p>{translations.services.section3Text3}</p>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/banner.jpg"
                alt="Hizmet Sözleşmesi Danışmanlığı"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Şirket Kurulumu - Resim Sol, Yazı Sağ */}
      <section id="sirket-kurulumu" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/mobile-banner.jpg"
                alt="Şirket Kurulumu Danışmanlığı"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-semibold text-corporate mb-6">
                {translations.services.section4Title}
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>{translations.services.section4Text1}</p>
                <p>{translations.services.section4Text2}</p>
                <p>{translations.services.section4Text3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Marka ve Patent - Yazı Sol, Resim Sağ */}
      <section id="marka-patent" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-corporate mb-6">
                {translations.services.section5Title}
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>{translations.services.section5Text1}</p>
                <p>{translations.services.section5Text2}</p>
                <p>{translations.services.section5Text3}</p>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/hero-bg.jpg"
                alt="Marka ve Patent Danışmanlığı"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
