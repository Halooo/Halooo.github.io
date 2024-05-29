import { E as ElForm, a as ElFormItem } from './el-form-item-BSUvBimf.mjs';
import { _ as _sfc_main$1 } from './Index-CG_3-TXz.mjs';
import { E as ElInput } from './el-input-D8gXC6Et.mjs';
import { u as useUserPinia, I as __nuxt_component_2$1 } from './server.mjs';
import { E as ElSelect, a as ElOption } from './el-select-CvgBycaN.mjs';
import __nuxt_component_7 from './Icon-CaiLYYN4.mjs';
import { _ as _sfc_main$2 } from './Index-DNxKYUQ5.mjs';
import { _ as _sfc_main$3 } from './OkBox-Dvtj49Wo.mjs';
import { defineComponent, ref, reactive, computed, mergeProps, unref, withCtx, isRef, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { V as VerifyFrom } from './element-C4bbgO4J.mjs';
import { k as userProfile, u as userMsg } from './user-C3y1iIxD.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import './constants-DzvzFGCl.mjs';
import 'lodash-unified';
import './index-C8rz0VXy.mjs';
import '@vue/shared';
import '@vueuse/core';
import './index-URjNNh32.mjs';
import 'async-validator';
import './request-CdKXnB25.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './icon-CyxyPYk8.mjs';
import './aria-DJRDfGoO.mjs';
import './el-image-viewer-T405MOSo.mjs';
import './scroll-D2xEfal-.mjs';
import './event-DSz0kuqc.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'gsap';
import 'video.js';
import './el-popper-_1GucfBz.mjs';
import '@popperjs/core';
import './focus-trap-C1bYFxM-.mjs';
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BasicInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref();
    const drawerName = ref("");
    const profile_avatar = ref([]);
    const resume_files = ref([]);
    const user_store = useUserPinia();
    const okBoxPrompt = ref({
      title: "Success!",
      describe: ""
    });
    const form = reactive({
      type: [],
      profile_avatar: "",
      category: "",
      resume_files: "",
      website: "",
      area: "",
      introduce: "",
      social_media: "",
      social_media_url: ""
    });
    const rules = reactive({
      type: [{ required: true, message: "Please select the type", trigger: "change" }],
      category: [{ required: true, message: "Please enter the category", trigger: "blur" }],
      website: [{ required: true, message: "Please enter the personal website ", trigger: "blur" }],
      area: [{ required: true, message: "Please enter the Located", trigger: "change" }]
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
    const drawerShow = computed(() => (name) => name === drawerName.value ? true : false);
    const drawerClose = (value) => {
      if (!value)
        drawerName.value = "";
    };
    const submitForm = async (formEl) => {
      var _a, _b;
      if (!formEl)
        return;
      await VerifyFrom(formEl);
      const param = JSON.parse(JSON.stringify(form));
      if (((_a = resume_files.value) == null ? void 0 : _a.length) > 0) {
        param.resume_files = resume_files.value.map((v) => v.url).join(",");
      }
      if (((_b = profile_avatar.value) == null ? void 0 : _b.length) > 0) {
        param.profile_avatar = profile_avatar.value.map((v) => v.url).join(",");
      }
      param.type = param.type.join(",");
      const res = await userProfile({ ...param });
      okBoxPrompt.value.describe = res.msg;
      drawerName.value = "OkBox";
      const { data } = await userMsg();
      user_store.setUserInfo(data);
    };
    const removeFile = (index) => {
      resume_files.value.splice(index, 1);
    };
    const init = () => {
      if (user_store.getUserInfo) {
        const { type, introduce, area, website, category, social_media, social_media_url } = user_store.getUserInfo;
        if (type.split)
          form.type = type.split(",");
        form.introduce = introduce;
        form.area = area;
        form.category = category;
        form.website = website;
        form.social_media = social_media;
        form.social_media_url = social_media_url;
        user_store.getUserInfo.profile_avatar.map((item) => {
          profile_avatar.value.push({ file_name: item.file_text, fullurl: item.file_url, url: item.file_url });
        });
        user_store.getUserInfo.resume_files.map((item) => {
          resume_files.value.push({ file_name: item.file_text, fullurl: item.file_url, url: item.file_url });
        });
      }
    };
    init();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_ElementDragUpload = _sfc_main$1;
      const _component_el_input = ElInput;
      const _component_ClientOnly = __nuxt_component_2$1;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_Icon = __nuxt_component_7;
      const _component_FeedbackModal = _sfc_main$2;
      const _component_FeedbackModalUserOkBox = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-12" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_form, {
        ref_key: "formRef",
        ref: formRef,
        model: unref(form),
        rules: unref(rules),
        "require-asterisk-position": "right",
        "label-position": "top",
        class: "space-y-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form_item, { prop: "profile_avatar" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full space-y-4"${_scopeId2}><div class="font-medium text-2xl PPHattonMedium"${_scopeId2}>Profile</div><div class="font-normal text-lg PolySansNeutral"${_scopeId2}>Profile Picturew <span class="text-#ffffff"${_scopeId2}>* h 800*450</span></div><!--[-->`);
                  ssrRenderList(unref(profile_avatar), (item_profile, index_profile) => {
                    _push3(`<div class="space-y-4"${_scopeId2}><div class="w-31 h-31 bg-white rounded-full overflow-hidden"${_scopeId2}><img${ssrRenderAttr("src", item_profile.fullurl)} class="w-full h-full object-cover"${_scopeId2}></div><div class="w-full pb-60% relative"${_scopeId2}><img${ssrRenderAttr("src", item_profile.fullurl)} class="absolute top-0 left-0 w-full h-full object-cover"${_scopeId2}></div><div class="flex"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_ElementDragUpload, {
                      modelValue: unref(profile_avatar),
                      "onUpdate:modelValue": ($event) => isRef(profile_avatar) ? profile_avatar.value = $event : null,
                      limit: 1,
                      accept: "image/jpg,image/png,image/jpeg,image/gif,image/webp"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer"${_scopeId3}><span class="font-normal text-sm PolySansNeutral uppercase"${_scopeId3}>upload to replace</span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                              createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "upload to replace")
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full space-y-4" }, [
                      createVNode("div", { class: "font-medium text-2xl PPHattonMedium" }, "Profile"),
                      createVNode("div", { class: "font-normal text-lg PolySansNeutral" }, [
                        createTextVNode("Profile Picturew "),
                        createVNode("span", { class: "text-#ffffff" }, "* h 800*450")
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(profile_avatar), (item_profile, index_profile) => {
                        return openBlock(), createBlock("div", {
                          key: index_profile,
                          class: "space-y-4"
                        }, [
                          createVNode("div", { class: "w-31 h-31 bg-white rounded-full overflow-hidden" }, [
                            createVNode("img", {
                              src: item_profile.fullurl,
                              class: "w-full h-full object-cover"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "w-full pb-60% relative" }, [
                            createVNode("img", {
                              src: item_profile.fullurl,
                              class: "absolute top-0 left-0 w-full h-full object-cover"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "flex" }, [
                            createVNode(_component_ElementDragUpload, {
                              modelValue: unref(profile_avatar),
                              "onUpdate:modelValue": ($event) => isRef(profile_avatar) ? profile_avatar.value = $event : null,
                              limit: 1,
                              accept: "image/jpg,image/png,image/jpeg,image/gif,image/webp"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                                  createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "upload to replace")
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "Bio",
              prop: "introduce"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).introduce,
                    "onUpdate:modelValue": ($event) => unref(form).introduce = $event,
                    modelModifiers: { trim: true },
                    rows: 5,
                    type: "textarea",
                    placeholder: "",
                    clearable: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).introduce,
                      "onUpdate:modelValue": ($event) => unref(form).introduce = $event,
                      modelModifiers: { trim: true },
                      rows: 5,
                      type: "textarea",
                      placeholder: "",
                      clearable: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, { prop: "profile_avatar" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4"${_scopeId2}><div class="font-normal text-lg PolySansNeutral"${_scopeId2}>Resume <span class="text-#ffffff"${_scopeId2}>acceptable format\uFF1Apdf</span></div><!--[-->`);
                  ssrRenderList(unref(resume_files), (item_resume, index_resume) => {
                    _push3(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"${_scopeId2}><span class="font-normal text-sm PolySansNeutral"${_scopeId2}>${ssrInterpolate(item_resume.file_name)}</span><div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4"${_scopeId2}><span class="underline underline-offset-2 cursor-pointer"${_scopeId2}><a${ssrRenderAttr("href", item_resume.fullurl)} target="_blank"${_scopeId2}>VIEW</a></span><span class="underline underline-offset-2 uppercase cursor-pointer"${_scopeId2}>Remove</span></div></div>`);
                  });
                  _push3(`<!--]--><div class="flex"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ElementDragUpload, {
                    modelValue: unref(resume_files),
                    "onUpdate:modelValue": ($event) => isRef(resume_files) ? resume_files.value = $event : null,
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
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "font-normal text-lg PolySansNeutral" }, [
                        createTextVNode("Resume "),
                        createVNode("span", { class: "text-#ffffff" }, "acceptable format\uFF1Apdf")
                      ]),
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
                              onClick: ($event) => removeFile(index_resume)
                            }, "Remove", 8, ["onClick"])
                          ])
                        ]);
                      }), 128)),
                      createVNode("div", { class: "flex" }, [
                        createVNode(_component_ElementDragUpload, {
                          modelValue: unref(resume_files),
                          "onUpdate:modelValue": ($event) => isRef(resume_files) ? resume_files.value = $event : null,
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
              label: "Type",
              prop: "type"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_select, {
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          placeholder: "Select",
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "Title",
              prop: "category"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).category,
                    "onUpdate:modelValue": ($event) => unref(form).category = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).category,
                      "onUpdate:modelValue": ($event) => unref(form).category = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "Personal Website",
              prop: "website"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).website,
                    "onUpdate:modelValue": ($event) => unref(form).website = $event,
                    modelModifiers: { trim: true },
                    placeholder: "",
                    clearable: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).website,
                      "onUpdate:modelValue": ($event) => unref(form).website = $event,
                      modelModifiers: { trim: true },
                      placeholder: "",
                      clearable: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "Social Media ",
              prop: "social_media"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_select, {
                          modelValue: unref(form).social_media,
                          "onUpdate:modelValue": ($event) => unref(form).social_media = $event,
                          placeholder: "Select",
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "Social Media Link",
              prop: "social_media_url"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).social_media_url,
                    "onUpdate:modelValue": ($event) => unref(form).social_media_url = $event,
                    modelModifiers: { trim: true },
                    placeholder: "",
                    clearable: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).social_media_url,
                      "onUpdate:modelValue": ($event) => unref(form).social_media_url = $event,
                      modelModifiers: { trim: true },
                      placeholder: "",
                      clearable: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "Where Are You Located",
              prop: "area"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_select, {
                          modelValue: unref(form).area,
                          "onUpdate:modelValue": ($event) => unref(form).area = $event,
                          placeholder: "Select",
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
            }, _parent2, _scopeId));
            _push2(`<div class="btn gradient-btn mt-14"${_scopeId}><div${_scopeId}>update</div></div>`);
          } else {
            return [
              createVNode(_component_el_form_item, { prop: "profile_avatar" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-full space-y-4" }, [
                    createVNode("div", { class: "font-medium text-2xl PPHattonMedium" }, "Profile"),
                    createVNode("div", { class: "font-normal text-lg PolySansNeutral" }, [
                      createTextVNode("Profile Picturew "),
                      createVNode("span", { class: "text-#ffffff" }, "* h 800*450")
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(profile_avatar), (item_profile, index_profile) => {
                      return openBlock(), createBlock("div", {
                        key: index_profile,
                        class: "space-y-4"
                      }, [
                        createVNode("div", { class: "w-31 h-31 bg-white rounded-full overflow-hidden" }, [
                          createVNode("img", {
                            src: item_profile.fullurl,
                            class: "w-full h-full object-cover"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "w-full pb-60% relative" }, [
                          createVNode("img", {
                            src: item_profile.fullurl,
                            class: "absolute top-0 left-0 w-full h-full object-cover"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "flex" }, [
                          createVNode(_component_ElementDragUpload, {
                            modelValue: unref(profile_avatar),
                            "onUpdate:modelValue": ($event) => isRef(profile_avatar) ? profile_avatar.value = $event : null,
                            limit: 1,
                            accept: "image/jpg,image/png,image/jpeg,image/gif,image/webp"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                                createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "upload to replace")
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "Bio",
                prop: "introduce"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(form).introduce,
                    "onUpdate:modelValue": ($event) => unref(form).introduce = $event,
                    modelModifiers: { trim: true },
                    rows: 5,
                    type: "textarea",
                    placeholder: "",
                    clearable: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, { prop: "profile_avatar" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("div", { class: "font-normal text-lg PolySansNeutral" }, [
                      createTextVNode("Resume "),
                      createVNode("span", { class: "text-#ffffff" }, "acceptable format\uFF1Apdf")
                    ]),
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
                            onClick: ($event) => removeFile(index_resume)
                          }, "Remove", 8, ["onClick"])
                        ])
                      ]);
                    }), 128)),
                    createVNode("div", { class: "flex" }, [
                      createVNode(_component_ElementDragUpload, {
                        modelValue: unref(resume_files),
                        "onUpdate:modelValue": ($event) => isRef(resume_files) ? resume_files.value = $event : null,
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
                label: "Type",
                prop: "type"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_select, {
                        modelValue: unref(form).type,
                        "onUpdate:modelValue": ($event) => unref(form).type = $event,
                        placeholder: "Select",
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
              createVNode(_component_el_form_item, {
                label: "Title",
                prop: "category"
              }, {
                default: withCtx(() => [
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
                    "onUpdate:modelValue": ($event) => unref(form).website = $event,
                    modelModifiers: { trim: true },
                    placeholder: "",
                    clearable: ""
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
                        placeholder: "Select",
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
                prop: "social_media_url"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(form).social_media_url,
                    "onUpdate:modelValue": ($event) => unref(form).social_media_url = $event,
                    modelModifiers: { trim: true },
                    placeholder: "",
                    clearable: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "Where Are You Located",
                prop: "area"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_select, {
                        modelValue: unref(form).area,
                        "onUpdate:modelValue": ($event) => unref(form).area = $event,
                        placeholder: "Select",
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
              createVNode("div", {
                class: "btn gradient-btn mt-14",
                onClick: ($event) => submitForm(unref(formRef))
              }, [
                createVNode("div", null, "update")
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FeedbackModal, {
        "model-value": unref(drawerShow)("OkBox")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FeedbackModalUserOkBox, { "onUpdate:modelValue": drawerClose }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(okBoxPrompt).title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(okBoxPrompt).title), 1)
                  ];
                }
              }),
              describe: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(okBoxPrompt).describe)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(okBoxPrompt).describe), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FeedbackModalUserOkBox, { "onUpdate:modelValue": drawerClose }, {
                title: withCtx(() => [
                  createTextVNode(toDisplayString(unref(okBoxPrompt).title), 1)
                ]),
                describe: withCtx(() => [
                  createTextVNode(toDisplayString(unref(okBoxPrompt).describe), 1)
                ]),
                _: 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/ProfilePage/BasicInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
