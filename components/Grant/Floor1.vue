<template>
  <div ref="floorBox" class="pt-32 space-y-6 flex flex-col justify-center items-center min-h-500px">
    <div class="font-medium text-5xl PPHattonMedium">Program Overview</div>
    <span class="animation1 font-light lg:text-lg PolySansNeutral md:text-sm text-center opacity-0">
      Unleashing Action Storytellings is an awards program designed to support and work with emerging<br />
      filmmakers and artists specializing in action-oriented stories. This program is for budding talents to refine <br />
      their skills, gain recognition, and ultimately propel their careers within the action film genre. The winners<br />
      will have the exciting opportunity to further develop their concepts into feature films or television series,<br />
      in collaboration with Stars Collective and its vast industry resources.
    </span>
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
    gsap.fromTo('.animation1', { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
  }
})
</script>
