<template>
  <div>
    <NuxtLayout name="home">
      <div class="w-full relative">
        <div class="px-50px relative">
          <div class="max-w-1300px mx-auto flex justify-center py-50">
            <div class="title-gradient text-77px PPHattonMedium">Merch & More</div>
          </div>
          <div class="relative fade_scale-border">
            <img src="~/assets/images/Rectangle273.png" alt="" class="w-full" />
            <div class="absolute inset-0 w-full h-full">
              <div class="max-w-1300px mx-auto h-full flex flex-col justify-between items-center">
                <div class="flex-1 flex justify-center items-center w-full px-5%">
                  <img src="~/assets/images/merch/Frame4186.png" alt="" class="h-14" />
                  <div class="h-3px flex-1 mx-10 merch-border"></div>
                  <img src="~/assets/images/merch/sMall.png" alt="" class="h-12" />
                </div>
                <div class="py-20 absolute bottom-0 left-0 w-full flex justify-center">
                  <button disabled class="btn gradient-btn mt-16">
                    <div>Coming Soon</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="max-w-1300px mx-auto flex justify-center pt-50 pb-20">
            <div class="flex justify-between space-x-10">
              <div>
                <div class="text-77px PPHattonMedium">MOC</div>
                <img src="/images/icon/ellipse.png" class="h-15 block" />
                <div class="btn gradient-btn mt-16" @click="navigateTo('https://www.mowanka.com/', { external: true })">
                  <div>Enter MOC</div>
                </div>
              </div>
              <div class="PolySansSlim text-lg font-light">
                MOC (Mo Keng) is a collectible figures e-commerce platform designed to facilitate the <br />
                exchange and exhibition of authentic collectible figures, as well as promote the ACG <br />
                (anime, comics, and games) community and subculture. The platform hosts a wide array <br />
                of high-end, officially licensed collectible products that capture the essence and spirit of <br />
                beloved characters. MOC also owns and operates the largest collectible museum in <br />
                China, the Mo Keng New Museum, where fans can further cultivate community and <br />
                celebrate their fandoms. In combining craftsmanship, artistry, and fandom in the form of <br />
                collectible figures, MOC provides a space for fans to come together and bring their <br />
                favorite stories to life.
              </div>
            </div>
          </div>
        </div>

        <img src="https://www.starscollective.com/assets/images/gif/SCMOC.gif" alt="" class="w-full" />

        <div class="px-50px relative py-20">
          <div class="text-77px text-center PPHattonMedium">Future Merch</div>
        </div>

        <video-player src="https://www.starscollective.com/assets/videos/pc/SCFutureMerch.webm" muted autoplay loop playsinline class="w-full"></video-player>

        <div class="px-50px py-50">
          <div class="max-w-1300px mx-auto relative z-100">
            <div class="w-full flex justify-between items-center PPHattonMedium">
              <div class="flex items-center cursor-pointer">
                <!-- @click="navigateTo('/metaverse')" -->
                <!-- <img src="/images/icon/Chevron_Left2.png" alt="" class="w-12" />
                <div class="left-btn text-35px">Metaverse</div> -->
              </div>
              <div class="flex items-center cursor-pointer" @click="navigateTo('/starsMovies')">
                <div class="right-btn text-35px">Cross-Medium Content</div>
                <img src="/images/icon/Chevron_Right.png" alt="" class="w-12" />
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
</script>
<style lang="scss" scoped>
.fade_scale-border {
  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(270deg, #ff00d6 0%, #7b61ff 70.88%, #7193ea 96.61%);
  border-image-slice: 2;
}

.merch-border {
  background: linear-gradient(270deg, #ff0000 0%, #ff00d6 19.43%, #7b61ff 89.78%);
}

.title-gradient {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(270deg, #ff00d6 0%, #7b61ff 70.88%, #7193ea 96.61%);
}

.left-btn {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(270deg, #af1425 0%, #f5ae7b 44.63%, #f56da6 100.81%);
}
.right-btn {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(270deg, #2b38ea 0%, #7b61ff 44.63%, #aecefb 100.81%);
}
</style>
