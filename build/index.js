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

/***/ "./node_modules/capnp-ts/lib/constants.js":
/*!************************************************!*\
  !*** ./node_modules/capnp-ts/lib/constants.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Perform some bit gymnastics to determine the native endian format.
var tmpWord = new DataView(new ArrayBuffer(8));
(new Uint16Array(tmpWord.buffer))[0] = 0x0102;
/** Default size (in bytes) for newly allocated segments. */
exports.DEFAULT_BUFFER_SIZE = 4096;
exports.DEFAULT_DECODE_LIMIT = 64 << 20; // 64 MiB
/**
 * Limit to how deeply nested pointers are allowed to be. The root struct of a message will start at this value, and it
 * is decremented as pointers are dereferenced.
 */
exports.DEFAULT_DEPTH_LIMIT = 64;
/**
 * Limit to the number of **bytes** that can be traversed in a single message. This is necessary to prevent certain
 * classes of DoS attacks where maliciously crafted data can be self-referencing in a way that wouldn't trigger the
 * depth limit.
 *
 * For this reason, it is advised to cache pointers into variables and not constantly dereference them since the
 * message's traversal limit gets decremented each time.
 */
exports.DEFAULT_TRAVERSE_LIMIT = 64 << 20; // 64 MiB
/**
 * When allocating array buffers dynamically (while packing or in certain Arena implementations) the previous buffer's
 * size is multiplied by this number to determine the next buffer's size. This is chosen to keep both time spent
 * reallocating and wasted memory to a minimum.
 *
 * Smaller numbers would save memory at the expense of CPU time.
 */
exports.GROWTH_FACTOR = 1.5;
/** A bitmask applied to obtain the size of a list pointer. */
exports.LIST_SIZE_MASK = 0x00000007;
/** Maximum number of bytes to dump at once when dumping array buffers to string. */
exports.MAX_BUFFER_DUMP_BYTES = 8192;
/** The maximum value for a 32-bit integer. */
exports.MAX_INT32 = 0x7fffffff;
/** The maximum value for a 32-bit unsigned integer. */
exports.MAX_UINT32 = 0xffffffff;
/** The largest integer that can be precisely represented in JavaScript. */
exports.MAX_SAFE_INTEGER = 9007199254740991;
/** Maximum limit on the number of segments in a message stream. */
exports.MAX_STREAM_SEGMENTS = 512;
/** The smallest integer that can be precisely represented in JavaScript. */
exports.MIN_SAFE_INTEGER = -9007199254740991;
/** Minimum growth increment for a SingleSegmentArena. */
exports.MIN_SINGLE_SEGMENT_GROWTH = 4096;
/**
 * This will be `true` if the machine running this code stores numbers natively in little-endian format. This is useful
 * for some numeric type conversions when the endianness does not affect the output. Using the native endianness for
 * these operations is _slightly_ faster.
 */
exports.NATIVE_LITTLE_ENDIAN = tmpWord.getUint8(0) === 0x02;
/**
 * When packing a message, this is the number of zero bytes required after a SPAN (0xff) tag is written to the packed
 * message before the span is terminated.
 *
 * This little detail is left up to the implementation because it can be tuned for performance. Setting this to a higher
 * value may help with messages that contain a ton of text/data.
 *
 * It is imperative to never set this below 1 or else BAD THINGS. You have been warned.
 */
exports.PACK_SPAN_THRESHOLD = 2;
/**
 * How far to travel into a nested pointer structure during a deep copy; when this limit is exhausted the copy
 * operation will throw an error.
 */
exports.POINTER_COPY_LIMIT = 32;
/** A bitmask for looking up the double-far flag on a far pointer. */
exports.POINTER_DOUBLE_FAR_MASK = 0x00000004;
/** A bitmask for looking up the pointer type. */
exports.POINTER_TYPE_MASK = 0x00000003;
/** Used for some 64-bit conversions, equal to Math.pow(2, 32). */
exports.VAL32 = 0x100000000;
/** The maximum value allowed for depth traversal limits. */
exports.MAX_DEPTH = exports.MAX_INT32;
/** The maximum byte length for a single segment. */
exports.MAX_SEGMENT_LENGTH = exports.MAX_UINT32;

//# sourceMappingURL=constants.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/errors.js":
/*!*********************************************!*\
  !*** ./node_modules/capnp-ts/lib/errors.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This file contains all the error strings used in the library. Also contains silliness.
 *
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/capnp-ts/lib/constants.js");
var trace = debug_1.default('capnp:errors');
trace('load');
function assertNever(n) {
    throw new Error(exports.INVARIANT_UNREACHABLE_CODE + (" (never block hit with: " + n + ")"));
}
exports.assertNever = assertNever;
// Invariant violations (sometimes known as "precondition failed").
//
// All right, hold up the brakes. This is a serious 1 === 0 WHAT THE FAILURE moment here. Tell the SO's you won't be
// home for dinner.
exports.INVARIANT_UNREACHABLE_CODE = 'CAPNP-TS000 Unreachable code detected.';
// Message errors.
//
// Now who told you it would be a good idea to fuzz the inputs? You just made the program sad.
exports.MSG_INVALID_FRAME_HEADER = 'CAPNP-TS001 Attempted to parse an invalid message frame header; are you sure this is a Cap\'n Proto message?';
exports.MSG_NO_SEGMENTS_IN_ARENA = 'CAPNP-TS002 Attempted to preallocate a message with no segments in the arena.';
exports.MSG_PACK_NOT_WORD_ALIGNED = 'CAPNP-TS003 Attempted to pack a message that was not word-aligned.';
exports.MSG_SEGMENT_OUT_OF_BOUNDS = 'CAPNP-TS004 Segment ID %X is out of bounds for message %s.';
exports.MSG_SEGMENT_TOO_SMALL = 'CAPNP-TS005 First segment must have at least enough room to hold the root pointer (8 bytes).';
// Used for methods that are not yet implemented.
//
// My bad. I'll get to it. Eventually.
exports.NOT_IMPLEMENTED = 'CAPNP-TS006 %s is not implemented.';
// Pointer-related errors.
//
// Look, this is probably the hardest part of the code. Cut some slack here! You probably found a bug.
exports.PTR_ADOPT_COMPOSITE_STRUCT = 'CAPNP-TS007 Attempted to adopt a struct into a composite list (%s).';
exports.PTR_ADOPT_WRONG_MESSAGE = 'CAPNP-TS008 Attempted to adopt %s into a pointer in a different message %s.';
exports.PTR_ALREADY_ADOPTED = 'CAPNP-TS009 Attempted to adopt %s more than once.';
exports.PTR_COMPOSITE_SIZE_UNDEFINED = 'CAPNP-TS010 Attempted to set a composite list without providing a composite element size.';
exports.PTR_DEPTH_LIMIT_EXCEEDED = 'CAPNP-TS011 Nesting depth limit exceeded for %s.';
exports.PTR_DISOWN_COMPOSITE_STRUCT = 'CAPNP-TS012 Attempted to disown a struct member from a composite list (%s).';
exports.PTR_INIT_COMPOSITE_STRUCT = 'CAPNP-TS013 Attempted to initialize a struct member from a composite list (%s).';
exports.PTR_INIT_NON_GROUP = 'CAPNP-TS014 Attempted to initialize a group field with a non-group struct class.';
exports.PTR_INVALID_FAR_TARGET = 'CAPNP-TS015 Target of a far pointer (%s) is another far pointer.';
exports.PTR_INVALID_LIST_SIZE = 'CAPNP-TS016 Invalid list element size: %x.';
exports.PTR_INVALID_POINTER_TYPE = 'CAPNP-TS017 Invalid pointer type: %x.';
exports.PTR_INVALID_UNION_ACCESS = 'CAPNP-TS018 Attempted to access getter on %s for union field %s that is not currently set (wanted: %d, found: %d).';
exports.PTR_OFFSET_OUT_OF_BOUNDS = 'CAPNP-TS019 Pointer offset %a is out of bounds for underlying buffer.';
exports.PTR_STRUCT_DATA_OUT_OF_BOUNDS = 'CAPNP-TS020 Attempted to access out-of-bounds struct data (struct: %s, %d bytes at %a, data words: %d).';
exports.PTR_STRUCT_POINTER_OUT_OF_BOUNDS = 'CAPNP-TS021 Attempted to access out-of-bounds struct pointer (%s, index: %d, length: %d).';
exports.PTR_TRAVERSAL_LIMIT_EXCEEDED = 'CAPNP-TS022 Traversal limit exceeded! Slow down! %s';
exports.PTR_WRONG_LIST_TYPE = 'CAPNP-TS023 Cannot convert %s to a %s list.';
exports.PTR_WRONG_POINTER_TYPE = 'CAPNP-TS024 Attempted to convert pointer %s to a %s type.';
exports.PTR_WRONG_COMPOSITE_DATA_SIZE = 'CAPNP-TS025 Attempted to convert %s to a composite list with the wrong data size (found: %d).';
exports.PTR_WRONG_COMPOSITE_PTR_SIZE = 'CAPNP-TS026 Attempted to convert %s to a composite list with the wrong pointer size (found: %d).';
exports.PTR_WRONG_STRUCT_DATA_SIZE = 'CAPNP-TS027 Attempted to convert %s to a struct with the wrong data size (found: %d).';
exports.PTR_WRONG_STRUCT_PTR_SIZE = 'CAPNP-TS028 Attempted to convert %s to a struct with the wrong pointer size (found: %d).';
// Custom error messages for the built-in `RangeError` class.
//
// You don't get a witty comment with these.
exports.RANGE_INT32_OVERFLOW = 'CAPNP-TS029 32-bit signed integer overflow detected.';
exports.RANGE_INT64_UNDERFLOW = 'CAPNP-TS030 Buffer is not large enough to hold a word.';
exports.RANGE_INVALID_UTF8 = 'CAPNP-TS031 Invalid UTF-8 code sequence detected.';
exports.RANGE_SIZE_OVERFLOW = "CAPNP-TS032 Size %x exceeds maximum " + constants_1.MAX_SEGMENT_LENGTH.toString(16) + ".";
exports.RANGE_UINT32_OVERFLOW = 'CAPNP-TS033 32-bit unsigned integer overflow detected.';
// Segment-related errors.
//
// These suck. Deal with it.
exports.SEG_BUFFER_NOT_ALLOCATED = 'CAPNP-TS034 allocate() needs to be called at least once before getting a buffer.';
exports.SEG_GET_NON_ZERO_SINGLE = 'CAPNP-TS035 Attempted to get a segment other than 0 (%d) from a single segment arena.';
exports.SEG_ID_OUT_OF_BOUNDS = 'CAPNP-TS036 Attempted to get an out-of-bounds segment (%d).';
exports.SEG_NOT_WORD_ALIGNED = 'CAPNP-TS037 Segment buffer length %d is not a multiple of 8.';
exports.SEG_REPLACEMENT_BUFFER_TOO_SMALL = 'CAPNP-TS038 Attempted to replace a segment buffer with one that is smaller than the allocated space.';
exports.SEG_SIZE_OVERFLOW = "CAPNP-TS039 Requested size %x exceeds maximum value (" + constants_1.MAX_SEGMENT_LENGTH + ").";
// Custom error messages for the built-in `TypeError` class.
//
// If it looks like a duck, quacks like an elephant, and has hooves for feet, it's probably JavaScript.
exports.TYPE_COMPOSITE_SIZE_UNDEFINED = 'CAPNP-TS040 Must provide a composite element size for composite list pointers.';
exports.TYPE_GET_GENERIC_LIST = 'CAPNP-TS041 Attempted to call get() on a generic list.';
exports.TYPE_SET_GENERIC_LIST = 'CAPNP-TS042 Attempted to call set() on a generic list.';

//# sourceMappingURL=errors.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/capnp-ts/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var serialization_1 = __webpack_require__(/*! ./serialization */ "./node_modules/capnp-ts/lib/serialization/index.js");
exports.ListElementSize = serialization_1.ListElementSize;
exports.Message = serialization_1.Message;
exports.ObjectSize = serialization_1.ObjectSize;
exports.AnyPointerList = serialization_1.AnyPointerList;
exports.BoolList = serialization_1.BoolList;
exports.CompositeList = serialization_1.CompositeList;
exports.Data = serialization_1.Data;
exports.DataList = serialization_1.DataList;
exports.Float32List = serialization_1.Float32List;
exports.Float64List = serialization_1.Float64List;
exports.Int16List = serialization_1.Int16List;
exports.Int32List = serialization_1.Int32List;
exports.Int64List = serialization_1.Int64List;
exports.Int8List = serialization_1.Int8List;
exports.Interface = serialization_1.Interface;
exports.InterfaceList = serialization_1.InterfaceList;
exports.List = serialization_1.List;
exports.Orphan = serialization_1.Orphan;
exports.PointerList = serialization_1.PointerList;
exports.PointerType = serialization_1.PointerType;
exports.Pointer = serialization_1.Pointer;
exports.Struct = serialization_1.Struct;
exports.Text = serialization_1.Text;
exports.TextList = serialization_1.TextList;
exports.Uint16List = serialization_1.Uint16List;
exports.Uint32List = serialization_1.Uint32List;
exports.Uint64List = serialization_1.Uint64List;
exports.Uint8List = serialization_1.Uint8List;
exports.VoidList = serialization_1.VoidList;
exports.Void = serialization_1.Void;
exports.getBitMask = serialization_1.getBitMask;
exports.getFloat32Mask = serialization_1.getFloat32Mask;
exports.getFloat64Mask = serialization_1.getFloat64Mask;
exports.getInt16Mask = serialization_1.getInt16Mask;
exports.getInt32Mask = serialization_1.getInt32Mask;
exports.getInt64Mask = serialization_1.getInt64Mask;
exports.getInt8Mask = serialization_1.getInt8Mask;
exports.getUint16Mask = serialization_1.getUint16Mask;
exports.getUint32Mask = serialization_1.getUint32Mask;
exports.getUint64Mask = serialization_1.getUint64Mask;
exports.getUint8Mask = serialization_1.getUint8Mask;
var types_1 = __webpack_require__(/*! ./types */ "./node_modules/capnp-ts/lib/types/index.js");
exports.Int64 = types_1.Int64;
exports.Uint64 = types_1.Uint64;

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/arena/arena-allocation-result.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/arena/arena-allocation-result.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var trace = debug_1.default('capnp:serialization:arena:arena-allocation-result');
trace('load');
var ArenaAllocationResult = /** @class */ (function () {
    function ArenaAllocationResult(id, buffer) {
        this.id = id;
        this.buffer = buffer;
        trace('new', this);
    }
    return ArenaAllocationResult;
}());
exports.ArenaAllocationResult = ArenaAllocationResult;

//# sourceMappingURL=arena-allocation-result.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/arena/arena-kind.js":
/*!*********************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/arena/arena-kind.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ArenaKind;
(function (ArenaKind) {
    ArenaKind[ArenaKind["SINGLE_SEGMENT"] = 0] = "SINGLE_SEGMENT";
    ArenaKind[ArenaKind["MULTI_SEGMENT"] = 1] = "MULTI_SEGMENT";
})(ArenaKind = exports.ArenaKind || (exports.ArenaKind = {}));

//# sourceMappingURL=arena-kind.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/arena/arena.js":
/*!****************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/arena/arena.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var errors_1 = __webpack_require__(/*! ../../errors */ "./node_modules/capnp-ts/lib/errors.js");
var arena_kind_1 = __webpack_require__(/*! ./arena-kind */ "./node_modules/capnp-ts/lib/serialization/arena/arena-kind.js");
var multi_segment_arena_1 = __webpack_require__(/*! ./multi-segment-arena */ "./node_modules/capnp-ts/lib/serialization/arena/multi-segment-arena.js");
var single_segment_arena_1 = __webpack_require__(/*! ./single-segment-arena */ "./node_modules/capnp-ts/lib/serialization/arena/single-segment-arena.js");
var trace = debug_1.default('capnp:arena');
trace('load');
var Arena = /** @class */ (function () {
    function Arena() {
    }
    Arena.allocate = allocate;
    Arena.getBuffer = getBuffer;
    Arena.getNumSegments = getNumSegments;
    return Arena;
}());
exports.Arena = Arena;
function allocate(minSize, segments, a) {
    switch (a.kind) {
        case arena_kind_1.ArenaKind.MULTI_SEGMENT:
            return multi_segment_arena_1.MultiSegmentArena.allocate(minSize, a);
        case arena_kind_1.ArenaKind.SINGLE_SEGMENT:
            return single_segment_arena_1.SingleSegmentArena.allocate(minSize, segments, a);
        default:
            return errors_1.assertNever(a);
    }
}
exports.allocate = allocate;
function getBuffer(id, a) {
    switch (a.kind) {
        case arena_kind_1.ArenaKind.MULTI_SEGMENT:
            return multi_segment_arena_1.MultiSegmentArena.getBuffer(id, a);
        case arena_kind_1.ArenaKind.SINGLE_SEGMENT:
            return single_segment_arena_1.SingleSegmentArena.getBuffer(id, a);
        default:
            return errors_1.assertNever(a);
    }
}
exports.getBuffer = getBuffer;
function getNumSegments(a) {
    switch (a.kind) {
        case arena_kind_1.ArenaKind.MULTI_SEGMENT:
            return multi_segment_arena_1.MultiSegmentArena.getNumSegments(a);
        case arena_kind_1.ArenaKind.SINGLE_SEGMENT:
            return single_segment_arena_1.SingleSegmentArena.getNumSegments();
        default:
            return errors_1.assertNever(a);
    }
}
exports.getNumSegments = getNumSegments;

//# sourceMappingURL=arena.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/arena/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/arena/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var arena_1 = __webpack_require__(/*! ./arena */ "./node_modules/capnp-ts/lib/serialization/arena/arena.js");
exports.Arena = arena_1.Arena;
var arena_kind_1 = __webpack_require__(/*! ./arena-kind */ "./node_modules/capnp-ts/lib/serialization/arena/arena-kind.js");
exports.ArenaKind = arena_kind_1.ArenaKind;
var multi_segment_arena_1 = __webpack_require__(/*! ./multi-segment-arena */ "./node_modules/capnp-ts/lib/serialization/arena/multi-segment-arena.js");
exports.MultiSegmentArena = multi_segment_arena_1.MultiSegmentArena;
var single_segment_arena_1 = __webpack_require__(/*! ./single-segment-arena */ "./node_modules/capnp-ts/lib/serialization/arena/single-segment-arena.js");
exports.SingleSegmentArena = single_segment_arena_1.SingleSegmentArena;

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/arena/multi-segment-arena.js":
/*!******************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/arena/multi-segment-arena.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var constants_1 = __webpack_require__(/*! ../../constants */ "./node_modules/capnp-ts/lib/constants.js");
var errors_1 = __webpack_require__(/*! ../../errors */ "./node_modules/capnp-ts/lib/errors.js");
var util_1 = __webpack_require__(/*! ../../util */ "./node_modules/capnp-ts/lib/util.js");
var arena_allocation_result_1 = __webpack_require__(/*! ./arena-allocation-result */ "./node_modules/capnp-ts/lib/serialization/arena/arena-allocation-result.js");
var arena_kind_1 = __webpack_require__(/*! ./arena-kind */ "./node_modules/capnp-ts/lib/serialization/arena/arena-kind.js");
var trace = debug_1.default('capnp:arena:multi');
trace('load');
var MultiSegmentArena = /** @class */ (function () {
    function MultiSegmentArena(buffers) {
        if (buffers === void 0) { buffers = []; }
        this.kind = arena_kind_1.ArenaKind.MULTI_SEGMENT;
        this.buffers = buffers;
        trace('new %s', this);
    }
    MultiSegmentArena.prototype.toString = function () { return util_1.format('MultiSegmentArena_segments:%d', getNumSegments(this)); };
    MultiSegmentArena.allocate = allocate;
    MultiSegmentArena.getBuffer = getBuffer;
    MultiSegmentArena.getNumSegments = getNumSegments;
    return MultiSegmentArena;
}());
exports.MultiSegmentArena = MultiSegmentArena;
function allocate(minSize, m) {
    var b = new ArrayBuffer(util_1.padToWord(Math.max(minSize, constants_1.DEFAULT_BUFFER_SIZE)));
    m.buffers.push(b);
    return new arena_allocation_result_1.ArenaAllocationResult(m.buffers.length - 1, b);
}
exports.allocate = allocate;
function getBuffer(id, m) {
    if (id < 0 || id >= m.buffers.length)
        throw new Error(util_1.format(errors_1.SEG_ID_OUT_OF_BOUNDS, id));
    return m.buffers[id];
}
exports.getBuffer = getBuffer;
function getNumSegments(m) {
    return m.buffers.length;
}
exports.getNumSegments = getNumSegments;

//# sourceMappingURL=multi-segment-arena.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/arena/single-segment-arena.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/arena/single-segment-arena.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var constants_1 = __webpack_require__(/*! ../../constants */ "./node_modules/capnp-ts/lib/constants.js");
var errors_1 = __webpack_require__(/*! ../../errors */ "./node_modules/capnp-ts/lib/errors.js");
var util_1 = __webpack_require__(/*! ../../util */ "./node_modules/capnp-ts/lib/util.js");
var arena_allocation_result_1 = __webpack_require__(/*! ./arena-allocation-result */ "./node_modules/capnp-ts/lib/serialization/arena/arena-allocation-result.js");
var arena_kind_1 = __webpack_require__(/*! ./arena-kind */ "./node_modules/capnp-ts/lib/serialization/arena/arena-kind.js");
var trace = debug_1.default('capnp:arena:single');
trace('load');
var SingleSegmentArena = /** @class */ (function () {
    function SingleSegmentArena(buffer) {
        if (buffer === void 0) { buffer = new ArrayBuffer(constants_1.DEFAULT_BUFFER_SIZE); }
        this.kind = arena_kind_1.ArenaKind.SINGLE_SEGMENT;
        if ((buffer.byteLength & 7) !== 0)
            throw new Error(util_1.format(errors_1.SEG_NOT_WORD_ALIGNED, buffer.byteLength));
        this.buffer = buffer;
        trace('new %s', this);
    }
    SingleSegmentArena.prototype.toString = function () { return util_1.format('SingleSegmentArena_len:%x', this.buffer.byteLength); };
    SingleSegmentArena.allocate = allocate;
    SingleSegmentArena.getBuffer = getBuffer;
    SingleSegmentArena.getNumSegments = getNumSegments;
    return SingleSegmentArena;
}());
exports.SingleSegmentArena = SingleSegmentArena;
function allocate(minSize, segments, s) {
    trace('Allocating %x bytes for segment 0 in %s.', minSize, s);
    var srcBuffer = segments.length > 0 ? segments[0].buffer : s.buffer;
    if (minSize < constants_1.MIN_SINGLE_SEGMENT_GROWTH) {
        minSize = constants_1.MIN_SINGLE_SEGMENT_GROWTH;
    }
    else {
        minSize = util_1.padToWord(minSize);
    }
    s.buffer = new ArrayBuffer(srcBuffer.byteLength + minSize);
    // PERF: Assume that the source and destination buffers are word-aligned and use Float64Array to copy them one word
    // at a time.
    new Float64Array(s.buffer).set(new Float64Array(srcBuffer));
    return new arena_allocation_result_1.ArenaAllocationResult(0, s.buffer);
}
exports.allocate = allocate;
function getBuffer(id, s) {
    if (id !== 0)
        throw new Error(util_1.format(errors_1.SEG_GET_NON_ZERO_SINGLE, id));
    return s.buffer;
}
exports.getBuffer = getBuffer;
function getNumSegments() {
    return 1;
}
exports.getNumSegments = getNumSegments;

//# sourceMappingURL=single-segment-arena.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./mask */ "./node_modules/capnp-ts/lib/serialization/mask.js"), exports);
var list_element_size_1 = __webpack_require__(/*! ./list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
exports.ListElementSize = list_element_size_1.ListElementSize;
var message_1 = __webpack_require__(/*! ./message */ "./node_modules/capnp-ts/lib/serialization/message.js");
exports.Message = message_1.Message;
var object_size_1 = __webpack_require__(/*! ./object-size */ "./node_modules/capnp-ts/lib/serialization/object-size.js");
exports.ObjectSize = object_size_1.ObjectSize;
tslib_1.__exportStar(__webpack_require__(/*! ./pointers */ "./node_modules/capnp-ts/lib/serialization/pointers/index.js"), exports);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/list-element-size.js":
/*!**********************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/list-element-size.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ListElementSize;
(function (ListElementSize) {
    ListElementSize[ListElementSize["VOID"] = 0] = "VOID";
    ListElementSize[ListElementSize["BIT"] = 1] = "BIT";
    ListElementSize[ListElementSize["BYTE"] = 2] = "BYTE";
    ListElementSize[ListElementSize["BYTE_2"] = 3] = "BYTE_2";
    ListElementSize[ListElementSize["BYTE_4"] = 4] = "BYTE_4";
    ListElementSize[ListElementSize["BYTE_8"] = 5] = "BYTE_8";
    ListElementSize[ListElementSize["POINTER"] = 6] = "POINTER";
    ListElementSize[ListElementSize["COMPOSITE"] = 7] = "COMPOSITE";
})(ListElementSize = exports.ListElementSize || (exports.ListElementSize = {}));
exports.ListElementOffset = [
    0,
    0.125,
    1,
    2,
    4,
    8,
    8,
    NaN,
];

//# sourceMappingURL=list-element-size.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/mask.js":
/*!*********************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/mask.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
function _makePrimitiveMaskFn(byteLength, setter) {
    return function (x) {
        var dv = new DataView(new ArrayBuffer(byteLength));
        setter.call(dv, 0, x, true);
        return dv;
    };
}
/* tslint:disable:no-unsafe-any */
exports.getFloat32Mask = _makePrimitiveMaskFn(4, DataView.prototype.setFloat32);
exports.getFloat64Mask = _makePrimitiveMaskFn(8, DataView.prototype.setFloat64);
exports.getInt16Mask = _makePrimitiveMaskFn(2, DataView.prototype.setInt16);
exports.getInt32Mask = _makePrimitiveMaskFn(4, DataView.prototype.setInt32);
exports.getInt8Mask = _makePrimitiveMaskFn(1, DataView.prototype.setInt8);
exports.getUint16Mask = _makePrimitiveMaskFn(2, DataView.prototype.setUint16);
exports.getUint32Mask = _makePrimitiveMaskFn(4, DataView.prototype.setUint32);
exports.getUint8Mask = _makePrimitiveMaskFn(1, DataView.prototype.setUint8);
/* tslint:enable:no-unsafe-any */
function getBitMask(value, bitOffset) {
    var dv = new DataView(new ArrayBuffer(1));
    if (!value)
        return dv;
    dv.setUint8(0, 1 << bitOffset % 8);
    return dv;
}
exports.getBitMask = getBitMask;
function getInt64Mask(x) {
    return x.toDataView();
}
exports.getInt64Mask = getInt64Mask;
function getUint64Mask(x) {
    return x.toDataView();
}
exports.getUint64Mask = getUint64Mask;

