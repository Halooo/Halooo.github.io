<template>
  <div>
    <NuxtLayout name="home">
      <div v-if="dataInfo" class="w-full bg-black">
        <div class="overflow-hidden w-full mb-28">
          <div class="max-w-1300px px-50px mx-auto overflow-hidden">
            <div class="min-w-900px w-full h-434px mt-120px flex justify-between">
              <div class="w-796px h-full relative">
                <img v-if="!workInfo" :src="dataInfo.profile_avatar[0].file_url" class="w-full h-full object-cover" />
                <template v-if="workInfo">
                  <template v-if="workInfo.type !== 'video'">
                    <template v-if="workInfo.poster_image && workInfo.poster_image.length > 0">
                      <img :src="workInfo.poster_image[0].file_url" class="w-full h-full object-cover" />
                    </template>
                  </template>
                  <template v-if="workInfo.type === 'video'">
                    <video-player :src="workInfo.video_file[0].file_url" muted playsinline class="w-full h-full" @mounted="handleMounted"></video-player>
                  </template>

                  <div
                    v-if="workInfo.type !== 'image'"
                    class="w-full h-full bg-opacity-60 absolute inset-0 z-10 flex justify-center items-center"
                    :class="{ 'bg-black': !workInfo.isPlay }"
                    @click="handleLink"
                  >
                    <div v-if="!workInfo.isPlay" class="w-15 h-15 rounded-full bg-white bg-opacity-80 text-black flex justify-center items-center cursor-pointer" @click.stop="handleLink">
                      <Icon name="mingcute:play-fill" size="30"></Icon>
                    </div>
                  </div>
                </template>
              </div>
              <div v-if="workListResult.length > 0" class="w-246px h-full overflow-y-auto">
                <div v-for="(item, index) in workListResult" :key="index" class="w-full h-143px relative" @click="handleVideo(item)">
                  <el-image :src="item.poster_image[0].file_url" fit="cover" class="w-full h-full" />
                  <div v-if="item.type !== 'image'" class="w-full h-full bg-black bg-opacity-60 absolute inset-0 z-10 flex justify-center items-center">
                    <div class="w-10 h-10 rounded-full bg-white bg-opacity-80 text-black flex justify-center items-center cursor-pointer">
                      <Icon v-if="!item.isPlay" name="mingcute:play-fill" size="20"></Icon>
                      <Icon v-if="item.isPlay" name="mingcute:pause-line" size="20"></Icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="workInfo" class="text-18px mt-10 mb-12 whitespace-nowrap">
              <span>[ {{ workInfo.title }} ] </span>
              <label v-if="workInfo.link" class="text-#ffffff cursor-pointer" @click="toWebsite(workInfo.link)">Learn more</label>
            </div>
            <div class="text-77px whitespace-nowrap mt-10" style="font-family: PPHattonMedium">{{ dataInfo.first_name }} {{ dataInfo.last_name }}</div>
            <img src="/images/icon/ellipse.png" class="h-15 block" />
            <div class="w-full flex items-center mt-24">
              <div class="text-48px">Bio</div>
              <div v-if="dataInfo.website" class="bg-#ffffff text-14px h-18px flex text-black items-center ml-8 cursor-pointer" @click="toWebsite(dataInfo.website)">
                <div class="uppercase ml-2 tracking-wider">Website</div>
                <Icon name="mdi:arrow-top-right" class="w-18px h-18px ml-2"></Icon>
              </div>

              <div
                v-if="dataInfo.social_media && dataInfo.social_media_url"
                class="bg-#ffffff text-14px h-18px flex text-black items-center ml-8 cursor-pointer"
                @click="toWebsite(dataInfo.social_media_url)"
              >
                <div class="uppercase ml-2 tracking-wider">{{ dataInfo.social_media }}</div>
                <Icon name="mdi:arrow-top-right" class="w-18px h-18px ml-2"></Icon>
              </div>
            </div>

            <div class="text-18px mt-6">{{ dataInfo.type }} | {{ dataInfo.category }}</div>
            <div class="text-18px w-796px leading-7 mt-6" v-html="dataInfo.introduce"></div>
            <div v-if="dataInfo.email" class="btn gradient-btn mt-10" @click="handleMessage">
              <div>Message</div>
            </div>

            <div v-if="StarAwardData.length != 0" class="text-48px mt-24 mb-8" style="font-family: PPHattonMedium">Awards</div>
            <div v-for="(item, index) in StarAwardData" :key="index" class="w-796px text-18px mt-24">
              <div>{{ item[0].award.name }}</div>
              <div class="h-1px bg-#BDBDBD w-full mt-8 mb-4"></div>
              <div v-for="(_item, _index) in item" :key="_index" class="flex justify-between font-light mt-6">
                <div>{{ _item.year }}</div>
                <div>
                  <div>{{ _item.result }}</div>
                  <div class="text-#929292 mt-1">{{ _item.remark }}</div>
                </div>
                <div class="text-#ffffff mr-8 w-270px overflow-hidden">
                  <div>{{ _item.film }}</div>
                  <div class="mt-1">({{ _item.film_year }})</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
        <MessageNotification v-if="openMessage" class="fixed bottom-0 right-0" :user-id="route.params.sid.toString()" @upload:close-meth="clsoeMeth"></MessageNotification>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'

