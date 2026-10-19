import Script from 'next/script';
import site from '@/content/site.json';
import MetrikaHits from '@/components/MetrikaHits';

// Яндекс Метрика. Номер счётчика — в content/site.json → "metrikaId". Пусто = не подключаем.
// id скрипта НЕ «ym»: элемент с id="ym" становится window.ym, и код Метрики не создаёт функцию (ошибка «ym is not a function»).
// Код — как выдаёт Метрика (tag.js?id=, ssr: true). Переходы по меню без перезагрузки считает MetrikaHits.
export default function Metrika() {
  const id = Number(site.metrikaId);
  if (!id) return null;
  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html:
        `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();
        for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window,document,"script","https://mc.yandex.ru/metrika/tag.js?id=${id}","ym");
        ym(${id},"init",{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});` }} />
      <noscript><div><img src={'https://mc.yandex.ru/watch/' + id} style={{ position: 'absolute', left: -9999 }} alt="" /></div></noscript>
      <MetrikaHits id={id} />
    </>
  );
}
