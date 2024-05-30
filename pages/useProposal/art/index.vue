<template>
  <div class="w-full h-full space-y-16">
    <p class="font-medium text-5xl PPHattonMedium">Art Proposal</p>
    <el-form ref="formRef" :rules="rules" :model="form" require-asterisk-position="right" label-position="top" class="space-y-8">
      <div class="flex items-center space-x-6">
        <div class="w-5 h-5 border-1 border-#F5F5F5 flex items-center justify-center cursor-pointer" :class="form.is_grant ? 'bg-#715B00 ' : ''" @click="form.is_grant = !form.is_grant">
          <Icon v-if="form.is_grant" name="ep:check" />
        </div>
        <div class="flex-1 font-normal text-lg PolySansNeutral">
          I am submitting to<br />
          Stars Collective Grants: Unleashing Action Storytellings
        </div>
      </div>
      <el-form-item label="Project Name" prop="project_name">
        <el-input v-model="form.project_name" />
      </el-form-item>
      <el-form-item label="" prop="type">
        <div class="w-full">Project Type<span class="text-#ffffff ml-2">*e.g. still images, GIFs, video, text, music…</span></div>
        <el-input v-model="form.type" />
      </el-form-item>
      <el-form-item label="Total Number of Items" prop="nums">
        <el-input v-model="form.nums" type="number" />
      </el-form-item>
      <el-form-item label="Project Description" prop="project_description">
        <el-input v-model="form.project_description" :rows="5" type="textarea" />
        <p class="font-light text-xs PolySansNeutral mt-2">Keep it to 1-2 sentences</p>
      </el-form-item>
      <el-form-item label="Attachment(s)" prop="attachment_files">
        <div class="space-y-4">
          <div v-for="(item_attachment, index_attachment) in attachment_files" :key="index_attachment" class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16">
            <span class="font-normal text-sm PolySansNeutral">{{ item_attachment.file_name }}</span>
            <div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4">
              <span class="underline underline-offset-2 cursor-pointer">
                <a :href="item_attachment.fullurl" target="_blank">VIEW</a>
              </span>
              <span class="underline underline-offset-2 uppercase cursor-pointer" @click="removeFile(index_attachment)">Remove</span>
            </div>
          </div>
          <div class="flex">
            <ElementDragUpload v-model="attachment_files">
              <div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer">
                <span class="font-normal text-sm PolySansNeutral uppercase">ATTACH FILES</span>
              </div>
            </ElementDragUpload>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="Downloadable Link to Your Project">
        <el-input v-model="form.downloadable_link" />
      </el-form-item>
      <div class="space-y-4">
        <div class="btn gradient-btn mt-10" @click="submitForm(formRef)">
          <div>Submit Proposal</div>
        </div>

        <p>* no more than 3 proposals in 30 days</p>
      </div>
    </el-form>
    <FeedbackModal :model-value="drawerShow('ProposalSub')">
      <FeedbackModalUserProposalSub path="/useProposal/art/preview" @update:model-value="drawerClose" />
    </FeedbackModal>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
const formRef = ref<FormInstance>()
const attachment_files = ref<any>([])
const drawerName = ref<string>()
const form = reactive<any>({
  is_grant: '',
  project_name: '',
  type: '',
  nums: null,
  project_description: '',
  attachment_files: '',
  downloadable_link: '',
  operate_type: '',
  id: ''
})
const rules = reactive<FormRules>({
  project_name: [{ required: true, message: 'Please enter the project name', trigger: 'blur' }],
  type: [{ required: true, message: 'Please enter the project type', trigger: 'blur' }],
  nums: [{ required: true, message: 'Please enter the totol number of items', trigger: 'blur' }],
  project_description: [{ required: true, message: 'Please enter the project description', trigger: 'blur' }],
  attachment_files: [{ required: true, message: 'lease upload the attachment', trigger: 'blur' }]
})
watchEffect(() => {
  if (attachment_files.value?.length > 0) {
    form.attachment_files = attachment_files.value.map((v) => v.url).join(',')
    formRef.value.validateField('attachment_files', () => null)
  }
})
const drawerShow = computed(() => (name) => (name === drawerName.value ? true : false))
const drawerClose = (value) => {
  if (!value) drawerName.value = ''
}
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate()
  await userArtProposal({
    ...form,
    is_grant: form.is_grant ? 'Yes' : 'No',
    operate_type: form.id ? 'edit' : 'add'
  })
  const obj = { ...form }
  obj.attachment_files = attachment_files.value
  drawerName.value = 'ProposalSub'
  localStorage.setItem('artForm', JSON.stringify(obj))
}
// 删除文件
const removeFile = (index) => {
  attachment_files.value.splice(index, 1)
}
</script>
