import { _ as _sfc_main$1 } from './LogOut-hKXBzU2w.mjs';
import { v as useModalPinia } from './server.mjs';
import { defineComponent, computed, nextTick, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import gsap from 'gsap';
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
import 'video.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const model_store = useModalPinia();
    const model_name_computed = computed(() => {
      if (model_store.getModalName) {
        nextTick(() => {
          AnimateEffect();
        });
      }
      return model_store.getModalName ? true : false;
    });
    const AnimateEffect = () => {
      gsap.fromTo(".fade_scale", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3 });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FeedbackModalUserLogOut = _sfc_main$1;
      if (unref(model_name_computed)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full bg-black bg-opacity-70 fixed inset-0 z-99" }, _attrs))}><div class="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 fade_scale">`);
        if (unref(model_store).getModalName === "logOut") {
          _push(ssrRenderComponent(_component_FeedbackModalUserLogOut, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Feedback/Modal/User/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
