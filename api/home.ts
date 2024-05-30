/**
 * 首页banner
 * @param type 0=图片 1=明星信息
 * @returns
 */
export const apiindexbanner = async (type: string) => {
  return useResFetch('/api/index/banner', { method: 'POST', body: { type }, isToken: false })
}

/**
 * 导师列表
 * @param
 * @returns
 */
export const apiIndexMentorList = async () => {
  return useResFetch('/api/index/mentorList', { method: 'POST', body: {}, isToken: false })
}

/**
 * logo列表
 * @param
 * @returns
 */
export const apiIndexLogoList = async () => {
  return useResFetch('/api/index/logoList', { method: 'POST', body: {}, isToken: false })
}

/**
 * 明星列表
 * @param type All
 * @param sort A-Z
 * @param search
 * @param limit 10
 * @param page
 * @returns
 */
export const apiIndexStarList = async (type: string, sort: string, limit: number, page: number, search?: string) => {
  return useCustomFetch('/api/index/starList', { method: 'POST', body: { type, sort, limit, page, search }, isToken: false })
}

/**
 * 明星详情
 * @param id
 * @returns
 */
export const apiIndexStarDetail = async (id: string) => {
  return useCustomFetch('/api/index/starDetail', { method: 'POST', body: { id }, isToken: false })
}

/**
 * 电影 现在
 * @param page
 * @param limit
 * @returns
 */
export const apiIndexMoviesNow = async (page: number, limit: number) => {
  return useCustomFetch('/api/index/moviesNow', { method: 'POST', body: { page, limit }, isToken: false })
}

/**
 * 电影 过去
 * @returns
 */
export const apiIndexMoviesPast = async () => {
  return useCustomFetch('/api/index/moviesPast', { method: 'POST', body: {}, isToken: false })
}

/**
 * 事件列表
 * @param page
 * @param limit
 * @returns
 */
export const apiIndexEventList = async (page: number, limit: number) => {
  return useCustomFetch('/api/index/eventList', { method: 'POST', body: { page, limit }, isToken: false })
}

/**
 * 置顶质询 api/index/information
 */
export const apiIndexInformation = async () => {
  return useCustomFetch('/api/index/information', { method: 'POST', body: {}, isToken: false })
}

/**
 * 质询列表
 * @param page
 * @param limit
 * @returns
 */
export const apiIndexInformationList = async (page: number, limit: number) => {
  return useCustomFetch('/api/index/informationList', { method: 'POST', body: { page, limit }, isToken: false })
}

/**
 * 作品列表
 * @param user_id
 * @returns
 */
export const apiIndexWorkList = async (user_id: string) => {
  return useCustomFetch('/api/index/workList', { method: 'POST', body: { user_id }, isToken: false })
}

/**
 * 个人奖项列表
 * @param user_id
 * @returns
 */
export const apiIndexAwardsList = async (user_id: string) => {
  return useCustomFetch('/api/index/awardsList', { method: 'POST', body: { user_id }, isToken: false })
}

/**
 * 元宇宙故事
 * @param
 * @returns
 */
export const apiIndexMetaverseStories = async () => {
  return useCustomFetch('/api/index/metaverseStories', { method: 'POST', body: {}, isToken: false })
}

/**
 * 添加留言
 * @param receiver 接收人的id
 * @param type 类型:0=文本,1=图片,2=文件
 * @param content 内容 多文件用逗号隔开
 * @returns
 */
export const apiUserAddLeaveMessage = async (receiver: string, type: number, content: any) => {
  return useCustomFetch('/api/user/addLeaveMessage', { method: 'POST', body: { receiver, type, content }, isToken: true })
}

/**
 * 添加订阅
 * @param
 * @returns
 */
export const apiIndexAddSubscribe = async (email: string) => {
  return useCustomFetch('/api/index/addSubscribe', { method: 'POST', body: { email }, isToken: false })
}
