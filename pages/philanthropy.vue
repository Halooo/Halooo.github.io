<template>
  <div>
    <NuxtLayout name="home">
      <div class="w-full overflow-hidden">
        <div class="px-50">
          <div class="max-w-1300px mx-auto mt-100px">
            <div class="text-75px PPHattonMedium">Philanthropy</div>
            <img src="/images/icon/ellipse.png" class="h-20 block" />
          </div>
        </div>
        <div class="px-50 py-20">
          <div class="max-w-1300px mx-auto">
            <div class="flex justify-between items-center space-x-20">
              <div class="">
                <img src="~/assets/images/philanthropy/cover1.png" alt="" class="w-50" />
              </div>
              <div class="flex-1 text-2xl PolySansSlim">
                Stars Collective stands with Women In Film who advocates for and advances the careers of women working in the screen industries -- to achieve parity and transform culture.
              </div>
            </div>
          </div>
        </div>
        <img src="/images/icon/ribbon1.png" alt="" class="w-full" />
        <div class="px-50 py-20">
          <div class="max-w-1300px mx-auto">
            <div class="flex justify-between items-center space-x-20">
              <div class="flex-1 text-2xl PolySansSlim">
                Stars Collective supports SHKCO Foundation in sponsoring initiatives that help improve the lives of the underprivileged, nurture future leaders, and improve our environment.
              </div>

              <div class="">
                <img src="~/assets/images/philanthropy/cover2.png" alt="" class="w-50" />
              </div>
            </div>
          </div>
        </div>
        <img src="/images/icon/ribbon2.png" alt="" class="w-full" />
        <div class="py-20"></div>
        <div class="px-50px pb-10">
          <div class="max-w-1300px mx-auto relative z-100">
            <div class="w-full flex justify-between items-center" style="font-family: PPHattonMedium">
              <div class="flex items-center cursor-pointer" @click="navigateTo('/gala')">
                <img src="/images/icon/Chevron_Left1.png" alt="" class="w-12" />
                <div class="left-btn text-35px">SC Gala</div>
              </div>
              <div class="flex items-center cursor-pointer" @click="navigateTo('/event')">
                <div class="right-btn text-35px">Events</div>
                <img src="/images/icon/Chevron_Right2.png" alt="" class="w-12" />
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.left-btn {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(270deg, #2b38ea 0%, #7b61ff 44.63%, #aecefb 100.81%);
}
.right-btn {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(270deg, #ff00d6 0%, #7b61ff 70.88%, #7193ea 96.61%);
}
</style>
