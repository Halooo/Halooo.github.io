import { u as useUserPinia, a as useRoute, n as navigateTo, _ as __nuxt_component_0 } from './server.mjs';
import { E as ElForm, a as ElFormItem } from './el-form-item-BSUvBimf.mjs';
import { E as ElInput } from './el-input-D8gXC6Et.mjs';
import { defineComponent, ref, reactive, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { V as VerifyFrom } from './element-C4bbgO4J.mjs';
import { b as apiuserforgetPassword, u as userMsg } from './user-C3y1iIxD.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { E as ElMessage } from './request-CdKXnB25.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "resetPwd",
  __ssrInlineRender: true,
  setup(__props) {
    const ruleFormRef = ref();
    const user_store = useUserPinia();
    const route = useRoute();
    const form = reactive({
      new_pwd: "",
      confirm_pwd: ""
    });
    const rules = reactive({
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
            if (form.new_pwd !== value) {
              callback(new Error("Please enter the same new password as above"));
            } else
              return true;
          },
          trigger: "blur"
        }
      ]
    });
    const submitForm = async (formEl) => {
      if (!formEl)
        return;
      await VerifyFrom(formEl);
      const res = await apiuserforgetPassword(route.query.ResetToken, form);
      ElMessage({ showClose: true, message: res.msg, type: "success", grouping: true });
      user_store.setToken(route.query.ResetToken);
      const { data } = await userMsg();
      user_store.setUserInfo(data);
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
            _push2(`<div class="w-full h-full"${_scopeId}><div class="w-135 bg-black fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 space-y-16"${_scopeId}><div class="space-y-6"${_scopeId}><p class="font-medium text-5xl PPHattonMedium"${_scopeId}>Forgot Password</p></div>`);
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
                    label: "New password",
                    prop: "new_pwd"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(form).new_pwd,
                          "onUpdate:modelValue": ($event) => unref(form).new_pwd = $event,
                          type: "password",
                          clearable: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).new_pwd,
                            "onUpdate:modelValue": ($event) => unref(form).new_pwd = $event,
                            type: "password",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "Confirm new password",
                    prop: "confirm_pwd"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(form).confirm_pwd,
                          "onUpdate:modelValue": ($event) => unref(form).confirm_pwd = $event,
                          type: "password",
                          clearable: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).confirm_pwd,
                            "onUpdate:modelValue": ($event) => unref(form).confirm_pwd = $event,
                            type: "password",
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
                      label: "New password",
                      prop: "new_pwd"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(form).new_pwd,
                          "onUpdate:modelValue": ($event) => unref(form).new_pwd = $event,
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
                          modelValue: unref(form).confirm_pwd,
                          "onUpdate:modelValue": ($event) => unref(form).confirm_pwd = $event,
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
            }, _parent2, _scopeId));
            _push2(`<div class="btn gradient-btn mt-10"${_scopeId}><div${_scopeId}>Submit</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full" }, [
                createVNode("div", { class: "w-135 bg-black fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 space-y-16" }, [
                  createVNode("div", { class: "space-y-6" }, [
                    createVNode("p", { class: "font-medium text-5xl PPHattonMedium" }, "Forgot Password")
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
                        label: "New password",
                        prop: "new_pwd"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: unref(form).new_pwd,
                            "onUpdate:modelValue": ($event) => unref(form).new_pwd = $event,
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
                            modelValue: unref(form).confirm_pwd,
                            "onUpdate:modelValue": ($event) => unref(form).confirm_pwd = $event,
                            type: "password",
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
                    createVNode("div", null, "Submit")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/resetPwd.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
