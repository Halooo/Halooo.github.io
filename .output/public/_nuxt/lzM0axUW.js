import{aF as ho,c as A,al as De,w as _,D as ze,g as yo,u as c,s as bo,a as j,P as Se,az as wo,p as Ce,d as L,M as ie,i as se,F as Z,I as Ne,Q as kt,a4 as Oo,a9 as Ze,ac as jt,aG as To,ao as Eo,a1 as Co,am as Ro,aH as Ao,R as Re,G as ce,H as te,O as Xe,N as Ae,an as xo,t as we,ad as Po,T as So,af as Mo,C as Io,ai as Bo,L as ko}from"./CCRDBSiD.js";import{u as Ft,f as I,q as yt,b as ee,_ as le,w as _t}from"./DVvrfKR8.js";import{i as Oe,j as Dt,U as jo,a4 as Fo,a5 as _o,f as Ge,e as Me,S as He,H as Lt,k as Do,l as Lo}from"./CwFcZstm.js";import{u as $t,a as bt}from"./ChQoo9XU.js";import{x as Nt,E as wt,y as $o}from"./BxtoV3vY.js";import{i as No,E as Ho}from"./BG4-zxbS.js";const Y=(e,t,{checkForDefaultPrevented:o=!0}={})=>r=>{const a=e==null?void 0:e(r);if(o===!1||!a)return t==null?void 0:t(r)},Xr=e=>t=>t.pointerType==="mouse"?e(t):void 0,Yr=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),Qr=e=>ho(e),Wo=Ft({type:I(Boolean),default:null}),zo=Ft({type:I(Function)}),Ht=e=>{const t=`update:${e}`,o=`onUpdate:${e}`,n=[t],r={[e]:Wo,[o]:zo};return{useModelToggle:({indicator:i,toggleReason:u,shouldHideWhenRouteChanges:s,shouldProceed:l,onShow:f,onHide:d})=>{const y=yo(),{emit:g}=y,m=y.props,v=A(()=>De(m[o])),T=A(()=>m[e]===null),p=O=>{i.value!==!0&&(i.value=!0,u&&(u.value=O),De(f)&&f(O))},w=O=>{i.value!==!1&&(i.value=!1,u&&(u.value=O),De(d)&&d(O))},E=O=>{if(m.disabled===!0||De(l)&&!l())return;const R=v.value&&Oe;R&&g(t,!0),(T.value||!R)&&p(O)},h=O=>{if(m.disabled===!0||!Oe)return;const R=v.value&&Oe;R&&g(t,!1),(T.value||!R)&&w(O)},C=O=>{Dt(O)&&(m.disabled&&O?v.value&&g(t,!1):i.value!==O&&(O?p():w()))},x=()=>{i.value?h():E()};return _(()=>m[e],C),s&&y.appContext.config.globalProperties.$route!==void 0&&_(()=>({...y.proxy.$route}),()=>{s.value&&i.value&&h()}),ze(()=>{C(m[e])}),{hide:h,show:E,toggle:x,hasUpdateHandler:v}},useModelToggleProps:r,useModelToggleEmits:n}};Ht("modelValue");var H="top",q="bottom",K="right",W="left",Ye="auto",Ie=[H,q,K,W],fe="start",xe="end",qo="clippingParents",Wt="viewport",be="popper",Ko="reference",Ot=Ie.reduce(function(e,t){return e.concat([t+"-"+fe,t+"-"+xe])},[]),Qe=[].concat(Ie,[Ye]).reduce(function(e,t){return e.concat([t,t+"-"+fe,t+"-"+xe])},[]),Uo="beforeRead",Vo="read",Zo="afterRead",Go="beforeMain",Jo="main",Xo="afterMain",Yo="beforeWrite",Qo="write",en="afterWrite",tn=[Uo,Vo,Zo,Go,Jo,Xo,Yo,Qo,en];function J(e){return e?(e.nodeName||"").toLowerCase():null}function U(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function de(e){var t=U(e).Element;return e instanceof t||e instanceof Element}function z(e){var t=U(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function et(e){if(typeof ShadowRoot>"u")return!1;var t=U(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function on(e){var t=e.state;Object.keys(t.elements).forEach(function(o){var n=t.styles[o]||{},r=t.attributes[o]||{},a=t.elements[o];!z(a)||!J(a)||(Object.assign(a.style,n),Object.keys(r).forEach(function(i){var u=r[i];u===!1?a.removeAttribute(i):a.setAttribute(i,u===!0?"":u)}))})}function nn(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach(function(n){var r=t.elements[n],a=t.attributes[n]||{},i=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:o[n]),u=i.reduce(function(s,l){return s[l]="",s},{});!z(r)||!J(r)||(Object.assign(r.style,u),Object.keys(a).forEach(function(s){r.removeAttribute(s)}))})}}var zt={name:"applyStyles",enabled:!0,phase:"write",fn:on,effect:nn,requires:["computeStyles"]};function G(e){return e.split("-")[0]}var ae=Math.max,We=Math.min,ve=Math.round;function ge(e,t){t===void 0&&(t=!1);var o=e.getBoundingClientRect(),n=1,r=1;if(z(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(n=ve(o.width)/i||1),a>0&&(r=ve(o.height)/a||1)}return{width:o.width/n,height:o.height/r,top:o.top/r,right:o.right/n,bottom:o.bottom/r,left:o.left/n,x:o.left/n,y:o.top/r}}function tt(e){var t=ge(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function qt(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&et(o)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Q(e){return U(e).getComputedStyle(e)}function rn(e){return["table","td","th"].indexOf(J(e))>=0}function oe(e){return((de(e)?e.ownerDocument:e.document)||window.document).documentElement}function qe(e){return J(e)==="html"?e:e.assignedSlot||e.parentNode||(et(e)?e.host:null)||oe(e)}function Tt(e){return!z(e)||Q(e).position==="fixed"?null:e.offsetParent}function an(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&z(e)){var n=Q(e);if(n.position==="fixed")return null}var r=qe(e);for(et(r)&&(r=r.host);z(r)&&["html","body"].indexOf(J(r))<0;){var a=Q(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function Be(e){for(var t=U(e),o=Tt(e);o&&rn(o)&&Q(o).position==="static";)o=Tt(o);return o&&(J(o)==="html"||J(o)==="body"&&Q(o).position==="static")?t:o||an(e)||t}function ot(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Te(e,t,o){return ae(e,We(t,o))}function sn(e,t,o){var n=Te(e,t,o);return n>o?o:n}function Kt(){return{top:0,right:0,bottom:0,left:0}}function Ut(e){return Object.assign({},Kt(),e)}function Vt(e,t){return t.reduce(function(o,n){return o[n]=e,o},{})}var ln=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Ut(typeof e!="number"?e:Vt(e,Ie))};function un(e){var t,o=e.state,n=e.name,r=e.options,a=o.elements.arrow,i=o.modifiersData.popperOffsets,u=G(o.placement),s=ot(u),l=[W,K].indexOf(u)>=0,f=l?"height":"width";if(!(!a||!i)){var d=ln(r.padding,o),y=tt(a),g=s==="y"?H:W,m=s==="y"?q:K,v=o.rects.reference[f]+o.rects.reference[s]-i[s]-o.rects.popper[f],T=i[s]-o.rects.reference[s],p=Be(a),w=p?s==="y"?p.clientHeight||0:p.clientWidth||0:0,E=v/2-T/2,h=d[g],C=w-y[f]-d[m],x=w/2-y[f]/2+E,O=Te(h,x,C),R=s;o.modifiersData[n]=(t={},t[R]=O,t.centerOffset=O-x,t)}}function pn(e){var t=e.state,o=e.options,n=o.element,r=n===void 0?"[data-popper-arrow]":n;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!qt(t.elements.popper,r)||(t.elements.arrow=r))}var cn={name:"arrow",enabled:!0,phase:"main",fn:un,effect:pn,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function me(e){return e.split("-")[1]}var fn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function dn(e){var t=e.x,o=e.y,n=window,r=n.devicePixelRatio||1;return{x:ve(t*r)/r||0,y:ve(o*r)/r||0}}function Et(e){var t,o=e.popper,n=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,u=e.position,s=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,d=e.isFixed,y=i.x,g=y===void 0?0:y,m=i.y,v=m===void 0?0:m,T=typeof f=="function"?f({x:g,y:v}):{x:g,y:v};g=T.x,v=T.y;var p=i.hasOwnProperty("x"),w=i.hasOwnProperty("y"),E=W,h=H,C=window;if(l){var x=Be(o),O="clientHeight",R="clientWidth";if(x===U(o)&&(x=oe(o),Q(x).position!=="static"&&u==="absolute"&&(O="scrollHeight",R="scrollWidth")),x=x,r===H||(r===W||r===K)&&a===xe){h=q;var k=d&&x===C&&C.visualViewport?C.visualViewport.height:x[O];v-=k-n.height,v*=s?1:-1}if(r===W||(r===H||r===q)&&a===xe){E=K;var P=d&&x===C&&C.visualViewport?C.visualViewport.width:x[R];g-=P-n.width,g*=s?1:-1}}var M=Object.assign({position:u},l&&fn),D=f===!0?dn({x:g,y:v}):{x:g,y:v};if(g=D.x,v=D.y,s){var S;return Object.assign({},M,(S={},S[h]=w?"0":"",S[E]=p?"0":"",S.transform=(C.devicePixelRatio||1)<=1?"translate("+g+"px, "+v+"px)":"translate3d("+g+"px, "+v+"px, 0)",S))}return Object.assign({},M,(t={},t[h]=w?v+"px":"",t[E]=p?g+"px":"",t.transform="",t))}function vn(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=n===void 0?!0:n,a=o.adaptive,i=a===void 0?!0:a,u=o.roundOffsets,s=u===void 0?!0:u,l={placement:G(t.placement),variation:me(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Et(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Et(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Zt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:vn,data:{}},Le={passive:!0};function gn(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,a=r===void 0?!0:r,i=n.resize,u=i===void 0?!0:i,s=U(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(f){f.addEventListener("scroll",o.update,Le)}),u&&s.addEventListener("resize",o.update,Le),function(){a&&l.forEach(function(f){f.removeEventListener("scroll",o.update,Le)}),u&&s.removeEventListener("resize",o.update,Le)}}var Gt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:gn,data:{}},mn={left:"right",right:"left",bottom:"top",top:"bottom"};function $e(e){return e.replace(/left|right|bottom|top/g,function(t){return mn[t]})}var hn={start:"end",end:"start"};function Ct(e){return e.replace(/start|end/g,function(t){return hn[t]})}function nt(e){var t=U(e),o=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:o,scrollTop:n}}function rt(e){return ge(oe(e)).left+nt(e).scrollLeft}function yn(e){var t=U(e),o=oe(e),n=t.visualViewport,r=o.clientWidth,a=o.clientHeight,i=0,u=0;return n&&(r=n.width,a=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=n.offsetLeft,u=n.offsetTop)),{width:r,height:a,x:i+rt(e),y:u}}function bn(e){var t,o=oe(e),n=nt(e),r=(t=e.ownerDocument)==null?void 0:t.body,a=ae(o.scrollWidth,o.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=ae(o.scrollHeight,o.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-n.scrollLeft+rt(e),s=-n.scrollTop;return Q(r||o).direction==="rtl"&&(u+=ae(o.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:u,y:s}}function at(e){var t=Q(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function Jt(e){return["html","body","#document"].indexOf(J(e))>=0?e.ownerDocument.body:z(e)&&at(e)?e:Jt(qe(e))}function Ee(e,t){var o;t===void 0&&(t=[]);var n=Jt(e),r=n===((o=e.ownerDocument)==null?void 0:o.body),a=U(n),i=r?[a].concat(a.visualViewport||[],at(n)?n:[]):n,u=t.concat(i);return r?u:u.concat(Ee(qe(i)))}function Je(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function wn(e){var t=ge(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Rt(e,t){return t===Wt?Je(yn(e)):de(t)?wn(t):Je(bn(oe(e)))}function On(e){var t=Ee(qe(e)),o=["absolute","fixed"].indexOf(Q(e).position)>=0,n=o&&z(e)?Be(e):e;return de(n)?t.filter(function(r){return de(r)&&qt(r,n)&&J(r)!=="body"}):[]}function Tn(e,t,o){var n=t==="clippingParents"?On(e):[].concat(t),r=[].concat(n,[o]),a=r[0],i=r.reduce(function(u,s){var l=Rt(e,s);return u.top=ae(l.top,u.top),u.right=We(l.right,u.right),u.bottom=We(l.bottom,u.bottom),u.left=ae(l.left,u.left),u},Rt(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function Xt(e){var t=e.reference,o=e.element,n=e.placement,r=n?G(n):null,a=n?me(n):null,i=t.x+t.width/2-o.width/2,u=t.y+t.height/2-o.height/2,s;switch(r){case H:s={x:i,y:t.y-o.height};break;case q:s={x:i,y:t.y+t.height};break;case K:s={x:t.x+t.width,y:u};break;case W:s={x:t.x-o.width,y:u};break;default:s={x:t.x,y:t.y}}var l=r?ot(r):null;if(l!=null){var f=l==="y"?"height":"width";switch(a){case fe:s[l]=s[l]-(t[f]/2-o[f]/2);break;case xe:s[l]=s[l]+(t[f]/2-o[f]/2);break}}return s}function Pe(e,t){t===void 0&&(t={});var o=t,n=o.placement,r=n===void 0?e.placement:n,a=o.boundary,i=a===void 0?qo:a,u=o.rootBoundary,s=u===void 0?Wt:u,l=o.elementContext,f=l===void 0?be:l,d=o.altBoundary,y=d===void 0?!1:d,g=o.padding,m=g===void 0?0:g,v=Ut(typeof m!="number"?m:Vt(m,Ie)),T=f===be?Ko:be,p=e.rects.popper,w=e.elements[y?T:f],E=Tn(de(w)?w:w.contextElement||oe(e.elements.popper),i,s),h=ge(e.elements.reference),C=Xt({reference:h,element:p,strategy:"absolute",placement:r}),x=Je(Object.assign({},p,C)),O=f===be?x:h,R={top:E.top-O.top+v.top,bottom:O.bottom-E.bottom+v.bottom,left:E.left-O.left+v.left,right:O.right-E.right+v.right},k=e.modifiersData.offset;if(f===be&&k){var P=k[r];Object.keys(R).forEach(function(M){var D=[K,q].indexOf(M)>=0?1:-1,S=[H,q].indexOf(M)>=0?"y":"x";R[M]+=P[S]*D})}return R}function En(e,t){t===void 0&&(t={});var o=t,n=o.placement,r=o.boundary,a=o.rootBoundary,i=o.padding,u=o.flipVariations,s=o.allowedAutoPlacements,l=s===void 0?Qe:s,f=me(n),d=f?u?Ot:Ot.filter(function(m){return me(m)===f}):Ie,y=d.filter(function(m){return l.indexOf(m)>=0});y.length===0&&(y=d);var g=y.reduce(function(m,v){return m[v]=Pe(e,{placement:v,boundary:r,rootBoundary:a,padding:i})[G(v)],m},{});return Object.keys(g).sort(function(m,v){return g[m]-g[v]})}function Cn(e){if(G(e)===Ye)return[];var t=$e(e);return[Ct(e),t,Ct(t)]}function Rn(e){var t=e.state,o=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var r=o.mainAxis,a=r===void 0?!0:r,i=o.altAxis,u=i===void 0?!0:i,s=o.fallbackPlacements,l=o.padding,f=o.boundary,d=o.rootBoundary,y=o.altBoundary,g=o.flipVariations,m=g===void 0?!0:g,v=o.allowedAutoPlacements,T=t.options.placement,p=G(T),w=p===T,E=s||(w||!m?[$e(T)]:Cn(T)),h=[T].concat(E).reduce(function(ne,X){return ne.concat(G(X)===Ye?En(t,{placement:X,boundary:f,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:v}):X)},[]),C=t.rects.reference,x=t.rects.popper,O=new Map,R=!0,k=h[0],P=0;P<h.length;P++){var M=h[P],D=G(M),S=me(M)===fe,$=[H,q].indexOf(D)>=0,F=$?"width":"height",B=Pe(t,{placement:M,boundary:f,rootBoundary:d,altBoundary:y,padding:l}),b=$?S?K:W:S?q:H;C[F]>x[F]&&(b=$e(b));var N=$e(b),V=[];if(a&&V.push(B[D]<=0),u&&V.push(B[b]<=0,B[N]<=0),V.every(function(ne){return ne})){k=M,R=!1;break}O.set(M,V)}if(R)for(var ke=m?3:1,Ke=function(ne){var X=h.find(function(Fe){var ye=O.get(Fe);if(ye)return ye.slice(0,ne).every(function(ue){return ue})});if(X)return k=X,"break"},he=ke;he>0;he--){var je=Ke(he);if(je==="break")break}t.placement!==k&&(t.modifiersData[n]._skip=!0,t.placement=k,t.reset=!0)}}var An={name:"flip",enabled:!0,phase:"main",fn:Rn,requiresIfExists:["offset"],data:{_skip:!1}};function At(e,t,o){return o===void 0&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function xt(e){return[H,K,q,W].some(function(t){return e[t]>=0})}function xn(e){var t=e.state,o=e.name,n=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=Pe(t,{elementContext:"reference"}),u=Pe(t,{altBoundary:!0}),s=At(i,n),l=At(u,r,a),f=xt(s),d=xt(l);t.modifiersData[o]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":d})}var Pn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:xn};function Sn(e,t,o){var n=G(e),r=[W,H].indexOf(n)>=0?-1:1,a=typeof o=="function"?o(Object.assign({},t,{placement:e})):o,i=a[0],u=a[1];return i=i||0,u=(u||0)*r,[W,K].indexOf(n)>=0?{x:u,y:i}:{x:i,y:u}}function Mn(e){var t=e.state,o=e.options,n=e.name,r=o.offset,a=r===void 0?[0,0]:r,i=Qe.reduce(function(f,d){return f[d]=Sn(d,t.rects,a),f},{}),u=i[t.placement],s=u.x,l=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=i}var In={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Mn};function Bn(e){var t=e.state,o=e.name;t.modifiersData[o]=Xt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Yt={name:"popperOffsets",enabled:!0,phase:"read",fn:Bn,data:{}};function kn(e){return e==="x"?"y":"x"}function jn(e){var t=e.state,o=e.options,n=e.name,r=o.mainAxis,a=r===void 0?!0:r,i=o.altAxis,u=i===void 0?!1:i,s=o.boundary,l=o.rootBoundary,f=o.altBoundary,d=o.padding,y=o.tether,g=y===void 0?!0:y,m=o.tetherOffset,v=m===void 0?0:m,T=Pe(t,{boundary:s,rootBoundary:l,padding:d,altBoundary:f}),p=G(t.placement),w=me(t.placement),E=!w,h=ot(p),C=kn(h),x=t.modifiersData.popperOffsets,O=t.rects.reference,R=t.rects.popper,k=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,P=typeof k=="number"?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(x){if(a){var S,$=h==="y"?H:W,F=h==="y"?q:K,B=h==="y"?"height":"width",b=x[h],N=b+T[$],V=b-T[F],ke=g?-R[B]/2:0,Ke=w===fe?O[B]:R[B],he=w===fe?-R[B]:-O[B],je=t.elements.arrow,ne=g&&je?tt(je):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Kt(),Fe=X[$],ye=X[F],ue=Te(0,O[B],ne[B]),uo=E?O[B]/2-ke-ue-Fe-P.mainAxis:Ke-ue-Fe-P.mainAxis,po=E?-O[B]/2+ke+ue+ye+P.mainAxis:he+ue+ye+P.mainAxis,Ue=t.elements.arrow&&Be(t.elements.arrow),co=Ue?h==="y"?Ue.clientTop||0:Ue.clientLeft||0:0,ut=(S=M==null?void 0:M[h])!=null?S:0,fo=b+uo-ut-co,vo=b+po-ut,pt=Te(g?We(N,fo):N,b,g?ae(V,vo):V);x[h]=pt,D[h]=pt-b}if(u){var ct,go=h==="x"?H:W,mo=h==="x"?q:K,re=x[C],_e=C==="y"?"height":"width",ft=re+T[go],dt=re-T[mo],Ve=[H,W].indexOf(p)!==-1,vt=(ct=M==null?void 0:M[C])!=null?ct:0,gt=Ve?ft:re-O[_e]-R[_e]-vt+P.altAxis,mt=Ve?re+O[_e]+R[_e]-vt-P.altAxis:dt,ht=g&&Ve?sn(gt,re,mt):Te(g?gt:ft,re,g?mt:dt);x[C]=ht,D[C]=ht-re}t.modifiersData[n]=D}}var Fn={name:"preventOverflow",enabled:!0,phase:"main",fn:jn,requiresIfExists:["offset"]};function _n(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Dn(e){return e===U(e)||!z(e)?nt(e):_n(e)}function Ln(e){var t=e.getBoundingClientRect(),o=ve(t.width)/e.offsetWidth||1,n=ve(t.height)/e.offsetHeight||1;return o!==1||n!==1}function $n(e,t,o){o===void 0&&(o=!1);var n=z(t),r=z(t)&&Ln(t),a=oe(t),i=ge(e,r),u={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!o)&&((J(t)!=="body"||at(a))&&(u=Dn(t)),z(t)?(s=ge(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=rt(a))),{x:i.left+u.scrollLeft-s.x,y:i.top+u.scrollTop-s.y,width:i.width,height:i.height}}function Nn(e){var t=new Map,o=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function r(a){o.add(a.name);var i=[].concat(a.requires||[],a.requiresIfExists||[]);i.forEach(function(u){if(!o.has(u)){var s=t.get(u);s&&r(s)}}),n.push(a)}return e.forEach(function(a){o.has(a.name)||r(a)}),n}function Hn(e){var t=Nn(e);return tn.reduce(function(o,n){return o.concat(t.filter(function(r){return r.phase===n}))},[])}function Wn(e){var t;return function(){return t||(t=new Promise(function(o){Promise.resolve().then(function(){t=void 0,o(e())})})),t}}function zn(e){var t=e.reduce(function(o,n){var r=o[n.name];return o[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,o},{});return Object.keys(t).map(function(o){return t[o]})}var Pt={placement:"bottom",modifiers:[],strategy:"absolute"};function St(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function it(e){e===void 0&&(e={});var t=e,o=t.defaultModifiers,n=o===void 0?[]:o,r=t.defaultOptions,a=r===void 0?Pt:r;return function(i,u,s){s===void 0&&(s=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pt,a),modifiersData:{},elements:{reference:i,popper:u},attributes:{},styles:{}},f=[],d=!1,y={state:l,setOptions:function(v){var T=typeof v=="function"?v(l.options):v;m(),l.options=Object.assign({},a,l.options,T),l.scrollParents={reference:de(i)?Ee(i):i.contextElement?Ee(i.contextElement):[],popper:Ee(u)};var p=Hn(zn([].concat(n,l.options.modifiers)));return l.orderedModifiers=p.filter(function(w){return w.enabled}),g(),y.update()},forceUpdate:function(){if(!d){var v=l.elements,T=v.reference,p=v.popper;if(St(T,p)){l.rects={reference:$n(T,Be(p),l.options.strategy==="fixed"),popper:tt(p)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(R){return l.modifiersData[R.name]=Object.assign({},R.data)});for(var w=0;w<l.orderedModifiers.length;w++){if(l.reset===!0){l.reset=!1,w=-1;continue}var E=l.orderedModifiers[w],h=E.fn,C=E.options,x=C===void 0?{}:C,O=E.name;typeof h=="function"&&(l=h({state:l,options:x,name:O,instance:y})||l)}}}},update:Wn(function(){return new Promise(function(v){y.forceUpdate(),v(l)})}),destroy:function(){m(),d=!0}};if(!St(i,u))return y;y.setOptions(s).then(function(v){!d&&s.onFirstUpdate&&s.onFirstUpdate(v)});function g(){l.orderedModifiers.forEach(function(v){var T=v.name,p=v.options,w=p===void 0?{}:p,E=v.effect;if(typeof E=="function"){var h=E({state:l,name:T,instance:y,options:w}),C=function(){};f.push(h||C)}})}function m(){f.forEach(function(v){return v()}),f=[]}return y}}it();var qn=[Gt,Yt,Zt,zt];it({defaultModifiers:qn});var Kn=[Gt,Yt,Zt,zt,In,An,Fn,cn,Pn],Un=it({defaultModifiers:Kn});const Vn=(e,t,o={})=>{const n={name:"updateState",enabled:!0,phase:"write",fn:({state:s})=>{const l=Zn(s);Object.assign(i.value,l)},requires:["computeStyles"]},r=A(()=>{const{onFirstUpdate:s,placement:l,strategy:f,modifiers:d}=c(o);return{onFirstUpdate:s,placement:l||"bottom",strategy:f||"absolute",modifiers:[...d||[],n,{name:"applyStyles",enabled:!1}]}}),a=bo(),i=j({styles:{popper:{position:c(r).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),u=()=>{a.value&&(a.value.destroy(),a.value=void 0)};return _(r,s=>{const l=c(a);l&&l.setOptions(s)},{deep:!0}),_([e,t],([s,l])=>{u(),!(!s||!l)&&(a.value=Un(s,l,c(r)))}),Se(()=>{u()}),{state:A(()=>{var s;return{...((s=c(a))==null?void 0:s.state)||{}}}),styles:A(()=>c(i).styles),attributes:A(()=>c(i).attributes),update:()=>{var s;return(s=c(a))==null?void 0:s.update()},forceUpdate:()=>{var s;return(s=c(a))==null?void 0:s.forceUpdate()},instanceRef:A(()=>c(a))}};function Zn(e){const t=Object.keys(e.elements),o=yt(t.map(r=>[r,e.styles[r]||{}])),n=yt(t.map(r=>[r,e.attributes[r]]));return{styles:o,attributes:n}}function Mt(){let e;const t=(n,r)=>{o(),e=window.setTimeout(n,r)},o=()=>window.clearTimeout(e);return jo(()=>o()),{registerTimeout:t,cancelTimeout:o}}let It;const Qt=()=>{const e=Fo(),t=_o(),o=A(()=>`${e.value}-popper-container-${t.prefix}`),n=A(()=>`#${o.value}`);return{id:o,selector:n}},Gn=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},Jn=()=>{const{id:e,selector:t}=Qt();return wo(()=>{Oe&&!It&&!document.body.querySelector(t.value)&&(It=Gn(e.value))}),{id:e,selector:t}},Xn=ee({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),Yn=({showAfter:e,hideAfter:t,autoClose:o,open:n,close:r})=>{const{registerTimeout:a}=Mt(),{registerTimeout:i,cancelTimeout:u}=Mt();return{onOpen:f=>{a(()=>{n(f);const d=c(o);Ge(d)&&d>0&&i(()=>{r(f)},d)},c(e))},onClose:f=>{u(),a(()=>{r(f)},c(t))}}},eo=Symbol("elForwardRef"),Qn=e=>{Ce(eo,{setForwardRef:o=>{e.value=o}})},er=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),st=Symbol("popper"),to=Symbol("popperContent"),tr=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],oo=ee({role:{type:String,values:tr,default:"tooltip"}}),or=L({name:"ElPopper",inheritAttrs:!1}),nr=L({...or,props:oo,setup(e,{expose:t}){const o=e,n=j(),r=j(),a=j(),i=j(),u=A(()=>o.role),s={triggerRef:n,popperInstanceRef:r,contentRef:a,referenceRef:i,role:u};return t(s),Ce(st,s),(l,f)=>ie(l.$slots,"default")}});var rr=le(nr,[["__file","popper.vue"]]);const no=ee({arrowOffset:{type:Number,default:5}}),ar=L({name:"ElPopperArrow",inheritAttrs:!1}),ir=L({...ar,props:no,setup(e,{expose:t}){const o=e,n=Me("popper"),{arrowOffset:r,arrowRef:a,arrowStyle:i}=se(to,void 0);return _(()=>o.arrowOffset,u=>{r.value=u}),Se(()=>{a.value=void 0}),t({arrowRef:a}),(u,s)=>(Z(),Ne("span",{ref_key:"arrowRef",ref:a,class:kt(c(n).e("arrow")),style:Oo(c(i)),"data-popper-arrow":""},null,6))}});var sr=le(ir,[["__file","arrow.vue"]]);const lr="ElOnlyChild",ur=L({name:lr,setup(e,{slots:t,attrs:o}){var n;const r=se(eo),a=er((n=r==null?void 0:r.setForwardRef)!=null?n:Ze);return()=>{var i;const u=(i=t.default)==null?void 0:i.call(t,o);if(!u||u.length>1)return null;const s=ro(u);return s?jt(To(s,o),[[a]]):null}}});function ro(e){if(!e)return null;const t=e;for(const o of t){if(Eo(o))switch(o.type){case Ao:continue;case Ro:case"svg":return Bt(o);case Co:return ro(o.children);default:return o}return Bt(o)}return null}function Bt(e){const t=Me("only-child");return Re("span",{class:t.e("content")},[e])}const ao=ee({virtualRef:{type:I(Object)},virtualTriggering:Boolean,onMouseenter:{type:I(Function)},onMouseleave:{type:I(Function)},onClick:{type:I(Function)},onKeydown:{type:I(Function)},onFocus:{type:I(Function)},onBlur:{type:I(Function)},onContextmenu:{type:I(Function)},id:String,open:Boolean}),pr=L({name:"ElPopperTrigger",inheritAttrs:!1}),cr=L({...pr,props:ao,setup(e,{expose:t}){const o=e,{role:n,triggerRef:r}=se(st,void 0);Qn(r);const a=A(()=>u.value?o.id:void 0),i=A(()=>{if(n&&n.value==="tooltip")return o.open&&o.id?o.id:void 0}),u=A(()=>{if(n&&n.value!=="tooltip")return n.value}),s=A(()=>u.value?`${o.open}`:void 0);let l;return ze(()=>{_(()=>o.virtualRef,f=>{f&&(r.value=Nt(f))},{immediate:!0}),_(r,(f,d)=>{l==null||l(),l=void 0,He(f)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(y=>{var g;const m=o[y];m&&(f.addEventListener(y.slice(2).toLowerCase(),m),(g=d==null?void 0:d.removeEventListener)==null||g.call(d,y.slice(2).toLowerCase(),m))}),l=_([a,i,u,s],y=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((g,m)=>{Lt(y[m])?f.removeAttribute(g):f.setAttribute(g,y[m])})},{immediate:!0})),He(d)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(y=>d.removeAttribute(y))},{immediate:!0})}),Se(()=>{l==null||l(),l=void 0}),t({triggerRef:r}),(f,d)=>f.virtualTriggering?Ae("v-if",!0):(Z(),ce(c(ur),Xe({key:0},f.$attrs,{"aria-controls":c(a),"aria-describedby":c(i),"aria-expanded":c(s),"aria-haspopup":c(u)}),{default:te(()=>[ie(f.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var fr=le(cr,[["__file","trigger.vue"]]);const dr=["fixed","absolute"],vr=ee({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:I(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Qe,default:"bottom"},popperOptions:{type:I(Object),default:()=>({})},strategy:{type:String,values:dr,default:"absolute"}}),io=ee({...vr,id:String,style:{type:I([String,Array,Object])},className:{type:I([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:I([String,Array,Object])},popperStyle:{type:I([String,Array,Object])},referenceEl:{type:I(Object)},triggerTargetEl:{type:I(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},virtualTriggering:Boolean,zIndex:Number,...$t(["ariaLabel"])}),gr={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},mr=(e,t=[])=>{const{placement:o,strategy:n,popperOptions:r}=e,a={placement:o,strategy:n,...r,modifiers:[...yr(e),...t]};return br(a,r==null?void 0:r.modifiers),a},hr=e=>{if(Oe)return Nt(e)};function yr(e){const{offset:t,gpuAcceleration:o,fallbackPlacements:n}=e;return[{name:"offset",options:{offset:[0,t??12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:n}},{name:"computeStyles",options:{gpuAcceleration:o}}]}function br(e,t){t&&(e.modifiers=[...e.modifiers,...t??[]])}const wr=0,Or=e=>{const{popperInstanceRef:t,contentRef:o,triggerRef:n,role:r}=se(st,void 0),a=j(),i=j(),u=A(()=>({name:"eventListeners",enabled:!!e.visible})),s=A(()=>{var p;const w=c(a),E=(p=c(i))!=null?p:wr;return{name:"arrow",enabled:!No(w),options:{element:w,padding:E}}}),l=A(()=>({onFirstUpdate:()=>{m()},...mr(e,[c(s),c(u)])})),f=A(()=>hr(e.referenceEl)||c(n)),{attributes:d,state:y,styles:g,update:m,forceUpdate:v,instanceRef:T}=Vn(f,o,l);return _(T,p=>t.value=p),ze(()=>{_(()=>{var p;return(p=c(f))==null?void 0:p.getBoundingClientRect()},()=>{m()})}),{attributes:d,arrowRef:a,contentRef:o,instanceRef:T,state:y,styles:g,role:r,forceUpdate:v,update:m}},Tr=(e,{attributes:t,styles:o,role:n})=>{const{nextZIndex:r}=Do(),a=Me("popper"),i=A(()=>c(t).popper),u=j(Ge(e.zIndex)?e.zIndex:r()),s=A(()=>[a.b(),a.is("pure",e.pure),a.is(e.effect),e.popperClass]),l=A(()=>[{zIndex:c(u)},c(o).popper,e.popperStyle||{}]),f=A(()=>n.value==="dialog"?"false":void 0),d=A(()=>c(o).arrow||{});return{ariaModal:f,arrowStyle:d,contentAttrs:i,contentClass:s,contentStyle:l,contentZIndex:u,updateZIndex:()=>{u.value=Ge(e.zIndex)?e.zIndex:r()}}},Er=(e,t)=>{const o=j(!1),n=j();return{focusStartRef:n,trapped:o,onFocusAfterReleased:l=>{var f;((f=l.detail)==null?void 0:f.focusReason)!=="pointer"&&(n.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:l=>{e.visible&&!o.value&&(l.target&&(n.value=l.target),o.value=!0)},onFocusoutPrevented:l=>{e.trapping||(l.detail.focusReason==="pointer"&&l.preventDefault(),o.value=!1)},onReleaseRequested:()=>{o.value=!1,t("close")}}},Cr=L({name:"ElPopperContent"}),Rr=L({...Cr,props:io,emits:gr,setup(e,{expose:t,emit:o}){const n=e,{focusStartRef:r,trapped:a,onFocusAfterReleased:i,onFocusAfterTrapped:u,onFocusInTrap:s,onFocusoutPrevented:l,onReleaseRequested:f}=Er(n,o),{attributes:d,arrowRef:y,contentRef:g,styles:m,instanceRef:v,role:T,update:p}=Or(n),{ariaModal:w,arrowStyle:E,contentAttrs:h,contentClass:C,contentStyle:x,updateZIndex:O}=Tr(n,{styles:m,attributes:d,role:T}),R=se(bt,void 0),k=j();Ce(to,{arrowStyle:E,arrowRef:y,arrowOffset:k}),R&&(R.addInputId||R.removeInputId)&&Ce(bt,{...R,addInputId:Ze,removeInputId:Ze});let P;const M=(S=!0)=>{p(),S&&O()},D=()=>{M(!1),n.visible&&n.focusOnShow?a.value=!0:n.visible===!1&&(a.value=!1)};return ze(()=>{_(()=>n.triggerTargetEl,(S,$)=>{P==null||P(),P=void 0;const F=c(S||g.value),B=c($||g.value);He(F)&&(P=_([T,()=>n.ariaLabel,w,()=>n.id],b=>{["role","aria-label","aria-modal","id"].forEach((N,V)=>{Lt(b[V])?F.removeAttribute(N):F.setAttribute(N,b[V])})},{immediate:!0})),B!==F&&He(B)&&["role","aria-label","aria-modal","id"].forEach(b=>{B.removeAttribute(b)})},{immediate:!0}),_(()=>n.visible,D,{immediate:!0})}),Se(()=>{P==null||P(),P=void 0}),t({popperContentRef:g,popperInstanceRef:v,updatePopper:M,contentStyle:x}),(S,$)=>(Z(),Ne("div",Xe({ref_key:"contentRef",ref:g},c(h),{style:c(x),class:c(C),tabindex:"-1",onMouseenter:$[0]||($[0]=F=>S.$emit("mouseenter",F)),onMouseleave:$[1]||($[1]=F=>S.$emit("mouseleave",F))}),[Re(c(Ho),{trapped:c(a),"trap-on-focus-in":!0,"focus-trap-el":c(g),"focus-start-el":c(r),onFocusAfterTrapped:c(u),onFocusAfterReleased:c(i),onFocusin:c(s),onFocusoutPrevented:c(l),onReleaseRequested:c(f)},{default:te(()=>[ie(S.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}});var Ar=le(Rr,[["__file","content.vue"]]);const xr=_t(rr),lt=Symbol("elTooltip"),so=ee({...Xn,...io,appendTo:{type:I([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,visible:{type:I(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean,...$t(["ariaLabel"])}),lo=ee({...ao,disabled:Boolean,trigger:{type:I([String,Array]),default:"hover"},triggerKeys:{type:I(Array),default:()=>[wt.enter,wt.space]}}),{useModelToggleProps:Pr,useModelToggleEmits:Sr,useModelToggle:Mr}=Ht("visible"),Ir=ee({...oo,...Pr,...so,...lo,...no,showArrow:{type:Boolean,default:!0}}),Br=[...Sr,"before-show","before-hide","show","hide","open","close"],kr=(e,t)=>xo(e)?e.includes(t):e===t,pe=(e,t,o)=>n=>{kr(c(e),t)&&o(n)},jr=L({name:"ElTooltipTrigger"}),Fr=L({...jr,props:lo,setup(e,{expose:t}){const o=e,n=Me("tooltip"),{controlled:r,id:a,open:i,onOpen:u,onClose:s,onToggle:l}=se(lt,void 0),f=j(null),d=()=>{if(c(r)||o.disabled)return!0},y=we(o,"trigger"),g=Y(d,pe(y,"hover",u)),m=Y(d,pe(y,"hover",s)),v=Y(d,pe(y,"click",h=>{h.button===0&&l(h)})),T=Y(d,pe(y,"focus",u)),p=Y(d,pe(y,"focus",s)),w=Y(d,pe(y,"contextmenu",h=>{h.preventDefault(),l(h)})),E=Y(d,h=>{const{code:C}=h;o.triggerKeys.includes(C)&&(h.preventDefault(),l(h))});return t({triggerRef:f}),(h,C)=>(Z(),ce(c(fr),{id:c(a),"virtual-ref":h.virtualRef,open:c(i),"virtual-triggering":h.virtualTriggering,class:kt(c(n).e("trigger")),onBlur:c(p),onClick:c(v),onContextmenu:c(w),onFocus:c(T),onMouseenter:c(g),onMouseleave:c(m),onKeydown:c(E)},{default:te(()=>[ie(h.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var _r=le(Fr,[["__file","trigger.vue"]]);const Dr=L({name:"ElTooltipContent",inheritAttrs:!1}),Lr=L({...Dr,props:so,setup(e,{expose:t}){const o=e,{selector:n}=Qt(),r=Me("tooltip"),a=j(null),i=j(!1),{controlled:u,id:s,open:l,trigger:f,onClose:d,onOpen:y,onShow:g,onHide:m,onBeforeShow:v,onBeforeHide:T}=se(lt,void 0),p=A(()=>o.transition||`${r.namespace.value}-fade-in-linear`),w=A(()=>o.persistent);Se(()=>{i.value=!0});const E=A(()=>c(w)?!0:c(l)),h=A(()=>o.disabled?!1:c(l)),C=A(()=>o.appendTo||n.value),x=A(()=>{var b;return(b=o.style)!=null?b:{}}),O=A(()=>!c(l)),R=()=>{m()},k=()=>{if(c(u))return!0},P=Y(k,()=>{o.enterable&&c(f)==="hover"&&y()}),M=Y(k,()=>{c(f)==="hover"&&d()}),D=()=>{var b,N;(N=(b=a.value)==null?void 0:b.updatePopper)==null||N.call(b),v==null||v()},S=()=>{T==null||T()},$=()=>{g(),B=$o(A(()=>{var b;return(b=a.value)==null?void 0:b.popperContentRef}),()=>{if(c(u))return;c(f)!=="hover"&&d()})},F=()=>{o.virtualTriggering||d()};let B;return _(()=>c(l),b=>{b||B==null||B()},{flush:"post"}),_(()=>o.content,()=>{var b,N;(N=(b=a.value)==null?void 0:b.updatePopper)==null||N.call(b)}),t({contentRef:a}),(b,N)=>(Z(),ce(Mo,{disabled:!b.teleported,to:c(C)},[Re(So,{name:c(p),onAfterLeave:R,onBeforeEnter:D,onAfterEnter:$,onBeforeLeave:S},{default:te(()=>[c(E)?jt((Z(),ce(c(Ar),Xe({key:0,id:c(s),ref_key:"contentRef",ref:a},b.$attrs,{"aria-label":b.ariaLabel,"aria-hidden":c(O),"boundaries-padding":b.boundariesPadding,"fallback-placements":b.fallbackPlacements,"gpu-acceleration":b.gpuAcceleration,offset:b.offset,placement:b.placement,"popper-options":b.popperOptions,strategy:b.strategy,effect:b.effect,enterable:b.enterable,pure:b.pure,"popper-class":b.popperClass,"popper-style":[b.popperStyle,c(x)],"reference-el":b.referenceEl,"trigger-target-el":b.triggerTargetEl,visible:c(h),"z-index":b.zIndex,onMouseenter:c(P),onMouseleave:c(M),onBlur:F,onClose:c(d)}),{default:te(()=>[i.value?Ae("v-if",!0):ie(b.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[Po,c(h)]]):Ae("v-if",!0)]),_:3},8,["name"])],8,["disabled","to"]))}});var $r=le(Lr,[["__file","content.vue"]]);const Nr=["innerHTML"],Hr={key:1},Wr=L({name:"ElTooltip"}),zr=L({...Wr,props:Ir,emits:Br,setup(e,{expose:t,emit:o}){const n=e;Jn();const r=Lo(),a=j(),i=j(),u=()=>{var p;const w=c(a);w&&((p=w.popperInstanceRef)==null||p.update())},s=j(!1),l=j(),{show:f,hide:d,hasUpdateHandler:y}=Mr({indicator:s,toggleReason:l}),{onOpen:g,onClose:m}=Yn({showAfter:we(n,"showAfter"),hideAfter:we(n,"hideAfter"),autoClose:we(n,"autoClose"),open:f,close:d}),v=A(()=>Dt(n.visible)&&!y.value);Ce(lt,{controlled:v,id:r,open:Io(s),trigger:we(n,"trigger"),onOpen:p=>{g(p)},onClose:p=>{m(p)},onToggle:p=>{c(s)?m(p):g(p)},onShow:()=>{o("show",l.value)},onHide:()=>{o("hide",l.value)},onBeforeShow:()=>{o("before-show",l.value)},onBeforeHide:()=>{o("before-hide",l.value)},updatePopper:u}),_(()=>n.disabled,p=>{p&&s.value&&(s.value=!1)});const T=p=>{var w,E;const h=(E=(w=i.value)==null?void 0:w.contentRef)==null?void 0:E.popperContentRef,C=(p==null?void 0:p.relatedTarget)||document.activeElement;return h&&h.contains(C)};return Bo(()=>s.value&&d()),t({popperRef:a,contentRef:i,isFocusInsideContent:T,updatePopper:u,onOpen:g,onClose:m,hide:d}),(p,w)=>(Z(),ce(c(xr),{ref_key:"popperRef",ref:a,role:p.role},{default:te(()=>[Re(_r,{disabled:p.disabled,trigger:p.trigger,"trigger-keys":p.triggerKeys,"virtual-ref":p.virtualRef,"virtual-triggering":p.virtualTriggering},{default:te(()=>[p.$slots.default?ie(p.$slots,"default",{key:0}):Ae("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Re($r,{ref_key:"contentRef",ref:i,"aria-label":p.ariaLabel,"boundaries-padding":p.boundariesPadding,content:p.content,disabled:p.disabled,effect:p.effect,enterable:p.enterable,"fallback-placements":p.fallbackPlacements,"hide-after":p.hideAfter,"gpu-acceleration":p.gpuAcceleration,offset:p.offset,persistent:p.persistent,"popper-class":p.popperClass,"popper-style":p.popperStyle,placement:p.placement,"popper-options":p.popperOptions,pure:p.pure,"raw-content":p.rawContent,"reference-el":p.referenceEl,"trigger-target-el":p.triggerTargetEl,"show-after":p.showAfter,strategy:p.strategy,teleported:p.teleported,transition:p.transition,"virtual-triggering":p.virtualTriggering,"z-index":p.zIndex,"append-to":p.appendTo},{default:te(()=>[ie(p.$slots,"content",{},()=>[p.rawContent?(Z(),Ne("span",{key:0,innerHTML:p.content},null,8,Nr)):(Z(),Ne("span",Hr,ko(p.content),1))]),p.showArrow?(Z(),ce(c(sr),{key:0,"arrow-offset":p.arrowOffset},null,8,["arrow-offset"])):Ae("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var qr=le(zr,[["__file","tooltip.vue"]]);const ea=_t(qr);export{ea as E,ur as O,Qe as a,lo as b,Y as c,Qr as d,Yr as e,so as u,Xr as w};
