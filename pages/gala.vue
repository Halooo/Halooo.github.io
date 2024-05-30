<template>
  <div>
    <NuxtLayout name="home">
      <div class="w-full overflow-hidden fixed inset-0 h-full overflow-y-auto">
        <div class="w-full">
          <div class="w-full h-screen relative">
            <video-player
              src="https://www.starscollective.com/assets/videos/pc/SC-About-Color-final-1.webm"
              muted
              autoplay
              loop
              playsinline
              class="absolute top-0 left-0 w-full h-screen player-video"
            ></video-player>
          </div>
          <div class="-mt-140 pb-50 flex justify-center">
            <div class="text-77px PPHattonMedium title-gradient">Stars Gala</div>
          </div>

          <div class="relative z-10 space-y-30 summit-bg">
            <div class="px-50px">
              <div class="max-w-1300px mx-auto">
                <div class="text-77px PPHattonMedium">Summit</div>
                <img src="/images/icon/ellipse.png" class="h-15 block" />
                <div class="text-2xl PolySansSlim mt-15">
                  An exciting and opportunity-filled summit awaits as hundreds of cross- <br />
                  industry leaders, come together from around the world. Together, we <br />
                  will explore the convergence of film, fashion, derivatives, technology, <br />
                  and finance, as well as their future development. This summit promises <br />
                  to be a revolutionary milestone in the world of venture capital.
                </div>
                <div v-for="(item, index) in 1" :key="index" class="w-full card-box px-32px py-32px mt-20 overflow-hidden">
                  <div class="flex justify-between">
                    <div class="max-w-480px text-35px min-w-365px PPHattonMedium">Summit</div>
                  </div>
                  <div class="flex justify-between mt-5">
                    <div class="text-lg font-semibold PolySansSlim">Coming this November</div>
                  </div>

                  <div class="h-463px w-full mt-50px relative">
                    <img src="https://www.starscollective.com/assets/images/event/unsplash_card.png" class="w-full h-full object-cover" />
                    <!-- <div class="btn gradient-btn absolute bottom-10 right-10 z-10">
                    <div>LEARN MORE</div>
                  </div> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="px-50px py-30">
              <div class="max-w-1300px mx-auto">
                <div class="text-77px PPHattonMedium">
                  Charity <br />
                  Night
                </div>
                <img src="/images/icon/ellipse.png" class="h-15 block" />
                <div class="text-2xl PolySansSlim mt-15">
                  An exciting and opportunity-filled summit awaits as hundreds of cross- <br />
                  industry leaders, come together from around the world. Together, we <br />
                  will explore the convergence of film, fashion, derivatives, technology, <br />
                  and finance, as well as their future development. This summit promises <br />
                  to be a revolutionary milestone in the world of venture capital.
                </div>
                <div v-for="(item, index) in 1" :key="index" class="w-full card-box1 px-32px py-32px mt-20 overflow-hidden">
                  <div class="flex justify-between">
                    <div class="max-w-480px text-35px min-w-365px PPHattonMedium">Summit</div>
                  </div>
                  <div class="flex justify-between mt-5">
                    <div class="text-lg font-semibold PolySansSlim">Coming this November</div>
                  </div>
                  <div class="h-463px w-full mt-50px relative">
                    <img src="https://www.starscollective.com/assets/images/event/unsplash_QBmsRGqlueE.png" class="w-full h-full object-cover" />
                    <!-- <div class="btn gradient-btn absolute bottom-10 right-10 z-10">
                    <div>LEARN MORE</div>
                  </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="px-50px pt-80 pb-50">
          <div class="max-w-1300px mx-auto relative z-100">
            <div class="w-full flex justify-between items-center" style="font-family: PPHattonMedium">
              <!-- <div class="flex items-center cursor-pointer" @click="navigateTo('/festivals')">
              <img src="/images/icon/Chevron_Left1.png" alt="" class="w-12" />
              <div class="left-btn text-35px">Film Festivals</div>
            </div> -->
              <div class="flex items-center cursor-pointer" @click="navigateTo('/masterClass')">
                <img src="/images/icon/Chevron_Left1.png" alt="" class="w-12" />
                <div class="left-btn text-35px">SC Lab</div>
              </div>
              <div class="flex items-center cursor-pointer" @click="navigateTo('/philanthropy')">
                <div class="right-btn text-35px">Philanthropy</div>
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
<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'

const limit = ref<number>(30)
const total = ref<number>(0) //总数量
const current = ref<number>(1) //当前页
const eventResult = ref<any[]>([])

const currentPages = computed(() => {
  const start = limit.value * current.value - limit.value + 1
  const end = eventResult.value.length > 0 ? limit.value * current.value - limit.value + eventResult.value.length : ''
  return { start, end }
})

const curremtChange = (_current: number) => {
  current.value = _current

  getEventList()
}

// 获取事件列表
const getEventList = async () => {
  const { data } = await apiIndexEventList(current.value, limit.value)
  if (process.client) console.log('事件列表', data)
  eventResult.value = data.value.data.data
  total.value = data.value.data.total
}
getEventList()
</script>
<style lang="scss" scoped>
.card-box {
  background: linear-gradient(270deg, #8f87f3 0%, #7b61ff 0.01%, #502574 100.81%);
}
.card-box1 {
  background: linear-gradient(180deg, #1e28c7 2.61%, #476fff 45.97%, #00ffd1 99.67%);
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
  background-image: linear-gradient(270deg, #2b38ea 0%, #7b61ff 44.63%, #aecefb 100.81%);
}
.right-btn {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(270deg, #ff00d6 0%, #7b61ff 70.88%, #7193ea 96.61%);
}

.summit-bg {
  background-image: url('https://www.starscollective.com/assets/images/event/Background-all.png');
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
}

.night-bg {
  background-image: url('https://www.starscollective.com/assets/images/event/unsplash1.png');
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
}
</style>
