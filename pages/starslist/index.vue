<template>
  <div>
    <NuxtLayout name="home">
      <div class="overflow-hidden w-full">
        <div class="h-700px w-full overflow-hidden relative">
          <video-player src="https://www.starscollective.com/assets/videos/pc/SC-Map-4.webm" muted autoplay loop playsinline class="absolute inset-0 w-full h-full z-1"></video-player>
          <div class="px-50px relative h-full z-20">
            <div class="max-w-1300px mx-auto h-full flex items-center justify-between">
              <div>
                <div class="text-77px" style="font-family: PPHattonMedium">Our<br />Stars</div>
                <img src="/images/icon/ellipse.png" class="h-15 block" />
              </div>
              <!-- <BannerStar></BannerStar> -->
            </div>
          </div>
        </div>

        <div class="min-w-full px-100px space-x-6 py-10 flex items-center justify-around overflow-hidden bg-[#2F2F2F]">
          <img src="https://www.starscollective.com/assets/images/stars/Sundance.png" class="w-25" />
          <img src="https://www.starscollective.com/assets/images/stars/about_lg2_a.png" class="w-20" />
          <img src="https://www.starscollective.com/assets/images/stars/about_lg3_a.png" class="w-25" />
          <img src="https://www.starscollective.com/assets/images/stars/about_lg4.png" class="w-25" />
          <img src="https://www.starscollective.com/assets/images/stars/about_lg5_a.png" class="w-25" />
          <img src="https://www.starscollective.com/assets/images/stars/oscar_logo.png" class="w-25" />
          <img src="https://www.starscollective.com/assets/images/stars/about_lg7_a.png" class="w-25" />
          <img src="https://www.starscollective.com/assets/images/stars/about_lg8_a.png" class="w-25" />
          <img src="https://www.starscollective.com/assets/images/stars/about_lg9_a.png" class="w-25" />
        </div>
        <div class="w-full gradient-bg flex items-center">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10 w-full">
            <div v-for="(item, index) in listData2" :key="index" class="h-196px bg-white text-black flex flex-col items-center justify-center">
              <div class="text-50px font-bold">{{ item.number }}</div>
              <div class="my-1 text-16px italic">{{ item.title }}</div>
              <div class="w-186px text-center text-13px">{{ item.info }}</div>
            </div>
          </div>
        </div>
        <div class="px-50px py-30">
          <div class="max-w-1300px mx-auto">
            <div class="w-full flex justify-between">
              <div v-for="(item, index) in listData" :key="index" class="h-90px flex items-center border-l-1 text-white">
                <div class="text-44px mx-4">{{ item.number }}</div>
                <div class="text-12px w-246px leading-4">{{ item.info }}</div>
                <div class="text-12px hidden">{{ item.introduce }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center">
          <div class="w-1300px px-50px overflow-hidden">
            <div class="flex justify-between items-center overflow-hidden">
              <div class="flex h-27px text-18px items-center space-x-7">
                <client-only>
                  <el-dropdown trigger="click" :hide-on-click="false">
                    <div class="text-white text-18px whitespace-nowrap space-x-2 outline-none">
                      <span>Type:Artist & Filmmaker</span>
                      <Icon name="ph:caret-down-light" />
                    </div>
                    <template #dropdown>
                      <el-checkbox-group v-model="checkList" @change="handleChange">
                        <el-dropdown-menu class="w-200px">
                          <el-dropdown-item class="flex justify-between">
                            <div>Filmmaker</div>
                            <el-checkbox label="Filmmaker" size="large"><div></div></el-checkbox>
                          </el-dropdown-item>
                          <el-dropdown-item class="flex justify-between">
                            <div>Artist</div>
                            <el-checkbox label="Artist" size="large"><div></div></el-checkbox>
                          </el-dropdown-item>
                        </el-dropdown-menu>
                      </el-checkbox-group>
                    </template>
                  </el-dropdown>
                </client-only>

                <client-only>
                  <el-dropdown ref="dropdownRef" trigger="click" :hide-on-click="false" @command="handleCommand">
                    <div class="text-white text-18px whitespace-nowrap space-x-2 outline-none">
                      <span>Sort by New</span>
                      <Icon name="ph:caret-down-light" />
                    </div>
                    <template #dropdown>
                      <el-dropdown-menu class="w-120px">
                        <el-dropdown-item command="New"> New </el-dropdown-item>
                        <el-dropdown-item command="A-Z"> A-Z </el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </client-only>
              </div>

              <div class="w-365px h-51px bg-black border rounded-50px overflow-hidden flex items-center justify-center invisible sm:invisible md:visible xl:visible">
                <input v-model="searchIpt" placeholder="Search Stars by name and type" class="h-90% w-90% border-none outline-none bg-black" @input="throttle(handleSearchIpt, 1000, false)" />
              </div>
            </div>

            <div class="min-w-350px max-w-full overflow-hidden mt-20 grid grid-cols-2 gap-x-10 gap-y-15 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6">
              <div v-for="(item, index) in starsListData" :key="index" class="w-166px items cursor-pointer" @click="navigateTo(`/starslist/${item.id}`)">
                <div v-if="item.profile_avatar[0]" class="h-166px w-full relative itemsChild">
                  <el-image :src="item.profile_avatar[0].file_url" fit="cover" class="h-full w-full"></el-image>
                  <div class="w-full h-full absolute itemImg text-transparent z-10 inset-0 flex items-center justify-center text-18px font-bold">Learn More</div>
                </div>

                <div class="text-18px leading-27px my-2 italic w-100px">{{ item.first_name }} {{ item.last_name }}</div>
                <div class="text-14px text-#BDBDBD w-100px leading-16.8px">{{ item.type }}</div>
              </div>
            </div>
            <div class="w-full flex justify-center flex-col items-center py-10">
              <el-pagination v-model:current-page="current" v-model:page-size="limit" background layout="prev,pager,next" :total="total" @current-change="curremtChange" />
              <div class="text-18px mt-4">{{ currentPages.start }}-{{ currentPages.end }} of {{ total }} Stars</div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import type { DropdownInstance } from 'element-plus'
import { VideoPlayer } from '@videojs-player/vue'
const searchIpt = ref<string>('')
const checkList = ref<any[]>(['Filmmaker', 'Artist'])
const limit = ref<number>(30)
const total = ref<number>(400) //总数量
const current = ref<number>(1) //当前页
const chosed = ref<string>('All')
const sort = ref<string>('New')
const starsListData = ref<any[]>([])
const dropdownRef = ref<DropdownInstance>()

const listData = [
  {
    number: 42,
    info: 'traditional artists from oil painting, illustration, graphic design, sculpture, fashion design, music fields',
    introduce: '47 Traditional Artists: oil painters, illustrators, graphic designers, sculptors, fashion designers, musicians, etc.'
  },
  {
    number: 20,
    info: 'crypto artists including 3D designers, concept artists, programmers, visual engineers',
    introduce: '22 Crypto Artists: crypto native artists, 3D designers, programmers, concept artists, visual engineers, etc.'
  },
  {
    number: 15,
    info: 'multi-disciplinary artists including musician, photographers, filmmakers, composers',
    introduce: '15 Multi-disciplinary: musicians, photographers, filmmakers, composers, actors, etc.'
  }
]
const listData2 = [
  {
    number: 14,
    title: 'Filmmakers',
    info: 'Shortlisted and awarded at Academy Awards'
  },
  {
    number: 3,
    title: 'Filmmakers',
    info: 'Shortlisted at British Academy Film Awards'
  },
  {
    number: 27,
    title: 'Filmmakers',
    info: 'Shortlisted and awarded at major NA film festivals'
  },
  {
    number: 18,
    title: 'Filmmakers',
    info: 'Shortlisted and awarded at the three major EU film festivals'
  },
  {
    number: 129,
    title: 'Filmmakers',
    info: 'Nominated/Awarded at various international film festival'
  }
]

const currentPages = computed(() => {
  const start = limit.value * current.value - limit.value + 1
  const end = starsListData.value.length > 0 ? limit.value * current.value - limit.value + starsListData.value.length : ''
  return { start, end }
})

//获取明星列表数据
const getStarsList = async () => {
  starsListData.value = []
  const { data } = await apiIndexStarList(chosed.value, sort.value, limit.value, current.value, searchIpt.value)
  if (process.client) console.log('明星列表', data.value)
  starsListData.value = data.value.data.data
  total.value = data.value.data.total
}

getStarsList()

const handleCommand = (command: string) => {
  sort.value = command
  getStarsList()
  dropdownRef.value.handleClose()
}

// 搜索数据
const handleSearchIpt = () => {
  current.value = 1
  getStarsList()
}

// 选择类型
const handleChange = () => {
  if (checkList.value.length == 2) chosed.value = 'All'
  else chosed.value = checkList.value[0]

  current.value = 1
  getStarsList()
}

const curremtChange = (_current: number) => {
  current.value = _current
  getStarsList()
}
</script>
<style lang="scss" scoped>
:deep(video) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.gradient-bg {
  background: linear-gradient(270deg, #ff00d6 0%, #7b61ff 70.88%, #411ef5 96.61%);
}

.items {
  .itemsChild {
    .itemImg {
      &::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all 0.5s;
        background: linear-gradient(270deg, #ff00d6 0%, #7b61ff 70.88%, #7193ea 96.61%);
        z-index: -1;
        opacity: 0;
      }
    }
  }
  &:hover {
    .itemsChild {
      .itemImg {
        &::before {
          opacity: 0.8;
        }
        color: white;
      }
    }
  }
}
</style>
