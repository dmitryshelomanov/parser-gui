(this["webpackJsonpparser-gui"]=this["webpackJsonpparser-gui"]||[]).push([[0],{149:function(e,t,n){"use strict";n.r(t);var c,r=n(22),o=n.n(r),a=n(67),l=n(7),i=n(8),s=n(9),u=Object(s.a)(c||(c=Object(i.a)(["\n  body {\n    margin: 0;\n  }\n"]))),d=n(20),j=n(0),b=n(162),O=n(166),v=n(163),f=n(169),h=n(161),m=n(35),x=n(11),p=n(2),g=Object(j.createContext)({}),y=Object(j.createContext)(null),k={backgroundColor:"rgb(202 0 0 / 40%)",position:"fixed",width:0,height:0,top:0,left:0,zIndex:999999999,pointerEvents:"none"};function S(e){var t=function(e){if("#text"===e.nodeName){var t=e.ownerDocument.createRange();t.selectNode(e);var n=t.getBoundingClientRect();return t.detach(),n}return e.getBoundingClientRect()}(e);return{width:t.width,height:t.height,top:t.top+e.scrollTop,left:t.left+e.scrollLeft}}function w(e){var t=e.children,n=function(e){var t=e.elementClicked,n=Object(j.useState)(k),c=Object(d.a)(n,2),r=c[0],o=c[1],a=Object(j.useRef)(t),l=Object(j.useState)(),i=Object(d.a)(l,2),s=i[0],u=i[1],b=Object(j.useState)(),O=Object(d.a)(b,2),v=O[0],f=O[1],h=Object(j.useCallback)((function(){o(k)}),[]);return Object(j.useEffect)((function(){if(s){var e=null,t=function(t){var n=t.target;if(n&&e!==n&&"html"!==n.localName){var c=S(n);o((function(e){return Object(x.a)(Object(x.a)({},e),c)}));var r=n.onmouseleave;n.onmouseleave=function(){e=null,o(k),f(null),n.onmouseleave=r},e=n,f(n)}},n=function(e){e.preventDefault(),a.current&&a.current(e.target)};return s.addEventListener("mousemove",t),s.addEventListener("click",n),function(){s.removeEventListener("mousemove",t),s.removeEventListener("click",n)}}}),[s,o]),a.current!==t&&(a.current=t),{overlay:Object(p.jsx)("div",{style:r}),setRoot:u,setStyles:o,resetStyles:h,root:s,targetElement:null!==v&&void 0!==v?v:null}}(Object(m.a)(e,["children"])),c=n.overlay,r=n.setRoot,o=n.setStyles,a=n.resetStyles,l=n.root,i=n.targetElement,s=Object(j.useMemo)((function(){return{setRoot:r,setStyles:o,resetStyles:a,root:l,targetElement:i}}),[r,o,a,l,i]);return Object(p.jsx)(g.Provider,{value:s,children:Object(p.jsx)(y.Provider,{value:c,children:t})})}function E(){return Object(j.useContext)(g)}var C=Object(j.memo)((function(e){return(0,e.children)(e.isActive)}),(function(e,t){return e.isActive===t.isActive}));function L(e){var t=e.children,n=e.currentNode,c=E().targetElement;return Object(p.jsx)(C,{isActive:n===c,children:t})}var N,M=s.c.iframe(N||(N=Object(i.a)(["\n  width: 100%;\n  flex: 1;\n  border: 0;\n  overflow: scroll;\n"])));function R(){var e=Object(j.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],o=E(),a=o.setRoot,l=o.root,i=Object(j.useContext)(y),s=null===l||void 0===l?void 0:l.body,u={src:"https://dmitryshelomanov.github.io/"};return Object(p.jsx)(M,Object(x.a)(Object(x.a)({ref:c},u),{},{onLoad:function(){var e,t;(null===n||void 0===n||null===(e=n.contentWindow)||void 0===e?void 0:e.document)&&(console.log("load"),a(null===n||void 0===n||null===(t=n.contentWindow)||void 0===t?void 0:t.document))},children:s&&Object(r.createPortal)(i,s)}))}var A=n(45);function D(e){var t;if(!e||1!=e.nodeType)return"";if(e.id)return"//*[@id='"+e.id+"']";var n=[].filter.call(null===(t=e.parentNode)||void 0===t?void 0:t.children,(function(t){return t.tagName==e.tagName}));return D(e.parentNode)+"/"+e.tagName.toLowerCase()+(n.length>1?"["+([].indexOf.call(n,e)+1)+"]":"")}var F=n(167);function P(e){var t=e.children,n=e.isOpened,c=e.closeModal;return Object(p.jsx)(F.a,{isShown:n,title:"Token settings",onCloseComplete:c,hasFooter:!1,width:"65vw",children:t})}var T,z,H,W,B,I,_,J,X,V=n(164),Y=n(165),q=n(168),G="#7d1076",K="rgb(10, 48, 105)",Q="#91461c",U="#30373e",Z=s.c.div(T||(T=Object(i.a)(["\n  color: ",";\n  font-weight: bold;\n  display: block;\n  margin-left: ","px;\n  cursor: pointer;\n  transition: 0.2s;\n\n  &:hover {\n    background-color: #ac5c5c37;\n  }\n\n  ","\n"])),G,(function(e){var t;return 15*(null!==(t=e.lvl)&&void 0!==t?t:0)}),(function(e){return e.isActive&&Object(s.b)(z||(z=Object(i.a)(["\n      background-color: #ac5c5c37;\n    "])))})),$=s.c.div(H||(H=Object(i.a)(["\n  display: block;\n  margin-left: ","px;\n  cursor: pointer;\n  color: ",";\n  transition: 0.2s;\n\n  &:hover {\n    background-color: #ac5c5c37;\n  }\n\n  ","\n"])),(function(e){var t;return 15*(null!==(t=e.lvl)&&void 0!==t?t:0)}),U,(function(e){return e.isActive&&Object(s.b)(W||(W=Object(i.a)(["\n      background-color: #ac5c5c37;\n    "])))})),ee=s.c.span(B||(B=Object(i.a)(["\n  font-weight: normal;\n  border: none;\n  background: none;\n  white-space: normal;\n  margin-left: 5px;\n"]))),te=s.c.pre(I||(I=Object(i.a)(["\n  padding: 5px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  overflow: scroll;\n  margin: 0;\n\n  > div {\n    font-weight: 100;\n  }\n"])));function ne(e){var t=e.name,n=e.isOpened,c=e.attributes,r=void 0===c?[]:c,o=e.lvl,a=e.onLeave,l=e.onHover,i=Object(m.a)(e,["name","isOpened","attributes","lvl","onLeave","onHover"]),s=n?"<":"</";return Object(p.jsxs)(Z,Object(x.a)(Object(x.a)({lvl:o,onMouseEnter:l,onMouseLeave:a},i),{},{children:[s,t,r.map((function(e){return Object(p.jsxs)(ee,{children:[Object(p.jsxs)("span",{style:{color:Q},children:[e.name,"="]}),Object(p.jsxs)("span",{style:{color:K},children:['"',e.value,'"']})]},e.name)})),">"]}))}function ce(e){var t=e.text,n=e.lvl,c=e.onHover,r=e.onLeave;return Object(p.jsx)($,{lvl:n,onMouseEnter:c,onMouseLeave:r,children:t})}function re(e){var t=e.nodeList,n=e.lvl,c=void 0===n?0:n,r=e.changeOverlayStyles,o=e.draft,a=void 0!==o&&o,l=e.onClick;return Object(p.jsx)(p.Fragment,{children:t.map((function(e){var t=a?{}:{onHover:function(){r&&r({type:"set",payload:e.node})},onLeave:function(){r&&r({type:"reset"})},onClick:function(){l&&l(e)}};return"#text"===e.name?Object(j.createElement)(ce,Object(x.a)(Object(x.a)({text:e.value,lvl:c},t),{},{key:e.id})):Object(p.jsx)(L,{currentNode:e.node,children:function(n){return Object(p.jsxs)(p.Fragment,{children:[Object(j.createElement)(ne,Object(x.a)(Object(x.a)({name:e.name,isOpened:!0,lvl:c,attributes:e.attrs},t),{},{key:"".concat(e.id,"-opened"),isActive:n})),Object(p.jsx)(re,{nodeList:e.children,lvl:c+1,changeOverlayStyles:r,draft:a,onClick:l},"".concat(e.id,"-children")),Object(j.createElement)(ne,Object(x.a)(Object(x.a)({name:e.name,isOpened:!1,lvl:c},t),{},{key:"".concat(e.id,"-closed"),isActive:n}))]})}},e.id)}))})}var oe,ae,le,ie,se=Object(s.c)(b.a)(_||(_=Object(i.a)(["\n  display: flex;\n  margin-bottom: 65px;\n  justify-content: space-between;\n  flex: 1 1 auto;\n"]))),ue=Object(s.c)(b.a)(J||(J=Object(i.a)(["\n  flex: 1;\n  padding-left: 15px;\n"]))),de=Object(s.c)(v.a)(X||(X=Object(i.a)(["\n  padding: 15px;\n"])));function je(e){var t=e.node,n=e.onClose,c=Object(j.useMemo)((function(){return t?D(t.node):""}),[t]),r=Object(j.useMemo)((function(){return t?(e=c,(n=t.node.ownerDocument).evaluate(e,n,n,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue):null;var e,n}),[c,t])===(null===t||void 0===t?void 0:t.node);return Object(p.jsx)(P,{isOpened:!!t,closeModal:n,children:Object(p.jsxs)(se,{children:[Object(p.jsxs)(te,{children:[Object(p.jsx)(de,{children:"Preview Elements"}),t&&Object(p.jsx)(re,{nodeList:[t]})]}),Object(p.jsx)(ue,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(de,{children:"Settings"}),Object(p.jsx)(V.a,{children:"Xpath: "}),Object(p.jsx)(Y.a,{children:c}),t&&Object(p.jsx)("div",{children:Object(p.jsx)(q.a,{intent:r?"success":"danger",children:r?"\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0430\u0439\u0434\u0435\u043d \u043f\u043e xpath":"\u042d\u0442\u043e\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0435 \u0431\u044b\u043b \u043d\u0430\u0439\u0434\u0435\u0442 \u043f\u043e xpath"})})]})})]})})}function be(e){var t=e.target,n=E(),c=n.setStyles,r=n.resetStyles,o=Object(j.useState)(null),a=Object(d.a)(o,2),l=a[0],i=a[1],s=Object(j.useMemo)((function(){return t?function(e){for(var t=[e],n=[],c=new WeakMap,r=0;t.length>0;){var o,a=t.shift(),l=a.childNodes,i=a.parentElement?c.get(a.parentElement):null,s=a.attributes?Object(A.a)(a.attributes).map((function(e){return{name:e.name,value:e.value}})):[],u={name:a.localName||a.nodeName,children:[],value:null!==(o=a.textContent)&&void 0!==o?o:"",node:a,attrs:s,id:r};i&&i.children.push(u),c.set(a,u),0===n.length&&n.push(u),t.unshift.apply(t,Object(A.a)(l)),r+=1}return n}(t):[]}),[t]),u=Object(j.useMemo)((function(){return(1e4*Math.random()).toString()}),[t]),b=Object(j.useCallback)((function(e){if("set"===e.type){var t=S(e.payload);c((function(e){return Object(x.a)(Object(x.a)({},e),t)}))}else r()}),[c,r]);return t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(te,{children:Object(p.jsx)(re,{nodeList:s,changeOverlayStyles:b,onClick:i},u)}),Object(p.jsx)(je,{onClose:function(){return i(null)},node:l})]}):null}var Oe=Object(s.c)(b.a)(oe||(oe=Object(i.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  max-width: 50%;\n"]))),ve=Object(s.c)(O.a)(ae||(ae=Object(i.a)(["\n  padding: 13px;\n  margin: 0;\n  border-bottom: 1px solid #e5e8ef;\n"]))),fe=Object(s.c)(v.a)(le||(le=Object(i.a)(["\n  padding: 15px;\n  border-bottom: 1px solid #e5e8ef;\n"]))),he=s.c.div(ie||(ie=Object(i.a)(["\n  flex: 1;\n  height: 100vh;\n  margin: 0 16px;\n  display: flex;\n"]))),me=["Code tools","Some tab1","Some tab2"];function xe(){var e=Object(j.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(j.useState)(0),o=Object(d.a)(r,2),a=o[0],l=o[1];return Object(p.jsx)(w,{elementClicked:c,children:Object(p.jsxs)(he,{children:[Object(p.jsxs)(Oe,{border:"default",children:[Object(p.jsx)(fe,{size:600,children:"Web preview"}),Object(p.jsx)(R,{})]}),Object(p.jsxs)(Oe,{border:"default",style:{background:"#fcfdff"},children:[Object(p.jsx)(ve,{marginRight:24,children:me.map((function(e,t){return Object(p.jsx)(f.a,{id:e,onSelect:function(){return l(t)},isSelected:t===a,"aria-controls":"panel-".concat(e),children:e},e)}))}),n?Object(p.jsx)(be,{target:n}):Object(p.jsx)(h.a,{size:400,children:"\u0422\u0443\u0442 \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b"})]})]})})}function pe(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u,{}),Object(p.jsx)(a.a,{children:Object(p.jsx)(l.a,{path:"*",component:xe})})]})}var ge=document.getElementById("root");o.a.render(Object(p.jsx)(pe,{}),ge)}},[[149,1,2]]]);
//# sourceMappingURL=main.1fb4d4b0.chunk.js.map