<template>
  <div class="profile pt-10 pb-32 space-y-14">
    <div class="pl-9">
      <p class="font-medium text-4xl PPHattonMedium">Update Public Profile Page</p>
      <div class="space-y-4">
        <div class="font-normal text-sm text-#ffffff flex items-center space-x-1 cursor-pointer" @click="navigateTo(`/starslist/${user_store.getUserInfo.id}`)">
          <span class="uppercase space-x-1 tracking-0.5">view my profile page</span>
          <icon name="mi:arrow-right-up" size="20" />
        </div>
        <div class="font-light text-lg PolySansNeutral">
          Please note that personal info doesn’t need approval to make an update while work info does need Starscollective to review before publishing.
        </div>
      </div>
      <div class="w-full text-#F5F5F5">
        <el-tabs v-model="activeName">
          <el-tab-pane label="Basic Info" name="first">
            <template #label>
              <ClientOnly>
                <el-popover placement="top-start" trigger="hover" :width="300" popper-style="padding: 0;border:none">
                  <template #reference>
                    <span class="px-8 font-light text-lg PolySansNeutral">Basic Info</span>
                  </template>
                  <template #default>
                    <img src="~/assets/images/user/basic_info.png" class="h-46 block" />
                  </template>
                </el-popover>
              </ClientOnly>
            </template>
            <LazyUserProfilePageBasicInfo v-if="activeName === 'first'" />
          </el-tab-pane>
          <el-tab-pane label="Work Sample" name="second">
            <template #label>
              <span class="px-8 font-light text-lg PolySansNeutral">Work Sample</span>
            </template>
            <LazyUserProfilePageWorkSample v-if="activeName === 'second'" />
          </el-tab-pane>
          <el-tab-pane label="Awards" name="third">
            <template #label>
              <ClientOnly>
                <el-popover placement="top-start" trigger="hover" :width="300" popper-style="padding: 0;border:none">
                  <template #reference>
                    <span class="px-8 font-light text-lg PolySansNeutral">Awards</span>
                  </template>
                  <template #default>
                    <img src="~/assets/images/user/basic_info.png" class="h-46 block" />
                  </template>
                </el-popover>
              </ClientOnly>
            </template>
            <LazyUserProfilePageAwards v-if="activeName === 'third'" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const activeName = ref('first')
const user_store = useUserPinia()
</script>
<style lang="scss" scoped>
:deep(.el-tabs__nav-wrap::after) {
  background-color: #747474;
}
.el-tabs {
  --el-tabs-header-height: 59px;
}
.profile {
  width: calc(100% - 36px - 112px);
}
</style>
