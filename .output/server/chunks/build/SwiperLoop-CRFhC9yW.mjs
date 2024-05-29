import { defineComponent, ref, watchEffect, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SwiperLoop",
  __ssrInlineRender: true,
  props: {
    list: { default: [] },
    width: { default: 0 },
    offset: { default: "left" }
  },
  setup(__props) {
    const props = __props;
    ref(null);
    ref();
    const left = ref(0);
    watchEffect(() => {
      const num = Number(`-${props.list.length * (props.width + 30)}`);
      if (props.offset === "right") {
        if (left.value >= 0)
          left.value = num;
      }
      if (props.offset === "left") {
        if (left.value <= num)
          left.value = 0;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (props.list) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex" }, _attrs))}><div class="whitespace-nowrap space-x-30px" style="${ssrRenderStyle([{ transform: `translateX(${unref(left)}px)` }])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SwiperLoop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
