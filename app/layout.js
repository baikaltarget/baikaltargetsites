import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Interactions from '@/components/Interactions';
import Metrika from '@/components/Metrika';
import site from '@/content/site.json';

export const metadata = {
  metadataBase: new URL(site.domain),
  title: 'Создание сайтов в Иркутске под ключ от 35 000 ₽ | ' + site.brand,
  description: 'Разработка многостраничных сайтов под ключ в Иркутске: SEO с первого дня, запуск от 5 рабочих дней, заявки в Telegram. От 35 000 ₽. Студия Байкал Таргет, с 2019 года.',
  alternates: { canonical: '/' },
  // ВРЕМЕННО: сайт закрыт от индексации на время доработки.
  // Снять перед публикацией: поставить "noindex": false в content/site.json
  robots: site.noindex ? { index: false, follow: false, nocache: true,
    googleBot: { index: false, follow: false } } : undefined,
  openGraph: {
    type: 'website', locale: 'ru_RU', siteName: site.brand,
    title: 'Создание сайтов в Иркутске, которые приводят клиентов из поиска | ' + site.brand,
    description: 'Многостраничные сайты под ключ с SEO с первого дня. От 35 000 ₽, от 5 дней.',
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
        <Metrika />
      </body>
    </html>
  );
}
