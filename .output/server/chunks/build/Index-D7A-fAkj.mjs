import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _imports_0 = "" + buildAssetsURL("GRANT-BANNER.C-f_7E0N.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full relative" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-full scale-90"><div class="absolute top-5 left-0 w-full h-full flex justify-center items-center"><div class="flex flex-col justify-center items-center"><div class="text-center font-medium text-5xl PPHattonMedium text-black">Stars Collective <br>Grant</div><div class="font-light text-lg PolySansNeutral text-black">Unleashing Action Storytellings</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Grant/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
