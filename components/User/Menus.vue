<template>
  <div>
    <ul class="menus-model border border-#2A2A2A">
      <li v-for="(item, index) in navArr" :key="index" class="nav h-16 flex items-center pl-8 cursor-pointer" :class="{ selected: $route.path === item.path }" @click="jumpFn(item)">
        <span class="font-light text-xl text-#F5F5F5 PolySansNeutral">{{ item.title }}</span>
      </li>
    </ul>
    <FeedbackModal :model-value="drawerShow('LogOut')">
      <FeedbackModalUserLogOut @update:model-value="drawerClose" />
    </FeedbackModal>
  </div>
</template>
<script setup lang="ts">
const drawerName = ref<string>()
const drawerShow = computed(() => (name) => (name === drawerName.value ? true : false))
const user_store = useUserPinia()

const drawerClose = (value) => {
  if (!value) drawerName.value = ''
}
const navArr = [
  { title: 'Message', path: '/user/message' },
  { title: 'My Proposal', path: '/user/proposal' },
  { title: 'My Account', path: '/user/account' },
  { title: 'View My Profile Page', path: '', url: `/starslist/${user_store.getUserInfo.id}` },
  { title: 'Edit My Public Page', path: '/user/profilePage' },
  { title: 'Notification Setting', path: '/user/notificatSet' },
  { title: 'Log Out' }
]
const jumpFn = (item) => {
  if (item.path) navigateTo(item.path)
  else if (item.url) window.open(item.url, '_black')
  else drawerName.value = 'LogOut'
}
</script>
<style lang="scss">
.nav {
  &.selected {
    background-color: #2f2f2f;
  }
  &:active,
  &:focus,
  &:hover {
    background-color: #2f2f2f;
    // background-color: rgba(113, 91, 0, 0.52);
  }
}
</style>
