<template>
  <div class="w-full h-full space-y-16">
    <p class="font-medium text-5xl PPHattonMedium">Film Proposal</p>
    <el-form ref="formRef" :rules="rules" :model="form" require-asterisk-position="right" label-position="top" class="space-y-8">
      <div class="flex items-center space-x-6">
        <div class="w-5 h-5 border-1 border-#F5F5F5 flex items-center justify-center cursor-pointer" @click="form.is_grant = !form.is_grant">
          <Icon v-if="form.is_grant" :color="form.is_grant ? '#FFFFFF' : ''" name="ep:check" />
        </div>
        <div class="flex-1 font-normal text-lg PolySansNeutral">
          I am submitting to<br />
          Stars Collective Grants: Unleashing Action Storytellings
        </div>
      </div>
      <el-form-item label="Project Name" prop="project_name">
        <el-input v-model="form.project_name" />
      </el-form-item>
      <el-form-item prop="genre">
        <div class="w-full">Genre <span class="text-#ffffff ml-2">* e.g. Thriller, video art, documentary…</span></div>
        <el-input v-model="form.genre" />
      </el-form-item>
      <el-form-item label="" prop="budget">
        <div class="w-full">Budget <span class="text-#ffffff ml-2">* US Dollar</span></div>
        <el-input v-model="form.budget" />
      </el-form-item>
      <el-form-item label="Synopsis" prop="synopsis">
        <el-input v-model="form.synopsis" :rows="5" type="textarea" />
        <p class="font-light text-xs PolySansNeutral mt-2">Keep it to 1-2 sentences</p>
      </el-form-item>
      <el-form-item label="Stage" prop="stage">
        <div class="w-full mt-6">
          <div
            v-for="(item, index) in stageOption"
            :key="index"
            class="w-full h-16 border-b border-#2A2A2A flex items-center px-8 space-x-4 cursor-pointer bg-#151515 hover:bg-#2F2F2F"
            @click="form.stage = item.value"
          >
            <div class="w-7 h-7 border-2 rounded-full flex items-center justify-center" :class="form.stage === item.value ? 'border-#ffffff' : 'border-#F5F5F5'">
              <div class="w-4 h-4 rounded-full" :class="form.stage === item.value ? 'bg-#ffffff' : ''"></div>
            </div>
            <div class="font-light text-lg PolySansNeutral">{{ item.label }}</div>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="Are you willing to let Stars option or buyout the IP if Stars selected" prop="ip">
        <div class="w-full mt-6">
          <div
            v-for="(item, index) in buyoutTheIPOption"
            :key="index"
            class="w-full h-16 border-b border-#2A2A2A flex items-center px-8 space-x-4 cursor-pointer bg-#151515 hover:bg-#2F2F2F"
            @click="form.ip = item.value"
          >
            <div class="w-7 h-7 border-2 rounded-full flex items-center justify-center" :class="form.ip === item.value ? 'border-#ffffff' : 'border-#F5F5F5'">
              <div class="w-4 h-4 rounded-full" :class="form.ip === item.value ? 'bg-#ffffff' : ''"></div>
            </div>
            <div class="font-light text-lg PolySansNeutral">{{ item.label }}</div>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="" prop="pitch_deck_file">
        <div class="w-full">Pitch Deck<span class="text-#ffffff ml-2">* acceptable format：pdf </span></div>
        <div class="space-y-4">
          <div v-for="(item_pitch, index_pitch) in pitch_deck_file" :key="index_pitch" class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16">
            <span class="font-normal text-sm PolySansNeutral">{{ item_pitch.file_name }}</span>
            <div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4">
              <span class="underline underline-offset-2 cursor-pointer">
                <a :href="item_pitch.fullurl" target="_blank">VIEW</a>
              </span>
              <span class="underline underline-offset-2 uppercase cursor-pointer" @click="removeFile(index_pitch, 'pitch_deck_file')">Remove</span>
            </div>
          </div>
          <div class="flex">
            <ElementDragUpload v-model="pitch_deck_file" :accept="'application/pdf'">
              <div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer">
                <span class="font-normal text-sm PolySansNeutral uppercase">ATTACH FILES</span>
              </div>
            </ElementDragUpload>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="" prop="script_file">
        <div class="w-full">Script/Treatment<span class="text-#ffffff ml-2">* acceptable format：pdf</span></div>
        <div class="space-y-4">
          <div v-for="(item_script, index_script) in script_file" :key="index_script" class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16">
            <span class="font-normal text-sm PolySansNeutral">{{ item_script.file_name }}</span>
            <div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4">
              <span class="underline underline-offset-2 cursor-pointer">
                <a :href="item_script.fullurl" target="_blank">VIEW</a>
              </span>
              <span class="underline underline-offset-2 uppercase cursor-pointer" @click="removeFile(index_script, 'script_file')">Remove</span>
            </div>
          </div>
          <div class="flex">
            <ElementDragUpload v-model="script_file" :accept="'application/pdf'">
              <div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer">
                <span class="font-normal text-sm PolySansNeutral uppercase">ATTACH FILES</span>
              </div>
            </ElementDragUpload>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="" prop="financial_plan_file">
        <div class="w-full">Financial Plan<span class="text-#ffffff ml-2">* acceptable format：pdf</span></div>
        <div class="space-y-4">
          <div v-for="(item_financial, index_financial) in financial_plan_file" :key="index_financial" class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16">
            <span class="font-normal text-sm PolySansNeutral">{{ item_financial.file_name }}</span>
            <div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4">
              <span class="underline underline-offset-2 uppercase cursor-pointer">
                <a :href="item_financial.fullurl" target="_blank">VIEW</a>
              </span>
              <span class="underline underline-offset-2 uppercase cursor-pointer" @click="removeFile(index_financial, 'financialPlan')">Remove</span>
            </div>
          </div>
          <div class="flex">
            <ElementDragUpload v-model="financial_plan_file" :accept="'application/pdf'">
              <div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer">
                <span class="font-normal text-sm PolySansNeutral uppercase">ATTACH FILES</span>
              </div>
            </ElementDragUpload>
          </div>
        </div>
      </el-form-item>
      <div class="space-y-4">
        <div class="btn gradient-btn mt-10" @click="submitForm(formRef)">
          <div>Submit Proposal</div>
        </div>

        <p>* no more than 3 proposals in 30 days</p>
      </div>
    </el-form>
    <FeedbackModal :model-value="drawerShow('ProposalSub')">
      <FeedbackModalUserProposalSub path="/useProposal/film/preview" @update:model-value="drawerClose" />
    </FeedbackModal>
  </div>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
