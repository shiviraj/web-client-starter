export type GetRequest = {
  baseUrl: string
  path: string
  queryParams?: Record<string, string>
  uriVariables?: Record<string, number | string>
  headers?: Record<string, string>
  skipLoggingResponseBody?: boolean
}

export type PostRequest = GetRequest & {body?: any; skipLoggingRequestBody?: boolean}