//# sourceMappingURL=mask.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/message.js":
/*!************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/message.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/capnp-ts/lib/constants.js");
var errors_1 = __webpack_require__(/*! ../errors */ "./node_modules/capnp-ts/lib/errors.js");
var util_1 = __webpack_require__(/*! ../util */ "./node_modules/capnp-ts/lib/util.js");
var arena_1 = __webpack_require__(/*! ./arena */ "./node_modules/capnp-ts/lib/serialization/arena/index.js");
var packing_1 = __webpack_require__(/*! ./packing */ "./node_modules/capnp-ts/lib/serialization/packing.js");
var pointers_1 = __webpack_require__(/*! ./pointers */ "./node_modules/capnp-ts/lib/serialization/pointers/index.js");
var segment_1 = __webpack_require__(/*! ./segment */ "./node_modules/capnp-ts/lib/serialization/segment.js");
var pointer_1 = __webpack_require__(/*! ./pointers/pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var struct_1 = __webpack_require__(/*! ./pointers/struct */ "./node_modules/capnp-ts/lib/serialization/pointers/struct.js");
var trace = debug_1.default('capnp:message');
trace('load');
var Message = /** @class */ (function () {
    /**
     * A Cap'n Proto message.
     *
     * SECURITY WARNING: In nodejs do not pass a Buffer's internal array buffer into this constructor. Pass the buffer
     * directly and everything will be fine. If not, your message will potentially be initialized with random memory
     * contents!
     *
     * The constructor method creates a new Message, optionally using a provided arena for segment allocation, or a buffer
     * to read from.
     *
     * @constructor {Message}
     *
     * @param {AnyArena|ArrayBufferView|ArrayBuffer} [src] The source for the message.
     * A value of `undefined` will cause the message to initialize with a single segment arena only big enough for the
     * root pointer; it will expand as you go. This is a reasonable choice for most messages.
     *
     * Passing an arena will cause the message to use that arena for its segment allocation. Contents will be accepted
     * as-is.
     *
     * Passing an array buffer view (like `DataView`, `Uint8Array` or `Buffer`) will create a **copy** of the source
     * buffer; beware of the potential performance cost!
     *
     * @param {boolean} [packed] Whether or not the message is packed. If `true` (the default), the message will be
     * unpacked.
     *
     * @param {boolean} [singleSegment] If true, `src` will be treated as a message consisting of a single segment without
     * a framing header.
     *
     */
    function Message(src, packed, singleSegment) {
        if (packed === void 0) { packed = true; }
        if (singleSegment === void 0) { singleSegment = false; }
        this._capnp = initMessage(src, packed, singleSegment);
        if (src && !isAnyArena(src))
            preallocateSegments(this);
        trace('new %s', this);
    }
    Message.prototype.allocateSegment = function (byteLength) { return allocateSegment(byteLength, this); };
    /**
     * Create a pretty-printed string dump of this message; incredibly useful for debugging.
     *
     * WARNING: Do not call this method on large messages!
     *
     * @returns {string} A big steaming pile of pretty hex digits.
     */
    Message.prototype.dump = function () { return dump(this); };
    /**
     * Get a struct pointer for the root of this message. This is primarily used when reading a message; it will not
     * overwrite existing data.
     *
     * @template T
     * @param {StructCtor<T>} RootStruct The struct type to use as the root.
     * @returns {T} A struct representing the root of the message.
     */
    Message.prototype.getRoot = function (RootStruct) { return getRoot(RootStruct, this); };
    /**
     * Get a segment by its id.
     *
     * This will lazily allocate the first segment if it doesn't already exist.
     *
     * @param {number} id The segment id.
     * @returns {Segment} The requested segment.
     */
    Message.prototype.getSegment = function (id) { return getSegment(id, this); };
    /**
     * Initialize a new message using the provided struct type as the root.
     *
     * @template T
     * @param {StructCtor<T>} RootStruct The struct type to use as the root.
     * @returns {T} An initialized struct pointing to the root of the message.
     */
    Message.prototype.initRoot = function (RootStruct) { return initRoot(RootStruct, this); };
    /**
     * Combine the contents of this message's segments into a single array buffer and prepend a stream framing header
     * containing information about the following segment data.
     *
     * @returns {ArrayBuffer} An ArrayBuffer with the contents of this message.
     */
    Message.prototype.toArrayBuffer = function () { return toArrayBuffer(this); };
    /**
     * Like `toArrayBuffer()`, but also applies the packing algorithm to the output. This is typically what you want to
     * use if you're sending the message over a network link or other slow I/O interface where size matters.
     *
     * @returns {ArrayBuffer} A packed message.
     */
    Message.prototype.toPackedArrayBuffer = function () { return toPackedArrayBuffer(this); };
    Message.prototype.toString = function () { return "Message_arena:" + this._capnp.arena; };
    Message.allocateSegment = allocateSegment;
    Message.dump = dump;
    Message.getRoot = getRoot;
    Message.getSegment = getSegment;
    Message.initRoot = initRoot;
    Message.toArrayBuffer = toArrayBuffer;
    Message.toPackedArrayBuffer = toPackedArrayBuffer;
    return Message;
}());
exports.Message = Message;
function initMessage(src, packed, singleSegment) {
    if (packed === void 0) { packed = true; }
    if (singleSegment === void 0) { singleSegment = false; }
    if (src === undefined) {
        return { arena: new arena_1.SingleSegmentArena(), segments: [], traversalLimit: constants_1.DEFAULT_TRAVERSE_LIMIT };
    }
    if (isAnyArena(src))
        return { arena: src, segments: [], traversalLimit: constants_1.DEFAULT_TRAVERSE_LIMIT };
    var buf = src;
    if (isArrayBufferView(buf))
        buf = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    if (packed)
        buf = packing_1.unpack(buf);
    if (singleSegment) {
        return {
            arena: new arena_1.SingleSegmentArena(buf),
            segments: [],
            traversalLimit: constants_1.DEFAULT_TRAVERSE_LIMIT,
        };
    }
    return {
        arena: new arena_1.MultiSegmentArena(getFramedSegments(buf)),
        segments: [],
        traversalLimit: constants_1.DEFAULT_TRAVERSE_LIMIT,
    };
}
exports.initMessage = initMessage;
/**
 * Given an _unpacked_ message with a segment framing header, this will generate an ArrayBuffer for each segment in
 * the message.
 *
 * This method is not typically called directly, but can be useful in certain cases.
 *
 * @static
 * @param {ArrayBuffer} message An unpacked message with a framing header.
 * @returns {ArrayBuffer[]} An array of buffers containing the segment data.
 */
function getFramedSegments(message) {
    var dv = new DataView(message);
    var segmentCount = dv.getUint32(0, true) + 1;
    var segments = new Array(segmentCount);
    trace('reading %d framed segments from stream', segmentCount);
    var byteOffset = 4 + segmentCount * 4;
    byteOffset += byteOffset % 8;
    if (byteOffset + segmentCount * 4 > message.byteLength)
        throw new Error(errors_1.MSG_INVALID_FRAME_HEADER);
    for (var i = 0; i < segmentCount; i++) {
        var byteLength = dv.getUint32(4 + i * 4, true) * 8;
        if (byteOffset + byteLength > message.byteLength)
            throw new Error(errors_1.MSG_INVALID_FRAME_HEADER);
        segments[i] = message.slice(byteOffset, byteOffset + byteLength);
        byteOffset += byteLength;
    }
    return segments;
}
exports.getFramedSegments = getFramedSegments;
/**
 * This method is called on messages that were constructed with existing data to prepopulate the segments array with
 * everything we can find in the arena. Each segment will have it's `byteLength` set to the size of its buffer.
 *
 * Technically speaking, the message's segments will be "full" after calling this function. Calling this on your own
 * may void your warranty.
 *
 * @param {Message} m The message to allocate.
 * @returns {void}
 */
function preallocateSegments(m) {
    var numSegments = arena_1.Arena.getNumSegments(m._capnp.arena);
    if (numSegments < 1)
        throw new Error(errors_1.MSG_NO_SEGMENTS_IN_ARENA);
    m._capnp.segments = new Array(numSegments);
    for (var i = 0; i < numSegments; i++) {
        // Set up each segment so that they're fully allocated to the extents of the existing buffers.
        var buffer = arena_1.Arena.getBuffer(i, m._capnp.arena);
        var segment = new segment_1.Segment(i, m, buffer, buffer.byteLength);
        m._capnp.segments[i] = segment;
    }
}
exports.preallocateSegments = preallocateSegments;
function isArrayBufferView(src) {
    return src.byteOffset !== undefined;
}
function isAnyArena(o) {
    return o.kind !== undefined;
}
function allocateSegment(byteLength, m) {
    trace('allocating %x bytes for %s', byteLength, m);
    var res = arena_1.Arena.allocate(byteLength, m._capnp.segments, m._capnp.arena);
    var s;
    if (res.id === m._capnp.segments.length) {
        // Note how we're only allowing new segments in if they're exactly the next one in the array. There is no logical
        // reason for segments to be created out of order.
        s = new segment_1.Segment(res.id, m, res.buffer);
        trace('adding new segment %s', s);
        m._capnp.segments.push(s);
    }
    else if (res.id < 0 || res.id > m._capnp.segments.length) {
        throw new Error(util_1.format(errors_1.MSG_SEGMENT_OUT_OF_BOUNDS, res.id, m));
    }
    else {
        s = m._capnp.segments[res.id];
        trace('replacing segment %s with buffer (len:%d)', s, res.buffer.byteLength);
        s.replaceBuffer(res.buffer);
    }
    return s;
}
exports.allocateSegment = allocateSegment;
function dump(m) {
    var r = '';
    if (m._capnp.segments.length === 0)
        return '================\nNo Segments\n================\n';
    for (var i = 0; i < m._capnp.segments.length; i++) {
        r += "================\nSegment #" + i + "\n================\n";
        var _a = m._capnp.segments[i], buffer = _a.buffer, byteLength = _a.byteLength;
        var b = new Uint8Array(buffer, 0, byteLength);
        r += util_1.dumpBuffer(b);
    }
    return r;
}
exports.dump = dump;
function getRoot(RootStruct, m) {
    var root = new RootStruct(m.getSegment(0), 0);
    pointer_1.validate(pointers_1.PointerType.STRUCT, root);
    var ts = pointer_1.getTargetStructSize(root);
    // Make sure the underlying pointer is actually big enough to hold the data and pointers as specified in the schema.
    // If not a shallow copy of the struct contents needs to be made before returning.
    if (ts.dataByteLength < RootStruct._capnp.size.dataByteLength
        || ts.pointerLength < RootStruct._capnp.size.pointerLength) {
        trace('need to resize root struct %s', root);
        struct_1.resize(RootStruct._capnp.size, root);
    }
    return root;
}
exports.getRoot = getRoot;
function getSegment(id, m) {
    var segmentLength = m._capnp.segments.length;
    if (id === 0 && segmentLength === 0) {
        // Segment zero is special. If we have no segments in the arena we'll want to allocate a new one and leave room
        // for the root pointer.
        var arenaSegments = arena_1.Arena.getNumSegments(m._capnp.arena);
        if (arenaSegments === 0) {
            allocateSegment(constants_1.DEFAULT_BUFFER_SIZE, m);
        }
        else {
            // Okay, the arena already has a buffer we can use. This is totally fine.
            m._capnp.segments[0] = new segment_1.Segment(0, m, arena_1.Arena.getBuffer(0, m._capnp.arena));
        }
        if (!m._capnp.segments[0].hasCapacity(8))
            throw new Error(errors_1.MSG_SEGMENT_TOO_SMALL);
        // This will leave room for the root pointer.
        m._capnp.segments[0].allocate(8);
        return m._capnp.segments[0];
    }
    if (id < 0 || id >= segmentLength)
        throw new Error(util_1.format(errors_1.MSG_SEGMENT_OUT_OF_BOUNDS, id, m));
    return m._capnp.segments[id];
}
exports.getSegment = getSegment;
function initRoot(RootStruct, m) {
    var root = new RootStruct(m.getSegment(0), 0);
    struct_1.initStruct(RootStruct._capnp.size, root);
    trace('Initialized root pointer %s for %s.', root, m);
    return root;
}
exports.initRoot = initRoot;
function toArrayBuffer(m) {
    var streamFrame = getStreamFrame(m);
    // Make sure the first segment is allocated.
    if (m._capnp.segments.length === 0)
        getSegment(0, m);
    var segments = m._capnp.segments;
    // Add space for the stream framing.
    var totalLength = streamFrame.byteLength + segments.reduce(function (l, s) { return l + util_1.padToWord(s.byteLength); }, 0);
    var out = new Uint8Array(new ArrayBuffer(totalLength));
    var o = streamFrame.byteLength;
    out.set(new Uint8Array(streamFrame));
    segments.forEach(function (s) {
        var segmentLength = util_1.padToWord(s.byteLength);
        out.set(new Uint8Array(s.buffer, 0, segmentLength), o);
        o += segmentLength;
    });
    return out.buffer;
}
exports.toArrayBuffer = toArrayBuffer;
function toPackedArrayBuffer(m) {
    var streamFrame = packing_1.pack(getStreamFrame(m));
    // Make sure the first segment is allocated.
    if (m._capnp.segments.length === 0)
        m.getSegment(0);
    // NOTE: A copy operation can be avoided here if we capture the intermediate array and use that directly in the copy
    // loop below, rather than have `pack()` copy it to an ArrayBuffer just to have to copy it again later. If the
    // intermediate array can be avoided altogether that's even better!
    var segments = m._capnp.segments.map(function (s) { return packing_1.pack(s.buffer, 0, util_1.padToWord(s.byteLength)); });
    var totalLength = streamFrame.byteLength + segments.reduce(function (l, s) { return l + s.byteLength; }, 0);
    var out = new Uint8Array(new ArrayBuffer(totalLength));
    var o = streamFrame.byteLength;
    out.set(new Uint8Array(streamFrame));
    segments.forEach(function (s) {
        out.set(new Uint8Array(s), o);
        o += s.byteLength;
    });
    return out.buffer;
}
exports.toPackedArrayBuffer = toPackedArrayBuffer;
function getStreamFrame(m) {
    var length = m._capnp.segments.length;
    if (length === 0) {
        // Don't bother allocating the first segment, just return a single zero word for the frame header.
        return new Float64Array(1).buffer;
    }
    var frameLength = 4 + length * 4 + (1 - length % 2) * 4;
    var out = new DataView(new ArrayBuffer(frameLength));
    trace('Writing message stream frame with segment count: %d.', length);
    out.setUint32(0, length - 1, true);
    m._capnp.segments.forEach(function (s, i) {
        trace('Message segment %d word count: %d.', s.id, s.byteLength / 8);
        out.setUint32(i * 4 + 4, s.byteLength / 8, true);
    });
    return out.buffer;
}
exports.getStreamFrame = getStreamFrame;

//# sourceMappingURL=message.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/object-size.js":
/*!****************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/object-size.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var _ = __webpack_require__(/*! ../util */ "./node_modules/capnp-ts/lib/util.js");
var trace = debug_1.default('capnp:object-size');
trace('load');
/**
 * A simple object that describes the size of a struct.
 *
 * @export
 * @class ObjectSize
 */
var ObjectSize = /** @class */ (function () {
    function ObjectSize(dataByteLength, pointerCount) {
        this.dataByteLength = dataByteLength;
        this.pointerLength = pointerCount;
    }
    ObjectSize.prototype.toString = function () {
        return _.format('ObjectSize_dw:%d,pc:%d', getDataWordLength(this), this.pointerLength);
    };
    return ObjectSize;
}());
exports.ObjectSize = ObjectSize;
function getByteLength(o) {
    return o.dataByteLength + o.pointerLength * 8;
}
exports.getByteLength = getByteLength;
function getDataWordLength(o) {
    return o.dataByteLength / 8;
}
exports.getDataWordLength = getDataWordLength;
function getWordLength(o) {
    return o.dataByteLength / 8 + o.pointerLength;
}
exports.getWordLength = getWordLength;
function padToWord(o) {
    return new ObjectSize(_.padToWord(o.dataByteLength), o.pointerLength);
}
exports.padToWord = padToWord;

//# sourceMappingURL=object-size.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/packing.js":
/*!************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/packing.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/capnp-ts/lib/constants.js");
var errors_1 = __webpack_require__(/*! ../errors */ "./node_modules/capnp-ts/lib/errors.js");
/**
 * Compute the Hamming weight (number of bits set to 1) of a number. Used to figure out how many bytes follow a tag byte
 * while computing the size of a packed message.
 *
 * WARNING: Using this with floating point numbers will void your warranty.
 *
 * @param {number} x A real integer.
 * @returns {number} The hamming weight (integer).
 */
function getHammingWeight(x) {
    // Thanks, HACKMEM!
    var w = x - ((x >> 1) & 0x55555555);
    w = (w & 0x33333333) + ((w >> 2) & 0x33333333);
    return ((w + (w >> 4) & 0x0f0f0f0f) * 0x01010101) >> 24;
}
exports.getHammingWeight = getHammingWeight;
/**
 * Compute the tag byte from the 8 bytes of a 64-bit word.
 *
 * @param {byte} a The first byte.
 * @param {byte} b The second byte.
 * @param {byte} c The third byte.
 * @param {byte} d The fourth byte.
 * @param {byte} e The fifth byte.
 * @param {byte} f The sixth byte.
 * @param {byte} g The seventh byte.
 * @param {byte} h The eighth byte (phew!).
 * @returns {number} The tag byte.
 */
function getTagByte(a, b, c, d, e, f, g, h) {
    // Yes, it's pretty. Don't touch it.
    return (a === 0 ? 0 : 1) |
        (b === 0 ? 0 : 2) |
        (c === 0 ? 0 : 4) |
        (d === 0 ? 0 : 8) |
        (e === 0 ? 0 : 16) |
        (f === 0 ? 0 : 32) |
        (g === 0 ? 0 : 64) |
        (h === 0 ? 0 : 128);
}
exports.getTagByte = getTagByte;
/**
 * Efficiently calculate the length of a packed Cap'n Proto message.
 *
 * @export
 * @param {ArrayBuffer} packed The packed message.
 * @returns {number} The length of the unpacked message in bytes.
 */
function getUnpackedByteLength(packed) {
    var p = new Uint8Array(packed);
    var wordLength = 0;
    var lastTag = 0x77;
    for (var i = 0; i < p.byteLength;) {
        var tag = p[i];
        if (lastTag === 0 /* ZERO */) {
            wordLength += tag;
            i++;
            lastTag = 0x77;
        }
        else if (lastTag === 255 /* SPAN */) {
            wordLength += tag;
            i += tag * 8 + 1;
            lastTag = 0x77;
        }
        else {
            wordLength++;
            i += getHammingWeight(tag) + 1;
            lastTag = tag;
        }
    }
    return wordLength * 8;
}
exports.getUnpackedByteLength = getUnpackedByteLength;
/**
 * Compute the number of zero bytes that occur in a given 64-bit word, provided as eight separate bytes.
 *
 * @param {byte} a The first byte.
 * @param {byte} b The second byte.
 * @param {byte} c The third byte.
 * @param {byte} d The fourth byte.
 * @param {byte} e The fifth byte.
 * @param {byte} f The sixth byte.
 * @param {byte} g The seventh byte.
 * @param {byte} h The eighth byte (phew!).
 * @returns {number} The number of these bytes that are zero.
 */
function getZeroByteCount(a, b, c, d, e, f, g, h) {
    return (a === 0 ? 1 : 0) +
        (b === 0 ? 1 : 0) +
        (c === 0 ? 1 : 0) +
        (d === 0 ? 1 : 0) +
        (e === 0 ? 1 : 0) +
        (f === 0 ? 1 : 0) +
        (g === 0 ? 1 : 0) +
        (h === 0 ? 1 : 0);
}
exports.getZeroByteCount = getZeroByteCount;
/**
 * Pack a section of a Cap'n Proto message into a compressed format. This will efficiently compress zero bytes (which
 * are common in idiomatic Cap'n Proto messages) into a compact form.
 *
 * For stream-framed messages this is called once for the frame header and once again for each segment in the message.
 *
 * The returned array buffer is trimmed to the exact size of the packed message with a single copy operation at the end.
 * This should be decent on CPU time but does require quite a lot of memory (a normal array is filled up with each
 * packed byte until the packing is complete).
 *
 * @export
 * @param {ArrayBuffer} unpacked The message to pack.
 * @param {number} [byteOffset] Starting byte offset to read bytes from, defaults to 0.
 * @param {number} [byteLength] Total number of bytes to read, defaults to the remainder of the buffer contents.
 * @returns {ArrayBuffer} A packed version of the message.
 */
function pack(unpacked, byteOffset, byteLength) {
    if (byteOffset === void 0) { byteOffset = 0; }
    if (unpacked.byteLength % 8 !== 0)
        throw new Error(errors_1.MSG_PACK_NOT_WORD_ALIGNED);
    var src = new Uint8Array(unpacked, byteOffset, byteLength);
    // TODO: Maybe we should do this with buffers? This costs more than 8x the final compressed size in temporary RAM.
    var dst = [];
    /* Just have to be sure it's neither ZERO nor SPAN. */
    var lastTag = 0x77;
    /** This is where we need to remember to write the SPAN tag (0xff). */
    var spanTagOffset = NaN;
    /** How many words have been copied during the current span. */
    var spanWordLength = 0;
    /**
     * When this hits zero, we've had PACK_SPAN_THRESHOLD zero bytes pass by and it's time to bail from the span.
     */
    var spanThreshold = constants_1.PACK_SPAN_THRESHOLD;
    for (var srcByteOffset = 0; srcByteOffset < src.byteLength; srcByteOffset += 8) {
        /** Read in the entire word. Yes, this feels silly but it's fast! */
        var a = src[srcByteOffset];
        var b = src[srcByteOffset + 1];
        var c = src[srcByteOffset + 2];
        var d = src[srcByteOffset + 3];
        var e = src[srcByteOffset + 4];
        var f = src[srcByteOffset + 5];
        var g = src[srcByteOffset + 6];
        var h = src[srcByteOffset + 7];
        var tag = getTagByte(a, b, c, d, e, f, g, h);
        /** If this is true we'll skip the normal word write logic after the switch statement. */
        var skipWriteWord = true;
        switch (lastTag) {
            case 0 /* ZERO */:
                // We're writing a span of words with all zeroes in them. See if we need to bail out of the fast path.
                if (tag !== 0 /* ZERO */ || spanWordLength >= 0xff) {
                    // There's a bit in there or we got too many zeroes. Damn, we need to bail.
                    dst.push(spanWordLength);
                    spanWordLength = 0;
                    skipWriteWord = false;
                }
                else {
                    // Kay, let's quickly inc this and go.
                    spanWordLength++;
                }
                break;
            case 255 /* SPAN */:
                // We're writing a span of nonzero words.
                var zeroCount = getZeroByteCount(a, b, c, d, e, f, g, h);
                // See if we need to bail now.
                spanThreshold -= zeroCount;
                if (spanThreshold <= 0 || spanWordLength >= 0xff) {
                    // Alright, time to get packing again. Write the number of words we skipped to the beginning of the span.
                    dst[spanTagOffset] = spanWordLength;
                    spanWordLength = 0;
                    spanThreshold = constants_1.PACK_SPAN_THRESHOLD;
                    // We have to write this word normally.
                    skipWriteWord = false;
                }
                else {
                    // Just write this word verbatim.
                    dst.push(a, b, c, d, e, f, g, h);
                    spanWordLength++;
                }
                break;
            default:
                // Didn't get a special tag last time, let's write this as normal.
                skipWriteWord = false;
                break;
        }
        // A goto is fast, idk why people keep hatin'.
        if (skipWriteWord)
            continue;
        dst.push(tag);
        lastTag = tag;
        if (a !== 0)
            dst.push(a);
        if (b !== 0)
            dst.push(b);
        if (c !== 0)
            dst.push(c);
        if (d !== 0)
            dst.push(d);
        if (e !== 0)
            dst.push(e);
        if (f !== 0)
            dst.push(f);
        if (g !== 0)
            dst.push(g);
        if (h !== 0)
            dst.push(h);
        // Record the span tag offset if needed, making sure to actually leave room for it.
        if (tag === 255 /* SPAN */) {
            spanTagOffset = dst.length;
            dst.push(0);
        }
    }
    // We're done. If we were writing a span let's finish it.
    if (lastTag === 0 /* ZERO */) {
        dst.push(spanWordLength);
    }
    else if (lastTag === 255 /* SPAN */) {
        dst[spanTagOffset] = spanWordLength;
    }
    return new Uint8Array(dst).buffer;
}
exports.pack = pack;
/**
 * Unpack a compressed Cap'n Proto message into a new ArrayBuffer.
 *
 * Unlike the `pack` function, this is able to efficiently determine the exact size needed for the output buffer and
 * runs considerably more efficiently.
 *
 * @export
 * @param {ArrayBuffer} packed An array buffer containing the packed message.
 * @returns {ArrayBuffer} The unpacked message.
 */
