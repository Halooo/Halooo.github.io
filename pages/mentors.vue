<template>
  <div>
    <NuxtLayout name="custom">
      <div class="w-full relative overflow-hidden">
        <div class="px-50px">
          <div class="max-w-1300px mx-auto relative z-2">
            <div class="text-77px mt-34px PPHattonMedium">Our<br />Mentors</div>
            <img src="/images/icon/ellipse.png" class="h-15 block" />
            <div class="mt-4 mb-120px">*Names are listed in alphabetic order</div>
            <div class="w-full pb-200px openingAnimation">
              <div
                v-for="(item, index) in mentorsList"
                :key="index"
                class="w-full h-214px relative"
                :data-id="index"
                @mouseenter="handleMouseEnter(index)"
                @mouseleave="handleMouseLeave(index, $event)"
              >
                <div :id="'mentor1-' + index" class="w-full h-full absolute inset-0 flex items-center justify-between mentor_item1">
                  <img
                    v-if="index % 2 == 0"
                    src="https://www.starscollective.com/assets/images/gif/line2.gif"
                    alt=""
                    class="absolute -top-2px left-1/2 w-112% max-w-112% z-10 -translate-x-1/2 rotate-180deg"
                  />
                  <img v-else src="https://www.starscollective.com/assets/images/gif/line2.gif" alt="" class="absolute -top-2px left-1/2 w-112% max-w-112% z-10 -translate-x-1/2" />

                  <div class="w-202px text-48px font-medium" style="font-family: PPHattonMedium">{{ item.first_name }} {{ item.last_name }}</div>
                  <div class="stroke_text text-transparent" :class="[item.position.length > 10 ? 'text-90px' : 'text-142.4px']">{{ item.position }}</div>
                </div>

                <div :id="'mentor2-' + index" class="w-full h-full absolute inset-0 flex justify-between border-y-1px border-#2F2F2F pt-7 opacity-0">
                  <div class="flex">
                    <div class="w-102px text-24.15px leading-30.44px">{{ item.first_name }} {{ item.last_name }}</div>
                    <div class="text-18px ml-11">
                      <div class="font-semibold text-#ffffff leading-7">{{ item.position }}</div>
                      <div v-for="(item2, index2) in item.works_arr" :key="index2" class="italic font-light leading-7 font-light">{{ item2 }}</div>
                    </div>
                  </div>
                  <div :id="'mentor_item-' + index" class="w-670px h-320px absolute right-0 -top-80px flex mentor_item mentor_item2 overflow-hidden z-99">
                    <img v-for="(item3, index3) in item.works_images" :key="index3" :src="item3" class="w-216px h-full object-cover mentors_img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative z-10">
          <Footer></Footer>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
import gsap from 'gsap'

const mentorsList = ref<any[]>([])

// 移入隐藏初始状态
const handleMouseEnter = (_index: number) => {
  gsap.set('.mentor_item1', { opacity: 0.3 })
  const tl = gsap.timeline()
  tl.to(`#mentor1-${_index}`, { opacity: 0, duration: 0 })
  tl.to(`#mentor2-${_index}`, { opacity: 1, duration: 0 })
  tl.fromTo(`#mentor_item-${_index}`, { y: 200 }, { y: 0, duration: 0.5, opacity: 1 })
}
// 移入显示初始状态
const handleMouseLeave = (_index: number, e: any) => {
  const lastIndex = e.target.dataset.id
  const tl = gsap.timeline()
  gsap.set('.mentor_item1', { opacity: 1 })
  tl.to(`#mentor_item-${_index}`, { y: 100, duration: 0.5, opacity: 0 })
  tl.to(`#mentor2-${_index}`, { opacity: 0, duration: 0.5 }, '<')
  tl.to(`#mentor1-${_index}`, { opacity: 1, duration: 0.5 }, '<')
}

// 获取导师列表
const getMentorList = async () => {
  const res = await apiIndexMentorList()
  mentorsList.value = res.data
  mentorsList.value.forEach((item) => (item.works_arr = item.works.split('|')))
}

getMentorList()

onMounted(() => {
  gsap.fromTo('.openingAnimation', { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 1.5 })
})
</script>
<style lang="scss" scoped>
.stroke_text {
  -webkit-text-stroke: 1px #fff;
}
.mentor_item .mentors_img {
  margin-right: 15px;
}
.mentor_item .mentors_img:last-child {
  margin-right: 0;
}
</style>
