import {api} from './interceptor'
import 'logging-starter'
import type {GetRequest, PostRequest} from '../types/webclient'

const createUrl = (
  baseUrl: string,
  path: string,
  queryParams: string | Record<string, string> | string[][] | URLSearchParams = {},
  uriVariables: Record<string, number | string> = {}
): string => {
  const url = baseUrl.concat(path)
  const urlWithPathParams = Object.keys(uriVariables).reduce((url: string, keyName: string) => {
    return url.replace(`{${keyName}}`, uriVariables[keyName] as string)
  }, url)
  const params = new URLSearchParams(queryParams)
  const queryParamsInString = params.toString()

  return urlWithPathParams + (queryParamsInString ? `?${queryParamsInString}` : '')
}

const parseHeaders = (headers: Record<string, string> = {}) => {
  const keyToRemove = 'Content-Length'
  if (keyToRemove in headers) {
    delete headers[keyToRemove]
  }
  return headers
}

const get = <ReturnType>({
  baseUrl,
  path,
  queryParams,
  uriVariables,
  headers = {},
  skipLoggingResponseBody = false
}: GetRequest): Promise<ReturnType> => {
  const url = createUrl(baseUrl, path, queryParams, uriVariables)
  return api
    .get(url, {headers: parseHeaders(headers)})
    .then((response) => response.data as ReturnType)
    .logOnSuccess(
      {
        message: 'Successfully get GET API response',
        additionalData: {baseUrl, path, queryParams, uriVariables, headers, skipLoggingResponseBody}
      },
      true,
      !skipLoggingResponseBody
    )
    .logOnError({
      errorCode: 'API_FAILURE',
      errorMessage: 'Failed to get GET API response',
      additionalData: {baseUrl, path, queryParams, uriVariables, headers, skipLoggingResponseBody}
    })
}

const post = <ReturnType>({
  baseUrl,
  path,
  body,
  queryParams,
  uriVariables,
  headers = {},
  skipLoggingRequestBody = false,
  skipLoggingResponseBody = false
}: PostRequest): Promise<ReturnType> => {
  const url = createUrl(baseUrl, path, queryParams, uriVariables)
  return api
    .post(url, body, {headers: parseHeaders(headers)})
    .then((response) => response.data as ReturnType)
    .logOnSuccess(
      {
        message: 'Successfully get POST API response',
        data: {...(!skipLoggingRequestBody ? {requestBody: body} : {})},
        additionalData: {baseUrl, path, queryParams, uriVariables, headers, skipLoggingResponseBody}
      },
      true,
      !skipLoggingResponseBody
    )
    .logOnError({
      errorCode: 'API_FAILURE',
      errorMessage: 'Failed to get POST API response',
      data: {...(!skipLoggingRequestBody ? {requestBody: body} : {})},
      additionalData: {baseUrl, path, queryParams, uriVariables, headers, skipLoggingResponseBody}
    })
}

const put = <ReturnType>({
  baseUrl,
  path,
  body,
  queryParams,
  uriVariables,
  headers = {},
  skipLoggingRequestBody = false,
  skipLoggingResponseBody = false
}: PostRequest): Promise<ReturnType> => {
  const url = createUrl(baseUrl, path, queryParams, uriVariables)
  return api
    .put(url, body, {headers: parseHeaders(headers)})
    .then((response) => response.data as ReturnType)
    .logOnSuccess(
      {
        message: 'Successfully get PUT API response',
        data: {...(!skipLoggingRequestBody ? {requestBody: body} : {})},
        additionalData: {baseUrl, path, queryParams, uriVariables, headers, skipLoggingResponseBody}
      },
      true,
      !skipLoggingResponseBody
    )
    .logOnError({
      errorCode: 'API_FAILURE',
      errorMessage: 'Failed to get PUT API response',
      data: {...(!skipLoggingRequestBody ? {requestBody: body} : {})},
      additionalData: {baseUrl, path, queryParams, uriVariables, headers, skipLoggingResponseBody}
    })
}

const patch = <ReturnType>({
  baseUrl,
  path,
  body,
  queryParams,
  uriVariables,
  headers = {},
  skipLoggingRequestBody = false,
  skipLoggingResponseBody = false
}: PostRequest): Promise<ReturnType> => {
  const url = createUrl(baseUrl, path, queryParams, uriVariables)
  return api
    .patch(url, body, {headers: parseHeaders(headers)})
    .then((response) => response.data as ReturnType)
    .logOnSuccess(
      {
        message: 'Successfully get PATCH API response',
        data: {...(!skipLoggingRequestBody ? {requestBody: body} : {})},
        additionalData: {baseUrl, path, queryParams, uriVariables, headers, skipLoggingResponseBody}
      },
      true,
      !skipLoggingResponseBody
    )
    .logOnError({
      errorCode: 'API_FAILURE',
      errorMessage: 'Failed to get PATCH API response',
      data: {...(!skipLoggingRequestBody ? {requestBody: body} : {})},
      additionalData: {baseUrl, path, queryParams, uriVariables, headers, skipLoggingResponseBody}
    })
}

const deleteAPI = <ReturnType>({
  baseUrl,
  path,
  queryParams,
  uriVariables,
  headers = {},
  skipLoggingResponseBody = false
}: GetRequest): Promise<ReturnType> => {
  const url = createUrl(baseUrl, path, queryParams, uriVariables)
  return api
    .delete(url, {headers: parseHeaders(headers)})
    .then((response) => response.data as ReturnType)
    .logOnSuccess(
      {
        message: 'Successfully get DELETE API response',
        additionalData: {baseUrl, path, queryParams, uriVariables, headers, skipLoggingResponseBody}
      },
      true,
      !skipLoggingResponseBody
    )
    .logOnError({
      errorCode: 'API_FAILURE',
      errorMessage: 'Failed to get DELETE API response',
      additionalData: {baseUrl, path, queryParams, uriVariables, headers, skipLoggingResponseBody}
    })
}

export {get, post, patch, put, deleteAPI}
