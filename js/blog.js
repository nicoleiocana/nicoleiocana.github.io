!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t){var n,o,r,i,c,u,a,l={getStorage:function(){return localStorage.getItem("nicoleiocana.github.io_theme")},persistData:function(e){localStorage.setItem("nicoleiocana.github.io_theme",e)},updateAttributes:function(e,t){e.forEach((function(e){return e.setAttribute("data-theme",t)}))}},s=(n={button:document.getElementById("theme-button"),header:document.querySelector("header"),main:document.querySelector("main"),contact:document.querySelector(".contact__container")},o=function(e){n.button.insertAdjacentHTML("afterbegin",e)},{getElements:function(){return n},removeNode:function(e){var t=document.getElementById(e);t.parentNode.removeChild(t)},setMoon:function(){o('\n                <svg class="icon" id="icon-btn">\n                    <use xlink:href="/img/icons.svg#icon-moon"></use>\n                </svg>\n            ')},setLight:function(){o('\n                <svg class="icon icon-white" id="icon-btn">\n                    <use xlink:href="/img/icons.svg#icon-light"></use>\n                </svg>\n            ')}});(r=l,c=(i=s).getElements(),u=function(e){var t=[c.header,c.main,c.contact];r.updateAttributes(t,e),i.removeNode("icon-btn"),"light"===e?i.setMoon():i.setLight(),r.persistData(e)},a=function(){var e="light"===r.getStorage()?"dark":"light";u(e),r.persistData(e)},{init:function(){var e,t;c.button.addEventListener("click",a),e=r.getStorage(),t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",u(e||t)}}).init()}]);