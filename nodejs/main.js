/**
 * @overview 自动将bing首页图片作为壁纸
 * 
 * @author Xmader
 * 
 * @copyright Copyright (c) 2018 Xmader
 * 
 */

const regedit = require('node-reg');

const download_img = require("./download_img.js")
const set_wallpaper = require("./set_wallpaper.js")

const main = async () => {
    const img = await download_img()

    await regedit.addKey({ // 值: 2拉伸,0居中,6适应,10填充,0平铺
        target: 'HKCU\\Control Panel\\Desktop',
        name: 'WallpaperStyle',
        value: '10',
        type: 'REG_SZ'
    })

    await regedit.addKey({ // 值: 1表示平铺,拉伸居中等都是0
        target: 'HKCU\\Control Panel\\Desktop',
        name: 'TileWallpaper',
        value: '0',
        type: 'REG_SZ'
    })
    
    set_wallpaper(img)
}

main()
