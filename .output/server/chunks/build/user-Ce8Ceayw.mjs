import { _ as _sfc_main$1 } from './Header-BsW2-ynM.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { R } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './Icon-CaiLYYN4.mjs';
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-router';
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import 'pinia-plugin-persistedstate';
import 'gsap';
import 'video.js';
import './nuxt-link-Bi4Z90lR.mjs';
import './Menus-C81EnAY8.mjs';
import './Index-DNxKYUQ5.mjs';
import './LogOut-hKXBzU2w.mjs';
import './virtual_public-3Fh-jQka.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "user",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(R), {
        src: "https://www.starscollective.com/assets/videos/pc/SC-10s-B&W-final-2.webm",
        muted: "",
        autoplay: "",
        loop: "",
        playsinline: "",
        class: "fixed inset-0 w-full h-full z-1 player-video"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main class="main-cantainer relative z-10">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
