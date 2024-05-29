import { n as navigateTo, _ as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$1 } from './Footer-DZPaOTwy.mjs';
import { useSSRContext, defineComponent, reactive, withCtx, createVNode, unref } from 'vue';
import { c as apiindexcollectionStatistics } from './collection-BckPpfCS.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './comin-soon-C-EIHyMj.mjs';
import { _ as _imports_5 } from './virtual_public-DIEOG2z-.mjs';
import { _ as _imports_4 } from './virtual_public-BIBlAKn8.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './el-input-D8gXC6Et.mjs';
import './index-C8rz0VXy.mjs';
import './index-URjNNh32.mjs';
import './icon-CyxyPYk8.mjs';
import './constants-DzvzFGCl.mjs';
import './event-DSz0kuqc.mjs';
import './Icon-CaiLYYN4.mjs';
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './Index-DNxKYUQ5.mjs';
import './OkBox-Dvtj49Wo.mjs';
import './virtual_public-3Fh-jQka.mjs';
import './request-CdKXnB25.mjs';
import './aria-DJRDfGoO.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "metaverse",
  __ssrInlineRender: true,
  setup(__props) {
    const statistic = reactive({
      collection_len: 0,
      artist_len: 0
    });
    const getapiindexcollectionStatistics = async () => {
      const { data } = await apiindexcollectionStatistics();
      statistic.collection_len = data.value.data.collection_len;
      statistic.artist_len = data.value.data.artist_len;
    };
    getapiindexcollectionStatistics();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-8f967970>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "home" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full" data-v-8f967970${_scopeId}><div class="px-50px" data-v-8f967970${_scopeId}><div class="max-w-1300px mx-auto py-50 flex justify-center" data-v-8f967970${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-500px" data-v-8f967970${_scopeId}></div><div class="max-w-1300px mx-auto mt-10" data-v-8f967970${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-10" data-v-8f967970${_scopeId}><div class="space-y-10" data-v-8f967970${_scopeId}></div><div class="space-y-10" data-v-8f967970${_scopeId}></div></div></div><div class="max-w-1300px mx-auto mt-10 pt-20 relative" data-v-8f967970${_scopeId}><div class="flex justify-end" data-v-8f967970${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" class="h-31" data-v-8f967970${_scopeId}></div><img src="https://www.starscollective.com/assets/images/gif/line2.gif" alt="" class="w-full block mx-auto" data-v-8f967970${_scopeId}></div></div><div class="px-50px pt-60 pb-30" data-v-8f967970${_scopeId}><div class="max-w-1300px mx-auto relative z-100" data-v-8f967970${_scopeId}><div class="w-full flex justify-between items-center PPHattonMedium" data-v-8f967970${_scopeId}><div class="flex items-center cursor-pointer" data-v-8f967970${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="" class="w-12" data-v-8f967970${_scopeId}><div class="left-btn text-35px" data-v-8f967970${_scopeId}>Cross-Medium Content</div></div><div class="flex items-center cursor-pointer" data-v-8f967970${_scopeId}><div class="right-btn text-35px" data-v-8f967970${_scopeId}>Merch</div><img${ssrRenderAttr("src", _imports_4)} alt="" class="w-12" data-v-8f967970${_scopeId}></div></div></div></div>`);
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full" }, [
                createVNode("div", { class: "px-50px" }, [
                  createVNode("div", { class: "max-w-1300px mx-auto py-50 flex justify-center" }, [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "",
                      class: "w-500px"
                    })
                  ]),
                  createVNode("div", { class: "max-w-1300px mx-auto mt-10" }, [
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-10" }, [
                      createVNode("div", { class: "space-y-10" }),
                      createVNode("div", { class: "space-y-10" })
                    ])
                  ]),
                  createVNode("div", { class: "max-w-1300px mx-auto mt-10 pt-20 relative" }, [
                    createVNode("div", { class: "flex justify-end" }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: "",
                        class: "h-31"
                      })
                    ]),
                    createVNode("img", {
                      src: "https://www.starscollective.com/assets/images/gif/line2.gif",
                      alt: "",
                      class: "w-full block mx-auto"
                    })
                  ])
                ]),
                createVNode("div", { class: "px-50px pt-60 pb-30" }, [
                  createVNode("div", { class: "max-w-1300px mx-auto relative z-100" }, [
                    createVNode("div", { class: "w-full flex justify-between items-center PPHattonMedium" }, [
                      createVNode("div", {
                        class: "flex items-center cursor-pointer",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/starsMovies")
                      }, [
                        createVNode("img", {
                          src: _imports_5,
                          alt: "",
                          class: "w-12"
                        }),
                        createVNode("div", { class: "left-btn text-35px" }, "Cross-Medium Content")
                      ], 8, ["onClick"]),
                      createVNode("div", {
                        class: "flex items-center cursor-pointer",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/merch")
                      }, [
                        createVNode("div", { class: "right-btn text-35px" }, "Merch"),
                        createVNode("img", {
                          src: _imports_4,
                          alt: "",
                          class: "w-12"
                        })
                      ], 8, ["onClick"])
                    ])
                  ])
                ]),
                createVNode(_component_Footer)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/metaverse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const metaverse = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f967970"]]);

export { metaverse as default };
