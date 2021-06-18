/*! For license information please see index.js.LICENSE.txt */
this.wc=this.wc||{},this.wc.explat=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=507)}({31:function(e,t,r){"use strict";var n=r(63),i=r(64),o=r(38);e.exports={formats:o,parse:i,stringify:n}},311:function(e,t,r){"use strict";t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var r={},i=t||{},a=e.split(o),c=i.decode||n,l=0;l<a.length;l++){var u=a[l],f=u.indexOf("=");if(!(f<0)){var p=u.substr(0,f).trim(),d=u.substr(++f,u.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),null==r[p]&&(r[p]=s(d,c))}}return r},t.serialize=function(e,t,r){var n=r||{},o=n.encode||i;if("function"!=typeof o)throw new TypeError("option encode is invalid");if(!a.test(e))throw new TypeError("argument name is invalid");var s=o(t);if(s&&!a.test(s))throw new TypeError("argument val is invalid");var c=e+"="+s;if(null!=n.maxAge){var l=n.maxAge-0;if(isNaN(l)||!isFinite(l))throw new TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(l)}if(n.domain){if(!a.test(n.domain))throw new TypeError("option domain is invalid");c+="; Domain="+n.domain}if(n.path){if(!a.test(n.path))throw new TypeError("option path is invalid");c+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(c+="; HttpOnly");n.secure&&(c+="; Secure");if(n.sameSite){switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var n=decodeURIComponent,i=encodeURIComponent,o=/; */,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e,t){try{return t(e)}catch(t){return e}}},38:function(e,t,r){"use strict";var n=String.prototype.replace,i=/%20/g,o="RFC1738",a="RFC3986";e.exports={default:a,formatters:{RFC1738:function(e){return n.call(e,i,"+")},RFC3986:function(e){return String(e)}},RFC1738:o,RFC3986:a}},44:function(e,t,r){"use strict";var n=r(38),i=Object.prototype.hasOwnProperty,o=Array.isArray,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),s=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:s,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var i=t[n],a=i.obj[i.prop],s=Object.keys(a),c=0;c<s.length;++c){var l=s[c],u=a[l];"object"==typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:a,prop:l}),r.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],i=0;i<r.length;++i)void 0!==r[i]&&n.push(r[i]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r,i,o){if(0===e.length)return e;var s=e;if("symbol"==typeof e?s=Symbol.prototype.toString.call(e):"string"!=typeof e&&(s=String(e)),"iso-8859-1"===r)return escape(s).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var c="",l=0;l<s.length;++l){var u=s.charCodeAt(l);45===u||46===u||95===u||126===u||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||o===n.RFC1738&&(40===u||41===u)?c+=s.charAt(l):u<128?c+=a[u]:u<2048?c+=a[192|u>>6]+a[128|63&u]:u<55296||u>=57344?c+=a[224|u>>12]+a[128|u>>6&63]+a[128|63&u]:(l+=1,u=65536+((1023&u)<<10|1023&s.charCodeAt(l)),c+=a[240|u>>18]+a[128|u>>12&63]+a[128|u>>6&63]+a[128|63&u])}return c},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(o(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){if(!r)return t;if("object"!=typeof r){if(o(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!i.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var a=t;return o(t)&&!o(r)&&(a=s(t,n)),o(t)&&o(r)?(r.forEach((function(r,o){if(i.call(t,o)){var a=t[o];a&&"object"==typeof a&&r&&"object"==typeof r?t[o]=e(a,r,n):t.push(r)}else t[o]=r})),t):Object.keys(r).reduce((function(t,o){var a=r[o];return i.call(t,o)?t[o]=e(t[o],a,n):t[o]=a,t}),a)}}},5:function(e,t){e.exports=window.React},507:function(e,t,r){"use strict";r.r(t),r.d(t,"initializeExPlat",(function(){return k})),r.d(t,"loadExperimentAssignment",(function(){return I})),r.d(t,"dangerouslyGetExperimentAssignment",(function(){return _})),r.d(t,"useExperiment",(function(){return L})),r.d(t,"Experiment",(function(){return M})),r.d(t,"ProvideExperimentData",(function(){return H}));var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function s(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}function o(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var a=Date.now();function s(){var e=Date.now();return a=a<e?e:a+1}function c(e){return s()<1e3*e.ttl+e.retrievedTimestamp}var l=function(e,t){return void 0===t&&(t=60),{experimentName:e,variationName:null,retrievedTimestamp:s(),ttl:Math.max(60,t),isFallbackExperimentAssignment:!0}};function u(e){return"object"==typeof e&&null!==e}function f(e){return"string"==typeof e&&""!==e}function p(e){if(!function(e){return u(e)&&f(e.experimentName)&&(f(e.variationName)||null===e.variationName)&&"number"==typeof e.retrievedTimestamp&&"number"==typeof e.ttl&&0!==e.ttl}(e))throw new Error("Invalid ExperimentAssignment");return e}var d="undefined"!=typeof window&&window.localStorage?window.localStorage:{_data:{},setItem:function(e,t){this._data[e]=t},getItem:function(e){return this._data.hasOwnProperty(e)?this._data[e]:void 0},removeItem:function(e){delete this._data[e]},clear:function(){this._data={}}};function m(e){if(function(e){return u(e)&&u(e.variations)&&"number"==typeof e.ttl&&0<e.ttl}(e))return e;throw new Error("Invalid FetchExperimentAssignmentResponse")}function y(e,t){return i(this,void 0,void 0,(function(){var r,n,a,u,f,y,h,v,g,w,b;return o(this,(function(x){switch(x.label){case 0:return r=s(),f=m,h=(y=e).fetchExperimentAssignment,b={},[4,(E=e.getAnonId,i(void 0,void 0,void 0,(function(){var e,t,r;return o(this,(function(n){switch(n.label){case 0:return[4,E()];case 1:return(e=n.sent())?(d.setItem("explat-last-anon-id",e),d.setItem("explat-last-anon-id-retrieval-time",String(s())),[2,e]):(t=d.getItem("explat-last-anon-id"),r=d.getItem("explat-last-anon-id-retrieval-time"),t&&r&&s()-parseInt(r,10)<864e5?[2,t]:[2,null])}}))})))];case 1:return[4,h.apply(y,[(b.anonId=x.sent(),b.experimentName=t,b)])];case 2:if(n=f.apply(void 0,[x.sent()]),a=n.variations,u=n.ttl,v=Math.max(60,u),(g=Object.entries(a).map((function(e){return{experimentName:e[0],variationName:e[1],retrievedTimestamp:r,ttl:v}})).map(p)).length>1)throw new Error("Received multiple experiment assignments while trying to fetch exactly one.");if(0===g.length)return[2,l(t,v)];if((w=g[0]).experimentName!==t)throw new Error("Newly fetched ExperimentAssignment's experiment name does not match request.");if(!c(w))throw new Error("Newly fetched experiment isn't alive.");return[2,w]}var E}))}))}var h=function(e){return"explat-experiment--"+e};function v(e){p(e);var t=g(e.experimentName);if(t&&e.retrievedTimestamp<t.retrievedTimestamp)throw new Error("Trying to store an older experiment assignment than is present in the store, likely a race condition.");d.setItem(h(e.experimentName),JSON.stringify(e))}function g(e){var t=d.getItem(h(e));if(t)return p(JSON.parse(t))}!function(e){function t(r){var n=e.call(this,r)||this;return Error.captureStackTrace&&Error.captureStackTrace(n,t),n.name="MissingExperimentAssignmentError",n}(function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e)}(Error);var w="undefined"==typeof window?function(e){var t=this;return{loadExperimentAssignment:function(r){return i(t,void 0,void 0,(function(){return o(this,(function(t){return e.logError({message:"Attempting to load ExperimentAssignment in SSR context",experimentName:r}),[2,l(r)]}))}))},dangerouslyGetExperimentAssignment:function(t){return e.logError({message:"Attempting to dangerously get ExperimentAssignment in SSR context",experimentName:t}),l(t)},config:e}}:function(e){var t=this;if("undefined"==typeof window)throw new Error("Running outside of a browser context.");var r={},n=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];try{e.logError.apply(e,t)}catch(e){}};return{loadExperimentAssignment:function(a){return i(t,void 0,void 0,(function(){var s,u,p,d;return o(this,(function(m){switch(m.label){case 0:if(m.trys.push([0,2,,3]),!f(a))throw new Error('Invalid experimentName: "'+a+'"');return(p=g(a))&&c(p)?[2,p]:(void 0===r[a]&&(r[a]=function(r){return n=function(){return i(t,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return[4,y(e,r)];case 1:return v(t=n.sent()),[2,t]}}))}))},a=null,function(){return a||(a=n().finally((function(){a=null}))),a};var n,a}(a)),[4,(h=r[a](),w=1e4,Promise.race([h,new Promise((function(e,t){return setTimeout((function(){return t(new Error("Promise has timed-out."))}),w)}))]))]);case 1:if(!(s=m.sent()))throw new Error("Could not fetch ExperimentAssignment");return[2,s];case 2:return u=m.sent(),n({message:u.message,experimentName:a,source:"loadExperimentAssignment-initialError"}),[3,3];case 3:try{return(p=g(a))?[2,p]:(v(d=l(a)),[2,d])}catch(e){return n({message:e.message,experimentName:a,source:"loadExperimentAssignment-fallbackError"}),[2,l(a)]}return[2]}var h,w}))}))},dangerouslyGetExperimentAssignment:function(t){try{if(!f(t))throw new Error("Invalid experimentName: "+t);var r=g(t);if(!r)throw new Error("Trying to dangerously get an ExperimentAssignment that hasn't loaded.");return e.isDevelopmentMode&&r&&s()-r.retrievedTimestamp<1e3&&n({message:"Warning: Trying to dangerously get an ExperimentAssignment too soon after loading it.",experimentName:t,source:"dangerouslyGetExperimentAssignment"}),r}catch(e){return n({message:e.message,experimentName:t,source:"dangerouslyGetExperimentAssignment-error"}),l(t)}},config:e}};var b=function(){return(b=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.create;Object.create;var x=r(5),E=r.n(x),O={isEligible:!0};const j=e=>{const t=e=>{0};try{const{message:n,...i}=e,o={message:n,properties:{...i,context:"explat",explat_client:"woocommerce"}};{var r;if(null===(r=window.wcTracks)||void 0===r||!r.isEnabled)throw new Error("Tracking is disabled, can't send error to the server");const e=new window.FormData;e.append("error",JSON.stringify(o)),window.fetch("https://public-api.wordpress.com/rest/v1.1/js-error",{method:"POST",body:e}).catch(t)}}catch(e){t()}};var S=r(31);var N=r(311),A=r.n(N);let P=null;const T=async()=>{let e=0;return P=new Promise(t=>{const r=(i=50,(n=()=>{const n=A.a.parse(document.cookie).tk_ai||null;return"string"==typeof n&&""!==n?(clearInterval(r),void t(n)):99<=e?(clearInterval(r),void t(null)):void(e+=1)})(),setInterval(n,i));var n,i}),P},k=()=>{var e;null!==(e=window.wcTracks)&&void 0!==e&&e.isEnabled&&T().catch(e=>j({message:e.message}))};k();const D=w({fetchExperimentAssignment:async({experimentName:e,anonId:t})=>{var r;if(null===(r=window.wcTracks)||void 0===r||!r.isEnabled)throw new Error("Tracking is disabled, can't fetch experimentAssignment");const n=Object(S.stringify)({experiment_name:e,anon_id:null!=t?t:void 0}),i=await window.fetch("https://public-api.wordpress.com/wpcom/v2/experiments/0.1.0/assignments/woocommerce?"+n);return await i.json()},getAnonId:async()=>{var e;return null!==(e=window.wcTracks)&&void 0!==e&&e.isEnabled?await P:null},logError:j,isDevelopmentMode:!1}),{loadExperimentAssignment:I,dangerouslyGetExperimentAssignment:_}=D,C=(R=D,{useExperiment:F=function(e,t){void 0===t&&(t={});var r=b(b({},O),t),n=Object(x.useState)(e)[0],i=Object(x.useState)([!0,null]),o=i[0],a=i[1];return Object(x.useEffect)((function(){var t=!0;return r.isEligible&&R.loadExperimentAssignment(e).then((function(e){t&&a([!1,e])})),function(){t=!1}}),[e,r.isEligible]),e===n||n.startsWith("explat_test")||R.config.logError({message:"[ExPlat] useExperiment: experimentName should never change between renders!"}),r.isEligible?o:[!1,null]},Experiment:function(e){var t=e.defaultExperience,r=e.treatmentExperience,n=e.loadingExperience,i=e.name,o=e.options,a=F(i,o),s=a[0],c=a[1];return s?E.a.createElement(E.a.Fragment,null,n):(null==c?void 0:c.variationName)?E.a.createElement(E.a.Fragment,null,r):E.a.createElement(E.a.Fragment,null,t)},ProvideExperimentData:function(e){var t=e.children,r=e.name,n=e.options,i=F(r,n);return t(i[0],i[1])}});var R,F;const{useExperiment:L,Experiment:M,ProvideExperimentData:H}=C},63:function(e,t,r){"use strict";var n=r(44),i=r(38),o=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Array.isArray,c=Array.prototype.push,l=function(e,t){c.apply(e,s(t)?t:[t])},u=Date.prototype.toISOString,f=i.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:f,formatter:i.formatters[f],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,r,i,o,a,c,u,f,d,m,y,h,v,g){var w,b=t;if("function"==typeof u?b=u(r,b):b instanceof Date?b=m(b):"comma"===i&&s(b)&&(b=n.maybeMap(b,(function(e){return e instanceof Date?m(e):e}))),null===b){if(o)return c&&!v?c(r,p.encoder,g,"key",y):r;b=""}if("string"==typeof(w=b)||"number"==typeof w||"boolean"==typeof w||"symbol"==typeof w||"bigint"==typeof w||n.isBuffer(b))return c?[h(v?r:c(r,p.encoder,g,"key",y))+"="+h(c(b,p.encoder,g,"value",y))]:[h(r)+"="+h(String(b))];var x,E=[];if(void 0===b)return E;if("comma"===i&&s(b))x=[{value:b.length>0?b.join(",")||null:void 0}];else if(s(u))x=u;else{var O=Object.keys(b);x=f?O.sort(f):O}for(var j=0;j<x.length;++j){var S=x[j],N="object"==typeof S&&void 0!==S.value?S.value:b[S];if(!a||null!==N){var A=s(b)?"function"==typeof i?i(r,S):r:r+(d?"."+S:"["+S+"]");l(E,e(N,A,i,o,a,c,u,f,d,m,y,h,v,g))}}return E};e.exports=function(e,t){var r,n=e,c=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=i.default;if(void 0!==e.format){if(!o.call(i.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=i.formatters[r],a=p.filter;return("function"==typeof e.filter||s(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:void 0===e.delimiter?p.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:p.encode,encoder:"function"==typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:a,format:r,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}(t);"function"==typeof c.filter?n=(0,c.filter)("",n):s(c.filter)&&(r=c.filter);var u,f=[];if("object"!=typeof n||null===n)return"";u=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var m=a[u];r||(r=Object.keys(n)),c.sort&&r.sort(c.sort);for(var y=0;y<r.length;++y){var h=r[y];c.skipNulls&&null===n[h]||l(f,d(n[h],h,m,c.strictNullHandling,c.skipNulls,c.encode?c.encoder:null,c.filter,c.sort,c.allowDots,c.serializeDate,c.format,c.formatter,c.encodeValuesOnly,c.charset))}var v=f.join(c.delimiter),g=!0===c.addQueryPrefix?"?":"";return c.charsetSentinel&&("iso-8859-1"===c.charset?g+="utf8=%26%2310003%3B&":g+="utf8=%E2%9C%93&"),v.length>0?g+v:""}},64:function(e,t,r){"use strict";var n=r(44),i=Object.prototype.hasOwnProperty,o=Array.isArray,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},c=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},l=function(e,t,r,n){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,s=r.depth>0&&/(\[[^[\]]*])/.exec(o),l=s?o.slice(0,s.index):o,u=[];if(l){if(!r.plainObjects&&i.call(Object.prototype,l)&&!r.allowPrototypes)return;u.push(l)}for(var f=0;r.depth>0&&null!==(s=a.exec(o))&&f<r.depth;){if(f+=1,!r.plainObjects&&i.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(s[1])}return s&&u.push("["+o.slice(s.index)+"]"),function(e,t,r,n){for(var i=n?t:c(t,r),o=e.length-1;o>=0;--o){var a,s=e[o];if("[]"===s&&r.parseArrays)a=[].concat(i);else{a=r.plainObjects?Object.create(null):{};var l="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,u=parseInt(l,10);r.parseArrays||""!==l?!isNaN(u)&&s!==l&&String(u)===l&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(a=[])[u]=i:a[l]=i:a={0:i}}i=a}return i}(u,t,r,n)}};e.exports=function(e,t){var r=function(e){if(!e)return a;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?a.charset:e.charset;return{allowDots:void 0===e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:a.comma,decoder:"function"==typeof e.decoder?e.decoder:a.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:a.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var u="string"==typeof e?function(e,t){var r,l={},u=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,p=u.split(t.delimiter,f),d=-1,m=t.charset;if(t.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[r]?m="utf-8":"utf8=%26%2310003%3B"===p[r]&&(m="iso-8859-1"),d=r,r=p.length);for(r=0;r<p.length;++r)if(r!==d){var y,h,v=p[r],g=v.indexOf("]="),w=-1===g?v.indexOf("="):g+1;-1===w?(y=t.decoder(v,a.decoder,m,"key"),h=t.strictNullHandling?null:""):(y=t.decoder(v.slice(0,w),a.decoder,m,"key"),h=n.maybeMap(c(v.slice(w+1),t),(function(e){return t.decoder(e,a.decoder,m,"value")}))),h&&t.interpretNumericEntities&&"iso-8859-1"===m&&(h=s(h)),v.indexOf("[]=")>-1&&(h=o(h)?[h]:h),i.call(l,y)?l[y]=n.combine(l[y],h):l[y]=h}return l}(e,r):e,f=r.plainObjects?Object.create(null):{},p=Object.keys(u),d=0;d<p.length;++d){var m=p[d],y=l(m,u[m],r,"string"==typeof e);f=n.merge(f,y,r)}return n.compact(f)}}});