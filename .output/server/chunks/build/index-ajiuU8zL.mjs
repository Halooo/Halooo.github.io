import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { c as useNamespace, a as useRoute, i as isNumber, e as useZIndex, f as useId, R, _ as __nuxt_component_0, t as throwError, g as isBoolean, h as defaultNamespace } from './server.mjs';
import { _ as _sfc_main$b } from './Header-BsW2-ynM.mjs';
import { defineComponent, computed, unref, openBlock, createElementBlock, normalizeClass, withModifiers, createBlock, Transition, withCtx, withDirectives, createElementVNode, createVNode, vShow, createCommentVNode, normalizeStyle, renderSlot, Fragment, renderList, toDisplayString, h, useSlots, ref, Teleport, mergeProps, useSSRContext, getCurrentInstance, watch, shallowRef, provide, inject, onUnmounted, nextTick, reactive, watchEffect, isRef, onScopeDispose, isVNode } from 'vue';
import { b as buildProps, E as ElIcon, a as arrow_left_default, c as arrow_right_default, w as withInstall, d as withNoopInstall, e as definePropType, f as addUnit, g as close_default, h as hasClass, i as getStyle, j as addClass, _ as _export_sfc, r as removeClass } from './index-C8rz0VXy.mjs';
import { throttle, isUndefined } from 'lodash-unified';
import { P as PatchFlags, u as useOrderedChildren, f as flattedChildren } from './index-Cz5m4S6I.mjs';
import { NOOP, isString } from '@vue/shared';
import { a as useLocale, b as useGlobalConfig } from './request-CdKXnB25.mjs';
import { E as ElImage } from './el-image-viewer-T405MOSo.mjs';
import __nuxt_component_7$1 from './Icon-CaiLYYN4.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './virtual_public-BaMrrqy2.mjs';
import { _ as _export_sfc$1 } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { b as apiindexbanner, c as apiIndexLogoList } from './home-DlGQga1N.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';
import gsap from 'gsap';
import { _ as _sfc_main$d } from './SwiperLoop-CRFhC9yW.mjs';
import { i as iconPropType } from './icon-CyxyPYk8.mjs';
import { U as UPDATE_MODEL_EVENT } from './event-DSz0kuqc.mjs';
import { u as useDeprecated } from './index-URjNNh32.mjs';
import { isClient, useTimeoutFn } from '@vueuse/core';
import { computed as computed$1 } from '@vue/reactivity';
import { g as getScrollBarWidth } from './scroll-D2xEfal-.mjs';
import { E as ElFocusTrap } from './focus-trap-C1bYFxM-.mjs';
import { _ as _imports_1$1, a as _imports_2$1, b as _imports_3$1 } from './icon1-DBK7cnlK.mjs';
import { _ as _imports_0$2, a as _imports_1$2 } from './comin-soon-C-EIHyMj.mjs';
import { _ as _sfc_main$c } from './Footer-DZPaOTwy.mjs';
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
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'video.js';
import './nuxt-link-Bi4Z90lR.mjs';
import './Menus-C81EnAY8.mjs';
import './Index-DNxKYUQ5.mjs';
import './LogOut-hKXBzU2w.mjs';
import './virtual_public-3Fh-jQka.mjs';
import './aria-DJRDfGoO.mjs';
import './el-input-D8gXC6Et.mjs';
import './constants-DzvzFGCl.mjs';
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './OkBox-Dvtj49Wo.mjs';

