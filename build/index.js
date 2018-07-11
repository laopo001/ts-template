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
/***/ (function(module, exports) {

/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Wednesday, July 11th 2018, 12:03:37 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */
console.log(123);
var lengthOfLongestSubstring = function (s) {
    var len = s.length;
    var arr = [];
    var max = 0;
    for (var i = 0; i < len; i++) {
        var character = s[i];
        if (arr.includes(character)) {
            var t = void 0;
            while (t = arr.shift()) {
                if (t === character) {
                    break;
                }
            }
            arr.push(character);
        }
        else {
            arr.push(character);
        }
        max = Math.max(max, arr.length);
    }
    console.log(max);
    return max;
};
lengthOfLongestSubstring("abcabcbb");
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var max = 0;
    var left = 0;
    var right = height.length - 1;
    while (left < right) {
        if (height[left] > height[right]) {
            max = Math.max(max, height[right] * (right - left));
            right = right - 1;
        }
        else {
            max = Math.max(max, height[left] * (right - left));
            left = left + 1;
        }
    }
    return max;
};
var a = maxArea([1, 2, 1]);
console.log(a);
/**
* Definition for binary tree with next pointer.
* function TreeLinkNode(val) {
*     this.val = val;
*     this.left = this.right = this.next = null;
* }
*/
/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
    return TreeNode;
}());
var root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
var connect = function (root) {
    if (root == null)
        return;
    var arr = [];
    arr.push(root);
    run(arr, arr);
    // console.log(arr)
    var t = 1;
    tag1: for (var i = 0; i < arr.length; i++) {
        // let t = 1;
        // while (2 ** t <= i + 2) {
        //     if (2 ** t === i + 2) {
        //         continue tag1;
        //     }
        //     t++;
        // }
        if (Math.pow(2, t) === i + 2) {
            t++;
            continue tag1;
        }
        arr[i] && (arr[i].next = arr[i + 1]);
    }
    console.log(root);
    function run(children, arr) {
        var newChildren = [];
        for (var i = 0; i < children.length; i++) {
            if (children[i] == null) {
                continue;
            }
            newChildren.push(children[i].left);
            newChildren.push(children[i].right);
        }
        arr.push.apply(arr, newChildren);
        newChildren.length && run(newChildren, arr);
    }
};
console.log(connect(root));


/***/ })

/******/ });
//# sourceMappingURL=index.js.map