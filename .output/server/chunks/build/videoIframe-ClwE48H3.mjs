import { _ as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$1 } from './Footer-DZPaOTwy.mjs';
import { defineComponent, computed, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "videoIframe",
  __ssrInlineRender: true,
  setup(__props) {
    const fileVideoUrl = computed(() => {
      return (value) => {
        let str = "";
        if (value) {
          if (value.indexOf("vimeo") != -1)
            str = value.replace("vimeo.com", "player.vimeo.com/video") + "?autoplay=1";
          else if (value.indexOf("youtube") != -1)
            str = value.replace("watch?v=", "embed/");
          else
            str = value;
        } else {
          str = value;
        }
        return str;
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full bg-black relative"${_scopeId}><div class="px-50px"${_scopeId}><div class="max-w-1300px mx-auto py-10"${_scopeId}><div class="w-full overflow-hidden relative z-10 h-70vh"${_scopeId}><iframe height="100%" width="100%" frameborder="0" allow="autoplay;fullscreen; picture-in-picture"${ssrRenderAttr("src", unref(fileVideoUrl)(_ctx.$route.query.url))}${_scopeId}></iframe></div></div></div>`);
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full bg-black relative" }, [
                createVNode("div", { class: "px-50px" }, [
                  createVNode("div", { class: "max-w-1300px mx-auto py-10" }, [
                    createVNode("div", { class: "w-full overflow-hidden relative z-10 h-70vh" }, [
                      createVNode("iframe", {
                        height: "100%",
                        width: "100%",
                        frameborder: "0",
                        allow: "autoplay;fullscreen; picture-in-picture",
                        src: unref(fileVideoUrl)(_ctx.$route.query.url)
                      }, null, 8, ["src"])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/videoIframe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
