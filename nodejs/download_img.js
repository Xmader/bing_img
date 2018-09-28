/**
 * @overview 下载bing首页图片
 * 
 * @author Xmader

 * @copyright Copyright (c) 2018 Xmader
 * 
 */

const fs = require("fs")
const path = require("path")
const fetch = require("node-fetch")

const api_url = "http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1"

const get_img_url = async () => {
    /** @type {Response} */
    const r = await fetch(api_url)

    /** @type {{images: {url: string; [x:string]: any;}[]; [x:string]: any;}} */
    const data = await r.json()

    return "http://cn.bing.com" + data.images[0].url
}

const download_img = async () => {
    const img_url = await get_img_url()

    let file_name = img_url.split("/").pop()
    file_name = path.join(__dirname, file_name)

    /** @type {Response} */
    const r = await fetch(img_url)

    const buffer = Buffer.from(await r.arrayBuffer())

    fs.writeFileSync(file_name, buffer)

    return file_name
}

module.exports = download_img