const route = useRoute()
const videoRef = ref<any>(null)

const openMessage = ref<boolean>(false)
const StarAwardData = ref<any[]>([])
const userStore = useUserPinia()
const dataInfo = ref<any>(null)

const workListResult = ref<any[]>([])
const workInfo = ref<any>(null)

const fileVideoUrl = computed(() => {
  return (value: string) => {
    let str = ''
    if (value) {
      if (value.indexOf('vimeo') != -1) {
        str = value.replace('vimeo.com', 'player.vimeo.com/video') + '?autoplay=1'
      } else if (value.indexOf('youtube') != -1) {
        str = value.replace('watch?v=', 'embed/')
      }
    } else {
      str = value
    }
    return str
  }
})

const handleVideo = (_item) => {
  workInfo.value = _item
}

// 获取个人奖项列表
const getAwardsList = async () => {
  const { data } = await apiIndexAwardsList(route.params.sid.toString())

  const fil_arr = []
  const sort_data = data.value.data.sort((a, b) => b.year - a.year)
  const new_data = sort_data.reduce(function (acc, cur) {
    if (!acc[cur.award.name]) acc[cur.award.name] = []
    acc[cur.award.name].push(cur)
    return acc
  }, {})
  for (let key in new_data) {
    fil_arr.push(new_data[key].sort((i, j) => j.film_year - i.film_year))
  }
  StarAwardData.value = fil_arr
}

// 获取作品列表
const getWorkList = async () => {
  const { data } = await apiIndexWorkList(route.params.sid.toString())
  if (process.client) console.log('作品列表', data)
  workListResult.value = data.value.data
  if (workListResult.value.length != 0) {
    workListResult.value.forEach((item) => (item.isPlay = false))
  }
}

//获取明星详情
const getStarDetail = async () => {
  const { data } = await apiIndexStarDetail(route.params.sid.toString())
  if (process.client) console.log('明星详情', data)
  dataInfo.value = data.value.data
}

const handleMessage = () => {
  if (userStore.getToken != '' && dataInfo.email != '') {
    openMessage.value = true
  } else {
    navigateTo('/account/logIn')
  }
}

// 关闭弹窗
const clsoeMeth = (data: boolean) => {
  openMessage.value = data
}

const toWebsite = (link) => {
  window.open(link, '_black')
}
const handleMounted = (video) => {
  videoRef.value = video
}

const handleLink = () => {
  if (workInfo.value.type !== 'video') return toWebsite(workInfo.value.video_link)
  workInfo.value.isPlay = !workInfo.value.isPlay
  if (workInfo.value.isPlay) {
    console.log(videoRef.value)
    videoRef.value && videoRef.value.video.play()
  } else {
    videoRef.value && videoRef.value.video.pause()
  }
}

getWorkList()
getStarDetail()
getAwardsList()
</script>
