this.wc=this.wc||{},this.wc.number=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=510)}({18:function(e,t,r){var n=r(60),o=r(61),u=r(45),i=r(62);e.exports=function(e,t){return n(e)||o(e,t)||u(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},41:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},45:function(e,t,r){var n=r(41);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},5:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},510:function(e,t,r){"use strict";r.r(t),r.d(t,"numberFormat",(function(){return s})),r.d(t,"formatValue",(function(){return f})),r.d(t,"calculateDelta",(function(){return p}));var n=r(5),o=r.n(n),u=r(18),i=r.n(u);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=r(511);function s(e,t){var r=e.precision,n=void 0===r?null:r,o=e.decimalSeparator,u=void 0===o?".":o,a=e.thousandSeparator,l=void 0===a?",":a;if("number"!=typeof t&&(t=parseFloat(t)),isNaN(t))return"";var s=parseInt(n,10);if(isNaN(s)){var f=t.toString().split("."),p=i()(f,2)[1];s=p?p.length:0}return c(t,s,u,l)}function f(e,t,r){if(!Number.isFinite(r))return null;switch(t){case"average":return Math.round(r);case"number":return s(l(l({},e),{},{precision:null}),r)}}function p(e,t){return Number.isFinite(e)&&Number.isFinite(t)?0===t?0:Math.round((e-t)/t*100):null}},511:function(e,t,r){"use strict";e.exports=function(e,t,r,n){e=(e+"").replace(/[^0-9+\-Ee.]/g,"");var o=isFinite(+e)?+e:0,u=isFinite(+t)?Math.abs(t):0,i=void 0===n?",":n,a=void 0===r?".":r,l="";return(l=(u?function(e,t){if(-1===(""+e).indexOf("e"))return+(Math.round(e+"e+"+t)+"e-"+t);var r=(""+e).split("e"),n="";return+r[1]+t>0&&(n="+"),(+(Math.round(+r[0]+"e"+n+(+r[1]+t))+"e-"+t)).toFixed(t)}(o,u).toString():""+Math.round(o)).split("."))[0].length>3&&(l[0]=l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,i)),(l[1]||"").length<u&&(l[1]=l[1]||"",l[1]+=new Array(u-l[1].length+1).join("0")),l.join(a)}},60:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},61:function(e,t){e.exports=function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,u=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return u}},e.exports.default=e.exports,e.exports.__esModule=!0},62:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0}});