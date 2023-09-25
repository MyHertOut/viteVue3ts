import type {
  AxiosProgressEvent,
  AxiosResponse,
  GenericAbortSignal
} from 'axios'
import { ElMessage } from 'element-plus'
import request from './axios'

export interface HttpOption {
  url: string
  data?: any
  method?: string
  headers?: any
  onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void
  signal?: GenericAbortSignal
  beforeRequest?: () => void
  afterRequest?: () => void
}

export interface Response<T = any> {
  data: T
  message: string | null
  code: number
}

function http<T = any>({
  url,
  data,
  method,
  headers,
  onDownloadProgress,
  signal,
  beforeRequest,
  afterRequest
}: HttpOption) {
  const successHandler = (res: AxiosResponse<Response<T>>) => {
    const code = res.data.code
    // 0：成功code
    if (code === 0 ) return res.data

    if (code === 401) {
      ElMessage({
        message: '登录已过期，请重新登录',
        type: 'warning'
      })
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    }
    ElMessage({
      message: '出了一点小问题：',
      type: 'warning'
    })

    return Promise.reject(res.data)
  }

  const failHandler = (error: Response<Error>) => {
    afterRequest?.()
    throw new Error(error?.message || 'Error')
  }

  beforeRequest?.()

  method = method || 'GET'

  const params = Object.assign(
    typeof data === 'function' ? data() : data ?? {},
    {}
  )

  return method === 'GET'
    ? request
        .get(url, { headers, params, signal, onDownloadProgress })
        .then(successHandler, failHandler)
    : request
        .post(url, params, { headers, signal, onDownloadProgress })
        .then(successHandler, failHandler)
}

export function get<T = any>({
  url,
  data,
  method = 'GET',
  onDownloadProgress,
  signal,
  beforeRequest,
  afterRequest
}: HttpOption): Promise<Response<T>> {
  return http<T>({
    url,
    method,
    data,
    onDownloadProgress,
    signal,
    beforeRequest,
    afterRequest
  })
}

export function post<T = any>({
  url,
  data,
  method = 'POST',
  headers,
  onDownloadProgress,
  signal,
  beforeRequest,
  afterRequest
}: HttpOption): Promise<Response<T>> {
  return http<T>({
    url,
    method,
    data,
    headers,
    onDownloadProgress,
    signal,
    beforeRequest,
    afterRequest
  })
}

export default post