const formRef = ref<FormInstance>()
const pitch_deck_file = ref<any>([])
const script_file = ref<any>([])
const financial_plan_file = ref<any>([])
const drawerName = ref<string>()
const form = reactive<any>({
  id: '',
  is_grant: false,
  project_name: '',
  genre: '',
  budget: '',
  synopsis: '',
  stage: '',
  ip: '',
  pitch_deck_file: '',
  script_file: '',
  financial_plan_file: '',
  operate_type: '',
  remark: ''
})
const stageOption = [
  { value: 'Development', label: 'Development' },
  { value: 'Pre-production', label: 'Pre-production' },
  { value: 'Production', label: 'Production' },
  { value: 'Post-production', label: 'Post-production' },
  { value: 'Type Here ...', label: 'Type Here ..' }
]
const buyoutTheIPOption = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
  { value: 'Will Consider', label: 'Will Consider' },
  { value: 'Post-production', label: 'Post-production' },
  { value: 'Other', label: 'Other' }
]

const rules = reactive<FormRules>({
  project_name: [{ required: true, message: 'Please enter the project name', trigger: 'blur' }],
  genre: [{ required: true, message: 'Please enter the genre', trigger: 'blur' }],
  budget: [{ required: true, message: 'Please enter the budget', trigger: 'blur' }],
  synopsis: [{ required: true, message: 'Please enter the synopsis', trigger: 'blur' }],
  stage: [{ required: true, message: 'Please select the stage', trigger: 'blur' }],
  ip: [{ required: true, message: 'Please select the IP', trigger: 'blur' }],
  pitch_deck_file: [{ required: true, message: 'Please upload the pitch deck', trigger: 'blur' }],
  script_file: [{ required: true, message: 'Please upload the script/treatment', trigger: 'blur' }],
  financial_plan_file: [{ required: true, message: 'Please upload the financial plan', trigger: 'blur' }]
})
watchEffect(() => {
  if (form.stage) formRef.value.validateField('stage', () => null)
  if (form.ip) formRef.value.validateField('ip', () => null)
  if (pitch_deck_file.value?.length > 0) {
    form.pitch_deck_file = pitch_deck_file.value.map((v) => v.url).join(',')
    formRef.value.validateField('pitch_deck_file', () => null)
  }
  if (script_file.value?.length > 0) {
    form.script_file = script_file.value.map((v) => v.url).join(',')
    formRef.value.validateField('script_file', () => null)
  }
  if (financial_plan_file.value?.length > 0) {
    form.financial_plan_file = financial_plan_file.value.map((v) => v.url).join(',')
    formRef.value.validateField('financial_plan_file', () => null)
  }
})
const drawerShow = computed(() => (name) => (name === drawerName.value ? true : false))
const drawerClose = (value) => {
  if (!value) drawerName.value = ''
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate()
  await userFilmProposal({ ...form, is_grant: form.is_grant ? 'yes' : 'no', operate_type: form.id ? 'edit' : 'add' })
  const obj = { ...form }
  obj.pitch_deck_file = pitch_deck_file.value
  obj.script_file = script_file.value
  obj.financial_plan_file = financial_plan_file.value
  drawerName.value = 'ProposalSub'
  localStorage.setItem('filmForm', JSON.stringify(obj))
}
// 删除文件
const removeFile = (index, name) => {
  if (name === 'pitch_deck_file') pitch_deck_file.value.splice(index, 1)
  if (name === 'script_file') script_file.value.splice(index, 1)
  if (name === 'financial_plan_file') financial_plan_file.value.splice(index, 1)
}
</script>
