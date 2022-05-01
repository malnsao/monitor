/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/_user-agent@1.0.4@user-agent/index.js":
/*!************************************************************!*\
  !*** ./node_modules/_user-agent@1.0.4@user-agent/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nmodule.exports = __webpack_require__(/*! ./lib/user-agent */ \"./node_modules/_user-agent@1.0.4@user-agent/lib/user-agent.js\");\n\n//# sourceURL=webpack://monitor/./node_modules/_user-agent@1.0.4@user-agent/index.js?");

/***/ }),

/***/ "./node_modules/_user-agent@1.0.4@user-agent/lib/user-agent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_user-agent@1.0.4@user-agent/lib/user-agent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n/*!\n * user-agent\n * Copyright(c) 2010-2011 TJ Holowaychuk.\n * Authored by TJ Holowaychuk\n * MIT Licensed\n */\n\n/**\n * Library version.\n */\n\nexports.version = '1.0.4'\n\n/**\n * Parse the given user-agent string into an object of usable data.\n *\n * Example:\n *\n *      var userAgent = require('user-agent')\n *      userAgent.parse('Mozilla/5.0 (Windows; U; Windows NT 5.1; en) AppleWebKit/526.9 (KHTML, like Gecko) Version/4.0dp1 Safari/526.8')\n *      // => { name: 'safari', version: '4.0dp1', os: 'Windows XP', full: '... same string as above ...' }\n *\n * @param  {String} str\n * @return {Object}\n * @api public\n */\n\nexports.parse = function(str) {\n  var agent = { full: str, name: name(str) };\n  agent.version = version(str, agent.name);\n  agent.fullName = agent.name + ' ' + agent.version;\n  agent.os = os(str);\n  return agent;\n};\n\n/**\n * Get the browser version based on the given browser name.\n *\n * @param  {String} str\n * @param  {String} name\n * @return {String}\n * @api private\n */\n\nfunction version(str, name) {\n  if (name === 'safari') name = 'version';\n  if (name){\n\t  return new RegExp(name + '[\\\\/ ]([\\\\d\\\\w\\\\.-]+)', 'i').exec(str) && RegExp.$1 || '';\n  }else{\n\t  var m=str.match(/version[\\/ ]([\\d\\w\\.]+)/i);\n\t  return m && m.length>1 ? m[1] : '';\n  }  \n}\n\n/**\n * Supported operating systems.\n */\n\nvar operatingSystems = {\n    'iPad': /ipad/i\n  , 'iPhone': /iphone/i\n  , 'Windows Vista': /windows nt 6\\.0/i\n  , 'Windows 7': /windows nt 6\\.\\d+/i\n  , 'Windows 2003': /windows nt 5\\.2+/i\n  , 'Windows XP': /windows nt 5\\.1+/i\n  , 'Windows 2000': /windows nt 5\\.0+/i\n  , 'OS X $1.$2': /os x (\\d+)[._](\\d+)/i\n  , 'Linux': /linux/i\n  , 'Googlebot': /googlebot/i\n};\n\nvar osNames = Object.keys(operatingSystems);\n\n/**\n * Get operating system from the given user-agent string.\n *\n * @param  {String} str\n * @return {String}\n * @api private\n */\n\nfunction os(str) {\n  var captures;\n  for (var i = 0, len = osNames.length; i < len; ++i) {\n    if (captures = operatingSystems[osNames[i]].exec(str)) {\n      return ~osNames[i].indexOf('$1')\n        ? osNames[i].replace(/\\$(\\d+)/g, function(_, n){\n          return captures[n]\n        }) : osNames[i];\n    }\n  }\n  return '';\n}\n\n/**\n * Supported browser names.\n */\n\nvar names = [\n   'opera'\n , 'konqueror'\n , 'firefox'\n , 'chrome'\n , 'epiphany'\n , 'safari'\n , 'msie'\n , 'curl'\n];\n\n/**\n * Get browser name for the given user-agent string.\n *\n * @param  {String} str\n * @return {String}\n * @api private\n */\n\nfunction name(str) {\n  str = str.toLowerCase();\n  for (var i = 0, len = names.length; i < len; ++i) {\n    if (str.indexOf(names[i]) !== -1) return names[i];\n  }\n  return '';\n}\n\n\n//# sourceURL=webpack://monitor/./node_modules/_user-agent@1.0.4@user-agent/lib/user-agent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor */ \"./src/monitor/index.js\");\n\n\n//# sourceURL=webpack://monitor/./src/index.js?");

