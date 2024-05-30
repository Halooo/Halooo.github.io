export const useLoadingPinia = defineStore('loading', () => {
  // state 方法
  const loadingName = ref<string>('')
  const multipleAnimate = ref<boolean>(false)
  const auctionAnimate = ref<boolean>(false)
  const commodityAnimate = ref<boolean>(false)

  // getters 方法
  const getLoadingName = computed(() => loadingName.value)
  const getMultipleAnimate = computed(() => multipleAnimate.value)
  const getAuctionAnimate = computed(() => auctionAnimate.value)
  const getCommodityAnimate = computed(() => commodityAnimate.value)

  // actions 方法
  const setLoadingName = (value) => {
    loadingName.value = value
  }
  const setMultipleAnimate = (value) => {
    multipleAnimate.value = value
  }
  const setAuctionAnimate = (value) => {
    auctionAnimate.value = value
  }
  const setCommodityAnimate = (value) => {
    commodityAnimate.value = value
  }
  return {
    // state
    loadingName,
    multipleAnimate,
    auctionAnimate,
    commodityAnimate,
    // getters
    getLoadingName,
    getMultipleAnimate,
    getAuctionAnimate,
    getCommodityAnimate,
    // actions
    setLoadingName,
    setMultipleAnimate,
    setAuctionAnimate,
    setCommodityAnimate
  }
})
