import { a as useRoute, u as useUserPinia, R, n as navigateTo, _ as __nuxt_component_0 } from './server.mjs';
import __nuxt_component_7 from './Icon-CaiLYYN4.mjs';
import { E as ElImage } from './el-image-viewer-T405MOSo.mjs';
import { _ as _sfc_main$2 } from './Footer-DZPaOTwy.mjs';
import { _ as _sfc_main$3 } from './Index-CG_3-TXz.mjs';
import { useSSRContext, defineComponent, ref, computed, withCtx, unref, openBlock, createBlock, createVNode, createCommentVNode, Fragment, withModifiers, renderList, toDisplayString, mergeProps } from 'vue';
import { l as leaveMessageList } from './user-C3y1iIxD.mjs';
import { g as apiIndexAwardsList, h as apiIndexWorkList, i as apiIndexStarDetail, j as apiUserAddLeaveMessage } from './home-DlGQga1N.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import gsap from 'gsap';
import { _ as _imports_0 } from './virtual_public-BaMrrqy2.mjs';
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
import 'video.js';
import './index-DxDVOSBD.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-C8rz0VXy.mjs';
import './request-CdKXnB25.mjs';
import './index-URjNNh32.mjs';
import './icon-CyxyPYk8.mjs';
import './aria-DJRDfGoO.mjs';
import './el-input-D8gXC6Et.mjs';
import './constants-DzvzFGCl.mjs';
import './event-DSz0kuqc.mjs';
import './scroll-D2xEfal-.mjs';
import './Index-DNxKYUQ5.mjs';
import './OkBox-Dvtj49Wo.mjs';
import './virtual_public-3Fh-jQka.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Notification",
  __ssrInlineRender: true,
  props: {
    userId: { default: null }
  },
  emits: ["upload:closeMeth"],
  setup(__props, { emit: __emit }) {
    const isDown = ref(true);
    const textArea = ref("");
    const messageResult = ref([]);
    const additionalFile = ref();
    const userStore = useUserPinia();
    const props = __props;
    const handleArrow = (_type) => {
      isDown.value = _type;
      if (isDown.value) {
        gsap.to(".message_box", { y: 0, duration: 0.2 });
      } else {
        gsap.to(".message_box", { y: 500, duration: 0.2 });
      }
    };
    const emit = __emit;
    const handleClose = () => {
      emit("upload:closeMeth", false);
    };
    const handleImagesFileSuccess = async (files) => {
      const content = files.map((v) => v.url).join(",");
      await sendMessage(content, "1");
    };
    const handleAdditionalFileSuccess = async (files) => {
      const content = files.map((v) => v.url).join(",");
      await sendMessage(content, "2");
    };
    const lookMessageContent = async (_id) => {
      const { data } = await leaveMessageList(_id);
      messageResult.value = data;
    };
    const sendMessage = async (content, type) => {
      await apiUserAddLeaveMessage(props.userId.toString(), type, content);
      await lookMessageContent(props.userId.toString());
      textArea.value = "";
      additionalFile.value = "";
    };
    lookMessageContent(props.userId.toString());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_7;
      const _component_ElementDragUpload = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-464px bg-#151515 overflow-hidden message_box" }, _attrs))}><div class="flex px-32px justify-between items-center py-16px"><div class="text-26px" style="${ssrRenderStyle({ "font-family": "PPHattonMedium" })}">Message</div><div class="text-#ffffff space-x-3 cursor-pointer flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols:close",
        size: "26",
        onClick: handleClose
      }, null, _parent));
      if (unref(isDown)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:caret-down",
          size: "26",
          onClick: ($event) => handleArrow(false)
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "ep:arrow-up",
          size: "26",
          onClick: ($event) => handleArrow(true)
        }, null, _parent));
      }
      _push(`</div></div><div class="px-32px py-16px text-14px border-#2F2F2F border-t-1px border-b-1px">Christina White</div><div class="flex-1 overflow-y-auto h-340px"><!--[-->`);
      ssrRenderList(unref(messageResult), (item_messageArr, index_messageArr) => {
        _push(`<div class="${ssrRenderClass([unref(userStore).getUserInfo.id === item_messageArr.sender.id ? "flex-row-reverse" : "", "w-full px-9 py-7 flex"])}"><!--[-->`);
        ssrRenderList(item_messageArr.sender.profile_avatar, (item_, index_) => {
          _push(`<div class="w-10 h-10 mx-4"><img${ssrRenderAttr("src", item_.file_url)} class="w-full h-full object-cover rounded-full"></div>`);
        });
        _push(`<!--]--><div class="${ssrRenderClass([unref(userStore).getUserInfo.id === item_messageArr.sender.id ? "items-end" : "", "flex-1 flex flex-col space-y-4 font-normal text-sm PolySansNeutral"])}"><div class="text-#F5F5F5 space-x-3"><span>${ssrInterpolate(item_messageArr.sender.first_name)}${ssrInterpolate(item_messageArr.sender.id)}</span><span>${ssrInterpolate(item_messageArr.sender.last_name)}</span><span>\xB7</span><span>${ssrInterpolate(item_messageArr.times_text)}</span></div>`);
        if (item_messageArr.type === "0") {
          _push(`<div class="text-#616161 break-all">${ssrInterpolate(item_messageArr.content)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (item_messageArr.type === "1") {
          _push(`<!--[-->`);
          ssrRenderList(item_messageArr.content, (item_content, index_content) => {
            _push(`<div class="w-full"><img${ssrRenderAttr("src", item_content.file_url)} class="w-full h-full object-cover"></div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (item_messageArr.type === "2") {
          _push(`<!--[-->`);
          ssrRenderList(item_messageArr.content, (_item, _index) => {
            _push(`<div class="w-fit flex items-center border border-#747474 py-2 px-4 cursor-pointer"><span class="font-normal text-sm PolySansNeutral"><a${ssrRenderAttr("href", _item.file_url)} target="_blank">${ssrInterpolate(_item.file_text)}</a></span></div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="h-84px mt-4 px-16px py-16px border-t-1px border-#2F2F2F"><textarea class="outline-none border-none bg-transparent h-full w-full" placeholder="Write a message...">${ssrInterpolate(unref(textArea))}</textarea></div><div class="w-full bg-#2F2F2F flex text-white justify-between p-5"><div class="flex space-x-4">`);
      _push(ssrRenderComponent(_component_ElementDragUpload, {
        accept: "image/jpg,image/png,image/jpeg,image/gif,image/webp",
        limit: 1,
        onSuccess: handleImagesFileSuccess
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="uppercase text-white space-x-1 flex items-center cursor-pointer"${_scopeId}><span${_scopeId}>IMAGE </span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:outline-plus",
              size: "24"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "uppercase text-white space-x-1 flex items-center cursor-pointer" }, [
                createVNode("span", null, "IMAGE "),
                createVNode(_component_Icon, {
                  name: "ic:outline-plus",
                  size: "24"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElementDragUpload, {
        limit: 1,
        onSuccess: handleAdditionalFileSuccess
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="uppercase text-white space-x-1 flex items-center cursor-pointer"${_scopeId}><span${_scopeId}>FILE</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:outline-plus",
              size: "24"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "uppercase text-white space-x-1 flex items-center cursor-pointer" }, [
                createVNode("span", null, "FILE"),
                createVNode(_component_Icon, {
                  name: "ic:outline-plus",
                  size: "24"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="py-2 px-6 bg-white text-black cursor-pointer">Send Message</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Message/Notification.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[sid]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const videoRef = ref(null);
    const openMessage = ref(false);
    const StarAwardData = ref([]);
    const userStore = useUserPinia();
    const dataInfo = ref(null);
    const workListResult = ref([]);
    const workInfo = ref(null);
    computed(() => {
      return (value) => {
        let str = "";
        if (value) {
          if (value.indexOf("vimeo") != -1) {
            str = value.replace("vimeo.com", "player.vimeo.com/video") + "?autoplay=1";
          } else if (value.indexOf("youtube") != -1) {
            str = value.replace("watch?v=", "embed/");
          }
        } else {
          str = value;
        }
        return str;
      };
    });
    const handleVideo = (_item) => {
      workInfo.value = _item;
    };
    const getAwardsList = async () => {
      const { data } = await apiIndexAwardsList(route.params.sid.toString());
      const fil_arr = [];
      const sort_data = data.value.data.sort((a, b) => b.year - a.year);
      const new_data = sort_data.reduce(function(acc, cur) {
        if (!acc[cur.award.name])
          acc[cur.award.name] = [];
        acc[cur.award.name].push(cur);
        return acc;
      }, {});
      for (let key in new_data) {
        fil_arr.push(new_data[key].sort((i, j) => j.film_year - i.film_year));
      }
      StarAwardData.value = fil_arr;
    };
    const getWorkList = async () => {
      const { data } = await apiIndexWorkList(route.params.sid.toString());
      workListResult.value = data.value.data;
      if (workListResult.value.length != 0) {
        workListResult.value.forEach((item) => item.isPlay = false);
      }
    };
    const getStarDetail = async () => {
      const { data } = await apiIndexStarDetail(route.params.sid.toString());
      dataInfo.value = data.value.data;
    };
    const handleMessage = () => {
      if (userStore.getToken != "" && dataInfo.email != "") {
        openMessage.value = true;
      } else {
        navigateTo("/account/logIn");
      }
    };
    const clsoeMeth = (data) => {
      openMessage.value = data;
    };
    const toWebsite = (link) => {
      (void 0).open(link, "_black");
    };
    const handleMounted = (video) => {
      videoRef.value = video;
    };
    const handleLink = () => {
      if (workInfo.value.type !== "video")
        return toWebsite(workInfo.value.video_link);
      workInfo.value.isPlay = !workInfo.value.isPlay;
      if (workInfo.value.isPlay) {
        videoRef.value && videoRef.value.video.play();
      } else {
        videoRef.value && videoRef.value.video.pause();
      }
    };
    getWorkList();
    getStarDetail();
    getAwardsList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Icon = __nuxt_component_7;
      const _component_el_image = ElImage;
      const _component_Footer = _sfc_main$2;
      const _component_MessageNotification = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "home" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            if (unref(dataInfo)) {
              _push2(`<div class="w-full bg-black"${_scopeId}><div class="overflow-hidden w-full mb-28"${_scopeId}><div class="max-w-1300px px-50px mx-auto overflow-hidden"${_scopeId}><div class="min-w-900px w-full h-434px mt-120px flex justify-between"${_scopeId}><div class="w-796px h-full relative"${_scopeId}>`);
              if (!unref(workInfo)) {
                _push2(`<img${ssrRenderAttr("src", unref(dataInfo).profile_avatar[0].file_url)} class="w-full h-full object-cover"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(workInfo)) {
                _push2(`<!--[-->`);
                if (unref(workInfo).type !== "video") {
                  _push2(`<!--[-->`);
                  if (unref(workInfo).poster_image && unref(workInfo).poster_image.length > 0) {
                    _push2(`<img${ssrRenderAttr("src", unref(workInfo).poster_image[0].file_url)} class="w-full h-full object-cover"${_scopeId}>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<!--]-->`);
                } else {
                  _push2(`<!---->`);
                }
                if (unref(workInfo).type === "video") {
                  _push2(ssrRenderComponent(unref(R), {
                    src: unref(workInfo).video_file[0].file_url,
                    muted: "",
                    playsinline: "",
                    class: "w-full h-full",
                    onMounted: handleMounted
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (unref(workInfo).type !== "image") {
                  _push2(`<div class="${ssrRenderClass([{ "bg-black": !unref(workInfo).isPlay }, "w-full h-full bg-opacity-60 absolute inset-0 z-10 flex justify-center items-center"])}"${_scopeId}>`);
                  if (!unref(workInfo).isPlay) {
                    _push2(`<div class="w-15 h-15 rounded-full bg-white bg-opacity-80 text-black flex justify-center items-center cursor-pointer"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_Icon, {
                      name: "mingcute:play-fill",
                      size: "30"
                    }, null, _parent2, _scopeId));
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (unref(workListResult).length > 0) {
                _push2(`<div class="w-246px h-full overflow-y-auto"${_scopeId}><!--[-->`);
                ssrRenderList(unref(workListResult), (item, index) => {
                  _push2(`<div class="w-full h-143px relative"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_el_image, {
                    src: item.poster_image[0].file_url,
                    fit: "cover",
                    class: "w-full h-full"
                  }, null, _parent2, _scopeId));
                  if (item.type !== "image") {
                    _push2(`<div class="w-full h-full bg-black bg-opacity-60 absolute inset-0 z-10 flex justify-center items-center"${_scopeId}><div class="w-10 h-10 rounded-full bg-white bg-opacity-80 text-black flex justify-center items-center cursor-pointer"${_scopeId}>`);
                    if (!item.isPlay) {
                      _push2(ssrRenderComponent(_component_Icon, {
                        name: "mingcute:play-fill",
                        size: "20"
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    if (item.isPlay) {
                      _push2(ssrRenderComponent(_component_Icon, {
                        name: "mingcute:pause-line",
                        size: "20"
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (unref(workInfo)) {
                _push2(`<div class="text-18px mt-10 mb-12 whitespace-nowrap"${_scopeId}><span${_scopeId}>[ ${ssrInterpolate(unref(workInfo).title)} ] </span>`);
                if (unref(workInfo).link) {
                  _push2(`<label class="text-#ffffff cursor-pointer"${_scopeId}>Learn more</label>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="text-77px whitespace-nowrap mt-10" style="${ssrRenderStyle({ "font-family": "PPHattonMedium" })}"${_scopeId}>${ssrInterpolate(unref(dataInfo).first_name)} ${ssrInterpolate(unref(dataInfo).last_name)}</div><img${ssrRenderAttr("src", _imports_0)} class="h-15 block"${_scopeId}><div class="w-full flex items-center mt-24"${_scopeId}><div class="text-48px"${_scopeId}>Bio</div>`);
              if (unref(dataInfo).website) {
                _push2(`<div class="bg-#ffffff text-14px h-18px flex text-black items-center ml-8 cursor-pointer"${_scopeId}><div class="uppercase ml-2 tracking-wider"${_scopeId}>Website</div>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "mdi:arrow-top-right",
                  class: "w-18px h-18px ml-2"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(dataInfo).social_media && unref(dataInfo).social_media_url) {
                _push2(`<div class="bg-#ffffff text-14px h-18px flex text-black items-center ml-8 cursor-pointer"${_scopeId}><div class="uppercase ml-2 tracking-wider"${_scopeId}>${ssrInterpolate(unref(dataInfo).social_media)}</div>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "mdi:arrow-top-right",
                  class: "w-18px h-18px ml-2"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="text-18px mt-6"${_scopeId}>${ssrInterpolate(unref(dataInfo).type)} | ${ssrInterpolate(unref(dataInfo).category)}</div><div class="text-18px w-796px leading-7 mt-6"${_scopeId}>${(_a = unref(dataInfo).introduce) != null ? _a : ""}</div>`);
              if (unref(dataInfo).email) {
                _push2(`<div class="btn gradient-btn mt-10"${_scopeId}><div${_scopeId}>Message</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(StarAwardData).length != 0) {
                _push2(`<div class="text-48px mt-24 mb-8" style="${ssrRenderStyle({ "font-family": "PPHattonMedium" })}"${_scopeId}>Awards</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--[-->`);
              ssrRenderList(unref(StarAwardData), (item, index) => {
                _push2(`<div class="w-796px text-18px mt-24"${_scopeId}><div${_scopeId}>${ssrInterpolate(item[0].award.name)}</div><div class="h-1px bg-#BDBDBD w-full mt-8 mb-4"${_scopeId}></div><!--[-->`);
                ssrRenderList(item, (_item, _index) => {
                  _push2(`<div class="flex justify-between font-light mt-6"${_scopeId}><div${_scopeId}>${ssrInterpolate(_item.year)}</div><div${_scopeId}><div${_scopeId}>${ssrInterpolate(_item.result)}</div><div class="text-#929292 mt-1"${_scopeId}>${ssrInterpolate(_item.remark)}</div></div><div class="text-#ffffff mr-8 w-270px overflow-hidden"${_scopeId}><div${_scopeId}>${ssrInterpolate(_item.film)}</div><div class="mt-1"${_scopeId}>(${ssrInterpolate(_item.film_year)})</div></div></div>`);
                });
                _push2(`<!--]--></div>`);
              });
              _push2(`<!--]--></div></div>`);
              _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
              if (unref(openMessage)) {
                _push2(ssrRenderComponent(_component_MessageNotification, {
                  class: "fixed bottom-0 right-0",
                  "user-id": unref(route).params.sid.toString(),
                  "onUpload:closeMeth": clsoeMeth
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(dataInfo) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "w-full bg-black"
              }, [
                createVNode("div", { class: "overflow-hidden w-full mb-28" }, [
                  createVNode("div", { class: "max-w-1300px px-50px mx-auto overflow-hidden" }, [
                    createVNode("div", { class: "min-w-900px w-full h-434px mt-120px flex justify-between" }, [
                      createVNode("div", { class: "w-796px h-full relative" }, [
                        !unref(workInfo) ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: unref(dataInfo).profile_avatar[0].file_url,
                          class: "w-full h-full object-cover"
                        }, null, 8, ["src"])) : createCommentVNode("", true),
                        unref(workInfo) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                          unref(workInfo).type !== "video" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            unref(workInfo).poster_image && unref(workInfo).poster_image.length > 0 ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: unref(workInfo).poster_image[0].file_url,
                              class: "w-full h-full object-cover"
                            }, null, 8, ["src"])) : createCommentVNode("", true)
                          ], 64)) : createCommentVNode("", true),
                          unref(workInfo).type === "video" ? (openBlock(), createBlock(unref(R), {
                            key: 1,
                            src: unref(workInfo).video_file[0].file_url,
                            muted: "",
                            playsinline: "",
                            class: "w-full h-full",
                            onMounted: handleMounted
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          unref(workInfo).type !== "image" ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: ["w-full h-full bg-opacity-60 absolute inset-0 z-10 flex justify-center items-center", { "bg-black": !unref(workInfo).isPlay }],
                            onClick: handleLink
                          }, [
                            !unref(workInfo).isPlay ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "w-15 h-15 rounded-full bg-white bg-opacity-80 text-black flex justify-center items-center cursor-pointer",
                              onClick: withModifiers(handleLink, ["stop"])
                            }, [
                              createVNode(_component_Icon, {
                                name: "mingcute:play-fill",
                                size: "30"
                              })
                            ])) : createCommentVNode("", true)
                          ], 2)) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true)
                      ]),
                      unref(workListResult).length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "w-246px h-full overflow-y-auto"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(workListResult), (item, index) => {
                          return openBlock(), createBlock("div", {
                            key: index,
                            class: "w-full h-143px relative",
                            onClick: ($event) => handleVideo(item)
                          }, [
                            createVNode(_component_el_image, {
                              src: item.poster_image[0].file_url,
                              fit: "cover",
                              class: "w-full h-full"
                            }, null, 8, ["src"]),
                            item.type !== "image" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "w-full h-full bg-black bg-opacity-60 absolute inset-0 z-10 flex justify-center items-center"
                            }, [
                              createVNode("div", { class: "w-10 h-10 rounded-full bg-white bg-opacity-80 text-black flex justify-center items-center cursor-pointer" }, [
                                !item.isPlay ? (openBlock(), createBlock(_component_Icon, {
                                  key: 0,
                                  name: "mingcute:play-fill",
                                  size: "20"
                                })) : createCommentVNode("", true),
                                item.isPlay ? (openBlock(), createBlock(_component_Icon, {
                                  key: 1,
                                  name: "mingcute:pause-line",
                                  size: "20"
                                })) : createCommentVNode("", true)
                              ])
                            ])) : createCommentVNode("", true)
                          ], 8, ["onClick"]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ]),
                    unref(workInfo) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-18px mt-10 mb-12 whitespace-nowrap"
                    }, [
                      createVNode("span", null, "[ " + toDisplayString(unref(workInfo).title) + " ] ", 1),
                      unref(workInfo).link ? (openBlock(), createBlock("label", {
                        key: 0,
                        class: "text-#ffffff cursor-pointer",
                        onClick: ($event) => toWebsite(unref(workInfo).link)
                      }, "Learn more", 8, ["onClick"])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    createVNode("div", {
                      class: "text-77px whitespace-nowrap mt-10",
                      style: { "font-family": "PPHattonMedium" }
                    }, toDisplayString(unref(dataInfo).first_name) + " " + toDisplayString(unref(dataInfo).last_name), 1),
                    createVNode("img", {
                      src: _imports_0,
                      class: "h-15 block"
                    }),
                    createVNode("div", { class: "w-full flex items-center mt-24" }, [
                      createVNode("div", { class: "text-48px" }, "Bio"),
                      unref(dataInfo).website ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "bg-#ffffff text-14px h-18px flex text-black items-center ml-8 cursor-pointer",
                        onClick: ($event) => toWebsite(unref(dataInfo).website)
                      }, [
                        createVNode("div", { class: "uppercase ml-2 tracking-wider" }, "Website"),
                        createVNode(_component_Icon, {
                          name: "mdi:arrow-top-right",
                          class: "w-18px h-18px ml-2"
                        })
                      ], 8, ["onClick"])) : createCommentVNode("", true),
                      unref(dataInfo).social_media && unref(dataInfo).social_media_url ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "bg-#ffffff text-14px h-18px flex text-black items-center ml-8 cursor-pointer",
                        onClick: ($event) => toWebsite(unref(dataInfo).social_media_url)
                      }, [
                        createVNode("div", { class: "uppercase ml-2 tracking-wider" }, toDisplayString(unref(dataInfo).social_media), 1),
                        createVNode(_component_Icon, {
                          name: "mdi:arrow-top-right",
                          class: "w-18px h-18px ml-2"
                        })
                      ], 8, ["onClick"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "text-18px mt-6" }, toDisplayString(unref(dataInfo).type) + " | " + toDisplayString(unref(dataInfo).category), 1),
                    createVNode("div", {
                      class: "text-18px w-796px leading-7 mt-6",
                      innerHTML: unref(dataInfo).introduce
                    }, null, 8, ["innerHTML"]),
                    unref(dataInfo).email ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "btn gradient-btn mt-10",
                      onClick: handleMessage
                    }, [
                      createVNode("div", null, "Message")
                    ])) : createCommentVNode("", true),
                    unref(StarAwardData).length != 0 ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "text-48px mt-24 mb-8",
                      style: { "font-family": "PPHattonMedium" }
                    }, "Awards")) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(StarAwardData), (item, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "w-796px text-18px mt-24"
                      }, [
                        createVNode("div", null, toDisplayString(item[0].award.name), 1),
                        createVNode("div", { class: "h-1px bg-#BDBDBD w-full mt-8 mb-4" }),
                        (openBlock(true), createBlock(Fragment, null, renderList(item, (_item, _index) => {
                          return openBlock(), createBlock("div", {
                            key: _index,
                            class: "flex justify-between font-light mt-6"
                          }, [
                            createVNode("div", null, toDisplayString(_item.year), 1),
                            createVNode("div", null, [
                              createVNode("div", null, toDisplayString(_item.result), 1),
                              createVNode("div", { class: "text-#929292 mt-1" }, toDisplayString(_item.remark), 1)
                            ]),
                            createVNode("div", { class: "text-#ffffff mr-8 w-270px overflow-hidden" }, [
                              createVNode("div", null, toDisplayString(_item.film), 1),
                              createVNode("div", { class: "mt-1" }, "(" + toDisplayString(_item.film_year) + ")", 1)
                            ])
                          ]);
                        }), 128))
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode(_component_Footer),
                unref(openMessage) ? (openBlock(), createBlock(_component_MessageNotification, {
                  key: 0,
                  class: "fixed bottom-0 right-0",
                  "user-id": unref(route).params.sid.toString(),
                  "onUpload:closeMeth": clsoeMeth
                }, null, 8, ["user-id"])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/starslist/[sid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
