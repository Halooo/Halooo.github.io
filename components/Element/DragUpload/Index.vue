<template>
  <el-upload
    ref="upload"
    v-loading="loading"
    :drag="props.drag"
    :action="action"
    :accept="props.accept"
    :headers="headers"
    :show-file-list="false"
    :multiple="props.limit !== 1 && props.multiple"
    with-credentials
    :limit="props.limit"
    :file-list="props.modelValue"
    :on-exceed="handleExceed"
    :before-upload="handleBeforeUpload"
    :on-success="handleSuccess"
  >
    <slot>
      <div v-if="props.modelValue">
        <el-image class="w-full" :src="props.modelValue" />
      </div>
      <div v-show="!props.modelValue">
        <Icon name="pixelarticons:cloud-upload" size="50" color="#7F2853" />
        <div class="el-upload__text">拖拽上传或者<em>点击上传</em></div>
      </div>
    </slot>
    <template #tip><slot name="tip"></slot></template>
  </el-upload>
</template>
<script setup lang="ts">
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

const loading = ref<boolean>(false)

const upload = ref<UploadInstance>()
const runtimeConfig = useRuntimeConfig()
const action = ref<string>(`${runtimeConfig.public.api.baseUrl}/api/common/upload`)

const userStore = useUserPinia()

const headers = ref<any>()

watchEffect(() => {
  if (userStore.getToken) {
    headers.value = new Headers(headers.value)
    headers.value.set('Authorization', `Bearer ${userStore.getToken}`)
  }
})

interface Props {
  modelValue?: any
  drag?: boolean
  accept?: string
  multiple?: boolean
  fileList?: any
  uploadSize?: number
  limit?: number
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: [],
  drag: false,
  // 上传限制 默认不限制 固定格式 不支持 通配符 *
  accept: '',
  // 是否多选
  multiple: true,
  fileList: [],
  // 上传大小限制 M 默认不限制
  uploadSize: 0,
  limit: null
})

const fileArr = ref<any>([])
const emits = defineEmits(['update:modelValue', 'success'])

watchEffect(() => {
  fileArr.value = props.modelValue
})

// 当超出限制时，执行的钩子函数 覆盖前一个文件
const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value.clearFiles()
  fileArr.value = []
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value.handleStart(file)
  upload.value.submit()
  loading.value = false
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
  if (response.code === 0) return ElMessage({ showClose: true, message: response.msg, type: 'error', grouping: true })
  const url = URL.createObjectURL(uploadFile.raw)
  delete uploadFile.response
  let type = matchType(uploadFile.name) === 'image' ? 1 : 2
  fileArr.value.push({ ...response.data, ...uploadFile, baseUrl: url, type })
  loading.value = false
  emits('update:modelValue', fileArr.value)
  emits('success', fileArr.value)
}
</script>
<style lang="scss" scoped></style>
