import{I as U}from"./index.c9a54be7.js";import{F as w,u as $}from"./provide.49cd7fc4.js";import{R as M}from"./index.13155186.js";import{a as T}from"./components.8b8d5d8f.js";import{t as f}from"./elements.364c0c9c.js";import{t as c}from"./shared.def6a7f6.js";import{_ as W}from"./elevation.37915be7.js";import{q,z as A,d as N,e as E,o as v,c as h,a as L,F as P,j as X,w as G,n as R,m as H,h as j}from"./vendor.17911535.js";const J={modelValue:{type:[String,Number],default:0},count:{type:[String,Number],default:5},color:{type:String},icon:{type:String,default:"star"},emptyColor:{type:String},emptyIcon:{type:String,default:"star-outline"},size:{type:[String,Number],default:"24"},gap:{type:[String,Number],default:"2"},half:{type:Boolean,default:!1},halfIcon:{type:String,default:"star-half-full"},disabled:{type:Boolean,default:!1},disabledColor:{type:String},readonly:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const K=q({name:"VarRate",components:{VarIcon:U,VarFormDetails:w},directives:{Ripple:M},props:J,setup(e){const{form:t,bindForm:u}=$(),{errorMessage:y,validateWithTrigger:_,validate:C,resetValidation:i}=T(),p=a=>{const{count:o,size:r,gap:l}=e;return{color:d(a).color,marginRight:a!==c(o)?f(l):0,width:f(r),height:f(r),borderRadius:"50%"}},g=a=>{const{type:o,color:r}=d(a);return{"var-rate__content":!0,"var-rate--disabled":t==null?void 0:t.disabled.value,"var-rate--error":y.value,"var-rate--primary":o!=="empty"&&!r}},s=a=>{const{type:o}=d(a),{icon:r,halfIcon:l,emptyIcon:n}=e;return o==="full"?r:o==="half"?l:n},d=a=>{const{modelValue:o,disabled:r,disabledColor:l,color:n,half:F,emptyColor:D}=e;let m;return r||(t==null?void 0:t.disabled.value)?m=l:n&&(m=n),a<=c(o)?{type:"full",score:a,color:m}:F&&a<=c(o)+.5?{type:"half",score:a,color:m}:{type:"empty",score:a,color:r||(t==null?void 0:t.disabled.value)?l:D}},z=(a,o)=>{var r;if(e.half){const{offsetWidth:l}=o.target;o.offsetX<=Math.floor(l/2)&&(a-=.5)}(r=e["onUpdate:modelValue"])==null||r.call(e,a)},S=()=>C(e.rules,c(e.modelValue)),I=()=>A(()=>_(["onChange"],"onChange",e.rules,e.modelValue)),k=(a,o)=>{const{readonly:r,disabled:l,onChange:n}=e;r||l||(t==null?void 0:t.disabled.value)||(t==null?void 0:t.readonly.value)||(z(a,o),n==null||n(a),I())},V=()=>{var a;(a=e["onUpdate:modelValue"])==null||a.call(e,0),i()},B={reset:V,validate:S,resetValidation:i};return u==null||u(B),{errorMessage:y,formDisabled:t==null?void 0:t.disabled,formReadonly:t==null?void 0:t.readonly,getStyle:p,getClass:g,getIconName:s,handleClick:k,reset:V,validate:S,resetValidation:i,toSizeUnit:f,toNumber:c}}}),O={class:"var-rate__warp"},Q={class:"var-rate"},Y=["onClick"];function Z(e,t,u,y,_,C){const i=N("var-icon"),p=N("var-form-details"),g=E("ripple");return v(),h("div",O,[L("div",Q,[(v(!0),h(P,null,X(e.toNumber(e.count),s=>G((v(),h("div",{key:s,style:R(e.getStyle(s)),class:H(e.getClass(s)),onClick:d=>e.handleClick(s,d)},[j(i,{transition:0,name:e.getIconName(s),style:R({fontSize:e.toSizeUnit(e.size)})},null,8,["name","style"])],14,Y)),[[g,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]])),128))]),j(p,{"error-message":e.errorMessage},null,8,["error-message"])])}var b=W(K,[["render",Z]]);b.install=function(e){e.component(b.name,b)};export{b as R};