(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{QeBL:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),c=t("9Dj+"),l=(t("XfO3"),t("HEwt"),t("a1Th"),t("Btvt"),t("rE2o"),t("ioFf"),t("rGqo"),t("7o9N")),o=t.n(l);function s(e){return function(e){if(Array.isArray(e)){for(var a=0,t=new Array(e.length);a<e.length;a++)t[a]=e[a];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m={help:"help you?"},i=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var a=Object(n.useRef)(null),t=Object(n.useRef)(null),c=Object(n.useState)(""),l=c[0],i=c[1],u=Object(n.useState)([]),f=u[0],p=u[1];return Object(n.useEffect)((function(){t.current&&t.current.focus()}),[t]),r.a.createElement("div",{className:o.a.portfolio},r.a.createElement("div",{className:o.a.terminal,onClick:function(){return t.current&&t.current.focus()}},r.a.createElement("div",{className:o.a.terminalBar},r.a.createElement("span",{className:o.a.dot+" "+o.a.red}),r.a.createElement("span",{className:o.a.dot+" "+o.a.yellow}),r.a.createElement("span",{className:o.a.dot+" "+o.a.green})),r.a.createElement("div",{className:o.a.terminalWindow,ref:a},r.a.createElement("div",{className:o.a.terminalLine},"Welcome! Type ",r.a.createElement("span",{className:o.a.code},"help")," for list of support commands."),f.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement("div",{className:o.a.terminalLine},r.a.createElement("span",{className:o.a.success},"➜"),r.a.createElement("span",{className:o.a.directory},"~"),r.a.createElement("span",null,e.command)),r.a.createElement("div",{className:o.a.terminalLine},"Not Found"!==e.info&&r.a.createElement("span",null,e.info),"Not Found"===e.info&&r.a.createElement("span",null,"Type ",r.a.createElement("span",{className:o.a.code},"help")," !!!")))})),r.a.createElement("div",{className:o.a.terminalLine},r.a.createElement("span",{className:o.a.success},"➜"),r.a.createElement("span",{className:o.a.directory},"~"),r.a.createElement("span",{className:o.a.userInput},l),r.a.createElement("input",{ref:t,type:"text",className:o.a.input,autoComplete:"off",value:l,onChange:function(e){return i(e.target.value)},onKeyDown:function(e){"Enter"==e.key&&(m[l]?(p([].concat(s(f),[{id:Date.now(),command:l,info:m[l]}])),i("")):(p([].concat(s(f),[{id:Date.now(),command:l,info:"Not Found"}])),i("")),requestAnimationFrame((function(){a.current&&(a.current.scrollTop=a.current.scrollHeight)})))}})))))},u=t("H8eV");a.default=function(){return r.a.createElement(c.a,null,r.a.createElement(u.a,{title:"Home"}),r.a.createElement(i,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-808822afe6b822b55f63.js.map