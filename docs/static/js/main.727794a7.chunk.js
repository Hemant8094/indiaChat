(this.webpackJsonpindiachat=this.webpackJsonpindiachat||[]).push([[0],{26:function(e,t,r){},33:function(e,t,r){},34:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r(13),a=r.n(i),c=(r(26),r(4)),l=r(21),o=r(10),s=function(e){return{type:"updateTab",payload:e}},d=function(e){return{type:"ChatText",text:e}},u=r(1);var b=function(e){var t=Object(c.c)((function(e){return e.selectedTab})),r=Object(c.b)(),n=e.buttons.find((function(e){return e.isTransparent&&t===e.id}));return Object(u.jsx)("div",{className:"row",style:n?{backgroundColor:" #000000a1"}:null,children:e.buttons.map((function(e){return Object(u.jsx)(o.b,{to:e.url,children:Object(u.jsx)("button",{onClick:function(){var t;t=e.id,r(s(t))},style:{border:"none",borderRadius:"100%",backgroundColor:"#0000000f"},children:Object(u.jsx)(e.icon,{style:{fill:e.id===t?"yellow":"white"}})})})}))})};function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var m=n.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),p=n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"});function f(e,t){var r=e.title,i=e.titleId,a=h(e,["title","titleId"]);return n.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":i},a),r?n.createElement("title",{id:i},r):null,m,p)}var O=n.forwardRef(f);r.p;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var g=n.createElement("g",null,n.createElement("path",{d:"M0,0h24v24H0V0z",fill:"none"})),y=n.createElement("g",null,n.createElement("g",null,n.createElement("path",{d:"M16,7h-1l-1-1h-4L9,7H8C6.9,7,6,7.9,6,9v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V9C18,7.9,17.1,7,16,7z M16,15H8V9h1.83l1-1 h2.34l1,1H16V15z"}),n.createElement("circle",{cx:12,cy:12,r:2}),n.createElement("path",{d:"M8.57,0.52L13.05,5l1.41-1.41l-1.54-1.54C17.7,2.46,21.53,6.24,22,11h2C23.36,3.3,15.79-1.67,8.57,0.52z"}),n.createElement("path",{d:"M9.54,20.41l1.54,1.54C6.3,21.54,2.47,17.76,2,13H0c0.64,7.7,8.21,12.67,15.43,10.48L10.95,19L9.54,20.41z"})));function w(e,t){var r=e.title,i=e.titleId,a=x(e,["title","titleId"]);return n.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":i},a),r?n.createElement("title",{id:i},r):null,g,y)}var A=n.forwardRef(w),E=(r.p,r(20)),C=r.n(E);var S=function(){var e=Object(n.useRef)(null),t=Object(c.b)(),r=Object(c.c)((function(e){return e.captureImage})),i=Object(c.c)((function(e){return e.cameraFlip})),a=Object(c.c)((function(e){return e.mirrorFlip})),l=Object(n.useCallback)((function(){var t=e.current.getScreenshot();o(t)}),[e]),o=function(e){t(function(e){return{type:"imageTab",image:e}}(e))};return Object(u.jsxs)("div",{style:{position:"relative",height:"100%"},children:[r?Object(u.jsx)("img",{src:r,alt:"",style:{height:"100%",width:"100%",objectFit:"cover"}}):Object(u.jsx)(C.a,{ref:e,width:"100%",height:"100%",style:{objectFit:"cover"},screenshotFormat:"image/png",videoConstraints:{facingMode:{exact:i?"user":"environment"}},mirrored:a}),r?Object(u.jsx)("div",{style:{position:"absolute",width:"100%",top:8,left:8,textAlign:"initial"},children:Object(u.jsx)("button",{style:{backgroundColor:"#0000000f",border:"none",borderRadius:"100%"},onClick:function(){return o(null)},children:Object(u.jsx)(O,{style:{fill:"white"}})})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{style:{position:"absolute",width:"100%",bottom:"63px"},children:Object(u.jsx)("button",{onClick:function(){return l()},style:{borderRadius:"100%",width:"90px",height:"90px",border:"7px solid white",backgroundColor:"transparent"}})}),Object(u.jsx)("button",{onClick:function(){return t({type:"flipTab",isUserFacing:!i})},style:{position:"absolute",right:"2%",top:"2%",border:"none",borderRadius:"100%",backgroundColor:"#0000000f"},children:Object(u.jsx)(A,{style:{fill:"white"}})}),Object(u.jsx)("button",{onClick:function(){return t(function(e){return{type:"mirrorTab",isMirror:e}}(!a))},style:{position:"absolute",right:"2%",top:"9%",border:"none",borderRadius:"100%",backgroundColor:"#0000000f"},children:Object(u.jsx)("img",{style:{width:"22px",height:"22px"},alt:"mirror",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAADK0lEQVRoge2au2sUURTGvwnEDYQkFmJ8d+KztvAREGtf6VKIqPGFKAkKSazt4l8QFF+diBq100pRFFtfESzUKNFCExsf4P4sdkl278zs3pm5d0bQr1ruzD3n/OZc7n7zkP7rHxWwEDgTMT4KLCiipkwCxoDpiPFvwFgRNaUWsAz4CRBxDOAXsMJH7hYfQSUNSprX4HirpBOecrsV0AVMVzsR1yGqS2++6/w+OnRMUpfFeR2SjnrI705ACfhY04VGHQKYAtpc1uC6Q3slLU5wfrekPY5rcCOgBXhhdKBZhwAmAF+bU3oBvRHF2gAB7C6i5oYCHmUAelJEzbECemIKtQUC2FJE7ZECbjsAulVE7SEBq4HfDoDKwLqs9bjYXYYcxQkknXQQJ72ApVRNqIMOQcW0Ls9SU9YrO6B6EzqRMV5xphXopMaEVtWfsUPgybTaAA0bhUwBbQ6AAIbyhikBH4wihqMKTgnk3LQ2AzKX1uwycQQEcCAvmAB4biQfjSs4A9Ar8jCtwC4jcd3zAYdAADvzAHpoJL3QqOCMQI99w2w2EpaB9R6BADb5BBo3koUMpQegm75gVhE2oSHL7wGoDKz1AXTeSBR5U+YBCOCca5hFwHcjSeRtsyegH8ASm1pt9/lBSbX/3K8ljVvOdaGSXJlWKib0q3HFDjY430eHAGaApg8wbTp0RFKt+/0k6YrFPNfqlHQoUwSgFXhnXKmRJnN8dQhgEmj0EqAp0H4jYNN7Fc9AAPvSwgTAMyPYWYt5voFeksa0AjuMQFYvqXIAAtieBuiBEeSi5bw8gO4nhdlgBAiZ0IKBADYmAbphTL6TYG5eQNdtC4oyoT1/IVAZWGPGj9otThnjT4MgSLZm81GgiiWLF9BN2IT2JsmSY4egYlrr3hiaHRpQvQl9o3xNaFKVJB2PPAJ0EDahib1Tzh0Cw7TWduiw6k3oZxVjQpOqU1J/3QgVE/rWID+dJnoBHQLTtAJ9nhLFfbzkQ33S3JLblqYbFroXMXbXU66t0hzQew8JvkiKuncaqR5zrcnZX0A7cJnKjpFVM8A1YGVcZiqfn111mO8S0C5JfwAD47a14/v4ewAAAABJRU5ErkJggg=="})})]})]})},k=(r(33),r(3));function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var T=n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),I=n.createElement("path",{d:"M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z"});function B(e,t){var r=e.title,i=e.titleId,a=z(e,["title","titleId"]);return n.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":i},a),r?n.createElement("title",{id:i},r):null,T,I)}var M=n.forwardRef(B);r.p;function R(e){return Object(u.jsxs)("div",{style:{height:"94%",overflow:"auto"},children:[Object(u.jsx)("div",{style:{position:"sticky",top:0,backgroundColor:"white",padding:"10px",boxShadow:"0px 1px 4px",fontSize:"23px",fontFamily:"cursive"},children:"Chats"}),Object(u.jsx)("div",{children:e.chatsData.map((function(e){return Object(u.jsx)(o.b,{to:"/chats/".concat(e.id),style:{color:"black",textDecoration:"none"},children:Object(u.jsxs)("div",{className:"chatCard",children:[Object(u.jsx)("div",{children:Object(u.jsx)(e.emoji,{})}),e.name]},e.id)})}))})]})}function N(e){var t,r=Object(c.b)(),n=Object(c.c)((function(e){return e.chatText})),i=Object(c.c)((function(e){return e.textArray})),a=Object(k.f)().id,l=e.chatsData.find((function(e){return e.id===+a}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"ChatsSpace",children:[Object(u.jsx)("div",{style:{padding:"19px",textAlign:"initial",borderBottom:"1px inset",position:"sticky",top:0,backgroundColor:"white"},children:Object(u.jsxs)("div",{style:{position:"relative"},children:[Object(u.jsx)(l.emoji,{}),Object(u.jsx)("div",{style:{position:"absolute",top:"11%",left:"9%"},children:l.name})]})}),Object(u.jsx)("ul",{className:"ullist",children:(t=i,t.map((function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"userName",children:e.userName}),Object(u.jsx)("div",{className:"listContain",onClick:function(){return r({type:"selectChat",chat:e})},style:e.isSelected?{backgroundColor:"#8080803b"}:null,children:Object(u.jsx)("li",{className:"listItem",children:e.value},e.id)})]})})))})]}),Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==n&&r(function(e){return{type:"textArray",text:{value:e,id:Math.random().toString(36),isSelected:!1,userName:"me"}}}(n)),r(d(""))},children:Object(u.jsxs)("div",{style:{position:"relative"},children:[Object(u.jsx)(o.b,{to:"/camera",children:Object(u.jsx)("span",{className:"cameraSpan",children:Object(u.jsx)(M,{className:"chatCameraIcon"})})}),Object(u.jsx)("input",{placeholder:"Send a chat...",className:"chatInput",value:n,onChange:function(e){console.log(e.target.value),r(d(e.target.value))}})]})})]})}function P(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:"Stories"}),Object(u.jsx)("div",{style:{display:"-webkit-box"},children:e.chatsData.map((function(e){return Object(u.jsx)("div",{style:{borderRadius:"100%",width:"100px",height:"100px",backgroundColor:"lightblue",margin:"2%"},children:Object(u.jsx)(e.emoji,{})},e.id)}))})]})}function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var V=n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),H=n.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"});function L(e,t){var r=e.title,i=e.titleId,a=D(e,["title","titleId"]);return n.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":i},a),r?n.createElement("title",{id:i},r):null,V,H)}var U=n.forwardRef(L);r.p;function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var K=n.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),X=n.createElement("path",{d:"M19 1l-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"});function q(e,t){var r=e.title,i=e.titleId,a=J(e,["title","titleId"]);return n.createElement("svg",Y({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":i},a),r?n.createElement("title",{id:i},r):null,K,X)}var G=n.forwardRef(q);r.p;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var Z=n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),$=n.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"});function ee(e,t){var r=e.title,i=e.titleId,a=W(e,["title","titleId"]);return n.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":i},a),r?n.createElement("title",{id:i},r):null,Z,$)}var te=n.forwardRef(ee);r.p;var re=function(){return Math.random().toString(36)},ne=[{name:re(),emoji:te,id:0},{name:re(),emoji:te,id:1},{name:re(),emoji:te,id:2},{name:re(),emoji:te,id:3},{name:re(),emoji:te,id:4},{name:re(),emoji:te,id:5},{name:re(),emoji:te,id:6},{name:re(),emoji:te,id:7},{name:re(),emoji:te,id:8},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9},{name:re(),emoji:te,id:9}],ie=function(){var e=Object(c.b)(),t=[{name:"Chats",id:0,icon:U,url:"/chats"},{name:"Camera",id:1,icon:M,url:"/camera",isTransparent:!0},{name:"Stories",id:2,icon:G,url:"/stories"}];return Object(n.useEffect)((function(){var r=t.find((function(e){return window.location.pathname.includes(e.url)}));r&&e(s(r.id))})),Object(u.jsxs)(o.a,{children:[Object(u.jsx)("div",{className:"headerContain",children:Object(u.jsx)("div",{className:"header",children:"India-Chat"})}),Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("div",{className:"camera",children:Object(u.jsx)("div",{className:"data",children:Object(u.jsxs)(k.c,{children:[Object(u.jsx)(k.a,{path:"/chats/:id",children:Object(u.jsx)(N,{chatsData:ne})}),Object(u.jsxs)(k.a,{exact:!0,path:"/chats",children:[Object(u.jsx)(R,{chatsData:ne}),Object(u.jsx)(b,{buttons:t})]}),Object(u.jsxs)(k.a,{path:"/stories",children:[Object(u.jsx)(P,{chatsData:ne}),Object(u.jsx)(b,{buttons:t})]}),Object(u.jsxs)(k.a,{path:"/",children:[Object(u.jsx)(S,{}),Object(u.jsx)(b,{buttons:t})]})]})})})})]})},ae=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,35)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),n(e),i(e),a(e),c(e)}))},ce=r(15),le=r(5),oe={selectedTab:1,captureImage:null,cameraFlip:!0,mirrorFlip:!0,chatText:"",textArray:[]},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"updateTab":return Object(le.a)(Object(le.a)({},e),{},{selectedTab:t.payload});case"imageTab":return Object(le.a)(Object(le.a)({},e),{},{captureImage:t.image});case"flipTab":return Object(le.a)(Object(le.a)({},e),{},{cameraFlip:t.isUserFacing});case"mirrorTab":return Object(le.a)(Object(le.a)({},e),{},{mirrorFlip:t.isMirror});case"ChatText":return Object(le.a)(Object(le.a)({},e),{},{chatText:t.text});case"textArray":return Object(le.a)(Object(le.a)({},e),{},{textArray:[].concat(Object(ce.a)(e.textArray),[t.text])});case"selectChat":var r=e.textArray.findIndex((function(e){return e.id===t.chat.id})),n=e.textArray[r],i=n.isSelected;return n.isSelected=!i,Object(le.a)(Object(le.a)({},e),{},{textArray:[].concat(Object(ce.a)(e.textArray.slice(0,r)),[n],Object(ce.a)(e.textArray.slice(r+1,e.textArray.length)))});default:return e}},de=Object(l.a)(se,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(u.jsx)(c.a,{store:de,children:Object(u.jsx)(ie,{})}),document.getElementById("root")),ae()}},[[34,1,2]]]);
//# sourceMappingURL=main.727794a7.chunk.js.map