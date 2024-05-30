<template>
  <div>
    <NuxtLayout name="custom">
      <div class="w-full bg-black overflow-hidden">
        <div class="w-full h-screen overflow-hidden">
          <video-player src="https://www.starscollective.com/assets/videos/pc/sc_footage.webm" muted autoplay loop playsinline class="w-full h-full"></video-player>
        </div>
        <div class="max-w-1300px px-50px overflow-hidden mx-auto relative">
          <img src="https://www.starscollective.com/assets/images/stars/Asset.png" class="mt-120px h-67px object-cover" />
          <div class="text-16px leading-6 w-530px mt-9">
            As the affiliated company of StarsCollective, F00TAGE is honored to pave the way for talents and built jointly by talents unite thousands of creators to become
            <label class="text-#ffffff">the No. 1 IP brand in Web 3.0 Era</label>
          </div>
          <div class="bg-white h-18px inline-flex text-black mt-6 cursor-pointer" @click="handleLink">
            <div class="uppercase tracking-2.1px ml-2px">Go to footage Website</div>
            <Icon name="mdi:arrow-top-right" class="w-18px h-18px ml-2"></Icon>
          </div>
          <div class="text-36px mt-175px whitespace-nowrap">a blockchain-based ecosystem for</div>
          <div class="w-full relative h-570px">
            <div class="text-147px text-#ffffff mt-3 absolute z-10 PPHattonMedium">Filmmakers<br />& Movie Lovers</div>
            <img src="https://www.starscollective.com/assets/images/stars/footage_make.gif" class="absolute w-570px h-570px -right-80px -top-85px z-0" />
            <div class="w-520px text-18px absolute bottom-135px">
              F00TAGE is a place for filmmakers and movie lovers to uncover the possibilities of Metaverse and creative ways for movie financing and fundraising.
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
const handleLink = () => {
  window.open('http://footage.club/', '_black')
}
</script>
<style lang="scss" scoped>
:deep(video) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
