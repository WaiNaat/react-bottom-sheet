(function(h,_){typeof exports=="object"&&typeof module<"u"?module.exports=_(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],_):(h=typeof globalThis<"u"?globalThis:h||self,h.BottomSheet=_(h.require$$0,h.styled))})(this,function(h,_){"use strict";var B={exports:{}},A={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function Ce(){if(ee)return A;ee=1;var R=h,T=Symbol.for("react.element"),b=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,w=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function x(O,l,j){var v,E={},C=null,$=null;j!==void 0&&(C=""+j),l.key!==void 0&&(C=""+l.key),l.ref!==void 0&&($=l.ref);for(v in l)m.call(l,v)&&!P.hasOwnProperty(v)&&(E[v]=l[v]);if(O&&O.defaultProps)for(v in l=O.defaultProps,l)E[v]===void 0&&(E[v]=l[v]);return{$$typeof:T,type:O,key:C,ref:$,props:E,_owner:w.current}}return A.Fragment=b,A.jsx=x,A.jsxs=x,A}var I={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function Se(){return re||(re=1,process.env.NODE_ENV!=="production"&&function(){var R=h,T=Symbol.for("react.element"),b=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),te=Symbol.iterator,De="@@iterator";function Fe(e){if(e===null||typeof e!="object")return null;var r=te&&e[te]||e[De];return typeof r=="function"?r:null}var k=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ae("error",e,t)}}function Ae(e,r,t){{var n=k.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ie=!1,We=!1,Ye=!1,$e=!1,Le=!1,ne;ne=Symbol.for("react.module.reference");function Ne(e){return!!(typeof e=="string"||typeof e=="function"||e===m||e===P||Le||e===w||e===j||e===v||$e||e===$||Ie||We||Ye||typeof e=="object"&&e!==null&&(e.$$typeof===C||e.$$typeof===E||e.$$typeof===x||e.$$typeof===O||e.$$typeof===l||e.$$typeof===ne||e.getModuleId!==void 0))}function Me(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ae(e){return e.displayName||"Context"}function g(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case b:return"Portal";case P:return"Profiler";case w:return"StrictMode";case j:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case O:var r=e;return ae(r)+".Consumer";case x:var t=e;return ae(t._context)+".Provider";case l:return Me(e,e.render,"ForwardRef");case E:var n=e.displayName||null;return n!==null?n:g(e.type)||"Memo";case C:{var i=e,u=i._payload,o=i._init;try{return g(o(u))}catch{return null}}}return null}var S=Object.assign,W=0,oe,ie,ue,se,fe,le,ce;function de(){}de.__reactDisabledLog=!0;function Ve(){{if(W===0){oe=console.log,ie=console.info,ue=console.warn,se=console.error,fe=console.group,le=console.groupCollapsed,ce=console.groupEnd;var e={configurable:!0,enumerable:!0,value:de,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}W++}}function Ue(){{if(W--,W===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:S({},e,{value:oe}),info:S({},e,{value:ie}),warn:S({},e,{value:ue}),error:S({},e,{value:se}),group:S({},e,{value:fe}),groupCollapsed:S({},e,{value:le}),groupEnd:S({},e,{value:ce})})}W<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var J=k.ReactCurrentDispatcher,G;function L(e,r,t){{if(G===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);G=n&&n[1]||""}return`
`+G+e}}var z=!1,N;{var Be=typeof WeakMap=="function"?WeakMap:Map;N=new Be}function ve(e,r){if(!e||z)return"";{var t=N.get(e);if(t!==void 0)return t}var n;z=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=J.current,J.current=null,Ve();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(y){n=y}Reflect.construct(e,[],o)}else{try{o.call()}catch(y){n=y}e.call(o.prototype)}}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var a=y.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,f=d.length-1;s>=1&&f>=0&&a[s]!==d[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==d[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==d[f]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&N.set(e,p),p}while(s>=1&&f>=0);break}}}finally{z=!1,J.current=u,Ue(),Error.prepareStackTrace=i}var F=e?e.displayName||e.name:"",Oe=F?L(F):"";return typeof e=="function"&&N.set(e,Oe),Oe}function qe(e,r,t){return ve(e,!1)}function Je(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function M(e,r,t){if(e==null)return"";if(typeof e=="function")return ve(e,Je(e));if(typeof e=="string")return L(e);switch(e){case j:return L("Suspense");case v:return L("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return qe(e.render);case E:return M(e.type,r,t);case C:{var n=e,i=n._payload,u=n._init;try{return M(u(i),r,t)}catch{}}}return""}var V=Object.prototype.hasOwnProperty,pe={},he=k.ReactDebugCurrentFrame;function U(e){if(e){var r=e._owner,t=M(e.type,e._source,r?r.type:null);he.setExtraStackFrame(t)}else he.setExtraStackFrame(null)}function Ge(e,r,t,n,i){{var u=Function.call.bind(V);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var d=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(U(i),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),U(null)),a instanceof Error&&!(a.message in pe)&&(pe[a.message]=!0,U(i),c("Failed %s type: %s",t,a.message),U(null))}}}var ze=Array.isArray;function K(e){return ze(e)}function Ke(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function He(e){try{return me(e),!1}catch{return!0}}function me(e){return""+e}function Ee(e){if(He(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ke(e)),me(e)}var Y=k.ReactCurrentOwner,Xe={key:!0,ref:!0,__self:!0,__source:!0},ge,ye,H;H={};function Ze(e){if(V.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Qe(e){if(V.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function er(e,r){if(typeof e.ref=="string"&&Y.current&&r&&Y.current.stateNode!==r){var t=g(Y.current.type);H[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',g(Y.current.type),e.ref),H[t]=!0)}}function rr(e,r){{var t=function(){ge||(ge=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function tr(e,r){{var t=function(){ye||(ye=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var nr=function(e,r,t,n,i,u,o){var a={$$typeof:T,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function ar(e,r,t,n,i){{var u,o={},a=null,d=null;t!==void 0&&(Ee(t),a=""+t),Qe(r)&&(Ee(r.key),a=""+r.key),Ze(r)&&(d=r.ref,er(r,i));for(u in r)V.call(r,u)&&!Xe.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||d){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&rr(o,f),d&&tr(o,f)}return nr(e,a,d,i,n,Y.current,o)}}var X=k.ReactCurrentOwner,be=k.ReactDebugCurrentFrame;function D(e){if(e){var r=e._owner,t=M(e.type,e._source,r?r.type:null);be.setExtraStackFrame(t)}else be.setExtraStackFrame(null)}var Z;Z=!1;function Q(e){return typeof e=="object"&&e!==null&&e.$$typeof===T}function _e(){{if(X.current){var e=g(X.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function or(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Re={};function ir(e){{var r=_e();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Te(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ir(r);if(Re[t])return;Re[t]=!0;var n="";e&&e._owner&&e._owner!==X.current&&(n=" It was passed a child from "+g(e._owner.type)+"."),D(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),D(null)}}function we(e,r){{if(typeof e!="object")return;if(K(e))for(var t=0;t<e.length;t++){var n=e[t];Q(n)&&Te(n,r)}else if(Q(e))e._store&&(e._store.validated=!0);else if(e){var i=Fe(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)Q(o.value)&&Te(o.value,r)}}}function ur(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===E))t=r.propTypes;else return;if(t){var n=g(r);Ge(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Z){Z=!0;var i=g(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function sr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){D(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),D(null);break}}e.ref!==null&&(D(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),D(null))}}function xe(e,r,t,n,i,u){{var o=Ne(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=or(i);d?a+=d:a+=_e();var s;e===null?s="null":K(e)?s="array":e!==void 0&&e.$$typeof===T?(s="<"+(g(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=ar(e,r,t,i,u);if(f==null)return f;if(o){var p=r.children;if(p!==void 0)if(n)if(K(p)){for(var F=0;F<p.length;F++)we(p[F],e);Object.freeze&&Object.freeze(p)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else we(p,e)}return e===m?sr(f):ur(f),f}}function fr(e,r,t){return xe(e,r,t,!0)}function lr(e,r,t){return xe(e,r,t,!1)}var cr=lr,dr=fr;I.Fragment=m,I.jsx=cr,I.jsxs=dr}()),I}process.env.NODE_ENV==="production"?B.exports=Ce():B.exports=Se();var q=B.exports;const Pe=_.div`
display: ${({open:R})=>R?"block":"none"}
`,je=_.div`
position: fixed;
left: 0;
top: 0;

width: 100%;
height: 100%;

background-color: rgba(0, 0, 0, 0.2);
`,ke=_.div`
position: fixed;
left: 50%;
bottom: 0;
transform: translate(-50%, 0);

display: flex;
justify-content: center;
align-items: center;

width: 50%;
min-width: 375px;
min-height: 227px;

background-color: #FDFDFD;
border-radius: 5px 5px 0px 0px;
`;return R=>{const{children:T,open:b,setOpen:m}=R,w=x=>{x.key==="Escape"&&m(!1)},P=()=>{if(b)return window.addEventListener("keyup",w),()=>{window.removeEventListener("keyup",w)}};return h.useEffect(P,[b]),q.jsxs(Pe,{open:b,"aria-modal":b,children:[q.jsx(je,{onClick:()=>m(!1)}),q.jsx(ke,{children:T})]})}});
