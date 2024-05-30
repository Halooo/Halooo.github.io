/**
 * 数组随机返回内容
 * @param arr
 * @returns
 */
function arrayRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length + 1) - 1]
}

export default arrayRandom
