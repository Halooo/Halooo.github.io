<template>
  <div ref="floorBox" class="pt-32">
    <div class="w-full space-y-3 mb-14">
      <div class="font-medium text-5xl PPHattonMedium">Submissions</div>
      <img src="/images/icon/ellipse.png" class="h-12 block" />
    </div>
    <div class="space-y-8 font-normal lg:text-lg PolySansNeutral animation4">
      <div>
        Ideas and concepts can be in any medium, including but not<br />
        limited to feature films, short films, XR, and series of artwork.
      </div>
      <div>
        You can submit your work through our online portal after<br />
        becoming a Star.
      </div>
    </div>
    <div class="grid grid-cols-4 mt-16 font-normal text-sm PolySansNeutral animation5">
      <div class="flex flex-col items-center justify-between space-y-3">
        <img src="~/assets/images/grant/submissions1.png" />
        <span class="font-semibold text-xs uppercase">feature films</span>
      </div>
      <div class="flex flex-col items-center justify-between space-y-3">
        <img src="~/assets/images/grant/submissions2.png" />
        <span class="font-semibold text-xs uppercase">short films</span>
      </div>
      <div class="flex flex-col items-center justify-between space-y-3">
        <img src="~/assets/images/grant/submissions3.png" />
        <span class="font-semibold text-xs uppercase">XR</span>
      </div>
      <div class="flex flex-col items-center justify-between space-y-3">
        <img src="~/assets/images/grant/submissions4.png" />
        <span class="font-semibold text-xs uppercase">series of artwork</span>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center space-y-10 mt-22 animation6">
      <div class="font-light text-lg PolySansNeutral text-#ffffff">already got Star account?</div>
      <!-- navigateTo('/account/Login') -->
      <div class="btn gradient-btn" @click="handleproposal">
        <div>Login to Submit</div>
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
    gsap.fromTo('.animation4', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'linear' })
    gsap.fromTo('.animation5', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'linear' })
    gsap.fromTo('.animation6', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'linear' })
  }
})

const user_store = useUserPinia()

const handleproposal = () => {
  if (user_store.getToken) {
    navigateTo('/user/proposal')
  } else {
    navigateTo('/account/Login')
  }
}
</script>
