/**
 * 字符串中间星号
 * @param value 内容
 * @returns
 */
export const stringStar = (value, start = 3, end = 4, characters = '....') => {
  const reg = new RegExp('^(.{' + start + '}).*(.{' + end + '})$')
  if (value) {
    return value.replace(reg, `$1${characters}$2`)
  }
  return ''
}

/**
 * 格式化文件大小显示
 * @param filesize 文件大小
 * @param Bytes bytes单位
 * @param decimalPoint 小数点
 * @returns
 */
export const formatFileSize = (filesize: number, Bytes = 1024, decimalPoint = 2) => {
  const format = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  if (filesize === 0) return `0${format[0]}`
  const i = Math.floor(Math.log(filesize) / Math.log(Bytes))
  return parseFloat((filesize / Math.pow(Bytes, i)).toFixed(decimalPoint)) + format[i]
}
