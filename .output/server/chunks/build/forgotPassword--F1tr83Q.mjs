import { n as navigateTo, _ as __nuxt_component_0 } from './server.mjs';
import { E as ElForm, a as ElFormItem } from './el-form-item-BSUvBimf.mjs';
import { E as ElInput } from './el-input-D8gXC6Et.mjs';
import { defineComponent, ref, reactive, withCtx, unref, createVNode, openBlock, createBlock, Fragment, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useEmail } from './validation-_t0_XXG1.mjs';
import { V as VerifyFrom } from './element-C4bbgO4J.mjs';
import { a as apiuserresetPassword } from './user-C3y1iIxD.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import './request-CdKXnB25.mjs';
import './icon-CyxyPYk8.mjs';
import './aria-DJRDfGoO.mjs';
import './event-DSz0kuqc.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "forgotPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const ruleFormRef = ref();
    const submitOrNot = ref(false);
    const validateEmail = (rule, value, callback) => {
      if (!useEmail(value)) {
        callback(new Error("Please enter a valid email address."));
      } else
        return true;
    };
    const rules = reactive({
      email: [
        { required: true, message: "Please enter the email", trigger: "blur" },
        { validator: validateEmail, trigger: "blur" }
      ]
    });
    const form = reactive({
      email: "",
      type: "pc"
    });
    const submitForm = async (formEl) => {
      if (!formEl)
        return;
      await VerifyFrom(formEl);
      await apiuserresetPassword(form);
      submitOrNot.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full relative"${_scopeId}><div class="w-135 fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 space-y-16"${_scopeId}><div class="space-y-6"${_scopeId}><p class="font-medium text-5xl PPHattonMedium"${_scopeId}>Reset Password</p><div class="font-light text-5 PolySansNeutral"${_scopeId}>Enter the email address you used to create your account.</div></div>`);
            if (!unref(submitOrNot)) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_el_form, {
                ref_key: "ruleFormRef",
                ref: ruleFormRef,
                class: "w-full",
                model: unref(form),
                rules: unref(rules),
                "require-asterisk-position": "right",
                "label-position": "top"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_form_item, {
                      label: "Email",
                      prop: "email"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_el_input, {
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            modelModifiers: { trim: true },
                            placeholder: "",
                            clearable: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_el_input, {
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              modelModifiers: { trim: true },
                              placeholder: "",
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_form_item, {
                        label: "Email",
                        prop: "email"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            modelModifiers: { trim: true },
                            placeholder: "",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="btn gradient-btn mt-10"${_scopeId}><div${_scopeId}>Continue</div></div><!--]-->`);
            } else {
              _push2(`<!--[--><div class="font-light text-5 PolySansNeutral"${_scopeId}> A reset password email has been sent to<br${_scopeId}> ${ssrInterpolate(unref(form).email)}. If you did not receive the email,<br${_scopeId}> please contact us for help. </div><div class="btn gradient-btn mt-10"${_scopeId}><div${_scopeId}>Back to Log In</div></div><!--]-->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full relative" }, [
                createVNode("div", { class: "w-135 fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 space-y-16" }, [
                  createVNode("div", { class: "space-y-6" }, [
                    createVNode("p", { class: "font-medium text-5xl PPHattonMedium" }, "Reset Password"),
                    createVNode("div", { class: "font-light text-5 PolySansNeutral" }, "Enter the email address you used to create your account.")
                  ]),
                  !unref(submitOrNot) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode(_component_el_form, {
                      ref_key: "ruleFormRef",
                      ref: ruleFormRef,
                      class: "w-full",
                      model: unref(form),
                      rules: unref(rules),
                      "require-asterisk-position": "right",
                      "label-position": "top"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_form_item, {
                          label: "Email",
                          prop: "email"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_input, {
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              modelModifiers: { trim: true },
                              placeholder: "",
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["model", "rules"]),
                    createVNode("div", {
                      class: "btn gradient-btn mt-10",
                      onClick: ($event) => submitForm(unref(ruleFormRef))
                    }, [
                      createVNode("div", null, "Continue")
                    ], 8, ["onClick"])
                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode("div", { class: "font-light text-5 PolySansNeutral" }, [
                      createTextVNode(" A reset password email has been sent to"),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(unref(form).email) + ". If you did not receive the email,", 1),
                      createVNode("br"),
                      createTextVNode(" please contact us for help. ")
                    ]),
                    createVNode("div", {
                      class: "btn gradient-btn mt-10",
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/account/logIn")
                    }, [
                      createVNode("div", null, "Back to Log In")
                    ], 8, ["onClick"])
                  ], 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/forgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
