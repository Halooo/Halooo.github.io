import { u as useResFetch } from './request-CdKXnB25.mjs';

const userFilmProposal = async (data) => {
  return useResFetch("/api/user/filmProposal", { method: "POST", body: { ...data }, isToken: true });
};
const roposalList = async () => {
  return useResFetch("/api/user/proposalList", { method: "POST", body: {}, isToken: true });
};
const applyDetail = async (type, id) => {
  return useResFetch("/api/user/applyDetail", { method: "POST", body: { type, id }, isToken: true });
};
const userArtProposal = async (data) => {
  return useResFetch("/api/user/artProposal", { method: "POST", body: { ...data }, isToken: true });
};
const editAccount = async (email) => {
  return useResFetch("/api/user/editAccount", { method: "POST", body: { email }, isToken: true });
};
const emailNotice = async (data) => {
  return useResFetch("/api/user/emailNotice", { method: "POST", body: { ...data }, isToken: true });
};
const leaveMessageUserList = async (search) => {
  return useResFetch("/api/user/leaveMessageUserList", { method: "POST", body: { search }, isToken: true });
};
const leaveMessageList = async (receiver) => {
  return useResFetch("/api/user/leaveMessageList", { method: "POST", body: { receiver }, isToken: true });
};
const addLeaveMessage = async (receiver, type, content) => {
  return useResFetch("/api/user/addLeaveMessage", { method: "POST", body: { receiver, type, content }, isToken: true });
};
const readMessage = async (receiver) => {
  return useResFetch("/api/user/readMessage", { method: "POST", body: { receiver }, isToken: true });
};
const userMsg = async () => {
  return useResFetch("/api/user/userMsg", { method: "POST", body: {}, isToken: true });
};
const userProfile = async (data) => {
  return useResFetch("/api/user/profile", { method: "POST", body: { ...data }, isToken: true });
};
const workUpload = async (data) => {
  return useResFetch("/api/user/workUpload", { method: "POST", body: { ...data }, isToken: true });
};
const updateWork = async (data) => {
  return useResFetch("/api/user/updateWork", { method: "POST", body: { ...data }, isToken: true });
};
const delWork = async (id) => {
  return useResFetch("/api/user/delWork", { method: "POST", body: { id }, isToken: true });
};
const addAwards = async (data) => {
  return useResFetch("/api/user/addAwards", { method: "POST", body: { ...data }, isToken: true });
};
const updateAwards = async (data) => {
  return useResFetch("/api/user/updateAwards", { method: "POST", body: { ...data }, isToken: true });
};
const delAwards = async (id) => {
  return useResFetch("/api/user/delAwards", { method: "POST", body: { id }, isToken: true });
};
const awardsList = async (user_id) => {
  return useResFetch("/api/index/awardsList", { method: "POST", body: { user_id }, isToken: true });
};
const awards = async (type) => {
  return useResFetch("/api/index/awards", { method: "POST", body: { type }, isToken: false });
};
const setCancelProposal = async (data) => {
  return useResFetch("/api/user/cancelProposal", { method: "POST", body: { ...data }, isToken: true });
};
const apiuserforgetPassword = async (token, { new_pwd, confirm_pwd }) => {
  return useResFetch("/api/user/forgetPassword", {
    method: "POST",
    body: { new_pwd, confirm_pwd },
    isToken: false,
    headers: { token }
  });
};
const apiuserresetPassword = async ({ email, type }) => {
  return useResFetch("/api/user/resetPassword", {
    method: "POST",
    body: { email, type },
    isToken: false
  });
};

export { apiuserresetPassword as a, apiuserforgetPassword as b, applyDetail as c, userArtProposal as d, userFilmProposal as e, editAccount as f, leaveMessageUserList as g, addLeaveMessage as h, emailNotice as i, roposalList as j, userProfile as k, leaveMessageList as l, updateWork as m, delWork as n, updateAwards as o, addAwards as p, delAwards as q, readMessage as r, setCancelProposal as s, awardsList as t, userMsg as u, awards as v, workUpload as w };
