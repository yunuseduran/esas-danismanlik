import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Esas Danışmanlık',
    short_name: 'Esas',
    description: 'Modern ve minimalist avukatlık ve danışmanlık hizmetleri',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0b122b',
    icons: [
      {
        src: '/esas-logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  };
}

