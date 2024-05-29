import { c as useNamespace, j as debugWarn, f as useId, i as isNumber, g as isBoolean, H as isPropAbsent, R, n as navigateTo, l as isUndefined, _ as __nuxt_component_0, I as __nuxt_component_2$1 } from './server.mjs';
import { defineComponent, computed, openBlock, createBlock, resolveDynamicComponent, mergeProps, unref, withCtx, createElementBlock, Fragment, renderSlot, normalizeClass, createCommentVNode, provide, reactive, toRef, useSlots, createElementVNode, withDirectives, isRef, withModifiers, vModelCheckbox, createTextVNode, toDisplayString, inject, normalizeStyle, toRefs, watch, ref, readonly, getCurrentInstance, useSSRContext, Text, nextTick, createVNode, renderList, vModelText, toRaw, resolveComponent, normalizeProps, guardReactiveProps, createSlots } from 'vue';
import { b as buildProps, E as ElIcon, w as withInstall, d as withNoopInstall, e as definePropType, I as arrow_down_default, f as addUnit, u as loading_default, _ as _export_sfc$1 } from './index-C8rz0VXy.mjs';
import { b as useSizeProp, u as useDeprecated } from './index-URjNNh32.mjs';
import { a as useLocale, b as useGlobalConfig } from './request-CdKXnB25.mjs';
import { c as useFormItem, d as useFormItemInputId, u as useFormSize, e as useFormDisabled } from './el-input-D8gXC6Et.mjs';
import { i as iconPropType } from './icon-CyxyPYk8.mjs';
import { TinyColor } from '@ctrl/tinycolor';
import { E as ElTooltip, O as OnlyChild, c as composeEventHandlers, w as whenMouse } from './el-popper-_1GucfBz.mjs';
import { b as ElScrollbar } from './el-select-CvgBycaN.mjs';
import { c as createCollectionWithScope, E as ElCollection$1, d as dropdownProps, a as dropdownItemProps, C as COLLECTION_ITEM_INJECTION_KEY$1, b as COLLECTION_ITEM_SIGN, e as ElCollectionItem$1, f as dropdownMenuProps, g as COLLECTION_INJECTION_KEY$1, F as FIRST_LAST_KEYS, L as LAST_KEYS } from './dropdown-DlWKIXWJ.mjs';
import { useEventListener } from '@vueuse/core';
import { E as EVENT_CODE } from './aria-DJRDfGoO.mjs';
import { pick, castArray, isEqual } from 'lodash-unified';
import { isString, isArray, isFunction, isObject } from '@vue/shared';
import { F as FOCUS_TRAP_INJECTION_KEY } from './focus-trap-C1bYFxM-.mjs';
import __nuxt_component_7 from './Icon-CaiLYYN4.mjs';
import { u as useAriaProps } from './constants-DzvzFGCl.mjs';
import { U as UPDATE_MODEL_EVENT } from './event-DSz0kuqc.mjs';
import { E as ElImage } from './el-image-viewer-T405MOSo.mjs';
import { E as ElPagination } from './el-pagination-DAZq1L5Y.mjs';
import { _ as _sfc_main$d } from './Footer-DZPaOTwy.mjs';
import { k as apiIndexStarList } from './home-DlGQga1N.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-BaMrrqy2.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import 'pinia-plugin-persistedstate';
import 'gsap';
import 'video.js';
import '@popperjs/core';
import './scroll-D2xEfal-.mjs';
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './Index-DNxKYUQ5.mjs';
import './OkBox-Dvtj49Wo.mjs';
import './virtual_public-3Fh-jQka.mjs';

const composeRefs = (...refs) => {
  return (el) => {
    refs.forEach((ref2) => {
      if (isFunction(ref2)) {
        ref2(el);
      } else {
        ref2.value = el;
      }
    });
  };
};
const buttonGroupContextKey = Symbol("buttonGroupContextKey");
const useButton = (props, emit) => {
  useDeprecated({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, computed(() => props.type === "text"));
  const buttonGroupContext = inject(buttonGroupContextKey, void 0);
  const globalConfig = useGlobalConfig("button");
  const { form } = useFormItem();
  const _size = useFormSize(computed(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
  const _disabled = useFormDisabled();
  const _ref = ref();
  const slots = useSlots();
  const _type = computed(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
  const autoInsertSpace = computed(() => {
    var _a, _b, _c;
    return (_c = (_b = props.autoInsertSpace) != null ? _b : (_a = globalConfig.value) == null ? void 0 : _a.autoInsertSpace) != null ? _c : false;
  });
  const _props = computed(() => {
    if (props.tag === "button") {
      return {
        ariaDisabled: _disabled.value || props.loading,
        disabled: _disabled.value || props.loading,
        autofocus: props.autofocus,
        type: props.nativeType
      };
    }
    return {};
  });
  const shouldAddSpace = computed(() => {
    var _a;
    const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
    if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
      const slot = defaultSlot[0];
      if ((slot == null ? void 0 : slot.type) === Text) {
        const text = slot.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(text.trim());
      }
    }
    return false;
  });
  const handleClick = (evt) => {
    if (props.nativeType === "reset") {
      form == null ? void 0 : form.resetFields();
    }
    emit("click", evt);
  };
  return {
    _disabled,
    _size,
    _type,
    _ref,
    _props,
    shouldAddSpace,
    handleClick
  };
};
const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
];
const buttonNativeTypes = ["button", "submit", "reset"];
const buttonProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonTypes,
    default: ""
  },
  icon: {
    type: iconPropType
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: iconPropType,
    default: () => loading_default
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: definePropType([String, Object]),
    default: "button"
  }
});
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};
function darken(color, amount = 20) {
  return color.mix("#141414", amount).toString();
}
function useButtonCustomStyle(props) {
  const _disabled = useFormDisabled();
  const ns = useNamespace("button");
  return computed(() => {
    let styles = {};
    const buttonColor = props.color;
    if (buttonColor) {
      const color = new TinyColor(buttonColor);
      const activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20);
      if (props.plain) {
        styles = ns.cssVarBlock({
          "bg-color": props.dark ? darken(color, 90) : color.tint(90).toString(),
          "text-color": buttonColor,
          "border-color": props.dark ? darken(color, 50) : color.tint(50).toString(),
          "hover-text-color": `var(${ns.cssVarName("color-white")})`,
          "hover-bg-color": buttonColor,
          "hover-border-color": buttonColor,
          "active-bg-color": activeBgColor,
          "active-text-color": `var(${ns.cssVarName("color-white")})`,
          "active-border-color": activeBgColor
        });
        if (_disabled.value) {
          styles[ns.cssVarBlockName("disabled-bg-color")] = props.dark ? darken(color, 90) : color.tint(90).toString();
          styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-border-color")] = props.dark ? darken(color, 80) : color.tint(80).toString();
        }
      } else {
        const hoverBgColor = props.dark ? darken(color, 30) : color.tint(30).toString();
        const textColor = color.isDark() ? `var(${ns.cssVarName("color-white")})` : `var(${ns.cssVarName("color-black")})`;
        styles = ns.cssVarBlock({
          "bg-color": buttonColor,
          "text-color": textColor,
          "border-color": buttonColor,
          "hover-bg-color": hoverBgColor,
          "hover-text-color": textColor,
          "hover-border-color": hoverBgColor,
          "active-bg-color": activeBgColor,
          "active-border-color": activeBgColor
        });
        if (_disabled.value) {
          const disabledButtonColor = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-bg-color")] = disabledButtonColor;
          styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? "rgba(255, 255, 255, 0.5)" : `var(${ns.cssVarName("color-white")})`;
          styles[ns.cssVarBlockName("disabled-border-color")] = disabledButtonColor;
        }
      }
    }
    return styles;
  });
}
const __default__$4 = defineComponent({
  name: "ElButton"
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const buttonStyle = useButtonCustomStyle(props);
    const ns = useNamespace("button");
    const { _ref, _size, _type, _disabled, _props, shouldAddSpace, handleClick } = useButton(props, emit);
    const buttonKls = computed(() => [
      ns.b(),
      ns.m(_type.value),
      ns.m(_size.value),
      ns.is("disabled", _disabled.value),
      ns.is("loading", props.loading),
      ns.is("plain", props.plain),
      ns.is("round", props.round),
      ns.is("circle", props.circle),
      ns.is("text", props.text),
      ns.is("link", props.link),
      ns.is("has-bg", props.bg)
    ]);
    expose({
      ref: _ref,
      size: _size,
      type: _type,
      disabled: _disabled,
      shouldAddSpace
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), mergeProps({
        ref_key: "_ref",
        ref: _ref
      }, unref(_props), {
        class: unref(buttonKls),
        style: unref(buttonStyle),
        onClick: unref(handleClick)
      }), {
        default: withCtx(() => [
          _ctx.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            _ctx.$slots.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }) : (openBlock(), createBlock(unref(ElIcon), {
              key: 1,
              class: normalizeClass(unref(ns).is("loading"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.loadingIcon)))
              ]),
              _: 1
            }, 8, ["class"]))
          ], 64)) : _ctx.icon || _ctx.$slots.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
            default: withCtx(() => [
              _ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), { key: 0 })) : renderSlot(_ctx.$slots, "icon", { key: 1 })
            ]),
            _: 3
          })) : createCommentVNode("v-if", true),
          _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
            key: 2,
            class: normalizeClass({ [unref(ns).em("text", "expand")]: unref(shouldAddSpace) })
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 16, ["class", "style", "onClick"]);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["__file", "button.vue"]]);
const buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type
};
const __default__$3 = defineComponent({
  name: "ElButtonGroup"
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: buttonGroupProps,
  setup(__props) {
    const props = __props;
    provide(buttonGroupContextKey, reactive({
      size: toRef(props, "size"),
      type: toRef(props, "type")
    }));
    const ns = useNamespace("button");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`${unref(ns).b("group")}`)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var ButtonGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["__file", "button-group.vue"]]);
