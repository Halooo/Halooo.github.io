<template>
  <Transition name="fade">
    <div v-if="model_name_computed" class="w-full h-full bg-black bg-opacity-70 fixed inset-0 z-99">
      <div class="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 fade_scale">
        <div class="w-135 bg-black p-16 space-y-16">
          <div class="space-y-4">
            <p class="font-medium text-5xl PPHattonMedium leading-16">Fail!</p>
            <div class="font-light text-lg PolySansNeutral">{{ model_store.getModelOption.message }}</div>
          </div>

          <div class="btn gradient-btn" @click="close">
            <div>{{ model_store.getModelOption.code === 401 ? 'Ok' : 'close' }}</div>
          </div>
          <slot name="btn"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import gsap from 'gsap'
const model_store = useModalPinia()
const user_store = useUserPinia()
const model_name_computed = computed(() => {
  if (model_store.getModalName) {
    nextTick(() => {
      AnimateEffect()
    })
  }
  return model_store.getModalName ? true : false
})

const close = () => {
  model_store.setModalName('')
  if (model_store.getModelOption.code === 401) navigateTo('/account/logIn')
  user_store.clearUserInfo()
}
// 动画效果
const AnimateEffect = () => {
  gsap.fromTo('.fade_scale', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3 })
}
</script>
<style lang="scss" scoped></style>
