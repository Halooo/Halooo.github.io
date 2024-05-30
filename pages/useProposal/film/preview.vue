<template>
  <div class="w-full h-full">
    <p class="font-medium text-5xl PPHattonMedium mb-21">Submitted Film Proposal</p>
    <div v-if="dataInfo" class="space-y-4 pl-5">
      <div class="border-b border-#2F2F2F pb-12 space-y-4 flex flex-col text-lg PolySansNeutral">
        <span class="font-semibold">Project Name</span>
        <span class="font-normal text-#BDBDBD">{{ dataInfo.project_name }}</span>
        <span class="font-semibold">Genre</span>
        <span class="font-norma text-#BDBDBD">{{ dataInfo.genre }}</span>
        <span class="font-semibold">Budget</span>
        <span class="font-norma text-#BDBDBD">{{ dataInfo.budget }}</span>
      </div>
      <div class="border-b border-#2F2F2F pb-12 text-lg PolySansNeutral">
        <span class="font-semibold">Synopsis</span>
        <div class="font-normal text-#BDBDBD mt-4">
          {{ dataInfo.synopsis }}
        </div>
      </div>
      <div class="border-b border-#2F2F2F pb-12 text-lg PolySansNeutral">
        <span class="font-semibold">Stage</span>
        <div class="font-normal text-#BDBDBD mt-4">
          {{ dataInfo.stage }}
        </div>
      </div>
      <div class="border-b border-#2F2F2F pb-12 text-lg PolySansNeutral">
        <span class="font-semibold">Are you willing to let Stars option or buyout the IP if Stars selected </span>
        <div class="font-normal text-#BDBDBD mt-4">
          {{ dataInfo.ip }}
        </div>
      </div>
      <div class="border-b border-#2F2F2F pb-12 text-lg PolySansNeutral space-y-4">
        <span class="font-semibold">Pitch Deck </span>
        <div v-for="(item, index) in dataInfo.pitch_deck_file" :key="index" class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16">
          <span class="font-normal text-sm PolySansNeutral">{{ item.file_name }}</span>
          <span class="font-normal text-sm PolySansNeutral underline underline-offset-2 uppercase cursor-pointer text-#ffffff">
            <a :href="item.file_url" target="_blank">VIEW</a>
          </span>
        </div>
      </div>

      <div class="border-b border-#2F2F2F pb-12 text-lg PolySansNeutral space-y-4">
        <span class="font-semibold">Script/Treatment </span>
        <div v-for="(item, index) in dataInfo.script_file" :key="index" class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16">
          <span class="font-normal text-sm PolySansNeutral">{{ item.file_name }}</span>
          <span class="font-normal text-sm PolySansNeutral underline underline-offset-2 uppercase cursor-pointer text-#ffffff">
            <a :href="item.file_url" target="_blank">VIEW</a>
          </span>
        </div>
      </div>

      <div class="text-lg PolySansNeutral space-y-4">
        <span class="font-semibold">Financial Plan </span>
        <div v-for="(item, index) in dataInfo.financial_plan_file" :key="index" class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16">
          <span class="font-normal text-sm PolySansNeutral">{{ item.file_name }}</span>
          <span class="font-normal text-sm PolySansNeutral underline underline-offset-2 uppercase cursor-pointer text-#ffffff">
            <a :href="item.file_url" target="_blank">VIEW</a>
          </span>
        </div>
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
  const filmForm = localStorage.getItem('filmForm')
  dataInfo.value = JSON.parse(filmForm)
}
onMounted(() => {
  init()
})
</script>
