import { defineComponent, ref, watchEffect, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import gsap from 'gsap';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Nvgui",
  __ssrInlineRender: true,
  setup(__props) {
    const starAnimate = ref(false);
    ref(null);
    watchEffect(() => {
      if (starAnimate.value) {
        const tl = gsap.timeline();
        tl.fromTo(".a1", { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 2 });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-30%" }, _attrs))}><div class="text-lg PolySansSlim"> Uncovering the possibilities of storytelling <br> in different mediums by pushing the <br> boundaries of traditional filmmaking </div><div class="mt-120 a1 opacity-0"><div class="text-26px PPHattonMedium">NVGUI</div><ul class="text-xl mt-5 leading-8 PolySansSlim italic capitalize"><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">Oirans series</span></li><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">Vampires</span></li><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">Painted Skin</span></li><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">AI Killer</span></li><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">PONTIKANA</span></li><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">Candy</span></li></ul></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Medium/Nvgui.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "KungFu",
  __ssrInlineRender: true,
  setup(__props) {
    const starAnimate = ref(false);
    ref(null);
    watchEffect(() => {
      if (starAnimate.value) {
        const tl = gsap.timeline();
        tl.fromTo(".b1", { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 2 });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-30%" }, _attrs))}><div class="mt-120 b1 opacity-0"><div class="text-26px PPHattonMedium">KUNG FU</div><ul class="text-xl mt-5 leading-8 PolySansSlim italic capitalize"><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">Mr. Lang Trilogy</span></li><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">Tony Jaa&#39;s Assassin</span></li><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">Pirate Queen</span></li></ul></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Medium/KungFu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CriminalGenius",
  __ssrInlineRender: true,
  setup(__props) {
    const starAnimate = ref(false);
    ref(null);
    watchEffect(() => {
      if (starAnimate.value) {
        const tl = gsap.timeline();
        tl.fromTo(".d1", { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 2 });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-30%" }, _attrs))}><div class="mt-170 d1 opacity-0"><div class="text-26px PPHattonMedium">CRIMINAL GENIUS</div><ul class="text-xl mt-5 leading-10 PolySansSlim italic capitalize"><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">Golden Empire</span></li><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">Sister Ping</span></li><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">The Innkeeper</span></li><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">Torrential Night</span></li></ul></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Medium/CriminalGenius.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Fantasy",
  __ssrInlineRender: true,
  setup(__props) {
    const starAnimate = ref(false);
    ref(null);
    watchEffect(() => {
      if (starAnimate.value) {
        const tl = gsap.timeline();
        tl.fromTo(".c1", { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 2 });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-30%" }, _attrs))}><div class="mt-160 c1 opacity-0"><div class="text-26px PPHattonMedium">SCI-FI FANTASY</div><ul class="text-xl mt-5 leading-10 PolySansSlim italic capitalize"><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">Hunting Season</span></li><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">Here and Now and Then</span></li><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">Untitled Malignant Prequel</span></li><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">The Memory Lost In Space</span></li><li class="flex items-center space-x-3"><span class="bg-white w-2 h-2 rounded-full"></span><span class="whitespace-nowrap">Project Human</span></li></ul></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Medium/Fantasy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$3 as _, _sfc_main$2 as a, _sfc_main$1 as b, _sfc_main as c };
