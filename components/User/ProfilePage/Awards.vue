<template>
  <div class="mt-12">
    <div class="font-medium text-2xl PPHattonMedium">Key Awards / Accomplishment</div>
    <div class="space-y-16 mt-12">
      <div v-for="(item, index) in ruleForm.sampleList" :key="index" class="border-b border-#474747 pb-16 space-y-8">
        <el-form :ref="getFormRef(index)" class="space-y-8" :model="item" :rules="rules" require-asterisk-position="right" label-position="top">
          <div class="space-x-3">
            <span>{{ item.type }} Award {{ index + 1 }}</span>
            <span class="text-#ffffff underline underline-offset-2 cursor-pointer" @click="removeAward(index, item)">REMOVE</span>
            <span v-if="editableOrNot(item)" class="text-#ffffff underline underline-offset-2 cursor-pointer" @click="item.isEdit = true">EDIT</span>
          </div>
          <div class="flex items-end space-x-8">
            <el-form-item label="" prop="award_id" class="flex-1">
              <div class="w-full space-y-1">
                <div class="w-full font-normal text-lg PolySansNeutral">Award Organizer<span class="text-#ffffff"> *Email Starscollective if not listed</span></div>
                <ClientOnly>
                  <el-select v-model="item.award_id" value-key="id" placeholder="Select" class="w-full" :disabled="editableOrNot(item)">
                    <el-option v-for="item_organizer in awardOrganizerArr(item.type)" :key="item_organizer.id" :label="item_organizer.name" :value="item_organizer.id" />
                  </el-select>
                </ClientOnly>
              </div>
            </el-form-item>
            <el-form-item label="Award year" prop="year" class="w-40">
              <el-select v-model="item.year" placeholder="" :disabled="editableOrNot(item)">
                <el-option v-for="item_optionTimeArr in optionTimeArr" :key="item_optionTimeArr.value" :label="item_optionTimeArr.label" :value="item_optionTimeArr.value" />
              </el-select>
            </el-form-item>
          </div>
          <div class="flex space-x-8">
            <el-form-item :label="labelTitle(item.type) + ' Title'" prop="film" class="flex-1">
              <el-input v-model.trim="item.film" placeholder="" clearable :disabled="editableOrNot(item)" />
            </el-form-item>
            <el-form-item :label="labelTitle(item.type) + ' year'" prop="film_year" class="w-40">
              <ClientOnly>
                <el-select v-model="item.film_year" placeholder="" :disabled="editableOrNot(item)">
                  <el-option v-for="item_optionTimeArr in optionTimeArr" :key="item_optionTimeArr.value" :label="item_optionTimeArr.label" :value="item_optionTimeArr.value" />
                </el-select>
              </ClientOnly>
            </el-form-item>
          </div>
          <div class="flex space-x-8">
            <el-form-item label="Result" prop="result" class="w-40">
              <ClientOnly>
                <el-select v-model="item.result" placeholder="Select" :disabled="editableOrNot(item)">
                  <el-option v-for="item_options in resultOption" :key="item_options.value" :label="item_options.label" :value="item_options.value" />
                </el-select>
              </ClientOnly>
            </el-form-item>
            <el-form-item label="If you selected 'Other' in Award Organizer, please specify" class="flex-1">
              <el-input v-model.trim="item.remark" placeholder="" clearable :disabled="isHaveAward(item)" />
            </el-form-item>
          </div>
          <div v-if="!editableOrNot(item)" class="btn gradient-btn mt-14" @click="handleSubmit(index, item)">
            <div>update</div>
          </div>
        </el-form>
      </div>
      <div class="flex space-x-6">
        <div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" @click="addAward('film')">
          <span class="font-normal text-sm PolySansNeutral uppercase">ADD MORE FILM AWARD</span>
        </div>
        <div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" @click="addAward('art')">
          <span class="font-normal text-sm PolySansNeutral uppercase">ADD MORE ART AWARD</span>
        </div>
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
const drawerName = ref<string>()
const user_store = useUserPinia()
const awardOrganizerFilm = ref<any>()
const awardOrganizerArt = ref<any>()
const okBoxPrompt = reactive<any>({
  title: '',
  describe: ''
})
const drawerShow = computed(() => (name) => (name === drawerName.value ? true : false))
const drawerClose = (value) => {
  if (!value) drawerName.value = ''
}
const ruleForm = reactive<any>({
  sampleList: []
})
const rules = reactive({
  award_id: [{ required: true, message: 'Please select the organizer', trigger: 'change' }],
  year: [{ required: true, message: 'Please select the year', trigger: 'change' }],
  film: [{ required: true, message: 'Please enter the title', trigger: 'blur' }],
  film_year: [{ required: true, message: 'Please select the year', trigger: 'change' }],
  result: [{ required: true, message: 'Please select the result ', trigger: 'change' }]
})
const resultOption = [
  { value: 'Winner', label: 'Winner' },
  { value: 'Shortlist', label: 'Shortlist' },
  { value: 'Nominated', label: 'Nominated' }
]
// 自定义时间选择
const optionTimeArr = computed(() => {
  const currentYear = new Date().getFullYear()
  const startYear = currentYear - 49
  const options = []
  for (let year = currentYear; year >= startYear; year--) {
    options.push({
      value: String(year),
      label: String(year)
    })
  }

  return options
})
const labelTitle = computed(() => {
  return (name) => {
    if (name === 'film') return 'Film'
    else return 'Artwork'
  }
})

