import { R, _ as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$1 } from './Footer-DZPaOTwy.mjs';
import { defineComponent, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "scInema",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full bg-black overflow-hidden"${_scopeId}><div class="w-full h-screen overflow-hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(R), {
              src: "https://www.starscollective.com/assets/videos/pc/sc_footage.mp4",
              muted: "",
              autoplay: "",
              loop: "",
              playsinline: "",
              class: "w-full h-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-1300px px-50px mx-auto overflow-hidden pb-205px"${_scopeId}><div class="text-16px leading-6 mt-12"${_scopeId}> We are an interdimensional content provider. With great passion and <br${_scopeId}> seasoned experience, our artists, producers, and partners work together<br${_scopeId}> to bring your idea to life. </div></div>`);
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full bg-black overflow-hidden" }, [
                createVNode("div", { class: "w-full h-screen overflow-hidden" }, [
                  createVNode(unref(R), {
                    src: "https://www.starscollective.com/assets/videos/pc/sc_footage.mp4",
                    muted: "",
                    autoplay: "",
                    loop: "",
                    playsinline: "",
                    class: "w-full h-full"
                  })
                ]),
                createVNode("div", { class: "w-1300px px-50px mx-auto overflow-hidden pb-205px" }, [
                  createVNode("div", { class: "text-16px leading-6 mt-12" }, [
                    createTextVNode(" We are an interdimensional content provider. With great passion and "),
                    createVNode("br"),
                    createTextVNode(" seasoned experience, our artists, producers, and partners work together"),
                    createVNode("br"),
                    createTextVNode(" to bring your idea to life. ")
                  ])
                ]),
                createVNode(_component_Footer)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/scInema.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
