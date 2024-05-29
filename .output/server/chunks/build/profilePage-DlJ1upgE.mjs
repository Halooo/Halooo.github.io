import { a as buildAssetsURL } from '../routes/renderer.mjs';
import __nuxt_component_7 from './Icon-CaiLYYN4.mjs';
import { defineComponent, computed, ref, unref, openBlock, createBlock, mergeProps, withCtx, createElementBlock, normalizeClass, toDisplayString, createCommentVNode, renderSlot, createTextVNode, getCurrentInstance, inject, watch, nextTick, normalizeStyle, onUpdated, createVNode, provide, useSlots, reactive, onUnmounted, withDirectives, vShow, defineAsyncComponent, useSSRContext, isRef } from 'vue';
import { b as buildProps, f as addUnit, M as withInstallDirective, w as withInstall, E as ElIcon, a as arrow_left_default, c as arrow_right_default, g as close_default, N as plus_default, d as withNoopInstall, e as definePropType, m as mutable, _ as _export_sfc$1 } from './index-C8rz0VXy.mjs';
import { useResizeObserver, useDocumentVisibility, useWindowFocus, eagerComputed } from '@vueuse/core';
import { c as useNamespace, t as throwError, g as isBoolean, l as isUndefined, u as useUserPinia, i as isNumber, I as __nuxt_component_2$1 } from './server.mjs';
import { a as useTooltipTriggerProps, u as useTooltipContentProps, E as ElTooltip, b as capitalize } from './el-popper-_1GucfBz.mjs';
import { E as EVENT_CODE } from './aria-DJRDfGoO.mjs';
import { isString } from '@vue/shared';
import { U as UPDATE_MODEL_EVENT } from './event-DSz0kuqc.mjs';
import { u as useOrderedChildren } from './index-Cz5m4S6I.mjs';
import { d as dropdownProps } from './dropdown-DlWKIXWJ.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'vue-router';
import 'lodash-unified';
import 'pinia-plugin-persistedstate';
import 'gsap';
import 'video.js';
import '@popperjs/core';
import './constants-DzvzFGCl.mjs';
import './focus-trap-C1bYFxM-.mjs';
import './icon-CyxyPYk8.mjs';

