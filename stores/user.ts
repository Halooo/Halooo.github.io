export const useUserPinia = defineStore(
  'user',
  () => {
    // state 方法
    const token = ref<string>('')
    const userInfo = ref<any>()
    // getters 方法
    const getToken = computed(() => token.value)
    const getUserInfo = computed(() => userInfo.value)

    // actions 方法
    const setToken = (value) => {
      token.value = value
    }
    const setUserInfo = (value) => {
      userInfo.value = value
    }

    const clearUserInfo = () => {
      token.value = ''
      userInfo.value = ''
    }
    return {
      // state
      token,
      userInfo,
      // getters
      getToken,
      getUserInfo,
      // actions
      setToken,
      setUserInfo,
      clearUserInfo
    }
  },
  {
    persist: [
      {
        paths: ['token', 'userInfo'],
        storage: persistedState.cookiesWithOptions({ maxAge: 604800 })
      }
    ]
  }
)
