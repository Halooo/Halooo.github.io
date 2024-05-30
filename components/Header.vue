<template>
  <div class="sticky top-0 w-full min-w-400px z-999">
    <!-- <Transition name="slide-top-h">
      <el-alert v-if="alertType" class="alert-card relative z-500" @close="close">
        <div class="flex justify-between items-center w-full text-18px bg-#ffffff text-black h-58px px-50px">
          <div class="font-semibold whitespace-nowrap">Stars Collective Grant: <label class="font-normal">Unleashing Action Storytellings</label></div>
          <div class="font-semibold whitespace-nowrap">
            <span>NOW OPEN：</span>
            <span class="cursor-pointer underline underline-offset-4" @click="navigateTo('/grant')">LEARN MORE</span>
          </div>
        </div>
      </el-alert>
    </Transition> -->

    <div class="relative z-500 px-50px bg-black">
      <div class="flex lg:flex-row flex-row-reverse items-center justify-between h-80px max-w-1300px mx-auto relative z-100">
        <Icon v-if="!drawers" name="material-symbols:menu" class="w-35px h-26px cursor-pointer" @click="handleOpenDrawer"></Icon>
        <Icon v-else name="material-symbols:close" class="w-35px h-26px cursor-pointer" @click="handleOpenDrawer"></Icon>
        <img src="/images/logo.png" class="h-66px cursor-pointer" @click="navigateTo('/')" />
        <div v-if="!user_store.getToken" class="flex items-center cursor-pointer">
          <NuxtLink to="/account/logIn">LOGIN</NuxtLink>
          <div class="px-4 py-2 border border-[#616161] ml-4" @click="navigateTo('/start/applicaiton')">APPLY</div>
        </div>
        <div v-if="user_store.getToken && user_store.getUserInfo" class="menus-box h-full relative flex justify-end items-center">
          <div class="border border-white rounded-10 px-4 py-2 flex items-center space-x-2 cursor-pointer relative">
            <div v-for="(item_, index_) in user_store.getUserInfo.profile_avatar" :key="index_" class="w-8 h-8">
              <img :src="item_.file_url" class="w-full h-full object-cover rounded-full" />
            </div>
            <Icon name="mi:caret-down" size="24" />
            <div class="w-70 bg-black absolute top-15 right-0 menuse">
              <UserMenus />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- :style="[{ paddingTop: `${route.path === '/' ? '80px' : '138px'}` }]" -->
    <div class="fixed top-0 left-0 w-full h-screen bg-black z-10 pt-80px" :class="[{ hidden: !drawers }]">
      <div class="w-full h-full relative bg-back">
        <div class="flex justify-between h-full max-w-1300px mx-auto relative z-20">
          <div class="relative flex-1 h-full">
            <img src="~/assets/images/header/cube.png" alt="" class="absolute duration-1000 cube-img -z-1" :style="rotateChange" />
          </div>
          <div>
            <div class="flex justify-end mt-40">
              <div class="pr-27px border-r-1px">
                <div
                  v-for="(item, index) in route_data"
                  :key="index"
                  class="cursor-pointer PPHattonMedium mb-10 last:mb-0 text-41px headerNavLi text-[rgba(245,245,245,0.2)]"
                  @click="handleRoute(item, index)"
                  @mouseover="handleRotate(index)"
                >
                  {{ item.name }}
                </div>
              </div>

              <div class="text-18px ml-42px wrap-list min-w-200px">
                <div v-for="(item, index) in save_route" :key="index" class="mb-4 wrap-list-l">
                  <img v-if="item.isImg" :src="item.value" class="object-cover cursor-pointer" @click="handleChildRoute(item.url)" />
                  <div v-else class="cursor-pointer PolySansSlim">
                    <!-- 锚点 -->
                    <div v-if="item.point" @click="handleOpenDrawer2(item.path, item.url)">
                      {{ item.value }}
                    </div>
                    <div v-else @click="handleChildRoute(item.url)">{{ item.value }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
let drawers = ref<boolean>(false)
const user_store = useUserPinia()
let current = ref<number>(-1)
const isShowMenus = ref<boolean>(false)
const isEnter = ref<boolean>(false)

let route_data = ref<any[]>([
  {
    id: 0,
    name: 'ABOUT',
    routeName: 'index',
    url: '/',
    deg: '-25deg',
    children: [
      // { value: 'About Us', isImg: false, point: true, url: 'aboutus', path: '/' },
      // { value: 'Cross-medium Content', isImg: false, url: 'medium', routeName: 'medium', point: false },
      // { value: 'Metaverse', isImg: false, url: 'metaverse', routeName: 'metaverse', point: false }
      // { value: 'Franchises', isImg: false, point: true, url: '', path: '' }
      // { value: 'Entertainment', isImg: false, point: true, url: 'entertainment', path: '/' },
      // { value: 'WEB 3.0', isImg: false, point: true, url: 'web3', path: '/' },
      // { value: 'Partnerships', isImg: false, point: true, url: 'partnerships', path: '/' }
    ]
  },
  {
    id: 1,
    name: 'MENTORS',
    url: '/mentors',
    deg: '-15deg',
    routeName: 'mentors',
    children: []
  },
  {
    id: 2,
    name: 'STARS',
    url: '/starslist',
    deg: '-5deg',
    routeName: 'starslist',
    children: []
  },
  {
    id: 3,
    name: 'CONTENT',
    deg: '5deg',
    routeName: 'content',
    url: '',
    children: [
      // { value: 'Movies', isImg: false, url: 'starsMovies', routeName: 'starsMovies', point: false },
      { value: 'Cross-medium Content', isImg: false, url: '/starsMovies', routeName: 'starsMovies', point: false },
      // { value: 'Metaverse', isImg: false, url: '/metaverse', routeName: 'metaverse', point: false },
      { value: 'Merch', isImg: false, url: '/merch', routeName: 'merch', point: false }
    ]
  },
  { id: 4, name: 'NEWS', url: '/press', routeName: 'press', deg: '15deg', children: [] },
  {
    id: 5,
    name: 'CAMPAIGNS',
    url: '',
    routeName: 'campaigns',
    deg: '25deg',
    children: [
      { value: 'SC Lab', isImg: false, url: '/masterClass', routeName: 'masterClass', point: false },
      // { value: 'Film Festivals', isImg: false, url: '/festivals', routeName: 'festivals', point: false },
      { value: 'SC Gala', isImg: false, url: '/gala', routeName: 'gala', point: false },
      // { value: 'SC Grant', isImg: false, url: '/grant', routeName: 'grant', point: false },
      { value: 'Philanthropy', isImg: false, url: '/philanthropy', routeName: 'philanthropy', point: false },
      { value: 'Events', isImg: false, url: '/event', routeName: 'event', point: false }
    ]
  }
])

let save_route = ref<any[]>([])
let anchor = reactive<any>({ value: '' })
const route = useRoute()
const router = useRouter()
const emit = defineEmits(['update:anchorSkip'])

const rotateChange = computed(() => {
  if (current.value === -1) {
    return [
      {
        transform: `rotate(-50deg)`
      }
    ]
  } else {
    return [
      {
        transform: `rotate(${route_data.value[current.value].deg})`
      }
    ]
  }
})

watchEffect(() => {
  if (drawers.value) {
    if (process.client) document.body.style.overflow = 'hidden'
    setTimeout(() => {
      current.value = 0
    }, 1)
  } else {
    if (process.client) document.body.style.overflow = ''
    current.value = -1
  }
})

const alertType = ref<boolean>(false)

watchEffect(() => {
  alertType.value = false
  setTimeout(() => {
    if (route.path !== '/' && route.path !== '/grant') {
      alertType.value = true
    }
  }, 800)
})

const close = () => {
  alertType.value = false
}

const handleRotate = (_index: any) => {
  current.value = _index
}

const handleRoute = (_item: any, _index: number) => {
  save_route.value = _item.children
  if (_item.url) {
    navigateTo(_item.url)
    drawers.value = false
  }
}

const handleOpenDrawer = () => {
  drawers.value = !drawers.value
}

const handleOpenDrawer2 = (_path: string, _url: string) => {
  if (!_path) return
  else if (!_url) return
  drawers.value = false
  if (route.path == _path) {
    //当前页面使用描点
    emit('update:anchorSkip', _url)
  } else {
    //跨页面使用描点
    anchor.value = _url
    router.push({
      path: _path,
      query: anchor
    })
  }
}

// 二级路由
const handleChildRoute = (_url: string) => {
  if (_url == '') return
  navigateTo(_url)
  drawers.value = false
}
</script>
<style lang="scss">
// 从上往下进入
.slide-top-h-enter-from,
.slide-top-h-leave-to {
  // transform: translateY(-58px);
  height: 0;
  opacity: 0;
}
.slide-top-h-enter-to,
.slide-top-h-leave-from {
  // transform: translateY(0);
  height: 58px;
  opacity: 1;
}
.slide-top-h-enter-active,
.slide-top-fade-h-leave-active {
  transition: all 1s ease;
}
// 从上往下进入 end

.menus-box {
  .menus-model {
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition: all 0.5s;
  }
  &:hover {
    .menus-model {
      opacity: 1;
      height: auto;
    }
  }
}
.wrap-list .wrap-list-l:nth-of-type(3) {
  img {
    margin-top: 72px;
    height: 36px;
  }
}
.wrap-list .wrap-list-l:nth-of-type(4) {
  img {
    margin-top: 24px;
    height: 45px;
  }
}
.wrap-list .wrap-list-l:nth-of-type(5) {
  img {
    margin-top: 24px;
    height: 15px;
  }
}
.wrap-list .wrap-list-l:nth-of-type(6) {
  img {
    margin-top: 24px;
    height: 48px;
  }
}

.maxHeight {
  height: calc(100vh - 80px);
}
.minHeight {
  height: calc(100vh - 138px);
}

.headerNavLi {
  &:hover {
    color: transparent;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(89.96deg, #3274ff 3.07%, #dde6e9 112.82%);
  }
}

.navTitle {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(89.96deg, #3274ff 3.07%, #dde6e9 112.82%);
}
.cube-img {
  top: 10%;
  left: -300px;
  width: 1000px;
  max-width: max-content;
}
</style>
