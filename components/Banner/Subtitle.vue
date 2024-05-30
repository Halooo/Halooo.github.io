<template>
  <div>
    <div v-if="props.bannerData.cate == 0" class="relative w-full" style="height: calc(100vh - 80px)">
      <el-image v-if="props.bannerData" :src="props.bannerData.poster_image" class="w-full h-full absolute inset-0 z-1" fit="cover" />
      <div class="w-full h-full absolute inset-0 z-10" style="background: linear-gradient(270deg, rgba(47, 47, 47, 0) 0%, rgba(0, 0, 0, 0.8) 66.81%)"></div>
      <div class="absolute left-48 top-359px w-650px max-w-800px z-20" style="font-family: PPHattonMedium">
        <div class="text-48px">{{ props.bannerData.name }}</div>
        <img src="/images/icon/ellipse.png" class="h-15 block" />
        <div class="text-18px text-[#ffffff] mt-24px">{{ props.bannerData.subtitle }}</div>
        <div class="text-18px text-[#E0E0E0] mt-3">
          {{ props.bannerData.summary }}
        </div>
        <div
          class="uppercase w-138px h-18px bg-#FFFFFF text-black mt-11 cursor-pointer flex items-center justify-between"
          @click="handleRoute(props.bannerData.learn_more_link || props.bannerData.video_link)"
        >
          <div class="text-14px">Learn &nbsp;More</div>
          <Icon name="mdi:arrow-top-right" class="w-18px h-18px"></Icon>
        </div>
      </div>
    </div>

    <div v-else-if="props.bannerData.cate == 1" class="w-full flex" style="height: calc(100vh - 80px)">
      <div class="h-full w-1/2 relative z-1">
        <el-image v-if="props.bannerData && props.bannerData.profile_avatar[0]" :src="props.bannerData.profile_avatar[0].file_url" fit="cover" class="w-full h-full absolute inset-0 z-1"></el-image>
        <div class="w-full h-full absolute inset-0 z-10" style="background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 29.69%)"></div>
      </div>
      <div class="h-full w-1/2 relative z-10">
        <video-player src="https://www.starscollective.com/assets/videos/pc/SC-Map-4.webm" muted autoplay loop playsinline class="absolute inset-0 w-full h-full z-1"></video-player>
        <div class="absolute w-600px py-34px px-33px left-1/2 -translate-x-1/2 top-168px z-20 bg-black">
          <div class="flex items-center justify-between">
            <div class="flex">
              <el-image v-if="props.bannerData && props.bannerData.profile_avatar[0]" :src="props.bannerData.profile_avatar[0].file_url" fit="cover" class="w-50px h-50px mr-5"></el-image>
              <div class="text-18px">
                <div>{{ props.bannerData.first_name }} {{ props.bannerData.last_name }}</div>
                <div class="text-[#E0E0E0] mt-3px">Artist | Generative Artist</div>
              </div>
            </div>
            <div class="h-18px leading-18px flex text-black bg-#ffffff cursor-pointer" @click="navigateTo(`/starslist/${props.bannerData.id}`)">
              <div>VIEW PROFILE</div>
              <Icon name="mdi:arrow-top-right" class="w-18px h-18px ml-2"></Icon>
            </div>
          </div>
          <div class="text-18px whitespace-break-spaces mt-10 font-light leading-7 text-[#E0E0E0] line-clamp-5">
            {{ props.bannerData.introduce }}
          </div>
        </div>

        <div class="absolute bottom-70px w-600px left-1/2 -translate-x-1/2 text-60px PPHattonMedium z-20">
          <div>Meet The Star</div>
          <img src="/images/icon/ellipse.png" class="h-15 block" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'

interface Props {
  bannerData?: any
}
const props = withDefaults(defineProps<Props>(), {
  bannerData: []
})

const handleRoute = (_url: string) => {
  if (_url == 'http://starscollective.com/Star/Grant') {
    navigateTo('/grant')
  } else {
    window.open(_url, '_black')
  }
}
</script>
<style lang="scss" scoped>
:deep(video) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
