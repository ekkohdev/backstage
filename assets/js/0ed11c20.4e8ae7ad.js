/*! For license information please see 0ed11c20.4e8ae7ad.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[216827],{585230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(824246),o=t(511151);const i={id:"plugin-splunk-on-call.splunkoncallapi.getescalationpolicies",title:"SplunkOnCallApi.getEscalationPolicies()",description:"API reference for SplunkOnCallApi.getEscalationPolicies()"},l=void 0,c={unversionedId:"reference/plugin-splunk-on-call.splunkoncallapi.getescalationpolicies",id:"reference/plugin-splunk-on-call.splunkoncallapi.getescalationpolicies",title:"SplunkOnCallApi.getEscalationPolicies()",description:"API reference for SplunkOnCallApi.getEscalationPolicies()",source:"@site/../docs/reference/plugin-splunk-on-call.splunkoncallapi.getescalationpolicies.md",sourceDirName:"reference",slug:"/reference/plugin-splunk-on-call.splunkoncallapi.getescalationpolicies",permalink:"/docs/reference/plugin-splunk-on-call.splunkoncallapi.getescalationpolicies",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-splunk-on-call.splunkoncallapi.getescalationpolicies.md",tags:[],version:"current",frontMatter:{id:"plugin-splunk-on-call.splunkoncallapi.getescalationpolicies",title:"SplunkOnCallApi.getEscalationPolicies()",description:"API reference for SplunkOnCallApi.getEscalationPolicies()"}},a={},u=[];function s(e){const n=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-splunk-on-call",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-splunk-on-call"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-splunk-on-call.splunkoncallapi",children:(0,r.jsx)(n.code,{children:"SplunkOnCallApi"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-splunk-on-call.splunkoncallapi.getescalationpolicies",children:(0,r.jsx)(n.code,{children:"getEscalationPolicies"})})]}),"\n",(0,r.jsx)(n.p,{children:"Get a list of escalation policies for your organization."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.b,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"getEscalationPolicies(): Promise<EscalationPolicyInfo[]>;\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.b,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:["Promise<",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-splunk-on-call.escalationpolicyinfo",children:"EscalationPolicyInfo"}),"[]>"]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,l,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var u in i=Object(arguments[a]))t.call(i,u)&&(c[u]=i[u]);if(n){l=n(i);for(var s=0;s<l.length;s++)r.call(i,l[s])&&(c[l[s]]=i[l[s]])}}return c}},371426:(e,n,t)=>{t(862525);var r=t(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),n.Fragment=i("react.fragment")}var l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,i={},u=null,s=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(s=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:u,ref:s,props:i,_owner:l.current}}n.jsx=u,n.jsxs=u},541535:(e,n,t)=>{var r=t(862525),o=60103,i=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var l=60109,c=60110,a=60112;n.Suspense=60113;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),n.Fragment=f("react.fragment"),n.StrictMode=f("react.strict_mode"),n.Profiler=f("react.profiler"),l=f("react.provider"),c=f("react.context"),a=f("react.forward_ref"),n.Suspense=f("react.suspense"),u=f("react.memo"),s=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}function v(){}function m(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var k=m.prototype=new v;k.constructor=m,r(k,g.prototype),k.isPureReactComponent=!0;var _={current:null},b=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,n,t){var r,i={},l=null,c=null;if(null!=n)for(r in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(l=""+n.key),n)b.call(n,r)&&!j.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(1===a)i.children=t;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:_.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g;function P(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function w(e,n,t,r,l){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return l=l(a=e),e=""===r?"."+P(a,0):r,Array.isArray(l)?(t="",null!=e&&(t=e.replace(E,"$&/")+"/"),w(l,n,t,"",(function(e){return e}))):null!=l&&(S(l)&&(l=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(l,t+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(E,"$&/")+"/")+e)),n.push(l)),1;if(a=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=r+P(c=e[u],u);a+=w(c,n,t,s,l)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(c=e.next()).done;)a+=w(c=c.value,n,t,s=r+P(c,u++),l);else if("object"===c)throw n=""+e,Error(d(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return a}function x(e,n,t){if(null==e)return e;var r=[],o=0;return w(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function C(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var A={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:x,forEach:function(e,n,t){x(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return x(e,(function(){n++})),n},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(d(143));return e}},n.Component=g,n.PureComponent=m,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,n.cloneElement=function(e,n,t){if(null==e)throw Error(d(267,e));var i=r({},e.props),l=e.key,c=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,a=_.current),void 0!==n.key&&(l=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)b.call(n,s)&&!j.hasOwnProperty(s)&&(i[s]=void 0===n[s]&&void 0!==u?u[s]:n[s])}var s=arguments.length-2;if(1===s)i.children=t;else if(1<s){u=Array(s);for(var f=0;f<s;f++)u[f]=arguments[f+2];i.children=u}return{$$typeof:o,type:e.type,key:l,ref:c,props:i,_owner:a}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:c,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},n.createElement=O,n.createFactory=function(e){var n=O.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=S,n.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:C}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return $().useCallback(e,n)},n.useContext=function(e,n){return $().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return $().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return $().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return $().useLayoutEffect(e,n)},n.useMemo=function(e,n){return $().useMemo(e,n)},n.useReducer=function(e,n,t){return $().useReducer(e,n,t)},n.useRef=function(e){return $().useRef(e)},n.useState=function(e){return $().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var r=t(667294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||l:i(e),r.createElement(o.Provider,{value:c},n)}}}]);