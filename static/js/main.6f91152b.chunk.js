(this.webpackJsonpps=this.webpackJsonpps||[]).push([[0],{29:function(t,e,n){"use strict";n.r(e);var r,i,a=n(0),o=n(1),c=n.n(o),s=n(14),u=n.n(s),l=n(4),h=n(5),d={white:"#ffffff",black:"#000000",black300:"#333",black200:"#222",black100:"#1c1c1c"};!function(t){t[t.move=0]="move",t[t.brush=1]="brush",t[t.zoom=2]="zoom",t[t.crop=3]="crop"}(r||(r={})),function(t){t.move="v",t.brush="b",t.zoom="z",t.zoomOut="alt",t.crop="c"}(i||(i={}));var v={position:{x:0,y:0,startX:0,startY:0,lastX:0,lastY:0},filters:{blur:0,saturation:1,hue:0,sepia:!1},pointGroups:[],pointGroupIndex:-1,color:d.black,brushSize:10,rotation:0,tool:r.move,opacity:1,scale:1,pressedKeys:[],layers:[]};function p(){var t=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  @media (max-width: ","px) {\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n"]);return p=function(){return t},t}function b(){var t=Object(l.a)(["\n  width: 100%;\n  max-width: ","px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return b=function(){return t},t}function f(){var t=Object(l.a)(["\n  width: 100%;\n  min-height: 100%;\n  background-color: ",";\n  color: ",";\n  user-select: none;\n  padding: 1em;\n"]);return f=function(){return t},t}var j=h.b.div(f(),d.black100,d.white),g=h.b.div(b(),1e3),x=h.b.div(p(),700);function m(){var t=Object(l.a)(["\n      background-color: ",";\n    "]);return m=function(){return t},t}function w(){var t=Object(l.a)(["\n        background-color: transparent;\n      "]);return w=function(){return t},t}function O(){var t=Object(l.a)(["\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: ",";\n  margin-right: 0.25em;\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  &:hover {\n    background-color: ",";\n\n    ","\n  }\n\n  ","\n\n  img {\n    width: 1.5em;\n    align-self: center;\n    flex-shrink: 0;\n  }\n\n  input {\n    position: absolute;\n    cursor: pointer;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n  }\n"]);return O=function(){return t},t}function y(){var t=Object(l.a)(["\n  width: 100%;\n  background-color: ",";\n  padding: 0.25em;\n  display: flex;\n"]);return y=function(){return t},t}var z=h.b.div(y(),d.black300),k=h.b.button(O(),"0.5em",d.black100,(function(t){if(t.inactive)return Object(h.a)(w())}),(function(t){if(t.active)return Object(h.a)(m(),d.black100)}));function C(t){return"data:image/svg+xml;utf8,".concat(encodeURIComponent(t))}var S=C('<svg width="20" height="20" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h20v20h-20z" fill="#d7d7d7"/><path d="m20 20h20v20h-20z" fill="#d7d7d7"/><g fill="'.concat(d.white,'"><path d="m20 0h20v20h-20z"/><path d="m0 20h20v20h-20z"/></g></svg>')),E=C('<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m2674 2900-23.08 19.23v-15.38h-23.07v23.07h15.38l-19.23 23.08-19.23-23.08h15.38v-23.07h-23.07v15.38l-23.08-19.23 23.08-19.23v15.38h23.07v-23.07h-15.38l19.23-23.08 19.23 23.08h-15.38v23.07h23.07v-15.38z" fill="'.concat(d.white,'" fill-rule="evenodd" transform="translate(-2574 -2850)"/></svg>')),L=C('<svg width="100" height="98.46" viewBox="0 0 100 98.46" xmlns="http://www.w3.org/2000/svg"><path d="m2210.36 2012.7-8.65 8.64-32.57-32.57a36.468 36.468 0 1 1 8.41-8.88zm-63.33-83.71a30.56 30.56 0 1 0 30.57 30.56 30.564 30.564 0 0 0 -30.57-30.56zm0 13.75a16.653 16.653 0 0 0 -9.16 2.75v-6.94a22.909 22.909 0 0 1 32.09 21h-6.12a16.809 16.809 0 0 0 -16.81-16.81z" fill="'.concat(d.white,'" fill-rule="evenodd" transform="translate(-2110.34 -1922.88)"/></svg>')),I=C('<svg width="99.93" height="102.85" viewBox="0 0 99.93 102.85" xmlns="http://www.w3.org/2000/svg"><path d="m2628.24 1289.83s-2.56-8.1-13.65-10.23c10.6-12.15 50.94-60.57 58-54.58 8.92 7.55-44.35 64.81-44.35 64.81zm-3.41 10.24s1.1 27.29-51.18 27.29c0 0 10.24-7.01 10.24-13.65 0-6.82 6.65-30.7 23.88-30.7 17.06 0 17.06 17.06 17.06 17.06z" fill="'.concat(d.white,'" fill-rule="evenodd" transform="translate(-2573.66 -1224.53)"/></svg>')),M=C('<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m2674 2022h-70v-30h-30v-70h70v30h30zm-10-60h-20v30h-30v20h50z" fill="'.concat(d.white,'" fill-rule="evenodd" transform="translate(-2574 -1922)"/></svg>')),G=C('<svg width="100" height="89.188" viewBox="0 0 100 89.188" xmlns="http://www.w3.org/2000/svg"><path d="m1278.45 838.175h-12.17v-8.108h12.17a4.054 4.054 0 0 1 0 8.108zm-21.63 18.919a4.05 4.05 0 0 1 -4.05-4.054v-60.81h-31.08a4.055 4.055 0 1 1 0-8.109h39.19v68.919a4.058 4.058 0 0 1 -4.06 4.054zm-13.51-27.027a4.054 4.054 0 0 1 0 8.108h-39.19v-66.216a4.055 4.055 0 0 1 8.11 0v58.108zm-60.81-41.891a4.05 4.05 0 0 1 4.05-4.055h12.17v8.109h-12.17a4.051 4.051 0 0 1 -4.05-4.054z" fill="'.concat(d.white,'" fill-rule="evenodd" transform="translate(-1182.5 -767.906)"/></svg>')),B=C('<svg width="'.concat(50,'" height="').concat(22.297,'" viewBox="0 0 100 89.188" xmlns="http://www.w3.org/2000/svg"><path d="m1278.45 838.175h-12.17v-8.108h12.17a4.054 4.054 0 0 1 0 8.108zm-21.63 18.919a4.05 4.05 0 0 1 -4.05-4.054v-60.81h-31.08a4.055 4.055 0 1 1 0-8.109h39.19v68.919a4.058 4.058 0 0 1 -4.06 4.054zm-13.51-27.027a4.054 4.054 0 0 1 0 8.108h-39.19v-66.216a4.055 4.055 0 0 1 8.11 0v58.108zm-60.81-41.891a4.05 4.05 0 0 1 4.05-4.055h12.17v8.109h-12.17a4.051 4.051 0 0 1 -4.05-4.054z" fill="').concat(d.white,'" fill-rule="evenodd" transform="translate(-1182.5 -767.906)"/></svg>')),R=n(2),P=n(6),X=n(3);function Y(t,e,n){return Math.min(Math.max(t,e),n)}function D(t,e){if(null===e)return{x:0,y:0};var n,r,i,a,o,c,s=e.getBoundingClientRect(),u=s.left,l=s.top,h=s.width,d=s.height;(u=Math.abs(u),l=Math.abs(l),"touches"in t)?(n=null!==(i=null===(a=t.touches[0])||void 0===a?void 0:a.pageX)&&void 0!==i?i:0,r=null!==(o=null===(c=t.touches[0])||void 0===c?void 0:c.pageY)&&void 0!==o?o:0):(n=t.pageX,r=t.pageY);return{x:Y(n-u,0,h)/h,y:Y(r-l,0,d)/d}}function K(t){var e=t.pointGroups,n=t.pointGroupIndex,r=t.pointer,i=t.color,a=t.brushSize,o=void 0===a?10:a,c=t.size,s=t.settings,u=o/Math.min(c.width,c.height)/s.p,l=e[n];if(void 0===l)return e[n]={color:i,size:o,points:[{x:r.x,y:r.y}]},Object(P.a)(e);var h,d,v=l.points[l.points.length-1];if(void 0!==v&&(h=v,d=r,Math.sqrt(Math.pow(h.x-d.x,2)+Math.pow(h.y-d.y,2)))<u)return e;return e[n].color=i,e[n].points=[].concat(Object(P.a)(e[n].points),[{x:r.x,y:r.y}]),Object(P.a)(e)}function U(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(t){case r.move:return"move";case r.brush:return"none";case r.zoom:var n=e.includes(i.zoomOut)?"out":"in";return"zoom-".concat(n);case r.crop:return'url("'.concat(B,'") 17 0, default');default:return"default"}}function T(t){var e=["image/png","image/jpg"];return new Promise((function(n,r){if(e.includes(t.type)){var i=URL.createObjectURL(t),a=new Image;a.onload=function(){n({file:t,image:{src:i,width:a.width,height:a.height,ratio:a.width/a.height},zIndex:0})},a.src=i}else r("Invalid image file, must be one of: ".concat(e.join(" ")))}))}var A=c.a.createContext({});function F(t){var e=t.children,n=c.a.useState(v.pointGroups),o=Object(X.a)(n,2),s=o[0],u=o[1],l=c.a.useState(v.pointGroupIndex),h=Object(X.a)(l,2),d=h[0],p=h[1],b=c.a.useState({down:!1,x:0,y:0}),f=Object(X.a)(b,2),j=f[0],g=f[1],x=c.a.useState({width:0,height:0,ratio:1}),m=Object(X.a)(x,2),w=m[0],O=m[1],y=c.a.useState(v.rotation),z=Object(X.a)(y,2),k=z[0],C=z[1],S=c.a.useState(r.move),E=Object(X.a)(S,2),L=E[0],I=E[1],M=c.a.useState(v.position),G=Object(X.a)(M,2),B=G[0],Y=G[1],U=c.a.useState(v.filters),T=Object(X.a)(U,2),F=T[0],H=T[1],J=c.a.useState(v.color),W=Object(X.a)(J,2),q=W[0],Z=W[1],N=c.a.useState(v.brushSize),Q=Object(X.a)(N,2),V=Q[0],$=Q[1],_=c.a.useState(v.scale),tt=Object(X.a)(_,2),et=tt[0],nt=tt[1],rt=c.a.useState(v.opacity),it=Object(X.a)(rt,2),at=it[0],ot=it[1],ct=c.a.useState(v.layers),st=Object(X.a)(ct,2),ut=st[0],lt=st[1],ht=c.a.useState(v.pressedKeys),dt=Object(X.a)(ht,2),vt=dt[0],pt=dt[1],bt=c.a.useMemo((function(){var t=w.width/2,e=w.height/2,n=et;return["translate(".concat(B.x*w.width," ").concat(B.y*w.height,")"),"rotate(".concat(k,", ").concat(w.width/2,", ").concat(w.height/2,")"),"matrix(".concat(n,", 0, 0, ").concat(n,", ").concat(t-n*t,", ").concat(e-n*e,")")].join(" ")}),[w,et,B,k]),ft=c.a.useMemo((function(){return{lineCap:"round",p:3*w.ratio}}),[w]),jt=c.a.useRef(null),gt=c.a.useCallback((function(){Y(v.position),H(v.filters),u(v.pointGroups),p(v.pointGroupIndex),Z(v.color),$(v.brushSize),C(v.rotation),I(v.tool),ot(v.opacity),nt(v.scale),pt(v.pressedKeys),lt(v.layers)}),[]),xt=c.a.useCallback((function(){if(null!==jt.current){var t=document.createElement("canvas"),e=t.getContext("2d");if(null!==e){var n=new Image;if(n.onload=function(){t.width=n.width,t.height=n.height,e.drawImage(n,0,0,n.width,n.height),t.toBlob((function(t){var e=document.createElement("a");e.href=URL.createObjectURL(t),e.download="image.png",e.click()}),"image/png")},null!==jt.current){jt.current.setAttribute("width",w.width.toString()),jt.current.setAttribute("height",w.height.toString());var r=encodeURIComponent(jt.current.outerHTML);n.src="data:image/svg+xml;utf8,".concat(r),jt.current.removeAttribute("width"),jt.current.removeAttribute("height")}}}}),[w,jt]);c.a.useEffect((function(){var t=jt.current;if(null!==t)return t.addEventListener("pointerdown",e,{passive:!0}),window.addEventListener("pointermove",n,{passive:!1}),window.addEventListener("pointerup",i,{passive:!1}),t.addEventListener("touchstart",e,{passive:!1}),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",i,{passive:!1}),function(){t.removeEventListener("pointerdown",e),window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",i),t.removeEventListener("touchstart",e),window.removeEventListener("touchmove",n),window.removeEventListener("touchend",i)};function e(e){var n=D(e,t);L===r.brush&&(p((function(t){return t+1})),u((function(t){return[].concat(Object(P.a)(t),[{color:q,size:V,points:[n,n]}])}))),Y((function(t){return Object(R.a)(Object(R.a)({},t),{},{startX:n.x,startY:n.y})})),g((function(t){return Object(R.a)(Object(R.a)(Object(R.a)({},t),n),{},{down:!0})}))}function n(e){e.preventDefault();var n=D(e,t);g((function(t){return Object(R.a)(Object(R.a)({},t),n)}))}function i(){Y((function(t){return Object(R.a)(Object(R.a)({},t),{},{lastX:t.x,lastY:t.y})})),g((function(t){return Object(R.a)(Object(R.a)({},t),{},{down:!1})}))}}),[jt,L,w,q,V,p,u,g,Y]),c.a.useEffect((function(){j.down&&L===r.brush&&u((function(t){return K({pointGroups:t,pointGroupIndex:d,pointer:j,color:q,size:w,settings:ft})}))}),[L,j,d,q,w,ft,u]),c.a.useEffect((function(){j.down&&L===r.move&&Y((function(t){return Object(R.a)(Object(R.a)({},t),{},{x:j.x-t.startX+t.lastX,y:j.y-t.startY+t.lastY})}))}),[j,L,Y]),c.a.useEffect((function(){vt.includes(i.move)&&I(r.move),vt.includes(i.brush)&&I(r.brush),vt.includes(i.zoom)&&I(r.zoom),vt.includes(i.crop)&&I(r.crop)}),[vt]),c.a.useEffect((function(){if(j.down&&L===r.zoom){var t=vt.includes(i.zoomOut)?-1:1;nt((function(e){return e+.01*t}))}}),[vt,L,j.down]),c.a.useEffect((function(){function t(t){return t.key.toLowerCase()}function e(e){var n=t(e);pt((function(t){return t.includes(n)?t:[].concat(Object(P.a)(t),[n])}))}function n(e){var n=t(e);pt((function(t){var e=t.indexOf(n);return-1===e?t:(t.splice(e,1),Object(P.a)(t))}))}return window.addEventListener("keydown",e),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",n)}}),[]);var mt={layers:ut,setLayers:lt,pointGroups:s,setPointGroups:u,pointGroupIndex:d,setPointGroupIndex:p,pointer:j,setPointer:g,size:w,setSize:O,rotation:k,setRotation:C,tool:L,setTool:I,position:B,setPosition:Y,filters:F,setFilters:H,color:q,setColor:Z,brushSize:V,setBrushSize:$,scale:et,setScale:nt,opacity:at,setOpacity:ot,pressedKeys:vt,setPressedKeys:pt,transform:bt,settings:ft,svg:jt,reset:gt,download:xt};return Object(a.jsx)(A.Provider,{value:mt,children:e})}function H(){var t=c.a.useContext(A),e=t.tool,n=t.setTool,o=t.setColor,s=c.a.useRef(null),u=c.a.useCallback((function(t){return function(){n((function(e){return e===t?v.tool:t}))}}),[n]);return Object(a.jsxs)(z,{children:[Object(a.jsx)(k,{onClick:u(r.move),active:e===r.move,title:"Move (".concat(i.move,")"),children:Object(a.jsx)("img",{src:E,alt:""})}),Object(a.jsx)(k,{onClick:u(r.zoom),active:e===r.zoom,title:"Zoom (".concat(i.zoom,")"),children:Object(a.jsx)("img",{src:L,alt:""})}),Object(a.jsx)(k,{onClick:u(r.brush),active:e===r.brush,title:"Brush (".concat(i.brush,")"),children:Object(a.jsx)("img",{src:I,alt:""})}),Object(a.jsxs)(k,{inactive:!0,title:"Color",children:[Object(a.jsx)("img",{src:M,alt:""}),Object(a.jsx)("input",{ref:s,type:"color",onChange:function(t){return o(t.target.value)}})]}),Object(a.jsx)(k,{onClick:u(r.crop),active:e===r.crop,title:"Crop (".concat(i.crop,")"),children:Object(a.jsx)("img",{src:G,alt:""})})]})}var J=n(8),W=n.n(J),q=n(18);function Z(){var t=Object(l.a)(["\n  flex: 1 0;\n  width: 100%;\n  max-width: ","px;\n\n  @media (max-width: ","px) {\n    flex: 0 1;\n  }\n\n  svg {\n    display: block;\n    background-repeat: repeat;\n    background-image: url(",");\n\n    image {\n      pointer-events: none;\n    }\n  }\n"]);return Z=function(){return t},t}var N=h.b.div(Z(),800,700,S);function Q(){var t=c.a.useContext(A),e=t.size,n=t.setSize,i=t.filters,o=t.layers,s=t.setLayers,u=t.transform,l=t.opacity,h=t.pointGroups,d=t.settings,v=t.tool,p=t.pointer,b=t.brushSize,f=t.color,j=t.svg,g=t.pressedKeys,x=c.a.useCallback((function(t){t.stopPropagation(),t.preventDefault()}),[]),m=c.a.useCallback(function(){var t=Object(q.a)(W.a.mark((function t(e){var n;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.stopPropagation(),e.preventDefault(),n=0;case 3:if(!(n<e.dataTransfer.files.length)){t.next=14;break}return t.prev=4,t.delegateYield(W.a.mark((function t(){var r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e.dataTransfer.files[n]);case 2:r=t.sent,s((function(t){return[].concat(Object(P.a)(t),[r])}));case 4:case"end":return t.stop()}}),t)}))(),"t0",6);case 6:t.next=11;break;case 8:t.prev=8,t.t1=t.catch(4),console.error(t.t1);case 11:n++,t.next=3;break;case 14:case"end":return t.stop()}}),t,null,[[4,8]])})));return function(e){return t.apply(this,arguments)}}(),[s]);return c.a.useEffect((function(){o.length>0&&n({width:o[0].image.width,height:o[0].image.height,ratio:o[0].image.ratio})}),[o,n]),Object(a.jsx)(N,{style:{cursor:U(v,g)},onDragOver:x,onDrop:m,children:Object(a.jsxs)("svg",{ref:j,viewBox:"0 0 ".concat(e.width," ").concat(e.height),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{maxWidth:"".concat(e.width,"px"),maxHeight:"".concat(e.height,"px")},children:[Object(a.jsxs)("filter",{id:"filters",children:[Object(a.jsx)("feGaussianBlur",{stdDeviation:i.blur}),Object(a.jsx)("feColorMatrix",{type:"hueRotate",values:i.hue.toString()}),Object(a.jsx)("feColorMatrix",{type:"saturate",values:i.saturation.toString()}),i.sepia&&Object(a.jsx)("feColorMatrix",{type:"matrix",values:"0.39 0.769 0.189 0 0 0.349 0.686 0.168 0 0 0.272 0.534 0.131 0 0 0 0 0 1 0"})]}),Object(a.jsx)("g",{filter:"url(#filters)",children:o.map((function(t,e){return Object(a.jsx)("image",{href:t.image.src,transform:u,opacity:l},e)}))}),h.map((function(t,n){return Object(a.jsx)("path",{stroke:t.color,fill:"none",d:"M".concat(t.points.map((function(t){return[t.x*e.width,t.y*e.height].join(",")})).join(",")),strokeWidth:t.size,strokeLinecap:d.lineCap,strokeLinejoin:"round"},n)})),v===r.brush&&Object(a.jsx)("circle",{cx:(p.x*e.width).toString(),cy:(p.y*e.height).toString(),r:b/2,fill:f,strokeMiterlimit:"10"})]})})}function V(){var t=Object(l.a)(["\n  align-self: flex-start;\n  padding: 1em;\n  width: 100%;\n  max-width: ","px;\n  background-color: ",";\n\n  @media (max-width: ","px) {\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 100%;\n  }\n"]);return V=function(){return t},t}var $=h.b.div(V(),200,d.black300,700);function _(){var t=c.a.useContext(A),e=t.filters,n=t.setFilters,r=t.brushSize,i=t.setBrushSize,o=t.rotation,s=t.setRotation,u=t.opacity,l=t.setOpacity,h=t.download,d=t.reset;return Object(a.jsxs)($,{children:[Object(a.jsx)("div",{children:Object(a.jsxs)("label",{children:["sepia:",Object(a.jsx)("input",{type:"checkbox",checked:e.sepia,onChange:function(t){return n((function(e){return Object(R.a)(Object(R.a)({},e),{},{sepia:t.target.checked})}))}})]})}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{children:["saturation(",e.saturation,"):"]}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"range",min:0,max:3,step:.01,value:e.saturation,onChange:function(t){return n((function(e){return Object(R.a)(Object(R.a)({},e),{},{saturation:parseFloat(t.target.value)})}))}})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{children:["brushSize(",r,"px):"]}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"range",min:0,max:100,step:1,value:r,onChange:function(t){return i(parseInt(t.target.value,10))}})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{children:["rotation(",o,"\xb0):"]}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"range",min:0,max:360,step:1,value:o,onChange:function(t){return s(parseInt(t.target.value,10))}})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{children:["blur(",e.blur,"px):"]}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"range",min:0,max:100,step:1,value:e.blur,onChange:function(t){return n((function(e){return Object(R.a)(Object(R.a)({},e),{},{blur:parseInt(t.target.value,10)})}))}})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{children:["hue(",e.hue,"\xb0):"]}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"range",min:0,max:360,step:1,value:e.hue,onChange:function(t){return n((function(e){return Object(R.a)(Object(R.a)({},e),{},{hue:parseInt(t.target.value,10)})}))}})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{children:["opacity(",u,"):"]}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"range",min:0,max:1,step:.01,value:u,onChange:function(t){return l(parseFloat(t.target.value))}})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:h,children:"download"})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:d,children:"reset"})})]})}function tt(){return Object(a.jsx)(F,{children:Object(a.jsx)(j,{children:Object(a.jsxs)(g,{children:[Object(a.jsx)(H,{}),Object(a.jsxs)(x,{children:[Object(a.jsx)(Q,{}),Object(a.jsx)(_,{})]})]})})})}u.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(tt,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.6f91152b.chunk.js.map