/**
 * Bundle of AWEMA sticky-params transpiled and polyfilled
 * Generated: 2019-03-27 09:58:05
 * Version: 1.0.0
 */

!function(){"use strict";function t(t,n){return t(n={exports:{}},n.exports),n.exports}var n,r,e,o=t(function(t){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)}),i=function(t){return"object"==typeof t?null!==t:"function"==typeof t},c=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t},u=function(t,n,r){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}},a={f:{}.propertyIsEnumerable},s=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},f={}.toString,p=function(t){return f.call(t).slice(8,-1)},l=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==p(t)?t.split(""):Object(t)},h=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},y=function(t){return l(h(t))},v=function(t,n){if(!i(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!i(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!i(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!i(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")},d={}.hasOwnProperty,g=function(t,n){return d.call(t,n)},w=function(t){try{return!!t()}catch(t){return!0}},m=!w(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),b=o.document,_=i(b)&&i(b.createElement),S=!m&&!w(function(){return 7!=Object.defineProperty((t="div",_?b.createElement(t):{}),"a",{get:function(){return 7}}).a;var t}),O=Object.getOwnPropertyDescriptor,E={f:m?O:function(t,n){if(t=y(t),n=v(n,!0),S)try{return O(t,n)}catch(t){}if(g(t,n))return s(!a.f.call(t,n),t[n])}},j=function(t,n){if(c(t),!i(n)&&null!==n)throw TypeError(n+": can't set as prototype!")},x={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=u(Function.call,E.f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return j(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:j}.set,P=Object.defineProperty,k={f:m?Object.defineProperty:function(t,n,r){if(c(t),n=v(n,!0),c(r),S)try{return P(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},A=Math.ceil,I=Math.floor,T=function(t){return isNaN(t=+t)?0:(t>0?I:A)(t)},M=Math.min,F=Math.max,R=Math.min,W=t(function(t){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)}),N=(W.version,t(function(t){var n=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,r){return n[t]||(n[t]=void 0!==r?r:{})})("versions",[]).push({version:W.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),C=0,U=Math.random(),G=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++C+U).toString(36))},J=N("keys"),L=(n=!1,function(t,r,e){var o,i,c=y(t),u=(o=c.length)>0?M(T(o),9007199254740991):0,a=function(t,n){return(t=T(t))<0?F(t+n,0):R(t,n)}(e,u);if(n&&r!=r){for(;u>a;)if((i=c[a++])!=i)return!0}else for(;u>a;a++)if((n||a in c)&&c[a]===r)return n||a||0;return!n&&-1}),$=J[r="IE_PROTO"]||(J[r]=G(r)),z=function(t,n){var r,e=y(t),o=0,i=[];for(r in e)r!=$&&g(e,r)&&i.push(r);for(;n.length>o;)g(e,r=n[o++])&&(~L(i,r)||i.push(r));return i},B="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),D=B.concat("length","prototype"),Q={f:Object.getOwnPropertyNames||function(t){return z(t,D)}},q=t(function(t){var n=N("wks"),r=o.Symbol,e="function"==typeof r;(t.exports=function(t){return n[t]||(n[t]=e&&r[t]||(e?r:G)("Symbol."+t))}).store=n}),H=q("match"),K=m?function(t,n,r){return k.f(t,n,s(1,r))}:function(t,n,r){return t[n]=r,t},V=N("native-function-to-string",Function.toString),X=t(function(t){var n=G("src"),r=(""+V).split("toString");W.inspectSource=function(t){return V.call(t)},(t.exports=function(t,e,i,c){var u="function"==typeof i;u&&(g(i,"name")||K(i,"name",e)),t[e]!==i&&(u&&(g(i,n)||K(i,n,t[e]?""+t[e]:r.join(String(e)))),t===o?t[e]=i:c?t[e]?t[e]=i:K(t,e,i):(delete t[e],K(t,e,i)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[n]||V.call(this)})}),Y=q("species"),Z=k.f,tt=Q.f,nt=o.RegExp,rt=nt,et=nt.prototype,ot=/a/g,it=/a/g,ct=new nt(ot)!==ot;if(m&&(!ct||w(function(){return it[q("match")]=!1,nt(ot)!=ot||nt(it)==it||"/a/i"!=nt(ot,"i")}))){nt=function(t,n){var r,e,o,u,a,s,f=this instanceof nt,l=i(r=t)&&(void 0!==(e=r[H])?!!e:"RegExp"==p(r)),h=void 0===n;return!f&&l&&t.constructor===nt&&h?t:(o=ct?new rt(l&&!h?t.source:t,n):rt((l=t instanceof nt)?t.source:t,l&&h?function(){var t=c(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}.call(t):n),u=nt,(s=(f?this:et).constructor)!==u&&"function"==typeof s&&(a=s.prototype)!==u.prototype&&i(a)&&x&&x(o,a),o)};for(var ut=function(t){t in nt||Z(nt,t,{configurable:!0,get:function(){return rt[t]},set:function(n){rt[t]=n}})},at=tt(rt),st=0;at.length>st;)ut(at[st++]);et.constructor=nt,nt.prototype=et,X(o,"RegExp",nt)}e=o["RegExp"],m&&e&&!e[Y]&&k.f(e,Y,{configurable:!0,get:function(){return this}});var ft=Object.keys||function(t){return z(t,B)},pt=function(t,n,r){var e,i,c,a,s=t&pt.F,f=t&pt.G,p=t&pt.S,l=t&pt.P,h=t&pt.B,y=f?o:p?o[n]||(o[n]={}):(o[n]||{}).prototype,v=f?W:W[n]||(W[n]={}),d=v.prototype||(v.prototype={});for(e in f&&(r=n),r)c=((i=!s&&y&&void 0!==y[e])?y:r)[e],a=h&&i?u(c,o):l&&"function"==typeof c?u(Function.call,c):c,y&&X(y,e,c,t&pt.U),v[e]!=c&&K(v,e,a),l&&d[e]!=c&&(d[e]=c)};o.core=W,pt.F=1,pt.G=2,pt.S=4,pt.P=8,pt.B=16,pt.W=32,pt.U=64,pt.R=128;var lt=pt;function ht(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=[],e=!0,o=!1,i=void 0;try{for(var c,u=t[Symbol.iterator]();!(e=(c=u.next()).done)&&(r.push(c.value),!n||r.length!==n);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return r}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}!function(t,n){var r=(W.Object||{})[t]||Object[t],e={};e[t]=n(r),lt(lt.S+lt.F*w(function(){r(1)}),"Object",e)}("keys",function(){return function(t){return ft(function(t){return Object(h(t))}(t))}});var yt=function(t){var n=this;this.inited=!1;var r=AWEMA.utils.object,e="awema-sticky-params-"+window.location.hostname;return r.isObject(t)&&!r.isEmpty(t)&&window.history&&"function"==typeof window.history.pushState&&function(){try{return localStorage.setItem("lsTest","lsTest"),localStorage.removeItem("lsTest"),!0}catch(t){return!1}}()?(this.routes=function(t){var n=[];return Object.keys(t).forEach(function(r){var e=t[r];n.push({regexp:new RegExp("^"+r.replace(/\*/g,"(.*?)")+"$"),params:e})}),n}(t),this.saved=function(t){try{var n=localStorage.getItem(t);return JSON.parse(n)||{}}catch(t){return{}}}(e),this.inited=!0,this.update(),window.addEventListener("popstate",this.update.bind(this)),window.addEventListener("beforeunload",function(){var t,r;n.update(),t=e,r=n.saved,window.localStorage.setItem(t,JSON.stringify(r))}),this):this};yt.prototype.update=function(){if(!this.inited)return this;var t,n,r,e,o,i,c=AWEMA.utils,u=c.object,a=window.location,s=a.pathname,f=(t=a.search,n=AWEMA.utils.object,r=n.get,e=n.set,o=t.replace(/^\?/,"").split("&"),i={},""===t?i:(o.forEach(function(t){var n=ht(t.split("="),2),o=n[0],c=n[1];o=decodeURIComponent(o),c=decodeURIComponent(c);try{c=JSON.parse(c)}catch(t){}if(/\[\]$/.test(o)){o=o.replace(/\[\]$/,"");var u=r(i,o);u?u.push(c):e(i,o,[c])}else e(i,o,c)}),i)),p=function(t,n){for(var r=[],e=0;e<n.length;e++){var o=n[e];if(o.regexp.test(t)){var i=Array.isArray(o.params)?o.params:[o.params];if(i.indexOf("*")>-1){r="*";break}r=r.concat(i)}}return r}(s,this.routes);if(this._path===s)if("*"===p)u.set(this.saved,s,f);else{var l={};p.forEach(function(t){var n=u.get(f,t);u.set(l,t,n)}),u.set(this.saved,s,l)}else{var h=u.get(this.saved,s,{}),y=Object.assign(h,f),v=u.isEmpty(y)?"":"?"+c.stringifyQuery(y),d=a.origin+a.pathname+v+a.hash;window.history.replaceState(window.history.state,document.title,d)}return this._path=s,this};var vt={name:"sticky-params",version:"1.0.0",install:function(){AWEMA.StickyParams=new yt(AWEMA_CONFIG.stickyParams)}};if(window&&"AWEMA"in window)AWEMA.use(vt);else{var dt="__awema_plugins_stack__";window[dt]=window[dt]||[],window[dt].push(vt)}}();
