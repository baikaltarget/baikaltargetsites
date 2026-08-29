import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Interactions from '@/components/Interactions';
import site from '@/content/site.json';

export const metadata = {
  metadataBase: new URL(site.domain),
  title: 'Разработка SEO-сайтов под заявки | ' + site.brand,
  description: 'Быстрые многостраничные сайты на Next.js под локальный SEO: гео-страницы, SEO из коробки, формы в Telegram, готовность к рекламе и ИИ. От 25 000 ₽. Иркутск.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'ru_RU', siteName: site.brand,
    title: 'Разработка SEO-сайтов под заявки | ' + site.brand,
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