function unpack(packed) {
    // We have no choice but to read the packed buffer one byte at a time.
    var src = new Uint8Array(packed);
    var dst = new Uint8Array(new ArrayBuffer(getUnpackedByteLength(packed)));
    /** The last tag byte that we've seen - it starts at a "neutral" value. */
    var lastTag = 0x77;
    for (var srcByteOffset = 0, dstByteOffset = 0; srcByteOffset < src.byteLength;) {
        var tag = src[srcByteOffset];
        if (lastTag === 0 /* ZERO */) {
            // We have a span of zeroes. New array buffers are guaranteed to be initialized to zero so we just seek ahead.
            dstByteOffset += tag * 8;
            srcByteOffset++;
            lastTag = 0x77;
        }
        else if (lastTag === 255 /* SPAN */) {
            // We have a span of unpacked bytes. Copy them verbatim from the source buffer.
            var spanByteLength = tag * 8;
            dst.set(src.subarray(srcByteOffset + 1, srcByteOffset + 1 + spanByteLength), dstByteOffset);
            dstByteOffset += spanByteLength;
            srcByteOffset += 1 + spanByteLength;
            lastTag = 0x77;
        }
        else {
            // Okay, a normal tag. Let's read past the tag and copy bytes that have a bit set in the tag.
            srcByteOffset++;
            for (var i = 1; i <= 128; i <<= 1) {
                // We only need to actually touch `dst` if there's a nonzero byte (it's already initialized to zeroes).
                if ((tag & i) !== 0)
                    dst[dstByteOffset] = src[srcByteOffset++];
                dstByteOffset++;
            }
            lastTag = tag;
        }
    }
    return dst.buffer;
}
exports.unpack = unpack;

//# sourceMappingURL=packing.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/any-pointer-list.js":
/*!******************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/any-pointer-list.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var pointer_list_1 = __webpack_require__(/*! ./pointer-list */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer-list.js");
exports.AnyPointerList = pointer_list_1.PointerList(pointer_1.Pointer);

//# sourceMappingURL=any-pointer-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/bool-list.js":
/*!***********************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/bool-list.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var trace = debug_1.default('capnp:list:composite');
trace('load');
var BoolList = /** @class */ (function (_super) {
    tslib_1.__extends(BoolList, _super);
    function BoolList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoolList.prototype.get = function (index) {
        var bitMask = 1 << index % 8;
        var byteOffset = index >>> 3;
        var c = pointer_1.getContent(this);
        var v = c.segment.getUint8(c.byteOffset + byteOffset);
        return (v & bitMask) !== 0;
    };
    BoolList.prototype.set = function (index, value) {
        var bitMask = 1 << index % 8;
        var c = pointer_1.getContent(this);
        var byteOffset = c.byteOffset + (index >>> 3);
        var v = c.segment.getUint8(byteOffset);
        c.segment.setUint8(byteOffset, value ? v | bitMask : v & ~bitMask);
    };
    BoolList.prototype.toString = function () {
        return "Bool_" + _super.prototype.toString.call(this);
    };
    BoolList._capnp = {
        displayName: 'List<boolean>',
        size: list_element_size_1.ListElementSize.BIT,
    };
    return BoolList;
}(list_1.List));
exports.BoolList = BoolList;

