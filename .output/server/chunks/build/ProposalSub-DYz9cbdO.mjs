import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProposalSub",
  __ssrInlineRender: true,
  props: {
    path: { default: "/useProposal/film/preview" }
  },
  emits: ["update:model-value"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-117 bg-black fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 space-y-16" }, _attrs))}><div class="space-y-4"><div class="font-medium text-5xl PPHattonMedium flex flex-col space-y-2"><span>Proposal</span><span>Submitted!</span></div><div class="font-light text-lg PolySansNeutral space-y-8"><div>Thanks for your submission!</div><div>Sit tight, we will review your submission as quickly as we can.</div><div>You will receive email notification if your proposal is approved, feedback will be provided.</div><div>You can track the progress in your proposal dashboard.</div></div></div><div class="btn gradient-btn"><div>OK</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Feedback/Modal/User/ProposalSub.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