/***/ }),

/***/ "./src/monitor/index.js":
/*!******************************!*\
  !*** ./src/monitor/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_jsError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/jsError */ \"./src/monitor/lib/jsError.js\");\n\r\n(0,_lib_jsError__WEBPACK_IMPORTED_MODULE_0__.injectJsError)()\r\n\r\n\n\n//# sourceURL=webpack://monitor/./src/monitor/index.js?");

/***/ }),

/***/ "./src/monitor/lib/jsError.js":
/*!************************************!*\
  !*** ./src/monitor/lib/jsError.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"injectJsError\": () => (/* binding */ injectJsError)\n/* harmony export */ });\n/* harmony import */ var _utils_getLastEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getLastEvent */ \"./src/monitor/utils/getLastEvent.js\");\n/* harmony import */ var _utils_getSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getSelector */ \"./src/monitor/utils/getSelector.js\");\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n\r\n\r\n\r\n\r\nfunction injectJsError() {\r\n    window.addEventListener('error', function (event) {\r\n        console.log(event, 1111111111)\r\n        if (event.target && (event.target.src || event.target.href)) {\r\n            let log = {\r\n                /** 监控指标大类 */\r\n                kind: 'stability',\r\n                /** 监控指标小类型 */\r\n                type: 'error',\r\n                /** 资源加载错误 */\r\n                errorType: 'resourceError',\r\n                /** 报错文件 */\r\n                fileName: event.target.src || event.target.href,\r\n                /** 标签名 */\r\n                tagName: event.target.tagName,\r\n                /** 报错栈 */\r\n                stack: getEventListeners(event.error.stack),\r\n                /** 最后一个操作的元素 */\r\n                selector: lastEvent ? (0,_utils_getSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lastEvent.path) : ''\r\n            }\r\n            _utils_tracker__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send(log)\r\n        } else {\r\n            let lastEvent = (0,_utils_getLastEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n            let log = {\r\n                /** 监控指标大类 */\r\n                kind: 'stability',\r\n                /** 监控指标小类型 */\r\n                type: 'error',\r\n                /** JS错误 */\r\n                errorType: 'jsError',\r\n                /** 报错信息 */\r\n                message: event.message,\r\n                /** 报错文件 */\r\n                fileName: event.filename,\r\n                /** 报错行列 */\r\n                position: `${event.lineno}:${event.colno}`,\r\n                /** 报错栈 */\r\n                stack: getEventListeners(event.error.stack),\r\n                /** 最后一个操作的元素 */\r\n                selector: lastEvent ? (0,_utils_getSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lastEvent.path) : ''\r\n            }\r\n            _utils_tracker__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send(log)\r\n        }\r\n\r\n    }, true)\r\n\r\n    window.addEventListener('unhandledrejection', (event) => {\r\n        let lastEvent = (0,_utils_getLastEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        let message;\r\n        let fileName;\r\n        let line = 0;\r\n        let column = 0;\r\n        let stack = '';\r\n        let reason = event.reason;\r\n\r\n        if (typeof reason === 'string') {\r\n            message = reason\r\n        } else if (typeof reason === 'object') {\r\n            if (reason.stack) {\r\n                let matchResult = reason.stack.match(/at\\s+(.+):(\\d+):(\\d+)/)\r\n                fileName = matchResult[1]\r\n                line = matchResult[2]\r\n                column = matchResult[3]\r\n                stack = getEventListeners(stack)\r\n                message = reason.message\r\n            }\r\n        }\r\n        let log = {\r\n            /** 监控指标大类 */\r\n            kind: 'stability',\r\n            /** 监控指标小类型 */\r\n            type: 'error',\r\n            /** promise错误 */\r\n            errorType: 'PromiseError',\r\n            /** 报错信息 */\r\n            message,\r\n            /** 报错文件 */\r\n            fileName,\r\n            /** 报错行列 */\r\n            position: `${line}:${column}`,\r\n            /** 报错栈 */\r\n            stack,\r\n            /** 最后一个操作的元素 */\r\n            selector: lastEvent ? (0,_utils_getSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lastEvent.path) : ''\r\n        }\r\n        _utils_tracker__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send(log)\r\n    })\r\n\r\n    function getEventListeners(stack) {\r\n        return stack.split('\\n').slice(1).map((item) => item.replace(/^\\s+at\\s+/g, '')).join('^')\r\n    }\r\n}\n\n//# sourceURL=webpack://monitor/./src/monitor/lib/jsError.js?");

