import { E as ElForm, a as ElFormItem } from './el-form-item-BSUvBimf.mjs';
import __nuxt_component_7 from './Icon-CaiLYYN4.mjs';
import { E as ElInput } from './el-input-D8gXC6Et.mjs';
import { _ as _sfc_main$1 } from './Index-CG_3-TXz.mjs';
import { _ as _sfc_main$2 } from './Index-DNxKYUQ5.mjs';
import { _ as _sfc_main$3 } from './ProposalSub-DYz9cbdO.mjs';
import { defineComponent, ref, reactive, watchEffect, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, isRef, createCommentVNode, useSSRContext } from 'vue';
import { e as userFilmProposal } from './user-C3y1iIxD.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import './constants-DzvzFGCl.mjs';
import 'lodash-unified';
import './index-C8rz0VXy.mjs';
import '@vue/shared';
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
import 'pinia-plugin-persistedstate';
import 'gsap';
import 'video.js';
import './index-URjNNh32.mjs';
import 'async-validator';
import './request-CdKXnB25.mjs';
import './icon-CyxyPYk8.mjs';
import './aria-DJRDfGoO.mjs';
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './event-DSz0kuqc.mjs';
import './el-image-viewer-T405MOSo.mjs';
import './scroll-D2xEfal-.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref();
    const pitch_deck_file = ref([]);
    const script_file = ref([]);
    const financial_plan_file = ref([]);
    const drawerName = ref();
    const form = reactive({
      id: "",
      is_grant: false,
      project_name: "",
      genre: "",
      budget: "",
      synopsis: "",
      stage: "",
      ip: "",
      pitch_deck_file: "",
      script_file: "",
      financial_plan_file: "",
      operate_type: "",
      remark: ""
    });
    const stageOption = [
      { value: "Development", label: "Development" },
      { value: "Pre-production", label: "Pre-production" },
      { value: "Production", label: "Production" },
      { value: "Post-production", label: "Post-production" },
      { value: "Type Here ...", label: "Type Here .." }
    ];
    const buyoutTheIPOption = [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
      { value: "Will Consider", label: "Will Consider" },
      { value: "Post-production", label: "Post-production" },
      { value: "Other", label: "Other" }
    ];
    const rules = reactive({
      project_name: [{ required: true, message: "Please enter the project name", trigger: "blur" }],
      genre: [{ required: true, message: "Please enter the genre", trigger: "blur" }],
      budget: [{ required: true, message: "Please enter the budget", trigger: "blur" }],
      synopsis: [{ required: true, message: "Please enter the synopsis", trigger: "blur" }],
      stage: [{ required: true, message: "Please select the stage", trigger: "blur" }],
      ip: [{ required: true, message: "Please select the IP", trigger: "blur" }],
      pitch_deck_file: [{ required: true, message: "Please upload the pitch deck", trigger: "blur" }],
      script_file: [{ required: true, message: "Please upload the script/treatment", trigger: "blur" }],
      financial_plan_file: [{ required: true, message: "Please upload the financial plan", trigger: "blur" }]
    });
    watchEffect(() => {
      var _a, _b, _c;
      if (form.stage)
        formRef.value.validateField("stage", () => null);
      if (form.ip)
        formRef.value.validateField("ip", () => null);
      if (((_a = pitch_deck_file.value) == null ? void 0 : _a.length) > 0) {
        form.pitch_deck_file = pitch_deck_file.value.map((v) => v.url).join(",");
        formRef.value.validateField("pitch_deck_file", () => null);
      }
      if (((_b = script_file.value) == null ? void 0 : _b.length) > 0) {
        form.script_file = script_file.value.map((v) => v.url).join(",");
        formRef.value.validateField("script_file", () => null);
      }
      if (((_c = financial_plan_file.value) == null ? void 0 : _c.length) > 0) {
        form.financial_plan_file = financial_plan_file.value.map((v) => v.url).join(",");
        formRef.value.validateField("financial_plan_file", () => null);
      }
    });
    const drawerShow = computed(() => (name) => name === drawerName.value ? true : false);
    const drawerClose = (value) => {
      if (!value)
        drawerName.value = "";
    };
    const submitForm = async (formEl) => {
      if (!formEl)
        return;
      await formEl.validate();
      await userFilmProposal({ ...form, is_grant: form.is_grant ? "yes" : "no", operate_type: form.id ? "edit" : "add" });
      const obj = { ...form };
      obj.pitch_deck_file = pitch_deck_file.value;
      obj.script_file = script_file.value;
      obj.financial_plan_file = financial_plan_file.value;
      drawerName.value = "ProposalSub";
      localStorage.setItem("filmForm", JSON.stringify(obj));
    };
    const removeFile = (index, name) => {
      if (name === "pitch_deck_file")
        pitch_deck_file.value.splice(index, 1);
      if (name === "script_file")
        script_file.value.splice(index, 1);
      if (name === "financial_plan_file")
        financial_plan_file.value.splice(index, 1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_Icon = __nuxt_component_7;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_ElementDragUpload = _sfc_main$1;
      const _component_FeedbackModal = _sfc_main$2;
      const _component_FeedbackModalUserProposalSub = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full space-y-16" }, _attrs))}><p class="font-medium text-5xl PPHattonMedium">Film Proposal</p>`);
      _push(ssrRenderComponent(_component_el_form, {
        ref_key: "formRef",
        ref: formRef,
        rules: unref(rules),
        model: unref(form),
        "require-asterisk-position": "right",
        "label-position": "top",
        class: "space-y-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center space-x-6"${_scopeId}><div class="w-5 h-5 border-1 border-#F5F5F5 flex items-center justify-center cursor-pointer"${_scopeId}>`);
            if (unref(form).is_grant) {
              _push2(ssrRenderComponent(_component_Icon, {
                color: unref(form).is_grant ? "#FFFFFF" : "",
                name: "ep:check"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex-1 font-normal text-lg PolySansNeutral"${_scopeId}> I am submitting to<br${_scopeId}> Stars Collective Grants: Unleashing Action Storytellings </div></div>`);
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "Project Name",
              prop: "project_name"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).project_name,
                    "onUpdate:modelValue": ($event) => unref(form).project_name = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).project_name,
                      "onUpdate:modelValue": ($event) => unref(form).project_name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, { prop: "genre" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full"${_scopeId2}>Genre <span class="text-#ffffff ml-2"${_scopeId2}>* e.g. Thriller, video art, documentary\u2026</span></div>`);
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).genre,
                    "onUpdate:modelValue": ($event) => unref(form).genre = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "w-full" }, [
                      createTextVNode("Genre "),
                      createVNode("span", { class: "text-#ffffff ml-2" }, "* e.g. Thriller, video art, documentary\u2026")
                    ]),
                    createVNode(_component_el_input, {
                      modelValue: unref(form).genre,
                      "onUpdate:modelValue": ($event) => unref(form).genre = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "",
              prop: "budget"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full"${_scopeId2}>Budget <span class="text-#ffffff ml-2"${_scopeId2}>* US Dollar</span></div>`);
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).budget,
                    "onUpdate:modelValue": ($event) => unref(form).budget = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "w-full" }, [
                      createTextVNode("Budget "),
                      createVNode("span", { class: "text-#ffffff ml-2" }, "* US Dollar")
                    ]),
                    createVNode(_component_el_input, {
                      modelValue: unref(form).budget,
                      "onUpdate:modelValue": ($event) => unref(form).budget = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "Synopsis",
              prop: "synopsis"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).synopsis,
                    "onUpdate:modelValue": ($event) => unref(form).synopsis = $event,
                    rows: 5,
                    type: "textarea"
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="font-light text-xs PolySansNeutral mt-2"${_scopeId2}>Keep it to 1-2 sentences</p>`);
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).synopsis,
                      "onUpdate:modelValue": ($event) => unref(form).synopsis = $event,
                      rows: 5,
                      type: "textarea"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("p", { class: "font-light text-xs PolySansNeutral mt-2" }, "Keep it to 1-2 sentences")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "Stage",
              prop: "stage"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full mt-6"${_scopeId2}><!--[-->`);
                  ssrRenderList(stageOption, (item, index) => {
                    _push3(`<div class="w-full h-16 border-b border-#2A2A2A flex items-center px-8 space-x-4 cursor-pointer bg-#151515 hover:bg-#2F2F2F"${_scopeId2}><div class="${ssrRenderClass([unref(form).stage === item.value ? "border-#ffffff" : "border-#F5F5F5", "w-7 h-7 border-2 rounded-full flex items-center justify-center"])}"${_scopeId2}><div class="${ssrRenderClass([unref(form).stage === item.value ? "bg-#ffffff" : "", "w-4 h-4 rounded-full"])}"${_scopeId2}></div></div><div class="font-light text-lg PolySansNeutral"${_scopeId2}>${ssrInterpolate(item.label)}</div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full mt-6" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(stageOption, (item, index) => {
                        return createVNode("div", {
                          key: index,
                          class: "w-full h-16 border-b border-#2A2A2A flex items-center px-8 space-x-4 cursor-pointer bg-#151515 hover:bg-#2F2F2F",
                          onClick: ($event) => unref(form).stage = item.value
                        }, [
                          createVNode("div", {
                            class: ["w-7 h-7 border-2 rounded-full flex items-center justify-center", unref(form).stage === item.value ? "border-#ffffff" : "border-#F5F5F5"]
                          }, [
                            createVNode("div", {
                              class: ["w-4 h-4 rounded-full", unref(form).stage === item.value ? "bg-#ffffff" : ""]
                            }, null, 2)
                          ], 2),
                          createVNode("div", { class: "font-light text-lg PolySansNeutral" }, toDisplayString(item.label), 1)
                        ], 8, ["onClick"]);
                      }), 64))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "Are you willing to let Stars option or buyout the IP if Stars selected",
              prop: "ip"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full mt-6"${_scopeId2}><!--[-->`);
                  ssrRenderList(buyoutTheIPOption, (item, index) => {
                    _push3(`<div class="w-full h-16 border-b border-#2A2A2A flex items-center px-8 space-x-4 cursor-pointer bg-#151515 hover:bg-#2F2F2F"${_scopeId2}><div class="${ssrRenderClass([unref(form).ip === item.value ? "border-#ffffff" : "border-#F5F5F5", "w-7 h-7 border-2 rounded-full flex items-center justify-center"])}"${_scopeId2}><div class="${ssrRenderClass([unref(form).ip === item.value ? "bg-#ffffff" : "", "w-4 h-4 rounded-full"])}"${_scopeId2}></div></div><div class="font-light text-lg PolySansNeutral"${_scopeId2}>${ssrInterpolate(item.label)}</div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full mt-6" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(buyoutTheIPOption, (item, index) => {
                        return createVNode("div", {
                          key: index,
                          class: "w-full h-16 border-b border-#2A2A2A flex items-center px-8 space-x-4 cursor-pointer bg-#151515 hover:bg-#2F2F2F",
                          onClick: ($event) => unref(form).ip = item.value
                        }, [
                          createVNode("div", {
                            class: ["w-7 h-7 border-2 rounded-full flex items-center justify-center", unref(form).ip === item.value ? "border-#ffffff" : "border-#F5F5F5"]
                          }, [
                            createVNode("div", {
                              class: ["w-4 h-4 rounded-full", unref(form).ip === item.value ? "bg-#ffffff" : ""]
                            }, null, 2)
                          ], 2),
                          createVNode("div", { class: "font-light text-lg PolySansNeutral" }, toDisplayString(item.label), 1)
                        ], 8, ["onClick"]);
                      }), 64))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "",
              prop: "pitch_deck_file"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full"${_scopeId2}>Pitch Deck<span class="text-#ffffff ml-2"${_scopeId2}>* acceptable format\uFF1Apdf </span></div><div class="space-y-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(pitch_deck_file), (item_pitch, index_pitch) => {
                    _push3(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"${_scopeId2}><span class="font-normal text-sm PolySansNeutral"${_scopeId2}>${ssrInterpolate(item_pitch.file_name)}</span><div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4"${_scopeId2}><span class="underline underline-offset-2 cursor-pointer"${_scopeId2}><a${ssrRenderAttr("href", item_pitch.fullurl)} target="_blank"${_scopeId2}>VIEW</a></span><span class="underline underline-offset-2 uppercase cursor-pointer"${_scopeId2}>Remove</span></div></div>`);
                  });
                  _push3(`<!--]--><div class="flex"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ElementDragUpload, {
                    modelValue: unref(pitch_deck_file),
                    "onUpdate:modelValue": ($event) => isRef(pitch_deck_file) ? pitch_deck_file.value = $event : null,
                    accept: "application/pdf"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer"${_scopeId3}><span class="font-normal text-sm PolySansNeutral uppercase"${_scopeId3}>ATTACH FILES</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                            createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "ATTACH FILES")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full" }, [
                      createTextVNode("Pitch Deck"),
                      createVNode("span", { class: "text-#ffffff ml-2" }, "* acceptable format\uFF1Apdf ")
                    ]),
                    createVNode("div", { class: "space-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(pitch_deck_file), (item_pitch, index_pitch) => {
                        return openBlock(), createBlock("div", {
                          key: index_pitch,
                          class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                        }, [
                          createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_pitch.file_name), 1),
                          createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                            createVNode("span", { class: "underline underline-offset-2 cursor-pointer" }, [
                              createVNode("a", {
                                href: item_pitch.fullurl,
                                target: "_blank"
                              }, "VIEW", 8, ["href"])
                            ]),
                            createVNode("span", {
                              class: "underline underline-offset-2 uppercase cursor-pointer",
                              onClick: ($event) => removeFile(index_pitch, "pitch_deck_file")
                            }, "Remove", 8, ["onClick"])
                          ])
                        ]);
                      }), 128)),
                      createVNode("div", { class: "flex" }, [
                        createVNode(_component_ElementDragUpload, {
                          modelValue: unref(pitch_deck_file),
                          "onUpdate:modelValue": ($event) => isRef(pitch_deck_file) ? pitch_deck_file.value = $event : null,
                          accept: "application/pdf"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                              createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "ATTACH FILES")
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "",
              prop: "script_file"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full"${_scopeId2}>Script/Treatment<span class="text-#ffffff ml-2"${_scopeId2}>* acceptable format\uFF1Apdf</span></div><div class="space-y-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(script_file), (item_script, index_script) => {
                    _push3(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"${_scopeId2}><span class="font-normal text-sm PolySansNeutral"${_scopeId2}>${ssrInterpolate(item_script.file_name)}</span><div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4"${_scopeId2}><span class="underline underline-offset-2 cursor-pointer"${_scopeId2}><a${ssrRenderAttr("href", item_script.fullurl)} target="_blank"${_scopeId2}>VIEW</a></span><span class="underline underline-offset-2 uppercase cursor-pointer"${_scopeId2}>Remove</span></div></div>`);
                  });
                  _push3(`<!--]--><div class="flex"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ElementDragUpload, {
                    modelValue: unref(script_file),
                    "onUpdate:modelValue": ($event) => isRef(script_file) ? script_file.value = $event : null,
                    accept: "application/pdf"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer"${_scopeId3}><span class="font-normal text-sm PolySansNeutral uppercase"${_scopeId3}>ATTACH FILES</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                            createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "ATTACH FILES")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full" }, [
                      createTextVNode("Script/Treatment"),
                      createVNode("span", { class: "text-#ffffff ml-2" }, "* acceptable format\uFF1Apdf")
                    ]),
                    createVNode("div", { class: "space-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(script_file), (item_script, index_script) => {
                        return openBlock(), createBlock("div", {
                          key: index_script,
                          class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                        }, [
                          createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_script.file_name), 1),
                          createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                            createVNode("span", { class: "underline underline-offset-2 cursor-pointer" }, [
                              createVNode("a", {
                                href: item_script.fullurl,
                                target: "_blank"
                              }, "VIEW", 8, ["href"])
                            ]),
                            createVNode("span", {
                              class: "underline underline-offset-2 uppercase cursor-pointer",
                              onClick: ($event) => removeFile(index_script, "script_file")
                            }, "Remove", 8, ["onClick"])
                          ])
                        ]);
                      }), 128)),
                      createVNode("div", { class: "flex" }, [
                        createVNode(_component_ElementDragUpload, {
                          modelValue: unref(script_file),
                          "onUpdate:modelValue": ($event) => isRef(script_file) ? script_file.value = $event : null,
                          accept: "application/pdf"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                              createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "ATTACH FILES")
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "",
              prop: "financial_plan_file"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full"${_scopeId2}>Financial Plan<span class="text-#ffffff ml-2"${_scopeId2}>* acceptable format\uFF1Apdf</span></div><div class="space-y-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(financial_plan_file), (item_financial, index_financial) => {
                    _push3(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"${_scopeId2}><span class="font-normal text-sm PolySansNeutral"${_scopeId2}>${ssrInterpolate(item_financial.file_name)}</span><div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4"${_scopeId2}><span class="underline underline-offset-2 uppercase cursor-pointer"${_scopeId2}><a${ssrRenderAttr("href", item_financial.fullurl)} target="_blank"${_scopeId2}>VIEW</a></span><span class="underline underline-offset-2 uppercase cursor-pointer"${_scopeId2}>Remove</span></div></div>`);
                  });
                  _push3(`<!--]--><div class="flex"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ElementDragUpload, {
                    modelValue: unref(financial_plan_file),
                    "onUpdate:modelValue": ($event) => isRef(financial_plan_file) ? financial_plan_file.value = $event : null,
                    accept: "application/pdf"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer"${_scopeId3}><span class="font-normal text-sm PolySansNeutral uppercase"${_scopeId3}>ATTACH FILES</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                            createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "ATTACH FILES")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full" }, [
                      createTextVNode("Financial Plan"),
                      createVNode("span", { class: "text-#ffffff ml-2" }, "* acceptable format\uFF1Apdf")
                    ]),
                    createVNode("div", { class: "space-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(financial_plan_file), (item_financial, index_financial) => {
                        return openBlock(), createBlock("div", {
                          key: index_financial,
                          class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                        }, [
                          createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_financial.file_name), 1),
                          createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                            createVNode("span", { class: "underline underline-offset-2 uppercase cursor-pointer" }, [
                              createVNode("a", {
                                href: item_financial.fullurl,
                                target: "_blank"
                              }, "VIEW", 8, ["href"])
                            ]),
                            createVNode("span", {
                              class: "underline underline-offset-2 uppercase cursor-pointer",
                              onClick: ($event) => removeFile(index_financial, "financialPlan")
                            }, "Remove", 8, ["onClick"])
                          ])
                        ]);
                      }), 128)),
                      createVNode("div", { class: "flex" }, [
                        createVNode(_component_ElementDragUpload, {
                          modelValue: unref(financial_plan_file),
                          "onUpdate:modelValue": ($event) => isRef(financial_plan_file) ? financial_plan_file.value = $event : null,
                          accept: "application/pdf"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                              createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "ATTACH FILES")
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="space-y-4"${_scopeId}><div class="btn gradient-btn mt-10"${_scopeId}><div${_scopeId}>Submit Proposal</div></div><p${_scopeId}>* no more than 3 proposals in 30 days</p></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center space-x-6" }, [
                createVNode("div", {
                  class: "w-5 h-5 border-1 border-#F5F5F5 flex items-center justify-center cursor-pointer",
                  onClick: ($event) => unref(form).is_grant = !unref(form).is_grant
                }, [
                  unref(form).is_grant ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    color: unref(form).is_grant ? "#FFFFFF" : "",
                    name: "ep:check"
                  }, null, 8, ["color"])) : createCommentVNode("", true)
                ], 8, ["onClick"]),
                createVNode("div", { class: "flex-1 font-normal text-lg PolySansNeutral" }, [
                  createTextVNode(" I am submitting to"),
                  createVNode("br"),
                  createTextVNode(" Stars Collective Grants: Unleashing Action Storytellings ")
                ])
              ]),
              createVNode(_component_el_form_item, {
                label: "Project Name",
                prop: "project_name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(form).project_name,
                    "onUpdate:modelValue": ($event) => unref(form).project_name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, { prop: "genre" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-full" }, [
                    createTextVNode("Genre "),
                    createVNode("span", { class: "text-#ffffff ml-2" }, "* e.g. Thriller, video art, documentary\u2026")
                  ]),
                  createVNode(_component_el_input, {
                    modelValue: unref(form).genre,
                    "onUpdate:modelValue": ($event) => unref(form).genre = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "",
                prop: "budget"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-full" }, [
                    createTextVNode("Budget "),
                    createVNode("span", { class: "text-#ffffff ml-2" }, "* US Dollar")
                  ]),
                  createVNode(_component_el_input, {
                    modelValue: unref(form).budget,
                    "onUpdate:modelValue": ($event) => unref(form).budget = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "Synopsis",
                prop: "synopsis"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(form).synopsis,
                    "onUpdate:modelValue": ($event) => unref(form).synopsis = $event,
                    rows: 5,
                    type: "textarea"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("p", { class: "font-light text-xs PolySansNeutral mt-2" }, "Keep it to 1-2 sentences")
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "Stage",
                prop: "stage"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-full mt-6" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(stageOption, (item, index) => {
                      return createVNode("div", {
                        key: index,
                        class: "w-full h-16 border-b border-#2A2A2A flex items-center px-8 space-x-4 cursor-pointer bg-#151515 hover:bg-#2F2F2F",
                        onClick: ($event) => unref(form).stage = item.value
                      }, [
                        createVNode("div", {
                          class: ["w-7 h-7 border-2 rounded-full flex items-center justify-center", unref(form).stage === item.value ? "border-#ffffff" : "border-#F5F5F5"]
                        }, [
                          createVNode("div", {
                            class: ["w-4 h-4 rounded-full", unref(form).stage === item.value ? "bg-#ffffff" : ""]
                          }, null, 2)
                        ], 2),
                        createVNode("div", { class: "font-light text-lg PolySansNeutral" }, toDisplayString(item.label), 1)
                      ], 8, ["onClick"]);
                    }), 64))
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "Are you willing to let Stars option or buyout the IP if Stars selected",
                prop: "ip"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-full mt-6" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(buyoutTheIPOption, (item, index) => {
                      return createVNode("div", {
                        key: index,
                        class: "w-full h-16 border-b border-#2A2A2A flex items-center px-8 space-x-4 cursor-pointer bg-#151515 hover:bg-#2F2F2F",
                        onClick: ($event) => unref(form).ip = item.value
                      }, [
                        createVNode("div", {
                          class: ["w-7 h-7 border-2 rounded-full flex items-center justify-center", unref(form).ip === item.value ? "border-#ffffff" : "border-#F5F5F5"]
                        }, [
                          createVNode("div", {
                            class: ["w-4 h-4 rounded-full", unref(form).ip === item.value ? "bg-#ffffff" : ""]
                          }, null, 2)
                        ], 2),
                        createVNode("div", { class: "font-light text-lg PolySansNeutral" }, toDisplayString(item.label), 1)
                      ], 8, ["onClick"]);
                    }), 64))
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "",
                prop: "pitch_deck_file"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-full" }, [
                    createTextVNode("Pitch Deck"),
                    createVNode("span", { class: "text-#ffffff ml-2" }, "* acceptable format\uFF1Apdf ")
                  ]),
                  createVNode("div", { class: "space-y-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(pitch_deck_file), (item_pitch, index_pitch) => {
                      return openBlock(), createBlock("div", {
                        key: index_pitch,
                        class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                      }, [
                        createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_pitch.file_name), 1),
                        createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                          createVNode("span", { class: "underline underline-offset-2 cursor-pointer" }, [
                            createVNode("a", {
                              href: item_pitch.fullurl,
                              target: "_blank"
                            }, "VIEW", 8, ["href"])
                          ]),
                          createVNode("span", {
                            class: "underline underline-offset-2 uppercase cursor-pointer",
                            onClick: ($event) => removeFile(index_pitch, "pitch_deck_file")
                          }, "Remove", 8, ["onClick"])
                        ])
                      ]);
                    }), 128)),
                    createVNode("div", { class: "flex" }, [
                      createVNode(_component_ElementDragUpload, {
                        modelValue: unref(pitch_deck_file),
                        "onUpdate:modelValue": ($event) => isRef(pitch_deck_file) ? pitch_deck_file.value = $event : null,
                        accept: "application/pdf"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                            createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "ATTACH FILES")
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "",
                prop: "script_file"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-full" }, [
                    createTextVNode("Script/Treatment"),
                    createVNode("span", { class: "text-#ffffff ml-2" }, "* acceptable format\uFF1Apdf")
                  ]),
                  createVNode("div", { class: "space-y-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(script_file), (item_script, index_script) => {
                      return openBlock(), createBlock("div", {
                        key: index_script,
                        class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                      }, [
                        createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_script.file_name), 1),
                        createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                          createVNode("span", { class: "underline underline-offset-2 cursor-pointer" }, [
                            createVNode("a", {
                              href: item_script.fullurl,
                              target: "_blank"
                            }, "VIEW", 8, ["href"])
                          ]),
                          createVNode("span", {
                            class: "underline underline-offset-2 uppercase cursor-pointer",
                            onClick: ($event) => removeFile(index_script, "script_file")
                          }, "Remove", 8, ["onClick"])
                        ])
                      ]);
                    }), 128)),
                    createVNode("div", { class: "flex" }, [
                      createVNode(_component_ElementDragUpload, {
                        modelValue: unref(script_file),
                        "onUpdate:modelValue": ($event) => isRef(script_file) ? script_file.value = $event : null,
                        accept: "application/pdf"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                            createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "ATTACH FILES")
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "",
                prop: "financial_plan_file"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-full" }, [
                    createTextVNode("Financial Plan"),
                    createVNode("span", { class: "text-#ffffff ml-2" }, "* acceptable format\uFF1Apdf")
                  ]),
                  createVNode("div", { class: "space-y-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(financial_plan_file), (item_financial, index_financial) => {
                      return openBlock(), createBlock("div", {
                        key: index_financial,
                        class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                      }, [
                        createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_financial.file_name), 1),
                        createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                          createVNode("span", { class: "underline underline-offset-2 uppercase cursor-pointer" }, [
                            createVNode("a", {
                              href: item_financial.fullurl,
                              target: "_blank"
                            }, "VIEW", 8, ["href"])
                          ]),
                          createVNode("span", {
                            class: "underline underline-offset-2 uppercase cursor-pointer",
                            onClick: ($event) => removeFile(index_financial, "financialPlan")
                          }, "Remove", 8, ["onClick"])
                        ])
                      ]);
                    }), 128)),
                    createVNode("div", { class: "flex" }, [
                      createVNode(_component_ElementDragUpload, {
                        modelValue: unref(financial_plan_file),
                        "onUpdate:modelValue": ($event) => isRef(financial_plan_file) ? financial_plan_file.value = $event : null,
                        accept: "application/pdf"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                            createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "ATTACH FILES")
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", {
                  class: "btn gradient-btn mt-10",
                  onClick: ($event) => submitForm(unref(formRef))
                }, [
                  createVNode("div", null, "Submit Proposal")
                ], 8, ["onClick"]),
                createVNode("p", null, "* no more than 3 proposals in 30 days")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FeedbackModal, {
        "model-value": unref(drawerShow)("ProposalSub")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FeedbackModalUserProposalSub, {
              path: "/useProposal/film/preview",
              "onUpdate:modelValue": drawerClose
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FeedbackModalUserProposalSub, {
                path: "/useProposal/film/preview",
                "onUpdate:modelValue": drawerClose
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/useProposal/film/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
