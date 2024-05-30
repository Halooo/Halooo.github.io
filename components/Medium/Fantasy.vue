<template>
  <div class="w-30%">
    <div class="mt-160 c1 opacity-0">
      <div ref="floorBox" class="text-26px PPHattonMedium">SCI-FI FANTASY</div>
      <ul class="text-xl mt-5 leading-10 PolySansSlim italic capitalize">
        <li class="flex items-center space-x-3">
          <span class="bg-white w-2 h-2 rounded-full"></span>
          <span class="whitespace-nowrap">Hunting Season</span>
        </li>
        <li class="flex items-center space-x-3">
          <span class="bg-white w-2 h-2 rounded-full"></span>
          <span class="whitespace-nowrap">Here and Now and Then</span>
        </li>
        <li class="flex items-center space-x-3">
          <span class="bg-white w-2 h-2 rounded-full"></span>
          <span class="whitespace-nowrap">Untitled Malignant Prequel</span>
        </li>
        <li class="flex items-center space-x-3">
          <span class="bg-white w-2 h-2 rounded-full"></span>
          <span class="whitespace-nowrap">The Memory Lost In Space</span>
        </li>
        <li class="flex items-center space-x-3">
          <span class="bg-white w-2 h-2 rounded-full"></span>
          <span class="whitespace-nowrap">Project Human</span>
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
    tl.fromTo('.c1', { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 2 })
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
