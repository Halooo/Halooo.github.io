import{d as m,a as o,B as d,D as v,n as p,F as w,I as h,J as _,M as r,a4 as q,u as F,N as A}from"./CCRDBSiD.js";const M={key:0,class:"relative flex"},y=m({__name:"SwiperLoop",props:{list:{default:[]},width:{default:0},offset:{default:"left"}},setup(i){const t=i,l=o(null),n=o(),a=o(0);d(()=>{const e=+`-${t.list.length*(t.width+30)}`;t.offset==="right"&&a.value>=0&&(a.value=e),t.offset==="left"&&a.value<=e&&(a.value=0)});const s=()=>{t.offset==="right"&&(a.value+=1),t.offset==="left"&&(a.value-=1),n.value=window.requestAnimationFrame(s)},u=()=>{n.value&&window.cancelAnimationFrame(n.value),a.value=0,n.value=window.requestAnimationFrame(s)};v(async()=>{await p(),l.value&&u()});const f=e=>{e.preventDefault(),cancelAnimationFrame(n.value)},c=e=>{e.preventDefault(),n.value=window.requestAnimationFrame(s)};return(e,k)=>t.list?(w(),h("div",M,[_("div",{ref_key:"marquee",ref:l,class:"whitespace-nowrap space-x-30px",style:q([{transform:`translateX(${F(a)}px)`}]),onMouseenter:f,onMouseleave:c},[r(e.$slots,"default"),r(e.$slots,"default")],36)])):A("",!0)}});export{y as _};