<template>
  <div class="relative w-full h-screen overflow-hidden">
    <video-player src="https://www.starscollective.com/assets/videos/pc/SC-About-Color-final-1.webm" muted autoplay loop playsinline class="absolute inset-0 w-full h-full"></video-player>

    <div class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
      <div class="uppercase text-center text-50px tracking-50px">stars</div>
      <div class="uppercase text-center text-35px tracking-20px mt-4 mb-6">collective</div>
      <div class="text-77px text-center whitespace-nowrap PPHattonMedium">in Film Business</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
</script>
<style lang="scss" scoped>
:deep(video) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
