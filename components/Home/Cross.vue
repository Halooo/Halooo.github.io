<template>
  <div>
    <div class="px-50px">
      <div class="max-w-1300px mx-auto">
        <video-player src="https://www.starscollective.com/assets/videos/pc/cross-medium.webm" muted autoplay loop playsinline class="w-full"></video-player>
        <div ref="mentorRef" class="flex justify-center items-end pt-30 space-x-30">
          <img src="~/assets/images/home/icon2.png" alt="" class="h-25" />
          <img src="~/assets/images/home/icon3.png" alt="" class="h-22" />
          <img src="~/assets/images/home/icon1.png" alt="" class="h-25" />
        </div>
        <div class="py-30 flex flex-col justify-center items-center space-y-10">
          <div class="PPHattonMedium text-26px text-center max-w-840px corss-text opacity-0">
            Uncovering the possibilities of storytelling in different mediums by pushing the boundaries of traditional filmmaking
          </div>
          <div class="btn gradient-btn mt-10" @click="navigateTo('/starsMovies')">
            <div>Learn More</div>
          </div>
        </div>
        <div class="py-20 flex justify-center">
          <img src="~/assets/images/metaverse/metaverse-intro.png" alt="" class="w-500px" />
        </div>
      </div>
    </div>
    <div class="w-full h-screen">
      <video-player src="https://www.starscollective.com/assets/videos/pc/About-Video.webm" muted autoplay loop playsinline class="w-full h-full"></video-player>
    </div>
    <div class="px-50px pt-50">
      <div class="max-w-1300px mx-auto flex justify-center items-center space-x-10">
        <!-- <div class="flex-1">
          <div class="flex justify-center items-center space-x-5">
            <div class="flex-1 space-y-15">
              <img src="~/assets/images/metaverse/about-left.png" alt="" class="h-8" />
              <div class="btn gradient-btn" @click="navigateTo('/footage')">
                <div>Enter FOOTAGE</div>
              </div>
            </div>
            <div class="flex-1 space-y-15">
              <img src="~/assets/images/metaverse/about-right.png" alt="" class="h-8" />
              <button disabled class="btn gradient-btn">
                <div>Coming Soon</div>
              </button> -->
        <!-- <button class="btn gradient-btn" @click="navigateTo('/collection/step1')">
                <div>Learn More</div>
              </button> -->
        <!-- </div>
          </div>
        </div> -->

        <div class="w-1/2 ml-15">
          <div class="w-full py-10">
            <img src="~/assets/images/metaverse/comin-soon.png" alt="" class="w-full -ml-15" />
          </div>
          <img src="https://www.starscollective.com/assets/images/gif/line2.gif" alt="" class="w-full block -ml-10" />
        </div>
      </div>

      <div class="max-w-1300px mx-auto mt-50">
        <div class="text-77px PPHattonMedium">Our<br />Partners</div>
        <img src="/images/icon/ellipse.png" class="h-15 block" />
        <div class="text-#616161 PolySansSlim mt-10">* Names are listed in alphabetical order</div>
      </div>

      <div class="w-full mt-20">
        <SwiperLoop :width="100" :list="partnersList">
          <div v-for="(item, index) in partnersList" :key="index" class="w-100px inline-block">
            <div class="w-full h-0 pb-full relative">
              <img :src="imagesFormat(item)" alt="" :data-link="item.link" class="absolute top-0 left-0 w-full h-full object-contain" />
            </div>
          </div>
        </SwiperLoop>
      </div>

      <div class="max-w-1300px mx-auto flex justify-center items-center pt-20 pb-50">
        <div class="btn gradient-btn" @click="drawer = !drawer">
          <div>Show All Partners</div>
        </div>
      </div>

      <el-drawer v-model="drawer" class="drawer-cont" :append-to-body="true" direction="btt" size="100vh">
        <div class="px-50px">
          <div class="max-w-1300px mx-auto grid grid-cols-6 gap-5">
            <div v-for="(item, index) in partners" :key="index">
              <div class="flex justify-center items-center">
                <img :src="item.logo_image" alt="" class="w-25 h-25 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </el-drawer>
    </div>
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
import { VideoPlayer } from '@videojs-player/vue'
const starAnimate = ref<boolean>(false)
const mentorRef = ref<any>(null)
const partners = ref<any[]>([])

const imagesFormat = computed(() => {
  return (item) => {
    return `https://www.starscollective.com${item.logo_image}`
  }
})
const partnersList = ref<any[]>([
  { logo_image: '/assets/images/logos/logo1.png' },
  { logo_image: '/assets/images/logos/logo2.png' },
  { logo_image: '/assets/images/logos/logo3.png' },
  { logo_image: '/assets/images/logos/logo4.png' },
  { logo_image: '/assets/images/logos/logo5.png' },
  { logo_image: '/assets/images/logos/logo6.png' },
  { logo_image: '/assets/images/logos/logo7.png' },
  { logo_image: '/assets/images/logos/logo8.png' },
  { logo_image: '/assets/images/logos/logo9.png' },
  { logo_image: '/assets/images/logos/logo10.png' },
  { logo_image: '/assets/images/logos/logo11.png' },
  { logo_image: '/assets/images/logos/logo12.png' }
])

const drawer = ref<boolean>(false)

// 获取logo
const getLogo = async () => {
  const res = await apiIndexLogoList()
  if (process.client) console.log('获取logo', res)
  partners.value = res.data
}

getLogo()

onMounted(() => {
  nextTick(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => (starAnimate.value = entry.isIntersecting)), { threshold: 0.3 })
    mentorRef.value && io.observe(mentorRef.value)
  })
})

watchEffect(() => {
  if (starAnimate.value) {
    AnimateEffect()
  }
})

// 动画效果
const AnimateEffect = () => {
  gsap.fromTo('.corss-text', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 2 })
}
</script>
<style lang="scss">
.drawer-cont {
  transition: all 1s linear;
  background: linear-gradient(270deg, #ff00d6 0%, #7b61ff 0.01%, #411ef5 43.05%, #2108a5 96.08%);
  .el-drawer__close {
    color: #ffffff;
    &:hover {
      color: #ffffff;
    }
  }
}
</style>
<style lang="scss" scoped>
:deep(video) {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
