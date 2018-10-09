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

/***/ "./node_modules/handlebars/dist/cjs/handlebars.runtime.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars.runtime.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
// istanbul ignore next
function _interopRequireWildcard(obj) { if (obj && obj.__esModule) {
    return obj;
}
else {
    var newObj = {};
    if (obj != null) {
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
        }
    }
    newObj['default'] = obj;
    return newObj;
} }
var _handlebarsBase = __webpack_require__(/*! ./handlebars/base */ "./node_modules/handlebars/dist/cjs/handlebars/base.js");
var base = _interopRequireWildcard(_handlebarsBase);
// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
var _handlebarsSafeString = __webpack_require__(/*! ./handlebars/safe-string */ "./node_modules/handlebars/dist/cjs/handlebars/safe-string.js");
var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
var _handlebarsException = __webpack_require__(/*! ./handlebars/exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");
var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
var _handlebarsUtils = __webpack_require__(/*! ./handlebars/utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");
var Utils = _interopRequireWildcard(_handlebarsUtils);
var _handlebarsRuntime = __webpack_require__(/*! ./handlebars/runtime */ "./node_modules/handlebars/dist/cjs/handlebars/runtime.js");
var runtime = _interopRequireWildcard(_handlebarsRuntime);
var _handlebarsNoConflict = __webpack_require__(/*! ./handlebars/no-conflict */ "./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js");
var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
    var hb = new base.HandlebarsEnvironment();
    Utils.extend(hb, base);
    hb.SafeString = _handlebarsSafeString2['default'];
    hb.Exception = _handlebarsException2['default'];
    hb.Utils = Utils;
    hb.escapeExpression = Utils.escapeExpression;
    hb.VM = runtime;
    hb.template = function (spec) {
        return runtime.template(spec, hb);
    };
    return hb;
}
var inst = create();
inst.create = create;
_handlebarsNoConflict2['default'](inst);
inst['default'] = inst;
exports['default'] = inst;
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/base.js":
/*!*************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/base.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
var _utils = __webpack_require__(/*! ./utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");
var _exception = __webpack_require__(/*! ./exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");
var _exception2 = _interopRequireDefault(_exception);
var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/handlebars/dist/cjs/handlebars/helpers.js");
var _decorators = __webpack_require__(/*! ./decorators */ "./node_modules/handlebars/dist/cjs/handlebars/decorators.js");
var _logger = __webpack_require__(/*! ./logger */ "./node_modules/handlebars/dist/cjs/handlebars/logger.js");
var _logger2 = _interopRequireDefault(_logger);
var VERSION = '4.0.11';
exports.VERSION = VERSION;
var COMPILER_REVISION = 7;
exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
    1: '<= 1.0.rc.2',
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '== 1.x.x',
    5: '== 2.0.0-alpha.x',
    6: '>= 2.0.0-beta.1',
    7: '>= 4.0.0'
};
exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';
function HandlebarsEnvironment(helpers, partials, decorators) {
    this.helpers = helpers || {};
    this.partials = partials || {};
    this.decorators = decorators || {};
    _helpers.registerDefaultHelpers(this);
    _decorators.registerDefaultDecorators(this);
}
HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,
    logger: _logger2['default'],
    log: _logger2['default'].log,
    registerHelper: function registerHelper(name, fn) {
        if (_utils.toString.call(name) === objectType) {
            if (fn) {
                throw new _exception2['default']('Arg not supported with multiple helpers');
            }
            _utils.extend(this.helpers, name);
        }
        else {
            this.helpers[name] = fn;
        }
    },
    unregisterHelper: function unregisterHelper(name) {
        delete this.helpers[name];
    },
    registerPartial: function registerPartial(name, partial) {
        if (_utils.toString.call(name) === objectType) {
            _utils.extend(this.partials, name);
        }
        else {
            if (typeof partial === 'undefined') {
                throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
            }
            this.partials[name] = partial;
        }
    },
    unregisterPartial: function unregisterPartial(name) {
        delete this.partials[name];
    },
    registerDecorator: function registerDecorator(name, fn) {
        if (_utils.toString.call(name) === objectType) {
            if (fn) {
                throw new _exception2['default']('Arg not supported with multiple decorators');
            }
            _utils.extend(this.decorators, name);
        }
        else {
            this.decorators[name] = fn;
        }
    },
    unregisterDecorator: function unregisterDecorator(name) {
        delete this.decorators[name];
    }
};
var log = _logger2['default'].log;
exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/decorators.js":
/*!*******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/decorators.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
var _decoratorsInline = __webpack_require__(/*! ./decorators/inline */ "./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js");
var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
function registerDefaultDecorators(instance) {
    _decoratorsInline2['default'](instance);
}


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js":
/*!**************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");
exports['default'] = function (instance) {
    instance.registerDecorator('inline', function (fn, props, container, options) {
        var ret = fn;
        if (!props.partials) {
            props.partials = {};
            ret = function (context, options) {
                // Create a new partials stack frame prior to exec.
                var original = container.partials;
                container.partials = _utils.extend({}, original, props.partials);
                var ret = fn(context, options);
                container.partials = original;
                return ret;
            };
        }
        props.partials[options.args[0]] = options.fn;
        return ret;
    });
};
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/exception.js":
/*!******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/exception.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];
function Exception(message, node) {
    var loc = node && node.loc, line = undefined, column = undefined;
    if (loc) {
        line = loc.start.line;
        column = loc.start.column;
        message += ' - ' + line + ':' + column;
    }
    var tmp = Error.prototype.constructor.call(this, message);
    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
        this[errorProps[idx]] = tmp[errorProps[idx]];
    }
    /* istanbul ignore else */
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, Exception);
    }
    try {
        if (loc) {
            this.lineNumber = line;
            // Work around issue under safari where we can't directly set the column value
            /* istanbul ignore next */
            if (Object.defineProperty) {
                Object.defineProperty(this, 'column', {
                    value: column,
                    enumerable: true
                });
            }
            else {
                this.column = column;
            }
        }
    }
    catch (nop) {
        /* Ignore if the browser is very particular */
    }
}
Exception.prototype = new Error();
exports['default'] = Exception;
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
// istanbul ignore next
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
var _helpersBlockHelperMissing = __webpack_require__(/*! ./helpers/block-helper-missing */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js");
var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
var _helpersEach = __webpack_require__(/*! ./helpers/each */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js");
var _helpersEach2 = _interopRequireDefault(_helpersEach);
var _helpersHelperMissing = __webpack_require__(/*! ./helpers/helper-missing */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js");
var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
var _helpersIf = __webpack_require__(/*! ./helpers/if */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js");
var _helpersIf2 = _interopRequireDefault(_helpersIf);
var _helpersLog = __webpack_require__(/*! ./helpers/log */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js");
var _helpersLog2 = _interopRequireDefault(_helpersLog);
var _helpersLookup = __webpack_require__(/*! ./helpers/lookup */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js");
var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
var _helpersWith = __webpack_require__(/*! ./helpers/with */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js");
var _helpersWith2 = _interopRequireDefault(_helpersWith);
function registerDefaultHelpers(instance) {
    _helpersBlockHelperMissing2['default'](instance);
    _helpersEach2['default'](instance);
    _helpersHelperMissing2['default'](instance);
    _helpersIf2['default'](instance);
    _helpersLog2['default'](instance);
    _helpersLookup2['default'](instance);
    _helpersWith2['default'](instance);
}


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");
exports['default'] = function (instance) {
    instance.registerHelper('blockHelperMissing', function (context, options) {
        var inverse = options.inverse, fn = options.fn;
        if (context === true) {
            return fn(this);
        }
        else if (context === false || context == null) {
            return inverse(this);
        }
        else if (_utils.isArray(context)) {
            if (context.length > 0) {
                if (options.ids) {
                    options.ids = [options.name];
                }
                return instance.helpers.each(context, options);
            }
            else {
                return inverse(this);
            }
        }
        else {
            if (options.data && options.ids) {
                var data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                options = { data: data };
            }
            return fn(context, options);
        }
    });
};
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js":
/*!*********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");
var _exception = __webpack_require__(/*! ../exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");
var _exception2 = _interopRequireDefault(_exception);
exports['default'] = function (instance) {
    instance.registerHelper('each', function (context, options) {
        if (!options) {
            throw new _exception2['default']('Must pass iterator to #each');
        }
        var fn = options.fn, inverse = options.inverse, i = 0, ret = '', data = undefined, contextPath = undefined;
        if (options.data && options.ids) {
            contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
        }
        if (_utils.isFunction(context)) {
            context = context.call(this);
        }
        if (options.data) {
            data = _utils.createFrame(options.data);
        }
        function execIteration(field, index, last) {
            if (data) {
                data.key = field;
                data.index = index;
                data.first = index === 0;
                data.last = !!last;
                if (contextPath) {
                    data.contextPath = contextPath + field;
                }
            }
            ret = ret + fn(context[field], {
                data: data,
                blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
            });
        }
        if (context && typeof context === 'object') {
            if (_utils.isArray(context)) {
                for (var j = context.length; i < j; i++) {
                    if (i in context) {
                        execIteration(i, i, i === context.length - 1);
                    }
                }
            }
            else {
                var priorKey = undefined;
                for (var key in context) {
                    if (context.hasOwnProperty(key)) {
                        // We're running the iterations one step out of sync so we can detect
                        // the last iteration without have to scan the object twice and create
                        // an itermediate keys array.
                        if (priorKey !== undefined) {
                            execIteration(priorKey, i - 1);
                        }
                        priorKey = key;
                        i++;
                    }
                }
                if (priorKey !== undefined) {
                    execIteration(priorKey, i - 1, true);
                }
            }
        }
        if (i === 0) {
            ret = inverse(this);
        }
        return ret;
    });
};
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
var _exception = __webpack_require__(/*! ../exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");
var _exception2 = _interopRequireDefault(_exception);
exports['default'] = function (instance) {
    instance.registerHelper('helperMissing', function () {
        if (arguments.length === 1) {
            // A missing field in a {{foo}} construct.
            return undefined;
        }
        else {
            // Someone is actually trying to call something, blow up.
            throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
        }
    });
};
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js":
/*!*******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");
exports['default'] = function (instance) {
    instance.registerHelper('if', function (conditional, options) {
        if (_utils.isFunction(conditional)) {
            conditional = conditional.call(this);
        }
        // Default behavior is to render the positive path if the value is truthy and not empty.
        // The `includeZero` option may be set to treat the condtional as purely not empty based on the
        // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
        if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
            return options.inverse(this);
        }
        else {
            return options.fn(this);
        }
    });
    instance.registerHelper('unless', function (conditional, options) {
        return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
    });
};
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports['default'] = function (instance) {
    instance.registerHelper('log', function () {
        var args = [undefined], options = arguments[arguments.length - 1];
        for (var i = 0; i < arguments.length - 1; i++) {
            args.push(arguments[i]);
        }
        var level = 1;
        if (options.hash.level != null) {
            level = options.hash.level;
        }
        else if (options.data && options.data.level != null) {
            level = options.data.level;
        }
        args[0] = level;
        instance.log.apply(instance, args);
    });
};
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js":
/*!***********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports['default'] = function (instance) {
    instance.registerHelper('lookup', function (obj, field) {
        return obj && obj[field];
    });
};
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js":
/*!*********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");
exports['default'] = function (instance) {
    instance.registerHelper('with', function (context, options) {
        if (_utils.isFunction(context)) {
            context = context.call(this);
        }
        var fn = options.fn;
        if (!_utils.isEmpty(context)) {
            var data = options.data;
            if (options.data && options.ids) {
                data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
            }
            return fn(context, {
                data: data,
                blockParams: _utils.blockParams([context], [data && data.contextPath])
            });
        }
        else {
            return options.inverse(this);
        }
    });
};
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/logger.js":
/*!***************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/logger.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _utils = __webpack_require__(/*! ./utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");
var logger = {
    methodMap: ['debug', 'info', 'warn', 'error'],
    level: 'info',
    // Maps a given level value to the `methodMap` indexes above.
    lookupLevel: function lookupLevel(level) {
        if (typeof level === 'string') {
            var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
            if (levelMap >= 0) {
                level = levelMap;
            }
            else {
                level = parseInt(level, 10);
            }
        }
        return level;
    },
    // Can be overridden in the host environment
    log: function log(level) {
        level = logger.lookupLevel(level);
        if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
            var method = logger.methodMap[level];
            if (!console[method]) {
                // eslint-disable-line no-console
                method = 'log';
            }
            for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                message[_key - 1] = arguments[_key];
            }
            console[method].apply(console, message); // eslint-disable-line no-console
        }
    }
};
exports['default'] = logger;
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global window */

exports.__esModule = true;
exports['default'] = function (Handlebars) {
    /* istanbul ignore next */
    var root = typeof global !== 'undefined' ? global : window, $Handlebars = root.Handlebars;
    /* istanbul ignore next */
    Handlebars.noConflict = function () {
        if (root.Handlebars === Handlebars) {
            root.Handlebars = $Handlebars;
        }
        return Handlebars;
    };
};
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/runtime.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/runtime.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
// istanbul ignore next
function _interopRequireWildcard(obj) { if (obj && obj.__esModule) {
    return obj;
}
else {
    var newObj = {};
    if (obj != null) {
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
        }
    }
    newObj['default'] = obj;
    return newObj;
} }
var _utils = __webpack_require__(/*! ./utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");
var Utils = _interopRequireWildcard(_utils);
var _exception = __webpack_require__(/*! ./exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");
var _exception2 = _interopRequireDefault(_exception);
var _base = __webpack_require__(/*! ./base */ "./node_modules/handlebars/dist/cjs/handlebars/base.js");
function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
    if (compilerRevision !== currentRevision) {
        if (compilerRevision < currentRevision) {
            var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
            throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
        }
        else {
            // Use the embedded version info since the runtime doesn't know about this revision yet
            throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
        }
    }
}
function template(templateSpec, env) {
    /* istanbul ignore next */
    if (!env) {
        throw new _exception2['default']('No environment passed to template');
    }
    if (!templateSpec || !templateSpec.main) {
        throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
    }
    templateSpec.main.decorator = templateSpec.main_d;
    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as psuedo-supported APIs.
    env.VM.checkRevision(templateSpec.compiler);
    function invokePartialWrapper(partial, context, options) {
        if (options.hash) {
            context = Utils.extend({}, context, options.hash);
            if (options.ids) {
                options.ids[0] = true;
            }
        }
        partial = env.VM.resolvePartial.call(this, partial, context, options);
        var result = env.VM.invokePartial.call(this, partial, context, options);
        if (result == null && env.compile) {
            options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
            result = options.partials[options.name](context, options);
        }
        if (result != null) {
            if (options.indent) {
                var lines = result.split('\n');
                for (var i = 0, l = lines.length; i < l; i++) {
                    if (!lines[i] && i + 1 === l) {
                        break;
                    }
                    lines[i] = options.indent + lines[i];
                }
                result = lines.join('\n');
            }
            return result;
        }
        else {
            throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
        }
    }
    // Just add water
    var container = {
        strict: function strict(obj, name) {
            if (!(name in obj)) {
                throw new _exception2['default']('"' + name + '" not defined in ' + obj);
            }
            return obj[name];
        },
        lookup: function lookup(depths, name) {
            var len = depths.length;
            for (var i = 0; i < len; i++) {
                if (depths[i] && depths[i][name] != null) {
                    return depths[i][name];
                }
            }
        },
        lambda: function lambda(current, context) {
            return typeof current === 'function' ? current.call(context) : current;
        },
        escapeExpression: Utils.escapeExpression,
        invokePartial: invokePartialWrapper,
        fn: function fn(i) {
            var ret = templateSpec[i];
            ret.decorator = templateSpec[i + '_d'];
            return ret;
        },
        programs: [],
        program: function program(i, data, declaredBlockParams, blockParams, depths) {
            var programWrapper = this.programs[i], fn = this.fn(i);
            if (data || depths || blockParams || declaredBlockParams) {
                programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
            }
            else if (!programWrapper) {
                programWrapper = this.programs[i] = wrapProgram(this, i, fn);
            }
            return programWrapper;
        },
        data: function data(value, depth) {
            while (value && depth--) {
                value = value._parent;
            }
            return value;
        },
        merge: function merge(param, common) {
            var obj = param || common;
            if (param && common && param !== common) {
                obj = Utils.extend({}, common, param);
            }
            return obj;
        },
        // An empty object to use as replacement for null-contexts
        nullContext: Object.seal({}),
        noop: env.VM.noop,
        compilerInfo: templateSpec.compiler
    };
    function ret(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var data = options.data;
        ret._setup(options);
        if (!options.partial && templateSpec.useData) {
            data = initData(context, data);
        }
        var depths = undefined, blockParams = templateSpec.useBlockParams ? [] : undefined;
        if (templateSpec.useDepths) {
            if (options.depths) {
                depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
            }
            else {
                depths = [context];
            }
        }
        function main(context /*, options*/) {
            return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
        }
        main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
        return main(context, options);
    }
    ret.isTop = true;
    ret._setup = function (options) {
        if (!options.partial) {
            container.helpers = container.merge(options.helpers, env.helpers);
            if (templateSpec.usePartial) {
                container.partials = container.merge(options.partials, env.partials);
            }
            if (templateSpec.usePartial || templateSpec.useDecorators) {
                container.decorators = container.merge(options.decorators, env.decorators);
            }
        }
        else {
            container.helpers = options.helpers;
            container.partials = options.partials;
            container.decorators = options.decorators;
        }
    };
    ret._child = function (i, data, blockParams, depths) {
        if (templateSpec.useBlockParams && !blockParams) {
            throw new _exception2['default']('must pass block params');
        }
        if (templateSpec.useDepths && !depths) {
            throw new _exception2['default']('must pass parent depths');
        }
        return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
    };
    return ret;
}
function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
    function prog(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var currentDepths = depths;
        if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
            currentDepths = [context].concat(depths);
        }
        return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
    }
    prog = executeDecorators(fn, prog, container, depths, data, blockParams);
    prog.program = i;
    prog.depth = depths ? depths.length : 0;
    prog.blockParams = declaredBlockParams || 0;
    return prog;
}
function resolvePartial(partial, context, options) {
    if (!partial) {
        if (options.name === '@partial-block') {
            partial = options.data['partial-block'];
        }
        else {
            partial = options.partials[options.name];
        }
    }
    else if (!partial.call && !options.name) {
        // This is a dynamic partial that returned a string
        options.name = partial;
        partial = options.partials[partial];
    }
    return partial;
}
function invokePartial(partial, context, options) {
    // Use the current closure context to save the partial-block if this partial
    var currentPartialBlock = options.data && options.data['partial-block'];
    options.partial = true;
    if (options.ids) {
        options.data.contextPath = options.ids[0] || options.data.contextPath;
    }
    var partialBlock = undefined;
    if (options.fn && options.fn !== noop) {
        (function () {
            options.data = _base.createFrame(options.data);
            // Wrapper function to get access to currentPartialBlock from the closure
            var fn = options.fn;
            partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
                var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                // Restore the partial-block from the closure for the execution of the block
                // i.e. the part inside the block of the partial call.
                options.data = _base.createFrame(options.data);
                options.data['partial-block'] = currentPartialBlock;
                return fn(context, options);
            };
            if (fn.partials) {
                options.partials = Utils.extend({}, options.partials, fn.partials);
            }
        })();
    }
    if (partial === undefined && partialBlock) {
        partial = partialBlock;
    }
    if (partial === undefined) {
        throw new _exception2['default']('The partial ' + options.name + ' could not be found');
    }
    else if (partial instanceof Function) {
        return partial(context, options);
    }
}
function noop() {
    return '';
}
function initData(context, data) {
    if (!data || !('root' in data)) {
        data = data ? _base.createFrame(data) : {};
        data.root = context;
    }
    return data;
}
function executeDecorators(fn, prog, container, depths, data, blockParams) {
    if (fn.decorator) {
        var props = {};
        prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
        Utils.extend(prog, props);
    }
    return prog;
}


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/safe-string.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/safe-string.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Build out our basic SafeString type

exports.__esModule = true;
function SafeString(string) {
    this.string = string;
}
SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
    return '' + this.string;
};
exports['default'] = SafeString;
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;',
    '=': '&#x3D;'
};
var badChars = /[&<>"'`=]/g, possible = /[&<>"'`=]/;
function escapeChar(chr) {
    return escape[chr];
}
function extend(obj /* , ...source */) {
    for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
                obj[key] = arguments[i][key];
            }
        }
    }
    return obj;
}
var toString = Object.prototype.toString;
exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
    return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
    exports.isFunction = isFunction = function (value) {
        return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
}
exports.isFunction = isFunction;
/* eslint-enable func-style */
/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
    return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};
exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.
function indexOf(array, value) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
function escapeExpression(string) {
    if (typeof string !== 'string') {
        // don't escape SafeStrings, since they're already safe
        if (string && string.toHTML) {
            return string.toHTML();
        }
        else if (string == null) {
            return '';
        }
        else if (!string) {
            return string + '';
        }
        // Force a string conversion as this will be done by the append regardless and
        // the regex test will do this transparently behind the scenes, causing issues if
        // an object's to string has escaped characters in it.
        string = '' + string;
    }
    if (!possible.test(string)) {
        return string;
    }
    return string.replace(badChars, escapeChar);
}
function isEmpty(value) {
    if (!value && value !== 0) {
        return true;
    }
    else if (isArray(value) && value.length === 0) {
        return true;
    }
    else {
        return false;
    }
}
function createFrame(object) {
    var frame = extend({}, object);
    frame._parent = object;
    return frame;
}
function blockParams(params, ids) {
    params.path = ids;
    return params;
}
function appendContextPath(contextPath, id) {
    return (contextPath ? contextPath + '.' : '') + id;
}


/***/ }),

/***/ "./node_modules/handlebars/runtime.js":
/*!********************************************!*\
  !*** ./node_modules/handlebars/runtime.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = __webpack_require__(/*! ./dist/cjs/handlebars.runtime */ "./node_modules/handlebars/dist/cjs/handlebars.runtime.js")['default'];


