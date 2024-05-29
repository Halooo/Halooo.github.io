import { E as ElForm, a as ElFormItem } from './el-form-item-BSUvBimf.mjs';
import { u as useUserPinia, I as __nuxt_component_2$1 } from './server.mjs';
import { E as ElSelect, a as ElOption } from './el-select-CvgBycaN.mjs';
import { E as ElInput } from './el-input-D8gXC6Et.mjs';
import { _ as _sfc_main$1 } from './Index-DNxKYUQ5.mjs';
import { _ as _sfc_main$2 } from './OkBox-Dvtj49Wo.mjs';
import { defineComponent, ref, reactive, computed, withAsyncContext, mergeProps, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { o as updateAwards, p as addAwards, q as delAwards, t as awardsList, v as awards } from './user-C3y1iIxD.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import './event-DSz0kuqc.mjs';
import './scroll-D2xEfal-.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Awards",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const formRefs = ref({});
    const drawerName = ref();
    const user_store = useUserPinia();
    const awardOrganizerFilm = ref();
    const awardOrganizerArt = ref();
    const okBoxPrompt = reactive({
      title: "",
      describe: ""
    });
    const drawerShow = computed(() => (name) => name === drawerName.value ? true : false);
    const drawerClose = (value) => {
      if (!value)
        drawerName.value = "";
    };
    const ruleForm = reactive({
      sampleList: []
    });
    const rules = reactive({
      award_id: [{ required: true, message: "Please select the organizer", trigger: "change" }],
      year: [{ required: true, message: "Please select the year", trigger: "change" }],
      film: [{ required: true, message: "Please enter the title", trigger: "blur" }],
      film_year: [{ required: true, message: "Please select the year", trigger: "change" }],
      result: [{ required: true, message: "Please select the result ", trigger: "change" }]
    });
    const resultOption = [
      { value: "Winner", label: "Winner" },
      { value: "Shortlist", label: "Shortlist" },
      { value: "Nominated", label: "Nominated" }
    ];
    const optionTimeArr = computed(() => {
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      const startYear = currentYear - 49;
      const options = [];
      for (let year = currentYear; year >= startYear; year--) {
        options.push({
          value: String(year),
          label: String(year)
        });
      }
      return options;
    });
    const labelTitle = computed(() => {
      return (name) => {
        if (name === "film")
          return "Film";
        else
          return "Artwork";
      };
    });
    const editableOrNot = computed(() => {
      return (item) => item.id && !item.isEdit;
    });
    const isHaveAward = computed(() => {
      return (item) => item.id && !item.isEdit || item.award_id !== 13 && item.award_id !== 14;
    });
    const awardOrganizerArr = computed(() => {
      return (type) => {
        if (type === "film")
          return awardOrganizerFilm.value;
        else
          return awardOrganizerArt.value;
      };
    });
    const getFormRef = (index) => {
      return (el) => {
        formRefs.value[index] = el;
      };
    };
    const handleSubmit = async (index, item) => {
      const formEl = formRefs.value[index];
      if (!formEl)
        return;
      await formEl.validate();
      const param = JSON.parse(JSON.stringify(item));
      param.award_id = param.award_id.toString();
      if (item.id) {
        const res = await updateAwards({ ...param });
        okBoxPrompt.title = "Change Updated!";
        okBoxPrompt.describe = res.msg;
      } else {
        const res = await addAwards({ ...param });
        okBoxPrompt.title = "Added!";
        okBoxPrompt.describe = res.msg;
      }
      drawerName.value = "OkBox";
      getAwardsList();
    };
    const removeAward = async (index, item) => {
      if (item.id) {
        const res = await delAwards(item.id);
        okBoxPrompt.title = "Deleted!";
        okBoxPrompt.describe = res.msg;
        drawerName.value = "OkBox";
        getAwardsList();
      } else {
        ruleForm.sampleList.splice(index, 1);
      }
    };
    const getAwardsList = async () => {
      const { user_id } = user_store.getUserInfo;
      const data = await awardsList(user_id);
      ruleForm.sampleList = data.data;
    };
    const getAwards = async () => {
      const data = await awards("film");
      const res = await awards("art");
      awardOrganizerFilm.value = data.data;
      awardOrganizerArt.value = res.data;
    };
    [__temp, __restore] = withAsyncContext(() => getAwards()), await __temp, __restore();
    getAwardsList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_ClientOnly = __nuxt_component_2$1;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_input = ElInput;
      const _component_FeedbackModal = _sfc_main$1;
      const _component_FeedbackModalUserOkBox = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-12" }, _attrs))}><div class="font-medium text-2xl PPHattonMedium">Key Awards / Accomplishment</div><div class="space-y-16 mt-12"><!--[-->`);
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
              _push2(`<div class="space-x-3"${_scopeId}><span${_scopeId}>${ssrInterpolate(item.type)} Award ${ssrInterpolate(index + 1)}</span><span class="text-#ffffff underline underline-offset-2 cursor-pointer"${_scopeId}>REMOVE</span>`);
              if (unref(editableOrNot)(item)) {
                _push2(`<span class="text-#ffffff underline underline-offset-2 cursor-pointer"${_scopeId}>EDIT</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-end space-x-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_form_item, {
                label: "",
                prop: "award_id",
                class: "flex-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full space-y-1"${_scopeId2}><div class="w-full font-normal text-lg PolySansNeutral"${_scopeId2}>Award Organizer<span class="text-#ffffff"${_scopeId2}> *Email Starscollective if not listed</span></div>`);
                    _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-full space-y-1" }, [
                        createVNode("div", { class: "w-full font-normal text-lg PolySansNeutral" }, [
                          createTextVNode("Award Organizer"),
                          createVNode("span", { class: "text-#ffffff" }, " *Email Starscollective if not listed")
                        ]),
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_select, {
                              modelValue: item.award_id,
                              "onUpdate:modelValue": ($event) => item.award_id = $event,
                              "value-key": "id",
                              placeholder: "Select",
                              class: "w-full",
                              disabled: unref(editableOrNot)(item)
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(awardOrganizerArr)(item.type), (item_organizer) => {
                                  return openBlock(), createBlock(_component_el_option, {
                                    key: item_organizer.id,
                                    label: item_organizer.name,
                                    value: item_organizer.id
                                  }, null, 8, ["label", "value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_form_item, {
                label: "Award year",
                prop: "year",
                class: "w-40"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_select, {
                      modelValue: item.year,
                      "onUpdate:modelValue": ($event) => item.year = $event,
                      placeholder: "",
                      disabled: unref(editableOrNot)(item)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(optionTimeArr), (item_optionTimeArr) => {
                            _push4(ssrRenderComponent(_component_el_option, {
                              key: item_optionTimeArr.value,
                              label: item_optionTimeArr.label,
                              value: item_optionTimeArr.value
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(optionTimeArr), (item_optionTimeArr) => {
                              return openBlock(), createBlock(_component_el_option, {
                                key: item_optionTimeArr.value,
                                label: item_optionTimeArr.label,
                                value: item_optionTimeArr.value
                              }, null, 8, ["label", "value"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_select, {
                        modelValue: item.year,
                        "onUpdate:modelValue": ($event) => item.year = $event,
                        placeholder: "",
                        disabled: unref(editableOrNot)(item)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(optionTimeArr), (item_optionTimeArr) => {
                            return openBlock(), createBlock(_component_el_option, {
                              key: item_optionTimeArr.value,
                              label: item_optionTimeArr.label,
                              value: item_optionTimeArr.value
                            }, null, 8, ["label", "value"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex space-x-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_form_item, {
                label: unref(labelTitle)(item.type) + " Title",
                prop: "film",
                class: "flex-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_input, {
                      modelValue: item.film,
                      "onUpdate:modelValue": ($event) => item.film = $event,
                      modelModifiers: { trim: true },
                      placeholder: "",
                      clearable: "",
                      disabled: unref(editableOrNot)(item)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_input, {
                        modelValue: item.film,
                        "onUpdate:modelValue": ($event) => item.film = $event,
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
              _push2(ssrRenderComponent(_component_el_form_item, {
                label: unref(labelTitle)(item.type) + " year",
                prop: "film_year",
                class: "w-40"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_select, {
                            modelValue: item.film_year,
                            "onUpdate:modelValue": ($event) => item.film_year = $event,
                            placeholder: "",
                            disabled: unref(editableOrNot)(item)
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(optionTimeArr), (item_optionTimeArr) => {
                                return openBlock(), createBlock(_component_el_option, {
                                  key: item_optionTimeArr.value,
                                  label: item_optionTimeArr.label,
                                  value: item_optionTimeArr.value
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex space-x-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_form_item, {
                label: "Result",
                prop: "result",
                class: "w-40"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_select, {
                            modelValue: item.result,
                            "onUpdate:modelValue": ($event) => item.result = $event,
                            placeholder: "Select",
                            disabled: unref(editableOrNot)(item)
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(resultOption, (item_options) => {
                                return createVNode(_component_el_option, {
                                  key: item_options.value,
                                  label: item_options.label,
                                  value: item_options.value
                                }, null, 8, ["label", "value"]);
                              }), 64))
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_form_item, {
                label: "If you selected 'Other' in Award Organizer, please specify",
                class: "flex-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_input, {
                      modelValue: item.remark,
                      "onUpdate:modelValue": ($event) => item.remark = $event,
                      modelModifiers: { trim: true },
                      placeholder: "",
                      clearable: "",
                      disabled: unref(isHaveAward)(item)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_input, {
                        modelValue: item.remark,
                        "onUpdate:modelValue": ($event) => item.remark = $event,
                        modelModifiers: { trim: true },
                        placeholder: "",
                        clearable: "",
                        disabled: unref(isHaveAward)(item)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
              if (!unref(editableOrNot)(item)) {
                _push2(`<div class="btn gradient-btn mt-14"${_scopeId}><div${_scopeId}>update</div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("div", { class: "space-x-3" }, [
                  createVNode("span", null, toDisplayString(item.type) + " Award " + toDisplayString(index + 1), 1),
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
                createVNode("div", { class: "flex items-end space-x-8" }, [
                  createVNode(_component_el_form_item, {
                    label: "",
                    prop: "award_id",
                    class: "flex-1"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-full space-y-1" }, [
                        createVNode("div", { class: "w-full font-normal text-lg PolySansNeutral" }, [
                          createTextVNode("Award Organizer"),
                          createVNode("span", { class: "text-#ffffff" }, " *Email Starscollective if not listed")
                        ]),
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_select, {
                              modelValue: item.award_id,
                              "onUpdate:modelValue": ($event) => item.award_id = $event,
                              "value-key": "id",
                              placeholder: "Select",
                              class: "w-full",
                              disabled: unref(editableOrNot)(item)
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(awardOrganizerArr)(item.type), (item_organizer) => {
                                  return openBlock(), createBlock(_component_el_option, {
                                    key: item_organizer.id,
                                    label: item_organizer.name,
                                    value: item_organizer.id
                                  }, null, 8, ["label", "value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_el_form_item, {
                    label: "Award year",
                    prop: "year",
                    class: "w-40"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_select, {
                        modelValue: item.year,
                        "onUpdate:modelValue": ($event) => item.year = $event,
                        placeholder: "",
                        disabled: unref(editableOrNot)(item)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(optionTimeArr), (item_optionTimeArr) => {
                            return openBlock(), createBlock(_component_el_option, {
                              key: item_optionTimeArr.value,
                              label: item_optionTimeArr.label,
                              value: item_optionTimeArr.value
                            }, null, 8, ["label", "value"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createVNode("div", { class: "flex space-x-8" }, [
                  createVNode(_component_el_form_item, {
                    label: unref(labelTitle)(item.type) + " Title",
                    prop: "film",
                    class: "flex-1"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: item.film,
                        "onUpdate:modelValue": ($event) => item.film = $event,
                        modelModifiers: { trim: true },
                        placeholder: "",
                        clearable: "",
                        disabled: unref(editableOrNot)(item)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    _: 2
                  }, 1032, ["label"]),
                  createVNode(_component_el_form_item, {
                    label: unref(labelTitle)(item.type) + " year",
                    prop: "film_year",
                    class: "w-40"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_select, {
                            modelValue: item.film_year,
                            "onUpdate:modelValue": ($event) => item.film_year = $event,
                            placeholder: "",
                            disabled: unref(editableOrNot)(item)
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(optionTimeArr), (item_optionTimeArr) => {
                                return openBlock(), createBlock(_component_el_option, {
                                  key: item_optionTimeArr.value,
                                  label: item_optionTimeArr.label,
                                  value: item_optionTimeArr.value
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["label"])
                ]),
                createVNode("div", { class: "flex space-x-8" }, [
                  createVNode(_component_el_form_item, {
                    label: "Result",
                    prop: "result",
                    class: "w-40"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_select, {
                            modelValue: item.result,
                            "onUpdate:modelValue": ($event) => item.result = $event,
                            placeholder: "Select",
                            disabled: unref(editableOrNot)(item)
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(resultOption, (item_options) => {
                                return createVNode(_component_el_option, {
                                  key: item_options.value,
                                  label: item_options.label,
                                  value: item_options.value
                                }, null, 8, ["label", "value"]);
                              }), 64))
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_el_form_item, {
                    label: "If you selected 'Other' in Award Organizer, please specify",
                    class: "flex-1"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: item.remark,
                        "onUpdate:modelValue": ($event) => item.remark = $event,
                        modelModifiers: { trim: true },
                        placeholder: "",
                        clearable: "",
                        disabled: unref(isHaveAward)(item)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                !unref(editableOrNot)(item) ? (openBlock(), createBlock("div", {
                  key: 0,
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
      _push(`<!--]--><div class="flex space-x-6"><div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer"><span class="font-normal text-sm PolySansNeutral uppercase">ADD MORE FILM AWARD</span></div><div class="w-fit flex items-center border border-#747474 py-2 px-4 space-x-16 cursor-pointer"><span class="font-normal text-sm PolySansNeutral uppercase">ADD MORE ART AWARD</span></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/ProfilePage/Awards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
