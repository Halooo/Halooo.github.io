import { R, n as navigateTo, _ as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$1 } from './Footer-DZPaOTwy.mjs';
import { useSSRContext, defineComponent, ref, computed, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { a as apiIndexEventList } from './home-DlGQga1N.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-BaMrrqy2.mjs';
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
  __name: "gala",
  __ssrInlineRender: true,
  setup(__props) {
    const limit = ref(30);
    const total = ref(0);
    const current = ref(1);
    const eventResult = ref([]);
    computed(() => {
      const start = limit.value * current.value - limit.value + 1;
      const end = eventResult.value.length > 0 ? limit.value * current.value - limit.value + eventResult.value.length : "";
      return { start, end };
    });
    const getEventList = async () => {
      const { data } = await apiIndexEventList(current.value, limit.value);
      eventResult.value = data.value.data.data;
      total.value = data.value.data.total;
    };
    getEventList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2fd5080d>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "home" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full overflow-hidden fixed inset-0 h-full overflow-y-auto" data-v-2fd5080d${_scopeId}><div class="w-full" data-v-2fd5080d${_scopeId}><div class="w-full h-screen relative" data-v-2fd5080d${_scopeId}>`);
            _push2(ssrRenderComponent(unref(R), {
              src: "https://www.starscollective.com/assets/videos/pc/SC-About-Color-final-1.webm",
              muted: "",
              autoplay: "",
              loop: "",
              playsinline: "",
              class: "absolute top-0 left-0 w-full h-screen player-video"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="-mt-140 pb-50 flex justify-center" data-v-2fd5080d${_scopeId}><div class="text-77px PPHattonMedium title-gradient" data-v-2fd5080d${_scopeId}>Stars Gala</div></div><div class="relative z-10 space-y-30 summit-bg" data-v-2fd5080d${_scopeId}><div class="px-50px" data-v-2fd5080d${_scopeId}><div class="max-w-1300px mx-auto" data-v-2fd5080d${_scopeId}><div class="text-77px PPHattonMedium" data-v-2fd5080d${_scopeId}>Summit</div><img${ssrRenderAttr("src", _imports_0)} class="h-15 block" data-v-2fd5080d${_scopeId}><div class="text-2xl PolySansSlim mt-15" data-v-2fd5080d${_scopeId}> An exciting and opportunity-filled summit awaits as hundreds of cross- <br data-v-2fd5080d${_scopeId}> industry leaders, come together from around the world. Together, we <br data-v-2fd5080d${_scopeId}> will explore the convergence of film, fashion, derivatives, technology, <br data-v-2fd5080d${_scopeId}> and finance, as well as their future development. This summit promises <br data-v-2fd5080d${_scopeId}> to be a revolutionary milestone in the world of venture capital. </div><!--[-->`);
            ssrRenderList(1, (item, index) => {
              _push2(`<div class="w-full card-box px-32px py-32px mt-20 overflow-hidden" data-v-2fd5080d${_scopeId}><div class="flex justify-between" data-v-2fd5080d${_scopeId}><div class="max-w-480px text-35px min-w-365px PPHattonMedium" data-v-2fd5080d${_scopeId}>Summit</div></div><div class="flex justify-between mt-5" data-v-2fd5080d${_scopeId}><div class="text-lg font-semibold PolySansSlim" data-v-2fd5080d${_scopeId}>Coming this November</div></div><div class="h-463px w-full mt-50px relative" data-v-2fd5080d${_scopeId}><img src="https://www.starscollective.com/assets/images/event/unsplash_card.png" class="w-full h-full object-cover" data-v-2fd5080d${_scopeId}></div></div>`);
            });
            _push2(`<!--]--></div></div><div class="px-50px py-30" data-v-2fd5080d${_scopeId}><div class="max-w-1300px mx-auto" data-v-2fd5080d${_scopeId}><div class="text-77px PPHattonMedium" data-v-2fd5080d${_scopeId}> Charity <br data-v-2fd5080d${_scopeId}> Night </div><img${ssrRenderAttr("src", _imports_0)} class="h-15 block" data-v-2fd5080d${_scopeId}><div class="text-2xl PolySansSlim mt-15" data-v-2fd5080d${_scopeId}> An exciting and opportunity-filled summit awaits as hundreds of cross- <br data-v-2fd5080d${_scopeId}> industry leaders, come together from around the world. Together, we <br data-v-2fd5080d${_scopeId}> will explore the convergence of film, fashion, derivatives, technology, <br data-v-2fd5080d${_scopeId}> and finance, as well as their future development. This summit promises <br data-v-2fd5080d${_scopeId}> to be a revolutionary milestone in the world of venture capital. </div><!--[-->`);
            ssrRenderList(1, (item, index) => {
              _push2(`<div class="w-full card-box1 px-32px py-32px mt-20 overflow-hidden" data-v-2fd5080d${_scopeId}><div class="flex justify-between" data-v-2fd5080d${_scopeId}><div class="max-w-480px text-35px min-w-365px PPHattonMedium" data-v-2fd5080d${_scopeId}>Summit</div></div><div class="flex justify-between mt-5" data-v-2fd5080d${_scopeId}><div class="text-lg font-semibold PolySansSlim" data-v-2fd5080d${_scopeId}>Coming this November</div></div><div class="h-463px w-full mt-50px relative" data-v-2fd5080d${_scopeId}><img src="https://www.starscollective.com/assets/images/event/unsplash_QBmsRGqlueE.png" class="w-full h-full object-cover" data-v-2fd5080d${_scopeId}></div></div>`);
            });
            _push2(`<!--]--></div></div></div></div><div class="px-50px pt-80 pb-50" data-v-2fd5080d${_scopeId}><div class="max-w-1300px mx-auto relative z-100" data-v-2fd5080d${_scopeId}><div class="w-full flex justify-between items-center" style="${ssrRenderStyle({ "font-family": "PPHattonMedium" })}" data-v-2fd5080d${_scopeId}><div class="flex items-center cursor-pointer" data-v-2fd5080d${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="" class="w-12" data-v-2fd5080d${_scopeId}><div class="left-btn text-35px" data-v-2fd5080d${_scopeId}>SC Lab</div></div><div class="flex items-center cursor-pointer" data-v-2fd5080d${_scopeId}><div class="right-btn text-35px" data-v-2fd5080d${_scopeId}>Philanthropy</div><img${ssrRenderAttr("src", _imports_4)} alt="" class="w-12" data-v-2fd5080d${_scopeId}></div></div></div></div>`);
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full overflow-hidden fixed inset-0 h-full overflow-y-auto" }, [
                createVNode("div", { class: "w-full" }, [
                  createVNode("div", { class: "w-full h-screen relative" }, [
                    createVNode(unref(R), {
                      src: "https://www.starscollective.com/assets/videos/pc/SC-About-Color-final-1.webm",
                      muted: "",
                      autoplay: "",
                      loop: "",
                      playsinline: "",
                      class: "absolute top-0 left-0 w-full h-screen player-video"
                    })
                  ]),
                  createVNode("div", { class: "-mt-140 pb-50 flex justify-center" }, [
                    createVNode("div", { class: "text-77px PPHattonMedium title-gradient" }, "Stars Gala")
                  ]),
                  createVNode("div", { class: "relative z-10 space-y-30 summit-bg" }, [
                    createVNode("div", { class: "px-50px" }, [
                      createVNode("div", { class: "max-w-1300px mx-auto" }, [
                        createVNode("div", { class: "text-77px PPHattonMedium" }, "Summit"),
                        createVNode("img", {
                          src: _imports_0,
                          class: "h-15 block"
                        }),
                        createVNode("div", { class: "text-2xl PolySansSlim mt-15" }, [
                          createTextVNode(" An exciting and opportunity-filled summit awaits as hundreds of cross- "),
                          createVNode("br"),
                          createTextVNode(" industry leaders, come together from around the world. Together, we "),
                          createVNode("br"),
                          createTextVNode(" will explore the convergence of film, fashion, derivatives, technology, "),
                          createVNode("br"),
                          createTextVNode(" and finance, as well as their future development. This summit promises "),
                          createVNode("br"),
                          createTextVNode(" to be a revolutionary milestone in the world of venture capital. ")
                        ]),
                        (openBlock(), createBlock(Fragment, null, renderList(1, (item, index) => {
                          return createVNode("div", {
                            key: index,
                            class: "w-full card-box px-32px py-32px mt-20 overflow-hidden"
                          }, [
                            createVNode("div", { class: "flex justify-between" }, [
                              createVNode("div", { class: "max-w-480px text-35px min-w-365px PPHattonMedium" }, "Summit")
                            ]),
                            createVNode("div", { class: "flex justify-between mt-5" }, [
                              createVNode("div", { class: "text-lg font-semibold PolySansSlim" }, "Coming this November")
                            ]),
                            createVNode("div", { class: "h-463px w-full mt-50px relative" }, [
                              createVNode("img", {
                                src: "https://www.starscollective.com/assets/images/event/unsplash_card.png",
                                class: "w-full h-full object-cover"
                              })
                            ])
                          ]);
                        }), 64))
                      ])
                    ]),
                    createVNode("div", { class: "px-50px py-30" }, [
                      createVNode("div", { class: "max-w-1300px mx-auto" }, [
                        createVNode("div", { class: "text-77px PPHattonMedium" }, [
                          createTextVNode(" Charity "),
                          createVNode("br"),
                          createTextVNode(" Night ")
                        ]),
                        createVNode("img", {
                          src: _imports_0,
                          class: "h-15 block"
                        }),
                        createVNode("div", { class: "text-2xl PolySansSlim mt-15" }, [
                          createTextVNode(" An exciting and opportunity-filled summit awaits as hundreds of cross- "),
                          createVNode("br"),
                          createTextVNode(" industry leaders, come together from around the world. Together, we "),
                          createVNode("br"),
                          createTextVNode(" will explore the convergence of film, fashion, derivatives, technology, "),
                          createVNode("br"),
                          createTextVNode(" and finance, as well as their future development. This summit promises "),
                          createVNode("br"),
                          createTextVNode(" to be a revolutionary milestone in the world of venture capital. ")
                        ]),
                        (openBlock(), createBlock(Fragment, null, renderList(1, (item, index) => {
                          return createVNode("div", {
                            key: index,
                            class: "w-full card-box1 px-32px py-32px mt-20 overflow-hidden"
                          }, [
                            createVNode("div", { class: "flex justify-between" }, [
                              createVNode("div", { class: "max-w-480px text-35px min-w-365px PPHattonMedium" }, "Summit")
                            ]),
                            createVNode("div", { class: "flex justify-between mt-5" }, [
                              createVNode("div", { class: "text-lg font-semibold PolySansSlim" }, "Coming this November")
                            ]),
                            createVNode("div", { class: "h-463px w-full mt-50px relative" }, [
                              createVNode("img", {
                                src: "https://www.starscollective.com/assets/images/event/unsplash_QBmsRGqlueE.png",
                                class: "w-full h-full object-cover"
                              })
                            ])
                          ]);
                        }), 64))
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "px-50px pt-80 pb-50" }, [
                  createVNode("div", { class: "max-w-1300px mx-auto relative z-100" }, [
                    createVNode("div", {
                      class: "w-full flex justify-between items-center",
                      style: { "font-family": "PPHattonMedium" }
                    }, [
                      createVNode("div", {
                        class: "flex items-center cursor-pointer",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/masterClass")
                      }, [
                        createVNode("img", {
                          src: _imports_5,
                          alt: "",
                          class: "w-12"
                        }),
                        createVNode("div", { class: "left-btn text-35px" }, "SC Lab")
                      ], 8, ["onClick"]),
                      createVNode("div", {
                        class: "flex items-center cursor-pointer",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/philanthropy")
                      }, [
                        createVNode("div", { class: "right-btn text-35px" }, "Philanthropy"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gala.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gala = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2fd5080d"]]);

export { gala as default };
