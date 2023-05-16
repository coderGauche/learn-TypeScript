/*
 * @Author: Gauche楽
 * @Date: 2023-05-12 21:52:35
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-12 23:45:45
 * @FilePath: /webpack/src/service/index.ts
 */

import { BASE_URL1, TIME_OUT1 } from "./config";
import HYRequest from "./request";

const hyrequest = new HYRequest({
  baseURL: BASE_URL1,
  timeout: TIME_OUT1,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("实例请求成功拦截");
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log("实例请求失败拦截");
    },
    responseInterceptor: (res) => {
      console.log("实例响应成功拦截", res);
      return res;
    },
    responseInterceptorCatch: (err) => {
      console.log("实例响应失败拦截");
      return err;
    },
  },
});

export default hyrequest;
