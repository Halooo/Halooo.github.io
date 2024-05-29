import { _ as _sfc_main$1 } from './Index-DNxKYUQ5.mjs';
import { _ as _sfc_main$2 } from './LogOut-hKXBzU2w.mjs';
import { defineComponent, ref, computed, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useUserPinia } from './server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import 'pinia-plugin-persistedstate';
import 'gsap';
import 'video.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Menus",
  __ssrInlineRender: true,
  setup(__props) {
    const drawerName = ref();
    const drawerShow = computed(() => (name) => name === drawerName.value ? true : false);
    const user_store = useUserPinia();
    const drawerClose = (value) => {
      if (!value)
        drawerName.value = "";
    };
    const navArr = [
      { title: "Message", path: "/user/message" },
      { title: "My Proposal", path: "/user/proposal" },
      { title: "My Account", path: "/user/account" },
      { title: "View My Profile Page", path: "", url: `/starslist/${user_store.getUserInfo.id}` },
      { title: "Edit My Public Page", path: "/user/profilePage" },
      { title: "Notification Setting", path: "/user/notificatSet" },
      { title: "Log Out" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FeedbackModal = _sfc_main$1;
      const _component_FeedbackModalUserLogOut = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><ul class="menus-model border border-#2A2A2A"><!--[-->`);
      ssrRenderList(navArr, (item, index) => {
        _push(`<li class="${ssrRenderClass([{ selected: _ctx.$route.path === item.path }, "nav h-16 flex items-center pl-8 cursor-pointer"])}"><span class="font-light text-xl text-#F5F5F5 PolySansNeutral">${ssrInterpolate(item.title)}</span></li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_FeedbackModal, {
        "model-value": unref(drawerShow)("LogOut")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FeedbackModalUserLogOut, { "onUpdate:modelValue": drawerClose }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FeedbackModalUserLogOut, { "onUpdate:modelValue": drawerClose })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/Menus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
