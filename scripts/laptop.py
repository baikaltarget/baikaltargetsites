#!/usr/bin/env python3
"""Вставляет скрин сайта в мокап ноутбука (public/img/hero-laptop.webp) с перспективой.
Использование: python3 scripts/laptop.py <скрин> <выход.webp>
Скрин кадрируется по верху до 16:10 и натягивается на экран мокапа."""
import sys, numpy as np
from PIL import Image

MOCK = 'public/img/hero-laptop.webp'
# углы экрана на мокапе 1498×1050: TL, TR, BR, BL (найдены по краю чёрной рамки)
QUAD = [(500, 31), (1449, 109), (1389, 743), (438, 638)]

def coeffs(src, dst):
    A = []
    for (x, y), (u, v) in zip(src, dst):
        A.append([x, y, 1, 0, 0, 0, -u*x, -u*y]); A.append([0, 0, 0, x, y, 1, -v*x, -v*y])
    B = np.array([c for p in dst for c in p], dtype=float)
    return np.linalg.solve(np.array(A, dtype=float), B)

def main(src, out):
    mock = Image.open(MOCK).convert('RGBA')
    shot = Image.open(src).convert('RGB')
    w = shot.width; h = round(w * 10 / 16)
    if shot.height >= h:          # высокий скрин — берём верх 16:10
        shot = shot.crop((0, 0, w, h))
    else:                         # широкий скрин: половину лишнего срезаем с боков, остаток сжимаем (5–8%, незаметно)
        r = (w / shot.height + 1.6) / 2
        nw = round(shot.height * r); x0 = (w - nw) // 2
        shot = shot.crop((x0, 0, x0 + nw, shot.height))
    shot = shot.resize((1600, 1000), Image.LANCZOS)
    # коэффициенты: из координат мокапа → в координаты скрина
    c = coeffs(QUAD, [(0, 0), (1600, 0), (1600, 1000), (0, 1000)])
    warped = shot.transform(mock.size, Image.PERSPECTIVE, tuple(c), Image.BICUBIC)
    mask = Image.new('L', (1600, 1000), 255).transform(mock.size, Image.PERSPECTIVE, tuple(c), Image.BICUBIC)
    mock.paste(warped, (0, 0), mask)
    mock.save(out, 'WEBP', quality=86, method=6)
    print('ok', out)

if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
