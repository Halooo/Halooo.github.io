<template>
  <div class="w-117 bg-black fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 space-y-16">
    <div class="space-y-4">
      <p class="font-medium text-5xl PPHattonMedium">Confirm</p>
      <div class="font-light text-lg PolySansNeutral">You will not be able to reverse this action.</div>
    </div>
    <div class="space-x-5 flex">
      <div class="btn gradient-btn" @click="submitFn">
        <div>Cancel</div>
      </div>
      <div class="btn" @click="close">
        <div>Don’t cancel</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const emits = defineEmits(['update:model-value', 'submitBtb'])
const close = () => {
  emits('update:model-value', '')
}
const submitFn = () => {
  emits('submitBtb')
}
</script>
