const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["6ZmHlDf3/chunk.index-DPCm12v-.js","6ZmHlDf3/chunk.IconSuccess-CtdP40Xu.js","6ZmHlDf3/chunk.IconClose-LPhAtmeh.js","6ZmHlDf3/index.css","6ZmHlDf3/chunk.index-r_7S0jZ5.js","6ZmHlDf3/index2.css","6ZmHlDf3/chunk.index-DVmAqGQA.js","6ZmHlDf3/index3.css","6ZmHlDf3/chunk.index-CCmp8WTy.js","6ZmHlDf3/index4.css","6ZmHlDf3/chunk.index-DJ3Ppcjd.js","6ZmHlDf3/index5.css","6ZmHlDf3/chunk.index-CUOyftIU.js","6ZmHlDf3/index6.css","6ZmHlDf3/chunk.index-4p4Szk6L.js","6ZmHlDf3/index7.css","6ZmHlDf3/chunk.index-Cl4sX8rN.js","6ZmHlDf3/index8.css"])))=>i.map(i=>d[i]);
import A,{createContext as D,useState as C,lazy as f,useEffect as S,Suspense as I,StrictMode as T}from"https://esm.sh/react@18.3.1";import B from"https://esm.sh/react-dom@18.3.1";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function l(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(n){if(n.ep)return;n.ep=!0;const r=l(n);fetch(n.href,r)}})();var _={exports:{}},g={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M;function V(){if(M)return g;M=1;var t=A,o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,n=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function i(c,s,w){var u,a={},h=null,v=null;w!==void 0&&(h=""+w),s.key!==void 0&&(h=""+s.key),s.ref!==void 0&&(v=s.ref);for(u in s)d.call(s,u)&&!r.hasOwnProperty(u)&&(a[u]=s[u]);if(c&&c.defaultProps)for(u in s=c.defaultProps,s)a[u]===void 0&&(a[u]=s[u]);return{$$typeof:o,type:c,key:h,ref:v,props:a,_owner:n.current}}return g.Fragment=l,g.jsx=i,g.jsxs=i,g}var O;function H(){return O||(O=1,_.exports=V()),_.exports}var e=H(),R={},k;function N(){if(k)return R;k=1;var t=B;return R.createRoot=t.createRoot,R.hydrateRoot=t.hydrateRoot,R}var G=N();const E="CustomModal",q=t=>{window.Config.modal.debug&&console.log(`Create root div for react with id #${t}...`);const o=document.createElement("div");return o.id=t,document.body.appendChild(o),o},Z=(t,o)=>{window.Config.modal.debug&&console.log(`Emitting ${t} event...`);const l=new CustomEvent(t,{detail:o});window.dispatchEvent(l)},z=t=>typeof t!="string"||t.length===0?"":t.charAt(0).toUpperCase()+t.slice(1),$=()=>/Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera),K=()=>window.location.href.replace(/http[s]*:\/\//,""),J="modulepreload",X=function(t){return"/"+t},P={},m=function(o,l,d){let n=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),c=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.allSettled(l.map(s=>{if(s=X(s),s in P)return;P[s]=!0;const w=s.endsWith(".css"),u=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${u}`))return;const a=document.createElement("link");if(a.rel=w?"stylesheet":J,w||(a.as="script"),a.crossOrigin="",a.href=s,c&&a.setAttribute("nonce",c),document.head.appendChild(a),w)return new Promise((h,v)=>{a.addEventListener("load",h),a.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${s}`)))})}))}function r(i){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i}return n.then(i=>{for(const c of i||[])c.status==="rejected"&&r(c.reason);return o().catch(r)})},Y=D(),Q=()=>e.jsxs("svg",{fill:"none",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fill:"#CDBDB2",fillRule:"evenodd",d:"m18.79 54.697 8.091 2.147v-2.808l.66-.66h4.624v5.614h-4.954l-6.11-2.642-2.312-1.651Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#CDBDB2",fillRule:"evenodd",d:"m45.21 54.697-7.926 2.147v-2.808l-.66-.66H32v5.614h4.954l6.11-2.642 2.147-1.651Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#393939",fillRule:"evenodd",d:"m27.541 48.587-.66 5.45.825-.661h8.588l.99.66-.66-5.45-1.321-.825-6.606.165-1.155.66Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#F89C35",fillRule:"evenodd",d:"m23.083 11.761 3.963 9.248 1.817 26.917h6.44l1.981-26.917 3.633-9.248H23.083Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#F89D35",fillRule:"evenodd",d:"M5.744 32.073 1.12 45.45l11.56-.66h7.43v-5.78l-.33-11.89-1.651 1.321-12.385 3.633Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#D87C30",fillRule:"evenodd",d:"m14.496 33.56 13.54.33-1.485 6.935-6.44-1.651-5.615-5.615Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#EA8D3A",fillRule:"evenodd",d:"m14.496 33.725 5.614 5.284v5.284l-5.614-10.568Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#F89D35",fillRule:"evenodd",d:"m20.11 39.174 6.606 1.651 2.147 7.101-1.487.826-7.266-4.294v-5.284Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#EB8F35",fillRule:"evenodd",d:"m20.11 44.458-1.32 10.239 8.752-6.11-7.432-4.129Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#EA8E3A",fillRule:"evenodd",d:"m28.037 33.89.826 14.036-2.478-7.183 1.652-6.853Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#D87C30",fillRule:"evenodd",d:"m12.514 44.624 7.596-.166-1.32 10.239-6.276-10.073Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#EB8F35",fillRule:"evenodd",d:"m4.753 59.156 14.036-4.46-6.275-10.072-11.394.825 3.633 13.707Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#E8821E",fillRule:"evenodd",d:"m27.046 21.009-7.1 5.945-5.45 6.605 13.54.496-.99-13.046Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#DFCEC3",fillRule:"evenodd",d:"m18.79 54.697 8.752-6.11-.661 5.284v2.973l-5.945-1.157-2.147-.99Zm26.42 0-8.586-6.11.66 5.284v2.973l5.945-1.157 1.982-.99Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#393939",fillRule:"evenodd",d:"m24.404 36.862 1.816 3.798-6.44-1.651 4.624-2.147Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#E88F35",fillRule:"evenodd",d:"m4.587 4 22.459 17.01-3.798-9.248-18.66-7.76Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#8E5A30",fillRule:"evenodd",d:"m4.587 4-2.972 9.082 1.651 9.909-1.156.66 1.652 1.486-1.321 1.156 1.816 1.652-1.156.99 2.642 3.303L18.13 28.44c6.055-4.844 9.027-7.32 8.917-7.431-.11-.11-7.596-5.78-22.459-17.009Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#F89D35",fillRule:"evenodd",d:"M58.256 32.073 62.88 45.45l-11.56-.66h-7.43v-5.78l.33-11.89 1.651 1.321 12.385 3.633Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#D87C30",fillRule:"evenodd",d:"m49.504 33.56-13.54.33 1.485 6.935 6.44-1.651 5.615-5.615Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#EA8D3A",fillRule:"evenodd",d:"m49.504 33.725-5.614 5.284v5.284l5.614-10.568Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#F89D35",fillRule:"evenodd",d:"m43.89 39.174-6.606 1.651-2.147 7.101 1.487.826 7.266-4.294v-5.284Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#EB8F35",fillRule:"evenodd",d:"m43.89 44.458 1.32 10.239-8.586-5.945 7.266-4.294Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#EA8E3A",fillRule:"evenodd",d:"m35.963 33.89-.826 14.036 2.478-7.183-1.652-6.853Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#D87C30",fillRule:"evenodd",d:"m51.486 44.624-7.596-.166 1.32 10.239 6.276-10.073Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#EB8F35",fillRule:"evenodd",d:"m59.247 59.156-14.036-4.46 6.275-10.072 11.394.825-3.633 13.707Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#E8821E",fillRule:"evenodd",d:"m36.954 21.009 7.1 5.945 5.45 6.605-13.54.496.99-13.046Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#393939",fillRule:"evenodd",d:"M39.596 36.862 37.78 40.66l6.44-1.651-4.624-2.147Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#E88F35",fillRule:"evenodd",d:"M59.413 4 36.954 21.01l3.798-9.248 18.66-7.76Z",clipRule:"evenodd"}),e.jsx("path",{fill:"#8E5A30",fillRule:"evenodd",d:"m59.413 4 2.972 9.082-1.651 9.909 1.156.66-1.652 1.486 1.321 1.156-1.816 1.652 1.156.99-2.642 3.303L45.87 28.44c-6.055-4.844-9.027-7.32-8.917-7.431.11-.11 7.596-5.78 22.459-17.009Z",clipRule:"evenodd"})]}),ee=()=>e.jsxs("svg",{fill:"none",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M13 22.134L50.4967 10V94C23.713 82.799 13 61.3325 13 49.201V22.134Z",fill:"#0500FF"}),e.jsx("path",{d:"M87.9962 22.134L50.4995 10V94C77.2832 82.799 87.9962 61.3325 87.9962 49.201V22.134Z",fill:"url(#paint0_linear_10_17)"}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"paint0_linear_10_17",x1:"78.036",y1:"4.11778",x2:"49.938",y2:"92.9237",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0.02",stopColor:"#0000FF"}),e.jsx("stop",{offset:"0.08",stopColor:"#0094FF"}),e.jsx("stop",{offset:"0.16",stopColor:"#48FF91"}),e.jsx("stop",{offset:"0.42",stopColor:"#0094FF"}),e.jsx("stop",{offset:"0.68",stopColor:"#0038FF"}),e.jsx("stop",{offset:"0.9",stopColor:"#0500FF"})]})})]}),te=()=>e.jsxs("svg",{fill:"none",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fill:"#1648F9",d:"M64 32c0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32Z"}),e.jsx("path",{fill:"#fff",d:"M54 32c0 12.15-9.85 22-22 22s-22-9.85-22-22 9.85-22 22-22 22 9.85 22 22Z"}),e.jsx("path",{fill:"#1648F9",d:"M25 26a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H26a1 1 0 0 1-1-1V26Z"})]}),oe=()=>e.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"0",width:"40",height:"40",rx:"8.7109404",fill:"#00f0ff",y:"0"}),e.jsx("path",{d:"m 18.459617,15.7671 h 7.4686 l 7.6404,7.5916 c 0.497,0.4938 0.4996,1.2971 0.0051,1.7934 L 23.775317,35 h -7.6937 l 2.326,-2.2613 8.54,-8.4861 -8.4316,-8.4862",fill:"#1b1b1b"}),e.jsx("path",{d:"m 21.529217,24.2336 h -7.4686 l -7.64042,-7.5917 c -0.49702,-0.4938 -0.49956,-1.297 -0.00508,-1.7934 L 16.213517,5 h 7.6937 l -2.326,2.26132 -8.54,8.48608 8.4316,8.4862",fill:"#1b1b1b"})]}),ne=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 64 64",children:[e.jsxs("g",{clipPath:"url(#cma)",children:[e.jsx("path",{fill:"url(#cmb)",d:"M0 32c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32Z"}),e.jsx("path",{fill:"url(#cmc)",d:"M12 21h3c15.464 0 28 12.536 28 28v3h6a3 3 0 0 0 3-3c0-20.434-16.565-37-37-37a3 3 0 0 0-3 3v6Z"}),e.jsx("path",{fill:"url(#cmd)",d:"M44 49h8a3 3 0 0 1-3 3h-5v-3Z"}),e.jsx("path",{fill:"url(#cme)",d:"M15 12v8h-3v-5a3 3 0 0 1 3-3Z"}),e.jsx("path",{fill:"url(#cmf)",d:"M12 20h3c16.016 0 29 12.984 29 29v3h-9v-3c0-11.046-8.954-20-20-20h-3v-9Z"}),e.jsx("path",{fill:"url(#cmg)",d:"M36 49h8v3h-8v-3Z"}),e.jsx("path",{fill:"url(#cmh)",d:"M12 28v-8h3v8h-3Z"}),e.jsx("path",{fill:"url(#cmi)",d:"M12 33a3 3 0 0 0 3 3c7.18 0 13 5.82 13 13a3 3 0 0 0 3 3h5v-3c0-11.598-9.402-21-21-21h-3v5Z"}),e.jsx("path",{fill:"url(#cmj)",d:"M28 49h8v3h-5a3 3 0 0 1-3-3Z"}),e.jsx("path",{fill:"url(#cmk)",d:"M15 36a3 3 0 0 1-3-3v-5h3v8Z"})]}),e.jsxs("defs",{children:[e.jsxs("radialGradient",{id:"cmc",cx:"0",cy:"0",r:"1",gradientTransform:"matrix(0 -37 37 0 15 49)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:".77",stopColor:"#FF4000"}),e.jsx("stop",{offset:"1",stopColor:"#8754C9"})]}),e.jsxs("radialGradient",{id:"cmf",cx:"0",cy:"0",r:"1",gradientTransform:"matrix(0 -29 29 0 15 49)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:".724",stopColor:"#FFF700"}),e.jsx("stop",{offset:"1",stopColor:"#FF9901"})]}),e.jsxs("radialGradient",{id:"cmi",cx:"0",cy:"0",r:"1",gradientTransform:"matrix(0 -21 21 0 15 49)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:".595",stopColor:"#0AF"}),e.jsx("stop",{offset:"1",stopColor:"#01DA40"})]}),e.jsxs("radialGradient",{id:"cmj",cx:"0",cy:"0",r:"1",gradientTransform:"matrix(8.5 0 0 22.6666 27.5 50.5)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#0AF"}),e.jsx("stop",{offset:"1",stopColor:"#01DA40"})]}),e.jsxs("radialGradient",{id:"cmk",cx:"0",cy:"0",r:"1",gradientTransform:"matrix(0 -8.5 161.185 0 13.5 36.5)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#0AF"}),e.jsx("stop",{offset:"1",stopColor:"#01DA40"})]}),e.jsxs("linearGradient",{id:"cmb",x1:"32",x2:"32",y1:"0",y2:"64",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#174299"}),e.jsx("stop",{offset:"1",stopColor:"#001E59"})]}),e.jsxs("linearGradient",{id:"cmd",x1:"43.5",x2:"52",y1:"50.5",y2:"50.5",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#FF4000"}),e.jsx("stop",{offset:"1",stopColor:"#8754C9"})]}),e.jsxs("linearGradient",{id:"cme",x1:"13.5",x2:"13.5",y1:"12",y2:"20.5",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#8754C9"}),e.jsx("stop",{offset:"1",stopColor:"#FF4000"})]}),e.jsxs("linearGradient",{id:"cmg",x1:"36",x2:"44",y1:"50.5",y2:"50.5",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#FFF700"}),e.jsx("stop",{offset:"1",stopColor:"#FF9901"})]}),e.jsxs("linearGradient",{id:"cmh",x1:"13.5",x2:"13.5",y1:"28",y2:"20",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#FFF700"}),e.jsx("stop",{offset:"1",stopColor:"#FF9901"})]}),e.jsx("clipPath",{id:"cma",children:e.jsx("path",{fill:"#fff",d:"M0 0h64v64H0z"})})]})]}),le=()=>e.jsxs("svg",{width:"60",height:"60",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_2007_1750)",children:[e.jsx("mask",{id:"mask0_2007_1750",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"60",height:"60",children:e.jsx("path",{d:"M60 0H0V60H60V0Z",fill:"white"})}),e.jsxs("g",{mask:"url(#mask0_2007_1750)",children:[e.jsx("path",{d:"M43.034 60H16.9661C7.59784 60 0 52.4056 0 43.034V16.9661C0 7.59784 7.5944 0 16.9661 0H43.034C52.4022 0 60 7.59443 60 16.9661V43.034C60 52.4056 52.4022 60 43.034 60Z",fill:"#2461ED"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.3183 29.2021C28.4364 26.0235 21.2794 21.9016 15.8929 18.5418C14.3036 17.3969 15.1103 14.9668 17.0311 14.9668H43.6834C45.1701 14.9668 46.1646 16.6245 45.4197 17.8788C43.6285 20.9719 41.0141 24.899 38.8299 28.0127C37.6575 29.684 35.747 29.9711 34.3183 29.2021ZM25.7397 30.2342C31.427 33.2658 39.3975 37.8765 45.0607 41.3626C46.8106 42.4426 46.1134 45.0335 44.0697 45.0335C40.725 45.0335 35.2902 45.0342 29.8838 45.0352C24.5332 45.0359 19.2101 45.0369 15.9681 45.0369C14.3344 45.0369 13.497 43.3416 14.1909 42.159C16.5355 38.1635 19.1706 34.1306 21.3615 31.1194C22.3356 29.7762 24.3179 29.4754 25.7397 30.2342Z",fill:"white"})]})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_2007_1750",children:e.jsx("rect",{width:"60",height:"60",fill:"white"})})})]}),ie=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 64 64",children:[e.jsx("rect",{width:"64",height:"64",rx:"32",fill:"url(#cla)"}),e.jsx("path",{d:"M51.796 34.862c1.57-3.521-6.196-13.36-13.616-17.459-4.677-3.175-9.55-2.739-10.538-1.345-2.166 3.06 7.173 5.653 13.419 8.678-1.343.585-2.608 1.636-3.352 2.978-2.329-2.55-7.44-4.747-13.436-2.978-4.04 1.193-7.4 4.003-8.697 8.249A2.548 2.548 0 0 0 12 35.319a2.548 2.548 0 0 0 2.544 2.552c.26 0 1.074-.175 1.074-.175l13.011.094c-5.203 8.283-9.315 9.493-9.315 10.928 0 1.435 3.934 1.046 5.412.511 7.072-2.56 14.668-10.54 15.971-12.837 5.474.685 10.074.766 11.099-1.53Z",fill:"url(#clb)"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M41.06 24.737c.29-.114.244-.543.164-.88-.183-.774-3.335-3.898-6.295-5.297-4.034-1.906-7.004-1.808-7.443-.93.821 1.69 4.63 3.277 8.61 4.934 1.697.707 3.425 1.427 4.965 2.172h-.001Z",fill:"url(#clc)"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M35.941 41.743c-.816-.313-1.737-.6-2.785-.86 1.117-2.006 1.352-4.975.297-6.852-1.48-2.634-3.34-4.036-7.658-4.036-2.376 0-8.771.802-8.885 6.16-.012.561 0 1.076.04 1.55l11.68.085c-1.575 2.506-3.05 4.365-4.34 5.778 1.55.399 2.828.733 4.003 1.04 1.114.292 2.134.559 3.201.832a48.721 48.721 0 0 0 4.447-3.697Z",fill:"url(#cld)"}),e.jsx("path",{d:"M15.42 37.155c.477 4.07 2.782 5.664 7.492 6.136 4.71.472 7.411.155 11.008.484 3.004.274 5.686 1.81 6.682 1.279.895-.478.394-2.204-.804-3.31-1.553-1.436-3.703-2.434-7.486-2.788.754-2.071.543-4.975-.628-6.555-1.693-2.284-4.818-3.317-8.772-2.866-4.132.472-8.09 2.513-7.492 7.62Z",fill:"url(#cle)"}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"cla",x1:"18.884",y1:"30.87",x2:"63.977",y2:"41.93",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#8697FF"}),e.jsx("stop",{offset:"1",stopColor:"#ABB7FF"})]}),e.jsxs("linearGradient",{id:"clb",x1:"23.803",y1:"31.744",x2:"51.471",y2:"39.564",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#fff"}),e.jsx("stop",{offset:"1",stopColor:"#fff"})]}),e.jsxs("linearGradient",{id:"clc",x1:"46.8",y1:"31.216",x2:"26.779",y2:"11.214",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#8697FF"}),e.jsx("stop",{offset:"1",stopColor:"#8697FF",stopOpacity:"0"})]}),e.jsxs("linearGradient",{id:"cld",x1:"36.496",y1:"42.442",x2:"17.296",y2:"31.441",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#8697FF"}),e.jsx("stop",{offset:"1",stopColor:"#8697FF",stopOpacity:"0"})]}),e.jsxs("linearGradient",{id:"cle",x1:"25.454",y1:"31.537",x2:"38.464",y2:"48.012",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#fff"}),e.jsx("stop",{offset:".984",stopColor:"#D1D8FF"})]})]})]}),se=()=>e.jsxs("svg",{width:"200",height:"200",viewBox:"0 0 200 200",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"200",height:"200",rx:"48",fill:"black"}),e.jsx("path",{d:"M119.25 78.7516H80.5807C78.9391 78.7516 77.6064 79.9978 77.6064 81.535V117.717C77.6064 119.254 78.9391 120.5 80.5807 120.5H119.25C120.892 120.5 122.224 119.254 122.224 117.717V81.535C122.224 79.9978 120.892 78.7516 119.25 78.7516Z",fill:"white"}),e.jsx("path",{d:"M74.642 37H35.9744C34.3315 37 33 38.2461 33 39.7834V75.9655C33 77.5027 34.3315 78.7489 35.9744 78.7489H74.642C76.2849 78.7489 77.6175 77.5027 77.6175 75.9655V39.7834C77.6175 38.2461 76.2849 37 74.642 37Z",fill:"white"}),e.jsx("path",{d:"M163.891 37H125.222C123.58 37 122.247 38.2461 122.247 39.7834V75.9655C122.247 77.5027 123.58 78.7489 125.222 78.7489H163.891C165.533 78.7489 166.865 77.5027 166.865 75.9655V39.7834C166.865 38.2461 165.533 37 163.891 37Z",fill:"white"}),e.jsx("path",{d:"M74.642 120.499H35.9744C34.3315 120.499 33 121.745 33 123.282V159.465C33 161.002 34.3315 162.248 35.9744 162.248H74.642C76.2849 162.248 77.6175 161.002 77.6175 159.465V123.282C77.6175 121.745 76.2849 120.499 74.642 120.499Z",fill:"white"}),e.jsx("path",{d:"M163.891 120.499H125.222C123.58 120.499 122.247 121.745 122.247 123.282V159.465C122.247 161.002 123.58 162.248 125.222 162.248H163.891C165.533 162.248 166.865 161.002 166.865 159.465V123.282C166.865 121.745 165.533 120.499 163.891 120.499Z",fill:"white"})]}),re=()=>e.jsxs("svg",{fill:"none",viewBox:"0 0 64 64",id:"walletconnect",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#cya)",children:[e.jsx("path",{fill:"#4084ED",d:"M32 64c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32Z"}),e.jsx("path",{fill:"#fff",d:"M17.83 22.86c7.825-7.813 20.515-7.813 28.34 0l.94.935a.99.99 0 0 1 0 1.413l-3.218 3.22a.51.51 0 0 1-.706 0l-1.3-1.3c-5.46-5.454-14.312-5.454-19.772 0l-1.387 1.388a.51.51 0 0 1-.705 0L16.79 25.31a.99.99 0 0 1 0-1.414l1.04-1.036Zm35 6.653 2.873 2.866a.99.99 0 0 1 0 1.413L42.765 46.706a.995.995 0 0 1-1.411 0l-9.175-9.164a.25.25 0 0 0-.359 0l-9.174 9.164a.995.995 0 0 1-1.411 0L8.297 33.792a.99.99 0 0 1 0-1.413l2.872-2.866a.995.995 0 0 1 1.412 0l9.174 9.165a.25.25 0 0 0 .359 0l9.174-9.165a.995.995 0 0 1 1.412 0l9.174 9.165c.099.1.26.1.359 0l9.174-9.165a1.01 1.01 0 0 1 1.424 0Z"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"cya",children:e.jsx("path",{fill:"#fff",d:"M0 0h64v64H0z"})})})]});class x{constructor(o,l,d){this.name=o,this.homepageUrl=l,this.deepLinkUrl=d.replace("{CURRENT_URL}",encodeURIComponent(K())),this.provider=null}isInstalled(){throw new Error("isInstalled method must be implemented in the child class")}openHomepage(){throw window.open(this.homepageUrl,"_blank").focus(),new Error(`"${this.name}" wallet is not installed`)}openDeepLink(){window.location.href=this.deepLinkUrl}getProvider(){throw new Error("getProvider method must be implemented in the child class")}async connect(){if(!this.isInstalled()){if($())return this.openDeepLink();this.openHomepage()}this.provider=this.getProvider();const[o]=await this.provider.request({method:"eth_requestAccounts"});if(!o||!o.includes("0x"))throw new Error("No valid address returned");const l=await this.provider.request({method:"eth_chainId"}),d=parseInt(l,16);Z("onWalletConnected",{adapterName:E,walletName:this.name,walletAddress:o,chainId:d,connector:{getProvider:async()=>this.provider}})}}class de extends x{constructor(){super("Metamask","https://metamask.io","https://metamask.app.link/dapp/{CURRENT_URL}")}isInstalled(){return window.Config.modal.debug&&window.ethereum.isMetaMask&&console.log('Found "window.ethereum"'),window.ethereum&&window.ethereum.isMetaMask}getProvider(){return window.ethereum}}class ae extends x{constructor(){super("Trust","https://trustwallet.com","https://link.trustwallet.com/open_url?coin_id=60&url=https://{CURRENT_URL}")}isInstalled(){return window.Config.modal.debug&&(window.trustWallet&&console.log('Found "window.trustWallet"'),window.ethereum.isTrust&&console.log('Found "window.ethereum" with isTrust')),window.trustWallet||window.ethereum&&window.ethereum.isTrust}getProvider(){return window.trustWallet||window.ethereum}}class ce extends x{constructor(){super("Coinbase","https://www.coinbase.com/wallet","https://go.cb-w.com/dapp?cb_url=https://{CURRENT_URL}")}isInstalled(){return window.Config.modal.debug&&(window.coinbaseWalletExtension&&console.log('Found "window.coinbaseWalletExtension"'),window.ethereum.isCoinbaseWallet&&console.log('Found "window.ethereum" with isCoinbaseWallet')),window.coinbaseWalletExtension||window.ethereum&&window.ethereum.isCoinbaseWallet}getProvider(){return window.coinbaseWalletExtension||window.ethereum}}class ue extends x{constructor(){super("Bitget","https://web3.bitget.com","https://app.bitgetwallet.com/dapp/{CURRENT_URL}")}isInstalled(){return window.Config.modal.debug&&(window.bitkeep&&console.log('Found "window.bitkeep"'),window.ethereum.isBitKeep&&console.log('Found "window.ethereum" with isBitKeep')),window.bitkeep&&window.bitkeep.ethereum||window.ethereum.isBitKeep}getProvider(){return window.bitkeep.ethereum||window.ethereum}}class pe extends x{constructor(){super("Rainbow","https://rainbow.me","https://rnbwapp.com/wc?uri=https://{CURRENT_URL}")}isInstalled(){return window.Config.modal.debug&&(window.rainbow&&console.log('Found "window.rainbow"'),window.ethereum.isRainbow&&console.log('Found "window.ethereum" with isRainbow')),window.rainbow||window.ethereum&&window.ethereum.isRainbow}getProvider(){return window.rainbow||window.ethereum}}class we extends x{constructor(){super("Zerion","https://zerion.io","https://wallet.zerion.io/dapp/{CURRENT_URL}")}isInstalled(){var o,l;return(l=(o=window.Config)==null?void 0:o.modal)!=null&&l.debug&&(window.zerionWallet&&console.log('Found "window.zerionWallet"'),"isZerion"in window.ethereum&&console.log('Found "window.ethereum" with isZerion')),window.zerionWallet||window.ethereum.isZerion||"isZerion"in window.ethereum}getProvider(){return window.zerionWallet||window.ethereum}}class he extends x{constructor(){super("Rabby","https://rabby.io","https://rabby.io/dapp/{CURRENT_URL}")}isInstalled(){var o,l,d,n;return(l=(o=window.Config)==null?void 0:o.modal)!=null&&l.debug&&(window.rabby&&console.log('Found "window.rabby"'),(d=window.ethereum)!=null&&d.isRabby&&console.log('Found "window.ethereum" with isRabby')),window.rabby||((n=window.ethereum)==null?void 0:n.isRabby)}getProvider(){return window.rabby||window.ethereum}}class fe extends x{constructor(){super("OKX Wallet","https://www.okx.com/web3","https://www.okx.com/web3/dapp/{CURRENT_URL}")}isInstalled(){var o,l,d;return(l=(o=window.Config)==null?void 0:o.modal)!=null&&l.debug&&(window.okxwallet&&console.log('Found "window.okxwallet"'),(d=window.ethereum)!=null&&d.isOkxWallet&&console.log('Found "window.ethereum" with isOkxWallet')),window.okxwallet||window.ethereum&&window.ethereum.isOkxWallet}getProvider(){return window.okxwallet||window.ethereum}}const me=[{id:"metamask",name:"Metamask",icon:e.jsx(Q,{}),status:"default"},{id:"trust",name:"Trust",icon:e.jsx(ee,{}),status:"default"},{id:"bitget",name:"BitGet",icon:e.jsx(oe,{}),status:"default"},{id:"coinbase",name:"Coinbase",icon:e.jsx(te,{}),status:"default"},{id:"rainbow",name:"Rainbow",icon:e.jsx(ne,{}),status:"default"},{id:"zerion",name:"Zerion",icon:e.jsx(le,{}),status:"default"},{id:"rabby",name:"Rabby",icon:e.jsx(ie,{}),status:"default"},{id:"okex",name:"OKX",icon:e.jsx(se,{}),status:"default"},{id:"walletconnect",name:"Walletconnect",icon:e.jsx(re,{}),status:"default"}].filter(t=>!Array.isArray(window.Config.modal.wallets)||window.Config.modal.wallets.includes(t.id)||t.id==="walletconnect"),xe={metamask:de,trust:ae,bitget:ue,coinbase:ce,rainbow:pe,zerion:we,rabby:he,okex:fe},ve=({children:t})=>{const[o,l]=C(!1),[d,n]=C(me),[r,i]=C(!1),[c,s]=C(null),w=async()=>{window.Config.modal.debug&&console.log("Opening modal window"),a(),l(!0)},u=async()=>{window.Config.modal.debug&&console.log("Closing modal window"),l(!1),a()},a=()=>{n(p=>p.map(j=>({...j,status:"default"}))),i(!1)},h=(p,j)=>{n(W=>W.map(b=>b.id===p?{...b,status:j}:b))},v=async p=>{if(!r){window.Config.modal.debug&&console.log(`Wallet selected "${p}"`),a(),h(p,"loading"),i(!0);try{if(p==="walletconnect"){await window.Reown.modal.disconnect(),await window.Reown.modal.open(),await u();return}await new xe[p]().connect(),s(p),h(p,"success")}catch(j){console.log(j),s(null),h(p,"error")}finally{i(!1)}}};return window.CustomModal={connectedWallet:c,isWalletProcessing:r,isOpen:o,open:w,close:u},e.jsx(Y.Provider,{value:{isOpen:o,open:w,close:u,isWalletProcessing:r,wallets:d,handleWalletClick:v},children:t})},U="Saturn";var L;const y=z(((L=window.Config.modal)==null?void 0:L.name)||U),F={Saturn:f(()=>m(()=>import("./chunk.index-DPCm12v-.js"),__vite__mapDeps([0,1,2,3]))),Rainbow:f(()=>m(()=>import("./chunk.index-r_7S0jZ5.js"),__vite__mapDeps([4,1,2,5]))),Venus:f(()=>m(()=>import("./chunk.index-DVmAqGQA.js"),__vite__mapDeps([6,1,2,7]))),Moon:f(()=>m(()=>import("./chunk.index-CCmp8WTy.js"),__vite__mapDeps([8,1,2,9]))),Spirit:f(()=>m(()=>import("./chunk.index-DJ3Ppcjd.js"),__vite__mapDeps([10,1,11]))),Eclipse:f(()=>m(()=>import("./chunk.index-CUOyftIU.js"),__vite__mapDeps([12,1,2,13]))),Mars:f(()=>m(()=>import("./chunk.index-4p4Szk6L.js"),__vite__mapDeps([14,1,2,15]))),Manta:f(()=>m(()=>import("./chunk.index-Cl4sX8rN.js"),__vite__mapDeps([16,1,2,17])))};function je(){window.Config.modal.debug&&console.log(`Injecting ${y in F?y:U} modal window...`);const t=F[y]||F[U];return S(()=>(Z("onModalMounted",{adapterName:E}),()=>{Z("onModalUnMounted",{adapterName:E})}),[]),e.jsx(ve,{children:e.jsx(I,{fallback:e.jsx("div",{}),children:e.jsx(t,{})})})}G.createRoot(q("custom-modal")).render(e.jsx(T,{children:e.jsx(je,{})}));export{Y as M,e as j};