//# sourceMappingURL=bool-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/composite-list.js":
/*!****************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/composite-list.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var trace = debug_1.default('capnp:list:composite');
trace('load');
function CompositeList(CompositeClass) {
    return _a = /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.get = function (index) {
                return new CompositeClass(this.segment, this.byteOffset, this._capnp.depthLimit - 1, index);
            };
            class_1.prototype.set = function (index, value) {
                pointer_1.copyFrom(value, this.get(index));
            };
            class_1.prototype.toString = function () {
                return "Composite_" + _super.prototype.toString.call(this) + ",cls:" + CompositeClass.toString();
            };
            return class_1;
        }(list_1.List)),
        _a._capnp = {
            compositeSize: CompositeClass._capnp.size,
            displayName: "List<" + CompositeClass._capnp.displayName + ">",
            size: list_element_size_1.ListElementSize.COMPOSITE,
        },
        _a;
    var _a;
}
exports.CompositeList = CompositeList;

//# sourceMappingURL=composite-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/data-list.js":
/*!***********************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/data-list.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__(/*! ./data */ "./node_modules/capnp-ts/lib/serialization/pointers/data.js");
var pointer_list_1 = __webpack_require__(/*! ./pointer-list */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer-list.js");
exports.DataList = pointer_list_1.PointerList(data_1.Data);

//# sourceMappingURL=data-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/data.js":
/*!******************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/data.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var pointer_type_1 = __webpack_require__(/*! ./pointer-type */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer-type.js");
var trace = debug_1.default('capnp:data');
trace('load');
/**
 * A generic blob of bytes. Can be converted to a DataView or Uint8Array to access its contents using `toDataView()` and
 * `toUint8Array()`. Use `copyBuffer()` to copy an entire buffer at once.
 *
 * @export
 * @class Data
 * @extends {List<number>}
 */
var Data = /** @class */ (function (_super) {
    tslib_1.__extends(Data, _super);
    function Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Data.fromPointer = function (pointer) {
        pointer_1.validate(pointer_type_1.PointerType.LIST, pointer, list_element_size_1.ListElementSize.BYTE);
        return this._fromPointerUnchecked(pointer);
    };
    Data._fromPointerUnchecked = function (pointer) {
        return new this(pointer.segment, pointer.byteOffset, pointer._capnp.depthLimit);
    };
    /**
     * Copy the contents of `src` into this Data pointer. If `src` is smaller than the length of this pointer then the
     * remaining bytes will be zeroed out. Extra bytes in `src` are ignored.
     *
     * @param {(ArrayBuffer | ArrayBufferView)} src The source buffer.
     * @returns {void}
     */
    // TODO: Would be nice to have a way to zero-copy a buffer by allocating a new segment into the message with that
    // buffer data.
    Data.prototype.copyBuffer = function (src) {
        var c = pointer_1.getContent(this);
        var dstLength = this.getLength();
        var srcLength = src.byteLength;
        var i = src instanceof ArrayBuffer
            ? new Uint8Array(src)
            : new Uint8Array(src.buffer, src.byteOffset, Math.min(dstLength, srcLength));
        var o = new Uint8Array(c.segment.buffer, c.byteOffset, this.getLength());
        o.set(i);
        if (dstLength > srcLength) {
            trace('Zeroing out remaining %d bytes after copy into %s.', dstLength - srcLength, this);
            o.fill(0, srcLength, dstLength);
        }
        else if (dstLength < srcLength) {
            trace('Truncated %d bytes from source buffer while copying to %s.', srcLength - dstLength, this);
        }
    };
    /**
     * Read a byte from the specified offset.
     *
     * @param {number} byteOffset The byte offset to read.
     * @returns {number} The byte value.
     */
    Data.prototype.get = function (byteOffset) {
        var c = pointer_1.getContent(this);
        return c.segment.getUint8(c.byteOffset + byteOffset);
    };
    /**
     * Write a byte at the specified offset.
     *
     * @param {number} byteOffset The byte offset to set.
     * @param {number} value The byte value to set.
     * @returns {void}
     */
    Data.prototype.set = function (byteOffset, value) {
        var c = pointer_1.getContent(this);
        c.segment.setUint8(c.byteOffset + byteOffset, value);
    };
    /**
     * Creates a **copy** of the underlying buffer data and returns it as an ArrayBuffer.
     *
     * To obtain a reference to the underlying buffer instead, use `toUint8Array()` or `toDataView()`.
     *
     * @returns {ArrayBuffer} A copy of this data buffer.
     */
    Data.prototype.toArrayBuffer = function () {
        var c = pointer_1.getContent(this);
        return c.segment.buffer.slice(c.byteOffset, c.byteOffset + this.getLength());
    };
    /**
     * Convert this Data pointer to a DataView representing the pointer's contents.
     *
     * WARNING: The DataView references memory from a message segment, so do not venture outside the bounds of the
     * DataView or else BAD THINGS.
     *
     * @returns {DataView} A live reference to the underlying buffer.
     */
    Data.prototype.toDataView = function () {
        var c = pointer_1.getContent(this);
        return new DataView(c.segment.buffer, c.byteOffset, this.getLength());
    };
    Data.prototype.toString = function () {
        return "Data_" + _super.prototype.toString.call(this);
    };
    /**
     * Convert this Data pointer to a Uint8Array representing the pointer's contents.
     *
     * WARNING: The Uint8Array references memory from a message segment, so do not venture outside the bounds of the
     * Uint8Array or else BAD THINGS.
     *
     * @returns {DataView} A live reference to the underlying buffer.
     */
    Data.prototype.toUint8Array = function () {
        var c = pointer_1.getContent(this);
        return new Uint8Array(c.segment.buffer, c.byteOffset, this.getLength());
    };
    return Data;
}(list_1.List));
exports.Data = Data;

//# sourceMappingURL=data.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/float32-list.js":
/*!**************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/float32-list.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var trace = debug_1.default('capnp:list:composite');
trace('load');
var Float32List = /** @class */ (function (_super) {
    tslib_1.__extends(Float32List, _super);
    function Float32List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Float32List.prototype.get = function (index) {
        var c = pointer_1.getContent(this);
        return c.segment.getFloat32(c.byteOffset + index * 4);
    };
    Float32List.prototype.set = function (index, value) {
        var c = pointer_1.getContent(this);
        c.segment.setFloat32(c.byteOffset + index * 4, value);
    };
    Float32List.prototype.toString = function () {
        return "Float32_" + _super.prototype.toString.call(this);
    };
    Float32List._capnp = {
        displayName: 'List<Float32>',
        size: list_element_size_1.ListElementSize.BYTE_4,
    };
    return Float32List;
}(list_1.List));
exports.Float32List = Float32List;

//# sourceMappingURL=float32-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/float64-list.js":
/*!**************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/float64-list.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var trace = debug_1.default('capnp:list:composite');
trace('load');
var Float64List = /** @class */ (function (_super) {
    tslib_1.__extends(Float64List, _super);
    function Float64List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Float64List.prototype.get = function (index) {
        var c = pointer_1.getContent(this);
        return c.segment.getFloat64(c.byteOffset + index * 8);
    };
    Float64List.prototype.set = function (index, value) {
        var c = pointer_1.getContent(this);
        c.segment.setFloat64(c.byteOffset + index * 8, value);
    };
    Float64List.prototype.toString = function () {
        return "Float64_" + _super.prototype.toString.call(this);
    };
    Float64List._capnp = {
        displayName: 'List<Float64>',
        size: list_element_size_1.ListElementSize.BYTE_8,
    };
    return Float64List;
}(list_1.List));
exports.Float64List = Float64List;

//# sourceMappingURL=float64-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var any_pointer_list_1 = __webpack_require__(/*! ./any-pointer-list */ "./node_modules/capnp-ts/lib/serialization/pointers/any-pointer-list.js");
exports.AnyPointerList = any_pointer_list_1.AnyPointerList;
var bool_list_1 = __webpack_require__(/*! ./bool-list */ "./node_modules/capnp-ts/lib/serialization/pointers/bool-list.js");
exports.BoolList = bool_list_1.BoolList;
var composite_list_1 = __webpack_require__(/*! ./composite-list */ "./node_modules/capnp-ts/lib/serialization/pointers/composite-list.js");
exports.CompositeList = composite_list_1.CompositeList;
var data_1 = __webpack_require__(/*! ./data */ "./node_modules/capnp-ts/lib/serialization/pointers/data.js");
exports.Data = data_1.Data;
var data_list_1 = __webpack_require__(/*! ./data-list */ "./node_modules/capnp-ts/lib/serialization/pointers/data-list.js");
exports.DataList = data_list_1.DataList;
var float32_list_1 = __webpack_require__(/*! ./float32-list */ "./node_modules/capnp-ts/lib/serialization/pointers/float32-list.js");
exports.Float32List = float32_list_1.Float32List;
var float64_list_1 = __webpack_require__(/*! ./float64-list */ "./node_modules/capnp-ts/lib/serialization/pointers/float64-list.js");
exports.Float64List = float64_list_1.Float64List;
var int8_list_1 = __webpack_require__(/*! ./int8-list */ "./node_modules/capnp-ts/lib/serialization/pointers/int8-list.js");
exports.Int8List = int8_list_1.Int8List;
var int16_list_1 = __webpack_require__(/*! ./int16-list */ "./node_modules/capnp-ts/lib/serialization/pointers/int16-list.js");
exports.Int16List = int16_list_1.Int16List;
var int32_list_1 = __webpack_require__(/*! ./int32-list */ "./node_modules/capnp-ts/lib/serialization/pointers/int32-list.js");
exports.Int32List = int32_list_1.Int32List;
var int64_list_1 = __webpack_require__(/*! ./int64-list */ "./node_modules/capnp-ts/lib/serialization/pointers/int64-list.js");
exports.Int64List = int64_list_1.Int64List;
var interface_1 = __webpack_require__(/*! ./interface */ "./node_modules/capnp-ts/lib/serialization/pointers/interface.js");
exports.Interface = interface_1.Interface;
var interface_list_1 = __webpack_require__(/*! ./interface-list */ "./node_modules/capnp-ts/lib/serialization/pointers/interface-list.js");
exports.InterfaceList = interface_list_1.InterfaceList;
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
exports.List = list_1.List;
var orphan_1 = __webpack_require__(/*! ./orphan */ "./node_modules/capnp-ts/lib/serialization/pointers/orphan.js");
exports.Orphan = orphan_1.Orphan;
var pointer_list_1 = __webpack_require__(/*! ./pointer-list */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer-list.js");
exports.PointerList = pointer_list_1.PointerList;
var pointer_type_1 = __webpack_require__(/*! ./pointer-type */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer-type.js");
exports.PointerType = pointer_type_1.PointerType;
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
exports.Pointer = pointer_1.Pointer;
var struct_1 = __webpack_require__(/*! ./struct */ "./node_modules/capnp-ts/lib/serialization/pointers/struct.js");
exports.Struct = struct_1.Struct;
var text_1 = __webpack_require__(/*! ./text */ "./node_modules/capnp-ts/lib/serialization/pointers/text.js");
exports.Text = text_1.Text;
var text_list_1 = __webpack_require__(/*! ./text-list */ "./node_modules/capnp-ts/lib/serialization/pointers/text-list.js");
exports.TextList = text_list_1.TextList;
var uint8_list_1 = __webpack_require__(/*! ./uint8-list */ "./node_modules/capnp-ts/lib/serialization/pointers/uint8-list.js");
exports.Uint8List = uint8_list_1.Uint8List;
var uint16_list_1 = __webpack_require__(/*! ./uint16-list */ "./node_modules/capnp-ts/lib/serialization/pointers/uint16-list.js");
exports.Uint16List = uint16_list_1.Uint16List;
var uint32_list_1 = __webpack_require__(/*! ./uint32-list */ "./node_modules/capnp-ts/lib/serialization/pointers/uint32-list.js");
exports.Uint32List = uint32_list_1.Uint32List;
var uint64_list_1 = __webpack_require__(/*! ./uint64-list */ "./node_modules/capnp-ts/lib/serialization/pointers/uint64-list.js");
exports.Uint64List = uint64_list_1.Uint64List;
var void_1 = __webpack_require__(/*! ./void */ "./node_modules/capnp-ts/lib/serialization/pointers/void.js");
exports.Void = void_1.Void;
exports.VOID = void_1.VOID;
var void_list_1 = __webpack_require__(/*! ./void-list */ "./node_modules/capnp-ts/lib/serialization/pointers/void-list.js");
exports.VoidList = void_list_1.VoidList;

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/int16-list.js":
/*!************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/int16-list.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var trace = debug_1.default('capnp:list:composite');
trace('load');
var Int16List = /** @class */ (function (_super) {
    tslib_1.__extends(Int16List, _super);
    function Int16List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Int16List.prototype.get = function (index) {
        var c = pointer_1.getContent(this);
        return c.segment.getInt16(c.byteOffset + index * 2);
    };
    Int16List.prototype.set = function (index, value) {
        var c = pointer_1.getContent(this);
        c.segment.setInt16(c.byteOffset + index * 2, value);
    };
    Int16List.prototype.toString = function () {
        return "Int16_" + _super.prototype.toString.call(this);
    };
    Int16List._capnp = {
        displayName: 'List<Int16>',
        size: list_element_size_1.ListElementSize.BYTE_2,
    };
    return Int16List;
}(list_1.List));
exports.Int16List = Int16List;

//# sourceMappingURL=int16-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/int32-list.js":
/*!************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/int32-list.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var trace = debug_1.default('capnp:list:composite');
trace('load');
var Int32List = /** @class */ (function (_super) {
    tslib_1.__extends(Int32List, _super);
    function Int32List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Int32List.prototype.get = function (index) {
        var c = pointer_1.getContent(this);
        return c.segment.getInt32(c.byteOffset + index * 4);
    };
    Int32List.prototype.set = function (index, value) {
        var c = pointer_1.getContent(this);
        c.segment.setInt32(c.byteOffset + index * 4, value);
    };
    Int32List.prototype.toString = function () {
        return "Int32_" + _super.prototype.toString.call(this);
    };
    Int32List._capnp = {
        displayName: 'List<Int32>',
        size: list_element_size_1.ListElementSize.BYTE_4,
    };
    return Int32List;
}(list_1.List));
exports.Int32List = Int32List;

//# sourceMappingURL=int32-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/int64-list.js":
/*!************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/int64-list.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var trace = debug_1.default('capnp:list:composite');
trace('load');
var Int64List = /** @class */ (function (_super) {
    tslib_1.__extends(Int64List, _super);
    function Int64List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Int64List.prototype.get = function (index) {
        var c = pointer_1.getContent(this);
        return c.segment.getInt64(c.byteOffset + index * 8);
    };
    Int64List.prototype.set = function (index, value) {
        var c = pointer_1.getContent(this);
        c.segment.setInt64(c.byteOffset + index * 8, value);
    };
    Int64List.prototype.toString = function () {
        return "Int64_" + _super.prototype.toString.call(this);
    };
    Int64List._capnp = {
        displayName: 'List<Int64>',
        size: list_element_size_1.ListElementSize.BYTE_8,
    };
    return Int64List;
}(list_1.List));
exports.Int64List = Int64List;

//# sourceMappingURL=int64-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/int8-list.js":
/*!***********************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/int8-list.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var trace = debug_1.default('capnp:list:composite');
trace('load');
var Int8List = /** @class */ (function (_super) {
    tslib_1.__extends(Int8List, _super);
    function Int8List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Int8List.prototype.get = function (index) {
        var c = pointer_1.getContent(this);
        return c.segment.getInt8(c.byteOffset + index);
    };
    Int8List.prototype.set = function (index, value) {
        var c = pointer_1.getContent(this);
        c.segment.setInt8(c.byteOffset + index, value);
    };
    Int8List.prototype.toString = function () {
        return "Int8_" + _super.prototype.toString.call(this);
    };
    Int8List._capnp = {
        displayName: 'List<Int8>',
        size: list_element_size_1.ListElementSize.BYTE,
    };
    return Int8List;
}(list_1.List));
exports.Int8List = Int8List;

//# sourceMappingURL=int8-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/interface-list.js":
/*!****************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/interface-list.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = __webpack_require__(/*! ./interface */ "./node_modules/capnp-ts/lib/serialization/pointers/interface.js");
var pointer_list_1 = __webpack_require__(/*! ./pointer-list */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer-list.js");
exports.InterfaceList = pointer_list_1.PointerList(interface_1.Interface);

//# sourceMappingURL=interface-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/interface.js":
/*!***********************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/interface.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var constants_1 = __webpack_require__(/*! ../../constants */ "./node_modules/capnp-ts/lib/constants.js");
var errors_1 = __webpack_require__(/*! ../../errors */ "./node_modules/capnp-ts/lib/errors.js");
var util_1 = __webpack_require__(/*! ../../util */ "./node_modules/capnp-ts/lib/util.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var Interface = /** @class */ (function (_super) {
    tslib_1.__extends(Interface, _super);
    function Interface(segment, byteOffset, depthLimit) {
        if (depthLimit === void 0) { depthLimit = constants_1.MAX_DEPTH; }
        var _this = _super.call(this, segment, byteOffset, depthLimit) || this;
        throw new Error(util_1.format(errors_1.NOT_IMPLEMENTED, 'new Interface'));
        return _this;
    }
    return Interface;
}(pointer_1.Pointer));
exports.Interface = Interface;

//# sourceMappingURL=interface.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/list.js":
/*!******************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/list.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var errors_1 = __webpack_require__(/*! ../../errors */ "./node_modules/capnp-ts/lib/errors.js");
var util_1 = __webpack_require__(/*! ../../util */ "./node_modules/capnp-ts/lib/util.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var object_size_1 = __webpack_require__(/*! ../object-size */ "./node_modules/capnp-ts/lib/serialization/object-size.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var trace = debug_1.default('capnp:list');
trace('load');
/**
 * A generic list class. Implements Filterable,
 */
var List = /** @class */ (function (_super) {
    tslib_1.__extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.toString = function () {
        return this._capnp.displayName;
    };
    List.prototype.all = function (callbackfn) {
        var length = this.getLength();
        for (var i = 0; i < length; i++) {
            if (!callbackfn(this.get(i), i))
                return false;
        }
        return true;
    };
    List.prototype.any = function (callbackfn) {
        var length = this.getLength();
        for (var i = 0; i < length; i++)
            if (callbackfn(this.get(i), i))
                return true;
        return false;
    };
    List.prototype.ap = function (callbackfns) {
        var _this = this;
        var length = this.getLength();
        var res = [];
        var _loop_1 = function (i) {
            res.push.apply(res, callbackfns.map(function (f) { return f(_this.get(i), i); }));
        };
        for (var i = 0; i < length; i++) {
            _loop_1(i);
        }
        return res;
    };
    List.prototype.concat = function (other) {
        var length = this.getLength();
        var otherLength = other.getLength();
        var res = new Array(length + otherLength);
        for (var i = 0; i < length; i++)
            res[i] = this.get(i);
        for (var i = 0; i < otherLength; i++)
            res[i + length] = other.get(i);
        return res;
    };
    List.prototype.drop = function (n) {
        var length = this.getLength();
        var res = new Array(length);
        for (var i = n; i < length; i++)
            res[i] = this.get(i);
        return res;
    };
    List.prototype.dropWhile = function (callbackfn) {
        var length = this.getLength();
        var res = [];
        var drop = true;
        for (var i = 0; i < length; i++) {
            var v = this.get(i);
            if (drop)
                drop = callbackfn(v, i);
            if (!drop)
                res.push(v);
        }
        return res;
    };
    List.prototype.empty = function () { return []; };
    List.prototype.every = function (callbackfn) { return this.all(callbackfn); };
    List.prototype.filter = function (callbackfn) {
        var length = this.getLength();
        var res = [];
        for (var i = 0; i < length; i++) {
            var value = this.get(i);
            if (callbackfn(value, i))
                res.push(value);
        }
        return res;
    };
    List.prototype.find = function (callbackfn) {
        var length = this.getLength();
        for (var i = 0; i < length; i++) {
            var value = this.get(i);
            if (callbackfn(value, i))
                return value;
        }
        return undefined;
    };
    List.prototype.forEach = function (callbackfn) {
        var length = this.getLength();
        for (var i = 0; i < length; i++)
            callbackfn(this.get(i), i);
    };
    List.prototype.get = function (_index) {
        throw new TypeError();
    };
    /**
     * Get the length of this list.
     *
     * @returns {number} The number of elements in this list.
     */
    List.prototype.getLength = function () {
        return pointer_1.getTargetListLength(this);
    };
    List.prototype.groupBy = function (callbackfn) {
        var length = this.getLength();
        var res = {};
        for (var i = 0; i < length; i++) {
            var v = this.get(i);
            res[callbackfn(v, i)] = v;
        }
        return res;
    };
    List.prototype.intersperse = function (sep) {
        var length = this.getLength();
        var res = new Array(length);
        for (var i = 0; i < length; i++) {
            if (i > 0)
                res.push(sep);
            res.push(this.get(i));
        }
        return res;
    };
    List.prototype.map = function (callbackfn) {
        var length = this.getLength();
        var res = new Array(length);
        for (var i = 0; i < length; i++)
            res[i] = callbackfn(this.get(i), i);
        return res;
    };
    List.prototype.reduce = function (callbackfn, initialValue) {
        var i = 0;
        var res;
        if (initialValue === undefined) {
            // LINT: It's okay, I know what I'm doing here.
            /* tslint:disable-next-line:no-any */
            res = this.get(0);
            i++;
        }
        else {
            res = initialValue;
        }
        for (; i < this.getLength(); i++)
            res = callbackfn(res, this.get(i), i);
        return res;
    };
    List.prototype.set = function (_index, _value) {
        throw new TypeError();
    };
    List.prototype.slice = function (start, end) {
        if (start === void 0) { start = 0; }
        var length = end ? Math.min(this.getLength(), end) : this.getLength();
        var res = new Array(length - start);
        for (var i = start; i < length; i++)
            res[i] = this.get(i);
        return res;
    };
    List.prototype.some = function (callbackfn) { return this.any(callbackfn); };
    List.prototype.take = function (n) {
        var length = Math.min(this.getLength(), n);
        var res = new Array(length);
        for (var i = 0; i < length; i++)
            res[i] = this.get(i);
        return res;
    };
    List.prototype.takeWhile = function (callbackfn) {
        var length = this.getLength();
        var res = [];
        var take;
        for (var i = 0; i < length; i++) {
            var v = this.get(i);
            take = callbackfn(v, i);
            if (!take)
                return res;
            res.push(v);
        }
        return res;
    };
    List.prototype.toArray = function () {
        return this.map(util_1.identity);
    };
    List.prototype.toString = function () {
        return "List_" + _super.prototype.toString.call(this);
    };
    List._capnp = {
        displayName: 'List<Generic>',
        size: list_element_size_1.ListElementSize.VOID,
    };
    List.initList = initList;
    return List;
}(pointer_1.Pointer));
exports.List = List;
/**
 * Initialize the list with the given element size and length. This will allocate new space for the list, ideally in
 * the same segment as this pointer.
 *
 * @param {ListElementSize} elementSize The size of each element in the list.
 * @param {number} length The number of elements in the list.
 * @param {List<T>} l The list to initialize.
 * @param {ObjectSize} [compositeSize] The size of each element in a composite list. This value is required for
 * composite lists.
 * @returns {void}
 */
function initList(elementSize, length, l, compositeSize) {
    var c;
    switch (elementSize) {
        case list_element_size_1.ListElementSize.BIT:
            c = l.segment.allocate(Math.ceil(length / 8));
            break;
        case list_element_size_1.ListElementSize.BYTE:
        case list_element_size_1.ListElementSize.BYTE_2:
        case list_element_size_1.ListElementSize.BYTE_4:
        case list_element_size_1.ListElementSize.BYTE_8:
        case list_element_size_1.ListElementSize.POINTER:
            c = l.segment.allocate(length * pointer_1.getListElementByteLength(elementSize));
            break;
        case list_element_size_1.ListElementSize.COMPOSITE:
            if (compositeSize === undefined)
                throw new Error(util_1.format(errors_1.PTR_COMPOSITE_SIZE_UNDEFINED));
            compositeSize = object_size_1.padToWord(compositeSize);
            var byteLength = object_size_1.getByteLength(compositeSize) * length;
            // We need to allocate an extra 8 bytes for the tag word, then make sure we write the length to it. We advance
            // the content pointer by 8 bytes so that it then points to the first list element as intended. Everything
            // starts off zeroed out so these nested structs don't need to be initialized in any way.
            c = l.segment.allocate(byteLength + 8);
            pointer_1.setStructPointer(length, compositeSize, c);
            trace('Wrote composite tag word %s for %s.', c, l);
            break;
        case list_element_size_1.ListElementSize.VOID:
            // No need to allocate anything, we can write the list pointer right here.
            pointer_1.setListPointer(0, elementSize, length, l);
            return;
        default:
            throw new Error(util_1.format(errors_1.PTR_INVALID_LIST_SIZE, elementSize));
    }
    var res = pointer_1.initPointer(c.segment, c.byteOffset, l);
    pointer_1.setListPointer(res.offsetWords, elementSize, length, res.pointer, compositeSize);
}
exports.initList = initList;

//# sourceMappingURL=list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/orphan.js":
/*!********************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/orphan.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var errors_1 = __webpack_require__(/*! ../../errors */ "./node_modules/capnp-ts/lib/errors.js");
var util_1 = __webpack_require__(/*! ../../util */ "./node_modules/capnp-ts/lib/util.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var object_size_1 = __webpack_require__(/*! ../object-size */ "./node_modules/capnp-ts/lib/serialization/object-size.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var pointer_type_1 = __webpack_require__(/*! ./pointer-type */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer-type.js");
var trace = debug_1.default('capnp:orphan');
trace('load');
// Technically speaking this class doesn't need to be generic, but the extra type checking enforced by this helps to
// make sure you don't accidentally adopt a pointer of the wrong type.
/**
 * An orphaned pointer. This object itself is technically a pointer to the original pointer's content, which was left
 * untouched in its original message. The original pointer data is encoded as attributes on the Orphan object, ready to
 * be reconstructed once another pointer is ready to adopt it.
 *
 * @export
 * @class Orphan
 * @extends {Pointer}
 * @template T
 */
var Orphan = /** @class */ (function () {
    function Orphan(src) {
        var c = pointer_1.getContent(src);
        this.segment = c.segment;
        this.byteOffset = c.byteOffset;
        this._capnp = {};
        // Read vital info from the src pointer so we can reconstruct it during adoption.
        this._capnp.type = pointer_1.getTargetPointerType(src);
        switch (this._capnp.type) {
            case pointer_type_1.PointerType.STRUCT:
                this._capnp.size = pointer_1.getTargetStructSize(src);
                break;
            case pointer_type_1.PointerType.LIST:
                this._capnp.length = pointer_1.getTargetListLength(src);
                this._capnp.elementSize = pointer_1.getTargetListElementSize(src);
                if (this._capnp.elementSize === list_element_size_1.ListElementSize.COMPOSITE)
                    this._capnp.size = pointer_1.getTargetCompositeListSize(src);
                break;
            case pointer_type_1.PointerType.OTHER:
                this._capnp.capId = pointer_1.getCapabilityId(src);
                break;
            default:
                // COVERAGE: Unreachable code.
                /* istanbul ignore next */
                throw new Error(errors_1.PTR_INVALID_POINTER_TYPE);
        }
        // Zero out the source pointer (but not the contents!).
        pointer_1.erasePointer(src);
    }
    /**
     * Adopt (move) this orphan into the target pointer location. This will allocate far pointers in `dst` as needed.
     *
     * @param {T} dst The destination pointer.
     * @returns {void}
     */
    Orphan.prototype._moveTo = function (dst) {
        if (this._capnp === undefined)
            throw new Error(util_1.format(errors_1.PTR_ALREADY_ADOPTED, this));
        // TODO: Implement copy semantics when this happens.
        if (this.segment.message !== dst.segment.message)
            throw new Error(util_1.format(errors_1.PTR_ADOPT_WRONG_MESSAGE, this, dst));
        // Recursively wipe out the destination pointer first.
        pointer_1.erase(dst);
        var res = pointer_1.initPointer(this.segment, this.byteOffset, dst);
        switch (this._capnp.type) {
            case pointer_type_1.PointerType.STRUCT:
                pointer_1.setStructPointer(res.offsetWords, this._capnp.size, res.pointer);
                break;
            case pointer_type_1.PointerType.LIST:
                var offsetWords = res.offsetWords;
                if (this._capnp.elementSize === list_element_size_1.ListElementSize.COMPOSITE)
                    offsetWords--; // The tag word gets skipped.
                pointer_1.setListPointer(offsetWords, this._capnp.elementSize, this._capnp.length, res.pointer, this._capnp.size);
                break;
            case pointer_type_1.PointerType.OTHER:
                pointer_1.setInterfacePointer(this._capnp.capId, res.pointer);
                break;
            /* istanbul ignore next */
            default:
                throw new Error(errors_1.PTR_INVALID_POINTER_TYPE);
        }
        this._capnp = undefined;
    };
    Orphan.prototype.dispose = function () {
        // FIXME: Should this throw?
        if (this._capnp === undefined) {
            trace('not disposing an already disposed orphan', this);
            return;
        }
        switch (this._capnp.type) {
            case pointer_type_1.PointerType.STRUCT:
                this.segment.fillZeroWords(this.byteOffset, object_size_1.getWordLength(this._capnp.size));
                break;
            case pointer_type_1.PointerType.LIST:
                var byteLength = pointer_1.getListByteLength(this._capnp.elementSize, this._capnp.length, this._capnp.size);
                this.segment.fillZeroWords(this.byteOffset, byteLength);
                break;
            default:
                // Other pointer types don't actually have any content.
                break;
        }
        this._capnp = undefined;
    };
    Orphan.prototype.toString = function () {
        return util_1.format('Orphan_%d@%a,type:%s', this.segment.id, this.byteOffset, this._capnp && this._capnp.type);
    };
    return Orphan;
}());
exports.Orphan = Orphan;

//# sourceMappingURL=orphan.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/pointer-allocation-result.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/pointer-allocation-result.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var trace = debug_1.default('capnp:pointer-allocation-result');
trace('load');
/**
 * This is used as the return value for `Pointer.prototype.initPointer`. Turns out using a class in V8 for multiple
 * return values is faster than using an array or anonymous object.
 *
 * http://jsben.ch/#/zTdbD
 *
 * @export
 * @class PointerAllocationResult
 */
var PointerAllocationResult = /** @class */ (function () {
    function PointerAllocationResult(pointer, offsetWords) {
        this.pointer = pointer;
        this.offsetWords = offsetWords;
    }
    return PointerAllocationResult;
}());
exports.PointerAllocationResult = PointerAllocationResult;

//# sourceMappingURL=pointer-allocation-result.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/pointer-list.js":
/*!**************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/pointer-list.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var trace = debug_1.default('capnp:list:composite');
trace('load');
function PointerList(PointerClass) {
    return _a = /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.get = function (index) {
                var c = pointer_1.getContent(this);
                return new PointerClass(c.segment, c.byteOffset + index * 8, this._capnp.depthLimit - 1);
            };
            class_1.prototype.set = function (index, value) {
                pointer_1.copyFrom(value, this.get(index));
            };
            class_1.prototype.toString = function () {
                return "Pointer_" + _super.prototype.toString.call(this) + ",cls:" + PointerClass.toString();
            };
            return class_1;
        }(list_1.List)),
        _a._capnp = {
            displayName: "List<" + PointerClass._capnp.displayName + ">",
            size: list_element_size_1.ListElementSize.POINTER,
        },
        _a;
    var _a;
}
exports.PointerList = PointerList;

//# sourceMappingURL=pointer-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/pointer-type.js":
/*!**************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/pointer-type.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var PointerType;
(function (PointerType) {
    PointerType[PointerType["STRUCT"] = 0] = "STRUCT";
    PointerType[PointerType["LIST"] = 1] = "LIST";
    PointerType[PointerType["FAR"] = 2] = "FAR";
    PointerType[PointerType["OTHER"] = 3] = "OTHER";
})(PointerType = exports.PointerType || (exports.PointerType = {}));

//# sourceMappingURL=pointer-type.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/pointer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var constants_1 = __webpack_require__(/*! ../../constants */ "./node_modules/capnp-ts/lib/constants.js");
var util_1 = __webpack_require__(/*! ../../util */ "./node_modules/capnp-ts/lib/util.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var object_size_1 = __webpack_require__(/*! ../object-size */ "./node_modules/capnp-ts/lib/serialization/object-size.js");
var orphan_1 = __webpack_require__(/*! ./orphan */ "./node_modules/capnp-ts/lib/serialization/pointers/orphan.js");
var pointer_allocation_result_1 = __webpack_require__(/*! ./pointer-allocation-result */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer-allocation-result.js");
var pointer_type_1 = __webpack_require__(/*! ./pointer-type */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer-type.js");
var errors_1 = __webpack_require__(/*! ../../errors */ "./node_modules/capnp-ts/lib/errors.js");
var trace = debug_1.default('capnp:pointer');
trace('load');
/**
 * A pointer referencing a single byte location in a segment. This is typically used for Cap'n Proto pointers, but is
 * also sometimes used to reference an offset to a pointer's content or tag words.
 *
 * @export
 * @class Pointer
 */
var Pointer = /** @class */ (function () {
    function Pointer(segment, byteOffset, depthLimit) {
        if (depthLimit === void 0) { depthLimit = constants_1.MAX_DEPTH; }
        if (depthLimit === 0)
            throw new Error(util_1.format(errors_1.PTR_DEPTH_LIMIT_EXCEEDED, this));
        // Make sure we keep track of all pointer allocations; there's a limit per message (prevent DoS).
        trackPointerAllocation(segment.message, this);
        // NOTE: It's okay to have a pointer to the end of the segment; you'll see this when creating pointers to the
        // beginning of the content of a newly-allocated composite list with zero elements. Unlike other language
        // implementations buffer over/underflows are not a big issue since all buffer access is bounds checked in native
        // code anyway.
        if (byteOffset < 0 || byteOffset > segment.byteLength) {
            throw new Error(util_1.format(errors_1.PTR_OFFSET_OUT_OF_BOUNDS, byteOffset));
        }
        this._capnp = { compositeList: false, depthLimit: depthLimit };
        this.segment = segment;
        this.byteOffset = byteOffset;
        trace('new %s', this);
    }
    Pointer.prototype.toString = function () {
        return util_1.format('Pointer_%d@%a,%s,limit:%x', this.segment.id, this.byteOffset, dump(this), this._capnp.depthLimit);
    };
    Pointer.adopt = adopt;
    Pointer.copyFrom = copyFrom;
    Pointer.disown = disown;
    Pointer.dump = dump;
    Pointer.isNull = isNull;
    Pointer._capnp = {
        displayName: 'Pointer',
    };
    return Pointer;
}());
exports.Pointer = Pointer;
/**
 * Adopt an orphaned pointer, making the pointer point to the orphaned content without copying it.
 *
 * @param {Orphan<Pointer>} src The orphan to adopt.
 * @param {Pointer} p The the pointer to adopt into.
 * @returns {void}
 */
function adopt(src, p) {
    src._moveTo(p);
}
exports.adopt = adopt;
/**
 * Convert a pointer to an Orphan, zeroing out the pointer and leaving its content untouched. If the content is no
 * longer needed, call `disown()` on the orphaned pointer to erase the contents as well.
 *
 * Call `adopt()` on the orphan with the new target pointer location to move it back into the message; the orphan
 * object is then invalidated after adoption (can only adopt once!).
 *
 * @param {T} p The pointer to turn into an Orphan.
 * @returns {Orphan<T>} An orphaned pointer.
 */
function disown(p) {
    return new orphan_1.Orphan(p);
}
exports.disown = disown;
function dump(p) {
    return util_1.bufferToHex(p.segment.buffer.slice(p.byteOffset, p.byteOffset + 8));
}
exports.dump = dump;
/**
 * Get the total number of bytes required to hold a list of the provided size with the given length, rounded up to the
 * nearest word.
 *
 * @param {ListElementSize} elementSize A number describing the size of the list elements.
 * @param {number} length The length of the list.
 * @param {ObjectSize} [compositeSize] The size of each element in a composite list; required if
 * `elementSize === ListElementSize.COMPOSITE`.
 * @returns {number} The number of bytes required to hold an element of that size, or `NaN` if that is undefined.
 */
function getListByteLength(elementSize, length, compositeSize) {
    switch (elementSize) {
        case list_element_size_1.ListElementSize.BIT:
            return util_1.padToWord(length + 7 >>> 3);
        case list_element_size_1.ListElementSize.BYTE:
        case list_element_size_1.ListElementSize.BYTE_2:
        case list_element_size_1.ListElementSize.BYTE_4:
        case list_element_size_1.ListElementSize.BYTE_8:
        case list_element_size_1.ListElementSize.POINTER:
        case list_element_size_1.ListElementSize.VOID:
            return util_1.padToWord(getListElementByteLength(elementSize) * length);
        /* istanbul ignore next */
        case list_element_size_1.ListElementSize.COMPOSITE:
            if (compositeSize === undefined)
                throw new Error(util_1.format(errors_1.PTR_INVALID_LIST_SIZE, NaN));
            return length * util_1.padToWord(object_size_1.getByteLength(compositeSize));
        /* istanbul ignore next */
        default:
            throw new Error(errors_1.PTR_INVALID_LIST_SIZE);
    }
}
exports.getListByteLength = getListByteLength;
/**
 * Get the number of bytes required to hold a list element of the provided size. `COMPOSITE` elements do not have a
 * fixed size, and `BIT` elements are packed into exactly a single bit, so these both return `NaN`.
 *
 * @param {ListElementSize} elementSize A number describing the size of the list elements.
 * @returns {number} The number of bytes required to hold an element of that size, or `NaN` if that is undefined.
 */
function getListElementByteLength(elementSize) {
    switch (elementSize) {
        /* istanbul ignore next */
        case list_element_size_1.ListElementSize.BIT:
            return NaN;
        case list_element_size_1.ListElementSize.BYTE:
            return 1;
        case list_element_size_1.ListElementSize.BYTE_2:
            return 2;
        case list_element_size_1.ListElementSize.BYTE_4:
            return 4;
        case list_element_size_1.ListElementSize.BYTE_8:
        case list_element_size_1.ListElementSize.POINTER:
            return 8;
        /* istanbul ignore next */
        case list_element_size_1.ListElementSize.COMPOSITE:
            // Caller has to figure it out based on the tag word.
            return NaN;
        /* istanbul ignore next */
        case list_element_size_1.ListElementSize.VOID:
            return 0;
        /* istanbul ignore next */
        default:
            throw new Error(util_1.format(errors_1.PTR_INVALID_LIST_SIZE, elementSize));
    }
}
exports.getListElementByteLength = getListElementByteLength;
/**
 * Add an offset to the pointer's offset and return a new Pointer for that address.
 *
 * @param {number} offset The number of bytes to add to the offset.
 * @param {Pointer} p The pointer to add from.
 * @returns {Pointer} A new pointer to the address.
 */
function add(offset, p) {
    return new Pointer(p.segment, p.byteOffset + offset, p._capnp.depthLimit);
}
exports.add = add;
/**
 * Replace a pointer with a deep copy of the pointer at `src` and all of its contents.
 *
 * @param {Pointer} src The pointer to copy.
 * @param {Pointer} p The pointer to copy into.
 * @returns {void}
 */
function copyFrom(src, p) {
    // If the pointer is the same then this is a noop.
    if (p.segment === src.segment && p.byteOffset === src.byteOffset) {
        trace('ignoring copy operation from identical pointer %s', src);
        return;
    }
    // Make sure we erase this pointer's contents before moving on. If src is null, that's all we do.
    erase(p); // noop if null
    if (isNull(src))
        return;
    switch (getTargetPointerType(src)) {
        case pointer_type_1.PointerType.STRUCT:
            copyFromStruct(src, p);
            break;
        case pointer_type_1.PointerType.LIST:
            copyFromList(src, p);
            break;
        /* istanbul ignore next */
        default:
            throw new Error(util_1.format(errors_1.PTR_INVALID_POINTER_TYPE, getTargetPointerType(p)));
    }
}
exports.copyFrom = copyFrom;
/**
 * Recursively erase a pointer, any far pointers/landing pads/tag words, and the content it points to.
 *
 * Note that this will leave "holes" of zeroes in the message, since the space cannot be reclaimed. With packing this
 * will have a negligible effect on the final message size.
 *
 * FIXME: This may need protection against infinite recursion...
 *
 * @param {Pointer} p The pointer to erase.
 * @returns {void}
 */
function erase(p) {
    if (isNull(p))
        return;
    // First deal with the contents.
    var c;
    switch (getTargetPointerType(p)) {
        case pointer_type_1.PointerType.STRUCT:
            var size = getTargetStructSize(p);
            c = getContent(p);
            // Wipe the data section.
            c.segment.fillZeroWords(c.byteOffset, size.dataByteLength / 8);
            // Iterate over all the pointers and nuke them.
            for (var i = 0; i < size.pointerLength; i++) {
                erase(add(i * 8, c));
            }
            break;
        case pointer_type_1.PointerType.LIST:
            var elementSize = getTargetListElementSize(p);
            var length = getTargetListLength(p);
            var contentWords = util_1.padToWord(length * getListElementByteLength(elementSize));
            c = getContent(p);
            if (elementSize === list_element_size_1.ListElementSize.POINTER) {
                for (var i = 0; i < length; i++) {
                    erase(new Pointer(c.segment, c.byteOffset + i * 8, p._capnp.depthLimit - 1));
                }
                // Calling erase on each pointer takes care of the content, nothing left to do here.
                break;
            }
            else if (elementSize === list_element_size_1.ListElementSize.COMPOSITE) {
                // Read some stuff from the tag word.
                var tag = add(-8, c);
                var compositeSize = getStructSize(tag);
                var compositeByteLength = object_size_1.getByteLength(compositeSize);
                contentWords = getOffsetWords(tag);
                // Kill the tag word.
                c.segment.setWordZero(c.byteOffset - 8);
                // Recursively erase each pointer.
                for (var i = 0; i < length; i++) {
                    for (var j = 0; j < compositeSize.pointerLength; j++) {
                        erase(new Pointer(c.segment, c.byteOffset + i * compositeByteLength + j * 8, p._capnp.depthLimit - 1));
                    }
                }
            }
            c.segment.fillZeroWords(c.byteOffset, contentWords);
            break;
        case pointer_type_1.PointerType.OTHER:
            // No content.
            break;
        default:
            throw new Error(util_1.format(errors_1.PTR_INVALID_POINTER_TYPE, getTargetPointerType(p)));
    }
    erasePointer(p);
}
exports.erase = erase;
/**
 * Set the pointer (and far pointer landing pads, if applicable) to zero. Does not touch the pointer's content.
 *
 * @param {Pointer} p The pointer to erase.
 * @returns {void}
 */
function erasePointer(p) {
    if (getPointerType(p) === pointer_type_1.PointerType.FAR) {
        var landingPad = followFar(p);
        if (isDoubleFar(p)) {
            // Kill the double-far tag word.
            landingPad.segment.setWordZero(landingPad.byteOffset + 8);
        }
        // Kill the landing pad.
        landingPad.segment.setWordZero(landingPad.byteOffset);
    }
    // Finally! Kill the pointer itself...
    p.segment.setWordZero(p.byteOffset);
}
exports.erasePointer = erasePointer;
/**
 * Interpret the pointer as a far pointer, returning its target segment and offset.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {Pointer} A pointer to the far target.
 */
function followFar(p) {
    var targetSegment = p.segment.message.getSegment(p.segment.getUint32(p.byteOffset + 4));
    var targetWordOffset = p.segment.getUint32(p.byteOffset) >>> 3;
    return new Pointer(targetSegment, targetWordOffset * 8, p._capnp.depthLimit - 1);
}
exports.followFar = followFar;
/**
 * If the pointer address references a far pointer, follow it to the location where the actual pointer data is written.
 * Otherwise, returns the pointer unmodified.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {Pointer} A new pointer representing the target location, or `p` if it is not a far pointer.
 */
function followFars(p) {
    if (getPointerType(p) === pointer_type_1.PointerType.FAR) {
        var landingPad = followFar(p);
        if (isDoubleFar(p))
            landingPad.byteOffset += 8;
        return landingPad;
    }
    return p;
}
exports.followFars = followFars;
function getCapabilityId(p) {
    return p.segment.getUint32(p.byteOffset + 4);
}
exports.getCapabilityId = getCapabilityId;
function isCompositeList(p) {
    return getTargetPointerType(p) === pointer_type_1.PointerType.LIST && getTargetListElementSize(p) === list_element_size_1.ListElementSize.COMPOSITE;
}
/**
 * Obtain the location of the pointer's content, following far pointers as needed.
 * If the pointer is a struct pointer and `compositeIndex` is set, it will be offset by a multiple of the struct's size.
 *
 * @param {Pointer} p The pointer to read from.
 * @param {boolean} [ignoreCompositeIndex] If true, will not follow the composite struct pointer's composite index and
 * instead return a pointer to the parent list's contents (also the beginning of the first struct).
 * @returns {Pointer} A pointer to the beginning of the pointer's content.
 */
function getContent(p, ignoreCompositeIndex) {
    var c;
    if (isDoubleFar(p)) {
        var landingPad = followFar(p);
        c = new Pointer(p.segment.message.getSegment(getFarSegmentId(landingPad)), getOffsetWords(landingPad) * 8);
    }
    else {
        var target = followFars(p);
        c = new Pointer(target.segment, target.byteOffset + 8 + getOffsetWords(target) * 8);
    }
    if (isCompositeList(p))
        c.byteOffset += 8;
    if (!ignoreCompositeIndex && p._capnp.compositeIndex !== undefined) {
        // Seek backwards by one word so we can read the struct size off the tag word.
        c.byteOffset -= 8;
        // Seek ahead by `compositeIndex` multiples of the struct's total size.
        c.byteOffset += 8 + p._capnp.compositeIndex * object_size_1.getByteLength(object_size_1.padToWord(getStructSize(c)));
    }
    return c;
}
exports.getContent = getContent;
/**
 * Read the target segment ID from a far pointer.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {number} The target segment ID.
 */
function getFarSegmentId(p) {
    return p.segment.getUint32(p.byteOffset + 4);
}
exports.getFarSegmentId = getFarSegmentId;
/**
 * Get a number indicating the size of the list's elements.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {ListElementSize} The size of the list's elements.
 */
function getListElementSize(p) {
    return p.segment.getUint32(p.byteOffset + 4) & constants_1.LIST_SIZE_MASK;
}
exports.getListElementSize = getListElementSize;
/**
 * Get the number of elements in a list pointer. For composite lists, it instead represents the total number of words in
 * the list (not counting the tag word).
 *
 * This method does **not** attempt to distinguish between composite and non-composite lists. To get the correct
 * length for composite lists use `getTargetListLength()` instead.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {number} The length of the list, or total number of words for composite lists.
 */
function getListLength(p) {
    return p.segment.getUint32(p.byteOffset + 4) >>> 3;
}
exports.getListLength = getListLength;
/**
 * Get the offset (in words) from the end of a pointer to the start of its content. For struct pointers, this is the
 * beginning of the data section, and for list pointers it is the location of the first element. The value should
 * always be zero for interface pointers.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {number} The offset, in words, from the end of the pointer to the start of the data section.
 */
function getOffsetWords(p) {
    var o = p.segment.getInt32(p.byteOffset);
    // Far pointers only have 29 offset bits.
    return o & 2 ? o >> 3 : o >> 2;
}
exports.getOffsetWords = getOffsetWords;
/**
 * Look up the pointer's type.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {PointerType} The type of pointer.
 */
function getPointerType(p) {
    return p.segment.getUint32(p.byteOffset) & constants_1.POINTER_TYPE_MASK;
}
exports.getPointerType = getPointerType;
/**
 * Read the number of data words from this struct pointer.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {number} The number of data words in the struct.
 */
function getStructDataWords(p) {
    return p.segment.getUint16(p.byteOffset + 4);
}
exports.getStructDataWords = getStructDataWords;
/**
 * Read the number of pointers contained in this struct pointer.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {number} The number of pointers in this struct.
 */
function getStructPointerLength(p) {
    return p.segment.getUint16(p.byteOffset + 6);
}
exports.getStructPointerLength = getStructPointerLength;
/**
 * Get an object describing this struct pointer's size.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {ObjectSize} The size of the struct.
 */
function getStructSize(p) {
    return new object_size_1.ObjectSize(getStructDataWords(p) * 8, getStructPointerLength(p));
}
exports.getStructSize = getStructSize;
/**
 * Get a pointer to this pointer's composite list tag word, following far pointers as needed.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {Pointer} A pointer to the list's composite tag word.
 */
function getTargetCompositeListTag(p) {
    var c = getContent(p);
    // The composite list tag is always one word before the content.
    c.byteOffset -= 8;
    return c;
}
exports.getTargetCompositeListTag = getTargetCompositeListTag;
/**
 * Get the object size for the target composite list, following far pointers as needed.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {ObjectSize} An object describing the size of each struct in the list.
 */
function getTargetCompositeListSize(p) {
    return getStructSize(getTargetCompositeListTag(p));
}
exports.getTargetCompositeListSize = getTargetCompositeListSize;
/**
 * Get the size of the list elements referenced by this pointer, following far pointers if necessary.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {ListElementSize} The size of the elements in the list.
 */
function getTargetListElementSize(p) {
    return getListElementSize(followFars(p));
}
exports.getTargetListElementSize = getTargetListElementSize;
/**
 * Get the length of the list referenced by this pointer, following far pointers if necessary. If the list is a
 * composite list, it will look up the tag word and read the length from there.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {number} The number of elements in the list.
 */
function getTargetListLength(p) {
    var t = followFars(p);
    if (getListElementSize(t) === list_element_size_1.ListElementSize.COMPOSITE) {
        // The content is prefixed by a tag word; it's a struct pointer whose offset contains the list's length.
        return getOffsetWords(getTargetCompositeListTag(p));
    }
    return getListLength(t);
}
exports.getTargetListLength = getTargetListLength;
/**
 * Get the type of a pointer, following far pointers if necessary. For non-far pointers this is equivalent to calling
 * `getPointerType()`.
 *
 * The target of a far pointer can never be another far pointer, and this method will throw if such a situation is
 * encountered.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {PointerType} The type of pointer referenced by this pointer.
 */
function getTargetPointerType(p) {
    var t = getPointerType(followFars(p));
    if (t === pointer_type_1.PointerType.FAR)
        throw new Error(util_1.format(errors_1.PTR_INVALID_FAR_TARGET, p));
    return t;
}
exports.getTargetPointerType = getTargetPointerType;
/**
 * Get the size of the struct referenced by a pointer, following far pointers if necessary.
 *
 * @param {Pointer} p The poiner to read from.
 * @returns {ObjectSize} The size of the struct referenced by this pointer.
 */
function getTargetStructSize(p) {
    return getStructSize(followFars(p));
}
exports.getTargetStructSize = getTargetStructSize;
/**
 * Initialize a pointer to point at the data in the content segment. If the content segment is not the same as the
 * pointer's segment, this will allocate and write far pointers as needed. Nothing is written otherwise.
 *
 * The return value includes a pointer to write the pointer's actual data to (the eventual far target), and the offset
 * value (in words) to use for that pointer. In the case of double-far pointers this offset will always be zero.
 *
 * @param {Segment} contentSegment The segment containing this pointer's content.
 * @param {number} contentOffset The offset within the content segment for the beginning of this pointer's content.
 * @param {Pointer} p The pointer to initialize.
 * @returns {PointerAllocationResult} An object containing a pointer (where the pointer data should be written), and
 * the value to use as the offset for that pointer.
 */
function initPointer(contentSegment, contentOffset, p) {
    if (p.segment !== contentSegment) {
        // Need a far pointer.
        trace('Initializing far pointer %s -> %s.', p, contentSegment);
        if (!contentSegment.hasCapacity(8)) {
            // GAH! Not enough space in the content segment for a landing pad so we need a double far pointer.
            var landingPad_1 = p.segment.allocate(16);
            trace('GAH! Initializing double-far pointer in %s from %s -> %s.', p, contentSegment, landingPad_1);
            setFarPointer(true, landingPad_1.byteOffset / 8, landingPad_1.segment.id, p);
            setFarPointer(false, contentOffset / 8, contentSegment.id, landingPad_1);
            landingPad_1.byteOffset += 8;
            return new pointer_allocation_result_1.PointerAllocationResult(landingPad_1, 0);
        }
        // Allocate a far pointer landing pad in the target segment.
        var landingPad = contentSegment.allocate(8);
        if (landingPad.segment.id !== contentSegment.id) {
            throw new Error(errors_1.INVARIANT_UNREACHABLE_CODE);
        }
        setFarPointer(false, landingPad.byteOffset / 8, landingPad.segment.id, p);
        return new pointer_allocation_result_1.PointerAllocationResult(landingPad, (contentOffset - landingPad.byteOffset - 8) / 8);
    }
    trace('Initializing intra-segment pointer %s -> %a.', p, contentOffset);
    return new pointer_allocation_result_1.PointerAllocationResult(p, (contentOffset - p.byteOffset - 8) / 8);
}
exports.initPointer = initPointer;
/**
 * Check if the pointer is a double-far pointer.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {boolean} `true` if it is a double-far pointer, `false` otherwise.
 */
function isDoubleFar(p) {
    return getPointerType(p) === pointer_type_1.PointerType.FAR && (p.segment.getUint32(p.byteOffset) & constants_1.POINTER_DOUBLE_FAR_MASK) !== 0;
}
exports.isDoubleFar = isDoubleFar;
/**
 * Quickly check to see if the pointer is "null". A "null" pointer is a zero word, equivalent to an empty struct
 * pointer.
 *
 * @param {Pointer} p The pointer to read from.
 * @returns {boolean} `true` if the pointer is "null".
 */
function isNull(p) {
    return p.segment.isWordZero(p.byteOffset);
}
exports.isNull = isNull;
/**
 * Relocate a pointer to the given destination, ensuring that it points to the same content. This will create far
 * pointers as needed if the content is in a different segment than the destination. After the relocation the source
 * pointer will be erased and is no longer valid.
 *
 * @param {Pointer} dst The desired location for the `src` pointer. Any existing contents will be erased before
 * relocating!
 * @param {Pointer} src The pointer to relocate.
 * @returns {void}
 */
function relocateTo(dst, src) {
    var t = followFars(src);
    var lo = t.segment.getUint8(t.byteOffset) & 0x03; // discard the offset
    var hi = t.segment.getUint32(t.byteOffset + 4);
    // Make sure anything dst was pointing to is wiped out.
    erase(dst);
    var res = initPointer(t.segment, t.byteOffset + 8 + getOffsetWords(t) * 8, dst);
    // Keep the low 2 bits and write the new offset.
    res.pointer.segment.setUint32(res.pointer.byteOffset, lo | (res.offsetWords << 2));
    // Keep the high 32 bits intact.
    res.pointer.segment.setUint32(res.pointer.byteOffset + 4, hi);
    erasePointer(src);
}
exports.relocateTo = relocateTo;
/**
 * Write a far pointer.
 *
 * @param {boolean} doubleFar Set to `true` if this is a double far pointer.
 * @param {number} offsetWords The offset, in words, to the target pointer.
 * @param {number} segmentId The segment the target pointer is located in.
 * @param {Pointer} p The pointer to write to.
 * @returns {void}
 */
function setFarPointer(doubleFar, offsetWords, segmentId, p) {
    var A = pointer_type_1.PointerType.FAR;
    var B = doubleFar ? 1 : 0;
    var C = offsetWords;
    var D = segmentId;
    p.segment.setUint32(p.byteOffset, A | B << 2 | C << 3);
    p.segment.setUint32(p.byteOffset + 4, D);
}
exports.setFarPointer = setFarPointer;
/**
 * Write a raw interface pointer.
 *
 * @param {number} capId The capability ID.
 * @param {Pointer} p The pointer to write to.
 * @returns {void}
 */
function setInterfacePointer(capId, p) {
    p.segment.setUint32(p.byteOffset, pointer_type_1.PointerType.OTHER);
    p.segment.setUint32(p.byteOffset + 4, capId);
}
exports.setInterfacePointer = setInterfacePointer;
/**
 * Write a raw list pointer.
 *
 * @param {number} offsetWords The number of words from the end of this pointer to the beginning of the list content.
 * @param {ListElementSize} size The size of each element in the list.
 * @param {number} length The number of elements in the list.
 * @param {Pointer} p The pointer to write to.
 * @param {ObjectSize} [compositeSize] For composite lists this describes the size of each element in this list. This
 * is required for composite lists.
 * @returns {void}
 */
function setListPointer(offsetWords, size, length, p, compositeSize) {
    if (p === undefined)
        throw new Error(errors_1.INVARIANT_UNREACHABLE_CODE);
    var A = pointer_type_1.PointerType.LIST;
    var B = offsetWords;
    var C = size;
    var D = length;
    if (size === list_element_size_1.ListElementSize.COMPOSITE) {
        if (compositeSize === undefined)
            throw new TypeError(errors_1.TYPE_COMPOSITE_SIZE_UNDEFINED);
        D *= object_size_1.getWordLength(compositeSize);
    }
    p.segment.setUint32(p.byteOffset, A | B << 2);
    p.segment.setUint32(p.byteOffset + 4, C | D << 3);
}
exports.setListPointer = setListPointer;
/**
 * Write a raw struct pointer.
 *
 * @param {number} offsetWords The number of words from the end of this pointer to the beginning of the struct's data
 * section.
 * @param {ObjectSize} size An object describing the size of the struct.
 * @param {Pointer} p The pointer to write to.
 * @returns {void}
 */
function setStructPointer(offsetWords, size, p) {
    var A = pointer_type_1.PointerType.STRUCT;
    var B = offsetWords;
    var C = object_size_1.getDataWordLength(size);
    var D = size.pointerLength;
    p.segment.setUint32(p.byteOffset, A | B << 2);
    p.segment.setUint16(p.byteOffset + 4, C);
    p.segment.setUint16(p.byteOffset + 6, D);
}
exports.setStructPointer = setStructPointer;
/**
 * Read some bits off a pointer to make sure it has the right pointer data.
 *
 * @param {PointerType} pointerType The expected pointer type.
 * @param {Pointer} p The pointer to validate.
 * @param {ListElementSize} [elementSize] For list pointers, the expected element size. Leave this
 * undefined for struct pointers.
 * @returns {void}
 */
function validate(pointerType, p, elementSize) {
    if (isNull(p))
        return;
    var t = followFars(p);
    // Check the pointer type.
    var A = t.segment.getUint32(t.byteOffset) & constants_1.POINTER_TYPE_MASK;
    if (A !== pointerType)
        throw new Error(util_1.format(errors_1.PTR_WRONG_POINTER_TYPE, p, pointerType));
    // Check the list element size, if provided.
    if (elementSize !== undefined) {
        var C = t.segment.getUint32(t.byteOffset + 4) & constants_1.LIST_SIZE_MASK;
        if (C !== elementSize)
            throw new Error(util_1.format(errors_1.PTR_WRONG_LIST_TYPE, p, list_element_size_1.ListElementSize[elementSize]));
    }
}
exports.validate = validate;
function copyFromList(src, dst) {
    if (dst._capnp.depthLimit <= 0)
        throw new Error(errors_1.PTR_DEPTH_LIMIT_EXCEEDED);
    var srcContent = getContent(src);
    var srcElementSize = getTargetListElementSize(src);
    var srcLength = getTargetListLength(src);
    var srcCompositeSize;
    var srcStructByteLength;
    var dstContent;
    if (srcElementSize === list_element_size_1.ListElementSize.POINTER) {
        dstContent = dst.segment.allocate(object_size_1.getByteLength(getTargetCompositeListSize(src)) * srcLength);
        // Recursively copy each pointer in the list.
        for (var i = 0; i < srcLength; i++) {
            var srcPtr = new Pointer(srcContent.segment, srcContent.byteOffset + (i << 3), src._capnp.depthLimit - 1);
            var dstPtr = new Pointer(dstContent.segment, dstContent.byteOffset + (i << 3), dst._capnp.depthLimit - 1);
            copyFrom(srcPtr, dstPtr);
        }
    }
    else if (srcElementSize === list_element_size_1.ListElementSize.COMPOSITE) {
        srcCompositeSize = object_size_1.padToWord(getTargetCompositeListSize(src));
        srcStructByteLength = object_size_1.getByteLength(srcCompositeSize);
        dstContent = dst.segment.allocate(object_size_1.getByteLength(srcCompositeSize) * srcLength + 8);
        // Copy the tag word.
        dstContent.segment.copyWord(dstContent.byteOffset, srcContent.segment, srcContent.byteOffset - 8);
        // Copy the entire contents, including all pointers. This should be more efficient than making `srcLength`
        // copies to skip the pointer sections, and we're about to rewrite all those pointers anyway.
        // PERF: Skip this step if the composite struct only contains pointers.
        if (srcCompositeSize.dataByteLength > 0) {
            var wordLength = object_size_1.getWordLength(srcCompositeSize) * srcLength;
            dstContent.segment.copyWords(dstContent.byteOffset + 8, srcContent.segment, srcContent.byteOffset, wordLength);
        }
        // Recursively copy all the pointers in each struct.
        for (var i = 0; i < srcLength; i++) {
            for (var j = 0; j < srcCompositeSize.pointerLength; j++) {
                var offset = i * srcStructByteLength + srcCompositeSize.dataByteLength + (j << 3);
                var srcPtr = new Pointer(srcContent.segment, srcContent.byteOffset + offset, src._capnp.depthLimit - 1);
                var dstPtr = new Pointer(dstContent.segment, dstContent.byteOffset + offset + 8, dst._capnp.depthLimit - 1);
                copyFrom(srcPtr, dstPtr);
            }
        }
    }
    else {
        var byteLength = util_1.padToWord(srcElementSize === list_element_size_1.ListElementSize.BIT
            ? srcLength + 7 >>> 3
            : getListElementByteLength(srcElementSize) * srcLength);
        var wordLength = byteLength >>> 3;
        dstContent = dst.segment.allocate(byteLength);
        // Copy all of the list contents word-by-word.
        dstContent.segment.copyWords(dstContent.byteOffset, srcContent.segment, srcContent.byteOffset, wordLength);
    }
    // Initialize the list pointer.
    var res = initPointer(dstContent.segment, dstContent.byteOffset, dst);
    setListPointer(res.offsetWords, srcElementSize, srcLength, res.pointer, srcCompositeSize);
}
exports.copyFromList = copyFromList;
function copyFromStruct(src, dst) {
    if (dst._capnp.depthLimit <= 0)
        throw new Error(errors_1.PTR_DEPTH_LIMIT_EXCEEDED);
    var srcContent = getContent(src);
    var srcSize = getTargetStructSize(src);
    var srcDataWordLength = object_size_1.getDataWordLength(srcSize);
    // Allocate space for the destination content.
    var dstContent = dst.segment.allocate(object_size_1.getByteLength(srcSize));
    // Copy the data section.
    dstContent.segment.copyWords(dstContent.byteOffset, srcContent.segment, srcContent.byteOffset, srcDataWordLength);
    // Copy the pointer section.
    for (var i = 0; i < srcSize.pointerLength; i++) {
        var offset = srcSize.dataByteLength + i * 8;
        var srcPtr = new Pointer(srcContent.segment, srcContent.byteOffset + offset, src._capnp.depthLimit - 1);
        var dstPtr = new Pointer(dstContent.segment, dstContent.byteOffset + offset, dst._capnp.depthLimit - 1);
        copyFrom(srcPtr, dstPtr);
    }
    // Don't touch dst if it's already initialized as a composite list pointer. With composite struct pointers there's
    // no pointer to copy here and we've already copied the contents.
    if (dst._capnp.compositeList)
        return;
    // Initialize the struct pointer.
    var res = initPointer(dstContent.segment, dstContent.byteOffset, dst);
    setStructPointer(res.offsetWords, srcSize, res.pointer);
}
exports.copyFromStruct = copyFromStruct;
/**
 * Track the allocation of a new Pointer object.
 *
 * This will decrement an internal counter tracking how many bytes have been traversed in the message so far. After
 * a certain limit, this method will throw an error in order to prevent a certain class of DoS attacks.
 *
 * @param {Message} message The message the pointer belongs to.
 * @param {Pointer} p The pointer being allocated.
 * @returns {void}
 */
function trackPointerAllocation(message, p) {
    message._capnp.traversalLimit -= 8;
    if (message._capnp.traversalLimit <= 0) {
        throw new Error(util_1.format(errors_1.PTR_TRAVERSAL_LIMIT_EXCEEDED, p));
    }
}
exports.trackPointerAllocation = trackPointerAllocation;

//# sourceMappingURL=pointer.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/struct.js":
/*!********************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/struct.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var constants_1 = __webpack_require__(/*! ../../constants */ "./node_modules/capnp-ts/lib/constants.js");
var types_1 = __webpack_require__(/*! ../../types */ "./node_modules/capnp-ts/lib/types/index.js");
var util_1 = __webpack_require__(/*! ../../util */ "./node_modules/capnp-ts/lib/util.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var object_size_1 = __webpack_require__(/*! ../object-size */ "./node_modules/capnp-ts/lib/serialization/object-size.js");
var data_1 = __webpack_require__(/*! ./data */ "./node_modules/capnp-ts/lib/serialization/pointers/data.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var pointer_type_1 = __webpack_require__(/*! ./pointer-type */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer-type.js");
var text_1 = __webpack_require__(/*! ./text */ "./node_modules/capnp-ts/lib/serialization/pointers/text.js");
var errors_1 = __webpack_require__(/*! ../../errors */ "./node_modules/capnp-ts/lib/errors.js");
var trace = debug_1.default('capnp:struct');
trace('load');
// Used to apply bit masks (default values).
var TMP_WORD = new DataView(new ArrayBuffer(8));
var Struct = /** @class */ (function (_super) {
    tslib_1.__extends(Struct, _super);
    /**
     * Create a new pointer to a struct.
     *
     * @constructor {Struct}
     * @param {Segment} segment The segment the pointer resides in.
     * @param {number} byteOffset The offset from the beginning of the segment to the beginning of the pointer data.
     * @param {any} [depthLimit=MAX_DEPTH] The nesting depth limit for this object.
     * @param {number} [compositeIndex] If set, then this pointer is actually a reference to a composite list
     * (`this._getPointerTargetType() === PointerType.LIST`), and this number is used as the index of the struct within
     * the list. It is not valid to call `initStruct()` on a composite struct – the struct contents are initialized when
     * the list pointer is initialized.
     */
    function Struct(segment, byteOffset, depthLimit, compositeIndex) {
        if (depthLimit === void 0) { depthLimit = constants_1.MAX_DEPTH; }
        var _this = _super.call(this, segment, byteOffset, depthLimit) || this;
        _this._capnp.compositeIndex = compositeIndex;
        _this._capnp.compositeList = compositeIndex !== undefined;
        return _this;
    }
    Struct.toString = function () {
        return this._capnp.displayName;
    };
    Struct.prototype.toString = function () {
        return "Struct_" + _super.prototype.toString.call(this) +
            ("" + (this._capnp.compositeIndex === undefined ? '' : ",ci:" + this._capnp.compositeIndex));
    };
    Struct._capnp = {
        displayName: 'Struct',
    };
    Struct.getAs = getAs;
    Struct.getBit = getBit;
    Struct.getData = getData;
    Struct.getFloat32 = getFloat32;
    Struct.getFloat64 = getFloat64;
    Struct.getUint8 = getUint8;
    Struct.getUint16 = getUint16;
    Struct.getUint32 = getUint32;
    Struct.getUint64 = getUint64;
    Struct.getInt8 = getInt8;
    Struct.getInt16 = getInt16;
    Struct.getInt32 = getInt32;
    Struct.getInt64 = getInt64;
    Struct.getList = getList;
    Struct.getPointer = getPointer;
    Struct.getPointerAs = getPointerAs;
    Struct.getStruct = getStruct;
    Struct.getText = getText;
    Struct.initData = initData;
    Struct.initList = initList;
    Struct.initStruct = initStruct;
    Struct.initStructAt = initStructAt;
    Struct.setBit = setBit;
    Struct.setFloat32 = setFloat32;
    Struct.setFloat64 = setFloat64;
    Struct.setUint8 = setUint8;
    Struct.setUint16 = setUint16;
    Struct.setUint32 = setUint32;
    Struct.setUint64 = setUint64;
    Struct.setInt8 = setInt8;
    Struct.setInt16 = setInt16;
    Struct.setInt32 = setInt32;
    Struct.setInt64 = setInt64;
    Struct.setText = setText;
    Struct.testWhich = testWhich;
    return Struct;
}(pointer_1.Pointer));
exports.Struct = Struct;
/**
 * Initialize a struct with the provided object size. This will allocate new space for the struct contents, ideally in
 * the same segment as this pointer.
 *
 * @param {ObjectSize} size An object describing the size of the struct's data and pointer sections.
 * @param {Struct} s The struct to initialize.
 * @returns {void}
 */
function initStruct(size, s) {
    if (s._capnp.compositeIndex !== undefined)
        throw new Error(util_1.format(errors_1.PTR_INIT_COMPOSITE_STRUCT, s));
    // Make sure to clear existing contents before overwriting the pointer data (erase is a noop if already empty).
    pointer_1.erase(s);
    var c = s.segment.allocate(object_size_1.getByteLength(size));
    var res = pointer_1.initPointer(c.segment, c.byteOffset, s);
    pointer_1.setStructPointer(res.offsetWords, size, res.pointer);
}
exports.initStruct = initStruct;
function initStructAt(index, StructClass, p) {
    var s = getPointerAs(index, StructClass, p);
    initStruct(StructClass._capnp.size, s);
    return s;
}
exports.initStructAt = initStructAt;
/**
 * Make a shallow copy of a struct's contents and update the pointer to point to the new content. The data and pointer
 * sections will be resized to the provided size.
 *
 * WARNING: This method can cause data loss if `dstSize` is smaller than the original size!
 *
 * @param {ObjectSize} dstSize The desired size for the struct contents.
 * @param {Struct} s The struct to resize.
 * @returns {void}
 */
function resize(dstSize, s) {
    var srcSize = getSize(s);
    var srcContent = pointer_1.getContent(s);
    var dstContent = s.segment.allocate(object_size_1.getByteLength(dstSize));
    // Only copy the data section for now. The pointer section will need to be rewritten.
    dstContent.segment.copyWords(dstContent.byteOffset, srcContent.segment, srcContent.byteOffset, Math.min(object_size_1.getDataWordLength(srcSize), object_size_1.getDataWordLength(dstSize)));
    var res = pointer_1.initPointer(dstContent.segment, dstContent.byteOffset, s);
    pointer_1.setStructPointer(res.offsetWords, dstSize, res.pointer);
    // Iterate through the new pointer section and update the offsets so they point to the right place. This is a bit
    // more complicated than it appears due to the fact that the original pointers could have been far pointers, and
    // the new pointers might need to be allocated as far pointers if the segment is full.
    for (var i = 0; i < Math.min(srcSize.pointerLength, dstSize.pointerLength); i++) {
        var srcPtr = new pointer_1.Pointer(srcContent.segment, srcContent.byteOffset + srcSize.dataByteLength + i * 8);
        var srcPtrTarget = pointer_1.followFars(srcPtr);
        var srcPtrContent = pointer_1.getContent(srcPtr);
        var dstPtr = new pointer_1.Pointer(dstContent.segment, dstContent.byteOffset + dstSize.dataByteLength + i * 8);
        // For composite lists the offset needs to point to the tag word, not the first element which is what getContent
        // returns.
        if (pointer_1.getTargetPointerType(srcPtr) === pointer_type_1.PointerType.LIST &&
            pointer_1.getTargetListElementSize(srcPtr) === list_element_size_1.ListElementSize.COMPOSITE) {
            srcPtrContent.byteOffset -= 8;
        }
        var r = pointer_1.initPointer(srcPtrContent.segment, srcPtrContent.byteOffset, dstPtr);
        // Read the old pointer data, but discard the original offset.
        var a = srcPtrTarget.segment.getUint8(srcPtrTarget.byteOffset) & 0x03;
        var b = srcPtrTarget.segment.getUint32(srcPtrTarget.byteOffset + 4);
        r.pointer.segment.setUint32(r.pointer.byteOffset, a | (r.offsetWords << 2));
        r.pointer.segment.setUint32(r.pointer.byteOffset + 4, b);
    }
    // Zero out the old data and pointer sections.
    srcContent.segment.fillZeroWords(srcContent.byteOffset, object_size_1.getWordLength(srcSize));
}
exports.resize = resize;
function adopt(src, s) {
    if (s._capnp.compositeIndex !== undefined)
        throw new Error(util_1.format(errors_1.PTR_ADOPT_COMPOSITE_STRUCT, s));
    pointer_1.Pointer.adopt(src, s);
}
exports.adopt = adopt;
function disown(s) {
    if (s._capnp.compositeIndex !== undefined)
        throw new Error(util_1.format(errors_1.PTR_DISOWN_COMPOSITE_STRUCT, s));
    return pointer_1.Pointer.disown(s);
}
exports.disown = disown;
/**
 * Convert a struct to a struct of the provided class. Particularly useful when casting to nested group types.
 *
 * @protected
 * @template T
 * @param {StructCtor<T>} StructClass The struct class to convert to. Not particularly useful if `Struct`.
 * @param {Struct} s The struct to convert.
 * @returns {T} A new instance of the desired struct class pointing to the same location.
 */
function getAs(StructClass, s) {
    return new StructClass(s.segment, s.byteOffset, s._capnp.depthLimit, s._capnp.compositeIndex);
}
exports.getAs = getAs;
/**
 * Read a boolean (bit) value out of a struct.
 *
 * @protected
 * @param {number} bitOffset The offset in **bits** from the start of the data section.
 * @param {Struct} s The struct to read from.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {boolean} The value.
 */
function getBit(bitOffset, s, defaultMask) {
    var byteOffset = Math.floor(bitOffset / 8);
    var bitMask = 1 << bitOffset % 8;
    checkDataBounds(byteOffset, 1, s);
    var ds = getDataSection(s);
    var v = ds.segment.getUint8(ds.byteOffset + byteOffset);
    if (defaultMask === undefined)
        return (v & bitMask) !== 0;
    var defaultValue = defaultMask.getUint8(0);
    return ((v ^ defaultValue) & bitMask) !== 0;
}
exports.getBit = getBit;
function getData(index, s) {
    checkPointerBounds(index, s);
    var ps = getPointerSection(s);
    ps.byteOffset += index * 8;
    var l = new data_1.Data(ps.segment, ps.byteOffset, s._capnp.depthLimit - 1);
    if (pointer_1.isNull(l)) {
        list_1.List.initList(list_element_size_1.ListElementSize.BYTE, 0, l);
    }
    return l;
}
exports.getData = getData;
function getDataSection(s) {
    return pointer_1.getContent(s);
}
exports.getDataSection = getDataSection;
/**
 * Read a float32 value out of a struct.
 *
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {Struct} s The struct to read from.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {number} The value.
 */
function getFloat32(byteOffset, s, defaultMask) {
    checkDataBounds(byteOffset, 4, s);
    var ds = getDataSection(s);
    if (defaultMask === undefined)
        return ds.segment.getFloat32(ds.byteOffset + byteOffset);
    var v = ds.segment.getUint32(ds.byteOffset + byteOffset) ^ defaultMask.getUint32(0, true);
    TMP_WORD.setUint32(0, v, constants_1.NATIVE_LITTLE_ENDIAN);
    return TMP_WORD.getFloat32(0, constants_1.NATIVE_LITTLE_ENDIAN);
}
exports.getFloat32 = getFloat32;
/**
 * Read a float64 value out of this segment.
 *
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {Struct} s The struct to read from.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {number} The value.
 */
function getFloat64(byteOffset, s, defaultMask) {
    checkDataBounds(byteOffset, 8, s);
    var ds = getDataSection(s);
    if (defaultMask !== undefined) {
        var lo = ds.segment.getUint32(ds.byteOffset + byteOffset) ^ defaultMask.getUint32(0, true);
        var hi = ds.segment.getUint32(ds.byteOffset + byteOffset + 4) ^ defaultMask.getUint32(4, true);
        TMP_WORD.setUint32(0, lo, constants_1.NATIVE_LITTLE_ENDIAN);
        TMP_WORD.setUint32(4, hi, constants_1.NATIVE_LITTLE_ENDIAN);
        return TMP_WORD.getFloat64(0, constants_1.NATIVE_LITTLE_ENDIAN);
    }
    return ds.segment.getFloat64(ds.byteOffset + byteOffset);
}
exports.getFloat64 = getFloat64;
/**
 * Read an int16 value out of this segment.
 *
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {Struct} s The struct to read from.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {number} The value.
 */
function getInt16(byteOffset, s, defaultMask) {
    checkDataBounds(byteOffset, 2, s);
    var ds = getDataSection(s);
    if (defaultMask === undefined)
        return ds.segment.getInt16(ds.byteOffset + byteOffset);
    var v = ds.segment.getUint16(ds.byteOffset + byteOffset) ^ defaultMask.getUint16(0, true);
    TMP_WORD.setUint16(0, v, constants_1.NATIVE_LITTLE_ENDIAN);
    return TMP_WORD.getInt16(0, constants_1.NATIVE_LITTLE_ENDIAN);
}
exports.getInt16 = getInt16;
/**
 * Read an int32 value out of this segment.
 *
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {Struct} s The struct to read from.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {number} The value.
 */
function getInt32(byteOffset, s, defaultMask) {
    checkDataBounds(byteOffset, 4, s);
    var ds = getDataSection(s);
    if (defaultMask === undefined)
        return ds.segment.getInt32(ds.byteOffset + byteOffset);
    var v = ds.segment.getUint32(ds.byteOffset + byteOffset) ^ defaultMask.getUint16(0, true);
    TMP_WORD.setUint32(0, v, constants_1.NATIVE_LITTLE_ENDIAN);
    return TMP_WORD.getInt32(0, constants_1.NATIVE_LITTLE_ENDIAN);
}
exports.getInt32 = getInt32;
/**
 * Read an int64 value out of this segment.
 *
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {Struct} s The struct to read from.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {number} The value.
 */
function getInt64(byteOffset, s, defaultMask) {
    checkDataBounds(byteOffset, 8, s);
    var ds = getDataSection(s);
    if (defaultMask === undefined)
        return ds.segment.getInt64(ds.byteOffset + byteOffset);
    var lo = ds.segment.getUint32(ds.byteOffset + byteOffset) ^ defaultMask.getUint32(0, true);
    var hi = ds.segment.getUint32(ds.byteOffset + byteOffset + 4) ^ defaultMask.getUint32(4, true);
    TMP_WORD.setUint32(0, lo, constants_1.NATIVE_LITTLE_ENDIAN);
    TMP_WORD.setUint32(4, hi, constants_1.NATIVE_LITTLE_ENDIAN);
    return new types_1.Int64(new Uint8Array(TMP_WORD.buffer.slice(0)));
}
exports.getInt64 = getInt64;
/**
 * Read an int8 value out of this segment.
 *
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {Struct} s The struct to read from.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {number} The value.
 */
function getInt8(byteOffset, s, defaultMask) {
    checkDataBounds(byteOffset, 1, s);
    var ds = getDataSection(s);
    if (defaultMask === undefined)
        return ds.segment.getInt8(ds.byteOffset + byteOffset);
    var v = ds.segment.getUint8(ds.byteOffset + byteOffset) ^ defaultMask.getUint8(0);
    TMP_WORD.setUint8(0, v);
    return TMP_WORD.getInt8(0);
}
exports.getInt8 = getInt8;
function getList(index, ListClass, s) {
    checkPointerBounds(index, s);
    var ps = getPointerSection(s);
    ps.byteOffset += index * 8;
    var l = new ListClass(ps.segment, ps.byteOffset, s._capnp.depthLimit - 1);
    if (pointer_1.isNull(l)) {
        list_1.List.initList(ListClass._capnp.size, 0, l, ListClass._capnp.compositeSize);
    }
    else if (ListClass._capnp.compositeSize !== undefined) {
        // If this is a composite list we need to be sure the composite elements are big enough to hold everything as
        // specified in the schema. If the new schema has added fields we'll need to "resize" (shallow-copy) the list so
        // it has room for the new fields.
        var srcSize = pointer_1.getTargetCompositeListSize(l);
        var dstSize = ListClass._capnp.compositeSize;
        if (dstSize.dataByteLength > srcSize.dataByteLength || dstSize.pointerLength > srcSize.pointerLength) {
            var srcContent = pointer_1.getContent(l);
            var srcLength = pointer_1.getTargetListLength(l);
            trace('resizing composite list %s due to protocol upgrade, new size: %d', l, object_size_1.getByteLength(dstSize) * srcLength);
            // Allocate an extra 8 bytes for the tag.
            var dstContent = l.segment.allocate(object_size_1.getByteLength(dstSize) * srcLength + 8);
            var res = pointer_1.initPointer(dstContent.segment, dstContent.byteOffset, l);
            pointer_1.setListPointer(res.offsetWords, ListClass._capnp.size, srcLength, res.pointer, dstSize);
            // Write the new tag word.
            pointer_1.setStructPointer(srcLength, dstSize, dstContent);
            // Seek ahead past the tag word before copying the content.
            dstContent.byteOffset += 8;
            for (var i = 0; i < srcLength; i++) {
                var srcElementOffset = srcContent.byteOffset + i * object_size_1.getByteLength(srcSize);
                var dstElementOffset = dstContent.byteOffset + i * object_size_1.getByteLength(dstSize);
                // Copy the data section.
                dstContent.segment.copyWords(dstElementOffset, srcContent.segment, srcElementOffset, object_size_1.getWordLength(srcSize));
                // Iterate through the pointers and update the offsets so they point to the right place.
                for (var j = 0; j < srcSize.pointerLength; j++) {
                    var srcPtr = new pointer_1.Pointer(srcContent.segment, srcElementOffset + srcSize.dataByteLength + j * 8);
                    var dstPtr = new pointer_1.Pointer(dstContent.segment, dstElementOffset + dstSize.dataByteLength + j * 8);
                    var srcPtrTarget = pointer_1.followFars(srcPtr);
                    var srcPtrContent = pointer_1.getContent(srcPtr);
                    if (pointer_1.getTargetPointerType(srcPtr) === pointer_type_1.PointerType.LIST &&
                        pointer_1.getTargetListElementSize(srcPtr) === list_element_size_1.ListElementSize.COMPOSITE) {
                        srcPtrContent.byteOffset -= 8;
                    }
                    var r = pointer_1.initPointer(srcPtrContent.segment, srcPtrContent.byteOffset, dstPtr);
                    // Read the old pointer data, but discard the original offset.
                    var a = srcPtrTarget.segment.getUint8(srcPtrTarget.byteOffset) & 0x03;
                    var b = srcPtrTarget.segment.getUint32(srcPtrTarget.byteOffset + 4);
                    r.pointer.segment.setUint32(r.pointer.byteOffset, a | (r.offsetWords << 2));
                    r.pointer.segment.setUint32(r.pointer.byteOffset + 4, b);
                }
            }
            // Zero out the old content.
            srcContent.segment.fillZeroWords(srcContent.byteOffset, object_size_1.getWordLength(srcSize) * srcLength);
        }
    }
    return l;
}
exports.getList = getList;
function getPointer(index, s) {
    checkPointerBounds(index, s);
    var ps = getPointerSection(s);
    ps.byteOffset += index * 8;
    return new pointer_1.Pointer(ps.segment, ps.byteOffset, s._capnp.depthLimit - 1);
}
exports.getPointer = getPointer;
function getPointerAs(index, PointerClass, s) {
    checkPointerBounds(index, s);
    var ps = getPointerSection(s);
    ps.byteOffset += index * 8;
    return new PointerClass(ps.segment, ps.byteOffset, s._capnp.depthLimit - 1);
}
exports.getPointerAs = getPointerAs;
function getPointerSection(s) {
    var ps = pointer_1.getContent(s);
    ps.byteOffset += util_1.padToWord(getSize(s).dataByteLength);
    return ps;
}
exports.getPointerSection = getPointerSection;
function getSize(s) {
    if (s._capnp.compositeIndex !== undefined) {
        // For composite lists the object size is stored in a tag word right before the content.
        var c = pointer_1.getContent(s, true);
        c.byteOffset -= 8;
        return pointer_1.getStructSize(c);
    }
    return pointer_1.getTargetStructSize(s);
}
exports.getSize = getSize;
function getStruct(index, StructClass, s) {
    var t = getPointerAs(index, StructClass, s);
    if (pointer_1.isNull(t)) {
        initStruct(StructClass._capnp.size, t);
    }
    else {
        pointer_1.validate(pointer_type_1.PointerType.STRUCT, t);
        var ts = pointer_1.getTargetStructSize(t);
        // This can happen when reading a struct that was constructed with an older version of the same schema, and new
        // fields were added to the struct. A shallow copy of the struct will be made so that there's enough room for the
        // data and pointer sections. This will unfortunately leave a "hole" of zeroes in the message, but that hole will
        // at least compress well.
        if (ts.dataByteLength < StructClass._capnp.size.dataByteLength
            || ts.pointerLength < StructClass._capnp.size.pointerLength) {
            trace('need to resize child struct %s', t);
            resize(StructClass._capnp.size, t);
        }
    }
    return t;
}
exports.getStruct = getStruct;
function getText(index, s) {
    return text_1.Text.fromPointer(getPointer(index, s)).get(0);
}
exports.getText = getText;
/**
 * Read an uint16 value out of a struct..
 *
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {Struct} s The struct to read from.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {number} The value.
 */
function getUint16(byteOffset, s, defaultMask) {
    checkDataBounds(byteOffset, 2, s);
    var ds = getDataSection(s);
    if (defaultMask === undefined)
        return ds.segment.getUint16(ds.byteOffset + byteOffset);
    return ds.segment.getUint16(ds.byteOffset + byteOffset) ^ defaultMask.getUint16(0, true);
}
exports.getUint16 = getUint16;
/**
 * Read an uint32 value out of a struct.
 *
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {Struct} s The struct to read from.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {number} The value.
 */
function getUint32(byteOffset, s, defaultMask) {
    checkDataBounds(byteOffset, 4, s);
    var ds = getDataSection(s);
    if (defaultMask === undefined)
        return ds.segment.getUint32(ds.byteOffset + byteOffset);
    return ds.segment.getUint32(ds.byteOffset + byteOffset) ^ defaultMask.getUint32(0, true);
}
exports.getUint32 = getUint32;
/**
 * Read an uint64 value out of a struct.
 *
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {Struct} s The struct to read from.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {number} The value.
 */
function getUint64(byteOffset, s, defaultMask) {
    checkDataBounds(byteOffset, 8, s);
    var ds = getDataSection(s);
    if (defaultMask === undefined)
        return ds.segment.getUint64(ds.byteOffset + byteOffset);
    var lo = ds.segment.getUint32(ds.byteOffset + byteOffset) ^ defaultMask.getUint32(0, true);
    var hi = ds.segment.getUint32(ds.byteOffset + byteOffset + 4) ^ defaultMask.getUint32(4, true);
    TMP_WORD.setUint32(0, lo, constants_1.NATIVE_LITTLE_ENDIAN);
    TMP_WORD.setUint32(4, hi, constants_1.NATIVE_LITTLE_ENDIAN);
    return new types_1.Uint64(new Uint8Array(TMP_WORD.buffer.slice(0)));
}
exports.getUint64 = getUint64;
/**
 * Read an uint8 value out of a struct.
 *
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {Struct} s The struct to read from.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {number} The value.
 */
function getUint8(byteOffset, s, defaultMask) {
    checkDataBounds(byteOffset, 1, s);
    var ds = getDataSection(s);
    if (defaultMask === undefined)
        return ds.segment.getUint8(ds.byteOffset + byteOffset);
    return ds.segment.getUint8(ds.byteOffset + byteOffset) ^ defaultMask.getUint8(0);
}
exports.getUint8 = getUint8;
function initData(index, length, s) {
    checkPointerBounds(index, s);
    var ps = getPointerSection(s);
    ps.byteOffset += index * 8;
    var l = new data_1.Data(ps.segment, ps.byteOffset, s._capnp.depthLimit - 1);
    pointer_1.erase(l);
    list_1.List.initList(list_element_size_1.ListElementSize.BYTE, length, l);
    return l;
}
exports.initData = initData;
function initList(index, ListClass, length, s) {
    checkPointerBounds(index, s);
    var ps = getPointerSection(s);
    ps.byteOffset += index * 8;
    var l = new ListClass(ps.segment, ps.byteOffset, s._capnp.depthLimit - 1);
    pointer_1.erase(l);
    list_1.List.initList(ListClass._capnp.size, length, l, ListClass._capnp.compositeSize);
    return l;
}
exports.initList = initList;
/**
 * Write a boolean (bit) value to the struct.
 *
 * @protected
 * @param {number} bitOffset The offset in **bits** from the start of the data section.
 * @param {boolean} value The value to write (writes a 0 for `false`, 1 for `true`).
 * @param {Struct} s The struct to write to.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {void}
 */
function setBit(bitOffset, value, s, defaultMask) {
    var byteOffset = Math.floor(bitOffset / 8);
    var bitMask = 1 << bitOffset % 8;
    checkDataBounds(byteOffset, 1, s);
    var ds = getDataSection(s);
    var b = ds.segment.getUint8(ds.byteOffset + byteOffset);
    // If the default mask bit is set, that means `true` values are actually written as `0`.
    if (defaultMask !== undefined)
        value = (defaultMask.getUint8(0) & bitMask) !== 0 ? !value : value;
    ds.segment.setUint8(ds.byteOffset + byteOffset, value ? b | bitMask : b & ~bitMask);
}
exports.setBit = setBit;
/**
 * Write a primitive float32 value to the struct.
 *
 * @protected
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {number} value The value to write.
 * @param {Struct} s The struct to write to.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {void}
 */
function setFloat32(byteOffset, value, s, defaultMask) {
    checkDataBounds(byteOffset, 4, s);
    var ds = getDataSection(s);
    if (defaultMask !== undefined) {
        TMP_WORD.setFloat32(0, value, constants_1.NATIVE_LITTLE_ENDIAN);
        var v = TMP_WORD.getUint32(0, constants_1.NATIVE_LITTLE_ENDIAN) ^ defaultMask.getUint32(0, true);
        ds.segment.setUint32(ds.byteOffset + byteOffset, v);
        return;
    }
    ds.segment.setFloat32(ds.byteOffset + byteOffset, value);
}
exports.setFloat32 = setFloat32;
/**
 * Write a primitive float64 value to the struct.
 *
 * @protected
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {number} value The value to write.
 * @param {Struct} s The struct to write to.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {void}
 */
function setFloat64(byteOffset, value, s, defaultMask) {
    checkDataBounds(byteOffset, 8, s);
    var ds = getDataSection(s);
    if (defaultMask !== undefined) {
        TMP_WORD.setFloat64(0, value, constants_1.NATIVE_LITTLE_ENDIAN);
        var lo = TMP_WORD.getUint32(0, constants_1.NATIVE_LITTLE_ENDIAN) ^ defaultMask.getUint32(0, true);
        var hi = TMP_WORD.getUint32(4, constants_1.NATIVE_LITTLE_ENDIAN) ^ defaultMask.getUint32(4, true);
        ds.segment.setUint32(ds.byteOffset + byteOffset, lo);
        ds.segment.setUint32(ds.byteOffset + byteOffset + 4, hi);
        return;
    }
    ds.segment.setFloat64(ds.byteOffset + byteOffset, value);
}
exports.setFloat64 = setFloat64;
/**
 * Write a primitive int16 value to the struct.
 *
 * @protected
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {number} value The value to write.
 * @param {Struct} s The struct to write to.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {void}
 */
function setInt16(byteOffset, value, s, defaultMask) {
    checkDataBounds(byteOffset, 2, s);
    var ds = getDataSection(s);
    if (defaultMask !== undefined) {
        TMP_WORD.setInt16(0, value, constants_1.NATIVE_LITTLE_ENDIAN);
        var v = TMP_WORD.getUint16(0, constants_1.NATIVE_LITTLE_ENDIAN) ^ defaultMask.getUint16(0, true);
        ds.segment.setUint16(ds.byteOffset + byteOffset, v);
        return;
    }
    ds.segment.setInt16(ds.byteOffset + byteOffset, value);
}
exports.setInt16 = setInt16;
/**
 * Write a primitive int32 value to the struct.
 *
 * @protected
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {number} value The value to write.
 * @param {Struct} s The struct to write to.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {void}
 */
function setInt32(byteOffset, value, s, defaultMask) {
    checkDataBounds(byteOffset, 4, s);
    var ds = getDataSection(s);
    if (defaultMask !== undefined) {
        TMP_WORD.setInt32(0, value, constants_1.NATIVE_LITTLE_ENDIAN);
        var v = TMP_WORD.getUint32(0, constants_1.NATIVE_LITTLE_ENDIAN) ^ defaultMask.getUint32(0, true);
        ds.segment.setUint32(ds.byteOffset + byteOffset, v);
        return;
    }
    ds.segment.setInt32(ds.byteOffset + byteOffset, value);
}
exports.setInt32 = setInt32;
/**
 * Write a primitive int64 value to the struct.
 *
 * @protected
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {number} value The value to write.
 * @param {Struct} s The struct to write to.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {void}
 */
function setInt64(byteOffset, value, s, defaultMask) {
    checkDataBounds(byteOffset, 8, s);
    var ds = getDataSection(s);
    if (defaultMask !== undefined) {
        // PERF: We could cast the Int64 to a DataView to apply the mask using four 32-bit reads, but we already have a
        // typed array so avoiding the object allocation turns out to be slightly faster. Int64 is guaranteed to be in
        // little-endian format by design.
        for (var i = 0; i < 8; i++) {
            ds.segment.setUint8(ds.byteOffset + byteOffset + i, value.buffer[i] ^ defaultMask.getUint8(i));
        }
        return;
    }
    ds.segment.setInt64(ds.byteOffset + byteOffset, value);
}
exports.setInt64 = setInt64;
/**
 * Write a primitive int8 value to the struct.
 *
 * @protected
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {number} value The value to write.
 * @param {Struct} s The struct to write to.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {void}
 */
function setInt8(byteOffset, value, s, defaultMask) {
    checkDataBounds(byteOffset, 1, s);
    var ds = getDataSection(s);
    if (defaultMask !== undefined) {
        TMP_WORD.setInt8(0, value);
        var v = TMP_WORD.getUint8(0) ^ defaultMask.getUint8(0);
        ds.segment.setUint8(ds.byteOffset + byteOffset, v);
        return;
    }
    ds.segment.setInt8(ds.byteOffset + byteOffset, value);
}
exports.setInt8 = setInt8;
function setPointer(index, value, s) {
    pointer_1.copyFrom(value, getPointer(index, s));
}
exports.setPointer = setPointer;
function setText(index, value, s) {
    text_1.Text.fromPointer(getPointer(index, s)).set(0, value);
}
exports.setText = setText;
/**
 * Write a primitive uint16 value to the struct.
 *
 * @protected
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {number} value The value to write.
 * @param {Struct} s The struct to write to.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {void}
 */
function setUint16(byteOffset, value, s, defaultMask) {
    checkDataBounds(byteOffset, 2, s);
    var ds = getDataSection(s);
    if (defaultMask !== undefined)
        value ^= defaultMask.getUint16(0, true);
    ds.segment.setUint16(ds.byteOffset + byteOffset, value);
}
exports.setUint16 = setUint16;
/**
 * Write a primitive uint32 value to the struct.
 *
 * @protected
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {number} value The value to write.
 * @param {Struct} s The struct to write to.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {void}
 */
function setUint32(byteOffset, value, s, defaultMask) {
    checkDataBounds(byteOffset, 4, s);
    var ds = getDataSection(s);
    if (defaultMask !== undefined)
        value ^= defaultMask.getUint32(0, true);
    ds.segment.setUint32(ds.byteOffset + byteOffset, value);
}
exports.setUint32 = setUint32;
/**
 * Write a primitive uint64 value to the struct.
 *
 * @protected
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {number} value The value to write.
 * @param {Struct} s The struct to write to.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {void}
 */
function setUint64(byteOffset, value, s, defaultMask) {
    checkDataBounds(byteOffset, 8, s);
    var ds = getDataSection(s);
    if (defaultMask !== undefined) {
        // PERF: We could cast the Uint64 to a DataView to apply the mask using four 32-bit reads, but we already have a
        // typed array so avoiding the object allocation turns out to be slightly faster. Uint64 is guaranteed to be in
        // little-endian format by design.
        for (var i = 0; i < 8; i++) {
            ds.segment.setUint8(ds.byteOffset + byteOffset + i, value.buffer[i] ^ defaultMask.getUint8(i));
        }
        return;
    }
    ds.segment.setUint64(ds.byteOffset + byteOffset, value);
}
exports.setUint64 = setUint64;
/**
 * Write a primitive uint8 value to the struct.
 *
 * @protected
 * @param {number} byteOffset The offset in bytes from the start of the data section.
 * @param {number} value The value to write.
 * @param {Struct} s The struct to write to.
 * @param {DataView} [defaultMask] The default value as a DataView.
 * @returns {void}
 */
function setUint8(byteOffset, value, s, defaultMask) {
    checkDataBounds(byteOffset, 1, s);
    var ds = getDataSection(s);
    if (defaultMask !== undefined)
        value ^= defaultMask.getUint8(0);
    ds.segment.setUint8(ds.byteOffset + byteOffset, value);
}
exports.setUint8 = setUint8;
function testWhich(name, found, wanted, s) {
    if (found !== wanted)
        throw new Error(util_1.format(errors_1.PTR_INVALID_UNION_ACCESS, s, name, found, wanted));
}
exports.testWhich = testWhich;
function checkDataBounds(byteOffset, byteLength, s) {
    var dataByteLength = getSize(s).dataByteLength;
    if (byteOffset < 0 || byteLength < 0 || byteOffset + byteLength > dataByteLength) {
        throw new Error(util_1.format(errors_1.PTR_STRUCT_DATA_OUT_OF_BOUNDS, s, byteLength, byteOffset, dataByteLength));
    }
}
exports.checkDataBounds = checkDataBounds;
function checkPointerBounds(index, s) {
    var pointerLength = getSize(s).pointerLength;
    if (index < 0 || index >= pointerLength) {
        throw new Error(util_1.format(errors_1.PTR_STRUCT_POINTER_OUT_OF_BOUNDS, s, index, pointerLength));
    }
}
exports.checkPointerBounds = checkPointerBounds;

//# sourceMappingURL=struct.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/text-list.js":
/*!***********************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/text-list.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var text_1 = __webpack_require__(/*! ./text */ "./node_modules/capnp-ts/lib/serialization/pointers/text.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var trace = debug_1.default('capnp:list:composite');
trace('load');
var TextList = /** @class */ (function (_super) {
    tslib_1.__extends(TextList, _super);
    function TextList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextList.prototype.get = function (index) {
        var c = pointer_1.getContent(this);
        c.byteOffset += index * 8;
        return text_1.Text.fromPointer(c).get(0);
    };
    TextList.prototype.set = function (index, value) {
        var c = pointer_1.getContent(this);
        c.byteOffset += index * 8;
        text_1.Text.fromPointer(c).set(0, value);
    };
    TextList.prototype.toString = function () {
        return "Text_" + _super.prototype.toString.call(this);
    };
    TextList._capnp = {
        displayName: 'List<Text>',
        size: list_element_size_1.ListElementSize.POINTER,
    };
    return TextList;
}(list_1.List));
exports.TextList = TextList;

//# sourceMappingURL=text-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/text.js":
/*!******************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/text.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var util_1 = __webpack_require__(/*! ../../util */ "./node_modules/capnp-ts/lib/util.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var pointer_type_1 = __webpack_require__(/*! ./pointer-type */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer-type.js");
var trace = debug_1.default('capnp:text');
trace('load');
var Text = /** @class */ (function (_super) {
    tslib_1.__extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Text.fromPointer = function (pointer) {
        pointer_1.validate(pointer_type_1.PointerType.LIST, pointer, list_element_size_1.ListElementSize.BYTE);
        return textFromPointerUnchecked(pointer);
    };
    /**
     * Read a utf-8 encoded string value from this pointer.
     *
     * @param {number} [index] The index at which to start reading; defaults to zero.
     * @returns {string} The string value.
     */
    Text.prototype.get = function (index) {
        if (index === void 0) { index = 0; }
        if (index !== 0)
            trace('Called get() on %s with a strange index (%d).', this, index);
        if (pointer_1.isNull(this))
            return '';
        var c = pointer_1.getContent(this);
        // Remember to exclude the NUL byte.
        return util_1.decodeUtf8(new Uint8Array(c.segment.buffer, c.byteOffset + index, this.getLength() - index));
    };
    /**
     * Get the number of utf-8 encoded bytes in this text. This does **not** include the NUL byte.
     *
     * @returns {number} The number of bytes allocated for the text.
     */
    Text.prototype.getLength = function () {
        return _super.prototype.getLength.call(this) - 1;
    };
    /**
     * Write a utf-8 encoded string value starting at the specified index.
     *
     * @param {number} index The index at which to start copying the string. Note that if this is not zero the bytes
     * before `index` will be left as-is. All bytes after `index` will be overwritten.
     * @param {string} value The string value to set.
     * @returns {void}
     */
    Text.prototype.set = function (index, value) {
        if (index !== 0)
            trace('Called set() on %s with a strange index (%d).', this, index);
        var src = util_1.encodeUtf8(value);
        var dstLength = src.byteLength + index;
        var c;
        var original;
        // TODO: Consider reusing existing space if list is already initialized and there's enough room for the value.
        if (!pointer_1.isNull(this)) {
            c = pointer_1.getContent(this);
            // Only copy bytes that will remain after copying. Everything after `index` should end up truncated.
            var originalLength = this.getLength();
            if (originalLength >= index) {
                originalLength = index;
            }
            else {
                trace('%d byte gap exists between original text and new text in %s.', index - originalLength, this);
            }
            original = new Uint8Array(c.segment.buffer.slice(c.byteOffset, c.byteOffset + Math.min(originalLength, index)));
            pointer_1.erase(this);
        }
        // Always allocate an extra byte for the NUL byte.
        list_1.initList(list_element_size_1.ListElementSize.BYTE, dstLength + 1, this);
        c = pointer_1.getContent(this);
        var dst = new Uint8Array(c.segment.buffer, c.byteOffset, dstLength);
        if (original)
            dst.set(original);
        dst.set(src, index);
    };
    Text.prototype.toString = function () {
        return "Text_" + _super.prototype.toString.call(this);
    };
    return Text;
}(list_1.List));
exports.Text = Text;
function textFromPointerUnchecked(pointer) {
    return new Text(pointer.segment, pointer.byteOffset, pointer._capnp.depthLimit);
}

//# sourceMappingURL=text.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/uint16-list.js":
/*!*************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/uint16-list.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var trace = debug_1.default('capnp:list:composite');
trace('load');
var Uint16List = /** @class */ (function (_super) {
    tslib_1.__extends(Uint16List, _super);
    function Uint16List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Uint16List.prototype.get = function (index) {
        var c = pointer_1.getContent(this);
        return c.segment.getUint16(c.byteOffset + index * 2);
    };
    Uint16List.prototype.set = function (index, value) {
        var c = pointer_1.getContent(this);
        c.segment.setUint16(c.byteOffset + index * 2, value);
    };
    Uint16List.prototype.toString = function () {
        return "Uint16_" + _super.prototype.toString.call(this);
    };
    Uint16List._capnp = {
        displayName: 'List<Uint16>',
        size: list_element_size_1.ListElementSize.BYTE_2,
    };
    return Uint16List;
}(list_1.List));
exports.Uint16List = Uint16List;

//# sourceMappingURL=uint16-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/uint32-list.js":
/*!*************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/uint32-list.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var trace = debug_1.default('capnp:list:composite');
trace('load');
var Uint32List = /** @class */ (function (_super) {
    tslib_1.__extends(Uint32List, _super);
    function Uint32List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Uint32List.prototype.get = function (index) {
        var c = pointer_1.getContent(this);
        return c.segment.getUint32(c.byteOffset + index * 4);
    };
    Uint32List.prototype.set = function (index, value) {
        var c = pointer_1.getContent(this);
        c.segment.setUint32(c.byteOffset + index * 4, value);
    };
    Uint32List.prototype.toString = function () {
        return "Uint32_" + _super.prototype.toString.call(this);
    };
    Uint32List._capnp = {
        displayName: 'List<Uint32>',
        size: list_element_size_1.ListElementSize.BYTE_4,
    };
    return Uint32List;
}(list_1.List));
exports.Uint32List = Uint32List;

//# sourceMappingURL=uint32-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/uint64-list.js":
/*!*************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/uint64-list.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var trace = debug_1.default('capnp:list:composite');
trace('load');
var Uint64List = /** @class */ (function (_super) {
    tslib_1.__extends(Uint64List, _super);
    function Uint64List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Uint64List.prototype.get = function (index) {
        var c = pointer_1.getContent(this);
        return c.segment.getUint64(c.byteOffset + index * 8);
    };
    Uint64List.prototype.set = function (index, value) {
        var c = pointer_1.getContent(this);
        c.segment.setUint64(c.byteOffset + index * 8, value);
    };
    Uint64List.prototype.toString = function () {
        return "Uint64_" + _super.prototype.toString.call(this);
    };
    Uint64List._capnp = {
        displayName: 'List<Uint64>',
        size: list_element_size_1.ListElementSize.BYTE_8,
    };
    return Uint64List;
}(list_1.List));
exports.Uint64List = Uint64List;

//# sourceMappingURL=uint64-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/uint8-list.js":
/*!************************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/uint8-list.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var list_element_size_1 = __webpack_require__(/*! ../list-element-size */ "./node_modules/capnp-ts/lib/serialization/list-element-size.js");
var list_1 = __webpack_require__(/*! ./list */ "./node_modules/capnp-ts/lib/serialization/pointers/list.js");
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer.js");
var trace = debug_1.default('capnp:list:composite');
trace('load');
var Uint8List = /** @class */ (function (_super) {
    tslib_1.__extends(Uint8List, _super);
    function Uint8List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Uint8List.prototype.get = function (index) {
        var c = pointer_1.getContent(this);
        return c.segment.getUint8(c.byteOffset + index);
    };
    Uint8List.prototype.set = function (index, value) {
        var c = pointer_1.getContent(this);
        c.segment.setUint8(c.byteOffset + index, value);
    };
    Uint8List.prototype.toString = function () {
        return "Uint8_" + _super.prototype.toString.call(this);
    };
    Uint8List._capnp = {
        displayName: 'List<Uint8>',
        size: list_element_size_1.ListElementSize.BYTE,
    };
    return Uint8List;
}(list_1.List));
exports.Uint8List = Uint8List;

//# sourceMappingURL=uint8-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/void-list.js":
/*!***********************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/void-list.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Why would anyone **SANE** ever use this!?
 *
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var pointer_list_1 = __webpack_require__(/*! ./pointer-list */ "./node_modules/capnp-ts/lib/serialization/pointers/pointer-list.js");
var void_1 = __webpack_require__(/*! ./void */ "./node_modules/capnp-ts/lib/serialization/pointers/void.js");
exports.VoidList = pointer_list_1.PointerList(void_1.Void);

//# sourceMappingURL=void-list.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/pointers/void.js":
/*!******************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/pointers/void.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var object_size_1 = __webpack_require__(/*! ../object-size */ "./node_modules/capnp-ts/lib/serialization/object-size.js");
var struct_1 = __webpack_require__(/*! ./struct */ "./node_modules/capnp-ts/lib/serialization/pointers/struct.js");
var Void = /** @class */ (function (_super) {
    tslib_1.__extends(Void, _super);
    function Void() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Void._capnp = {
        displayName: 'Void',
        id: '0',
        size: new object_size_1.ObjectSize(0, 0),
    };
    return Void;
}(struct_1.Struct));
exports.Void = Void;
// This following line makes a mysterious "whooshing" sound when it runs.
exports.VOID = undefined;

