/**
 * @overview 自动将bing首页图片作为壁纸
 * 
 * @author Xmader
 * 
 * @copyright Copyright (c) 2018 Xmader
 * 
 */

const download_img = require("./download_img.js")
const set_wallpaper = require("./set_wallpaper.js")

const main = async () => {
    const img = await download_img()

    set_wallpaper(img)
}

main()
