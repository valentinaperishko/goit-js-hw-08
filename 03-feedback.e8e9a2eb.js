!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return s.Date.now()};function g(e,t,n){var r,i,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function S(e){return c=e,f=setTimeout(O,t),d?g(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function O(){var e=b();if(h(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function T(e){return f=void 0,v&&r?g(e):(r=i=void 0,a)}function w(){var e=b(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(s)return f=setTimeout(O,t),g(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?a:T(b())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var S,h=document.querySelector(".feedback-form"),O=document.querySelector(".feedback-form input"),T=document.querySelector(".feedback-form textarea"),w="feedback-form-state",x={};h.addEventListener("submit",(function(e){if(e.preventDefault,""!==O.value&&""!==T.value)return console.log(x),localStorage.removeItem(w),void e.currentTarget.reset();alert("Fill all the forms!")})),h.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,localStorage.setItem(w,JSON.stringify(x))}),1e3)),(S=localStorage.getItem(w))&&(x=JSON.parse(S),T.value=x.message||"",O.value=x.email||"")}();
//# sourceMappingURL=03-feedback.e8e9a2eb.js.map
