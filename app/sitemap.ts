import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://esasdanismanlik.com';
  
  const routes = [
    '',
    '/kurumsal',
    '/hizmetlerimiz',
    '/iletisim',
    '/hizmetlerimiz/personel-ozluk-dosyasi-yonetimi',
    '/hizmetlerimiz/kvkk-uyumlu-calisan-evraklari',
    '/hizmetlerimiz/denetime-hazirlik-dosya-iyilestirme',
    '/hizmetlerimiz/ik-surec-standardizasyonu',
    '/hizmetlerimiz/ise-giris-ayrilma-surecleri',
    '/hizmetlerimiz/hizmet-calisan-sozlesmeleri',
    '/hizmetlerimiz/sirket-kurulumu-operasyonel-paket',
    '/hizmetlerimiz/marka-patent-degerlendirme',
    '/hizmetlerimiz/raporlama-takip-kontrol-sistemi',
    '/hizmetlerimiz/kurumsal-egitimler-ik-kvkk',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route === '/hizmetlerimiz' || route === '/kurumsal' || route === '/iletisim' ? 0.9 : 0.8,
  }));
}

