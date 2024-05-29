import { u as useUserPinia, _ as __nuxt_component_0, b as __nuxt_component_2 } from './server.mjs';
import { defineAsyncComponent, defineComponent, ref, watchEffect, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { _ as _sfc_main$1 } from './Footer-DZPaOTwy.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
import './el-input-D8gXC6Et.mjs';
import './index-C8rz0VXy.mjs';
import './index-URjNNh32.mjs';
import './icon-CyxyPYk8.mjs';
import './constants-DzvzFGCl.mjs';
import './event-DSz0kuqc.mjs';
import './Icon-CaiLYYN4.mjs';
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Index-DNxKYUQ5.mjs';
import './OkBox-Dvtj49Wo.mjs';
import './virtual_public-3Fh-jQka.mjs';

const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./Menus-C81EnAY8.mjs').then((c) => c.default || c));
const __nuxt_component_4_lazy = defineAsyncComponent(() => import('./Index-NUQ-kTDf.mjs').then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "user",
  __ssrInlineRender: true,
  setup(__props) {
    const user_store = useUserPinia();
    const userInfo = ref();
    watchEffect(() => {
      userInfo.value = user_store.getUserInfo;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_LazyUserMenus = __nuxt_component_1_lazy;
      const _component_NuxtPage = __nuxt_component_2;
      const _component_Footer = _sfc_main$1;
      const _component_LazyFeedbackModalUser = __nuxt_component_4_lazy;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "user" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full"${_scopeId}><div class="w-full bg_img px-32 flex justify-between space-x-6 pt-4 pb-16 fullscreen"${_scopeId}><div class="w-80 min-w-[20rem]"${_scopeId}><div class="bg-black"${_scopeId}><div class="w-80 mx-auto px-5 md:px-0 rounded-lg bg-black space-y-16"${_scopeId}><div class="p-8 space-y-8"${_scopeId}><!--[-->`);
            ssrRenderList(unref(userInfo).profile_avatar, (item, index) => {
              _push2(`<div class="w-32 h-32 rounded-full overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", item.file_url)} class="w-full h-full object-cover"${_scopeId}></div>`);
            });
            _push2(`<!--]--><div class="font-medium text-4xl PPHattonMedium"${_scopeId}>${ssrInterpolate(unref(userInfo).first_name)}${ssrInterpolate(unref(userInfo).last_name)}</div><div class="font-normal text-sm text-#ffffff PolySansNeutral"${_scopeId}>STARS</div></div>`);
            _push2(ssrRenderComponent(_component_LazyUserMenus, null, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="flex-1 bg-black"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_LazyFeedbackModalUser, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full" }, [
                createVNode("div", { class: "w-full bg_img px-32 flex justify-between space-x-6 pt-4 pb-16 fullscreen" }, [
                  createVNode("div", { class: "w-80 min-w-[20rem]" }, [
                    createVNode("div", { class: "bg-black" }, [
                      createVNode("div", { class: "w-80 mx-auto px-5 md:px-0 rounded-lg bg-black space-y-16" }, [
                        createVNode("div", { class: "p-8 space-y-8" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(userInfo).profile_avatar, (item, index) => {
                            return openBlock(), createBlock("div", {
                              key: index,
                              class: "w-32 h-32 rounded-full overflow-hidden"
                            }, [
                              createVNode("img", {
                                src: item.file_url,
                                class: "w-full h-full object-cover"
                              }, null, 8, ["src"])
                            ]);
                          }), 128)),
                          createVNode("div", { class: "font-medium text-4xl PPHattonMedium" }, toDisplayString(unref(userInfo).first_name) + toDisplayString(unref(userInfo).last_name), 1),
                          createVNode("div", { class: "font-normal text-sm text-#ffffff PolySansNeutral" }, "STARS")
                        ]),
                        createVNode(_component_LazyUserMenus)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex-1 bg-black" }, [
                    createVNode(_component_NuxtPage)
                  ])
                ]),
                createVNode(_component_Footer),
                createVNode(_component_LazyFeedbackModalUser)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
