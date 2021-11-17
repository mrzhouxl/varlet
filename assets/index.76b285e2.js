import{F as q,u as Q}from"./provide.49cd7fc4.js";import{I as G}from"./index.c9a54be7.js";import{c as f}from"./shared.def6a7f6.js";import{a as H}from"./components.8b8d5d8f.js";import{_ as J}from"./elevation.37915be7.js";import{q as K,r as b,Q as L,b as O,d as D,o as d,c as C,a as s,m as t,B as M,f as F,k as $,n as h,I as X,t as Y,h as Z,z as _}from"./vendor.17911535.js";function x(e){return["text","password","number"].includes(e)}const ee={modelValue:{type:String},type:{type:String,default:"text",validator:x},textarea:{type:Boolean,default:!1},rows:{type:[String,Number],default:8},placeholder:{type:String},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},validateTrigger:{type:Array,default:()=>["onInput","onClear"]},rules:{type:Array},onFocus:{type:Function},onBlur:{type:Function},onClick:{type:Function},onClear:{type:Function},onInput:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const ae=K({name:"VarInput",components:{VarIcon:G,VarFormDetails:q},props:ee,setup(e){const v=b(`var-input-${L().uid}`),c=b(null),u=b(!1),B=O(()=>{const{maxlength:a,modelValue:n}=e;return a?f(n)?`0 / ${a}`:`${String(n).length}/${a}`:""}),{bindForm:m,form:l}=Q(),{errorMessage:y,validateWithTrigger:g,validate:w,resetValidation:p}=H(),i=a=>{_(()=>{const{validateTrigger:n,rules:o,modelValue:r}=e;g(n,a,o,r)})},z=()=>{const{hint:a,modelValue:n}=e;if(!a&&!f(n))return"var-input--placeholder-hidden";if(a&&(!f(n)||u.value))return"var-input--placeholder-hint"},T=a=>{var n;u.value=!0,(n=e.onFocus)==null||n.call(e,a),i("onFocus")},j=a=>{var n;u.value=!1,(n=e.onBlur)==null||n.call(e,a),i("onBlur")},N=a=>{var o,r;const{value:n}=a.target;(o=e["onUpdate:modelValue"])==null||o.call(e,n),(r=e.onInput)==null||r.call(e,n,a),i("onInput")},U=a=>{var o;const{value:n}=a.target;(o=e.onChange)==null||o.call(e,n,a),i("onChange")},E=()=>{var S;const{disabled:a,readonly:n,clearable:o,onClear:r}=e;(l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||a||n||!o||((S=e["onUpdate:modelValue"])==null||S.call(e,""),r==null||r(""),i("onClear"))},P=a=>{const{disabled:n,onClick:o}=e;(l==null?void 0:l.disabled.value)||n||(o==null||o(a),i("onClick"))},k=()=>{var a;(a=e["onUpdate:modelValue"])==null||a.call(e,""),p()},I=()=>w(e.rules,e.modelValue),A=()=>{c.value.focus()},R=()=>{c.value.blur()},W={reset:k,validate:I,resetValidation:p};return m==null||m(W),{el:c,id:v,isFocus:u,errorMessage:y,maxlengthText:B,formDisabled:l==null?void 0:l.disabled,formReadonly:l==null?void 0:l.readonly,isEmpty:f,computePlaceholderState:z,handleFocus:T,handleBlur:j,handleInput:N,handleChange:U,handleClear:E,handleClick:P,validate:I,resetValidation:p,reset:k,focus:A,blur:R}}}),ne={key:0,class:"var-input__autocomplete"},le=["for"];function oe(e,v,c,u,B,m){const l=D("var-icon"),y=D("var-form-details");return d(),C("div",{class:t(["var-input var--box",[e.disabled?"var-input--disabled":null]]),onClick:v[0]||(v[0]=(...g)=>e.handleClick&&e.handleClick(...g))},[s("div",{class:t(["var-input__controller",[e.isFocus?"var-input--focus":null,e.errorMessage?"var-input--error":null,e.formDisabled||e.disabled?"var-input--disabled":null]]),style:h({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},[s("div",{class:t(["var-input__icon",[e.hint?null:"var-input--non-hint"]])},[M(e.$slots,"prepend-icon")],2),s("div",{class:t(["var-input__wrap",[e.hint?null:"var-input--non-hint"]])},[e.type==="password"?(d(),C("input",ne)):F("v-if",!0),(d(),$(X(e.textarea?"textarea":"input"),{class:t(["var-input__input",[e.formDisabled||e.disabled?"var-input--disabled":null,e.textarea?"var-input--textarea":null,e.errorMessage?"var-input--caret-error":null]]),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,rows:e.rows,style:h({color:e.textColor,caretColor:e.errorMessage?null:e.focusColor,resize:e.resize?"vertical":"none"}),onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.handleInput,onChange:e.handleChange},null,8,["id","disabled","type","value","maxlength","rows","class","style","onFocus","onBlur","onInput","onChange"])),s("label",{class:t([e.textarea?"var-input__textarea-placeholder":"var-input__placeholder",e.computePlaceholderState(),e.hint?null:"var-input--placeholder-non-hint"]),for:e.id},Y(e.placeholder),11,le)],2),s("div",{class:t(["var-input__icon",[e.hint?null:"var-input--non-hint"]])},[M(e.$slots,"append-icon",{},()=>[e.clearable&&!e.isEmpty(e.modelValue)?(d(),$(l,{key:0,class:"var-input__clear-icon","var-input-cover":"",name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["onClick"])):F("v-if",!0)])],2)],6),e.line?(d(),C("div",{key:0,class:t(["var-input__line",[e.formDisabled||e.disabled?"var-input--line-disabled":null,e.errorMessage?"var-input--line-error":null]]),style:h({background:e.errorMessage?void 0:e.blurColor})},[s("div",{class:t(["var-input__dot",[e.isFocus?"var-input--spread":null,e.formDisabled||e.disabled?"var-input--line-disabled":null,e.errorMessage?"var-input--line-error":null]]),style:h({background:e.errorMessage?void 0:e.focusColor})},null,6)],6)):F("v-if",!0),Z(y,{"error-message":e.errorMessage,"maxlength-text":e.maxlengthText},null,8,["error-message","maxlength-text"])],2)}var V=J(ae,[["render",oe]]);V.install=function(e){e.component(V.name,V)};export{V as I};