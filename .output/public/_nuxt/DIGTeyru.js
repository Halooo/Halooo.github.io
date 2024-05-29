import{f as L,e as w,a5 as j}from"./CwFcZstm.js";import{E as G,an as U,a as T,w as W,p as q,c as r,d as f,F as K,I as P,M as b,Q as u,u as t,G as z,H as I,O as J,aK as Q,T as R,i as X,J as x,_ as Y,L as Z,R as H,as as ee,a3 as te,ac as se,ad as ae}from"./CCRDBSiD.js";import{b as O,f as V,m as oe,_ as B,d as le,E as ne,w as ie,e as de}from"./DVvrfKR8.js";import{U as A,C as S}from"./HEVJa2N9.js";import{c as $}from"./DEPnQl9_.js";const k=s=>L(s)||G(s)||U(s),re=O({accordion:Boolean,modelValue:{type:V([Array,String,Number]),default:()=>oe([])}}),ce={[A]:k,[S]:k},F=Symbol("collapseContextKey"),pe=(s,l)=>{const a=T($(s.modelValue)),n=o=>{a.value=o;const i=s.accordion?a.value[0]:a.value;l(A,i),l(S,i)},e=o=>{if(s.accordion)n([a.value[0]===o?"":o]);else{const i=[...a.value],d=i.indexOf(o);d>-1?i.splice(d,1):i.push(o),n(i)}};return W(()=>s.modelValue,()=>a.value=$(s.modelValue),{deep:!0}),q(F,{activeNames:a,handleItemClick:e}),{activeNames:a,setActiveNames:n}},me=()=>{const s=w("collapse");return{rootKls:r(()=>s.b())}},ue=f({name:"ElCollapse"}),fe=f({...ue,props:re,emits:ce,setup(s,{expose:l,emit:a}){const n=s,{activeNames:e,setActiveNames:o}=pe(n,a),{rootKls:i}=me();return l({activeNames:e,setActiveNames:o}),(d,p)=>(K(),P("div",{class:u(t(i))},[b(d.$slots,"default")],2))}});var ve=B(fe,[["__file","collapse.vue"]]);const ge=f({name:"ElCollapseTransition"}),he=f({...ge,setup(s){const l=w("collapse-transition"),a=e=>{e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom},n={beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height&&(e.dataset.elExistsHeight=e.style.height),e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){requestAnimationFrame(()=>{e.dataset.oldOverflow=e.style.overflow,e.dataset.elExistsHeight?e.style.maxHeight=e.dataset.elExistsHeight:e.scrollHeight!==0?e.style.maxHeight=`${e.scrollHeight}px`:e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom,e.style.overflow="hidden"})},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},enterCancelled(e){a(e)},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){e.scrollHeight!==0&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){a(e)},leaveCancelled(e){a(e)}};return(e,o)=>(K(),z(R,J({name:t(l).b()},Q(n)),{default:I(()=>[b(e.$slots,"default")]),_:3},16,["name"]))}});var _=B(he,[["__file","collapse-transition.vue"]]);_.install=s=>{s.component(_.name,_)};const ye=_,Ce=O({title:{type:String,default:""},name:{type:V([String,Number]),default:void 0},disabled:Boolean}),_e=s=>{const l=X(F),{namespace:a}=w("collapse"),n=T(!1),e=T(!1),o=j(),i=r(()=>o.current++),d=r(()=>{var y;return(y=s.name)!=null?y:`${a.value}-id-${o.prefix}-${t(i)}`}),p=r(()=>l==null?void 0:l.activeNames.value.includes(t(d)));return{focusing:n,id:i,isActive:p,handleFocus:()=>{setTimeout(()=>{e.value?e.value=!1:n.value=!0},50)},handleHeaderClick:()=>{s.disabled||(l==null||l.handleItemClick(t(d)),n.value=!1,e.value=!0)},handleEnterClick:()=>{l==null||l.handleItemClick(t(d))}}},be=(s,{focusing:l,isActive:a,id:n})=>{const e=w("collapse"),o=r(()=>[e.b("item"),e.is("active",t(a)),e.is("disabled",s.disabled)]),i=r(()=>[e.be("item","header"),e.is("active",t(a)),{focusing:t(l)&&!s.disabled}]),d=r(()=>[e.be("item","arrow"),e.is("active",t(a))]),p=r(()=>e.be("item","wrap")),v=r(()=>e.be("item","content")),g=r(()=>e.b(`content-${t(n)}`)),h=r(()=>e.b(`head-${t(n)}`));return{arrowKls:d,headKls:i,rootKls:o,itemWrapperKls:p,itemContentKls:v,scopedContentId:g,scopedHeadId:h}},we=["id","aria-expanded","aria-controls","aria-describedby","tabindex"],Ee=["id","aria-hidden","aria-labelledby"],xe=f({name:"ElCollapseItem"}),He=f({...xe,props:Ce,setup(s,{expose:l}){const a=s,{focusing:n,id:e,isActive:o,handleFocus:i,handleHeaderClick:d,handleEnterClick:p}=_e(a),{arrowKls:v,headKls:g,rootKls:h,itemWrapperKls:y,itemContentKls:M,scopedContentId:E,scopedHeadId:N}=be(a,{focusing:n,isActive:o,id:e});return l({isActive:o}),(C,c)=>(K(),P("div",{class:u(t(h))},[x("button",{id:t(N),class:u(t(g)),"aria-expanded":t(o),"aria-controls":t(E),"aria-describedby":t(E),tabindex:C.disabled?-1:0,type:"button",onClick:c[0]||(c[0]=(...m)=>t(d)&&t(d)(...m)),onKeydown:c[1]||(c[1]=ee(te((...m)=>t(p)&&t(p)(...m),["stop","prevent"]),["space","enter"])),onFocus:c[2]||(c[2]=(...m)=>t(i)&&t(i)(...m)),onBlur:c[3]||(c[3]=m=>n.value=!1)},[b(C.$slots,"title",{},()=>[Y(Z(C.title),1)]),H(t(ne),{class:u(t(v))},{default:I(()=>[H(t(le))]),_:1},8,["class"])],42,we),H(t(ye),null,{default:I(()=>[se(x("div",{id:t(E),role:"region",class:u(t(y)),"aria-hidden":!t(o),"aria-labelledby":t(N)},[x("div",{class:u(t(M))},[b(C.$slots,"default")],2)],10,Ee),[[ae,t(o)]])]),_:3})],2))}});var D=B(He,[["__file","collapse-item.vue"]]);const $e=ie(ve,{CollapseItem:D}),ke=de(D);export{ke as E,$e as a};
