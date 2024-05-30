<template>
  <div>
    <NuxtLayout name="custom">
      <div class="w-full relative">
        <div class="w-135 bg-black fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 space-y-16 z-20">
          <div class="space-y-6">
            <p class="font-medium text-5xl PPHattonMedium">Log In</p>
            <div class="font-light text-lg PolySansNeutral">
              Not a member yet? <br />
              <span class="cursor-pointer underline underline-offset-4" @click="navigateTo('/start/applicaiton')"> Apply to become a star</span>
            </div>
          </div>
          <el-form ref="ruleFormRef" class="w-full" :model="form" :rules="rules" require-asterisk-position="right" label-position="top">
            <el-form-item label="Email" prop="email">
              <el-input v-model.trim="form.email" placeholder="" clearable />
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input v-model.trim="form.password" placeholder="" clearable type="password" />
            </el-form-item>
            <div class="underline underline-offset-4 font-light text-lg PolySansNeutral cursor-pointer" @click="navigateTo('/account/forgotPassword')">Forgot Password</div>
          </el-form>

          <div class="btn gradient-btn mt-10" @click="submitForm(ruleFormRef)">
            <div>Continue</div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
const user_store = useUserPinia()
const validateEmail = (rule: any, value: any, callback: any) => {
  if (!useEmail(value)) {
    callback(new Error('Please enter a valid email address.'))
  } else return true
}
const rules = reactive<FormRules>({
  email: [
    { required: true, message: 'Please enter the email', trigger: 'blur' },
    { validator: validateEmail, trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Cannot be empty', trigger: 'blur' },
    { min: 6, message: 'Your password must be at least 6 characters long', trigger: 'blur' }
  ]
})
const form = reactive({
  email: '',
  password: ''
})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await VerifyFrom(formEl)
  const res = await apiuserlogin(form.email, form.password)
  const { userinfo } = res.data
  user_store.setToken(userinfo.token)
  user_store.setUserInfo(userinfo)
  navigateTo('/user/proposal')
}
</script>
<style lang="scss" scoped></style>
