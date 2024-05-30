<template>
  <div class="w-full h-full">
    <p class="font-medium text-5xl PPHattonMedium mb-21">Submitted Art Proposal</p>
    <div v-if="dataInfo" class="space-y-4 pl-5">
      <div class="border-b border-#2F2F2F pb-4">
        <span class="font-semibold text-lg PolySansNeutral">Case Number :{{ dataInfo.num }}</span>
      </div>
      <div class="border-b border-#2F2F2F pb-12 space-y-4 flex flex-col text-lg PolySansNeutral">
        <span class="font-semibold">Project Name</span>
        <span class="font-normal text-#BDBDBD">{{ dataInfo.project_name }}</span>
        <span class="font-semibold">Project Type</span>
        <span class="font-norma text-#BDBDBD">{{ dataInfo.type }}</span>
      </div>
      <div class="border-b border-#2F2F2F pb-12 text-lg PolySansNeutral">
        <span class="font-semibold">Project Description</span>
        <div class="font-normal text-#BDBDBD mt-4">
          {{ dataInfo.project_description }}
        </div>
      </div>
      <div class="space-y-4 pb-4">
        <span class="font-semibold text-lg PolySansNeutral">Attachments</span>
        <div v-for="(item, index) in dataInfo.attachment_files" :key="index" class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16">
          <span class="font-normal text-sm PolySansNeutral">{{ item.file_name }}</span>
          <span class="font-normal text-sm PolySansNeutral underline underline-offset-2 cursor-pointer text-#ffffff">
            <a :href="item.fullurl" target="_blank">VIEW</a>
          </span>
        </div>
      </div>
      <div class="text-lg PolySansNeutral space-y-2">
        <div class="font-semibold">Downloadable Link to Your Project</div>
        <div class="font-norma text-#BDBDBD">{{ dataInfo.downloadable_link }}</div>
      </div>
    </div>
    <div class="btn gradient-btn mt-14" @click="navigateTo('/user/proposal')">
      <div>Back</div>
    </div>
  </div>
</template>
<script setup lang="ts">
const dataInfo = ref<any>(null)
const init = async () => {
  const filmForm = localStorage.getItem('artForm')
  dataInfo.value = JSON.parse(filmForm)
}
onMounted(() => {
  init()
})
</script>