const useLockscreen = (trigger, options = {}) => {
  if (!isRef(trigger)) {
    throwError("[useLockscreen]", "You need to pass a ref param to this function");
  }
  const ns = options.ns || useNamespace("popup");
  const hiddenCls = computed$1(() => ns.bm("parent", "hidden"));
  if (!isClient || hasClass((void 0).body, hiddenCls.value)) {
    return;
  }
  let scrollBarWidth = 0;
  let withoutHiddenClass = false;
  let bodyWidth = "0";
  const cleanup = () => {
    setTimeout(() => {
      removeClass(void 0, hiddenCls.value);
      if (withoutHiddenClass && void 0) {
        (void 0).body.style.width = bodyWidth;
      }
    }, 200);
  };
  watch(trigger, (val) => {
    if (!val) {
      cleanup();
      return;
    }
    withoutHiddenClass = !hasClass((void 0).body, hiddenCls.value);
    if (withoutHiddenClass) {
      bodyWidth = (void 0).body.style.width;
    }
    scrollBarWidth = getScrollBarWidth(ns.namespace.value);
    const bodyHasOverflow = (void 0).documentElement.clientHeight < (void 0).body.scrollHeight;
    const bodyOverflowY = getStyle((void 0).body, "overflowY");
    if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) {
      (void 0).body.style.width = `calc(100% - ${scrollBarWidth}px)`;
    }
    addClass((void 0).body, hiddenCls.value);
  });
  onScopeDispose(() => cleanup());
};
const useSameTarget = (handleClick) => {
  if (!handleClick) {
    return { onClick: NOOP, onMousedown: NOOP, onMouseup: NOOP };
  }
  let mousedownTarget = false;
  let mouseupTarget = false;
  const onClick = (e) => {
    if (mousedownTarget && mouseupTarget) {
      handleClick(e);
    }
    mousedownTarget = mouseupTarget = false;
  };
  const onMousedown = (e) => {
    mousedownTarget = e.target === e.currentTarget;
  };
  const onMouseup = (e) => {
    mouseupTarget = e.target === e.currentTarget;
  };
  return { onClick, onMousedown, onMouseup };
};
const carouselProps = buildProps({
  initialIndex: {
    type: Number,
    default: 0
  },
  height: {
    type: String,
    default: ""
  },
  trigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 3e3
  },
  indicatorPosition: {
    type: String,
    values: ["", "none", "outside"],
    default: ""
  },
  arrow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "hover"
  },
  type: {
    type: String,
    values: ["", "card"],
    default: ""
  },
  loop: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  },
  motionBlur: {
    type: Boolean,
    default: false
  }
});
const carouselEmits = {
  change: (current, prev) => [current, prev].every(isNumber)
};
const carouselContextKey = Symbol("carouselContextKey");
const THROTTLE_TIME = 300;
const useCarousel = (props, emit, componentName) => {
  const {
    children: items,
    addChild: addItem,
    removeChild: removeItem
  } = useOrderedChildren(getCurrentInstance(), "ElCarouselItem");
  const slots = useSlots();
  const activeIndex = ref(-1);
  const timer = ref(null);
  const hover = ref(false);
  const root = ref();
  const containerHeight = ref(0);
  const isItemsTwoLength = ref(true);
  const isFirstCall = ref(true);
  const isTransitioning = ref(false);
  const arrowDisplay = computed(() => props.arrow !== "never" && !unref(isVertical));
  const hasLabel = computed(() => {
    return items.value.some((item) => item.props.label.toString().length > 0);
  });
  const isCardType = computed(() => props.type === "card");
  const isVertical = computed(() => props.direction === "vertical");
  const containerStyle = computed(() => {
    if (props.height !== "auto") {
      return {
        height: props.height
      };
    }
    return {
      height: `${containerHeight.value}px`,
      overflow: "hidden"
    };
  });
  const throttledArrowClick = throttle((index) => {
    setActiveItem(index);
  }, THROTTLE_TIME, { trailing: true });
  const throttledIndicatorHover = throttle((index) => {
    handleIndicatorHover(index);
  }, THROTTLE_TIME);
  const isTwoLengthShow = (index) => {
    if (!isItemsTwoLength.value)
      return true;
    return activeIndex.value <= 1 ? index <= 1 : index > 1;
  };
  function pauseTimer() {
    if (timer.value) {
      clearInterval(timer.value);
      timer.value = null;
    }
  }
  function startTimer() {
    if (props.interval <= 0 || !props.autoplay || timer.value)
      return;
    timer.value = setInterval(() => playSlides(), props.interval);
  }
  const playSlides = () => {
    if (!isFirstCall.value) {
      isTransitioning.value = true;
    }
    isFirstCall.value = false;
    if (activeIndex.value < items.value.length - 1) {
      activeIndex.value = activeIndex.value + 1;
    } else if (props.loop) {
      activeIndex.value = 0;
    }
  };
  function setActiveItem(index) {
    if (!isFirstCall.value) {
      isTransitioning.value = true;
    }
    isFirstCall.value = false;
    if (isString(index)) {
      const filteredItems = items.value.filter((item) => item.props.name === index);
      if (filteredItems.length > 0) {
        index = items.value.indexOf(filteredItems[0]);
      }
    }
    index = Number(index);
    if (Number.isNaN(index) || index !== Math.floor(index)) {
      return;
    }
    const itemCount = items.value.length;
    const oldIndex = activeIndex.value;
    if (index < 0) {
      activeIndex.value = props.loop ? itemCount - 1 : 0;
    } else if (index >= itemCount) {
      activeIndex.value = props.loop ? 0 : itemCount - 1;
    } else {
      activeIndex.value = index;
    }
    if (oldIndex === activeIndex.value) {
      resetItemPosition(oldIndex);
    }
    resetTimer();
  }
  function resetItemPosition(oldIndex) {
    items.value.forEach((item, index) => {
      item.translateItem(index, activeIndex.value, oldIndex);
    });
  }
  function itemInStage(item, index) {
    var _a, _b, _c, _d;
    const _items = unref(items);
    const itemCount = _items.length;
    if (itemCount === 0 || !item.states.inStage)
      return false;
    const nextItemIndex = index + 1;
    const prevItemIndex = index - 1;
    const lastItemIndex = itemCount - 1;
    const isLastItemActive = _items[lastItemIndex].states.active;
    const isFirstItemActive = _items[0].states.active;
    const isNextItemActive = (_b = (_a = _items[nextItemIndex]) == null ? void 0 : _a.states) == null ? void 0 : _b.active;
    const isPrevItemActive = (_d = (_c = _items[prevItemIndex]) == null ? void 0 : _c.states) == null ? void 0 : _d.active;
    if (index === lastItemIndex && isFirstItemActive || isNextItemActive) {
      return "left";
    } else if (index === 0 && isLastItemActive || isPrevItemActive) {
      return "right";
    }
    return false;
  }
  function handleMouseEnter() {
    hover.value = true;
    if (props.pauseOnHover) {
      pauseTimer();
    }
  }
  function handleMouseLeave() {
    hover.value = false;
    startTimer();
  }
  function handleTransitionEnd() {
    isTransitioning.value = false;
  }
  function handleButtonEnter(arrow) {
    if (unref(isVertical))
      return;
    items.value.forEach((item, index) => {
      if (arrow === itemInStage(item, index)) {
        item.states.hover = true;
      }
    });
  }
  function handleButtonLeave() {
    if (unref(isVertical))
      return;
    items.value.forEach((item) => {
      item.states.hover = false;
    });
  }
  function handleIndicatorClick(index) {
    if (index !== activeIndex.value) {
      if (!isFirstCall.value) {
        isTransitioning.value = true;
      }
    }
    activeIndex.value = index;
  }
  function handleIndicatorHover(index) {
    if (props.trigger === "hover" && index !== activeIndex.value) {
      activeIndex.value = index;
      if (!isFirstCall.value) {
        isTransitioning.value = true;
      }
    }
  }
  function prev() {
    setActiveItem(activeIndex.value - 1);
  }
  function next() {
    setActiveItem(activeIndex.value + 1);
  }
  function resetTimer() {
    pauseTimer();
    if (!props.pauseOnHover)
      startTimer();
  }
  function setContainerHeight(height) {
    if (props.height !== "auto")
      return;
    containerHeight.value = height;
  }
  function PlaceholderItem() {
    var _a;
    const defaultSlots = (_a = slots.default) == null ? void 0 : _a.call(slots);
    if (!defaultSlots)
      return null;
    const flatSlots = flattedChildren(defaultSlots);
    const carouselItemsName = "ElCarouselItem";
    const normalizeSlots = flatSlots.filter((slot) => {
      return isVNode(slot) && slot.type.name === carouselItemsName;
    });
    if ((normalizeSlots == null ? void 0 : normalizeSlots.length) === 2 && props.loop && !isCardType.value) {
      isItemsTwoLength.value = true;
      return normalizeSlots;
    }
    isItemsTwoLength.value = false;
    return null;
  }
  watch(() => activeIndex.value, (current, prev2) => {
    resetItemPosition(prev2);
    if (isItemsTwoLength.value) {
      current = current % 2;
      prev2 = prev2 % 2;
    }
    if (prev2 > -1) {
      emit("change", current, prev2);
    }
  });
  watch(() => props.autoplay, (autoplay) => {
    autoplay ? startTimer() : pauseTimer();
  });
  watch(() => props.loop, () => {
    setActiveItem(activeIndex.value);
  });
  watch(() => props.interval, () => {
    resetTimer();
  });
  shallowRef();
  provide(carouselContextKey, {
    root,
    isCardType,
    isVertical,
    items,
    loop: props.loop,
    addItem,
    removeItem,
    setActiveItem,
    setContainerHeight
  });
  return {
    root,
    activeIndex,
    arrowDisplay,
    hasLabel,
    hover,
    isCardType,
    isTransitioning,
    items,
    isVertical,
    containerStyle,
    isItemsTwoLength,
    handleButtonEnter,
    handleTransitionEnd,
    handleButtonLeave,
    handleIndicatorClick,
    handleMouseEnter,
    handleMouseLeave,
    setActiveItem,
    prev,
    next,
    PlaceholderItem,
    isTwoLengthShow,
    throttledArrowClick,
    throttledIndicatorHover
  };
};
const _hoisted_1$1 = ["aria-label"];
const _hoisted_2$1 = ["aria-label"];
const _hoisted_3$1 = ["onMouseenter", "onClick"];
const _hoisted_4$1 = ["aria-label"];
const _hoisted_5 = { key: 0 };
const _hoisted_6 = {
  key: 3,
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.1",
  style: { "display": "none" }
};
const _hoisted_7 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("filter", { id: "elCarouselHorizontal" }, [
    /* @__PURE__ */ createElementVNode("feGaussianBlur", {
      in: "SourceGraphic",
      stdDeviation: "12,0"
    })
  ]),
  /* @__PURE__ */ createElementVNode("filter", { id: "elCarouselVertical" }, [
    /* @__PURE__ */ createElementVNode("feGaussianBlur", {
      in: "SourceGraphic",
      stdDeviation: "0,10"
    })
  ])
], -1);
const _hoisted_8 = [
  _hoisted_7
];
const COMPONENT_NAME$1 = "ElCarousel";
const __default__$2 = defineComponent({
  name: COMPONENT_NAME$1
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: carouselProps,
  emits: carouselEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const {
      root,
      activeIndex,
      arrowDisplay,
      hasLabel,
      hover,
      isCardType,
      items,
      isVertical,
      containerStyle,
      handleButtonEnter,
      handleButtonLeave,
      isTransitioning,
      handleIndicatorClick,
      handleMouseEnter,
      handleMouseLeave,
      handleTransitionEnd,
      setActiveItem,
      prev,
      next,
      PlaceholderItem,
      isTwoLengthShow,
      throttledArrowClick,
      throttledIndicatorHover
    } = useCarousel(props, emit);
    const ns = useNamespace("carousel");
    const { t } = useLocale();
    const carouselClasses = computed(() => {
      const classes = [ns.b(), ns.m(props.direction)];
      if (unref(isCardType)) {
        classes.push(ns.m("card"));
      }
      return classes;
    });
    const carouselContainer = computed(() => {
      const classes = [ns.e("container")];
      if (props.motionBlur && unref(isTransitioning)) {
        classes.push(unref(isVertical) ? `${ns.namespace.value}-transitioning-vertical` : `${ns.namespace.value}-transitioning`);
      }
      return classes;
    });
    const indicatorsClasses = computed(() => {
      const classes = [ns.e("indicators"), ns.em("indicators", props.direction)];
      if (unref(hasLabel)) {
        classes.push(ns.em("indicators", "labels"));
      }
      if (props.indicatorPosition === "outside") {
        classes.push(ns.em("indicators", "outside"));
      }
      if (unref(isVertical)) {
        classes.push(ns.em("indicators", "right"));
      }
      return classes;
    });
    expose({
      setActiveItem,
      prev,
      next
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "root",
        ref: root,
        class: normalizeClass(unref(carouselClasses)),
        onMouseenter: _cache[7] || (_cache[7] = withModifiers((...args) => unref(handleMouseEnter) && unref(handleMouseEnter)(...args), ["stop"])),
        onMouseleave: _cache[8] || (_cache[8] = withModifiers((...args) => unref(handleMouseLeave) && unref(handleMouseLeave)(...args), ["stop"]))
      }, [
        unref(arrowDisplay) ? (openBlock(), createBlock(Transition, {
          key: 0,
          name: "carousel-arrow-left",
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("button", {
              type: "button",
              class: normalizeClass([unref(ns).e("arrow"), unref(ns).em("arrow", "left")]),
              "aria-label": unref(t)("el.carousel.leftArrow"),
              onMouseenter: _cache[0] || (_cache[0] = ($event) => unref(handleButtonEnter)("left")),
              onMouseleave: _cache[1] || (_cache[1] = (...args) => unref(handleButtonLeave) && unref(handleButtonLeave)(...args)),
              onClick: _cache[2] || (_cache[2] = withModifiers(($event) => unref(throttledArrowClick)(unref(activeIndex) - 1), ["stop"]))
            }, [
              createVNode(unref(ElIcon), null, {
                default: withCtx(() => [
                  createVNode(unref(arrow_left_default))
                ]),
                _: 1
              })
            ], 42, _hoisted_1$1), [
              [
                vShow,
                (_ctx.arrow === "always" || unref(hover)) && (props.loop || unref(activeIndex) > 0)
              ]
            ])
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        unref(arrowDisplay) ? (openBlock(), createBlock(Transition, {
          key: 1,
          name: "carousel-arrow-right",
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("button", {
              type: "button",
              class: normalizeClass([unref(ns).e("arrow"), unref(ns).em("arrow", "right")]),
              "aria-label": unref(t)("el.carousel.rightArrow"),
              onMouseenter: _cache[3] || (_cache[3] = ($event) => unref(handleButtonEnter)("right")),
              onMouseleave: _cache[4] || (_cache[4] = (...args) => unref(handleButtonLeave) && unref(handleButtonLeave)(...args)),
              onClick: _cache[5] || (_cache[5] = withModifiers(($event) => unref(throttledArrowClick)(unref(activeIndex) + 1), ["stop"]))
            }, [
              createVNode(unref(ElIcon), null, {
                default: withCtx(() => [
                  createVNode(unref(arrow_right_default))
                ]),
                _: 1
              })
            ], 42, _hoisted_2$1), [
              [
                vShow,
                (_ctx.arrow === "always" || unref(hover)) && (props.loop || unref(activeIndex) < unref(items).length - 1)
              ]
            ])
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass(unref(carouselContainer)),
          style: normalizeStyle(unref(containerStyle)),
          onTransitionend: _cache[6] || (_cache[6] = (...args) => unref(handleTransitionEnd) && unref(handleTransitionEnd)(...args))
        }, [
          createVNode(unref(PlaceholderItem)),
          renderSlot(_ctx.$slots, "default")
        ], 38),
        _ctx.indicatorPosition !== "none" ? (openBlock(), createElementBlock("ul", {
          key: 2,
          class: normalizeClass(unref(indicatorsClasses))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(items), (item, index) => {
            return withDirectives((openBlock(), createElementBlock("li", {
              key: index,
              class: normalizeClass([
                unref(ns).e("indicator"),
                unref(ns).em("indicator", _ctx.direction),
                unref(ns).is("active", index === unref(activeIndex))
              ]),
              onMouseenter: ($event) => unref(throttledIndicatorHover)(index),
              onClick: withModifiers(($event) => unref(handleIndicatorClick)(index), ["stop"])
            }, [
              createElementVNode("button", {
                class: normalizeClass(unref(ns).e("button")),
                "aria-label": unref(t)("el.carousel.indicator", { index: index + 1 })
              }, [
                unref(hasLabel) ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(item.props.label), 1)) : createCommentVNode("v-if", true)
              ], 10, _hoisted_4$1)
            ], 42, _hoisted_3$1)), [
              [vShow, unref(isTwoLengthShow)(index)]
            ]);
          }), 128))
        ], 2)) : createCommentVNode("v-if", true),
        props.motionBlur ? (openBlock(), createElementBlock("svg", _hoisted_6, _hoisted_8)) : createCommentVNode("v-if", true)
      ], 34);
    };
  }
});
var Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "carousel.vue"]]);
const carouselItemProps = buildProps({
  name: { type: String, default: "" },
  label: {
    type: [String, Number],
    default: ""
  }
});
const useCarouselItem = (props, componentName) => {
  const carouselContext = inject(carouselContextKey);
  const instance = getCurrentInstance();
  const carouselItemRef = ref();
  const hover = ref(false);
  const translate = ref(0);
  const scale = ref(1);
  const active = ref(false);
  const ready = ref(false);
  const inStage = ref(false);
  const animating = ref(false);
  const { isCardType, isVertical } = carouselContext;
  function handleItemClick() {
    if (carouselContext && unref(isCardType)) {
      const index = carouselContext.items.value.findIndex(({ uid }) => uid === instance.uid);
      carouselContext.setActiveItem(index);
    }
  }
  onUnmounted(() => {
    carouselContext.removeItem(instance.uid);
  });
  return {
    carouselItemRef,
    active,
    animating,
    hover,
    inStage,
    isVertical,
    translate,
    isCardType,
    scale,
    ready,
    handleItemClick
  };
};
const __default__$1 = defineComponent({
  name: "ElCarouselItem"
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: carouselItemProps,
  setup(__props) {
    const ns = useNamespace("carousel");
    const {
      carouselItemRef,
      active,
      animating,
      hover,
      inStage,
      isVertical,
      translate,
      isCardType,
      scale,
      ready,
      handleItemClick
    } = useCarouselItem();
    const itemKls = computed(() => [
      ns.e("item"),
      ns.is("active", active.value),
      ns.is("in-stage", inStage.value),
      ns.is("hover", hover.value),
      ns.is("animating", animating.value),
      {
        [ns.em("item", "card")]: isCardType.value,
        [ns.em("item", "card-vertical")]: isCardType.value && isVertical.value
      }
    ]);
    const itemStyle = computed(() => {
      const translateType = `translate${unref(isVertical) ? "Y" : "X"}`;
      const _translate = `${translateType}(${unref(translate)}px)`;
      const _scale = `scale(${unref(scale)})`;
      const transform = [_translate, _scale].join(" ");
      return {
        transform
      };
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        ref_key: "carouselItemRef",
        ref: carouselItemRef,
        class: normalizeClass(unref(itemKls)),
        style: normalizeStyle(unref(itemStyle)),
        onClick: _cache[0] || (_cache[0] = (...args) => unref(handleItemClick) && unref(handleItemClick)(...args))
      }, [
        unref(isCardType) ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("mask"))
        }, null, 2)), [
          [vShow, !unref(active)]
        ]) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default")
      ], 6)), [
        [vShow, unref(ready)]
      ]);
    };
  }
});
var CarouselItem = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "carousel-item.vue"]]);
const ElCarousel = withInstall(Carousel, {
  CarouselItem
});
const ElCarouselItem = withNoopInstall(CarouselItem);
const overlayProps = buildProps({
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: {
    type: Boolean,
    default: false
  },
  overlayClass: {
    type: definePropType([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: definePropType([String, Number])
  }
});
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const BLOCK = "overlay";
var Overlay = defineComponent({
  name: "ElOverlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit }) {
    const ns = useNamespace(BLOCK);
    const onMaskClick = (e) => {
      emit("click", e);
    };
    const { onClick, onMousedown, onMouseup } = useSameTarget(props.customMaskEvent ? void 0 : onMaskClick);
    return () => {
      return props.mask ? createVNode("div", {
        class: [ns.b(), props.overlayClass],
        style: {
          zIndex: props.zIndex
        },
        onClick,
        onMousedown,
        onMouseup
      }, [renderSlot(slots, "default")], PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS, ["onClick", "onMouseup", "onMousedown"]) : h("div", {
        class: props.overlayClass,
        style: {
          zIndex: props.zIndex,
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }, [renderSlot(slots, "default")]);
    };
  }
});
const ElOverlay = Overlay;
const dialogContentProps = buildProps({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: iconPropType
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
});
const dialogProps = buildProps({
  ...dialogContentProps,
  appendToBody: Boolean,
  appendTo: {
    type: definePropType(String),
    default: "body"
  },
  beforeClose: {
    type: definePropType(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: {
    type: Boolean,
    default: false
  },
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true
};
const useDialog = (props, targetRef) => {
  var _a;
  const instance = getCurrentInstance();
  const emit = instance.emit;
  const { nextZIndex } = useZIndex();
  let lastPosition = "";
  const titleId = useId();
  const bodyId = useId();
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const zIndex = ref((_a = props.zIndex) != null ? _a : nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const namespace = useGlobalConfig("namespace", defaultNamespace);
  const style = computed(() => {
    const style2 = {};
    const varPrefix = `--${namespace.value}-dialog`;
    if (!props.fullscreen) {
      if (props.top) {
        style2[`${varPrefix}-margin-top`] = props.top;
      }
      if (props.width) {
        style2[`${varPrefix}-width`] = addUnit(props.width);
      }
    }
    return style2;
  });
  const overlayDialogStyle = computed(() => {
    if (props.alignCenter) {
      return { display: "flex" };
    }
    return {};
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }
  function beforeLeave() {
    emit("close");
  }
  function open() {
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }
  function handleClose() {
    function hide(shouldCancel) {
      if (shouldCancel)
        return;
      closed.value = true;
      visible.value = false;
    }
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }
  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }
  function doOpen() {
    if (!isClient)
      return;
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  function onOpenAutoFocus() {
    emit("openAutoFocus");
  }
  function onCloseAutoFocus() {
    emit("closeAutoFocus");
  }
  function onFocusoutPrevented(event) {
    var _a2;
    if (((_a2 = event.detail) == null ? void 0 : _a2.focusReason) === "pointer") {
      event.preventDefault();
    }
  }
  if (props.lockScroll) {
    useLockscreen(visible);
  }
  function onCloseRequested() {
    if (props.closeOnPressEscape) {
      handleClose();
    }
  }
  watch(() => props.modelValue, (val) => {
    if (val) {
      closed.value = false;
      open();
      rendered.value = true;
      zIndex.value = isUndefined(props.zIndex) ? nextZIndex() : zIndex.value++;
      nextTick(() => {
        emit("open");
        if (targetRef.value) {
          targetRef.value.scrollTop = 0;
        }
      });
    } else {
      if (visible.value) {
        close();
      }
    }
  });
  watch(() => props.fullscreen, (val) => {
    if (!targetRef.value)
      return;
    if (val) {
      lastPosition = targetRef.value.style.transform;
      targetRef.value.style.transform = "";
    } else {
      targetRef.value.style.transform = lastPosition;
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onOpenAutoFocus,
    onCloseAutoFocus,
    onCloseRequested,
    onFocusoutPrevented,
    titleId,
    bodyId,
    closed,
    style,
    overlayDialogStyle,
    rendered,
    visible,
    zIndex
  };
};
const drawerProps = buildProps({
  ...dialogProps,
  direction: {
    type: String,
    default: "rtl",
    values: ["ltr", "rtl", "ttb", "btt"]
  },
  size: {
    type: [String, Number],
    default: "30%"
  },
  withHeader: {
    type: Boolean,
    default: true
  },
  modalFade: {
    type: Boolean,
    default: true
  },
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
const drawerEmits = dialogEmits;
const _hoisted_1 = ["aria-label", "aria-labelledby", "aria-describedby"];
const _hoisted_2 = ["id", "aria-level"];
const _hoisted_3 = ["aria-label"];
const _hoisted_4 = ["id"];
const __default__ = defineComponent({
  name: "ElDrawer",
  inheritAttrs: false
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: drawerProps,
  emits: drawerEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      scope: "el-drawer",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/drawer.html#slots"
    }, computed(() => !!slots.title));
    const drawerRef = ref();
    const focusStartRef = ref();
    const ns = useNamespace("drawer");
    const { t } = useLocale();
    const {
      afterEnter,
      afterLeave,
      beforeLeave,
      visible,
      rendered,
      titleId,
      bodyId,
      zIndex,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onFocusoutPrevented,
      onCloseRequested,
      handleClose
    } = useDialog(props, drawerRef);
    const isHorizontal = computed(() => props.direction === "rtl" || props.direction === "ltr");
    const drawerSize = computed(() => addUnit(props.size));
    expose({
      handleClose,
      afterEnter,
      afterLeave
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: "body",
        disabled: !_ctx.appendToBody
      }, [
        createVNode(Transition, {
          name: unref(ns).b("fade"),
          onAfterEnter: unref(afterEnter),
          onAfterLeave: unref(afterLeave),
          onBeforeLeave: unref(beforeLeave),
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createVNode(unref(ElOverlay), {
              mask: _ctx.modal,
              "overlay-class": _ctx.modalClass,
              "z-index": unref(zIndex),
              onClick: unref(onModalClick)
            }, {
              default: withCtx(() => [
                createVNode(unref(ElFocusTrap), {
                  loop: "",
                  trapped: unref(visible),
                  "focus-trap-el": drawerRef.value,
                  "focus-start-el": focusStartRef.value,
                  onFocusAfterTrapped: unref(onOpenAutoFocus),
                  onFocusAfterReleased: unref(onCloseAutoFocus),
                  onFocusoutPrevented: unref(onFocusoutPrevented),
                  onReleaseRequested: unref(onCloseRequested)
                }, {
                  default: withCtx(() => [
                    createElementVNode("div", mergeProps({
                      ref_key: "drawerRef",
                      ref: drawerRef,
                      "aria-modal": "true",
                      "aria-label": _ctx.title || void 0,
                      "aria-labelledby": !_ctx.title ? unref(titleId) : void 0,
                      "aria-describedby": unref(bodyId)
                    }, _ctx.$attrs, {
                      class: [unref(ns).b(), _ctx.direction, unref(visible) && "open"],
                      style: unref(isHorizontal) ? "width: " + unref(drawerSize) : "height: " + unref(drawerSize),
                      role: "dialog",
                      onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                      }, ["stop"]))
                    }), [
                      createElementVNode("span", {
                        ref_key: "focusStartRef",
                        ref: focusStartRef,
                        class: normalizeClass(unref(ns).e("sr-focus")),
                        tabindex: "-1"
                      }, null, 2),
                      _ctx.withHeader ? (openBlock(), createElementBlock("header", {
                        key: 0,
                        class: normalizeClass(unref(ns).e("header"))
                      }, [
                        !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                          key: 0,
                          close: unref(handleClose),
                          titleId: unref(titleId),
                          titleClass: unref(ns).e("title")
                        }, () => [
                          !_ctx.$slots.title ? (openBlock(), createElementBlock("span", {
                            key: 0,
                            id: unref(titleId),
                            role: "heading",
                            "aria-level": _ctx.headerAriaLevel,
                            class: normalizeClass(unref(ns).e("title"))
                          }, toDisplayString(_ctx.title), 11, _hoisted_2)) : createCommentVNode("v-if", true)
                        ]) : renderSlot(_ctx.$slots, "title", { key: 1 }, () => [
                          createCommentVNode(" DEPRECATED SLOT ")
                        ]),
                        _ctx.showClose ? (openBlock(), createElementBlock("button", {
                          key: 2,
                          "aria-label": unref(t)("el.drawer.close"),
                          class: normalizeClass(unref(ns).e("close-btn")),
                          type: "button",
                          onClick: _cache[0] || (_cache[0] = (...args) => unref(handleClose) && unref(handleClose)(...args))
                        }, [
                          createVNode(unref(ElIcon), {
                            class: normalizeClass(unref(ns).e("close"))
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(close_default))
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ], 10, _hoisted_3)) : createCommentVNode("v-if", true)
                      ], 2)) : createCommentVNode("v-if", true),
                      unref(rendered) ? (openBlock(), createElementBlock("div", {
                        key: 1,
                        id: unref(bodyId),
                        class: normalizeClass(unref(ns).e("body"))
                      }, [
                        renderSlot(_ctx.$slots, "default")
                      ], 10, _hoisted_4)) : createCommentVNode("v-if", true),
                      _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
                        key: 2,
                        class: normalizeClass(unref(ns).e("footer"))
                      }, [
                        renderSlot(_ctx.$slots, "footer")
                      ], 2)) : createCommentVNode("v-if", true)
                    ], 16, _hoisted_1)
                  ]),
                  _: 3
                }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [
              [vShow, unref(visible)]
            ])
          ]),
          _: 3
        }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ], 8, ["disabled"]);
    };
  }
});
var Drawer = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "drawer.vue"]]);
const ElDrawer = withInstall(Drawer);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Subtitle",
  __ssrInlineRender: true,
  props: {
    bannerData: { default: [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_image = ElImage;
      const _component_Icon = __nuxt_component_7$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-749cf764>`);
      if (props.bannerData.cate == 0) {
        _push(`<div class="relative w-full" style="${ssrRenderStyle({ "height": "calc(100vh - 80px)" })}" data-v-749cf764>`);
        if (props.bannerData) {
          _push(ssrRenderComponent(_component_el_image, {
            src: props.bannerData.poster_image,
            class: "w-full h-full absolute inset-0 z-1",
            fit: "cover"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="w-full h-full absolute inset-0 z-10" style="${ssrRenderStyle({ "background": "linear-gradient(270deg, rgba(47, 47, 47, 0) 0%, rgba(0, 0, 0, 0.8) 66.81%)" })}" data-v-749cf764></div><div class="absolute left-48 top-359px w-650px max-w-800px z-20" style="${ssrRenderStyle({ "font-family": "PPHattonMedium" })}" data-v-749cf764><div class="text-48px" data-v-749cf764>${ssrInterpolate(props.bannerData.name)}</div><img${ssrRenderAttr("src", _imports_0$1)} class="h-15 block" data-v-749cf764><div class="text-18px text-[#ffffff] mt-24px" data-v-749cf764>${ssrInterpolate(props.bannerData.subtitle)}</div><div class="text-18px text-[#E0E0E0] mt-3" data-v-749cf764>${ssrInterpolate(props.bannerData.summary)}</div><div class="uppercase w-138px h-18px bg-#FFFFFF text-black mt-11 cursor-pointer flex items-center justify-between" data-v-749cf764><div class="text-14px" data-v-749cf764>Learn \xA0More</div>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:arrow-top-right",
          class: "w-18px h-18px"
        }, null, _parent));
        _push(`</div></div></div>`);
      } else if (props.bannerData.cate == 1) {
        _push(`<div class="w-full flex" style="${ssrRenderStyle({ "height": "calc(100vh - 80px)" })}" data-v-749cf764><div class="h-full w-1/2 relative z-1" data-v-749cf764>`);
        if (props.bannerData && props.bannerData.profile_avatar[0]) {
          _push(ssrRenderComponent(_component_el_image, {
            src: props.bannerData.profile_avatar[0].file_url,
            fit: "cover",
            class: "w-full h-full absolute inset-0 z-1"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="w-full h-full absolute inset-0 z-10" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 29.69%)" })}" data-v-749cf764></div></div><div class="h-full w-1/2 relative z-10" data-v-749cf764>`);
        _push(ssrRenderComponent(unref(R), {
          src: "https://www.starscollective.com/assets/videos/pc/SC-Map-4.webm",
          muted: "",
          autoplay: "",
          loop: "",
          playsinline: "",
          class: "absolute inset-0 w-full h-full z-1"
        }, null, _parent));
        _push(`<div class="absolute w-600px py-34px px-33px left-1/2 -translate-x-1/2 top-168px z-20 bg-black" data-v-749cf764><div class="flex items-center justify-between" data-v-749cf764><div class="flex" data-v-749cf764>`);
        if (props.bannerData && props.bannerData.profile_avatar[0]) {
          _push(ssrRenderComponent(_component_el_image, {
            src: props.bannerData.profile_avatar[0].file_url,
            fit: "cover",
            class: "w-50px h-50px mr-5"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="text-18px" data-v-749cf764><div data-v-749cf764>${ssrInterpolate(props.bannerData.first_name)} ${ssrInterpolate(props.bannerData.last_name)}</div><div class="text-[#E0E0E0] mt-3px" data-v-749cf764>Artist | Generative Artist</div></div></div><div class="h-18px leading-18px flex text-black bg-#ffffff cursor-pointer" data-v-749cf764><div data-v-749cf764>VIEW PROFILE</div>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:arrow-top-right",
          class: "w-18px h-18px ml-2"
        }, null, _parent));
        _push(`</div></div><div class="text-18px whitespace-break-spaces mt-10 font-light leading-7 text-[#E0E0E0] line-clamp-5" data-v-749cf764>${ssrInterpolate(props.bannerData.introduce)}</div></div><div class="absolute bottom-70px w-600px left-1/2 -translate-x-1/2 text-60px PPHattonMedium z-20" data-v-749cf764><div data-v-749cf764>Meet The Star</div><img${ssrRenderAttr("src", _imports_0$1)} class="h-15 block" data-v-749cf764></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banner/Subtitle.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__scopeId", "data-v-749cf764"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  setup(__props) {
    const carouselRef = ref(null);
    const initialIndex = ref(0);
    const bannerResult = ref([]);
    const imageDataLeft = ref([]);
    const imageDataRight = ref([]);
    const handleChange = (e) => {
      initialIndex.value = e;
    };
    const getBannerData = async () => {
      const res = await apiindexbanner("0");
      bannerResult.value = res.data;
      const arr = [];
      bannerResult.value.forEach((item, index) => {
        if (item.cate == 0 && index != 0)
          arr.push(item.poster_image);
        else if (item.cate == 1 && index != 0)
          arr.push(item.profile_avatar[0].file_url);
      });
      imageDataRight.value = arr;
    };
    getBannerData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_carousel = ElCarousel;
      const _component_el_carousel_item = ElCarouselItem;
      const _component_BannerSubtitle = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full relative" }, _attrs))} data-v-aabe3d3f>`);
      if (unref(bannerResult).length > 0) {
        _push(ssrRenderComponent(_component_el_carousel, {
          ref_key: "carouselRef",
          ref: carouselRef,
          autoplay: false,
          arrow: "never",
          height: "auto",
          "indicator-position": "none",
          "initial-index": unref(initialIndex),
          onChange: handleChange
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(bannerResult), (item, index) => {
                _push2(ssrRenderComponent(_component_el_carousel_item, {
                  key: index,
                  style: { "height": "calc(100vh - 80px)" }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_BannerSubtitle, { "banner-data": item }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_BannerSubtitle, { "banner-data": item }, null, 8, ["banner-data"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(bannerResult), (item, index) => {
                  return openBlock(), createBlock(_component_el_carousel_item, {
                    key: index,
                    style: { "height": "calc(100vh - 80px)" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BannerSubtitle, { "banner-data": item }, null, 8, ["banner-data"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="w-full absolute h-10px flex justify-center bottom-38px space-x-8" data-v-aabe3d3f><!--[-->`);
      ssrRenderList(unref(bannerResult).length, (item, index) => {
        _push(`<div class="${ssrRenderClass([[unref(initialIndex) == index ? "bg-white" : ""], "h-full w-9px border border-white cursor-pointer"])}" data-v-aabe3d3f></div>`);
      });
      _push(`<!--]--></div><div class="absolute right-0 h-full top-0 flex cursor-pointer" data-v-aabe3d3f><!--[-->`);
      ssrRenderList(unref(imageDataRight), (item, index) => {
        _push(`<div class="h-full w-30px swiperItemRight relative hover:w-60px" data-v-aabe3d3f><img class="h-full w-full object-cover"${ssrRenderAttr("src", item)} data-v-aabe3d3f></div>`);
      });
      _push(`<!--]--></div><div class="absolute left-0 h-full top-0 flex cursor-pointer" data-v-aabe3d3f><!--[-->`);
      ssrRenderList(unref(imageDataLeft), (item, index) => {
        _push(`<div class="h-full w-30px swiperItemRight relative hover:w-60px" data-v-aabe3d3f><img class="h-full w-full object-cover"${ssrRenderAttr("src", item)} data-v-aabe3d3f></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banner/Carousel.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__scopeId", "data-v-aabe3d3f"]]);
const _imports_0 = "" + buildAssetsURL("Property1.BFTI9ML-.png");
const _imports_1 = "" + buildAssetsURL("Property2.LWAj_v7f.png");
const _imports_2 = "" + buildAssetsURL("Property3.n9Zw2hZh.png");
const _imports_3 = "" + buildAssetsURL("Property4.BshG2XC1.png");
const _imports_4 = "" + buildAssetsURL("Property5.CNeKuiji.png");
const _imports_5 = "" + buildAssetsURL("Property6.BWTXyMFw.png");
const _imports_6 = "" + buildAssetsURL("peter.DjSPpX7R.png");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Starlight",
  __ssrInlineRender: true,
  setup(__props) {
    const SwiperConfig = reactive({
      modules: [Autoplay, EffectFade],
      speed: 250,
      autoplay: {
        delay: 0
      },
      loop: true,
      effect: "fade"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full overflow-hidden bg-black" }, _attrs))} data-v-d6e93f73><div class="px-50px text-18px leading-27px text-center py-10 PolySansNeutral font-light" data-v-d6e93f73> Founded in 2020 by Peter Luo, Stars Collective is a dynamic initiative <br data-v-d6e93f73> committed to <span class="font-semibold" data-v-d6e93f73>Diversity</span>, <span class="font-semibold" data-v-d6e93f73>Innovation</span>, and <span class="font-semibold" data-v-d6e93f73>Empowerment</span> and to pushing the <br data-v-d6e93f73> boundaries of storytelling through the integration of breakthrough <br data-v-d6e93f73> technologies. Stars Collective has since expanded into other sectors of <br data-v-d6e93f73> entertainment, focusing on developing cross-medium content and fostering <br data-v-d6e93f73> multidisciplinary collaboration, in order to unlock new narrative frontiers and <br data-v-d6e93f73> redefine the storytelling landscape. </div>`);
      _push(ssrRenderComponent(unref(R), {
        src: "https://www.starscollective.com/assets/videos/pc/keywords.webm",
        muted: "",
        autoplay: "",
        loop: "",
        playsinline: "",
        class: "w-full h-screen"
      }, null, _parent));
      _push(`<div class="px-50px py-10" data-v-d6e93f73><div class="max-w-1300px mx-auto flex justify-between items-center" data-v-d6e93f73><div class="PolySansNeutral text-lg space-y-5 flex-1 min-w-680px" data-v-d6e93f73><div class="font-semibold" data-v-d6e93f73>About Peter Luo</div><div class="font-light" data-v-d6e93f73> Best known for his director-first approach to film financing and passionate <br data-v-d6e93f73> advocacy for diverse representation in Hollywood, award-winning producer, <br data-v-d6e93f73> and Stars Collective founder Peter Luo remains at the forefront of innovation <br data-v-d6e93f73> in the entertainment space. </div></div><div class="relative" data-v-d6e93f73>`);
      _push(ssrRenderComponent(_component_Swiper, mergeProps({ class: "w-90" }, unref(SwiperConfig)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="w-full" data-v-d6e93f73${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "",
                      class: "w-full"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_1)} alt="" class="w-full" data-v-d6e93f73${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_1,
                      alt: "",
                      class: "w-full"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_2)} alt="" class="w-full" data-v-d6e93f73${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_2,
                      alt: "",
                      class: "w-full"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_3)} alt="" class="w-full" data-v-d6e93f73${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_3,
                      alt: "",
                      class: "w-full"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_4)} alt="" class="w-full" data-v-d6e93f73${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_4,
                      alt: "",
                      class: "w-full"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_5)} alt="" class="w-full" data-v-d6e93f73${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_5,
                      alt: "",
                      class: "w-full"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "",
                    class: "w-full"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_1,
                    alt: "",
                    class: "w-full"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_2,
                    alt: "",
                    class: "w-full"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_3,
                    alt: "",
                    class: "w-full"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_4,
                    alt: "",
                    class: "w-full"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_5,
                    alt: "",
                    class: "w-full"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="absolute inset-0 z-10 w-full h-full flex justify-center items-center" data-v-d6e93f73><div class="relative" data-v-d6e93f73><img${ssrRenderAttr("src", _imports_6)} alt="" class="w-65 mt-5" data-v-d6e93f73><div class="absolute bottom-0 left-0 h-15 w-full peter-mask z-10" data-v-d6e93f73></div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Starlight.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__scopeId", "data-v-d6e93f73"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Movies",
  __ssrInlineRender: true,
  setup(__props) {
    const starAnimate = ref(false);
    ref(false);
    const moviesRef = ref(null);
    watchEffect(() => {
      if (starAnimate.value) {
        AnimateEffect();
      }
    });
    const AnimateEffect = () => {
      gsap.fromTo(".stars_text", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 2.5 });
      gsap.fromTo(".btn gradient-btn", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 2.5 });
      gsap.fromTo(".image1", { x: "100%", opacity: 0 }, { opacity: 1, x: 0, duration: 2.5 });
      gsap.fromTo(".image2", { x: "-100%", y: "100%", opacity: 0 }, { opacity: 1, x: 0, y: 0, duration: 2.5 });
      gsap.fromTo(".image3", { x: "150%", y: "100%", opacity: 0 }, { opacity: 1, x: 0, y: 0, duration: 2.5 });
      gsap.fromTo(".image4", { x: "150%", y: "-100%", opacity: 0 }, { opacity: 1, x: 0, y: 0, duration: 2.5 });
      gsap.fromTo(".image5", { x: "-3%", y: "-100%", opacity: 0 }, { opacity: 1, x: 0, y: 0, duration: 2.5 });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "moviesRef",
        ref: moviesRef,
        class: "bg-black pt-125px overflow-hidden"
      }, _attrs))}><div class="flex max-w-1300px px-50px overflow-hidden mx-auto justify-between"><div class="mt-130px w-400px overflow-hidden"><div class="text-77px PPHattonMedium">Movies</div><img${ssrRenderAttr("src", _imports_0$1)} class="h-15 block"><div class="text-18px leading-27px mt-10 stars_text whitespace-nowrap"> Stars Collective and its founder Peter Luo are<br> proud to produce and finance many Hollywood<br> movies and independent films. </div><div class="btn gradient-btn mt-10"><div class="">View All Movies</div></div></div><div class="min-w-550px w-690px relative h-1160px overflow-hidden hidden sm:hidden md:block xl:block"><img src="https://www.starscollective.com/assets/images/about/Midway1.jpg" class="w-49% h-42% object-cover absolute left-0 opacity-0 image1"><img src="https://www.starscollective.com/assets/images/about/Marshall1.jpg" class="w-49% h-42% object-cover absolute right-0 opacity-0 image2"><img src="https://www.starscollective.com/assets/images/about/Malignant1.jpg" class="w-33% h-28% object-cover absolute left-0 top-44% object-cover opacity-0 image3"><img src="https://www.starscollective.com/assets/images/about/Greta1.jpg" class="w-33% h-27.5% object-cover absolute left-0 bottom-0 opacity-0 image4"><img src="https://www.starscollective.com/assets/images/about/CrazyRichAsians1.jpg" class="w-64% h-56% object-cover absolute right-0 bottom-0 opacity-0 image5"></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Movies.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Mentors",
  __ssrInlineRender: true,
  setup(__props) {
    const starAnimate = ref(false);
    const mentorRef = ref(null);
    ref(0);
    ref(0);
    ref("");
    const mentorsList = ref([
      { first_name: "Jon", last_name: "M. Chu" },
      { first_name: "Donna", last_name: "Gigliotti" },
      { first_name: "Sanping", last_name: "Han" },
      { first_name: "Eric", last_name: "Heumann" },
      { first_name: "Xiaoming", last_name: "Huang" },
      { first_name: "Liming", last_name: "Ke" },
      { first_name: "Chris", last_name: "Lee" },
      // { first_name: 'Jonathan', last_name: 'Liebesman' },
      { first_name: "Anthony", last_name: "McCarten" },
      { first_name: "Rob", last_name: "Minkoff" },
      { first_name: "Gianni", last_name: "Nunnari" },
      { first_name: "Sam", last_name: "Raimi" },
      { first_name: "Alan", last_name: "Taylor" },
      { first_name: "Patrick", last_name: "Wachsberger" },
      { first_name: "Paula", last_name: "Wagner" }
    ]);
    watchEffect(() => {
      if (starAnimate.value) {
        AnimateEffect();
      }
    });
    const AnimateEffect = () => {
      gsap.fromTo(".mentor_text", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 2.5 });
      gsap.fromTo(".btn gradient-btn", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 2.5 });
      gsap.fromTo(".mentor_name", { translateY: "-50%", opacity: 0 }, { translateY: 0, opacity: 1, duration: 2.5 });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "mentorRef",
        ref: mentorRef,
        class: "bg-black pt-170px pb-15 overflow-hidden"
      }, _attrs))} data-v-6fe73c96><div class="px-50px" data-v-6fe73c96><div class="max-w-1300px mx-auto flex overflow-hidden" data-v-6fe73c96><div class="w-1/2 mt-100px" data-v-6fe73c96><div class="text-77px PPHattonMedium" data-v-6fe73c96>Our<br data-v-6fe73c96>Mentors</div><img${ssrRenderAttr("src", _imports_0$1)} class="h-15 block" data-v-6fe73c96><div class="text-18px leading-27px mt-10 mentor_text whitespace-nowrap" data-v-6fe73c96> We understand how critical it is for young filmmakers of<br data-v-6fe73c96>diverse backgrounds to have the guidance and mentorship<br data-v-6fe73c96>of renowned professionals who\u2019ve walked their path. That\u2019s<br data-v-6fe73c96>why we\u2019ve assembled a community of world-famous<br data-v-6fe73c96>directors and producers to collaborate and curate<br data-v-6fe73c96>opportunities for our young talents and their film projects. </div><div class="btn gradient-btn mt-10" data-v-6fe73c96><div class="" data-v-6fe73c96>View All Mentors</div></div></div><div class="w-1/2 flex justify-end mb-145px relative" data-v-6fe73c96><div class="w-300px overflow-hidden mentor_name" data-v-6fe73c96><div class="w-300px text-14px text-#616161" data-v-6fe73c96>*Names are listed in alphabetical order</div><!--[-->`);
      ssrRenderList(unref(mentorsList), (item, index) => {
        _push(`<div class="mt-4 cursor-pointer mentors-text" data-v-6fe73c96><div class="font-medium text-26px leading-9 whitespace-nowrap PPHattonMedium" data-v-6fe73c96>${ssrInterpolate(item.first_name)} ${ssrInterpolate(item.last_name)}</div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Mentors.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-6fe73c96"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Stars",
  __ssrInlineRender: true,
  setup(__props) {
    const starAnimate = ref(false);
    const starsRef = ref(null);
    watchEffect(() => {
      if (starAnimate.value) {
        AnimateEffect();
      }
    });
    const AnimateEffect = () => {
      const tl = gsap.timeline();
      tl.fromTo(".start_text3", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5 });
      tl.fromTo(".start_btn", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5 }, "<");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "starsRef",
        ref: starsRef,
        class: "w-full h-screen bg-black relative"
      }, _attrs))} data-v-77848bd9>`);
      _push(ssrRenderComponent(unref(R), {
        src: "https://www.starscollective.com/assets/videos/pc/SC-Map-4.webm",
        muted: "",
        autoplay: "",
        loop: "",
        playsinline: "",
        class: "absolute inset-0 w-full h-full z-1"
      }, null, _parent));
      _push(`<div class="px-50px pt-80px overflow-hidden relative z-10" data-v-77848bd9><div class="w-1300px mx-auto" data-v-77848bd9><div class="text-77px PPHattonMedium" data-v-77848bd9>Our<br data-v-77848bd9>Stars</div><img${ssrRenderAttr("src", _imports_0$1)} class="h-15 block" data-v-77848bd9><div class="text-18px mt-12 leading-7 start_text3 whitespace-nowrap opacity-0" data-v-77848bd9> Stars Collective supports filmmakers and artists from around the world and <br data-v-77848bd9> values their creative merits. We take pride in our diverse community of over <br data-v-77848bd9> 200 emerging talents. </div><div class="btn gradient-btn mt-10" data-v-77848bd9><div class="" data-v-77848bd9>View All Stars</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Stars.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-77848bd9"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Cross",
  __ssrInlineRender: true,
  setup(__props) {
    const starAnimate = ref(false);
    ref(null);
    const partners = ref([]);
    const imagesFormat = computed(() => {
      return (item) => {
        return `https://www.starscollective.com${item.logo_image}`;
      };
    });
    const partnersList = ref([
      { logo_image: "/assets/images/logos/logo1.png" },
      { logo_image: "/assets/images/logos/logo2.png" },
      { logo_image: "/assets/images/logos/logo3.png" },
      { logo_image: "/assets/images/logos/logo4.png" },
      { logo_image: "/assets/images/logos/logo5.png" },
      { logo_image: "/assets/images/logos/logo6.png" },
      { logo_image: "/assets/images/logos/logo7.png" },
      { logo_image: "/assets/images/logos/logo8.png" },
      { logo_image: "/assets/images/logos/logo9.png" },
      { logo_image: "/assets/images/logos/logo10.png" },
      { logo_image: "/assets/images/logos/logo11.png" },
      { logo_image: "/assets/images/logos/logo12.png" }
    ]);
    const drawer = ref(false);
    const getLogo = async () => {
      const res = await apiIndexLogoList();
      partners.value = res.data;
    };
    getLogo();
    watchEffect(() => {
      if (starAnimate.value) {
        AnimateEffect();
      }
    });
    const AnimateEffect = () => {
      gsap.fromTo(".corss-text", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 2 });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SwiperLoop = _sfc_main$d;
      const _component_el_drawer = ElDrawer;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-52b7a9ad><div class="px-50px" data-v-52b7a9ad><div class="max-w-1300px mx-auto" data-v-52b7a9ad>`);
      _push(ssrRenderComponent(unref(R), {
        src: "https://www.starscollective.com/assets/videos/pc/cross-medium.webm",
        muted: "",
        autoplay: "",
        loop: "",
        playsinline: "",
        class: "w-full"
      }, null, _parent));
      _push(`<div class="flex justify-center items-end pt-30 space-x-30" data-v-52b7a9ad><img${ssrRenderAttr("src", _imports_1$1)} alt="" class="h-25" data-v-52b7a9ad><img${ssrRenderAttr("src", _imports_2$1)} alt="" class="h-22" data-v-52b7a9ad><img${ssrRenderAttr("src", _imports_3$1)} alt="" class="h-25" data-v-52b7a9ad></div><div class="py-30 flex flex-col justify-center items-center space-y-10" data-v-52b7a9ad><div class="PPHattonMedium text-26px text-center max-w-840px corss-text opacity-0" data-v-52b7a9ad> Uncovering the possibilities of storytelling in different mediums by pushing the boundaries of traditional filmmaking </div><div class="btn gradient-btn mt-10" data-v-52b7a9ad><div data-v-52b7a9ad>Learn More</div></div></div><div class="py-20 flex justify-center" data-v-52b7a9ad><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="w-500px" data-v-52b7a9ad></div></div></div><div class="w-full h-screen" data-v-52b7a9ad>`);
      _push(ssrRenderComponent(unref(R), {
        src: "https://www.starscollective.com/assets/videos/pc/About-Video.webm",
        muted: "",
        autoplay: "",
        loop: "",
        playsinline: "",
        class: "w-full h-full"
      }, null, _parent));
      _push(`</div><div class="px-50px pt-50" data-v-52b7a9ad><div class="max-w-1300px mx-auto flex justify-center items-center space-x-10" data-v-52b7a9ad><div class="w-1/2 ml-15" data-v-52b7a9ad><div class="w-full py-10" data-v-52b7a9ad><img${ssrRenderAttr("src", _imports_1$2)} alt="" class="w-full -ml-15" data-v-52b7a9ad></div><img src="https://www.starscollective.com/assets/images/gif/line2.gif" alt="" class="w-full block -ml-10" data-v-52b7a9ad></div></div><div class="max-w-1300px mx-auto mt-50" data-v-52b7a9ad><div class="text-77px PPHattonMedium" data-v-52b7a9ad>Our<br data-v-52b7a9ad>Partners</div><img${ssrRenderAttr("src", _imports_0$1)} class="h-15 block" data-v-52b7a9ad><div class="text-#616161 PolySansSlim mt-10" data-v-52b7a9ad>* Names are listed in alphabetical order</div></div><div class="w-full mt-20" data-v-52b7a9ad>`);
      _push(ssrRenderComponent(_component_SwiperLoop, {
        width: 100,
        list: unref(partnersList)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(partnersList), (item, index) => {
              _push2(`<div class="w-100px inline-block" data-v-52b7a9ad${_scopeId}><div class="w-full h-0 pb-full relative" data-v-52b7a9ad${_scopeId}><img${ssrRenderAttr("src", unref(imagesFormat)(item))} alt=""${ssrRenderAttr("data-link", item.link)} class="absolute top-0 left-0 w-full h-full object-contain" data-v-52b7a9ad${_scopeId}></div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(partnersList), (item, index) => {
                return openBlock(), createBlock("div", {
                  key: index,
                  class: "w-100px inline-block"
                }, [
                  createVNode("div", { class: "w-full h-0 pb-full relative" }, [
                    createVNode("img", {
                      src: unref(imagesFormat)(item),
                      alt: "",
                      "data-link": item.link,
                      class: "absolute top-0 left-0 w-full h-full object-contain"
                    }, null, 8, ["src", "data-link"])
                  ])
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="max-w-1300px mx-auto flex justify-center items-center pt-20 pb-50" data-v-52b7a9ad><div class="btn gradient-btn" data-v-52b7a9ad><div data-v-52b7a9ad>Show All Partners</div></div></div>`);
      _push(ssrRenderComponent(_component_el_drawer, {
        modelValue: unref(drawer),
        "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
        class: "drawer-cont",
        "append-to-body": true,
        direction: "btt",
        size: "100vh"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-50px" data-v-52b7a9ad${_scopeId}><div class="max-w-1300px mx-auto grid grid-cols-6 gap-5" data-v-52b7a9ad${_scopeId}><!--[-->`);
            ssrRenderList(unref(partners), (item, index) => {
              _push2(`<div data-v-52b7a9ad${_scopeId}><div class="flex justify-center items-center" data-v-52b7a9ad${_scopeId}><img${ssrRenderAttr("src", item.logo_image)} alt="" class="w-25 h-25 object-contain" data-v-52b7a9ad${_scopeId}></div></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "px-50px" }, [
                createVNode("div", { class: "max-w-1300px mx-auto grid grid-cols-6 gap-5" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(partners), (item, index) => {
                    return openBlock(), createBlock("div", { key: index }, [
                      createVNode("div", { class: "flex justify-center items-center" }, [
                        createVNode("img", {
                          src: item.logo_image,
                          alt: "",
                          class: "w-25 h-25 object-contain"
                        }, null, 8, ["src"])
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Cross.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-52b7a9ad"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const anchorSkip = (_url) => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Header = _sfc_main$b;
      const _component_BannerCarousel = __nuxt_component_2;
      const _component_HomeStarlight = __nuxt_component_3;
      const _component_HomeMovies = _sfc_main$4;
      const _component_HomeMentors = __nuxt_component_5;
      const _component_HomeStars = __nuxt_component_6;
      const _component_HomeCross = __nuxt_component_7;
      const _component_Footer = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Header, { "onUpdate:anchorSkip": anchorSkip }, null, _parent2, _scopeId));
            _push2(`<div id="scroll_top" class="w-full bg-black"${_scopeId}><div class="h-screen"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BannerCarousel, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_HomeStarlight, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_HomeMovies, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_HomeMentors, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_HomeStars, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_HomeCross, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Header, { "onUpdate:anchorSkip": anchorSkip }),
              createVNode("div", {
                id: "scroll_top",
                class: "w-full bg-black"
              }, [
                createVNode("div", { class: "h-screen" }, [
                  createVNode(_component_BannerCarousel)
                ]),
                createVNode(_component_HomeStarlight),
                createVNode(_component_HomeMovies),
                createVNode(_component_HomeMentors),
                createVNode(_component_HomeStars)
              ]),
              createVNode(_component_HomeCross),
              createVNode(_component_Footer)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
