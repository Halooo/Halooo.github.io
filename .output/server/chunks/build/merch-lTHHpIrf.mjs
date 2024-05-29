import { a as buildAssetsURL, p as publicAssetsURL } from '../routes/renderer.mjs';
import { R, n as navigateTo, _ as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$1 } from './Footer-DZPaOTwy.mjs';
import { useSSRContext, defineComponent, withCtx, unref, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './virtual_public-BaMrrqy2.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _imports_0 = "" + buildAssetsURL("Rectangle273.vJyZtn63.png");
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,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";
const _imports_4 = publicAssetsURL("/images/icon/Chevron_Right.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "merch",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-eecab43a>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "home" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full relative" data-v-eecab43a${_scopeId}><div class="px-50px relative" data-v-eecab43a${_scopeId}><div class="max-w-1300px mx-auto flex justify-center py-50" data-v-eecab43a${_scopeId}><div class="title-gradient text-77px PPHattonMedium" data-v-eecab43a${_scopeId}>Merch &amp; More</div></div><div class="relative fade_scale-border" data-v-eecab43a${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-full" data-v-eecab43a${_scopeId}><div class="absolute inset-0 w-full h-full" data-v-eecab43a${_scopeId}><div class="max-w-1300px mx-auto h-full flex flex-col justify-between items-center" data-v-eecab43a${_scopeId}><div class="flex-1 flex justify-center items-center w-full px-5%" data-v-eecab43a${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" class="h-14" data-v-eecab43a${_scopeId}><div class="h-3px flex-1 mx-10 merch-border" data-v-eecab43a${_scopeId}></div><img${ssrRenderAttr("src", _imports_2)} alt="" class="h-12" data-v-eecab43a${_scopeId}></div><div class="py-20 absolute bottom-0 left-0 w-full flex justify-center" data-v-eecab43a${_scopeId}><button disabled class="btn gradient-btn mt-16" data-v-eecab43a${_scopeId}><div data-v-eecab43a${_scopeId}>Coming Soon</div></button></div></div></div></div><div class="max-w-1300px mx-auto flex justify-center pt-50 pb-20" data-v-eecab43a${_scopeId}><div class="flex justify-between space-x-10" data-v-eecab43a${_scopeId}><div data-v-eecab43a${_scopeId}><div class="text-77px PPHattonMedium" data-v-eecab43a${_scopeId}>MOC</div><img${ssrRenderAttr("src", _imports_0$1)} class="h-15 block" data-v-eecab43a${_scopeId}><div class="btn gradient-btn mt-16" data-v-eecab43a${_scopeId}><div data-v-eecab43a${_scopeId}>Enter MOC</div></div></div><div class="PolySansSlim text-lg font-light" data-v-eecab43a${_scopeId}> MOC (Mo Keng) is a collectible figures e-commerce platform designed to facilitate the <br data-v-eecab43a${_scopeId}> exchange and exhibition of authentic collectible figures, as well as promote the ACG <br data-v-eecab43a${_scopeId}> (anime, comics, and games) community and subculture. The platform hosts a wide array <br data-v-eecab43a${_scopeId}> of high-end, officially licensed collectible products that capture the essence and spirit of <br data-v-eecab43a${_scopeId}> beloved characters. MOC also owns and operates the largest collectible museum in <br data-v-eecab43a${_scopeId}> China, the Mo Keng New Museum, where fans can further cultivate community and <br data-v-eecab43a${_scopeId}> celebrate their fandoms. In combining craftsmanship, artistry, and fandom in the form of <br data-v-eecab43a${_scopeId}> collectible figures, MOC provides a space for fans to come together and bring their <br data-v-eecab43a${_scopeId}> favorite stories to life. </div></div></div></div><img src="https://www.starscollective.com/assets/images/gif/SCMOC.gif" alt="" class="w-full" data-v-eecab43a${_scopeId}><div class="px-50px relative py-20" data-v-eecab43a${_scopeId}><div class="text-77px text-center PPHattonMedium" data-v-eecab43a${_scopeId}>Future Merch</div></div>`);
            _push2(ssrRenderComponent(unref(R), {
              src: "https://www.starscollective.com/assets/videos/pc/SCFutureMerch.webm",
              muted: "",
              autoplay: "",
              loop: "",
              playsinline: "",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`<div class="px-50px py-50" data-v-eecab43a${_scopeId}><div class="max-w-1300px mx-auto relative z-100" data-v-eecab43a${_scopeId}><div class="w-full flex justify-between items-center PPHattonMedium" data-v-eecab43a${_scopeId}><div class="flex items-center cursor-pointer" data-v-eecab43a${_scopeId}></div><div class="flex items-center cursor-pointer" data-v-eecab43a${_scopeId}><div class="right-btn text-35px" data-v-eecab43a${_scopeId}>Cross-Medium Content</div><img${ssrRenderAttr("src", _imports_4)} alt="" class="w-12" data-v-eecab43a${_scopeId}></div></div></div></div>`);
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full relative" }, [
                createVNode("div", { class: "px-50px relative" }, [
                  createVNode("div", { class: "max-w-1300px mx-auto flex justify-center py-50" }, [
                    createVNode("div", { class: "title-gradient text-77px PPHattonMedium" }, "Merch & More")
                  ]),
                  createVNode("div", { class: "relative fade_scale-border" }, [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "",
                      class: "w-full"
                    }),
                    createVNode("div", { class: "absolute inset-0 w-full h-full" }, [
                      createVNode("div", { class: "max-w-1300px mx-auto h-full flex flex-col justify-between items-center" }, [
                        createVNode("div", { class: "flex-1 flex justify-center items-center w-full px-5%" }, [
                          createVNode("img", {
                            src: _imports_1,
                            alt: "",
                            class: "h-14"
                          }),
                          createVNode("div", { class: "h-3px flex-1 mx-10 merch-border" }),
                          createVNode("img", {
                            src: _imports_2,
                            alt: "",
                            class: "h-12"
                          })
                        ]),
                        createVNode("div", { class: "py-20 absolute bottom-0 left-0 w-full flex justify-center" }, [
                          createVNode("button", {
                            disabled: "",
                            class: "btn gradient-btn mt-16"
                          }, [
                            createVNode("div", null, "Coming Soon")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "max-w-1300px mx-auto flex justify-center pt-50 pb-20" }, [
                    createVNode("div", { class: "flex justify-between space-x-10" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "text-77px PPHattonMedium" }, "MOC"),
                        createVNode("img", {
                          src: _imports_0$1,
                          class: "h-15 block"
                        }),
                        createVNode("div", {
                          class: "btn gradient-btn mt-16",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("https://www.mowanka.com/", { external: true })
                        }, [
                          createVNode("div", null, "Enter MOC")
                        ], 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "PolySansSlim text-lg font-light" }, [
                        createTextVNode(" MOC (Mo Keng) is a collectible figures e-commerce platform designed to facilitate the "),
                        createVNode("br"),
                        createTextVNode(" exchange and exhibition of authentic collectible figures, as well as promote the ACG "),
                        createVNode("br"),
                        createTextVNode(" (anime, comics, and games) community and subculture. The platform hosts a wide array "),
                        createVNode("br"),
                        createTextVNode(" of high-end, officially licensed collectible products that capture the essence and spirit of "),
                        createVNode("br"),
                        createTextVNode(" beloved characters. MOC also owns and operates the largest collectible museum in "),
                        createVNode("br"),
                        createTextVNode(" China, the Mo Keng New Museum, where fans can further cultivate community and "),
                        createVNode("br"),
                        createTextVNode(" celebrate their fandoms. In combining craftsmanship, artistry, and fandom in the form of "),
                        createVNode("br"),
                        createTextVNode(" collectible figures, MOC provides a space for fans to come together and bring their "),
                        createVNode("br"),
                        createTextVNode(" favorite stories to life. ")
                      ])
                    ])
                  ])
                ]),
                createVNode("img", {
                  src: "https://www.starscollective.com/assets/images/gif/SCMOC.gif",
                  alt: "",
                  class: "w-full"
                }),
                createVNode("div", { class: "px-50px relative py-20" }, [
                  createVNode("div", { class: "text-77px text-center PPHattonMedium" }, "Future Merch")
                ]),
                createVNode(unref(R), {
                  src: "https://www.starscollective.com/assets/videos/pc/SCFutureMerch.webm",
                  muted: "",
                  autoplay: "",
                  loop: "",
                  playsinline: "",
                  class: "w-full"
                }),
                createVNode("div", { class: "px-50px py-50" }, [
                  createVNode("div", { class: "max-w-1300px mx-auto relative z-100" }, [
                    createVNode("div", { class: "w-full flex justify-between items-center PPHattonMedium" }, [
                      createVNode("div", { class: "flex items-center cursor-pointer" }),
                      createVNode("div", {
                        class: "flex items-center cursor-pointer",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/starsMovies")
                      }, [
                        createVNode("div", { class: "right-btn text-35px" }, "Cross-Medium Content"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/merch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const merch = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eecab43a"]]);

export { merch as default };
