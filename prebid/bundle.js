/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/await-to-js/dist/await-to-js.es5.js":
/*!**********************************************************!*\
  !*** ./node_modules/await-to-js/dist/await-to-js.es5.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"to\": () => (/* binding */ to)\n/* harmony export */ });\n/**\n * @param { Promise } promise\n * @param { Object= } errorExt - Additional Information you can pass to the err object\n * @return { Promise }\n */\nfunction to(promise, errorExt) {\n    return promise\n        .then(function (data) { return [null, data]; })\n        .catch(function (err) {\n        if (errorExt) {\n            Object.assign(err, errorExt);\n        }\n        return [err, undefined];\n    });\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (to);\n//# sourceMappingURL=await-to-js.es5.js.map\n\n\n//# sourceURL=webpack://cookies-sync/./node_modules/await-to-js/dist/await-to-js.es5.js?");

  /***/ }),
  
  /***/ "./src/index.ts":
  /*!**********************!*\
    !*** ./src/index.ts ***!
    \**********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cookieSyncUrl\": () => (/* binding */ cookieSyncUrl)\n/* harmony export */ });\n/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! await-to-js */ \"./node_modules/await-to-js/dist/await-to-js.es5.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\nvar PIXEL_INLINE_STYLE = \"width: 1px; height: 1px; border: 0; opacity: 0;\";\nvar COOKIESYNC_API_URL = \"https://cookiesync.api.bliink.io\";\nvar store = {\n    sizeLimits: {\n        mobile: {\n            width: 252,\n            height: 152,\n        },\n        desktop: {\n            width: 352,\n            height: 252,\n        },\n    },\n    adblock: false,\n};\nvar VENDOR_ID = 658;\nfunction hasConsent(tcData) {\n    var _a, _b;\n    return (((_b = (_a = tcData === null || tcData === void 0 ? void 0 : tcData.vendor) === null || _a === void 0 ? void 0 : _a.consents) === null || _b === void 0 ? void 0 : _b.hasOwnProperty(VENDOR_ID)) &&\n        tcData.vendor.consents[VENDOR_ID] === true);\n}\nfunction insertOnBodyDom(str) {\n    document.body.insertAdjacentHTML(\"beforeend\", str);\n}\nfunction getConsentData() {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            return [2 /*return*/, new Promise(function (resolve) {\n                    var cmp = window.__cmp;\n                    var cmpV2 = window.__tcfapi;\n                    var consentData = {\n                        gdprApplies: true,\n                        hasConsent: false,\n                        consentString: null,\n                    };\n                    if (!cmp && !cmpV2) {\n                        return resolve(consentData);\n                    }\n                    var timer = setTimeout(function () {\n                        resolve(consentData);\n                    }, 10);\n                    if (cmpV2) {\n                        cmpV2(\"getTCData\", 2, function (tcData, success) {\n                            if (success) {\n                                resolve(__assign(__assign({}, consentData), { hasConsent: hasConsent(tcData), consentString: tcData.tcString }));\n                                return;\n                            }\n                            resolve(consentData);\n                        });\n                    }\n                    if (cmp && !cmpV2) {\n                        cmp(\"getConsentData\", null, function (data) {\n                            clearTimeout(timer);\n                            resolve(__assign(__assign({}, consentData), { hasConsent: !!(data && data.consentData) || false, consentString: data && data.consentData }));\n                        });\n                    }\n                })];\n        });\n    });\n}\nfunction cookieSyncUrl(partner, uid) {\n    return encodeURIComponent(\"\".concat(COOKIESYNC_API_URL, \"/cookiesync?partner=\").concat(partner, \"&uid=\").concat(uid));\n}\n(function cookieSync() {\n    return __awaiter(this, void 0, void 0, function () {\n        var urlSearchParams, params, gdpr, coppa, _a, consentData, smartUrl, script, azerionUrl, appnexusUrl, movveUrl, pubmaticUrl, richaudienceUrl;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    urlSearchParams = new URLSearchParams(window.location.search);\n                    params = Object.fromEntries(urlSearchParams.entries());\n                    console.log(\"params\", params);\n                    gdpr = params[\"gdpr\"];\n                    coppa = params[\"coppa\"];\n                    return [4 /*yield*/, (0,await_to_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(getConsentData())];\n                case 1:\n                    _a = _b.sent(), consentData = _a[1];\n                    console.log(\"bliink cookieSync executed coppa\", coppa);\n                    if (!consentData.hasConsent && (Number(gdpr) === 1 || Number(coppa) === 1)) {\n                        return [2 /*return*/];\n                    }\n                    smartUrl = cookieSyncUrl(\"smart\", \"[sas_uid]\");\n                    insertOnBodyDom(\"<img src=\\\"https://sync.smartadserver.com/getuid?nwid=3392&gdpr_consent=\".concat(consentData.consentString, \"&url=\").concat(smartUrl, \"\\\" style=\\\"\").concat(PIXEL_INLINE_STYLE, \"\\\" />\"));\n                    script = document.createElement(\"script\");\n                    script.src =\n                        \"https://prg.smartadserver.com/ac?out=js&nwid=3392&siteid=305791&pgname=rg&fmtid=81127&tgt=[sas_target]&visit=m&tmstp=[timestamp]&clcturl=[countgo]\";\n                    script.onerror = function () {\n                        store.adblock = true;\n                    };\n                    document.body.appendChild(script);\n                    azerionUrl = cookieSyncUrl(\"azerion\", \"{PUB_USER_ID}\");\n                    insertOnBodyDom(\"<img src=\\\"https://ad.360yield.com/server_match?partner_id=1531&r=\".concat(azerionUrl, \"\\\" style=\\\"\").concat(PIXEL_INLINE_STYLE, \"\\\" />\"));\n                    // freewheel\n                    insertOnBodyDom(\"<img src=\\\"https://ads.stickyadstv.com/auto-user-sync\\\" style=\\\"\".concat(PIXEL_INLINE_STYLE, \"\\\" />\"));\n                    // adyoulike\n                    insertOnBodyDom(\"<iframe src=\\\"https://cookiesync.api.bliink.io/getuid?url=https%3A%2F%2Fvisitor.omnitagjs.com%2Fvisitor%2Fisync%3Fuid%3D1625272249969090bb9d544bd6d8d645%26name%3DBLIINK%26visitor%3D%24UID%26gdpr%3D1%26gdpr_consent_string%3D\".concat(consentData.consentString, \"\\\" style=\\\"\").concat(PIXEL_INLINE_STYLE, \"\\\"></iframe>\"));\n                    // verizon\n                    insertOnBodyDom(\"<img src=\\\"https://pixel.advertising.com/ups/58444/sync?&gdpr=\".concat(gdpr, \"&gdpr_consent=\").concat(consentData.consentString, \"&redir=true&uid=sampleUserId&coppa=\").concat(coppa, \"\\\" style=\\\"\").concat(PIXEL_INLINE_STYLE, \"\\\" />\"));\n                    insertOnBodyDom(\"<img src=\\\"https://ups.analytics.yahoo.com/ups/58499/occ?gdpr=\".concat(gdpr, \"&gdpr_consent=\").concat(consentData.consentString, \"&coppa=\").concat(coppa, \"\\\" style=\\\"\").concat(PIXEL_INLINE_STYLE, \"\\\" />\"));\n                    appnexusUrl = cookieSyncUrl(\"appnexus\", \"$UID\");\n                    insertOnBodyDom(\"<iframe src=\\\"https://acdn.adnxs.com/dmp/async_usersync.html\\\" style=\\\"\".concat(PIXEL_INLINE_STYLE, \"\\\"></iframe>\"));\n                    insertOnBodyDom(\"<img src=\\\"https://secure.adnxs.com/getuid?\".concat(appnexusUrl, \"\\\" style=\\\"\").concat(PIXEL_INLINE_STYLE, \"\\\" />\"));\n                    // onetag\n                    insertOnBodyDom(\"<iframe src=\\\"https://onetag-sys.com/usync/?pubId=75779831fd8c740&gdpr=\".concat(gdpr, \"&gdprConsentString=\").concat(consentData.consentString, \"&coppa=\").concat(coppa, \"\\\" style=\\\"\").concat(PIXEL_INLINE_STYLE, \"\\\"></iframe>\"));\n                    movveUrl = cookieSyncUrl(\"movve\", \"{{VID}}\");\n                    insertOnBodyDom(\"<img src=\\\"https://vid.vidoomy.com/sync?gdpr=\".concat(gdpr, \"&gdpr_consent=\").concat(consentData.consentString, \"&redirect=\").concat(movveUrl, \"&coppa=\").concat(coppa, \"\\\" style=\\\"\").concat(PIXEL_INLINE_STYLE, \"\\\" />\"));\n                    pubmaticUrl = cookieSyncUrl(\"pubmatic\", \"$UID\");\n                    insertOnBodyDom(\"<iframe src=\\\"https://ads.pubmatic.com/AdServer/js/user_sync.html?p=161484&gdpr=\".concat(gdpr, \"&gdpr_consent=\").concat(consentData.consentString, \"&userIdMacro=$UID&predirect=\").concat(pubmaticUrl, \"&coppa=\").concat(coppa, \"\\\" style=\\\"\").concat(PIXEL_INLINE_STYLE, \"\\\"></iframe>\"));\n                    // freewheel\n                    insertOnBodyDom('<img src=\"https://ads.stickyadstv.com/auto-user-sync\" style=\"${PIXEL_INLINE_STYLE}\" />');\n                    insertOnBodyDom(\"<iframe src=\\\"https://ads.stickyadstv.com/user-matching?id=3506&gdpr=\".concat(gdpr, \"&gdpr_consent=\").concat(consentData.consentString, \"&coppa=\").concat(coppa, \"\\\" style=\\\"\").concat(PIXEL_INLINE_STYLE, \"\\\"></iframe>\"));\n                    richaudienceUrl = cookieSyncUrl(\"richaudience\", \"[PDID]\");\n                    insertOnBodyDom(\"<iframe src=\\\"https://sync.richaudience.com/74889303289e27f327ad0c6de7be7264/?consentString=\".concat(consentData.consentString, \"&r=\").concat(richaudienceUrl, \"\\\" style=\\\"\").concat(PIXEL_INLINE_STYLE, \"\\\"></iframe>\"));\n                    console.log(\"all set*********\");\n                    return [2 /*return*/];\n            }\n        });\n    });\n})();\nconsole.log(\"bliink welcome iframe\");\n\n\n//# sourceURL=webpack://cookies-sync/./src/index.ts?");
  
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
  /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
  /******/ 	
  /******/ })()
  ;