#!/usr/bin/env python3
"""
生成 DevTools Pro Chrome 扩展图标
运行: python3 generate_icons.py
需要安装: pip3 install pillow
"""

try:
    from PIL import Image, ImageDraw
except ImportError:
    print("请先安装 Pillow: pip3 install pillow")
    exit(1)

import os

def create_icon(size):
    """创建指定尺寸的图标"""
    # 创建图像
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # 圆角矩形背景 (使用渐变近似色)
    radius = int(size * 0.22)
    
    # 简化处理：使用单色背景 (渐变需要更复杂的实现)
    # 主色 #6366F1 (99, 102, 241)
    bg_color = (99, 102, 241, 255)
    
    # 绘制圆角矩形
    draw.rounded_rectangle(
        [0, 0, size-1, size-1],
        radius=radius,
        fill=bg_color
    )
    
    # 绘制终端图标
    scale = size / 128
    line_width = max(1, int(size * 0.06))
    white = (255, 255, 255, 255)
    
    # 箭头 > 
    points_arrow = [
        (int(32 * scale), int(48 * scale)),
        (int(48 * scale), int(64 * scale)),
        (int(32 * scale), int(80 * scale))
    ]
    draw.line(points_arrow, fill=white, width=line_width)
    
    # 横线 _
    draw.line(
        [(int(56 * scale), int(80 * scale)), (int(96 * scale), int(80 * scale))],
        fill=white,
        width=line_width
    )
    
    return img

def main():
    # 确保 icons 目录存在
    icons_dir = os.path.join(os.path.dirname(__file__), 'icons')
    os.makedirs(icons_dir, exist_ok=True)
    
    # 生成不同尺寸的图标
    sizes = [16, 48, 128]
    
    for size in sizes:
        img = create_icon(size)
        filepath = os.path.join(icons_dir, f'icon{size}.png')
        img.save(filepath, 'PNG')
        print(f'[OK] Generated: {filepath}')
    
    print('\nIcons generated! You can now load the extension in Chrome.')

if __name__ == '__main__':
    main()
