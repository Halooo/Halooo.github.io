<template>
  <div>
    <NuxtLayout name="custom">
      <div class="fixed inset-0 w-full h-screen">
        <video-player src="https://www.starscollective.com/assets/videos/pc/NFT.webm" muted autoplay playsinline class="w-full h-full" @ended="handleSkip"></video-player>
        <div class="fixed bottom-20 right-20 border border-white rounded-full px-6 py-1 text-18px z-10 cursor-pointer" @click.stop="handleSkip">skip</div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'

const handleSkip = () => {
  navigateTo('/collection/step2')
}
</script>
<style lang="scss" scoped>
:deep(video) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
