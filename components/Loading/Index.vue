<template>
  <Transition :name="props.transition">
    <div v-if="loadingShow" class="absolute inset-0 w-full h-full z-9999">
      <div class="w-full h-full flex justify-center items-center relative">
        <div
          v-if="props.mask"
          class="loading-mask absolute top-0 left-0 w-full h-full backdrop-blur-5 -z-1"
          :style="[{ backgroundColor: props.maskColor }, { backdropFilter: props.backdropFilter }]"
        ></div>
        <slot v-bind="props"><component :is="loadingComponent" v-bind="props" /></slot>
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
const ChaseDot = resolveComponent('LoadingChaseDot')
const CircleDot = resolveComponent('LoadingCircleDot')
const CubeGrid = resolveComponent('LoadingCubeGrid')
const FadeDot = resolveComponent('LoadingFadeDot')
const FoldCube = resolveComponent('LoadingFoldCube')
const RotatingPlane = resolveComponent('LoadingRotatingPlane')
const SpreadScreen = resolveComponent('LoadingSpreadScreen')
const BlurSmall = resolveComponent('LoadingBlurSmall')

interface Props {
  modelValue?: string
  mask?: boolean
  maskColor?: string
  size?: number
  color?: string
  // 动画效果
  transition?: string
  backdropFilter?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 'CircleDot',
  mask: true,
  maskColor: 'rgba(0,0,0,.45)',
  size: 30,
  color: '#FFFFFF',
  transition: 'fade',
  backdropFilter: 'blur(0px)'
})

const emits = defineEmits(['update:modelValue'])

const loadingComponent = computed(() => eval(props.modelValue))

const loadingShow = computed({
  get: () => (props.modelValue ? true : false),
  set: (value) => emits('update:modelValue', value)
})
</script>
<style lang="scss" scoped></style>
