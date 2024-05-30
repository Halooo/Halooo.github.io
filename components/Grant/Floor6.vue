<template>
  <div ref="floorBox" class="pt-32 space-y-23 pb-50">
    <div class="flex flex-col items-center justify-center text-center py-40">
      <div class="text-5xl PPHattonMedium text-#f5f5f5">Winners</div>
      <div class="text-lg PolySansSlim max-w-640px mt-5">
        We will be announcing winners every three months, starting in September 2023 and continuing until all the cash rewards have been distributed.
      </div>
    </div>

    <div class="flex flex-wrap items-center justify-between">
      <div class="w-fit mr-20">
        <div class="font-medium text-5xl PPHattonMedium">Deadline</div>
        <img src="/images/icon/ellipse.png" class="h-12 block" />
        <div class="mt-14 mb-9 font-light text-lg PolySansSlim animation8">
          The deadline for submissions is [July, 2024] or until the <br />
          cash rewards have been distributed, whichever comes first.
        </div>
        <div class="font-light text-lg PolySansSlim underline underline-offset-4 cursor-pointer" @click="navigateTo('/start/terms')">Terms and conditions may apply</div>
        <!-- <div>
          <div v-if="isHide" class="text-show font-light text-lg PolySansSlim text-white">
            In the event your property is selected your property will be<br />
            subject to development under the terms of the MOU executed <br />
            upon admission into the Stars Collective program.
          </div>
          <div class="cursor-pointer space-x-1 mt-2" @click="isHide = !isHide">
            <span>{{ isHide ? 'Hide' : 'Show Detail ' }}</span>
            <Icon name="ep:arrow-down-bold" size="16" :class="isHide ? 'rotate-180' : ''" />
          </div>
        </div> -->
      </div>
      <div class="flex-1 flex items-cente space-x-6 text-black">
        <div class="bg-#E0E0E0 w-29 h-33 flex flex-col items-center justify-between pt-6 pb-3 rounded">
          <span class="font-medium text-5xl PPHattonMedium">{{ timeArr.nDays }}</span>
          <span class="font-normal text-sm PolySansSlim uppercase">Days</span>
        </div>
        <div class="bg-#E0E0E0 w-29 h-33 flex flex-col items-center justify-between pt-6 pb-3 rounded">
          <span class="font-medium text-5xl PPHattonMedium">{{ timeArr.nHours }}</span>
          <span class="font-normal text-sm PolySansSlim uppercase">Hours</span>
        </div>
        <div class="bg-#E0E0E0 w-29 h-33 flex flex-col items-center justify-between pt-6 pb-3 rounded">
          <span class="font-medium text-5xl PPHattonMedium">{{ timeArr.nMinutes }}</span>
          <span class="font-normal text-sm PolySansSlim uppercase">Minutes</span>
        </div>
        <div class="bg-#E0E0E0 w-29 h-33 flex flex-col items-center justify-between pt-6 pb-3 rounded">
          <span class="font-medium text-5xl PPHattonMedium">{{ timeArr.nSeconds }}</span>
          <span class="font-normal text-sm PolySansSlim uppercase">Seconds</span>
        </div>
      </div>
    </div>
    <div class="text-center font-light text-lg PolySansSlim">
      For questions please reach out at
      <a href="mailto:hello@starscollective.com" class="underline underline-offset-2">hello@starscollective.com</a>
    </div>
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
const starAnimate = ref<boolean>(false)
const floorBox = ref<any>(null)
const isHide = ref<boolean>(false)
const timeArr = ref({
  nDays: '',
  nHours: '',
  nMinutes: '',
  nSeconds: ''
})
onMounted(() => {
  nextTick(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => (starAnimate.value = entry.isIntersecting)), { threshold: 0.3 })
    floorBox.value && io.observe(floorBox.value)
  })

  countdown()
})

watchEffect(() => {
  if (starAnimate.value) {
    gsap.fromTo('.animation8', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'linear' })
  }
})

// 倒计时
const countdown = () => {
  setInterval(() => {
    const { nDays, nHours, nMinutes, nSeconds } = betweenDays('2024-07-31 23:59:59')
    timeArr.value.nDays = (nDays < 10 ? '0' : '') + nDays
    timeArr.value.nHours = (nHours < 10 ? '0' : '') + nHours
    timeArr.value.nMinutes = (nMinutes < 10 ? '0' : '') + nMinutes
    timeArr.value.nSeconds = (nSeconds < 10 ? '0' : '') + nSeconds
  }, 1000)
}
// 剩余时间计算
const betweenDays = (strEndTime) => {
  var dtmEndTime = new Date(strEndTime)
  var dtmNow = new Date()
  var objBetween = { nDays: 0, nHours: 0, nMinutes: 0, nSeconds: 0 }
  var nDifference = dtmEndTime.getTime() - dtmNow.getTime()
  if (nDifference > 0) {
    objBetween.nSeconds = Math.floor(nDifference / 1000)
    objBetween.nMinutes = Math.floor(objBetween.nSeconds / 60)
    objBetween.nHours = Math.floor(objBetween.nMinutes / 60)
    objBetween.nDays = Math.floor(objBetween.nHours / 24)
    objBetween.nSeconds = objBetween.nSeconds % 60
    objBetween.nMinutes = objBetween.nMinutes % 60
    objBetween.nHours = objBetween.nHours % 24
  }
  return objBetween
}
</script>
<style lang="scss">
.text-show {
  grid-template-rows: 1fr;
}
</style>
