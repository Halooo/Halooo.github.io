<template>
  <Transition name="fade">
    <div v-if="model_name_computed" class="w-full h-full bg-black bg-opacity-70 fixed inset-0 z-99">
      <div class="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 fade_scale">
        <FeedbackModalUserLogOut v-if="model_store.getModalName === 'logOut'" />
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import gsap from 'gsap'
const model_store = useModalPinia()

const model_name_computed = computed(() => {
  if (model_store.getModalName) {
    nextTick(() => {
      AnimateEffect()
    })
  }
  return model_store.getModalName ? true : false
})

const hanleMaskClick = () => {
  model_store.setModalName('')
}
// 动画效果
const AnimateEffect = () => {
  gsap.fromTo('.fade_scale', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3 })
}
</script>
<style lang="scss" scoped></style>
