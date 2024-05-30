<template>
  <div class="absolute top-0 left-0 z-99 h-full screen-container" :class="[{ 'animate-[screenContainer]': props.modelValue }]" @animationend="handleAnimationend">
    <div class="screen-box h-full relative">
      <div class="bg-#FFBC02 screen-item item1" :class="[{ 'animate-[screenItemLeft]': props.modelValue }]"></div>
      <div class="bg-#FFBC02 screen-item item2 animate-delay-200" :class="[{ 'animate-[screenItemLeft]': props.modelValue }]"></div>
      <div class="bg-#FFBC02 screen-item item3 animate-delay-300" :class="[{ 'animate-[screenItemLeft]': props.modelValue }]"></div>
      <div class="bg-#FFBC02 screen-item h-296px animate-delay-500" :class="[{ 'animate-[screenItemLeft]': props.modelValue }]"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  modelValue: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: true
})

const emits = defineEmits(['update:modelValue'])

const handleAnimationend = () => {
  // emits('update:modelValue', false)
}
</script>
<style lang="scss">
@keyframes screenContainer {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes screenItemLeft {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
<style lang="scss" scoped>
.screen-container {
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.screen-box {
  .screen-item {
    left: 0;
    width: 0;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    &.item1 {
      height: calc((100% - 296px) / 3);
    }
    &.item2 {
      height: calc((100% - 296px) / 3);
    }
    &.item3 {
      height: calc((100% - 296px) / 3);
    }
  }
}
</style>
