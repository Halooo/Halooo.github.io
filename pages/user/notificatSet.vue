<template>
  <div class="w-full h-full pt-10 pb-32 pl-9 pr-28 space-y-12">
    <p class="font-medium text-4xl PPHattonMedium">Notification Settings</p>
    <div class="space-y-4">
      <div class="font-semibold text-lg PolySansNeutral">
        Email Notification
        <span class="text-#ffffff cursor-pointer" @click="navigateTo('/user/account')">Update Email Address</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="font-normal text-lg PolySansNeutral">New messages</span>
        <div class="cursor-pointer flex items-center w-28 h-9 bg-#2F2F2F text-[Lausanne] text-white">
          <div class="flex items-center justify-center h-full w-14" :class="{ switch_is_open: switchStatus(form.new_message) }" @click="emailNotice_fn('new_message', '1')">
            <span class="font-normal text-lg PolySansNeutral">off</span>
          </div>
          <div class="flex items-center justify-center h-full w-14" :class="{ switch_is_open: !switchStatus(form.new_message) }" @click="emailNotice_fn('new_message', '0')">
            <span class="font-normal text-lg PolySansNeutral">on</span>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <span class="font-normal text-lg PolySansNeutral">Proposal updates</span>
        <div class="cursor-pointer flex items-center w-28 h-9 bg-#2F2F2F text-[Lausanne] text-white">
          <div class="flex items-center justify-center h-full w-14" :class="{ switch_is_open: switchStatus(form.proposal_update) }" @click="emailNotice_fn('proposal_update', '1')">
            <span class="font-normal text-lg PolySansNeutral">off</span>
          </div>
          <div class="flex items-center justify-center h-full w-14" :class="{ switch_is_open: !switchStatus(form.proposal_update) }" @click="emailNotice_fn('proposal_update', '0')">
            <span class="font-normal text-lg PolySansNeutral">on</span>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <span class="font-normal text-lg PolySansNeutral">Events info</span>
        <div class="cursor-pointer flex items-center w-28 h-9 bg-#2F2F2F text-[Lausanne] text-white">
          <div class="flex items-center justify-center h-full w-14" :class="{ switch_is_open: switchStatus(form.event_info) }" @click="emailNotice_fn('event_info', '1')">
            <span class="font-normal text-lg PolySansNeutral">off</span>
          </div>
          <div class="flex items-center justify-center h-full w-14" :class="{ switch_is_open: !switchStatus(form.event_info) }" @click="emailNotice_fn('event_info', '0')">
            <span class="font-normal text-lg PolySansNeutral">on</span>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <span class="font-normal text-lg PolySansNeutral">Stars Collective Communication</span>
        <div class="cursor-pointer flex items-center w-28 h-9 bg-#2F2F2F text-[Lausanne] text-white">
          <div class="flex items-center justify-center h-full w-14" :class="{ switch_is_open: switchStatus(form.stars_collective) }" @click="emailNotice_fn('stars_collective', '1')">
            <span class="font-normal text-lg PolySansNeutral">off</span>
          </div>
          <div class="flex items-center justify-center h-full w-14" :class="{ switch_is_open: !switchStatus(form.stars_collective) }" @click="emailNotice_fn('stars_collective', '0')">
            <span class="font-normal text-lg PolySansNeutral">on</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const form = reactive<any>({
  operate_type: 'select',
  new_message: '0',
  proposal_update: '0',
  event_info: '0',
  stars_collective: '0'
})
const switchStatus = computed(() => {
  return (state) => {
    return state === '1' ? true : false
  }
})
const emailNotice_fn = async (name, bool) => {
  if (form[name] === bool) return
  form[name] = bool
  form.operate_type = 'update'
  await emailNotice(form)
}
const init = async () => {
  form.operate_type = 'select'
  const res = await emailNotice(form)
  const { new_message, proposal_update, event_info, stars_collective } = res.data
  form.new_message = new_message.toString()
  form.proposal_update = proposal_update.toString()
  form.event_info = event_info.toString()
  form.stars_collective = stars_collective.toString()
}
init()
</script>
<style lang="scss">
.switch_is_open {
  color: black;
  background-color: #ffffff;
}
</style>