// 是否可编辑
const editableOrNot = computed(() => {
  return (item) => item.id && !item.isEdit
})
// 是否可填写备注
const isHaveAward = computed(() => {
  return (item) => (item.id && !item.isEdit) || (item.award_id !== 13 && item.award_id !== 14)
})
// 奖项组织者
const awardOrganizerArr = computed(() => {
  return (type) => {
    if (type === 'film') return awardOrganizerFilm.value
    else return awardOrganizerArt.value
  }
})
const getFormRef = (index: number) => {
  return (el: FormInstance) => {
    formRefs.value[index] = el
  }
}
// 提交表单
const handleSubmit = async (index: number, item: any) => {
  const formEl = formRefs.value[index]
  if (!formEl) return
  await formEl.validate()
  const param = JSON.parse(JSON.stringify(item))
  param.award_id = param.award_id.toString()
  if (item.id) {
    // 修改个人奖项
    const res = await updateAwards({ ...param })
    okBoxPrompt.title = 'Change Updated!'
    okBoxPrompt.describe = res.msg
  } else {
    // 新增个人奖项
    const res = await addAwards({ ...param })
    okBoxPrompt.title = 'Added!'
    okBoxPrompt.describe = res.msg
  }
  drawerName.value = 'OkBox'
  getAwardsList()
}
// 删除项
const removeAward = async (index: number, item: any) => {
  if (item.id) {
    const res = await delAwards(item.id)
    okBoxPrompt.title = 'Deleted!'
    okBoxPrompt.describe = res.msg
    drawerName.value = 'OkBox'
    getAwardsList()
  } else {
    ruleForm.sampleList.splice(index, 1)
  }
}
// 添加项
const addAward = async (type: string) => {
  // 获取奖项列表
  ruleForm.sampleList.push({
    type: type,
    award_id: '',
    year: '',
    film: '',
    film_year: '',
    result: '',
    remark: ''
  })
}
//个人奖项列表
const getAwardsList = async () => {
  const { user_id } = user_store.getUserInfo
  const data = await awardsList(user_id)
  ruleForm.sampleList = data.data
}
// 获取奖项列表
const getAwards = async () => {
  const data = await awards('film')
  const res = await awards('art')
  awardOrganizerFilm.value = data.data
  awardOrganizerArt.value = res.data
}
await getAwards()
getAwardsList()
</script>

<style lang="scss" scoped></style>
