<template>
  <div class="py-10 px-9 space-y-14">
    <div class="w-full flex justify-between items-center">
      <span class="font-medium text-4xl PPHattonMedium">Message</span>
      <span class="font-light text-sm PolySansNeutral text-#ffffff uppercase underline underline-offset-2 cursor-pointer" @click="navigateTo('/user/notificatSet')"> Notification </span>
    </div>
    <div class="w-full flex scrollbar_box">
      <div class="w-80 max-h-160 flex flex-col border border-#2F2F2F">
        <div class="w-full h-12 uppercase flex items-center px-4 border-b border-#2F2F2F cursor-pointer" @click="initSearchPeople">Search people</div>
        <div class="w-full flex-1 overflow-y-auto">
          <div
            v-for="(item, index) in messageUserList"
            :key="index"
            class="w-full border-b border-#2F2F2F p-4 flex space-x-4 cursor-pointer"
            :class="{ selected: selectedRecipients.id === item.id }"
            @click="lookMessageContent(item)"
          >
            <div v-for="(item_avatar, index_avatar) in item.profile_avatar" :key="index_avatar" class="w-15 h-15">
              <img :src="item_avatar.file_url" class="w-full h-full object-cover rounded-full" />
            </div>
            <div class="flex-1 space-y-2">
              <span>{{ item.first_name }} {{ item.last_name }}</span>
            </div>
            <div class="space-y-4">
              <div class="">{{ item.times_text }}</div>
              <div v-if="Number(item.unread) > 0" class="w-6 h-6 bg-#ffffff rounded-full flex justify-center items-center text-black">{{ item.unread }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 max-h-160 flex flex-col border border-#2F2F2F">
        <template v-if="selectedRecipients.id">
          <div class="h-12 flex items-center px-8 border-b border-#2F2F2F">
            <span class="text-#ffffff"> {{ selectedRecipients.first_name }} {{ selectedRecipients.last_name }}</span>
          </div>
        </template>
        <template v-else>
          <div class="el-search h-12 uppercase flex items-center px-8 border-b border-#2F2F2F uppercase">
            <el-input v-model="form.search" placeholder="Type a name..." @change="handleSearch" />
          </div>
        </template>
        <div class="flex-1 overflow-y-auto">
          <template v-if="selectedRecipients.id">
            <div
              v-for="(item_messageArr, index_messageArr) in messageArr"
              :key="index_messageArr"
              class="w-full px-9 py-7 flex"
              :class="user_store.getUserInfo.id === item_messageArr.sender.id ? 'flex-row-reverse' : ''"
            >
              <div v-for="(item_, index_) in item_messageArr.sender.profile_avatar" :key="index_" class="w-10 h-10 mx-4">
                <img :src="item_.file_url" class="w-full h-full object-cover rounded-full" />
              </div>
              <div class="flex-1 flex flex-col space-y-4 font-normal text-sm PolySansNeutral" :class="user_store.getUserInfo.id === item_messageArr.sender.id ? 'items-end' : ''">
                <div class="text-#F5F5F5 space-x-3">
                  <span>{{ item_messageArr.sender.first_name }}{{ item_messageArr.sender.id }} </span>
                  <span> {{ item_messageArr.sender.last_name }} </span>
                  <span>·</span>
                  <span>{{ item_messageArr.times_text }} </span>
                </div>
                <div v-if="item_messageArr.type === '0'" class="text-#616161 break-all">
                  {{ item_messageArr.content }}
                </div>
                <template v-if="item_messageArr.type === '1'">
                  <div v-for="(item_content, index_content) in item_messageArr.content" :key="index_content" class="w-full">
                    <img :src="item_content.file_url" class="w-full h-full object-cover" />
                  </div>
                </template>
                <template v-if="item_messageArr.type === '2'">
                  <div v-for="(_item, _index) in item_messageArr.content" :key="_index" class="w-fit flex items-center border border-#747474 py-2 px-4 cursor-pointer">
                    <span class="font-normal text-sm PolySansNeutral">
                      <a :href="_item.file_url" target="_blank">{{ _item.file_text }}</a>
                    </span>
                  </div>
                </template>
              </div>
            </div>
          </template>
          <template v-else>
            <div v-for="(item_leave_user, index_leave_user) in leaveUserList" :key="index_leave_user" class="w-full px-9 py-5 flex space-x-4 cursor-pointer" @click="addPeopleMessage(item_leave_user)">
              <div v-for="(item_, index_) in item_leave_user.profile_avatar" :key="index_" class="w-15 h-15 rounded-full">
                <img :src="item_.file_url" class="w-full h-full object-cover rounded-full" />
              </div>
              <div class="flex-1 flex flex-col space-y-4 font-normal text-sm PolySansNeutral">
                <span class="text-#F5F5F5">{{ item_leave_user.first_name }} {{ item_leave_user.last_name }}</span>
                <span class="text-#616161">{{ item_leave_user.times_text }}</span>
              </div>
            </div>
          </template>
        </div>
        <div v-if="selectedRecipients.id" class="border-t border-#2A2A2A">
          <div class="p-4 textarea-box text-white">
            <el-input v-model="form.message" :rows="3" type="textarea" placeholder="Write a message..." />
          </div>
          <div class="w-full bg-#2A2A2A flex flex-wrap justify-between items-center px-4 py-3">
            <div class="flex space-x-4">
              <ElementDragUpload :accept="'image/jpg,image/png,image/jpeg,image/gif,image/webp'" :limit="1" @success="handleImagesFileSuccess">
                <div class="uppercase text-#ffffff space-x-1 flex items-center cursor-pointer">
                  <span>IMAGE </span>
                  <Icon name="ic:outline-plus" size="24" />
                </div>
              </ElementDragUpload>
              <ElementDragUpload :limit="1" @success="handleAdditionalFileSuccess">
                <div class="uppercase text-#ffffff space-x-1 flex items-center cursor-pointer">
                  <span>FILE</span>
                  <Icon name="ic:outline-plus" size="24" />
                </div>
              </ElementDragUpload>
            </div>
            <div class="btn gradient-btn p-3 px-6" @click="sendMessage(form.message, '0')">
              <div>Send Message</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const form = reactive({
  message: '',
  search: '',
  file: '',
  type: '0'
})
const selectedRecipients = ref<any>({})
const messageUserList = ref<any>([])
const leaveUserList = ref<any>([])
const messageArr = ref<any>([])
const user_store = useUserPinia()

const handleImagesFileSuccess = async (files) => {
  const content = files.map((v) => v.url).join(',')
  await sendMessage(content, '1')
}

const handleAdditionalFileSuccess = async (files) => {
  const content = files.map((v) => v.url).join(',')
  await sendMessage(content, '2')
}

// 添加留言人
const addPeopleMessage = async (item) => {
  await addLeaveMessageUser(item.id)
  await getLeaveMessageUserList('messageUserList')
  lookMessageContent(item)
}

// 查看留言人消息内容
const lookMessageContent = async (item) => {
  selectedRecipients.value = item
  const { id } = selectedRecipients.value
  if (selectedRecipients.value.unread > 0) {
    await readMessage(id)
    item.unread = 0
  }
  const { data } = await leaveMessageList(id)
  messageArr.value = data
}

// 留言人列表查询
const getLeaveMessageUserList = async (name) => {
  const search = name === 'messageUserList' ? '' : form.search
  const res = await leaveMessageUserList(search)
  if (name === 'messageUserList') messageUserList.value = res.data
  // 查询列表
  if (name === 'leaveUserList') leaveUserList.value = res.data
}
// 重新搜索留言人
const initSearchPeople = () => {
  selectedRecipients.value = {}
  leaveUserList.value = []
  form.search = ''
}

// 初始化留言人列表
getLeaveMessageUserList('messageUserList')
// 搜索留言人列表
const handleSearch = () => {
  getLeaveMessageUserList('leaveUserList')
}

// 发送消息
const sendMessage = async (content, type) => {
  await addLeaveMessage(selectedRecipients.value?.id, type, content)
  await lookMessageContent(selectedRecipients.value)
  form.message = ''
}
</script>
<style lang="scss">
.selected {
  background: #2a2a2a;
}
</style>
