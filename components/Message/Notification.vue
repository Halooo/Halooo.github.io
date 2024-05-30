<template>
  <div class="w-464px bg-#151515 overflow-hidden message_box">
    <div class="flex px-32px justify-between items-center py-16px">
      <div class="text-26px" style="font-family: PPHattonMedium">Message</div>
      <div class="text-#ffffff space-x-3 cursor-pointer flex items-center">
        <Icon name="material-symbols:close" size="26" @click="handleClose"></Icon>
        <Icon v-if="isDown" name="ph:caret-down" size="26" @click="handleArrow(false)"></Icon>
        <Icon v-else name="ep:arrow-up" size="26" @click="handleArrow(true)"></Icon>
      </div>
    </div>
    <div class="px-32px py-16px text-14px border-#2F2F2F border-t-1px border-b-1px">Christina White</div>

    <div class="flex-1 overflow-y-auto h-340px">
      <div
        v-for="(item_messageArr, index_messageArr) in messageResult"
        :key="index_messageArr"
        class="w-full px-9 py-7 flex"
        :class="userStore.getUserInfo.id === item_messageArr.sender.id ? 'flex-row-reverse' : ''"
      >
        <div v-for="(item_, index_) in item_messageArr.sender.profile_avatar" :key="index_" class="w-10 h-10 mx-4">
          <img :src="item_.file_url" class="w-full h-full object-cover rounded-full" />
        </div>
        <div class="flex-1 flex flex-col space-y-4 font-normal text-sm PolySansNeutral" :class="userStore.getUserInfo.id === item_messageArr.sender.id ? 'items-end' : ''">
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
    </div>

    <div class="h-84px mt-4 px-16px py-16px border-t-1px border-#2F2F2F">
      <textarea v-model="textArea" class="outline-none border-none bg-transparent h-full w-full" placeholder="Write a message..."></textarea>
    </div>
    <div class="w-full bg-#2F2F2F flex text-white justify-between p-5">
      <div class="flex space-x-4">
        <ElementDragUpload :accept="'image/jpg,image/png,image/jpeg,image/gif,image/webp'" :limit="1" @success="handleImagesFileSuccess">
          <div class="uppercase text-white space-x-1 flex items-center cursor-pointer">
            <span>IMAGE </span>
            <Icon name="ic:outline-plus" size="24" />
          </div>
        </ElementDragUpload>
        <ElementDragUpload :limit="1" @success="handleAdditionalFileSuccess">
          <div class="uppercase text-white space-x-1 flex items-center cursor-pointer">
            <span>FILE</span>
            <Icon name="ic:outline-plus" size="24" />
          </div>
        </ElementDragUpload>
      </div>
      <div class="py-2 px-6 bg-white text-black cursor-pointer" @click="sendMessage(textArea, 0)">Send Message</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'

const isDown = ref<boolean>(true)
const textArea = ref<string>('')
const messageResult = ref<any[]>([])
const additionalFile = ref<any>()
const userStore = useUserPinia()
interface Props {
  userId?: number | string
}
const props = withDefaults(defineProps<Props>(), {
  userId: null
})

const handleArrow = (_type: boolean) => {
  isDown.value = _type
  if (isDown.value) {
    gsap.to('.message_box', { y: 0, duration: 0.2 })
  } else {
    gsap.to('.message_box', { y: 500, duration: 0.2 })
  }
}

const emit = defineEmits(['upload:closeMeth'])
const handleClose = () => {
  emit('upload:closeMeth', false)
}

const handleImagesFileSuccess = async (files) => {
  const content = files.map((v) => v.url).join(',')
  await sendMessage(content, '1')
}

const handleAdditionalFileSuccess = async (files) => {
  const content = files.map((v) => v.url).join(',')
  await sendMessage(content, '2')
}

// 查看留言人消息
const lookMessageContent = async (_id) => {
  const { data } = await leaveMessageList(_id)
  messageResult.value = data
}

const sendMessage = async (content, type) => {
  await apiUserAddLeaveMessage(props.userId.toString(), type, content)
  await lookMessageContent(props.userId.toString())
  textArea.value = ''
  additionalFile.value = ''
}

lookMessageContent(props.userId.toString())
</script>
