import { defineComponent, toRaw, shallowRef, computed, ref, readonly, onMounted, watch, normalizeClass, onBeforeUnmount, h as h$1, hasInjectionContext, inject, version, unref, provide, createElementBlock, defineAsyncComponent, getCurrentInstance, shallowReactive, Suspense, nextTick, Transition, useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, createApp, effectScope, reactive, isRef, isReactive, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, toRef, getCurrentScope, onScopeDispose, isReadonly, toRefs, markRaw, isShallow } from 'vue';
import { $ as $fetch, w as withQuery, l as hasProtocol, p as parseURL, m as isScriptProtocol, n as joinURL, h as createError$1, o as defu, q as sanitizeStatusCode, r as createHooks, t as isSamePath, v as toRouteMatcher, x as createRouter$1, y as klona, z as parse, A as getRequestHeader, B as destr, C as isEqual, D as setCookie, E as getCookie, F as deleteCookie } from '../runtime.mjs';
import { b as baseURL } from '../routes/renderer.mjs';
import { getActiveHead } from 'unhead';
import { defineHeadPlugin } from '@unhead/shared';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { isClient } from '@vueuse/core';
import { isString } from '@vue/shared';
import { isNil } from 'lodash-unified';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import gsap from 'gsap';
import p from 'video.js';

