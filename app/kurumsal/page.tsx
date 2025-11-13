"use client";

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function KurumsalPage() {
  const { translations } = useLanguage();
  
  const sections = [
    {
      id: 'esas-danismanlik',
      title: translations.corporate.card1,
      icon: '🏢'
    },
    {
      id: 'vizyon-misyon',
      title: translations.corporate.card2,
      icon: '🎯'
    },
    {
      id: 'neden-esas',
      title: translations.corporate.card3,
      icon: '⭐'
    },
    {
      id: 'gizlilik-politikasi',
      title: translations.corporate.card4,
      icon: '🔒'
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
          <span className="text-xs font-semibold tracking-[0.3rem] text-corporate/60">{translations.corporate.pageTitle}</span>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-corporate md:text-5xl">
            {translations.corporate.mainTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
            {translations.corporate.mainSubtitle}
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-corporate/20 hover:scale-105"
            >
              <div className="text-3xl mb-4">{section.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-corporate group-hover:text-corporate/80 transition-colors">
                {section.title}
              </h3>
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      
      {/* 1. Esas Danışmanlık - Yazı Sol, Resim Sağ */}
      <section id="esas-danismanlik" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-corporate mb-6">
                {translations.corporate.section1Title}
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>{translations.corporate.section1Text1}</p>
                <p>{translations.corporate.section1Text2}</p>
                <p>{translations.corporate.section1Text3}</p>
              </div>
            </div>
            <div className="relative w-full max-w-[512px] aspect-[4/3] sm:aspect-[512/400] mx-auto overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/about-office.jpg"
                alt="KVKK Danışmanlık Hizmetleri"
                fill
                sizes="(max-width: 640px) 100vw, 512px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vizyon & Misyon - Resim Sol, Yazı Sağ */}
      <section id="vizyon-misyon" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full max-w-[512px] aspect-[4/3] sm:aspect-[512/400] mx-auto overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/vizyon-misyon.jpg"
                alt="Vizyon ve Misyon"
                fill
                sizes="(max-width: 640px) 100vw, 512px"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-semibold text-corporate mb-6">
                {translations.corporate.section2Title}
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-corporate mb-3">{translations.corporate.section2VisionTitle}</h3>
                  <p>{translations.corporate.section2VisionText}</p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-corporate mb-3">{translations.corporate.section2MissionTitle}</h3>
                  <p>{translations.corporate.section2MissionText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Neden Esas - Yazı Sol, Resim Sağ */}
      <section id="neden-esas" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-corporate mb-6">
                {translations.corporate.section3Title}
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>{translations.corporate.section3Text1}</p>
                <p>{translations.corporate.section3Text2}</p>
                <p>{translations.corporate.section3Text3}</p>
              </div>
            </div>
            <div className="relative w-full max-w-[512px] aspect-[4/3] sm:aspect-[512/400] mx-auto overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/neden-esas.jpg"
                alt="Neden Esas Danışmanlık"
                fill
                sizes="(max-width: 640px) 100vw, 512px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Gizlilik Politikamız - Resim Sol, Yazı Sağ */}
      <section id="gizlilik-politikasi" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full max-w-[512px] aspect-[4/3] sm:aspect-[512/400] mx-auto overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/gizlilik-politikasi.jpg"
                alt="Gizlilik Politikası"
                fill
                sizes="(max-width: 640px) 100vw, 512px"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-semibold text-corporate mb-6">
                {translations.corporate.section4Title}
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>{translations.corporate.section4Text1}</p>
                <p>{translations.corporate.section4Text2}</p>
                <p>{translations.corporate.section4Text3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