//# sourceMappingURL=void.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/serialization/segment.js":
/*!************************************************************!*\
  !*** ./node_modules/capnp-ts/lib/serialization/segment.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/capnp-ts/lib/constants.js");
var errors_1 = __webpack_require__(/*! ../errors */ "./node_modules/capnp-ts/lib/errors.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/capnp-ts/lib/types/index.js");
var util_1 = __webpack_require__(/*! ../util */ "./node_modules/capnp-ts/lib/util.js");
var pointers_1 = __webpack_require__(/*! ./pointers */ "./node_modules/capnp-ts/lib/serialization/pointers/index.js");
var trace = debug_1.default('capnp:segment');
trace('load');
var Segment = /** @class */ (function () {
    function Segment(id, message, buffer, byteLength) {
        if (byteLength === void 0) { byteLength = 0; }
        this[Symbol.toStringTag] = 'Segment';
        this.id = id;
        this.message = message;
        this.buffer = buffer;
        this._dv = new DataView(buffer);
        this.byteOffset = 0;
        this.byteLength = byteLength;
    }
    /**
     * Attempt to allocate the requested number of bytes in this segment. If this segment is full this method will return
     * a pointer to freshly allocated space in another segment from the same message.
     *
     * @param {number} byteLength The number of bytes to allocate, will be rounded up to the nearest word.
     * @returns {Pointer} A pointer to the newly allocated space.
     */
    Segment.prototype.allocate = function (byteLength) {
        trace('allocate(%d)', byteLength);
        var segment = this;
        byteLength = util_1.padToWord(byteLength);
        if (byteLength > constants_1.MAX_SEGMENT_LENGTH - 8)
            throw new Error(util_1.format(errors_1.SEG_SIZE_OVERFLOW, byteLength));
        if (!segment.hasCapacity(byteLength))
            segment = segment.message.allocateSegment(byteLength);
        var byteOffset = segment.byteLength;
        segment.byteLength = segment.byteLength + byteLength;
        trace('Allocated %x bytes in %s (requested segment: %s).', byteLength, this, segment);
        return new pointers_1.Pointer(segment, byteOffset);
    };
    /**
     * Quickly copy a word (8 bytes) from `srcSegment` into this one at the given offset.
     *
     * @param {number} byteOffset The offset to write the word to.
     * @param {Segment} srcSegment The segment to copy the word from.
     * @param {number} srcByteOffset The offset from the start of `srcSegment` to copy from.
     * @returns {void}
     */
    Segment.prototype.copyWord = function (byteOffset, srcSegment, srcByteOffset) {
        var value = srcSegment._dv.getFloat64(srcByteOffset, constants_1.NATIVE_LITTLE_ENDIAN);
        this._dv.setFloat64(byteOffset, value, constants_1.NATIVE_LITTLE_ENDIAN);
    };
    /**
     * Quickly copy words from `srcSegment` into this one.
     *
     * @param {number} byteOffset The offset to start copying into.
     * @param {Segment} srcSegment The segment to copy from.
     * @param {number} srcByteOffset The start offset to copy from.
     * @param {number} wordLength The number of words to copy.
     * @returns {void}
     */
    Segment.prototype.copyWords = function (byteOffset, srcSegment, srcByteOffset, wordLength) {
        var dst = new Float64Array(this.buffer, byteOffset, wordLength);
        var src = new Float64Array(srcSegment.buffer, srcByteOffset, wordLength);
        dst.set(src);
    };
    /**
     * Quickly fill a number of words in the buffer with zeroes.
     *
     * @param {number} byteOffset The first byte to set to zero.
     * @param {number} wordLength The number of words (not bytes!) to zero out.
     * @returns {void}
     */
    Segment.prototype.fillZeroWords = function (byteOffset, wordLength) {
        new Float64Array(this.buffer, byteOffset, wordLength).fill(0);
    };
    /**
     * Get the total number of bytes available in this segment (the size of its underlying buffer).
     *
     * @returns {number} The total number of bytes this segment can hold.
     */
    Segment.prototype.getCapacity = function () {
        return this.buffer.byteLength;
    };
    /**
     * Read a float32 value out of this segment.
     *
     * @param {number} byteOffset The offset in bytes to the value.
     * @returns {number} The value.
     */
    Segment.prototype.getFloat32 = function (byteOffset) {
        return this._dv.getFloat32(byteOffset, true);
    };
    /**
     * Read a float64 value out of this segment.
     *
     * @param {number} byteOffset The offset in bytes to the value.
     * @returns {number} The value.
     */
    Segment.prototype.getFloat64 = function (byteOffset) {
        return this._dv.getFloat64(byteOffset, true);
    };
    /**
     * Read an int16 value out of this segment.
     *
     * @param {number} byteOffset The offset in bytes to the value.
     * @returns {number} The value.
     */
    Segment.prototype.getInt16 = function (byteOffset) {
        return this._dv.getInt16(byteOffset, true);
    };
    /**
     * Read an int32 value out of this segment.
     *
     * @param {number} byteOffset The offset in bytes to the value.
     * @returns {number} The value.
     */
    Segment.prototype.getInt32 = function (byteOffset) {
        return this._dv.getInt32(byteOffset, true);
    };
    /**
     * Read an int64 value out of this segment.
     *
     * @param {number} byteOffset The offset in bytes to the value.
     * @returns {number} The value.
     */
    Segment.prototype.getInt64 = function (byteOffset) {
        return new types_1.Int64(new Uint8Array(this.buffer.slice(byteOffset, byteOffset + 8)));
    };
    /**
     * Read an int8 value out of this segment.
     *
     * @param {number} byteOffset The offset in bytes to the value.
     * @returns {number} The value.
     */
    Segment.prototype.getInt8 = function (byteOffset) {
        return this._dv.getInt8(byteOffset);
    };
    /**
     * Read a uint16 value out of this segment.
     *
     * @param {number} byteOffset The offset in bytes to the value.
     * @returns {number} The value.
     */
    Segment.prototype.getUint16 = function (byteOffset) {
        return this._dv.getUint16(byteOffset, true);
    };
    /**
     * Read a uint32 value out of this segment.
     *
     * @param {number} byteOffset The offset in bytes to the value.
     * @returns {number} The value.
     */
    Segment.prototype.getUint32 = function (byteOffset) {
        return this._dv.getUint32(byteOffset, true);
    };
    /**
     * Read a uint8 value out of this segment.
     * NOTE: this does not copy the memory region, so updates to the underlying buffer will affect the Uint64 value!
     *
     * @param {number} byteOffset The offset in bytes to the value.
     * @returns {number} The value.
     */
    Segment.prototype.getUint64 = function (byteOffset) {
        return new types_1.Uint64(new Uint8Array(this.buffer.slice(byteOffset, byteOffset + 8)));
    };
    /**
     * Read a uint8 value out of this segment.
     *
     * @param {number} byteOffset The offset in bytes to the value.
     * @returns {number} The value.
     */
    Segment.prototype.getUint8 = function (byteOffset) {
        return this._dv.getUint8(byteOffset);
    };
    Segment.prototype.hasCapacity = function (byteLength) {
        trace('hasCapacity(%d)', byteLength);
        // capacity - allocated >= requested
        return this.buffer.byteLength - this.byteLength >= byteLength;
    };
    /**
     * Quickly check the word at the given offset to see if it is equal to zero.
     *
     * PERF_V8: Fastest way to do this is by reading the whole word as a `number` (float64) in the _native_ endian format
     * and see if it's zero.
     *
     * Benchmark: http://jsben.ch/#/Pjooc
     *
     * @param {number} byteOffset The offset to the word.
     * @returns {boolean} `true` if the word is zero.
     */
    Segment.prototype.isWordZero = function (byteOffset) {
        return this._dv.getFloat64(byteOffset, constants_1.NATIVE_LITTLE_ENDIAN) === 0;
    };
    /**
     * Swap out this segment's underlying buffer with a new one. It's assumed that the new buffer has the same content but
     * more free space, otherwise all existing pointers to this segment will be hilariously broken.
     *
     * @param {ArrayBuffer} buffer The new buffer to use.
     * @returns {void}
     */
    Segment.prototype.replaceBuffer = function (buffer) {
        trace('replaceBuffer(%p)', buffer);
        if (this.buffer === buffer)
            return;
        if (buffer.byteLength < this.byteLength)
            throw new Error(errors_1.SEG_REPLACEMENT_BUFFER_TOO_SMALL);
        this._dv = new DataView(buffer);
        this.buffer = buffer;
    };
    /**
     * Write a float32 value to the specified offset.
     *
     * @param {number} byteOffset The offset from the beginning of the buffer.
     * @param {number} val The value to store.
     * @returns {void}
     */
    Segment.prototype.setFloat32 = function (byteOffset, val) {
        this._dv.setFloat32(byteOffset, val, true);
    };
    /**
     * Write an float64 value to the specified offset.
     *
     * @param {number} byteOffset The offset from the beginning of the buffer.
     * @param {number} val The value to store.
     * @returns {void}
     */
    Segment.prototype.setFloat64 = function (byteOffset, val) {
        this._dv.setFloat64(byteOffset, val, true);
    };
    /**
     * Write an int16 value to the specified offset.
     *
     * @param {number} byteOffset The offset from the beginning of the buffer.
     * @param {number} val The value to store.
     * @returns {void}
     */
    Segment.prototype.setInt16 = function (byteOffset, val) {
        this._dv.setInt16(byteOffset, val, true);
    };
    /**
     * Write an int32 value to the specified offset.
     *
     * @param {number} byteOffset The offset from the beginning of the buffer.
     * @param {number} val The value to store.
     * @returns {void}
     */
    Segment.prototype.setInt32 = function (byteOffset, val) {
        this._dv.setInt32(byteOffset, val, true);
    };
    /**
     * Write an int8 value to the specified offset.
     *
     * @param {number} byteOffset The offset from the beginning of the buffer.
     * @param {number} val The value to store.
     * @returns {void}
     */
    Segment.prototype.setInt8 = function (byteOffset, val) {
        this._dv.setInt8(byteOffset, val);
    };
    /**
     * Write an int64 value to the specified offset.
     *
     * @param {number} byteOffset The offset from the beginning of the buffer.
     * @param {Int64} val The value to store.
     * @returns {void}
     */
    Segment.prototype.setInt64 = function (byteOffset, val) {
        this._dv.setUint8(byteOffset, val.buffer[0]);
        this._dv.setUint8(byteOffset + 1, val.buffer[1]);
        this._dv.setUint8(byteOffset + 2, val.buffer[2]);
        this._dv.setUint8(byteOffset + 3, val.buffer[3]);
        this._dv.setUint8(byteOffset + 4, val.buffer[4]);
        this._dv.setUint8(byteOffset + 5, val.buffer[5]);
        this._dv.setUint8(byteOffset + 6, val.buffer[6]);
        this._dv.setUint8(byteOffset + 7, val.buffer[7]);
    };
    /**
     * Write a uint16 value to the specified offset.
     *
     * @param {number} byteOffset The offset from the beginning of the buffer.
     * @param {number} val The value to store.
     * @returns {void}
     */
    Segment.prototype.setUint16 = function (byteOffset, val) {
        this._dv.setUint16(byteOffset, val, true);
    };
    /**
     * Write a uint32 value to the specified offset.
     *
     * @param {number} byteOffset The offset from the beginning of the buffer.
     * @param {number} val The value to store.
     * @returns {void}
     */
    Segment.prototype.setUint32 = function (byteOffset, val) {
        this._dv.setUint32(byteOffset, val, true);
    };
    /**
     * Write a uint64 value to the specified offset.
     * TODO: benchmark other ways to perform this write operation.
     *
     * @param {number} byteOffset The offset from the beginning of the buffer.
     * @param {Uint64} val The value to store.
     * @returns {void}
     */
    Segment.prototype.setUint64 = function (byteOffset, val) {
        this._dv.setUint8(byteOffset + 0, val.buffer[0]);
        this._dv.setUint8(byteOffset + 1, val.buffer[1]);
        this._dv.setUint8(byteOffset + 2, val.buffer[2]);
        this._dv.setUint8(byteOffset + 3, val.buffer[3]);
        this._dv.setUint8(byteOffset + 4, val.buffer[4]);
        this._dv.setUint8(byteOffset + 5, val.buffer[5]);
        this._dv.setUint8(byteOffset + 6, val.buffer[6]);
        this._dv.setUint8(byteOffset + 7, val.buffer[7]);
    };
    /**
     * Write a uint8 (byte) value to the specified offset.
     *
     * @param {number} byteOffset The offset from the beginning of the buffer.
     * @param {number} val The value to store.
     * @returns {void}
     */
    Segment.prototype.setUint8 = function (byteOffset, val) {
        this._dv.setUint8(byteOffset, val);
    };
    /**
     * Write a zero word (8 bytes) to the specified offset. This is slightly faster than calling `setUint64` or
     * `setFloat64` with a zero value.
     *
     * Benchmark: http://jsben.ch/#/dUdPI
     *
     * @param {number} byteOffset The offset of the word to set to zero.
     * @returns {void}
     */
    Segment.prototype.setWordZero = function (byteOffset) {
        this._dv.setFloat64(byteOffset, 0, constants_1.NATIVE_LITTLE_ENDIAN);
    };
    Segment.prototype.toString = function () {
        return util_1.format('Segment_id:%d,off:%a,len:%a,cap:%a', this.id, this.byteLength, this.byteOffset, this.buffer.byteLength);
    };
    return Segment;
}());
exports.Segment = Segment;

