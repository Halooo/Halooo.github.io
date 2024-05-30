<template>
  <div>
    <NuxtLayout name="custom">
      <div class="w-full h-full relative">
        <div class="w-135 fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 space-y-16">
          <div class="space-y-6">
            <p class="font-medium text-5xl PPHattonMedium">Reset Password</p>
            <div class="font-light text-5 PolySansNeutral">Enter the email address you used to create your account.</div>
          </div>
          <template v-if="!submitOrNot">
            <el-form ref="ruleFormRef" class="w-full" :model="form" :rules="rules" require-asterisk-position="right" label-position="top">
              <el-form-item label="Email" prop="email">
                <el-input v-model.trim="form.email" placeholder="" clearable />
              </el-form-item>
            </el-form>
            <div class="btn gradient-btn mt-10" @click="submitForm(ruleFormRef)">
              <div>Continue</div>
            </div>
          </template>
          <template v-else>
            <div class="font-light text-5 PolySansNeutral">
              A reset password email has been sent to<br />
              {{ form.email }}. If you did not receive the email,<br />
              please contact us for help.
            </div>
            <div class="btn gradient-btn mt-10" @click="navigateTo('/account/logIn')">
              <div>Back to Log In</div>
            </div>
          </template>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
const submitOrNot = ref<boolean>(false)
const validateEmail = (rule: any, value: any, callback: any) => {
  if (!useEmail(value)) {
    callback(new Error('Please enter a valid email address.'))
  } else return true
}
const rules = reactive<FormRules>({
  email: [
    { required: true, message: 'Please enter the email', trigger: 'blur' },
    { validator: validateEmail, trigger: 'blur' }
  ]
})
const form = reactive({
  email: '',
  type: 'pc'
})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await VerifyFrom(formEl)
  await apiuserresetPassword(form)
  submitOrNot.value = true
}
</script>
<style lang="scss" scoped></style>
