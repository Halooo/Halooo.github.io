<template>
  <div ref="starsRef" class="w-full h-screen bg-black relative">
    <video-player src="https://www.starscollective.com/assets/videos/pc/SC-Map-4.webm" muted autoplay loop playsinline class="absolute inset-0 w-full h-full z-1"></video-player>
    <div class="px-50px pt-80px overflow-hidden relative z-10">
      <div class="w-1300px mx-auto">
        <div class="text-77px PPHattonMedium">Our<br />Stars</div>
        <img src="/images/icon/ellipse.png" class="h-15 block" />
        <!-- <div class="text-18px mt-11 leading-7 start_text1 opacity-0 whitespace-nowrap">
          <label class="font-bold italic">Filmmakers</label> - Knowing that working with renowned professionals has traditionally<br />
          been challenging for young filmmakers of diverse backgrounds, Stars Collective values<br />distinctive merits and creative storytelling by integrating global resources and bringing<br />together
          local alliances of film producers and directors
        </div>
        <div class="text-18px mt-11 leading-7 start_text2 opacity-0 whitespace-nowrap">
          <label class="font-bold italic">Artists</label> - Heading into the realm of NFT, we are committed to expanding the creative<br />community, partnering more artists in both traditional and
          digital fields to explore the<br />
          potentials of NFT creations and the metaverse venture.
        </div> -->
        <div class="text-18px mt-12 leading-7 start_text3 whitespace-nowrap opacity-0">
          <!-- We now have 200+ award-winning filmmakers and artists from all over the world. -->
          Stars Collective supports filmmakers and artists from around the world and <br />
          values their creative merits. We take pride in our diverse community of over <br />
          200 emerging talents.
        </div>

        <div class="btn gradient-btn mt-10" @click="navigateTo('/starslist')">
          <div class="">View All Stars</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
import gsap from 'gsap'
const starAnimate = ref<boolean>(false)
const starsRef = ref<any>(null)

watchEffect(() => {
  if (starAnimate.value) {
    AnimateEffect()
  }
})

// 动画效果
const AnimateEffect = () => {
  const tl = gsap.timeline()
  // tl.fromTo('.start_text1', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5 })
  // tl.fromTo('.start_text2', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5 }, '<')
  tl.fromTo('.start_text3', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5 })
  tl.fromTo('.start_btn', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5 }, '<')
}

onMounted(() => {
  nextTick(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => (starAnimate.value = entry.isIntersecting)), { threshold: 0.3 })
    starsRef.value && io.observe(starsRef.value)
  })
})
</script>
<style lang="scss" scoped>
:deep(video) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
