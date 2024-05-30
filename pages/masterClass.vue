<template>
  <div>
    <NuxtLayout name="home">
      <div class="w-full h-full fixed top-0 left-0 overflow-y-auto">
        <div class="px-50px h-screen relative">
          <video-player
            src="https://www.starscollective.com/assets/videos/pc/SC-About-Color-final-1.webm"
            muted
            autoplay
            loop
            playsinline
            class="absolute inset-0 w-full h-full z-1 player-video"
          ></video-player>
          <div class="max-w-1300px mx-auto h-full flex flex-col justify-center items-center relative z-10">
            <div class="title-gradient text-48px PPHattonMedium">Stars Collective Lab</div>
            <div class="PolySansSlim text-lg font-light mt-10 text-center">
              Stars Collective Lab is a destination to learn and connect with industry leaders <br />
              with <span class="gradient-text1 font-extrabold">Think Like A Master</span> program, full of informative and enlightening classes <br />
              from world-renowned masters; <span class="gradient-text2 font-extrabold">Seminars and Workshops</span> led by trailblazing <br />
              mentors in the film and art industry; <span class="gradient-text3 font-extrabold">Stars Talk series</span>, a gateway for notable <br />
              up-and-coming talent to be heard and seen. This is exclusive to the Stars <br />
              Collective community and accessible to anyone looking to fine-tune their craft.
            </div>
            <div class="flex justify-center items-center mt-15">
              <div class="relative cursor-pointer vector-box PolySansSlim drop-shadow" @click="navigateTo('/grant')">
                <img src="~/assets/images/grant/button.png" alt="" class="h-40 relative" />
                <img src="~/assets/images/grant/button2.png" alt="" class="absolute top-1/2 left-1/2 w-full h-full -z-1 vector-scale" />
                <img src="~/assets/images/grant/button3.png" alt="" class="absolute top-1/2 left-1/2 w-full h-full -z-2 vector-scale1" />
                <div class="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col justify-center items-center">
                  <div class="text-sm font-normal">O P E N</div>
                  <div class="text-lg font-bold">SC Grant</div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute bottom-10 left-50px z-10 w-full">
            <div class="w-220 flex justify-between PolySansSlim">
              <div class="tab-item text-26px" :class="[{ active: current === 1 }]" @click="handleCurrentChange(1)">Think Like A Master</div>
              <div class="tab-item text-26px" :class="[{ active: current === 2 }]" @click="handleCurrentChange(2)">Seminars and Workshops</div>
              <div class="tab-item text-26px" :class="[{ active: current === 3 }]" @click="handleCurrentChange(3)">Stars Talk</div>
            </div>
          </div>
        </div>

        <div class="relative w-full overflow-hidden">
          <img src="https://www.starscollective.com/assets/images/pc/master/left1.png" alt="" class="absolute left-0 top-0 w-40% block" />
          <img src="https://www.starscollective.com/assets/images/pc/master/right1.png" alt="" class="w-full block" />
          <div class="absolute top-0 left-0 w-full h-full z-10">
            <div class="max-w-1300px mx-auto h-full relative">
              <div class="absolute top-2/5 left-10 -translate-y-1/2">
                <div class="text-77px PPHattonMedium coming-soon">
                  Coming <br />
                  Soon
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-20">
          <Grant />
        </div>
        <div class="flex justify-center py-20">
          <div class="btn gradient-btn" @click="navigateTo('/grant')">
            <div>View Grant</div>
          </div>
        </div>

        <!-- <template v-if="current === 1">
        <template v-if="masterList.length === 0">
          <div class="relative w-full overflow-hidden">
            <img :src="`/images/master/left1.png`" alt="" class="absolute left-0 top-0 w-40% block" />
            <img :src="`/images/master/right1.png`" alt="" class="w-full block" />
            <div class="absolute top-0 left-0 w-full h-full z-10">
              <div class="max-w-1300px mx-auto h-full relative">
                <div class="absolute top-2/5 left-10 -translate-y-1/2">
                  <div class="text-77px PPHattonMedium coming-soon">
                    Coming <br />
                    Soon
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-20">
            <Grant />
          </div>
          <div class="flex justify-center py-20">
            <div class="btn gradient-btn" @click="navigateTo('/grant')">
              <div>View Grant</div>
            </div>
          </div>
        </template>

        <div v-if="masterList.length > 0">
          <div v-if="masterInfo" class="relative w-full overflow-hidden">
            <img :src="`/images/master/left${masterInfo.number}.png`" alt="" class="absolute left-0 top-0 w-40% block" />
            <img :src="`/images/master/right${masterInfo.number}.png`" alt="" class="w-full block" />
            <div class="absolute top-0 left-0 w-full h-full z-10">
              <div class="relative w-full h-full">
                <img :src="masterInfo.cover_avatar" alt="" class="absolute left-0 bottom-0 h-75%" />
                <div class="absolute bottom-15 right-5 w-full">
                  <div class="max-w-1300px mx-auto mt-10 flex justify-end">
                    <div class="w-40%">
                      <div class="text-77px PPHattonMedium whitespace-nowrap">
                        Thinking Like <br />
                        Master
                      </div>
                      <img src="/images/icon/ellipse.png" class="h-20 block" />
                      <div class="PolySansSlim text-3xl w-80% mt-10 line-clamp-3 capitalize">{{ masterInfo.name }}</div>
                      <div class="PolySansSlim text-sm mt-5 uppercase">{{ masterInfo.first_name }}{{ masterInfo.last_name }}</div>
                      <div class="btn gradient-btn mt-10" @click="navigateTo(`/videoIframe?url=${masterInfo.url}`)">
                        <div>Enter FOOTAGE</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Swiper class="py-30" v-bind="SwiperConfig">
            <SwiperSlide v-for="(item, index) in masterList" :key="index" class="!w-auto">
              <div class="w-160 relative overflow-hidden">
                    <img :src="`/images/master/left${item.number}.png`" alt="" class="absolute left-0 top-0 w-40% block" />
                    <img :src="`/images/master/right${item.number}.png`" alt="" class="w-full block" />
                    <div class="absolute top-5 left-5 text-xs font-normal uppercase PolySansSlim">MASTER CLASS</div>
                    <div class="absolute top-0 left-0 w-full h-full z-10">
                      <div class="relative w-full h-full">
                        <img :src="item.cover_avatar" alt="" class="absolute left-0 bottom-0 h-75%" />
                        <div class="absolute bottom-10 right-10 flex justify-end">
                          <div class="w-55%">
                            <div class="text-35px PPHattonMedium">{{ padZero(index + 1) }}</div>
                            <div class="PolySansSlim text-lg mt-5 line-clamp-3 capitalize">{{ item.name }}</div>
                            <div class="PolySansSlim text-sm mt-5 uppercase">{{ item.first_name }}{{ item.last_name }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>    
            </SwiperSlide>
          </Swiper>

        </div>
      </template>

      <template v-if="current === 2">
        <div class="px-50px pb-30">
          <div class="max-w-1300px mx-auto">
            <div class="grid grid-cols-1 gap-10">
              <div v-for="(item, index) in workshops" :key="index" class="card-box rounded-5px overflow-hidden cursor-pointer">
                <img :src="item.banner_image" alt="" class="w-full h-350px object-cover" />
                <div class="py-10 px-30 PolySansSlim text-black">
                  <div class="text-25px font-normal">{{ item.title }}</div>
                  <div class="flex justify-between items-end mt-5">
                    <div class="space-y-2">
                      <div class="text-lg font-semibold">{{ item.author }}</div>
                      <div class="uppercase font-normal">{{ item.career }}</div>
                    </div>
                    <div class="card-join-btn flex items-center space-x-2 cursor-pointer" @click="navigateTo(`${item.url}`, { external: true })">
                      <span class="font-normal">JOIN NOW</span>
                      <Icon name="mdi:arrow-top-right" size="18"></Icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-if="current === 3">
        <div class="px-50px pb-30">
          <div class="max-w-1300px mx-auto relative z-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div v-for="(item, index) in dataList" :key="index" class="rounded-md bg-#151515 cursor-pointer" @click="navigateTo(`/videoIframe?url=${item.url}`)">
                <img :src="item.cover_image" alt="" class="w-full" />
                <div class="p-5 space-y-5">
                  <div class="text-2xl PolySansSlim capitalize">{{ item.name }}</div>
                  <div class="flex space-x-5">
                    <div class="w-15 h-15 rounded-full">
                      <img :src="item.cover_avatar" alt="" class="w-full h-full rounded-full object-cover" />
                    </div>
                    <div class="flex-1 text-lg PolySansSlim space-y-1">
                      <div>{{ item.first_name }}{{ item.last_name }}</div>
                      <div class="flex justify-between items-center">
                        <div class="uppercase text-sm">{{ item.type }}</div>
                        <div class="text-#616161">{{ item.times_text }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template> -->

        <div class="px-50px pb-50">
          <div class="max-w-1300px mx-auto relative z-100">
            <div class="w-full flex justify-between items-center PPHattonMedium">
              <div class="flex items-center cursor-pointer" @click="navigateTo('/event')">
                <img src="/images/icon/Chevron_Left1.png" alt="" class="w-12" />
                <div class="left-btn text-35px">Events</div>
              </div>
              <!-- <div class="flex items-center cursor-pointer" @click="navigateTo('/festivals')">
              <div class="right-btn text-35px">Film Festivals</div>
              <img src="/images/icon/Chevron_Right2.png" alt="" class="w-12" />
            </div> -->
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
<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
const masterList = ref<any[]>([])
const current = ref<number>(1)
const masterIndex = ref<number>(0)
const dataList = ref<any[]>([])
const workshops = ref<any[]>([])

const masterInfo = computed(() => {
  if (masterList.value.length === 0) return null
  return masterList.value[masterIndex.value]
})

const handleCurrentChange = (num) => {
  if (num === 1) getapiindexmasterClass()
  if (num === 2) getapiindexworkshop()
  if (num === 3) getapiindexstarTalk()
  current.value = num
}

const getapiindexworkshop = async () => {
  const res = await apiindexworkshop()
  if (process.client) console.log('Seminars and Workshops', res)
  workshops.value = res.data
}

const getapiindexstarTalk = async () => {
  const res = await apiindexstarTalk()
  if (process.client) console.log('starTalk', res)
  dataList.value = res.data
}

const SwiperConfig = reactive<any>({
  slidesPerView: 'auto',
  spaceBetween: 20
})

const getapiindexmasterClass = async () => {
  const res = await apiindexmasterClass()
  if (process.client) console.log('大师班', res)
  masterList.value = res.data.map((v) => {
    v.number = arrayRandom([1, 2, 3, 4])
    return v
  })
}

onMounted(async () => {
  await nextTick()
  getapiindexmasterClass()
})
</script>
<style lang="scss" scoped>
.title-gradient {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(270deg, #ff00d6 0%, #7b61ff 70.88%, #7193ea 96.61%);
}
.gradient-text1 {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(270deg, #738bed 0%, #7777f6 70.88%, #825cfd 96.61%);
}
.gradient-text2 {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(270deg, #944ff8 0%, #af3bef 70.88%, #af3bef 96.61%);
}
.gradient-text3 {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(270deg, #c22ee9 0%, #d71ee3 70.88%, #e712de 96.61%);
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

.vector-box {
  .vector-scale {
    transform: translate(-50%, -50%) scale(1.1);
    transition: all 0.5s ease;
  }
  .vector-scale1 {
    transform: translate(-50%, -50%) scale(1);
    transition: all 0.5s ease;
  }
  &:hover {
    .vector-scale {
      transform: translate(-50%, -50%) scale(1.5);
    }
    .vector-scale1 {
      transform: translate(-50%, -50%) scale(1.5);
    }
  }
}

.tab-item {
  position: relative;
  color: #f5f5f5;
  cursor: pointer;

  &::before {
    position: absolute;
    content: '';
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #2f2f2f;
  }
  &.active {
    color: transparent;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(89.96deg, #3274ff 3.07%, #dde6e9 112.82%);

    &::before {
      background: linear-gradient(89.96deg, #3274ff 3.07%, #dde6e9 112.82%);
    }
  }
}

.card-box {
  background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.67) 100%);
  .card-join-btn {
    background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.15) 100%);
  }
}
.coming-soon {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(89.96deg, #3274ff 3.07%, #dde6e9 112.82%);
}
</style>
