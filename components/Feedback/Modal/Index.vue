<template>
  <Transition name="fade">
    <div v-if="drawerShow" class="w-full h-full bg-black bg-opacity-70 fixed inset-0 z-99">
      <div class="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import gsap from 'gsap'
interface Props {
  modelValue: boolean
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: false
})
watchEffect(() => {
  if (props.modelValue) {
    animateEffect()
  }
})
// 动画效果
const animateEffect = () => {
  // gsap.fromTo('.fade_scale', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3 })
}
const emits = defineEmits(['update:modelValue', 'close'])
const drawerShow = computed({
  get: () => props.modelValue,
  set: (value) => {
    emits('update:modelValue', value)
  }
})
</script>
<style lang="scss">
.fade_scale {
  border-style: solid;
  border-width: 1px;
  border-image: linear-gradient(270deg, #ff00d6 0%, #7b61ff 70.88%, #7193ea 96.61%);
  border-image-slice: 1;
}
</style>
