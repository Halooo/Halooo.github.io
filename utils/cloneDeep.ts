/**
 * 对象深度拷贝
 * @param obj 对象
 * @returns
 */
function cloneDeep(obj) {
  // 判断arr是否为一个数组，返回一个bool值
  function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]'
  }
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    //原始类型直接返回
    return obj
  }
  const o = isArray(obj) ? [] : {}
  for (const i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      o[i] = typeof obj[i] === 'object' ? cloneDeep(obj[i]) : obj[i]
    }
  }
  return o
}

export default cloneDeep
