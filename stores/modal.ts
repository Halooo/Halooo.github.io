export const useModalPinia = defineStore(
  'modal',
  () => {
    // state 方法
    const modalName = ref<string>('')

    const modelOption = reactive({
      title: '',
      message: '',
      icon: '',
      image: '',
      code: null
    })

    const pageLoading = ref<boolean>(false)

    // getters 方法
    const getModalName = computed(() => modalName.value)
    const getModelOption = computed(() => modelOption)
    const getPageLoading = computed(() => pageLoading.value)

    // actions 方法
    const setModalName = (value) => {
      modalName.value = value
    }
    const setModelOption = (option) => {
      for (const key in modelOption) {
        modelOption[key] = option[key]
      }
    }
    const setPageLoading = (value) => {
      pageLoading.value = value
    }
    return {
      // state
      modalName,
      modelOption,
      pageLoading,
      // getters
      getModalName,
      getModelOption,
      getPageLoading,
      // actions
      setModalName,
      setModelOption,
      setPageLoading
    }
  },
  {
    persist: [
      {
        paths: ['pageLoading'],
        storage: persistedState.cookiesWithOptions()
      }
    ]
  }
)
