<template>
  <div class="w-full h-full relative overflow-hidden" :style="[{ '--cy-loading-color': props.color }]">
    <Icon name="StartLogo" size="1000" color="#FFFFFF" class="absolute top-0 right-0" />
    <div class="w-full h-full px-10 flex items-center">
      <div class="text-13 text-white">S.M A L L</div>
    </div>
    <div class="absolute left-10 bottom-10">
      <div class="text-xl text-white">LOADING...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: '#FFFFFF'
})
</script>

<style lang="scss" scoped></style>
