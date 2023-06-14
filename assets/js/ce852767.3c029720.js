/*! For license information please see ce852767.3c029720.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[800323],{216245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"troubleshooting",title:"Troubleshooting Auth",description:"Guidance for various issues that one might run into when setting up authentication"},s=void 0,a={unversionedId:"auth/troubleshooting",id:"auth/troubleshooting",title:"Troubleshooting Auth",description:"Guidance for various issues that one might run into when setting up authentication",source:"@site/../docs/auth/troubleshooting.md",sourceDirName:"auth",slug:"/auth/troubleshooting",permalink:"/docs/auth/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting Auth",description:"Guidance for various issues that one might run into when setting up authentication"},sidebar:"docs",previous:{title:"Service to Service Auth",permalink:"/docs/auth/service-to-service-auth"},next:{title:"Glossary",permalink:"/docs/auth/glossary"}},u={},l=[{value:"Sign-in fails with &quot;... provider is not configured to support sign-in&quot;",id:"sign-in-fails-with--provider-is-not-configured-to-support-sign-in",level:2},{value:"Auth fails with &quot;Auth provider registered for ... is misconfigured&quot;",id:"auth-fails-with-auth-provider-registered-for--is-misconfigured",level:2},{value:"Auth fails with &quot;Login failed; caused by NotAllowedError: Origin &#39;...&#39; is not allowed&quot;",id:"auth-fails-with-login-failed-caused-by-notallowederror-origin--is-not-allowed",level:2},{value:"Sign-in fails with the error &quot;User not found&quot;",id:"sign-in-fails-with-the-error-user-not-found",level:2},{value:"General troubleshooting",id:"general-troubleshooting",level:2},{value:"Stepping through authentication manually",id:"stepping-through-authentication-manually",level:3},{value:"Inspecting the refresh call",id:"inspecting-the-refresh-call",level:3},{value:"Inspecting the contents of a Backstage token",id:"inspecting-the-contents-of-a-backstage-token",level:3}];function c(e){const t=Object.assign({p:"p",h2:"h2",a:"a",code:"code",strong:"strong",h3:"h3",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Auth is tricky and doesn't always work as expected. Below you'll find some of the common\nproblems one might run into when setting up authentication, as well as some general\ntroubleshooting tips."}),"\n",(0,r.jsx)(t.h2,{id:"sign-in-fails-with--provider-is-not-configured-to-support-sign-in",children:'Sign-in fails with "... provider is not configured to support sign-in"'}),"\n",(0,r.jsxs)(t.p,{children:["This happens if you try to sign in using an auth provider that has not been\nconfigured to allow sign-in. See the ",(0,r.jsx)(t.a,{href:"/docs/auth/identity-resolver",children:"Sign-in Identities and Resolvers"}),"\npage for information about how to configure and customize sign-in."]}),"\n",(0,r.jsx)(t.p,{children:"As part of the 1.1 release of Backstage we removed the default implementations\nof all sign-in resolvers. This was a necessary security fix as well as a step\ntowards providing more clarity in the configuration of the sign-in process.\nYou may encounter this error if you are upgrading from a previous version, in\nwhich case you would need to configure a sign-in resolver as described above."}),"\n",(0,r.jsx)(t.h2,{id:"auth-fails-with-auth-provider-registered-for--is-misconfigured",children:'Auth fails with "Auth provider registered for ... is misconfigured"'}),"\n",(0,r.jsx)(t.p,{children:"This will typically only happen during development, as in a production build the auth\nbackend will fail to start up altogether if a provider is misconfigured."}),"\n",(0,r.jsxs)(t.p,{children:["Double check that your configuration for the provider is correct. Note that environment variables\nsuch as ",(0,r.jsx)(t.code,{children:"AUTH_OAUTH2_CLIENT_ID"})," must be set and will ",(0,r.jsx)(t.strong,{children:"NOT"})," be picked up from ",(0,r.jsx)(t.code,{children:".env"})," files.\nYou can use the ",(0,r.jsx)(t.code,{children:"yarn backstage-cli config:print --lax"})," command to print your local configuration."]}),"\n",(0,r.jsxs)(t.p,{children:["The backend logs should also provide insight into why the configuration of the provider\nfails. In working setup the backend should log something like ",(0,r.jsx)(t.code,{children:'"Configuring provider, oauth2"'}),",\nwhile it with otherwise log a warning like ",(0,r.jsx)(t.code,{children:'"Skipping oauth2 auth provider, ..."'}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"auth-fails-with-login-failed-caused-by-notallowederror-origin--is-not-allowed",children:"Auth fails with \"Login failed; caused by NotAllowedError: Origin '...' is not allowed\""}),"\n",(0,r.jsxs)(t.p,{children:["This will happen if the origin of the configured ",(0,r.jsx)(t.code,{children:"app.baseUrl"})," in the auth backend does not\nmatch the origin that the frontend is being accessed at. Make sure that ",(0,r.jsx)(t.code,{children:"app.baseUrl"})," matches\nwhat a user sees in the browser address bar."]}),"\n",(0,r.jsxs)(t.p,{children:["If you wish to support multiple different origins at once, there is an experimental configuration\nthat lets you do this. The ",(0,r.jsx)(t.code,{children:"auth.experimentalExtraAllowedOrigins"})," key accepts a list of origin\nglob patterns where sign-in should be allowed from."]}),"\n",(0,r.jsx)(t.h2,{id:"sign-in-fails-with-the-error-user-not-found",children:'Sign-in fails with the error "User not found"'}),"\n",(0,r.jsxs)(t.p,{children:["Many built-in sign-in resolvers require user entities to be present in the catalog. This\nerror is encountered if authentication is successful, but a matching user entity is not\npresent in the catalog. If you wish to enable sign-in without having users be represented\nin the catalog data, see the method that's documented in the\n",(0,r.jsx)(t.a,{href:"/docs/auth/identity-resolver#sign-in-without-users-in-the-catalog",children:"sign-in resolver documentation"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you want to customize this error message, you can create a custom sign-in resolver and\ncatch the ",(0,r.jsx)(t.code,{children:"NotFoundError"})," thrown by ",(0,r.jsx)(t.code,{children:"ctx.signInWithCatalogUser"})," or ",(0,r.jsx)(t.code,{children:"ctx.findCatalogUser"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"general-troubleshooting",children:"General troubleshooting"}),"\n",(0,r.jsx)(t.p,{children:"This section contains some general troubleshooting tips."}),"\n",(0,r.jsx)(t.h3,{id:"stepping-through-authentication-manually",children:"Stepping through authentication manually"}),"\n",(0,r.jsx)(t.p,{children:"Authentication happens in a popup window that redirects to the identity providers authorization\nendpoint. Once auth is complete the identity provider will redirect back to the auth backend,\nwhich immediately serves a simple HTML page that posts the result back to the main window, which\nthen closes the popup."}),"\n",(0,r.jsxs)(t.p,{children:["Because the popup is closed automatically it can sometimes be difficult to inspect the auth\nflow, especially if one wants to debug the cookies that are being set. One way around this is to\nmanually head to the ",(0,r.jsx)(t.code,{children:"/start"})," endpoint of the provider, which is the page that the popup will\npoint to initially. For example, if you want to troubleshoot GitHub auth locally, you'd head\nto ",(0,r.jsx)(t.code,{children:"http://localhost:7007/api/auth/github/start?env=development"}),". Note that the ",(0,r.jsx)(t.code,{children:"env"})," parameter\nneeds to be set, and it's possible that you may need to set the ",(0,r.jsx)(t.code,{children:"scope"})," parameter for some providers\nas well."]}),"\n",(0,r.jsxs)(t.p,{children:["Once you've stepped through the auth flow you should end up at the ",(0,r.jsx)(t.code,{children:"/handler/frame"})," endpoint, which displays\nan empty page. This is where the result is normally posted back to the main window, but since we've\nreached it using the manual flow that won't happen. You can still inspect the result though, both\nby viewing the source code of the page, or printing the value of the ",(0,r.jsx)(t.code,{children:"authResponse"})," variable in the console."]}),"\n",(0,r.jsx)(t.h3,{id:"inspecting-the-refresh-call",children:"Inspecting the refresh call"}),"\n",(0,r.jsxs)(t.p,{children:["If you're running into problems with session persistence, such as users being signed out when reloading\nthe page, it will be something that's going wrong with the call to the ",(0,r.jsx)(t.code,{children:"/refresh"})," endpoint of the\nauth provider. Head to the network inspector and filter by ",(0,r.jsx)(t.code,{children:"/refresh"}),". Find the ",(0,r.jsx)(t.code,{children:"GET"})," request towards\n",(0,r.jsx)(t.code,{children:"<backend.baseUrl>/api/auth/<provider>/refresh"})," and inspect the request."]}),"\n",(0,r.jsx)(t.p,{children:"Note that extra calls to the refresh endpoint may be made by the frontend in order to check whether\nauth providers have an existing session. This means that there might be multiple calls, including some\nthat are failing. Make sure you're looking at the refresh call to the provider that you're troubleshooting,\nand don't worry about other failing refresh calls."}),"\n",(0,r.jsx)(t.h3,{id:"inspecting-the-contents-of-a-backstage-token",children:"Inspecting the contents of a Backstage token"}),"\n",(0,r.jsx)(t.p,{children:"The Backstage token that's issues during sign-in is a plain JWT. You can inspect the contents using\nany tool that supports JWTs, or you can parse the payload yourself in for example the browser console\nor a Node.js REPL:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"atob(token.split('.')[1]);\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var l in i=Object(arguments[u]))n.call(i,l)&&(a[l]=i[l]);if(t){s=t(i);for(var c=0;c<s.length;c++)r.call(i,s[c])&&(a[s[c]]=i[s[c]])}}return a}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:s.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,a=60110,u=60112;t.Suspense=60113;var l=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;o=h("react.element"),i=h("react.portal"),t.Fragment=h("react.fragment"),t.StrictMode=h("react.strict_mode"),t.Profiler=h("react.profiler"),s=h("react.provider"),a=h("react.context"),u=h("react.forward_ref"),t.Suspense=h("react.suspense"),l=h("react.memo"),c=h("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function v(){}function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var b=m.prototype=new v;b.constructor=m,r(b,y.prototype),b.isPureReactComponent=!0;var w={current:null},j=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,i={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,r)&&!x.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===i[r]&&(i[r]=u[r]);return{$$typeof:o,type:e,key:s,ref:a,props:i,_owner:w.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return s=s(u=e),e=""===r?"."+S(u,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),E(s,t,n,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+e)),t.push(s)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var c=r+S(a=e[l],l);u+=E(a,t,n,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),l=0;!(a=e.next()).done;)u+=E(a=a.value,t,n,c=r+S(a,l++),s);else if("object"===a)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function C(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function R(){var e=A.current;if(null===e)throw Error(p(321));return e}var I={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=y,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var i=r({},e.props),s=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=w.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)j.call(t,c)&&!x.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){l=Array(c);for(var h=0;h<c;h++)l[h]=arguments[h+2];i.children=l}return{$$typeof:o,type:e.type,key:s,ref:a,props:i,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:a},t)}}}]);