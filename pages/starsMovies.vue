<template>
  <div>
    <NuxtLayout name="home">
      <div class="w-full overflow-hidden">
        <div class="w-full overflow-hidden relative z-10" style="height: calc(100vh - 138px)">
          <!-- <iframe height="100%" width="100%" frameborder="0" allow="autoplay;fullscreen; picture-in-picture" :src="fileVideoUrl(videoSrc)"></iframe> -->
          <video-player src="https://www.starscollective.com/assets/videos/pc/sc_IP.webm" muted autoplay loop playsinline class="w-full h-full"></video-player>
        </div>

        <div class="w-full mt-8 relative z-10">
          <SwiperLoop offset="left" :width="246" :list="moviesTopResult">
            <div v-for="(item, index) in moviesTopResult" :key="index" class="inline-block cursor-pointer swiper-item-box w-246px inline-flex flex-col" @click="handleLinkOpen(item)">
              <el-image :src="item.poster_image" class="w-full h-365px" fit="cover" />
              <div class="text-26px mt-10 mb-3 PPHattonMedium whitespace-pre-wrap">{{ item.name }}</div>
            </div>
          </SwiperLoop>
        </div>

        <div class="max-w-1300px px-50px mx-auto mt-164px relative z-10">
          <div class="text-75px PPHattonMedium">Stars Collective <br />Indies</div>
          <img src="/images/icon/ellipse.png" class="h-15 block" />
          <div class="w-full grid grid-cols-2 gap-y-15 gap-x-4 min-w-600px md:grid-cols-3 mt-10">
            <div v-for="(item, index) in moviesResult" :key="index">
              <el-image :src="item.poster_image" class="w-full h-209px" fit="cover" />
              <div class="text-35px font-medium my-4 PPHattonMedium">{{ item.name }}</div>
              <div v-for="(item2, index2) in item.information_arr" :key="index2" class="text-15px mb-4 w-3/5" v-html="item2"></div>
              <div class="flex text-black justify-between h-17px bg-#ffffff w-135px items-center my-4 cursor-pointer" @click="handleOpenMore(item.id)">
                <div class="text-14px tracking-2.1px uppercase">learn MORE</div>
                <Icon v-if="!item.isOpen" name="ph:caret-down" class="w-18px h-18px"></Icon>
                <Icon v-else name="ph:caret-up" class="w-18px h-18px"></Icon>
              </div>
              <div v-if="item.isOpen" class="w-full h-auto mb-4 text-[rgb(146,146,146)] leading-6">{{ item.introduce }}</div>
              <div v-if="item.link" class="flex">
                <div class="watch-now flex cursor-pointer p-2px space-x-2" @click="handleLink(item.link)">
                  <div class="uppercase">watch now</div>
                  <Icon name="mdi:arrow-top-right" size="20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="max-w-1300px px-50px mx-auto pt-30 relative z-10">
            <div class="text-75px PPHattonMedium">Upcomings</div>
            <img src="/images/icon/ellipse.png" class="h-15 block" />
            <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 pb-120">
              <div v-for="(item, index) in upcomingsList" :key="index" class="flex items-center space-x-3">
                <div class="bg-white w-3 h-3"></div>
                <div class="PolySansSlim text-xl">{{ item.name }}</div>
              </div>
            </div>
          </div>
          <img src="https://www.starscollective.com/assets/images/pc/movies/Upcoming-Movies.png" alt="" class="absolute bottom-0 left-0 w-full" />
        </div>

        <div class="w-full relative">
          <div class="max-w-1536px w-full absolute top-50 left-1/2 -translate-x-1/2">
            <img src="https://www.starscollective.com/assets/images/pc/movies/Cross-Medium1.png" alt="" class="block w-full" />
          </div>
          <div class="px-50px w-full relative pt-50 z-100">
            <div class="max-w-1300px mx-auto relative z-100 flex justify-between">
              <div class="w-60%">
                <div class="w-full overflow-hidden h-0 pb-50% relative">
                  <video-player src="https://www.starscollective.com/assets/videos/pc/cross-medium.webm" muted autoplay loop playsinline class="w-full h-full absolute inset-0"></video-player>
                </div>
                <div class="flex justify-center items-end pt-20 space-x-20">
                  <img src="~/assets/images/home/icon2.png" alt="" class="h-20" />
                  <img src="~/assets/images/home/icon3.png" alt="" class="h-20" />
                  <img src="~/assets/images/home/icon1.png" alt="" class="h-20" />
                </div>
              </div>
              <MediumNvgui></MediumNvgui>
            </div>
            <div class="max-w-1300px mx-auto relative z-100 flex justify-start">
              <MediumKungFu></MediumKungFu>
            </div>
            <div class="max-w-1300px mx-auto relative z-100 flex justify-end">
              <MediumCriminalGenius></MediumCriminalGenius>
            </div>
            <div class="max-w-1300px mx-auto relative z-100 flex justify-start">
              <MediumFantasy></MediumFantasy>
            </div>
          </div>

          <div class="px-50px py-50 pt-250">
            <div class="max-w-1300px mx-auto relative z-100">
              <div class="w-full flex justify-between items-center PPHattonMedium">
                <div class="flex items-center cursor-pointer">
                  <!-- @click="navigateTo('/metaverse')" -->
                  <!-- <div class="right-btn text-35px">Metaverse</div>
                  <img src="/images/icon/Chevron_Right1.png" alt="" class="w-12" /> -->
                </div>
                <div class="flex items-center cursor-pointer" @click="navigateTo('/merch')">
                  <div class="right-btn text-35px">Merch</div>
                  <img src="/images/icon/Chevron_Right2.png" alt="" class="w-12" />
                </div>
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
const current = ref<number>(1)
const page_size = ref<number>(20)
const moviesResult = ref<any[]>([])
const moviesTopResult = ref<any[]>([])
const moviesBannerResult = ref<any[]>([])

