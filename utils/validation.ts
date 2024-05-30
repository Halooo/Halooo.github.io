/**
 * 验证手机格式
 * @param value 内容
 * @returns
 */
export const useMobile = (value: string) => {
  return /^1[3-9]\d{9}$/.test(value)
}

/**
 * 验证邮箱格式
 * @param value 内容
 * @returns
 */
export const useEmail = (value: string) => {
  return /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(value)
}

/**
 * 验证密码格式
 * @param value 内容
 * @returns
 */
export const usePassword = (value: string) => {
  // 密码长度8 ~ 16位，必须包含大小写字母,数字
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[^]{8,16}$/.test(value)
  // 密码长度8 ~ 16位，必须包含大小写字母,数字以及特殊字符
  // return /^(?![A-Za-z0-9]+$)(?![a-z0-9\\W]+$)(?![A-Za-z\\W]+$)(?![A-Z0-9\\W]+$)[a-zA-Z0-9\\W].{8,16}$/.test(value);
}

/**
 * 验证空字符串
 * @param value 内容
 * @returns
 */
export const useEmpty = (value: any) => {
  switch (typeof value) {
    case 'undefined':
      return true
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length === 0) return true
      break
    case 'boolean':
      if (!value) return true
      break
    case 'number':
      if (value === 0 || isNaN(value)) return true
      break
    case 'object':
      if (value === null || value.length === 0) return true
      return Object.keys(value).length === 0
  }
  return false
}
