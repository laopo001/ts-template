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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

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
 * Last Modified: Monday, April 1st 2019, 9:30:21 pm
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
Object.defineProperty(exports, "__esModule", { value: true });
var macro_task_1 = __webpack_require__(/*! ./macro_task */ "./src/macro_task.ts");
macro_task_1.MacroTask.run(function () {
    return 111;
}).then(function (x) {
});
var t = new macro_task_1.MacroTask(function () {
    return 456;
}).then(function (res) {
    console.log(res);
});
function macro() {
    return macro_task_1.MacroTask.run(function (x) { return macro_task_1.MacroTask.run(function (x) { return 'zxxx'; }); });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, macro_task_1.MacroTask.resolve(Promise.resolve('asdfasdf')).then(function (x) {
                        return x;
                    })];
                case 1:
                    res = _a.sent();
                    // res = await macro();
                    console.log(res);
                    return [2 /*return*/];
            }
        });
    });
}
main();
console.log(123);


/***/ }),

/***/ "./src/macro_task.ts":
/*!***************************!*\
  !*** ./src/macro_task.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * File: c:\Users\35327\Projects\ts-template\src\macro_task.ts
 * Project: c:\Users\35327\Projects\ts-template
 * Created Date: Monday, April 1st 2019, 5:09:23 pm
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Monday, April 1st 2019, 9:35:14 pm
 * Modified By:
 * -----
 * Copyright (c) 2019 liaodh
 */
Object.defineProperty(exports, "__esModule", { value: true });
var STATE;
(function (STATE) {
    STATE["PENDING"] = "PENDING";
    STATE["FULFILLED"] = "FULFILLED";
    STATE["REJECTED"] = "REJECTED";
})(STATE || (STATE = {}));
var MacroTask = /** @class */ (function () {
    function MacroTask(callback, time) {
        var _this = this;
        if (time === void 0) { time = 0; }
        this.callback = callback;
        this.state = STATE.PENDING;
        this.onfulfilledArray = [];
        this.onrejectedArray = [];
        setTimeout(function () {
            try {
                _this.value = callback();
                if (_this.value instanceof MacroTask || _this.value instanceof MacroTask) {
                    _this.value.then(function (v) {
                        _this.value = v;
                    });
                }
                _this.state = STATE.FULFILLED;
            }
            catch (e) {
                _this.state = STATE.REJECTED;
            }
            if (_this.state === STATE.FULFILLED) {
                _this.onfulfilledArray.forEach(function (x) {
                    x(_this.value);
                });
            }
            else {
                _this.onrejectedArray.forEach(function (x) {
                    x(_this.value);
                });
            }
        }, time);
    }
    MacroTask.run = function (callback, time) {
        if (time === void 0) { time = 0; }
        return new MacroTask(callback, time);
    };
    MacroTask.resolve = function (value, time) {
        if (time === void 0) { time = 0; }
        return MacroTask.run(function () { return value; }, time);
    };
    MacroTask.prototype.then = function (onfulfilled, onrejected) {
        if (this.state === STATE.PENDING) {
            this.onfulfilledArray.push(onfulfilled);
            this.onrejectedArray.push(onrejected);
        }
        else {
            if (this.state === STATE.FULFILLED) {
                onfulfilled(this.value);
            }
            else {
                onrejected(this.value);
            }
        }
        return this;
    };
    MacroTask.prototype.catch = function (onrejected) {
        if (this.state === STATE.PENDING) {
            this.onrejectedArray.push(onrejected);
        }
        else {
            onrejected(this.value);
        }
        return this;
    };
    MacroTask.prototype.finally = function () {
        console.log('no implement');
        return this;
    };
    Object.defineProperty(MacroTask.prototype, Symbol.toStringTag, {
        get: function () {
            return 'MacroTask Object';
        },
        enumerable: true,
        configurable: true
    });
    return MacroTask;
}());
exports.MacroTask = MacroTask;
var MacroTaskPool = /** @class */ (function () {
    function MacroTaskPool() {
    }
    return MacroTaskPool;
}());


/***/ })

/******/ });
//# sourceMappingURL=index.js.map