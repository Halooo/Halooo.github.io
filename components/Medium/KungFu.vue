<template>
  <div class="w-30%">
    <div class="mt-120 b1 opacity-0">
      <div ref="floorBox" class="text-26px PPHattonMedium">KUNG FU</div>
      <ul class="text-xl mt-5 leading-8 PolySansSlim italic capitalize">
        <li class="flex items-center space-x-3">
          <span class="bg-white w-2 h-2 rounded-full"></span>
          <span class="whitespace-nowrap">Mr. Lang Trilogy</span>
        </li>
        <li class="flex items-center space-x-3">
          <span class="bg-white w-2 h-2 rounded-full"></span>
          <span class="whitespace-nowrap">Tony Jaa's Assassin</span>
        </li>
        <li class="flex items-center space-x-3">
          <span class="bg-white w-2 h-2 rounded-full"></span>
          <span class="whitespace-nowrap">Pirate Queen</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
const starAnimate = ref<boolean>(false)
const floorBox = ref<any>(null)

watchEffect(() => {
  if (starAnimate.value) {
    const tl = gsap.timeline()
    tl.fromTo('.b1', { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 2 })
  }
})

onMounted(() => {
  nextTick(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => (starAnimate.value = entry.isIntersecting)), { threshold: 0.3 })
    floorBox.value && io.observe(floorBox.value)
  })
})
</script>
<style lang="scss" scoped></style>
