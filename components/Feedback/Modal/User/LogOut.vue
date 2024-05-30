<template>
  <div class="w-135 bg-black p-16 space-y-16 fade_scale">
    <div class="space-y-4">
      <p class="font-medium text-5xl PPHattonMedium">Log Out</p>
      <div class="font-light text-lg PolySansNeutral">Do you want to log out of your account?</div>
    </div>
    <div class="space-x-5 flex">
      <div class="btn gradient-btn" @click="LogOutFn">
        <div>Log out</div>
      </div>
      <div class="btn" @click="close">
        <div>Cancel</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const user_store = useUserPinia()
const emits = defineEmits(['update:model-value'])
const close = () => {
  emits('update:model-value', '')
}
// 退出登录
const LogOutFn = async () => {
  await logout()
  user_store.clearUserInfo()
  navigateTo('/account/logIn')
}
</script>
<style lang="scss" scoped></style>
