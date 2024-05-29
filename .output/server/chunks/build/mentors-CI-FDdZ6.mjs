import { _ as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$1 } from './Footer-DZPaOTwy.mjs';
import { useSSRContext, defineComponent, ref, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { d as apiIndexMentorList } from './home-DlGQga1N.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-BaMrrqy2.mjs';
import gsap from 'gsap';
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
  __name: "mentors",
  __ssrInlineRender: true,
  setup(__props) {
    const mentorsList = ref([]);
    const handleMouseEnter = (_index) => {
      gsap.set(".mentor_item1", { opacity: 0.3 });
      const tl = gsap.timeline();
      tl.to(`#mentor1-${_index}`, { opacity: 0, duration: 0 });
      tl.to(`#mentor2-${_index}`, { opacity: 1, duration: 0 });
      tl.fromTo(`#mentor_item-${_index}`, { y: 200 }, { y: 0, duration: 0.5, opacity: 1 });
    };
    const handleMouseLeave = (_index, e) => {
      e.target.dataset.id;
      const tl = gsap.timeline();
      gsap.set(".mentor_item1", { opacity: 1 });
      tl.to(`#mentor_item-${_index}`, { y: 100, duration: 0.5, opacity: 0 });
      tl.to(`#mentor2-${_index}`, { opacity: 0, duration: 0.5 }, "<");
      tl.to(`#mentor1-${_index}`, { opacity: 1, duration: 0.5 }, "<");
    };
    const getMentorList = async () => {
      const res = await apiIndexMentorList();
      mentorsList.value = res.data;
      mentorsList.value.forEach((item) => item.works_arr = item.works.split("|"));
    };
    getMentorList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7efbec44>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full relative overflow-hidden" data-v-7efbec44${_scopeId}><div class="px-50px" data-v-7efbec44${_scopeId}><div class="max-w-1300px mx-auto relative z-2" data-v-7efbec44${_scopeId}><div class="text-77px mt-34px PPHattonMedium" data-v-7efbec44${_scopeId}>Our<br data-v-7efbec44${_scopeId}>Mentors</div><img${ssrRenderAttr("src", _imports_0)} class="h-15 block" data-v-7efbec44${_scopeId}><div class="mt-4 mb-120px" data-v-7efbec44${_scopeId}>*Names are listed in alphabetic order</div><div class="w-full pb-200px openingAnimation" data-v-7efbec44${_scopeId}><!--[-->`);
            ssrRenderList(unref(mentorsList), (item, index) => {
              _push2(`<div class="w-full h-214px relative"${ssrRenderAttr("data-id", index)} data-v-7efbec44${_scopeId}><div${ssrRenderAttr("id", "mentor1-" + index)} class="w-full h-full absolute inset-0 flex items-center justify-between mentor_item1" data-v-7efbec44${_scopeId}>`);
              if (index % 2 == 0) {
                _push2(`<img src="https://www.starscollective.com/assets/images/gif/line2.gif" alt="" class="absolute -top-2px left-1/2 w-112% max-w-112% z-10 -translate-x-1/2 rotate-180deg" data-v-7efbec44${_scopeId}>`);
              } else {
                _push2(`<img src="https://www.starscollective.com/assets/images/gif/line2.gif" alt="" class="absolute -top-2px left-1/2 w-112% max-w-112% z-10 -translate-x-1/2" data-v-7efbec44${_scopeId}>`);
              }
              _push2(`<div class="w-202px text-48px font-medium" style="${ssrRenderStyle({ "font-family": "PPHattonMedium" })}" data-v-7efbec44${_scopeId}>${ssrInterpolate(item.first_name)} ${ssrInterpolate(item.last_name)}</div><div class="${ssrRenderClass([[item.position.length > 10 ? "text-90px" : "text-142.4px"], "stroke_text text-transparent"])}" data-v-7efbec44${_scopeId}>${ssrInterpolate(item.position)}</div></div><div${ssrRenderAttr("id", "mentor2-" + index)} class="w-full h-full absolute inset-0 flex justify-between border-y-1px border-#2F2F2F pt-7 opacity-0" data-v-7efbec44${_scopeId}><div class="flex" data-v-7efbec44${_scopeId}><div class="w-102px text-24.15px leading-30.44px" data-v-7efbec44${_scopeId}>${ssrInterpolate(item.first_name)} ${ssrInterpolate(item.last_name)}</div><div class="text-18px ml-11" data-v-7efbec44${_scopeId}><div class="font-semibold text-#ffffff leading-7" data-v-7efbec44${_scopeId}>${ssrInterpolate(item.position)}</div><!--[-->`);
              ssrRenderList(item.works_arr, (item2, index2) => {
                _push2(`<div class="italic font-light leading-7 font-light" data-v-7efbec44${_scopeId}>${ssrInterpolate(item2)}</div>`);
              });
              _push2(`<!--]--></div></div><div${ssrRenderAttr("id", "mentor_item-" + index)} class="w-670px h-320px absolute right-0 -top-80px flex mentor_item mentor_item2 overflow-hidden z-99" data-v-7efbec44${_scopeId}><!--[-->`);
              ssrRenderList(item.works_images, (item3, index3) => {
                _push2(`<img${ssrRenderAttr("src", item3)} class="w-216px h-full object-cover mentors_img" data-v-7efbec44${_scopeId}>`);
              });
              _push2(`<!--]--></div></div></div>`);
            });
            _push2(`<!--]--></div></div></div><div class="relative z-10" data-v-7efbec44${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full relative overflow-hidden" }, [
                createVNode("div", { class: "px-50px" }, [
                  createVNode("div", { class: "max-w-1300px mx-auto relative z-2" }, [
                    createVNode("div", { class: "text-77px mt-34px PPHattonMedium" }, [
                      createTextVNode("Our"),
                      createVNode("br"),
                      createTextVNode("Mentors")
                    ]),
                    createVNode("img", {
                      src: _imports_0,
                      class: "h-15 block"
                    }),
                    createVNode("div", { class: "mt-4 mb-120px" }, "*Names are listed in alphabetic order"),
                    createVNode("div", { class: "w-full pb-200px openingAnimation" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(mentorsList), (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "w-full h-214px relative",
                          "data-id": index,
                          onMouseenter: ($event) => handleMouseEnter(index),
                          onMouseleave: ($event) => handleMouseLeave(index, $event)
                        }, [
                          createVNode("div", {
                            id: "mentor1-" + index,
                            class: "w-full h-full absolute inset-0 flex items-center justify-between mentor_item1"
                          }, [
                            index % 2 == 0 ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: "https://www.starscollective.com/assets/images/gif/line2.gif",
                              alt: "",
                              class: "absolute -top-2px left-1/2 w-112% max-w-112% z-10 -translate-x-1/2 rotate-180deg"
                            })) : (openBlock(), createBlock("img", {
                              key: 1,
                              src: "https://www.starscollective.com/assets/images/gif/line2.gif",
                              alt: "",
                              class: "absolute -top-2px left-1/2 w-112% max-w-112% z-10 -translate-x-1/2"
                            })),
                            createVNode("div", {
                              class: "w-202px text-48px font-medium",
                              style: { "font-family": "PPHattonMedium" }
                            }, toDisplayString(item.first_name) + " " + toDisplayString(item.last_name), 1),
                            createVNode("div", {
                              class: ["stroke_text text-transparent", [item.position.length > 10 ? "text-90px" : "text-142.4px"]]
                            }, toDisplayString(item.position), 3)
                          ], 8, ["id"]),
                          createVNode("div", {
                            id: "mentor2-" + index,
                            class: "w-full h-full absolute inset-0 flex justify-between border-y-1px border-#2F2F2F pt-7 opacity-0"
                          }, [
                            createVNode("div", { class: "flex" }, [
                              createVNode("div", { class: "w-102px text-24.15px leading-30.44px" }, toDisplayString(item.first_name) + " " + toDisplayString(item.last_name), 1),
                              createVNode("div", { class: "text-18px ml-11" }, [
                                createVNode("div", { class: "font-semibold text-#ffffff leading-7" }, toDisplayString(item.position), 1),
                                (openBlock(true), createBlock(Fragment, null, renderList(item.works_arr, (item2, index2) => {
                                  return openBlock(), createBlock("div", {
                                    key: index2,
                                    class: "italic font-light leading-7 font-light"
                                  }, toDisplayString(item2), 1);
                                }), 128))
                              ])
                            ]),
                            createVNode("div", {
                              id: "mentor_item-" + index,
                              class: "w-670px h-320px absolute right-0 -top-80px flex mentor_item mentor_item2 overflow-hidden z-99"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.works_images, (item3, index3) => {
                                return openBlock(), createBlock("img", {
                                  key: index3,
                                  src: item3,
                                  class: "w-216px h-full object-cover mentors_img"
                                }, null, 8, ["src"]);
                              }), 128))
                            ], 8, ["id"])
                          ], 8, ["id"])
                        ], 40, ["data-id", "onMouseenter", "onMouseleave"]);
                      }), 128))
                    ])
                  ])
                ]),
                createVNode("div", { class: "relative z-10" }, [
                  createVNode(_component_Footer)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mentors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mentors = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7efbec44"]]);

export { mentors as default };
