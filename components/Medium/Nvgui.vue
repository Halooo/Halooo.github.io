<template>
  <div class="w-30%">
    <div class="text-lg PolySansSlim">
      Uncovering the possibilities of storytelling <br />
      in different mediums by pushing the <br />
      boundaries of traditional filmmaking
    </div>
    <div class="mt-120 a1 opacity-0">
      <div ref="floorBox" class="text-26px PPHattonMedium">NVGUI</div>
      <ul class="text-xl mt-5 leading-8 PolySansSlim italic capitalize">
        <li class="flex items-center space-x-3">
          <span class="bg-white w-2 h-2 rounded-full"></span>
          <span class="whitespace-nowrap">Oirans series</span>
        </li>
        <li class="flex items-center space-x-3">
          <span class="bg-white w-2 h-2 rounded-full"></span>
          <span class="whitespace-nowrap">Vampires</span>
        </li>
        <li class="flex items-center space-x-3">
          <span class="bg-white w-2 h-2 rounded-full"></span>
          <span class="whitespace-nowrap">Painted Skin</span>
        </li>
        <li class="flex items-center space-x-3">
          <span class="bg-white w-2 h-2 rounded-full"></span>
          <span class="whitespace-nowrap">AI Killer</span>
        </li>
        <li class="flex items-center space-x-3">
          <span class="bg-white w-2 h-2 rounded-full"></span>
          <span class="whitespace-nowrap">PONTIKANA</span>
        </li>
        <li class="flex items-center space-x-3">
          <span class="bg-white w-2 h-2 rounded-full"></span>
          <span class="whitespace-nowrap">Candy</span>
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
    tl.fromTo('.a1', { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 2 })
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
