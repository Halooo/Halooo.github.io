<template>
  <div class="w-117 bg-black fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 space-y-16">
    <div class="space-y-4">
      <div class="font-medium text-5xl PPHattonMedium flex flex-col space-y-2">
        <span>Proposal</span>
        <span>Submitted!</span>
      </div>
      <div class="font-light text-lg PolySansNeutral space-y-8">
        <div>Thanks for your submission!</div>
        <div>Sit tight, we will review your submission as quickly as we can.</div>
        <div>You will receive email notification if your proposal is approved, feedback will be provided.</div>
        <div>You can track the progress in your proposal dashboard.</div>
      </div>
    </div>
    <div class="btn gradient-btn" @click="close">
      <div>OK</div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  path: string
}
const props = withDefaults(defineProps<Props>(), {
  path: '/useProposal/film/preview'
})
const emits = defineEmits(['update:model-value'])
const close = () => {
  emits('update:model-value', '')
  navigateTo(props.path)
}
</script>
<style lang="scss"></style>
