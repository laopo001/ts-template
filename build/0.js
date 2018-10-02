(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../../RProjects/rust-npm/pkg/rust_npm.js":
/*!*************************************************************!*\
  !*** /mnt/c/Users/35327/RProjects/rust-npm/pkg/rust_npm.js ***!
  \*************************************************************/
/*! exports provided: __wbg_alert_5c49b5ade2b2ee6b, greet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_alert_5c49b5ade2b2ee6b", function() { return __wbg_alert_5c49b5ade2b2ee6b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greet", function() { return greet; });
/* harmony import */ var _rust_npm_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_npm_bg */ "../../RProjects/rust-npm/pkg/rust_npm_bg.wasm");
/* tslint:disable */


let cachedDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _rust_npm_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory = new Uint8Array(_rust_npm_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

function __wbg_alert_5c49b5ade2b2ee6b(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    alert(varg0);
}
/**
* @returns {void}
*/
function greet() {
    return _rust_npm_bg__WEBPACK_IMPORTED_MODULE_0__["greet"]();
}



/***/ }),

/***/ "../../RProjects/rust-npm/pkg/rust_npm_bg.wasm":
/*!******************************************************************!*\
  !*** /mnt/c/Users/35327/RProjects/rust-npm/pkg/rust_npm_bg.wasm ***!
  \******************************************************************/
/*! exports provided: memory, __indirect_function_table, __heap_base, __data_end, greet */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./rust_npm */ "../../RProjects/rust-npm/pkg/rust_npm.js");


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Tuesday, October 2nd 2018, 11:33:03 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */
Object.defineProperty(exports, "__esModule", { value: true });
var wasm = __webpack_require__(/*! rust-npm */ "../../RProjects/rust-npm/pkg/rust_npm.js");
wasm.greet();
console.log(123);


/***/ })

}]);
//# sourceMappingURL=0.js.map