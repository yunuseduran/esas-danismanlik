"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { translations } = useLanguage();

  return (
    <main className="bg-white">
      <section className="relative flex min-h-[640px] h-screen w-full items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0">
          <div className="relative hidden h-full w-full md:block">
            <Image
              src="/banner.jpg"
              alt="Esas Danışmanlık gökdelen silüeti"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-full w-full md:hidden">
            <Image
              src="/mobile-banner.jpg"
              alt="Esas Danışmanlık mobil banner"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

        <div className="relative z-10 w-full max-w-4xl px-6">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3rem] text-white/80 ring-1 ring-white/30 backdrop-blur-sm">
            {translations.home.tag}
          </span>
          <h1 className="mt-8 font-heading text-4xl font-semibold leading-tight text-white md:text-6xl" dangerouslySetInnerHTML={{ __html: translations.home.title }} />
          <p className="mt-6 text-base text-white/85 md:text-lg">
            {translations.home.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/hizmetlerimiz"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.25rem] text-corporate shadow-lg transition hover:bg-slate-100"
            >
              {translations.home.button1}
            </Link>
            <Link
              href="/iletisim"
              className="rounded-full border border-white/60 px-8 py-3 text-sm font-semibold uppercase tracking-[0.25rem] text-white transition hover:border-white hover:bg-white/10"
            >
              {translations.home.button2}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
