import { ref, computed } from 'vue';
import { d as defineStore } from './server.mjs';

const useCollectionPinia = defineStore("collection", () => {
  const collectionAnimation = ref(false);
  const getCollectionAnimation = computed(() => collectionAnimation.value);
  const setCollectionAnimation = (value) => {
    collectionAnimation.value = value;
  };
  return {
    // state
    collectionAnimation,
    // getters
    getCollectionAnimation,
    // actions
    setCollectionAnimation
  };
});

export { useCollectionPinia as u };
