import { c as useCustomFetch, u as useResFetch } from './request-CdKXnB25.mjs';

const apiindexbanner = async (type) => {
  return useResFetch("/api/index/banner", { method: "POST", body: { type }, isToken: false });
};
const apiIndexMentorList = async () => {
  return useResFetch("/api/index/mentorList", { method: "POST", body: {}, isToken: false });
};
const apiIndexLogoList = async () => {
  return useResFetch("/api/index/logoList", { method: "POST", body: {}, isToken: false });
};
const apiIndexStarList = async (type, sort, limit, page, search) => {
  return useCustomFetch("/api/index/starList", { method: "POST", body: { type, sort, limit, page, search }, isToken: false });
};
const apiIndexStarDetail = async (id) => {
  return useCustomFetch("/api/index/starDetail", { method: "POST", body: { id }, isToken: false });
};
const apiIndexMoviesNow = async (page, limit) => {
  return useCustomFetch("/api/index/moviesNow", { method: "POST", body: { page, limit }, isToken: false });
};
const apiIndexMoviesPast = async () => {
  return useCustomFetch("/api/index/moviesPast", { method: "POST", body: {}, isToken: false });
};
const apiIndexEventList = async (page, limit) => {
  return useCustomFetch("/api/index/eventList", { method: "POST", body: { page, limit }, isToken: false });
};
const apiIndexInformation = async () => {
  return useCustomFetch("/api/index/information", { method: "POST", body: {}, isToken: false });
};
const apiIndexInformationList = async (page, limit) => {
  return useCustomFetch("/api/index/informationList", { method: "POST", body: { page, limit }, isToken: false });
};
const apiIndexWorkList = async (user_id) => {
  return useCustomFetch("/api/index/workList", { method: "POST", body: { user_id }, isToken: false });
};
const apiIndexAwardsList = async (user_id) => {
  return useCustomFetch("/api/index/awardsList", { method: "POST", body: { user_id }, isToken: false });
};
const apiIndexMetaverseStories = async () => {
  return useCustomFetch("/api/index/metaverseStories", { method: "POST", body: {}, isToken: false });
};
const apiUserAddLeaveMessage = async (receiver, type, content) => {
  return useCustomFetch("/api/user/addLeaveMessage", { method: "POST", body: { receiver, type, content }, isToken: true });
};

export { apiIndexEventList as a, apiindexbanner as b, apiIndexLogoList as c, apiIndexMentorList as d, apiIndexInformation as e, apiIndexInformationList as f, apiIndexAwardsList as g, apiIndexWorkList as h, apiIndexStarDetail as i, apiUserAddLeaveMessage as j, apiIndexStarList as k, apiIndexMoviesPast as l, apiIndexMoviesNow as m, apiIndexMetaverseStories as n };
