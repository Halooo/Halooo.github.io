<template>
  <div>
    <NuxtLayout name="custom">
      <div class="w-full bg-black overflow-hidden">
        <div class="w-full h-screen overflow-hidden">
          <video-player src="https://www.starscollective.com/assets/videos/pc/sc_footage.mp4" muted autoplay loop playsinline class="w-full h-full"></video-player>
        </div>
        <div class="w-1300px px-50px mx-auto overflow-hidden pb-205px">
          <div class="text-16px leading-6 mt-12">
            We are an interdimensional content provider. With great passion and <br />
            seasoned experience, our artists, producers, and partners work together<br />
            to bring your idea to life.
          </div>
        </div>
        <Footer></Footer>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
</script>
