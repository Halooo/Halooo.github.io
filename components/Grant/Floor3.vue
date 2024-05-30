<template>
  <div class="pt-32">
    <div class="w-full space-y-3 mb-14">
      <div class="font-medium text-5xl PPHattonMedium">Participants</div>
      <img src="/images/icon/ellipse.png" class="h-12 block" />
    </div>
    <div class="linear_gradient2 py-18 px-14 flex items-center justify-between">
      <div class="font-medium text-6.5 PPHattonMedium">
        Exclusive to Stars Collective <span class="text-#ffffff underline px-1 cursor-pointer underline-offset-8" @click="navigateTo('/starslist')">Stars</span>.
      </div>
      <div class="btn gradient-btn" @click="navigateTo('/start/applicaiton')">
        <div>Apply Now</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.linear_gradient2 {
  // background: linear-gradient(90deg, #476fff 0.54%, #00ffd1 99.67%);
  background: linear-gradient(90deg, #0c1dc9 0.54%, #171332 99.67%);
}
</style>
