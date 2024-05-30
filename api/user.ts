/**
 * 电影提案申请/编辑
 * @param is_grant  yes no
 * @param remark  	备注
 * @param project_name  项目名称
 * @param genre 类型
 * @param budget 预算
 * @param synopsis  概要
 * @param stage  	阶段
 * @param ip ip
 * @param pitch_deck_file 	宣传材料
 * @param script_file script_file
 * @param financial_plan_file 财务计划
 * @param operate_type 操作类型 add edit
 * @param id operate_type = edit 必填 提案id
 * @returns
 */
export const userFilmProposal = async (data: {
  is_grant: string
  remark?: string
  project_name: string
  genre: string
  budget: string
  synopsis: string
  stage: string
  ip: string
  pitch_deck_file: string
  script_file: string
  financial_plan_file?: string
  operate_type: string
  id?: string
}) => {
  return useResFetch('/api/user/filmProposal', { method: 'POST', body: { ...data }, isToken: true })
}
/**
 * 提案申请列表
 * @returns
 */
export const roposalList = async () => {
  return useResFetch('/api/user/proposalList', { method: 'POST', body: {}, isToken: true })
}
/**
 * 提案申请详情
 * @param type Air Film
 * @param id id
 * @returns
 */
export const applyDetail = async (type: string, id: any) => {
  return useResFetch('/api/user/applyDetail', { method: 'POST', body: { type, id }, isToken: true })
}
/**
 * 艺术提案申情/编辑
 * @param is_grant Yes No
 * @param project_name 项目名称
 * @param project_type 项目类型
 * @param nums 商品数量
 * @param project_description 	描述
 * @param attachment_files 附件 用逗号隔开
 * @param downloadable_link 下载链接
 * @param operate_type 	 add edit
 * @param id operate_type = edit 必填 提案id
 * @returns
 */
export const userArtProposal = async (data: {
  is_grant: string
  project_name: string
  type: string
  nums: string
  project_description: string
  attachment_files: string
  downloadable_link?: string
  operate_type: string
  id?: string
}) => {
  return useResFetch('/api/user/artProposal', { method: 'POST', body: { ...data }, isToken: true })
}
/**
 * 修改邮箱
 * @param email  邮箱
 * @returns
 */
export const editAccount = async (email: string) => {
  return useResFetch('/api/user/editAccount', { method: 'POST', body: { email }, isToken: true })
}

/**
 * 修改密码
 * @param current_pwd current_pwd
 * @param new_pwd new_pwd
 * @param confirm_pwd confirm_pwd
 * @returns
 */
export const editPassword = async (current_pwd: string, new_pwd: string, confirm_pwd: string) => {
  return useResFetch('/api/user/editPassword', { method: 'POST', body: { current_pwd, new_pwd, confirm_pwd }, isToken: true })
}

/**
 * 邮件通知设置/编辑
 * @param operate_type
 * @param new_message
 * @param proposal_update
 * @param event_info
 * @param stars_collective
 * @returns
 */
export const emailNotice = async (data: { operate_type: string; new_message: string; proposal_update?: string; event_info?: string; stars_collective?: string }) => {
  return useResFetch('/api/user/emailNotice', { method: 'POST', body: { ...data }, isToken: true })
}

/**
 * 留言人列表
 * @returns
 */
export const leaveMessageUserList = async (search?: string) => {
  return useResFetch('/api/user/leaveMessageUserList', { method: 'POST', body: { search }, isToken: true })
}

/**
 * 留言列表
 * @returns
 */
export const leaveMessageList = async (receiver: string) => {
  return useResFetch('/api/user/leaveMessageList', { method: 'POST', body: { receiver }, isToken: true })
}

/**
 * 添加留言人
 * @param user_id
 * @returns
 */
export const addLeaveMessageUser = async (user_id: string) => {
  return useResFetch('/api/user/addLeaveMessageUser', { method: 'POST', body: { user_id }, isToken: true })
}

/**
 * 添加留言
 * @returns
 */
export const addLeaveMessage = async (receiver: string, type: string, content: string) => {
  return useResFetch('/api/user/addLeaveMessage', { method: 'POST', body: { receiver, type, content }, isToken: true })
}

/**
 * 标记已读
 * @param receiver  选中的用户id
 * @returns
 */
export const readMessage = async (receiver: string) => {
  return useResFetch('/api/user/readMessage', { method: 'POST', body: { receiver }, isToken: true })
}

/**
 * 用户信息
 * @returns
 */
export const userMsg = async () => {
  return useResFetch('/api/user/userMsg', { method: 'POST', body: {}, isToken: true })
}

