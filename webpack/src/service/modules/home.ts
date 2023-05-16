/*
 * @Author: Gauche楽
 * @Date: 2023-05-12 22:11:39
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-12 22:13:23
 * @FilePath: /webpack/src/service/modules/home.ts
 */
import hyrequest from "..";

hyrequest
  .request({
    url: "/home/multidata",
  })
  .then((res) => {
    console.log(res.data);
  });
