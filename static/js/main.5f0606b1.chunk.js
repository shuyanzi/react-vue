(this["webpackJsonpreact-app-demo"]=this["webpackJsonpreact-app-demo"]||[]).push([[0],{13:function(e,t,n){"use strict";(function(e){var o=n(58),r=n(0),l=n(11);n(167);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};function c(e,t){return e(t={exports:{}},t.exports),t.exports}var s=function(e){return e&&e.Math==Math&&e},f=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof u&&u)||function(){return this}()||Function("return this")(),d=function(e){try{return!!e()}catch(t){return!0}},p=!d((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),m={}.propertyIsEnumerable,b=Object.getOwnPropertyDescriptor,v={f:b&&!m.call({1:2},1)?function(e){var t=b(this,e);return!!t&&t.enumerable}:m},h=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},g={}.toString,y=function(e){return g.call(e).slice(8,-1)},j="".split,O=d((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==y(e)?j.call(e,""):Object(e)}:Object,w=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e},x=function(e){return O(w(e))},S=function(e){return"object"===typeof e?null!==e:"function"===typeof e},k=function(e,t){if(!S(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!S(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!S(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!S(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")},P={}.hasOwnProperty,C=function(e,t){return P.call(e,t)},T=f.document,z=S(T)&&S(T.createElement),E=function(e){return z?T.createElement(e):{}},V=!p&&!d((function(){return 7!=Object.defineProperty(E("div"),"a",{get:function(){return 7}}).a})),N=Object.getOwnPropertyDescriptor,I={f:p?N:function(e,t){if(e=x(e),t=k(t,!0),V)try{return N(e,t)}catch(n){}if(C(e,t))return h(!v.f.call(e,t),e[t])}},L=function(e){if(!S(e))throw TypeError(String(e)+" is not an object");return e},D=Object.defineProperty,M={f:p?D:function(e,t,n){if(L(e),t=k(t,!0),L(n),V)try{return D(e,t,n)}catch(o){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},A=p?function(e,t,n){return M.f(e,t,h(1,n))}:function(e,t,n){return e[t]=n,e},K=function(e,t){try{A(f,e,t)}catch(n){f[e]=t}return t},R="__core-js_shared__",F=f[R]||K(R,{}),B=Function.toString;"function"!=typeof F.inspectSource&&(F.inspectSource=function(e){return B.call(e)});var q,_,J,W=F.inspectSource,U=f.WeakMap,G="function"===typeof U&&/native code/.test(W(U)),H=c((function(e){(e.exports=function(e,t){return F[e]||(F[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.8.3",mode:"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})})),$=0,Y=Math.random(),X=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++$+Y).toString(36)},Q=H("keys"),Z=function(e){return Q[e]||(Q[e]=X(e))},ee={},te=f.WeakMap;if(G){var ne=F.state||(F.state=new te),oe=ne.get,re=ne.has,le=ne.set;q=function(e,t){return t.facade=e,le.call(ne,e,t),t},_=function(e){return oe.call(ne,e)||{}},J=function(e){return re.call(ne,e)}}else{var ie=Z("state");ee[ie]=!0,q=function(e,t){return t.facade=e,A(e,ie,t),t},_=function(e){return C(e,ie)?e[ie]:{}},J=function(e){return C(e,ie)}}var ae,ue,ce={set:q,get:_,has:J,enforce:function(e){return J(e)?_(e):q(e,{})},getterFor:function(e){return function(t){var n;if(!S(t)||(n=_(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},se=c((function(e){var t=ce.get,n=ce.enforce,o=String(String).split("String");(e.exports=function(e,t,r,l){var i,a=!!l&&!!l.unsafe,u=!!l&&!!l.enumerable,c=!!l&&!!l.noTargetGet;"function"==typeof r&&("string"!=typeof t||C(r,"name")||A(r,"name",t),(i=n(r)).source||(i.source=o.join("string"==typeof t?t:""))),e!==f?(a?!c&&e[t]&&(u=!0):delete e[t],u?e[t]=r:A(e,t,r)):u?e[t]=r:K(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||W(this)}))})),fe=f,de=function(e){return"function"==typeof e?e:void 0},pe=function(e,t){return arguments.length<2?de(fe[e])||de(f[e]):fe[e]&&fe[e][t]||f[e]&&f[e][t]},me=Math.ceil,be=Math.floor,ve=function(e){return isNaN(e=+e)?0:(e>0?be:me)(e)},he=Math.min,ge=function(e){return e>0?he(ve(e),9007199254740991):0},ye=Math.max,je=Math.min,Oe=function(e,t){var n=ve(e);return n<0?ye(n+t,0):je(n,t)},we=function(e){return function(t,n,o){var r,l=x(t),i=ge(l.length),a=Oe(o,i);if(e&&n!=n){for(;i>a;)if((r=l[a++])!=r)return!0}else for(;i>a;a++)if((e||a in l)&&l[a]===n)return e||a||0;return!e&&-1}},xe={includes:we(!0),indexOf:we(!1)}.indexOf,Se=function(e,t){var n,o=x(e),r=0,l=[];for(n in o)!C(ee,n)&&C(o,n)&&l.push(n);for(;t.length>r;)C(o,n=t[r++])&&(~xe(l,n)||l.push(n));return l},ke=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Pe=ke.concat("length","prototype"),Ce={f:Object.getOwnPropertyNames||function(e){return Se(e,Pe)}},Te={f:Object.getOwnPropertySymbols},ze=pe("Reflect","ownKeys")||function(e){var t=Ce.f(L(e)),n=Te.f;return n?t.concat(n(e)):t},Ee=function(e,t){for(var n=ze(t),o=M.f,r=I.f,l=0;l<n.length;l++){var i=n[l];C(e,i)||o(e,i,r(t,i))}},Ve=/#|\.prototype\./,Ne=function(e,t){var n=Le[Ie(e)];return n==Me||n!=De&&("function"==typeof t?d(t):!!t)},Ie=Ne.normalize=function(e){return String(e).replace(Ve,".").toLowerCase()},Le=Ne.data={},De=Ne.NATIVE="N",Me=Ne.POLYFILL="P",Ae=Ne,Ke=I.f,Re=function(e,t){var n,o,r,l,i,a=e.target,u=e.global,c=e.stat;if(n=u?f:c?f[a]||K(a,{}):(f[a]||{}).prototype)for(o in t){if(l=t[o],r=e.noTargetGet?(i=Ke(n,o))&&i.value:n[o],!Ae(u?o:a+(c?".":"#")+o,e.forced)&&void 0!==r){if(typeof l===typeof r)continue;Ee(l,r)}(e.sham||r&&r.sham)&&A(l,"sham",!0),se(n,o,l,e)}},Fe=Array.isArray||function(e){return"Array"==y(e)},Be=function(e){return Object(w(e))},qe=function(e,t,n){var o=k(t);o in e?M.f(e,o,h(0,n)):e[o]=n},_e=!!Object.getOwnPropertySymbols&&!d((function(){return!String(Symbol())})),Je=_e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,We=H("wks"),Ue=f.Symbol,Ge=Je?Ue:Ue&&Ue.withoutSetter||X,He=function(e){return C(We,e)||(_e&&C(Ue,e)?We[e]=Ue[e]:We[e]=Ge("Symbol."+e)),We[e]},$e=He("species"),Ye=function(e,t){var n;return Fe(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!Fe(n.prototype)?S(n)&&null===(n=n[$e])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)},Xe=pe("navigator","userAgent")||"",Qe=f.process,Ze=Qe&&Qe.versions,et=Ze&&Ze.v8;et?ue=(ae=et.split("."))[0]+ae[1]:Xe&&(!(ae=Xe.match(/Edge\/(\d+)/))||ae[1]>=74)&&(ae=Xe.match(/Chrome\/(\d+)/))&&(ue=ae[1]);var tt=ue&&+ue,nt=He("species"),ot=function(e){return tt>=51||!d((function(){var t=[];return(t.constructor={})[nt]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},rt=He("isConcatSpreadable"),lt=9007199254740991,it="Maximum allowed index exceeded",at=tt>=51||!d((function(){var e=[];return e[rt]=!1,e.concat()[0]!==e})),ut=ot("concat"),ct=function(e){if(!S(e))return!1;var t=e[rt];return void 0!==t?!!t:Fe(e)};Re({target:"Array",proto:!0,forced:!at||!ut},{concat:function(e){var t,n,o,r,l,i=Be(this),a=Ye(i,0),u=0;for(t=-1,o=arguments.length;t<o;t++)if(ct(l=-1===t?i:arguments[t])){if(u+(r=ge(l.length))>lt)throw TypeError(it);for(n=0;n<r;n++,u++)n in l&&qe(a,u,l[n])}else{if(u>=lt)throw TypeError(it);qe(a,u++,l)}return a.length=u,a}});var st=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},ft=[].push,dt=function(e){var t=1==e,n=2==e,o=3==e,r=4==e,l=6==e,i=7==e,a=5==e||l;return function(u,c,s,f){for(var d,p,m=Be(u),b=O(m),v=function(e,t,n){if(st(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}}(c,s,3),h=ge(b.length),g=0,y=f||Ye,j=t?y(u,h):n||i?y(u,0):void 0;h>g;g++)if((a||g in b)&&(p=v(d=b[g],g,m),e))if(t)j[g]=p;else if(p)switch(e){case 3:return!0;case 5:return d;case 6:return g;case 2:ft.call(j,d)}else switch(e){case 4:return!1;case 7:ft.call(j,d)}return l?-1:o||r?r:j}},pt={forEach:dt(0),map:dt(1),filter:dt(2),some:dt(3),every:dt(4),find:dt(5),findIndex:dt(6),filterOut:dt(7)},mt=function(e,t){var n=[][e];return!!n&&d((function(){n.call(null,t||function(){throw 1},1)}))},bt=Object.defineProperty,vt={},ht=function(e){throw e},gt=function(e,t){if(C(vt,e))return vt[e];t||(t={});var n=[][e],o=!!C(t,"ACCESSORS")&&t.ACCESSORS,r=C(t,0)?t[0]:ht,l=C(t,1)?t[1]:void 0;return vt[e]=!!n&&!d((function(){if(o&&!p)return!0;var e={length:-1};o?bt(e,1,{enumerable:!0,get:ht}):e[1]=1,n.call(e,r,l)}))},yt=pt.forEach,jt=mt("forEach"),Ot=gt("forEach"),wt=jt&&Ot?[].forEach:function(e){return yt(this,e,arguments.length>1?arguments[1]:void 0)};Re({target:"Array",proto:!0,forced:[].forEach!=wt},{forEach:wt});var xt=pt.map,St=ot("map"),kt=gt("map");Re({target:"Array",proto:!0,forced:!St||!kt},{map:function(e){return xt(this,e,arguments.length>1?arguments[1]:void 0)}});var Pt=Date.prototype,Ct="Invalid Date",Tt="toString",zt=Pt.toString,Et=Pt.getTime;new Date(NaN)+""!=Ct&&se(Pt,Tt,(function(){var e=Et.call(this);return e===e?zt.call(this):Ct}));var Vt={};Vt[He("toStringTag")]="z";var Nt="[object z]"===String(Vt),It=He("toStringTag"),Lt="Arguments"==y(function(){return arguments}()),Dt=Nt?y:function(e){var t,n,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),It))?n:Lt?y(t):"Object"==(o=y(t))&&"function"==typeof t.callee?"Arguments":o},Mt=Nt?{}.toString:function(){return"[object "+Dt(this)+"]"};Nt||se(Object.prototype,"toString",Mt,{unsafe:!0});var At=function(){var e=L(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},Kt="toString",Rt=RegExp.prototype,Ft=Rt.toString,Bt=d((function(){return"/a/b"!=Ft.call({source:"a",flags:"b"})})),qt=Ft.name!=Kt;(Bt||qt)&&se(RegExp.prototype,Kt,(function(){var e=L(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in Rt)?At.call(e):n)}),{unsafe:!0});for(var _t in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Jt=f[_t],Wt=Jt&&Jt.prototype;if(Wt&&Wt.forEach!==wt)try{A(Wt,"forEach",wt)}catch(Nn){Wt.forEach=wt}}var Ut=function(e){return function(t,n,o,r){st(n);var l=Be(t),i=O(l),a=ge(l.length),u=e?a-1:0,c=e?-1:1;if(o<2)for(;;){if(u in i){r=i[u],u+=c;break}if(u+=c,e?u<0:a<=u)throw TypeError("Reduce of empty array with no initial value")}for(;e?u>=0:a>u;u+=c)u in i&&(r=n(r,i[u],u,l));return r}},Gt={left:Ut(!1),right:Ut(!0)},Ht="process"==y(f.process),$t=Gt.left,Yt=mt("reduce"),Xt=gt("reduce",{1:0});Re({target:"Array",proto:!0,forced:!Yt||!Xt||!Ht&&tt>79&&tt<83},{reduce:function(e){return $t(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}});var Qt,Zt=Object.keys||function(e){return Se(e,ke)};function en(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Re({target:"Object",stat:!0,forced:d((function(){Zt(1)}))},{keys:function(e){return Zt(Be(e))}}),function(e){e.input="input",e.select="select",e.datepicker="datepicker"}(Qt||(Qt={}));var tn=Object(r.n)({props:{block:{type:Object,required:!0}},setup:function(e,t){var n=e.block,o=t.slots,l=null!==n&&void 0!==n&&n.model&&((null===n||void 0===n?void 0:n.model.modelValue)||(null===n||void 0===n?void 0:n.model.default))||null,i=n.label?{label:n.label,labelWidth:"120px"}:{labelWidth:"0"};return function(){var e,t;return Qt[n.componentKey]?Object(r.m)(Object(r.M)("el-form-item"),Object(r.t)({prop:l},i),"function"===typeof(t=e=o.default())||"[object Object]"===Object.prototype.toString.call(t)&&!Object(r.s)(t)?e:{default:function(){return[e]}}):o.default()}}});var nn,on=Object(r.n)({name:"FormBlock",props:{block:{type:Object,required:!0},config:{type:Object,required:!0},formData:{type:Object,required:!0},slots:{type:Object,required:!0},customProps:{type:Object},formDataChangeCb:{type:Function,required:!0}},setup:function(e){var t=Object(r.I)({}),n=Object(r.g)((function(){return["editor-block",{"editor-block-focus":e.block.focus}]})),o=Object(r.g)((function(){return{}}));return Object(r.A)((function(){var n=e.block;if(n.adjustPosition){var o=t.value,r=o.offsetWidth,l=o.offsetHeight;n.left=n.left-r/2,n.top=n.top-l/2,n.adjustPosition=!1}})),function(){var l,i,a,u,c,s,f,d,p=null===(l=e.config)||void 0===l?void 0:l.componentMap[e.block.componentKey],m=e.formData;null!==(i=e.block)&&void 0!==i&&i.slotName&&e.slots[e.block.slotName]?a=e.slots[e.block.slotName]():a=null===p||void 0===p?void 0:p.render({size:null!==(u=e.block)&&void 0!==u&&u.hasResize?{width:e.block.width,height:e.block.height}:{},props:(null===(c=e.block)||void 0===c?void 0:c.props)||{},model:Object.keys(p.model||{}).reduce((function(t,n){var o,r,l,i=null!==(o=e.block)&&void 0!==o&&o.model?null===(r=e.block)||void 0===r?void 0:r.model[n]:null;return t[n]=(en(l={},"default"===n?"modelValue":n,e.formData[i]),en(l,"default"===n?"onUpdate:modelValue":"onChange",(function(t){e.formDataChangeCb(i,{oldValue:m[i],newValue:t}),m[i]=t})),l),t}),{}),custom:null!==(s=e.block)&&void 0!==s&&s.slotName&&e.customProps&&e.customProps[null===(f=e.block)||void 0===f?void 0:f.slotName]||{}});return Object(r.m)("div",{class:n.value,style:o.value,ref:t},[Object(r.m)(tn,{block:e.block},(d=a,"function"===typeof d||"[object Object]"===Object.prototype.toString.call(d)&&!Object(r.s)(d)?a:{default:function(){return[a]}}))])}}});function rn(e){return{type:nn.input,label:e}}function ln(e,t){return{type:nn.select,label:e,options:t}}function an(e,t){return{type:nn.table,label:e,table:t}}function un(e,t){var n=Object(r.I)(e());return Object(r.Y)(e,(function(t){console.log("val getter:",e),t!==n.value&&(n.value=t)})),{get value(){return n.value},set value(e){n.value!==e&&(n.value=e,t(e))}}}!function(e){e.input="input",e.color="color",e.select="select",e.table="table"}(nn||(nn={}));Object(r.n)({props:{modelValue:{type:String}},emits:{"update:modelValue":function(e){return!0}},setup:function(e,t){var n=un((function(){return e.modelValue}),(function(e){return t.emit("update:modelValue",e)}));return function(){return Object(r.m)("div",null,[Object(r.l)("\u81ea\u5b9a\u4e49\u8f93\u5165\u6846"),Object(r.bb)(Object(r.m)("input",{type:"text","onUpdate:modelValue":function(e){return n.value=e}},null),[[r.W,n.value]])])}}});var cn=Object(r.n)({props:{start:{type:String},end:{type:String}},emits:{"update:start":function(e){return!0},"update:end":function(e){return!0}},setup:function(e,t){var n=un((function(){return e.start}),(function(e){return t.emit("update:start",e)})),o=un((function(){return e.start}),(function(e){return t.emit("update:end",e)}));return function(){return Object(r.m)("div",{class:"number-range"},[Object(r.m)("div",null,[Object(r.bb)(Object(r.m)("input",{type:"text","onUpdate:modelValue":function(e){return n.value=e}},null),[[r.W,n.value]])]),Object(r.m)("span",null,[Object(r.l)("~")]),Object(r.m)("div",null,[Object(r.bb)(Object(r.m)("input",{type:"text","onUpdate:modelValue":function(e){return o.value=e}},null),[[r.W,o.value]])])])}}});var sn,fn=l.b,dn=function(){var e=[],t={};return{componentList:e,componentMap:t,registry:function(n,o){var r=a(a({},o),{},{key:n});e.push(r),t[n]=r}}}();dn.registry("text",{label:"\u6587\u672c",preview:function(){return"\u9884\u89c8\u6587\u672c"},render:function(e){var t=e.props;return Object(r.m)("span",{style:{color:t.color,fontSize:t.size}},[t.text||"\u9ed8\u8ba4\u6587\u672c"])},props:{text:rn("\u663e\u793a\u6587\u672c"),color:(sn="\u5b57\u4f53\u989c\u8272",{type:nn.color,label:sn}),size:ln("\u5b57\u4f53\u5927\u5c0f",[{label:"14px",val:"14px"},{label:"18px",val:"18px"},{label:"24px",val:"24px"}])}}),dn.registry("button",{label:"button",preview:function(){return Object(r.m)(l.a,{size:"mini"},{default:function(){return[Object(r.l)("Button")]}})},render:function(e){var t=e.props,n=e.size,o=e.custom;return Object(r.m)(l.a,Object(r.t)(o,{type:t.type,size:t.size,style:{width:n.width?"".concat(n.width,"px"):void 0,height:n.height?"".concat(n.height,"px"):void 0}}),{default:function(){return[t.label||"button"]}})},resize:{width:!0,height:!0},props:{label:rn("button"),type:ln("\u6309\u94ae\u7c7b\u578b",[{label:"\u57fa\u7840",val:"primary"},{label:"\u6210\u529f",val:"success"},{label:"\u8b66\u544a",val:"warning"},{label:"\u5371\u9669",val:"danger"},{label:"\u63d0\u793a",val:"info"},{label:"\u6587\u672c",val:"text"}]),size:ln("\u6309\u94ae\u5927\u5c0f",[{label:"\u9ed8\u8ba4",val:""},{label:"\u4e2d\u7b49",val:"medium"},{label:"\u5c0f",val:"small"},{label:"\u6781\u5c0f",val:"mini"}])}}),dn.registry("number",{label:"number",preview:function(){return Object(r.m)(l.c,null,null)},render:function(e){var t=e.model,n=e.size,o=e.custom;return Object(r.m)(l.c,Object(r.t)(o,t.default,{style:{width:n.width?"".concat(n.width,"px"):void 0}}),null)},resize:{width:!0},model:{default:"\u7ed1\u5b9a\u5b57\u6bb5"},props:{size:ln("\u8f93\u5165\u6846\u5927\u5c0f",[{label:"\u9ed8\u8ba4",val:""},{label:"\u4e2d\u7b49",val:"medium"},{label:"\u5c0f",val:"small"},{label:"\u6781\u5c0f",val:"mini"}])}}),dn.registry(Qt.input,{label:"\u8f93\u5165\u6846",preview:function(){return Object(r.m)(fn,{modelValue:"",size:"small"},null)},render:function(e){var t=e.model,n=e.size,o=e.custom;return Object(r.m)(fn,Object(r.t)(o,t.default,{style:{width:n.width?"".concat(n.width,"px"):void 0}}),null)},resize:{width:!0},model:{default:"\u7ed1\u5b9a\u5b57\u6bb5"},props:{size:ln("\u8f93\u5165\u6846\u5927\u5c0f",[{label:"\u9ed8\u8ba4",val:""},{label:"\u4e2d\u7b49",val:"medium"},{label:"\u5c0f",val:"small"},{label:"\u6781\u5c0f",val:"mini"}])}}),dn.registry(Qt.select,{label:"\u4e0b\u62c9\u6846",preview:function(){return Object(r.m)(l.e,{size:"small"},null)},render:function(e){var t,n,o=e.props,i=e.model,a=e.custom;return Object(r.m)(l.e,Object(r.t)({key:Math.random()},a,i.default),"function"===typeof(n=t=(o.options||[]).map((function(e,t){return Object(r.m)(l.d,{label:e.label,value:e.value,key:t},null)})))||"[object Object]"===Object.prototype.toString.call(n)&&!Object(r.s)(n)?t:{default:function(){return[t]}})},props:{options:an("\u4e0b\u62c9\u9009\u9879",{options:[{label:"\u663e\u793a\u503c",field:"label"},{label:"\u7ed1\u5b9a\u503c",field:"value"},{label:"\u5907\u6ce8",field:"remark"}],showKey:"label"})},model:{default:"\u7ed1\u5b9a\u5b57\u6bb5"}}),dn.registry("number-range",{label:"\u6570\u5b57\u8303\u56f4\u8f93\u5165\u6846",resize:{width:!0},preview:function(){return Object(r.m)(cn,null,null)},render:function(e){var t=e.model,n=e.size;return Object(r.m)(cn,Object(r.t)({style:{width:n.width?"".concat(n.width,"px"):void 0}},{start:t.start.value,"update:start":t.start.onChange,end:t.end.value,"update:end":t.end.onChange}),null)},model:{start:"\u8d77\u59cb\u7ed1\u5b9a\u5b57\u6bb5",end:"\u7ed3\u675f\u7ed1\u5b9a\u5b57\u6bb5"}}),dn.registry("image",{label:"\u56fe\u7247",resize:{width:!0,height:!0},preview:function(){return Object(r.m)("div",{style:"text-align:center"},[Object(r.m)("div",{style:"font-size:20px;background-color:#f2f2f2;color:#ccc;display:inline-flex;width:100%;"},[Object(r.m)("i",{class:"el-icon-picture"},null)])])},render:function(e){var t=e.props,n=e.size;return Object(r.m)("div",{style:{height:n.height?"".concat(n.height,"px"):void 0,width:n.width?"".concat(n.width,"px"):void 0},class:"visual-block-image"},[Object(r.m)("img",{src:t.url},null)])},props:{url:rn("\u5730\u5740")}}),dn.registry("datepicker",{label:"\u65f6\u95f4\u9009\u62e9",preview:function(){return Object(r.m)(l.f,{size:"small"},null)},render:function(e){e.props;var t=e.model,n=e.custom;return Object(r.m)(l.f,Object(r.t)({key:Math.random()},n,t.default),null)},props:{options:an("\u4e0b\u62c9\u9009\u9879",{options:[{label:"\u663e\u793a\u503c",field:"label"},{label:"\u7ed1\u5b9a\u503c",field:"value"},{label:"\u5907\u6ce8",field:"remark"}],showKey:"label"})},model:{default:"\u7ed1\u5b9a\u5b57\u6bb5"}});var pn=Object(r.n)({name:"AFormContent",props:{elem:String,modelValue:{type:Object,required:!0},formData:{type:Object,required:!0},customProps:{type:Object},formDataChangeCb:{type:Function,required:!0},modelValueEvent:{type:Object,required:!0}},setup:function(e,t){var n=e.modelValue,o=e.formData,l=e.customProps,i=e.formDataChangeCb,a=e.modelValueEvent,u=e.elem,c=un((function(){return n}),(function(e){}));o.formRef=Object(r.I)();var s=Object(r.I)(o),f={};return a.$on("".concat(u,":update-model-value"),(function(e){console.log("event update-model-value:",e),c.value=e})),c.value.blocks.forEach((function(e){var t=null!==e&&void 0!==e&&e.model&&((null===e||void 0===e?void 0:e.model.modelValue)||(null===e||void 0===e?void 0:e.model.default))||null,n=null!==e&&void 0!==e&&e.rules?null===e||void 0===e?void 0:e.rules:null;t&&n&&(f[t]=JSON.parse(JSON.stringify(n)))})),function(){var e,n;return Object(r.m)("div",{class:"form-container",style:{}},[Object(r.l)("vue component \u6765\u4e86~~~~"),!!c.value.blocks&&Object(r.m)(Object(r.M)("el-form"),{model:s.value,rules:f,ref:o.formRef,"label-width":"100px",class:"demo-ruleForm"},(n=e=c.value.blocks.map((function(e,n){return Object(r.m)(on,{block:e,key:"".concat(e.model&&(e.model.modelValue||e.model.default||(new Date).getTime()),"-").concat(n),config:dn,formData:s.value,slots:t.slots,customProps:l,formDataChangeCb:i},null)})),"function"===typeof n||"[object Object]"===Object.prototype.toString.call(n)&&!Object(r.s)(n)?e:{default:function(){return[e]}}))])}}}),mn=ot("splice"),bn=gt("splice",{ACCESSORS:!0,0:0,1:2}),vn=Math.max,hn=Math.min,gn=9007199254740991,yn="Maximum allowed length exceeded";Re({target:"Array",proto:!0,forced:!mn||!bn},{splice:function(e,t){var n,o,r,l,i,a,u=Be(this),c=ge(u.length),s=Oe(e,c),f=arguments.length;if(0===f?n=o=0:1===f?(n=0,o=c-s):(n=f-2,o=hn(vn(ve(t),0),c-s)),c+n-o>gn)throw TypeError(yn);for(r=Ye(u,o),l=0;l<o;l++)(i=s+l)in u&&qe(r,l,u[i]);if(r.length=o,n<o){for(l=s;l<c-o;l++)a=l+n,(i=l+o)in u?u[a]=u[i]:delete u[a];for(l=c;l>c-o+n;l--)delete u[l-1]}else if(n>o)for(l=c-o;l>s;l--)a=l+n-1,(i=l+o-1)in u?u[a]=u[i]:delete u[a];for(l=0;l<n;l++)u[l+s]=arguments[l+2];return u.length=c-o+n,r}});var jn,On=p?Object.defineProperties:function(e,t){L(e);for(var n,o=Zt(t),r=o.length,l=0;r>l;)M.f(e,n=o[l++],t[n]);return e},wn=pe("document","documentElement"),xn=Z("IE_PROTO"),Sn=function(){},kn=function(e){return"<script>"+e+"</"+"script>"},Pn=function(){try{jn=document.domain&&new ActiveXObject("htmlfile")}catch(Nn){}Pn=jn?function(e){e.write(kn("")),e.close();var t=e.parentWindow.Object;return e=null,t}(jn):function(){var e,t=E("iframe");return t.style.display="none",wn.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(kn("document.F=Object")),e.close(),e.F}();for(var e=ke.length;e--;)delete Pn.prototype[ke[e]];return Pn()};ee[xn]=!0;var Cn=Object.create||function(e,t){var n;return null!==e?(Sn.prototype=L(e),n=new Sn,Sn.prototype=null,n[xn]=e):n=Pn(),void 0===t?n:On(n,t)};function Tn(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Re({target:"Object",stat:!0,sham:!p},{create:Cn});var zn=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._events=Object.create(null)}var t,n,o;return t=e,(n=[{key:"$on",value:function(e,t){(this._events[e]||(this._events[e]=[])).push(t)}},{key:"$emit",value:function(e){var t=this._events[e];if(t){t=t.length>1?En(t):t;for(var n=En(arguments,1),o=0,r=t.length;o<r;o++)try{t[o].apply(this,n)}catch(l){console.log(l,'event handler for "'.concat(e,'"'))}}}},{key:"$off",value:function(e,t){var n=this._events[e];if(!n)return this;if(!t)return this._events[e]=null,this;if(t)for(var o,r=n.length;r--;)if((o=n[r])===t||o.fn===t){n.splice(r,1);break}}},{key:"eventNames",value:function(){return Object.keys(this._events)}}])&&Tn(t.prototype,n),o&&Tn(t,o),e}();function En(e,t){t=t||0;for(var n=e.length-t,o=new Array(n);n--;)o[n]=e[n+t];return o}var Vn={mount:function(e,t,n){var o,i=n.forceUpdate,u=void 0!==i&&i,c=n.formDataChangeCb,s=void 0===c?function(e,t){var n=t.oldValue,o=t.newValue;console.log("in Vue: form data changed!"),console.log({key:e,oldValue:n,newValue:o})}:c;if(null!==(o=document.getElementById(e))&&void 0!==o&&o.innerHTML){if(console.log("this element has mounted!",u),!u)return;var f;console.log("this element forceUpdate!"),null===(f=Vn[e])||void 0===f||f.unmount()}var d=new zn,p=Object(r.h)(pn,a(a({},t),{},{formDataChangeCb:s,elem:e,modelValueEvent:d}));return Vn[e]=p,p.use(l.g),p.mount("#".concat(e)),a(a({},p),{},{modelValueEvent:d})},unmount:function(e){var t;null===(t=Vn[e])||void 0===t||t.unmount()}};t.a=Vn}).call(this,n(23))},168:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var o=n(6),r=n(30),l=n.n(r),i=n(57),a=n.n(i),u=(n(76),n.p+"static/media/logo.6ce24c58.svg"),c=(n(77),n(13)),s=(n(168),n(68)),f=n(22),d=null,p=null;function m(){var e={name:"admin",projectName:"projectName",displayType:"displayType",releaseTime:"releaseTime"};d=null===c.a||void 0===c.a?void 0:c.a.mount("vue-content1",{modelValue:s,formData:e,customProps:{submitButton:{onClick:function(){console.log("onClick",c.a["vue-content1"],e)}},mySelect:{onChange:function(e){console.log("onChange")}},submitCancel:{onClick:function(e){console.log("submitCancel")}}}},{forceUpdate:!0})}function b(){var e={name:"admin",projectName:"KP",displayType:"ICON",releaseTime:new Date(2016,9,10,8,40)},t=JSON.parse(JSON.stringify(f));p=null===c.a||void 0===c.a?void 0:c.a.mount("vue-content2",{modelValue:t,formData:e,customProps:{submitButton:{onClick:function(){e.formRef.value.validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log("submit!")}))}},mySelect:{onChange:function(e){console.log("onChange")}},submitCancel:{onClick:function(e){console.log("submitCancel"),p.unmount()}}}},{forceUpdate:!0,formDataChangeCb:function(e,n){n.oldValue;var o=n.newValue;"projectName"===e&&("ATOME"===o?(f.blocks.forEach((function(e,n){"displayType"===(e.model.modelValue||e.model.default)&&(t.blocks.splice(n,1),t=JSON.parse(JSON.stringify(t)),p.modelValueEvent.$emit("vue-content2:update-model-value",t))})),console.log(t,f)):(t=JSON.parse(JSON.stringify(f)),p.modelValueEvent.$emit("vue-content2:update-model-value",t)))}})}var v=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("header",{className:"App-header",children:["React Wrap",Object(o.jsx)("img",{src:u,className:"App-logo",alt:"logo"}),Object(o.jsxs)("div",{className:"operate",children:[Object(o.jsx)("button",{onClick:m,children:"\u6302\u8f7dvue\u7ec4\u4ef61"}),Object(o.jsx)("button",{onClick:function(){return function(){var e;console.log("form1",d),null===(e=d)||void 0===e||e.unmount()}()},children:"\u9500\u6bc1vue\u7ec4\u4ef61"}),Object(o.jsx)("button",{onClick:b,children:"\u6302\u8f7dvue\u7ec4\u4ef62"}),Object(o.jsx)("button",{onClick:function(){return function(e){var t;c.a&&(null===(t=c.a[e])||void 0===t||t.unmount())}("vue-content2")},children:"\u9500\u6bc1vue\u7ec4\u4ef62"})]})]}),Object(o.jsx)("section",{className:"vue-container",children:Object(o.jsx)("div",{id:"vue-content1"})}),Object(o.jsx)("section",{className:"vue-container",children:Object(o.jsx)("div",{id:"vue-content2"})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,173)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,l=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),l(e),i(e)}))};a.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),h()},22:function(e){e.exports=JSON.parse('{"container":{"height":480,"width":1000},"blocks":[{"componentKey":"select","focus":false,"adjustPosition":false,"top":143,"left":373.5,"width":225,"height":40,"zIndex":100,"props":{"options":[{"label":"kp","value":"KP"},{"label":"atome","value":"ATOME"}]},"model":{"modelValue":"projectName","default":"projectName"},"label":"Project Name"},{"componentKey":"select","focus":false,"adjustPosition":false,"top":222,"left":373.5,"width":225,"height":40,"zIndex":100,"props":{"options":[{"label":"banner","value":"BANNER"},{"label":"icon","value":"ICON"}]},"model":{"modelValue":"displayType","default":"displayType"},"label":"Display Type"},{"componentKey":"datepicker","focus":false,"adjustPosition":false,"top":299,"left":373.5,"width":225,"height":40,"zIndex":100,"props":{},"model":{"modelValue":"releaseTime","default":"releaseTime"},"label":"Release Time"},{"componentKey":"button","focus":false,"adjustPosition":false,"top":393,"left":500,"width":68,"height":32,"zIndex":100,"props":{"label":"submit","type":"primary","plain":true},"model":{},"slotName":"submitButton"},{"componentKey":"button","focus":false,"adjustPosition":false,"top":393,"left":390,"width":68,"height":32,"zIndex":100,"props":{"label":"cancel"},"model":{},"slotName":"submitCancel"},{"componentKey":"input","focus":false,"adjustPosition":false,"top":81,"left":373.5,"width":225,"height":40,"zIndex":100,"props":{},"model":{"default":"name"},"rules":[{"required":true,"message":"Please input name!","trigger":"blur"},{"min":5,"max":15,"message":"Please enter 3-5 digit name","trigger":"blur"}],"label":"Name"}]}')},68:function(e){e.exports=JSON.parse('{"container":{"height":400,"width":700},"blocks":[{"componentKey":"input","focus":false,"adjustPosition":false,"top":34,"left":426.5,"width":225,"height":40,"zIndex":100,"props":{},"model":{"modelValue":"username"}},{"componentKey":"radio","focus":false,"adjustPosition":false,"top":514,"left":426.5,"width":80,"height":21,"zIndex":100},{"componentKey":"button","focus":false,"adjustPosition":false,"top":380,"left":426.5,"width":56,"height":32,"zIndex":100,"props":{"type":"primary","size":"small","label":"submit"},"model":{},"slotName":"submitButton"},{"componentKey":"text","focus":false,"adjustPosition":false,"top":43.5,"left":282,"width":80,"height":21,"zIndex":100,"props":{"text":"Location name"},"model":{}},{"componentKey":"checkbox","focus":false,"adjustPosition":false,"top":514,"left":571.5,"width":80,"height":21,"zIndex":100},{"componentKey":"number","focus":false,"adjustPosition":false,"top":97,"left":426.5,"width":225,"height":40,"zIndex":100,"props":{},"model":{"modelValue":"number"}},{"componentKey":"select","focus":false,"adjustPosition":false,"top":163.5,"left":426.5,"width":225,"height":40,"zIndex":100,"props":{"options":[{"label":"\u86cb\u7cd5","value":"dangao"},{"label":"\u5343\u5c42\u997c","value":"qiancengbing"},{"label":"\u725b\u5976","value":"niunai"}]},"model":{"modelValue":"food"}},{"componentKey":"switch","focus":false,"adjustPosition":false,"top":576.5,"left":535.5,"width":116,"height":23,"zIndex":100,"props":{"activeText":"\u5f00\u542f","inactiveText":"\u5173\u95ed","activeColor":"#CB1919","inactiveColor":"#2BB75C"},"model":{"modelValue":"switchFlag"}},{"componentKey":"datepicker","focus":false,"adjustPosition":false,"top":231.5,"left":426.5,"width":225,"height":40,"zIndex":100,"props":{},"model":{"modelValue":"created"}},{"componentKey":"text","focus":false,"adjustPosition":false,"top":106.5,"left":282,"width":80,"height":21,"zIndex":100,"props":{"text":"Voucher count"},"model":{}},{"componentKey":"text","focus":false,"adjustPosition":false,"top":173,"left":282,"width":64,"height":21,"zIndex":100,"props":{"text":"User Label"},"model":{}},{"componentKey":"text","focus":false,"adjustPosition":false,"top":241,"left":282,"width":64,"height":21,"zIndex":100,"props":{"text":"Time begin"},"model":{}},{"componentKey":"number-range","focus":false,"adjustPosition":false,"top":299,"left":426.5,"width":225,"height":24,"zIndex":100,"props":{},"model":{"start":"maxLevel","end":"minLevel"}},{"componentKey":"text","focus":false,"adjustPosition":false,"top":300.5,"left":282,"width":96,"height":21,"zIndex":100,"props":{"text":"Range"},"model":{}},{"componentKey":"select","focus":false,"adjustPosition":false,"top":163.5,"left":677.5,"width":225,"height":40,"zIndex":100,"props":{"options":[{"label":"Platform ","value":"platform"},{"label":"Shop","value":"shop"}]},"model":{"modelValue":"anntType"}},{"componentKey":"image","focus":false,"adjustPosition":false,"top":252,"left":702.5,"width":175,"height":173,"zIndex":100}]}')},76:function(e,t,n){},77:function(e,t,n){}},[[169,1,2]]]);
//# sourceMappingURL=main.5f0606b1.chunk.js.map