/*
 * @Author: Gauche楽
 * @Date: 2023-05-12 21:53:45
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-12 23:57:28
 * @FilePath: /webpack/src/service/request/index.ts
 */
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

interface HYInstanceInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}

interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYInstanceInterceptors<T>;
}

class HYRequest {
  instance: AxiosInstance;
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config);
    this.instance.interceptors.request.use(
      (config: HYRequestConfig): any => {
        return { ...config };
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response;
        return data;
      },
      async (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
    // 实例的拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    );
  }

  request<T>(config: HYRequestConfig<T>) {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err: any) => {
          if (config.interceptors?.responseInterceptorCatch) {
            err = config.interceptors.responseInterceptorCatch(err);
          }
          reject(err);
        });
    });
  }
  get<T>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: "POST" });
  }
}

export default HYRequest;
