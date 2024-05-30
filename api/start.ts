/**
 * 明星申请 (注册)
 * @param email 邮箱地址
 * @param last_name 姓
 * @param first_name 名
 * @param type 类型
 * @param profile_avatar 头像
 * @param category  分类
 * @param area 地区
 * @param website 网站
 * @param introduce 介绍
 * @param resume_files  文件
 * @param social_media
 * @param social_media_url
 * @returns
 */
export const apiuserapply = async (data: {
  email: string
  last_name: string
  type: string
  first_name: string
  profile_avatar: string
  category: string
  area: string
  website: string
  introduce: string
  resume_files: string
  social_media?: string
  social_media_url?: string
}) => {
  return useResFetch('/api/user/apply', { method: 'POST', body: { ...data }, isToken: false })
}
