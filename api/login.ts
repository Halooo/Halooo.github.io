/**
 * 登录
 * @param email 邮箱地址
 * @param password 密码
 * @returns
 */
export const apiuserlogin = async (email: string, password: string) => {
  return useResFetch('/api/user/login', { method: 'POST', body: { email, password }, isToken: false })
}
/**
 * 退出登录
 * @returns
 */
export const logout = async () => {
  return useResFetch('/api/user/logout', { method: 'POST', body: {}, isToken: true })
}
