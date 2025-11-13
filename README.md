# Esas Danışmanlık

Modern ve minimalist avukatlık ve danışmanlık hizmetleri web sitesi. Next.js, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## Özellikler

- 🌐 Çok dilli destek (TR/EN)
- 📱 Tam responsive tasarım
- 🎨 Modern ve minimalist UI/UX
- 🔍 SEO optimizasyonu (Open Graph, Twitter Cards, Sitemap)
- ⚡ Next.js App Router ile hızlı performans
- 🎯 KVKK uyumlu form yapısı

## Gereksinimler

- Node.js 18+ 
- npm, yarn, pnpm veya bun

## Kurulum

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Favicon Dosyaları

SEO ve favicon yapılandırması için aşağıdaki favicon dosyalarını `public` klasörüne eklemeniz gerekmektedir:

- `favicon-16x16.png` (16x16 piksel)
- `favicon-32x32.png` (32x32 piksel)
- `apple-touch-icon.png` (180x180 piksel)

Bu dosyaları `public/esas-logo.png` dosyasından oluşturabilirsiniz. Online araçlar kullanarak (ör. [favicon.io](https://favicon.io), [realfavicongenerator.net](https://realfavicongenerator.net)) logo dosyanızdan favicon setini oluşturabilirsiniz.

## SEO Yapılandırması

Site, kapsamlı SEO metadata yapısına sahiptir:

- Open Graph etiketleri
- Twitter Card etiketleri
- Canonical URL'ler
- Hreflang etiketleri (TR/EN)
- Sitemap.xml (otomatik oluşturulur)
- Robots.txt

SEO ayarlarını `lib/metadata.ts` dosyasından düzenleyebilirsiniz.

## Proje Yapısı

```
esas/
├── app/                    # Next.js App Router sayfaları
│   ├── page.tsx           # Ana sayfa
│   ├── kurumsal/          # Kurumsal sayfa
│   ├── hizmetlerimiz/     # Hizmetler sayfaları
│   ├── iletisim/          # İletişim sayfası
│   ├── layout.tsx          # Root layout
│   ├── sitemap.ts         # Sitemap generator
│   └── manifest.ts        # Web manifest
├── components/            # React bileşenleri
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── LanguageWrapper.tsx
├── contexts/              # React Context API
│   └── LanguageContext.tsx
├── locales/               # Çeviri dosyaları
│   ├── tr.json
│   └── en.json
├── lib/                   # Yardımcı fonksiyonlar
│   └── metadata.ts        # SEO metadata helper
└── public/                # Statik dosyalar
    ├── robots.txt
    └── manifest.json
```

## Build ve Deploy

```bash
# Production build
npm run build

# Production sunucusunu başlat
npm start
```

## Teknolojiler

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React Context API** - Global state management

## Lisans

Tüm hakları saklıdır. © Esas Danışmanlık
