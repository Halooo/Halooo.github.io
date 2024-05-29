import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './server.mjs';
import __nuxt_component_7 from './Icon-CaiLYYN4.mjs';
import { _ as _sfc_main$1 } from './Footer-DZPaOTwy.mjs';
import { defineComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './el-input-D8gXC6Et.mjs';
import './index-C8rz0VXy.mjs';
import './index-URjNNh32.mjs';
import './icon-CyxyPYk8.mjs';
import './constants-DzvzFGCl.mjs';
import './event-DSz0kuqc.mjs';
import './Index-DNxKYUQ5.mjs';
import './OkBox-Dvtj49Wo.mjs';
import './virtual_public-3Fh-jQka.mjs';

const _imports_0 = "" + buildAssetsURL("scMeta.CFue9p3p.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "scMeta",
  __ssrInlineRender: true,
  setup(__props) {
    const handleLink = () => {
      (void 0).open("/scMeta", "_black");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Icon = __nuxt_component_7;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full bg-black overflow-hidden"${_scopeId}><div class="w-1300px px-50px flex justify-between mx-auto h-screen items-center"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="h-120px"${_scopeId}><div${_scopeId}><div class="text-51px font-medium" style="${ssrRenderStyle({ "font-family": "PPHattonMedium" })}"${_scopeId}> Entertainment links all,<br${_scopeId}> future Web3 Hollywood. </div><div class="bg-#ffffff h-18px flex w-270px text-black my-9 justify-between"${_scopeId}><div class="uppercase tracking-2.1px ml-2px"${_scopeId}>Go to SC Meta Website</div>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:arrow-top-right",
              class: "w-18px h-18px"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-16px"${_scopeId}> We share the common ideals of Decentralization and Openness with the<br${_scopeId}> Web3.0 world, that is why we are delicate to be the top brand of<br${_scopeId}> entertainment Metaverse! </div></div></div>`);
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full bg-black overflow-hidden" }, [
                createVNode("div", { class: "w-1300px px-50px flex justify-between mx-auto h-screen items-center" }, [
                  createVNode("img", {
                    src: _imports_0,
                    class: "h-120px"
                  }),
                  createVNode("div", null, [
                    createVNode("div", {
                      class: "text-51px font-medium",
                      style: { "font-family": "PPHattonMedium" }
                    }, [
                      createTextVNode(" Entertainment links all,"),
                      createVNode("br"),
                      createTextVNode(" future Web3 Hollywood. ")
                    ]),
                    createVNode("div", {
                      class: "bg-#ffffff h-18px flex w-270px text-black my-9 justify-between",
                      onClick: handleLink
                    }, [
                      createVNode("div", { class: "uppercase tracking-2.1px ml-2px" }, "Go to SC Meta Website"),
                      createVNode(_component_Icon, {
                        name: "mdi:arrow-top-right",
                        class: "w-18px h-18px"
                      })
                    ]),
                    createVNode("div", { class: "text-16px" }, [
                      createTextVNode(" We share the common ideals of Decentralization and Openness with the"),
                      createVNode("br"),
                      createTextVNode(" Web3.0 world, that is why we are delicate to be the top brand of"),
                      createVNode("br"),
                      createTextVNode(" entertainment Metaverse! ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/scMeta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
