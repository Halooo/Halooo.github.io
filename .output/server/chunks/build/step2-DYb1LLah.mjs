import { n as navigateTo, _ as __nuxt_component_0 } from './server.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { defineComponent, ref, reactive, withCtx, mergeProps, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { b as apiindexcollectionList } from './collection-BckPpfCS.mjs';
import { u as useCollectionPinia } from './collection-DCBzbesH.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
import './request-CdKXnB25.mjs';
import './index-C8rz0VXy.mjs';
import './index-URjNNh32.mjs';
import './icon-CyxyPYk8.mjs';
import './aria-DJRDfGoO.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "step2",
  __ssrInlineRender: true,
  setup(__props) {
    const arrList1 = ref([]);
    const arrList2 = ref([]);
    const arrList3 = ref([]);
    const form = reactive({
      page: 3,
      limit: 10
    });
    const SwiperConfig = reactive({
      slidesPerView: "auto",
      spaceBetween: 30
    });
    const swiperChange = async (name) => {
      form.page++;
      const res = await apiindexcollectionList({ page: form.page, limit: form.limit });
      if (res.data.data.length === 0)
        return form.page--;
      if (name === "arrList1")
        arrList1.value = [...arrList1.value, ...res.data.data];
      if (name === "arrList2")
        arrList2.value = [...arrList2.value, ...res.data.data];
      if (name === "arrList3")
        arrList3.value = [...arrList3.value, ...res.data.data];
    };
    const swiperreachEnd1 = (swiper) => {
      swiperChange("arrList1");
    };
    const swiperreachEnd2 = (swiper) => {
      swiperChange("arrList2");
    };
    const swiperreachEnd3 = (swiper) => {
      swiperChange("arrList3");
    };
    const collectionStore = useCollectionPinia();
    const handleInfoChange = async (item) => {
      collectionStore.setCollectionAnimation(true);
      navigateTo(`/collection/step3/${item.id}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full" style="${ssrRenderStyle([{ minHeight: "calc(100vh - 138px)" }])}"${_scopeId}><div class="space-y-5 py-5 w-full h-full swiper-list"${_scopeId}><div class="w-full list1 opacity-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Swiper, mergeProps({ class: "w-full mt-20" }, unref(SwiperConfig), { onReachEnd: swiperreachEnd1 }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(arrList1), (item, index) => {
                    _push3(ssrRenderComponent(_component_SwiperSlide, {
                      key: index,
                      class: "!w-auto"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="h-56 rounded-10px overflow-hidden cursor-pointer"${_scopeId3}><img${ssrRenderAttr("src", item.banner_image)} alt="" class="h-full"${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "h-56 rounded-10px overflow-hidden cursor-pointer",
                              onClick: ($event) => handleInfoChange(item)
                            }, [
                              createVNode("img", {
                                src: item.banner_image,
                                alt: "",
                                class: "h-full"
                              }, null, 8, ["src"])
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(arrList1), (item, index) => {
                      return openBlock(), createBlock(_component_SwiperSlide, {
                        key: index,
                        class: "!w-auto"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "h-56 rounded-10px overflow-hidden cursor-pointer",
                            onClick: ($event) => handleInfoChange(item)
                          }, [
                            createVNode("img", {
                              src: item.banner_image,
                              alt: "",
                              class: "h-full"
                            }, null, 8, ["src"])
                          ], 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full list2 opacity-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Swiper, mergeProps({ class: "w-full mt-20" }, unref(SwiperConfig), { onReachEnd: swiperreachEnd2 }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(arrList2), (item, index) => {
                    _push3(ssrRenderComponent(_component_SwiperSlide, {
                      key: index,
                      class: "!w-auto"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="h-56 rounded-10px overflow-hidden cursor-pointer"${_scopeId3}><img${ssrRenderAttr("src", item.banner_image)} alt="" class="h-full"${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "h-56 rounded-10px overflow-hidden cursor-pointer",
                              onClick: ($event) => handleInfoChange(item)
                            }, [
                              createVNode("img", {
                                src: item.banner_image,
                                alt: "",
                                class: "h-full"
                              }, null, 8, ["src"])
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(arrList2), (item, index) => {
                      return openBlock(), createBlock(_component_SwiperSlide, {
                        key: index,
                        class: "!w-auto"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "h-56 rounded-10px overflow-hidden cursor-pointer",
                            onClick: ($event) => handleInfoChange(item)
                          }, [
                            createVNode("img", {
                              src: item.banner_image,
                              alt: "",
                              class: "h-full"
                            }, null, 8, ["src"])
                          ], 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full list3 opacity-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Swiper, mergeProps({ class: "w-full mt-20" }, unref(SwiperConfig), { onReachEnd: swiperreachEnd3 }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(arrList3), (item, index) => {
                    _push3(ssrRenderComponent(_component_SwiperSlide, {
                      key: index,
                      class: "!w-auto"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="h-56 rounded-10px overflow-hidden cursor-pointer"${_scopeId3}><img${ssrRenderAttr("src", item.banner_image)} alt="" class="h-full"${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "h-56 rounded-10px overflow-hidden cursor-pointer",
                              onClick: ($event) => handleInfoChange(item)
                            }, [
                              createVNode("img", {
                                src: item.banner_image,
                                alt: "",
                                class: "h-full"
                              }, null, 8, ["src"])
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(arrList3), (item, index) => {
                      return openBlock(), createBlock(_component_SwiperSlide, {
                        key: index,
                        class: "!w-auto"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "h-56 rounded-10px overflow-hidden cursor-pointer",
                            onClick: ($event) => handleInfoChange(item)
                          }, [
                            createVNode("img", {
                              src: item.banner_image,
                              alt: "",
                              class: "h-full"
                            }, null, 8, ["src"])
                          ], 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "w-full",
                style: [{ minHeight: "calc(100vh - 138px)" }]
              }, [
                createVNode("div", { class: "space-y-5 py-5 w-full h-full swiper-list" }, [
                  createVNode("div", { class: "w-full list1 opacity-0" }, [
                    createVNode(_component_Swiper, mergeProps({ class: "w-full mt-20" }, unref(SwiperConfig), { onReachEnd: swiperreachEnd1 }), {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(arrList1), (item, index) => {
                          return openBlock(), createBlock(_component_SwiperSlide, {
                            key: index,
                            class: "!w-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "h-56 rounded-10px overflow-hidden cursor-pointer",
                                onClick: ($event) => handleInfoChange(item)
                              }, [
                                createVNode("img", {
                                  src: item.banner_image,
                                  alt: "",
                                  class: "h-full"
                                }, null, 8, ["src"])
                              ], 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }, 16)
                  ]),
                  createVNode("div", { class: "w-full list2 opacity-0" }, [
                    createVNode(_component_Swiper, mergeProps({ class: "w-full mt-20" }, unref(SwiperConfig), { onReachEnd: swiperreachEnd2 }), {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(arrList2), (item, index) => {
                          return openBlock(), createBlock(_component_SwiperSlide, {
                            key: index,
                            class: "!w-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "h-56 rounded-10px overflow-hidden cursor-pointer",
                                onClick: ($event) => handleInfoChange(item)
                              }, [
                                createVNode("img", {
                                  src: item.banner_image,
                                  alt: "",
                                  class: "h-full"
                                }, null, 8, ["src"])
                              ], 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }, 16)
                  ]),
                  createVNode("div", { class: "w-full list3 opacity-0" }, [
                    createVNode(_component_Swiper, mergeProps({ class: "w-full mt-20" }, unref(SwiperConfig), { onReachEnd: swiperreachEnd3 }), {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(arrList3), (item, index) => {
                          return openBlock(), createBlock(_component_SwiperSlide, {
                            key: index,
                            class: "!w-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "h-56 rounded-10px overflow-hidden cursor-pointer",
                                onClick: ($event) => handleInfoChange(item)
                              }, [
                                createVNode("img", {
                                  src: item.banner_image,
                                  alt: "",
                                  class: "h-full"
                                }, null, 8, ["src"])
                              ], 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }, 16)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collection/step2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
