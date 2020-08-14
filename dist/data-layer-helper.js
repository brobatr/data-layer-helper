(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';/*
 jQuery v1.9.1 (c) 2005, 2012
 jQuery Foundation, Inc. jquery.org/license.
*/
var f=/\[object (Boolean|Number|String|Function|Array|Date|RegExp|Arguments)\]/;function g(a){return null==a?String(a):(a=f.exec(Object.prototype.toString.call(Object(a))))?a[1].toLowerCase():"object"}function m(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)}function n(a){if(!a||"object"!=g(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!m(a,"constructor")&&!m(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(var b in a);return void 0===b||m(a,b)};function p(a,b){var d={},c=d;a=a.split(".");for(var e=0;e<a.length-1;e++)c=c[a[e]]={};c[a[a.length-1]]=b;return d}function q(a,b){var d=!a._clear,c;for(c in a)if(m(a,c)){var e=a[c];"array"===g(e)&&d?("array"===g(b[c])||(b[c]=[]),q(e,b[c])):n(e)&&d?(n(b[c])||(b[c]={}),q(e,b[c])):b[c]=e}delete b._clear};/*
 Copyright 2012 Google Inc. All rights reserved. */
function r(a,b,d){b=void 0===b?{}:b;"function"===typeof b?b={listener:b,listenToPast:void 0===d?!1:d,processNow:!0,commandProcessors:{}}:b={listener:b.listener||function(){},listenToPast:b.listenToPast||!1,processNow:void 0===b.processNow?!0:b.processNow,commandProcessors:b.commandProcessors||{}};this.b=a;this.m=b.listener;this.l=b.listenToPast;this.h=this.j=!1;this.f={};this.g=[];this.a=[];this.c=b.commandProcessors;this.i=u(this);var c=this.b.push,e=this;this.b.push=function(){var k=[].slice.call(arguments,
0),l=c.apply(e.b,k);v(e,k);return l};b.processNow&&this.process()}r.prototype.process=function(){this.registerProcessor("set",function(){var a={};1===arguments.length&&"object"===g(arguments[0])?a=arguments[0]:2===arguments.length&&"string"===g(arguments[0])&&(a=p(arguments[0],arguments[1]));return a});this.j=!0;this.g.push.apply(this.g,this.b);v(this,[],!this.l)};r.prototype.get=function(a){var b=this.f;a=a.split(".");for(var d=0;d<a.length;d++){if(void 0===b[a[d]])return;b=b[a[d]]}return b};
r.prototype.flatten=function(){this.b.splice(0,this.b.length);this.b[0]={};q(this.f,this.b[0])};r.prototype.registerProcessor=function(a,b){a in this.c||(this.c[a]=[]);this.c[a].push(b)};
function v(a,b,d){d=void 0===d?!1:d;if(a.j&&(a.a.push.apply(a.a,b),!a.h)){for(;0<a.a.length;){b=a.a.shift();if("array"===g(b))a:{var c=a.f;g(b[0]);for(var e=b[0].split("."),k=e.pop(),l=b.slice(1),h=0;h<e.length;h++){if(void 0===c[e[h]])break a;c=c[e[h]]}try{c[k].apply(c,l)}catch(w){}}else if("arguments"===g(b)){e=a;k=[];l=b[0];if(e.c[l])for(c=e.c[l].length,h=0;h<c;h++)k.push(e.c[l][h].apply(e.i,[].slice.call(b,1)));a.a.push.apply(a.a,k)}else if("function"==typeof b)try{b.call(a.i)}catch(w){}else if(n(b))for(var t in b)q(p(t,
b[t]),a.f);else continue;d||(a.h=!0,a.m(a.f,b),a.h=!1)}0===a.a.length&&0<a.g.length&&a.a.push(a.g.shift());0<a.a.length&&v(a,[],d)}}r.prototype.registerProcessor=r.prototype.registerProcessor;r.prototype.flatten=r.prototype.flatten;r.prototype.get=r.prototype.get;r.prototype.process=r.prototype.process;window.DataLayerHelper=r;function u(a){return{set:function(b,d){q(p(b,d),a.f)},get:function(b){return a.get(b)}}};})();
