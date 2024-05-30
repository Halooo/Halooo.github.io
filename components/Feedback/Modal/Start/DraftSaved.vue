<template>
  <div class="w-117 bg-black fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 space-y-16">
    <div class="space-y-4">
      <p class="font-medium text-5xl PPHattonMedium">Draft Saved</p>
      <div class="font-light text-lg PolySansNeutral">
        You can find your drafts in your user<br />
        portal - application or proposal page.
      </div>
    </div>
    <div class="btn gradient-btn" @click="cancelFn">
      <div>Ok</div>
    </div>
  </div>
</template>
<script setup lang="ts">
const model_store = useModalPinia()
const submitForm = () => {}
const cancelFn = () => {
  model_store.setModalName('')
}
</script>
