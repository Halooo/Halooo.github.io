<template>
  <NuxtLayout>
    <div class="bg-black relative">
      <NuxtPage v-if="isRouterAlive" />
      <FeedbackModalFail />

      <div v-if="!modal_store.getPageLoading && loadingVideo" class="fixed inset-0 w-full h-full z-9999 !bg-black">
        <video-player src="https://www.starscollective.com/assets/videos/pc//sc_index3s.webm" muted autoplay playsinline class="w-full h-full loading-video" @ended="handleSkip"></video-player>
        <div class="fixed bottom-10 right-20 cursor-pointer text-xl" @click="handleSkip">Skip</div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'

const isRouterAlive = ref<boolean>(true)

const reload = () => {
  isRouterAlive.value = false
  nextTick(() => {
    isRouterAlive.value = true
  })
}
provide('reload', reload)

const _isMobile = () => {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag
}

if (process.client) {
  if (window.location.pathname == '/career' || window.location.pathname == '/jobs/description') {
    // TODO: once removed H5 pages, remove this exception
  }
  else if (_isMobile()) {
    window.location.href = 'https://starscollective.com/h5/'
  }
}

const modal_store = useModalPinia()
const loadingVideo = ref<boolean>(true)
const handleLoadedmetadata = () => {
  modal_store.setPageLoading(true)
}
const handleSkip = () => {
  loadingVideo.value = false
  handleLoadedmetadata()
}
</script>
<style lang="scss">
.player-video {
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.video-js {
  background-color: var(--u-transparent);

  video {
    mix-blend-mode: screen;
  }
}

.swiper-pagination {
  width: auto !important;
  top: auto !important;
  left: auto !important;
  right: 2.5rem;
  bottom: 2.5rem !important;
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 0;
    cursor: pointer;
    background-color: var(--u-transparent) !important;
    &.swiper-pagination-bullet-active {
      background-color: var(--u-white) !important;
    }
  }
}

.swiper-wrapper {
  transition-timing-function: linear !important;
}

.loading-video {
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
