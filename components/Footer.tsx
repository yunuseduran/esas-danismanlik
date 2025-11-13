"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { translations } = useLanguage();

  const socialLinks = [
    { href: '#', icon: FaLinkedin, label: 'LinkedIn' },
    { href: '#', icon: FaTwitter, label: 'Twitter' },
    { href: '#', icon: FaInstagram, label: 'Instagram' },
  ];

  const navigationLinks = [
    { href: '/', label: translations.header.nav.home },
    { href: '/kurumsal', label: translations.header.nav.corporate },
    { href: '/hizmetlerimiz', label: translations.header.nav.services },
    { href: '/iletisim', label: translations.header.nav.contact },
  ];

  const serviceLinks = [
    { href: '/hizmetlerimiz/personel-ozluk-dosyasi-yonetimi', label: translations.services.footerServices.service1 },
    { href: '/hizmetlerimiz/kvkk-uyumlu-calisan-evraklari', label: translations.services.footerServices.service2 },
    { href: '/hizmetlerimiz/denetime-hazirlik-dosya-iyilestirme', label: translations.services.footerServices.service3 },
    { href: '/hizmetlerimiz/ik-surec-standardizasyonu', label: translations.services.footerServices.service4 },
    { href: '/hizmetlerimiz/ise-giris-ayrilma-surecleri', label: translations.services.footerServices.service5 },
    { href: '/hizmetlerimiz/hizmet-calisan-sozlesmeleri', label: translations.services.footerServices.service6 },
    { href: '/hizmetlerimiz/sirket-kurulumu-operasyonel-paket', label: translations.services.footerServices.service7 },
    { href: '/hizmetlerimiz/marka-patent-degerlendirme', label: translations.services.footerServices.service8 },
    { href: '/hizmetlerimiz/raporlama-takip-kontrol-sistemi', label: translations.services.footerServices.service9 },
    { href: '/hizmetlerimiz/kurumsal-egitimler-ik-kvkk', label: translations.services.footerServices.service10 },
  ];

  const usefulLinks = [
    { href: 'https://kvkk.gov.tr', label: translations.footer.usefulLinksLabels.kvkk },
    { href: 'https://verbis.kvkk.gov.tr', label: translations.footer.usefulLinksLabels.verbis },
    { href: 'https://mevzuat.adalet.gov.tr', label: translations.footer.usefulLinksLabels.mevzuat },
    { href: 'https://www.turkpatent.gov.tr', label: translations.footer.usefulLinksLabels.turkpatent },
    { href: 'https://www.resmigazete.gov.tr', label: translations.footer.usefulLinksLabels.resmigazete },
  ];

  return (
    <footer className="bg-corporate text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Logo ve Açıklama */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 lg:mb-6">
              <div className="relative h-10 w-10 lg:h-12 lg:w-12 rounded-lg overflow-hidden">
                <Image
                  src="/esas-logo.png"
                  alt="Esas Danışmanlık Logo"
                  fill
                  sizes="(max-width: 1024px) 40px, 48px"
                  className="object-contain"
                />
              </div>
              <span className="text-lg lg:text-xl font-bold">{translations.header.brandName}</span>
            </div>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4 lg:mb-6 max-w-sm">
              {translations.footer.description}
            </p>
            {/* Sosyal Medya */}
            <div className="flex space-x-2 lg:space-x-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="text-gray-300 hover:text-white transition-all duration-300 p-2 lg:p-2.5 rounded-lg hover:bg-white/10 hover:scale-105"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="lg:w-5 lg:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Menü Linkleri */}
          <div className="space-y-4 lg:space-y-0">
            <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-white">{translations.footer.menu}</h4>
            <ul className="space-y-2 lg:space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm lg:text-base block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetlerimiz */}
          <div className="space-y-4 lg:space-y-0">
            <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-white">{translations.header.nav.services}</h4>
            <ul className="space-y-2 lg:space-y-3">
              {serviceLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm lg:text-base block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Faydalı Linkler */}
          <div className="space-y-4 lg:space-y-0">
            <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-white">{translations.footer.usefulLinks}</h4>
            <ul className="space-y-2 lg:space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm lg:text-base block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Konum Haritası */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-white">{translations.footer.location}</h4>
            <div className="h-40 lg:h-48 overflow-hidden rounded-lg shadow-lg ring-1 ring-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d751.9779986625487!2d28.80935146962118!3d41.070916298208886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa58307f99a65%3A0xde552d1482bafb9c!2sDeposite%20Ofis!5e0!3m2!1str!2str!4v1763036150922!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Esas Danışmanlık Konum"
              />
            </div>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="mt-8 lg:mt-16 pt-6 lg:pt-8 border-t border-gray-700/50 text-center">
          <p className="text-gray-400 text-xs lg:text-sm">
            &copy; {new Date().getFullYear()} {translations.header.brandName}. {translations.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
