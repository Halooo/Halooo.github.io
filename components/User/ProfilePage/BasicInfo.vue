<template>
  <div class="mt-12">
    <el-form ref="formRef" :model="form" :rules="rules" require-asterisk-position="right" label-position="top" class="space-y-8">
      <el-form-item prop="profile_avatar">
        <div class="w-full space-y-4">
          <div class="font-medium text-2xl PPHattonMedium">Profile</div>
          <div class="font-normal text-lg PolySansNeutral">Profile Picturew <span class="text-#ffffff">* h 800*450</span></div>
          <div v-for="(item_profile, index_profile) in profile_avatar" :key="index_profile" class="space-y-4">
            <div class="w-31 h-31 bg-white rounded-full overflow-hidden">
              <img :src="item_profile.fullurl" class="w-full h-full object-cover" />
            </div>
            <div class="w-full pb-60% relative">
              <img :src="item_profile.fullurl" class="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <div class="flex">
              <ElementDragUpload v-model="profile_avatar" :limit="1" :accept="'image/jpg,image/png,image/jpeg,image/gif,image/webp'">
                <div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer">
                  <span class="font-normal text-sm PolySansNeutral uppercase">upload to replace</span>
                </div>
              </ElementDragUpload>
            </div>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="Bio" prop="introduce">
        <el-input v-model.trim="form.introduce" :rows="5" type="textarea" placeholder="" clearable />
      </el-form-item>
      <el-form-item prop="profile_avatar">
        <div class="space-y-4">
          <div class="font-normal text-lg PolySansNeutral">Resume <span class="text-#ffffff">acceptable format：pdf</span></div>
          <div v-for="(item_resume, index_resume) in resume_files" :key="index_resume" class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16">
            <span class="font-normal text-sm PolySansNeutral">{{ item_resume.file_name }}</span>
            <div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4">
              <span class="underline underline-offset-2 cursor-pointer">
                <a :href="item_resume.fullurl" target="_blank">VIEW</a>
              </span>
              <span class="underline underline-offset-2 uppercase cursor-pointer" @click="removeFile(index_resume)">Remove</span>
            </div>
          </div>
          <div class="flex">
            <ElementDragUpload v-model="resume_files" :accept="'application/pdf'">
              <div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer">
                <span class="font-normal text-sm PolySansNeutral uppercase">ATTACH FILES</span>
              </div>
            </ElementDragUpload>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="Type" prop="type">
        <ClientOnly>
          <el-select v-model="form.type" placeholder="Select" multiple class="w-full">
            <el-option v-for="item_typeOption in typeOption" :key="item_typeOption.value" :label="item_typeOption.label" :value="item_typeOption.value" class="w-full">
              <div class="h-15 flex justify-between items-center">
                <span class="text-#F5F5F5">{{ item_typeOption.label }}</span>
                <div class="w-5 h-5 border-1 border-#F5F5F5 text-#F5F5F5 flex items-center justify-center cursor-pointer" :class="form.type.includes(item_typeOption.value) ? 'bg-#715B00 ' : ''">
                  <Icon v-if="form.type.includes(item_typeOption.value)" name="ep:check" />
                </div>
              </div>
            </el-option>
          </el-select>
        </ClientOnly>
      </el-form-item>
      <el-form-item label="Title" prop="category">
        <el-input v-model="form.category" />
      </el-form-item>
      <el-form-item label="Personal Website" prop="website">
        <el-input v-model.trim="form.website" placeholder="" clearable />
      </el-form-item>
      <el-form-item label="Social Media " prop="social_media">
        <ClientOnly>
          <el-select v-model="form.social_media" placeholder="Select" class="w-full">
            <el-option v-for="item_socialMediaOption in socialMediaOption" :key="item_socialMediaOption.value" :label="item_socialMediaOption.label" :value="item_socialMediaOption.value">
              <div class="h-15 flex items-center">
                <span class="text-#F5F5F5">{{ item_socialMediaOption.label }}</span>
              </div>
            </el-option>
          </el-select>
        </ClientOnly>
      </el-form-item>
      <el-form-item label="Social Media Link" prop="social_media_url">
        <el-input v-model.trim="form.social_media_url" placeholder="" clearable />
      </el-form-item>
      <el-form-item label="Where Are You Located" prop="area">
        <ClientOnly>
          <el-select v-model="form.area" placeholder="Select" class="w-full">
            <el-option v-for="item_areaOption in areaOption" :key="item_areaOption.value" :label="item_areaOption.label" :value="item_areaOption.value">
              <div class="h-15 flex items-center">
                <span class="text-#F5F5F5">{{ item_areaOption.label }}</span>
              </div>
            </el-option>
          </el-select>
        </ClientOnly>
      </el-form-item>
      <div class="btn gradient-btn mt-14" @click="submitForm(formRef)">
        <div>update</div>
      </div>
    </el-form>
    <FeedbackModal :model-value="drawerShow('OkBox')">
      <FeedbackModalUserOkBox @update:model-value="drawerClose">
        <template #title>{{ okBoxPrompt.title }}</template>
        <template #describe>{{ okBoxPrompt.describe }}</template>
      </FeedbackModalUserOkBox>
    </FeedbackModal>
  </div>