//# sourceMappingURL=segment.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/types/index.js":
/*!**************************************************!*\
  !*** ./node_modules/capnp-ts/lib/types/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var int64_1 = __webpack_require__(/*! ./int64 */ "./node_modules/capnp-ts/lib/types/int64.js");
exports.Int64 = int64_1.Int64;
var uint64_1 = __webpack_require__(/*! ./uint64 */ "./node_modules/capnp-ts/lib/types/uint64.js");
exports.Uint64 = uint64_1.Uint64;

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/types/int64.js":
/*!**************************************************!*\
  !*** ./node_modules/capnp-ts/lib/types/int64.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/capnp-ts/lib/constants.js");
var util_1 = __webpack_require__(/*! ../util */ "./node_modules/capnp-ts/lib/util.js");
var uint64_1 = __webpack_require__(/*! ./uint64 */ "./node_modules/capnp-ts/lib/types/uint64.js");
var trace = debug_1.default('capnp:int64');
trace('load');
/**
 * Represents a signed 64-bit integer stored using a Uint8Array in little-endian format.
 *
 * You may convert this to a primitive number by calling `toNumber()` but be wary of precision loss!
 *
 * The value passed in as the source buffer is expected to be in little-endian format.
 */
var Int64 = /** @class */ (function (_super) {
    tslib_1.__extends(Int64, _super);
    function Int64() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Int64.fromArrayBuffer = function (source, offset, noCopy) {
        if (offset === void 0) { offset = 0; }
        if (noCopy === void 0) { noCopy = false; }
        if (noCopy)
            return new this(new Uint8Array(source, offset, 8));
        return new this(new Uint8Array(source.slice(offset, offset + 8)));
    };
    Int64.fromDataView = function (source, offset, noCopy) {
        if (offset === void 0) { offset = 0; }
        if (noCopy === void 0) { noCopy = false; }
        if (noCopy)
            return new this(new Uint8Array(source.buffer, source.byteOffset + offset, 8));
        return new this(new Uint8Array(source.buffer.slice(source.byteOffset + offset, source.byteLength + offset + 8)));
    };
    Int64.fromNumber = function (source) {
        var ret = new this(new Uint8Array(8));
        ret.setValue(source);
        return ret;
    };
    /**
     * Parse a hexadecimal string in **big endian format** as an Int64 value.
     *
     * The value will be negative if the string is either preceded with a `-` sign, or already in the negative 2's
     * complement form.
     *
     * @static
     * @param {string} source The source string.
     * @returns {Int64} The string parsed as a 64-bit signed integer.
     */
    Int64.fromHexString = function (source) {
        if (source.substr(0, 2) === '0x')
            source = source.substr(2);
        if (source.length < 1)
            return Int64.fromNumber(0);
        var neg = source[0] === '-';
        if (neg)
            source = source.substr(1);
        source = util_1.pad(source, 16);
        if (source.length !== 16)
            throw new RangeError('Source string must contain at most 16 hexadecimal digits.');
        var bytes = source.toLowerCase().replace(/[^\da-f]/g, '');
        var buf = new Uint8Array(new ArrayBuffer(8));
        for (var i = 0; i < 8; i++)
            buf[7 - i] = parseInt(bytes.substr(i * 2, 2), 16);
        var val = new Int64(buf);
        if (neg)
            val.negate();
        return val;
    };
    Int64.fromUint8Array = function (source, offset, noCopy) {
        if (offset === void 0) { offset = 0; }
        if (noCopy === void 0) { noCopy = false; }
        if (noCopy)
            return new this(source.subarray(offset, offset + 8));
        return new this(new Uint8Array(source.buffer.slice(source.byteOffset + offset, source.byteOffset + offset + 8)));
    };
    Int64.prototype.equals = function (other) {
        return _super.prototype.equals.call(this, other);
    };
    Int64.prototype.inspect = function () {
        return "[Int64 " + this.toString(10) + " 0x" + this.toHexString() + "]";
    };
    Int64.prototype.negate = function () {
        for (var b = this.buffer, carry = 1, i = 0; i < 8; i++) {
            var v = (b[i] ^ 0xff) + carry;
            b[i] = v & 0xff;
            carry = v >> 8;
        }
    };
    Int64.prototype.setValue = function (loWord, hiWord) {
        var negate = false;
        var lo = loWord;
        var hi = hiWord;
        if (hi === undefined) {
            hi = lo;
            negate = hi < 0;
            hi = Math.abs(hi);
            lo = hi % constants_1.VAL32;
            hi = hi / constants_1.VAL32;
            if (hi > constants_1.VAL32)
                throw new RangeError(loWord + " is outside Int64 range");
            hi = hi >>> 0;
        }
        for (var i = 0; i < 8; i++) {
            this.buffer[i] = lo & 0xff;
            lo = i === 3 ? hi : lo >>> 8;
        }
        if (negate)
            this.negate();
    };
    Int64.prototype.toHexString = function () {
        var b = this.buffer;
        var negate = b[7] & 0x80;
        if (negate)
            this.negate();
        var hex = '';
        for (var i = 7; i >= 0; i--) {
            var v = b[i].toString(16);
            if (v.length === 1)
                v = '0' + v;
            hex += v;
        }
        if (negate) {
            this.negate();
            hex = '-' + hex;
        }
        return hex;
    };
    /**
     * Convert to a native javascript number.
     *
     * WARNING: do not expect this number to be accurate to integer precision for large (positive or negative) numbers!
     *
     * @param {boolean} allowImprecise If `true`, no check is performed to verify the returned value is accurate;
     * otherwise out-of-range values are clamped to +/-Infinity.
     * @returns {number} A numeric representation of this integer.
     */
    Int64.prototype.toNumber = function (allowImprecise) {
        var b = this.buffer;
        var negate = b[7] & 0x80;
        var x = 0;
        var carry = 1;
        var i = 0;
        var m = 1;
        while (i < 8) {
            var v = b[i];
            if (negate) {
                v = (v ^ 0xff) + carry;
                carry = v >> 8;
                v = v & 0xff;
            }
            x += v * m;
            m *= 256;
            i++;
        }
        if (!allowImprecise && x >= constants_1.MAX_SAFE_INTEGER) {
            trace('Coercing out of range value %d to Infinity.', x);
            return negate ? -Infinity : Infinity;
        }
        return negate ? -x : x;
    };
    return Int64;
}(uint64_1.Uint64));
exports.Int64 = Int64;

