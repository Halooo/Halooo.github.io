import { R, _ as __nuxt_component_0 } from './server.mjs';
import __nuxt_component_7 from './Icon-CaiLYYN4.mjs';
import { _ as _sfc_main$1 } from './Footer-DZPaOTwy.mjs';
import { useSSRContext, defineComponent, withCtx, unref, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import 'pinia-plugin-persistedstate';
import 'gsap';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "footage",
  __ssrInlineRender: true,
  setup(__props) {
    const handleLink = () => {
      (void 0).open("http://footage.club/", "_black");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Icon = __nuxt_component_7;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c537ebcd>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full bg-black overflow-hidden" data-v-c537ebcd${_scopeId}><div class="w-full h-screen overflow-hidden" data-v-c537ebcd${_scopeId}>`);
            _push2(ssrRenderComponent(unref(R), {
              src: "https://www.starscollective.com/assets/videos/pc/sc_footage.webm",
              muted: "",
              autoplay: "",
              loop: "",
              playsinline: "",
              class: "w-full h-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="max-w-1300px px-50px overflow-hidden mx-auto relative" data-v-c537ebcd${_scopeId}><img src="https://www.starscollective.com/assets/images/stars/Asset.png" class="mt-120px h-67px object-cover" data-v-c537ebcd${_scopeId}><div class="text-16px leading-6 w-530px mt-9" data-v-c537ebcd${_scopeId}> As the affiliated company of StarsCollective, F00TAGE is honored to pave the way for talents and built jointly by talents unite thousands of creators to become <label class="text-#ffffff" data-v-c537ebcd${_scopeId}>the No. 1 IP brand in Web 3.0 Era</label></div><div class="bg-white h-18px inline-flex text-black mt-6 cursor-pointer" data-v-c537ebcd${_scopeId}><div class="uppercase tracking-2.1px ml-2px" data-v-c537ebcd${_scopeId}>Go to footage Website</div>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:arrow-top-right",
              class: "w-18px h-18px ml-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-36px mt-175px whitespace-nowrap" data-v-c537ebcd${_scopeId}>a blockchain-based ecosystem for</div><div class="w-full relative h-570px" data-v-c537ebcd${_scopeId}><div class="text-147px text-#ffffff mt-3 absolute z-10 PPHattonMedium" data-v-c537ebcd${_scopeId}>Filmmakers<br data-v-c537ebcd${_scopeId}>&amp; Movie Lovers</div><img src="https://www.starscollective.com/assets/images/stars/footage_make.gif" class="absolute w-570px h-570px -right-80px -top-85px z-0" data-v-c537ebcd${_scopeId}><div class="w-520px text-18px absolute bottom-135px" data-v-c537ebcd${_scopeId}> F00TAGE is a place for filmmakers and movie lovers to uncover the possibilities of Metaverse and creative ways for movie financing and fundraising. </div></div></div>`);
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full bg-black overflow-hidden" }, [
                createVNode("div", { class: "w-full h-screen overflow-hidden" }, [
                  createVNode(unref(R), {
                    src: "https://www.starscollective.com/assets/videos/pc/sc_footage.webm",
                    muted: "",
                    autoplay: "",
                    loop: "",
                    playsinline: "",
                    class: "w-full h-full"
                  })
                ]),
                createVNode("div", { class: "max-w-1300px px-50px overflow-hidden mx-auto relative" }, [
                  createVNode("img", {
                    src: "https://www.starscollective.com/assets/images/stars/Asset.png",
                    class: "mt-120px h-67px object-cover"
                  }),
                  createVNode("div", { class: "text-16px leading-6 w-530px mt-9" }, [
                    createTextVNode(" As the affiliated company of StarsCollective, F00TAGE is honored to pave the way for talents and built jointly by talents unite thousands of creators to become "),
                    createVNode("label", { class: "text-#ffffff" }, "the No. 1 IP brand in Web 3.0 Era")
                  ]),
                  createVNode("div", {
                    class: "bg-white h-18px inline-flex text-black mt-6 cursor-pointer",
                    onClick: handleLink
                  }, [
                    createVNode("div", { class: "uppercase tracking-2.1px ml-2px" }, "Go to footage Website"),
                    createVNode(_component_Icon, {
                      name: "mdi:arrow-top-right",
                      class: "w-18px h-18px ml-2"
                    })
                  ]),
                  createVNode("div", { class: "text-36px mt-175px whitespace-nowrap" }, "a blockchain-based ecosystem for"),
                  createVNode("div", { class: "w-full relative h-570px" }, [
                    createVNode("div", { class: "text-147px text-#ffffff mt-3 absolute z-10 PPHattonMedium" }, [
                      createTextVNode("Filmmakers"),
                      createVNode("br"),
                      createTextVNode("& Movie Lovers")
                    ]),
                    createVNode("img", {
                      src: "https://www.starscollective.com/assets/images/stars/footage_make.gif",
                      class: "absolute w-570px h-570px -right-80px -top-85px z-0"
                    }),
                    createVNode("div", { class: "w-520px text-18px absolute bottom-135px" }, " F00TAGE is a place for filmmakers and movie lovers to uncover the possibilities of Metaverse and creative ways for movie financing and fundraising. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/footage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const footage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c537ebcd"]]);

export { footage as default };
