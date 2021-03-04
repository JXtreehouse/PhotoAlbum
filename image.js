/*
 * @Author: your name
 * @Date: 2021-03-04 16:12:52
 * @LastEditTime: 2021-03-04 16:16:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /PhotoAlbum/image.js
 */
let RexjsImageSprite = require('rexjs-image-sprite');
let path = require('path');

new RexjsImageSprite(
    // 图片目录（必选）
    path.join(__dirname, 'img'),
    // 输出图片地址（必选，同时也会自动生成同名 json 文件，如：sprite.json）
    path.join(__dirname, 'resource/sprite.png'),
    // 输出的 json 文件中的基本目录，即：地址前缀（可选参数）
    '/resource',
    // 图片处理插件（可选参数，默认处理 png、jpeg、jpg）
    {
        '.jpeg': require('imagemin-jpegtran')(),
    }
);