const ElButton = withInstall(Button, {
  ButtonGroup
});
withNoopInstall(ButtonGroup);
const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  value: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueValue: {
    type: [String, Number],
    default: void 0
  },
  falseValue: {
    type: [String, Number],
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: useSizeProp,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaControls"])
};
const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
  change: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
const checkboxGroupContextKey = Symbol("checkboxGroupContextKey");
const useCheckboxDisabled = ({
  model,
  isChecked
}) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isLimitDisabled = computed(() => {
    var _a, _b;
    const max = (_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a.value;
    const min = (_b = checkboxGroup == null ? void 0 : checkboxGroup.min) == null ? void 0 : _b.value;
    return !isUndefined(max) && model.value.length >= max && !isChecked.value || !isUndefined(min) && model.value.length <= min && isChecked.value;
  });
  const isDisabled = useFormDisabled(computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.disabled.value) || isLimitDisabled.value));
  return {
    isDisabled,
    isLimitDisabled
  };
};
const useCheckboxEvent = (props, {
  model,
  isLimitExceeded,
  hasOwnLabel,
  isDisabled,
  isLabeledByFormItem
}) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const { formItem } = useFormItem();
  const { emit } = getCurrentInstance();
  function getLabeledValue(value) {
    var _a, _b, _c, _d;
    return [true, props.trueValue, props.trueLabel].includes(value) ? (_b = (_a = props.trueValue) != null ? _a : props.trueLabel) != null ? _b : true : (_d = (_c = props.falseValue) != null ? _c : props.falseLabel) != null ? _d : false;
  }
  function emitChangeEvent(checked, e) {
    emit("change", getLabeledValue(checked), e);
  }
  function handleChange(e) {
    if (isLimitExceeded.value)
      return;
    const target = e.target;
    emit("change", getLabeledValue(target.checked), e);
  }
  async function onClickRoot(e) {
    if (isLimitExceeded.value)
      return;
    if (!hasOwnLabel.value && !isDisabled.value && isLabeledByFormItem.value) {
      const eventTargets = e.composedPath();
      const hasLabel = eventTargets.some((item) => item.tagName === "LABEL");
      if (!hasLabel) {
        model.value = getLabeledValue([false, props.falseValue, props.falseLabel].includes(model.value));
        await nextTick();
        emitChangeEvent(model.value, e);
      }
    }
  }
  const validateEvent = computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.validateEvent) || props.validateEvent);
  watch(() => props.modelValue, () => {
    if (validateEvent.value) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
    }
  });
  return {
    handleChange,
    onClickRoot
  };
};
const useCheckboxModel = (props) => {
  const selfModel = ref(false);
  const { emit } = getCurrentInstance();
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isGroup = computed(() => isUndefined(checkboxGroup) === false);
  const isLimitExceeded = ref(false);
  const model = computed({
    get() {
      var _a, _b;
      return isGroup.value ? (_a = checkboxGroup == null ? void 0 : checkboxGroup.modelValue) == null ? void 0 : _a.value : (_b = props.modelValue) != null ? _b : selfModel.value;
    },
    set(val) {
      var _a, _b;
      if (isGroup.value && isArray(val)) {
        isLimitExceeded.value = ((_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a.value) !== void 0 && val.length > (checkboxGroup == null ? void 0 : checkboxGroup.max.value) && val.length > model.value.length;
        isLimitExceeded.value === false && ((_b = checkboxGroup == null ? void 0 : checkboxGroup.changeEvent) == null ? void 0 : _b.call(checkboxGroup, val));
      } else {
        emit(UPDATE_MODEL_EVENT, val);
        selfModel.value = val;
      }
    }
  });
  return {
    model,
    isGroup,
    isLimitExceeded
  };
};
const useCheckboxStatus = (props, slots, { model }) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isFocused = ref(false);
  const actualValue = computed(() => {
    if (!isPropAbsent(props.value)) {
      return props.value;
    }
    return props.label;
  });
  const isChecked = computed(() => {
    const value = model.value;
    if (isBoolean(value)) {
      return value;
    } else if (isArray(value)) {
      if (isObject(actualValue.value)) {
        return value.map(toRaw).some((o) => isEqual(o, actualValue.value));
      } else {
        return value.map(toRaw).includes(actualValue.value);
      }
    } else if (value !== null && value !== void 0) {
      return value === props.trueValue || value === props.trueLabel;
    } else {
      return !!value;
    }
  });
  const checkboxButtonSize = useFormSize(computed(() => {
    var _a;
    return (_a = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a.value;
  }), {
    prop: true
  });
  const checkboxSize = useFormSize(computed(() => {
    var _a;
    return (_a = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a.value;
  }));
  const hasOwnLabel = computed(() => {
    return !!slots.default || !isPropAbsent(actualValue.value);
  });
  return {
    checkboxButtonSize,
    isChecked,
    isFocused,
    checkboxSize,
    hasOwnLabel,
    actualValue
  };
};
const useCheckbox = (props, slots) => {
  const { formItem: elFormItem } = useFormItem();
  const { model, isGroup, isLimitExceeded } = useCheckboxModel(props);
  const {
    isFocused,
    isChecked,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    actualValue
  } = useCheckboxStatus(props, slots, { model });
  const { isDisabled } = useCheckboxDisabled({ model, isChecked });
  const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem,
    disableIdGeneration: hasOwnLabel,
    disableIdManagement: isGroup
  });
  const { handleChange, onClickRoot } = useCheckboxEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem
  });
  const setStoreValue = () => {
    function addToStore() {
      var _a, _b;
      if (isArray(model.value) && !model.value.includes(actualValue.value)) {
        model.value.push(actualValue.value);
      } else {
        model.value = (_b = (_a = props.trueValue) != null ? _a : props.trueLabel) != null ? _b : true;
      }
    }
    props.checked && addToStore();
  };
  setStoreValue();
  useDeprecated({
    from: "controls",
    replacement: "aria-controls",
    version: "2.8.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => !!props.controls));
  useDeprecated({
    from: "label act as value",
    replacement: "value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => isGroup.value && isPropAbsent(props.value)));
  useDeprecated({
    from: "true-label",
    replacement: "true-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => !!props.trueLabel));
  useDeprecated({
    from: "false-label",
    replacement: "false-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => !!props.falseLabel));
  return {
    inputId,
    isLabeledByFormItem,
    isChecked,
    isDisabled,
    isFocused,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    model,
    actualValue,
    handleChange,
    onClickRoot
  };
};
const _hoisted_1$3 = ["id", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_2$1 = ["id", "indeterminate", "disabled", "value", "name", "tabindex"];
const __default__$2 = defineComponent({
  name: "ElCheckbox"
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      inputId,
      isLabeledByFormItem,
      isChecked,
      isDisabled,
      isFocused,
      checkboxSize,
      hasOwnLabel,
      model,
      actualValue,
      handleChange,
      onClickRoot
    } = useCheckbox(props, slots);
    const ns = useNamespace("checkbox");
    const compKls = computed(() => {
      return [
        ns.b(),
        ns.m(checkboxSize.value),
        ns.is("disabled", isDisabled.value),
        ns.is("bordered", props.border),
        ns.is("checked", isChecked.value)
      ];
    });
    const spanKls = computed(() => {
      return [
        ns.e("input"),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value),
        ns.is("indeterminate", props.indeterminate),
        ns.is("focus", isFocused.value)
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(!unref(hasOwnLabel) && unref(isLabeledByFormItem) ? "span" : "label"), {
        class: normalizeClass(unref(compKls)),
        "aria-controls": _ctx.indeterminate ? _ctx.controls || _ctx.ariaControls : null,
        onClick: unref(onClickRoot)
      }, {
        default: withCtx(() => {
          var _a, _b;
          return [
            createElementVNode("span", {
              class: normalizeClass(unref(spanKls))
            }, [
              _ctx.trueValue || _ctx.falseValue || _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                id: unref(inputId),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
                class: normalizeClass(unref(ns).e("original")),
                type: "checkbox",
                indeterminate: _ctx.indeterminate,
                name: _ctx.name,
                tabindex: _ctx.tabindex,
                disabled: unref(isDisabled),
                "true-value": (_a = _ctx.trueValue) != null ? _a : _ctx.trueLabel,
                "false-value": (_b = _ctx.falseValue) != null ? _b : _ctx.falseLabel,
                onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
                onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
                onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false),
                onClick: _cache[4] || (_cache[4] = withModifiers(() => {
                }, ["stop"]))
              }, null, 42, _hoisted_1$3)), [
                [vModelCheckbox, unref(model)]
              ]) : withDirectives((openBlock(), createElementBlock("input", {
                key: 1,
                id: unref(inputId),
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(model) ? model.value = $event : null),
                class: normalizeClass(unref(ns).e("original")),
                type: "checkbox",
                indeterminate: _ctx.indeterminate,
                disabled: unref(isDisabled),
                value: unref(actualValue),
                name: _ctx.name,
                tabindex: _ctx.tabindex,
                onChange: _cache[6] || (_cache[6] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
                onFocus: _cache[7] || (_cache[7] = ($event) => isFocused.value = true),
                onBlur: _cache[8] || (_cache[8] = ($event) => isFocused.value = false),
                onClick: _cache[9] || (_cache[9] = withModifiers(() => {
                }, ["stop"]))
              }, null, 42, _hoisted_2$1)), [
                [vModelCheckbox, unref(model)]
              ]),
              createElementVNode("span", {
                class: normalizeClass(unref(ns).e("inner"))
              }, null, 2)
            ], 2),
            unref(hasOwnLabel) ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(unref(ns).e("label"))
            }, [
              renderSlot(_ctx.$slots, "default"),
              !_ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(_ctx.label), 1)
              ], 64)) : createCommentVNode("v-if", true)
            ], 2)) : createCommentVNode("v-if", true)
          ];
        }),
        _: 3
      }, 8, ["class", "aria-controls", "onClick"]);
    };
  }
});
var Checkbox = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["__file", "checkbox.vue"]]);
const _hoisted_1$2 = ["name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_2 = ["name", "tabindex", "disabled", "value"];
const __default__$1 = defineComponent({
  name: "ElCheckboxButton"
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      isFocused,
      isChecked,
      isDisabled,
      checkboxButtonSize,
      model,
      actualValue,
      handleChange
    } = useCheckbox(props, slots);
    const checkboxGroup = inject(checkboxGroupContextKey, void 0);
    const ns = useNamespace("checkbox");
    const activeStyle = computed(() => {
      var _a, _b, _c, _d;
      const fillValue = (_b = (_a = checkboxGroup == null ? void 0 : checkboxGroup.fill) == null ? void 0 : _a.value) != null ? _b : "";
      return {
        backgroundColor: fillValue,
        borderColor: fillValue,
        color: (_d = (_c = checkboxGroup == null ? void 0 : checkboxGroup.textColor) == null ? void 0 : _c.value) != null ? _d : "",
        boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : void 0
      };
    });
    const labelKls = computed(() => {
      return [
        ns.b("button"),
        ns.bm("button", checkboxButtonSize.value),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value),
        ns.is("focus", isFocused.value)
      ];
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(unref(labelKls))
      }, [
        _ctx.trueValue || _ctx.falseValue || _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
          key: 0,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          "true-value": (_a = _ctx.trueValue) != null ? _a : _ctx.trueLabel,
          "false-value": (_b = _ctx.falseValue) != null ? _b : _ctx.falseLabel,
          onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
          onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false),
          onClick: _cache[4] || (_cache[4] = withModifiers(() => {
          }, ["stop"]))
        }, null, 42, _hoisted_1$2)), [
          [vModelCheckbox, unref(model)]
        ]) : withDirectives((openBlock(), createElementBlock("input", {
          key: 1,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          value: unref(actualValue),
          onChange: _cache[6] || (_cache[6] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[7] || (_cache[7] = ($event) => isFocused.value = true),
          onBlur: _cache[8] || (_cache[8] = ($event) => isFocused.value = false),
          onClick: _cache[9] || (_cache[9] = withModifiers(() => {
          }, ["stop"]))
        }, null, 42, _hoisted_2)), [
          [vModelCheckbox, unref(model)]
        ]),
        _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass(unref(ns).be("button", "inner")),
          style: normalizeStyle(unref(isChecked) ? unref(activeStyle) : void 0)
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 6)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var CheckboxButton = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["__file", "checkbox-button.vue"]]);
const checkboxGroupProps = buildProps({
  modelValue: {
    type: definePropType(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: useSizeProp,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaLabel"])
});
const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isArray(val),
  change: (val) => isArray(val)
};
const __default__ = defineComponent({
  name: "ElCheckboxGroup"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: checkboxGroupProps,
  emits: checkboxGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("checkbox");
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = async (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      await nextTick();
      emit("change", value);
    };
    const modelValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    provide(checkboxGroupContextKey, {
      ...pick(toRefs(props), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue,
      changeEvent
    });
    useDeprecated({
      from: "label",
      replacement: "aria-label",
      version: "2.8.0",
      scope: "el-checkbox-group",
      ref: "https://element-plus.org/en-US/component/checkbox.html"
    }, computed(() => !!props.label));
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        id: unref(groupId),
        class: normalizeClass(unref(ns).b("group")),
        role: "group",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || _ctx.ariaLabel || "checkbox-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? (_a = unref(formItem)) == null ? void 0 : _a.labelId : void 0
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var CheckboxGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__file", "checkbox-group.vue"]]);
const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup
});
withNoopInstall(CheckboxButton);
const ElCheckboxGroup = withNoopInstall(CheckboxGroup);
const rovingFocusGroupProps = buildProps({
  style: { type: definePropType([String, Array, Object]) },
  currentTabId: {
    type: definePropType(String)
  },
  defaultCurrentTabId: String,
  loop: Boolean,
  dir: {
    type: String,
    values: ["ltr", "rtl"],
    default: "ltr"
  },
  orientation: {
    type: definePropType(String)
  },
  onBlur: Function,
  onFocus: Function,
  onMousedown: Function
});
const {
  ElCollection,
  ElCollectionItem,
  COLLECTION_INJECTION_KEY,
  COLLECTION_ITEM_INJECTION_KEY
} = createCollectionWithScope("RovingFocusGroup");
const ROVING_FOCUS_GROUP_INJECTION_KEY = Symbol("elRovingFocusGroup");
const ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY = Symbol("elRovingFocusGroupItem");
const MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
const getDirectionAwareKey = (key, dir) => {
  return key;
};
const getFocusIntent = (event, orientation, dir) => {
  const key = getDirectionAwareKey(event.key);
  return MAP_KEY_TO_FOCUS_INTENT[key];
};
const reorderArray = (array, atIdx) => {
  return array.map((_, idx) => array[(idx + atIdx) % array.length]);
};
const focusFirst = (elements) => {
  const { activeElement: prevActive } = void 0;
  for (const element of elements) {
    if (element === prevActive)
      return;
    element.focus();
    if (prevActive !== (void 0).activeElement)
      return;
  }
};
const CURRENT_TAB_ID_CHANGE_EVT = "currentTabIdChange";
const ENTRY_FOCUS_EVT = "rovingFocusGroup.entryFocus";
const EVT_OPTS = { bubbles: false, cancelable: true };
const _sfc_main$7 = defineComponent({
  name: "ElRovingFocusGroupImpl",
  inheritAttrs: false,
  props: rovingFocusGroupProps,
  emits: [CURRENT_TAB_ID_CHANGE_EVT, "entryFocus"],
  setup(props, { emit }) {
    var _a;
    const currentTabbedId = ref((_a = props.currentTabId || props.defaultCurrentTabId) != null ? _a : null);
    const isBackingOut = ref(false);
    const isClickFocus = ref(false);
    const rovingFocusGroupRef = ref(null);
    const { getItems } = inject(COLLECTION_INJECTION_KEY, void 0);
    const rovingFocusGroupRootStyle = computed(() => {
      return [
        {
          outline: "none"
        },
        props.style
      ];
    });
    const onItemFocus = (tabbedId) => {
      emit(CURRENT_TAB_ID_CHANGE_EVT, tabbedId);
    };
    const onItemShiftTab = () => {
      isBackingOut.value = true;
    };
    const onMousedown = composeEventHandlers((e) => {
      var _a2;
      (_a2 = props.onMousedown) == null ? void 0 : _a2.call(props, e);
    }, () => {
      isClickFocus.value = true;
    });
    const onFocus = composeEventHandlers((e) => {
      var _a2;
      (_a2 = props.onFocus) == null ? void 0 : _a2.call(props, e);
    }, (e) => {
      const isKeyboardFocus = !unref(isClickFocus);
      const { target, currentTarget } = e;
      if (target === currentTarget && isKeyboardFocus && !unref(isBackingOut)) {
        const entryFocusEvt = new Event(ENTRY_FOCUS_EVT, EVT_OPTS);
        currentTarget == null ? void 0 : currentTarget.dispatchEvent(entryFocusEvt);
        if (!entryFocusEvt.defaultPrevented) {
          const items = getItems().filter((item) => item.focusable);
          const activeItem = items.find((item) => item.active);
          const currentItem = items.find((item) => item.id === unref(currentTabbedId));
          const candidates = [activeItem, currentItem, ...items].filter(Boolean);
          const candidateNodes = candidates.map((item) => item.ref);
          focusFirst(candidateNodes);
        }
      }
      isClickFocus.value = false;
    });
    const onBlur = composeEventHandlers((e) => {
      var _a2;
      (_a2 = props.onBlur) == null ? void 0 : _a2.call(props, e);
    }, () => {
      isBackingOut.value = false;
    });
    const handleEntryFocus = (...args) => {
      emit("entryFocus", ...args);
    };
    provide(ROVING_FOCUS_GROUP_INJECTION_KEY, {
      currentTabbedId: readonly(currentTabbedId),
      loop: toRef(props, "loop"),
      tabIndex: computed(() => {
        return unref(isBackingOut) ? -1 : 0;
      }),
      rovingFocusGroupRef,
      rovingFocusGroupRootStyle,
      orientation: toRef(props, "orientation"),
      dir: toRef(props, "dir"),
      onItemFocus,
      onItemShiftTab,
      onBlur,
      onFocus,
      onMousedown
    });
    watch(() => props.currentTabId, (val) => {
      currentTabbedId.value = val != null ? val : null;
    });
    useEventListener(rovingFocusGroupRef, ENTRY_FOCUS_EVT, handleEntryFocus);
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var ElRovingFocusGroupImpl = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["render", _sfc_render$6], ["__file", "roving-focus-group-impl.vue"]]);
const _sfc_main$6 = defineComponent({
  name: "ElRovingFocusGroup",
  components: {
    ElFocusGroupCollection: ElCollection,
    ElRovingFocusGroupImpl
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_roving_focus_group_impl = resolveComponent("el-roving-focus-group-impl");
  const _component_el_focus_group_collection = resolveComponent("el-focus-group-collection");
  return openBlock(), createBlock(_component_el_focus_group_collection, null, {
    default: withCtx(() => [
      createVNode(_component_el_roving_focus_group_impl, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]),
    _: 3
  });
}
var ElRovingFocusGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["render", _sfc_render$5], ["__file", "roving-focus-group.vue"]]);
const _sfc_main$5 = defineComponent({
  components: {
    ElRovingFocusCollectionItem: ElCollectionItem
  },
  props: {
    focusable: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ["mousedown", "focus", "keydown"],
  setup(props, { emit }) {
    const { currentTabbedId, loop, onItemFocus, onItemShiftTab } = inject(ROVING_FOCUS_GROUP_INJECTION_KEY, void 0);
    const { getItems } = inject(COLLECTION_INJECTION_KEY, void 0);
    const id = useId();
    const rovingFocusGroupItemRef = ref(null);
    const handleMousedown = composeEventHandlers((e) => {
      emit("mousedown", e);
    }, (e) => {
      if (!props.focusable) {
        e.preventDefault();
      } else {
        onItemFocus(unref(id));
      }
    });
    const handleFocus = composeEventHandlers((e) => {
      emit("focus", e);
    }, () => {
      onItemFocus(unref(id));
    });
    const handleKeydown = composeEventHandlers((e) => {
      emit("keydown", e);
    }, (e) => {
      const { key, shiftKey, target, currentTarget } = e;
      if (key === EVENT_CODE.tab && shiftKey) {
        onItemShiftTab();
        return;
      }
      if (target !== currentTarget)
        return;
      const focusIntent = getFocusIntent(e);
      if (focusIntent) {
        e.preventDefault();
        const items = getItems().filter((item) => item.focusable);
        let elements = items.map((item) => item.ref);
        switch (focusIntent) {
          case "last": {
            elements.reverse();
            break;
          }
          case "prev":
          case "next": {
            if (focusIntent === "prev") {
              elements.reverse();
            }
            const currentIdx = elements.indexOf(currentTarget);
            elements = loop.value ? reorderArray(elements, currentIdx + 1) : elements.slice(currentIdx + 1);
            break;
          }
        }
        nextTick(() => {
          focusFirst(elements);
        });
      }
    });
    const isCurrentTab = computed(() => currentTabbedId.value === unref(id));
    provide(ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, {
      rovingFocusGroupItemRef,
      tabIndex: computed(() => unref(isCurrentTab) ? 0 : -1),
      handleMousedown,
      handleFocus,
      handleKeydown
    });
    return {
      id,
      handleKeydown,
      handleFocus,
      handleMousedown
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_roving_focus_collection_item = resolveComponent("el-roving-focus-collection-item");
  return openBlock(), createBlock(_component_el_roving_focus_collection_item, {
    id: _ctx.id,
    focusable: _ctx.focusable,
    active: _ctx.active
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "focusable", "active"]);
}
var ElRovingFocusItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["render", _sfc_render$4], ["__file", "roving-focus-item.vue"]]);
const DROPDOWN_INJECTION_KEY = Symbol("elDropdown");
const { ButtonGroup: ElButtonGroup } = ElButton;
const _sfc_main$4 = defineComponent({
  name: "ElDropdown",
  components: {
    ElButton,
    ElButtonGroup,
    ElScrollbar,
    ElDropdownCollection: ElCollection$1,
    ElTooltip,
    ElRovingFocusGroup,
    ElOnlyChild: OnlyChild,
    ElIcon,
    ArrowDown: arrow_down_default
  },
  props: dropdownProps,
  emits: ["visible-change", "click", "command"],
  setup(props, { emit }) {
    const _instance = getCurrentInstance();
    const ns = useNamespace("dropdown");
    const { t } = useLocale();
    const triggeringElementRef = ref();
    const referenceElementRef = ref();
    const popperRef = ref(null);
    const contentRef = ref(null);
    const scrollbar = ref(null);
    const currentTabId = ref(null);
    const isUsingKeyboard = ref(false);
    const triggerKeys = [EVENT_CODE.enter, EVENT_CODE.space, EVENT_CODE.down];
    const wrapStyle = computed(() => ({
      maxHeight: addUnit(props.maxHeight)
    }));
    const dropdownTriggerKls = computed(() => [ns.m(dropdownSize.value)]);
    const trigger = computed(() => castArray(props.trigger));
    const defaultTriggerId = useId().value;
    const triggerId = computed(() => {
      return props.id || defaultTriggerId;
    });
    watch([triggeringElementRef, trigger], ([triggeringElement, trigger2], [prevTriggeringElement]) => {
      var _a, _b, _c;
      if ((_a = prevTriggeringElement == null ? void 0 : prevTriggeringElement.$el) == null ? void 0 : _a.removeEventListener) {
        prevTriggeringElement.$el.removeEventListener("pointerenter", onAutofocusTriggerEnter);
      }
      if ((_b = triggeringElement == null ? void 0 : triggeringElement.$el) == null ? void 0 : _b.removeEventListener) {
        triggeringElement.$el.removeEventListener("pointerenter", onAutofocusTriggerEnter);
      }
      if (((_c = triggeringElement == null ? void 0 : triggeringElement.$el) == null ? void 0 : _c.addEventListener) && trigger2.includes("hover")) {
        triggeringElement.$el.addEventListener("pointerenter", onAutofocusTriggerEnter);
      }
    }, { immediate: true });
    function handleClick() {
      handleClose();
    }
    function handleClose() {
      var _a;
      (_a = popperRef.value) == null ? void 0 : _a.onClose();
    }
    function handleOpen() {
      var _a;
      (_a = popperRef.value) == null ? void 0 : _a.onOpen();
    }
    const dropdownSize = useFormSize();
    function commandHandler(...args) {
      emit("command", ...args);
    }
    function onAutofocusTriggerEnter() {
      var _a, _b;
      (_b = (_a = triggeringElementRef.value) == null ? void 0 : _a.$el) == null ? void 0 : _b.focus();
    }
    function onItemEnter() {
    }
    function onItemLeave() {
      const contentEl = unref(contentRef);
      trigger.value.includes("hover") && (contentEl == null ? void 0 : contentEl.focus());
      currentTabId.value = null;
    }
    function handleCurrentTabIdChange(id) {
      currentTabId.value = id;
    }
    function handleEntryFocus(e) {
      if (!isUsingKeyboard.value) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
    function handleBeforeShowTooltip() {
      emit("visible-change", true);
    }
    function handleShowTooltip(event) {
      if ((event == null ? void 0 : event.type) === "keydown") {
        contentRef.value.focus();
      }
    }
    function handleBeforeHideTooltip() {
      emit("visible-change", false);
    }
    provide(DROPDOWN_INJECTION_KEY, {
      contentRef,
      role: computed(() => props.role),
      triggerId,
      isUsingKeyboard,
      onItemEnter,
      onItemLeave
    });
    provide("elDropdown", {
      instance: _instance,
      dropdownSize,
      handleClick,
      commandHandler,
      trigger: toRef(props, "trigger"),
      hideOnClick: toRef(props, "hideOnClick")
    });
    const onFocusAfterTrapped = (e) => {
      var _a, _b;
      e.preventDefault();
      (_b = (_a = contentRef.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a, {
        preventScroll: true
      });
    };
    const handlerMainButtonClick = (event) => {
      emit("click", event);
    };
    return {
      t,
      ns,
      scrollbar,
      wrapStyle,
      dropdownTriggerKls,
      dropdownSize,
      triggerId,
      triggerKeys,
      currentTabId,
      handleCurrentTabIdChange,
      handlerMainButtonClick,
      handleEntryFocus,
      handleClose,
      handleOpen,
      handleBeforeShowTooltip,
      handleShowTooltip,
      handleBeforeHideTooltip,
      onFocusAfterTrapped,
      popperRef,
      contentRef,
      triggeringElementRef,
      referenceElementRef
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_el_dropdown_collection = resolveComponent("el-dropdown-collection");
  const _component_el_roving_focus_group = resolveComponent("el-roving-focus-group");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_only_child = resolveComponent("el-only-child");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_button = resolveComponent("el-button");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button_group = resolveComponent("el-button-group");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b(), _ctx.ns.is("disabled", _ctx.disabled)])
  }, [
    createVNode(_component_el_tooltip, {
      ref: "popperRef",
      role: _ctx.role,
      effect: _ctx.effect,
      "fallback-placements": ["bottom", "top"],
      "popper-options": _ctx.popperOptions,
      "gpu-acceleration": false,
      "hide-after": _ctx.trigger === "hover" ? _ctx.hideTimeout : 0,
      "manual-mode": true,
      placement: _ctx.placement,
      "popper-class": [_ctx.ns.e("popper"), _ctx.popperClass],
      "reference-element": (_a = _ctx.referenceElementRef) == null ? void 0 : _a.$el,
      trigger: _ctx.trigger,
      "trigger-keys": _ctx.triggerKeys,
      "trigger-target-el": _ctx.contentRef,
      "show-after": _ctx.trigger === "hover" ? _ctx.showTimeout : 0,
      "stop-popper-mouse-event": false,
      "virtual-ref": _ctx.triggeringElementRef,
      "virtual-triggering": _ctx.splitButton,
      disabled: _ctx.disabled,
      transition: `${_ctx.ns.namespace.value}-zoom-in-top`,
      teleported: _ctx.teleported,
      pure: "",
      persistent: "",
      onBeforeShow: _ctx.handleBeforeShowTooltip,
      onShow: _ctx.handleShowTooltip,
      onBeforeHide: _ctx.handleBeforeHideTooltip
    }, createSlots({
      content: withCtx(() => [
        createVNode(_component_el_scrollbar, {
          ref: "scrollbar",
          "wrap-style": _ctx.wrapStyle,
          tag: "div",
          "view-class": _ctx.ns.e("list")
        }, {
          default: withCtx(() => [
            createVNode(_component_el_roving_focus_group, {
              loop: _ctx.loop,
              "current-tab-id": _ctx.currentTabId,
              orientation: "horizontal",
              onCurrentTabIdChange: _ctx.handleCurrentTabIdChange,
              onEntryFocus: _ctx.handleEntryFocus
            }, {
              default: withCtx(() => [
                createVNode(_component_el_dropdown_collection, null, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "dropdown")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["loop", "current-tab-id", "onCurrentTabIdChange", "onEntryFocus"])
          ]),
          _: 3
        }, 8, ["wrap-style", "view-class"])
      ]),
      _: 2
    }, [
      !_ctx.splitButton ? {
        name: "default",
        fn: withCtx(() => [
          createVNode(_component_el_only_child, {
            id: _ctx.triggerId,
            ref: "triggeringElementRef",
            role: "button",
            tabindex: _ctx.tabindex
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "tabindex"])
        ])
      } : void 0
    ]), 1032, ["role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "onBeforeShow", "onShow", "onBeforeHide"]),
    _ctx.splitButton ? (openBlock(), createBlock(_component_el_button_group, { key: 0 }, {
      default: withCtx(() => [
        createVNode(_component_el_button, mergeProps({ ref: "referenceElementRef" }, _ctx.buttonProps, {
          size: _ctx.dropdownSize,
          type: _ctx.type,
          disabled: _ctx.disabled,
          tabindex: _ctx.tabindex,
          onClick: _ctx.handlerMainButtonClick
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, ["size", "type", "disabled", "tabindex", "onClick"]),
        createVNode(_component_el_button, mergeProps({
          id: _ctx.triggerId,
          ref: "triggeringElementRef"
        }, _ctx.buttonProps, {
          role: "button",
          size: _ctx.dropdownSize,
          type: _ctx.type,
          class: _ctx.ns.e("caret-button"),
          disabled: _ctx.disabled,
          tabindex: _ctx.tabindex,
          "aria-label": _ctx.t("el.dropdown.toggleDropdown")
        }), {
          default: withCtx(() => [
            createVNode(_component_el_icon, {
              class: normalizeClass(_ctx.ns.e("icon"))
            }, {
              default: withCtx(() => [
                createVNode(_component_arrow_down)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 16, ["id", "size", "type", "class", "disabled", "tabindex", "aria-label"])
      ]),
      _: 3
    })) : createCommentVNode("v-if", true)
  ], 2);
}
var Dropdown = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render$3], ["__file", "dropdown.vue"]]);
const _sfc_main$3 = defineComponent({
  name: "DropdownItemImpl",
  components: {
    ElIcon
  },
  props: dropdownItemProps,
  emits: ["pointermove", "pointerleave", "click", "clickimpl"],
  setup(_, { emit }) {
    const ns = useNamespace("dropdown");
    const { role: menuRole } = inject(DROPDOWN_INJECTION_KEY, void 0);
    const { collectionItemRef: dropdownCollectionItemRef } = inject(COLLECTION_ITEM_INJECTION_KEY$1, void 0);
    const { collectionItemRef: rovingFocusCollectionItemRef } = inject(COLLECTION_ITEM_INJECTION_KEY, void 0);
    const {
      rovingFocusGroupItemRef,
      tabIndex,
      handleFocus,
      handleKeydown: handleItemKeydown,
      handleMousedown
    } = inject(ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, void 0);
    const itemRef = composeRefs(dropdownCollectionItemRef, rovingFocusCollectionItemRef, rovingFocusGroupItemRef);
    const role = computed(() => {
      if (menuRole.value === "menu") {
        return "menuitem";
      } else if (menuRole.value === "navigation") {
        return "link";
      }
      return "button";
    });
    const handleKeydown = composeEventHandlers((e) => {
      const { code } = e;
      if (code === EVENT_CODE.enter || code === EVENT_CODE.space) {
        e.preventDefault();
        e.stopImmediatePropagation();
        emit("clickimpl", e);
        return true;
      }
    }, handleItemKeydown);
    return {
      ns,
      itemRef,
      dataset: {
        [COLLECTION_ITEM_SIGN]: ""
      },
      role,
      tabIndex,
      handleFocus,
      handleKeydown,
      handleMousedown
    };
  }
});
const _hoisted_1$1 = ["aria-disabled", "tabindex", "role"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.divided ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      role: "separator",
      class: _ctx.ns.bem("menu", "item", "divided")
    }, _ctx.$attrs), null, 16)) : createCommentVNode("v-if", true),
    createElementVNode("li", mergeProps({ ref: _ctx.itemRef }, { ..._ctx.dataset, ..._ctx.$attrs }, {
      "aria-disabled": _ctx.disabled,
      class: [_ctx.ns.be("menu", "item"), _ctx.ns.is("disabled", _ctx.disabled)],
      tabindex: _ctx.tabIndex,
      role: _ctx.role,
      onClick: _cache[0] || (_cache[0] = (e) => _ctx.$emit("clickimpl", e)),
      onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
      onKeydown: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args), ["self"])),
      onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.handleMousedown && _ctx.handleMousedown(...args)),
      onPointermove: _cache[4] || (_cache[4] = (e) => _ctx.$emit("pointermove", e)),
      onPointerleave: _cache[5] || (_cache[5] = (e) => _ctx.$emit("pointerleave", e))
    }), [
      _ctx.icon ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
        ]),
        _: 1
      })) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default")
    ], 16, _hoisted_1$1)
  ], 64);
}
var ElDropdownItemImpl = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["render", _sfc_render$2], ["__file", "dropdown-item-impl.vue"]]);
const useDropdown = () => {
  const elDropdown = inject("elDropdown", {});
  const _elDropdownSize = computed(() => elDropdown == null ? void 0 : elDropdown.dropdownSize);
  return {
    elDropdown,
    _elDropdownSize
  };
};
const _sfc_main$2 = defineComponent({
  name: "ElDropdownItem",
  components: {
    ElDropdownCollectionItem: ElCollectionItem$1,
    ElRovingFocusItem,
    ElDropdownItemImpl
  },
  inheritAttrs: false,
  props: dropdownItemProps,
  emits: ["pointermove", "pointerleave", "click"],
  setup(props, { emit, attrs }) {
    const { elDropdown } = useDropdown();
    const _instance = getCurrentInstance();
    const itemRef = ref(null);
    const textContent = computed(() => {
      var _a, _b;
      return (_b = (_a = unref(itemRef)) == null ? void 0 : _a.textContent) != null ? _b : "";
    });
    const { onItemEnter, onItemLeave } = inject(DROPDOWN_INJECTION_KEY, void 0);
    const handlePointerMove = composeEventHandlers((e) => {
      emit("pointermove", e);
      return e.defaultPrevented;
    }, whenMouse((e) => {
      if (props.disabled) {
        onItemLeave(e);
        return;
      }
      const target = e.currentTarget;
      if (target === (void 0).activeElement || target.contains((void 0).activeElement)) {
        return;
      }
      onItemEnter(e);
      if (!e.defaultPrevented) {
        target == null ? void 0 : target.focus();
      }
    }));
    const handlePointerLeave = composeEventHandlers((e) => {
      emit("pointerleave", e);
      return e.defaultPrevented;
    }, whenMouse((e) => {
      onItemLeave(e);
    }));
    const handleClick = composeEventHandlers((e) => {
      if (props.disabled) {
        return;
      }
      emit("click", e);
      return e.type !== "keydown" && e.defaultPrevented;
    }, (e) => {
      var _a, _b, _c;
      if (props.disabled) {
        e.stopImmediatePropagation();
        return;
      }
      if ((_a = elDropdown == null ? void 0 : elDropdown.hideOnClick) == null ? void 0 : _a.value) {
        (_b = elDropdown.handleClick) == null ? void 0 : _b.call(elDropdown);
      }
      (_c = elDropdown.commandHandler) == null ? void 0 : _c.call(elDropdown, props.command, _instance, e);
    });
    const propsAndAttrs = computed(() => {
      return { ...props, ...attrs };
    });
    return {
      handleClick,
      handlePointerMove,
      handlePointerLeave,
      textContent,
      propsAndAttrs
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_el_dropdown_item_impl = resolveComponent("el-dropdown-item-impl");
  const _component_el_roving_focus_item = resolveComponent("el-roving-focus-item");
  const _component_el_dropdown_collection_item = resolveComponent("el-dropdown-collection-item");
  return openBlock(), createBlock(_component_el_dropdown_collection_item, {
    disabled: _ctx.disabled,
    "text-value": (_a = _ctx.textValue) != null ? _a : _ctx.textContent
  }, {
    default: withCtx(() => [
      createVNode(_component_el_roving_focus_item, {
        focusable: !_ctx.disabled
      }, {
        default: withCtx(() => [
          createVNode(_component_el_dropdown_item_impl, mergeProps(_ctx.propsAndAttrs, {
            onPointerleave: _ctx.handlePointerLeave,
            onPointermove: _ctx.handlePointerMove,
            onClickimpl: _ctx.handleClick
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 16, ["onPointerleave", "onPointermove", "onClickimpl"])
        ]),
        _: 3
      }, 8, ["focusable"])
    ]),
    _: 3
  }, 8, ["disabled", "text-value"]);
}
var DropdownItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["render", _sfc_render$1], ["__file", "dropdown-item.vue"]]);
const _sfc_main$1 = defineComponent({
  name: "ElDropdownMenu",
  props: dropdownMenuProps,
  setup(props) {
    const ns = useNamespace("dropdown");
    const { _elDropdownSize } = useDropdown();
    const size = _elDropdownSize.value;
    const { focusTrapRef, onKeydown } = inject(FOCUS_TRAP_INJECTION_KEY, void 0);
    const { contentRef, role, triggerId } = inject(DROPDOWN_INJECTION_KEY, void 0);
    const { collectionRef: dropdownCollectionRef, getItems } = inject(COLLECTION_INJECTION_KEY$1, void 0);
    const {
      rovingFocusGroupRef,
      rovingFocusGroupRootStyle,
      tabIndex,
      onBlur,
      onFocus,
      onMousedown
    } = inject(ROVING_FOCUS_GROUP_INJECTION_KEY, void 0);
    const { collectionRef: rovingFocusGroupCollectionRef } = inject(COLLECTION_INJECTION_KEY, void 0);
    const dropdownKls = computed(() => {
      return [ns.b("menu"), ns.bm("menu", size == null ? void 0 : size.value)];
    });
    const dropdownListWrapperRef = composeRefs(contentRef, dropdownCollectionRef, focusTrapRef, rovingFocusGroupRef, rovingFocusGroupCollectionRef);
    const composedKeydown = composeEventHandlers((e) => {
      var _a;
      (_a = props.onKeydown) == null ? void 0 : _a.call(props, e);
    }, (e) => {
      const { currentTarget, code, target } = e;
      currentTarget.contains(target);
      if (EVENT_CODE.tab === code) {
        e.stopImmediatePropagation();
      }
      e.preventDefault();
      if (target !== unref(contentRef))
        return;
      if (!FIRST_LAST_KEYS.includes(code))
        return;
      const items = getItems().filter((item) => !item.disabled);
      const targets = items.map((item) => item.ref);
      if (LAST_KEYS.includes(code)) {
        targets.reverse();
      }
      focusFirst(targets);
    });
    const handleKeydown = (e) => {
      composedKeydown(e);
      onKeydown(e);
    };
    return {
      size,
      rovingFocusGroupRootStyle,
      tabIndex,
      dropdownKls,
      role,
      triggerId,
      dropdownListWrapperRef,
      handleKeydown,
      onBlur,
      onFocus,
      onMousedown
    };
  }
});
const _hoisted_1 = ["role", "aria-labelledby"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", {
    ref: _ctx.dropdownListWrapperRef,
    class: normalizeClass(_ctx.dropdownKls),
    style: normalizeStyle(_ctx.rovingFocusGroupRootStyle),
    tabindex: -1,
    role: _ctx.role,
    "aria-labelledby": _ctx.triggerId,
    onBlur: _cache[0] || (_cache[0] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
    onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)),
    onKeydown: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args), ["self"])),
    onMousedown: _cache[3] || (_cache[3] = withModifiers((...args) => _ctx.onMousedown && _ctx.onMousedown(...args), ["self"]))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 46, _hoisted_1);
}
var DropdownMenu = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["render", _sfc_render], ["__file", "dropdown-menu.vue"]]);
const ElDropdown = withInstall(Dropdown, {
  DropdownItem,
  DropdownMenu
});
const ElDropdownItem = withNoopInstall(DropdownItem);
const ElDropdownMenu = withNoopInstall(DropdownMenu);
let flag;
function throttle(func, wait = 500, immediate = true) {
  if (immediate) {
    if (!flag) {
      flag = true;
      typeof func === "function" && func();
      setTimeout(() => {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func === "function" && func();
      }, wait);
    }
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const searchIpt = ref("");
    const checkList = ref(["Filmmaker", "Artist"]);
    const limit = ref(30);
    const total = ref(400);
    const current = ref(1);
    const chosed = ref("All");
    const sort = ref("New");
    const starsListData = ref([]);
    const dropdownRef = ref();
    const listData = [
      {
        number: 42,
        info: "traditional artists from oil painting, illustration, graphic design, sculpture, fashion design, music fields",
        introduce: "47 Traditional Artists: oil painters, illustrators, graphic designers, sculptors, fashion designers, musicians, etc."
      },
      {
        number: 20,
        info: "crypto artists including 3D designers, concept artists, programmers, visual engineers",
        introduce: "22 Crypto Artists: crypto native artists, 3D designers, programmers, concept artists, visual engineers, etc."
      },
      {
        number: 15,
        info: "multi-disciplinary artists including musician, photographers, filmmakers, composers",
        introduce: "15 Multi-disciplinary: musicians, photographers, filmmakers, composers, actors, etc."
      }
    ];
    const listData2 = [
      {
        number: 14,
        title: "Filmmakers",
        info: "Shortlisted and awarded at Academy Awards"
      },
      {
        number: 3,
        title: "Filmmakers",
        info: "Shortlisted at British Academy Film Awards"
      },
      {
        number: 27,
        title: "Filmmakers",
        info: "Shortlisted and awarded at major NA film festivals"
      },
      {
        number: 18,
        title: "Filmmakers",
        info: "Shortlisted and awarded at the three major EU film festivals"
      },
      {
        number: 129,
        title: "Filmmakers",
        info: "Nominated/Awarded at various international film festival"
      }
    ];
    const currentPages = computed(() => {
      const start = limit.value * current.value - limit.value + 1;
      const end = starsListData.value.length > 0 ? limit.value * current.value - limit.value + starsListData.value.length : "";
      return { start, end };
    });
    const getStarsList = async () => {
      starsListData.value = [];
      const { data } = await apiIndexStarList(chosed.value, sort.value, limit.value, current.value, searchIpt.value);
      starsListData.value = data.value.data.data;
      total.value = data.value.data.total;
    };
    getStarsList();
    const handleCommand = (command) => {
      sort.value = command;
      getStarsList();
      dropdownRef.value.handleClose();
    };
    const handleSearchIpt = () => {
      current.value = 1;
      getStarsList();
    };
    const handleChange = () => {
      if (checkList.value.length == 2)
        chosed.value = "All";
      else
        chosed.value = checkList.value[0];
      current.value = 1;
      getStarsList();
    };
    const curremtChange = (_current) => {
      current.value = _current;
      getStarsList();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_client_only = __nuxt_component_2$1;
      const _component_el_dropdown = ElDropdown;
      const _component_Icon = __nuxt_component_7;
      const _component_el_checkbox_group = ElCheckboxGroup;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_image = ElImage;
      const _component_el_pagination = ElPagination;
      const _component_Footer = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3b35f97a>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "home" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-hidden w-full" data-v-3b35f97a${_scopeId}><div class="h-700px w-full overflow-hidden relative" data-v-3b35f97a${_scopeId}>`);
            _push2(ssrRenderComponent(unref(R), {
              src: "https://www.starscollective.com/assets/videos/pc/SC-Map-4.webm",
              muted: "",
              autoplay: "",
              loop: "",
              playsinline: "",
              class: "absolute inset-0 w-full h-full z-1"
            }, null, _parent2, _scopeId));
            _push2(`<div class="px-50px relative h-full z-20" data-v-3b35f97a${_scopeId}><div class="max-w-1300px mx-auto h-full flex items-center justify-between" data-v-3b35f97a${_scopeId}><div data-v-3b35f97a${_scopeId}><div class="text-77px" style="${ssrRenderStyle({ "font-family": "PPHattonMedium" })}" data-v-3b35f97a${_scopeId}>Our<br data-v-3b35f97a${_scopeId}>Stars</div><img${ssrRenderAttr("src", _imports_0)} class="h-15 block" data-v-3b35f97a${_scopeId}></div></div></div></div><div class="min-w-full px-100px space-x-6 py-10 flex items-center justify-around overflow-hidden bg-[#2F2F2F]" data-v-3b35f97a${_scopeId}><img src="https://www.starscollective.com/assets/images/stars/Sundance.png" class="w-25" data-v-3b35f97a${_scopeId}><img src="https://www.starscollective.com/assets/images/stars/about_lg2_a.png" class="w-20" data-v-3b35f97a${_scopeId}><img src="https://www.starscollective.com/assets/images/stars/about_lg3_a.png" class="w-25" data-v-3b35f97a${_scopeId}><img src="https://www.starscollective.com/assets/images/stars/about_lg4.png" class="w-25" data-v-3b35f97a${_scopeId}><img src="https://www.starscollective.com/assets/images/stars/about_lg5_a.png" class="w-25" data-v-3b35f97a${_scopeId}><img src="https://www.starscollective.com/assets/images/stars/oscar_logo.png" class="w-25" data-v-3b35f97a${_scopeId}><img src="https://www.starscollective.com/assets/images/stars/about_lg7_a.png" class="w-25" data-v-3b35f97a${_scopeId}><img src="https://www.starscollective.com/assets/images/stars/about_lg8_a.png" class="w-25" data-v-3b35f97a${_scopeId}><img src="https://www.starscollective.com/assets/images/stars/about_lg9_a.png" class="w-25" data-v-3b35f97a${_scopeId}></div><div class="w-full gradient-bg flex items-center" data-v-3b35f97a${_scopeId}><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10 w-full" data-v-3b35f97a${_scopeId}><!--[-->`);
            ssrRenderList(listData2, (item, index2) => {
              _push2(`<div class="h-196px bg-white text-black flex flex-col items-center justify-center" data-v-3b35f97a${_scopeId}><div class="text-50px font-bold" data-v-3b35f97a${_scopeId}>${ssrInterpolate(item.number)}</div><div class="my-1 text-16px italic" data-v-3b35f97a${_scopeId}>${ssrInterpolate(item.title)}</div><div class="w-186px text-center text-13px" data-v-3b35f97a${_scopeId}>${ssrInterpolate(item.info)}</div></div>`);
            });
            _push2(`<!--]--></div></div><div class="px-50px py-30" data-v-3b35f97a${_scopeId}><div class="max-w-1300px mx-auto" data-v-3b35f97a${_scopeId}><div class="w-full flex justify-between" data-v-3b35f97a${_scopeId}><!--[-->`);
            ssrRenderList(listData, (item, index2) => {
              _push2(`<div class="h-90px flex items-center border-l-1 text-white" data-v-3b35f97a${_scopeId}><div class="text-44px mx-4" data-v-3b35f97a${_scopeId}>${ssrInterpolate(item.number)}</div><div class="text-12px w-246px leading-4" data-v-3b35f97a${_scopeId}>${ssrInterpolate(item.info)}</div><div class="text-12px hidden" data-v-3b35f97a${_scopeId}>${ssrInterpolate(item.introduce)}</div></div>`);
            });
            _push2(`<!--]--></div></div></div><div class="w-full flex justify-center" data-v-3b35f97a${_scopeId}><div class="w-1300px px-50px overflow-hidden" data-v-3b35f97a${_scopeId}><div class="flex justify-between items-center overflow-hidden" data-v-3b35f97a${_scopeId}><div class="flex h-27px text-18px items-center space-x-7" data-v-3b35f97a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_client_only, null, {}, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_client_only, null, {}, _parent2, _scopeId));
            _push2(`</div><div class="w-365px h-51px bg-black border rounded-50px overflow-hidden flex items-center justify-center invisible sm:invisible md:visible xl:visible" data-v-3b35f97a${_scopeId}><input${ssrRenderAttr("value", unref(searchIpt))} placeholder="Search Stars by name and type" class="h-90% w-90% border-none outline-none bg-black" data-v-3b35f97a${_scopeId}></div></div><div class="min-w-350px max-w-full overflow-hidden mt-20 grid grid-cols-2 gap-x-10 gap-y-15 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6" data-v-3b35f97a${_scopeId}><!--[-->`);
            ssrRenderList(unref(starsListData), (item, index2) => {
              _push2(`<div class="w-166px items cursor-pointer" data-v-3b35f97a${_scopeId}>`);
              if (item.profile_avatar[0]) {
                _push2(`<div class="h-166px w-full relative itemsChild" data-v-3b35f97a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_el_image, {
                  src: item.profile_avatar[0].file_url,
                  fit: "cover",
                  class: "h-full w-full"
                }, null, _parent2, _scopeId));
                _push2(`<div class="w-full h-full absolute itemImg text-transparent z-10 inset-0 flex items-center justify-center text-18px font-bold" data-v-3b35f97a${_scopeId}>Learn More</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="text-18px leading-27px my-2 italic w-100px" data-v-3b35f97a${_scopeId}>${ssrInterpolate(item.first_name)} ${ssrInterpolate(item.last_name)}</div><div class="text-14px text-#BDBDBD w-100px leading-16.8px" data-v-3b35f97a${_scopeId}>${ssrInterpolate(item.type)}</div></div>`);
            });
            _push2(`<!--]--></div><div class="w-full flex justify-center flex-col items-center py-10" data-v-3b35f97a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_pagination, {
              "current-page": unref(current),
              "onUpdate:currentPage": ($event) => isRef(current) ? current.value = $event : null,
              "page-size": unref(limit),
              "onUpdate:pageSize": ($event) => isRef(limit) ? limit.value = $event : null,
              background: "",
              layout: "prev,pager,next",
              total: unref(total),
              onCurrentChange: curremtChange
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-18px mt-4" data-v-3b35f97a${_scopeId}>${ssrInterpolate(unref(currentPages).start)}-${ssrInterpolate(unref(currentPages).end)} of ${ssrInterpolate(unref(total))} Stars</div></div></div></div>`);
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "overflow-hidden w-full" }, [
                createVNode("div", { class: "h-700px w-full overflow-hidden relative" }, [
                  createVNode(unref(R), {
                    src: "https://www.starscollective.com/assets/videos/pc/SC-Map-4.webm",
                    muted: "",
                    autoplay: "",
                    loop: "",
                    playsinline: "",
                    class: "absolute inset-0 w-full h-full z-1"
                  }),
                  createVNode("div", { class: "px-50px relative h-full z-20" }, [
                    createVNode("div", { class: "max-w-1300px mx-auto h-full flex items-center justify-between" }, [
                      createVNode("div", null, [
                        createVNode("div", {
                          class: "text-77px",
                          style: { "font-family": "PPHattonMedium" }
                        }, [
                          createTextVNode("Our"),
                          createVNode("br"),
                          createTextVNode("Stars")
                        ]),
                        createVNode("img", {
                          src: _imports_0,
                          class: "h-15 block"
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "min-w-full px-100px space-x-6 py-10 flex items-center justify-around overflow-hidden bg-[#2F2F2F]" }, [
                  createVNode("img", {
                    src: "https://www.starscollective.com/assets/images/stars/Sundance.png",
                    class: "w-25"
                  }),
                  createVNode("img", {
                    src: "https://www.starscollective.com/assets/images/stars/about_lg2_a.png",
                    class: "w-20"
                  }),
                  createVNode("img", {
                    src: "https://www.starscollective.com/assets/images/stars/about_lg3_a.png",
                    class: "w-25"
                  }),
                  createVNode("img", {
                    src: "https://www.starscollective.com/assets/images/stars/about_lg4.png",
                    class: "w-25"
                  }),
                  createVNode("img", {
                    src: "https://www.starscollective.com/assets/images/stars/about_lg5_a.png",
                    class: "w-25"
                  }),
                  createVNode("img", {
                    src: "https://www.starscollective.com/assets/images/stars/oscar_logo.png",
                    class: "w-25"
                  }),
                  createVNode("img", {
                    src: "https://www.starscollective.com/assets/images/stars/about_lg7_a.png",
                    class: "w-25"
                  }),
                  createVNode("img", {
                    src: "https://www.starscollective.com/assets/images/stars/about_lg8_a.png",
                    class: "w-25"
                  }),
                  createVNode("img", {
                    src: "https://www.starscollective.com/assets/images/stars/about_lg9_a.png",
                    class: "w-25"
                  })
                ]),
                createVNode("div", { class: "w-full gradient-bg flex items-center" }, [
                  createVNode("div", { class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10 w-full" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(listData2, (item, index2) => {
                      return createVNode("div", {
                        key: index2,
                        class: "h-196px bg-white text-black flex flex-col items-center justify-center"
                      }, [
                        createVNode("div", { class: "text-50px font-bold" }, toDisplayString(item.number), 1),
                        createVNode("div", { class: "my-1 text-16px italic" }, toDisplayString(item.title), 1),
                        createVNode("div", { class: "w-186px text-center text-13px" }, toDisplayString(item.info), 1)
                      ]);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "px-50px py-30" }, [
                  createVNode("div", { class: "max-w-1300px mx-auto" }, [
                    createVNode("div", { class: "w-full flex justify-between" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(listData, (item, index2) => {
                        return createVNode("div", {
                          key: index2,
                          class: "h-90px flex items-center border-l-1 text-white"
                        }, [
                          createVNode("div", { class: "text-44px mx-4" }, toDisplayString(item.number), 1),
                          createVNode("div", { class: "text-12px w-246px leading-4" }, toDisplayString(item.info), 1),
                          createVNode("div", { class: "text-12px hidden" }, toDisplayString(item.introduce), 1)
                        ]);
                      }), 64))
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-full flex justify-center" }, [
                  createVNode("div", { class: "w-1300px px-50px overflow-hidden" }, [
                    createVNode("div", { class: "flex justify-between items-center overflow-hidden" }, [
                      createVNode("div", { class: "flex h-27px text-18px items-center space-x-7" }, [
                        createVNode(_component_client_only, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_dropdown, {
                              trigger: "click",
                              "hide-on-click": false
                            }, {
                              dropdown: withCtx(() => [
                                createVNode(_component_el_checkbox_group, {
                                  modelValue: unref(checkList),
                                  "onUpdate:modelValue": ($event) => isRef(checkList) ? checkList.value = $event : null,
                                  onChange: handleChange
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_dropdown_menu, { class: "w-200px" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_el_dropdown_item, { class: "flex justify-between" }, {
                                          default: withCtx(() => [
                                            createVNode("div", null, "Filmmaker"),
                                            createVNode(_component_el_checkbox, {
                                              label: "Filmmaker",
                                              size: "large"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_el_dropdown_item, { class: "flex justify-between" }, {
                                          default: withCtx(() => [
                                            createVNode("div", null, "Artist"),
                                            createVNode(_component_el_checkbox, {
                                              label: "Artist",
                                              size: "large"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              default: withCtx(() => [
                                createVNode("div", { class: "text-white text-18px whitespace-nowrap space-x-2 outline-none" }, [
                                  createVNode("span", null, "Type:Artist & Filmmaker"),
                                  createVNode(_component_Icon, { name: "ph:caret-down-light" })
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_client_only, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_dropdown, {
                              ref_key: "dropdownRef",
                              ref: dropdownRef,
                              trigger: "click",
                              "hide-on-click": false,
                              onCommand: handleCommand
                            }, {
                              dropdown: withCtx(() => [
                                createVNode(_component_el_dropdown_menu, { class: "w-120px" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_dropdown_item, { command: "New" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" New ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_dropdown_item, { command: "A-Z" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" A-Z ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode("div", { class: "text-white text-18px whitespace-nowrap space-x-2 outline-none" }, [
                                  createVNode("span", null, "Sort by New"),
                                  createVNode(_component_Icon, { name: "ph:caret-down-light" })
                                ])
                              ]),
                              _: 1
                            }, 512)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "w-365px h-51px bg-black border rounded-50px overflow-hidden flex items-center justify-center invisible sm:invisible md:visible xl:visible" }, [
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => isRef(searchIpt) ? searchIpt.value = $event : null,
                          placeholder: "Search Stars by name and type",
                          class: "h-90% w-90% border-none outline-none bg-black",
                          onInput: ($event) => ("throttle" in _ctx ? _ctx.throttle : unref(throttle))(handleSearchIpt, 1e3, false)
                        }, null, 40, ["onUpdate:modelValue", "onInput"]), [
                          [vModelText, unref(searchIpt)]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "min-w-350px max-w-full overflow-hidden mt-20 grid grid-cols-2 gap-x-10 gap-y-15 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(starsListData), (item, index2) => {
                        return openBlock(), createBlock("div", {
                          key: index2,
                          class: "w-166px items cursor-pointer",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/starslist/${item.id}`)
                        }, [
                          item.profile_avatar[0] ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "h-166px w-full relative itemsChild"
                          }, [
                            createVNode(_component_el_image, {
                              src: item.profile_avatar[0].file_url,
                              fit: "cover",
                              class: "h-full w-full"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "w-full h-full absolute itemImg text-transparent z-10 inset-0 flex items-center justify-center text-18px font-bold" }, "Learn More")
                          ])) : createCommentVNode("", true),
                          createVNode("div", { class: "text-18px leading-27px my-2 italic w-100px" }, toDisplayString(item.first_name) + " " + toDisplayString(item.last_name), 1),
                          createVNode("div", { class: "text-14px text-#BDBDBD w-100px leading-16.8px" }, toDisplayString(item.type), 1)
                        ], 8, ["onClick"]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "w-full flex justify-center flex-col items-center py-10" }, [
                      createVNode(_component_el_pagination, {
                        "current-page": unref(current),
                        "onUpdate:currentPage": ($event) => isRef(current) ? current.value = $event : null,
                        "page-size": unref(limit),
                        "onUpdate:pageSize": ($event) => isRef(limit) ? limit.value = $event : null,
                        background: "",
                        layout: "prev,pager,next",
                        total: unref(total),
                        onCurrentChange: curremtChange
                      }, null, 8, ["current-page", "onUpdate:currentPage", "page-size", "onUpdate:pageSize", "total"]),
                      createVNode("div", { class: "text-18px mt-4" }, toDisplayString(unref(currentPages).start) + "-" + toDisplayString(unref(currentPages).end) + " of " + toDisplayString(unref(total)) + " Stars", 1)
                    ])
                  ])
                ]),
                createVNode(_component_Footer)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/starslist/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3b35f97a"]]);

export { index as default };
