!function u(i,c,a){function l(t,e){if(!c[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(f)return f(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=c[t]={exports:{}};i[t][0].call(o.exports,function(e){return l(i[t][1][e]||e)},o,o.exports,u,i,c,a)}return c[t].exports}for(var f="function"==typeof require&&require,e=0;e<a.length;e++)l(a[e]);return l}({1:[function(e,t,n){"use strict";var r=c(e("./toggleMenu")),o=c(e("./navbarOnScroll")),u=c(e("./smoothScroll")),i=c(e("./menuActive"));function c(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(),(0,o.default)(),(0,u.default)(),(0,i.default)()},{"./menuActive":2,"./navbarOnScroll":3,"./smoothScroll":4,"./toggleMenu":5}],2:[function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(n,"__esModule",{value:!0});n.default=function(){var e=document.querySelector("#menu-list").querySelectorAll(".menu-list-item > .nav-item"),n=[].concat(o(e)).map(function(e){return e.hash}),r=function(){return document.documentElement.scrollTop},t=function(){var t=void 0;t=r()<5?["#home"]:n.filter(function(e){if(t=document.querySelector(e),Math.floor(t.getBoundingClientRect().top+r())<r()+120)return e;var t}),document.querySelector('a[href="'+t[t.length-1]+'"]').parentElement.classList.add("-active"),[].concat(o(e)).filter(function(e){return e.getAttribute("href")!==t[t.length-1]}).map(function(e){return e.parentElement.classList.remove("-active")})};window.addEventListener("scroll",function(){t()}),window.addEventListener("DOMContentLoaded",function(){t()})}},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default=function(){var e=document.querySelector("#navbar");window.addEventListener("scroll",function(){window.pageYOffset>e.offsetTop?e.classList.add("-on-scroll"):e.classList.remove("-on-scroll")})}},{}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default=function(){var e=document.querySelector("#menu-list").querySelectorAll(".menu-list-item > .nav-item");[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e)).map(function(e){e.addEventListener("click",function(e){e.preventDefault(),t(e.target.hash,{duration:350,offset:-70})})});var t=function(e,t){var n=window.pageYOffset,r={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||function(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}},o="string"==typeof e?r.offset+document.querySelector(e).getBoundingClientRect().top:e,u="function"==typeof r.duration?r.duration(o):r.duration,i=void 0,c=void 0;requestAnimationFrame(function(e){a(i=e)});var a=function e(t){c=t-i,window.scrollTo(0,r.easing(c,n,o,u)),c<u?requestAnimationFrame(e):l()},l=function(){window.scrollTo(0,n+o),"function"==typeof r.callback&&r.callback()}}}},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default=function(){var t=document.querySelector("#hamburguer-btn"),n=document.querySelector("#menu-list"),r=document.querySelector("#language-list"),o=(n.querySelectorAll(".menu-list-item > .anchor"),function(){t.classList.remove("-open"),n.classList.remove("-open"),r.classList.remove("-open")});t.addEventListener("click",function(e){e.preventDefault(),t.classList.toggle("-open"),n.classList.toggle("-open"),r.classList.toggle("-open")}),n.addEventListener("click",function(e){"A"===e.target.nodeName&&o()}),r.addEventListener("click",function(e){"A"===e.target.nodeName&&o()})}},{}]},{},[1]);
//# sourceMappingURL=app.js.map