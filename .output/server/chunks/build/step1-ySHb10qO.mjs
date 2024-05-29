import { R, n as navigateTo, _ as __nuxt_component_0 } from './server.mjs';
import { useSSRContext, defineComponent, withCtx, unref, createVNode, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
  __name: "step1",
  __ssrInlineRender: true,
  setup(__props) {
    const handleSkip = () => {
      navigateTo("/collection/step2");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-faff54c3>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed inset-0 w-full h-screen" data-v-faff54c3${_scopeId}>`);
            _push2(ssrRenderComponent(unref(R), {
              src: "https://www.starscollective.com/assets/videos/pc/NFT.webm",
              muted: "",
              autoplay: "",
              playsinline: "",
              class: "w-full h-full",
              onEnded: handleSkip
            }, null, _parent2, _scopeId));
            _push2(`<div class="fixed bottom-20 right-20 border border-white rounded-full px-6 py-1 text-18px z-10 cursor-pointer" data-v-faff54c3${_scopeId}>skip</div></div>`);
          } else {
            return [
              createVNode("div", { class: "fixed inset-0 w-full h-screen" }, [
                createVNode(unref(R), {
                  src: "https://www.starscollective.com/assets/videos/pc/NFT.webm",
                  muted: "",
                  autoplay: "",
                  playsinline: "",
                  class: "w-full h-full",
                  onEnded: handleSkip
                }),
                createVNode("div", {
                  class: "fixed bottom-20 right-20 border border-white rounded-full px-6 py-1 text-18px z-10 cursor-pointer",
                  onClick: withModifiers(handleSkip, ["stop"])
                }, "skip")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collection/step1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const step1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-faff54c3"]]);

export { step1 as default };
