import type {AxiosInstance, AxiosInterceptorOptions, AxiosResponse, InternalAxiosRequestConfig} from 'axios'
import axios from 'axios'

const api: AxiosInstance = axios.create()

const interceptor = {
  request(
    onFulfilled?: (
      value: InternalAxiosRequestConfig
    ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>,
    onRejected?: (error: any) => any,
    options?: AxiosInterceptorOptions
  ): void {
    api.interceptors.request.use(onFulfilled, onRejected, options)
  },
  response(
    onFulfilled?: (value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>,
    onRejected?: (error: any) => any,
    options?: AxiosInterceptorOptions
  ): void {
    api.interceptors.response.use(onFulfilled, onRejected, options)
  }
}

export default interceptor
export {api}