/**
 * 修改个人信息
 * @param type 类型
 * @param profile_avatar 个人资料头像
 * @param category 类别
 * @param website 个人网站
 * @param area 区域
 * @param resume_files  简历文件
 * @param bio 曾是
 * @param social_media 社交媒体
 * @param social_media_url  社交媒体网址
 * @param phone 电话
 * @returns
 */
export const userProfile = async (data: {
  type: string
  profile_avatar: string
  category: string
  resume_files: string
  area: string
  introduce: string
  social_media?: string
  social_media_url?: string
  website: string
}) => {
  return useResFetch('/api/user/profile', { method: 'POST', body: { ...data }, isToken: true })
}

/**
 * 新增作品
 * @param type 类型 类型:image=image,video=video,youtube_link=youtube_link,vimeo_link=vimeo_link
 * @param title 标题
 * @param link 关联
 * @param video_link 视频链接
 * @param poster_image 海报图片
 * @param video_file  视频文件
 * @returns
 */
export const workUpload = async (data: { type: string; title: string; link?: string; video_link?: string; poster_image: string; video_file?: string }) => {
  return useResFetch('/api/user/workUpload', { method: 'POST', body: { ...data }, isToken: true })
}

/**
 * 修改作品
 * @param type 类型 类型:image=image,video=video,youtube_link=youtube_link,vimeo_link=vimeo_link
 * @param title 标题
 * @param link 关联
 * @param video_link 视频链接
 * @param poster_image 海报图片
 * @param video_file  视频文件
 * @param id
 * @returns
 */
export const updateWork = async (data: { type: string; title: string; link?: string; video_link?: string; poster_image: string; video_file?: string; id: string }) => {
  return useResFetch('/api/user/updateWork', { method: 'POST', body: { ...data }, isToken: true })
}

/**
 * 删除作品
 * @param id
 * @returns
 */
export const delWork = async (id: string) => {
  return useResFetch('/api/user/delWork', { method: 'POST', body: { id }, isToken: true })
}

/**
 * 作品列表
 * @param user_id
 * @returns
 */
export const workList = async (user_id: string) => {
  return useResFetch('/api/index/workList', { method: 'POST', body: { user_id }, isToken: true })
}

/**
 * 新增个人奖项
 * @param type 类型:film=film,art=art
 * @param award_id  奖项id
 * @param year 年
 * @param film 电影名
 * @param film_year  电影年份
 * @param result  结果
 * @param remark 备注
 * @returns
 */
export const addAwards = async (data: { type: string; award_id: string; year: string; film?: string; film_year: string; result: string; remark?: string }) => {
  return useResFetch('/api/user/addAwards', { method: 'POST', body: { ...data }, isToken: true })
}

/**
 * 修改个人奖项
 * @param type 类型:film=film,art=art
 * @param award_id  奖项id
 * @param year 年
 * @param film 电影名
 * @param film_year  电影年份
 * @param result  结果
 * @param remark 备注
 * @param id
 * @returns
 */
export const updateAwards = async (data: { type: string; award_id: string; year: string; film?: string; film_year: string; result: string; remark?: string; id: string }) => {
  return useResFetch('/api/user/updateAwards', { method: 'POST', body: { ...data }, isToken: true })
}

/**
 * 删除个人奖项
 * @param id
 * @returns
 */
export const delAwards = async (id: string) => {
  return useResFetch('/api/user/delAwards', { method: 'POST', body: { id }, isToken: true })
}

/**
 * 个人奖项列表
 * @param user_id
 * @returns
 */
export const awardsList = async (user_id: string) => {
  return useResFetch('/api/index/awardsList', { method: 'POST', body: { user_id }, isToken: true })
}

/**
 * 获取奖项列表
 * @param type  类型:film=film,art=art
 * @returns
 */
export const awards = async (type: string) => {
  return useResFetch('/api/index/awards', { method: 'POST', body: { type }, isToken: false })
}

/**
 * 取消提案
 * @param cate 分类 Art Film
 * @param id  提案的id
 * @returns
 */
export const setCancelProposal = async (data: { cate: string; id: string }) => {
  return useResFetch('/api/user/cancelProposal', { method: 'POST', body: { ...data }, isToken: true })
}

/**
 * 忘记密码
 * @param new_pwd 新密码
 * @param confirm_pwd  确认密码
 * @returns
 */
export const apiuserforgetPassword = async (token, { new_pwd, confirm_pwd }) => {
  return useResFetch('/api/user/forgetPassword', {
    method: 'POST',
    body: { new_pwd, confirm_pwd },
    isToken: false,
    headers: { token }
  })
}
/**
 * 重置密码
 * @param email 新密码
 * @param type  pc mb
 * @returns
 */
export const apiuserresetPassword = async ({ email, type }) => {
  return useResFetch('/api/user/resetPassword', {
    method: 'POST',
    body: { email, type },
    isToken: false
  })
}
