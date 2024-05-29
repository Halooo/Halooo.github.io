import { E as ElForm, a as ElFormItem } from './el-form-item-BSUvBimf.mjs';
import { E as ElInput } from './el-input-D8gXC6Et.mjs';
import { _ as _sfc_main$1 } from './Index-DNxKYUQ5.mjs';
import { _ as _sfc_main$2 } from './OkBox-Dvtj49Wo.mjs';
import { defineComponent, ref, computed, reactive, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useUserPinia } from './server.mjs';
import { a as useEmpty, u as useEmail } from './validation-_t0_XXG1.mjs';
import { f as editAccount } from './user-C3y1iIxD.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "account",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref();
    const formPasswordRef = ref();
    const drawerName = ref();
    const drawerShow = computed(() => (name) => name === drawerName.value ? true : false);
    const drawerClose = (value) => {
      if (!value)
        drawerName.value = "";
    };
    const okBoxPrompt = reactive({
      title: "",
      describe: ""
    });
    const user_store = useUserPinia();
    const form = reactive({
      accountInfo: {
        email: ""
      },
      password: {
        current_pwd: "",
        new_pwd: "",
        confirm_pwd: ""
      }
    });
    form.accountInfo.email = user_store.getUserInfo.email;
    const rules = reactive({
      email: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (useEmpty(value)) {
              callback(new Error("Please enter the email"));
            } else {
              if (!useEmail(value)) {
                callback(new Error("Please enter a valid email address."));
              } else
                return true;
            }
          },
          trigger: "blur"
        }
      ],
      current_pwd: [
        { required: true, message: "Please enter the password", trigger: "blur" },
        { min: 6, message: "Your password must be at least 6 characters long", trigger: "blur" }
      ],
      new_pwd: [
        { required: true, message: "Please enter the new password", trigger: "blur" },
        { min: 6, message: "Your password must be at least 6 characters long", trigger: "blur" }
      ],
      confirm_pwd: [
        { required: true, message: "Please enter the confirm password", trigger: "blur" },
        { min: 6, message: "Your password must be at least 6 characters long", trigger: "blur" },
        {
          required: true,
          validator: (rule, value, callback) => {
            if (form.password.new_pwd !== value) {
              callback(new Error("Please enter the same new password as above"));
            } else
              return true;
          },
          trigger: "blur"
        }
      ]
    });
    const hangeEmailSubmit = async (formEl) => {
      if (!formEl)
        return;
      await formEl.validate();
      const data = await editAccount(form.accountInfo.email);
      okBoxPrompt.title = "Success!";
      okBoxPrompt.describe = data.msg;
      drawerName.value = "OkBox";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_FeedbackModal = _sfc_main$1;
      const _component_FeedbackModalUserOkBox = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full pt-10 pb-32 pl-9 pr-28 space-y-14" }, _attrs))}><p class="font-medium text-4xl PPHattonMedium">Account Info</p>`);
      _push(ssrRenderComponent(_component_el_form, {
        ref_key: "formRef",
        ref: formRef,
        class: "w-3/5",
        rules: unref(rules),
        model: unref(form).accountInfo,
        "require-asterisk-position": "right",
        "label-position": "top"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "Your Login Email",
              prop: "email"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).accountInfo.email,
                    "onUpdate:modelValue": ($event) => unref(form).accountInfo.email = $event,
                    clearable: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).accountInfo.email,
                      "onUpdate:modelValue": ($event) => unref(form).accountInfo.email = $event,
                      clearable: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="btn gradient-btn mt-8"${_scopeId}><div${_scopeId}>update</div></div>`);
          } else {
            return [
              createVNode(_component_el_form_item, {
                label: "Your Login Email",
                prop: "email"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(form).accountInfo.email,
                    "onUpdate:modelValue": ($event) => unref(form).accountInfo.email = $event,
                    clearable: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode("div", {
                class: "btn gradient-btn mt-8",
                onClick: ($event) => hangeEmailSubmit(unref(formRef))
              }, [
                createVNode("div", null, "update")
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-8 w-3/5"><p class="font-medium text-4xl PPHattonMedium">Change Password</p>`);
      _push(ssrRenderComponent(_component_el_form, {
        ref_key: "formPasswordRef",
        ref: formPasswordRef,
        rules: unref(rules),
        model: unref(form).password,
        "require-asterisk-position": "right",
        "label-position": "top"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "Current password",
              prop: "current_pwd"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).password.current_pwd,
                    "onUpdate:modelValue": ($event) => unref(form).password.current_pwd = $event,
                    type: "password",
                    clearable: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).password.current_pwd,
                      "onUpdate:modelValue": ($event) => unref(form).password.current_pwd = $event,
                      type: "password",
                      clearable: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "New password",
              prop: "new_pwd"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).password.new_pwd,
                    "onUpdate:modelValue": ($event) => unref(form).password.new_pwd = $event,
                    type: "password",
                    clearable: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).password.new_pwd,
                      "onUpdate:modelValue": ($event) => unref(form).password.new_pwd = $event,
                      type: "password",
                      clearable: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "Confirm new password",
              prop: "confirm_pwd"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).password.confirm_pwd,
                    "onUpdate:modelValue": ($event) => unref(form).password.confirm_pwd = $event,
                    type: "password",
                    clearable: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).password.confirm_pwd,
                      "onUpdate:modelValue": ($event) => unref(form).password.confirm_pwd = $event,
                      type: "password",
                      clearable: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_form_item, {
                label: "Current password",
                prop: "current_pwd"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(form).password.current_pwd,
                    "onUpdate:modelValue": ($event) => unref(form).password.current_pwd = $event,
                    type: "password",
                    clearable: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "New password",
                prop: "new_pwd"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(form).password.new_pwd,
                    "onUpdate:modelValue": ($event) => unref(form).password.new_pwd = $event,
                    type: "password",
                    clearable: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "Confirm new password",
                prop: "confirm_pwd"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(form).password.confirm_pwd,
                    "onUpdate:modelValue": ($event) => unref(form).password.confirm_pwd = $event,
                    type: "password",
                    clearable: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="btn gradient-btn mt-14"><div>update</div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
