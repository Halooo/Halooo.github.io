<template>
  <div class="w-full overflow-hidden bg-black">
    <div class="px-50px text-18px leading-27px text-center py-10 PolySansNeutral font-light">
      <!-- Stars Collective is a filmmaker and artist incubator community committed to<br />Diversity, Innovation, and Empowerment. Founded in 2020, Stars<br />
      Collective aims to support filmmakers and artists from all over the world with <br />diverse backgrounds by connecting them with abundant resources to<br />
      maximize their artistic expression and full potential.  -->
      Founded in 2020 by Peter Luo, Stars Collective is a dynamic initiative <br />
      committed to <span class="font-semibold">Diversity</span>, <span class="font-semibold">Innovation</span>, and <span class="font-semibold">Empowerment</span> and to pushing the <br />
      boundaries of storytelling through the integration of breakthrough <br />
      technologies. Stars Collective has since expanded into other sectors of <br />
      entertainment, focusing on developing cross-medium content and fostering <br />
      multidisciplinary collaboration, in order to unlock new narrative frontiers and <br />
      redefine the storytelling landscape.
    </div>
    <video-player src="https://www.starscollective.com/assets/videos/pc/keywords.webm" muted autoplay loop playsinline class="w-full h-screen"></video-player>
    <div class="px-50px py-10">
      <div class="max-w-1300px mx-auto flex justify-between items-center">
        <div class="PolySansNeutral text-lg space-y-5 flex-1 min-w-680px">
          <div class="font-semibold">About Peter Luo</div>
          <div class="font-light">
            Best known for his director-first approach to film financing and passionate <br />
            advocacy for diverse representation in Hollywood, award-winning producer, <br />
            and Stars Collective founder Peter Luo remains at the forefront of innovation <br />
            in the entertainment space.
          </div>
        </div>
        <div class="relative">
          <Swiper class="w-90" v-bind="SwiperConfig">
            <SwiperSlide><img src="~/assets/images/home/Property1.png" alt="" class="w-full" /></SwiperSlide>
            <SwiperSlide><img src="~/assets/images/home/Property2.png" alt="" class="w-full" /></SwiperSlide>
            <SwiperSlide><img src="~/assets/images/home/Property3.png" alt="" class="w-full" /></SwiperSlide>
            <SwiperSlide><img src="~/assets/images/home/Property4.png" alt="" class="w-full" /></SwiperSlide>
            <SwiperSlide><img src="~/assets/images/home/Property5.png" alt="" class="w-full" /></SwiperSlide>
            <SwiperSlide><img src="~/assets/images/home/Property6.png" alt="" class="w-full" /></SwiperSlide>
          </Swiper>

          <div class="absolute inset-0 z-10 w-full h-full flex justify-center items-center">
            <div class="relative">
              <img src="~/assets/images/home/peter.png" alt="" class="w-65 mt-5" />
              <div class="absolute bottom-0 left-0 h-15 w-full peter-mask z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
const SwiperConfig = reactive<any>({
  modules: [SwiperAutoplay, SwiperEffectFade],
  speed: 250,
  autoplay: {
    delay: 0
  },
  loop: true,
  effect: 'fade'
})
</script>
<style lang="scss" scoped>
:deep(video) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.peter-mask {
  background: linear-gradient(360deg, #000000 11.67%, rgba(0, 0, 0, 0) 83.33%);
}
.peter-start1,
.peter-start2,
.peter-start3,
.peter-start4,
.peter-start5,
.peter-start6 {
  opacity: 0;
  animation-name: Smart;
  animation-iteration-count: infinite;
}
.peter-start1 {
  // opacity: 1;
}

.peter-start1 {
  // After delay
  animation-delay: 1ms;
  // Change to: "Variant6";
  // Animate: Smart animate;
  animation-timing-function: ease-out;
  animation-duration: 800ms;
}
.peter-start2 {
  // After delay
  animation-delay: 100ms;
  // Change to: "Variant4";
  // Animate: Smart animate;
  animation-timing-function: ease-in;
  animation-duration: 300ms;
}
.peter-start3 {
  // After delay
  animation-delay: 1ms;
  // Change to: "Variant4";
  // Animate: Smart animate;
  animation-timing-function: linear;
  animation-duration: 1200ms;
}
.peter-start4 {
  // After delay
  animation-delay: 1ms;
  // Change to: "Variant5";
  // Animate: Smart animate;
  animation-timing-function: ease-in;
  animation-duration: 600ms;
}
.peter-start5 {
  // After delay
  animation-delay: 100ms;
  // Change to: "Variant4";
  // Animate: Smart animate;
  // Spring: { mass: 1, stiffness: 80, damping: 20 };
}
.peter-start6 {
  // After delay
  animation-delay: 1ms;
  // Change to: "Variant5";
  // Animate: Smart animate;
  animation-timing-function: linear;
  animation-duration: 600ms;
}

@keyframes Smart {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
