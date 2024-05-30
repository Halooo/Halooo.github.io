<template>
  <div ref="moviesRef" class="bg-black pt-125px overflow-hidden">
    <div class="flex max-w-1300px px-50px overflow-hidden mx-auto justify-between">
      <div class="mt-130px w-400px overflow-hidden">
        <div class="text-77px PPHattonMedium">Movies</div>
        <img src="/images/icon/ellipse.png" class="h-15 block" />
        <div class="text-18px leading-27px mt-10 stars_text whitespace-nowrap">
          Stars Collective and its founder Peter Luo are<br />
          proud to produce and finance many Hollywood<br />
          movies and independent films.
        </div>
        <div class="btn gradient-btn mt-10" @click="navigateTo('/starsMovies')">
          <div class="">View All Movies</div>
        </div>
      </div>
      <div class="min-w-550px w-690px relative h-1160px overflow-hidden hidden sm:hidden md:block xl:block">
        <img src="https://www.starscollective.com/assets/images/about/Midway1.jpg" class="w-49% h-42% object-cover absolute left-0 opacity-0 image1" />
        <img src="https://www.starscollective.com/assets/images/about/Marshall1.jpg" class="w-49% h-42% object-cover absolute right-0 opacity-0 image2" />
        <img src="https://www.starscollective.com/assets/images/about/Malignant1.jpg" class="w-33% h-28% object-cover absolute left-0 top-44% object-cover opacity-0 image3" />
        <img src="https://www.starscollective.com/assets/images/about/Greta1.jpg" class="w-33% h-27.5% object-cover absolute left-0 bottom-0 opacity-0 image4" />
        <img src="https://www.starscollective.com/assets/images/about/CrazyRichAsians1.jpg" class="w-64% h-56% object-cover absolute right-0 bottom-0 opacity-0 image5" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
const starAnimate = ref<boolean>(false)
const openAnimate = ref<boolean>(false)
const moviesRef = ref<any>(null)
watchEffect(() => {
  if (starAnimate.value) {
    AnimateEffect()
  }
})

// 动画效果
const AnimateEffect = () => {
  gsap.fromTo('.stars_text', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 2.5 })
  gsap.fromTo('.btn gradient-btn', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 2.5 })

  gsap.fromTo('.image1', { x: '100%', opacity: 0 }, { opacity: 1, x: 0, duration: 2.5 })
  gsap.fromTo('.image2', { x: '-100%', y: '100%', opacity: 0 }, { opacity: 1, x: 0, y: 0, duration: 2.5 })
  gsap.fromTo('.image3', { x: '150%', y: '100%', opacity: 0 }, { opacity: 1, x: 0, y: 0, duration: 2.5 })
  gsap.fromTo('.image4', { x: '150%', y: '-100%', opacity: 0 }, { opacity: 1, x: 0, y: 0, duration: 2.5 })
  gsap.fromTo('.image5', { x: '-3%', y: '-100%', opacity: 0 }, { opacity: 1, x: 0, y: 0, duration: 2.5 })
}

onMounted(() => {
  nextTick(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => (starAnimate.value = entry.isIntersecting)), { threshold: 0.3 })
    moviesRef.value && io.observe(moviesRef.value)
  })
})
</script>
<style lang="scss" scoped></style>
