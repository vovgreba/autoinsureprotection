var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequire46ec;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequire46ec=o),o.register,o("f2DfV"),o("5SEZ9");const i=document.querySelector(".nav"),l=document.querySelector(".page");i?.addEventListener("click",function(e){(e.target.parentNode.matches(".burger")||e.target.matches(".burger"))&&(this?.classList.remove("closed"),l?.classList.add("open"),this?.matches(".opened")&&(this?.classList.add("closed"),l?.classList.remove("open"),setTimeout(()=>{this?.classList.remove("opened")},100)),this?.classList.add("opened"))});const n=document.querySelector(".tabs");let a=null,s=null,d=window.location.hash.substring(1);function c(e,t){if(s.forEach(e=>{e.hidden=!0}),a.forEach(e=>{e.setAttribute("aria-selected","false")}),t)console.log(t),console.log(e),e.setAttribute("aria-selected","true"),s.find(e=>{if(t===e.getAttribute("aria-labelledby"))return!0}).hidden=!1,window.location.hash="";else{e.currentTarget.setAttribute("aria-selected","true");let{id:t}=e.currentTarget;s.find(e=>{if(t===e.getAttribute("aria-labelledby"))return!0}).hidden=!1}}n&&(a=Array.from(n.querySelectorAll('[role="tab"]')),s=Array.from(n.querySelectorAll('[role="tabpanel"]')),d&&a.forEach(e=>{e.id===d&&c(e,d)})),a&&a.forEach(e=>e.addEventListener("click",c));
//# sourceMappingURL=about.881d3818.js.map
