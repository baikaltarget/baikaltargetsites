import Script from 'next/script';
import site from '@/content/site.json';

// Яндекс Метрика. Номер счётчика — в content/site.json → "metrikaId". Пусто = не подключаем.
export default function Metrika() {
  const id = site.metrikaId;
  if (!id) return null;
  return (
    <>
      <Script id="ym" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html:
        `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();
        for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
        ym(${Number(id)},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});` }} />
      <noscript><div><img src={'https://mc.yandex.ru/watch/' + id} style={{ position: 'absolute', left: -9999 }} alt="" /></div></noscript>
    </>
  );
}
