<template>
  <div>
    <NuxtLayout name="custom">
      <div class="w-full" :style="[{ minHeight: 'calc(100vh - 138px)' }]">
        <div class="space-y-5 py-5 w-full h-full swiper-list">
          <div class="w-full list1 opacity-0">
            <Swiper class="w-full mt-20" v-bind="SwiperConfig" @reach-end="swiperreachEnd1">
              <SwiperSlide v-for="(item, index) in arrList1" :key="index" class="!w-auto">
                <div class="h-56 rounded-10px overflow-hidden cursor-pointer" @click="handleInfoChange(item)">
                  <img :src="item.banner_image" alt="" class="h-full" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="w-full list2 opacity-0">
            <Swiper class="w-full mt-20" v-bind="SwiperConfig" @reach-end="swiperreachEnd2">
              <SwiperSlide v-for="(item, index) in arrList2" :key="index" class="!w-auto">
                <div class="h-56 rounded-10px overflow-hidden cursor-pointer" @click="handleInfoChange(item)">
                  <img :src="item.banner_image" alt="" class="h-full" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="w-full list3 opacity-0">
            <Swiper class="w-full mt-20" v-bind="SwiperConfig" @reach-end="swiperreachEnd3">
              <SwiperSlide v-for="(item, index) in arrList3" :key="index" class="!w-auto">
                <div class="h-56 rounded-10px overflow-hidden cursor-pointer" @click="handleInfoChange(item)">
                  <img :src="item.banner_image" alt="" class="h-full" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'

const arrList1 = ref<any[]>([])
const arrList2 = ref<any[]>([])
const arrList3 = ref<any[]>([])

const form = reactive({
  page: 3,
  limit: 10
})

const SwiperConfig = reactive<any>({
  slidesPerView: 'auto',
  spaceBetween: 30
})

const getDataList = async (page, name) => {
  const res = await apiindexcollectionList({ page, limit: form.limit })
  if (process.client) console.log('合计列表', res)
  if (name === 'arrList1') arrList1.value = res.data.data
  if (name === 'arrList2') arrList2.value = res.data.data
  if (name === 'arrList3') arrList3.value = res.data.data
}

const swiperChange = async (name) => {
  form.page++
  const res = await apiindexcollectionList({ page: form.page, limit: form.limit })
  if (process.client) console.log('动态合计列表', res)
  if (res.data.data.length === 0) return form.page--
  if (name === 'arrList1') arrList1.value = [...arrList1.value, ...res.data.data]
  if (name === 'arrList2') arrList2.value = [...arrList2.value, ...res.data.data]
  if (name === 'arrList3') arrList3.value = [...arrList3.value, ...res.data.data]
}

const swiperreachEnd1 = (swiper) => {
  swiperChange('arrList1')
}
const swiperreachEnd2 = (swiper) => {
  swiperChange('arrList2')
}
const swiperreachEnd3 = (swiper) => {
  swiperChange('arrList3')
}

const listGaspStart = () => {
  const tl = gsap.timeline()
  tl.fromTo('.list1', { x: '-200%', opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'none', delay: 1 })
  tl.fromTo('.list2', { x: '200%', opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'none' }, '<')
  tl.fromTo('.list3', { x: '-200%', opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'none' }, '<')
}

onMounted(async () => {
  await nextTick()
  getDataList(1, 'arrList1')
  getDataList(2, 'arrList2')
  getDataList(3, 'arrList3')
  setTimeout(() => {
    listGaspStart()
  }, 600)
})

const collectionStore = useCollectionPinia()
const handleInfoChange = async (item) => {
  collectionStore.setCollectionAnimation(true)
  navigateTo(`/collection/step3/${item.id}`)
}
</script>
<style lang="scss" scoped></style>
