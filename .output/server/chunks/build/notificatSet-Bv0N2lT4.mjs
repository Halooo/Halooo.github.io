import { defineComponent, reactive, computed, mergeProps, unref, useSSRContext } from 'vue';
import { i as emailNotice } from './user-C3y1iIxD.mjs';
import { ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
import './request-CdKXnB25.mjs';
import './server.mjs';
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
import './index-C8rz0VXy.mjs';
import './index-URjNNh32.mjs';
import './icon-CyxyPYk8.mjs';
import './aria-DJRDfGoO.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "notificatSet",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      operate_type: "select",
      new_message: "0",
      proposal_update: "0",
      event_info: "0",
      stars_collective: "0"
    });
    const switchStatus = computed(() => {
      return (state) => {
        return state === "1" ? true : false;
      };
    });
    const init = async () => {
      form.operate_type = "select";
      const res = await emailNotice(form);
      const { new_message, proposal_update, event_info, stars_collective } = res.data;
      form.new_message = new_message.toString();
      form.proposal_update = proposal_update.toString();
      form.event_info = event_info.toString();
      form.stars_collective = stars_collective.toString();
    };
    init();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full pt-10 pb-32 pl-9 pr-28 space-y-12" }, _attrs))}><p class="font-medium text-4xl PPHattonMedium">Notification Settings</p><div class="space-y-4"><div class="font-semibold text-lg PolySansNeutral"> Email Notification <span class="text-#ffffff cursor-pointer">Update Email Address</span></div><div class="flex justify-between items-center"><span class="font-normal text-lg PolySansNeutral">New messages</span><div class="cursor-pointer flex items-center w-28 h-9 bg-#2F2F2F text-[Lausanne] text-white"><div class="${ssrRenderClass([{ switch_is_open: unref(switchStatus)(unref(form).new_message) }, "flex items-center justify-center h-full w-14"])}"><span class="font-normal text-lg PolySansNeutral">off</span></div><div class="${ssrRenderClass([{ switch_is_open: !unref(switchStatus)(unref(form).new_message) }, "flex items-center justify-center h-full w-14"])}"><span class="font-normal text-lg PolySansNeutral">on</span></div></div></div><div class="flex justify-between items-center"><span class="font-normal text-lg PolySansNeutral">Proposal updates</span><div class="cursor-pointer flex items-center w-28 h-9 bg-#2F2F2F text-[Lausanne] text-white"><div class="${ssrRenderClass([{ switch_is_open: unref(switchStatus)(unref(form).proposal_update) }, "flex items-center justify-center h-full w-14"])}"><span class="font-normal text-lg PolySansNeutral">off</span></div><div class="${ssrRenderClass([{ switch_is_open: !unref(switchStatus)(unref(form).proposal_update) }, "flex items-center justify-center h-full w-14"])}"><span class="font-normal text-lg PolySansNeutral">on</span></div></div></div><div class="flex justify-between items-center"><span class="font-normal text-lg PolySansNeutral">Events info</span><div class="cursor-pointer flex items-center w-28 h-9 bg-#2F2F2F text-[Lausanne] text-white"><div class="${ssrRenderClass([{ switch_is_open: unref(switchStatus)(unref(form).event_info) }, "flex items-center justify-center h-full w-14"])}"><span class="font-normal text-lg PolySansNeutral">off</span></div><div class="${ssrRenderClass([{ switch_is_open: !unref(switchStatus)(unref(form).event_info) }, "flex items-center justify-center h-full w-14"])}"><span class="font-normal text-lg PolySansNeutral">on</span></div></div></div><div class="flex justify-between items-center"><span class="font-normal text-lg PolySansNeutral">Stars Collective Communication</span><div class="cursor-pointer flex items-center w-28 h-9 bg-#2F2F2F text-[Lausanne] text-white"><div class="${ssrRenderClass([{ switch_is_open: unref(switchStatus)(unref(form).stars_collective) }, "flex items-center justify-center h-full w-14"])}"><span class="font-normal text-lg PolySansNeutral">off</span></div><div class="${ssrRenderClass([{ switch_is_open: !unref(switchStatus)(unref(form).stars_collective) }, "flex items-center justify-center h-full w-14"])}"><span class="font-normal text-lg PolySansNeutral">on</span></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/notificatSet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
