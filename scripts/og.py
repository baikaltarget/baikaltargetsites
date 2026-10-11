#!/usr/bin/env python3
"""OG-картинки для статей блога: 1200×630, тёмный фон, рубрика, заголовок, бренд.
Запуск: python3 scripts/og.py  (пройдёт по всем content/blog/*.md, кроме черновиков)."""
import os, re, glob, textwrap
from PIL import Image, ImageDraw, ImageFont
F='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'; FR='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
def fm(path):
    s=open(path,encoding='utf-8').read(); m=re.match(r'---\n(.*?)\n---',s,re.S); d={}
    for line in (m.group(1) if m else '').split('\n'):
        mm=re.match(r'(\w+):\s*"?(.*?)"?\s*$',line)
        if mm: d[mm.group(1)]=mm.group(2)
    return d, s
for f in sorted(glob.glob('content/blog/*.md')):
    d,s=fm(f)
    if d.get('draft')=='true' or 'Статья готовится' in s: continue
    slug=os.path.basename(f)[:-3]
    im=Image.new('RGB',(1200,630),(22,36,58)); dr=ImageDraw.Draw(im)
    # мягкие пятна как на сайте
    for (x,y,r,c) in [(120,60,420,(32,119,255)),(1100,620,360,(248,105,60))]:
        ov=Image.new('RGB',im.size,(22,36,58)); od=ImageDraw.Draw(ov); od.ellipse((x-r,y-r,x+r,y+r),fill=c)
        im=Image.blend(im,ov,0.18); dr=ImageDraw.Draw(im)
    dr.text((80,70),(d.get('category','') or 'БЛОГ').upper(),font=ImageFont.truetype(F,22),fill=(248,105,60))
    title=d.get('title','')
    size=60
    while size>34:
        font=ImageFont.truetype(F,size); lines=textwrap.wrap(title,width=int(1040/(size*0.55)))
        if len(lines)<=4: break
        size-=4
    y=130
    for ln in lines: dr.text((80,y),ln,font=font,fill=(255,255,255)); y+=size+14
    dr.text((80,560),'Байкал Таргет · сайты  ·  sites.baikal-target.ru',font=ImageFont.truetype(FR,22),fill=(169,187,224))
    out=f'public/img/blog/og/{slug}.png'; im.save(out,optimize=True); print(out)
