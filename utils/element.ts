/**
 * 表单验证回滚
 * @param formEl
 * @returns
 */
export const VerifyFrom = async (formEl) => {
  try {
    const res = await formEl.validate()
    return Promise.resolve(res)
  } catch (fields) {
    Object.keys(fields).forEach((key, i) => {
      const isError = document.getElementsByClassName('is-error')
      if (i == 0) isError[i].scrollIntoView({ block: 'center', behavior: 'smooth' })
    })
    return Promise.reject(fields)
  }
}
