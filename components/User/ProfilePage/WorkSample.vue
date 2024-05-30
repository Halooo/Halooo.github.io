<template>
  <div class="mt-12">
    <div class="font-medium text-2xl PPHattonMedium">Work Samples</div>
    <div class="space-y-8 mt-12">
      <div v-for="(item, index) in ruleForm.sampleList" :key="index" class="border-b border-#474747 pb-16 space-y-8">
        <el-form :ref="getFormRef(index)" class="space-y-8" :model="item" :rules="rules" require-asterisk-position="right" label-position="top">
          <div class="space-x-3">
            <span>Work Sample{{ index + 1 }}</span>
            <span class="text-#ffffff underline underline-offset-2 cursor-pointer" @click="removeAward(index, item)">REMOVE</span>
            <span v-if="editableOrNot(item)" class="text-#ffffff underline underline-offset-2 cursor-pointer" @click="item.isEdit = true">EDIT</span>
          </div>
          <el-form-item label="Type" prop="type">
            <el-select v-model="item.type" class="w-full" placeholder="Select" :disabled="editableOrNot(item)">
              <el-option v-for="_item in optionsTypes" :key="_item.value" :label="_item.label" :value="_item.value" />
            </el-select>
          </el-form-item>
          <div class="space-x-8 flex justify-between">
            <div class="w-1/2">
              <el-form-item label="Work Sample Title" prop="title">
                <el-input v-model.trim="item.title" placeholder="" clearable :disabled="editableOrNot(item)" />
              </el-form-item>
            </div>
            <div class="w-1/2">
              <el-form-item label="Link" prop="link">
                <el-input v-model.trim="item.link" placeholder="" clearable :disabled="editableOrNot(item)" />
              </el-form-item>
            </div>
          </div>
          <el-form-item v-if="item.type === 'youtube_link'" label="Youtube Link" prop="video_link">
            <el-input v-model.trim="item.video_link" placeholder="" clearable :disabled="editableOrNot(item)" />
          </el-form-item>
          <el-form-item v-if="item.type === 'vimeo_link'" :label="item.type === 'youtube_link' ? 'Youtube Link' : 'Vimeo Link'" prop="video_link">
            <el-input v-model.trim="item.video_link" placeholder="" clearable :disabled="editableOrNot(item)" />
          </el-form-item>
          <el-form-item prop="poster_image">
            <div class="space-y-4">
              <div class="font-normal text-lg PolySansNeutral">Upload Title Image <span class="text-#ffffff"> *Acceptable format: jpg.</span></div>
              <div v-for="(item_image, index_image) in item.poster_image" :key="index_image" class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16">
                <span class="font-normal text-sm PolySansNeutral">{{ item_image.file_name }}</span>
                <div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4">
                  <span class="underline underline-offset-2 cursor-pointer">
                    <a :href="item_image.fullurl" target="_blank">VIEW</a>
                  </span>
                  <span v-if="!editableOrNot(item)" class="underline underline-offset-2 uppercase cursor-pointer" @click="removeFile(item, index_image, 'poster_image')">Remove</span>
                </div>
              </div>
              <div v-if="!editableOrNot(item)" class="flex">
                <ElementDragUpload v-model:model-value="item.poster_image" :limit="1" :accept="'image/jpg,image/png,image/jpeg,image/gif,image/webp'">
                  <div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer">
                    <span class="font-normal text-sm PolySansNeutral uppercase">ADD Image</span>
                  </div>
                </ElementDragUpload>
              </div>
            </div>
          </el-form-item>
          <el-form-item v-if="item.type === 'video'" prop="video_file">
            <div class="space-y-4">
              <div class="font-normal text-lg PolySansNeutral">Upload Work Sample Video <span class="text-#ffffff"> *Acceptable format: mp4.</span></div>
              <div v-for="(item_video, index_video) in item.video_file" :key="index_video" class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16">
                <span class="font-normal text-sm PolySansNeutral">{{ item_video.file_name }}</span>
                <div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4">
                  <span class="underline underline-offset-2 cursor-pointer">
                    <a :href="item_video.fullurl" target="_blank">VIEW</a>
                  </span>
                  <span v-if="!editableOrNot(item)" class="underline underline-offset-2 uppercase cursor-pointer" @click="removeFile(item, index_video, 'video_file')">Remove</span>
                </div>
              </div>
              <div v-if="!editableOrNot(item)" class="flex">
                <ElementDragUpload v-model:model-value="item.video_file" :accept="'video/mp4'" :limit="1">
                  <div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer">
                    <span class="font-normal text-sm PolySansNeutral uppercase">ADD Video</span>
                  </div>
                </ElementDragUpload>
              </div>
            </div>
          </el-form-item>
          <div v-if="!editableOrNot(item)" class="btn gradient-btn mt-14" @click="handleSubmit(index, item)">
            <div>update</div>
          </div>
        </el-form>
      </div>
      <div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" @click="addSample">
        <span class="font-normal text-sm PolySansNeutral uppercase">ADD MORE SAMPLE</span>
      </div>
    </div>
    <FeedbackModal :model-value="drawerShow('OkBox')">
      <FeedbackModalUserOkBox @update:model-value="drawerClose">
        <template #title>{{ okBoxPrompt.title }}</template>
        <template #describe>{{ okBoxPrompt.describe }}</template>
      </FeedbackModalUserOkBox>
    </FeedbackModal>
  </div>