const upcomingsList = ref<any[]>([
  { name: 'Golden' },
  { name: 'The Goxfather' },
  { name: 'The Pigeon' },
  { name: 'The Burden' },
  { name: 'The Troop' },
  { name: 'Scorpion' },
  { name: 'Gold Mountain' },
  { name: 'Sophia of Silicon Valley' },
  { name: 'In the Shadow of the Mountain' }
])

// 展开更多
const handleOpenMore = (_id: number) => {
  moviesResult.value.forEach((item) => {
    if (item.id == _id) item.isOpen = !item.isOpen
  })
}

// 跳转外部链接
const handleLink = (_url: string) => {
  window.open(_url, '_black')
}
const handleLinkOpen = (item) => {
  window.open(item.link, '_black')
}

//获取头部电影
const getTopMovie = async () => {
  const { data } = await apiIndexMoviesPast()
  if (process.client) console.log('电影-过去', data.value)
  moviesTopResult.value = data.value.data

  // if (moviesTopResult.value.length != 0) {
  //   videoSrc.value = moviesTopResult.value[0].link
  // }
}

// 获取电影
const getMovieResult = async () => {
  const { data } = await apiIndexMoviesNow(current.value, page_size.value)
  if (process.client) console.log('电影-现在', data.value)
  moviesResult.value = data.value.data.data.map((item) => {
    item.information_arr = item.information.split('\n')
    item.isOpen = false
    return item
  })
}

// 获取元宇宙故事
const getMovieBanner = async () => {
  const { data } = await apiIndexMetaverseStories()
  if (process.client) console.log('元宇宙故事', data.value)
  moviesBannerResult.value = data.value.data
}

getTopMovie()
getMovieResult()
getMovieBanner()
</script>
<style lang="scss" scoped>
:deep(video) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-item-box {
  &:hover {
    color: transparent;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(270deg, #ff0000 70.03%, #ff00d6 86.24%, #7b61ff 100.81%);
  }
}
.right-btn {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  // background-image: linear-gradient(270deg, #2b38ea 0%, #7b61ff 44.63%, #aecefb 100.81%);
  background-image: linear-gradient(270deg, #af1425 0%, #f5ae7b 44.63%, #f56da6 100.81%);
}

.watch-now {
  background: linear-gradient(270deg, #ff00d6 0%, #7b61ff 0.01%, #411ef5 43.05%, #2108a5 96.08%);
}
</style>
