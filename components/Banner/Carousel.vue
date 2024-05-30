<template>
  <div class="w-full relative">
    <el-carousel v-if="bannerResult.length > 0" ref="carouselRef" :autoplay="false" arrow="never" height="auto" indicator-position="none" :initial-index="initialIndex" @change="handleChange">
      <el-carousel-item v-for="(item, index) in bannerResult" :key="index" style="height: calc(100vh - 80px)">
        <BannerSubtitle :banner-data="item"></BannerSubtitle>
      </el-carousel-item>
    </el-carousel>
    <div class="w-full absolute h-10px flex justify-center bottom-38px space-x-8">
      <div
        v-for="(item, index) in bannerResult.length"
        :key="index"
        class="h-full w-9px border border-white cursor-pointer"
        :class="[initialIndex == index ? 'bg-white' : '']"
        @click="changeCarousel(index)"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
      ></div>
    </div>
    <div class="absolute right-0 h-full top-0 flex cursor-pointer" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
      <div v-for="(item, index) in imageDataRight" :key="index" class="h-full w-30px swiperItemRight relative hover:w-60px" @click="handleRightSwiper(index)">
        <img class="h-full w-full object-cover" :src="item" />
      </div>
    </div>
    <div class="absolute left-0 h-full top-0 flex cursor-pointer" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
      <div v-for="(item, index) in imageDataLeft" :key="index" class="h-full w-30px swiperItemRight relative hover:w-60px" @click="handleLeftSwiper(index)">
        <img class="h-full w-full object-cover" :src="item" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const carouselRef = ref<any>(null)
const initialIndex = ref<number>(0)
const bannerResult = ref<any[]>([])
const imageDataLeft = ref<any[]>([]) //左侧边轮播图片
const imageDataRight = ref<any[]>([])

const handleChange = (e: number) => {
  initialIndex.value = e
}

// 指示器轮播图切换
const changeCarousel = (_index: number) => {
  if (_index - initialIndex.value != 0) {
    if (_index - initialIndex.value > 1) {
      imageDataLeft.value = reactive(imageDataLeft.value.concat(imageDataRight.value.splice(0, _index - initialIndex.value)))
    } else if (_index - initialIndex.value < -1) {
      let arr = imageDataLeft.value.splice(_index, Math.abs(_index - initialIndex.value))
      arr.reverse().forEach((item) => imageDataRight.value.unshift(item))
    } else if (_index - initialIndex.value == 1) {
      imageDataLeft.value = reactive(imageDataLeft.value.concat(imageDataRight.value.splice(0, 1)))
    } else if (_index - initialIndex.value == -1) {
      let arr = imageDataLeft.value.splice(-1, 1)
      imageDataRight.value.unshift(arr)
    }
  }

  initialIndex.value = _index
  carouselRef.value.setActiveItem(initialIndex.value)
}

// 轮播图右侧切换
const handleRightSwiper = (_index: number) => {
  imageDataLeft.value = reactive(imageDataLeft.value.concat(imageDataRight.value.splice(0, _index + 1)))
  initialIndex.value = imageDataLeft.value.length
  carouselRef.value.setActiveItem(initialIndex.value)
}

// 轮播图左侧切换
const handleLeftSwiper = (_index: number) => {
  let arr = imageDataLeft.value.splice(_index, imageDataLeft.value.length - _index)
  arr.reverse().forEach((item) => imageDataRight.value.unshift(item))
  initialIndex.value = _index
  carouselRef.value.setActiveItem(initialIndex.value)
}

const getBannerData = async () => {
  const res = await apiindexbanner('0')
  bannerResult.value = res.data

  const arr = []
  bannerResult.value.forEach((item: { cate: number; poster_image: any; profile_avatar: { file_url: any }[] }, index: number) => {
    if (item.cate == 0 && index != 0) arr.push(item.poster_image)
    else if (item.cate == 1 && index != 0) arr.push(item.profile_avatar[0].file_url)
  })
  imageDataRight.value = arr
  if (process.client) CarouselAutoPlay()
}

let i = 0
let timer = null
let duration = 3000
const CarouselAutoPlay = () => {
  if (timer) clearInterval(timer)
  timer = null
  timer = setInterval(() => {
    i++
    if (i >= bannerResult.value.length) i = 0
    changeCarousel(i)
  }, duration)
}

getBannerData()

const handleMouseenter = () => {
  clearInterval(timer)
}

const handleMouseleave = () => {
  CarouselAutoPlay()
}
</script>
<style lang="scss" scoped>
.swiperItemRight {
  transition:
    opacity 0.3s linear,
    width 0.5s linear;
}
.swiperItemRight::before {
  content: '';
  box-shadow: inset -15px 0px 20px rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
}
</style>
