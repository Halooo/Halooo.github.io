<template>
  <div>
    <NuxtLayout name="custom">
      <div class="relative">
        <div class="w-210 bg-black absolute top-47 left-1/2 -translate-x-1/2 p-16 space-y-16 z-20">
          <p class="font-normal text-5xl PPHattonMedium">Application Starts Here</p>
          <div class="font-light text-lg PolySansNeutral break-words">
            Thank you for applying!<br />
            We appreciate your interest in StarsCollective. Please take your time to fill out the<br />
            form below. This will help us get to know you.
          </div>
          <el-form ref="formRef" :rules="rules" :model="form" require-asterisk-position="right" label-position="top" class="space-y-8">
            <div class="flex justify-between space-x-8">
              <el-form-item label="First Name" prop="first_name" class="flex-1">
                <el-input v-model="form.first_name" />
              </el-form-item>
              <el-form-item label="Last Name" prop="last_name" class="flex-1">
                <el-input v-model="form.last_name" />
              </el-form-item>
            </div>
            <el-form-item label="Introduce Yourself" prop="introduce">
              <el-input v-model="form.introduce" :rows="5" type="textarea" />
            </el-form-item>
            <el-form-item prop="resume_files">
              <div class="w-full">Portfolio / Resume <span class="text-#ffffff ml-2">* acceptable format：pdf</span></div>
              <div class="space-y-4">
                <div v-for="(item_resume, index_resume) in resume_files" :key="index_resume" class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16">
                  <span class="font-normal text-sm PolySansNeutral">{{ item_resume.file_name }}</span>
                  <div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4">
                    <span class="underline underline-offset-2 cursor-pointer">
                      <a :href="item_resume.fullurl" target="_blank">VIEW</a>
                    </span>
                    <span class="underline underline-offset-2 uppercase cursor-pointer" @click="removeFile(index_resume, 'resume_files')">Remove</span>
                  </div>
                </div>
                <div class="flex">
                  <ElementDragUpload v-model:model-value="resume_files">
                    <div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer">
                      <span class="font-normal text-sm PolySansNeutral">ATTACH FILES</span>
                    </div>
                  </ElementDragUpload>
                </div>
              </div>
            </el-form-item>
            <el-form-item prop="profile_avatar" label="Profile Picture">
              <div class="space-y-4">
                <div v-for="(item_profile, index_profile) in profile_avatar" :key="index_profile" class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16">
                  <span class="font-normal text-sm PolySansNeutral">{{ item_profile.file_name }}</span>
                  <div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4">
                    <span class="underline underline-offset-2 cursor-pointer">
                      <a :href="item_profile.fullurl" target="_blank">VIEW</a>
                    </span>
                    <span class="underline underline-offset-2 uppercase cursor-pointer" @click="removeFile(index_profile, 'profile_avatar')">Remove</span>
                  </div>
                </div>
                <div class="flex">
                  <ElementDragUpload v-model:model-value="profile_avatar" :limit="1" :accept="'image/jpg,image/png,image/jpeg,image/gif,image/webp'">
                    <div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer">
                      <span class="font-normal text-sm PolySansNeutral uppercase">Select file</span>
                    </div>
                  </ElementDragUpload>
                </div>
              </div>
            </el-form-item>
            <el-form-item label="Type" prop="type">
              <ClientOnly>
                <el-select v-model="form.type" placeholder="" multiple class="w-full">
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
            <el-form-item prop="category">
              <div class="w-full">Category <span class="text-#ffffff ml-2">* e.g. director, producer, writer, musician, etc…</span></div>
              <el-input v-model="form.category" />
            </el-form-item>
            <el-form-item label="Personal Website" prop="website">
              <el-input v-model="form.website" />
            </el-form-item>
            <el-form-item label="Social Media " prop="social_media">
              <ClientOnly>
                <el-select v-model="form.social_media" placeholder="" class="w-full">
                  <el-option v-for="item_socialMediaOption in socialMediaOption" :key="item_socialMediaOption.value" :label="item_socialMediaOption.label" :value="item_socialMediaOption.value">
                    <div class="h-15 flex items-center">
                      <span class="text-#F5F5F5">{{ item_socialMediaOption.label }}</span>
                    </div>
                  </el-option>
                </el-select>
              </ClientOnly>
            </el-form-item>
            <el-form-item label="Social Media Link" prop="socialMediaLink">
              <el-input v-model="form.socialMediaLink" />
            </el-form-item>
            <el-form-item label="Where Are You Located?" prop="area">
              <ClientOnly>
                <el-select v-model="form.area" placeholder="" class="w-full">
                  <el-option v-for="item_areaOption in areaOption" :key="item_areaOption.value" :label="item_areaOption.label" :value="item_areaOption.value">
                    <div class="h-15 flex items-center">
                      <span class="text-#F5F5F5">{{ item_areaOption.label }}</span>
                    </div>
                  </el-option>
                </el-select>
              </ClientOnly>
            </el-form-item>
            <el-form-item label="Primary Email" prop="email">
              <el-input v-model="form.email" />
            </el-form-item>
            <div class="flex items-center space-x-6">
              <div
                class="w-5 h-5 border-1 border-#F5F5F5 flex items-center justify-center cursor-pointer"
                :class="form.starsCollective ? 'bg-#715B00 ' : ''"
                @click="form.starsCollective = !form.starsCollective"
              >
                <Icon v-if="form.starsCollective" name="ep:check" class="" />
              </div>
              <div class="font-normal text-lg PolySansNeutral">I want to receive newsletters from StarsCollective.</div>
            </div>

            <div class="btn gradient-btn mt-16" @click="submitForm(formRef)">
              <div>SUBMIT APPLICAITON</div>
            </div>
            <div class="font-normal text-3 text-#aeaeae">
              By applying to be a Star, you agree to StarsCollective
              <span class="text-#ffffff cursor-pointer font-semibold" @click="navigateTo('/start/terms')">Terms of Use </span>and our
              <span class="text-#ffffff cursor-pointer font-semibold" @click="navigateTo('/start/privacy')"> Privacy Policy</span>
            </div>
          </el-form>
        </div>
        <FeedbackModal :model-value="drawerShow('OkBox')">
          <FeedbackModalUserOkBox :default-btn="false" @update:model-value="drawerClose">
            <template #title>{{ okBoxPrompt.title }}</template>
            <template #describe>{{ okBoxPrompt.describe }}</template>
            <template #btn>
              <div class="btn gradient-btn" @click="$router.go(-1)">
                <div>Back to Home</div>
              </div>
            </template>
          </FeedbackModalUserOkBox>
        </FeedbackModal>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import { VideoPlayer } from '@videojs-player/vue'
