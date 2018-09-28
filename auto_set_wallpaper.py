# -*- coding: utf-8 -*-
# 将bing首页图片作为壁纸
# 将脚本快捷方式放在 C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup 中，可每次开机自动将bing首页图片作为壁纸

import os
import requests
import win32con
import win32api
import win32gui
import bing_img_main


def set_wallpaper(bmp_path):
    # 打开指定注册表路径
    reg_key = win32api.RegOpenKeyEx(
        win32con.HKEY_CURRENT_USER, "Control Panel\\Desktop", 0, win32con.KEY_SET_VALUE)
    # 最后的参数:2拉伸,0居中,6适应,10填充,0平铺
    win32api.RegSetValueEx(reg_key, "WallpaperStyle", 0, win32con.REG_SZ, "10")
    # 最后的参数:1表示平铺,拉伸居中等都是0
    win32api.RegSetValueEx(reg_key, "TileWallpaper", 0, win32con.REG_SZ, "0")
    # 刷新桌面
    win32gui.SystemParametersInfo(
        win32con.SPI_SETDESKWALLPAPER, bmp_path, win32con.SPIF_SENDWININICHANGE)


def auto_set_wallpaper():
    img_url = bing_img_main.get_url()
    file_name = img_url.split("/")[-1]

    r = requests.get(img_url)

    with open(file_name, 'wb') as imgfile:
        imgfile.write(r.content)

    set_wallpaper(os.getcwd() + "\\" + file_name)


if __name__ == '__main__':
    auto_set_wallpaper()