/***/ }),

/***/ "./src/monitor/utils/getLastEvent.js":
/*!*******************************************!*\
  !*** ./src/monitor/utils/getLastEvent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet lastEvent;\r\n['click', 'touchstart', 'mousedown', 'keydown', 'mouseover'].forEach(eventType => {\r\n    document.addEventListener(eventType, (event) => {\r\n        lastEvent = event\r\n    }, {\r\n        capture: true,\r\n        passive: true\r\n    })\r\n})\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    return lastEvent\r\n}\n\n//# sourceURL=webpack://monitor/./src/monitor/utils/getLastEvent.js?");

/***/ }),

/***/ "./src/monitor/utils/getSelector.js":
/*!******************************************!*\
  !*** ./src/monitor/utils/getSelector.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getSelectors(path) {\r\n    return path.reverse().filter((item) => item !== document && item !== window).map(element => {\r\n        let selector = '';\r\n        if (element.id) {\r\n            return `${element.nodeName.toLowerCase()}#${element.id}`\r\n        } else if (element.className && typeof element.className === 'string') {\r\n            return `${element.nodeName.toLowerCase()}.${element.className}`\r\n        } else {\r\n            selector = element.nodeName.toLowerCase()\r\n        }\r\n        return selector\r\n    }).join(' ')\r\n}\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(path) {\r\n    if (Array.isArray(path)) {\r\n        return getSelectors(path)\r\n    }\r\n}\n\n//# sourceURL=webpack://monitor/./src/monitor/utils/getSelector.js?");

/***/ }),

/***/ "./src/monitor/utils/tracker.js":
/*!**************************************!*\
  !*** ./src/monitor/utils/tracker.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet userAgent = __webpack_require__(/*! user-agent */ \"./node_modules/_user-agent@1.0.4@user-agent/index.js\")\r\nfunction getExtraData() {\r\n    return {\r\n        /** 报错页面 */\r\n        title: document.title,\r\n        /** 报错地址 */\r\n        url: location.href,\r\n        /** 报错时间 */\r\n        timestamp: Date.now(),\r\n        /** 用户信息 */\r\n        userAgent: userAgent.parse(navigator.userAgent)\r\n    }\r\n}\r\nclass Tracker {\r\n    constructor() {\r\n        this.url = '';\r\n        this.xhr = new XMLHttpRequest;\r\n    }\r\n    send(data = {}) {\r\n        let extraData = getExtraData()\r\n        let log = { ...extraData, ...data }\r\n        console.log(log, '上报日志')\r\n        // this.xhr.open('POST', this.url, true);\r\n        // let body = JSON.stringify(data);\r\n        // this.xhr.send(body)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Tracker());\n\n//# sourceURL=webpack://monitor/./src/monitor/utils/tracker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;