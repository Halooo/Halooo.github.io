import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, reactive, mergeProps, unref, useSSRContext } from 'vue';
import { a as useRoute } from './server.mjs';
import { u as useCollectionPinia } from './collection-DCBzbesH.mjs';
import { a as apiindexcollectionDetail } from './collection-BckPpfCS.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
import 'vue-router';
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import 'pinia-plugin-persistedstate';
import 'gsap';
import 'video.js';
import './request-CdKXnB25.mjs';
import './index-C8rz0VXy.mjs';
import './index-URjNNh32.mjs';
import './icon-CyxyPYk8.mjs';
import './aria-DJRDfGoO.mjs';

const _imports_0 = "" + buildAssetsURL("colored-ribbon.z1t47LEq.png");
const _imports_1 = "" + buildAssetsURL("colored-ribbon-fill.DqYLn2Dk.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[idx]",
  __ssrInlineRender: true,
  emits: ["animationEnd"],
  setup(__props, { emit: __emit }) {
    const info = reactive({
      banner_image: "",
      name: "",
      nfts: [],
      id: 0,
      user: {
        first_name: "",
        last_name: ""
      }
    });
    const route = useRoute();
    const collectionStore = useCollectionPinia();
    const getDetailInfo = async () => {
      const res = await apiindexcollectionDetail(route.params.idx);
      for (let key in info) {
        info[key] = res.data[key];
      }
    };
    getDetailInfo();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 relative px-50px w-full pt-20" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="" class="${ssrRenderClass([[{ "opacity-0": unref(collectionStore).getCollectionAnimation }], "absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 ribbon1"])}"><img${ssrRenderAttr("src", _imports_1)} alt="" class="${ssrRenderClass([[{ "opacity-0": !unref(collectionStore).getCollectionAnimation }], "absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 ribbon2"])}"><div class="absolute rounded-10px top-1/2 left-1/2 -translate-1/2 w-full z-10 flex justify-center items-center"><img${ssrRenderAttr("src", unref(info).banner_image)} alt="" class="h-100 info-image opacity-0"></div><div class="max-w-1300px mx-auto relative z-30"><div class="${ssrRenderClass([[{ "opacity-0": unref(collectionStore).getCollectionAnimation }], "info-body"])}"><div class="text-#ffffff text-lg PolySansSlim font-semibold">${ssrInterpolate(unref(info).user.first_name)} ${ssrInterpolate(unref(info).user.last_name)}</div><div class="text-96px PolySansNeutral font-bold mt-3">${ssrInterpolate(unref(info).name)}</div><div class="PolySansSlim my-8">${ssrInterpolate(unref(info).nfts.length)} artworks</div><div class="bg-white cursor-pointer px-8 py-4 inline-block"><span class="text-lg text-black font-semibold">VIEW COLLECTION</span></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collection/step3/[idx].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
