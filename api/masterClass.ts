/**
 * 大师班
 * @returns
 */
export const apiindexmasterClass = async () => {
  return useResFetch('/api/index/masterClass', { method: 'POST', body: {}, isToken: false })
}

/**
 * starTalk
 * @returns
 */
export const apiindexstarTalk = async () => {
  return useResFetch('/api/index/starTalk', { method: 'POST', body: {}, isToken: false })
}

/**
 * Seminars and Workshops
 * @returns
 */
export const apiindexworkshop = async () => {
  return useResFetch('/api/index/workshop', { method: 'POST', body: {}, isToken: false })
}