</template>
<script setup lang="ts">
import type { FormInstance } from 'element-plus'
const formRefs = ref<Record<number, FormInstance | undefined>>({})
const user_store = useUserPinia()
const ruleForm = reactive<any>({
  sampleList: []
})
const drawerName = ref<string>()
const okBoxPrompt = reactive<any>({
  title: '',
  describe: ''
})
const drawerShow = computed(() => (name) => (name === drawerName.value ? true : false))
const drawerClose = (value) => {
  if (!value) drawerName.value = ''
}
const rules = reactive({
  type: [{ required: true, message: 'Please select the type', trigger: 'blur' }],
  title: [{ required: true, message: 'Please enter the title ', trigger: 'blur' }],
  video_link: [{ required: true, message: 'Please enter the link ', trigger: 'blur' }],
  poster_image: [{ required: true, message: 'Please upload the image ', trigger: 'change' }],
  video_file: [{ required: true, message: 'Please upload the video ', trigger: 'change' }]
})

const optionsTypes = [
  { value: 'image', label: 'Image' },
  { value: 'video', label: 'Video' },
  { value: 'youtube_link', label: 'Youtube Link' },
  { value: 'vimeo_link', label: 'Vimeo Link' }
]
// 提交表单
const handleSubmit = async (index: number, item: any) => {
  const formEl = formRefs.value[index]
  if (!formEl) return
  await formEl.validate()
  const param = JSON.parse(JSON.stringify(item))
  if (param.poster_image.length > 0) {
    param.poster_image = param.poster_image.map((v) => v.url).join(',')
  }
  if (param.video_file.length > 0) {
    param.video_file = param.video_file.map((v) => v.url).join(',')
  }
  if (item.id) {
    // 修改作品
    const res = await updateWork({ ...param })
    okBoxPrompt.title = 'Change Updated!'
    okBoxPrompt.describe = res.msg
  } else {
    // 添加作品
    const res = await workUpload({ ...param })
    okBoxPrompt.title = 'Added!'
    okBoxPrompt.describe = res.msg
  }
  drawerName.value = 'OkBox'
  workListFn()
}
// 是否可编辑
const editableOrNot = computed(() => {
  return (item) => {
    return item.id && !item.isEdit
  }
})
// 新增模块
const addSample = () => {
  if (ruleForm.sampleList.length < 3) {
    ruleForm.sampleList.push({
      type: '',
      title: '',
      link: '',
      video_link: '',
      poster_image: [],
      video_file: []
    })
  } else {
    okBoxPrompt.title = 'Warning!'
    okBoxPrompt.describe = 'Only three works can be added!'
    drawerName.value = 'OkBox'
  }
}
const getFormRef = (index: number) => {
  return (el: FormInstance) => {
    formRefs.value[index] = el
  }
}
// 删除图片/视频文件
const removeFile = (item, index, name) => {
  item[name].splice(index, 1)
}
// 删除项
const removeAward = async (index: number, item: any) => {
  if (item.id) {
    const res = await delWork(item.id)
    okBoxPrompt.title = 'Deleted!'
    okBoxPrompt.describe = res.msg
    drawerName.value = 'OkBox'
    workListFn()
  } else {
    ruleForm.sampleList.splice(index, 1)
  }
}
// 作品列表
const workListFn = async () => {
  const { user_id } = user_store.getUserInfo
  const { data } = await apiIndexWorkList(user_id)
  if (process.client) console.log('作品列表', data)
  ruleForm.sampleList = data.value.data
  ruleForm.sampleList.forEach((item) => {
    item.poster_image.forEach((image) => {
      image.file_name = image.file_text
      image.fullurl = image.url = image.file_url
      delete image.file_text
      delete image.file_url
    })

    item.video_file.forEach((video) => {
      video.file_name = video.file_text
      video.fullurl = video.url = video.file_url
      delete video.file_text
      delete video.file_url
    })
  })
}
workListFn()
</script>
<style lang="scss" scoped></style>
