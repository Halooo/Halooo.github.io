<template>
  <div class="w-full h-full pt-10 pb-32 pl-9 pr-28 space-y-14">
    <p class="font-medium text-4xl PPHattonMedium">Account Info</p>
    <el-form ref="formRef" class="w-3/5" :rules="rules" :model="form.accountInfo" require-asterisk-position="right" label-position="top">
      <el-form-item label="Your Login Email" prop="email">
        <el-input v-model="form.accountInfo.email" clearable />
      </el-form-item>
      <div class="btn gradient-btn mt-8" @click="hangeEmailSubmit(formRef)">
        <div>update</div>
      </div>
    </el-form>
    <div class="space-y-8 w-3/5">
      <p class="font-medium text-4xl PPHattonMedium">Change Password</p>
      <el-form ref="formPasswordRef" :rules="rules" :model="form.password" require-asterisk-position="right" label-position="top">
        <el-form-item label="Current password" prop="current_pwd">
          <el-input v-model="form.password.current_pwd" type="password" clearable />
        </el-form-item>
        <el-form-item label="New password" prop="new_pwd">
          <el-input v-model="form.password.new_pwd" type="password" clearable />
        </el-form-item>
        <el-form-item label="Confirm new password" prop="confirm_pwd">
          <el-input v-model="form.password.confirm_pwd" type="password" clearable />
        </el-form-item>
      </el-form>
      <div class="btn gradient-btn mt-14" @click="hangePassSubmit(formPasswordRef)">
        <div>update</div>
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

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
const formRef = ref<FormInstance>()
const formPasswordRef = ref<FormInstance>()
const drawerName = ref<string>()
const drawerShow = computed(() => (name) => (name === drawerName.value ? true : false))
const drawerClose = (value) => {
  if (!value) drawerName.value = ''
}
const okBoxPrompt = reactive<any>({
  title: '',
  describe: ''
})
const user_store = useUserPinia()

const form = reactive<any>({
  accountInfo: {
    email: ''
  },
  password: {
    current_pwd: '',
    new_pwd: '',
    confirm_pwd: ''
  }
})

form.accountInfo.email = user_store.getUserInfo.email

const rules = reactive<FormRules>({
  email: [
    {
      required: true,
      validator: (rule: any, value: any, callback: any) => {
        if (useEmpty(value)) {
          callback(new Error('Please enter the email'))
        } else {
          if (!useEmail(value)) {
            callback(new Error('Please enter a valid email address.'))
          } else return true
        }
      },
      trigger: 'blur'
    }
  ],
  current_pwd: [
    { required: true, message: 'Please enter the password', trigger: 'blur' },
    { min: 6, message: 'Your password must be at least 6 characters long', trigger: 'blur' }
  ],
  new_pwd: [
    { required: true, message: 'Please enter the new password', trigger: 'blur' },
    { min: 6, message: 'Your password must be at least 6 characters long', trigger: 'blur' }
  ],
  confirm_pwd: [
    { required: true, message: 'Please enter the confirm password', trigger: 'blur' },
    { min: 6, message: 'Your password must be at least 6 characters long', trigger: 'blur' },
    {
      required: true,
      validator: (rule: any, value: any, callback: any) => {
        if (form.password.new_pwd !== value) {
          callback(new Error('Please enter the same new password as above'))
        } else return true
      },
      trigger: 'blur'
    }
  ]
})
const hangePassSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate()
  const data = await editPassword(form.password.current_pwd, form.password.new_pwd, form.password.confirm_pwd)
  okBoxPrompt.title = 'Success!'
  okBoxPrompt.describe = data.msg
  drawerName.value = 'OkBox'
}
// 更换邮箱
const hangeEmailSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate()
  const data = await editAccount(form.accountInfo.email)
  okBoxPrompt.title = 'Success!'
  okBoxPrompt.describe = data.msg
  drawerName.value = 'OkBox'
}

// const form = {
//   new_pwd,
//   confirm_pwd
// }
// await apiuserforgetPassword({})
</script>
