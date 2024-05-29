import { n as navigateTo, _ as __nuxt_component_0, I as __nuxt_component_2$1 } from './server.mjs';
import { E as ElForm, a as ElFormItem } from './el-form-item-BSUvBimf.mjs';
import { E as ElInput } from './el-input-D8gXC6Et.mjs';
import { _ as _sfc_main$1 } from './Index-CG_3-TXz.mjs';
import { E as ElSelect, a as ElOption } from './el-select-CvgBycaN.mjs';
import __nuxt_component_7 from './Icon-CaiLYYN4.mjs';
import { _ as _sfc_main$2 } from './Index-DNxKYUQ5.mjs';
import { _ as _sfc_main$3 } from './OkBox-Dvtj49Wo.mjs';
import { defineComponent, ref, computed, reactive, watchEffect, withCtx, unref, createVNode, isRef, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { u as useEmail } from './validation-_t0_XXG1.mjs';
import { V as VerifyFrom } from './element-C4bbgO4J.mjs';
import { u as useResFetch } from './request-CdKXnB25.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
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
import './constants-DzvzFGCl.mjs';
import './index-C8rz0VXy.mjs';
import './index-URjNNh32.mjs';
import 'async-validator';
import './icon-CyxyPYk8.mjs';
import './event-DSz0kuqc.mjs';
import './el-image-viewer-T405MOSo.mjs';
import './scroll-D2xEfal-.mjs';
import './el-popper-_1GucfBz.mjs';
import '@popperjs/core';
import './aria-DJRDfGoO.mjs';
import './focus-trap-C1bYFxM-.mjs';
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const apiuserapply = async (data) => {
  return useResFetch("/api/user/apply", { method: "POST", body: { ...data }, isToken: false });
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "applicaiton",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref();
    const drawerName = ref();
    const okBoxPrompt = ref({
      title: "Success!",
      describe: ""
    });
    const drawerShow = computed(() => (name) => name === drawerName.value ? true : false);
    const drawerClose = (value) => {
      if (!value)
        drawerName.value = "";
    };
    const profile_avatar = ref([]);
    const resume_files = ref([]);
    const form = reactive({
      email: "",
      first_name: "",
      last_name: "",
      type: [],
      profile_avatar: "",
      category: "",
      area: "",
      website: "",
      introduce: "",
      resume_files: "",
      social_media: "",
      social_media_url: ""
    });
    const validateEmail = (rule, value, callback) => {
      if (!useEmail(value)) {
        callback(new Error("Please enter a valid email address."));
      } else
        return true;
    };
    const rules = reactive({
      email: [
        { required: true, message: "Please enter the primary email", trigger: "blur" },
        { validator: validateEmail, trigger: "blur" }
      ],
      first_name: [{ required: true, message: "Please enter the first name", trigger: "blur" }],
      last_name: [{ required: true, message: "Please enter the last name", trigger: "blur" }],
      type: [{ required: true, message: "Please select the type", trigger: "change" }],
      introduce: [{ required: true, message: "Please enter the introduce", trigger: "blur" }],
      resume_files: [{ required: true, message: "Please upload the resume", trigger: "blur" }],
      profile_avatar: [{ required: true, message: "Please upload the portfolio picture", trigger: "blur" }],
      category: [{ required: true, message: "Please enter the category", trigger: "blur" }],
      website: [{ required: true, message: "Please enter the personal website", trigger: "blur" }],
      area: [{ required: true, message: "Please select the located", trigger: "change" }]
    });
    const typeOption = [
      {
        value: "Filmmaker",
        label: "Filmmaker"
      },
      {
        value: "Artist (Hover state)",
        label: "Artist (Hover state)"
      }
    ];
    const socialMediaOption = [
      {
        value: "Vimeo",
        label: "Vimeo"
      }
    ];
    const areaOption = [
      {
        value: "North America",
        label: "North America"
      },
      {
        value: "South America",
        label: "South America"
      },
      {
        value: "Europe",
        label: "Europe"
      },
      {
        value: "Asia Pacific",
        label: "Asia Pacific"
      },
      {
        value: "Africa",
        label: "Africa"
      }
    ];
    watchEffect(() => {
      var _a, _b;
      if (((_a = resume_files.value) == null ? void 0 : _a.length) > 0) {
        form.resume_files = resume_files.value.map((v) => v.url).join(",");
        formRef.value.validateField("resume_files", () => null);
      }
      if (((_b = profile_avatar.value) == null ? void 0 : _b.length) > 0) {
        form.profile_avatar = profile_avatar.value.map((v) => v.url).join(",");
        formRef.value.validateField("profile_avatar", () => null);
      }
    });
    const submitForm = async (formEl) => {
      if (!formEl)
        return;
      await VerifyFrom(formEl);
      const param = JSON.parse(JSON.stringify(form));
      param.type = param.type.join(",");
      const res = await apiuserapply(param);
      okBoxPrompt.value.describe = res.msg;
      drawerName.value = "OkBox";
    };
    const removeFile = (index, name) => {
      if (name === "profile_avatar")
        profile_avatar.value.splice(index, 1);
      if (name === "resume_files")
        resume_files.value.splice(index, 1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_ElementDragUpload = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_2$1;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_Icon = __nuxt_component_7;
      const _component_FeedbackModal = _sfc_main$2;
      const _component_FeedbackModalUserOkBox = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative"${_scopeId}><div class="w-210 bg-black absolute top-47 left-1/2 -translate-x-1/2 p-16 space-y-16 z-20"${_scopeId}><p class="font-normal text-5xl PPHattonMedium"${_scopeId}>Application Starts Here</p><div class="font-light text-lg PolySansNeutral break-words"${_scopeId}> Thank you for applying!<br${_scopeId}> We appreciate your interest in StarsCollective. Please take your time to fill out the<br${_scopeId}> form below. This will help us get to know you. </div>`);
            _push2(ssrRenderComponent(_component_el_form, {
              ref_key: "formRef",
              ref: formRef,
              rules: unref(rules),
              model: unref(form),
              "require-asterisk-position": "right",
              "label-position": "top",
              class: "space-y-8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-between space-x-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "First Name",
                    prop: "first_name",
                    class: "flex-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(form).first_name,
                          "onUpdate:modelValue": ($event) => unref(form).first_name = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).first_name,
                            "onUpdate:modelValue": ($event) => unref(form).first_name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "Last Name",
                    prop: "last_name",
                    class: "flex-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(form).last_name,
                          "onUpdate:modelValue": ($event) => unref(form).last_name = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).last_name,
                            "onUpdate:modelValue": ($event) => unref(form).last_name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "Introduce Yourself",
                    prop: "introduce"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(form).introduce,
                          "onUpdate:modelValue": ($event) => unref(form).introduce = $event,
                          rows: 5,
                          type: "textarea"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).introduce,
                            "onUpdate:modelValue": ($event) => unref(form).introduce = $event,
                            rows: 5,
                            type: "textarea"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { prop: "resume_files" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-full"${_scopeId3}>Portfolio / Resume <span class="text-#ffffff ml-2"${_scopeId3}>* acceptable format\uFF1Apdf</span></div><div class="space-y-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(resume_files), (item_resume, index_resume) => {
                          _push4(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"${_scopeId3}><span class="font-normal text-sm PolySansNeutral"${_scopeId3}>${ssrInterpolate(item_resume.file_name)}</span><div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4"${_scopeId3}><span class="underline underline-offset-2 cursor-pointer"${_scopeId3}><a${ssrRenderAttr("href", item_resume.fullurl)} target="_blank"${_scopeId3}>VIEW</a></span><span class="underline underline-offset-2 uppercase cursor-pointer"${_scopeId3}>Remove</span></div></div>`);
                        });
                        _push4(`<!--]--><div class="flex"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ElementDragUpload, {
                          "model-value": unref(resume_files),
                          "onUpdate:modelValue": ($event) => isRef(resume_files) ? resume_files.value = $event : null
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer"${_scopeId4}><span class="font-normal text-sm PolySansNeutral"${_scopeId4}>ATTACH FILES</span></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                                  createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, "ATTACH FILES")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "w-full" }, [
                            createTextVNode("Portfolio / Resume "),
                            createVNode("span", { class: "text-#ffffff ml-2" }, "* acceptable format\uFF1Apdf")
                          ]),
                          createVNode("div", { class: "space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(resume_files), (item_resume, index_resume) => {
                              return openBlock(), createBlock("div", {
                                key: index_resume,
                                class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                              }, [
                                createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_resume.file_name), 1),
                                createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                                  createVNode("span", { class: "underline underline-offset-2 cursor-pointer" }, [
                                    createVNode("a", {
                                      href: item_resume.fullurl,
                                      target: "_blank"
                                    }, "VIEW", 8, ["href"])
                                  ]),
                                  createVNode("span", {
                                    class: "underline underline-offset-2 uppercase cursor-pointer",
                                    onClick: ($event) => removeFile(index_resume, "resume_files")
                                  }, "Remove", 8, ["onClick"])
                                ])
                              ]);
                            }), 128)),
                            createVNode("div", { class: "flex" }, [
                              createVNode(_component_ElementDragUpload, {
                                "model-value": unref(resume_files),
                                "onUpdate:modelValue": ($event) => isRef(resume_files) ? resume_files.value = $event : null
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                                    createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, "ATTACH FILES")
                                  ])
                                ]),
                                _: 1
                              }, 8, ["model-value", "onUpdate:modelValue"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    prop: "profile_avatar",
                    label: "Profile Picture"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(profile_avatar), (item_profile, index_profile) => {
                          _push4(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"${_scopeId3}><span class="font-normal text-sm PolySansNeutral"${_scopeId3}>${ssrInterpolate(item_profile.file_name)}</span><div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4"${_scopeId3}><span class="underline underline-offset-2 cursor-pointer"${_scopeId3}><a${ssrRenderAttr("href", item_profile.fullurl)} target="_blank"${_scopeId3}>VIEW</a></span><span class="underline underline-offset-2 uppercase cursor-pointer"${_scopeId3}>Remove</span></div></div>`);
                        });
                        _push4(`<!--]--><div class="flex"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ElementDragUpload, {
                          "model-value": unref(profile_avatar),
                          "onUpdate:modelValue": ($event) => isRef(profile_avatar) ? profile_avatar.value = $event : null,
                          limit: 1,
                          accept: "image/jpg,image/png,image/jpeg,image/gif,image/webp"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer"${_scopeId4}><span class="font-normal text-sm PolySansNeutral uppercase"${_scopeId4}>Select file</span></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                                  createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "Select file")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(profile_avatar), (item_profile, index_profile) => {
                              return openBlock(), createBlock("div", {
                                key: index_profile,
                                class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                              }, [
                                createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_profile.file_name), 1),
                                createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                                  createVNode("span", { class: "underline underline-offset-2 cursor-pointer" }, [
                                    createVNode("a", {
                                      href: item_profile.fullurl,
                                      target: "_blank"
                                    }, "VIEW", 8, ["href"])
                                  ]),
                                  createVNode("span", {
                                    class: "underline underline-offset-2 uppercase cursor-pointer",
                                    onClick: ($event) => removeFile(index_profile, "profile_avatar")
                                  }, "Remove", 8, ["onClick"])
                                ])
                              ]);
                            }), 128)),
                            createVNode("div", { class: "flex" }, [
                              createVNode(_component_ElementDragUpload, {
                                "model-value": unref(profile_avatar),
                                "onUpdate:modelValue": ($event) => isRef(profile_avatar) ? profile_avatar.value = $event : null,
                                limit: 1,
                                accept: "image/jpg,image/png,image/jpeg,image/gif,image/webp"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                                    createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "Select file")
                                  ])
                                ]),
                                _: 1
                              }, 8, ["model-value", "onUpdate:modelValue"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "Type",
                    prop: "type"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ClientOnly, null, {}, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_select, {
                                modelValue: unref(form).type,
                                "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                placeholder: "",
                                multiple: "",
                                class: "w-full"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(typeOption, (item_typeOption) => {
                                    return createVNode(_component_el_option, {
                                      key: item_typeOption.value,
                                      label: item_typeOption.label,
                                      value: item_typeOption.value,
                                      class: "w-full"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "h-15 flex justify-between items-center" }, [
                                          createVNode("span", { class: "text-#F5F5F5" }, toDisplayString(item_typeOption.label), 1),
                                          createVNode("div", {
                                            class: ["w-5 h-5 border-1 border-#F5F5F5 text-#F5F5F5 flex items-center justify-center cursor-pointer", unref(form).type.includes(item_typeOption.value) ? "bg-#715B00 " : ""]
                                          }, [
                                            unref(form).type.includes(item_typeOption.value) ? (openBlock(), createBlock(_component_Icon, {
                                              key: 0,
                                              name: "ep:check"
                                            })) : createCommentVNode("", true)
                                          ], 2)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["label", "value"]);
                                  }), 64))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { prop: "category" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-full"${_scopeId3}>Category <span class="text-#ffffff ml-2"${_scopeId3}>* e.g. director, producer, writer, musician, etc\u2026</span></div>`);
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(form).category,
                          "onUpdate:modelValue": ($event) => unref(form).category = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "w-full" }, [
                            createTextVNode("Category "),
                            createVNode("span", { class: "text-#ffffff ml-2" }, "* e.g. director, producer, writer, musician, etc\u2026")
                          ]),
                          createVNode(_component_el_input, {
                            modelValue: unref(form).category,
                            "onUpdate:modelValue": ($event) => unref(form).category = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "Personal Website",
                    prop: "website"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(form).website,
                          "onUpdate:modelValue": ($event) => unref(form).website = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).website,
                            "onUpdate:modelValue": ($event) => unref(form).website = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "Social Media ",
                    prop: "social_media"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ClientOnly, null, {}, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_select, {
                                modelValue: unref(form).social_media,
                                "onUpdate:modelValue": ($event) => unref(form).social_media = $event,
                                placeholder: "",
                                class: "w-full"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(socialMediaOption, (item_socialMediaOption) => {
                                    return createVNode(_component_el_option, {
                                      key: item_socialMediaOption.value,
                                      label: item_socialMediaOption.label,
                                      value: item_socialMediaOption.value
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "h-15 flex items-center" }, [
                                          createVNode("span", { class: "text-#F5F5F5" }, toDisplayString(item_socialMediaOption.label), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["label", "value"]);
                                  }), 64))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "Social Media Link",
                    prop: "socialMediaLink"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(form).socialMediaLink,
                          "onUpdate:modelValue": ($event) => unref(form).socialMediaLink = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).socialMediaLink,
                            "onUpdate:modelValue": ($event) => unref(form).socialMediaLink = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "Where Are You Located?",
                    prop: "area"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ClientOnly, null, {}, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_select, {
                                modelValue: unref(form).area,
                                "onUpdate:modelValue": ($event) => unref(form).area = $event,
                                placeholder: "",
                                class: "w-full"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(areaOption, (item_areaOption) => {
                                    return createVNode(_component_el_option, {
                                      key: item_areaOption.value,
                                      label: item_areaOption.label,
                                      value: item_areaOption.value
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "h-15 flex items-center" }, [
                                          createVNode("span", { class: "text-#F5F5F5" }, toDisplayString(item_areaOption.label), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["label", "value"]);
                                  }), 64))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "Primary Email",
                    prop: "email"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex items-center space-x-6"${_scopeId2}><div class="${ssrRenderClass([unref(form).starsCollective ? "bg-#715B00 " : "", "w-5 h-5 border-1 border-#F5F5F5 flex items-center justify-center cursor-pointer"])}"${_scopeId2}>`);
                  if (unref(form).starsCollective) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ep:check",
                      class: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="font-normal text-lg PolySansNeutral"${_scopeId2}>I want to receive newsletters from StarsCollective.</div></div><div class="btn gradient-btn mt-16"${_scopeId2}><div${_scopeId2}>SUBMIT APPLICAITON</div></div><div class="font-normal text-3 text-#aeaeae"${_scopeId2}> By applying to be a Star, you agree to StarsCollective <span class="text-#ffffff cursor-pointer font-semibold"${_scopeId2}>Terms of Use </span>and our <span class="text-#ffffff cursor-pointer font-semibold"${_scopeId2}> Privacy Policy</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-between space-x-8" }, [
                      createVNode(_component_el_form_item, {
                        label: "First Name",
                        prop: "first_name",
                        class: "flex-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).first_name,
                            "onUpdate:modelValue": ($event) => unref(form).first_name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "Last Name",
                        prop: "last_name",
                        class: "flex-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).last_name,
                            "onUpdate:modelValue": ($event) => unref(form).last_name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_el_form_item, {
                      label: "Introduce Yourself",
                      prop: "introduce"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(form).introduce,
                          "onUpdate:modelValue": ($event) => unref(form).introduce = $event,
                          rows: 5,
                          type: "textarea"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { prop: "resume_files" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-full" }, [
                          createTextVNode("Portfolio / Resume "),
                          createVNode("span", { class: "text-#ffffff ml-2" }, "* acceptable format\uFF1Apdf")
                        ]),
                        createVNode("div", { class: "space-y-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(resume_files), (item_resume, index_resume) => {
                            return openBlock(), createBlock("div", {
                              key: index_resume,
                              class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                            }, [
                              createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_resume.file_name), 1),
                              createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                                createVNode("span", { class: "underline underline-offset-2 cursor-pointer" }, [
                                  createVNode("a", {
                                    href: item_resume.fullurl,
                                    target: "_blank"
                                  }, "VIEW", 8, ["href"])
                                ]),
                                createVNode("span", {
                                  class: "underline underline-offset-2 uppercase cursor-pointer",
                                  onClick: ($event) => removeFile(index_resume, "resume_files")
                                }, "Remove", 8, ["onClick"])
                              ])
                            ]);
                          }), 128)),
                          createVNode("div", { class: "flex" }, [
                            createVNode(_component_ElementDragUpload, {
                              "model-value": unref(resume_files),
                              "onUpdate:modelValue": ($event) => isRef(resume_files) ? resume_files.value = $event : null
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                                  createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, "ATTACH FILES")
                                ])
                              ]),
                              _: 1
                            }, 8, ["model-value", "onUpdate:modelValue"])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      prop: "profile_avatar",
                      label: "Profile Picture"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(profile_avatar), (item_profile, index_profile) => {
                            return openBlock(), createBlock("div", {
                              key: index_profile,
                              class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                            }, [
                              createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_profile.file_name), 1),
                              createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                                createVNode("span", { class: "underline underline-offset-2 cursor-pointer" }, [
                                  createVNode("a", {
                                    href: item_profile.fullurl,
                                    target: "_blank"
                                  }, "VIEW", 8, ["href"])
                                ]),
                                createVNode("span", {
                                  class: "underline underline-offset-2 uppercase cursor-pointer",
                                  onClick: ($event) => removeFile(index_profile, "profile_avatar")
                                }, "Remove", 8, ["onClick"])
                              ])
                            ]);
                          }), 128)),
                          createVNode("div", { class: "flex" }, [
                            createVNode(_component_ElementDragUpload, {
                              "model-value": unref(profile_avatar),
                              "onUpdate:modelValue": ($event) => isRef(profile_avatar) ? profile_avatar.value = $event : null,
                              limit: 1,
                              accept: "image/jpg,image/png,image/jpeg,image/gif,image/webp"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                                  createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "Select file")
                                ])
                              ]),
                              _: 1
                            }, 8, ["model-value", "onUpdate:modelValue"])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "Type",
                      prop: "type"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_select, {
                              modelValue: unref(form).type,
                              "onUpdate:modelValue": ($event) => unref(form).type = $event,
                              placeholder: "",
                              multiple: "",
                              class: "w-full"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(typeOption, (item_typeOption) => {
                                  return createVNode(_component_el_option, {
                                    key: item_typeOption.value,
                                    label: item_typeOption.label,
                                    value: item_typeOption.value,
                                    class: "w-full"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "h-15 flex justify-between items-center" }, [
                                        createVNode("span", { class: "text-#F5F5F5" }, toDisplayString(item_typeOption.label), 1),
                                        createVNode("div", {
                                          class: ["w-5 h-5 border-1 border-#F5F5F5 text-#F5F5F5 flex items-center justify-center cursor-pointer", unref(form).type.includes(item_typeOption.value) ? "bg-#715B00 " : ""]
                                        }, [
                                          unref(form).type.includes(item_typeOption.value) ? (openBlock(), createBlock(_component_Icon, {
                                            key: 0,
                                            name: "ep:check"
                                          })) : createCommentVNode("", true)
                                        ], 2)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["label", "value"]);
                                }), 64))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { prop: "category" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-full" }, [
                          createTextVNode("Category "),
                          createVNode("span", { class: "text-#ffffff ml-2" }, "* e.g. director, producer, writer, musician, etc\u2026")
                        ]),
                        createVNode(_component_el_input, {
                          modelValue: unref(form).category,
                          "onUpdate:modelValue": ($event) => unref(form).category = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "Personal Website",
                      prop: "website"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(form).website,
                          "onUpdate:modelValue": ($event) => unref(form).website = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "Social Media ",
                      prop: "social_media"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_select, {
                              modelValue: unref(form).social_media,
                              "onUpdate:modelValue": ($event) => unref(form).social_media = $event,
                              placeholder: "",
                              class: "w-full"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(socialMediaOption, (item_socialMediaOption) => {
                                  return createVNode(_component_el_option, {
                                    key: item_socialMediaOption.value,
                                    label: item_socialMediaOption.label,
                                    value: item_socialMediaOption.value
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "h-15 flex items-center" }, [
                                        createVNode("span", { class: "text-#F5F5F5" }, toDisplayString(item_socialMediaOption.label), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["label", "value"]);
                                }), 64))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "Social Media Link",
                      prop: "socialMediaLink"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(form).socialMediaLink,
                          "onUpdate:modelValue": ($event) => unref(form).socialMediaLink = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "Where Are You Located?",
                      prop: "area"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_select, {
                              modelValue: unref(form).area,
                              "onUpdate:modelValue": ($event) => unref(form).area = $event,
                              placeholder: "",
                              class: "w-full"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(areaOption, (item_areaOption) => {
                                  return createVNode(_component_el_option, {
                                    key: item_areaOption.value,
                                    label: item_areaOption.label,
                                    value: item_areaOption.value
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "h-15 flex items-center" }, [
                                        createVNode("span", { class: "text-#F5F5F5" }, toDisplayString(item_areaOption.label), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["label", "value"]);
                                }), 64))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      label: "Primary Email",
                      prop: "email"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex items-center space-x-6" }, [
                      createVNode("div", {
                        class: ["w-5 h-5 border-1 border-#F5F5F5 flex items-center justify-center cursor-pointer", unref(form).starsCollective ? "bg-#715B00 " : ""],
                        onClick: ($event) => unref(form).starsCollective = !unref(form).starsCollective
                      }, [
                        unref(form).starsCollective ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: "ep:check",
                          class: ""
                        })) : createCommentVNode("", true)
                      ], 10, ["onClick"]),
                      createVNode("div", { class: "font-normal text-lg PolySansNeutral" }, "I want to receive newsletters from StarsCollective.")
                    ]),
                    createVNode("div", {
                      class: "btn gradient-btn mt-16",
                      onClick: ($event) => submitForm(unref(formRef))
                    }, [
                      createVNode("div", null, "SUBMIT APPLICAITON")
                    ], 8, ["onClick"]),
                    createVNode("div", { class: "font-normal text-3 text-#aeaeae" }, [
                      createTextVNode(" By applying to be a Star, you agree to StarsCollective "),
                      createVNode("span", {
                        class: "text-#ffffff cursor-pointer font-semibold",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/start/terms")
                      }, "Terms of Use ", 8, ["onClick"]),
                      createTextVNode("and our "),
                      createVNode("span", {
                        class: "text-#ffffff cursor-pointer font-semibold",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/start/privacy")
                      }, " Privacy Policy", 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_FeedbackModal, {
              "model-value": unref(drawerShow)("OkBox")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FeedbackModalUserOkBox, {
                    "default-btn": false,
                    "onUpdate:modelValue": drawerClose
                  }, {
                    title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(okBoxPrompt).title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(okBoxPrompt).title), 1)
                        ];
                      }
                    }),
                    describe: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(okBoxPrompt).describe)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(okBoxPrompt).describe), 1)
                        ];
                      }
                    }),
                    btn: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="btn gradient-btn"${_scopeId3}><div${_scopeId3}>Back to Home</div></div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: "btn gradient-btn",
                            onClick: ($event) => _ctx.$router.go(-1)
                          }, [
                            createVNode("div", null, "Back to Home")
                          ], 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FeedbackModalUserOkBox, {
                      "default-btn": false,
                      "onUpdate:modelValue": drawerClose
                    }, {
                      title: withCtx(() => [
                        createTextVNode(toDisplayString(unref(okBoxPrompt).title), 1)
                      ]),
                      describe: withCtx(() => [
                        createTextVNode(toDisplayString(unref(okBoxPrompt).describe), 1)
                      ]),
                      btn: withCtx(() => [
                        createVNode("div", {
                          class: "btn gradient-btn",
                          onClick: ($event) => _ctx.$router.go(-1)
                        }, [
                          createVNode("div", null, "Back to Home")
                        ], 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative" }, [
                createVNode("div", { class: "w-210 bg-black absolute top-47 left-1/2 -translate-x-1/2 p-16 space-y-16 z-20" }, [
                  createVNode("p", { class: "font-normal text-5xl PPHattonMedium" }, "Application Starts Here"),
                  createVNode("div", { class: "font-light text-lg PolySansNeutral break-words" }, [
                    createTextVNode(" Thank you for applying!"),
                    createVNode("br"),
                    createTextVNode(" We appreciate your interest in StarsCollective. Please take your time to fill out the"),
                    createVNode("br"),
                    createTextVNode(" form below. This will help us get to know you. ")
                  ]),
                  createVNode(_component_el_form, {
                    ref_key: "formRef",
                    ref: formRef,
                    rules: unref(rules),
                    model: unref(form),
                    "require-asterisk-position": "right",
                    "label-position": "top",
                    class: "space-y-8"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex justify-between space-x-8" }, [
                        createVNode(_component_el_form_item, {
                          label: "First Name",
                          prop: "first_name",
                          class: "flex-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: unref(form).first_name,
                              "onUpdate:modelValue": ($event) => unref(form).first_name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, {
                          label: "Last Name",
                          prop: "last_name",
                          class: "flex-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: unref(form).last_name,
                              "onUpdate:modelValue": ($event) => unref(form).last_name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_el_form_item, {
                        label: "Introduce Yourself",
                        prop: "introduce"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).introduce,
                            "onUpdate:modelValue": ($event) => unref(form).introduce = $event,
                            rows: 5,
                            type: "textarea"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, { prop: "resume_files" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "w-full" }, [
                            createTextVNode("Portfolio / Resume "),
                            createVNode("span", { class: "text-#ffffff ml-2" }, "* acceptable format\uFF1Apdf")
                          ]),
                          createVNode("div", { class: "space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(resume_files), (item_resume, index_resume) => {
                              return openBlock(), createBlock("div", {
                                key: index_resume,
                                class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                              }, [
                                createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_resume.file_name), 1),
                                createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                                  createVNode("span", { class: "underline underline-offset-2 cursor-pointer" }, [
                                    createVNode("a", {
                                      href: item_resume.fullurl,
                                      target: "_blank"
                                    }, "VIEW", 8, ["href"])
                                  ]),
                                  createVNode("span", {
                                    class: "underline underline-offset-2 uppercase cursor-pointer",
                                    onClick: ($event) => removeFile(index_resume, "resume_files")
                                  }, "Remove", 8, ["onClick"])
                                ])
                              ]);
                            }), 128)),
                            createVNode("div", { class: "flex" }, [
                              createVNode(_component_ElementDragUpload, {
                                "model-value": unref(resume_files),
                                "onUpdate:modelValue": ($event) => isRef(resume_files) ? resume_files.value = $event : null
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                                    createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, "ATTACH FILES")
                                  ])
                                ]),
                                _: 1
                              }, 8, ["model-value", "onUpdate:modelValue"])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        prop: "profile_avatar",
                        label: "Profile Picture"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(profile_avatar), (item_profile, index_profile) => {
                              return openBlock(), createBlock("div", {
                                key: index_profile,
                                class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                              }, [
                                createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_profile.file_name), 1),
                                createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                                  createVNode("span", { class: "underline underline-offset-2 cursor-pointer" }, [
                                    createVNode("a", {
                                      href: item_profile.fullurl,
                                      target: "_blank"
                                    }, "VIEW", 8, ["href"])
                                  ]),
                                  createVNode("span", {
                                    class: "underline underline-offset-2 uppercase cursor-pointer",
                                    onClick: ($event) => removeFile(index_profile, "profile_avatar")
                                  }, "Remove", 8, ["onClick"])
                                ])
                              ]);
                            }), 128)),
                            createVNode("div", { class: "flex" }, [
                              createVNode(_component_ElementDragUpload, {
                                "model-value": unref(profile_avatar),
                                "onUpdate:modelValue": ($event) => isRef(profile_avatar) ? profile_avatar.value = $event : null,
                                limit: 1,
                                accept: "image/jpg,image/png,image/jpeg,image/gif,image/webp"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                                    createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "Select file")
                                  ])
                                ]),
                                _: 1
                              }, 8, ["model-value", "onUpdate:modelValue"])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "Type",
                        prop: "type"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_select, {
                                modelValue: unref(form).type,
                                "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                placeholder: "",
                                multiple: "",
                                class: "w-full"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(typeOption, (item_typeOption) => {
                                    return createVNode(_component_el_option, {
                                      key: item_typeOption.value,
                                      label: item_typeOption.label,
                                      value: item_typeOption.value,
                                      class: "w-full"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "h-15 flex justify-between items-center" }, [
                                          createVNode("span", { class: "text-#F5F5F5" }, toDisplayString(item_typeOption.label), 1),
                                          createVNode("div", {
                                            class: ["w-5 h-5 border-1 border-#F5F5F5 text-#F5F5F5 flex items-center justify-center cursor-pointer", unref(form).type.includes(item_typeOption.value) ? "bg-#715B00 " : ""]
                                          }, [
                                            unref(form).type.includes(item_typeOption.value) ? (openBlock(), createBlock(_component_Icon, {
                                              key: 0,
                                              name: "ep:check"
                                            })) : createCommentVNode("", true)
                                          ], 2)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["label", "value"]);
                                  }), 64))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, { prop: "category" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "w-full" }, [
                            createTextVNode("Category "),
                            createVNode("span", { class: "text-#ffffff ml-2" }, "* e.g. director, producer, writer, musician, etc\u2026")
                          ]),
                          createVNode(_component_el_input, {
                            modelValue: unref(form).category,
                            "onUpdate:modelValue": ($event) => unref(form).category = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "Personal Website",
                        prop: "website"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).website,
                            "onUpdate:modelValue": ($event) => unref(form).website = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "Social Media ",
                        prop: "social_media"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_select, {
                                modelValue: unref(form).social_media,
                                "onUpdate:modelValue": ($event) => unref(form).social_media = $event,
                                placeholder: "",
                                class: "w-full"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(socialMediaOption, (item_socialMediaOption) => {
                                    return createVNode(_component_el_option, {
                                      key: item_socialMediaOption.value,
                                      label: item_socialMediaOption.label,
                                      value: item_socialMediaOption.value
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "h-15 flex items-center" }, [
                                          createVNode("span", { class: "text-#F5F5F5" }, toDisplayString(item_socialMediaOption.label), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["label", "value"]);
                                  }), 64))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "Social Media Link",
                        prop: "socialMediaLink"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).socialMediaLink,
                            "onUpdate:modelValue": ($event) => unref(form).socialMediaLink = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "Where Are You Located?",
                        prop: "area"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_select, {
                                modelValue: unref(form).area,
                                "onUpdate:modelValue": ($event) => unref(form).area = $event,
                                placeholder: "",
                                class: "w-full"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(areaOption, (item_areaOption) => {
                                    return createVNode(_component_el_option, {
                                      key: item_areaOption.value,
                                      label: item_areaOption.label,
                                      value: item_areaOption.value
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "h-15 flex items-center" }, [
                                          createVNode("span", { class: "text-#F5F5F5" }, toDisplayString(item_areaOption.label), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["label", "value"]);
                                  }), 64))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "Primary Email",
                        prop: "email"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex items-center space-x-6" }, [
                        createVNode("div", {
                          class: ["w-5 h-5 border-1 border-#F5F5F5 flex items-center justify-center cursor-pointer", unref(form).starsCollective ? "bg-#715B00 " : ""],
                          onClick: ($event) => unref(form).starsCollective = !unref(form).starsCollective
                        }, [
                          unref(form).starsCollective ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            name: "ep:check",
                            class: ""
                          })) : createCommentVNode("", true)
                        ], 10, ["onClick"]),
                        createVNode("div", { class: "font-normal text-lg PolySansNeutral" }, "I want to receive newsletters from StarsCollective.")
                      ]),
                      createVNode("div", {
                        class: "btn gradient-btn mt-16",
                        onClick: ($event) => submitForm(unref(formRef))
                      }, [
                        createVNode("div", null, "SUBMIT APPLICAITON")
                      ], 8, ["onClick"]),
                      createVNode("div", { class: "font-normal text-3 text-#aeaeae" }, [
                        createTextVNode(" By applying to be a Star, you agree to StarsCollective "),
                        createVNode("span", {
                          class: "text-#ffffff cursor-pointer font-semibold",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/start/terms")
                        }, "Terms of Use ", 8, ["onClick"]),
                        createTextVNode("and our "),
                        createVNode("span", {
                          class: "text-#ffffff cursor-pointer font-semibold",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/start/privacy")
                        }, " Privacy Policy", 8, ["onClick"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["rules", "model"])
                ]),
                createVNode(_component_FeedbackModal, {
                  "model-value": unref(drawerShow)("OkBox")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_FeedbackModalUserOkBox, {
                      "default-btn": false,
                      "onUpdate:modelValue": drawerClose
                    }, {
                      title: withCtx(() => [
                        createTextVNode(toDisplayString(unref(okBoxPrompt).title), 1)
                      ]),
                      describe: withCtx(() => [
                        createTextVNode(toDisplayString(unref(okBoxPrompt).describe), 1)
                      ]),
                      btn: withCtx(() => [
                        createVNode("div", {
                          class: "btn gradient-btn",
                          onClick: ($event) => _ctx.$router.go(-1)
                        }, [
                          createVNode("div", null, "Back to Home")
                        ], 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model-value"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/start/applicaiton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