/***/ }),

/***/ "./src/assets/api-docs.json":
/*!**********************************!*\
  !*** ./src/assets/api-docs.json ***!
  \**********************************/
/*! exports provided: swagger, info, host, basePath, tags, consumes, produces, paths, definitions, default */
/***/ (function(module) {

module.exports = {"swagger":"2.0","info":{"description":"线索通IPORTAL API","version":"1.0","title":"LEAD-IPORTAL文档"},"host":"dev-test.jpushoa.com/v1/lead-iportal-server","basePath":"/","tags":[{"name":"customer-controller","description":"iportal客户管理"},{"name":"developer-client","description":"Developer Client"},{"name":"files-import-controller","description":"iportal线索导入管理"},{"name":"finance-controller","description":"iportal财务管理"}],"consumes":["application/json;charset=UTF-8"],"produces":["application/json;charset=UTF-8"],"paths":{"/customers":{"get":{"tags":["customer-controller"],"summary":"查询所有客户信息","operationId":"listUsingGET","parameters":[{"name":"dateEnd","in":"query","description":"结束日期，日期格式yyyy-MM-dd","required":false,"type":"string"},{"name":"dateEndValue","in":"query","required":false,"type":"string","format":"date-time"},{"name":"dateStart","in":"query","description":"开始日期，日期格式yyyy-MM-dd","required":false,"type":"string"},{"name":"dateStartValue","in":"query","required":false,"type":"string","format":"date-time"},{"name":"page","in":"query","description":"页码，从1开始","required":false,"type":"integer","format":"int32"},{"name":"search","in":"query","description":"搜索内容","required":false,"type":"string"},{"name":"size","in":"query","description":"每页数量，默认10条","required":false,"type":"integer","format":"int32","enum":[10,20,50,100]},{"name":"status","in":"query","description":"status","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/MsaResp«List«CustomerVO»»"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"post":{"tags":["customer-controller"],"summary":"创建客户","operationId":"createUsingPOST","parameters":[{"in":"body","name":"form","description":"form","required":true,"schema":{"$ref":"#/definitions/CustomerForm"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/MsaResp"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/customers/statics":{"get":{"tags":["customer-controller"],"summary":"查询客户统计信息","operationId":"staticsUsingGET","responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/MsaResp«CustomerStaticsVO»"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/customers/{customerId}/finance/balance":{"get":{"tags":["finance-controller"],"summary":"查询客户资金信息","operationId":"getAccountBalanceUsingGET","parameters":[{"name":"customerId","in":"path","description":"customerId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/MsaResp«double»"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/customers/{customerId}/finance/transfer":{"post":{"tags":["finance-controller"],"summary":"转入/转出客户资金","operationId":"transferAccountBalanceUsingPOST","parameters":[{"name":"customerId","in":"path","description":"customerId","required":true,"type":"integer","format":"int64"},{"in":"body","name":"form","description":"form","required":true,"schema":{"$ref":"#/definitions/TransferForm"}},{"name":"uid","in":"query","description":"uid","required":false,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/MsaResp"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/customers/{id}":{"get":{"tags":["customer-controller"],"summary":"查询客户信息","operationId":"getCustomerUsingGET","parameters":[{"name":"id","in":"path","description":"id","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/MsaResp«CustomerVO»"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"put":{"tags":["customer-controller"],"summary":"更新客户信息","operationId":"editCustomerUsingPUT","parameters":[{"in":"body","name":"form","description":"form","required":true,"schema":{"$ref":"#/definitions/CustomerForm"}},{"name":"id","in":"path","description":"id","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/MsaResp"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/addSubUser":{"post":{"tags":["developer-client"],"summary":"addSubUser","operationId":"addSubUserUsingPOST","parameters":[{"in":"body","name":"param0","description":"param0","required":true,"schema":{"$ref":"#/definitions/SubUserRegisterForm"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/APIResult"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/appInfo":{"get":{"tags":["developer-client"],"summary":"findAppInfoByDevIdAndAppName","operationId":"findAppInfoByDevIdAndAppNameUsingGET","parameters":[{"name":"devId","in":"query","description":"devId","required":true,"type":"integer","format":"int64"},{"name":"searchName","in":"query","description":"searchName","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/AppSearchResult"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"head":{"tags":["developer-client"],"summary":"findAppInfoByDevIdAndAppName","operationId":"findAppInfoByDevIdAndAppNameUsingHEAD","parameters":[{"name":"devId","in":"query","description":"devId","required":true,"type":"integer","format":"int64"},{"name":"searchName","in":"query","description":"searchName","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/AppSearchResult"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"post":{"tags":["developer-client"],"summary":"findAppInfoByDevIdAndAppName","operationId":"findAppInfoByDevIdAndAppNameUsingPOST","parameters":[{"name":"devId","in":"query","description":"devId","required":true,"type":"integer","format":"int64"},{"name":"searchName","in":"query","description":"searchName","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/AppSearchResult"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"put":{"tags":["developer-client"],"summary":"findAppInfoByDevIdAndAppName","operationId":"findAppInfoByDevIdAndAppNameUsingPUT","parameters":[{"name":"devId","in":"query","description":"devId","required":true,"type":"integer","format":"int64"},{"name":"searchName","in":"query","description":"searchName","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/AppSearchResult"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"delete":{"tags":["developer-client"],"summary":"findAppInfoByDevIdAndAppName","operationId":"findAppInfoByDevIdAndAppNameUsingDELETE","parameters":[{"name":"devId","in":"query","description":"devId","required":true,"type":"integer","format":"int64"},{"name":"searchName","in":"query","description":"searchName","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/AppSearchResult"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"options":{"tags":["developer-client"],"summary":"findAppInfoByDevIdAndAppName","operationId":"findAppInfoByDevIdAndAppNameUsingOPTIONS","parameters":[{"name":"devId","in":"query","description":"devId","required":true,"type":"integer","format":"int64"},{"name":"searchName","in":"query","description":"searchName","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/AppSearchResult"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"patch":{"tags":["developer-client"],"summary":"findAppInfoByDevIdAndAppName","operationId":"findAppInfoByDevIdAndAppNameUsingPATCH","parameters":[{"name":"devId","in":"query","description":"devId","required":true,"type":"integer","format":"int64"},{"name":"searchName","in":"query","description":"searchName","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/AppSearchResult"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false}},"/dev/changeEmail":{"get":{"tags":["developer-client"],"summary":"changeEmail","operationId":"changeEmailUsingGET","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"},{"name":"id","in":"query","description":"id","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/APIResult"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"head":{"tags":["developer-client"],"summary":"changeEmail","operationId":"changeEmailUsingHEAD","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"},{"name":"id","in":"query","description":"id","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/APIResult"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"post":{"tags":["developer-client"],"summary":"changeEmail","operationId":"changeEmailUsingPOST","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"},{"name":"id","in":"query","description":"id","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/APIResult"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"put":{"tags":["developer-client"],"summary":"changeEmail","operationId":"changeEmailUsingPUT","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"},{"name":"id","in":"query","description":"id","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/APIResult"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"delete":{"tags":["developer-client"],"summary":"changeEmail","operationId":"changeEmailUsingDELETE","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"},{"name":"id","in":"query","description":"id","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/APIResult"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"options":{"tags":["developer-client"],"summary":"changeEmail","operationId":"changeEmailUsingOPTIONS","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"},{"name":"id","in":"query","description":"id","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/APIResult"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"patch":{"tags":["developer-client"],"summary":"changeEmail","operationId":"changeEmailUsingPATCH","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"},{"name":"id","in":"query","description":"id","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/APIResult"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false}},"/dev/changeProfile":{"post":{"tags":["developer-client"],"summary":"changeProfile","operationId":"changeProfileUsingPOST","parameters":[{"name":"companyName","in":"query","required":false,"type":"string"},{"name":"contacter","in":"query","required":false,"type":"string"},{"name":"id","in":"query","description":"id","required":true,"type":"integer","format":"int64"},{"name":"mobile","in":"query","required":false,"type":"string"},{"name":"qq","in":"query","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/APIResult"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/changePwd":{"post":{"tags":["developer-client"],"summary":"changePwd","operationId":"changePwdUsingPOST","parameters":[{"name":"cfmpassword","in":"query","required":false,"type":"string"},{"name":"id","in":"query","description":"id","required":true,"type":"integer","format":"int64"},{"name":"newpassword","in":"query","required":false,"type":"string"},{"name":"password","in":"query","required":false,"type":"string"},{"name":"vcode","in":"query","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/APIResult"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/changePwdNew":{"post":{"tags":["developer-client"],"summary":"changePwdNew","operationId":"changePwdNewUsingPOST","parameters":[{"name":"devId","in":"query","required":false,"type":"integer","format":"int64"},{"name":"newpassword","in":"query","required":false,"type":"string"},{"name":"password","in":"query","required":false,"type":"string"},{"name":"token","in":"query","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/APIResult"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/countDevAuth":{"get":{"tags":["developer-client"],"summary":"countDevAuth","operationId":"countDevAuthUsingGET","parameters":[{"name":"devId","in":"query","description":"devId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"type":"integer","format":"int32"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/countDevAuthParam":{"post":{"tags":["developer-client"],"summary":"countDevAuth","operationId":"countDevAuthUsingPOST","parameters":[{"in":"body","name":"param0","description":"param0","required":false,"schema":{"$ref":"#/definitions/DevAuthListParam"}}],"responses":{"200":{"description":"OK","schema":{"type":"integer","format":"int32"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/devId/{devId}":{"get":{"tags":["developer-client"],"summary":"getDevById","operationId":"getDevByIdUsingGET","parameters":[{"name":"devId","in":"path","description":"devId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"head":{"tags":["developer-client"],"summary":"getDevById","operationId":"getDevByIdUsingHEAD","parameters":[{"name":"devId","in":"path","description":"devId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"post":{"tags":["developer-client"],"summary":"getDevById","operationId":"getDevByIdUsingPOST","parameters":[{"name":"devId","in":"path","description":"devId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"put":{"tags":["developer-client"],"summary":"getDevById","operationId":"getDevByIdUsingPUT","parameters":[{"name":"devId","in":"path","description":"devId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"delete":{"tags":["developer-client"],"summary":"getDevById","operationId":"getDevByIdUsingDELETE","parameters":[{"name":"devId","in":"path","description":"devId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"options":{"tags":["developer-client"],"summary":"getDevById","operationId":"getDevByIdUsingOPTIONS","parameters":[{"name":"devId","in":"path","description":"devId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"patch":{"tags":["developer-client"],"summary":"getDevById","operationId":"getDevByIdUsingPATCH","parameters":[{"name":"devId","in":"path","description":"devId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false}},"/dev/devKey/{devKey}":{"get":{"tags":["developer-client"],"summary":"getDevByDevKey","operationId":"getDevByDevKeyUsingGET","parameters":[{"name":"devKey","in":"path","description":"devKey","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"head":{"tags":["developer-client"],"summary":"getDevByDevKey","operationId":"getDevByDevKeyUsingHEAD","parameters":[{"name":"devKey","in":"path","description":"devKey","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"post":{"tags":["developer-client"],"summary":"getDevByDevKey","operationId":"getDevByDevKeyUsingPOST","parameters":[{"name":"devKey","in":"path","description":"devKey","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"put":{"tags":["developer-client"],"summary":"getDevByDevKey","operationId":"getDevByDevKeyUsingPUT","parameters":[{"name":"devKey","in":"path","description":"devKey","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"delete":{"tags":["developer-client"],"summary":"getDevByDevKey","operationId":"getDevByDevKeyUsingDELETE","parameters":[{"name":"devKey","in":"path","description":"devKey","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"options":{"tags":["developer-client"],"summary":"getDevByDevKey","operationId":"getDevByDevKeyUsingOPTIONS","parameters":[{"name":"devKey","in":"path","description":"devKey","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"patch":{"tags":["developer-client"],"summary":"getDevByDevKey","operationId":"getDevByDevKeyUsingPATCH","parameters":[{"name":"devKey","in":"path","description":"devKey","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false}},"/dev/devList":{"post":{"tags":["developer-client"],"summary":"devList","operationId":"devListUsingPOST","parameters":[{"name":"param0","in":"query","description":"param0","required":false,"type":"object"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/Developer"}}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/devListCount":{"post":{"tags":["developer-client"],"summary":"devListCount","operationId":"devListCountUsingPOST","parameters":[{"name":"param0","in":"query","description":"param0","required":false,"type":"object"}],"responses":{"200":{"description":"OK","schema":{"type":"integer","format":"int32"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/devName/{devName}":{"get":{"tags":["developer-client"],"summary":"getDevByDevName","operationId":"getDevByDevNameUsingGET","parameters":[{"name":"devName","in":"path","description":"devName","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"head":{"tags":["developer-client"],"summary":"getDevByDevName","operationId":"getDevByDevNameUsingHEAD","parameters":[{"name":"devName","in":"path","description":"devName","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"post":{"tags":["developer-client"],"summary":"getDevByDevName","operationId":"getDevByDevNameUsingPOST","parameters":[{"name":"devName","in":"path","description":"devName","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"put":{"tags":["developer-client"],"summary":"getDevByDevName","operationId":"getDevByDevNameUsingPUT","parameters":[{"name":"devName","in":"path","description":"devName","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"delete":{"tags":["developer-client"],"summary":"getDevByDevName","operationId":"getDevByDevNameUsingDELETE","parameters":[{"name":"devName","in":"path","description":"devName","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"options":{"tags":["developer-client"],"summary":"getDevByDevName","operationId":"getDevByDevNameUsingOPTIONS","parameters":[{"name":"devName","in":"path","description":"devName","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"patch":{"tags":["developer-client"],"summary":"getDevByDevName","operationId":"getDevByDevNameUsingPATCH","parameters":[{"name":"devName","in":"path","description":"devName","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false}},"/dev/email":{"get":{"tags":["developer-client"],"summary":"getDevByEmail","operationId":"getDevByEmailUsingGET","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"head":{"tags":["developer-client"],"summary":"getDevByEmail","operationId":"getDevByEmailUsingHEAD","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"post":{"tags":["developer-client"],"summary":"getDevByEmail","operationId":"getDevByEmailUsingPOST","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"put":{"tags":["developer-client"],"summary":"getDevByEmail","operationId":"getDevByEmailUsingPUT","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"delete":{"tags":["developer-client"],"summary":"getDevByEmail","operationId":"getDevByEmailUsingDELETE","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"options":{"tags":["developer-client"],"summary":"getDevByEmail","operationId":"getDevByEmailUsingOPTIONS","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"patch":{"tags":["developer-client"],"summary":"getDevByEmail","operationId":"getDevByEmailUsingPATCH","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false}},"/dev/getDevAuthByDevId":{"get":{"tags":["developer-client"],"summary":"getDevAuthByDevId","operationId":"getDevAuthByDevIdUsingGET","parameters":[{"name":"devId","in":"query","description":"devId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/DevAuth"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/getPhoneNumberByAppkey":{"get":{"tags":["developer-client"],"summary":"getPhoneNumberByAppkey","operationId":"getPhoneNumberByAppkeyUsingGET","parameters":[{"name":"appkey","in":"query","description":"appkey","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/getSubUserList":{"get":{"tags":["developer-client"],"summary":"getSubUserList","operationId":"getSubUserListUsingGET","parameters":[{"name":"parentId","in":"query","description":"parentId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/Developer"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/getTotalDevCount":{"get":{"tags":["developer-client"],"summary":"getTotalDevCount","operationId":"getTotalDevCountUsingGET","parameters":[{"name":"month","in":"query","description":"month","required":true,"type":"integer","format":"int32"}],"responses":{"200":{"description":"OK","schema":{"type":"integer","format":"int32"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/insertDevAuth":{"post":{"tags":["developer-client"],"summary":"insertDevAuth","operationId":"insertDevAuthUsingPOST","parameters":[{"in":"body","name":"param0","description":"param0","required":true,"schema":{"$ref":"#/definitions/DevAuth"}}],"responses":{"200":{"description":"OK","schema":{"type":"integer","format":"int32"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/listAllEmail":{"get":{"tags":["developer-client"],"summary":"listAllEmail","operationId":"listAllEmailUsingGET","parameters":[{"name":"end","in":"query","description":"end","required":false,"type":"integer","format":"int32"},{"name":"start","in":"query","description":"start","required":false,"type":"integer","format":"int32"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"type":"string"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/listDevAuthPage":{"post":{"tags":["developer-client"],"summary":"listDevAuthPage","operationId":"listDevAuthPageUsingPOST","parameters":[{"in":"body","name":"param0","description":"param0","required":false,"schema":{"$ref":"#/definitions/DevAuthListParam"}}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/DevAuth"}}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/listNewDeveloper":{"get":{"tags":["developer-client"],"summary":"listNewDeveloper","operationId":"listNewDeveloperUsingGET","parameters":[{"name":"begindate","in":"query","description":"begindate","required":true,"type":"integer","format":"int32"},{"name":"enddate","in":"query","description":"enddate","required":true,"type":"integer","format":"int32"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/Map«string,object»"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/permission/update":{"post":{"tags":["developer-client"],"summary":"updateDevPermission","operationId":"updateDevPermissionUsingPOST","parameters":[{"in":"body","name":"param0","description":"param0","required":true,"schema":{"$ref":"#/definitions/Permission"}}],"responses":{"200":{"description":"OK","schema":{"type":"integer","format":"int32"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/queryMonthDevIds":{"get":{"tags":["developer-client"],"summary":"queryMonthDevIds","operationId":"queryMonthDevIdsUsingGET","parameters":[{"name":"month","in":"query","description":"month","required":true,"type":"integer","format":"int32"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"type":"integer","format":"int32"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/register":{"post":{"tags":["developer-client"],"summary":"register","operationId":"registerUsingPOST","parameters":[{"name":"companyName","in":"query","required":false,"type":"string"},{"name":"contacter","in":"query","required":false,"type":"string"},{"name":"email","in":"query","required":false,"type":"string"},{"name":"forceLogin","in":"query","required":false,"type":"integer","format":"int32"},{"name":"from","in":"query","required":false,"type":"string"},{"name":"ip","in":"query","required":false,"type":"string"},{"name":"mobile","in":"query","required":false,"type":"string"},{"name":"password","in":"query","required":false,"type":"string"},{"name":"qq","in":"query","required":false,"type":"string"},{"name":"userName","in":"query","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Developer"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/removeSubUser":{"post":{"tags":["developer-client"],"summary":"removeSubUser","operationId":"removeSubUserUsingPOST","parameters":[{"name":"subUserId","in":"query","description":"subUserId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"type":"integer","format":"int32"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/search":{"get":{"tags":["developer-client"],"summary":"searchByEmail","operationId":"searchByEmailUsingGET","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/Developer"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"head":{"tags":["developer-client"],"summary":"searchByEmail","operationId":"searchByEmailUsingHEAD","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/Developer"}}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"post":{"tags":["developer-client"],"summary":"searchByEmail","operationId":"searchByEmailUsingPOST","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/Developer"}}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"put":{"tags":["developer-client"],"summary":"searchByEmail","operationId":"searchByEmailUsingPUT","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/Developer"}}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"delete":{"tags":["developer-client"],"summary":"searchByEmail","operationId":"searchByEmailUsingDELETE","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/Developer"}}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"options":{"tags":["developer-client"],"summary":"searchByEmail","operationId":"searchByEmailUsingOPTIONS","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/Developer"}}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"patch":{"tags":["developer-client"],"summary":"searchByEmail","operationId":"searchByEmailUsingPATCH","parameters":[{"name":"email","in":"query","description":"email","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/Developer"}}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false}},"/dev/updateDevAuth":{"post":{"tags":["developer-client"],"summary":"updateDevAuth","operationId":"updateDevAuthUsingPOST","parameters":[{"in":"body","name":"param0","description":"param0","required":true,"schema":{"$ref":"#/definitions/DevAuth"}}],"responses":{"200":{"description":"OK","schema":{"type":"integer","format":"int32"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/updateDevForceType":{"post":{"tags":["developer-client"],"summary":"updateDevForceType","operationId":"updateDevForceTypeUsingPOST","parameters":[{"name":"devId","in":"query","description":"devId","required":true,"type":"integer","format":"int64"},{"name":"forceType","in":"query","description":"forceType","required":true,"type":"string","enum":["NONE","SMS","WECHAT","FORCE"]}],"responses":{"200":{"description":"OK","schema":{"type":"integer","format":"int32"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/updateDeveloper":{"post":{"tags":["developer-client"],"summary":"updateDeveloper","operationId":"updateDeveloperUsingPOST","parameters":[{"name":"clientStatus","in":"query","required":false,"type":"string"},{"name":"companyName","in":"query","required":false,"type":"string"},{"name":"conferSure","in":"query","required":false,"type":"integer","format":"int32"},{"name":"config","in":"query","required":false,"type":"string"},{"name":"configObject.api_admin.enabled","in":"query","required":false,"type":"boolean"},{"name":"configObject.api_admin.limit","in":"query","required":false,"type":"integer","format":"int32"},{"name":"configObject.exchange.enabled","in":"query","required":false,"type":"boolean"},{"name":"configObject.push_config.enabled","in":"query","required":false,"type":"boolean"},{"name":"configObject.segment.enabled","in":"query","required":false,"type":"boolean"},{"name":"contacter","in":"query","required":false,"type":"string"},{"name":"devAuthCompanyName","in":"query","required":false,"type":"string"},{"name":"devAuthEmail","in":"query","required":false,"type":"string"},{"name":"devAuthName","in":"query","required":false,"type":"string"},{"name":"devAuthPhoneNum","in":"query","required":false,"type":"string"},{"name":"devKey","in":"query","required":false,"type":"string"},{"name":"devSecret","in":"query","required":false,"type":"string"},{"name":"email","in":"query","required":false,"type":"string"},{"name":"emailCode","in":"query","required":false,"type":"string"},{"name":"emailFlag","in":"query","required":false,"type":"integer","format":"int32"},{"name":"forceType","in":"query","required":false,"type":"integer","format":"int32"},{"name":"id","in":"query","required":false,"type":"integer","format":"int64"},{"name":"ipAddress","in":"query","required":false,"type":"string"},{"name":"isActivation","in":"query","required":false,"type":"integer","format":"int32"},{"name":"isEnabled","in":"query","required":false,"type":"integer","format":"int32"},{"name":"lastUpdateTime","in":"query","required":false,"type":"string","format":"date-time"},{"name":"lastVisitPlatform","in":"query","required":false,"type":"string"},{"name":"loginInfo","in":"query","required":false,"type":"string"},{"name":"loginToken","in":"query","required":false,"type":"string"},{"name":"loginTokenTime","in":"query","required":false,"type":"string","format":"date-time"},{"name":"loginType","in":"query","required":false,"type":"string"},{"name":"loginValue","in":"query","required":false,"type":"string"},{"name":"loginVerify","in":"query","required":false,"type":"integer","format":"int32"},{"name":"mobile","in":"query","required":false,"type":"string"},{"name":"parentId","in":"query","required":false,"type":"integer","format":"int64"},{"name":"parentOrCurrentId","in":"query","required":false,"type":"integer","format":"int64"},{"name":"password","in":"query","required":false,"type":"string"},{"name":"payRate","in":"query","required":false,"type":"integer","format":"int32"},{"name":"prov","in":"query","required":false,"type":"string"},{"name":"qq","in":"query","required":false,"type":"string"},{"name":"regDate","in":"query","required":false,"type":"string"},{"name":"registerSource","in":"query","required":false,"type":"string"},{"name":"username","in":"query","required":false,"type":"string"},{"name":"verifyPhone","in":"query","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"integer","format":"int32"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/updateDeveloperWithSource":{"post":{"tags":["developer-client"],"summary":"updateDeveloperWithSource","operationId":"updateDeveloperWithSourceUsingPOST","parameters":[{"name":"fromIportal","in":"query","description":"fromIportal","required":true,"type":"boolean"},{"in":"body","name":"param0","description":"param0","required":true,"schema":{"$ref":"#/definitions/Developer"}}],"responses":{"200":{"description":"OK","schema":{"type":"integer","format":"int32"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/updateSubUserPassword":{"post":{"tags":["developer-client"],"summary":"updateSubUserPassword","operationId":"updateSubUserPasswordUsingPOST","parameters":[{"name":"password","in":"query","description":"password","required":true,"type":"string"},{"name":"subUserId","in":"query","description":"subUserId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"type":"integer","format":"int32"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/dev/userInfo/{devId}":{"get":{"tags":["developer-client"],"summary":"findUserInfoByDevId","operationId":"findUserInfoByDevIdUsingGET","parameters":[{"name":"devId","in":"path","description":"devId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/UserInfo"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"head":{"tags":["developer-client"],"summary":"findUserInfoByDevId","operationId":"findUserInfoByDevIdUsingHEAD","parameters":[{"name":"devId","in":"path","description":"devId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/UserInfo"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"post":{"tags":["developer-client"],"summary":"findUserInfoByDevId","operationId":"findUserInfoByDevIdUsingPOST","parameters":[{"name":"devId","in":"path","description":"devId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/UserInfo"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"put":{"tags":["developer-client"],"summary":"findUserInfoByDevId","operationId":"findUserInfoByDevIdUsingPUT","parameters":[{"name":"devId","in":"path","description":"devId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/UserInfo"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"delete":{"tags":["developer-client"],"summary":"findUserInfoByDevId","operationId":"findUserInfoByDevIdUsingDELETE","parameters":[{"name":"devId","in":"path","description":"devId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/UserInfo"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"options":{"tags":["developer-client"],"summary":"findUserInfoByDevId","operationId":"findUserInfoByDevIdUsingOPTIONS","parameters":[{"name":"devId","in":"path","description":"devId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/UserInfo"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false},"patch":{"tags":["developer-client"],"summary":"findUserInfoByDevId","operationId":"findUserInfoByDevIdUsingPATCH","parameters":[{"name":"devId","in":"path","description":"devId","required":true,"type":"integer","format":"int64"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/UserInfo"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false}},"/downloadUrl":{"get":{"tags":["files-import-controller"],"summary":"获取私有下载链接","operationId":"getPrivateDownloadUrlUsingGET","parameters":[{"name":"url","in":"query","description":"url","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/MsaResp«object»"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/finance":{"get":{"tags":["finance-controller"],"summary":"查询所有客户的资金信息","operationId":"listUsingGET_2","parameters":[{"name":"page","in":"query","description":"页码，从1开始","required":false,"type":"integer","format":"int32"},{"name":"search","in":"query","description":"搜索内容","required":false,"type":"string"},{"name":"size","in":"query","description":"每页数量，默认10条","required":false,"type":"integer","format":"int32","enum":[10,20,50,100]}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/MsaResp«List«FinanceManageVO»»"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/finance/logs":{"get":{"tags":["finance-controller"],"summary":"查询所有客户的财务记录","operationId":"getFinanceRecordsUsingGET","parameters":[{"name":"dateEnd","in":"query","description":"结束日期，日期格式yyyy-MM-dd","required":false,"type":"string"},{"name":"dateEndValue","in":"query","required":false,"type":"string","format":"date-time"},{"name":"dateStart","in":"query","description":"开始日期，日期格式yyyy-MM-dd","required":false,"type":"string"},{"name":"dateStartValue","in":"query","required":false,"type":"string","format":"date-time"},{"name":"operTypes","in":"query","description":"操作类型","required":false,"type":"array","items":{"type":"string","enum":["IN","OUT"]},"collectionFormat":"multi","default":"空","enum":["IN","OUT"]},{"name":"page","in":"query","description":"页码，从1开始","required":false,"type":"integer","format":"int32"},{"name":"search","in":"query","description":"search","required":false,"type":"string"},{"name":"size","in":"query","description":"每页数量，默认10条","required":false,"type":"integer","format":"int32","enum":[10,20,50,100]}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/MsaResp«List«ChangeLogsVO»»"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/leads/files":{"get":{"tags":["files-import-controller"],"summary":"查询线索导入记录","operationId":"listUsingGET_1","parameters":[{"name":"page","in":"query","description":"页码，从1开始","required":false,"type":"integer","format":"int32"},{"name":"search","in":"query","description":"搜索内容","required":false,"type":"string"},{"name":"size","in":"query","description":"每页数量，默认10条","required":false,"type":"integer","format":"int32","enum":[10,20,50,100]}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/MsaResp"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false},"post":{"tags":["files-import-controller"],"summary":"导入线索文件","operationId":"createUsingPOST_1","parameters":[{"in":"body","name":"form","description":"form","required":true,"schema":{"$ref":"#/definitions/FileImportForm"}},{"in":"body","name":"uid","description":"uid","required":false,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/MsaResp"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/leads/files/{id}":{"delete":{"tags":["files-import-controller"],"summary":"删除线索导入记录","operationId":"deleteUsingDELETE","parameters":[{"name":"id","in":"path","description":"id","required":true,"type":"integer","format":"int64"},{"in":"body","name":"uid","description":"uid","required":false,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/MsaResp"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"deprecated":false}},"/qiniu/upload":{"get":{"tags":["files-import-controller"],"summary":"获取七牛上传链接和token","operationId":"getUploadUsingGET","parameters":[{"name":"encrypt","in":"query","description":"encrypt","required":false,"type":"boolean","default":false}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/MsaResp«object»"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}},"/users/search":{"get":{"tags":["customer-controller"],"summary":"根据邮箱搜索用户","operationId":"getJiGuangUserByMailUsingGET","parameters":[{"name":"email","in":"query","description":"邮箱","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/MsaResp«EmailValidateInfo»"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"deprecated":false}}},"definitions":{"APIResult":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"data":{"type":"object"},"message":{"type":"string"}},"title":"APIResult"},"ApiAdmin":{"type":"object","properties":{"enabled":{"type":"boolean"},"limit":{"type":"integer","format":"int32"}},"title":"ApiAdmin"},"AppBase":{"type":"object","properties":{"appKey":{"type":"string"},"appRate":{"type":"integer","format":"int32"},"appleVerifyErrcode":{"type":"integer","format":"int32"},"appleVerifyTestErrcode":{"type":"integer","format":"int32"},"certificateFileName":{"type":"string"},"createTime":{"type":"string","format":"date-time"},"enableFlag":{"type":"integer","format":"int32"},"iosKey":{"type":"integer","format":"int32"},"isVipApp":{"type":"integer","format":"int32"},"name":{"type":"string"},"pkg":{"type":"string"},"platform":{"type":"string"},"proVerifyCode":{"type":"integer","format":"int32"},"richpushPmsnState":{"type":"integer","format":"int32"},"stage":{"type":"integer","format":"int32"},"testVerifyCode":{"type":"integer","format":"int32"}},"title":"AppBase"},"AppGroupBaseVo":{"type":"object","properties":{"appGroupDesc":{"type":"string"},"appGroupId":{"type":"integer","format":"int32"},"appGroupKey":{"type":"string"},"appGroupName":{"type":"string"},"defaultFlag":{"type":"integer","format":"int32"}},"title":"AppGroupBaseVo"},"AppSearchResult":{"type":"object","properties":{"appGroups":{"type":"array","items":{"$ref":"#/definitions/AppGroupBaseVo"}},"apps":{"type":"array","items":{"$ref":"#/definitions/AppBase"}}},"title":"AppSearchResult"},"ChangeLogsVO":{"type":"object","properties":{"amount":{"type":"number","format":"double","description":"金额"},"customerId":{"type":"integer","format":"int64","description":"客户ID"},"customerName":{"type":"string","description":"客户名称"},"id":{"type":"integer","format":"int64"},"operType":{"type":"string","description":"操作类型"},"operateTime":{"description":"操作日期","$ref":"#/definitions/Timestamp"},"remark":{"type":"string","description":"备注"}},"title":"ChangeLogsVO"},"CustomerForm":{"type":"object","properties":{"address":{"type":"string","description":"详细地址"},"area":{"type":"string","description":"区"},"city":{"type":"string","description":"市"},"email":{"type":"string","description":"联系人邮箱"},"name":{"type":"string","description":"客户名称"},"province":{"type":"string","description":"省"},"uid":{"type":"integer","format":"int64","description":"uid"},"username":{"type":"string","description":"用户名"}},"title":"CustomerForm"},"CustomerStaticsVO":{"type":"object","properties":{"allAdded":{"type":"integer","format":"int32","description":"累计添加"},"todayAdded":{"type":"integer","format":"int32","description":"今日添加"}},"title":"CustomerStaticsVO"},"CustomerVO":{"type":"object","properties":{"address":{"type":"string","description":"详细地址"},"amount":{"type":"number","format":"double","description":"账户金额"},"area":{"type":"string","description":"区"},"city":{"type":"string","description":"市"},"createTime":{"description":"创建时间","$ref":"#/definitions/Timestamp"},"email":{"type":"string","description":"联系人邮箱"},"id":{"type":"integer","format":"int64"},"name":{"type":"string","description":"客户名称"},"province":{"type":"string","description":"省"}},"title":"CustomerVO"},"DevAuth":{"type":"object","properties":{"auditUserName":{"type":"string"},"certificateType":{"type":"string"},"createDate":{"type":"string"},"devId":{"type":"string"},"devName":{"type":"string"},"devType":{"type":"integer","format":"int32"},"email":{"type":"string"},"id":{"type":"integer","format":"int32"},"idBackImg":{"type":"string"},"idFaceImg":{"type":"string"},"idHandImg":{"type":"string"},"idNum":{"type":"string"},"licenceImg":{"type":"string"},"phoneNum":{"type":"string"},"realName":{"type":"string"},"refuseReason":{"type":"string"},"remark":{"type":"string"},"sessionId":{"type":"string"},"status":{"type":"integer","format":"int32"}},"title":"DevAuth"},"DevAuthListParam":{"type":"object","properties":{"devId":{"type":"integer","format":"int64"},"devName":{"type":"string"},"devType":{"type":"integer","format":"int32"},"endTime":{"type":"string","format":"date-time"},"pageIndex":{"type":"integer","format":"int32"},"pageSize":{"type":"integer","format":"int32"},"phoneNum":{"type":"string"},"startTime":{"type":"string","format":"date-time"},"status":{"type":"integer","format":"int32"}},"title":"DevAuthListParam"},"Developer":{"type":"object","properties":{"clientStatus":{"type":"string"},"companyName":{"type":"string"},"conferSure":{"type":"integer","format":"int32"},"configObject":{"$ref":"#/definitions/UserConfig"},"contacter":{"type":"string"},"devAuthCompanyName":{"type":"string"},"devAuthEmail":{"type":"string"},"devAuthName":{"type":"string"},"devAuthPhoneNum":{"type":"string"},"devKey":{"type":"string"},"devSecret":{"type":"string"},"email":{"type":"string"},"emailCode":{"type":"string"},"emailFlag":{"type":"integer","format":"int32"},"forceType":{"type":"integer","format":"int32"},"id":{"type":"integer","format":"int64"},"ipAddress":{"type":"string"},"isActivation":{"type":"integer","format":"int32"},"isEnabled":{"type":"integer","format":"int32"},"lastUpdateTime":{"type":"string","format":"date-time"},"lastVisitPlatform":{"type":"string"},"loginInfo":{"type":"string"},"loginToken":{"type":"string"},"loginTokenTime":{"type":"string","format":"date-time"},"loginType":{"type":"string"},"loginValue":{"type":"string"},"loginVerify":{"type":"integer","format":"int32"},"mobile":{"type":"string"},"parentId":{"type":"integer","format":"int64"},"password":{"type":"string"},"payRate":{"type":"integer","format":"int32"},"prov":{"type":"string"},"qq":{"type":"string"},"regDate":{"type":"string"},"registerSource":{"type":"string"},"username":{"type":"string"},"verifyPhone":{"type":"string"}},"title":"Developer"},"EmailValidateInfo":{"type":"object","properties":{"bindCustom":{"type":"boolean"},"register":{"type":"boolean"},"userInfo":{"type":"object","description":"开发者信息","additionalProperties":{"type":"string"}}},"title":"EmailValidateInfo"},"FileImportForm":{"type":"object","properties":{"url":{"type":"string","description":"文件链接"}},"title":"FileImportForm"},"FinanceManageVO":{"type":"object","properties":{"amount":{"type":"number","format":"double","description":"账户金额"},"createTime":{"description":"创建日期","$ref":"#/definitions/Timestamp"},"customerId":{"type":"integer","format":"int64","description":"客户id"},"customerName":{"type":"string","description":"客户姓名"},"id":{"type":"integer","format":"int64"}},"title":"FinanceManageVO"},"MsaResp":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"data":{"type":"object"},"message":{"type":"string"},"ok":{"type":"boolean"},"pageData":{"$ref":"#/definitions/PageData"}},"title":"MsaResp"},"MsaResp«CustomerStaticsVO»":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"data":{"$ref":"#/definitions/CustomerStaticsVO"},"message":{"type":"string"},"ok":{"type":"boolean"},"pageData":{"$ref":"#/definitions/PageData"}},"title":"MsaResp«CustomerStaticsVO»"},"MsaResp«CustomerVO»":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"data":{"$ref":"#/definitions/CustomerVO"},"message":{"type":"string"},"ok":{"type":"boolean"},"pageData":{"$ref":"#/definitions/PageData"}},"title":"MsaResp«CustomerVO»"},"MsaResp«EmailValidateInfo»":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"data":{"$ref":"#/definitions/EmailValidateInfo"},"message":{"type":"string"},"ok":{"type":"boolean"},"pageData":{"$ref":"#/definitions/PageData"}},"title":"MsaResp«EmailValidateInfo»"},"MsaResp«List«ChangeLogsVO»»":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"data":{"type":"array","items":{"$ref":"#/definitions/ChangeLogsVO"}},"message":{"type":"string"},"ok":{"type":"boolean"},"pageData":{"$ref":"#/definitions/PageData"}},"title":"MsaResp«List«ChangeLogsVO»»"},"MsaResp«List«CustomerVO»»":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"data":{"type":"array","items":{"$ref":"#/definitions/CustomerVO"}},"message":{"type":"string"},"ok":{"type":"boolean"},"pageData":{"$ref":"#/definitions/PageData"}},"title":"MsaResp«List«CustomerVO»»"},"MsaResp«List«FinanceManageVO»»":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"data":{"type":"array","items":{"$ref":"#/definitions/FinanceManageVO"}},"message":{"type":"string"},"ok":{"type":"boolean"},"pageData":{"$ref":"#/definitions/PageData"}},"title":"MsaResp«List«FinanceManageVO»»"},"MsaResp«double»":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"data":{"type":"number","format":"double"},"message":{"type":"string"},"ok":{"type":"boolean"},"pageData":{"$ref":"#/definitions/PageData"}},"title":"MsaResp«double»"},"MsaResp«object»":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"data":{"type":"object"},"message":{"type":"string"},"ok":{"type":"boolean"},"pageData":{"$ref":"#/definitions/PageData"}},"title":"MsaResp«object»"},"PageData":{"type":"object","properties":{"totalNumber":{"type":"integer","format":"int64"},"totalPage":{"type":"integer","format":"int32"}},"title":"PageData"},"Permission":{"type":"object","properties":{"ad":{"type":"integer","format":"int32"},"antiFraud":{"type":"integer","format":"int32"},"devId":{"type":"integer","format":"int64"},"iapp":{"type":"integer","format":"int32"},"im":{"type":"integer","format":"int32"},"izone":{"type":"integer","format":"int32"},"push":{"type":"integer","format":"int32"},"sms":{"type":"integer","format":"int32"}},"title":"Permission"},"SubUserRegisterForm":{"type":"object","properties":{"contacter":{"type":"string"},"email":{"type":"string"},"parentId":{"type":"integer","format":"int64"},"password":{"type":"string"},"username":{"type":"string"}},"title":"SubUserRegisterForm"},"SwitchConfig":{"type":"object","properties":{"enabled":{"type":"boolean"}},"title":"SwitchConfig"},"Timestamp":{"type":"object","properties":{"date":{"type":"integer","format":"int32"},"day":{"type":"integer","format":"int32"},"hours":{"type":"integer","format":"int32"},"minutes":{"type":"integer","format":"int32"},"month":{"type":"integer","format":"int32"},"nanos":{"type":"integer","format":"int32"},"seconds":{"type":"integer","format":"int32"},"time":{"type":"integer","format":"int64"},"timezoneOffset":{"type":"integer","format":"int32"},"year":{"type":"integer","format":"int32"}},"title":"Timestamp"},"TransferForm":{"type":"object","properties":{"amount":{"type":"number","format":"double","description":"转账金额，单位：元"},"operType":{"type":"string","description":"操作类型","enum":["IN","OUT"]}},"title":"TransferForm"},"UserConfig":{"type":"object","properties":{"api_admin":{"$ref":"#/definitions/ApiAdmin"},"exchange":{"$ref":"#/definitions/SwitchConfig"},"push_config":{"$ref":"#/definitions/SwitchConfig"},"segment":{"$ref":"#/definitions/SwitchConfig"}},"title":"UserConfig"},"UserInfo":{"type":"object","properties":{"dev":{"$ref":"#/definitions/Developer"},"isSubUser":{"type":"boolean"},"unreadCount":{"type":"integer","format":"int32"}},"title":"UserInfo"}}};

/***/ }),

/***/ "./src/hbsTemplates/t.ts.handlebars":
/*!******************************************!*\
  !*** ./src/hbsTemplates/t.ts.handlebars ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ./node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression(container.lambda(depth0, depth0))
    + ", ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "    /**\n     * "
    + alias4(((helper = (helper = helpers.functonDesc || (depth0 != null ? depth0.functonDesc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"functonDesc","hash":{},"data":data}) : helper)))
    + "\n     */\n    "
    + alias4(((helper = (helper = helpers.functonName || (depth0 != null ? depth0.functonName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"functonName","hash":{},"data":data}) : helper)))
    + "(data: {\n";
  stack1 = ((helper = (helper = helpers.parameterList || (depth0 != null ? depth0.parameterList : depth0)) != null ? helper : alias2),(options={"name":"parameterList","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.parameterList) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    }): Promise<"
    + alias4(((helper = (helper = helpers.responseType || (depth0 != null ? depth0.responseType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"responseType","hash":{},"data":data}) : helper)))
    + "> {\n        return request(`"
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "`, {\n            method: '"
    + alias4(((helper = (helper = helpers.method || (depth0 != null ? depth0.method : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"method","hash":{},"data":data}) : helper)))
    + "',\n        }, data);\n    }\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        "
    + alias4(((helper = (helper = helpers.parameterName || (depth0 != null ? depth0.parameterName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"parameterName","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ": "
    + alias4(((helper = (helper = helpers.parameterType || (depth0 != null ? depth0.parameterType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"parameterType","hash":{},"data":data}) : helper)))
    + ","
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.parameterDesc : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + alias4(((helper = (helper = helpers.parameterDesc || (depth0 != null ? depth0.parameterDesc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"parameterDesc","hash":{},"data":data}) : helper)))
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "?";
},"7":function(container,depth0,helpers,partials,data) {
    return " // ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, alias5=container.escapeExpression, buffer = 
  "import request from '../util/request';\nimport { ";
  stack1 = ((helper = (helper = helpers.importList || (depth0 != null ? depth0.importList : depth0)) != null ? helper : alias2),(options={"name":"importList","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.importList) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " } from './type';\n/**\n * "
    + alias5(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data}) : helper)))
    + "\n */\nexport class "
    + alias5(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + " {\n";
  stack1 = ((helper = (helper = helpers.fnList || (depth0 != null ? depth0.fnList : depth0)) != null ? helper : alias2),(options={"name":"fnList","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.fnList) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "}\n";
},"useData":true});

/***/ }),

/***/ "./src/hbsTemplates/type.ts.handlebars":
/*!*********************************************!*\
  !*** ./src/hbsTemplates/type.ts.handlebars ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ./node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", buffer = 
  "export interface "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " {\n";
  stack1 = ((helper = (helper = helpers.objList || (depth0 != null ? depth0.objList : depth0)) != null ? helper : alias2),(options={"name":"objList","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.objList) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "}\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    "
    + alias4(((helper = (helper = helpers.keyName || (depth0 != null ? depth0.keyName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"keyName","hash":{},"data":data}) : helper)))
    + ": "
    + alias4(((helper = (helper = helpers.keyType || (depth0 != null ? depth0.keyType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"keyType","hash":{},"data":data}) : helper)))
    + "; // "
    + alias4(((helper = (helper = helpers.keyDesc || (depth0 != null ? depth0.keyDesc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"keyDesc","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.typeList || (depth0 != null ? depth0.typeList : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"typeList","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.typeList) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

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
 * Last Modified: Tuesday, October 9th 2018, 12:34:21 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */
Object.defineProperty(exports, "__esModule", { value: true });
// import * as Handlebars from 'handlebars';
var fs = __webpack_require__(/*! fs */ "fs");
var path = __webpack_require__(/*! path */ "path");
var json = __webpack_require__(/*! ./assets/api-docs.json */ "./src/assets/api-docs.json");
var tt = __webpack_require__(/*! ./hbsTemplates/t.ts.handlebars */ "./src/hbsTemplates/t.ts.handlebars");
var typet = __webpack_require__(/*! ./hbsTemplates/type.ts.handlebars */ "./src/hbsTemplates/type.ts.handlebars");
var src = 'out';
var typeMap = {
    integer: 'number'
};
var typeList = [];
for (var key in json.definitions) {
    var obj = json.definitions[key];
    var temp = {};
    temp.title = obj.title.replace(/«|»/g, '');
    temp.objList = [];
    typeList.push(temp);
    for (var key2 in obj.properties) {
        var element = obj.properties[key2];
        if (element.$ref) {
            var ref = element.$ref;
            temp.objList.push({
                keyName: key2,
                keyType: ref.split('/')[ref.split('/').length - 1],
                keyDesc: element.description,
            });
        }
        else {
            if (element.type === 'array') {
                var ref = element.items.$ref;
                temp.objList.push({
                    keyName: key2,
                    keyType: ref.split('/')[ref.split('/').length - 1] + '[]',
                    keyDesc: element.description,
                });
            }
            else {
                temp.objList.push({
                    keyName: key2,
                    keyType: typeMap[element.type] || element.type,
                    keyDesc: element.description,
                });
            }
        }
    }
}
var res = [];
json.tags.forEach(function (tag) {
    var temp = {};
    temp.desc = tag.description;
    temp.className = tag.name.split('-').map(function (x) { return x.slice(0, 1).toUpperCase() + x.slice(1); }).join('');
    temp.fileName = tag.name.split('-')[0] + '.service';
    temp.fnList = [];
    temp.importList = new Set();
    for (var key in json.paths) {
        var obj = json.paths[key];
        var _loop_1 = function (key2) {
            var element = obj[key2];
            if (element.tags.includes(tag.name)) {
                var parameters_1 = [];
                element.parameters && element.parameters.forEach(function (item) {
                    if (item.in === 'query' || item.in === 'path') {
                        var type = typeMap[item.type] || item.type;
                        if (type === 'array') {
                            type = item.items.type + '[]';
                        }
                        var name = item.name.indexOf('.') > -1 ? item.name.split('.').join('') : item.name;
                        parameters_1.push({
                            parameterName: name,
                            parameterType: type,
                            parameterDesc: item.description,
                            required: item.required,
                        });
                    }
                    else if (item.in === 'body') {
                        // console.log(item)
                        var type_1;
                        if (item.schema.$ref) {
                            type_1 = item.schema.$ref.replace('#/definitions/', '');
                            var q = typeList.find(function (x) { return x.title === type_1; });
                            // console.log(q);
                            q.objList.forEach(function (item2) {
                                if (item2.keyType !== item2.keyType.toLocaleLowerCase()) {
                                    temp.importList.add(item2.keyType);
                                }
                                parameters_1.push({
                                    parameterName: item2.keyName,
                                    parameterType: item2.keyType,
                                    parameterDesc: item2.keyDesc,
                                    required: true,
                                });
                            });
                            // temp.importList.add(type);
                        }
                        else {
                            type_1 = typeMap[item.schema.type] || item.type;
                            var name = item.name.indexOf('.') > -1 ? item.name.split('.').join('') : item.name;
                            parameters_1.push({
                                parameterName: name,
                                parameterType: type_1,
                                parameterDesc: item.description,
                                required: item.required,
                            });
                        }
                    }
                });
                var responseType = void 0;
                if (element.responses['200'].schema.$ref != null) {
                    var ref = element.responses['200'].schema.$ref.replace('#/definitions/', '');
                    responseType = ref.replace(/«|»/g, '');
                    temp.importList.add(responseType);
                }
                else {
                    responseType = 'any';
                }
                // let ref = element.responses['200'].schema.$ref.replace('#/definitions/', '');
                // let responseType = ref.replace(/«|»/g, '');
                // temp.importList.add(responseType);
                temp.fnList.push({
                    functonName: "" + key2 + key.replace(/{(\w+)}/g, function (x, a) {
                        return 'By' + a.slice(0, 1).toUpperCase() + a.slice(1);
                    }).replace(/\/(\w)/g, function (x, a) { return a.slice(0, 1).toUpperCase(); }),
                    functonDesc: element.summary,
                    parameterList: parameters_1,
                    responseType: responseType,
                    url: key.replace(/{(\w+)}/g, function (x, a) {
                        return '$' + '{data.' + a + '}';
                    }),
                    method: key2
                });
            }
        };
        for (var key2 in obj) {
            _loop_1(key2);
        }
    }
    temp.importList = Array.from(temp.importList);
    res.push(temp);
});
console.log(process.cwd());
if (!fs.existsSync(path.resolve(process.cwd(), src))) {
    fs.mkdirSync(src);
}
res.forEach(function (x) {
    fs.writeFileSync(path.resolve(process.cwd(), src, x.fileName + '.ts'), tt(x), 'utf8');
});
fs.writeFileSync(path.resolve(process.cwd(), src, 'type.ts'), typet({
    typeList: typeList
}), 'utf8');


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map