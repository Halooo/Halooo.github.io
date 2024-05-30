<template>
  <div ref="floorBox" class="pt-32">
    <div class="w-full relative">
      <div class="absolute top-0 left-0 w-full px-50px">
        <div class="max-w-1300px mx-auto">
          <div class="space-y-8">
            <div class="font-medium text-5xl PPHattonMedium">Prizes</div>
            <img src="/images/icon/ellipse.png" class="h-12 block" />
            <div class="animation7 font-light text-lg PolySansSlim">A total of 150,000 USD will be given to the <br />following award recipients</div>
          </div>
        </div>
      </div>

      <img src="~/assets/images/grant/emicircle.png" class="w-11/12 mx-auto object-center -z-1" />
      <div class="w-full h-full grid grid-cols-3 gap-x-9 absolute bottom-0 left-0 text-black lg:px-56 px-16">
        <div class="h-full flex items-end">
          <div class="w-full h-30% flex flex-col justify-end prizes_shadow px-9 py-6 space-y-12">
            <span class="font-medium text-26px PPHattonMedium whitespace-nowrap">Creative Sparks <br />Award</span>
            <span class="font-light text-lg PolySansSlim">$35,000 total</span>
          </div>
        </div>
        <div class="h-full flex items-end">
          <div class="w-full h-50% flex flex-col justify-end prizes_shadow px-9 py-12 space-y-12">
            <span class="font-medium text-26px PPHattonMedium whitespace-nowrap">Illuminating <br />Award</span>
            <span class="font-light text-lg PolySansSlim">$49,000 total</span>
          </div>
        </div>
        <div class="h-full flex items-end">
          <div class="w-full h-100% flex flex-col justify-end prizes_shadow px-9 py-12 space-y-12">
            <span class="font-medium text-26px PPHattonMedium whitespace-nowrap">Supernova <br />Award</span>
            <span class="font-light text-lg PolySansSlim">$66,000 total</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
const starAnimate = ref<boolean>(false)
const floorBox = ref<any>(null)
onMounted(() => {
  nextTick(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => (starAnimate.value = entry.isIntersecting)), { threshold: 0.3 })
    floorBox.value && io.observe(floorBox.value)
  })
})

watchEffect(() => {
  if (starAnimate.value) {
    gsap.fromTo('.animation7', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'linear' })
  }
})
</script>

<style lang="scss" scoped>
.prizes_shadow {
  background: linear-gradient(90deg, #fff 26.56%, rgba(255, 255, 255, 0) 100%);
}
</style>