//# sourceMappingURL=int64.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/types/uint64.js":
/*!***************************************************!*\
  !*** ./node_modules/capnp-ts/lib/types/uint64.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/capnp-ts/lib/constants.js");
var errors_1 = __webpack_require__(/*! ../errors */ "./node_modules/capnp-ts/lib/errors.js");
var util_1 = __webpack_require__(/*! ../util */ "./node_modules/capnp-ts/lib/util.js");
var trace = debug_1.default('capnp:uint64');
trace('load');
/**
 * Represents an unsigned 64-bit integer stored using a Uint8Array in little-endian format. It's a little bit faster
 * than int64 because we don't need to keep track of the sign bit or perform two's compliment operations on set.
 *
 * You may convert this to a primitive number by calling `toNumber()` but be wary of precision loss!
 *
 * Note that overflow is not implemented, so negative numbers passed into `setValue()` will be negated first.
 *
 * The value passed in as the source buffer is expected to be in little-endian format.
 */
var Uint64 = /** @class */ (function () {
    /**
     * Creates a new instance; this is a no-frills constructor for speed. Use the factory methods if you need to convert
     * from other types or use a different offset into the buffer.
     *
     * Will throw if the buffer is not at least 8 bytes long.
     *
     * @constructor
     * @param {Uint8Array} buffer The buffer to use for this 64-bit word; the bytes must be in little-endian order.
     */
    function Uint64(buffer) {
        if (buffer.byteLength < 8)
            throw new RangeError(errors_1.RANGE_INT64_UNDERFLOW);
        this.buffer = buffer;
    }
    Uint64.fromArrayBuffer = function (source, offset, noCopy) {
        if (offset === void 0) { offset = 0; }
        if (noCopy === void 0) { noCopy = false; }
        if (noCopy)
            return new this(new Uint8Array(source, offset, 8));
        return new this(new Uint8Array(source.slice(offset, offset + 8)));
    };
    Uint64.fromDataView = function (source, offset, noCopy) {
        if (offset === void 0) { offset = 0; }
        if (noCopy === void 0) { noCopy = false; }
        if (noCopy)
            return new this(new Uint8Array(source.buffer, source.byteOffset + offset, 8));
        return new this(new Uint8Array(source.buffer.slice(source.byteOffset + offset, source.byteLength + offset + 8)));
    };
    /**
     * Parse a hexadecimal string in **big endian format** as a Uint64 value.
     *
     * @static
     * @param {string} source The source string.
     * @returns {Uint64} The string parsed as a 64-bit unsigned integer.
     */
    Uint64.fromHexString = function (source) {
        if (source.substr(0, 2) === '0x')
            source = source.substr(2);
        if (source.length < 1)
            return Uint64.fromNumber(0);
        if (source[0] === '-')
            throw new RangeError('Source must not be negative.');
        source = util_1.pad(source, 16);
        if (source.length !== 16)
            throw new RangeError('Source string must contain at most 16 hexadecimal digits.');
        var bytes = source.toLowerCase().replace(/[^\da-f]/g, '');
        var buf = new Uint8Array(new ArrayBuffer(8));
        for (var i = 0; i < 8; i++)
            buf[7 - i] = parseInt(bytes.substr(i * 2, 2), 16);
        return new Uint64(buf);
    };
    Uint64.fromNumber = function (source) {
        var ret = new this(new Uint8Array(8));
        ret.setValue(source);
        return ret;
    };
    Uint64.fromUint8Array = function (source, offset, noCopy) {
        if (offset === void 0) { offset = 0; }
        if (noCopy === void 0) { noCopy = false; }
        if (noCopy)
            return new this(source.subarray(offset, offset + 8));
        return new this(new Uint8Array(source.buffer.slice(source.byteOffset + offset, source.byteOffset + offset + 8)));
    };
    Uint64.prototype.equals = function (other) {
        for (var i = 0; i < 8; i++) {
            if (this.buffer[i] !== other.buffer[i])
                return false;
        }
        return true;
    };
    Uint64.prototype.inspect = function () {
        return "[Uint64 " + this.toString(10) + " 0x" + this.toHexString() + "]";
    };
    /**
     * Faster way to check for zero values without converting to a number first.
     *
     * @returns {boolean} `true` if the contained value is zero.
     * @memberOf Uint64
     */
    Uint64.prototype.isZero = function () {
        for (var i = 0; i < 8; i++) {
            if (this.buffer[i] !== 0)
                return false;
        }
        return true;
    };
    Uint64.prototype.setValue = function (loWord, hiWord) {
        var lo = loWord;
        var hi = hiWord;
        if (hi === undefined) {
            hi = lo;
            hi = Math.abs(hi);
            lo = hi % constants_1.VAL32;
            hi = hi / constants_1.VAL32;
            if (hi > constants_1.VAL32)
                throw new RangeError(loWord + " is outside Uint64 range");
            hi = hi >>> 0;
        }
        for (var i = 0; i < 8; i++) {
            this.buffer[i] = lo & 0xff;
            lo = i === 3 ? hi : lo >>> 8;
        }
    };
    /**
     * Convert to a native javascript number.
     *
     * WARNING: do not expect this number to be accurate to integer precision for large (positive or negative) numbers!
     *
     * @param {boolean} allowImprecise If `true`, no check is performed to verify the returned value is accurate;
     * otherwise out-of-range values are clamped to +Infinity.
     * @returns {number} A numeric representation of this integer.
     */
    Uint64.prototype.toNumber = function (allowImprecise) {
        var b = this.buffer;
        var x = 0;
        var i = 0;
        var m = 1;
        while (i < 8) {
            var v = b[i];
            x += v * m;
            m *= 256;
            i++;
        }
        if (!allowImprecise && x >= constants_1.MAX_SAFE_INTEGER) {
            trace('Coercing out of range value %d to Infinity.', x);
            return Infinity;
        }
        return x;
    };
    Uint64.prototype.valueOf = function () {
        return this.toNumber(false);
    };
    Uint64.prototype.toArrayBuffer = function () {
        return this.buffer.buffer;
    };
    Uint64.prototype.toDataView = function () {
        return new DataView(this.buffer.buffer);
    };
    Uint64.prototype.toHexString = function () {
        var hex = '';
        for (var i = 7; i >= 0; i--) {
            var v = this.buffer[i].toString(16);
            if (v.length === 1)
                v = '0' + v;
            hex += v;
        }
        return hex;
    };
    Uint64.prototype.toString = function (radix) {
        return this.toNumber(true).toString(radix);
    };
    Uint64.prototype.toUint8Array = function () {
        return this.buffer;
    };
    return Uint64;
}());
exports.Uint64 = Uint64;

