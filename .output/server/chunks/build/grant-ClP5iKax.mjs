import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { u as useUserPinia, _ as __nuxt_component_0 } from './server.mjs';
import __nuxt_component_7$1 from './Icon-CaiLYYN4.mjs';
import { _ as __nuxt_component_1 } from './Index-D7A-fAkj.mjs';
import { useSSRContext, defineComponent, ref, withCtx, unref, openBlock, createBlock, createVNode, Fragment, renderList, toDisplayString, createCommentVNode, watchEffect, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import gsap from 'gsap';
import { _ as _imports_0 } from './virtual_public-BaMrrqy2.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$7 } from './Footer-DZPaOTwy.mjs';
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
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import 'pinia-plugin-persistedstate';
import 'video.js';
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './el-input-D8gXC6Et.mjs';
import './index-C8rz0VXy.mjs';
import './index-URjNNh32.mjs';
import './icon-CyxyPYk8.mjs';
import './constants-DzvzFGCl.mjs';
import './event-DSz0kuqc.mjs';
import './Index-DNxKYUQ5.mjs';
import './OkBox-Dvtj49Wo.mjs';
import './virtual_public-3Fh-jQka.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Floor1",
  __ssrInlineRender: true,
  setup(__props) {
    const starAnimate = ref(false);
    const floorBox = ref(null);
    watchEffect(() => {
      if (starAnimate.value) {
        gsap.fromTo(".animation1", { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "floorBox",
        ref: floorBox,
        class: "pt-32 space-y-6 flex flex-col justify-center items-center min-h-500px"
      }, _attrs))}><div class="font-medium text-5xl PPHattonMedium">Program Overview</div><span class="animation1 font-light lg:text-lg PolySansNeutral md:text-sm text-center opacity-0"> Unleashing Action Storytellings is an awards program designed to support and work with emerging<br> filmmakers and artists specializing in action-oriented stories. This program is for budding talents to refine <br> their skills, gain recognition, and ultimately propel their careers within the action film genre. The winners<br> will have the exciting opportunity to further develop their concepts into feature films or television series,<br> in collaboration with Stars Collective and its vast industry resources. </span></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Grant/Floor1.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_1$2 = "" + buildAssetsURL("grt_probg1.DWJjTuFu.png");
const _imports_2$1 = "" + buildAssetsURL("grt_probg2.1-EHN0n_.png");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Floor2",
  __ssrInlineRender: true,
  setup(__props) {
    const starAnimate = ref(false);
    const floorBox = ref(null);
    watchEffect(() => {
      if (starAnimate.value) {
        gsap.fromTo(".animation2", { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
        gsap.fromTo(".animation3", { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "floorBox",
        ref: floorBox,
        class: "pt-32"
      }, _attrs))} data-v-6d85df50><div class="w-full space-y-3 mb-14" data-v-6d85df50><div class="font-medium text-5xl PPHattonMedium" data-v-6d85df50>Prompts</div><img${ssrRenderAttr("src", _imports_0)} class="h-12 block" data-v-6d85df50></div><div class="grid grid-cols-2 gap-x-5 animation2" data-v-6d85df50><div class="relative" data-v-6d85df50><img${ssrRenderAttr("src", _imports_1$2)} alt="" class="w-full block" data-v-6d85df50><div class="p-13 absolute inset-0 w-full h-full space-y-13" data-v-6d85df50><div class="font-medium text-4xl PPHattonMedium" data-v-6d85df50>Nvgui</div><div class="font-light lg:text-lg PolySansNeutral" data-v-6d85df50> For thousands of years, we have found fear and tranquility within the delicate veil between life and death. This thin veil stimulates our curiosity about death and our attachment to life. What kind of world lies beyond that veil if life does not end with death? In this thrilling horror series, we\u2019ll explore the relationship between the living and the dead through the eyes of female ghosts. </div></div></div><div class="relative" data-v-6d85df50><img${ssrRenderAttr("src", _imports_2$1)} alt="" class="w-full block" data-v-6d85df50><div class="p-13 absolute inset-0 w-full h-full space-y-13" data-v-6d85df50><div class="font-medium text-4xl PPHattonMedium" data-v-6d85df50>Kungfu</div><div class="font-light lg:text-lg PolySansNeutral" data-v-6d85df50> Kung Fu is more than a style of martial art \u2013 t is the pursuit of excellence of both the body and the mind. It could be peaceful but is just as likely to be deadly. From the foot of the Wudang Mountains to the red carpet of Hollywood, the enduring popularity of Kung Fu has continued to bloom in the new age. </div></div></div></div><div class="linear_gradient1 py-18 px-14 mt-5 space-y-12 animation3" data-v-6d85df50><div class="font-medium text-4xl PPHattonMedium" data-v-6d85df50>Action-oriented stories</div><div class="font-light lg:text-lg PolySansNeutral" data-v-6d85df50>Don\u2019t let the prompt confine you, let your stories be heard.</div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Grant/Floor2.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-6d85df50"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-32" }, _attrs))} data-v-a4f3d147><div class="w-full space-y-3 mb-14" data-v-a4f3d147><div class="font-medium text-5xl PPHattonMedium" data-v-a4f3d147>Participants</div><img${ssrRenderAttr("src", _imports_0)} class="h-12 block" data-v-a4f3d147></div><div class="linear_gradient2 py-18 px-14 flex items-center justify-between" data-v-a4f3d147><div class="font-medium text-6.5 PPHattonMedium" data-v-a4f3d147> Exclusive to Stars Collective <span class="text-#ffffff underline px-1 cursor-pointer underline-offset-8" data-v-a4f3d147>Stars</span>. </div><div class="btn gradient-btn" data-v-a4f3d147><div data-v-a4f3d147>Apply Now</div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Grant/Floor3.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a4f3d147"]]);
const _imports_1$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABNCAYAAAA4skOSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARnSURBVHgB7ZzrUdtAFIWvbN42E1NBnAriVBBTQaACnAqACjAVABVgKoBUgFMBpgKcClAAwwwPO+cyYsYj9NiVjpn8uN+MbSEvWu23D+1ez2wgEbe3t+1qtbo3Ho9bQRA0xHBhMJlMjur1eu/tRKBvo9FoDx9dMYrSq9VqP/UguLu766BFHotRCjjcXVlZOazgeEuM0qDray+XAN19IgYFtNBmRQwqJpSMCSVjQsmYUDImlIwJJWNCyZhQMiaUjAklY0LJmFAyJpSMCSVjQsmYUDImlIwJJWNCyZhQMiaUjAklY0LJmFAyJpSMCSVjQsmYUDImlIwJJWNCyZhQMiaUjAklY0LJmFAyJpSMCSVjQsmYUDImlIwJJWNCyajQUAwKYRj+rYzH4xMxShMEQX9tbS0MHh4empB6gXO2LUYJKpXKl+Xl5WFF3yaTyToMD8Uogg6Zm+pR/wimv9HtMvChm7h8EiMXNMTLWq3Wgy97Ds2KQAqiY+/T01Mbh+HLy8sAA/JQZoBuf4SW0NQhaXV1tS8z4Pr6ulGtVjf0GGPhoF6vD+Sj0MxHo9Gp7lUy/YLgPSGCfFq47lUsnysVLETu7++3MdRdT+eDc6fIvykF8G6hyOwcLaad9B1qt4vBeV9KooWZn5+/SNuQC/l/Y7SinP2qBo+Pj+s6FRIPvFZK+tBKk6lg+tVltCDIPM7a3QwVdyAliVpgNyNJa2FhYUc88V16buclgIgNKYEWFNdoZ6XRSi1bcag0l/vMLW8cZ6E6dqKgrbx0SPNDSoCHQ24eUT5O6TJwuc8GKu+zeOAsdGlp6UNWUq6ikO6rlMOpPBjmvogH/120yXWSjPH6j3wAvpN2Z6HR0srl4pdSAnQxp6e3a7qM///tks53NuHVQtEqjvLS4EbPpATR5D2z4nSSj8VEX8rhcp898cRL6PPz86FkFFYLOr05aVFQKfs535/4zg/jaMXhOv2MJCGmZ95zai+hWoi0yJSew2tdCKBSDtEbEgujO8oiINEVAlg6b+IjqUtrOXffIkgz5+bmphNferKXhAqesBfxpaeQ0ZhEQlm6UpBCT3l0hXdTDtQofVqVsFpq6HxYiGAsfnc9zIULT8m8hGphoiDIXsJNHETx1NJoa9cADA6bsa8aWA6es3qDXgeVdho/j8axgfyPiwRIcoMjKnFubq6FVrmlGTnsID7Eq6+/VfmE2zQfLAc7yOdHVrxgOh8dTzEOnvmEDlUiyvMdLXPHZTd0pDlDWX5F+eQ+CFOFau0sLi5u42KdEtuwD/HqI2qzn1bot+3eHSWm8W778zjas1wlZtDLKouSKFRlateS912uKEPcyLd4DbN3KE8LH0bDR6mgzRSvM520CX/iGAqZOkY2hYfGNzvxk5BJDUpr+DD+0IrGW5ZMpZEVPkwUqj85CJl4MEOnK8KttFd0vI+dagsZ+EkN4CQKReGbMmOSpisMPuLeJSNSNZd0EjWgqx5hkvIwGAoZdPswlm84i3zS+AdP0i/CW+ZRSAAAAABJRU5ErkJggg==";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABMCAYAAAAP+7v9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP6SURBVHgB7Z3hUdtAEIXXxsAAZjAVoA4wFeB0QCqIqYCkgtBBkgowHZAKcCrAqQBRAQwG8wdw3iZO5rw66VDwaDl7vxmNke7EnJ/Pd3vvVkD39/eXOMZ83N3ddakAlPf+1sVxQguMq9twODwuquvqNhqNzutuYa1W2y+6GeW7ZGSo1+s7gSpT5Q1R2MUn0RqPxzfyLgie4HqbDB8h3TruNSk6ocKB55fydTLyKaNbnYzKMdEVMNEV8I3p3/ImBBwfnPMWQqUOLS4tcd57fn6+kpWkbowUvddsNj9SDog3d/ALOvwzTxwIlQ7IYHobGxuHeYWubszU8AIhf1AxV2Rk8PVwwVS5jekKmOgKmOgKsOgJGZUie3rIWwkZOwsJh8+B8i33vCEKj2A/bvlmY4SH7DB2yMgQ0I076lRoXWOPl4zKwAfUt4lUARNdARNdAZ/h1ce4k3rqtikc3SwsZXTzGV5Fxs25a9wY/yilmxleM8AMrwgw0RUw0RUw0RWQGV5JUWVp3Bh/eJXhBY4Q3txgNs5sTDcajd28hJpFhzeeoVvq0215eXkH183w0sQMLyWiEB1fz3cY2g5zltnREYXom5ubfSyzexCdxT+lyGl4rqV4Y6m8iB0QTvlNSJG1tbUUL11MWn2057N2ewQv1k1OpLmZStfX163V1dULjTeKNtXktYeHh+Tp6elYpqwpUZjhBY0vaOI0ZibSIsNre3ubQ8mQIVYZ3Osx5HTfwlgfMrzQxp/uefTRS4xj/VyEjE6v/0QRMFdxOiatKBZ6cyE6T/Kj0egLevpXigAZMpYybt4C/GACeviJZvj46gyv29vbFK8+w2tfGjeacO9eWVnhB4jV2zQxvAa+OB1lHCrGZ3jJOB1tPsAbPAn1sLcIx+kNigi3d6PxFCtRiA6xE4jd5t5NgXknBqIQHYJf8mvMvdvFJ/rN5JAkZBTxYt2k6Gfr6+uHvuiFDSZEL2zcRP/1njXs/WBVvJenG4bFczekzRhevhsZXmqj/DsZGeB2nhbpJo1CuSL13mjMFtsjVcBEV8BEV0CKHp3hFQNBw4s3fZeWljIT6uPj4++/RTUvC5RZApeTDa+zPN1IPIlhGV4VYxleSpjoCpjoCpQxvFpkvksRL9YtY3hhl+a950YzvIoZQLc9X4EvM04aXrmGlhle+aAz5uriy4xj0c3kqhgTXQGLXhQw0RUww6sCgobXcDgc+G5E5MIfiJupNCiatecdmFxHNOmkbHhBt76vHusmjUI2vDi9IaHyFD59MO/8r25meClhoitgoitgGV6zwzK8qsQyvBQom+FVc/+vRbPZHOTdzGDztT2J1/nJjHTyBPNC4uoW0sLVjfX9Bew8P6gg6O53AAAAAElFTkSuQmCC";
const _imports_3 = "data:image/png;base64,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";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABkCAYAAACfIP5qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAArASURBVHgB7V2NVRs5EB4Sk5A/Diq4TQUHFZypIFBBTAVJKoipAKgAp4I4FeBUgK+COBXgy+9LSMJ9n5F4un3eH61Gu/aG7719rLF3V9pPmhnNjCSRFuD8/Dz5/PnzOx48lyXHLWkBOp1OD38SHuZ8qdEKUtqGVpCysrIydc4ncoPFwKdPn3o4nssNwvH169eXX758OYSC3pCGwTKQWBxb8ruCrRsW06U5+tIwUJ5TW54mG0mjOuXy8nLifHzW5IugKQ191LWf19bWfk9SHj16NMIfq6Q3VldXe1IBfKEQga/Rwk+qEnvnzp2X9hzkjO7duzeRhtC49fXr169je37r1q0nUgEcm6DX7eK0V4VYM+Ds2c8/fvw4lgbROCl4AUf2HC+2+/Hjx64EAPfw7ikgsmvPaVKvr68PpUE0Tsrm5uYUL3JkP9++ffuZ1AwQcS260HMPpGEsxOARpBw45906Ff6HDx8o9hL7GY1iJA1jIUihwnd6ywaUbm2DQOgxt2cOmlTwFkGkoEVvweo5DbF6HLxxzmsRYWkzGAQ1LrqIIFKgIA8pbnDau3v37msJwMXFxUAc8zhU4ZcByn/dkELNYMcb0JNAhIqv69ZNckLcE1T4ULKv7Ge02ugi7OHDh2OUex+nA5CyLxVBQiByT3GPQxwnRk9VRhApqNSRtVZQmDErKQHAPQbOx3OpASjz4MGDB/tVe4klBKeL5S+rMjbIAsUWxYDPPXFN3/qseC41gYTgmWeO/07Fh9cRBbjxDCp/tJwTnI6/f//+gmLJ41bW9TKSBUdGDzlAr+tLINRNYip/uSpoj4VeBJe8NmISQsQYp7im7VbbiIlNSDS4Mt4cZzGJQaAsgR6ibD/juURCLB1SG+omJjaWnhCLthDTGkIslp2Y1hFisazEtJYQiznE9GXBQUdrE2VWGTyWAQaFfRBDn5YNKAW5Jehng4snwf2S9Oifg1l8N8F3k0DXT9c5DzZ7jZO1i2jrAIPqSdbvVvJuwu6LwWAS6tNyQS8qXtrfdJOX9TexHIjDbyEA9cR4pb0IpQcYf8Y/f/58YzwGZcvK53Aw/IZ+PqkIkoGyvzRln5Xn/v37O1m/Xyko1KmJN0xwjOA2OchjWBusDMh7yqQIlENFB+FeU9xrSI+0D0FVwAZoyt9NfTVGr9vOui6XFMhQemrTL2MQs0LsFWtra8/wjJ44YdpImDAUTU+xKMGWH73y+byGxAgrek2uV7qop5BpdrtkzteqFSqqTGRQ/zAUHBR5RBSWjak/p/x0yg7xvo7LqIIVKQETTXvqhk4dBFcopzJ1o3JDMz6xdAyIBgeJOHI96UUoRYqFUXxsyU/T30FxMd79XjyQVoALhAn0546v/kTjemekSiUyLLxIsaDTD2Jml5kgLAQT2EDK47LXs1Uhpk8yastaqQLUr+8rAdhwocQnVciwqESKC7Z2ysmyhWAGCbo5kywWK3yajUq9JgTBpPhAU3eYPDHGbkbplsnWSjPaGaiGgmb0AaRB5bGKD2ob0XNiEMUVKieBGBplnGnFQE/9BfGqmTu2gWceog5/gpgXEhnRe4qiuKLy3CsaH5kB56nEA3MP9mKKs6hpq4aQ4PQbGhJ40dtlBqz43Yl7HYjcQeve5GFyvCorYAMb4k4kEqL1FJPVwh6SSAD4YnHslPGTMQkOout13nWKPYljmj1Nv6BFlJ5CQuDIZMUTCQQq/qKs49Id3NIQmHddKpk8BBwKnMaYtKpOiiVEaXTO7MVh2R+7z8SL/yfnp16D3BxsxCBG1fpSJqRUFrzxCnBaXgL90XW+SnIu+1P0YInZ0RJlajpFmxDgDXrJbt4PrJmd8fUUVtJ22kqKaJ1xRpoKMSriy5q9mg5FVDBXbBUQQsyS5uhMpVuHBxdSQBndKRuhltj/nsd7a1hlwT3FMXsTUQRa8+MsBa/R2mmdYYC5H6HXBLtlOsZ0LTX6pSvj27dvx+4DNczeOZjmWVyM5kkAzPiFA9ExAnnsLZohgwTOVo6VZuFeNlp8flZ2FgFjLh2fl4oLSAJvPptgY+IsMRyL04JybFV015CMVymXujYpswlUzHxhokWn0+G0jtIuH5Rrt8OlOHCSSHm8dx6eKPiyvOGpu3Lj4bHg9AxfvTXpMF58cXHRLXvF+vr6wJ5zYQJ0zacZ4eIQ5L50PO+tR0MqsobUo50mvtTnOVOr4GkYl30Ofj8MbuYMeEEknIly5aAsN7MmHPkoeijzvawVJIyR8k4U4eMWykKwScyH0z4XXfOS7vdu1ncerpJB3pIeeIa2Ppx5skPn4quMU8wsW9U4gxmlZwIidy+PGH5XFPsoeoYv+A40Bo+qWtpkP56IDjgif1w0Z9LJtEnMv8ZMWihy82uLLoYFtNKt1E0nzuzlfHLRQbRpa0zeFmc5qRBoEkJEsWc1ewwqvK0ds9DsJdqEEFHiKSykifIFQ8ufZOG4hUIxjUEIEXXkxzgD3doSbi6rxMXn+OmqjubVPMLzEH04znEMKnCqMMAMcvQ1EZ6uiujrfbHwrIRCCHamB+h+9xFn1mWPaznALX3dPJgQ8/Y8QuwKRhrTBlV6ipMx/z5PxnKKnUaCnDvHBK6ecdpsdicZcUpFRha818szGfNz4zcpw2YigXN5gkixbmm34mYAdZR1DTNO8MIOlf1lE3HWChPFUIKNu+SNe7IaGxsOrj32nctTiZS8bPkyFolJEO/Py96PBCpmX+8yMYRXYL9MnnSZuTzwQgzLLCDkRUoBGSP8eeVjIhZUpDGwd7DH+2TSWOTN5bFit0i0lZ40lDF3b0YGW0HV6XZG/j/XTMaW6iZ40LwSF0XSgJmbWe+saHZwZvw9lIw0GhBpaQx8ZiyXhalXNy0R8nRv0ZzHtB+LsvkVRNhRLDvdIYceXPUAVApqPaMMHNE2BUmZmZ+5pDgDv406C0/wmXAa7kr2XMuQe4/kKq9sUFd9fFBrgN1Mq3ttSH5RVvRZEWB6T1f8exBfPMXtW18i7JK2ZS0nDdRGypwV5QozILPgLgEiV4nWf7jf4+X/K1eZK5PV1dVxVVHrZvHLlf9tpw5iapnJdT5/ib/KzjzjCIziDHSR6lF2XspOXT0mGpZ9eaa2rfDXmvWyWkNM2xYwW3pi2kaIxdIS0xQhZvPNnkTG0hHTJCH2eW0gRi3y2OTK1imfUiKRwfzg1N5dqiuVa83kUiHE3Vd+0beKjUmMCilaPcRsgJmYoycLjljEBJMyZ+JQJULSG2CisiOJDI2eOY+Y0K2wgklJ7f9bWYc0sQEmd1IV0zPhR6ucapsm5jJwUblgUujp5aRRRtJClHpDG2CO7Eno/pIOMRPtGQiNgN5Yx7w8991uI2T7J3e7c23z3Y6dfMleiM03UxtgDmveADPK/pJsaMwF4+GrYxonpekNMGPtL+m6/X23W2yclKb3gTf7S15vdc4UKlEAda2z3eIE5E/KXtsoKUbWXkcf3c036wRzsey5xvbrFlT+XPyN+cc+gbFGSYEZTEJmSpCtKcZcjzIwczZH9jMXGBAlUIz5Jmc0SopJhJghxAx2K01ypQLc7dfdcv12sN5drnwduuucMT+fSwCshxv3OZIbLA5ibkl4gxs0D6294G+ghLojj7GxEG6WUNQdeYyNVpCSMomXO3tRatyAICbov8JAlL6lKRO4ZcnxH1O1Pr6Cd7WDAAAAAElFTkSuQmCC";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Floor4",
  __ssrInlineRender: true,
  setup(__props) {
    const starAnimate = ref(false);
    const floorBox = ref(null);
    watchEffect(() => {
      if (starAnimate.value) {
        gsap.fromTo(".animation4", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "linear" });
        gsap.fromTo(".animation5", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "linear" });
        gsap.fromTo(".animation6", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "linear" });
      }
    });
    useUserPinia();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "floorBox",
        ref: floorBox,
        class: "pt-32"
      }, _attrs))}><div class="w-full space-y-3 mb-14"><div class="font-medium text-5xl PPHattonMedium">Submissions</div><img${ssrRenderAttr("src", _imports_0)} class="h-12 block"></div><div class="space-y-8 font-normal lg:text-lg PolySansNeutral animation4"><div> Ideas and concepts can be in any medium, including but not<br> limited to feature films, short films, XR, and series of artwork. </div><div> You can submit your work through our online portal after<br> becoming a Star. </div></div><div class="grid grid-cols-4 mt-16 font-normal text-sm PolySansNeutral animation5"><div class="flex flex-col items-center justify-between space-y-3"><img${ssrRenderAttr("src", _imports_1$1)}><span class="font-semibold text-xs uppercase">feature films</span></div><div class="flex flex-col items-center justify-between space-y-3"><img${ssrRenderAttr("src", _imports_2)}><span class="font-semibold text-xs uppercase">short films</span></div><div class="flex flex-col items-center justify-between space-y-3"><img${ssrRenderAttr("src", _imports_3)}><span class="font-semibold text-xs uppercase">XR</span></div><div class="flex flex-col items-center justify-between space-y-3"><img${ssrRenderAttr("src", _imports_4)}><span class="font-semibold text-xs uppercase">series of artwork</span></div></div><div class="flex flex-col items-center justify-center space-y-10 mt-22 animation6"><div class="font-light text-lg PolySansNeutral text-#ffffff">already got Star account?</div><div class="btn gradient-btn"><div>Login to Submit</div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Grant/Floor4.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_1 = "" + buildAssetsURL("emicircle.B_ku_RtX.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Floor5",
  __ssrInlineRender: true,
  setup(__props) {
    const starAnimate = ref(false);
    const floorBox = ref(null);
    watchEffect(() => {
      if (starAnimate.value) {
        gsap.fromTo(".animation7", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "linear" });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "floorBox",
        ref: floorBox,
        class: "pt-32"
      }, _attrs))} data-v-08de6078><div class="w-full relative" data-v-08de6078><div class="absolute top-0 left-0 w-full px-50px" data-v-08de6078><div class="max-w-1300px mx-auto" data-v-08de6078><div class="space-y-8" data-v-08de6078><div class="font-medium text-5xl PPHattonMedium" data-v-08de6078>Prizes</div><img${ssrRenderAttr("src", _imports_0)} class="h-12 block" data-v-08de6078><div class="animation7 font-light text-lg PolySansSlim" data-v-08de6078>A total of 150,000 USD will be given to the <br data-v-08de6078>following award recipients</div></div></div></div><img${ssrRenderAttr("src", _imports_1)} class="w-11/12 mx-auto object-center -z-1" data-v-08de6078><div class="w-full h-full grid grid-cols-3 gap-x-9 absolute bottom-0 left-0 text-black lg:px-56 px-16" data-v-08de6078><div class="h-full flex items-end" data-v-08de6078><div class="w-full h-30% flex flex-col justify-end prizes_shadow px-9 py-6 space-y-12" data-v-08de6078><span class="font-medium text-26px PPHattonMedium whitespace-nowrap" data-v-08de6078>Creative Sparks <br data-v-08de6078>Award</span><span class="font-light text-lg PolySansSlim" data-v-08de6078>$35,000 total</span></div></div><div class="h-full flex items-end" data-v-08de6078><div class="w-full h-50% flex flex-col justify-end prizes_shadow px-9 py-12 space-y-12" data-v-08de6078><span class="font-medium text-26px PPHattonMedium whitespace-nowrap" data-v-08de6078>Illuminating <br data-v-08de6078>Award</span><span class="font-light text-lg PolySansSlim" data-v-08de6078>$49,000 total</span></div></div><div class="h-full flex items-end" data-v-08de6078><div class="w-full h-100% flex flex-col justify-end prizes_shadow px-9 py-12 space-y-12" data-v-08de6078><span class="font-medium text-26px PPHattonMedium whitespace-nowrap" data-v-08de6078>Supernova <br data-v-08de6078>Award</span><span class="font-light text-lg PolySansSlim" data-v-08de6078>$66,000 total</span></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Grant/Floor5.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-08de6078"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Floor6",
  __ssrInlineRender: true,
  setup(__props) {
    const starAnimate = ref(false);
    const floorBox = ref(null);
    ref(false);
    const timeArr = ref({
      nDays: "",
      nHours: "",
      nMinutes: "",
      nSeconds: ""
    });
    watchEffect(() => {
      if (starAnimate.value) {
        gsap.fromTo(".animation8", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "linear" });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "floorBox",
        ref: floorBox,
        class: "pt-32 space-y-23 pb-50"
      }, _attrs))}><div class="flex flex-col items-center justify-center text-center py-40"><div class="text-5xl PPHattonMedium text-#f5f5f5">Winners</div><div class="text-lg PolySansSlim max-w-640px mt-5"> We will be announcing winners every three months, starting in September 2023 and continuing until all the cash rewards have been distributed. </div></div><div class="flex flex-wrap items-center justify-between"><div class="w-fit mr-20"><div class="font-medium text-5xl PPHattonMedium">Deadline</div><img${ssrRenderAttr("src", _imports_0)} class="h-12 block"><div class="mt-14 mb-9 font-light text-lg PolySansSlim animation8"> The deadline for submissions is [July, 2024] or until the <br> cash rewards have been distributed, whichever comes first. </div><div class="font-light text-lg PolySansSlim underline underline-offset-4 cursor-pointer">Terms and conditions may apply</div></div><div class="flex-1 flex items-cente space-x-6 text-black"><div class="bg-#E0E0E0 w-29 h-33 flex flex-col items-center justify-between pt-6 pb-3 rounded"><span class="font-medium text-5xl PPHattonMedium">${ssrInterpolate(unref(timeArr).nDays)}</span><span class="font-normal text-sm PolySansSlim uppercase">Days</span></div><div class="bg-#E0E0E0 w-29 h-33 flex flex-col items-center justify-between pt-6 pb-3 rounded"><span class="font-medium text-5xl PPHattonMedium">${ssrInterpolate(unref(timeArr).nHours)}</span><span class="font-normal text-sm PolySansSlim uppercase">Hours</span></div><div class="bg-#E0E0E0 w-29 h-33 flex flex-col items-center justify-between pt-6 pb-3 rounded"><span class="font-medium text-5xl PPHattonMedium">${ssrInterpolate(unref(timeArr).nMinutes)}</span><span class="font-normal text-sm PolySansSlim uppercase">Minutes</span></div><div class="bg-#E0E0E0 w-29 h-33 flex flex-col items-center justify-between pt-6 pb-3 rounded"><span class="font-medium text-5xl PPHattonMedium">${ssrInterpolate(unref(timeArr).nSeconds)}</span><span class="font-normal text-sm PolySansSlim uppercase">Seconds</span></div></div></div><div class="text-center font-light text-lg PolySansSlim"> For questions please reach out at <a href="mailto:hello@starscollective.com" class="underline underline-offset-2">hello@starscollective.com</a></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Grant/Floor6.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "grant",
  __ssrInlineRender: true,
  setup(__props) {
    const anchorPointMenu = ref(true);
    const anchorPointMenuTitle = ref(["Program Overview", "Prompts", "Participants", "Submissions", "Prizes", "Deadline"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Icon = __nuxt_component_7$1;
      const _component_Grant = __nuxt_component_1;
      const _component_GrantFloor1 = _sfc_main$6;
      const _component_GrantFloor2 = __nuxt_component_4;
      const _component_GrantFloor3 = __nuxt_component_5;
      const _component_GrantFloor4 = _sfc_main$3;
      const _component_GrantFloor5 = __nuxt_component_7;
      const _component_GrantFloor6 = _sfc_main$1;
      const _component_Footer = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(anchorPointMenu)) {
              _push2(`<div class="fixed bottom-1/2 translate-y-1/2 right-8 z-99 p-5 space-y-9 border border-#616161 bg-black"${_scopeId}><div class="flex justify-between"${_scopeId}><span class="font-normal text-sm PolySansNeutral"${_scopeId}>Quick Guide</span><span class="cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "streamline:interface-delete-1-remove-add-button-buttons-delete",
                size: "14"
              }, null, _parent2, _scopeId));
              _push2(`</span></div><div class="flex flex-col space-y-5"${_scopeId}><!--[-->`);
              ssrRenderList(unref(anchorPointMenuTitle), (anchor_item, anchor_index) => {
                _push2(`<a class="flex justify-between items-center space-x-8"${ssrRenderAttr("href", `#floor${anchor_index + 1}`)}${_scopeId}><span class="font-normal text-sm PolySansNeutral"${_scopeId}>${ssrInterpolate(anchor_item)}</span><span${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "system-uicons:arrow-top-right",
                  size: "20"
                }, null, _parent2, _scopeId));
                _push2(`</span></a>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="pt-30"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Grant, null, null, _parent2, _scopeId));
            _push2(`</div><div class="px-50px"${_scopeId}><div class="max-w-1300px mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_GrantFloor1, { id: "floor1" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_GrantFloor2, { id: "floor2" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_GrantFloor3, { id: "floor3" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_GrantFloor4, { id: "floor4" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_GrantFloor5, { id: "floor5" }, null, _parent2, _scopeId));
            _push2(`<div id="floor6" class="px-50px"${_scopeId}><div class="max-w-1300px mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_GrantFloor6, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
          } else {
            return [
              unref(anchorPointMenu) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed bottom-1/2 translate-y-1/2 right-8 z-99 p-5 space-y-9 border border-#616161 bg-black"
              }, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, "Quick Guide"),
                  createVNode("span", {
                    class: "cursor-pointer",
                    onClick: ($event) => anchorPointMenu.value = false
                  }, [
                    createVNode(_component_Icon, {
                      name: "streamline:interface-delete-1-remove-add-button-buttons-delete",
                      size: "14"
                    })
                  ], 8, ["onClick"])
                ]),
                createVNode("div", { class: "flex flex-col space-y-5" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(anchorPointMenuTitle), (anchor_item, anchor_index) => {
                    return openBlock(), createBlock("a", {
                      key: anchor_index,
                      class: "flex justify-between items-center space-x-8",
                      href: `#floor${anchor_index + 1}`
                    }, [
                      createVNode("span", { class: "font-normal text-sm PolySansNeutral" }, toDisplayString(anchor_item), 1),
                      createVNode("span", null, [
                        createVNode(_component_Icon, {
                          name: "system-uicons:arrow-top-right",
                          size: "20"
                        })
                      ])
                    ], 8, ["href"]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "pt-30" }, [
                createVNode(_component_Grant)
              ]),
              createVNode("div", { class: "px-50px" }, [
                createVNode("div", { class: "max-w-1300px mx-auto" }, [
                  createVNode(_component_GrantFloor1, { id: "floor1" }),
                  createVNode(_component_GrantFloor2, { id: "floor2" }),
                  createVNode(_component_GrantFloor3, { id: "floor3" }),
                  createVNode(_component_GrantFloor4, { id: "floor4" })
                ])
              ]),
              createVNode(_component_GrantFloor5, { id: "floor5" }),
              createVNode("div", {
                id: "floor6",
                class: "px-50px"
              }, [
                createVNode("div", { class: "max-w-1300px mx-auto" }, [
                  createVNode(_component_GrantFloor6)
                ])
              ]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/grant.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
