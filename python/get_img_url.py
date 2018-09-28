# -*- coding: utf-8 -*-
# 获取bing首页图片的地址
import requests


def get_all():
    r = requests.get(
        'http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1')
    img_all = r.json()
    return img_all


def get_url():
    img_all = get_all()
    output = "http://cn.bing.com" + img_all['images'][0]['url']
    return output
