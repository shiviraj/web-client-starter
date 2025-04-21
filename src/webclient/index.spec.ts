import {deleteAPI, get, patch, post, put} from './index'
import {api} from './interceptor'

describe('WebClient Test', () => {
  const clearAllMocks = () => {
    jest.clearAllMocks()
    jest.clearAllTimers()
  }

  beforeEach(clearAllMocks)
  afterEach(clearAllMocks)

  it('should call the get api', async () => {
    jest.useFakeTimers({now: new Date('2023-01-01')})
    jest.spyOn(api, 'get').mockResolvedValue({data: 'data'})
    jest.spyOn(console, 'log').mockImplementation()

    const response = await get({baseUrl: 'baseUrl', path: '/path'})

    expect(response).toStrictEqual('data')
    expect(api.get).toHaveBeenCalledTimes(1)
    expect(api.get).toHaveBeenCalledWith('baseUrl/path', {headers: {}})
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith(
      '{"timeStamp":"2023-01-01T00:00:00.000Z","message":"Successfully get GET API response","data":"{\\"parameter\\":\\"data\\"}","additionalData":{"baseUrl":"baseUrl","path":"/path","headers":{},"skipLoggingResponseBody":false},"label":"INFO"}'
    )
  })

  it('should call the post api', async () => {
    jest.useFakeTimers({now: new Date('2023-01-01')})
    jest.spyOn(api, 'post').mockResolvedValue({data: 'data'})
    jest.spyOn(console, 'log').mockImplementation()

    const response = await post({baseUrl: 'baseUrl', path: '/path'})

    expect(response).toStrictEqual('data')
    expect(api.post).toHaveBeenCalledTimes(1)
    expect(api.post).toHaveBeenCalledWith('baseUrl/path', undefined, {headers: {}})
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith(
      '{"timeStamp":"2023-01-01T00:00:00.000Z","message":"Successfully get POST API response","data":"{\\"parameter\\":\\"data\\"}","additionalData":{"baseUrl":"baseUrl","path":"/path","headers":{},"skipLoggingResponseBody":false},"label":"INFO"}'
    )
  })

  it('should call the put api', async () => {
    jest.useFakeTimers({now: new Date('2023-01-01')})
    jest.spyOn(api, 'put').mockResolvedValue({data: 'data'})
    jest.spyOn(console, 'log').mockImplementation()

    const response = await put({baseUrl: 'baseUrl', path: '/path/{page}', uriVariables: {page: 1}})

    expect(response).toStrictEqual('data')
    expect(api.put).toHaveBeenCalledTimes(1)
    expect(api.put).toHaveBeenCalledWith('baseUrl/path/1', undefined, {headers: {}})
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith(
      '{"timeStamp":"2023-01-01T00:00:00.000Z","message":"Successfully get PUT API response","data":"{\\"parameter\\":\\"data\\"}","additionalData":{"baseUrl":"baseUrl","path":"/path/{page}","uriVariables":{"page":1},"headers":{},"skipLoggingResponseBody":false},"label":"INFO"}'
    )
  })

  it('should call the patch api', async () => {
    jest.useFakeTimers({now: new Date('2023-01-01')})
    jest.spyOn(api, 'patch').mockResolvedValue({data: 'data'})
    jest.spyOn(console, 'log').mockImplementation()

    const response = await patch({baseUrl: 'baseUrl', path: '/path'})

    expect(response).toStrictEqual('data')
    expect(api.patch).toHaveBeenCalledTimes(1)
    expect(api.patch).toHaveBeenCalledWith('baseUrl/path', undefined, {headers: {}})
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith(
      '{"timeStamp":"2023-01-01T00:00:00.000Z","message":"Successfully get PATCH API response","data":"{\\"parameter\\":\\"data\\"}","additionalData":{"baseUrl":"baseUrl","path":"/path","headers":{},"skipLoggingResponseBody":false},"label":"INFO"}'
    )
  })

  it('should call the delete api', async () => {
    jest.useFakeTimers({now: new Date('2023-01-01')})
    jest.spyOn(api, 'delete').mockResolvedValue({data: 'data'})
    jest.spyOn(console, 'log').mockImplementation()

    const response = await deleteAPI({baseUrl: 'baseUrl', path: '/path'})

    expect(response).toStrictEqual('data')
    expect(api.delete).toHaveBeenCalledTimes(1)
    expect(api.delete).toHaveBeenCalledWith('baseUrl/path', {headers: {}})
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith(
      '{"timeStamp":"2023-01-01T00:00:00.000Z","message":"Successfully get DELETE API response","data":"{\\"parameter\\":\\"data\\"}","additionalData":{"baseUrl":"baseUrl","path":"/path","headers":{},"skipLoggingResponseBody":false},"label":"INFO"}'
    )
  })

  it('should call the get api with queryString', async () => {
    jest.useFakeTimers({now: new Date('2023-01-01')})
    jest.spyOn(api, 'get').mockResolvedValue({data: 'data'})
    jest.spyOn(console, 'log').mockImplementation()

    const response = await get({
      baseUrl: 'baseUrl',
      path: '/path',
      queryParams: {page: '1'},
      headers: {'Content-Type': 'plain/text'},
      skipLoggingResponseBody: true
    })

    expect(response).toStrictEqual('data')
    expect(api.get).toHaveBeenCalledTimes(1)
    expect(api.get).toHaveBeenCalledWith('baseUrl/path?page=1', {headers: {'Content-Type': 'plain/text'}})
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith(
      '{"timeStamp":"2023-01-01T00:00:00.000Z","message":"Successfully get GET API response","data":"{}","additionalData":{"baseUrl":"baseUrl","path":"/path","queryParams":{"page":1},"headers":{"Content-Type":"plain/text"},"skipLoggingResponseBody":true},"label":"INFO"}'
    )
  })

  it('should call the post api with data', async () => {
    jest.useFakeTimers({now: new Date('2023-01-01')})
    jest.spyOn(api, 'post').mockResolvedValue({data: 'data'})
    jest.spyOn(console, 'log').mockImplementation()

    const response = await post({
      baseUrl: 'baseUrl',
      path: '/path',
      body: {data: 'body'},
      queryParams: {page: '1'},
      headers: {'Content-Type': 'plain/text'},
      skipLoggingResponseBody: true,
      skipLoggingRequestBody: true
    })

    expect(response).toStrictEqual('data')
    expect(api.post).toHaveBeenCalledTimes(1)
    expect(api.post).toHaveBeenCalledWith(
      'baseUrl/path?page=1',
      {data: 'body'},
      {
        headers: {'Content-Type': 'plain/text'}
      }
    )
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith(
      '{"timeStamp":"2023-01-01T00:00:00.000Z","message":"Successfully get POST API response","data":"{}","additionalData":{"baseUrl":"baseUrl","path":"/path","queryParams":{"page":1},"headers":{"Content-Type":"plain/text"},"skipLoggingResponseBody":true},"label":"INFO"}'
    )
  })

  it('should call the patch api with data', async () => {
    jest.useFakeTimers({now: new Date('2023-01-01')})
    jest.spyOn(api, 'patch').mockResolvedValue({data: 'data'})
    jest.spyOn(console, 'log').mockImplementation()

    const response = await patch({
      baseUrl: 'baseUrl',
      path: '/path',
      body: {data: 'body'},
      queryParams: {page: '1'},
      headers: {'Content-Type': 'plain/text'},
      skipLoggingResponseBody: true,
      skipLoggingRequestBody: true
    })

    expect(response).toStrictEqual('data')
    expect(api.patch).toHaveBeenCalledTimes(1)
    expect(api.patch).toHaveBeenCalledWith(
      'baseUrl/path?page=1',
      {data: 'body'},
      {
        headers: {'Content-Type': 'plain/text'}
      }
    )
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith(
      '{"timeStamp":"2023-01-01T00:00:00.000Z","message":"Successfully get PATCH API response","data":"{}","additionalData":{"baseUrl":"baseUrl","path":"/path","queryParams":{"page":1},"headers":{"Content-Type":"plain/text"},"skipLoggingResponseBody":true},"label":"INFO"}'
    )
  })

  it('should call the put api with data', async () => {
    jest.useFakeTimers({now: new Date('2023-01-01')})
    jest.spyOn(api, 'put').mockResolvedValue({data: 'data'})
    jest.spyOn(console, 'log').mockImplementation()

    const response = await put({
      baseUrl: 'baseUrl',
      path: '/path',
      body: {data: 'body'},
      queryParams: {page: '1'},
      headers: {'Content-Type': 'plain/text'},
      skipLoggingResponseBody: true,
      skipLoggingRequestBody: true
    })

    expect(response).toStrictEqual('data')
    expect(api.put).toHaveBeenCalledTimes(1)
    expect(api.put).toHaveBeenCalledWith(
      'baseUrl/path?page=1',
      {data: 'body'},
      {
        headers: {'Content-Type': 'plain/text'}
      }
    )
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith(
      '{"timeStamp":"2023-01-01T00:00:00.000Z","message":"Successfully get PUT API response","data":"{}","additionalData":{"baseUrl":"baseUrl","path":"/path","queryParams":{"page":1},"headers":{"Content-Type":"plain/text"},"skipLoggingResponseBody":true},"label":"INFO"}'
    )
  })

  it('should call the delete api with data', async () => {
    jest.useFakeTimers({now: new Date('2023-01-01')})
    jest.spyOn(api, 'delete').mockResolvedValue({data: 'data'})
    jest.spyOn(console, 'log').mockImplementation()

    const response = await deleteAPI({
      baseUrl: 'baseUrl',
      path: '/path',
      queryParams: {page: '1'},
      headers: {'Content-Type': 'plain/text'},
      skipLoggingResponseBody: true
    })

    expect(response).toStrictEqual('data')
    expect(api.delete).toHaveBeenCalledTimes(1)
    expect(api.delete).toHaveBeenCalledWith('baseUrl/path?page=1', {
      headers: {'Content-Type': 'plain/text'}
    })
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith(
      '{"timeStamp":"2023-01-01T00:00:00.000Z","message":"Successfully get DELETE API response","data":"{}","additionalData":{"baseUrl":"baseUrl","path":"/path","queryParams":{"page":1},"headers":{"Content-Type":"plain/text"},"skipLoggingResponseBody":true},"label":"INFO"}'
    )
  })
})