//# sourceMappingURL=uint64.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/lib/util.js":
/*!*******************************************!*\
  !*** ./node_modules/capnp-ts/lib/util.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author jdiaz5513
 */
Object.defineProperty(exports, "__esModule", { value: true });
// LINT: a lot of the util functions need the any type.
/* tslint:disable:no-any no-unsafe-any */
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/capnp-ts/node_modules/debug/src/browser.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/capnp-ts/lib/constants.js");
var errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/capnp-ts/lib/errors.js");
var trace = debug_1.default('capnp:util');
trace('load');
/**
 * Dump a hex string from the given buffer.
 *
 * @export
 * @param {ArrayBuffer} buffer The buffer to convert.
 * @returns {string} A hexadecimal string representing the buffer.
 */
function bufferToHex(buffer) {
    var a = new Uint8Array(buffer);
    var h = [];
    for (var i = 0; i < a.byteLength; i++)
        h.push(pad(a[i].toString(16), 2));
    return "[" + h.join(' ') + "]";
}
exports.bufferToHex = bufferToHex;
/**
 * Throw an error if the provided value cannot be represented as a 32-bit integer.
 *
 * @export
 * @param {number} value The number to check.
 * @returns {number} The same number if it is valid.
 */
function checkInt32(value) {
    if (value > constants_1.MAX_INT32 || value < -constants_1.MAX_INT32)
        throw new RangeError(errors_1.RANGE_INT32_OVERFLOW);
    return value;
}
exports.checkInt32 = checkInt32;
function checkUint32(value) {
    if (value < 0 || value > constants_1.MAX_UINT32)
        throw new RangeError(errors_1.RANGE_UINT32_OVERFLOW);
    return value;
}
exports.checkUint32 = checkUint32;
/**
 * Decode a UTF-8 encoded byte array into a JavaScript string (UCS-2).
 *
 * @export
 * @param {Uint8Array} src A utf-8 encoded byte array.
 * @returns {string} A string representation of the byte array.
 */
function decodeUtf8(src) {
    // This ain't for the faint of heart, kids. If you suffer from seizures, heart palpitations, or have had a history of
    // stroke you may want to look away now.
    var l = src.byteLength;
    var dst = '';
    var i = 0;
    var cp = 0;
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    while (i < l) {
        a = src[i++];
        if ((a & 128) === 0) {
            cp = a;
        }
        else if ((a & 224) === 192) {
            if (i >= l)
                throw new RangeError(errors_1.RANGE_INVALID_UTF8);
            b = src[i++];
            cp = ((a & 31) << 6) | (b & 63);
        }
        else if ((a & 240) === 224) {
            if (i + 1 >= l)
                throw new RangeError(errors_1.RANGE_INVALID_UTF8);
            b = src[i++];
            c = src[i++];
            cp = ((a & 15) << 12) | ((b & 63) << 6) | (c & 63);
        }
        else if ((a & 248) === 240) {
            if (i + 2 >= l)
                throw new RangeError(errors_1.RANGE_INVALID_UTF8);
            b = src[i++];
            c = src[i++];
            d = src[i++];
            cp = ((a & 7) << 18) | ((b & 63) << 12) | ((c & 63) << 6) | (d & 63);
        }
        else {
            throw new RangeError(errors_1.RANGE_INVALID_UTF8);
        }
        if (cp <= 0xd7ff || (cp >= 0xe000 && cp <= 0xffff)) {
            dst += String.fromCharCode(cp);
        }
        else {
            // We must reach into the astral plane and construct the surrogate pair!
            cp -= 0x00010000;
            var hi = (cp >>> 10) + 0xd800;
            var lo = (cp & 0x03ff) + 0xdc00;
            if (hi < 0xd800 || hi > 0xdbff)
                throw new RangeError(errors_1.RANGE_INVALID_UTF8);
            dst += String.fromCharCode(hi, lo);
        }
    }
    return dst;
}
exports.decodeUtf8 = decodeUtf8;
function dumpBuffer(buffer) {
    var b = buffer instanceof ArrayBuffer
        ? new Uint8Array(buffer)
        : new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    var byteLength = Math.min(b.byteLength, constants_1.MAX_BUFFER_DUMP_BYTES);
    var r = format('\n=== buffer[%d] ===', byteLength);
    for (var j = 0; j < byteLength; j += 16) {
        r += "\n" + pad(j.toString(16), 8) + ": ";
        var s = '';
        var k = void 0;
        for (k = 0; k < 16 && j + k < b.byteLength; k++) {
            var v = b[j + k];
            r += pad(v.toString(16), 2) + " ";
            // Printable ASCII range.
            s += v > 31 && v < 255 ? String.fromCharCode(v) : '·';
            if (k === 7)
                r += ' ';
        }
        r += "" + repeat((17 - k) * 3, ' ') + s;
    }
    r += '\n';
    if (byteLength !== b.byteLength) {
        r += format('=== (truncated %d bytes) ===\n', b.byteLength - byteLength);
    }
    return r;
}
exports.dumpBuffer = dumpBuffer;
/**
 * Encode a JavaScript string (UCS-2) to a UTF-8 encoded string inside a Uint8Array.
 *
 * Note that the underlying buffer for the array will likely be larger than the actual contents; ignore the extra bytes.
 *
 * @export
 * @param {string} src The input string.
 * @returns {Uint8Array} A UTF-8 encoded buffer with the string's contents.
 */
function encodeUtf8(src) {
    var l = src.length;
    var dst = new Uint8Array(new ArrayBuffer(l * 4));
    var j = 0;
    for (var i = 0; i < l; i++) {
        var c = src.charCodeAt(i);
        if (c <= 0x7f) {
            dst[j++] = c;
        }
        else if (c <= 0x07ff) {
            dst[j++] = 192 | (c >>> 6);
            dst[j++] = 128 | ((c >>> 0) & 63);
        }
        else if (c <= 0xd7ff || c >= 0xe000) {
            dst[j++] = 224 | (c >>> 12);
            dst[j++] = 128 | ((c >>> 6) & 63);
            dst[j++] = 128 | ((c >>> 0) & 63);
        }
        else {
            // Make sure the surrogate pair is complete.
            /* istanbul ignore next */
            if (i + 1 >= l)
                throw new RangeError(errors_1.RANGE_INVALID_UTF8);
            // I cast thee back into the astral plane.
            var hi = c - 0xd800;
            var lo = src.charCodeAt(++i) - 0xdc00;
            var cp = ((hi << 10) | lo) + 0x00010000;
            dst[j++] = 240 | (cp >>> 18);
            dst[j++] = 128 | ((cp >>> 12) & 63);
            dst[j++] = 128 | ((cp >>> 6) & 63);
            dst[j++] = 128 | ((cp >>> 0) & 63);
        }
    }
    return dst.subarray(0, j);
}
exports.encodeUtf8 = encodeUtf8;
/**
 * Produce a `printf`-style string. Nice for providing arguments to `assert` without paying the cost for string
 * concatenation up front. Precision is supported for floating point numbers.
 *
 * @param {string} s The format string. Supported format specifiers: b, c, d, f, j, o, s, x, and X.
 * @param {...any} args Values to be formatted in the string. Arguments beyond what are consumed by the format string
 * are ignored.
 * @returns {string} The formatted string.
 */
function format(s) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var n = s.length;
    var arg;
    var argIndex = 0;
    var c;
    var escaped = false;
    var i = 0;
    var leadingZero = false;
    var precision;
    var result = '';
    function nextArg() {
        return args[argIndex++];
    }
    function slurpNumber() {
        var digits = '';
        while (/\d/.test(s[i])) {
            digits += s[i++];
            c = s[i];
        }
        return digits.length > 0 ? parseInt(digits, 10) : null;
    }
    for (; i < n; ++i) {
        c = s[i];
        if (escaped) {
            escaped = false;
            if (c === '.') {
                leadingZero = false;
                c = s[++i];
            }
            else if (c === '0' && s[i + 1] === '.') {
                leadingZero = true;
                i += 2;
                c = s[i];
            }
            else {
                leadingZero = true;
            }
            precision = slurpNumber();
            switch (c) {
                case 'a':// number in hex with padding
                    result += '0x' + pad(parseInt(nextArg(), 10).toString(16), 8);
                    break;
                case 'b':// number in binary
                    result += parseInt(nextArg(), 10).toString(2);
                    break;
                case 'c':// character
                    arg = nextArg();
                    if (typeof arg === 'string' || arg instanceof String) {
                        result += arg;
                    }
                    else {
                        result += String.fromCharCode(parseInt(arg, 10));
                    }
                    break;
                case 'd':// number in decimal
                    result += parseInt(nextArg(), 10);
                    break;
                case 'f':// floating point number
                    var tmp = String(parseFloat(nextArg()).toFixed(precision || 6));
                    result += leadingZero ? tmp : tmp.replace(/^0/, '');
                    break;
                case 'j':// JSON
                    result += JSON.stringify(nextArg());
                    break;
                case 'o':// number in octal
                    result += '0' + parseInt(nextArg(), 10).toString(8);
                    break;
                case 's':// string
                    result += nextArg();
                    break;
                case 'x':// lowercase hexadecimal
                    result += '0x' + parseInt(nextArg(), 10).toString(16);
                    break;
                case 'X':// uppercase hexadecimal
                    result += '0x' + parseInt(nextArg(), 10).toString(16).toUpperCase();
                    break;
                default:
                    result += c;
                    break;
            }
        }
        else if (c === '%') {
            escaped = true;
        }
        else {
            result += c;
        }
    }
    return result;
}
exports.format = format;
/**
 * Return the thing that was passed in. Yaaaaawn.
 *
 * @export
 * @template T
 * @param {T} x A thing.
 * @returns {T} The same thing.
 */
function identity(x) {
    return x;
}
exports.identity = identity;
function pad(v, width, pad) {
    if (pad === void 0) { pad = '0'; }
    return v.length >= width ? v : new Array(width - v.length + 1).join(pad) + v;
}
exports.pad = pad;
/**
 * Add padding to a number to make it divisible by 8. Typically used to pad byte sizes so they align to a word boundary.
 *
 * @export
 * @param {number} size The number to pad.
 * @returns {number} The padded number.
 */
function padToWord(size) {
    return (size + 7) & ~7;
}
exports.padToWord = padToWord;
/**
 * Repeat a string n times. Shamelessly copied from lodash.repeat.
 *
 * @param {number} times Number of times to repeat.
 * @param {string} str The string to repeat.
 * @returns {string} The repeated string.
 */
function repeat(times, str) {
    var out = '';
    var n = times;
    var s = str;
    if (n < 1 || n > Number.MAX_VALUE)
        return out;
    // https://en.wikipedia.org/wiki/Exponentiation_by_squaring
    do {
        if (n % 2)
            out += s;
        n = Math.floor(n / 2);
        if (n)
            s += s;
    } while (n);
    return out;
}
exports.repeat = repeat;
// Set up custom debug formatters.
/* tslint:disable:no-string-literal */
/* istanbul ignore next */
debug_1.default.formatters['h'] = function (v) { return v.toString('hex'); };
/* istanbul ignore next */
debug_1.default.formatters['x'] = function (v) { return "0x" + v.toString(16); };
/* istanbul ignore next */
debug_1.default.formatters['a'] = function (v) { return "0x" + pad(v.toString(16), 8); };
/* istanbul ignore next */
debug_1.default.formatters['X'] = function (v) { return "0x" + v.toString(16).toUpperCase(); };
/* tslint:enable:no-string-literal */

//# sourceMappingURL=util.js.map


/***/ }),

/***/ "./node_modules/capnp-ts/node_modules/debug/src/browser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/capnp-ts/node_modules/debug/src/browser.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/capnp-ts/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/capnp-ts/node_modules/debug/src/debug.js":
/*!***************************************************************!*\
  !*** ./node_modules/capnp-ts/node_modules/debug/src/debug.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/date.capnp.ts":
/*!***************************!*\
  !*** ./src/date.capnp.ts ***!
  \***************************/
/*! exports provided: _capnpFileId, Date */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_capnpFileId", function() { return _capnpFileId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Date", function() { return Date; });
/* harmony import */ var capnp_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! capnp-ts */ "./node_modules/capnp-ts/lib/index.js");
/* harmony import */ var capnp_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(capnp_ts__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/capnp-ts).
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var _capnpFileId = "dbb9ad1f14bf0b36";
var Date = /** @class */ (function (_super) {
    __extends(Date, _super);
    function Date() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Date.prototype.getYear = function () { return capnp_ts__WEBPACK_IMPORTED_MODULE_0__["Struct"].getInt16(0, this); };
    Date.prototype.setYear = function (value) { capnp_ts__WEBPACK_IMPORTED_MODULE_0__["Struct"].setInt16(0, value, this); };
    Date.prototype.getMonth = function () { return capnp_ts__WEBPACK_IMPORTED_MODULE_0__["Struct"].getUint8(2, this); };
    Date.prototype.setMonth = function (value) { capnp_ts__WEBPACK_IMPORTED_MODULE_0__["Struct"].setUint8(2, value, this); };
    Date.prototype.getDay = function () { return capnp_ts__WEBPACK_IMPORTED_MODULE_0__["Struct"].getUint8(3, this); };
    Date.prototype.setDay = function (value) { capnp_ts__WEBPACK_IMPORTED_MODULE_0__["Struct"].setUint8(3, value, this); };
    Date.prototype.toString = function () { return "Date_" + _super.prototype.toString.call(this); };
    Date._capnp = { displayName: "Date", id: "ef29c66fa74a8c93", size: new capnp_ts__WEBPACK_IMPORTED_MODULE_0__["ObjectSize"](8, 0) };
    return Date;
}(capnp_ts__WEBPACK_IMPORTED_MODULE_0__["Struct"]));



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: loadMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessage", function() { return loadMessage; });
/* harmony import */ var capnp_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! capnp-ts */ "./node_modules/capnp-ts/lib/index.js");
/* harmony import */ var capnp_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(capnp_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _date_capnp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date.capnp */ "./src/date.capnp.ts");
/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Friday, June 29th 2018, 12:07:33 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */


function loadMessage(buffer) {
    var message = new capnp_ts__WEBPACK_IMPORTED_MODULE_0__["Message"](buffer);
    return message.getRoot(_date_capnp__WEBPACK_IMPORTED_MODULE_1__["Date"]);
}
// const date = {
//     year: 1992,
//     month: 10,
//     day: 25
// }
var buffer = new ArrayBuffer(_date_capnp__WEBPACK_IMPORTED_MODULE_1__["Date"]._capnp.size.dataByteLength);
var message = new capnp_ts__WEBPACK_IMPORTED_MODULE_0__["Message"](buffer, false, true);
console.log(1);
var date = capnp_ts__WEBPACK_IMPORTED_MODULE_0__["Message"].initRoot(_date_capnp__WEBPACK_IMPORTED_MODULE_1__["Date"], message);
console.log(2);
date.setYear(1992);
date.setMonth(10);
date.setDay(25);
// Date._capnp
// const q = new Date(buffer,0);
// q.segment.
//     capnp.Message.toArrayBuffer(new capnp.Message())
var q = loadMessage(date.segment.message.toPackedArrayBuffer());
console.log(q.getYear());


/***/ })

/******/ });
//# sourceMappingURL=index.js.map