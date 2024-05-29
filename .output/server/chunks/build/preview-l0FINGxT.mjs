import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "preview",
  __ssrInlineRender: true,
  setup(__props) {
    const dataInfo = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))}><p class="font-medium text-5xl PPHattonMedium mb-21">Submitted Art Proposal</p>`);
      if (unref(dataInfo)) {
        _push(`<div class="space-y-4 pl-5"><div class="border-b border-#2F2F2F pb-4"><span class="font-semibold text-lg PolySansNeutral">Case Number :${ssrInterpolate(unref(dataInfo).num)}</span></div><div class="border-b border-#2F2F2F pb-12 space-y-4 flex flex-col text-lg PolySansNeutral"><span class="font-semibold">Project Name</span><span class="font-normal text-#BDBDBD">${ssrInterpolate(unref(dataInfo).project_name)}</span><span class="font-semibold">Project Type</span><span class="font-norma text-#BDBDBD">${ssrInterpolate(unref(dataInfo).type)}</span></div><div class="border-b border-#2F2F2F pb-12 text-lg PolySansNeutral"><span class="font-semibold">Project Description</span><div class="font-normal text-#BDBDBD mt-4">${ssrInterpolate(unref(dataInfo).project_description)}</div></div><div class="space-y-4 pb-4"><span class="font-semibold text-lg PolySansNeutral">Attachments</span><!--[-->`);
        ssrRenderList(unref(dataInfo).attachment_files, (item, index) => {
          _push(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"><span class="font-normal text-sm PolySansNeutral">${ssrInterpolate(item.file_name)}</span><span class="font-normal text-sm PolySansNeutral underline underline-offset-2 cursor-pointer text-#ffffff"><a${ssrRenderAttr("href", item.fullurl)} target="_blank">VIEW</a></span></div>`);
        });
        _push(`<!--]--></div><div class="text-lg PolySansNeutral space-y-2"><div class="font-semibold">Downloadable Link to Your Project</div><div class="font-norma text-#BDBDBD">${ssrInterpolate(unref(dataInfo).downloadable_link)}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="btn gradient-btn mt-14"><div>Back</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/useProposal/art/preview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
