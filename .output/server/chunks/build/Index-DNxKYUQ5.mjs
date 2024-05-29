import { defineComponent, watchEffect, computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    watchEffect(() => {
      if (props.modelValue) {
        animateEffect();
      }
    });
    const animateEffect = () => {
    };
    const emits = __emit;
    const drawerShow = computed({
      get: () => props.modelValue,
      set: (value) => {
        emits("update:modelValue", value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(drawerShow)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full bg-black bg-opacity-70 fixed inset-0 z-99" }, _attrs))}><div class="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Feedback/Modal/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
