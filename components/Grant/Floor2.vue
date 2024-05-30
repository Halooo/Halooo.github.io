<template>
  <div ref="floorBox" class="pt-32">
    <div class="w-full space-y-3 mb-14">
      <div class="font-medium text-5xl PPHattonMedium">Prompts</div>
      <img src="/images/icon/ellipse.png" class="h-12 block" />
    </div>
    <div class="grid grid-cols-2 gap-x-5 animation2">
      <div class="relative">
        <img src="~/assets/images/grant/grt_probg1.png" alt="" class="w-full block" />
        <div class="p-13 absolute inset-0 w-full h-full space-y-13">
          <div class="font-medium text-4xl PPHattonMedium">Nvgui</div>
          <div class="font-light lg:text-lg PolySansNeutral">
            For thousands of years, we have found fear and tranquility within the delicate veil between life and death. This thin veil stimulates our curiosity about death and our attachment to life.
            What kind of world lies beyond that veil if life does not end with death? In this thrilling horror series, we’ll explore the relationship between the living and the dead through the eyes
            of female ghosts.
          </div>
        </div>
      </div>
      <div class="relative">
        <img src="~/assets/images/grant/grt_probg2.png" alt="" class="w-full block" />
        <div class="p-13 absolute inset-0 w-full h-full space-y-13">
          <div class="font-medium text-4xl PPHattonMedium">Kungfu</div>
          <div class="font-light lg:text-lg PolySansNeutral">
            Kung Fu is more than a style of martial art – t is the pursuit of excellence of both the body and the mind. It could be peaceful but is just as likely to be deadly. From the foot of the
            Wudang Mountains to the red carpet of Hollywood, the enduring popularity of Kung Fu has continued to bloom in the new age.
          </div>
        </div>
      </div>
    </div>
    <div class="linear_gradient1 py-18 px-14 mt-5 space-y-12 animation3">
      <div class="font-medium text-4xl PPHattonMedium">Action-oriented stories</div>
      <div class="font-light lg:text-lg PolySansNeutral">Don’t let the prompt confine you, let your stories be heard.</div>
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
    gsap.fromTo('.animation2', { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
    gsap.fromTo('.animation3', { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
  }
})
</script>

<style lang="scss" scoped>
.linear_gradient1 {
  background: linear-gradient(135deg, rgba(206, 0, 173, 0.8) 0%, rgba(212, 171, 0, 0.74) 100%);
}
</style>
