import{E as b}from"./z8NNEHSl.js";import{E as w,a as y}from"./4_XzfzWY.js";import{u as V,_ as k,n as m}from"./CwFcZstm.js";import"./DVvrfKR8.js";import{u as E}from"./BSQIj-Lg.js";import{V as P}from"./DqzbFe6Q.js";import{a as x}from"./N8ynluon.js";import{d as F,a as h,r as c,F as C,I as N,R as n,H as i,J as t,_ as T,u as o}from"./CCRDBSiD.js";import"./BxtoV3vY.js";import"./CQxnt44T.js";import"./ChQoo9XU.js";import"./HEVJa2N9.js";import"./DEPnQl9_.js";import"./D33S9czM.js";import"./CFrsTQMq.js";const I={class:"w-full relative"},U={class:"w-135 bg-black fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 space-y-16 z-20"},q={class:"space-y-6"},B=t("p",{class:"font-medium text-5xl PPHattonMedium"},"Log In",-1),M={class:"font-light text-lg PolySansNeutral"},R=t("br",null,null,-1),$=t("div",null,"Continue",-1),H=[$],oe=F({__name:"logIn",setup(L){const u=h(),d=V(),f=c({email:[{required:!0,message:"Please enter the email",trigger:"blur"},{validator:(s,e,a)=>{if(!E(e))a(new Error("Please enter a valid email address."));else return!0},trigger:"blur"}],password:[{required:!0,message:"Cannot be empty",trigger:"blur"},{min:6,message:"Your password must be at least 6 characters long",trigger:"blur"}]}),r=c({email:"",password:""}),_=async s=>{if(!s)return;await P(s);const e=await x(r.email,r.password),{userinfo:a}=e.data;d.setToken(a.token),d.setUserInfo(a),m("/user/proposal")};return(s,e)=>{const a=b,p=w,g=y,v=k;return C(),N("div",null,[n(v,{name:"custom"},{default:i(()=>[t("div",I,[t("div",U,[t("div",q,[B,t("div",M,[T(" Not a member yet? "),R,t("span",{class:"cursor-pointer underline underline-offset-4",onClick:e[0]||(e[0]=l=>("navigateTo"in s?s.navigateTo:o(m))("/start/applicaiton"))}," Apply to become a star")])]),n(g,{ref_key:"ruleFormRef",ref:u,class:"w-full",model:o(r),rules:o(f),"require-asterisk-position":"right","label-position":"top"},{default:i(()=>[n(p,{label:"Email",prop:"email"},{default:i(()=>[n(a,{modelValue:o(r).email,"onUpdate:modelValue":e[1]||(e[1]=l=>o(r).email=l),modelModifiers:{trim:!0},placeholder:"",clearable:""},null,8,["modelValue"])]),_:1}),n(p,{label:"Password",prop:"password"},{default:i(()=>[n(a,{modelValue:o(r).password,"onUpdate:modelValue":e[2]||(e[2]=l=>o(r).password=l),modelModifiers:{trim:!0},placeholder:"",clearable:"",type:"password"},null,8,["modelValue"])]),_:1}),t("div",{class:"underline underline-offset-4 font-light text-lg PolySansNeutral cursor-pointer",onClick:e[3]||(e[3]=l=>("navigateTo"in s?s.navigateTo:o(m))("/account/forgotPassword"))},"Forgot Password")]),_:1},8,["model","rules"]),t("div",{class:"btn gradient-btn mt-10",onClick:e[4]||(e[4]=l=>_(o(u)))},H)])])]),_:1})])}}});export{oe as default};
