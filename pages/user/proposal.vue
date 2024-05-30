<template>
  <div>
    <div class="w-full h-14 flex items-center pl-5 alert-bg">
      <div class="text-lg PolySansNeutral text-black">
        <!-- @click="navigateTo('/grant')" -->
        <span class="font-semibold">Stars Collective Grants Now Open! </span>
        <span>Use Proposal Portal to submit your work</span>
      </div>
    </div>
    <div class="py-10 px-9 space-y-11 mt-10">
      <div class="font-medium text-4xl PPHattonMedium">My Proposal</div>
      <div class="space-y-10">
        <div class="btn gradient-btn" @click="navigateTo('/useProposal/film')">
          <div>Submit Film Proposal</div>
        </div>
        <div class="font-normal text-sm PolySansNeutral">* no more than 3 proposals/month</div>
        <div class="btn gradient-btn" @click="navigateTo('/useProposal/art')">
          <div>Submit Art Proposal</div>
        </div>
        <div class="font-normal text-sm PolySansNeutral">* no more than 3 proposals/month</div>
      </div>
      <div class="space-y-8 collapse-box">
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item title="Proposal Timeline" name="1">
            <template #title>
              <div class="flex justify-between w-full">
                <span class="font-normal text-lg PolySansNeutral text-white">Proposal Timeline</span>
                <span class="font-normal text-lg PolySansNeutral pr-2 text-white">
                  {{ activeNames ? 'Hide' : 'View ' }}
                </span>
              </div>
            </template>
            <div class="py-12">
              <div class="relative px-16 space-y-3">
                <div v-for="(item, index) in arrTimeline" :key="index">
                  <div class="flex justify-between items-center">
                    <div class="w-fit py-4 px-8 flex items-center justify-center bg-white">
                      <span class="font-semibold text-lg PolySansNeutral text-black">{{ item }}</span>
                    </div>
                    <div class="flex-1 h-1px bg-white"></div>
                    <div class="w-32 text-center font-semibold text-lg PolySansNeutral text-white">Passed On</div>
                    <div class="w-12 h-1px bg-white"></div>
                  </div>
                  <div class="flex items-center space-x-6 pl-8">
                    <div class="w-1px h-14 bg-white flex items-end justify-center relative">
                      <span class="text-white absolute -bottom-2">
                        <Icon name="radix-icons:triangle-down" size="18" />
                      </span>
                    </div>
                    <span class="font-semibold text-lg PolySansNeutral text-white">Approved</span>
                  </div>
                </div>
                <div class="w-1px absolute top-4% right-16 bottom-0 bg-white flex items-end justify-center">
                  <span class="text-white absolute -bottom-2">
                    <Icon name="radix-icons:triangle-down" size="18" />
                  </span>
                </div>
              </div>
              <div class="pl-19 pr-20 mt-3 flex items-center justify-between">
                <div class="w-fit px-8 py-4 flex items-center justify-center bg-#ffffff">
                  <span class="font-semibold text-lg PolySansNeutral text-black">
                    Confirming Production & <br />
                    Financing Details
                  </span>
                </div>
                <div class="font-semibold text-lg PolySansNeutral text-#ffffff">
                  Feedback and Notes wil<br />
                  be directly provided
                </div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
        <div>
          <p class="font-normal text-sm PolySansNeutral uppercase mb-8">Initial aPPLICATION</p>
          <div class="space-y-8 min-w-120 overflow-hidden">
            <ul v-for="(item, index) in dataInfo" :key="index" class="flex justify-between border border-#747474 py-8 px-6">
              <li class="flex flex-col space-y-8">
                <span class="font-normal text-sm PolySansNeutral uppercase">TYPE</span>
                <span class="font-light text-lg PolySansNeutral">{{ item.type }}</span>
              </li>
              <li class="flex flex-col space-y-8">
                <span class="font-normal text-sm PolySansNeutral uppercase">Case Number</span>
                <span class="font-light text-lg PolySansNeutral underline underline-offset-2 cursor-pointer" @click="navigateTo(`/useProposal/${item.type === 'Film' ? 'film' : 'art'}/${item.id}`)">{{
                  item.num
                }}</span>
              </li>
              <li class="flex flex-col space-y-8">
                <span class="font-normal text-sm PolySansNeutral uppercase">date</span>
                <span class="font-light text-lg PolySansNeutral">{{ item.create_at }}</span>
              </li>
              <li class="flex flex-col space-y-8">
                <span class="font-normal text-sm PolySansNeutral uppercase">Status</span>
                <div class="font-light text-lg PolySansNeutral flex flex-col">
                  <span v-if="item.status !== '3'" class="text-#ffffff">{{ statusReplace(item.status) }}</span>
                  <span v-if="item.status === '3'" class="text-#ffffff underline underline-offset-2 cursor-pointer" @click="handleFeedback(item)">{{ statusReplace(item.status) }}</span>
                  <span v-if="Number(item.status) === 0" class="text-#ffffff underline underline-offset-2 cursor-pointer" @click="openCancel(item)">Cancel</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <FeedbackModal :model-value="drawerShow('Cancellation')">
      <FeedbackModalUserCancellation @update:model-value="drawerClose" @submit-btb="cancelProposal" />
    </FeedbackModal>
  </div>
</template>
<script setup lang="ts">
const activeNames = ref<string>()
const dataInfo = ref<any>(null)
const drawerName = ref<string>()
const selectItem = ref<any>()
const arrTimeline = ref(['Executive Officer', 'Members of Executive Committee', 'Mentors of advisory committee', 'Investment Committee'])
const drawerShow = computed(() => (name) => (name === drawerName.value ? true : false))
const drawerClose = (value) => {
  if (!value) drawerName.value = ''
}
const statusReplace = computed(() => {
  return (status) => {
    switch (status) {
      case '0':
        return 'Pending'
      case '1':
        return 'Reviewing'
      case '2':
        return 'Success'
      case '3':
        return 'View Feedback'
    }
  }
})
// 提案申请列表
const getRoposalList = async () => {
  const res = await roposalList()
  if (process.client) console.log('提案列表', res)
  dataInfo.value = res.data
}
// 取消提案
const cancelProposal = async () => {
  const { type, id } = selectItem.value
  await setCancelProposal({ cate: type, id })
  drawerName.value = ''
  getRoposalList()
}
// 打开取消提案框
const openCancel = (item) => {
  selectItem.value = item
  drawerName.value = 'Cancellation'
}
getRoposalList()

const handleFeedback = async (item) => {
  ElMessage(item.feedback)
}
</script>
<style lang="scss" scoped>
.alert-bg {
  background: linear-gradient(270deg, #ff00d6 0%, #7b61ff 70.88%, #7193ea 96.61%);
}
</style>
