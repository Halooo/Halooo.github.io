import { n as navigateTo, _ as __nuxt_component_0 } from './server.mjs';
import { E as ElImage } from './el-image-viewer-T405MOSo.mjs';
import { E as ElPagination } from './el-pagination-DAZq1L5Y.mjs';
import { _ as _sfc_main$1 } from './Footer-DZPaOTwy.mjs';
import { useSSRContext, defineComponent, ref, computed, withCtx, unref, isRef, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode } from 'vue';
import { a as apiIndexEventList } from './home-DlGQga1N.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
import './index-C8rz0VXy.mjs';
import './request-CdKXnB25.mjs';
import './index-URjNNh32.mjs';
import './icon-CyxyPYk8.mjs';
import './aria-DJRDfGoO.mjs';
import './el-input-D8gXC6Et.mjs';
import './constants-DzvzFGCl.mjs';
import './event-DSz0kuqc.mjs';
import './scroll-D2xEfal-.mjs';
import './el-select-CvgBycaN.mjs';
import './el-popper-_1GucfBz.mjs';
import '@popperjs/core';
import './focus-trap-C1bYFxM-.mjs';
import './Icon-CaiLYYN4.mjs';
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './Index-DNxKYUQ5.mjs';
import './OkBox-Dvtj49Wo.mjs';
import './virtual_public-3Fh-jQka.mjs';

