import { u as useUserPinia, n as navigateTo, _ as __nuxt_component_0 } from './server.mjs';
import { E as ElForm, a as ElFormItem } from './el-form-item-BSUvBimf.mjs';
import { E as ElInput } from './el-input-D8gXC6Et.mjs';
import { defineComponent, ref, reactive, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { u as useEmail } from './validation-_t0_XXG1.mjs';
import { V as VerifyFrom } from './element-C4bbgO4J.mjs';
import { u as useResFetch } from './request-CdKXnB25.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './aria-DJRDfGoO.mjs';

const apiuserlogin = async (email, password) => {
  return useResFetch("/api/user/login", { method: "POST", body: { email, password }, isToken: false });
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "logIn",
  __ssrInlineRender: true,
  setup(__props) {
    const ruleFormRef = ref();
    const user_store = useUserPinia();
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
      ],
      password: [
        { required: true, message: "Cannot be empty", trigger: "blur" },
        { min: 6, message: "Your password must be at least 6 characters long", trigger: "blur" }
      ]
    });
    const form = reactive({
      email: "",
      password: ""
    });
    const submitForm = async (formEl) => {
      if (!formEl)
        return;
      await VerifyFrom(formEl);
      const res = await apiuserlogin(form.email, form.password);
      const { userinfo } = res.data;
      user_store.setToken(userinfo.token);
      user_store.setUserInfo(userinfo);
      navigateTo("/user/proposal");
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
            _push2(`<div class="w-full relative"${_scopeId}><div class="w-135 bg-black fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 space-y-16 z-20"${_scopeId}><div class="space-y-6"${_scopeId}><p class="font-medium text-5xl PPHattonMedium"${_scopeId}>Log In</p><div class="font-light text-lg PolySansNeutral"${_scopeId}> Not a member yet? <br${_scopeId}><span class="cursor-pointer underline underline-offset-4"${_scopeId}> Apply to become a star</span></div></div>`);
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
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "Password",
                    prop: "password"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          modelModifiers: { trim: true },
                          placeholder: "",
                          clearable: "",
                          type: "password"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            modelModifiers: { trim: true },
                            placeholder: "",
                            clearable: "",
                            type: "password"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="underline underline-offset-4 font-light text-lg PolySansNeutral cursor-pointer"${_scopeId2}>Forgot Password</div>`);
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
                    }),
                    createVNode(_component_el_form_item, {
                      label: "Password",
                      prop: "password"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          modelModifiers: { trim: true },
                          placeholder: "",
                          clearable: "",
                          type: "password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", {
                      class: "underline underline-offset-4 font-light text-lg PolySansNeutral cursor-pointer",
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/account/forgotPassword")
                    }, "Forgot Password", 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="btn gradient-btn mt-10"${_scopeId}><div${_scopeId}>Continue</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full relative" }, [
                createVNode("div", { class: "w-135 bg-black fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 space-y-16 z-20" }, [
                  createVNode("div", { class: "space-y-6" }, [
                    createVNode("p", { class: "font-medium text-5xl PPHattonMedium" }, "Log In"),
                    createVNode("div", { class: "font-light text-lg PolySansNeutral" }, [
                      createTextVNode(" Not a member yet? "),
                      createVNode("br"),
                      createVNode("span", {
                        class: "cursor-pointer underline underline-offset-4",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/start/applicaiton")
                      }, " Apply to become a star", 8, ["onClick"])
                    ])
                  ]),
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
                      }),
                      createVNode(_component_el_form_item, {
                        label: "Password",
                        prop: "password"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            modelModifiers: { trim: true },
                            placeholder: "",
                            clearable: "",
                            type: "password"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", {
                        class: "underline underline-offset-4 font-light text-lg PolySansNeutral cursor-pointer",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/account/forgotPassword")
                      }, "Forgot Password", 8, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["model", "rules"]),
                  createVNode("div", {
                    class: "btn gradient-btn mt-10",
                    onClick: ($event) => submitForm(unref(ruleFormRef))
                  }, [
                    createVNode("div", null, "Continue")
                  ], 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/logIn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
