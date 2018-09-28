/**
 * @overview 设置壁纸
 * 
 * @author Xmader

 * @copyright Copyright (c) 2018 Xmader
 * 
 */


const FFI = require("ffi")

const user32_dll = new FFI.Library("user32", {
    "SystemParametersInfoA": [
        "bool", ["uint", "uint", "string", "uint"]
    ]
})

/**
 * @param {string} img_path - 要设置为壁纸的图片路径
 * @returns {boolean} [参见API文档](https://docs.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-systemparametersinfoa#spi_getdeskwallpaper)
 */

const set_wallpaper = (img_path) => {
    return user32_dll.SystemParametersInfoA(
        20, 0, img_path, 2
    )
}

module.exports = set_wallpaper
