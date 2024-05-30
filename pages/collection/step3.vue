<template>
  <div>
    <NuxtLayout name="custom">
      <div class="w-full overflow-hidden" :style="[{ height: 'calc(100vh - 138px)' }]">
        <div class="relative w-full h-full flex flex-col card-info">
          <NuxtPage @animation-end="handleAnimationEnd"></NuxtPage>

          <div class="w-full py-5 swiper-card min-h-42" :class="[{ 'opacity-0': collectionStore.getCollectionAnimation }]">
            <Swiper class="w-full mt-20" v-bind="SwiperConfig" @reach-end="swiperreachEnd">
              <SwiperSlide v-for="(item, index) in dataList" :key="index" class="!w-auto">
                <div class="h-32 rounded-10px overflow-hidden cursor-pointer" @click="handleDetail(item)">
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

definePageMeta({
  pageTransition: false
})

const dataList = ref<any[]>([])

const form1 = reactive({
  page: 0,
  limit: 10,
  dataList: []
})

const SwiperConfig = reactive<any>({
  slidesPerView: 'auto',
  spaceBetween: 30
})

const getapiindexcollectionList = async () => {
  const res = await apiindexcollectionList({ page: form1.page, limit: form1.limit })
  if (process.client) console.log('动态合计列表', res)
  if (res.data.data.length === 0) return form1.page--
  dataList.value = [...dataList.value, ...res.data.data]
}

const swiperreachEnd = async () => {
  form1.page++
  getapiindexcollectionList()
}

onMounted(async () => {
  await nextTick()
  // getapiindexcollectionList()
})

const collectionStore = useCollectionPinia()

const handleDetail = async (item) => {
  collectionStore.setCollectionAnimation(false)
  navigateTo(`/collection/step3/${item.id}`)
}

const handleAnimationEnd = () => {
  const tl = gsap.timeline()
  tl.fromTo('.swiper-card', { x: '200%', opacity: 0 }, { x: '-50px', opacity: 1, duration: 2, delay: 0.5 })
  tl.fromTo('.swiper-card', { x: '-50px' }, { x: 0, duration: 0.5 })
}
</script>
<style lang="scss" scoped></style>
