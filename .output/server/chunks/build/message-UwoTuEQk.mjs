import { E as ElInput } from './el-input-D8gXC6Et.mjs';
import { _ as _sfc_main$1 } from './Index-CG_3-TXz.mjs';
import __nuxt_component_7 from './Icon-CaiLYYN4.mjs';
import { defineComponent, reactive, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useUserPinia } from './server.mjs';
import { g as leaveMessageUserList, h as addLeaveMessage, r as readMessage, l as leaveMessageList } from './user-C3y1iIxD.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import '@vueuse/core';
import 'lodash-unified';
import './index-C8rz0VXy.mjs';
import '@vue/shared';
import './index-URjNNh32.mjs';
import './icon-CyxyPYk8.mjs';
import './constants-DzvzFGCl.mjs';
import './event-DSz0kuqc.mjs';
import './request-CdKXnB25.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './aria-DJRDfGoO.mjs';
import './el-image-viewer-T405MOSo.mjs';
import './scroll-D2xEfal-.mjs';
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'gsap';
import 'video.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "message",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      message: "",
      search: "",
      file: "",
      type: "0"
    });
    const selectedRecipients = ref({});
    const messageUserList = ref([]);
    const leaveUserList = ref([]);
    const messageArr = ref([]);
    const user_store = useUserPinia();
    const handleImagesFileSuccess = async (files) => {
      const content = files.map((v) => v.url).join(",");
      await sendMessage(content, "1");
    };
    const handleAdditionalFileSuccess = async (files) => {
      const content = files.map((v) => v.url).join(",");
      await sendMessage(content, "2");
    };
    const lookMessageContent = async (item) => {
      selectedRecipients.value = item;
      const { id } = selectedRecipients.value;
      if (selectedRecipients.value.unread > 0) {
        await readMessage(id);
        item.unread = 0;
      }
      const { data } = await leaveMessageList(id);
      messageArr.value = data;
    };
    const getLeaveMessageUserList = async (name) => {
      const search = name === "messageUserList" ? "" : form.search;
      const res = await leaveMessageUserList(search);
      if (name === "messageUserList")
        messageUserList.value = res.data;
      if (name === "leaveUserList")
        leaveUserList.value = res.data;
    };
    getLeaveMessageUserList("messageUserList");
    const handleSearch = () => {
      getLeaveMessageUserList("leaveUserList");
    };
    const sendMessage = async (content, type) => {
      var _a;
      await addLeaveMessage((_a = selectedRecipients.value) == null ? void 0 : _a.id, type, content);
      await lookMessageContent(selectedRecipients.value);
      form.message = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = ElInput;
      const _component_ElementDragUpload = _sfc_main$1;
      const _component_Icon = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-10 px-9 space-y-14" }, _attrs))}><div class="w-full flex justify-between items-center"><span class="font-medium text-4xl PPHattonMedium">Message</span><span class="font-light text-sm PolySansNeutral text-#ffffff uppercase underline underline-offset-2 cursor-pointer"> Notification </span></div><div class="w-full flex scrollbar_box"><div class="w-80 max-h-160 flex flex-col border border-#2F2F2F"><div class="w-full h-12 uppercase flex items-center px-4 border-b border-#2F2F2F cursor-pointer">Search people</div><div class="w-full flex-1 overflow-y-auto"><!--[-->`);
      ssrRenderList(unref(messageUserList), (item, index) => {
        _push(`<div class="${ssrRenderClass([{ selected: unref(selectedRecipients).id === item.id }, "w-full border-b border-#2F2F2F p-4 flex space-x-4 cursor-pointer"])}"><!--[-->`);
        ssrRenderList(item.profile_avatar, (item_avatar, index_avatar) => {
          _push(`<div class="w-15 h-15"><img${ssrRenderAttr("src", item_avatar.file_url)} class="w-full h-full object-cover rounded-full"></div>`);
        });
        _push(`<!--]--><div class="flex-1 space-y-2"><span>${ssrInterpolate(item.first_name)} ${ssrInterpolate(item.last_name)}</span></div><div class="space-y-4"><div class="">${ssrInterpolate(item.times_text)}</div>`);
        if (Number(item.unread) > 0) {
          _push(`<div class="w-6 h-6 bg-#ffffff rounded-full flex justify-center items-center text-black">${ssrInterpolate(item.unread)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div><div class="flex-1 max-h-160 flex flex-col border border-#2F2F2F">`);
      if (unref(selectedRecipients).id) {
        _push(`<div class="h-12 flex items-center px-8 border-b border-#2F2F2F"><span class="text-#ffffff">${ssrInterpolate(unref(selectedRecipients).first_name)} ${ssrInterpolate(unref(selectedRecipients).last_name)}</span></div>`);
      } else {
        _push(`<div class="el-search h-12 uppercase flex items-center px-8 border-b border-#2F2F2F uppercase">`);
        _push(ssrRenderComponent(_component_el_input, {
          modelValue: unref(form).search,
          "onUpdate:modelValue": ($event) => unref(form).search = $event,
          placeholder: "Type a name...",
          onChange: handleSearch
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`<div class="flex-1 overflow-y-auto">`);
      if (unref(selectedRecipients).id) {
        _push(`<!--[-->`);
        ssrRenderList(unref(messageArr), (item_messageArr, index_messageArr) => {
          _push(`<div class="${ssrRenderClass([unref(user_store).getUserInfo.id === item_messageArr.sender.id ? "flex-row-reverse" : "", "w-full px-9 py-7 flex"])}"><!--[-->`);
          ssrRenderList(item_messageArr.sender.profile_avatar, (item_, index_) => {
            _push(`<div class="w-10 h-10 mx-4"><img${ssrRenderAttr("src", item_.file_url)} class="w-full h-full object-cover rounded-full"></div>`);
          });
          _push(`<!--]--><div class="${ssrRenderClass([unref(user_store).getUserInfo.id === item_messageArr.sender.id ? "items-end" : "", "flex-1 flex flex-col space-y-4 font-normal text-sm PolySansNeutral"])}"><div class="text-#F5F5F5 space-x-3"><span>${ssrInterpolate(item_messageArr.sender.first_name)}${ssrInterpolate(item_messageArr.sender.id)}</span><span>${ssrInterpolate(item_messageArr.sender.last_name)}</span><span>\xB7</span><span>${ssrInterpolate(item_messageArr.times_text)}</span></div>`);
          if (item_messageArr.type === "0") {
            _push(`<div class="text-#616161 break-all">${ssrInterpolate(item_messageArr.content)}</div>`);
          } else {
            _push(`<!---->`);
          }
          if (item_messageArr.type === "1") {
            _push(`<!--[-->`);
            ssrRenderList(item_messageArr.content, (item_content, index_content) => {
              _push(`<div class="w-full"><img${ssrRenderAttr("src", item_content.file_url)} class="w-full h-full object-cover"></div>`);
            });
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (item_messageArr.type === "2") {
            _push(`<!--[-->`);
            ssrRenderList(item_messageArr.content, (_item, _index) => {
              _push(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 cursor-pointer"><span class="font-normal text-sm PolySansNeutral"><a${ssrRenderAttr("href", _item.file_url)} target="_blank">${ssrInterpolate(_item.file_text)}</a></span></div>`);
            });
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(leaveUserList), (item_leave_user, index_leave_user) => {
          _push(`<div class="w-full px-9 py-5 flex space-x-4 cursor-pointer"><!--[-->`);
          ssrRenderList(item_leave_user.profile_avatar, (item_, index_) => {
            _push(`<div class="w-15 h-15 rounded-full"><img${ssrRenderAttr("src", item_.file_url)} class="w-full h-full object-cover rounded-full"></div>`);
          });
          _push(`<!--]--><div class="flex-1 flex flex-col space-y-4 font-normal text-sm PolySansNeutral"><span class="text-#F5F5F5">${ssrInterpolate(item_leave_user.first_name)} ${ssrInterpolate(item_leave_user.last_name)}</span><span class="text-#616161">${ssrInterpolate(item_leave_user.times_text)}</span></div></div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div>`);
      if (unref(selectedRecipients).id) {
        _push(`<div class="border-t border-#2A2A2A"><div class="p-4 textarea-box text-white">`);
        _push(ssrRenderComponent(_component_el_input, {
          modelValue: unref(form).message,
          "onUpdate:modelValue": ($event) => unref(form).message = $event,
          rows: 3,
          type: "textarea",
          placeholder: "Write a message..."
        }, null, _parent));
        _push(`</div><div class="w-full bg-#2A2A2A flex flex-wrap justify-between items-center px-4 py-3"><div class="flex space-x-4">`);
        _push(ssrRenderComponent(_component_ElementDragUpload, {
          accept: "image/jpg,image/png,image/jpeg,image/gif,image/webp",
          limit: 1,
          onSuccess: handleImagesFileSuccess
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="uppercase text-#ffffff space-x-1 flex items-center cursor-pointer"${_scopeId}><span${_scopeId}>IMAGE </span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:outline-plus",
                size: "24"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "uppercase text-#ffffff space-x-1 flex items-center cursor-pointer" }, [
                  createVNode("span", null, "IMAGE "),
                  createVNode(_component_Icon, {
                    name: "ic:outline-plus",
                    size: "24"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ElementDragUpload, {
          limit: 1,
          onSuccess: handleAdditionalFileSuccess
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="uppercase text-#ffffff space-x-1 flex items-center cursor-pointer"${_scopeId}><span${_scopeId}>FILE</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:outline-plus",
                size: "24"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "uppercase text-#ffffff space-x-1 flex items-center cursor-pointer" }, [
                  createVNode("span", null, "FILE"),
                  createVNode(_component_Icon, {
                    name: "ic:outline-plus",
                    size: "24"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="btn gradient-btn p-3 px-6"><div>Send Message</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/message.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
