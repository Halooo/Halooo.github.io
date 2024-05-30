<template>
  <div class="relative">
    <video-player src="https://www.starscollective.com/assets/videos/pc/SC-Others-3.webm" muted autoplay loop playsinline class="fixed inset-0 w-full h-full z-1 player-video"></video-player>
    <Header></Header>
    <main class="main-cantainer relative z-10"><slot></slot></main>
  </div>
</template>
<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
</script>
<style lang="scss"></style>
