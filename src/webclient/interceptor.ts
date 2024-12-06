import type {AxiosInstance, AxiosInterceptorOptions, AxiosResponse, InternalAxiosRequestConfig} from 'axios'
import axios from 'axios'
import logging from 'logging-starter'

const api: AxiosInstance = axios.create()

api.interceptors.request.use((config) => {
  logging.info({message: 'Successfully sent api request', data: {method: config.method, url: config.url}})
  return config
})

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
