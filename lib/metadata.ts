import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://esasdanismanlik.com';
const siteName = 'Esas Danışmanlık';
const siteDescription = {
  tr: 'Modern ve minimalist avukatlık ve danışmanlık hizmetleri. KVKK uyumlu çalışan evrakları, personel özlük dosyası yönetimi, denetime hazırlık ve daha fazlası.',
  en: 'Modern and minimalist legal and consulting services. KVKK compliant employee documents, personnel file management, audit preparation and more.'
};

export function generateMetadata({
  title,
  description,
  path = '',
  locale = 'tr',
  image = '/banner.jpg',
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  locale?: 'tr' | 'en';
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = `${title} | ${siteName}`;
  const defaultKeywords = [
    'esas danışmanlık',
    'kvkk danışmanlık',
    'hukuki danışmanlık',
    'iş hukuku',
    'personel dosyası yönetimi',
    'denetime hazırlık',
    'kvkk uyum',
    'legal consulting',
    'kvkk compliance',
    'hr consulting'
  ];
  const allKeywords = keywords ? [...defaultKeywords, ...keywords] : defaultKeywords;

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
      languages: {
        'tr-TR': `${siteUrl}${path}`,
        'en-US': `${siteUrl}/en${path}`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      url,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: `${siteUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${siteUrl}${image}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add Google Search Console verification code here if needed
      // google: 'your-verification-code',
    },
  };
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription.tr,
  keywords: [
    'esas danışmanlık',
    'kvkk danışmanlık',
    'hukuki danışmanlık',
    'iş hukuku',
    'personel dosyası yönetimi',
    'denetime hazırlık',
    'kvkk uyum',
  ].join(', '),
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '60x60', type: 'image/png' },
      { url: '/esas-logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/esas-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: siteUrl,
    languages: {
      'tr-TR': siteUrl,
      'en-US': `${siteUrl}/en`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteUrl,
    title: siteName,
    description: siteDescription.tr,
    siteName,
    images: [
      {
        url: `${siteUrl}/banner.jpg`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription.tr,
    images: [`${siteUrl}/banner.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#0b122b',
};

