<template>
  <div class="w-135 bg-black p-16 space-y-16">
    <div class="space-y-4">
      <p class="font-medium text-5xl PPHattonMedium leading-16">
        <slot name="title"></slot>
      </p>
      <div class="font-light text-lg PolySansNeutral">
        <slot name="describe"></slot>
      </div>
    </div>
    <div v-if="props.defaultBtn" class="btn gradient-btn" @click="close">
      <div>close</div>
    </div>
    <slot name="btn"></slot>
  </div>
</template>
<script setup lang="ts">
interface Props {
  defaultBtn?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  defaultBtn: true
})
const emits = defineEmits(['update:model-value', 'okBoxSubmit'])
const close = () => {
  emits('update:model-value', '')
}
</script>
<style lang="scss"></style>
