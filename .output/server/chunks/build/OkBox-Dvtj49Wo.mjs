import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OkBox",
  __ssrInlineRender: true,
  props: {
    defaultBtn: { type: Boolean, default: true }
  },
  emits: ["update:model-value", "okBoxSubmit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-135 bg-black p-16 space-y-16" }, _attrs))}><div class="space-y-4"><p class="font-medium text-5xl PPHattonMedium leading-16">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</p><div class="font-light text-lg PolySansNeutral">`);
      ssrRenderSlot(_ctx.$slots, "describe", {}, null, _push, _parent);
      _push(`</div></div>`);
      if (props.defaultBtn) {
        _push(`<div class="btn gradient-btn"><div>close</div></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "btn", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Feedback/Modal/User/OkBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
