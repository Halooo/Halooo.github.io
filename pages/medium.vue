<template>
  <div>
    <NuxtLayout name="home">
      <div class="w-full relative">
        <div class="max-w-1536px w-full absolute top-50 left-1/2 -translate-x-1/2">
          <img src="https://www.starscollective.com/assets/images/pc/movies/Cross-Medium1.png" alt="" class="block w-full" />
        </div>
        <div class="px-50px w-full relative pt-50 z-100">
          <div class="max-w-1300px mx-auto relative z-100 flex justify-between">
            <div class="w-60%">
              <div class="w-full overflow-hidden h-0 pb-50% relative">
                <video-player src="https://www.starscollective.com/assets/videos/pc/cross-medium.webm" muted autoplay loop playsinline class="w-full h-full absolute inset-0"></video-player>
              </div>
              <div class="flex justify-center items-end pt-20 space-x-20">
                <img src="~/assets/images/home/icon2.png" alt="" class="h-20" />
                <img src="~/assets/images/home/icon3.png" alt="" class="h-20" />
                <img src="~/assets/images/home/icon1.png" alt="" class="h-20" />
              </div>
            </div>
            <MediumNvgui></MediumNvgui>
          </div>
          <div class="max-w-1300px mx-auto relative z-100 flex justify-start">
            <MediumKungFu></MediumKungFu>
          </div>
          <div class="max-w-1300px mx-auto relative z-100 flex justify-end">
            <MediumCriminalGenius></MediumCriminalGenius>
          </div>
          <div class="max-w-1300px mx-auto relative z-100 flex justify-start">
            <MediumFantasy></MediumFantasy>
          </div>
        </div>

        <div class="px-50px py-50 pt-250">
          <div class="max-w-1300px mx-auto relative z-100">
            <div class="w-full flex justify-end items-center" style="font-family: PPHattonMedium">
              <!-- <div class="flex items-center cursor-pointer" @click="navigateTo('/starsMovies')">
              <img src="/images/icon/Chevron_Left.png" alt="" class="w-12" />
              <div class="left-btn text-35px">Movies</div>
            </div> -->
              <div class="flex items-center cursor-pointer" @click="navigateTo('/metaverse')">
                <div class="right-btn text-35px">Metaverse</div>
                <img src="/images/icon/Chevron_Right1.png" alt="" class="w-12" />
              </div>
            </div>
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
<style lang="scss" scoped>
:deep(video) {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.left-btn {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.47) 100%);
}
.right-btn {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(270deg, #af1425 0%, #f5ae7b 44.63%, #f56da6 100.81%);
}
</style>
