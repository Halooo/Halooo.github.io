import { a as buildAssetsURL } from '../routes/renderer.mjs';
import __nuxt_component_7 from './Icon-CaiLYYN4.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Bi4Z90lR.mjs';
import _sfc_main$1 from './Menus-C81EnAY8.mjs';
import { defineComponent, ref, reactive, computed, watchEffect, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { u as useUserPinia, a as useRoute, D as useRouter } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-3Fh-jQka.mjs';

const _imports_1 = "" + buildAssetsURL("cube.B1tPiATC.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  emits: ["update:anchorSkip"],
  setup(__props, { emit: __emit }) {
    let drawers = ref(false);
    const user_store = useUserPinia();
    let current = ref(-1);
    ref(false);
    ref(false);
    let route_data = ref([
      {
        id: 0,
        name: "ABOUT",
        routeName: "index",
        url: "/",
        deg: "-25deg",
        children: [
          // { value: 'About Us', isImg: false, point: true, url: 'aboutus', path: '/' },
          // { value: 'Cross-medium Content', isImg: false, url: 'medium', routeName: 'medium', point: false },
          // { value: 'Metaverse', isImg: false, url: 'metaverse', routeName: 'metaverse', point: false }
          // { value: 'Franchises', isImg: false, point: true, url: '', path: '' }
          // { value: 'Entertainment', isImg: false, point: true, url: 'entertainment', path: '/' },
          // { value: 'WEB 3.0', isImg: false, point: true, url: 'web3', path: '/' },
          // { value: 'Partnerships', isImg: false, point: true, url: 'partnerships', path: '/' }
        ]
      },
      {
        id: 1,
        name: "MENTORS",
        url: "/mentors",
        deg: "-15deg",
        routeName: "mentors",
        children: []
      },
      {
        id: 2,
        name: "STARS",
        url: "/starslist",
        deg: "-5deg",
        routeName: "starslist",
        children: []
      },
      {
        id: 3,
        name: "CONTENT",
        deg: "5deg",
        routeName: "content",
        url: "",
        children: [
          // { value: 'Movies', isImg: false, url: 'starsMovies', routeName: 'starsMovies', point: false },
          { value: "Cross-medium Content", isImg: false, url: "/starsMovies", routeName: "starsMovies", point: false },
          // { value: 'Metaverse', isImg: false, url: '/metaverse', routeName: 'metaverse', point: false },
          { value: "Merch", isImg: false, url: "/merch", routeName: "merch", point: false }
        ]
      },
      { id: 4, name: "NEWS", url: "/press", routeName: "press", deg: "15deg", children: [] },
      {
        id: 5,
        name: "CAMPAIGNS",
        url: "",
        routeName: "campaigns",
        deg: "25deg",
        children: [
          { value: "SC Lab", isImg: false, url: "/masterClass", routeName: "masterClass", point: false },
          // { value: 'Film Festivals', isImg: false, url: '/festivals', routeName: 'festivals', point: false },
          { value: "SC Gala", isImg: false, url: "/gala", routeName: "gala", point: false },
          // { value: 'SC Grant', isImg: false, url: '/grant', routeName: 'grant', point: false },
          { value: "Philanthropy", isImg: false, url: "/philanthropy", routeName: "philanthropy", point: false },
          { value: "Events", isImg: false, url: "/event", routeName: "event", point: false }
        ]
      }
    ]);
    let save_route = ref([]);
    reactive({ value: "" });
    const route = useRoute();
    useRouter();
    const rotateChange = computed(() => {
      if (current.value === -1) {
        return [
          {
            transform: `rotate(-50deg)`
          }
        ];
      } else {
        return [
          {
            transform: `rotate(${route_data.value[current.value].deg})`
          }
        ];
      }
    });
    watchEffect(() => {
      if (drawers.value) {
        setTimeout(() => {
          current.value = 0;
        }, 1);
      } else {
        current.value = -1;
      }
    });
    const alertType = ref(false);
    watchEffect(() => {
      alertType.value = false;
      setTimeout(() => {
        if (route.path !== "/" && route.path !== "/grant") {
          alertType.value = true;
        }
      }, 800);
    });
    const handleOpenDrawer = () => {
      drawers.value = !drawers.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_7;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UserMenus = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sticky top-0 w-full min-w-400px z-999" }, _attrs))}><div class="relative z-500 px-50px bg-black"><div class="flex lg:flex-row flex-row-reverse items-center justify-between h-80px max-w-1300px mx-auto relative z-100">`);
      if (!unref(drawers)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:menu",
          class: "w-35px h-26px cursor-pointer",
          onClick: handleOpenDrawer
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:close",
          class: "w-35px h-26px cursor-pointer",
          onClick: handleOpenDrawer
        }, null, _parent));
      }
      _push(`<img${ssrRenderAttr("src", _imports_0)} class="h-66px cursor-pointer">`);
      if (!unref(user_store).getToken) {
        _push(`<div class="flex items-center cursor-pointer">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/account/logIn" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`LOGIN`);
            } else {
              return [
                createTextVNode("LOGIN")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="px-4 py-2 border border-[#616161] ml-4">APPLY</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(user_store).getToken && unref(user_store).getUserInfo) {
        _push(`<div class="menus-box h-full relative flex justify-end items-center"><div class="border border-white rounded-10 px-4 py-2 flex items-center space-x-2 cursor-pointer relative"><!--[-->`);
        ssrRenderList(unref(user_store).getUserInfo.profile_avatar, (item_, index_) => {
          _push(`<div class="w-8 h-8"><img${ssrRenderAttr("src", item_.file_url)} class="w-full h-full object-cover rounded-full"></div>`);
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mi:caret-down",
          size: "24"
        }, null, _parent));
        _push(`<div class="w-70 bg-black absolute top-15 right-0 menuse">`);
        _push(ssrRenderComponent(_component_UserMenus, null, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="${ssrRenderClass([[{ hidden: !unref(drawers) }], "fixed top-0 left-0 w-full h-screen bg-black z-10 pt-80px"])}"><div class="w-full h-full relative bg-back"><div class="flex justify-between h-full max-w-1300px mx-auto relative z-20"><div class="relative flex-1 h-full"><img${ssrRenderAttr("src", _imports_1)} alt="" class="absolute duration-1000 cube-img -z-1" style="${ssrRenderStyle(unref(rotateChange))}"></div><div><div class="flex justify-end mt-40"><div class="pr-27px border-r-1px"><!--[-->`);
      ssrRenderList(unref(route_data), (item, index) => {
        _push(`<div class="cursor-pointer PPHattonMedium mb-10 last:mb-0 text-41px headerNavLi text-[rgba(245,245,245,0.2)]">${ssrInterpolate(item.name)}</div>`);
      });
      _push(`<!--]--></div><div class="text-18px ml-42px wrap-list min-w-200px"><!--[-->`);
      ssrRenderList(unref(save_route), (item, index) => {
        _push(`<div class="mb-4 wrap-list-l">`);
        if (item.isImg) {
          _push(`<img${ssrRenderAttr("src", item.value)} class="object-cover cursor-pointer">`);
        } else {
          _push(`<div class="cursor-pointer PolySansSlim">`);
          if (item.point) {
            _push(`<div>${ssrInterpolate(item.value)}</div>`);
          } else {
            _push(`<div>${ssrInterpolate(item.value)}</div>`);
          }
          _push(`</div>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
