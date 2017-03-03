!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("dnn-label"),require("dnn-multi-line-input"),require("dnn-tooltip"),require("react")):"function"==typeof define&&define.amd?define(["dnn-label","dnn-multi-line-input","dnn-tooltip","react"],t):"object"==typeof exports?exports.MultiLineInputWithError=t(require("dnn-label"),require("dnn-multi-line-input"),require("dnn-tooltip"),require("react")):e.MultiLineInputWithError=t(e["dnn-label"],e["dnn-multi-line-input"],e["dnn-tooltip"],e.react)}(this,function(e,t,n,o){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(8),s=o(a),u=n(7),c=o(u),f=n(6),d=o(f),y=n(5),m=o(y);n(4);var h=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return l(t,e),p(t,[{key:"render",value:function(){var e=this.props,t="dnn-multi-line-input-with-error"+(e.error?" error":"")+(" "+e.className)+(e.enabled?"":" disabled"),n=e.errorMessage instanceof Array?e.errorMessage:[e.errorMessage];return s["default"].createElement("div",{className:t,style:e.style},e.label&&s["default"].createElement(m["default"],{labelFor:e.inputId,label:e.label,tooltipMessage:e.tooltipMessage,tooltipPlace:e.infoTooltipPlace,tooltipActive:e.tooltipMessage,labelType:e.labelType,className:e.infoTooltipClassName,style:Object.assign(e.tooltipMessage?{}:{marginBottom:5},e.labelStyle)}),e.extraToolTips,s["default"].createElement("div",{className:"input-tooltip-container "+e.labelType},s["default"].createElement(d["default"],{id:e.inputId,onChange:e.onChange,onBlur:e.onBlur,onFocus:e.onFocus,onKeyDown:e.onKeyDown,onKeyPress:e.onKeyPress,onKeyUp:e.onKeyUp,value:e.value,tabIndex:e.tabIndex,style:Object.assign({marginBottom:32},e.inputStyle),placeholder:e.placeholder,enabled:e.enabled,maxLength:e.maxLength,"aria-label":"Content"}),s["default"].createElement(c["default"],{messages:n,type:"error",className:e.placement,tooltipPlace:e.tooltipPlace,rendered:e.error})))}}]),t}(a.Component);h.propTypes={inputId:a.PropTypes.string,label:a.PropTypes.string,infoTooltipClassName:a.PropTypes.string,tooltipMessage:a.PropTypes.oneOfType([a.PropTypes.string,a.PropTypes.array]),infoTooltipPlace:a.PropTypes.string,labelType:a.PropTypes.string,className:a.PropTypes.string,inputSize:a.PropTypes.oneOf(["large","small"]),error:a.PropTypes.bool,errorMessage:a.PropTypes.oneOfType([a.PropTypes.string,a.PropTypes.array]),tooltipPlace:a.PropTypes.string,placement:a.PropTypes.oneOf(["outside","inside"]),onChange:a.PropTypes.func,onBlur:a.PropTypes.func,onFocus:a.PropTypes.func,onKeyDown:a.PropTypes.func,onKeyPress:a.PropTypes.func,onKeyUp:a.PropTypes.func,value:a.PropTypes.any,enabled:a.PropTypes.bool,tabIndex:a.PropTypes.number,inputStyle:a.PropTypes.object,placeholder:a.PropTypes.string,style:a.PropTypes.object,labelStyle:a.PropTypes.object,extraToolTips:a.PropTypes.node,maxLength:a.PropTypes.number},h.defaultProps={error:!1,enabled:!0,className:"",placement:"inside",labelType:"block",errorMessage:["This field has an error."]},t["default"]=h},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".dnn-multi-line-input-with-error{display:inline-block;position:relative}.dnn-multi-line-input-with-error .dnn-label label{font-weight:700;cursor:pointer;float:left}.dnn-multi-line-input-with-error textarea{color:#46292b}.dnn-multi-line-input-with-error.error .input-tooltip-container .dnn-ui-common-multi-line-input{border-bottom:2px solid #ea2134}.dnn-multi-line-input-with-error.disabled .dnn-label label,.dnn-multi-line-input-with-error.disabled .input-tooltip-container .dnn-ui-common-multi-line-input{color:#959695;cursor:not-allowed}.dnn-multi-line-input-with-error .input-tooltip-container{float:left;position:relative;width:100%}.dnn-multi-line-input-with-error .input-tooltip-container .dnn-ui-common-multi-line-input{width:100%;border-radius:0}.dnn-multi-line-input-with-error .input-tooltip-container.inline{width:auto}.dnn-multi-line-input-with-error .input-tooltip-container .dnn-ui-common-tooltip{position:absolute;top:7px;right:7px}.dnn-multi-line-input-with-error .input-tooltip-container .dnn-ui-common-tooltip .tooltip-text{max-width:255px;text-align:center;padding:7px 15px}.dnn-multi-line-input-with-error .input-tooltip-container .dnn-ui-common-tooltip.outside{right:-25px}.dnn-multi-line-input-with-error .input-tooltip-container .dnn-ui-common-tooltip svg{width:20px;height:20px}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var l=t[r];"number"==typeof l[0]&&o[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),e.push(l))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=d[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(s(o.parts[i],t))}else{for(var l=[],i=0;i<o.parts.length;i++)l.push(s(o.parts[i],t));d[o.id]={id:o.id,refs:1,parts:l}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],l=r[1],p=r[2],a=r[3],s={css:l,media:p,sourceMap:a};n[i]?n[i].parts.push(s):t.push(n[i]={id:i,parts:[s]})}return t}function i(e,t){var n=h(),o=v[v.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function l(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function p(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function a(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function s(e,t){var n,o,r;if(t.singleton){var i=g++;n=b||(b=p(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(t),o=f.bind(null,n),r=function(){l(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(t),o=c.bind(null,n),r=function(){l(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function u(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=T(t,r);else{var i=document.createTextNode(r),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(i,l[t]):e.appendChild(i)}}function c(e,t){var n=t.css,o=t.media;t.sourceMap;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,o=(t.media,t.sourceMap);o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var d={},y=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=y(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=y(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,g=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var i=[],l=0;l<n.length;l++){var p=n[l],a=d[p.id];a.refs--,i.push(a)}if(e){var s=r(e);o(s,t)}for(var l=0;l<i.length;l++){var a=i[l];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete d[a.id]}}}};var T=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(1);"string"==typeof o&&(o=[[e.id,o,""]]);n(3)(o,{});o.locals&&(e.exports=o.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=o}])});