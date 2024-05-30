<template>
  <div class="absolute top-0 left-0 z-999 h-full screen-container" :class="[{ 'animate-[screenContainer]': props.modelValue }]" @animationend="handleAnimationend">
    <div class="screen-box h-full relative flex flex-col">
      <div class="bg-#FFBC02 screen-item item1 h-5% absolute top-0" :class="[{ 'animate-[screenItemLeft1]': props.modelValue }]"></div>
      <div class="bg-#FF3023 screen-item item2 h-15% absolute top-5%" :class="[{ 'animate-[screenItemLeft2]': props.modelValue }]"></div>
      <div class="bg-#010FFA screen-item item3 h-40% absolute top-20%" :class="[{ 'animate-[screenItemLeft3]': props.modelValue }]"></div>
      <div class="bg-#000000 screen-item item4 h-40% absolute top-60%" :class="[{ 'animate-[screenItemLeft4]': props.modelValue }]"></div>
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
  emits('update:modelValue', false)
}
</script>
<style lang="scss">
$screen-width: 20px;
@keyframes screenContainer {
  0% {
    width: 0;
  }
  40% {
    background-color: var(--u-white);
    width: 100%;
  }
  65% {
    background-color: var(--u-white);
    width: 100%;
  }
  85% {
    background-color: var(--u-white);
    width: 100%;
  }
  90% {
    background-color: var(--u-transparent);
    width: 100%;
  }

  100% {
    background-color: var(--u-transparent);
    width: 0;
  }
}

@keyframes screenItemLeft1 {
  0% {
    left: 0;
    width: $screen-width;
  }
  15% {
    left: 100%;
    width: $screen-width;
  }
  30% {
    left: 100%;
    width: $screen-width;
  }
  40% {
    left: calc(100% - $screen-width);
    width: $screen-width;
  }
  50% {
    left: calc(100% - $screen-width);
    width: 100%;
  }
  90% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 0;
    width: $screen-width;
  }
}
@keyframes screenItemLeft2 {
  0% {
    left: 0;
    width: $screen-width;
  }
  15% {
    left: 100%;
    width: $screen-width;
  }
  30% {
    left: 100%;
    width: $screen-width;
  }
  40% {
    left: calc(100% - $screen-width);
    width: $screen-width;
  }
  55% {
    left: calc(100% - $screen-width);
    width: 100%;
  }
  85% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 0;
    width: $screen-width;
  }
}
@keyframes screenItemLeft3 {
  0% {
    left: 0;
    width: $screen-width;
  }
  15% {
    left: 100%;
    width: $screen-width;
  }
  30% {
    left: 100%;
    width: $screen-width;
  }
  40% {
    left: calc(100% - $screen-width);
    width: $screen-width;
  }
  60% {
    left: calc(100% - $screen-width);
    width: 100%;
  }
  80% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 0;
    width: $screen-width;
  }
}
@keyframes screenItemLeft4 {
  0% {
    left: 0;
    width: $screen-width;
  }
  15% {
    left: 100%;
    width: $screen-width;
  }
  30% {
    left: 100%;
    width: $screen-width;
  }
  40% {
    left: calc(100% - $screen-width);
    width: $screen-width;
  }
  65% {
    left: calc(100% - $screen-width);
    width: 100%;
  }
  75% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 0;
    width: $screen-width;
  }
}
</style>
<style lang="scss" scoped>
.screen-container {
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

$screen-width: 20px;

.screen-box {
  .screen-item {
    left: 0;
    width: $screen-width;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
  }
}
</style>
