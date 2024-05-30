<template>
  <div>
    <NuxtLayout name="custom">
      <div class="w-full h-full">
        <div class="w-135 bg-black fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 space-y-16">
          <div class="space-y-6">
            <p class="font-medium text-5xl PPHattonMedium">Forgot Password</p>
          </div>
          <el-form ref="ruleFormRef" class="w-full" :model="form" :rules="rules" require-asterisk-position="right" label-position="top">
            <el-form-item label="New password" prop="new_pwd">
              <el-input v-model="form.new_pwd" type="password" clearable />
            </el-form-item>
            <el-form-item label="Confirm new password" prop="confirm_pwd">
              <el-input v-model="form.confirm_pwd" type="password" clearable />
            </el-form-item>
          </el-form>
          <div class="btn gradient-btn mt-10" @click="submitForm(ruleFormRef)">
            <div>Submit</div>
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
const route = useRoute()

const form = reactive({
  new_pwd: '',
  confirm_pwd: ''
})

const rules = reactive<FormRules>({
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
        if (form.new_pwd !== value) {
          callback(new Error('Please enter the same new password as above'))
        } else return true
      },
      trigger: 'blur'
    }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await VerifyFrom(formEl)
  const res = await apiuserforgetPassword(route.query.ResetToken, form)
  ElMessage({ showClose: true, message: res.msg, type: 'success', grouping: true })
  user_store.setToken(route.query.ResetToken)
  const { data } = await userMsg()
  user_store.setUserInfo(data)
  navigateTo('/user/proposal')
}
</script>
<style lang="scss" scoped></style>
