import { E as ElCollapse, a as ElCollapseItem } from './el-collapse-item-dDFeTaXL.mjs';
import __nuxt_component_7 from './Icon-CaiLYYN4.mjs';
import { _ as _sfc_main$2 } from './Index-DNxKYUQ5.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, computed, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { j as roposalList, s as setCancelProposal } from './user-C3y1iIxD.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
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
import './event-DSz0kuqc.mjs';
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './request-CdKXnB25.mjs';
import './index-URjNNh32.mjs';
import './icon-CyxyPYk8.mjs';
import './aria-DJRDfGoO.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Cancellation",
  __ssrInlineRender: true,
  emits: ["update:model-value", "submitBtb"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-117 bg-black fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 space-y-16" }, _attrs))}><div class="space-y-4"><p class="font-medium text-5xl PPHattonMedium">Confirm</p><div class="font-light text-lg PolySansNeutral">You will not be able to reverse this action.</div></div><div class="space-x-5 flex"><div class="btn gradient-btn"><div>Cancel</div></div><div class="btn"><div>Don\u2019t cancel</div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Feedback/Modal/User/Cancellation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "proposal",
  __ssrInlineRender: true,
  setup(__props) {
    const activeNames = ref();
    const dataInfo = ref(null);
    const drawerName = ref();
    const selectItem = ref();
    const arrTimeline = ref(["Executive Officer", "Members of Executive Committee", "Mentors of advisory committee", "Investment Committee"]);
    const drawerShow = computed(() => (name) => name === drawerName.value ? true : false);
    const drawerClose = (value) => {
      if (!value)
        drawerName.value = "";
    };
    const statusReplace = computed(() => {
      return (status) => {
        switch (status) {
          case "0":
            return "Pending";
          case "1":
            return "Reviewing";
          case "2":
            return "Success";
          case "3":
            return "View Feedback";
        }
      };
    });
    const getRoposalList = async () => {
      const res = await roposalList();
      dataInfo.value = res.data;
    };
    const cancelProposal = async () => {
      const { type, id } = selectItem.value;
      await setCancelProposal({ cate: type, id });
      drawerName.value = "";
      getRoposalList();
    };
    getRoposalList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_collapse = ElCollapse;
      const _component_el_collapse_item = ElCollapseItem;
      const _component_Icon = __nuxt_component_7;
      const _component_FeedbackModal = _sfc_main$2;
      const _component_FeedbackModalUserCancellation = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-5bca0591><div class="w-full h-14 flex items-center pl-5 alert-bg" data-v-5bca0591><div class="text-lg PolySansNeutral text-black" data-v-5bca0591><span class="font-semibold" data-v-5bca0591>Stars Collective Grants Now Open! </span><span data-v-5bca0591>Use Proposal Portal to submit your work</span></div></div><div class="py-10 px-9 space-y-11 mt-10" data-v-5bca0591><div class="font-medium text-4xl PPHattonMedium" data-v-5bca0591>My Proposal</div><div class="space-y-10" data-v-5bca0591><div class="btn gradient-btn" data-v-5bca0591><div data-v-5bca0591>Submit Film Proposal</div></div><div class="font-normal text-sm PolySansNeutral" data-v-5bca0591>* no more than 3 proposals/month</div><div class="btn gradient-btn" data-v-5bca0591><div data-v-5bca0591>Submit Art Proposal</div></div><div class="font-normal text-sm PolySansNeutral" data-v-5bca0591>* no more than 3 proposals/month</div></div><div class="space-y-8 collapse-box" data-v-5bca0591>`);
      _push(ssrRenderComponent(_component_el_collapse, {
        modelValue: unref(activeNames),
        "onUpdate:modelValue": ($event) => isRef(activeNames) ? activeNames.value = $event : null,
        accordion: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_collapse_item, {
              title: "Proposal Timeline",
              name: "1"
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-between w-full" data-v-5bca0591${_scopeId2}><span class="font-normal text-lg PolySansNeutral text-white" data-v-5bca0591${_scopeId2}>Proposal Timeline</span><span class="font-normal text-lg PolySansNeutral pr-2 text-white" data-v-5bca0591${_scopeId2}>${ssrInterpolate(unref(activeNames) ? "Hide" : "View ")}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-between w-full" }, [
                      createVNode("span", { class: "font-normal text-lg PolySansNeutral text-white" }, "Proposal Timeline"),
                      createVNode("span", { class: "font-normal text-lg PolySansNeutral pr-2 text-white" }, toDisplayString(unref(activeNames) ? "Hide" : "View "), 1)
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="py-12" data-v-5bca0591${_scopeId2}><div class="relative px-16 space-y-3" data-v-5bca0591${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(arrTimeline), (item, index) => {
                    _push3(`<div data-v-5bca0591${_scopeId2}><div class="flex justify-between items-center" data-v-5bca0591${_scopeId2}><div class="w-fit py-4 px-8 flex items-center justify-center bg-white" data-v-5bca0591${_scopeId2}><span class="font-semibold text-lg PolySansNeutral text-black" data-v-5bca0591${_scopeId2}>${ssrInterpolate(item)}</span></div><div class="flex-1 h-1px bg-white" data-v-5bca0591${_scopeId2}></div><div class="w-32 text-center font-semibold text-lg PolySansNeutral text-white" data-v-5bca0591${_scopeId2}>Passed On</div><div class="w-12 h-1px bg-white" data-v-5bca0591${_scopeId2}></div></div><div class="flex items-center space-x-6 pl-8" data-v-5bca0591${_scopeId2}><div class="w-1px h-14 bg-white flex items-end justify-center relative" data-v-5bca0591${_scopeId2}><span class="text-white absolute -bottom-2" data-v-5bca0591${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "radix-icons:triangle-down",
                      size: "18"
                    }, null, _parent3, _scopeId2));
                    _push3(`</span></div><span class="font-semibold text-lg PolySansNeutral text-white" data-v-5bca0591${_scopeId2}>Approved</span></div></div>`);
                  });
                  _push3(`<!--]--><div class="w-1px absolute top-4% right-16 bottom-0 bg-white flex items-end justify-center" data-v-5bca0591${_scopeId2}><span class="text-white absolute -bottom-2" data-v-5bca0591${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "radix-icons:triangle-down",
                    size: "18"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span></div></div><div class="pl-19 pr-20 mt-3 flex items-center justify-between" data-v-5bca0591${_scopeId2}><div class="w-fit px-8 py-4 flex items-center justify-center bg-#ffffff" data-v-5bca0591${_scopeId2}><span class="font-semibold text-lg PolySansNeutral text-black" data-v-5bca0591${_scopeId2}> Confirming Production &amp; <br data-v-5bca0591${_scopeId2}> Financing Details </span></div><div class="font-semibold text-lg PolySansNeutral text-#ffffff" data-v-5bca0591${_scopeId2}> Feedback and Notes wil<br data-v-5bca0591${_scopeId2}> be directly provided </div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "py-12" }, [
                      createVNode("div", { class: "relative px-16 space-y-3" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(arrTimeline), (item, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode("div", { class: "flex justify-between items-center" }, [
                              createVNode("div", { class: "w-fit py-4 px-8 flex items-center justify-center bg-white" }, [
                                createVNode("span", { class: "font-semibold text-lg PolySansNeutral text-black" }, toDisplayString(item), 1)
                              ]),
                              createVNode("div", { class: "flex-1 h-1px bg-white" }),
                              createVNode("div", { class: "w-32 text-center font-semibold text-lg PolySansNeutral text-white" }, "Passed On"),
                              createVNode("div", { class: "w-12 h-1px bg-white" })
                            ]),
                            createVNode("div", { class: "flex items-center space-x-6 pl-8" }, [
                              createVNode("div", { class: "w-1px h-14 bg-white flex items-end justify-center relative" }, [
                                createVNode("span", { class: "text-white absolute -bottom-2" }, [
                                  createVNode(_component_Icon, {
                                    name: "radix-icons:triangle-down",
                                    size: "18"
                                  })
                                ])
                              ]),
                              createVNode("span", { class: "font-semibold text-lg PolySansNeutral text-white" }, "Approved")
                            ])
                          ]);
                        }), 128)),
                        createVNode("div", { class: "w-1px absolute top-4% right-16 bottom-0 bg-white flex items-end justify-center" }, [
                          createVNode("span", { class: "text-white absolute -bottom-2" }, [
                            createVNode(_component_Icon, {
                              name: "radix-icons:triangle-down",
                              size: "18"
                            })
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "pl-19 pr-20 mt-3 flex items-center justify-between" }, [
                        createVNode("div", { class: "w-fit px-8 py-4 flex items-center justify-center bg-#ffffff" }, [
                          createVNode("span", { class: "font-semibold text-lg PolySansNeutral text-black" }, [
                            createTextVNode(" Confirming Production & "),
                            createVNode("br"),
                            createTextVNode(" Financing Details ")
                          ])
                        ]),
                        createVNode("div", { class: "font-semibold text-lg PolySansNeutral text-#ffffff" }, [
                          createTextVNode(" Feedback and Notes wil"),
                          createVNode("br"),
                          createTextVNode(" be directly provided ")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_collapse_item, {
                title: "Proposal Timeline",
                name: "1"
              }, {
                title: withCtx(() => [
                  createVNode("div", { class: "flex justify-between w-full" }, [
                    createVNode("span", { class: "font-normal text-lg PolySansNeutral text-white" }, "Proposal Timeline"),
                    createVNode("span", { class: "font-normal text-lg PolySansNeutral pr-2 text-white" }, toDisplayString(unref(activeNames) ? "Hide" : "View "), 1)
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "py-12" }, [
                    createVNode("div", { class: "relative px-16 space-y-3" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(arrTimeline), (item, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode("div", { class: "flex justify-between items-center" }, [
                            createVNode("div", { class: "w-fit py-4 px-8 flex items-center justify-center bg-white" }, [
                              createVNode("span", { class: "font-semibold text-lg PolySansNeutral text-black" }, toDisplayString(item), 1)
                            ]),
                            createVNode("div", { class: "flex-1 h-1px bg-white" }),
                            createVNode("div", { class: "w-32 text-center font-semibold text-lg PolySansNeutral text-white" }, "Passed On"),
                            createVNode("div", { class: "w-12 h-1px bg-white" })
                          ]),
                          createVNode("div", { class: "flex items-center space-x-6 pl-8" }, [
                            createVNode("div", { class: "w-1px h-14 bg-white flex items-end justify-center relative" }, [
                              createVNode("span", { class: "text-white absolute -bottom-2" }, [
                                createVNode(_component_Icon, {
                                  name: "radix-icons:triangle-down",
                                  size: "18"
                                })
                              ])
                            ]),
                            createVNode("span", { class: "font-semibold text-lg PolySansNeutral text-white" }, "Approved")
                          ])
                        ]);
                      }), 128)),
                      createVNode("div", { class: "w-1px absolute top-4% right-16 bottom-0 bg-white flex items-end justify-center" }, [
                        createVNode("span", { class: "text-white absolute -bottom-2" }, [
                          createVNode(_component_Icon, {
                            name: "radix-icons:triangle-down",
                            size: "18"
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "pl-19 pr-20 mt-3 flex items-center justify-between" }, [
                      createVNode("div", { class: "w-fit px-8 py-4 flex items-center justify-center bg-#ffffff" }, [
                        createVNode("span", { class: "font-semibold text-lg PolySansNeutral text-black" }, [
                          createTextVNode(" Confirming Production & "),
                          createVNode("br"),
                          createTextVNode(" Financing Details ")
                        ])
                      ]),
                      createVNode("div", { class: "font-semibold text-lg PolySansNeutral text-#ffffff" }, [
                        createTextVNode(" Feedback and Notes wil"),
                        createVNode("br"),
                        createTextVNode(" be directly provided ")
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-5bca0591><p class="font-normal text-sm PolySansNeutral uppercase mb-8" data-v-5bca0591>Initial aPPLICATION</p><div class="space-y-8 min-w-120 overflow-hidden" data-v-5bca0591><!--[-->`);
      ssrRenderList(unref(dataInfo), (item, index) => {
        _push(`<ul class="flex justify-between border border-#747474 py-8 px-6" data-v-5bca0591><li class="flex flex-col space-y-8" data-v-5bca0591><span class="font-normal text-sm PolySansNeutral uppercase" data-v-5bca0591>TYPE</span><span class="font-light text-lg PolySansNeutral" data-v-5bca0591>${ssrInterpolate(item.type)}</span></li><li class="flex flex-col space-y-8" data-v-5bca0591><span class="font-normal text-sm PolySansNeutral uppercase" data-v-5bca0591>Case Number</span><span class="font-light text-lg PolySansNeutral underline underline-offset-2 cursor-pointer" data-v-5bca0591>${ssrInterpolate(item.num)}</span></li><li class="flex flex-col space-y-8" data-v-5bca0591><span class="font-normal text-sm PolySansNeutral uppercase" data-v-5bca0591>date</span><span class="font-light text-lg PolySansNeutral" data-v-5bca0591>${ssrInterpolate(item.create_at)}</span></li><li class="flex flex-col space-y-8" data-v-5bca0591><span class="font-normal text-sm PolySansNeutral uppercase" data-v-5bca0591>Status</span><div class="font-light text-lg PolySansNeutral flex flex-col" data-v-5bca0591>`);
        if (item.status !== "3") {
          _push(`<span class="text-#ffffff" data-v-5bca0591>${ssrInterpolate(unref(statusReplace)(item.status))}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (item.status === "3") {
          _push(`<span class="text-#ffffff underline underline-offset-2 cursor-pointer" data-v-5bca0591>${ssrInterpolate(unref(statusReplace)(item.status))}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (Number(item.status) === 0) {
          _push(`<span class="text-#ffffff underline underline-offset-2 cursor-pointer" data-v-5bca0591>Cancel</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></li></ul>`);
      });
      _push(`<!--]--></div></div></div></div>`);
      _push(ssrRenderComponent(_component_FeedbackModal, {
        "model-value": unref(drawerShow)("Cancellation")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FeedbackModalUserCancellation, {
              "onUpdate:modelValue": drawerClose,
              onSubmitBtb: cancelProposal
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FeedbackModalUserCancellation, {
                "onUpdate:modelValue": drawerClose,
                onSubmitBtb: cancelProposal
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/proposal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const proposal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5bca0591"]]);

export { proposal as default };
