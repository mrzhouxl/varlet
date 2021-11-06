var j=Object.defineProperty,U=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var w=(a,o,l)=>o in a?j(a,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[o]=l,h=(a,o)=>{for(var l in o||(o={}))D.call(o,l)&&w(a,l,o[l]);if(B)for(var l of B(o))S.call(o,l)&&w(a,l,o[l]);return a},b=(a,o)=>U(a,A(o));import{D as m}from"./index.f6da5c4a.js";import{B as F}from"./index.cb664e01.js";import{I as x}from"./index.7850413d.js";import{S as f}from"./index.faf55234.js";import{C as T}from"./index.67d1058a.js";import{A as N}from"./AppType.eb8ea594.js";import{u as I,a as _,_ as V,b as z,c as M,w as P}from"./en-US.64d12132.js";import{_ as H}from"./elevation.7f6c0241.js";import{p as L,Z as R,d as C,o as W,c as Z,h as s,w as n,F as q,l as t,t as i}from"./vendor.ea41cd30.js";import"./index.22a59adc.js";import"./lock.67e58c2a.js";import"./index.510439cf.js";import"./zIndex.c624737f.js";import"./components.c996eb06.js";import"./shared.2d2ec151.js";import"./index.931337ba.js";import"./index.96dbf528.js";import"./elements.227b31a2.js";var G={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",hideButton:"\u9690\u85CF\u6309\u94AE",handleUserBehavior:"\u5904\u7406\u7528\u6237\u884C\u4E3A",asyncClose:"\u5F02\u6B65\u5173\u95ED",componentCall:"\u7EC4\u4EF6\u8C03\u7528",title:"\u5170\u4EAD\u5E8F",message:"\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34",customSlots:"\u81EA\u5B9A\u4E49\u63D2\u69FD",asyncCloseProgress:"\u6B63\u5728\u5F02\u6B65\u5173\u95ED"},J={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",hideButton:"Hide Button",handleUserBehavior:"Handle User Behavior",asyncClose:"Asynchronous closing",componentCall:"Component Call",title:"Beat It",message:"Don't Wanna See No Blood, Don't Be A Macho Man",customSlots:"Custom Slots",asyncCloseProgress:"Asynchronous shutdown in progress"};const{add:E,use:K,pack:u,packs:yo,merge:vo}=I(),O=a=>{M(a),K(a)};_("zh-CN",V);_("en-US",z);E("zh-CN",G);E("en-US",J);const Q={name:"DialogExample",components:{VarDialog:m.Component,VarButton:F,VarIcon:x,VarCell:T,AppType:N},setup(){const a=L({show:!1,show1:!1,show2:!1,value:""}),o={confirm:()=>f.success("confirm"),cancel:()=>f.error("cancel"),close:()=>f.info("close")},l=()=>m({message:u.value.message}),e=async()=>o[await m(u.value.message)](),y=()=>{m({title:u.value.title,message:u.value.message})},v=()=>{m({message:u.value.message,confirmButton:!1,cancelButton:!1})},d=(p,k)=>{f.loading(u.value.asyncCloseProgress),setTimeout(()=>{o[p](),k()},1e3)},r=()=>{m({message:u.value.message,onBeforeClose:d})};return P(O),b(h({pack:u},R(a)),{asyncClose:r,createBasic:l,createAction:e,modifyTitle:y,hideButton:v,onBeforeClose:d,Snackbar:f})}};function X(a,o,l,e,y,v){const d=C("app-type"),r=C("var-button"),p=C("var-dialog"),k=C("var-icon"),g=C("var-cell");return W(),Z(q,null,[s(d,null,{default:n(()=>[t(i(e.pack.functionCall),1)]),_:1}),s(r,{type:"primary",block:"",onClick:e.createBasic},{default:n(()=>[t(i(e.pack.basicUsage),1)]),_:1},8,["onClick"]),s(r,{type:"primary",block:"",onClick:e.modifyTitle},{default:n(()=>[t(i(e.pack.modifyTitle),1)]),_:1},8,["onClick"]),s(r,{type:"primary",block:"",onClick:e.hideButton},{default:n(()=>[t(i(e.pack.hideButton),1)]),_:1},8,["onClick"]),s(r,{type:"primary",block:"",onClick:e.createAction},{default:n(()=>[t(i(e.pack.handleUserBehavior),1)]),_:1},8,["onClick"]),s(r,{type:"primary",block:"",onClick:e.asyncClose},{default:n(()=>[t(i(e.pack.asyncClose),1)]),_:1},8,["onClick"]),s(d,null,{default:n(()=>[t(i(e.pack.componentCall),1)]),_:1}),s(r,{type:"warning",block:"",onClick:o[0]||(o[0]=c=>a.show=!0)},{default:n(()=>[t(i(e.pack.basicUsage),1)]),_:1}),s(p,{show:a.show,"onUpdate:show":o[1]||(o[1]=c=>a.show=c),title:e.pack.title,message:e.pack.message,onConfirm:o[2]||(o[2]=()=>e.Snackbar.success("confirm")),onCancel:o[3]||(o[3]=()=>e.Snackbar.error("cancel")),onClosed:o[4]||(o[4]=()=>e.Snackbar.info("closed"))},null,8,["show","title","message"]),s(r,{type:"warning",block:"",onClick:o[5]||(o[5]=c=>a.show1=!0)},{default:n(()=>[t(i(e.pack.asyncClose),1)]),_:1}),s(p,{show:a.show1,"onUpdate:show":o[6]||(o[6]=c=>a.show1=c),title:e.pack.title,message:e.pack.message,onBeforeClose:e.onBeforeClose},null,8,["show","title","message","onBeforeClose"]),s(r,{type:"warning",block:"",onClick:o[7]||(o[7]=c=>a.show2=!0)},{default:n(()=>[t(i(e.pack.customSlots),1)]),_:1}),s(p,{show:a.show2,"onUpdate:show":o[8]||(o[8]=c=>a.show2=c)},{title:n(()=>[s(k,{name:"information",color:"#2979ff"})]),default:n(()=>[s(g,null,{default:n(()=>[t(i(e.pack.message),1)]),_:1}),s(g,null,{default:n(()=>[t(i(e.pack.message),1)]),_:1}),s(g,null,{default:n(()=>[t(i(e.pack.message),1)]),_:1})]),_:1},8,["show"])],64)}var Bo=H(Q,[["render",X],["__scopeId","data-v-65185fda"]]);export{Bo as default};