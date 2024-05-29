import { E as ElForm, a as ElFormItem } from './el-form-item-BSUvBimf.mjs';
import __nuxt_component_7 from './Icon-CaiLYYN4.mjs';
import { E as ElInput } from './el-input-D8gXC6Et.mjs';
import { _ as _sfc_main$1 } from './Index-CG_3-TXz.mjs';
import { _ as _sfc_main$2 } from './Index-DNxKYUQ5.mjs';
import { _ as _sfc_main$3 } from './ProposalSub-DYz9cbdO.mjs';
import { defineComponent, ref, reactive, watchEffect, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, isRef, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { d as userArtProposal } from './user-C3y1iIxD.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
    const attachment_files = ref([]);
    const drawerName = ref();
    const form = reactive({
      is_grant: "",
      project_name: "",
      type: "",
      nums: null,
      project_description: "",
      attachment_files: "",
      downloadable_link: "",
      operate_type: "",
      id: ""
    });
    const rules = reactive({
      project_name: [{ required: true, message: "Please enter the project name", trigger: "blur" }],
      type: [{ required: true, message: "Please enter the project type", trigger: "blur" }],
      nums: [{ required: true, message: "Please enter the totol number of items", trigger: "blur" }],
      project_description: [{ required: true, message: "Please enter the project description", trigger: "blur" }],
      attachment_files: [{ required: true, message: "lease upload the attachment", trigger: "blur" }]
    });
    watchEffect(() => {
      var _a;
      if (((_a = attachment_files.value) == null ? void 0 : _a.length) > 0) {
        form.attachment_files = attachment_files.value.map((v) => v.url).join(",");
        formRef.value.validateField("attachment_files", () => null);
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
      await userArtProposal({
        ...form,
        is_grant: form.is_grant ? "Yes" : "No",
        operate_type: form.id ? "edit" : "add"
      });
      const obj = { ...form };
      obj.attachment_files = attachment_files.value;
      drawerName.value = "ProposalSub";
      localStorage.setItem("artForm", JSON.stringify(obj));
    };
    const removeFile = (index) => {
      attachment_files.value.splice(index, 1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_Icon = __nuxt_component_7;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_ElementDragUpload = _sfc_main$1;
      const _component_FeedbackModal = _sfc_main$2;
      const _component_FeedbackModalUserProposalSub = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full space-y-16" }, _attrs))}><p class="font-medium text-5xl PPHattonMedium">Art Proposal</p>`);
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
            _push2(`<div class="flex items-center space-x-6"${_scopeId}><div class="${ssrRenderClass([unref(form).is_grant ? "bg-#715B00 " : "", "w-5 h-5 border-1 border-#F5F5F5 flex items-center justify-center cursor-pointer"])}"${_scopeId}>`);
            if (unref(form).is_grant) {
              _push2(ssrRenderComponent(_component_Icon, { name: "ep:check" }, null, _parent2, _scopeId));
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
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "",
              prop: "type"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full"${_scopeId2}>Project Type<span class="text-#ffffff ml-2"${_scopeId2}>*e.g. still images, GIFs, video, text, music\u2026</span></div>`);
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).type,
                    "onUpdate:modelValue": ($event) => unref(form).type = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "w-full" }, [
                      createTextVNode("Project Type"),
                      createVNode("span", { class: "text-#ffffff ml-2" }, "*e.g. still images, GIFs, video, text, music\u2026")
                    ]),
                    createVNode(_component_el_input, {
                      modelValue: unref(form).type,
                      "onUpdate:modelValue": ($event) => unref(form).type = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "Total Number of Items",
              prop: "nums"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).nums,
                    "onUpdate:modelValue": ($event) => unref(form).nums = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).nums,
                      "onUpdate:modelValue": ($event) => unref(form).nums = $event,
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "Project Description",
              prop: "project_description"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).project_description,
                    "onUpdate:modelValue": ($event) => unref(form).project_description = $event,
                    rows: 5,
                    type: "textarea"
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="font-light text-xs PolySansNeutral mt-2"${_scopeId2}>Keep it to 1-2 sentences</p>`);
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).project_description,
                      "onUpdate:modelValue": ($event) => unref(form).project_description = $event,
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
              label: "Attachment(s)",
              prop: "attachment_files"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(attachment_files), (item_attachment, index_attachment) => {
                    _push3(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"${_scopeId2}><span class="font-normal text-sm PolySansNeutral"${_scopeId2}>${ssrInterpolate(item_attachment.file_name)}</span><div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4"${_scopeId2}><span class="underline underline-offset-2 cursor-pointer"${_scopeId2}><a${ssrRenderAttr("href", item_attachment.fullurl)} target="_blank"${_scopeId2}>VIEW</a></span><span class="underline underline-offset-2 uppercase cursor-pointer"${_scopeId2}>Remove</span></div></div>`);
                  });
                  _push3(`<!--]--><div class="flex"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ElementDragUpload, {
                    modelValue: unref(attachment_files),
                    "onUpdate:modelValue": ($event) => isRef(attachment_files) ? attachment_files.value = $event : null
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
                    createVNode("div", { class: "space-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(attachment_files), (item_attachment, index_attachment) => {
                        return openBlock(), createBlock("div", {
                          key: index_attachment,
                          class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                        }, [
                          createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_attachment.file_name), 1),
                          createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                            createVNode("span", { class: "underline underline-offset-2 cursor-pointer" }, [
                              createVNode("a", {
                                href: item_attachment.fullurl,
                                target: "_blank"
                              }, "VIEW", 8, ["href"])
                            ]),
                            createVNode("span", {
                              class: "underline underline-offset-2 uppercase cursor-pointer",
                              onClick: ($event) => removeFile(index_attachment)
                            }, "Remove", 8, ["onClick"])
                          ])
                        ]);
                      }), 128)),
                      createVNode("div", { class: "flex" }, [
                        createVNode(_component_ElementDragUpload, {
                          modelValue: unref(attachment_files),
                          "onUpdate:modelValue": ($event) => isRef(attachment_files) ? attachment_files.value = $event : null
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
            _push2(ssrRenderComponent(_component_el_form_item, { label: "Downloadable Link to Your Project" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).downloadable_link,
                    "onUpdate:modelValue": ($event) => unref(form).downloadable_link = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).downloadable_link,
                      "onUpdate:modelValue": ($event) => unref(form).downloadable_link = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  class: ["w-5 h-5 border-1 border-#F5F5F5 flex items-center justify-center cursor-pointer", unref(form).is_grant ? "bg-#715B00 " : ""],
                  onClick: ($event) => unref(form).is_grant = !unref(form).is_grant
                }, [
                  unref(form).is_grant ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    name: "ep:check"
                  })) : createCommentVNode("", true)
                ], 10, ["onClick"]),
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
              createVNode(_component_el_form_item, {
                label: "",
                prop: "type"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-full" }, [
                    createTextVNode("Project Type"),
                    createVNode("span", { class: "text-#ffffff ml-2" }, "*e.g. still images, GIFs, video, text, music\u2026")
                  ]),
                  createVNode(_component_el_input, {
                    modelValue: unref(form).type,
                    "onUpdate:modelValue": ($event) => unref(form).type = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "Total Number of Items",
                prop: "nums"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(form).nums,
                    "onUpdate:modelValue": ($event) => unref(form).nums = $event,
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "Project Description",
                prop: "project_description"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(form).project_description,
                    "onUpdate:modelValue": ($event) => unref(form).project_description = $event,
                    rows: 5,
                    type: "textarea"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("p", { class: "font-light text-xs PolySansNeutral mt-2" }, "Keep it to 1-2 sentences")
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "Attachment(s)",
                prop: "attachment_files"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(attachment_files), (item_attachment, index_attachment) => {
                      return openBlock(), createBlock("div", {
                        key: index_attachment,
                        class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                      }, [
                        createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_attachment.file_name), 1),
                        createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                          createVNode("span", { class: "underline underline-offset-2 cursor-pointer" }, [
                            createVNode("a", {
                              href: item_attachment.fullurl,
                              target: "_blank"
                            }, "VIEW", 8, ["href"])
                          ]),
                          createVNode("span", {
                            class: "underline underline-offset-2 uppercase cursor-pointer",
                            onClick: ($event) => removeFile(index_attachment)
                          }, "Remove", 8, ["onClick"])
                        ])
                      ]);
                    }), 128)),
                    createVNode("div", { class: "flex" }, [
                      createVNode(_component_ElementDragUpload, {
                        modelValue: unref(attachment_files),
                        "onUpdate:modelValue": ($event) => isRef(attachment_files) ? attachment_files.value = $event : null
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
              createVNode(_component_el_form_item, { label: "Downloadable Link to Your Project" }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(form).downloadable_link,
                    "onUpdate:modelValue": ($event) => unref(form).downloadable_link = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              path: "/useProposal/art/preview",
              "onUpdate:modelValue": drawerClose
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FeedbackModalUserProposalSub, {
                path: "/useProposal/art/preview",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/useProposal/art/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
