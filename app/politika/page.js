import site from '@/content/site.json';
import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Политика обработки персональных данных | ' + site.brand,
  description: 'Как студия Байкал Таргет обрабатывает персональные данные и cookie на сайте sites.baikal-target.ru.',
  alternates: { canonical: '/politika/' },
};

export default function Page() { return <LegalPage name="politika" />; }
