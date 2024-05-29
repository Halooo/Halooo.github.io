import { _ as __nuxt_component_0 } from './server.mjs';
import __nuxt_component_7 from './Icon-CaiLYYN4.mjs';
import { E as ElPagination } from './el-pagination-DAZq1L5Y.mjs';
import { _ as _sfc_main$1 } from './Footer-DZPaOTwy.mjs';
import { defineComponent, ref, computed, withCtx, unref, isRef, openBlock, createBlock, createVNode, toDisplayString, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { e as apiIndexInformation, f as apiIndexInformationList } from './home-DlGQga1N.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
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
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-C8rz0VXy.mjs';
import './icon-CyxyPYk8.mjs';
import './request-CdKXnB25.mjs';
import './index-URjNNh32.mjs';
import './aria-DJRDfGoO.mjs';
import './el-select-CvgBycaN.mjs';
import './el-input-D8gXC6Et.mjs';
import './constants-DzvzFGCl.mjs';
import './event-DSz0kuqc.mjs';
import './el-popper-_1GucfBz.mjs';
import '@popperjs/core';
import './focus-trap-C1bYFxM-.mjs';
import './scroll-D2xEfal-.mjs';
import './Index-DNxKYUQ5.mjs';
import './OkBox-Dvtj49Wo.mjs';
import './virtual_public-3Fh-jQka.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "press",
  __ssrInlineRender: true,
  setup(__props) {
    const informationResult = ref([{ cover_image: "" }, { cover_image: "" }]);
    const informationListResult = ref([]);
    const limit = ref(30);
    const total = ref(0);
    const current = ref(1);
    const handleLink = (_url) => {
      (void 0).open(_url, "_black");
    };
    const currentPages = computed(() => {
      const start = limit.value * current.value - limit.value + 1;
      const end = informationListResult.value.length > 0 ? limit.value * current.value - limit.value + informationListResult.value.length : "";
      return { start, end };
    });
    const curremtChange = (_current) => {
      current.value = _current;
      getInformationList();
    };
    const getInformation = async () => {
      const { data } = await apiIndexInformation();
      informationResult.value = data.value.data;
    };
    const getInformationList = async () => {
      informationListResult.value = [];
      const { data } = await apiIndexInformationList(current.value, limit.value);
      informationListResult.value = data.value.data.data;
      total.value = data.value.data.total;
    };
    getInformation();
    getInformationList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Icon = __nuxt_component_7;
      const _component_el_pagination = ElPagination;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "home" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            if (unref(informationResult).length > 0) {
              _push2(`<div class="w-full overflow-hidden"${_scopeId}><div class="px-50px"${_scopeId}><div class="max-w-1300px mx-auto"${_scopeId}><img${ssrRenderAttr("src", (_a = unref(informationResult)[0]) == null ? void 0 : _a.cover_image)} class="w-full"${_scopeId}><div class="text-#ffffff text-14px mt-35px mb-20px"${_scopeId}>${ssrInterpolate(unref(informationResult)[0].source)}</div><div class="flex justify-between"${_scopeId}><div class="w-900px text-35px" style="${ssrRenderStyle({ "font-family": "PPHattonMedium" })}"${_scopeId}>${ssrInterpolate(unref(informationResult)[0].title)}</div><div class="flex text-#ffffff items-center cursor-pointer"${_scopeId}><div${_scopeId}>READ MORE</div>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "mdi:arrow-top-right" }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="flex mt-100px"${_scopeId}><img${ssrRenderAttr("src", unref(informationResult)[1].cover_image)} class="w-30% block"${_scopeId}><div class="ml-72px"${_scopeId}><div class="text-#ffffff text-14px"${_scopeId}>${ssrInterpolate(unref(informationResult)[1].source)}</div><div class="text-35px leading-50px my-8 PPHattonMedium"${_scopeId}>${ssrInterpolate(unref(informationResult)[1].title)}</div><div class="flex mt-8 text-#ffffff items-center cursor-pointer"${_scopeId}><div${_scopeId}>READ MORE</div>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "mdi:arrow-top-right" }, null, _parent2, _scopeId));
              _push2(`</div></div></div><div class="mt-60px grid grid-cols-3 gap-15"${_scopeId}><!--[-->`);
              ssrRenderList(unref(informationListResult), (item, index) => {
                _push2(`<div${_scopeId}><div class="w-full relative h-0 overflow-hidden pb-50%"${_scopeId}><img${ssrRenderAttr("src", item.cover_image)} class="absolute top-0 left-0 w-full h-full object-cover"${_scopeId}></div><div class="text-#ffffff text-14px py-9"${_scopeId}>${ssrInterpolate(item.source)}</div><div class="text-26px PPHattonMedium"${_scopeId}>${ssrInterpolate(item.title)}</div><div class="flex text-black justify-between h-17px bg-#ffffff w-125px items-center mt-9 cursor-pointer"${_scopeId}><div class="text-14px tracking-2.1px"${_scopeId}>READ MORE</div>`);
                _push2(ssrRenderComponent(_component_Icon, { name: "ph:caret-right" }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div><div class="w-full flex justify-center flex-col items-center mt-40 mb-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_pagination, {
                "current-page": unref(current),
                "onUpdate:currentPage": ($event) => isRef(current) ? current.value = $event : null,
                "page-size": unref(limit),
                "onUpdate:pageSize": ($event) => isRef(limit) ? limit.value = $event : null,
                background: "",
                layout: "prev, pager, next",
                total: unref(total),
                onCurrentChange: curremtChange
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-18px mt-4"${_scopeId}>${ssrInterpolate(unref(currentPages).start)}-${ssrInterpolate(unref(currentPages).end)} of ${ssrInterpolate(unref(total))} Press</div></div></div></div>`);
              _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(informationResult).length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "w-full overflow-hidden"
              }, [
                createVNode("div", { class: "px-50px" }, [
                  createVNode("div", { class: "max-w-1300px mx-auto" }, [
                    createVNode("img", {
                      src: (_b = unref(informationResult)[0]) == null ? void 0 : _b.cover_image,
                      class: "w-full"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "text-#ffffff text-14px mt-35px mb-20px" }, toDisplayString(unref(informationResult)[0].source), 1),
                    createVNode("div", { class: "flex justify-between" }, [
                      createVNode("div", {
                        class: "w-900px text-35px",
                        style: { "font-family": "PPHattonMedium" }
                      }, toDisplayString(unref(informationResult)[0].title), 1),
                      createVNode("div", {
                        class: "flex text-#ffffff items-center cursor-pointer",
                        onClick: ($event) => handleLink(unref(informationResult)[0].link)
                      }, [
                        createVNode("div", null, "READ MORE"),
                        createVNode(_component_Icon, { name: "mdi:arrow-top-right" })
                      ], 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "flex mt-100px" }, [
                      createVNode("img", {
                        src: unref(informationResult)[1].cover_image,
                        class: "w-30% block"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "ml-72px" }, [
                        createVNode("div", { class: "text-#ffffff text-14px" }, toDisplayString(unref(informationResult)[1].source), 1),
                        createVNode("div", { class: "text-35px leading-50px my-8 PPHattonMedium" }, toDisplayString(unref(informationResult)[1].title), 1),
                        createVNode("div", {
                          class: "flex mt-8 text-#ffffff items-center cursor-pointer",
                          onClick: ($event) => handleLink(unref(informationResult)[1].link)
                        }, [
                          createVNode("div", null, "READ MORE"),
                          createVNode(_component_Icon, { name: "mdi:arrow-top-right" })
                        ], 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "mt-60px grid grid-cols-3 gap-15" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(informationListResult), (item, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode("div", { class: "w-full relative h-0 overflow-hidden pb-50%" }, [
                            createVNode("img", {
                              src: item.cover_image,
                              class: "absolute top-0 left-0 w-full h-full object-cover"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "text-#ffffff text-14px py-9" }, toDisplayString(item.source), 1),
                          createVNode("div", { class: "text-26px PPHattonMedium" }, toDisplayString(item.title), 1),
                          createVNode("div", {
                            class: "flex text-black justify-between h-17px bg-#ffffff w-125px items-center mt-9 cursor-pointer",
                            onClick: ($event) => handleLink(item.link)
                          }, [
                            createVNode("div", { class: "text-14px tracking-2.1px" }, "READ MORE"),
                            createVNode(_component_Icon, { name: "ph:caret-right" })
                          ], 8, ["onClick"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "w-full flex justify-center flex-col items-center mt-40 mb-10" }, [
                      createVNode(_component_el_pagination, {
                        "current-page": unref(current),
                        "onUpdate:currentPage": ($event) => isRef(current) ? current.value = $event : null,
                        "page-size": unref(limit),
                        "onUpdate:pageSize": ($event) => isRef(limit) ? limit.value = $event : null,
                        background: "",
                        layout: "prev, pager, next",
                        total: unref(total),
                        onCurrentChange: curremtChange
                      }, null, 8, ["current-page", "onUpdate:currentPage", "page-size", "onUpdate:pageSize", "total"]),
                      createVNode("div", { class: "text-18px mt-4" }, toDisplayString(unref(currentPages).start) + "-" + toDisplayString(unref(currentPages).end) + " of " + toDisplayString(unref(total)) + " Press", 1)
                    ])
                  ])
                ]),
                createVNode(_component_Footer)
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/press.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
