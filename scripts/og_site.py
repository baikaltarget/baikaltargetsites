#!/usr/bin/env python3
"""OG-картинки (превью в Telegram/VK/WhatsApp) 1200×630 JPG:
public/og/main.jpg — для всего сайта, public/og/case-<slug>.jpg — для кейсов (берёт ноутбук из public/img/cases/laptop).
Запуск: python3 scripts/og_site.py"""
import json, os, textwrap
from PIL import Image, ImageDraw, ImageFont, ImageFilter

FD = '/usr/share/fonts/opentype/inter/InterDisplay-Bold.otf'
FM = '/usr/share/fonts/opentype/inter/Inter-Medium.otf'
NAVY = (22, 36, 58); ORANGE = (248, 105, 60); MUTED = (176, 190, 212)
os.makedirs('public/og', exist_ok=True)

def base():
    im = Image.new('RGB', (1200, 630), NAVY)
    for (x, y, r, c, a) in [(80, 40, 460, (32, 119, 255), 0.22), (1150, 640, 420, ORANGE, 0.16)]:
        ov = Image.new('RGB', im.size, NAVY); ImageDraw.Draw(ov).ellipse((x - r, y - r, x + r, y + r), fill=c); ov = ov.filter(ImageFilter.GaussianBlur(120))
        im = Image.blend(im, ov, a)
    return im

def laptop(im, path, w=640, x=585, y=150):
    lp = Image.open(path).convert('RGBA'); h = round(lp.height * w / lp.width)
    im.paste(lp.resize((w, h), Image.LANCZOS), (x, y), lp.resize((w, h), Image.LANCZOS))

def text_block(im, tag, title, sub, title_size=60, width=15):
    d = ImageDraw.Draw(im)
    d.text((64, 64), tag.upper(), font=ImageFont.truetype(FM, 22), fill=ORANGE)
    size = title_size
    while True:
        lines = textwrap.wrap(title, width=width) if '\n' not in title else title.split('\n')
        if len(lines) <= 4 or size <= 40: break
        size -= 6; width += 2
    f = ImageFont.truetype(FD, size); y = 112
    for ln in lines: d.text((64, y), ln, font=f, fill=(255, 255, 255)); y += size + 10
    d.rectangle((64, y + 18, 124, y + 22), fill=ORANGE)
    fs = ImageFont.truetype(FM, 25); y += 44
    for ln in textwrap.wrap(sub, width=34)[:3]: d.text((64, y), ln, font=fs, fill=MUTED); y += 36
    d.text((64, 560), 'Байкал Таргет · sites.baikal-target.ru', font=ImageFont.truetype(FM, 22), fill=(255, 255, 255))

site = json.load(open('content/site.json'))
im = base(); laptop(im, 'public/img/cases/laptop/btctour.webp')
text_block(im, 'Веб-студия · Иркутск', 'Сайты, которые\nприводят клиентов\nиз поиска', 'От 35 000 ₽, запуск от 5 дней. SEO с первого дня.')
im.save('public/og/main.jpg', quality=88); print('ok main')

for c in site['cases']:
    lp = 'public/img/cases/laptop/' + c['slug'] + '.webp'
    if c.get('hidden') or not os.path.exists(lp): continue
    im = base(); laptop(im, lp)
    text_block(im, c['niche'] + (' · ' + c['city'] if c.get('city') else ''), c['name'], c['result'], 54, 16)
    im.save('public/og/case-' + c['slug'] + '.jpg', quality=86); print('ok', c['slug'])
