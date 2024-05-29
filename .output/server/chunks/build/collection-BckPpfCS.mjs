import { u as useResFetch, c as useCustomFetch } from './request-CdKXnB25.mjs';

const apiindexcollectionStatistics = async () => {
  return useCustomFetch("/api/index/collectionStatistics", { method: "POST", body: {}, isToken: false });
};
const apiindexcollectionList = async ({ page, limit }) => {
  return useResFetch("/api/index/collectionList", { method: "POST", body: { page, limit }, isToken: false });
};
const apiindexcollectionDetail = async (id) => {
  return useResFetch("/api/index/collectionDetail", { method: "POST", body: { id }, isToken: false });
};

export { apiindexcollectionDetail as a, apiindexcollectionList as b, apiindexcollectionStatistics as c };
