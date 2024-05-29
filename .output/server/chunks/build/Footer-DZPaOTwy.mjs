import { E as ElInput } from './el-input-D8gXC6Et.mjs';
import __nuxt_component_7 from './Icon-CaiLYYN4.mjs';
import { _ as _sfc_main$1 } from './Index-DNxKYUQ5.mjs';
import { _ as _sfc_main$2 } from './OkBox-Dvtj49Wo.mjs';
import { defineComponent, ref, computed, unref, isRef, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-3Fh-jQka.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    let input_value = ref();
    const drawerName = ref("");
    let route_data = ref([
      {
        name: "Stars",
        url: "starslist"
      },
      {
        name: "Content",
        url: "medium"
      },
      {
        name: "About",
        url: "/"
      },
      {
        name: "Mentors",
        url: "mentors"
      },
      {
        name: "Metaverse",
        url: "metaverse"
      },
      {
        name: "Campaigns",
        url: "festivals"
      },
      {
        name: "Become a Star",
        url: "start/applicaiton"
      },
      {
        name: "Footage",
        url: "footage"
      },
      {
        name: "Press",
        url: "press"
      },
      {
        name: "Career",
        url: "career"
      }
    ]);
    const handleRoute = (_url, isExternal) => {
      (void 0).open(_url, "_black");
    };
    const drawerShow = computed(() => (name) => name === drawerName.value ? true : false);
    const drawerClose = (value) => {
      if (!value)
        drawerName.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = ElInput;
      const _component_Icon = __nuxt_component_7;
      const _component_FeedbackModal = _sfc_main$1;
      const _component_FeedbackModalUserOkBox = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-36px lg:h-459px h-full bg-black overflow-hidden"><div class="w-full flex lg:justify-between lg:flex-row flex-col mt-16 text-white text-15px border-b-1 border-[#616161] pb-33px"><div><img${ssrRenderAttr("src", _imports_0)} class="h-103px"><div class="lg:mt-72px mb-20px flex space-x-2"><div>Contact:</div><div class="space-y-2 text-[#616161]"><div class="underline cursor-pointer">+1 2137067926</div><div class="underline cursor-pointer">hello@starscollective.com</div></div></div></div><div class="uppercase"><div class="grid lg:grid-cols-3 grid-cols-2 gap-x-20 gap-y-28px text-[##F5F5F5] text-14px"><!--[-->`);
      ssrRenderList(unref(route_data), (item, index) => {
        _push(`<div class="${ssrRenderClass([item.name != "" ? "cursor-pointer" : ""])}">${ssrInterpolate(item.name)}</div>`);
      });
      _push(`<!--]--></div><div class="mt-50px">Subscribe for Newsletter</div><div class="flex mt-19px"><div class="w-240px mr-38px">`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: unref(input_value),
        "onUpdate:modelValue": ($event) => isRef(input_value) ? input_value.value = $event : input_value = $event,
        placeholder: "Email Address"
      }, null, _parent));
      _push(`</div><div class="w-125px h-33px leading-33px border border-[##616161] text-center text-[#f5f5f5] cursor-pointer">Subscribe</div></div></div></div><div class="flex overflow-hidden justify-between"><div class="flex space-x-4 mt-30px">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:linkedin",
        class: "w-9 h-9 text-[#616161] hover:text-white cursor-pointer",
        onClick: ($event) => handleRoute("https://www.linkedin.cn/wujing-frontend/incareer/guestHomePage")
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "ic:baseline-facebook",
        class: "w-9 h-9 text-[#616161] hover:text-white cursor-pointer",
        onClick: ($event) => handleRoute("https://www.facebook.com/StarsCollective/")
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "mingcute:camera-line",
        class: "w-9 h-9 text-[#616161] hover:text-white cursor-pointer",
        onClick: ($event) => handleRoute("https://www.instagram.com/officialstarscollective/")
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "ci:twitter",
        class: "w-9 h-9 text-[#616161] hover:text-white cursor-pointer",
        onClick: ($event) => handleRoute("https://twitter.com/i/flow/login?redirect_after_login=%2FStarsCLTV")
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "ic:baseline-tiktok",
        class: "w-9 h-9 text-[#616161] hover:text-white cursor-pointer",
        onClick: ($event) => handleRoute("https://www.tiktok.com/@officialstarscollective")
      }, null, _parent));
      _push(`</div><div class="flex mt-38px"><div class="text-[#616161] mr-6">Terms of Use \u2022 Privacy Policy</div><div class="text-[#F5F5F5]">Copyright 2022 StarsCollective All right reserved.</div></div></div></div>`);
      _push(ssrRenderComponent(_component_FeedbackModal, {
        "model-value": unref(drawerShow)("OkBox")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FeedbackModalUserOkBox, { "onUpdate:modelValue": drawerClose }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Success!`);
                } else {
                  return [
                    createTextVNode("Success!")
                  ];
                }
              }),
              describe: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Thank you for subscribing to our mailing list.`);
                } else {
                  return [
                    createTextVNode("Thank you for subscribing to our mailing list.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FeedbackModalUserOkBox, { "onUpdate:modelValue": drawerClose }, {
                title: withCtx(() => [
                  createTextVNode("Success!")
                ]),
                describe: withCtx(() => [
                  createTextVNode("Thank you for subscribing to our mailing list.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
