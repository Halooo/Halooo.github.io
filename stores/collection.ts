export const useCollectionPinia = defineStore('collection', () => {
  // state 方法
  const collectionAnimation = ref<boolean>(false)

  // getters 方法
  const getCollectionAnimation = computed(() => collectionAnimation.value)

  // actions 方法
  const setCollectionAnimation = (value) => {
    collectionAnimation.value = value
  }
  return {
    // state
    collectionAnimation,
    // getters
    getCollectionAnimation,
    // actions
    setCollectionAnimation
  }
})
