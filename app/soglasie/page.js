import site from '@/content/site.json';
import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Согласие на обработку персональных данных | ' + site.brand,
  description: 'Текст согласия на обработку персональных данных при отправке заявки на сайте sites.baikal-target.ru.',
  alternates: { canonical: '/soglasie/' },
};

export default function Page() { return <LegalPage name="soglasie" />; }