const popoverProps = buildProps({
  trigger: useTooltipTriggerProps.trigger,
  placement: dropdownProps.placement,
  disabled: useTooltipTriggerProps.disabled,
  visible: useTooltipContentProps.visible,
  transition: useTooltipContentProps.transition,
  popperOptions: dropdownProps.popperOptions,
  tabindex: dropdownProps.tabindex,
  content: useTooltipContentProps.content,
  popperStyle: useTooltipContentProps.popperStyle,
  popperClass: useTooltipContentProps.popperClass,
  enterable: {
    ...useTooltipContentProps.enterable,
    default: true
  },
  effect: {
    ...useTooltipContentProps.effect,
    default: "light"
  },
  teleported: useTooltipContentProps.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  persistent: {
    type: Boolean,
    default: true
  },
  "onUpdate:visible": {
    type: Function
  }
});
const popoverEmits = {
  "update:visible": (value) => isBoolean(value),
  "before-enter": () => true,
  "before-leave": () => true,
  "after-enter": () => true,
  "after-leave": () => true
};
const updateEventKeyRaw = `onUpdate:visible`;
const __default__$2 = defineComponent({
  name: "ElPopover"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: popoverProps,
  emits: popoverEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const onUpdateVisible = computed(() => {
      return props[updateEventKeyRaw];
    });
    const ns = useNamespace("popover");
    const tooltipRef = ref();
    const popperRef = computed(() => {
      var _a;
      return (_a = unref(tooltipRef)) == null ? void 0 : _a.popperRef;
    });
    const style = computed(() => {
      return [
        {
          width: addUnit(props.width)
        },
        props.popperStyle
      ];
    });
    const kls = computed(() => {
      return [ns.b(), props.popperClass, { [ns.m("plain")]: !!props.content }];
    });
    const gpuAcceleration = computed(() => {
      return props.transition === `${ns.namespace.value}-fade-in-linear`;
    });
    const hide = () => {
      var _a;
      (_a = tooltipRef.value) == null ? void 0 : _a.hide();
    };
    const beforeEnter = () => {
      emit("before-enter");
    };
    const beforeLeave = () => {
      emit("before-leave");
    };
    const afterEnter = () => {
      emit("after-enter");
    };
    const afterLeave = () => {
      emit("update:visible", false);
      emit("after-leave");
    };
    expose({
      popperRef,
      hide
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), mergeProps({
        ref_key: "tooltipRef",
        ref: tooltipRef
      }, _ctx.$attrs, {
        trigger: _ctx.trigger,
        placement: _ctx.placement,
        disabled: _ctx.disabled,
        visible: _ctx.visible,
        transition: _ctx.transition,
        "popper-options": _ctx.popperOptions,
        tabindex: _ctx.tabindex,
        content: _ctx.content,
        offset: _ctx.offset,
        "show-after": _ctx.showAfter,
        "hide-after": _ctx.hideAfter,
        "auto-close": _ctx.autoClose,
        "show-arrow": _ctx.showArrow,
        "aria-label": _ctx.title,
        effect: _ctx.effect,
        enterable: _ctx.enterable,
        "popper-class": unref(kls),
        "popper-style": unref(style),
        teleported: _ctx.teleported,
        persistent: _ctx.persistent,
        "gpu-acceleration": unref(gpuAcceleration),
        "onUpdate:visible": unref(onUpdateVisible),
        onBeforeShow: beforeEnter,
        onBeforeHide: beforeLeave,
        onShow: afterEnter,
        onHide: afterLeave
      }), {
        content: withCtx(() => [
          _ctx.title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("title")),
            role: "title"
          }, toDisplayString(_ctx.title), 3)) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.content), 1)
          ])
        ]),
        default: withCtx(() => [
          _ctx.$slots.reference ? renderSlot(_ctx.$slots, "reference", { key: 0 }) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]);
    };
  }
});
var Popover = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__file", "popover.vue"]]);
const attachEvents = (el, binding) => {
  const popperComponent = binding.arg || binding.value;
  const popover = popperComponent == null ? void 0 : popperComponent.popperRef;
  if (popover) {
    popover.triggerRef = el;
  }
};
var PopoverDirective = {
  mounted(el, binding) {
    attachEvents(el, binding);
  },
  updated(el, binding) {
    attachEvents(el, binding);
  }
};
const VPopover = "popover";
const ElPopoverDirective = withInstallDirective(PopoverDirective, VPopover);
const ElPopover = withInstall(Popover, {
  directive: ElPopoverDirective
});
const tabsRootContextKey = Symbol("tabsRootContextKey");
const tabBarProps = buildProps({
  tabs: {
    type: definePropType(Array),
    default: () => mutable([])
  }
});
const COMPONENT_NAME$2 = "ElTabBar";
const __default__$1 = defineComponent({
  name: COMPONENT_NAME$2
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: tabBarProps,
  setup(__props, { expose }) {
    const props = __props;
    const instance = getCurrentInstance();
    const rootTabs = inject(tabsRootContextKey);
    if (!rootTabs)
      throwError(COMPONENT_NAME$2, "<el-tabs><el-tab-bar /></el-tabs>");
    const ns = useNamespace("tabs");
    const barRef = ref();
    const barStyle = ref();
    const getBarStyle = () => {
      let offset = 0;
      let tabSize = 0;
      const sizeName = ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height";
      const sizeDir = sizeName === "width" ? "x" : "y";
      const position = sizeDir === "x" ? "left" : "top";
      props.tabs.every((tab) => {
        var _a, _b;
        const $el = (_b = (_a = instance.parent) == null ? void 0 : _a.refs) == null ? void 0 : _b[`tab-${tab.uid}`];
        if (!$el)
          return false;
        if (!tab.active) {
          return true;
        }
        offset = $el[`offset${capitalize(position)}`];
        tabSize = $el[`client${capitalize(sizeName)}`];
        const tabStyles = (void 0).getComputedStyle($el);
        if (sizeName === "width") {
          if (props.tabs.length > 1) {
            tabSize -= Number.parseFloat(tabStyles.paddingLeft) + Number.parseFloat(tabStyles.paddingRight);
          }
          offset += Number.parseFloat(tabStyles.paddingLeft);
        }
        return false;
      });
      return {
        [sizeName]: `${tabSize}px`,
        transform: `translate${capitalize(sizeDir)}(${offset}px)`
      };
    };
    const update = () => barStyle.value = getBarStyle();
    watch(() => props.tabs, async () => {
      await nextTick();
      update();
    }, { immediate: true });
    useResizeObserver(barRef, () => update());
    expose({
      ref: barRef,
      update
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "barRef",
        ref: barRef,
        class: normalizeClass([unref(ns).e("active-bar"), unref(ns).is(unref(rootTabs).props.tabPosition)]),
        style: normalizeStyle(barStyle.value)
      }, null, 6);
    };
  }
});
var TabBar = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__file", "tab-bar.vue"]]);
const tabNavProps = buildProps({
  panes: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  currentName: {
    type: [String, Number],
    default: ""
  },
  editable: Boolean,
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  stretch: Boolean
});
const tabNavEmits = {
  tabClick: (tab, tabName, ev) => ev instanceof Event,
  tabRemove: (tab, ev) => ev instanceof Event
};
const COMPONENT_NAME$1 = "ElTabNav";
const TabNav = defineComponent({
  name: COMPONENT_NAME$1,
  props: tabNavProps,
  emits: tabNavEmits,
  setup(props, {
    expose,
    emit
  }) {
    const vm = getCurrentInstance();
    const rootTabs = inject(tabsRootContextKey);
    if (!rootTabs)
      throwError(COMPONENT_NAME$1, `<el-tabs><tab-nav /></el-tabs>`);
    const ns = useNamespace("tabs");
    const visibility = useDocumentVisibility();
    const focused = useWindowFocus();
    const navScroll$ = ref();
    const nav$ = ref();
    const el$ = ref();
    const tabBarRef = ref();
    const scrollable = ref(false);
    const navOffset = ref(0);
    const isFocus = ref(false);
    const focusable = ref(true);
    const sizeName = computed(() => ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height");
    const navStyle = computed(() => {
      const dir = sizeName.value === "width" ? "X" : "Y";
      return {
        transform: `translate${dir}(-${navOffset.value}px)`
      };
    });
    const scrollPrev = () => {
      if (!navScroll$.value)
        return;
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (!currentOffset)
        return;
      const newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0;
      navOffset.value = newOffset;
    };
    const scrollNext = () => {
      if (!navScroll$.value || !nav$.value)
        return;
      const navSize = nav$.value[`offset${capitalize(sizeName.value)}`];
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (navSize - currentOffset <= containerSize)
        return;
      const newOffset = navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize;
      navOffset.value = newOffset;
    };
    const scrollToActiveTab = async () => {
      const nav = nav$.value;
      if (!scrollable.value || !el$.value || !navScroll$.value || !nav)
        return;
      await nextTick();
      const activeTab = el$.value.querySelector(".is-active");
      if (!activeTab)
        return;
      const navScroll = navScroll$.value;
      const isHorizontal = ["top", "bottom"].includes(rootTabs.props.tabPosition);
      const activeTabBounding = activeTab.getBoundingClientRect();
      const navScrollBounding = navScroll.getBoundingClientRect();
      const maxOffset = isHorizontal ? nav.offsetWidth - navScrollBounding.width : nav.offsetHeight - navScrollBounding.height;
      const currentOffset = navOffset.value;
      let newOffset = currentOffset;
      if (isHorizontal) {
        if (activeTabBounding.left < navScrollBounding.left) {
          newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
        }
        if (activeTabBounding.right > navScrollBounding.right) {
          newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
        }
      } else {
        if (activeTabBounding.top < navScrollBounding.top) {
          newOffset = currentOffset - (navScrollBounding.top - activeTabBounding.top);
        }
        if (activeTabBounding.bottom > navScrollBounding.bottom) {
          newOffset = currentOffset + (activeTabBounding.bottom - navScrollBounding.bottom);
        }
      }
      newOffset = Math.max(newOffset, 0);
      navOffset.value = Math.min(newOffset, maxOffset);
    };
    const update = () => {
      var _a;
      if (!nav$.value || !navScroll$.value)
        return;
      props.stretch && ((_a = tabBarRef.value) == null ? void 0 : _a.update());
      const navSize = nav$.value[`offset${capitalize(sizeName.value)}`];
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (containerSize < navSize) {
        scrollable.value = scrollable.value || {};
        scrollable.value.prev = currentOffset;
        scrollable.value.next = currentOffset + containerSize < navSize;
        if (navSize - currentOffset < containerSize) {
          navOffset.value = navSize - containerSize;
        }
      } else {
        scrollable.value = false;
        if (currentOffset > 0) {
          navOffset.value = 0;
        }
      }
    };
    const changeTab = (e) => {
      const code = e.code;
      const {
        up,
        down,
        left,
        right
      } = EVENT_CODE;
      if (![up, down, left, right].includes(code))
        return;
      const tabList = Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)"));
      const currentIndex = tabList.indexOf(e.target);
      let nextIndex;
      if (code === left || code === up) {
        if (currentIndex === 0) {
          nextIndex = tabList.length - 1;
        } else {
          nextIndex = currentIndex - 1;
        }
      } else {
        if (currentIndex < tabList.length - 1) {
          nextIndex = currentIndex + 1;
        } else {
          nextIndex = 0;
        }
      }
      tabList[nextIndex].focus({
        preventScroll: true
      });
      tabList[nextIndex].click();
      setFocus();
    };
    const setFocus = () => {
      if (focusable.value)
        isFocus.value = true;
    };
    const removeFocus = () => isFocus.value = false;
    watch(visibility, (visibility2) => {
      if (visibility2 === "hidden") {
        focusable.value = false;
      } else if (visibility2 === "visible") {
        setTimeout(() => focusable.value = true, 50);
      }
    });
    watch(focused, (focused2) => {
      if (focused2) {
        setTimeout(() => focusable.value = true, 50);
      } else {
        focusable.value = false;
      }
    });
    useResizeObserver(el$, update);
    onUpdated(() => update());
    expose({
      scrollToActiveTab,
      removeFocus
    });
    watch(() => props.panes, () => vm.update(), {
      flush: "post",
      deep: true
    });
    return () => {
      const scrollBtn = scrollable.value ? [createVNode("span", {
        "class": [ns.e("nav-prev"), ns.is("disabled", !scrollable.value.prev)],
        "onClick": scrollPrev
      }, [createVNode(ElIcon, null, {
        default: () => [createVNode(arrow_left_default, null, null)]
      })]), createVNode("span", {
        "class": [ns.e("nav-next"), ns.is("disabled", !scrollable.value.next)],
        "onClick": scrollNext
      }, [createVNode(ElIcon, null, {
        default: () => [createVNode(arrow_right_default, null, null)]
      })])] : null;
      const tabs = props.panes.map((pane, index) => {
        var _a, _b, _c, _d;
        const uid = pane.uid;
        const disabled = pane.props.disabled;
        const tabName = (_b = (_a = pane.props.name) != null ? _a : pane.index) != null ? _b : `${index}`;
        const closable = !disabled && (pane.isClosable || props.editable);
        pane.index = `${index}`;
        const btnClose = closable ? createVNode(ElIcon, {
          "class": "is-icon-close",
          "onClick": (ev) => emit("tabRemove", pane, ev)
        }, {
          default: () => [createVNode(close_default, null, null)]
        }) : null;
        const tabLabelContent = ((_d = (_c = pane.slots).label) == null ? void 0 : _d.call(_c)) || pane.props.label;
        const tabindex = !disabled && pane.active ? 0 : -1;
        return createVNode("div", {
          "ref": `tab-${uid}`,
          "class": [ns.e("item"), ns.is(rootTabs.props.tabPosition), ns.is("active", pane.active), ns.is("disabled", disabled), ns.is("closable", closable), ns.is("focus", isFocus.value)],
          "id": `tab-${tabName}`,
          "key": `tab-${uid}`,
          "aria-controls": `pane-${tabName}`,
          "role": "tab",
          "aria-selected": pane.active,
          "tabindex": tabindex,
          "onFocus": () => setFocus(),
          "onBlur": () => removeFocus(),
          "onClick": (ev) => {
            removeFocus();
            emit("tabClick", pane, tabName, ev);
          },
          "onKeydown": (ev) => {
            if (closable && (ev.code === EVENT_CODE.delete || ev.code === EVENT_CODE.backspace)) {
              emit("tabRemove", pane, ev);
            }
          }
        }, [...[tabLabelContent, btnClose]]);
      });
      return createVNode("div", {
        "ref": el$,
        "class": [ns.e("nav-wrap"), ns.is("scrollable", !!scrollable.value), ns.is(rootTabs.props.tabPosition)]
      }, [scrollBtn, createVNode("div", {
        "class": ns.e("nav-scroll"),
        "ref": navScroll$
      }, [createVNode("div", {
        "class": [ns.e("nav"), ns.is(rootTabs.props.tabPosition), ns.is("stretch", props.stretch && ["top", "bottom"].includes(rootTabs.props.tabPosition))],
        "ref": nav$,
        "style": navStyle.value,
        "role": "tablist",
        "onKeydown": changeTab
      }, [...[!props.type ? createVNode(TabBar, {
        "ref": tabBarRef,
        "tabs": [...props.panes]
      }, null) : null, tabs]])])]);
    };
  }
});
const tabsProps = buildProps({
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  closable: Boolean,
  addable: Boolean,
  modelValue: {
    type: [String, Number]
  },
  editable: Boolean,
  tabPosition: {
    type: String,
    values: ["top", "right", "bottom", "left"],
    default: "top"
  },
  beforeLeave: {
    type: definePropType(Function),
    default: () => true
  },
  stretch: Boolean
});
const isPaneName = (value) => isString(value) || isNumber(value);
const tabsEmits = {
  [UPDATE_MODEL_EVENT]: (name) => isPaneName(name),
  tabClick: (pane, ev) => ev instanceof Event,
  tabChange: (name) => isPaneName(name),
  edit: (paneName, action) => ["remove", "add"].includes(action),
  tabRemove: (name) => isPaneName(name),
  tabAdd: () => true
};
const Tabs = defineComponent({
  name: "ElTabs",
  props: tabsProps,
  emits: tabsEmits,
  setup(props, {
    emit,
    slots,
    expose
  }) {
    var _a;
    const ns = useNamespace("tabs");
    const {
      children: panes,
      addChild: registerPane,
      removeChild: unregisterPane
    } = useOrderedChildren(getCurrentInstance(), "ElTabPane");
    const nav$ = ref();
    const currentName = ref((_a = props.modelValue) != null ? _a : "0");
    const setCurrentName = async (value, trigger = false) => {
      var _a2, _b, _c;
      if (currentName.value === value || isUndefined(value))
        return;
      try {
        const canLeave = await ((_a2 = props.beforeLeave) == null ? void 0 : _a2.call(props, value, currentName.value));
        if (canLeave !== false) {
          currentName.value = value;
          if (trigger) {
            emit(UPDATE_MODEL_EVENT, value);
            emit("tabChange", value);
          }
          (_c = (_b = nav$.value) == null ? void 0 : _b.removeFocus) == null ? void 0 : _c.call(_b);
        }
      } catch (e) {
      }
    };
    const handleTabClick = (tab, tabName, event) => {
      if (tab.props.disabled)
        return;
      setCurrentName(tabName, true);
      emit("tabClick", tab, event);
    };
    const handleTabRemove = (pane, ev) => {
      if (pane.props.disabled || isUndefined(pane.props.name))
        return;
      ev.stopPropagation();
      emit("edit", pane.props.name, "remove");
      emit("tabRemove", pane.props.name);
    };
    const handleTabAdd = () => {
      emit("edit", void 0, "add");
      emit("tabAdd");
    };
    watch(() => props.modelValue, (modelValue) => setCurrentName(modelValue));
    watch(currentName, async () => {
      var _a2;
      await nextTick();
      (_a2 = nav$.value) == null ? void 0 : _a2.scrollToActiveTab();
    });
    provide(tabsRootContextKey, {
      props,
      currentName,
      registerPane,
      unregisterPane
    });
    expose({
      currentName
    });
    return () => {
      const addSlot = slots["add-icon"];
      const newButton = props.editable || props.addable ? createVNode("span", {
        "class": ns.e("new-tab"),
        "tabindex": "0",
        "onClick": handleTabAdd,
        "onKeydown": (ev) => {
          if (ev.code === EVENT_CODE.enter)
            handleTabAdd();
        }
      }, [addSlot ? renderSlot(slots, "add-icon") : createVNode(ElIcon, {
        "class": ns.is("icon-plus")
      }, {
        default: () => [createVNode(plus_default, null, null)]
      })]) : null;
      const header = createVNode("div", {
        "class": [ns.e("header"), ns.is(props.tabPosition)]
      }, [newButton, createVNode(TabNav, {
        "ref": nav$,
        "currentName": currentName.value,
        "editable": props.editable,
        "type": props.type,
        "panes": panes.value,
        "stretch": props.stretch,
        "onTabClick": handleTabClick,
        "onTabRemove": handleTabRemove
      }, null)]);
      const panels = createVNode("div", {
        "class": ns.e("content")
      }, [renderSlot(slots, "default")]);
      return createVNode("div", {
        "class": [ns.b(), ns.m(props.tabPosition), {
          [ns.m("card")]: props.type === "card",
          [ns.m("border-card")]: props.type === "border-card"
        }]
      }, [...props.tabPosition !== "bottom" ? [header, panels] : [panels, header]]);
    };
  }
});
const tabPaneProps = buildProps({
  label: {
    type: String,
    default: ""
  },
  name: {
    type: [String, Number]
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean
});
const _hoisted_1 = ["id", "aria-hidden", "aria-labelledby"];
const COMPONENT_NAME = "ElTabPane";
const __default__ = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: tabPaneProps,
  setup(__props) {
    const props = __props;
    const instance = getCurrentInstance();
    const slots = useSlots();
    const tabsRoot = inject(tabsRootContextKey);
    if (!tabsRoot)
      throwError(COMPONENT_NAME, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
    const ns = useNamespace("tab-pane");
    const index = ref();
    const isClosable = computed(() => props.closable || tabsRoot.props.closable);
    const active = eagerComputed(() => {
      var _a;
      return tabsRoot.currentName.value === ((_a = props.name) != null ? _a : index.value);
    });
    const loaded = ref(active.value);
    const paneName = computed(() => {
      var _a;
      return (_a = props.name) != null ? _a : index.value;
    });
    const shouldBeRender = eagerComputed(() => !props.lazy || loaded.value || active.value);
    watch(active, (val) => {
      if (val)
        loaded.value = true;
    });
    const pane = reactive({
      uid: instance.uid,
      slots,
      props,
      paneName,
      active,
      index,
      isClosable
    });
    onUnmounted(() => {
      tabsRoot.unregisterPane(pane.uid);
    });
    return (_ctx, _cache) => {
      return unref(shouldBeRender) ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        id: `pane-${unref(paneName)}`,
        class: normalizeClass(unref(ns).b()),
        role: "tabpanel",
        "aria-hidden": !unref(active),
        "aria-labelledby": `tab-${unref(paneName)}`
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1)), [
        [vShow, unref(active)]
      ]) : createCommentVNode("v-if", true);
    };
  }
});
var TabPane = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__file", "tab-pane.vue"]]);
const ElTabs = withInstall(Tabs, {
  TabPane
});
const ElTabPane = withNoopInstall(TabPane);
const _imports_0 = "" + buildAssetsURL("basic_info.qQNGGNeA.png");
const __nuxt_component_5_lazy = defineAsyncComponent(() => import('./BasicInfo-BPZdkKLh.mjs').then((c) => c.default || c));
const __nuxt_component_6_lazy = defineAsyncComponent(() => import('./WorkSample-Df0yC4qJ.mjs').then((c) => c.default || c));
const __nuxt_component_7_lazy = defineAsyncComponent(() => import('./Awards-BlgOzpzu.mjs').then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profilePage",
  __ssrInlineRender: true,
  setup(__props) {
    const activeName = ref("first");
    useUserPinia();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = __nuxt_component_7;
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_ClientOnly = __nuxt_component_2$1;
      const _component_el_popover = ElPopover;
      const _component_LazyUserProfilePageBasicInfo = __nuxt_component_5_lazy;
      const _component_LazyUserProfilePageWorkSample = __nuxt_component_6_lazy;
      const _component_LazyUserProfilePageAwards = __nuxt_component_7_lazy;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile pt-10 pb-32 space-y-14" }, _attrs))} data-v-6511fe95><div class="pl-9" data-v-6511fe95><p class="font-medium text-4xl PPHattonMedium" data-v-6511fe95>Update Public Profile Page</p><div class="space-y-4" data-v-6511fe95><div class="font-normal text-sm text-#ffffff flex items-center space-x-1 cursor-pointer" data-v-6511fe95><span class="uppercase space-x-1 tracking-0.5" data-v-6511fe95>view my profile page</span>`);
      _push(ssrRenderComponent(_component_icon, {
        name: "mi:arrow-right-up",
        size: "20"
      }, null, _parent));
      _push(`</div><div class="font-light text-lg PolySansNeutral" data-v-6511fe95> Please note that personal info doesn\u2019t need approval to make an update while work info does need Starscollective to review before publishing. </div></div><div class="w-full text-#F5F5F5" data-v-6511fe95>`);
      _push(ssrRenderComponent(_component_el_tabs, {
        modelValue: unref(activeName),
        "onUpdate:modelValue": ($event) => isRef(activeName) ? activeName.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              label: "Basic Info",
              name: "first"
            }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_popover, {
                          placement: "top-start",
                          trigger: "hover",
                          width: 300,
                          "popper-style": "padding: 0;border:none"
                        }, {
                          reference: withCtx(() => [
                            createVNode("span", { class: "px-8 font-light text-lg PolySansNeutral" }, "Basic Info")
                          ]),
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_0,
                              class: "h-46 block"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(activeName) === "first") {
                    _push3(ssrRenderComponent(_component_LazyUserProfilePageBasicInfo, null, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(activeName) === "first" ? (openBlock(), createBlock(_component_LazyUserProfilePageBasicInfo, { key: 0 })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              label: "Work Sample",
              name: "second"
            }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="px-8 font-light text-lg PolySansNeutral" data-v-6511fe95${_scopeId2}>Work Sample</span>`);
                } else {
                  return [
                    createVNode("span", { class: "px-8 font-light text-lg PolySansNeutral" }, "Work Sample")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(activeName) === "second") {
                    _push3(ssrRenderComponent(_component_LazyUserProfilePageWorkSample, null, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(activeName) === "second" ? (openBlock(), createBlock(_component_LazyUserProfilePageWorkSample, { key: 0 })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              label: "Awards",
              name: "third"
            }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_popover, {
                          placement: "top-start",
                          trigger: "hover",
                          width: 300,
                          "popper-style": "padding: 0;border:none"
                        }, {
                          reference: withCtx(() => [
                            createVNode("span", { class: "px-8 font-light text-lg PolySansNeutral" }, "Awards")
                          ]),
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_0,
                              class: "h-46 block"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(activeName) === "third") {
                    _push3(ssrRenderComponent(_component_LazyUserProfilePageAwards, null, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(activeName) === "third" ? (openBlock(), createBlock(_component_LazyUserProfilePageAwards, { key: 0 })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_tab_pane, {
                label: "Basic Info",
                name: "first"
              }, {
                label: withCtx(() => [
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_popover, {
                        placement: "top-start",
                        trigger: "hover",
                        width: 300,
                        "popper-style": "padding: 0;border:none"
                      }, {
                        reference: withCtx(() => [
                          createVNode("span", { class: "px-8 font-light text-lg PolySansNeutral" }, "Basic Info")
                        ]),
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_0,
                            class: "h-46 block"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  unref(activeName) === "first" ? (openBlock(), createBlock(_component_LazyUserProfilePageBasicInfo, { key: 0 })) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(_component_el_tab_pane, {
                label: "Work Sample",
                name: "second"
              }, {
                label: withCtx(() => [
                  createVNode("span", { class: "px-8 font-light text-lg PolySansNeutral" }, "Work Sample")
                ]),
                default: withCtx(() => [
                  unref(activeName) === "second" ? (openBlock(), createBlock(_component_LazyUserProfilePageWorkSample, { key: 0 })) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(_component_el_tab_pane, {
                label: "Awards",
                name: "third"
              }, {
                label: withCtx(() => [
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_popover, {
                        placement: "top-start",
                        trigger: "hover",
                        width: 300,
                        "popper-style": "padding: 0;border:none"
                      }, {
                        reference: withCtx(() => [
                          createVNode("span", { class: "px-8 font-light text-lg PolySansNeutral" }, "Awards")
                        ]),
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_0,
                            class: "h-46 block"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  unref(activeName) === "third" ? (openBlock(), createBlock(_component_LazyUserProfilePageAwards, { key: 0 })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/profilePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profilePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6511fe95"]]);

export { profilePage as default };
