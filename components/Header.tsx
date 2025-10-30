"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { language, setLanguage, translations } = useLanguage();

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  const navLinks = [
    { href: '/', label: translations.header.nav.home },
    { href: '/kurumsal', label: translations.header.nav.corporate },
    { href: '/hizmetlerimiz', label: translations.header.nav.services },
    { href: '/iletisim', label: translations.header.nav.contact },
  ];

  const shouldUseSolidBackground = !isHome || hasScrolled || isMenuOpen;

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    shouldUseSolidBackground ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
  }`;

  const linkBaseColor = shouldUseSolidBackground ? 'text-gray-700' : 'text-white';
  const brandColor = shouldUseSolidBackground ? 'text-corporate' : 'text-white';
  const iconColor = shouldUseSolidBackground ? 'text-corporate' : 'text-white';
  const dividerColor = shouldUseSolidBackground ? 'text-gray-300' : 'text-gray-200/80';

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center space-x-4">
          <div className="relative h-16 w-16 rounded-lg overflow-hidden">
            <Image
              src="/esas-logo.png"
              alt="Esas Danışmanlık Logo"
              fill
              sizes="64px"
              className="object-contain transition duration-300 hover:scale-105"
              priority
            />
          </div>
          <span className={`text-xl font-bold uppercase tracking-wider ${brandColor} transition-colors duration-300`}>
            Esas Danışmanlık
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium uppercase tracking-[0.18rem] transition-colors duration-300 ${
                  shouldUseSolidBackground ? 'hover:text-corporate' : 'hover:text-white/80'
                } ${linkBaseColor}`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-2 h-[2px] bg-corporate"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Language Switcher & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <div className="hidden items-center text-xs font-semibold uppercase tracking-[0.2rem] md:flex">
            <button 
              onClick={() => setLanguage('tr')} 
              className={`${language === 'tr' ? brandColor : linkBaseColor} transition-colors duration-300`}
            >
              TR
            </button>
            <span className={`${dividerColor} mx-2`}>/</span>
            <button 
              onClick={() => setLanguage('en')} 
              className={`${language === 'en' ? brandColor : linkBaseColor} transition-colors duration-300 hover:text-corporate`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`flex h-12 w-12 items-center justify-center rounded-lg transition hover:scale-105 md:hidden ${iconColor}`}
            aria-label="Menüyü Aç/Kapat"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="space-y-2 border-t border-gray-100 bg-white px-6 py-5 text-center shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-[0.18rem] text-gray-700 transition hover:bg-gray-100"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 text-xs font-semibold uppercase tracking-[0.2rem] text-gray-500">
              <button 
                onClick={() => setLanguage('tr')} 
                className={language === 'tr' ? 'text-corporate' : 'hover:text-corporate'}
              >
                TR
              </button>
              <span className="mx-2 text-gray-300">/</span>
              <button 
                onClick={() => setLanguage('en')} 
                className={language === 'en' ? 'text-corporate' : 'hover:text-corporate'}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
