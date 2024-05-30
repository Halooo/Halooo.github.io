<template>
  <div>
    <NuxtLayout name="home">
      <div class="w-full overflow-hidden">
        <div class="px-50">
          <div class="max-w-1300px mx-auto mt-100px">
            <div class="text-75px PPHattonMedium">Film Festivals</div>
            <img src="/images/icon/ellipse.png" class="h-20 block" />

            <div class="w-full grid grid-cols-1 gap-10 py-20">
              <div class="relative">
                <img src="~/assets/images/festivals/bg1.png" alt="" class="w-full" />
                <div class="absolute top-10 right-10 w-60% text-2xl z-10">Stars Collective and AWFF will work together to promote Asian cinema and expand its international influence.</div>
                <div class="absolute bottom-10 left-10">
                  <img src="~/assets/images/festivals/cover1.png" alt="" class="h-35" />
                </div>
              </div>
              <div class="relative">
                <img src="~/assets/images/festivals/bg2.png" alt="" class="w-full" />
                <div class="absolute top-10 right-10 w-60% text-2xl z-10">
                  The Sundance Institute and Stars Collective have partnered on the New Imagination Award that grants $25,000 each to three metaverse-based projects that show innovation in a rapidly
                  evolving mediascape.
                </div>
                <div class="absolute bottom-10 left-10">
                  <img src="~/assets/images/festivals/cover2.png" alt="" class="h-35" />
                </div>
              </div>
              <div class="relative">
                <img src="~/assets/images/festivals/bg3.png" alt="" class="w-full" />
                <div class="absolute top-10 right-10 w-60% text-2xl z-10">Stars Collective joins forces with SXSW to celebrate immersive filmmakers.</div>
                <div class="absolute bottom-10 left-10">
                  <img src="~/assets/images/festivals/cover3.png" alt="" class="h-35" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="px-50px pb-10">
          <div class="max-w-1300px mx-auto relative z-100">
            <div class="w-full flex justify-between items-center" style="font-family: PPHattonMedium">
              <div class="flex items-center cursor-pointer" @click="navigateTo('/masterClass')">
                <img src="/images/icon/Chevron_Left1.png" alt="" class="w-12" />
                <div class="left-btn text-35px">SC Lab</div>
              </div>
              <div class="flex items-center cursor-pointer" @click="navigateTo('/gala')">
                <div class="right-btn text-35px">SC Gala</div>
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
