<template>
  <div>
    <NuxtLayout name="home">
      <div v-if="informationResult.length > 0" class="w-full overflow-hidden">
        <div class="px-50px">
          <div class="max-w-1300px mx-auto">
            <img :src="informationResult[0]?.cover_image" class="w-full" />
            <div class="text-#ffffff text-14px mt-35px mb-20px">{{ informationResult[0].source }}</div>
            <div class="flex justify-between">
              <div class="w-900px text-35px" style="font-family: PPHattonMedium">{{ informationResult[0].title }}</div>
              <div class="flex text-#ffffff items-center cursor-pointer" @click="handleLink(informationResult[0].link)">
                <div>READ MORE</div>
                <Icon name="mdi:arrow-top-right"></Icon>
              </div>
            </div>

            <div class="flex mt-100px">
              <img :src="informationResult[1].cover_image" class="w-30% block" />

              <div class="ml-72px">
                <div class="text-#ffffff text-14px">{{ informationResult[1].source }}</div>
                <div class="text-35px leading-50px my-8 PPHattonMedium">{{ informationResult[1].title }}</div>
                <div class="flex mt-8 text-#ffffff items-center cursor-pointer" @click="handleLink(informationResult[1].link)">
                  <div>READ MORE</div>
                  <Icon name="mdi:arrow-top-right"></Icon>
                </div>
              </div>
            </div>

            <div class="mt-60px grid grid-cols-3 gap-15">
              <div v-for="(item, index) in informationListResult" :key="index">
                <div class="w-full relative h-0 overflow-hidden pb-50%">
                  <img :src="item.cover_image" class="absolute top-0 left-0 w-full h-full object-cover" />
                </div>
                <div class="text-#ffffff text-14px py-9">{{ item.source }}</div>
                <div class="text-26px PPHattonMedium">{{ item.title }}</div>
                <div class="flex text-black justify-between h-17px bg-#ffffff w-125px items-center mt-9 cursor-pointer" @click="handleLink(item.link)">
                  <div class="text-14px tracking-2.1px">READ MORE</div>
                  <Icon name="ph:caret-right"></Icon>
                </div>
              </div>
            </div>

            <div class="w-full flex justify-center flex-col items-center mt-40 mb-10">
              <el-pagination v-model:current-page="current" v-model:page-size="limit" background layout="prev, pager, next" :total="total" @current-change="curremtChange" />
              <div class="text-18px mt-4">{{ currentPages.start }}-{{ currentPages.end }} of {{ total }} Press</div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const informationResult = ref<any[]>([{ cover_image: '' }, { cover_image: '' }])
const informationListResult = ref<any[]>([])
const limit = ref<number>(30)
const total = ref<number>(0) //总数量
const current = ref<number>(1) //当前页

const handleLink = (_url) => {
  window.open(_url, '_black')
}

const currentPages = computed(() => {
  const start = limit.value * current.value - limit.value + 1
  const end = informationListResult.value.length > 0 ? limit.value * current.value - limit.value + informationListResult.value.length : ''
  return { start, end }
})

const curremtChange = (_current: number) => {
  current.value = _current
  getInformationList()
}

// 获取置顶质询
const getInformation = async () => {
  const { data } = await apiIndexInformation()
  informationResult.value = data.value.data
}

// 获取资讯列表
const getInformationList = async () => {
  informationListResult.value = []
  const { data } = await apiIndexInformationList(current.value, limit.value)
  if (process.client) console.log('资讯列表', data)
  informationListResult.value = data.value.data.data
  total.value = data.value.data.total
}
getInformation()
getInformationList()
</script>
<style lang="scss" scoped></style>
