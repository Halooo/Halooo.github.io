const __vite__fileDeps=["./DjdYD6Cn.js","./BEa8FyQu.js","./D1ZMWBna.js","./BxtoV3vY.js","./CwFcZstm.js","./CCRDBSiD.js","./swiper-vue.JG58ooqa.css","./entry.DEwEMx1I.css","./DVvrfKR8.js","./base.BLbfKORI.css","./CQxnt44T.js","./request.DJhm0lbD.css","./CYDTDHpu.js","./z8NNEHSl.js","./ChQoo9XU.js","./HEVJa2N9.js","./el-input.BBHsZF-x.css","./el-image-viewer.BHVceWjq.css","./CPwt8FHk.js","./BQkc-AXV.js","./DlAUqK2U.js","./Icon.8lQfE3Ql.css","./D33S9czM.js","./CFrsTQMq.js","./BS6D38iF.js","./Index.D9-DJu1n.css","./4_XzfzWY.js","./DEPnQl9_.js","./el-form.xWw5OCe7.css","./B_Svc4lW.js","./lzM0axUW.js","./BG4-zxbS.js","./el-popper.D4uZ7bVu.css","./el-select.D5HjiSAn.css","./jI7Y9ipp.js","./Duq0IMC5.js","./Ca9HpryN.js","./Index.CouRq_bz.css","./DqzbFe6Q.js","./BWZBFZhk.js","./BlnfzQag.js","./B8TGnGC_.js","./DNfmvElV.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as Oe,e as K,h as ve,f as ze,a8 as me,u as Ie,n as Le,a7 as ne}from"./CwFcZstm.js";import Ue from"./CPwt8FHk.js";import{b as _e,u as I,E as Ve,d as L}from"./lzM0axUW.js";import{b as W,i as De,_ as le,O as Fe,w as Pe,f as re,m as we,E as q,c as Me,d as He,j as Ke,P as We,e as je}from"./DVvrfKR8.js";import{d as oe}from"./BrVIp9b3.js";import{d as z,c as O,a as P,u as m,F as U,G,H as N,I as J,Q as ie,L as he,N as M,M as H,_ as qe,O as Ge,i as ce,w as F,n as ue,a4 as Qe,g as X,D as Ne,au as Je,R as r,p as Xe,E as Ye,aa as Ze,r as et,ae as tt,ac as at,ad as ot,J as B,k as st,A as de,$ as nt,a0 as lt}from"./CCRDBSiD.js";import{_ as rt}from"./jI7Y9ipp.js";import{u as Se,C as it,D as ct,E as Q}from"./BxtoV3vY.js";import{t as pe}from"./ChQoo9XU.js";import{U as Ee}from"./HEVJa2N9.js";import{u as ut}from"./CVrsTBzS.js";import{_ as dt}from"./DlAUqK2U.js";import"./BQkc-AXV.js";import"./BG4-zxbS.js";const pt=W({trigger:_e.trigger,placement:oe.placement,disabled:_e.disabled,visible:I.visible,transition:I.transition,popperOptions:oe.popperOptions,tabindex:oe.tabindex,content:I.content,popperStyle:I.popperStyle,popperClass:I.popperClass,enterable:{...I.enterable,default:!0},effect:{...I.effect,default:"light"},teleported:I.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),ft={"update:visible":e=>Oe(e),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},bt="onUpdate:visible",vt=z({name:"ElPopover"}),mt=z({...vt,props:pt,emits:ft,setup(e,{expose:a,emit:c}){const _=e,i=O(()=>_[bt]),o=K("popover"),h=P(),T=O(()=>{var t;return(t=m(h))==null?void 0:t.popperRef}),p=O(()=>[{width:De(_.width)},_.popperStyle]),b=O(()=>[o.b(),_.popperClass,{[o.m("plain")]:!!_.content}]),u=O(()=>_.transition===`${o.namespace.value}-fade-in-linear`),y=()=>{var t;(t=h.value)==null||t.hide()},f=()=>{c("before-enter")},n=()=>{c("before-leave")},R=()=>{c("after-enter")},s=()=>{c("update:visible",!1),c("after-leave")};return a({popperRef:T,hide:y}),(t,C)=>(U(),G(m(Ve),Ge({ref_key:"tooltipRef",ref:h},t.$attrs,{trigger:t.trigger,placement:t.placement,disabled:t.disabled,visible:t.visible,transition:t.transition,"popper-options":t.popperOptions,tabindex:t.tabindex,content:t.content,offset:t.offset,"show-after":t.showAfter,"hide-after":t.hideAfter,"auto-close":t.autoClose,"show-arrow":t.showArrow,"aria-label":t.title,effect:t.effect,enterable:t.enterable,"popper-class":m(b),"popper-style":m(p),teleported:t.teleported,persistent:t.persistent,"gpu-acceleration":m(u),"onUpdate:visible":m(i),onBeforeShow:f,onBeforeHide:n,onShow:R,onHide:s}),{content:N(()=>[t.title?(U(),J("div",{key:0,class:ie(m(o).e("title")),role:"title"},he(t.title),3)):M("v-if",!0),H(t.$slots,"default",{},()=>[qe(he(t.content),1)])]),default:N(()=>[t.$slots.reference?H(t.$slots,"reference",{key:0}):M("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var _t=le(mt,[["__file","popover.vue"]]);const ge=(e,a)=>{const c=a.arg||a.value,_=c==null?void 0:c.popperRef;_&&(_.triggerRef=e)};var ht={mounted(e,a){ge(e,a)},updated(e,a){ge(e,a)}};const gt="popover",yt=Fe(ht,gt),Pt=Pe(_t,{directive:yt}),Y=Symbol("tabsRootContextKey"),wt=W({tabs:{type:re(Array),default:()=>we([])}}),Te="ElTabBar",Nt=z({name:Te}),St=z({...Nt,props:wt,setup(e,{expose:a}){const c=e,_=X(),i=ce(Y);i||pe(Te,"<el-tabs><el-tab-bar /></el-tabs>");const o=K("tabs"),h=P(),T=P(),p=()=>{let u=0,y=0;const f=["top","bottom"].includes(i.props.tabPosition)?"width":"height",n=f==="width"?"x":"y",R=n==="x"?"left":"top";return c.tabs.every(s=>{var t,C;const $=(C=(t=_.parent)==null?void 0:t.refs)==null?void 0:C[`tab-${s.uid}`];if(!$)return!1;if(!s.active)return!0;u=$[`offset${L(R)}`],y=$[`client${L(f)}`];const x=window.getComputedStyle($);return f==="width"&&(c.tabs.length>1&&(y-=Number.parseFloat(x.paddingLeft)+Number.parseFloat(x.paddingRight)),u+=Number.parseFloat(x.paddingLeft)),!1}),{[f]:`${y}px`,transform:`translate${L(n)}(${u}px)`}},b=()=>T.value=p();return F(()=>c.tabs,async()=>{await ue(),b()},{immediate:!0}),Se(h,()=>b()),a({ref:h,update:b}),(u,y)=>(U(),J("div",{ref_key:"barRef",ref:h,class:ie([m(o).e("active-bar"),m(o).is(m(i).props.tabPosition)]),style:Qe(T.value)},null,6))}});var Et=le(St,[["__file","tab-bar.vue"]]);const Tt=W({panes:{type:re(Array),default:()=>we([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Ct={tabClick:(e,a,c)=>c instanceof Event,tabRemove:(e,a)=>a instanceof Event},ye="ElTabNav",$t=z({name:ye,props:Tt,emits:Ct,setup(e,{expose:a,emit:c}){const _=X(),i=ce(Y);i||pe(ye,"<el-tabs><tab-nav /></el-tabs>");const o=K("tabs"),h=it(),T=ct(),p=P(),b=P(),u=P(),y=P(),f=P(!1),n=P(0),R=P(!1),s=P(!0),t=O(()=>["top","bottom"].includes(i.props.tabPosition)?"width":"height"),C=O(()=>({transform:`translate${t.value==="width"?"X":"Y"}(-${n.value}px)`})),$=()=>{if(!p.value)return;const d=p.value[`offset${L(t.value)}`],v=n.value;if(!v)return;const l=v>d?v-d:0;n.value=l},x=()=>{if(!p.value||!b.value)return;const d=b.value[`offset${L(t.value)}`],v=p.value[`offset${L(t.value)}`],l=n.value;if(d-l<=v)return;const S=d-l>v*2?l+v:d-v;n.value=S},j=async()=>{const d=b.value;if(!f.value||!u.value||!p.value||!d)return;await ue();const v=u.value.querySelector(".is-active");if(!v)return;const l=p.value,S=["top","bottom"].includes(i.props.tabPosition),E=v.getBoundingClientRect(),w=l.getBoundingClientRect(),A=S?d.offsetWidth-w.width:d.offsetHeight-w.height,k=n.value;let g=k;S?(E.left<w.left&&(g=k-(w.left-E.left)),E.right>w.right&&(g=k+E.right-w.right)):(E.top<w.top&&(g=k-(w.top-E.top)),E.bottom>w.bottom&&(g=k+(E.bottom-w.bottom))),g=Math.max(g,0),n.value=Math.min(g,A)},fe=()=>{var d;if(!b.value||!p.value)return;e.stretch&&((d=y.value)==null||d.update());const v=b.value[`offset${L(t.value)}`],l=p.value[`offset${L(t.value)}`],S=n.value;l<v?(f.value=f.value||{},f.value.prev=S,f.value.next=S+l<v,v-S<l&&(n.value=v-l)):(f.value=!1,S>0&&(n.value=0))},Be=d=>{const v=d.code,{up:l,down:S,left:E,right:w}=Q;if(![l,S,E,w].includes(v))return;const A=Array.from(d.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),k=A.indexOf(d.target);let g;v===E||v===l?k===0?g=A.length-1:g=k-1:k<A.length-1?g=k+1:g=0,A[g].focus({preventScroll:!0}),A[g].click(),be()},be=()=>{s.value&&(R.value=!0)},Z=()=>R.value=!1;return F(h,d=>{d==="hidden"?s.value=!1:d==="visible"&&setTimeout(()=>s.value=!0,50)}),F(T,d=>{d?setTimeout(()=>s.value=!0,50):s.value=!1}),Se(u,fe),Ne(()=>setTimeout(()=>j(),0)),Je(()=>fe()),a({scrollToActiveTab:j,removeFocus:Z}),F(()=>e.panes,()=>_.update(),{flush:"post",deep:!0}),()=>{const d=f.value?[r("span",{class:[o.e("nav-prev"),o.is("disabled",!f.value.prev)],onClick:$},[r(q,null,{default:()=>[r(Me,null,null)]})]),r("span",{class:[o.e("nav-next"),o.is("disabled",!f.value.next)],onClick:x},[r(q,null,{default:()=>[r(He,null,null)]})])]:null,v=e.panes.map((l,S)=>{var E,w,A,k;const g=l.uid,ee=l.props.disabled,te=(w=(E=l.props.name)!=null?E:l.index)!=null?w:`${S}`,ae=!ee&&(l.isClosable||e.editable);l.index=`${S}`;const Re=ae?r(q,{class:"is-icon-close",onClick:D=>c("tabRemove",l,D)},{default:()=>[r(Ke,null,null)]}):null,xe=((k=(A=l.slots).label)==null?void 0:k.call(A))||l.props.label,Ae=!ee&&l.active?0:-1;return r("div",{ref:`tab-${g}`,class:[o.e("item"),o.is(i.props.tabPosition),o.is("active",l.active),o.is("disabled",ee),o.is("closable",ae),o.is("focus",R.value)],id:`tab-${te}`,key:`tab-${g}`,"aria-controls":`pane-${te}`,role:"tab","aria-selected":l.active,tabindex:Ae,onFocus:()=>be(),onBlur:()=>Z(),onClick:D=>{Z(),c("tabClick",l,te,D)},onKeydown:D=>{ae&&(D.code===Q.delete||D.code===Q.backspace)&&c("tabRemove",l,D)}},[xe,Re])});return r("div",{ref:u,class:[o.e("nav-wrap"),o.is("scrollable",!!f.value),o.is(i.props.tabPosition)]},[d,r("div",{class:o.e("nav-scroll"),ref:p},[r("div",{class:[o.e("nav"),o.is(i.props.tabPosition),o.is("stretch",e.stretch&&["top","bottom"].includes(i.props.tabPosition))],ref:b,style:C.value,role:"tablist",onKeydown:Be},[e.type?null:r(Et,{ref:y,tabs:[...e.panes]},null),v])])])}}}),kt=W({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:re(Function),default:()=>!0},stretch:Boolean}),se=e=>Ye(e)||ze(e),Bt={[Ee]:e=>se(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>se(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>se(e),tabAdd:()=>!0},Rt=z({name:"ElTabs",props:kt,emits:Bt,setup(e,{emit:a,slots:c,expose:_}){var i;const o=K("tabs"),{children:h,addChild:T,removeChild:p}=ut(X(),"ElTabPane"),b=P(),u=P((i=e.modelValue)!=null?i:"0"),y=async(s,t=!1)=>{var C,$,x;if(!(u.value===s||ve(s)))try{await((C=e.beforeLeave)==null?void 0:C.call(e,s,u.value))!==!1&&(u.value=s,t&&(a(Ee,s),a("tabChange",s)),(x=($=b.value)==null?void 0:$.removeFocus)==null||x.call($))}catch{}},f=(s,t,C)=>{s.props.disabled||(y(t,!0),a("tabClick",s,C))},n=(s,t)=>{s.props.disabled||ve(s.props.name)||(t.stopPropagation(),a("edit",s.props.name,"remove"),a("tabRemove",s.props.name))},R=()=>{a("edit",void 0,"add"),a("tabAdd")};return F(()=>e.modelValue,s=>y(s)),F(u,async()=>{var s;await ue(),(s=b.value)==null||s.scrollToActiveTab()}),Xe(Y,{props:e,currentName:u,registerPane:T,unregisterPane:p}),_({currentName:u}),()=>{const s=c["add-icon"],t=e.editable||e.addable?r("span",{class:o.e("new-tab"),tabindex:"0",onClick:R,onKeydown:x=>{x.code===Q.enter&&R()}},[s?H(c,"add-icon"):r(q,{class:o.is("icon-plus")},{default:()=>[r(We,null,null)]})]):null,C=r("div",{class:[o.e("header"),o.is(e.tabPosition)]},[t,r($t,{ref:b,currentName:u.value,editable:e.editable,type:e.type,panes:h.value,stretch:e.stretch,onTabClick:f,onTabRemove:n},null)]),$=r("div",{class:o.e("content")},[H(c,"default")]);return r("div",{class:[o.b(),o.m(e.tabPosition),{[o.m("card")]:e.type==="card",[o.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[C,$]:[$,C]])}}}),xt=W({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),At=["id","aria-hidden","aria-labelledby"],Ce="ElTabPane",Ot=z({name:Ce}),zt=z({...Ot,props:xt,setup(e){const a=e,c=X(),_=Ze(),i=ce(Y);i||pe(Ce,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=K("tab-pane"),h=P(),T=O(()=>a.closable||i.props.closable),p=me(()=>{var n;return i.currentName.value===((n=a.name)!=null?n:h.value)}),b=P(p.value),u=O(()=>{var n;return(n=a.name)!=null?n:h.value}),y=me(()=>!a.lazy||b.value||p.value);F(p,n=>{n&&(b.value=!0)});const f=et({uid:c.uid,slots:_,props:a,paneName:u,active:p,index:h,isClosable:T});return Ne(()=>{i.registerPane(f)}),tt(()=>{i.unregisterPane(f.uid)}),(n,R)=>m(y)?at((U(),J("div",{key:0,id:`pane-${m(u)}`,class:ie(m(o).b()),role:"tabpanel","aria-hidden":!m(p),"aria-labelledby":`tab-${m(u)}`},[H(n.$slots,"default")],10,At)),[[ot,m(p)]]):M("v-if",!0)}});var $e=le(zt,[["__file","tab-pane.vue"]]);const It=Pe(Rt,{TabPane:$e}),Lt=je($e),ke=""+new URL("basic_info.qQNGGNeA.png",import.meta.url).href,Ut=de(()=>ne(()=>import("./DjdYD6Cn.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]),import.meta.url).then(e=>e.default||e)),Vt=de(()=>ne(()=>import("./BlnfzQag.js"),__vite__mapDeps([40,29,5,6,13,3,4,7,8,9,10,11,14,15,16,30,31,32,24,23,12,27,33,26,22,28,1,2,17,18,19,20,21,25,35,36,37,39,41]),import.meta.url).then(e=>e.default||e)),Dt=de(()=>ne(()=>import("./DNfmvElV.js"),__vite__mapDeps([42,29,5,6,13,3,4,7,8,9,10,11,14,15,16,30,31,32,24,23,12,27,33,34,26,22,28,35,36,37,39]),import.meta.url).then(e=>e.default||e)),V=e=>(nt("data-v-6511fe95"),e=e(),lt(),e),Ft={class:"profile pt-10 pb-32 space-y-14"},Mt={class:"pl-9"},Ht=V(()=>B("p",{class:"font-medium text-4xl PPHattonMedium"},"Update Public Profile Page",-1)),Kt={class:"space-y-4"},Wt=V(()=>B("span",{class:"uppercase space-x-1 tracking-0.5"},"view my profile page",-1)),jt=V(()=>B("div",{class:"font-light text-lg PolySansNeutral"}," Please note that personal info doesn’t need approval to make an update while work info does need Starscollective to review before publishing. ",-1)),qt={class:"w-full text-#F5F5F5"},Gt=V(()=>B("span",{class:"px-8 font-light text-lg PolySansNeutral"},"Basic Info",-1)),Qt=V(()=>B("img",{src:ke,class:"h-46 block"},null,-1)),Jt=V(()=>B("span",{class:"px-8 font-light text-lg PolySansNeutral"},"Work Sample",-1)),Xt=V(()=>B("span",{class:"px-8 font-light text-lg PolySansNeutral"},"Awards",-1)),Yt=V(()=>B("img",{src:ke,class:"h-46 block"},null,-1)),Zt=z({__name:"profilePage",setup(e){const a=P("first"),c=Ie();return(_,i)=>{const o=Ue,h=Pt,T=rt,p=Ut,b=Lt,u=Vt,y=Dt,f=It;return U(),J("div",Ft,[B("div",Mt,[Ht,B("div",Kt,[B("div",{class:"font-normal text-sm text-#ffffff flex items-center space-x-1 cursor-pointer",onClick:i[0]||(i[0]=n=>("navigateTo"in _?_.navigateTo:m(Le))(`/starslist/${m(c).getUserInfo.id}`))},[Wt,r(o,{name:"mi:arrow-right-up",size:"20"})]),jt]),B("div",qt,[r(f,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=n=>st(a)?a.value=n:null)},{default:N(()=>[r(b,{label:"Basic Info",name:"first"},{label:N(()=>[r(T,null,{default:N(()=>[r(h,{placement:"top-start",trigger:"hover",width:300,"popper-style":"padding: 0;border:none"},{reference:N(()=>[Gt]),default:N(()=>[Qt]),_:1})]),_:1})]),default:N(()=>[m(a)==="first"?(U(),G(p,{key:0})):M("",!0)]),_:1}),r(b,{label:"Work Sample",name:"second"},{label:N(()=>[Jt]),default:N(()=>[m(a)==="second"?(U(),G(u,{key:0})):M("",!0)]),_:1}),r(b,{label:"Awards",name:"third"},{label:N(()=>[r(T,null,{default:N(()=>[r(h,{placement:"top-start",trigger:"hover",width:300,"popper-style":"padding: 0;border:none"},{reference:N(()=>[Xt]),default:N(()=>[Yt]),_:1})]),_:1})]),default:N(()=>[m(a)==="third"?(U(),G(y,{key:0})):M("",!0)]),_:1})]),_:1},8,["modelValue"])])])])}}}),ba=dt(Zt,[["__scopeId","data-v-6511fe95"]]);export{ba as default};
