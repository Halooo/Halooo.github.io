<template>
  <div>
    <NuxtLayout name="user">
      <div class="w-full">
        <div class="w-full bg_img px-32 flex justify-between space-x-6 pt-4 pb-16 fullscreen">
          <div class="w-80 min-w-[20rem]">
            <div class="bg-black">
              <div class="w-80 mx-auto px-5 md:px-0 rounded-lg bg-black space-y-16">
                <div class="p-8 space-y-8">
                  <div v-for="(item, index) in userInfo.profile_avatar" :key="index" class="w-32 h-32 rounded-full overflow-hidden">
                    <img :src="item.file_url" class="w-full h-full object-cover" />
                  </div>
                  <div class="font-medium text-4xl PPHattonMedium">{{ userInfo.first_name }}{{ userInfo.last_name }}</div>
                  <div class="font-normal text-sm text-#ffffff PolySansNeutral">STARS</div>
                </div>
                <LazyUserMenus />
              </div>
            </div>
          </div>
          <div class="flex-1 bg-black">
            <NuxtPage />
          </div>
        </div>
        <Footer></Footer>
        <LazyFeedbackModalUser />
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const user_store = useUserPinia()
const userInfo = ref<any>()
watchEffect(() => {
  userInfo.value = user_store.getUserInfo
})
// 获取用户信息
onMounted(async () => {
  const { data } = await userMsg()
  user_store.setUserInfo(data)
})
</script>
<style lang="scss">
.fullscreen {
  width: 100vw;
  display: flex;
  justify-content: center;
  transform-origin: top left;
  transform: scale(var(--scale-factor));
}

@media screen and (max-aspect-ratio: 16/9) {
  :root {
    --scale-factor: calc(100vw / 1920);
  }
}
</style>