function createContext$1(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers$1.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers$1.delete(onLeave);
      }
    }
  };
}
function createNamespace$1(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext$1({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$2 = "__unctx__";
const defaultNamespace$1 = _globalThis$1[globalKey$2] || (_globalThis$1[globalKey$2] = createNamespace$1());
const getContext = (key, opts = {}) => defaultNamespace$1.get(key, opts);
const asyncHandlersKey$1 = "__unctx_async_handlers__";
const asyncHandlers$1 = _globalThis$1[asyncHandlersKey$1] || (_globalThis$1[asyncHandlersKey$1] = /* @__PURE__ */ new Set());

function g(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);}return t}var d={src:{type:String,onChange:function(e,n){return e.src(n)}},width:{type:Number,onChange:function(e,n){return e.width(n)},onEvent:function(e,n){e.on(["playerresize","resize"],(function(){return n(e.width())}));}},height:{type:Number,onChange:function(e,n){return e.height(n)},onEvent:function(e,n){e.on(["playerresize","resize"],(function(){return n(e.height())}));}},preload:{type:String,onChange:function(e,n){return e.preload(n)}},loop:{type:Boolean,onChange:function(e,n){return e.loop(n)}},muted:{type:Boolean,onChange:function(e,n){return e.muted(n)},onEvent:function(e,n){return e.on("volumechange",(function(){return n(e.muted())}))}},poster:{type:String,onChange:function(e,n){return e.poster(n)},onEvent:function(e,n){return e.on("posterchange",(function(){return n(e.poster())}))}},controls:{type:Boolean,onChange:function(e,n){return e.controls(n)},onEvent:function(e,n){e.on("controlsenabled",(function(){return n(!0)})),e.on("controlsdisabled",(function(){return n(!1)}));}},autoplay:{type:[Boolean,String],onChange:function(e,n){return e.autoplay(n)}},crossorigin:{type:String,onChange:function(e,n){return e.crossOrigin(n)}},crossOrigin:{type:String,onChange:function(e,n){return e.crossOrigin(n)}},playsinline:{type:Boolean,onChange:function(e,n){return e.playsinline(n)}},playsInline:{type:Boolean,onChange:function(e,n){return e.playsinline(n)}}},f={id:{type:String},sources:{type:Array,onChange:function(e,n){return e.src(n)}},tracks:{type:Array,onChange:function(e,n){for(var t=e.remoteTextTracks(),r=(null==t?void 0:t.length)||0;r--;)e.removeRemoteTextTrack(t[r]);e.ready((function(){n.forEach((function(n){return e.addRemoteTextTrack(n,!1)}));}));}},textTrackSettings:{type:Object,onChange:function(e,n){return e.textTrackSettings.options(n)}},language:{type:String,onChange:function(e,n){return e.language(n)},onEvent:function(e,n){return e.on("languagechange",(function(){return n(e.language())}))}},languages:{type:Object},playbackRates:{type:Array,onChange:function(e,n){return e.playbackRates(null!=n?n:[])},onEvent:function(e,n){e.on("playbackrateschange",(function(){return n(e.playbackRates())}));}},audioOnlyMode:{type:Boolean,onChange:function(e,n){return e.audioOnlyMode(n)}},audioPosterMode:{type:Boolean,onChange:function(e,n){return e.audioPosterMode(n)}},responsive:{type:Boolean,onChange:function(e,n){return e.responsive(n)}},breakpoints:{type:Object,onChange:function(e,n){return e.breakpoints(n)}},fluid:{type:Boolean,onChange:function(e,n){return e.fluid(n)}},fill:{type:Boolean,onChange:function(e,n){return e.fill(n)}},aspectRatio:{type:String,onChange:function(e,n){return e.aspectRatio(n)}},fullscreen:{type:Object},liveui:{type:Boolean},liveTracker:{type:Object},disablePictureInPicture:{type:Boolean,onChange:function(e,n){return e.disablePictureInPicture(n)}},notSupportedMessage:{type:String},normalizeAutoplay:{type:Boolean},noUITitleAttributes:{type:Boolean},preferFullWindow:{type:Boolean},suppressNotSupportedError:{type:Boolean},techCanOverridePoster:{type:Boolean},reportTouchActivity:{type:Boolean},techOrder:{type:Array},inactivityTimeout:{type:Number},userActions:{type:Object},plugins:{type:Object},restoreEl:{type:[Boolean,Object]},"vtt.js":{type:String}},v={children:{type:[Array,Object]},controlBar:{type:Object,onChange:function(e,n){return e.controlBar.options(n)}}},y={html5:{type:Object}},h={volume:{type:Number,onChange:function(e,n){return e.volume(n)},onEvent:function(e,n){return e.on("volumechange",(function(){return n(e.volume())}))}},playbackRate:{type:Number,onChange:function(e,n){e.playbackRate(n),e.defaultPlaybackRate(n);},onEvent:function(e,n){e.on("ratechange",(function(){n(e.playbackRate());}));}},options:{type:Object}},b=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),f),v),y),h),m=Object.keys(b),O=Object.assign(Object.assign(Object.assign(Object.assign({},{loadstart:"onLoadStart",suspend:"onSuspend",abort:"onAbort",error:"onError",emptied:"onEmptied",stalled:"onStalled",loadedmetadata:"onLoadedMetadata",loadeddata:"onLoadedData",canplay:"onCanPlay",canplaythrough:"onCanPlayThrough",playing:"onPlaying",waiting:"onWaiting",seeking:"onSeeking",seeked:"onSeeked",ended:"onEnded",durationchange:"onDurationChange",timeupdate:"onTimeUpdate",progress:"onProgress",play:"onPlay",pause:"onpause",ratechange:"onRateChange",resize:"onResize",volumechange:"onVolumeChange"}),{posterchange:"onPosterChange",languagechange:"onLanguageChange",fullscreenchange:"onFullscreenChange",playbackrateschange:"onPlaybackRatesChange",controlsdisabled:"onControlsDisabled",controlsenabled:"onControlsEnabled",enterFullWindow:"onEnterFullWindow",exitFullWindow:"onExitFullWindow",enterpictureinpicture:"onEnterPictureInPicture",leavepictureinpicture:"onLeavePictureInPicture",sourceset:"onSourceSet",texttrackchange:"onTextTrackChange",textdata:"onTextData",useractive:"onUserActive",userinactive:"onUserInactive",usingcustomcontrols:"onUsingCustomControls",usingnativecontrols:"onUsingNativeControls",dispose:"onDispose"}),{beforepluginsetup:"onBeforePluginSetup",pluginsetup:"onPluginSetup"}),{componentresize:"onComponentResize",playerresize:"onPlayerResize",ready:"onReady",tap:"onTap"}),k=Object.keys(O);Object.values(O);var C=function(e){var n,t=null==e?void 0:e.trim().replace(/\s+/g," ");return t&&null!==(n=t.split(" "))&&void 0!==n?n:[]},j={src:{getter:function(e){return e.src()}},currentSrc:{getter:function(e){return e.currentSrc()}},currentSource:{getter:function(e){return e.currentSource()}},width:{events:["resize","playerresize"],getter:function(e){return e.width()}},height:{events:["resize","playerresize"],getter:function(e){return e.height()}},currentWidth:{events:["resize","playerresize"],getter:function(e){return e.currentWidth()}},currentHeight:{events:["resize","playerresize"],getter:function(e){return e.currentHeight()}},videoWidth:{events:["resize","playerresize"],getter:function(e){return e.videoWidth()}},videoHeight:{events:["resize","playerresize"],getter:function(e){return e.videoHeight()}},controls:{events:["controlsdisabled","controlsenabled"],getter:function(e){return e.controls()}},volume:{events:["volumechange"],getter:function(e){return e.volume()}},muted:{events:["volumechange"],getter:function(e){return e.muted()}},poster:{events:["posterchange"],getter:function(e){return e.poster()}},seeking:{events:["seeking"],getter:function(e){return e.seeking()}},paused:{events:["pause","play","playing"],getter:function(e){return e.paused()}},ended:{events:["ended","play"],getter:function(e){return e.ended()}},currentTime:{events:["timeupdate"],getter:function(e){return e.currentTime()}},duration:{events:["durationchange"],getter:function(e){return e.duration()}},playbackRate:{events:["ratechange"],getter:function(e){return e.playbackRate()}},playbackRates:{events:["playbackrateschange"],getter:function(e){return e.playbackRates()}},isFullscreen:{events:["fullscreenchange"],getter:function(e){return e.isFullscreen()}},isInPictureInPicture:{events:["enterpictureinpicture","leavepictureinpicture"],getter:function(e){return e.isInPictureInPicture()}},isLive:{getter:function(e){var n;return null===(n=e.liveTracker)||void 0===n?void 0:n.isLive()}},language:{events:["languagechange"],getter:function(e){return e.language()}},userActive:{events:["useractive","userinactive"],getter:function(e){return e.userActive()}},readyState:{events:["loadeddata"],getter:function(e){return e.readyState()}},networkState:{events:["loadeddata","error"],getter:function(e){return e.networkState()}},error:{events:["loadeddata","error"],getter:function(e){return e.error()}},buffered:{events:["progress"],getter:function(e){return e.buffered()}},bufferedPercent:{events:["progress"],getter:function(e){return e.bufferedPercent()}},played:{events:["timeupdate"],getter:function(e){return e.played()}},seekable:{events:["progress","seeked"],getter:function(e){return e.seekable()}},audioTracks:{getter:function(e){var n;return null===(n=e.audioTracks)||void 0===n?void 0:n.call(e)}},videoTracks:{getter:function(e){var n;return null===(n=e.videoTracks)||void 0===n?void 0:n.call(e)}},textTracks:{getter:function(e){var n;return null===(n=e.textTracks)||void 0===n?void 0:n.call(e)}}},P=m.filter((function(e){return Boolean(b[e].onEvent)})),S=function(e){return "update:"+e},E=k.concat(P.map(S)),T=m.reduce((function(e,n){var t,r=b[n],o=Array.isArray(r.type)?r.type:[r.type],a=Object.assign({},r);return o.includes(Boolean)&&(a.default=void 0),Object.assign(Object.assign({},e),((t={})[n]=a,t))}),{}),B=defineComponent({name:"VueVideoPlayer",props:Object.assign(Object.assign({},T),{class:[String,Object,Array]}),emits:E.concat(["mounted"],["unmounted"]),setup:function(e,d){var f=toRaw(e),v=f.class,y=g(f,["class"]),h=shallowRef(!1),O=shallowRef(null),E=shallowRef(null),T=computed((function(){return E.value?E.value.player:null})),B=ref(null),R=computed((function(){return B.value?readonly(B.value):null}));return onMounted((function(){var n,t=function(e){var n,t=e.props,r=e.element,o=e.className,a=e.onEvent,i=t.options;void 0===i&&(i={});var u=g(t,["options"]),c={};Object.keys(u).forEach((function(e){var n=u[e];void 0!==n&&(c[e]=n);}));var l=Object.assign(Object.assign({},c),i),s=l.volume,d=l.playbackRate,f=g(l,["volume","playbackRate"]),v=Object.assign(Object.assign({},f),{playsinline:null!==(n=f.playsinline)&&void 0!==n?n:f.playsInline}),y=p(r,v,(function(){var e=this;k.forEach((function(n){e.on(n,(function(e){a(n,e);}));})),f.src&&!f.sources&&this.src(f.src),s&&Number.isFinite(s)&&this.volume(s),d&&Number.isFinite(d)&&(this.defaultPlaybackRate(d),setTimeout((function(){e.playbackRate(d);}),0));}));o&&C(o).map((function(e){return y.addClass(e)}));var h=function(e){var n;null===(n=y.options)||void 0===n||n.call(y,null!=e?e:{});};return {player:y,dispose:function(){return y.dispose()},updateClassNames:function(e,n){C(e).map((function(e){return y.removeClass(e)})),C(n).map((function(e){return y.addClass(e)}));},updateOptions:h,updatePropOption:function(e,n){var t,r,o;h(((t={})[e]=n,t)),null===(o=null===(r=b[e])||void 0===r?void 0:r.onChange)||void 0===o||o.call(r,y,n);}}}({element:O.value,props:y,onEvent:d.emit});n={player:t.player,onEvent:d.emit},P.forEach((function(e){var t,r;null===(r=null===(t=b[e])||void 0===t?void 0:t.onEvent)||void 0===r||r.call(t,n.player,(function(t){n.onEvent(S(e),t);}));})),watch((function(){return e.class}),(function(e,n){var r=normalizeClass(n),o=normalizeClass(e);t.updateClassNames(r,o);}),{immediate:!0}),watch((function(){return e.options}),(function(e){return t.updateOptions(null!=e?e:{})}),{deep:!0}),m.filter((function(e){return "options"!==e})).forEach((function(n){watch((function(){return e[n]}),(function(e){return t.updatePropOption(n,e)}),{deep:!0});})),function(e,n){var t=Object.keys(j),r=t.reduce((function(n,t){var r;return Object.assign(Object.assign({},n),((r={})[t]=j[t].getter(e),r))}),{playing:!1,waiting:!1}),o=function(e,t){r[e]=t,n.onUpdate(e,t,Object.assign({},r));};e.on(["pause","ended"],(function(){o("playing",!1);})),e.on(["play","playing"],(function(){o("playing",!0);})),e.on("waiting",(function(){o("waiting",!0);var n=e.currentTime(),t=function(){n!==e.currentTime()&&(o("waiting",!1),e.off("timeupdate",t));};e.on("timeupdate",t);})),t.forEach((function(n){var t,r=j[n];e.on(["loadstart","loadedmetadata"].concat(null!==(t=r.events)&&void 0!==t?t:[]),(function(){o(n,r.getter(e));}));})),n.onInit(Object.assign({},r));}(t.player,{onInit:function(e){B.value=e;},onUpdate:function(e,n){B.value&&(B.value[e]=n);}}),E.value=t,h.value=!0,d.emit("mounted",{video:O.value,player:T.value,state:R.value});})),onBeforeUnmount((function(){E.value&&(E.value.dispose(),E.value=null,B.value=null,d.emit("unmounted"));})),function(){var e,n;return h$1("div",{"data-vjs-player":"",class:normalizeClass(v)},[h$1("video",{class:["video-js","v-video-player"],ref:O}),h.value&&(null===(n=(e=d.slots).default)||void 0===n?void 0:n.call(e,{video:O.value,player:T.value,state:R.value}))])}}}),R=B;

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.11.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set(),
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
// @__NO_SIDE_EFFECTS__
function tryUseNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  return nuxtAppInstance || null;
}
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  const nuxtAppInstance = /* @__PURE__ */ tryUseNuxtApp();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config) {
  return config;
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error2 = useError();
    if (false)
      ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  return head || getActiveHead();
}
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const appPageTransition = { "name": "fade-leave", "mode": "out-in" };
const appLayoutTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "deep": true };
const fetchDefaults = {};
async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}
const __nuxt_page_meta$F = {
  pageTransition: { name: "fade-leave", mode: "out-in" }
};
const __nuxt_page_meta$B = {
  pageTransition: false
};
const _routes = [
  {
    name: "account-forgotPassword",
    path: "/account/forgotPassword",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./forgotPassword--F1tr83Q.mjs').then((m) => m.default || m)
  },
  {
    name: "account-logIn",
    path: "/account/logIn",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./logIn-CmPVxIhN.mjs').then((m) => m.default || m)
  },
  {
    name: "account-resetPwd",
    path: "/account/resetPwd",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./resetPwd-DseIU9hD.mjs').then((m) => m.default || m)
  },
  {
    name: "career",
    path: "/career",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./career-n08xpimZ.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.name) ?? "collection-idx",
    path: (__nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.path) ?? "/collection/:idx()",
    meta: __nuxt_page_meta$F || {},
    alias: (__nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.alias) || [],
    redirect: __nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.redirect,
    component: () => import('./_idx_-gHpayNvP.mjs').then((m) => m.default || m)
  },
  {
    name: "collection-step1",
    path: "/collection/step1",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./step1-ySHb10qO.mjs').then((m) => m.default || m)
  },
  {
    name: "collection-step2",
    path: "/collection/step2",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./step2-DYb1LLah.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.name) ?? "collection-step3",
    path: (__nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.path) ?? "/collection/step3",
    meta: __nuxt_page_meta$B || {},
    alias: (__nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.alias) || [],
    redirect: __nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.redirect,
    component: () => import('./step3-D-0BnPC-.mjs').then((m) => m.default || m),
    children: [
      {
        name: "collection-step3-idx",
        path: ":idx()",
        meta: {},
        alias: [],
        redirect: void 0 ,
        component: () => import('./_idx_-B0x-LD0u.mjs').then((m) => m.default || m)
      }
    ]
  },
  {
    name: "event",
    path: "/event",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./event-AZZB54Y5.mjs').then((m) => m.default || m)
  },
  {
    name: "festivals",
    path: "/festivals",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./festivals-CJbAvmb4.mjs').then((m) => m.default || m)
  },
  {
    name: "footage",
    path: "/footage",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./footage-DrhvERqt.mjs').then((m) => m.default || m)
  },
  {
    name: "gala",
    path: "/gala",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./gala-UaHpKiYg.mjs').then((m) => m.default || m)
  },
  {
    name: "grant",
    path: "/grant",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./grant-oj6D7OIx.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-DgXWBdm_.mjs').then((m) => m.default || m)
  },
  {
    name: "jobs-description",
    path: "/jobs/description",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./description-BgfWD0PP.mjs').then((m) => m.default || m)
  },
  {
    name: "masterClass",
    path: "/masterClass",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./masterClass-CsKUKi4C.mjs').then((m) => m.default || m)
  },
  {
    name: "medium",
    path: "/medium",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./medium-C3IB3wY7.mjs').then((m) => m.default || m)
  },
  {
    name: "mentors",
    path: "/mentors",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./mentors-DtBZc6oo.mjs').then((m) => m.default || m)
  },
  {
    name: "merch",
    path: "/merch",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./merch-dFhdfjPO.mjs').then((m) => m.default || m)
  },
  {
    name: "metaverse",
    path: "/metaverse",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./metaverse-D9J3vJsB.mjs').then((m) => m.default || m)
  },
  {
    name: "nuxtWelcome",
    path: "/nuxtWelcome",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./nuxtWelcome-DLRDXmY1.mjs').then((m) => m.default || m)
  },
  {
    name: "philanthropy",
    path: "/philanthropy",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./philanthropy-Re758qTN.mjs').then((m) => m.default || m)
  },
  {
    name: "press",
    path: "/press",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./press-DfhS0w4w.mjs').then((m) => m.default || m)
  },
  {
    name: "scInema",
    path: "/scInema",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./scInema-C7xYldnu.mjs').then((m) => m.default || m)
  },
  {
    name: "scMeta",
    path: "/scMeta",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./scMeta-D-Opyb0Q.mjs').then((m) => m.default || m)
  },
  {
    name: "starslist-sid",
    path: "/starslist/:sid()",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_sid_-Bv27-Sni.mjs').then((m) => m.default || m)
  },
  {
    name: "starslist",
    path: "/starslist",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-QVZo4cuq.mjs').then((m) => m.default || m)
  },
  {
    name: "starsMovies",
    path: "/starsMovies",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./starsMovies-CnGh9XvN.mjs').then((m) => m.default || m)
  },
  {
    name: "start-applicaiton",
    path: "/start/applicaiton",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./applicaiton-BJxsRIlW.mjs').then((m) => m.default || m)
  },
  {
    name: "start-privacy",
    path: "/start/privacy",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./privacy-wRbdMzFX.mjs').then((m) => m.default || m)
  },
  {
    name: "start-terms",
    path: "/start/terms",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./terms-Dx4TcCvq.mjs').then((m) => m.default || m)
  },
  {
    name: "useProposal",
    path: "/useProposal",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./useProposal-TCNiVSny.mjs').then((m) => m.default || m),
    children: [
      {
        name: "useProposal-art-idx",
        path: "art/:idx()",
        meta: {},
        alias: [],
        redirect: void 0 ,
        component: () => import('./_idx_-VtLslkfc.mjs').then((m) => m.default || m)
      },
      {
        name: "useProposal-art",
        path: "art",
        meta: {},
        alias: [],
        redirect: void 0 ,
        component: () => import('./index-uYORKp7y.mjs').then((m) => m.default || m)
      },
      {
        name: "useProposal-art-preview",
        path: "art/preview",
        meta: {},
        alias: [],
        redirect: void 0 ,
        component: () => import('./preview-l0FINGxT.mjs').then((m) => m.default || m)
      },
      {
        name: "useProposal-film-idx",
        path: "film/:idx()",
        meta: {},
        alias: [],
        redirect: void 0 ,
        component: () => import('./_idx_-D5n5fGqu.mjs').then((m) => m.default || m)
      },
      {
        name: "useProposal-film",
        path: "film",
        meta: {},
        alias: [],
        redirect: void 0 ,
        component: () => import('./index-C-M90y65.mjs').then((m) => m.default || m)
      },
      {
        name: "useProposal-film-preview",
        path: "film/preview",
        meta: {},
        alias: [],
        redirect: void 0 ,
        component: () => import('./preview-E6mj65ez.mjs').then((m) => m.default || m)
      }
    ]
  },
  {
    name: "user",
    path: "/user",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./user-CNxOPOj6.mjs').then((m) => m.default || m),
    children: [
      {
        name: "user-account",
        path: "account",
        meta: {},
        alias: [],
        redirect: void 0 ,
        component: () => import('./account-Dzpxhm3d.mjs').then((m) => m.default || m)
      },
      {
        name: "user-message",
        path: "message",
        meta: {},
        alias: [],
        redirect: void 0 ,
        component: () => import('./message-Tpw6Nkoy.mjs').then((m) => m.default || m)
      },
      {
        name: "user-notificatSet",
        path: "notificatSet",
        meta: {},
        alias: [],
        redirect: void 0 ,
        component: () => import('./notificatSet-Bv0N2lT4.mjs').then((m) => m.default || m)
      },
      {
        name: "user-profilePage",
        path: "profilePage",
        meta: {},
        alias: [],
        redirect: void 0 ,
        component: () => import('./profilePage-Dn0j_Ewi.mjs').then((m) => m.default || m)
      },
      {
        name: "user-proposal",
        path: "proposal",
        meta: {},
        alias: [],
        redirect: void 0 ,
        component: () => import('./proposal-DyFN0K_a.mjs').then((m) => m.default || m)
      }
    ]
  },
  {
    name: "videoIframe",
    path: "/videoIframe",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./videoIframe-rohQFB0U.mjs').then((m) => m.default || m)
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h$1(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {
  "router-login": () => import('./router-login-BbSgeGMk.mjs')
};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    useError();
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if (failure) {
        await nuxtApp.callHook("page:loading:end");
      }
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      } else if (to.fullPath !== initialURL && (to.redirectedFrom || !isSamePath(to.fullPath, initialURL))) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
const isVue2 = false;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!("production" !== "production") )) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = {
    deep: true
    // flush: 'post',
  };
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!("production" !== "production") )) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(setup)));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (pinia) || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function useRequestEvent(nuxtApp = /* @__PURE__ */ useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  return ((_a = useRequestEvent()) == null ? void 0 : _a.$fetch) || globalThis.$fetch;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_2$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const plugin = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const LazyStartLogo = defineAsyncComponent(() => import('./StartLogo-DgHU5_82.mjs').then((r) => r["default"] || r.default || r));
const LazyStartMallLogo = defineAsyncComponent(() => import('./StartMallLogo-QW2OBB2t.mjs').then((r) => r["default"] || r.default || r));
const LazyUnionPayCard = defineAsyncComponent(() => import('./UnionPayCard-C4wF6eku.mjs').then((r) => r["default"] || r.default || r));
const LazyVisaCard = defineAsyncComponent(() => import('./VisaCard-DRIWsFHe.mjs').then((r) => r["default"] || r.default || r));
const LazyIcon = defineAsyncComponent(() => import('./Icon-DfsOnqxA.mjs').then((r) => r["default"] || r.default || r));
const LazyIconCSS = defineAsyncComponent(() => import('./IconCSS-BRg5vyK8.mjs').then((r) => r["default"] || r.default || r));
const lazyGlobalComponents = [
  ["StartLogo", LazyStartLogo],
  ["StartMallLogo", LazyStartMallLogo],
  ["UnionPayCard", LazyUnionPayCard],
  ["VisaCard", LazyVisaCard],
  ["Icon", LazyIcon],
  ["IconCSS", LazyIconCSS]
];
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
const unocss_MzCDxu9LMj = /* @__PURE__ */ defineNuxtPlugin(() => {
});
const element_plus_teleports_plugin_h4Dmekbj62 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:rendered", (ctx) => {
    var _a;
    if ((_a = ctx.ssrContext) == null ? void 0 : _a.teleports) {
      ctx.ssrContext.teleports = renderTeleports(ctx.ssrContext.teleports);
    }
  });
});
function renderTeleports(teleports) {
  const body = Object.entries(teleports).reduce((all, [key, value]) => {
    if (key.startsWith("#el-popper-container-") || [].includes(key)) {
      return `${all}<div id="${key.slice(1)}">${value}</div>`;
    }
    return all;
  }, teleports.body || "");
  return { ...teleports, body };
}
const isUndefined = (val) => val === void 0;
const isBoolean = (val) => typeof val === "boolean";
const isNumber = (val) => typeof val === "number";
const isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
const isPropAbsent = (prop) => {
  return isNil(prop);
};
const isStringNumber = (val) => {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};
class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message) {
}
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const namespaceContextKey = Symbol("namespaceContextKey");
const useGetDerivedNamespace = (namespaceOverrides) => {
  const derivedNamespace = namespaceOverrides || (getCurrentInstance() ? inject(namespaceContextKey, ref(defaultNamespace)) : ref(defaultNamespace));
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};
const useNamespace = (block, namespaceOverrides) => {
  const namespace = useGetDerivedNamespace(namespaceOverrides);
  const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useIdInjection = () => {
  return getCurrentInstance() ? inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
};
const useId = (deterministicId) => {
  const idInjection = useIdInjection();
  const namespace = useGetDerivedNamespace();
  const idRef = computed(() => unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};
const initial = {
  current: 0
};
const zIndex = ref(0);
const defaultInitialZIndex = 2e3;
const ZINDEX_INJECTION_KEY = Symbol("elZIndexContextKey");
const zIndexContextKey = Symbol("zIndexContextKey");
const useZIndex = (zIndexOverrides) => {
  const increasingInjection = getCurrentInstance() ? inject(ZINDEX_INJECTION_KEY, initial) : initial;
  const zIndexInjection = zIndexOverrides || (getCurrentInstance() ? inject(zIndexContextKey, void 0) : void 0);
  const initialZIndex = computed(() => {
    const zIndexFromInjection = unref(zIndexInjection);
    return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
  });
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    increasingInjection.current++;
    zIndex.value = increasingInjection.current;
    return currentZIndex.value;
  };
  if (!isClient && !inject(ZINDEX_INJECTION_KEY)) ;
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};
const element_plus_injection_plugin_1RNPi6ogby = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, { "prefix": 1024, "current": 0 }).provide(ZINDEX_INJECTION_KEY, { "current": 0 });
});
function usePersistedstateCookies(cookieOptions) {
  return {
    getItem: (key) => {
      return useCookie(key, {
        ...cookieOptions,
        encode: encodeURIComponent,
        decode: decodeURIComponent
      }).value;
    },
    setItem: (key, value) => {
      useCookie(key, {
        ...cookieOptions,
        encode: encodeURIComponent,
        decode: decodeURIComponent
      }).value = value;
    }
  };
}
function usePersistedstateLocalStorage() {
  return {
    getItem: (key) => {
      return !(/* @__PURE__ */ useNuxtApp()).ssrContext ? localStorage.getItem(key) : null;
    },
    setItem: (key, value) => {
      if (!(/* @__PURE__ */ useNuxtApp()).ssrContext)
        localStorage.setItem(key, value);
    }
  };
}
function usePersistedstateSessionStorage() {
  return {
    getItem: (key) => {
      return !(/* @__PURE__ */ useNuxtApp()).ssrContext ? sessionStorage.getItem(key) : null;
    },
    setItem: (key, value) => {
      if (!(/* @__PURE__ */ useNuxtApp()).ssrContext)
        sessionStorage.setItem(key, value);
    }
  };
}
const persistedState = {
  localStorage: usePersistedstateLocalStorage(),
  sessionStorage: usePersistedstateSessionStorage(),
  cookies: usePersistedstateCookies(),
  cookiesWithOptions: usePersistedstateCookies
};
const plugin_1UohGbtF8v = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const {
    cookieOptions,
    debug,
    storage
  } = (/* @__PURE__ */ useRuntimeConfig()).public.persistedState;
  const pinia = nuxtApp.$pinia;
  pinia.use(createPersistedState({
    storage: storage === "cookies" ? persistedState.cookiesWithOptions(cookieOptions) : persistedState[storage],
    debug
  }));
});
const error_ldt3PQauZ0 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
});
const vCopy_DvcBluvtmY = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("copy", {
    created(el, binding, vnode, prevVnode) {
    },
    beforeMount(el, binding, vnode, prevVnode) {
    },
    mounted(el, binding, vnode, prevVnode) {
      el.$value = binding.value;
      el.handler = () => {
        if (!el.$value) {
          return void 0;
        }
        const textarea = (void 0).createElement("textarea");
        textarea.readOnly = "readonly";
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        textarea.setAttribute("value", el.$value);
        textarea.value = el.$value;
        el.appendChild(textarea);
        textarea.select();
        const result = (void 0).execCommand("Copy");
        if (result)
          alert("Copy link succeeded");
        el.removeChild(textarea);
      };
      el.addEventListener("click", el.handler);
    },
    beforeUpdate(el, binding, vnode, prevVnode) {
    },
    updated(el, binding, vnode, prevVnode) {
      el.$value = binding.value;
    },
    beforeUnmount(el, binding, vnode, prevVnode) {
      el.removeEventListener("click", el.handler);
    },
    unmounted(el, binding, vnode, prevVnode) {
    },
    getSSRProps(binding, vnode) {
      return {};
    }
  });
});
const plugins = [
  unhead_KgADcZ0jPj,
  plugin$1,
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  unocss_MzCDxu9LMj,
  element_plus_teleports_plugin_h4Dmekbj62,
  element_plus_injection_plugin_1RNPi6ogby,
  plugin_1UohGbtF8v,
  error_ldt3PQauZ0,
  vCopy_DvcBluvtmY
];
const layouts = {
  custom: () => import('./custom-poDjpcJO.mjs').then((m) => m.default || m),
  default: () => import('./default-utpGR4fe.mjs').then((m) => m.default || m),
  home: () => import('./home-DfBzGE8S.mjs').then((m) => m.default || m),
  user: () => import('./user-CsQ6Z1uP.mjs').then((m) => m.default || m)
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h$1(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h$1(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h$1(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h$1(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h$1(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h$1(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h$1(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h$1(RouteProvider, {
                    key: key || void 0,
                    vnode: routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const useModalPinia = defineStore(
  "modal",
  () => {
    const modalName = ref("");
    const modelOption = reactive({
      title: "",
      message: "",
      icon: "",
      image: "",
      code: null
    });
    const pageLoading = ref(false);
    const getModalName = computed(() => modalName.value);
    const getModelOption = computed(() => modelOption);
    const getPageLoading = computed(() => pageLoading.value);
    const setModalName = (value) => {
      modalName.value = value;
    };
    const setModelOption = (option) => {
      for (const key in modelOption) {
        modelOption[key] = option[key];
      }
    };
    const setPageLoading = (value) => {
      pageLoading.value = value;
    };
    return {
      // state
      modalName,
      modelOption,
      pageLoading,
      // getters
      getModalName,
      getModelOption,
      getPageLoading,
      // actions
      setModalName,
      setModelOption,
      setPageLoading
    };
  },
  {
    persist: [
      {
        paths: ["pageLoading"],
        storage: persistedState.cookiesWithOptions()
      }
    ]
  }
);
const useUserPinia = defineStore(
  "user",
  () => {
    const token = ref("");
    const userInfo = ref();
    const getToken = computed(() => token.value);
    const getUserInfo = computed(() => userInfo.value);
    const setToken = (value) => {
      token.value = value;
    };
    const setUserInfo = (value) => {
      userInfo.value = value;
    };
    const clearUserInfo = () => {
      token.value = "";
      userInfo.value = "";
    };
    return {
      // state
      token,
      userInfo,
      // getters
      getToken,
      getUserInfo,
      // actions
      setToken,
      setUserInfo,
      clearUserInfo
    };
  },
  {
    persist: [
      {
        paths: ["token", "userInfo"],
        storage: persistedState.cookiesWithOptions({ maxAge: 604800 })
      }
    ]
  }
);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Fail",
  __ssrInlineRender: true,
  setup(__props) {
    const model_store = useModalPinia();
    useUserPinia();
    const model_name_computed = computed(() => {
      if (model_store.getModalName) {
        nextTick(() => {
          AnimateEffect();
        });
      }
      return model_store.getModalName ? true : false;
    });
    const AnimateEffect = () => {
      gsap.fromTo(".fade_scale", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3 });
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(model_name_computed)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full bg-black bg-opacity-70 fixed inset-0 z-99" }, _attrs))}><div class="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 fade_scale"><div class="w-135 bg-black p-16 space-y-16"><div class="space-y-4"><p class="font-medium text-5xl PPHattonMedium leading-16">Fail!</p><div class="font-light text-lg PolySansNeutral">${ssrInterpolate(unref(model_store).getModelOption.message)}</div></div><div class="btn gradient-btn"><div>${ssrInterpolate(unref(model_store).getModelOption.code === 401 ? "Ok" : "close")}</div></div>`);
        ssrRenderSlot(_ctx.$slots, "btn", {}, null, _push, _parent);
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Feedback/Modal/Fail.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const isRouterAlive = ref(true);
    const reload = () => {
      isRouterAlive.value = false;
      nextTick(() => {
        isRouterAlive.value = true;
      });
    };
    provide("reload", reload);
    const modal_store = useModalPinia();
    const loadingVideo = ref(true);
    const handleLoadedmetadata = () => {
      modal_store.setPageLoading(true);
    };
    const handleSkip = () => {
      loadingVideo.value = false;
      handleLoadedmetadata();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_2;
      const _component_FeedbackModalFail = _sfc_main$3;
      _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-black relative"${_scopeId}>`);
            if (unref(isRouterAlive)) {
              _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_FeedbackModalFail, null, null, _parent2, _scopeId));
            if (!unref(modal_store).getPageLoading && unref(loadingVideo)) {
              _push2(`<div class="fixed inset-0 w-full h-full z-9999 !bg-black"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(R), {
                src: "https://www.starscollective.com/assets/videos/pc//sc_index3s.webm",
                muted: "",
                autoplay: "",
                playsinline: "",
                class: "w-full h-full loading-video",
                onEnded: handleSkip
              }, null, _parent2, _scopeId));
              _push2(`<div class="fixed bottom-10 right-20 cursor-pointer text-xl"${_scopeId}>Skip</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-black relative" }, [
                unref(isRouterAlive) ? (openBlock(), createBlock(_component_NuxtPage, { key: 0 })) : createCommentVNode("", true),
                createVNode(_component_FeedbackModalFail),
                !unref(modal_store).getPageLoading && unref(loadingVideo) ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "fixed inset-0 w-full h-full z-9999 !bg-black"
                }, [
                  createVNode(unref(R), {
                    src: "https://www.starscollective.com/assets/videos/pc//sc_index3s.webm",
                    muted: "",
                    autoplay: "",
                    playsinline: "",
                    class: "w-full h-full loading-video",
                    onEnded: handleSkip
                  }),
                  createVNode("div", {
                    class: "fixed bottom-10 right-20 cursor-pointer text-xl",
                    onClick: handleSkip
                  }, "Skip")
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-CM-uLwHk.mjs').then((r) => r.default || r));
    const _Error = defineAsyncComponent(() => import('./error-500-uPqysa4v.mjs').then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => void 0);
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

const server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  A: useRequestFetch,
  B: namespaceContextKey,
  C: zIndexContextKey,
  D: defaultInitialZIndex,
  E: isElement,
  F: useModalPinia,
  G: defineAppConfig,
  H: useGetDerivedNamespace,
  I: useIdInjection,
  J: defineNuxtRouteMiddleware,
  _: __nuxt_component_0,
  a: useRoute,
  b: __nuxt_component_2,
  c: useNamespace,
  d: defineStore,
  default: entry$1,
  e: debugWarn,
  f: isBoolean,
  g: useZIndex,
  h: useId,
  i: isNumber,
  j: defaultNamespace,
  k: injectHead,
  l: isUndefined,
  m: isPropAbsent,
  n: navigateTo,
  o: __nuxt_component_2$1,
  p: useRouter,
  q: nuxtLinkDefaults,
  r: resolveUnrefHeadInput,
  s: useRuntimeConfig,
  t: throwError,
  u: useUserPinia,
  v: isStringNumber,
  w: asyncDataDefaults,
  x: useNuxtApp,
  y: createError,
  z: fetchDefaults
});

export { defineAppConfig as A, useGetDerivedNamespace as B, useIdInjection as C, useRouter as D, nuxtLinkDefaults as E, injectHead as F, resolveUnrefHeadInput as G, isPropAbsent as H, __nuxt_component_2$1 as I, defineNuxtRouteMiddleware as J, server as K, R, __nuxt_component_0 as _, useRoute as a, __nuxt_component_2 as b, useNamespace as c, defineStore as d, useZIndex as e, useId as f, isBoolean as g, defaultNamespace as h, isNumber as i, debugWarn as j, isStringNumber as k, isUndefined as l, defaultInitialZIndex as m, navigateTo as n, namespaceContextKey as o, isElement as p, fetchDefaults as q, asyncDataDefaults as r, useRequestFetch as s, throwError as t, useUserPinia as u, useModalPinia as v, useRuntimeConfig as w, useNuxtApp as x, createError as y, zIndexContextKey as z };
