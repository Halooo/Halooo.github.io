import { n as navigateTo, _ as __nuxt_component_0, b as __nuxt_component_2 } from './server.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { defineComponent, ref, reactive, withCtx, unref, mergeProps, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { b as apiindexcollectionList } from './collection-BckPpfCS.mjs';
import { u as useCollectionPinia } from './collection-DCBzbesH.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import gsap from 'gsap';
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
import 'video.js';
import './request-CdKXnB25.mjs';
import './index-C8rz0VXy.mjs';
import './index-URjNNh32.mjs';
import './icon-CyxyPYk8.mjs';
import './aria-DJRDfGoO.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "step3",
  __ssrInlineRender: true,
  setup(__props) {
    const dataList = ref([]);
    const form1 = reactive({
      page: 0,
      limit: 10,
      dataList: []
    });
    const SwiperConfig = reactive({
      slidesPerView: "auto",
      spaceBetween: 30
    });
    const getapiindexcollectionList = async () => {
      const res = await apiindexcollectionList({ page: form1.page, limit: form1.limit });
      if (res.data.data.length === 0)
        return form1.page--;
      dataList.value = [...dataList.value, ...res.data.data];
    };
    const swiperreachEnd = async () => {
      form1.page++;
      getapiindexcollectionList();
    };
    const collectionStore = useCollectionPinia();
    const handleDetail = async (item) => {
      collectionStore.setCollectionAnimation(false);
      navigateTo(`/collection/step3/${item.id}`);
    };
    const handleAnimationEnd = () => {
      const tl = gsap.timeline();
      tl.fromTo(".swiper-card", { x: "200%", opacity: 0 }, { x: "-50px", opacity: 1, duration: 2, delay: 0.5 });
      tl.fromTo(".swiper-card", { x: "-50px" }, { x: 0, duration: 0.5 });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_2;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full overflow-hidden" style="${ssrRenderStyle([{ height: "calc(100vh - 138px)" }])}"${_scopeId}><div class="relative w-full h-full flex flex-col card-info"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtPage, { onAnimationEnd: handleAnimationEnd }, null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass([[{ "opacity-0": unref(collectionStore).getCollectionAnimation }], "w-full py-5 swiper-card min-h-42"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Swiper, mergeProps({ class: "w-full mt-20" }, unref(SwiperConfig), { onReachEnd: swiperreachEnd }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(dataList), (item, index) => {
                    _push3(ssrRenderComponent(_component_SwiperSlide, {
                      key: index,
                      class: "!w-auto"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="h-32 rounded-10px overflow-hidden cursor-pointer"${_scopeId3}><img${ssrRenderAttr("src", item.banner_image)} alt="" class="h-full"${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "h-32 rounded-10px overflow-hidden cursor-pointer",
                              onClick: ($event) => handleDetail(item)
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(dataList), (item, index) => {
                      return openBlock(), createBlock(_component_SwiperSlide, {
                        key: index,
                        class: "!w-auto"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "h-32 rounded-10px overflow-hidden cursor-pointer",
                            onClick: ($event) => handleDetail(item)
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
                class: "w-full overflow-hidden",
                style: [{ height: "calc(100vh - 138px)" }]
              }, [
                createVNode("div", { class: "relative w-full h-full flex flex-col card-info" }, [
                  createVNode(_component_NuxtPage, { onAnimationEnd: handleAnimationEnd }),
                  createVNode("div", {
                    class: ["w-full py-5 swiper-card min-h-42", [{ "opacity-0": unref(collectionStore).getCollectionAnimation }]]
                  }, [
                    createVNode(_component_Swiper, mergeProps({ class: "w-full mt-20" }, unref(SwiperConfig), { onReachEnd: swiperreachEnd }), {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(dataList), (item, index) => {
                          return openBlock(), createBlock(_component_SwiperSlide, {
                            key: index,
                            class: "!w-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "h-32 rounded-10px overflow-hidden cursor-pointer",
                                onClick: ($event) => handleDetail(item)
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
                  ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collection/step3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
