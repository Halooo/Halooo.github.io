import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { R, n as navigateTo, _ as __nuxt_component_0 } from './server.mjs';
import { _ as __nuxt_component_1 } from './Index-D7A-fAkj.mjs';
import { _ as _sfc_main$1 } from './Footer-DZPaOTwy.mjs';
import { useSSRContext, defineComponent, ref, computed, reactive, withCtx, unref, createVNode, createTextVNode } from 'vue';
import { u as useResFetch } from './request-CdKXnB25.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_5 } from './virtual_public-DIEOG2z-.mjs';
import { _ as _imports_4 } from './virtual_public-BIBlAKn8.mjs';
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
import './aria-DJRDfGoO.mjs';

const apiindexmasterClass = async () => {
  return useResFetch("/api/index/masterClass", { method: "POST", body: {}, isToken: false });
};
const apiindexstarTalk = async () => {
  return useResFetch("/api/index/starTalk", { method: "POST", body: {}, isToken: false });
};
const apiindexworkshop = async () => {
  return useResFetch("/api/index/workshop", { method: "POST", body: {}, isToken: false });
};
function arrayRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length + 1) - 1];
}
const _imports_0 = "" + buildAssetsURL("button.DvWv8NO0.png");
const _imports_1 = "" + buildAssetsURL("button2.BqCDJeLR.png");
const _imports_2 = "" + buildAssetsURL("button3.CUu6aIcO.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "masterClass",
  __ssrInlineRender: true,
  setup(__props) {
    const masterList = ref([]);
    const current = ref(1);
    const masterIndex = ref(0);
    const dataList = ref([]);
    const workshops = ref([]);
    computed(() => {
      if (masterList.value.length === 0)
        return null;
      return masterList.value[masterIndex.value];
    });
    const handleCurrentChange = (num) => {
      if (num === 1)
        getapiindexmasterClass();
      if (num === 2)
        getapiindexworkshop();
      if (num === 3)
        getapiindexstarTalk();
      current.value = num;
    };
    const getapiindexworkshop = async () => {
      const res = await apiindexworkshop();
      workshops.value = res.data;
    };
    const getapiindexstarTalk = async () => {
      const res = await apiindexstarTalk();
      dataList.value = res.data;
    };
    reactive({
      slidesPerView: "auto",
      spaceBetween: 20
    });
    const getapiindexmasterClass = async () => {
      const res = await apiindexmasterClass();
      masterList.value = res.data.map((v) => {
        v.number = arrayRandom([1, 2, 3, 4]);
        return v;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Grant = __nuxt_component_1;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-32038bd6>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "home" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full fixed top-0 left-0 overflow-y-auto" data-v-32038bd6${_scopeId}><div class="px-50px h-screen relative" data-v-32038bd6${_scopeId}>`);
            _push2(ssrRenderComponent(unref(R), {
              src: "https://www.starscollective.com/assets/videos/pc/SC-About-Color-final-1.webm",
              muted: "",
              autoplay: "",
              loop: "",
              playsinline: "",
              class: "absolute inset-0 w-full h-full z-1 player-video"
            }, null, _parent2, _scopeId));
            _push2(`<div class="max-w-1300px mx-auto h-full flex flex-col justify-center items-center relative z-10" data-v-32038bd6${_scopeId}><div class="title-gradient text-48px PPHattonMedium" data-v-32038bd6${_scopeId}>Stars Collective Lab</div><div class="PolySansSlim text-lg font-light mt-10 text-center" data-v-32038bd6${_scopeId}> Stars Collective Lab is a destination to learn and connect with industry leaders <br data-v-32038bd6${_scopeId}> with <span class="gradient-text1 font-extrabold" data-v-32038bd6${_scopeId}>Think Like A Master</span> program, full of informative and enlightening classes <br data-v-32038bd6${_scopeId}> from world-renowned masters; <span class="gradient-text2 font-extrabold" data-v-32038bd6${_scopeId}>Seminars and Workshops</span> led by trailblazing <br data-v-32038bd6${_scopeId}> mentors in the film and art industry; <span class="gradient-text3 font-extrabold" data-v-32038bd6${_scopeId}>Stars Talk series</span>, a gateway for notable <br data-v-32038bd6${_scopeId}> up-and-coming talent to be heard and seen. This is exclusive to the Stars <br data-v-32038bd6${_scopeId}> Collective community and accessible to anyone looking to fine-tune their craft. </div><div class="flex justify-center items-center mt-15" data-v-32038bd6${_scopeId}><div class="relative cursor-pointer vector-box PolySansSlim drop-shadow" data-v-32038bd6${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" class="h-40 relative" data-v-32038bd6${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" class="absolute top-1/2 left-1/2 w-full h-full -z-1 vector-scale" data-v-32038bd6${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" class="absolute top-1/2 left-1/2 w-full h-full -z-2 vector-scale1" data-v-32038bd6${_scopeId}><div class="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col justify-center items-center" data-v-32038bd6${_scopeId}><div class="text-sm font-normal" data-v-32038bd6${_scopeId}>O P E N</div><div class="text-lg font-bold" data-v-32038bd6${_scopeId}>SC Grant</div></div></div></div></div><div class="absolute bottom-10 left-50px z-10 w-full" data-v-32038bd6${_scopeId}><div class="w-220 flex justify-between PolySansSlim" data-v-32038bd6${_scopeId}><div class="${ssrRenderClass([[{ active: unref(current) === 1 }], "tab-item text-26px"])}" data-v-32038bd6${_scopeId}>Think Like A Master</div><div class="${ssrRenderClass([[{ active: unref(current) === 2 }], "tab-item text-26px"])}" data-v-32038bd6${_scopeId}>Seminars and Workshops</div><div class="${ssrRenderClass([[{ active: unref(current) === 3 }], "tab-item text-26px"])}" data-v-32038bd6${_scopeId}>Stars Talk</div></div></div></div><div class="relative w-full overflow-hidden" data-v-32038bd6${_scopeId}><img src="https://www.starscollective.com/assets/images/pc/master/left1.png" alt="" class="absolute left-0 top-0 w-40% block" data-v-32038bd6${_scopeId}><img src="https://www.starscollective.com/assets/images/pc/master/right1.png" alt="" class="w-full block" data-v-32038bd6${_scopeId}><div class="absolute top-0 left-0 w-full h-full z-10" data-v-32038bd6${_scopeId}><div class="max-w-1300px mx-auto h-full relative" data-v-32038bd6${_scopeId}><div class="absolute top-2/5 left-10 -translate-y-1/2" data-v-32038bd6${_scopeId}><div class="text-77px PPHattonMedium coming-soon" data-v-32038bd6${_scopeId}> Coming <br data-v-32038bd6${_scopeId}> Soon </div></div></div></div></div><div class="pt-20" data-v-32038bd6${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Grant, null, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-center py-20" data-v-32038bd6${_scopeId}><div class="btn gradient-btn" data-v-32038bd6${_scopeId}><div data-v-32038bd6${_scopeId}>View Grant</div></div></div><div class="px-50px pb-50" data-v-32038bd6${_scopeId}><div class="max-w-1300px mx-auto relative z-100" data-v-32038bd6${_scopeId}><div class="w-full flex justify-between items-center PPHattonMedium" data-v-32038bd6${_scopeId}><div class="flex items-center cursor-pointer" data-v-32038bd6${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="" class="w-12" data-v-32038bd6${_scopeId}><div class="left-btn text-35px" data-v-32038bd6${_scopeId}>Events</div></div><div class="flex items-center cursor-pointer" data-v-32038bd6${_scopeId}><div class="right-btn text-35px" data-v-32038bd6${_scopeId}>SC Gala</div><img${ssrRenderAttr("src", _imports_4)} alt="" class="w-12" data-v-32038bd6${_scopeId}></div></div></div></div>`);
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full fixed top-0 left-0 overflow-y-auto" }, [
                createVNode("div", { class: "px-50px h-screen relative" }, [
                  createVNode(unref(R), {
                    src: "https://www.starscollective.com/assets/videos/pc/SC-About-Color-final-1.webm",
                    muted: "",
                    autoplay: "",
                    loop: "",
                    playsinline: "",
                    class: "absolute inset-0 w-full h-full z-1 player-video"
                  }),
                  createVNode("div", { class: "max-w-1300px mx-auto h-full flex flex-col justify-center items-center relative z-10" }, [
                    createVNode("div", { class: "title-gradient text-48px PPHattonMedium" }, "Stars Collective Lab"),
                    createVNode("div", { class: "PolySansSlim text-lg font-light mt-10 text-center" }, [
                      createTextVNode(" Stars Collective Lab is a destination to learn and connect with industry leaders "),
                      createVNode("br"),
                      createTextVNode(" with "),
                      createVNode("span", { class: "gradient-text1 font-extrabold" }, "Think Like A Master"),
                      createTextVNode(" program, full of informative and enlightening classes "),
                      createVNode("br"),
                      createTextVNode(" from world-renowned masters; "),
                      createVNode("span", { class: "gradient-text2 font-extrabold" }, "Seminars and Workshops"),
                      createTextVNode(" led by trailblazing "),
                      createVNode("br"),
                      createTextVNode(" mentors in the film and art industry; "),
                      createVNode("span", { class: "gradient-text3 font-extrabold" }, "Stars Talk series"),
                      createTextVNode(", a gateway for notable "),
                      createVNode("br"),
                      createTextVNode(" up-and-coming talent to be heard and seen. This is exclusive to the Stars "),
                      createVNode("br"),
                      createTextVNode(" Collective community and accessible to anyone looking to fine-tune their craft. ")
                    ]),
                    createVNode("div", { class: "flex justify-center items-center mt-15" }, [
                      createVNode("div", {
                        class: "relative cursor-pointer vector-box PolySansSlim drop-shadow",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/grant")
                      }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          class: "h-40 relative"
                        }),
                        createVNode("img", {
                          src: _imports_1,
                          alt: "",
                          class: "absolute top-1/2 left-1/2 w-full h-full -z-1 vector-scale"
                        }),
                        createVNode("img", {
                          src: _imports_2,
                          alt: "",
                          class: "absolute top-1/2 left-1/2 w-full h-full -z-2 vector-scale1"
                        }),
                        createVNode("div", { class: "absolute top-1/2 left-1/2 -translate-1/2 flex flex-col justify-center items-center" }, [
                          createVNode("div", { class: "text-sm font-normal" }, "O P E N"),
                          createVNode("div", { class: "text-lg font-bold" }, "SC Grant")
                        ])
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "absolute bottom-10 left-50px z-10 w-full" }, [
                    createVNode("div", { class: "w-220 flex justify-between PolySansSlim" }, [
                      createVNode("div", {
                        class: ["tab-item text-26px", [{ active: unref(current) === 1 }]],
                        onClick: ($event) => handleCurrentChange(1)
                      }, "Think Like A Master", 10, ["onClick"]),
                      createVNode("div", {
                        class: ["tab-item text-26px", [{ active: unref(current) === 2 }]],
                        onClick: ($event) => handleCurrentChange(2)
                      }, "Seminars and Workshops", 10, ["onClick"]),
                      createVNode("div", {
                        class: ["tab-item text-26px", [{ active: unref(current) === 3 }]],
                        onClick: ($event) => handleCurrentChange(3)
                      }, "Stars Talk", 10, ["onClick"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "relative w-full overflow-hidden" }, [
                  createVNode("img", {
                    src: "https://www.starscollective.com/assets/images/pc/master/left1.png",
                    alt: "",
                    class: "absolute left-0 top-0 w-40% block"
                  }),
                  createVNode("img", {
                    src: "https://www.starscollective.com/assets/images/pc/master/right1.png",
                    alt: "",
                    class: "w-full block"
                  }),
                  createVNode("div", { class: "absolute top-0 left-0 w-full h-full z-10" }, [
                    createVNode("div", { class: "max-w-1300px mx-auto h-full relative" }, [
                      createVNode("div", { class: "absolute top-2/5 left-10 -translate-y-1/2" }, [
                        createVNode("div", { class: "text-77px PPHattonMedium coming-soon" }, [
                          createTextVNode(" Coming "),
                          createVNode("br"),
                          createTextVNode(" Soon ")
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "pt-20" }, [
                  createVNode(_component_Grant)
                ]),
                createVNode("div", { class: "flex justify-center py-20" }, [
                  createVNode("div", {
                    class: "btn gradient-btn",
                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/grant")
                  }, [
                    createVNode("div", null, "View Grant")
                  ], 8, ["onClick"])
                ]),
                createVNode("div", { class: "px-50px pb-50" }, [
                  createVNode("div", { class: "max-w-1300px mx-auto relative z-100" }, [
                    createVNode("div", { class: "w-full flex justify-between items-center PPHattonMedium" }, [
                      createVNode("div", {
                        class: "flex items-center cursor-pointer",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/event")
                      }, [
                        createVNode("img", {
                          src: _imports_5,
                          alt: "",
                          class: "w-12"
                        }),
                        createVNode("div", { class: "left-btn text-35px" }, "Events")
                      ], 8, ["onClick"]),
                      createVNode("div", {
                        class: "flex items-center cursor-pointer",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/gala")
                      }, [
                        createVNode("div", { class: "right-btn text-35px" }, "SC Gala"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/masterClass.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const masterClass = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-32038bd6"]]);

export { masterClass as default };
