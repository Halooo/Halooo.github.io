<template>
  <div v-if="props.list" class="relative flex">
    <div ref="marquee" class="whitespace-nowrap space-x-30px" :style="[{ transform: `translateX(${left}px)` }]" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
      <slot></slot>
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  list: any
  width: number
  offset?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  list: [],
  // 单位PX
  width: 0,
  offset: 'left'
})

const marquee = ref<any>(null)
const requestId = ref<any>()
const left = ref<number>(0)

watchEffect(() => {
  const num = Number(`-${props.list.length * (props.width + 30)}`)
  if (props.offset === 'right') {
    if (left.value >= 0) left.value = num
  }
  if (props.offset === 'left') {
    if (left.value <= num) left.value = 0
  }
})

const move = () => {
  if (props.offset === 'right') left.value += 1
  if (props.offset === 'left') left.value -= 1
  requestId.value = window.requestAnimationFrame(move)
}

const requestAnimationFrame = () => {
  if (requestId.value) window.cancelAnimationFrame(requestId.value)
  left.value = 0
  requestId.value = window.requestAnimationFrame(move)
}

onMounted(async () => {
  await nextTick()
  if (marquee.value) requestAnimationFrame()
})

// 鼠标悬停
const handleMouseenter = (ev) => {
  ev.preventDefault()
  cancelAnimationFrame(requestId.value)
}

// 鼠标移开
const handleMouseleave = (ev) => {
  ev.preventDefault()
  requestId.value = window.requestAnimationFrame(move)
}
</script>
<style lang="scss" scoped></style>
