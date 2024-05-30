<template>
  <div class="w-135 bg-black fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 space-y-16">
    <div class="space-y-4">
      <p class="font-medium text-5xl PPHattonMedium">Feedback</p>
      <div class="font-light text-lg PolySansNeutral">
        The Stars - grantees will be chosen by Sundance Institute staff and an external committe from a pool of applicants currently receiving creative, financial and tactical support through
        institute programs. The non recoupable grants will focus on critical development support as well as urgent needs in advancing projects forward through pre-production, production,
        post-production and self-distribution.
      </div>
    </div>
    <div class="space-x-5 flex">
      <div class="btn gradient-btn" @click="submitForm">
        <div>Send to my email</div>
      </div>
      <div class="btn" @click="cancelFn">
        <div>Close</div>
      </div>
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
