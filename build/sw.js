/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sw.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sw.ts":
/*!*******************!*\
  !*** ./src/sw.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * File: c:\Users\35327\Projects\ts-template\src\sw.js
 * Project: c:\Users\35327\Projects\ts-template
 * Created Date: Wednesday, August 1st 2018, 3:55:31 pm
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Friday, August 3rd 2018, 1:01:32 am
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var VERSION = 'v0';
var cacheFiles = [
    '/'
];
var hostReg = /localhost/;
self.addEventListener('install', function (evt) {
    console.log('installing…');
    evt.waitUntil(caches.open(VERSION).then(function (cache) {
        return cache.addAll(cacheFiles);
    }));
});
self.addEventListener('activate', function (event) {
    console.log('activating…');
    event.waitUntil(Promise.all([
        clients.claim(),
        caches.keys().then(function (cacheNames) {
            return Promise.all(cacheNames.map(function (cacheName) {
                if (cacheName !== VERSION) {
                    return caches.delete(cacheName);
                }
            }));
        })
    ]));
});
self.addEventListener('fetch', function (evt) {
    // console.log(evt.request.url);
    evt.respondWith(caches.match(evt.request).then(function (response) {
        if (response) {
            return response;
        }
        var request = evt.request.clone();
        return download(request);
        return fetch(request).then(function (response) {
            if (response && response.status === 200 && response.url.match(hostReg)) {
                var responseClone = response.clone();
                return responseClone.clone().arrayBuffer().then(function (buffer) {
                    console.log(buffer);
                    return new Response(buffer);
                });
                // caches.open(VERSION).then(function (cache) {
                //     if (evt.request.method !== "POST") {
                //         cache.put(evt.request, responseClone);
                //     }
                //     // cache.put(evt.request, responseClone);
                // });
            }
            else {
                return response;
            }
            // return response;
        });
    }));
});
function download(req) {
    return __awaiter(this, void 0, void 0, function () {
        function request(url, start, end) {
            if (end === void 0) { end = ''; }
            return fetch(url, {
                'headers': {
                    'Range': "bytes=" + start + "-" + end,
                },
                'method': 'GET',
            });
        }
        var url, reqClone, firstResponse, len, type, byteOffset, arr, q, buffers, i_1, res_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = req.url;
                    reqClone = req.clone();
                    return [4 /*yield*/, request(url, 0, 0).catch()];
                case 1:
                    firstResponse = _a.sent();
                    if (!(firstResponse && firstResponse.status === 206)) return [3 /*break*/, 3];
                    len = parseInt(firstResponse.headers.get('Content-Range').split('/')[1]);
                    type = firstResponse.headers.get('Content-Type');
                    console.log(firstResponse.status, len);
                    byteOffset = 0;
                    arr = [];
                    q = 1000;
                    while (byteOffset + q <= len) {
                        arr.push(request(url, byteOffset, byteOffset + q - 1).then(function (x) { return x.arrayBuffer(); }));
                        byteOffset += q;
                    }
                    arr.push(request(url, byteOffset).then(function (x) { return x.arrayBuffer(); }));
                    return [4 /*yield*/, Promise.all(arr)];
                case 2:
                    buffers = _a.sent();
                    i_1 = 0;
                    res_1 = new Uint8Array(len);
                    new Uint8Array;
                    buffers.forEach(function (x) {
                        new Uint8Array(x).forEach(function (y) {
                            res_1[i_1] = y;
                            i_1++;
                        });
                    });
                    // let blob = new Blob([res], { type });
                    // console.log(res, blob);
                    // buffers = await Promise.all(buffers.map(x =>
                    //     x.arrayBuffer()
                    // ))
                    // console.log(buffers)
                    return [2 /*return*/, new Response(res_1)];
                case 3: return [2 /*return*/, fetch(reqClone)];
            }
        });
    });
}


/***/ })

/******/ });
//# sourceMappingURL=sw.js.map