import { R, n as navigateTo, _ as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$1 } from './SwiperLoop-CRFhC9yW.mjs';
import { E as ElImage } from './el-image-viewer-T405MOSo.mjs';
import __nuxt_component_7 from './Icon-CaiLYYN4.mjs';
import { _ as _sfc_main$3, a as _sfc_main$2, b as _sfc_main$1$1, c as _sfc_main$4 } from './Fantasy-DLzEDPvv.mjs';
import { _ as _sfc_main$5 } from './Footer-DZPaOTwy.mjs';
import { useSSRContext, defineComponent, ref, withCtx, unref, openBlock, createBlock, Fragment, renderList, createVNode, toDisplayString, createTextVNode, createCommentVNode } from 'vue';
import { l as apiIndexMoviesPast, m as apiIndexMoviesNow, n as apiIndexMetaverseStories } from './home-DlGQga1N.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-BaMrrqy2.mjs';
import { _ as _imports_1, a as _imports_2, b as _imports_3 } from './icon1-DBK7cnlK.mjs';
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
import './index-C8rz0VXy.mjs';
import './request-CdKXnB25.mjs';
import './index-URjNNh32.mjs';
import './icon-CyxyPYk8.mjs';
import './aria-DJRDfGoO.mjs';
import './el-input-D8gXC6Et.mjs';
import './constants-DzvzFGCl.mjs';
import './event-DSz0kuqc.mjs';
import './scroll-D2xEfal-.mjs';
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './Index-DNxKYUQ5.mjs';
import './OkBox-Dvtj49Wo.mjs';
import './virtual_public-3Fh-jQka.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "starsMovies",
  __ssrInlineRender: true,
  setup(__props) {
    const current = ref(1);
    const page_size = ref(20);
    const moviesResult = ref([]);
    const moviesTopResult = ref([]);
    const moviesBannerResult = ref([]);
    const upcomingsList = ref([
      { name: "Golden" },
      { name: "The Goxfather" },
      { name: "The Pigeon" },
      { name: "The Burden" },
      { name: "The Troop" },
      { name: "Scorpion" },
      { name: "Gold Mountain" },
      { name: "Sophia of Silicon Valley" },
      { name: "In the Shadow of the Mountain" }
    ]);
    const handleOpenMore = (_id) => {
      moviesResult.value.forEach((item) => {
        if (item.id == _id)
          item.isOpen = !item.isOpen;
      });
    };
    const handleLink = (_url) => {
      (void 0).open(_url, "_black");
    };
    const handleLinkOpen = (item) => {
      (void 0).open(item.link, "_black");
    };
    const getTopMovie = async () => {
      const { data } = await apiIndexMoviesPast();
      moviesTopResult.value = data.value.data;
    };
    const getMovieResult = async () => {
      const { data } = await apiIndexMoviesNow(current.value, page_size.value);
      moviesResult.value = data.value.data.data.map((item) => {
        item.information_arr = item.information.split("\n");
        item.isOpen = false;
        return item;
      });
    };
    const getMovieBanner = async () => {
      const { data } = await apiIndexMetaverseStories();
      moviesBannerResult.value = data.value.data;
    };
    getTopMovie();
    getMovieResult();
    getMovieBanner();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SwiperLoop = _sfc_main$1;
      const _component_el_image = ElImage;
      const _component_Icon = __nuxt_component_7;
      const _component_MediumNvgui = _sfc_main$3;
      const _component_MediumKungFu = _sfc_main$2;
      const _component_MediumCriminalGenius = _sfc_main$1$1;
      const _component_MediumFantasy = _sfc_main$4;
      const _component_Footer = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-819aff7c>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "home" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full overflow-hidden" data-v-819aff7c${_scopeId}><div class="w-full overflow-hidden relative z-10" style="${ssrRenderStyle({ "height": "calc(100vh - 138px)" })}" data-v-819aff7c${_scopeId}>`);
            _push2(ssrRenderComponent(unref(R), {
              src: "https://www.starscollective.com/assets/videos/pc/sc_IP.webm",
              muted: "",
              autoplay: "",
              loop: "",
              playsinline: "",
              class: "w-full h-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full mt-8 relative z-10" data-v-819aff7c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SwiperLoop, {
              offset: "left",
              width: 246,
              list: unref(moviesTopResult)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(moviesTopResult), (item, index) => {
                    _push3(`<div class="inline-block cursor-pointer swiper-item-box w-246px inline-flex flex-col" data-v-819aff7c${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_image, {
                      src: item.poster_image,
                      class: "w-full h-365px",
                      fit: "cover"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="text-26px mt-10 mb-3 PPHattonMedium whitespace-pre-wrap" data-v-819aff7c${_scopeId2}>${ssrInterpolate(item.name)}</div></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(moviesTopResult), (item, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "inline-block cursor-pointer swiper-item-box w-246px inline-flex flex-col",
                        onClick: ($event) => handleLinkOpen(item)
                      }, [
                        createVNode(_component_el_image, {
                          src: item.poster_image,
                          class: "w-full h-365px",
                          fit: "cover"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "text-26px mt-10 mb-3 PPHattonMedium whitespace-pre-wrap" }, toDisplayString(item.name), 1)
                      ], 8, ["onClick"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="max-w-1300px px-50px mx-auto mt-164px relative z-10" data-v-819aff7c${_scopeId}><div class="text-75px PPHattonMedium" data-v-819aff7c${_scopeId}>Stars Collective <br data-v-819aff7c${_scopeId}>Indies</div><img${ssrRenderAttr("src", _imports_0)} class="h-15 block" data-v-819aff7c${_scopeId}><div class="w-full grid grid-cols-2 gap-y-15 gap-x-4 min-w-600px md:grid-cols-3 mt-10" data-v-819aff7c${_scopeId}><!--[-->`);
            ssrRenderList(unref(moviesResult), (item, index) => {
              _push2(`<div data-v-819aff7c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_image, {
                src: item.poster_image,
                class: "w-full h-209px",
                fit: "cover"
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-35px font-medium my-4 PPHattonMedium" data-v-819aff7c${_scopeId}>${ssrInterpolate(item.name)}</div><!--[-->`);
              ssrRenderList(item.information_arr, (item2, index2) => {
                _push2(`<div class="text-15px mb-4 w-3/5" data-v-819aff7c${_scopeId}>${item2 != null ? item2 : ""}</div>`);
              });
              _push2(`<!--]--><div class="flex text-black justify-between h-17px bg-#ffffff w-135px items-center my-4 cursor-pointer" data-v-819aff7c${_scopeId}><div class="text-14px tracking-2.1px uppercase" data-v-819aff7c${_scopeId}>learn MORE</div>`);
              if (!item.isOpen) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:caret-down",
                  class: "w-18px h-18px"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:caret-up",
                  class: "w-18px h-18px"
                }, null, _parent2, _scopeId));
              }
              _push2(`</div>`);
              if (item.isOpen) {
                _push2(`<div class="w-full h-auto mb-4 text-[rgb(146,146,146)] leading-6" data-v-819aff7c${_scopeId}>${ssrInterpolate(item.introduce)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.link) {
                _push2(`<div class="flex" data-v-819aff7c${_scopeId}><div class="watch-now flex cursor-pointer p-2px space-x-2" data-v-819aff7c${_scopeId}><div class="uppercase" data-v-819aff7c${_scopeId}>watch now</div>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "mdi:arrow-top-right",
                  size: "20"
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div><div class="relative" data-v-819aff7c${_scopeId}><div class="max-w-1300px px-50px mx-auto pt-30 relative z-10" data-v-819aff7c${_scopeId}><div class="text-75px PPHattonMedium" data-v-819aff7c${_scopeId}>Upcomings</div><img${ssrRenderAttr("src", _imports_0)} class="h-15 block" data-v-819aff7c${_scopeId}><div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 pb-120" data-v-819aff7c${_scopeId}><!--[-->`);
            ssrRenderList(unref(upcomingsList), (item, index) => {
              _push2(`<div class="flex items-center space-x-3" data-v-819aff7c${_scopeId}><div class="bg-white w-3 h-3" data-v-819aff7c${_scopeId}></div><div class="PolySansSlim text-xl" data-v-819aff7c${_scopeId}>${ssrInterpolate(item.name)}</div></div>`);
            });
            _push2(`<!--]--></div></div><img src="https://www.starscollective.com/assets/images/pc/movies/Upcoming-Movies.png" alt="" class="absolute bottom-0 left-0 w-full" data-v-819aff7c${_scopeId}></div><div class="w-full relative" data-v-819aff7c${_scopeId}><div class="max-w-1536px w-full absolute top-50 left-1/2 -translate-x-1/2" data-v-819aff7c${_scopeId}><img src="https://www.starscollective.com/assets/images/pc/movies/Cross-Medium1.png" alt="" class="block w-full" data-v-819aff7c${_scopeId}></div><div class="px-50px w-full relative pt-50 z-100" data-v-819aff7c${_scopeId}><div class="max-w-1300px mx-auto relative z-100 flex justify-between" data-v-819aff7c${_scopeId}><div class="w-60%" data-v-819aff7c${_scopeId}><div class="w-full overflow-hidden h-0 pb-50% relative" data-v-819aff7c${_scopeId}>`);
            _push2(ssrRenderComponent(unref(R), {
              src: "https://www.starscollective.com/assets/videos/pc/cross-medium.webm",
              muted: "",
              autoplay: "",
              loop: "",
              playsinline: "",
              class: "w-full h-full absolute inset-0"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-center items-end pt-20 space-x-20" data-v-819aff7c${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" class="h-20" data-v-819aff7c${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" class="h-20" data-v-819aff7c${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="" class="h-20" data-v-819aff7c${_scopeId}></div></div>`);
            _push2(ssrRenderComponent(_component_MediumNvgui, null, null, _parent2, _scopeId));
            _push2(`</div><div class="max-w-1300px mx-auto relative z-100 flex justify-start" data-v-819aff7c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MediumKungFu, null, null, _parent2, _scopeId));
            _push2(`</div><div class="max-w-1300px mx-auto relative z-100 flex justify-end" data-v-819aff7c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MediumCriminalGenius, null, null, _parent2, _scopeId));
            _push2(`</div><div class="max-w-1300px mx-auto relative z-100 flex justify-start" data-v-819aff7c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MediumFantasy, null, null, _parent2, _scopeId));
            _push2(`</div></div><div class="px-50px py-50 pt-250" data-v-819aff7c${_scopeId}><div class="max-w-1300px mx-auto relative z-100" data-v-819aff7c${_scopeId}><div class="w-full flex justify-between items-center PPHattonMedium" data-v-819aff7c${_scopeId}><div class="flex items-center cursor-pointer" data-v-819aff7c${_scopeId}></div><div class="flex items-center cursor-pointer" data-v-819aff7c${_scopeId}><div class="right-btn text-35px" data-v-819aff7c${_scopeId}>Merch</div><img${ssrRenderAttr("src", _imports_4)} alt="" class="w-12" data-v-819aff7c${_scopeId}></div></div></div></div></div>`);
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full overflow-hidden" }, [
                createVNode("div", {
                  class: "w-full overflow-hidden relative z-10",
                  style: { "height": "calc(100vh - 138px)" }
                }, [
                  createVNode(unref(R), {
                    src: "https://www.starscollective.com/assets/videos/pc/sc_IP.webm",
                    muted: "",
                    autoplay: "",
                    loop: "",
                    playsinline: "",
                    class: "w-full h-full"
                  })
                ]),
                createVNode("div", { class: "w-full mt-8 relative z-10" }, [
                  createVNode(_component_SwiperLoop, {
                    offset: "left",
                    width: 246,
                    list: unref(moviesTopResult)
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(moviesTopResult), (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "inline-block cursor-pointer swiper-item-box w-246px inline-flex flex-col",
                          onClick: ($event) => handleLinkOpen(item)
                        }, [
                          createVNode(_component_el_image, {
                            src: item.poster_image,
                            class: "w-full h-365px",
                            fit: "cover"
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "text-26px mt-10 mb-3 PPHattonMedium whitespace-pre-wrap" }, toDisplayString(item.name), 1)
                        ], 8, ["onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["list"])
                ]),
                createVNode("div", { class: "max-w-1300px px-50px mx-auto mt-164px relative z-10" }, [
                  createVNode("div", { class: "text-75px PPHattonMedium" }, [
                    createTextVNode("Stars Collective "),
                    createVNode("br"),
                    createTextVNode("Indies")
                  ]),
                  createVNode("img", {
                    src: _imports_0,
                    class: "h-15 block"
                  }),
                  createVNode("div", { class: "w-full grid grid-cols-2 gap-y-15 gap-x-4 min-w-600px md:grid-cols-3 mt-10" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(moviesResult), (item, index) => {
                      return openBlock(), createBlock("div", { key: index }, [
                        createVNode(_component_el_image, {
                          src: item.poster_image,
                          class: "w-full h-209px",
                          fit: "cover"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "text-35px font-medium my-4 PPHattonMedium" }, toDisplayString(item.name), 1),
                        (openBlock(true), createBlock(Fragment, null, renderList(item.information_arr, (item2, index2) => {
                          return openBlock(), createBlock("div", {
                            key: index2,
                            class: "text-15px mb-4 w-3/5",
                            innerHTML: item2
                          }, null, 8, ["innerHTML"]);
                        }), 128)),
                        createVNode("div", {
                          class: "flex text-black justify-between h-17px bg-#ffffff w-135px items-center my-4 cursor-pointer",
                          onClick: ($event) => handleOpenMore(item.id)
                        }, [
                          createVNode("div", { class: "text-14px tracking-2.1px uppercase" }, "learn MORE"),
                          !item.isOpen ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            name: "ph:caret-down",
                            class: "w-18px h-18px"
                          })) : (openBlock(), createBlock(_component_Icon, {
                            key: 1,
                            name: "ph:caret-up",
                            class: "w-18px h-18px"
                          }))
                        ], 8, ["onClick"]),
                        item.isOpen ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "w-full h-auto mb-4 text-[rgb(146,146,146)] leading-6"
                        }, toDisplayString(item.introduce), 1)) : createCommentVNode("", true),
                        item.link ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "flex"
                        }, [
                          createVNode("div", {
                            class: "watch-now flex cursor-pointer p-2px space-x-2",
                            onClick: ($event) => handleLink(item.link)
                          }, [
                            createVNode("div", { class: "uppercase" }, "watch now"),
                            createVNode(_component_Icon, {
                              name: "mdi:arrow-top-right",
                              size: "20"
                            })
                          ], 8, ["onClick"])
                        ])) : createCommentVNode("", true)
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "relative" }, [
                  createVNode("div", { class: "max-w-1300px px-50px mx-auto pt-30 relative z-10" }, [
                    createVNode("div", { class: "text-75px PPHattonMedium" }, "Upcomings"),
                    createVNode("img", {
                      src: _imports_0,
                      class: "h-15 block"
                    }),
                    createVNode("div", { class: "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 pb-120" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(upcomingsList), (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "flex items-center space-x-3"
                        }, [
                          createVNode("div", { class: "bg-white w-3 h-3" }),
                          createVNode("div", { class: "PolySansSlim text-xl" }, toDisplayString(item.name), 1)
                        ]);
                      }), 128))
                    ])
                  ]),
                  createVNode("img", {
                    src: "https://www.starscollective.com/assets/images/pc/movies/Upcoming-Movies.png",
                    alt: "",
                    class: "absolute bottom-0 left-0 w-full"
                  })
                ]),
                createVNode("div", { class: "w-full relative" }, [
                  createVNode("div", { class: "max-w-1536px w-full absolute top-50 left-1/2 -translate-x-1/2" }, [
                    createVNode("img", {
                      src: "https://www.starscollective.com/assets/images/pc/movies/Cross-Medium1.png",
                      alt: "",
                      class: "block w-full"
                    })
                  ]),
                  createVNode("div", { class: "px-50px w-full relative pt-50 z-100" }, [
                    createVNode("div", { class: "max-w-1300px mx-auto relative z-100 flex justify-between" }, [
                      createVNode("div", { class: "w-60%" }, [
                        createVNode("div", { class: "w-full overflow-hidden h-0 pb-50% relative" }, [
                          createVNode(unref(R), {
                            src: "https://www.starscollective.com/assets/videos/pc/cross-medium.webm",
                            muted: "",
                            autoplay: "",
                            loop: "",
                            playsinline: "",
                            class: "w-full h-full absolute inset-0"
                          })
                        ]),
                        createVNode("div", { class: "flex justify-center items-end pt-20 space-x-20" }, [
                          createVNode("img", {
                            src: _imports_1,
                            alt: "",
                            class: "h-20"
                          }),
                          createVNode("img", {
                            src: _imports_2,
                            alt: "",
                            class: "h-20"
                          }),
                          createVNode("img", {
                            src: _imports_3,
                            alt: "",
                            class: "h-20"
                          })
                        ])
                      ]),
                      createVNode(_component_MediumNvgui)
                    ]),
                    createVNode("div", { class: "max-w-1300px mx-auto relative z-100 flex justify-start" }, [
                      createVNode(_component_MediumKungFu)
                    ]),
                    createVNode("div", { class: "max-w-1300px mx-auto relative z-100 flex justify-end" }, [
                      createVNode(_component_MediumCriminalGenius)
                    ]),
                    createVNode("div", { class: "max-w-1300px mx-auto relative z-100 flex justify-start" }, [
                      createVNode(_component_MediumFantasy)
                    ])
                  ]),
                  createVNode("div", { class: "px-50px py-50 pt-250" }, [
                    createVNode("div", { class: "max-w-1300px mx-auto relative z-100" }, [
                      createVNode("div", { class: "w-full flex justify-between items-center PPHattonMedium" }, [
                        createVNode("div", { class: "flex items-center cursor-pointer" }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/starsMovies.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const starsMovies = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-819aff7c"]]);

export { starsMovies as default };
