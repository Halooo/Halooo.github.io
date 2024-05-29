import { E as ElForm, a as ElFormItem } from './el-form-item-BSUvBimf.mjs';
import { E as ElSelect, a as ElOption } from './el-select-CvgBycaN.mjs';
import { E as ElInput } from './el-input-D8gXC6Et.mjs';
import { _ as _sfc_main$1 } from './Index-CG_3-TXz.mjs';
import { _ as _sfc_main$2 } from './Index-DNxKYUQ5.mjs';
import { _ as _sfc_main$3 } from './OkBox-Dvtj49Wo.mjs';
import { defineComponent, ref, reactive, computed, mergeProps, unref, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, createTextVNode, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { u as useUserPinia } from './server.mjs';
import { m as updateWork, w as workUpload, n as delWork } from './user-C3y1iIxD.mjs';
import { h as apiIndexWorkList } from './home-DlGQga1N.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
import './el-popper-_1GucfBz.mjs';
import '@popperjs/core';
import './focus-trap-C1bYFxM-.mjs';
import './event-DSz0kuqc.mjs';
import './scroll-D2xEfal-.mjs';
import './el-image-viewer-T405MOSo.mjs';
import './Icon-CaiLYYN4.mjs';
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WorkSample",
  __ssrInlineRender: true,
  setup(__props) {
    const formRefs = ref({});
    const user_store = useUserPinia();
    const ruleForm = reactive({
      sampleList: []
    });
    const drawerName = ref();
    const okBoxPrompt = reactive({
      title: "",
      describe: ""
    });
    const drawerShow = computed(() => (name) => name === drawerName.value ? true : false);
    const drawerClose = (value) => {
      if (!value)
        drawerName.value = "";
    };
    const rules = reactive({
      type: [{ required: true, message: "Please select the type", trigger: "blur" }],
      title: [{ required: true, message: "Please enter the title ", trigger: "blur" }],
      video_link: [{ required: true, message: "Please enter the link ", trigger: "blur" }],
      poster_image: [{ required: true, message: "Please upload the image ", trigger: "change" }],
      video_file: [{ required: true, message: "Please upload the video ", trigger: "change" }]
    });
    const optionsTypes = [
      { value: "image", label: "Image" },
      { value: "video", label: "Video" },
      { value: "youtube_link", label: "Youtube Link" },
      { value: "vimeo_link", label: "Vimeo Link" }
    ];
    const handleSubmit = async (index, item) => {
      const formEl = formRefs.value[index];
      if (!formEl)
        return;
      await formEl.validate();
      const param = JSON.parse(JSON.stringify(item));
      if (param.poster_image.length > 0) {
        param.poster_image = param.poster_image.map((v) => v.url).join(",");
      }
      if (param.video_file.length > 0) {
        param.video_file = param.video_file.map((v) => v.url).join(",");
      }
      if (item.id) {
        const res = await updateWork({ ...param });
        okBoxPrompt.title = "Change Updated!";
        okBoxPrompt.describe = res.msg;
      } else {
        const res = await workUpload({ ...param });
        okBoxPrompt.title = "Added!";
        okBoxPrompt.describe = res.msg;
      }
      drawerName.value = "OkBox";
      workListFn();
    };
    const editableOrNot = computed(() => {
      return (item) => {
        return item.id && !item.isEdit;
      };
    });
    const getFormRef = (index) => {
      return (el) => {
        formRefs.value[index] = el;
      };
    };
    const removeFile = (item, index, name) => {
      item[name].splice(index, 1);
    };
    const removeAward = async (index, item) => {
      if (item.id) {
        const res = await delWork(item.id);
        okBoxPrompt.title = "Deleted!";
        okBoxPrompt.describe = res.msg;
        drawerName.value = "OkBox";
        workListFn();
      } else {
        ruleForm.sampleList.splice(index, 1);
      }
    };
    const workListFn = async () => {
      const { user_id } = user_store.getUserInfo;
      const { data } = await apiIndexWorkList(user_id);
      ruleForm.sampleList = data.value.data;
      ruleForm.sampleList.forEach((item) => {
        item.poster_image.forEach((image) => {
          image.file_name = image.file_text;
          image.fullurl = image.url = image.file_url;
          delete image.file_text;
          delete image.file_url;
        });
        item.video_file.forEach((video) => {
          video.file_name = video.file_text;
          video.fullurl = video.url = video.file_url;
          delete video.file_text;
          delete video.file_url;
        });
      });
    };
    workListFn();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_input = ElInput;
      const _component_ElementDragUpload = _sfc_main$1;
      const _component_FeedbackModal = _sfc_main$2;
      const _component_FeedbackModalUserOkBox = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-12" }, _attrs))}><div class="font-medium text-2xl PPHattonMedium">Work Samples</div><div class="space-y-8 mt-12"><!--[-->`);
      ssrRenderList(unref(ruleForm).sampleList, (item, index) => {
        _push(`<div class="border-b border-#474747 pb-16 space-y-8">`);
        _push(ssrRenderComponent(_component_el_form, {
          ref_for: true,
          ref: getFormRef(index),
          class: "space-y-8",
          model: item,
          rules: unref(rules),
          "require-asterisk-position": "right",
          "label-position": "top"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-x-3"${_scopeId}><span${_scopeId}>Work Sample${ssrInterpolate(index + 1)}</span><span class="text-#ffffff underline underline-offset-2 cursor-pointer"${_scopeId}>REMOVE</span>`);
              if (unref(editableOrNot)(item)) {
                _push2(`<span class="text-#ffffff underline underline-offset-2 cursor-pointer"${_scopeId}>EDIT</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_el_form_item, {
                label: "Type",
                prop: "type"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_select, {
                      modelValue: item.type,
                      "onUpdate:modelValue": ($event) => item.type = $event,
                      class: "w-full",
                      placeholder: "Select",
                      disabled: unref(editableOrNot)(item)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(optionsTypes, (_item) => {
                            _push4(ssrRenderComponent(_component_el_option, {
                              key: _item.value,
                              label: _item.label,
                              value: _item.value
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(optionsTypes, (_item) => {
                              return createVNode(_component_el_option, {
                                key: _item.value,
                                label: _item.label,
                                value: _item.value
                              }, null, 8, ["label", "value"]);
                            }), 64))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_select, {
                        modelValue: item.type,
                        "onUpdate:modelValue": ($event) => item.type = $event,
                        class: "w-full",
                        placeholder: "Select",
                        disabled: unref(editableOrNot)(item)
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(optionsTypes, (_item) => {
                            return createVNode(_component_el_option, {
                              key: _item.value,
                              label: _item.label,
                              value: _item.value
                            }, null, 8, ["label", "value"]);
                          }), 64))
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="space-x-8 flex justify-between"${_scopeId}><div class="w-1/2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_form_item, {
                label: "Work Sample Title",
                prop: "title"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_input, {
                      modelValue: item.title,
                      "onUpdate:modelValue": ($event) => item.title = $event,
                      modelModifiers: { trim: true },
                      placeholder: "",
                      clearable: "",
                      disabled: unref(editableOrNot)(item)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_input, {
                        modelValue: item.title,
                        "onUpdate:modelValue": ($event) => item.title = $event,
                        modelModifiers: { trim: true },
                        placeholder: "",
                        clearable: "",
                        disabled: unref(editableOrNot)(item)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="w-1/2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_form_item, {
                label: "Link",
                prop: "link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_input, {
                      modelValue: item.link,
                      "onUpdate:modelValue": ($event) => item.link = $event,
                      modelModifiers: { trim: true },
                      placeholder: "",
                      clearable: "",
                      disabled: unref(editableOrNot)(item)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_input, {
                        modelValue: item.link,
                        "onUpdate:modelValue": ($event) => item.link = $event,
                        modelModifiers: { trim: true },
                        placeholder: "",
                        clearable: "",
                        disabled: unref(editableOrNot)(item)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
              if (item.type === "youtube_link") {
                _push2(ssrRenderComponent(_component_el_form_item, {
                  label: "Youtube Link",
                  prop: "video_link"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_el_input, {
                        modelValue: item.video_link,
                        "onUpdate:modelValue": ($event) => item.video_link = $event,
                        modelModifiers: { trim: true },
                        placeholder: "",
                        clearable: "",
                        disabled: unref(editableOrNot)(item)
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_el_input, {
                          modelValue: item.video_link,
                          "onUpdate:modelValue": ($event) => item.video_link = $event,
                          modelModifiers: { trim: true },
                          placeholder: "",
                          clearable: "",
                          disabled: unref(editableOrNot)(item)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (item.type === "vimeo_link") {
                _push2(ssrRenderComponent(_component_el_form_item, {
                  label: item.type === "youtube_link" ? "Youtube Link" : "Vimeo Link",
                  prop: "video_link"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_el_input, {
                        modelValue: item.video_link,
                        "onUpdate:modelValue": ($event) => item.video_link = $event,
                        modelModifiers: { trim: true },
                        placeholder: "",
                        clearable: "",
                        disabled: unref(editableOrNot)(item)
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_el_input, {
                          modelValue: item.video_link,
                          "onUpdate:modelValue": ($event) => item.video_link = $event,
                          modelModifiers: { trim: true },
                          placeholder: "",
                          clearable: "",
                          disabled: unref(editableOrNot)(item)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_el_form_item, { prop: "poster_image" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="space-y-4"${_scopeId2}><div class="font-normal text-lg PolySansNeutral"${_scopeId2}>Upload Title Image <span class="text-#ffffff"${_scopeId2}> *Acceptable format: jpg.</span></div><!--[-->`);
                    ssrRenderList(item.poster_image, (item_image, index_image) => {
                      _push3(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"${_scopeId2}><span class="font-normal text-sm PolySansNeutral"${_scopeId2}>${ssrInterpolate(item_image.file_name)}</span><div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4"${_scopeId2}><span class="underline underline-offset-2 cursor-pointer"${_scopeId2}><a${ssrRenderAttr("href", item_image.fullurl)} target="_blank"${_scopeId2}>VIEW</a></span>`);
                      if (!unref(editableOrNot)(item)) {
                        _push3(`<span class="underline underline-offset-2 uppercase cursor-pointer"${_scopeId2}>Remove</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></div>`);
                    });
                    _push3(`<!--]-->`);
                    if (!unref(editableOrNot)(item)) {
                      _push3(`<div class="flex"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_ElementDragUpload, {
                        "model-value": item.poster_image,
                        "onUpdate:modelValue": ($event) => item.poster_image = $event,
                        limit: 1,
                        accept: "image/jpg,image/png,image/jpeg,image/gif,image/webp"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer"${_scopeId3}><span class="font-normal text-sm PolySansNeutral uppercase"${_scopeId3}>ADD Image</span></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                                createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "ADD Image")
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode("div", { class: "font-normal text-lg PolySansNeutral" }, [
                          createTextVNode("Upload Title Image "),
                          createVNode("span", { class: "text-#ffffff" }, " *Acceptable format: jpg.")
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(item.poster_image, (item_image, index_image) => {
                          return openBlock(), createBlock("div", {
                            key: index_image,
                            class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                          }, [
                            createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_image.file_name), 1),
                            createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                              createVNode("span", { class: "underline underline-offset-2 cursor-pointer" }, [
                                createVNode("a", {
                                  href: item_image.fullurl,
                                  target: "_blank"
                                }, "VIEW", 8, ["href"])
                              ]),
                              !unref(editableOrNot)(item) ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "underline underline-offset-2 uppercase cursor-pointer",
                                onClick: ($event) => removeFile(item, index_image, "poster_image")
                              }, "Remove", 8, ["onClick"])) : createCommentVNode("", true)
                            ])
                          ]);
                        }), 128)),
                        !unref(editableOrNot)(item) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex"
                        }, [
                          createVNode(_component_ElementDragUpload, {
                            "model-value": item.poster_image,
                            "onUpdate:modelValue": ($event) => item.poster_image = $event,
                            limit: 1,
                            accept: "image/jpg,image/png,image/jpeg,image/gif,image/webp"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                                createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "ADD Image")
                              ])
                            ]),
                            _: 2
                          }, 1032, ["model-value", "onUpdate:modelValue"])
                        ])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (item.type === "video") {
                _push2(ssrRenderComponent(_component_el_form_item, { prop: "video_file" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="space-y-4"${_scopeId2}><div class="font-normal text-lg PolySansNeutral"${_scopeId2}>Upload Work Sample Video <span class="text-#ffffff"${_scopeId2}> *Acceptable format: mp4.</span></div><!--[-->`);
                      ssrRenderList(item.video_file, (item_video, index_video) => {
                        _push3(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"${_scopeId2}><span class="font-normal text-sm PolySansNeutral"${_scopeId2}>${ssrInterpolate(item_video.file_name)}</span><div class="font-normal text-sm PolySansNeutral text-#ffffff space-x-4"${_scopeId2}><span class="underline underline-offset-2 cursor-pointer"${_scopeId2}><a${ssrRenderAttr("href", item_video.fullurl)} target="_blank"${_scopeId2}>VIEW</a></span>`);
                        if (!unref(editableOrNot)(item)) {
                          _push3(`<span class="underline underline-offset-2 uppercase cursor-pointer"${_scopeId2}>Remove</span>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div></div>`);
                      });
                      _push3(`<!--]-->`);
                      if (!unref(editableOrNot)(item)) {
                        _push3(`<div class="flex"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_ElementDragUpload, {
                          "model-value": item.video_file,
                          "onUpdate:modelValue": ($event) => item.video_file = $event,
                          accept: "video/mp4",
                          limit: 1
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer"${_scopeId3}><span class="font-normal text-sm PolySansNeutral uppercase"${_scopeId3}>ADD Video</span></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                                  createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "ADD Video")
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", { class: "font-normal text-lg PolySansNeutral" }, [
                            createTextVNode("Upload Work Sample Video "),
                            createVNode("span", { class: "text-#ffffff" }, " *Acceptable format: mp4.")
                          ]),
                          (openBlock(true), createBlock(Fragment, null, renderList(item.video_file, (item_video, index_video) => {
                            return openBlock(), createBlock("div", {
                              key: index_video,
                              class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                            }, [
                              createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_video.file_name), 1),
                              createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                                createVNode("span", { class: "underline underline-offset-2 cursor-pointer" }, [
                                  createVNode("a", {
                                    href: item_video.fullurl,
                                    target: "_blank"
                                  }, "VIEW", 8, ["href"])
                                ]),
                                !unref(editableOrNot)(item) ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "underline underline-offset-2 uppercase cursor-pointer",
                                  onClick: ($event) => removeFile(item, index_video, "video_file")
                                }, "Remove", 8, ["onClick"])) : createCommentVNode("", true)
                              ])
                            ]);
                          }), 128)),
                          !unref(editableOrNot)(item) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex"
                          }, [
                            createVNode(_component_ElementDragUpload, {
                              "model-value": item.video_file,
                              "onUpdate:modelValue": ($event) => item.video_file = $event,
                              accept: "video/mp4",
                              limit: 1
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                                  createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "ADD Video")
                                ])
                              ]),
                              _: 2
                            }, 1032, ["model-value", "onUpdate:modelValue"])
                          ])) : createCommentVNode("", true)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (!unref(editableOrNot)(item)) {
                _push2(`<div class="btn gradient-btn mt-14"${_scopeId}><div${_scopeId}>update</div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("div", { class: "space-x-3" }, [
                  createVNode("span", null, "Work Sample" + toDisplayString(index + 1), 1),
                  createVNode("span", {
                    class: "text-#ffffff underline underline-offset-2 cursor-pointer",
                    onClick: ($event) => removeAward(index, item)
                  }, "REMOVE", 8, ["onClick"]),
                  unref(editableOrNot)(item) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-#ffffff underline underline-offset-2 cursor-pointer",
                    onClick: ($event) => item.isEdit = true
                  }, "EDIT", 8, ["onClick"])) : createCommentVNode("", true)
                ]),
                createVNode(_component_el_form_item, {
                  label: "Type",
                  prop: "type"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_select, {
                      modelValue: item.type,
                      "onUpdate:modelValue": ($event) => item.type = $event,
                      class: "w-full",
                      placeholder: "Select",
                      disabled: unref(editableOrNot)(item)
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(optionsTypes, (_item) => {
                          return createVNode(_component_el_option, {
                            key: _item.value,
                            label: _item.label,
                            value: _item.value
                          }, null, 8, ["label", "value"]);
                        }), 64))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ]),
                  _: 2
                }, 1024),
                createVNode("div", { class: "space-x-8 flex justify-between" }, [
                  createVNode("div", { class: "w-1/2" }, [
                    createVNode(_component_el_form_item, {
                      label: "Work Sample Title",
                      prop: "title"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: item.title,
                          "onUpdate:modelValue": ($event) => item.title = $event,
                          modelModifiers: { trim: true },
                          placeholder: "",
                          clearable: "",
                          disabled: unref(editableOrNot)(item)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createVNode("div", { class: "w-1/2" }, [
                    createVNode(_component_el_form_item, {
                      label: "Link",
                      prop: "link"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: item.link,
                          "onUpdate:modelValue": ($event) => item.link = $event,
                          modelModifiers: { trim: true },
                          placeholder: "",
                          clearable: "",
                          disabled: unref(editableOrNot)(item)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ]),
                item.type === "youtube_link" ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 0,
                  label: "Youtube Link",
                  prop: "video_link"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: item.video_link,
                      "onUpdate:modelValue": ($event) => item.video_link = $event,
                      modelModifiers: { trim: true },
                      placeholder: "",
                      clearable: "",
                      disabled: unref(editableOrNot)(item)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true),
                item.type === "vimeo_link" ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 1,
                  label: item.type === "youtube_link" ? "Youtube Link" : "Vimeo Link",
                  prop: "video_link"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: item.video_link,
                      "onUpdate:modelValue": ($event) => item.video_link = $event,
                      modelModifiers: { trim: true },
                      placeholder: "",
                      clearable: "",
                      disabled: unref(editableOrNot)(item)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ]),
                  _: 2
                }, 1032, ["label"])) : createCommentVNode("", true),
                createVNode(_component_el_form_item, { prop: "poster_image" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "font-normal text-lg PolySansNeutral" }, [
                        createTextVNode("Upload Title Image "),
                        createVNode("span", { class: "text-#ffffff" }, " *Acceptable format: jpg.")
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(item.poster_image, (item_image, index_image) => {
                        return openBlock(), createBlock("div", {
                          key: index_image,
                          class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                        }, [
                          createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_image.file_name), 1),
                          createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                            createVNode("span", { class: "underline underline-offset-2 cursor-pointer" }, [
                              createVNode("a", {
                                href: item_image.fullurl,
                                target: "_blank"
                              }, "VIEW", 8, ["href"])
                            ]),
                            !unref(editableOrNot)(item) ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "underline underline-offset-2 uppercase cursor-pointer",
                              onClick: ($event) => removeFile(item, index_image, "poster_image")
                            }, "Remove", 8, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ]);
                      }), 128)),
                      !unref(editableOrNot)(item) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex"
                      }, [
                        createVNode(_component_ElementDragUpload, {
                          "model-value": item.poster_image,
                          "onUpdate:modelValue": ($event) => item.poster_image = $event,
                          limit: 1,
                          accept: "image/jpg,image/png,image/jpeg,image/gif,image/webp"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                              createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "ADD Image")
                            ])
                          ]),
                          _: 2
                        }, 1032, ["model-value", "onUpdate:modelValue"])
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 2
                }, 1024),
                item.type === "video" ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 2,
                  prop: "video_file"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "font-normal text-lg PolySansNeutral" }, [
                        createTextVNode("Upload Work Sample Video "),
                        createVNode("span", { class: "text-#ffffff" }, " *Acceptable format: mp4.")
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(item.video_file, (item_video, index_video) => {
                        return openBlock(), createBlock("div", {
                          key: index_video,
                          class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16"
                        }, [
                          createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(item_video.file_name), 1),
                          createVNode("div", { class: "font-normal text-sm PolySansNeutral text-#ffffff space-x-4" }, [
                            createVNode("span", { class: "underline underline-offset-2 cursor-pointer" }, [
                              createVNode("a", {
                                href: item_video.fullurl,
                                target: "_blank"
                              }, "VIEW", 8, ["href"])
                            ]),
                            !unref(editableOrNot)(item) ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "underline underline-offset-2 uppercase cursor-pointer",
                              onClick: ($event) => removeFile(item, index_video, "video_file")
                            }, "Remove", 8, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ]);
                      }), 128)),
                      !unref(editableOrNot)(item) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex"
                      }, [
                        createVNode(_component_ElementDragUpload, {
                          "model-value": item.video_file,
                          "onUpdate:modelValue": ($event) => item.video_file = $event,
                          accept: "video/mp4",
                          limit: 1
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer" }, [
                              createVNode("span", { class: "font-normal text-sm PolySansNeutral uppercase" }, "ADD Video")
                            ])
                          ]),
                          _: 2
                        }, 1032, ["model-value", "onUpdate:modelValue"])
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true),
                !unref(editableOrNot)(item) ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: "btn gradient-btn mt-14",
                  onClick: ($event) => handleSubmit(index, item)
                }, [
                  createVNode("div", null, "update")
                ], 8, ["onClick"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer"><span class="font-normal text-sm PolySansNeutral uppercase">ADD MORE SAMPLE</span></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/ProfilePage/WorkSample.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
