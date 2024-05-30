<template>
  <div>
    <NuxtLayout name="home">
      <div class="w-full overflow-hidden">
        <!-- <div class="relative">
        <div class="relative w-full">
           <img src="https://www.starscollective.com/assets/images/event/unsplash.png" alt="" class="w-full" />
        </div>
        <div class="px-50px absolute top-0 left-0 w-full z-10">
          <div class="max-w-1300px mx-auto space-y-10">
            <div v-for="(item, index) in eventResult" :key="index" class="w-full card-box px-32px py-32px overflow-hidden">
              <div class="flex justify-between">
                <div class="max-w-480px text-35px min-w-365px PPHattonMedium">{{ item.title }}</div>
                <div class="flex text-18px">
                  <div class="w-244px">
                    <div>Date and time</div>
                    <div class="text-#f5f5f5 mt-4 leading-27px">{{ formartDate(item.start_date) }} <br />{{ item.time }}</div>
                  </div>

                  <div class="w-244px ml-78px">
                    <div>Location</div>
                    <div class="mt-4 leading-27px text-#f5f5f5">{{ item.location }}</div>
                  </div>
                </div>
              </div>

              <div class="h-463px w-full mt-50px relative">
                <iframe
                  v-if="item.youtube_link"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  allowfullscreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  :src="item.youtube_link"
                ></iframe>
                <img v-else :src="item.poster_image" class="w-full h-full object-cover" />

                <div class="btn gradient-btn absolute bottom-10 right-10 z-10">
                  <div>LEARN MORE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
        <div class="px-50px py-30">
          <div class="max-w-1300px mx-auto">
            <div class="text-77px" style="font-family: PPHattonMedium">Events</div>
            <img src="/images/icon/ellipse.png" class="h-15 block" />
            <div class="w-693px text-18px leading-7 mt-9">
              Stars Collective has been involved in a wide range of critically and commercially successful films. We have been involved in a wide range of critically and commercially successful films.
            </div>
            <div v-for="(item, index) in eventResult" :key="index" class="w-full bg-#151515 px-32px py-32px mt-60px overflow-hidden">
              <div class="flex justify-between">
                <div class="max-w-480px text-35px min-w-365px" style="font-family: PPHattonMedium">{{ item.title }}</div>
                <div class="flex text-18px">
                  <div class="w-244px">
                    <div>Date and time</div>
                    <div class="text-#ffffff mt-4 leading-27px">{{ formartDate(item.start_date) }} <br />{{ item.time }}</div>
                  </div>

                  <div class="w-244px ml-78px">
                    <div>Location</div>
                    <div class="mt-4 leading-27px text-#929292">{{ item.location }}</div>
                  </div>
                </div>
              </div>

              <div class="h-463px w-full mt-80px">
                <iframe
                  v-if="item.youtube_link"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  allowfullscreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  :src="item.youtube_link"
                ></iframe>
                <el-image v-else :src="item.poster_image" class="w-full h-full" fit="cover" />
              </div>
            </div>
            <div class="w-full flex justify-center flex-col items-center mt-90px mb-10">
              <el-pagination v-model:current-page="current" v-model:page-size="limit" background layout="prev, pager, next" :total="total" @current-change="curremtChange" />
              <div class="text-18px mt-4">{{ currentPages.start }}-{{ currentPages.end }} of {{ total }} Events</div>
            </div>
          </div>
        </div>

        <div class="px-50px pb-10">
          <div class="max-w-1300px mx-auto relative z-100">
            <div class="w-full flex justify-between items-center" style="font-family: PPHattonMedium">
              <div class="flex items-center cursor-pointer" @click="navigateTo('/philanthropy')">
                <img src="/images/icon/Chevron_Left1.png" alt="" class="w-12" />
                <div class="left-btn text-35px">Philanthropy</div>
              </div>
              <div class="flex items-center cursor-pointer" @click="navigateTo('/masterClass')">
                <div class="right-btn text-35px">SC Lab</div>
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
</style>
