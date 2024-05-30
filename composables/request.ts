export const handleError = (response) => {
  const modalPinia = useModalPinia()
  console.log('错误', response)
  // throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
  const err = (text?: string, name?: string, code?: number) => {
    const message = text || response.message || response.msg
    if (name) {
      // 存提示信息
      modalPinia.setModelOption({ message, code })
      return modalPinia.setModalName(name)
    }
    ElMessage({ showClose: true, message, type: 'error', grouping: true })
  }
  const handleMap: { [key: number]: () => void } = {
    0: () => err('', 'Fail'),
    401: () => err('', 'Fail', 401)
  }
  handleMap[response.code] ? handleMap[response.code]() : err('Error')
}

// get方法传递数组形式参数
const paramsSerializer = (params: any) => {
  if (!params) return
  const query = cloneDeep(params)
  Object.entries(query).forEach(([key, val]) => {
    if (typeof val === 'object' && Array.isArray(val) && val !== null) {
      query[`${key}[]`] = toRaw(val).map((v: any) => JSON.stringify(v))
      delete query[key]
    }
  })
  return query
}

const fetchOption = (url: string, option?: any) => {
  const runtimeConfig = useRuntimeConfig()
  const userPinia = useUserPinia()
  return {
    // 合并参数
    ...option,
    // 请求拦截器
    onRequest({ options }) {
      if (url.indexOf('http') !== 0) options.baseURL = option.baseURL || runtimeConfig.public.api.baseUrl
      // get方法传递数组形式参数
      options.params = paramsSerializer(options.params)
      // TODO 登陆凭证
      // 添加请求头,没登录不携带token
      const isToken = option.isToken
      options.headers = new Headers(options.headers)
      if (isToken) options.headers.set('token', `${userPinia.getToken}`)
    },
    // 响应拦截
    onResponse({ response }) {
      // console.log('[response]', response)
      if (response.status === 200) {
        if (response._data) {
          if (response._data.code === 1) return response._data
          else if (response._data.code === 401) {
            // TODO 401 登陆过期
            if (process.client) {
              userPinia.clearUserInfo()
            }
            return Promise.reject(response._data ?? null)
          } else {
            handleError(response._data)
            return Promise.reject(response._data ?? null)
          }
        }
      }
      // console.log('[response]', response)
      if (process.client) console.error('🚀 ~ file: request.ts:76 ~ useFetch ~ error:' + url)
      handleError(response._data)
      return Promise.reject(response._data ?? null)
    },
    // 错误处理
    onResponseError({ response }) {
      if (process.client) console.error('🚀 ~ file: request.ts:82 ~ useFetch ~ error:' + url)
      handleError(response._data)
      return Promise.reject(response._data ?? null)
    }
  }
}

export const useResFetch = (url: string, opts?: any): Promise<any> => {
  return $fetch(url, fetchOption(url, opts))
}

export const useCustomFetch = (url: string, opts?: any): Promise<any> => {
  return useFetch(url, fetchOption(url, opts))
}
