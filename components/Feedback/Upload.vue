<template>
  <div class="bg-black border border-black h-0 pb-full relative">
    <Transition name="fade">
      <div v-if="props.modelValue" class="absolute top-2 right-2 cursor- z-50">
        <Icon name="iconamoon:sign-times-circle-thin" size="36" color="#FFFFFF" />
      </div>
    </Transition>
    <div class="absolute top-0 left-0 w-full h-full">
      <el-upload
        ref="upload"
        v-loading="loading"
        class="w-full h-full"
        :action="action"
        :accept="props.accept"
        :headers="headers"
        :show-file-list="false"
        :multiple="props.multiple"
        with-credentials
        :limit="1"
        :on-exceed="handleExceed"
        :before-upload="handleBeforeUpload"
        :on-success="handleSuccess"
        :on-error="handleError"
      >
        <slot>
          <div v-if="props.modelValue">
            <el-image class="w-full" :src="props.modelValue" />
          </div>
          <div v-show="!props.modelValue" class="w-full h-full relative flex justify-center items-center text-white">
            <Icon name="ic:round-add" size="50" />
            <div class="absolute left-0 bottom-15% w-full text-center">upload images</div>
          </div>
        </slot>
        <template #tip><slot name="tip"></slot></template>
      </el-upload>
    </div>
  </div>
</template>
<script setup lang="ts">
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

const loading = ref<boolean>(false)

const upload = ref<UploadInstance>()
const runtimeConfig = useRuntimeConfig()
const action = ref<string>('https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15')

const userStore = useUserPinia()

const headers = ref<any>()

watchEffect(() => {
  if (userStore.getToken) {
    headers.value = new Headers(headers.value)
    headers.value.set('Authorization', `Bearer ${userStore.getToken}`)
  }
})

interface Props {
  modelValue?: string
  drag?: boolean
  accept?: string
  multiple?: boolean
  fileList?: any
  uploadSize?: number
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  drag: false,
  // 上传限制 默认不限制 固定格式 不支持 通配符 *
  accept: '',
  // 是否多选
  multiple: false,
  // 文件列表
  fileList: [],
  // 上传大小限制 M 默认不限制
  uploadSize: 0
})

const emits = defineEmits(['update:modelValue'])

// 当超出限制时，执行的钩子函数 覆盖前一个文件
const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value.handleStart(file)
  // 提交上传
  upload.value.submit()
}

const handleBeforeUpload: UploadProps['beforeUpload'] = (rawFile) => {
  const fileSize = rawFile.size // 文件大小
  // 大小限制
  if (props.uploadSize !== 0) {
    const isSize = fileSize / 1024 / 1024 >= props.uploadSize
    if (isSize) {
      ElMessage({ showClose: true, message: `文件大小不正确，最大文件大小限制为：${formatFileSize(props.uploadSize * 1024 * 1024)}`, type: 'error', grouping: true })
      return false
    }
  }
  // 格式限制
  if (props.accept) {
    const fileType = rawFile.type
    // 'image/jpg,image/jpeg,image/gif,image/webp,image/bmp,video/mp4'
    const acceptType = props.accept.split(',').map((v) => v.split('/'))
    const types = [...new Set(acceptType.map((v) => v[0]))]
    const suffix = [...new Set(acceptType.map((v) => v[1]))]
    const reg = new RegExp('(' + types.join('|') + ')\/(' + suffix.join('|') + ')$', 'i')
    const isType = reg.test(fileType)
    if (!isType) {
      ElMessage({ showClose: true, message: `格式不正确，请选择 ${suffix.join('. ')}文件格式`, type: 'error', grouping: true })
      return false
    }
  }

  loading.value = true
  return true
}

const handleSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
  // console.log(response, uploadFile)
  // const url = URL.createObjectURL(uploadFile.raw)
  loading.value = false
  emits('update:modelValue', response.url)
}

const handleError: UploadProps['onError'] = (error) => {
  console.dir(error)
  ElMessage({ showClose: true, message: '上传失败', type: 'error', grouping: true })
  loading.value = false
  emits('update:modelValue', '')
}
</script>
<style lang="scss" scoped></style>
