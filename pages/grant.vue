<template>
  <div>
    <NuxtLayout name="custom">
      <div v-if="anchorPointMenu" class="fixed bottom-1/2 translate-y-1/2 right-8 z-99 p-5 space-y-9 border border-#616161 bg-black">
        <div class="flex justify-between">
          <span class="font-normal text-sm PolySansNeutral">Quick Guide</span>
          <span class="cursor-pointer" @click="anchorPointMenu = false">
            <Icon name="streamline:interface-delete-1-remove-add-button-buttons-delete" size="14" />
          </span>
        </div>
        <div class="flex flex-col space-y-5">
          <a v-for="(anchor_item, anchor_index) in anchorPointMenuTitle" :key="anchor_index" class="flex justify-between items-center space-x-8" :href="`#floor${anchor_index + 1}`">
            <span class="font-normal text-sm PolySansNeutral">{{ anchor_item }}</span>
            <span>
              <Icon name="system-uicons:arrow-top-right" size="20" />
            </span>
          </a>
        </div>
      </div>
      <div class="pt-30">
        <Grant />
      </div>
      <div class="px-50px">
        <div class="max-w-1300px mx-auto">
          <GrantFloor1 id="floor1" />
          <GrantFloor2 id="floor2" />
          <GrantFloor3 id="floor3" />
          <GrantFloor4 id="floor4" />
        </div>
      </div>

      <GrantFloor5 id="floor5" />
      <div id="floor6" class="px-50px">
        <div class="max-w-1300px mx-auto">
          <GrantFloor6 />
        </div>
      </div>
      <Footer></Footer>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const anchorPointMenu = ref<boolean>(true)
const anchorPointMenuTitle = ref<any>(['Program Overview', 'Prompts', 'Participants', 'Submissions', 'Prizes', 'Deadline'])
</script>
<style lang="scss" scoped></style>
