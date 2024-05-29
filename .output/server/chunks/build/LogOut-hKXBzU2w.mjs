import { u as useUserPinia } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LogOut",
  __ssrInlineRender: true,
  emits: ["update:model-value"],
  setup(__props, { emit: __emit }) {
    useUserPinia();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-135 bg-black p-16 space-y-16 fade_scale" }, _attrs))}><div class="space-y-4"><p class="font-medium text-5xl PPHattonMedium">Log Out</p><div class="font-light text-lg PolySansNeutral">Do you want to log out of your account?</div></div><div class="space-x-5 flex"><div class="btn gradient-btn"><div>Log out</div></div><div class="btn"><div>Cancel</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Feedback/Modal/User/LogOut.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
