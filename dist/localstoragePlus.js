!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LocalstoragePlus=t():e.LocalstoragePlus=t()}(self,(()=>(()=>{"use strict";var e,t={d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},o={};t.d(o,{default:()=>r}),function(e){e.permanent="permanent",e.expire="__expire__"}(e||(e={}));const r=function(){function t(){}return t.prototype.set=function(t,o,r){var n;void 0===r&&(r=e.permanent);var a=((n={value:o})[e.expire]=r,n);localStorage.setItem(t,JSON.stringify(a))},t.prototype.get=function(t){var o=localStorage.getItem(t);if(o){var r=JSON.parse(o),n=(new Date).getTime();return"number"==typeof r[e.expire]&&r[e.expire]<n?(this.remove(t),{message:"The ".concat(t," is expired."),value:null}):{message:"Success.",value:r.value}}return{message:"Invalid key.",value:null}},t.prototype.remove=function(e){localStorage.removeItem(e)},t.prototype.clear=function(){localStorage.clear()},t}();return o.default})()));