import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Interactions from '@/components/Interactions';
import site from '@/content/site.json';

export const metadata = {
  metadataBase: new URL(site.domain),
  title: 'Создание сайтов под ключ в Иркутске и по России от 35 000 ₽ | ' + site.brand,
  description: 'Создание многостраничных сайтов под ключ, которые приводят клиентов из поиска. SEO с первого дня, запуск от 5 дней. Иркутск и вся Россия. От 35 000 ₽.',
  alternates: { canonical: '/' },
  // ВРЕМЕННО: сайт закрыт от индексации на время доработки.
  // Снять перед публикацией: поставить "noindex": false в content/site.json
  robots: site.noindex ? { index: false, follow: false, nocache: true,
    googleBot: { index: false, follow: false } } : undefined,
  openGraph: {
    type: 'website', locale: 'ru_RU', siteName: site.brand,
    title: 'Создание сайтов под ключ, которые приводят клиентов из поиска | ' + site.brand,
    description: 'Сайты, которые приносят заявки, а не просто красиво выглядят.',
    url: site.domain,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
        <Interactions />
      </body>
    </html>
  );
}