const formRef = ref<FormInstance>()
const drawerName = ref<string>()
const okBoxPrompt = ref<any>({
  title: 'Success!',
  describe: ''
})
const drawerShow = computed(() => (name) => (name === drawerName.value ? true : false))
const drawerClose = (value) => {
  if (!value) drawerName.value = ''
}
const profile_avatar = ref<any>([])
const resume_files = ref<any>([])
const form = reactive<any>({
  email: '',
  first_name: '',
  last_name: '',
  type: [],
  profile_avatar: '',
  category: '',
  area: '',
  website: '',
  introduce: '',
  resume_files: '',
  social_media: '',
  social_media_url: ''
})
const validateEmail = (rule: any, value: any, callback: any) => {
  if (!useEmail(value)) {
    callback(new Error('Please enter a valid email address.'))
  } else return true
}
const rules = reactive<FormRules>({
  email: [
    { required: true, message: 'Please enter the primary email', trigger: 'blur' },
    { validator: validateEmail, trigger: 'blur' }
  ],
  first_name: [{ required: true, message: 'Please enter the first name', trigger: 'blur' }],
  last_name: [{ required: true, message: 'Please enter the last name', trigger: 'blur' }],
  type: [{ required: true, message: 'Please select the type', trigger: 'change' }],
  introduce: [{ required: true, message: 'Please enter the introduce', trigger: 'blur' }],
  resume_files: [{ required: true, message: 'Please upload the resume', trigger: 'blur' }],
  profile_avatar: [{ required: true, message: 'Please upload the portfolio picture', trigger: 'blur' }],
  category: [{ required: true, message: 'Please enter the category', trigger: 'blur' }],
  website: [{ required: true, message: 'Please enter the personal website', trigger: 'blur' }],
  area: [{ required: true, message: 'Please select the located', trigger: 'change' }]
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

watchEffect(() => {
  if (resume_files.value?.length > 0) {
    form.resume_files = resume_files.value.map((v) => v.url).join(',')
    formRef.value.validateField('resume_files', () => null)
  }
  if (profile_avatar.value?.length > 0) {
    form.profile_avatar = profile_avatar.value.map((v) => v.url).join(',')
    formRef.value.validateField('profile_avatar', () => null)
  }
})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await VerifyFrom(formEl)
  const param = JSON.parse(JSON.stringify(form))
  param.type = param.type.join(',')
  const res = await apiuserapply(param)
  okBoxPrompt.value.describe = res.msg
  drawerName.value = 'OkBox'
}
// 删除文件
const removeFile = (index, name) => {
  if (name === 'profile_avatar') profile_avatar.value.splice(index, 1)
  if (name === 'resume_files') resume_files.value.splice(index, 1)
}
</script>
<style lang="scss"></style>
