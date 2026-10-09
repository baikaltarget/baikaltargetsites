#!/usr/bin/env python3
"""Вставляет скрин сайта в мокап ноутбука (public/img/hero-laptop.webp) с перспективой.
Использование: python3 scripts/laptop.py <скрин> <выход.webp>
Скрин кадрируется по верху до 16:10 и натягивается на экран мокапа."""
import sys, numpy as np
from PIL import Image

MOCK = 'public/img/hero-laptop.webp'
# углы экрана на мокапе 1498×1050: TL, TR, BR, BL (подобраны по сетке)
QUAD = [(482, 42), (1465, 102), (1398, 745), (435, 652)]

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
    shot = shot.crop((0, 0, w, min(h, shot.height)))
    if shot.height < h:  # низкий скрин — дотягиваем тёмным фоном
        pad = Image.new('RGB', (w, h), (11, 20, 36)); pad.paste(shot, (0, 0)); shot = pad
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
