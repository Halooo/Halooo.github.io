import{u as c,n as l}from"./CwFcZstm.js";import{l as i}from"./N8ynluon.js";import{d,F as u,I as _,J as t}from"./CCRDBSiD.js";const r={class:"w-135 bg-black p-16 space-y-16 fade_scale"},m=t("div",{class:"space-y-4"},[t("p",{class:"font-medium text-5xl PPHattonMedium"},"Log Out"),t("div",{class:"font-light text-lg PolySansNeutral"},"Do you want to log out of your account?")],-1),p=t("div",null,"Log out",-1),g=[p],f=t("div",null,"Cancel",-1),v=[f],L=d({__name:"LogOut",emits:["update:model-value"],setup(h,{emit:o}){const s=c(),e=o,a=()=>{e("update:model-value","")},n=async()=>{await i(),s.clearUserInfo(),l("/account/logIn")};return(x,y)=>(u(),_("div",r,[m,t("div",{class:"space-x-5 flex"},[t("div",{class:"btn gradient-btn",onClick:n},g),t("div",{class:"btn",onClick:a},v)])]))}});export{L as _};