const formartDate = (dateStr) => {
  const newDate = new Date(dateStr);
  const weekStrList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthStrList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", " Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = newDate.getDay();
  const date = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  return `${weekStrList[day]}\uFF0C${date} ${monthStrList[month]} ${year}`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "event",
  __ssrInlineRender: true,
  setup(__props) {
    const limit = ref(30);
    const total = ref(0);
    const current = ref(1);
    const eventResult = ref([]);
    const currentPages = computed(() => {
      const start = limit.value * current.value - limit.value + 1;
      const end = eventResult.value.length > 0 ? limit.value * current.value - limit.value + eventResult.value.length : "";
      return { start, end };
    });
    const curremtChange = (_current) => {
      current.value = _current;
      getEventList();
    };
    const getEventList = async () => {
      const { data } = await apiIndexEventList(current.value, limit.value);
      eventResult.value = data.value.data.data;
      total.value = data.value.data.total;
    };
    getEventList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_el_image = ElImage;
      const _component_el_pagination = ElPagination;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b0e1c1ec>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "home" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full overflow-hidden" data-v-b0e1c1ec${_scopeId}><div class="px-50px py-30" data-v-b0e1c1ec${_scopeId}><div class="max-w-1300px mx-auto" data-v-b0e1c1ec${_scopeId}><div class="text-77px" style="${ssrRenderStyle({ "font-family": "PPHattonMedium" })}" data-v-b0e1c1ec${_scopeId}>Events</div><img${ssrRenderAttr("src", _imports_0)} class="h-15 block" data-v-b0e1c1ec${_scopeId}><div class="w-693px text-18px leading-7 mt-9" data-v-b0e1c1ec${_scopeId}> Stars Collective has been involved in a wide range of critically and commercially successful films. We have been involved in a wide range of critically and commercially successful films. </div><!--[-->`);
            ssrRenderList(unref(eventResult), (item, index) => {
              _push2(`<div class="w-full bg-#151515 px-32px py-32px mt-60px overflow-hidden" data-v-b0e1c1ec${_scopeId}><div class="flex justify-between" data-v-b0e1c1ec${_scopeId}><div class="max-w-480px text-35px min-w-365px" style="${ssrRenderStyle({ "font-family": "PPHattonMedium" })}" data-v-b0e1c1ec${_scopeId}>${ssrInterpolate(item.title)}</div><div class="flex text-18px" data-v-b0e1c1ec${_scopeId}><div class="w-244px" data-v-b0e1c1ec${_scopeId}><div data-v-b0e1c1ec${_scopeId}>Date and time</div><div class="text-#ffffff mt-4 leading-27px" data-v-b0e1c1ec${_scopeId}>${ssrInterpolate(("formartDate" in _ctx ? _ctx.formartDate : unref(formartDate))(item.start_date))} <br data-v-b0e1c1ec${_scopeId}>${ssrInterpolate(item.time)}</div></div><div class="w-244px ml-78px" data-v-b0e1c1ec${_scopeId}><div data-v-b0e1c1ec${_scopeId}>Location</div><div class="mt-4 leading-27px text-#929292" data-v-b0e1c1ec${_scopeId}>${ssrInterpolate(item.location)}</div></div></div></div><div class="h-463px w-full mt-80px" data-v-b0e1c1ec${_scopeId}>`);
              if (item.youtube_link) {
                _push2(`<iframe width="100%" height="100%" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"${ssrRenderAttr("src", item.youtube_link)} data-v-b0e1c1ec${_scopeId}></iframe>`);
              } else {
                _push2(ssrRenderComponent(_component_el_image, {
                  src: item.poster_image,
                  class: "w-full h-full",
                  fit: "cover"
                }, null, _parent2, _scopeId));
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--><div class="w-full flex justify-center flex-col items-center mt-90px mb-10" data-v-b0e1c1ec${_scopeId}>`);
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
            _push2(`<div class="text-18px mt-4" data-v-b0e1c1ec${_scopeId}>${ssrInterpolate(unref(currentPages).start)}-${ssrInterpolate(unref(currentPages).end)} of ${ssrInterpolate(unref(total))} Events</div></div></div></div><div class="px-50px pb-10" data-v-b0e1c1ec${_scopeId}><div class="max-w-1300px mx-auto relative z-100" data-v-b0e1c1ec${_scopeId}><div class="w-full flex justify-between items-center" style="${ssrRenderStyle({ "font-family": "PPHattonMedium" })}" data-v-b0e1c1ec${_scopeId}><div class="flex items-center cursor-pointer" data-v-b0e1c1ec${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="" class="w-12" data-v-b0e1c1ec${_scopeId}><div class="left-btn text-35px" data-v-b0e1c1ec${_scopeId}>Philanthropy</div></div><div class="flex items-center cursor-pointer" data-v-b0e1c1ec${_scopeId}><div class="right-btn text-35px" data-v-b0e1c1ec${_scopeId}>SC Lab</div><img${ssrRenderAttr("src", _imports_4)} alt="" class="w-12" data-v-b0e1c1ec${_scopeId}></div></div></div></div>`);
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full overflow-hidden" }, [
                createVNode("div", { class: "px-50px py-30" }, [
                  createVNode("div", { class: "max-w-1300px mx-auto" }, [
                    createVNode("div", {
                      class: "text-77px",
                      style: { "font-family": "PPHattonMedium" }
                    }, "Events"),
                    createVNode("img", {
                      src: _imports_0,
                      class: "h-15 block"
                    }),
                    createVNode("div", { class: "w-693px text-18px leading-7 mt-9" }, " Stars Collective has been involved in a wide range of critically and commercially successful films. We have been involved in a wide range of critically and commercially successful films. "),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(eventResult), (item, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "w-full bg-#151515 px-32px py-32px mt-60px overflow-hidden"
                      }, [
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("div", {
                            class: "max-w-480px text-35px min-w-365px",
                            style: { "font-family": "PPHattonMedium" }
                          }, toDisplayString(item.title), 1),
                          createVNode("div", { class: "flex text-18px" }, [
                            createVNode("div", { class: "w-244px" }, [
                              createVNode("div", null, "Date and time"),
                              createVNode("div", { class: "text-#ffffff mt-4 leading-27px" }, [
                                createTextVNode(toDisplayString(("formartDate" in _ctx ? _ctx.formartDate : unref(formartDate))(item.start_date)) + " ", 1),
                                createVNode("br"),
                                createTextVNode(toDisplayString(item.time), 1)
                              ])
                            ]),
                            createVNode("div", { class: "w-244px ml-78px" }, [
                              createVNode("div", null, "Location"),
                              createVNode("div", { class: "mt-4 leading-27px text-#929292" }, toDisplayString(item.location), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "h-463px w-full mt-80px" }, [
                          item.youtube_link ? (openBlock(), createBlock("iframe", {
                            key: 0,
                            width: "100%",
                            height: "100%",
                            frameborder: "0",
                            allowfullscreen: "",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            src: item.youtube_link
                          }, null, 8, ["src"])) : (openBlock(), createBlock(_component_el_image, {
                            key: 1,
                            src: item.poster_image,
                            class: "w-full h-full",
                            fit: "cover"
                          }, null, 8, ["src"]))
                        ])
                      ]);
                    }), 128)),
                    createVNode("div", { class: "w-full flex justify-center flex-col items-center mt-90px mb-10" }, [
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
                      createVNode("div", { class: "text-18px mt-4" }, toDisplayString(unref(currentPages).start) + "-" + toDisplayString(unref(currentPages).end) + " of " + toDisplayString(unref(total)) + " Events", 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "px-50px pb-10" }, [
                  createVNode("div", { class: "max-w-1300px mx-auto relative z-100" }, [
                    createVNode("div", {
                      class: "w-full flex justify-between items-center",
                      style: { "font-family": "PPHattonMedium" }
                    }, [
                      createVNode("div", {
                        class: "flex items-center cursor-pointer",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/philanthropy")
                      }, [
                        createVNode("img", {
                          src: _imports_5,
                          alt: "",
                          class: "w-12"
                        }),
                        createVNode("div", { class: "left-btn text-35px" }, "Philanthropy")
                      ], 8, ["onClick"]),
                      createVNode("div", {
                        class: "flex items-center cursor-pointer",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/masterClass")
                      }, [
                        createVNode("div", { class: "right-btn text-35px" }, "SC Lab"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/event.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const event = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b0e1c1ec"]]);

export { event as default };
