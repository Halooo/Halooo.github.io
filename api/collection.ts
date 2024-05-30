/**
 * 合集统计
 * @returns
 */
export const apiindexcollectionStatistics = async () => {
  return useCustomFetch('/api/index/collectionStatistics', { method: 'POST', body: {}, isToken: false })
}

/**
 * 合集列表
 * @param page 1
 * @param limit 10
 * @returns
 */
export const apiindexcollectionList = async ({ page, limit }) => {
  return useResFetch('/api/index/collectionList', { method: 'POST', body: { page, limit }, isToken: false })
}

/**
 * 合集详情
 * @param id 1
 * @returns
 */
export const apiindexcollectionDetail = async (id) => {
  return useResFetch('/api/index/collectionDetail', { method: 'POST', body: { id }, isToken: false })
}