</template>
<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
const formRef = ref<FormInstance>()
const drawerName = ref<string>('')
const profile_avatar = ref<any>([])
const resume_files = ref<any>([])
const user_store = useUserPinia()
const okBoxPrompt = ref<any>({
  title: 'Success!',
  describe: ''
})
const form = reactive({
  type: [],
  profile_avatar: '',
  category: '',
  resume_files: '',
  website: '',
  area: '',
  introduce: '',
  social_media: '',
  social_media_url: ''
})
const rules = reactive<FormRules>({
  type: [{ required: true, message: 'Please select the type', trigger: 'change' }],
  category: [{ required: true, message: 'Please enter the category', trigger: 'blur' }],
  website: [{ required: true, message: 'Please enter the personal website ', trigger: 'blur' }],
  area: [{ required: true, message: 'Please enter the Located', trigger: 'change' }]
})
const typeOption = [
  {
    value: 'Filmmaker',
    label: 'Filmmaker'
  },
  {
    value: 'Artist (Hover state)',
    label: 'Artist (Hover state)'
  }
]
const socialMediaOption = [
  {
    value: 'Vimeo',
    label: 'Vimeo'
  }
]
const areaOption = [
  {
    value: 'North America',
    label: 'North America'
  },
  {
    value: 'South America',
    label: 'South America'
  },
  {
    value: 'Europe',
    label: 'Europe'
  },
  {
    value: 'Asia Pacific',
    label: 'Asia Pacific'
  },
  {
    value: 'Africa',
    label: 'Africa'
  }
]
const drawerShow = computed(() => (name) => (name === drawerName.value ? true : false))
const drawerClose = (value) => {
  if (!value) drawerName.value = ''
}
// 修改个人信息
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await VerifyFrom(formEl)
  const param = JSON.parse(JSON.stringify(form))
  if (resume_files.value?.length > 0) {
    param.resume_files = resume_files.value.map((v) => v.url).join(',')
  }
  if (profile_avatar.value?.length > 0) {
    param.profile_avatar = profile_avatar.value.map((v) => v.url).join(',')
  }
  param.type = param.type.join(',')
  const res = await userProfile({ ...param })
  okBoxPrompt.value.describe = res.msg
  drawerName.value = 'OkBox'
  const { data } = await userMsg()
  user_store.setUserInfo(data)
}
// 删除文件
const removeFile = (index) => {
  resume_files.value.splice(index, 1)
}
// 个人信息数据
const init = () => {
  if (user_store.getUserInfo) {
    const { type, introduce, area, website, category, social_media, social_media_url } = user_store.getUserInfo
    if (type.split) form.type = type.split(',')
    form.introduce = introduce
    form.area = area
    form.category = category
    form.website = website
    form.social_media = social_media
    form.social_media_url = social_media_url
    user_store.getUserInfo.profile_avatar.map((item) => {
      profile_avatar.value.push({ file_name: item.file_text, fullurl: item.file_url, url: item.file_url })
    })
    user_store.getUserInfo.resume_files.map((item) => {
      resume_files.value.push({ file_name: item.file_text, fullurl: item.file_url, url: item.file_url })
    })
  }
}
init()
</script>
<style lang="scss" scoped></style>
