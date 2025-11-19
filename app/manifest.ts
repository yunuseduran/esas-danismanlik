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
        src: '/favicon.png',
        sizes: '60x60',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon.png',
        sizes: '60x60',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/esas-logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/esas-logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}

