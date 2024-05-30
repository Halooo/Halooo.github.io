<template>
  <div>
    <div class="px-36px lg:h-459px h-full bg-black overflow-hidden">
      <div class="w-full flex lg:justify-between lg:flex-row flex-col mt-16 text-white text-15px border-b-1 border-[#616161] pb-33px">
       
        <div>
          <img src="/images/logo.png " class="h-103px mb-20px" />
           <!--
          <div class="lg:mt-72px mb-20px flex space-x-2">
            <div>Contact:</div>
            <div class="space-y-2 text-[#616161]">
              <div class="underline cursor-pointer">+1 2137067926</div>
              <div class="underline cursor-pointer">hello@starscollective.com</div>
            </div>
          </div>
          -->
        </div>

        <div class="uppercase">
          <div class="grid lg:grid-cols-3 grid-cols-2 gap-x-20 gap-y-28px text-[##F5F5F5] text-14px">
            <div v-for="(item, index) in route_data" :key="index" :class="[item.name != '' ? 'cursor-pointer' : '']" @click="handleRoute(item.url, false)">{{ item.name }}</div>
          </div>
          <div class="mt-50px">Subscribe for Newsletter</div>
          <div class="flex mt-19px">
            <div class="w-240px mr-38px">
              <el-input v-model="input_value" placeholder="Email Address" />
            </div>

            <div class="w-125px h-33px leading-33px border border-[##616161] text-center text-[#f5f5f5] cursor-pointer" @click="handleEmail">Subscribe</div>
          </div>
        </div>
      </div>

      <div class="flex overflow-hidden justify-between">
        <div class="flex space-x-4 mt-30px">
          <Icon name="mdi:linkedin" class="w-9 h-9 text-[#616161] hover:text-white cursor-pointer" @click="handleRoute('https://www.linkedin.cn/wujing-frontend/incareer/guestHomePage', true)"></Icon>
          <Icon name="ic:baseline-facebook" class="w-9 h-9 text-[#616161] hover:text-white cursor-pointer" @click="handleRoute('https://www.facebook.com/StarsCollective/', true)"></Icon>
          <Icon name="mingcute:camera-line" class="w-9 h-9 text-[#616161] hover:text-white cursor-pointer" @click="handleRoute('https://www.instagram.com/officialstarscollective/', true)"></Icon>
          <Icon
            name="ci:twitter"
            class="w-9 h-9 text-[#616161] hover:text-white cursor-pointer"
            @click="handleRoute('https://twitter.com/i/flow/login?redirect_after_login=%2FStarsCLTV', true)"
          ></Icon>
          <Icon name="ic:baseline-tiktok" class="w-9 h-9 text-[#616161] hover:text-white cursor-pointer" @click="handleRoute('https://www.tiktok.com/@officialstarscollective', true)"></Icon>
        </div>
        <div class="flex mt-38px">
          <div class="text-[#616161] mr-6">Terms of Use • Privacy Policy</div>
          <div class="text-[#F5F5F5]">Copyright 2022 StarsCollective All right reserved.</div>
        </div>
      </div>
    </div>
    <FeedbackModal :model-value="drawerShow('OkBox')">
      <FeedbackModalUserOkBox @update:model-value="drawerClose">
        <template #title>Success!</template>
        <template #describe>Thank you for subscribing to our mailing list.</template>
      </FeedbackModalUserOkBox>
    </FeedbackModal>
  </div>
</template>
<script setup lang="ts">
let input_value = ref<string>()
const drawerName = ref<string>('')
let route_data = ref<any[]>([
  {
    name: 'Stars',
    url: 'starslist'
  },
  {
    name: 'Content',
    url: 'medium'
  },
  {
    name: 'About',
    url: '/'
  },
  {
    name: 'Mentors',
    url: 'mentors'
  },
  {
    name: 'Metaverse',
    url: 'metaverse'
  },
  {
    name: 'Campaigns',
    url: 'festivals'
  },
  {
    name: 'Become a Star',
    url: 'start/applicaiton'
  },
  {
    name: 'Footage',
    url: 'footage'
  },
  {
    name: 'Press',
    url: 'press'
  },
  {
    name: 'Career',
    url: 'career'
  }
])

const handleRoute = (_url: string, isExternal: boolean) => {
  if (isExternal) window.open(_url, '_black')
  else navigateTo(`/${_url}`)
}

const handleEmail = async () => {
  const { data } = await apiIndexAddSubscribe(input_value.value)
  if (process.client && data.value.code == 1) drawerName.value = 'OkBox'
  input_value.value = ''
}

const drawerShow = computed(() => (name) => (name === drawerName.value ? true : false))
const drawerClose = (value) => {
  if (!value) drawerName.value = ''
}
</script>
<style lang="scss" scoped></style>
