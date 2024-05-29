import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { a as useRoute, n as navigateTo, _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, reactive, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { a as apiindexcollectionDetail } from './collection-BckPpfCS.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './virtual_public-BaMrrqy2.mjs';
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

const _imports_0 = "" + buildAssetsURL("ribbonFill.CEwL8CaB.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[idx]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const detailInfo = reactive({
      banner_image: "",
      collection_arr: [],
      name: "",
      nfts: [],
      user: null,
      user_id: 0
    });
    const getDetailInfo = async () => {
      const res = await apiindexcollectionDetail(route.params.idx);
      for (let key in detailInfo) {
        detailInfo[key] = res.data[key];
      }
    };
    getDetailInfo();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full"${_scopeId}><div class="px-50px"${_scopeId}><div class="max-w-1300px mx-auto pt-10 flex"${_scopeId}><div class="PolySansNeutral underline underline-offset-2 cursor-pointer"${_scopeId}>Back to Thumbnail</div></div><div class="max-w-1300px mx-auto flex justify-center mt-20"${_scopeId}><img${ssrRenderAttr("src", unref(detailInfo).banner_image)} alt="" class="rounded-10px h-100"${_scopeId}></div></div><div class="relative w-full pt-35"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" class="absolute right-0 top-0 z-1"${_scopeId}><div class="px-50px"${_scopeId}><div class="max-w-1300px mx-auto relative z-10"${_scopeId}><div class="text-lg PolySansNeutral"${_scopeId}>Kateryna Bielobrova</div><div class="text-96px PolySansNeutral font-bold mt-3 uppercase"${_scopeId}>${ssrInterpolate(unref(detailInfo).name)}</div><div class="PolySansSlim my-8"${_scopeId}>${ssrInterpolate(unref(detailInfo).nfts.length)} artworks</div></div></div></div><div class="px-50px"${_scopeId}><div class="max-w-1300px mx-auto py-10"${_scopeId}><div class="grid grid-cols-3 gap-5"${_scopeId}><!--[-->`);
            ssrRenderList(unref(detailInfo).nfts, (item, index) => {
              _push2(`<div class="space-y-3"${_scopeId}><div class="rounded-10px overflow-hidden h-250px flex justify-center items-center"${_scopeId}><img${ssrRenderAttr("src", item.cover_image)} alt="" class="w-full h-full object-contain"${_scopeId}></div><div class="text-sm PolySansSlim uppercase"${_scopeId}>${ssrInterpolate(item.name)}</div></div>`);
            });
            _push2(`<!--]--></div></div><div class="max-w-1300px mx-auto py-30"${_scopeId}>`);
            if (unref(detailInfo).user) {
              _push2(`<div class="flex justify-between space-x-20"${_scopeId}><div class="space-y-10 w-1/3"${_scopeId}><div class="w-31 h-31 rounded-full"${_scopeId}><img${ssrRenderAttr("src", unref(detailInfo).user.profile_avatar && unref(detailInfo).user.profile_avatar[0].file_url)} alt="" class="w-full h-full rounded-full object-cover"${_scopeId}></div><div class="space-y-10"${_scopeId}><div class="PPHattonMedium text-4xl space-y-5"${_scopeId}><div${_scopeId}>${ssrInterpolate(unref(detailInfo).user.first_name)}</div><div${_scopeId}>${ssrInterpolate(unref(detailInfo).user.last_name)}</div></div><div class="text-sm uppercase"${_scopeId}>STARS</div></div></div><div class="flex-1"${_scopeId}><div class="text-lg PolySansSlim"${_scopeId}>${ssrInterpolate(unref(detailInfo).user.introduce)}</div><div class="flex mt-10"${_scopeId}><div class="bg-white cursor-pointer px-8 py-4 inline-block"${_scopeId}><span class="text-lg text-black font-semibold"${_scopeId}>Connect with Artist</span></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="max-w-1300px mx-auto py-20"${_scopeId}><div class="text-75px PPHattonMedium"${_scopeId}>More Collection</div><img${ssrRenderAttr("src", _imports_0$1)} class="h-20 block"${_scopeId}><div class="grid grid-cols-2 gap-x-20 gap-y-10 my-30"${_scopeId}><!--[-->`);
            ssrRenderList(unref(detailInfo).collection_arr, (item, index) => {
              _push2(`<div class="px-10 space-y-5"${_scopeId}><div class="rounded-10px overflow-hidden relative h-0 pb-120%"${_scopeId}><img${ssrRenderAttr("src", item.banner_image)} alt="" class="w-full h-full absolute inset-0 object-cover"${_scopeId}></div><div class="flex flex-col justify-center items-center"${_scopeId}><div class="text-#ffffff text-lg PolySansSlim font-semibold"${_scopeId}>Artist Name</div><div class="text-96px PolySansNeutral font-bold uppercase"${_scopeId}>${ssrInterpolate(item.name)}</div><div class="bg-white cursor-pointer px-8 py-4 inline-block mt-10"${_scopeId}><span class="text-lg text-black font-semibold"${_scopeId}>VIEW COLLECTION</span></div></div></div>`);
            });
            _push2(`<!--]--></div></div><div class="max-w-1300px mx-auto flex justify-center py-30"${_scopeId}><div class="underline underline-offset-8 text-4xl PolySansNeutral font-semibold cursor-pointer"${_scopeId}>Back to Collection List</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full" }, [
                createVNode("div", { class: "px-50px" }, [
                  createVNode("div", { class: "max-w-1300px mx-auto pt-10 flex" }, [
                    createVNode("div", {
                      class: "PolySansNeutral underline underline-offset-2 cursor-pointer",
                      onClick: ($event) => _ctx.$router.back()
                    }, "Back to Thumbnail", 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "max-w-1300px mx-auto flex justify-center mt-20" }, [
                    createVNode("img", {
                      src: unref(detailInfo).banner_image,
                      alt: "",
                      class: "rounded-10px h-100"
                    }, null, 8, ["src"])
                  ])
                ]),
                createVNode("div", { class: "relative w-full pt-35" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "",
                    class: "absolute right-0 top-0 z-1"
                  }),
                  createVNode("div", { class: "px-50px" }, [
                    createVNode("div", { class: "max-w-1300px mx-auto relative z-10" }, [
                      createVNode("div", { class: "text-lg PolySansNeutral" }, "Kateryna Bielobrova"),
                      createVNode("div", { class: "text-96px PolySansNeutral font-bold mt-3 uppercase" }, toDisplayString(unref(detailInfo).name), 1),
                      createVNode("div", { class: "PolySansSlim my-8" }, toDisplayString(unref(detailInfo).nfts.length) + " artworks", 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "px-50px" }, [
                  createVNode("div", { class: "max-w-1300px mx-auto py-10" }, [
                    createVNode("div", { class: "grid grid-cols-3 gap-5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(detailInfo).nfts, (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "space-y-3"
                        }, [
                          createVNode("div", { class: "rounded-10px overflow-hidden h-250px flex justify-center items-center" }, [
                            createVNode("img", {
                              src: item.cover_image,
                              alt: "",
                              class: "w-full h-full object-contain"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "text-sm PolySansSlim uppercase" }, toDisplayString(item.name), 1)
                        ]);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "max-w-1300px mx-auto py-30" }, [
                    unref(detailInfo).user ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex justify-between space-x-20"
                    }, [
                      createVNode("div", { class: "space-y-10 w-1/3" }, [
                        createVNode("div", { class: "w-31 h-31 rounded-full" }, [
                          createVNode("img", {
                            src: unref(detailInfo).user.profile_avatar && unref(detailInfo).user.profile_avatar[0].file_url,
                            alt: "",
                            class: "w-full h-full rounded-full object-cover"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "space-y-10" }, [
                          createVNode("div", { class: "PPHattonMedium text-4xl space-y-5" }, [
                            createVNode("div", null, toDisplayString(unref(detailInfo).user.first_name), 1),
                            createVNode("div", null, toDisplayString(unref(detailInfo).user.last_name), 1)
                          ]),
                          createVNode("div", { class: "text-sm uppercase" }, "STARS")
                        ])
                      ]),
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("div", { class: "text-lg PolySansSlim" }, toDisplayString(unref(detailInfo).user.introduce), 1),
                        createVNode("div", { class: "flex mt-10" }, [
                          createVNode("div", {
                            class: "bg-white cursor-pointer px-8 py-4 inline-block",
                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/starslist/${unref(detailInfo).user.id}`)
                          }, [
                            createVNode("span", { class: "text-lg text-black font-semibold" }, "Connect with Artist")
                          ], 8, ["onClick"])
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "max-w-1300px mx-auto py-20" }, [
                    createVNode("div", { class: "text-75px PPHattonMedium" }, "More Collection"),
                    createVNode("img", {
                      src: _imports_0$1,
                      class: "h-20 block"
                    }),
                    createVNode("div", { class: "grid grid-cols-2 gap-x-20 gap-y-10 my-30" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(detailInfo).collection_arr, (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "px-10 space-y-5"
                        }, [
                          createVNode("div", { class: "rounded-10px overflow-hidden relative h-0 pb-120%" }, [
                            createVNode("img", {
                              src: item.banner_image,
                              alt: "",
                              class: "w-full h-full absolute inset-0 object-cover"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                            createVNode("div", { class: "text-#ffffff text-lg PolySansSlim font-semibold" }, "Artist Name"),
                            createVNode("div", { class: "text-96px PolySansNeutral font-bold uppercase" }, toDisplayString(item.name), 1),
                            createVNode("div", {
                              class: "bg-white cursor-pointer px-8 py-4 inline-block mt-10",
                              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/collection/${item.id}`)
                            }, [
                              createVNode("span", { class: "text-lg text-black font-semibold" }, "VIEW COLLECTION")
                            ], 8, ["onClick"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "max-w-1300px mx-auto flex justify-center py-30" }, [
                    createVNode("div", {
                      class: "underline underline-offset-8 text-4xl PolySansNeutral font-semibold cursor-pointer",
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/collection/step2")
                    }, "Back to Collection List", 8, ["onClick"])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collection/[idx].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
