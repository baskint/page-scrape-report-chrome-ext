(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define([], factory);
  else if (typeof exports === 'object')
    exports["chrome"] = factory();
  else
    root["chrome"] = factory();
})(this, function () {
  return /******/ (function (modules) { // webpackBootstrap
      /******/ // The module cache
      /******/
      var installedModules = {};

      /******/ // The require function
      /******/
      function __webpack_require__(moduleId) {

        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId])
        /******/
          return installedModules[moduleId].exports;

        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
          /******/
          exports: {},
          /******/
          id: moduleId,
          /******/
          loaded: false
            /******/
        };

        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;

        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }


      /******/ // expose the modules object (__webpack_modules__)
      /******/
      __webpack_require__.m = modules;

      /******/ // expose the module cache
      /******/
      __webpack_require__.c = installedModules;

      /******/ // __webpack_public_path__
      /******/
      __webpack_require__.p = "";

      /******/ // Load entry module and return exports
      /******/
      return __webpack_require__(0);
      /******/
    })
    /************************************************************************/
    /******/
    ([
/* 0 */
/***/
      function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            'default': obj
          };
        }

        var _chromeApiIndex = __webpack_require__(1);

        var _chromeApiIndex2 = _interopRequireDefault(_chromeApiIndex);

        exports['default'] = (0, _chromeApiIndex2['default'])();
        module.exports = exports['default'];

        /***/
      },
/* 1 */
/***/
      function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports['default'] = create;

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            'default': obj
          };
        }

        var _lodash = __webpack_require__(2);

        var _lodash2 = _interopRequireDefault(_lodash);

        var _apiConfigJs = __webpack_require__(4);

        var _apiConfigJs2 = _interopRequireDefault(_apiConfigJs);

        var _chromeIndex = __webpack_require__(5);

        var _chromeIndex2 = _interopRequireDefault(_chromeIndex);

        var _factoryEvents = __webpack_require__(7);

        var _factoryEvents2 = _interopRequireDefault(_factoryEvents);

        var _factoryStubs = __webpack_require__(10);

        var _factoryStubs2 = _interopRequireDefault(_factoryStubs);

        var _factoryProperty = __webpack_require__(11);

        var _factoryProperty2 = _interopRequireDefault(_factoryProperty);

        var _pluginsCookies = __webpack_require__(12);

        var _pluginsCookies2 = _interopRequireDefault(_pluginsCookies);

        /**
         * Create chrome api mock
         * @returns {Object}
         */

        function create() {
          return _lodash2['default'].assign((0, _chromeIndex2['default'])(_apiConfigJs2['default']), ChromeManager);
        }

        var ChromeManager = {

          /**
           * Install plugin
           * @param {Object} plugin
           * @param {Function} plugin.install
           */
          registerPlugin: function registerPlugin(plugin) {
            plugin.install(this);
          },

          /**
           * Reset mack data
           */
          reset: function reset() {
            _factoryEvents2['default'].reset();
            _factoryStubs2['default'].reset();
          },

          /**
           * Reset mock data and behaviour
           */
          flush: function flush() {
            _factoryEvents2['default'].flush();
            _factoryStubs2['default'].flush();
            _factoryProperty2['default'].flush();
          },

          /**
           * plugin list
           */
          plugins: {
            CookiePlugin: _pluginsCookies2['default']
          }
        };
        module.exports = exports['default'];

        /***/
      },
/* 2 */
/***/
      function (module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_RESULT__; /* WEBPACK VAR INJECTION */
        (function (module, global) {
          /**
           * @license
           * lodash 3.10.1 (Custom Build) <https://lodash.com/>
           * Build: `lodash modern -d -o ./index.js`
           * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
           * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
           * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
           * Available under MIT license <https://lodash.com/license>
           */
          'use strict';;
          (function () { /** Used as a safe reference for `undefined` in pre-ES5 environments. */
            var undefined; /** Used as the semantic version number. */
            var VERSION = '3.10.1'; /** Used to compose bitmasks for wrapper metadata. */
            var BIND_FLAG = 1,
              BIND_KEY_FLAG = 2,
              CURRY_BOUND_FLAG = 4,
              CURRY_FLAG = 8,
              CURRY_RIGHT_FLAG = 16,
              PARTIAL_FLAG = 32,
              PARTIAL_RIGHT_FLAG = 64,
              ARY_FLAG = 128,
              REARG_FLAG = 256; /** Used as default options for `_.trunc`. */
            var DEFAULT_TRUNC_LENGTH = 30,
              DEFAULT_TRUNC_OMISSION = '...'; /** Used to detect when a function becomes hot. */
            var HOT_COUNT = 150,
              HOT_SPAN = 16; /** Used as the size to enable large array optimizations. */
            var LARGE_ARRAY_SIZE = 200; /** Used to indicate the type of lazy iteratees. */
            var LAZY_FILTER_FLAG = 1,
              LAZY_MAP_FLAG = 2; /** Used as the `TypeError` message for "Functions" methods. */
            var FUNC_ERROR_TEXT = 'Expected a function'; /** Used as the internal argument placeholder. */
            var PLACEHOLDER = '__lodash_placeholder__'; /** `Object#toString` result references. */
            var argsTag = '[object Arguments]',
              arrayTag = '[object Array]',
              boolTag = '[object Boolean]',
              dateTag = '[object Date]',
              errorTag = '[object Error]',
              funcTag = '[object Function]',
              mapTag = '[object Map]',
              numberTag = '[object Number]',
              objectTag = '[object Object]',
              regexpTag = '[object RegExp]',
              setTag = '[object Set]',
              stringTag = '[object String]',
              weakMapTag = '[object WeakMap]';
            var arrayBufferTag = '[object ArrayBuffer]',
              float32Tag = '[object Float32Array]',
              float64Tag = '[object Float64Array]',
              int8Tag = '[object Int8Array]',
              int16Tag = '[object Int16Array]',
              int32Tag = '[object Int32Array]',
              uint8Tag = '[object Uint8Array]',
              uint8ClampedTag = '[object Uint8ClampedArray]',
              uint16Tag = '[object Uint16Array]',
              uint32Tag = '[object Uint32Array]'; /** Used to match empty string literals in compiled template source. */
            var reEmptyStringLeading = /\b__p \+= '';/g,
              reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
              reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g; /** Used to match HTML entities and HTML characters. */
            var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
              reUnescapedHtml = /[&<>"'`]/g,
              reHasEscapedHtml = RegExp(reEscapedHtml.source),
              reHasUnescapedHtml = RegExp(reUnescapedHtml.source); /** Used to match template delimiters. */
            var reEscape = /<%-([\s\S]+?)%>/g,
              reEvaluate = /<%([\s\S]+?)%>/g,
              reInterpolate = /<%=([\s\S]+?)%>/g; /** Used to match property names within property paths. */
            var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
              reIsPlainProp = /^\w*$/,
              rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
            /**
             * Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns)
             * and those outlined by [`EscapeRegExpPattern`](http://ecma-international.org/ecma-262/6.0/#sec-escaperegexppattern).
             */
            var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
              reHasRegExpChars = RegExp(reRegExpChars.source); /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
            var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g; /** Used to match backslashes in property paths. */
            var reEscapeChar = /\\(\\)?/g; /** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
            var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g; /** Used to match `RegExp` flags from their coerced string values. */
            var reFlags = /\w*$/; /** Used to detect hexadecimal string values. */
            var reHasHexPrefix = /^0[xX]/; /** Used to detect host constructors (Safari > 5). */
            var reIsHostCtor = /^\[object .+?Constructor\]$/; /** Used to detect unsigned integer values. */
            var reIsUint = /^\d+$/; /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
            var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g; /** Used to ensure capturing order of template delimiters. */
            var reNoMatch = /($^)/; /** Used to match unescaped characters in compiled string literals. */
            var reUnescapedString = /['\n\r\u2028\u2029\\]/g; /** Used to match words to create compound words. */
            var reWords = (function () {
              var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
                lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';
              return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
            })(); /** Used to assign default `context` object properties. */
            var contextProps = ['Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array', 'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number', 'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'isFinite', 'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap']; /** Used to make template sourceURLs easier to identify. */
            var templateCounter = -1; /** Used to identify `toStringTag` values of typed arrays. */
            var typedArrayTags = {};
            typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
            typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false; /** Used to identify `toStringTag` values supported by `_.clone`. */
            var cloneableTags = {};
            cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[stringTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
            cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[mapTag] = cloneableTags[setTag] = cloneableTags[weakMapTag] = false; /** Used to map latin-1 supplementary letters to basic latin letters. */
            var deburredLetters = {
              '\xc0': 'A',
              '\xc1': 'A',
              '\xc2': 'A',
              '\xc3': 'A',
              '\xc4': 'A',
              '\xc5': 'A',
              '\xe0': 'a',
              '\xe1': 'a',
              '\xe2': 'a',
              '\xe3': 'a',
              '\xe4': 'a',
              '\xe5': 'a',
              '\xc7': 'C',
              '\xe7': 'c',
              '\xd0': 'D',
              '\xf0': 'd',
              '\xc8': 'E',
              '\xc9': 'E',
              '\xca': 'E',
              '\xcb': 'E',
              '\xe8': 'e',
              '\xe9': 'e',
              '\xea': 'e',
              '\xeb': 'e',
              '\xcC': 'I',
              '\xcd': 'I',
              '\xce': 'I',
              '\xcf': 'I',
              '\xeC': 'i',
              '\xed': 'i',
              '\xee': 'i',
              '\xef': 'i',
              '\xd1': 'N',
              '\xf1': 'n',
              '\xd2': 'O',
              '\xd3': 'O',
              '\xd4': 'O',
              '\xd5': 'O',
              '\xd6': 'O',
              '\xd8': 'O',
              '\xf2': 'o',
              '\xf3': 'o',
              '\xf4': 'o',
              '\xf5': 'o',
              '\xf6': 'o',
              '\xf8': 'o',
              '\xd9': 'U',
              '\xda': 'U',
              '\xdb': 'U',
              '\xdc': 'U',
              '\xf9': 'u',
              '\xfa': 'u',
              '\xfb': 'u',
              '\xfc': 'u',
              '\xdd': 'Y',
              '\xfd': 'y',
              '\xff': 'y',
              '\xc6': 'Ae',
              '\xe6': 'ae',
              '\xde': 'Th',
              '\xfe': 'th',
              '\xdf': 'ss'
            }; /** Used to map characters to HTML entities. */
            var htmlEscapes = {
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&#39;',
              '`': '&#96;'
            }; /** Used to map HTML entities to characters. */
            var htmlUnescapes = {
              '&amp;': '&',
              '&lt;': '<',
              '&gt;': '>',
              '&quot;': '"',
              '&#39;': "'",
              '&#96;': '`'
            }; /** Used to determine if values are of the language type `Object`. */
            var objectTypes = {
              'function': true,
              'object': true
            }; /** Used to escape characters for inclusion in compiled regexes. */
            var regexpEscapes = {
              '0': 'x30',
              '1': 'x31',
              '2': 'x32',
              '3': 'x33',
              '4': 'x34',
              '5': 'x35',
              '6': 'x36',
              '7': 'x37',
              '8': 'x38',
              '9': 'x39',
              'A': 'x41',
              'B': 'x42',
              'C': 'x43',
              'D': 'x44',
              'E': 'x45',
              'F': 'x46',
              'a': 'x61',
              'b': 'x62',
              'c': 'x63',
              'd': 'x64',
              'e': 'x65',
              'f': 'x66',
              'n': 'x6e',
              'r': 'x72',
              't': 'x74',
              'u': 'x75',
              'v': 'x76',
              'x': 'x78'
            }; /** Used to escape characters for inclusion in compiled string literals. */
            var stringEscapes = {
              '\\': '\\',
              "'": "'",
              '\n': 'n',
              '\r': 'r',
              '\u2028': 'u2028',
              '\u2029': 'u2029'
            }; /** Detect free variable `exports`. */
            var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports; /** Detect free variable `module`. */
            var freeModule = objectTypes[typeof module] && module && !module.nodeType && module; /** Detect free variable `global` from Node.js. */
            var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global; /** Detect free variable `self`. */
            var freeSelf = objectTypes[typeof self] && self && self.Object && self; /** Detect free variable `window`. */
            var freeWindow = objectTypes[typeof window] && window && window.Object && window; /** Detect the popular CommonJS extension `module.exports`. */
            var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;
            /**
             * Used as a reference to the global object.
             *
             * The `this` value is used if it's the global object to avoid Greasemonkey's
             * restricted `window` object, otherwise the `window` object is used.
             */
            var root = freeGlobal || freeWindow !== (this && this.window) && freeWindow || freeSelf || this; /*--------------------------------------------------------------------------*/
            /**
             * The base implementation of `compareAscending` which compares values and
             * sorts them in ascending order without guaranteeing a stable sort.
             *
             * @private
             * @param {*} value The value to compare.
             * @param {*} other The other value to compare.
             * @returns {number} Returns the sort order indicator for `value`.
             */
            function baseCompareAscending(value, other) {
              if (value !== other) {
                var valIsNull = value === null,
                  valIsUndef = value === undefined,
                  valIsReflexive = value === value;
                var othIsNull = other === null,
                  othIsUndef = other === undefined,
                  othIsReflexive = other === other;
                if (value > other && !othIsNull || !valIsReflexive || valIsNull && !othIsUndef && othIsReflexive || valIsUndef && othIsReflexive) {
                  return 1;
                }
                if (value < other && !valIsNull || !othIsReflexive || othIsNull && !valIsUndef && valIsReflexive || othIsUndef && valIsReflexive) {
                  return -1;
                }
              }
              return 0;
            }
            /**
             * The base implementation of `_.findIndex` and `_.findLastIndex` without
             * support for callback shorthands and `this` binding.
             *
             * @private
             * @param {Array} array The array to search.
             * @param {Function} predicate The function invoked per iteration.
             * @param {boolean} [fromRight] Specify iterating from right to left.
             * @returns {number} Returns the index of the matched value, else `-1`.
             */
            function baseFindIndex(array, predicate, fromRight) {
              var length = array.length,
                index = fromRight ? length : -1;
              while (fromRight ? index-- : ++index < length) {
                if (predicate(array[index], index, array)) {
                  return index;
                }
              }
              return -1;
            }
            /**
             * The base implementation of `_.indexOf` without support for binary searches.
             *
             * @private
             * @param {Array} array The array to search.
             * @param {*} value The value to search for.
             * @param {number} fromIndex The index to search from.
             * @returns {number} Returns the index of the matched value, else `-1`.
             */
            function baseIndexOf(array, value, fromIndex) {
              if (value !== value) {
                return indexOfNaN(array, fromIndex);
              }
              var index = fromIndex - 1,
                length = array.length;
              while (++index < length) {
                if (array[index] === value) {
                  return index;
                }
              }
              return -1;
            }
            /**
             * The base implementation of `_.isFunction` without support for environments
             * with incorrect `typeof` results.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
             */
            function baseIsFunction(value) { // Avoid a Chakra JIT bug in compatibility modes of IE 11.
              // See https://github.com/jashkenas/underscore/issues/1621 for more details.
              return typeof value == 'function' || false;
            }
            /**
             * Converts `value` to a string if it's not one. An empty string is returned
             * for `null` or `undefined` values.
             *
             * @private
             * @param {*} value The value to process.
             * @returns {string} Returns the string.
             */
            function baseToString(value) {
              return value == null ? '' : value + '';
            }
            /**
             * Used by `_.trim` and `_.trimLeft` to get the index of the first character
             * of `string` that is not found in `chars`.
             *
             * @private
             * @param {string} string The string to inspect.
             * @param {string} chars The characters to find.
             * @returns {number} Returns the index of the first character not found in `chars`.
             */
            function charsLeftIndex(string, chars) {
              var index = -1,
                length = string.length;
              while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
              return index;
            }
            /**
             * Used by `_.trim` and `_.trimRight` to get the index of the last character
             * of `string` that is not found in `chars`.
             *
             * @private
             * @param {string} string The string to inspect.
             * @param {string} chars The characters to find.
             * @returns {number} Returns the index of the last character not found in `chars`.
             */
            function charsRightIndex(string, chars) {
              var index = string.length;
              while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
              return index;
            }
            /**
             * Used by `_.sortBy` to compare transformed elements of a collection and stable
             * sort them in ascending order.
             *
             * @private
             * @param {Object} object The object to compare.
             * @param {Object} other The other object to compare.
             * @returns {number} Returns the sort order indicator for `object`.
             */
            function compareAscending(object, other) {
              return baseCompareAscending(object.criteria, other.criteria) || object.index - other.index;
            }
            /**
             * Used by `_.sortByOrder` to compare multiple properties of a value to another
             * and stable sort them.
             *
             * If `orders` is unspecified, all valuess are sorted in ascending order. Otherwise,
             * a value is sorted in ascending order if its corresponding order is "asc", and
             * descending if "desc".
             *
             * @private
             * @param {Object} object The object to compare.
             * @param {Object} other The other object to compare.
             * @param {boolean[]} orders The order to sort by for each property.
             * @returns {number} Returns the sort order indicator for `object`.
             */
            function compareMultiple(object, other, orders) {
              var index = -1,
                objCriteria = object.criteria,
                othCriteria = other.criteria,
                length = objCriteria.length,
                ordersLength = orders.length;
              while (++index < length) {
                var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
                if (result) {
                  if (index >= ordersLength) {
                    return result;
                  }
                  var order = orders[index];
                  return result * (order === 'asc' || order === true ? 1 : -1);
                }
              } // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
              // that causes it, under certain circumstances, to provide the same value for
              // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
              // for more details.
              //
              // This also ensures a stable sort in V8 and other engines.
              // See https://code.google.com/p/v8/issues/detail?id=90 for more details.
              return object.index - other.index;
            }
            /**
             * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
             *
             * @private
             * @param {string} letter The matched letter to deburr.
             * @returns {string} Returns the deburred letter.
             */
            function deburrLetter(letter) {
              return deburredLetters[letter];
            }
            /**
             * Used by `_.escape` to convert characters to HTML entities.
             *
             * @private
             * @param {string} chr The matched character to escape.
             * @returns {string} Returns the escaped character.
             */
            function escapeHtmlChar(chr) {
              return htmlEscapes[chr];
            }
            /**
             * Used by `_.escapeRegExp` to escape characters for inclusion in compiled regexes.
             *
             * @private
             * @param {string} chr The matched character to escape.
             * @param {string} leadingChar The capture group for a leading character.
             * @param {string} whitespaceChar The capture group for a whitespace character.
             * @returns {string} Returns the escaped character.
             */
            function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
              if (leadingChar) {
                chr = regexpEscapes[chr];
              } else if (whitespaceChar) {
                chr = stringEscapes[chr];
              }
              return '\\' + chr;
            }
            /**
             * Used by `_.template` to escape characters for inclusion in compiled string literals.
             *
             * @private
             * @param {string} chr The matched character to escape.
             * @returns {string} Returns the escaped character.
             */
            function escapeStringChar(chr) {
              return '\\' + stringEscapes[chr];
            }
            /**
             * Gets the index at which the first occurrence of `NaN` is found in `array`.
             *
             * @private
             * @param {Array} array The array to search.
             * @param {number} fromIndex The index to search from.
             * @param {boolean} [fromRight] Specify iterating from right to left.
             * @returns {number} Returns the index of the matched `NaN`, else `-1`.
             */
            function indexOfNaN(array, fromIndex, fromRight) {
              var length = array.length,
                index = fromIndex + (fromRight ? 0 : -1);
              while (fromRight ? index-- : ++index < length) {
                var other = array[index];
                if (other !== other) {
                  return index;
                }
              }
              return -1;
            }
            /**
             * Checks if `value` is object-like.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
             */
            function isObjectLike(value) {
              return !!value && typeof value == 'object';
            }
            /**
             * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
             * character code is whitespace.
             *
             * @private
             * @param {number} charCode The character code to inspect.
             * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
             */
            function isSpace(charCode) {
              return charCode <= 160 && charCode >= 9 && charCode <= 13 || charCode == 32 || charCode == 160 || charCode == 5760 || charCode == 6158 || charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279);
            }
            /**
             * Replaces all `placeholder` elements in `array` with an internal placeholder
             * and returns an array of their indexes.
             *
             * @private
             * @param {Array} array The array to modify.
             * @param {*} placeholder The placeholder to replace.
             * @returns {Array} Returns the new array of placeholder indexes.
             */
            function replaceHolders(array, placeholder) {
              var index = -1,
                length = array.length,
                resIndex = -1,
                result = [];
              while (++index < length) {
                if (array[index] === placeholder) {
                  array[index] = PLACEHOLDER;
                  result[++resIndex] = index;
                }
              }
              return result;
            }
            /**
             * An implementation of `_.uniq` optimized for sorted arrays without support
             * for callback shorthands and `this` binding.
             *
             * @private
             * @param {Array} array The array to inspect.
             * @param {Function} [iteratee] The function invoked per iteration.
             * @returns {Array} Returns the new duplicate-value-free array.
             */
            function sortedUniq(array, iteratee) {
              var seen, index = -1,
                length = array.length,
                resIndex = -1,
                result = [];
              while (++index < length) {
                var value = array[index],
                  computed = iteratee ? iteratee(value, index, array) : value;
                if (!index || seen !== computed) {
                  seen = computed;
                  result[++resIndex] = value;
                }
              }
              return result;
            }
            /**
             * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
             * character of `string`.
             *
             * @private
             * @param {string} string The string to inspect.
             * @returns {number} Returns the index of the first non-whitespace character.
             */
            function trimmedLeftIndex(string) {
              var index = -1,
                length = string.length;
              while (++index < length && isSpace(string.charCodeAt(index))) {}
              return index;
            }
            /**
             * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
             * character of `string`.
             *
             * @private
             * @param {string} string The string to inspect.
             * @returns {number} Returns the index of the last non-whitespace character.
             */
            function trimmedRightIndex(string) {
              var index = string.length;
              while (index-- && isSpace(string.charCodeAt(index))) {}
              return index;
            }
            /**
             * Used by `_.unescape` to convert HTML entities to characters.
             *
             * @private
             * @param {string} chr The matched character to unescape.
             * @returns {string} Returns the unescaped character.
             */
            function unescapeHtmlChar(chr) {
              return htmlUnescapes[chr];
            } /*--------------------------------------------------------------------------*/
            /**
             * Create a new pristine `lodash` function using the given `context` object.
             *
             * @static
             * @memberOf _
             * @category Utility
             * @param {Object} [context=root] The context object.
             * @returns {Function} Returns a new `lodash` function.
             * @example
             *
             * _.mixin({ 'foo': _.constant('foo') });
             *
             * var lodash = _.runInContext();
             * lodash.mixin({ 'bar': lodash.constant('bar') });
             *
             * _.isFunction(_.foo);
             * // => true
             * _.isFunction(_.bar);
             * // => false
             *
             * lodash.isFunction(lodash.foo);
             * // => false
             * lodash.isFunction(lodash.bar);
             * // => true
             *
             * // using `context` to mock `Date#getTime` use in `_.now`
             * var mock = _.runInContext({
             *   'Date': function() {
             *     return { 'getTime': getTimeMock };
             *   }
             * });
             *
             * // or creating a suped-up `defer` in Node.js
             * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
             */
            function runInContext(context) { // Avoid issues with some ES3 environments that attempt to use values, named
              // after built-in constructors like `Object`, for the creation of literals.
              // ES5 clears this up by stating that literals must use built-in constructors.
              // See https://es5.github.io/#x11.1.5 for more details.
              context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root; /** Native constructor references. */
              var Array = context.Array,
                Date = context.Date,
                Error = context.Error,
                Function = context.Function,
                Math = context.Math,
                Number = context.Number,
                Object = context.Object,
                RegExp = context.RegExp,
                String = context.String,
                TypeError = context.TypeError; /** Used for native method references. */
              var arrayProto = Array.prototype,
                objectProto = Object.prototype,
                stringProto = String.prototype; /** Used to resolve the decompiled source of functions. */
              var fnToString = Function.prototype.toString; /** Used to check objects for own properties. */
              var hasOwnProperty = objectProto.hasOwnProperty; /** Used to generate unique IDs. */
              var idCounter = 0;
              /**
               * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
               * of values.
               */
              var objToString = objectProto.toString; /** Used to restore the original `_` reference in `_.noConflict`. */
              var oldDash = root._; /** Used to detect if a method is native. */
              var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'); /** Native method references. */
              var ArrayBuffer = context.ArrayBuffer,
                clearTimeout = context.clearTimeout,
                parseFloat = context.parseFloat,
                pow = Math.pow,
                propertyIsEnumerable = objectProto.propertyIsEnumerable,
                Set = getNative(context, 'Set'),
                setTimeout = context.setTimeout,
                splice = arrayProto.splice,
                Uint8Array = context.Uint8Array,
                WeakMap = getNative(context, 'WeakMap'); /* Native method references for those with the same name as other `lodash` methods. */
              var nativeCeil = Math.ceil,
                nativeCreate = getNative(Object, 'create'),
                nativeFloor = Math.floor,
                nativeIsArray = getNative(Array, 'isArray'),
                nativeIsFinite = context.isFinite,
                nativeKeys = getNative(Object, 'keys'),
                nativeMax = Math.max,
                nativeMin = Math.min,
                nativeNow = getNative(Date, 'now'),
                nativeParseInt = context.parseInt,
                nativeRandom = Math.random; /** Used as references for `-Infinity` and `Infinity`. */
              var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
                POSITIVE_INFINITY = Number.POSITIVE_INFINITY; /** Used as references for the maximum length and index of an array. */
              var MAX_ARRAY_LENGTH = 4294967295,
                MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
                HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
              /**
               * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
               * of an array-like value.
               */
              var MAX_SAFE_INTEGER = 9007199254740991; /** Used to store function metadata. */
              var metaMap = WeakMap && new WeakMap(); /** Used to lookup unminified function names. */
              var realNames = {}; /*------------------------------------------------------------------------*/
              /**
               * Creates a `lodash` object which wraps `value` to enable implicit chaining.
               * Methods that operate on and return arrays, collections, and functions can
               * be chained together. Methods that retrieve a single value or may return a
               * primitive value will automatically end the chain returning the unwrapped
               * value. Explicit chaining may be enabled using `_.chain`. The execution of
               * chained methods is lazy, that is, execution is deferred until `_#value`
               * is implicitly or explicitly called.
               *
               * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
               * fusion is an optimization strategy which merge iteratee calls; this can help
               * to avoid the creation of intermediate data structures and greatly reduce the
               * number of iteratee executions.
               *
               * Chaining is supported in custom builds as long as the `_#value` method is
               * directly or indirectly included in the build.
               *
               * In addition to lodash methods, wrappers have `Array` and `String` methods.
               *
               * The wrapper `Array` methods are:
               * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
               * `splice`, and `unshift`
               *
               * The wrapper `String` methods are:
               * `replace` and `split`
               *
               * The wrapper methods that support shortcut fusion are:
               * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
               * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
               * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
               * and `where`
               *
               * The chainable wrapper methods are:
               * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
               * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
               * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
               * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
               * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
               * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
               * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
               * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
               * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
               * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
               * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
               * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
               * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
               * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
               * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
               * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
               * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
               *
               * The wrapper methods that are **not** chainable by default are:
               * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
               * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
               * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
               * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
               * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
               * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
               * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
               * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
               * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
               * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
               * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
               * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
               * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
               * `unescape`, `uniqueId`, `value`, and `words`
               *
               * The wrapper method `sample` will return a wrapped value when `n` is provided,
               * otherwise an unwrapped value is returned.
               *
               * @name _
               * @constructor
               * @category Chain
               * @param {*} value The value to wrap in a `lodash` instance.
               * @returns {Object} Returns the new `lodash` wrapper instance.
               * @example
               *
               * var wrapped = _([1, 2, 3]);
               *
               * // returns an unwrapped value
               * wrapped.reduce(function(total, n) {
               *   return total + n;
               * });
               * // => 6
               *
               * // returns a wrapped value
               * var squares = wrapped.map(function(n) {
               *   return n * n;
               * });
               *
               * _.isArray(squares);
               * // => false
               *
               * _.isArray(squares.value());
               * // => true
               */
              function lodash(value) {
                if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
                  if (value instanceof LodashWrapper) {
                    return value;
                  }
                  if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
                    return wrapperClone(value);
                  }
                }
                return new LodashWrapper(value);
              }
              /**
               * The function whose prototype all chaining wrappers inherit from.
               *
               * @private
               */
              function baseLodash() {} // No operation performed.
              /**
               * The base constructor for creating `lodash` wrapper objects.
               *
               * @private
               * @param {*} value The value to wrap.
               * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
               * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
               */
              function LodashWrapper(value, chainAll, actions) {
                this.__wrapped__ = value;
                this.__actions__ = actions || [];
                this.__chain__ = !!chainAll;
              }
              /**
               * An object environment feature flags.
               *
               * @static
               * @memberOf _
               * @type Object
               */
              var support = lodash.support = {};
              /**
               * By default, the template delimiters used by lodash are like those in
               * embedded Ruby (ERB). Change the following template settings to use
               * alternative delimiters.
               *
               * @static
               * @memberOf _
               * @type Object
               */
              lodash.templateSettings = {
                /**
                 * Used to detect `data` property values to be HTML-escaped.
                 *
                 * @memberOf _.templateSettings
                 * @type RegExp
                 */
                'escape': reEscape,
                /**
                 * Used to detect code to be evaluated.
                 *
                 * @memberOf _.templateSettings
                 * @type RegExp
                 */
                'evaluate': reEvaluate,
                /**
                 * Used to detect `data` property values to inject.
                 *
                 * @memberOf _.templateSettings
                 * @type RegExp
                 */
                'interpolate': reInterpolate,
                /**
                 * Used to reference the data object in the template text.
                 *
                 * @memberOf _.templateSettings
                 * @type string
                 */
                'variable': '',
                /**
                 * Used to import variables into the compiled template.
                 *
                 * @memberOf _.templateSettings
                 * @type Object
                 */
                'imports': {
                  /**
                   * A reference to the `lodash` function.
                   *
                   * @memberOf _.templateSettings.imports
                   * @type Function
                   */
                  '_': lodash
                }
              }; /*------------------------------------------------------------------------*/
              /**
               * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
               *
               * @private
               * @param {*} value The value to wrap.
               */
              function LazyWrapper(value) {
                this.__wrapped__ = value;
                this.__actions__ = [];
                this.__dir__ = 1;
                this.__filtered__ = false;
                this.__iteratees__ = [];
                this.__takeCount__ = POSITIVE_INFINITY;
                this.__views__ = [];
              }
              /**
               * Creates a clone of the lazy wrapper object.
               *
               * @private
               * @name clone
               * @memberOf LazyWrapper
               * @returns {Object} Returns the cloned `LazyWrapper` object.
               */
              function lazyClone() {
                var result = new LazyWrapper(this.__wrapped__);
                result.__actions__ = arrayCopy(this.__actions__);
                result.__dir__ = this.__dir__;
                result.__filtered__ = this.__filtered__;
                result.__iteratees__ = arrayCopy(this.__iteratees__);
                result.__takeCount__ = this.__takeCount__;
                result.__views__ = arrayCopy(this.__views__);
                return result;
              }
              /**
               * Reverses the direction of lazy iteration.
               *
               * @private
               * @name reverse
               * @memberOf LazyWrapper
               * @returns {Object} Returns the new reversed `LazyWrapper` object.
               */
              function lazyReverse() {
                if (this.__filtered__) {
                  var result = new LazyWrapper(this);
                  result.__dir__ = -1;
                  result.__filtered__ = true;
                } else {
                  result = this.clone();
                  result.__dir__ *= -1;
                }
                return result;
              }
              /**
               * Extracts the unwrapped value from its lazy wrapper.
               *
               * @private
               * @name value
               * @memberOf LazyWrapper
               * @returns {*} Returns the unwrapped value.
               */
              function lazyValue() {
                var array = this.__wrapped__.value(),
                  dir = this.__dir__,
                  isArr = isArray(array),
                  isRight = dir < 0,
                  arrLength = isArr ? array.length : 0,
                  view = getView(0, arrLength, this.__views__),
                  start = view.start,
                  end = view.end,
                  length = end - start,
                  index = isRight ? end : start - 1,
                  iteratees = this.__iteratees__,
                  iterLength = iteratees.length,
                  resIndex = 0,
                  takeCount = nativeMin(length, this.__takeCount__);
                if (!isArr || arrLength < LARGE_ARRAY_SIZE || arrLength == length && takeCount == length) {
                  return baseWrapperValue(isRight && isArr ? array.reverse() : array, this.__actions__);
                }
                var result = [];
                outer: while (length-- && resIndex < takeCount) {
                  index += dir;
                  var iterIndex = -1,
                    value = array[index];
                  while (++iterIndex < iterLength) {
                    var data = iteratees[iterIndex],
                      iteratee = data.iteratee,
                      type = data.type,
                      computed = iteratee(value);
                    if (type == LAZY_MAP_FLAG) {
                      value = computed;
                    } else if (!computed) {
                      if (type == LAZY_FILTER_FLAG) {
                        continue outer;
                      } else {
                        break outer;
                      }
                    }
                  }
                  result[resIndex++] = value;
                }
                return result;
              } /*------------------------------------------------------------------------*/
              /**
               * Creates a cache object to store key/value pairs.
               *
               * @private
               * @static
               * @name Cache
               * @memberOf _.memoize
               */
              function MapCache() {
                this.__data__ = {};
              }
              /**
               * Removes `key` and its value from the cache.
               *
               * @private
               * @name delete
               * @memberOf _.memoize.Cache
               * @param {string} key The key of the value to remove.
               * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
               */
              function mapDelete(key) {
                return this.has(key) && delete this.__data__[key];
              }
              /**
               * Gets the cached value for `key`.
               *
               * @private
               * @name get
               * @memberOf _.memoize.Cache
               * @param {string} key The key of the value to get.
               * @returns {*} Returns the cached value.
               */
              function mapGet(key) {
                return key == '__proto__' ? undefined : this.__data__[key];
              }
              /**
               * Checks if a cached value for `key` exists.
               *
               * @private
               * @name has
               * @memberOf _.memoize.Cache
               * @param {string} key The key of the entry to check.
               * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
               */
              function mapHas(key) {
                return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
              }
              /**
               * Sets `value` to `key` of the cache.
               *
               * @private
               * @name set
               * @memberOf _.memoize.Cache
               * @param {string} key The key of the value to cache.
               * @param {*} value The value to cache.
               * @returns {Object} Returns the cache object.
               */
              function mapSet(key, value) {
                if (key != '__proto__') {
                  this.__data__[key] = value;
                }
                return this;
              } /*------------------------------------------------------------------------*/
              /**
               *
               * Creates a cache object to store unique values.
               *
               * @private
               * @param {Array} [values] The values to cache.
               */
              function SetCache(values) {
                var length = values ? values.length : 0;
                this.data = {
                  'hash': nativeCreate(null),
                  'set': new Set()
                };
                while (length--) {
                  this.push(values[length]);
                }
              }
              /**
               * Checks if `value` is in `cache` mimicking the return signature of
               * `_.indexOf` by returning `0` if the value is found, else `-1`.
               *
               * @private
               * @param {Object} cache The cache to search.
               * @param {*} value The value to search for.
               * @returns {number} Returns `0` if `value` is found, else `-1`.
               */
              function cacheIndexOf(cache, value) {
                var data = cache.data,
                  result = typeof value == 'string' || isObject(value) ? data.set.has(value) : data.hash[value];
                return result ? 0 : -1;
              }
              /**
               * Adds `value` to the cache.
               *
               * @private
               * @name push
               * @memberOf SetCache
               * @param {*} value The value to cache.
               */
              function cachePush(value) {
                var data = this.data;
                if (typeof value == 'string' || isObject(value)) {
                  data.set.add(value);
                } else {
                  data.hash[value] = true;
                }
              } /*------------------------------------------------------------------------*/
              /**
               * Creates a new array joining `array` with `other`.
               *
               * @private
               * @param {Array} array The array to join.
               * @param {Array} other The other array to join.
               * @returns {Array} Returns the new concatenated array.
               */
              function arrayConcat(array, other) {
                var index = -1,
                  length = array.length,
                  othIndex = -1,
                  othLength = other.length,
                  result = Array(length + othLength);
                while (++index < length) {
                  result[index] = array[index];
                }
                while (++othIndex < othLength) {
                  result[index++] = other[othIndex];
                }
                return result;
              }
              /**
               * Copies the values of `source` to `array`.
               *
               * @private
               * @param {Array} source The array to copy values from.
               * @param {Array} [array=[]] The array to copy values to.
               * @returns {Array} Returns `array`.
               */
              function arrayCopy(source, array) {
                var index = -1,
                  length = source.length;
                array || (array = Array(length));
                while (++index < length) {
                  array[index] = source[index];
                }
                return array;
              }
              /**
               * A specialized version of `_.forEach` for arrays without support for callback
               * shorthands and `this` binding.
               *
               * @private
               * @param {Array} array The array to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @returns {Array} Returns `array`.
               */
              function arrayEach(array, iteratee) {
                var index = -1,
                  length = array.length;
                while (++index < length) {
                  if (iteratee(array[index], index, array) === false) {
                    break;
                  }
                }
                return array;
              }
              /**
               * A specialized version of `_.forEachRight` for arrays without support for
               * callback shorthands and `this` binding.
               *
               * @private
               * @param {Array} array The array to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @returns {Array} Returns `array`.
               */
              function arrayEachRight(array, iteratee) {
                var length = array.length;
                while (length--) {
                  if (iteratee(array[length], length, array) === false) {
                    break;
                  }
                }
                return array;
              }
              /**
               * A specialized version of `_.every` for arrays without support for callback
               * shorthands and `this` binding.
               *
               * @private
               * @param {Array} array The array to iterate over.
               * @param {Function} predicate The function invoked per iteration.
               * @returns {boolean} Returns `true` if all elements pass the predicate check,
               *  else `false`.
               */
              function arrayEvery(array, predicate) {
                var index = -1,
                  length = array.length;
                while (++index < length) {
                  if (!predicate(array[index], index, array)) {
                    return false;
                  }
                }
                return true;
              }
              /**
               * A specialized version of `baseExtremum` for arrays which invokes `iteratee`
               * with one argument: (value).
               *
               * @private
               * @param {Array} array The array to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @param {Function} comparator The function used to compare values.
               * @param {*} exValue The initial extremum value.
               * @returns {*} Returns the extremum value.
               */
              function arrayExtremum(array, iteratee, comparator, exValue) {
                var index = -1,
                  length = array.length,
                  computed = exValue,
                  result = computed;
                while (++index < length) {
                  var value = array[index],
                    current = +iteratee(value);
                  if (comparator(current, computed)) {
                    computed = current;
                    result = value;
                  }
                }
                return result;
              }
              /**
               * A specialized version of `_.filter` for arrays without support for callback
               * shorthands and `this` binding.
               *
               * @private
               * @param {Array} array The array to iterate over.
               * @param {Function} predicate The function invoked per iteration.
               * @returns {Array} Returns the new filtered array.
               */
              function arrayFilter(array, predicate) {
                var index = -1,
                  length = array.length,
                  resIndex = -1,
                  result = [];
                while (++index < length) {
                  var value = array[index];
                  if (predicate(value, index, array)) {
                    result[++resIndex] = value;
                  }
                }
                return result;
              }
              /**
               * A specialized version of `_.map` for arrays without support for callback
               * shorthands and `this` binding.
               *
               * @private
               * @param {Array} array The array to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @returns {Array} Returns the new mapped array.
               */
              function arrayMap(array, iteratee) {
                var index = -1,
                  length = array.length,
                  result = Array(length);
                while (++index < length) {
                  result[index] = iteratee(array[index], index, array);
                }
                return result;
              }
              /**
               * Appends the elements of `values` to `array`.
               *
               * @private
               * @param {Array} array The array to modify.
               * @param {Array} values The values to append.
               * @returns {Array} Returns `array`.
               */
              function arrayPush(array, values) {
                var index = -1,
                  length = values.length,
                  offset = array.length;
                while (++index < length) {
                  array[offset + index] = values[index];
                }
                return array;
              }
              /**
               * A specialized version of `_.reduce` for arrays without support for callback
               * shorthands and `this` binding.
               *
               * @private
               * @param {Array} array The array to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @param {*} [accumulator] The initial value.
               * @param {boolean} [initFromArray] Specify using the first element of `array`
               *  as the initial value.
               * @returns {*} Returns the accumulated value.
               */
              function arrayReduce(array, iteratee, accumulator, initFromArray) {
                var index = -1,
                  length = array.length;
                if (initFromArray && length) {
                  accumulator = array[++index];
                }
                while (++index < length) {
                  accumulator = iteratee(accumulator, array[index], index, array);
                }
                return accumulator;
              }
              /**
               * A specialized version of `_.reduceRight` for arrays without support for
               * callback shorthands and `this` binding.
               *
               * @private
               * @param {Array} array The array to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @param {*} [accumulator] The initial value.
               * @param {boolean} [initFromArray] Specify using the last element of `array`
               *  as the initial value.
               * @returns {*} Returns the accumulated value.
               */
              function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
                var length = array.length;
                if (initFromArray && length) {
                  accumulator = array[--length];
                }
                while (length--) {
                  accumulator = iteratee(accumulator, array[length], length, array);
                }
                return accumulator;
              }
              /**
               * A specialized version of `_.some` for arrays without support for callback
               * shorthands and `this` binding.
               *
               * @private
               * @param {Array} array The array to iterate over.
               * @param {Function} predicate The function invoked per iteration.
               * @returns {boolean} Returns `true` if any element passes the predicate check,
               *  else `false`.
               */
              function arraySome(array, predicate) {
                var index = -1,
                  length = array.length;
                while (++index < length) {
                  if (predicate(array[index], index, array)) {
                    return true;
                  }
                }
                return false;
              }
              /**
               * A specialized version of `_.sum` for arrays without support for callback
               * shorthands and `this` binding..
               *
               * @private
               * @param {Array} array The array to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @returns {number} Returns the sum.
               */
              function arraySum(array, iteratee) {
                var length = array.length,
                  result = 0;
                while (length--) {
                  result += +iteratee(array[length]) || 0;
                }
                return result;
              }
              /**
               * Used by `_.defaults` to customize its `_.assign` use.
               *
               * @private
               * @param {*} objectValue The destination object property value.
               * @param {*} sourceValue The source object property value.
               * @returns {*} Returns the value to assign to the destination object.
               */
              function assignDefaults(objectValue, sourceValue) {
                return objectValue === undefined ? sourceValue : objectValue;
              }
              /**
               * Used by `_.template` to customize its `_.assign` use.
               *
               * **Note:** This function is like `assignDefaults` except that it ignores
               * inherited property values when checking if a property is `undefined`.
               *
               * @private
               * @param {*} objectValue The destination object property value.
               * @param {*} sourceValue The source object property value.
               * @param {string} key The key associated with the object and source values.
               * @param {Object} object The destination object.
               * @returns {*} Returns the value to assign to the destination object.
               */
              function assignOwnDefaults(objectValue, sourceValue, key, object) {
                return objectValue === undefined || !hasOwnProperty.call(object, key) ? sourceValue : objectValue;
              }
              /**
               * A specialized version of `_.assign` for customizing assigned values without
               * support for argument juggling, multiple sources, and `this` binding `customizer`
               * functions.
               *
               * @private
               * @param {Object} object The destination object.
               * @param {Object} source The source object.
               * @param {Function} customizer The function to customize assigned values.
               * @returns {Object} Returns `object`.
               */
              function assignWith(object, source, customizer) {
                var index = -1,
                  props = keys(source),
                  length = props.length;
                while (++index < length) {
                  var key = props[index],
                    value = object[key],
                    result = customizer(value, source[key], key, object, source);
                  if ((result === result ? result !== value : value === value) || value === undefined && !(key in object)) {
                    object[key] = result;
                  }
                }
                return object;
              }
              /**
               * The base implementation of `_.assign` without support for argument juggling,
               * multiple sources, and `customizer` functions.
               *
               * @private
               * @param {Object} object The destination object.
               * @param {Object} source The source object.
               * @returns {Object} Returns `object`.
               */
              function baseAssign(object, source) {
                return source == null ? object : baseCopy(source, keys(source), object);
              }
              /**
               * The base implementation of `_.at` without support for string collections
               * and individual key arguments.
               *
               * @private
               * @param {Array|Object} collection The collection to iterate over.
               * @param {number[]|string[]} props The property names or indexes of elements to pick.
               * @returns {Array} Returns the new array of picked elements.
               */
              function baseAt(collection, props) {
                var index = -1,
                  isNil = collection == null,
                  isArr = !isNil && isArrayLike(collection),
                  length = isArr ? collection.length : 0,
                  propsLength = props.length,
                  result = Array(propsLength);
                while (++index < propsLength) {
                  var key = props[index];
                  if (isArr) {
                    result[index] = isIndex(key, length) ? collection[key] : undefined;
                  } else {
                    result[index] = isNil ? undefined : collection[key];
                  }
                }
                return result;
              }
              /**
               * Copies properties of `source` to `object`.
               *
               * @private
               * @param {Object} source The object to copy properties from.
               * @param {Array} props The property names to copy.
               * @param {Object} [object={}] The object to copy properties to.
               * @returns {Object} Returns `object`.
               */
              function baseCopy(source, props, object) {
                object || (object = {});
                var index = -1,
                  length = props.length;
                while (++index < length) {
                  var key = props[index];
                  object[key] = source[key];
                }
                return object;
              }
              /**
               * The base implementation of `_.callback` which supports specifying the
               * number of arguments to provide to `func`.
               *
               * @private
               * @param {*} [func=_.identity] The value to convert to a callback.
               * @param {*} [thisArg] The `this` binding of `func`.
               * @param {number} [argCount] The number of arguments to provide to `func`.
               * @returns {Function} Returns the callback.
               */
              function baseCallback(func, thisArg, argCount) {
                var type = typeof func;
                if (type == 'function') {
                  return thisArg === undefined ? func : bindCallback(func, thisArg, argCount);
                }
                if (func == null) {
                  return identity;
                }
                if (type == 'object') {
                  return baseMatches(func);
                }
                return thisArg === undefined ? property(func) : baseMatchesProperty(func, thisArg);
              }
              /**
               * The base implementation of `_.clone` without support for argument juggling
               * and `this` binding `customizer` functions.
               *
               * @private
               * @param {*} value The value to clone.
               * @param {boolean} [isDeep] Specify a deep clone.
               * @param {Function} [customizer] The function to customize cloning values.
               * @param {string} [key] The key of `value`.
               * @param {Object} [object] The object `value` belongs to.
               * @param {Array} [stackA=[]] Tracks traversed source objects.
               * @param {Array} [stackB=[]] Associates clones with source counterparts.
               * @returns {*} Returns the cloned value.
               */
              function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
                var result;
                if (customizer) {
                  result = object ? customizer(value, key, object) : customizer(value);
                }
                if (result !== undefined) {
                  return result;
                }
                if (!isObject(value)) {
                  return value;
                }
                var isArr = isArray(value);
                if (isArr) {
                  result = initCloneArray(value);
                  if (!isDeep) {
                    return arrayCopy(value, result);
                  }
                } else {
                  var tag = objToString.call(value),
                    isFunc = tag == funcTag;
                  if (tag == objectTag || tag == argsTag || isFunc && !object) {
                    result = initCloneObject(isFunc ? {} : value);
                    if (!isDeep) {
                      return baseAssign(result, value);
                    }
                  } else {
                    return cloneableTags[tag] ? initCloneByTag(value, tag, isDeep) : object ? value : {};
                  }
                } // Check for circular references and return its corresponding clone.
                stackA || (stackA = []);
                stackB || (stackB = []);
                var length = stackA.length;
                while (length--) {
                  if (stackA[length] == value) {
                    return stackB[length];
                  }
                } // Add the source value to the stack of traversed objects and associate it with its clone.
                stackA.push(value);
                stackB.push(result); // Recursively populate clone (susceptible to call stack limits).
                (isArr ? arrayEach : baseForOwn)(value, function (subValue, key) {
                  result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
                });
                return result;
              }
              /**
               * The base implementation of `_.create` without support for assigning
               * properties to the created object.
               *
               * @private
               * @param {Object} prototype The object to inherit from.
               * @returns {Object} Returns the new object.
               */
              var baseCreate = (function () {
                function object() {}
                return function (prototype) {
                  if (isObject(prototype)) {
                    object.prototype = prototype;
                    var result = new object();
                    object.prototype = undefined;
                  }
                  return result || {};
                };
              })();
              /**
               * The base implementation of `_.delay` and `_.defer` which accepts an index
               * of where to slice the arguments to provide to `func`.
               *
               * @private
               * @param {Function} func The function to delay.
               * @param {number} wait The number of milliseconds to delay invocation.
               * @param {Object} args The arguments provide to `func`.
               * @returns {number} Returns the timer id.
               */
              function baseDelay(func, wait, args) {
                if (typeof func != 'function') {
                  throw new TypeError(FUNC_ERROR_TEXT);
                }
                return setTimeout(function () {
                  func.apply(undefined, args);
                }, wait);
              }
              /**
               * The base implementation of `_.difference` which accepts a single array
               * of values to exclude.
               *
               * @private
               * @param {Array} array The array to inspect.
               * @param {Array} values The values to exclude.
               * @returns {Array} Returns the new array of filtered values.
               */
              function baseDifference(array, values) {
                var length = array ? array.length : 0,
                  result = [];
                if (!length) {
                  return result;
                }
                var index = -1,
                  indexOf = getIndexOf(),
                  isCommon = indexOf == baseIndexOf,
                  cache = isCommon && values.length >= LARGE_ARRAY_SIZE ? createCache(values) : null,
                  valuesLength = values.length;
                if (cache) {
                  indexOf = cacheIndexOf;
                  isCommon = false;
                  values = cache;
                }
                outer: while (++index < length) {
                  var value = array[index];
                  if (isCommon && value === value) {
                    var valuesIndex = valuesLength;
                    while (valuesIndex--) {
                      if (values[valuesIndex] === value) {
                        continue outer;
                      }
                    }
                    result.push(value);
                  } else if (indexOf(values, value, 0) < 0) {
                    result.push(value);
                  }
                }
                return result;
              }
              /**
               * The base implementation of `_.forEach` without support for callback
               * shorthands and `this` binding.
               *
               * @private
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @returns {Array|Object|string} Returns `collection`.
               */
              var baseEach = createBaseEach(baseForOwn);
              /**
               * The base implementation of `_.forEachRight` without support for callback
               * shorthands and `this` binding.
               *
               * @private
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @returns {Array|Object|string} Returns `collection`.
               */
              var baseEachRight = createBaseEach(baseForOwnRight, true);
              /**
               * The base implementation of `_.every` without support for callback
               * shorthands and `this` binding.
               *
               * @private
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function} predicate The function invoked per iteration.
               * @returns {boolean} Returns `true` if all elements pass the predicate check,
               *  else `false`
               */
              function baseEvery(collection, predicate) {
                var result = true;
                baseEach(collection, function (value, index, collection) {
                  result = !!predicate(value, index, collection);
                  return result;
                });
                return result;
              }
              /**
               * Gets the extremum value of `collection` invoking `iteratee` for each value
               * in `collection` to generate the criterion by which the value is ranked.
               * The `iteratee` is invoked with three arguments: (value, index|key, collection).
               *
               * @private
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @param {Function} comparator The function used to compare values.
               * @param {*} exValue The initial extremum value.
               * @returns {*} Returns the extremum value.
               */
              function baseExtremum(collection, iteratee, comparator, exValue) {
                var computed = exValue,
                  result = computed;
                baseEach(collection, function (value, index, collection) {
                  var current = +iteratee(value, index, collection);
                  if (comparator(current, computed) || current === exValue && current === result) {
                    computed = current;
                    result = value;
                  }
                });
                return result;
              }
              /**
               * The base implementation of `_.fill` without an iteratee call guard.
               *
               * @private
               * @param {Array} array The array to fill.
               * @param {*} value The value to fill `array` with.
               * @param {number} [start=0] The start position.
               * @param {number} [end=array.length] The end position.
               * @returns {Array} Returns `array`.
               */
              function baseFill(array, value, start, end) {
                var length = array.length;
                start = start == null ? 0 : +start || 0;
                if (start < 0) {
                  start = -start > length ? 0 : length + start;
                }
                end = end === undefined || end > length ? length : +end || 0;
                if (end < 0) {
                  end += length;
                }
                length = start > end ? 0 : end >>> 0;
                start >>>= 0;
                while (start < length) {
                  array[start++] = value;
                }
                return array;
              }
              /**
               * The base implementation of `_.filter` without support for callback
               * shorthands and `this` binding.
               *
               * @private
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function} predicate The function invoked per iteration.
               * @returns {Array} Returns the new filtered array.
               */
              function baseFilter(collection, predicate) {
                var result = [];
                baseEach(collection, function (value, index, collection) {
                  if (predicate(value, index, collection)) {
                    result.push(value);
                  }
                });
                return result;
              }
              /**
               * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
               * without support for callback shorthands and `this` binding, which iterates
               * over `collection` using the provided `eachFunc`.
               *
               * @private
               * @param {Array|Object|string} collection The collection to search.
               * @param {Function} predicate The function invoked per iteration.
               * @param {Function} eachFunc The function to iterate over `collection`.
               * @param {boolean} [retKey] Specify returning the key of the found element
               *  instead of the element itself.
               * @returns {*} Returns the found element or its key, else `undefined`.
               */
              function baseFind(collection, predicate, eachFunc, retKey) {
                var result;
                eachFunc(collection, function (value, key, collection) {
                  if (predicate(value, key, collection)) {
                    result = retKey ? key : value;
                    return false;
                  }
                });
                return result;
              }
              /**
               * The base implementation of `_.flatten` with added support for restricting
               * flattening and specifying the start index.
               *
               * @private
               * @param {Array} array The array to flatten.
               * @param {boolean} [isDeep] Specify a deep flatten.
               * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
               * @param {Array} [result=[]] The initial result value.
               * @returns {Array} Returns the new flattened array.
               */
              function baseFlatten(array, isDeep, isStrict, result) {
                result || (result = []);
                var index = -1,
                  length = array.length;
                while (++index < length) {
                  var value = array[index];
                  if (isObjectLike(value) && isArrayLike(value) && (isStrict || isArray(value) || isArguments(value))) {
                    if (isDeep) { // Recursively flatten arrays (susceptible to call stack limits).
                      baseFlatten(value, isDeep, isStrict, result);
                    } else {
                      arrayPush(result, value);
                    }
                  } else if (!isStrict) {
                    result[result.length] = value;
                  }
                }
                return result;
              }
              /**
               * The base implementation of `baseForIn` and `baseForOwn` which iterates
               * over `object` properties returned by `keysFunc` invoking `iteratee` for
               * each property. Iteratee functions may exit iteration early by explicitly
               * returning `false`.
               *
               * @private
               * @param {Object} object The object to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @param {Function} keysFunc The function to get the keys of `object`.
               * @returns {Object} Returns `object`.
               */
              var baseFor = createBaseFor();
              /**
               * This function is like `baseFor` except that it iterates over properties
               * in the opposite order.
               *
               * @private
               * @param {Object} object The object to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @param {Function} keysFunc The function to get the keys of `object`.
               * @returns {Object} Returns `object`.
               */
              var baseForRight = createBaseFor(true);
              /**
               * The base implementation of `_.forIn` without support for callback
               * shorthands and `this` binding.
               *
               * @private
               * @param {Object} object The object to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @returns {Object} Returns `object`.
               */
              function baseForIn(object, iteratee) {
                return baseFor(object, iteratee, keysIn);
              }
              /**
               * The base implementation of `_.forOwn` without support for callback
               * shorthands and `this` binding.
               *
               * @private
               * @param {Object} object The object to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @returns {Object} Returns `object`.
               */
              function baseForOwn(object, iteratee) {
                return baseFor(object, iteratee, keys);
              }
              /**
               * The base implementation of `_.forOwnRight` without support for callback
               * shorthands and `this` binding.
               *
               * @private
               * @param {Object} object The object to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @returns {Object} Returns `object`.
               */
              function baseForOwnRight(object, iteratee) {
                return baseForRight(object, iteratee, keys);
              }
              /**
               * The base implementation of `_.functions` which creates an array of
               * `object` function property names filtered from those provided.
               *
               * @private
               * @param {Object} object The object to inspect.
               * @param {Array} props The property names to filter.
               * @returns {Array} Returns the new array of filtered property names.
               */
              function baseFunctions(object, props) {
                var index = -1,
                  length = props.length,
                  resIndex = -1,
                  result = [];
                while (++index < length) {
                  var key = props[index];
                  if (isFunction(object[key])) {
                    result[++resIndex] = key;
                  }
                }
                return result;
              }
              /**
               * The base implementation of `get` without support for string paths
               * and default values.
               *
               * @private
               * @param {Object} object The object to query.
               * @param {Array} path The path of the property to get.
               * @param {string} [pathKey] The key representation of path.
               * @returns {*} Returns the resolved value.
               */
              function baseGet(object, path, pathKey) {
                if (object == null) {
                  return;
                }
                if (pathKey !== undefined && pathKey in toObject(object)) {
                  path = [pathKey];
                }
                var index = 0,
                  length = path.length;
                while (object != null && index < length) {
                  object = object[path[index++]];
                }
                return index && index == length ? object : undefined;
              }
              /**
               * The base implementation of `_.isEqual` without support for `this` binding
               * `customizer` functions.
               *
               * @private
               * @param {*} value The value to compare.
               * @param {*} other The other value to compare.
               * @param {Function} [customizer] The function to customize comparing values.
               * @param {boolean} [isLoose] Specify performing partial comparisons.
               * @param {Array} [stackA] Tracks traversed `value` objects.
               * @param {Array} [stackB] Tracks traversed `other` objects.
               * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
               */
              function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
                if (value === other) {
                  return true;
                }
                if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
                  return value !== value && other !== other;
                }
                return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
              }
              /**
               * A specialized version of `baseIsEqual` for arrays and objects which performs
               * deep comparisons and tracks traversed objects enabling objects with circular
               * references to be compared.
               *
               * @private
               * @param {Object} object The object to compare.
               * @param {Object} other The other object to compare.
               * @param {Function} equalFunc The function to determine equivalents of values.
               * @param {Function} [customizer] The function to customize comparing objects.
               * @param {boolean} [isLoose] Specify performing partial comparisons.
               * @param {Array} [stackA=[]] Tracks traversed `value` objects.
               * @param {Array} [stackB=[]] Tracks traversed `other` objects.
               * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
               */
              function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
                var objIsArr = isArray(object),
                  othIsArr = isArray(other),
                  objTag = arrayTag,
                  othTag = arrayTag;
                if (!objIsArr) {
                  objTag = objToString.call(object);
                  if (objTag == argsTag) {
                    objTag = objectTag;
                  } else if (objTag != objectTag) {
                    objIsArr = isTypedArray(object);
                  }
                }
                if (!othIsArr) {
                  othTag = objToString.call(other);
                  if (othTag == argsTag) {
                    othTag = objectTag;
                  } else if (othTag != objectTag) {
                    othIsArr = isTypedArray(other);
                  }
                }
                var objIsObj = objTag == objectTag,
                  othIsObj = othTag == objectTag,
                  isSameTag = objTag == othTag;
                if (isSameTag && !(objIsArr || objIsObj)) {
                  return equalByTag(object, other, objTag);
                }
                if (!isLoose) {
                  var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
                    othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
                  if (objIsWrapped || othIsWrapped) {
                    return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
                  }
                }
                if (!isSameTag) {
                  return false;
                } // Assume cyclic values are equal.
                // For more information on detecting circular references see https://es5.github.io/#JO.
                stackA || (stackA = []);
                stackB || (stackB = []);
                var length = stackA.length;
                while (length--) {
                  if (stackA[length] == object) {
                    return stackB[length] == other;
                  }
                } // Add `object` and `other` to the stack of traversed objects.
                stackA.push(object);
                stackB.push(other);
                var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
                stackA.pop();
                stackB.pop();
                return result;
              }
              /**
               * The base implementation of `_.isMatch` without support for callback
               * shorthands and `this` binding.
               *
               * @private
               * @param {Object} object The object to inspect.
               * @param {Array} matchData The propery names, values, and compare flags to match.
               * @param {Function} [customizer] The function to customize comparing objects.
               * @returns {boolean} Returns `true` if `object` is a match, else `false`.
               */
              function baseIsMatch(object, matchData, customizer) {
                var index = matchData.length,
                  length = index,
                  noCustomizer = !customizer;
                if (object == null) {
                  return !length;
                }
                object = toObject(object);
                while (index--) {
                  var data = matchData[index];
                  if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                    return false;
                  }
                }
                while (++index < length) {
                  data = matchData[index];
                  var key = data[0],
                    objValue = object[key],
                    srcValue = data[1];
                  if (noCustomizer && data[2]) {
                    if (objValue === undefined && !(key in object)) {
                      return false;
                    }
                  } else {
                    var result = customizer ? customizer(objValue, srcValue, key) : undefined;
                    if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
                      return false;
                    }
                  }
                }
                return true;
              }
              /**
               * The base implementation of `_.map` without support for callback shorthands
               * and `this` binding.
               *
               * @private
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @returns {Array} Returns the new mapped array.
               */
              function baseMap(collection, iteratee) {
                var index = -1,
                  result = isArrayLike(collection) ? Array(collection.length) : [];
                baseEach(collection, function (value, key, collection) {
                  result[++index] = iteratee(value, key, collection);
                });
                return result;
              }
              /**
               * The base implementation of `_.matches` which does not clone `source`.
               *
               * @private
               * @param {Object} source The object of property values to match.
               * @returns {Function} Returns the new function.
               */
              function baseMatches(source) {
                var matchData = getMatchData(source);
                if (matchData.length == 1 && matchData[0][2]) {
                  var key = matchData[0][0],
                    value = matchData[0][1];
                  return function (object) {
                    if (object == null) {
                      return false;
                    }
                    return object[key] === value && (value !== undefined || key in toObject(object));
                  };
                }
                return function (object) {
                  return baseIsMatch(object, matchData);
                };
              }
              /**
               * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
               *
               * @private
               * @param {string} path The path of the property to get.
               * @param {*} srcValue The value to compare.
               * @returns {Function} Returns the new function.
               */
              function baseMatchesProperty(path, srcValue) {
                var isArr = isArray(path),
                  isCommon = isKey(path) && isStrictComparable(srcValue),
                  pathKey = path + '';
                path = toPath(path);
                return function (object) {
                  if (object == null) {
                    return false;
                  }
                  var key = pathKey;
                  object = toObject(object);
                  if ((isArr || !isCommon) && !(key in object)) {
                    object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
                    if (object == null) {
                      return false;
                    }
                    key = last(path);
                    object = toObject(object);
                  }
                  return object[key] === srcValue ? srcValue !== undefined || key in object : baseIsEqual(srcValue, object[key], undefined, true);
                };
              }
              /**
               * The base implementation of `_.merge` without support for argument juggling,
               * multiple sources, and `this` binding `customizer` functions.
               *
               * @private
               * @param {Object} object The destination object.
               * @param {Object} source The source object.
               * @param {Function} [customizer] The function to customize merged values.
               * @param {Array} [stackA=[]] Tracks traversed source objects.
               * @param {Array} [stackB=[]] Associates values with source counterparts.
               * @returns {Object} Returns `object`.
               */
              function baseMerge(object, source, customizer, stackA, stackB) {
                if (!isObject(object)) {
                  return object;
                }
                var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
                  props = isSrcArr ? undefined : keys(source);
                arrayEach(props || source, function (srcValue, key) {
                  if (props) {
                    key = srcValue;
                    srcValue = source[key];
                  }
                  if (isObjectLike(srcValue)) {
                    stackA || (stackA = []);
                    stackB || (stackB = []);
                    baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
                  } else {
                    var value = object[key],
                      result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
                      isCommon = result === undefined;
                    if (isCommon) {
                      result = srcValue;
                    }
                    if ((result !== undefined || isSrcArr && !(key in object)) && (isCommon || (result === result ? result !== value : value === value))) {
                      object[key] = result;
                    }
                  }
                });
                return object;
              }
              /**
               * A specialized version of `baseMerge` for arrays and objects which performs
               * deep merges and tracks traversed objects enabling objects with circular
               * references to be merged.
               *
               * @private
               * @param {Object} object The destination object.
               * @param {Object} source The source object.
               * @param {string} key The key of the value to merge.
               * @param {Function} mergeFunc The function to merge values.
               * @param {Function} [customizer] The function to customize merged values.
               * @param {Array} [stackA=[]] Tracks traversed source objects.
               * @param {Array} [stackB=[]] Associates values with source counterparts.
               * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
               */
              function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
                var length = stackA.length,
                  srcValue = source[key];
                while (length--) {
                  if (stackA[length] == srcValue) {
                    object[key] = stackB[length];
                    return;
                  }
                }
                var value = object[key],
                  result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
                  isCommon = result === undefined;
                if (isCommon) {
                  result = srcValue;
                  if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
                    result = isArray(value) ? value : isArrayLike(value) ? arrayCopy(value) : [];
                  } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                    result = isArguments(value) ? toPlainObject(value) : isPlainObject(value) ? value : {};
                  } else {
                    isCommon = false;
                  }
                } // Add the source value to the stack of traversed objects and associate
                // it with its merged value.
                stackA.push(srcValue);
                stackB.push(result);
                if (isCommon) { // Recursively merge objects and arrays (susceptible to call stack limits).
                  object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
                } else if (result === result ? result !== value : value === value) {
                  object[key] = result;
                }
              }
              /**
               * The base implementation of `_.property` without support for deep paths.
               *
               * @private
               * @param {string} key The key of the property to get.
               * @returns {Function} Returns the new function.
               */
              function baseProperty(key) {
                return function (object) {
                  return object == null ? undefined : object[key];
                };
              }
              /**
               * A specialized version of `baseProperty` which supports deep paths.
               *
               * @private
               * @param {Array|string} path The path of the property to get.
               * @returns {Function} Returns the new function.
               */
              function basePropertyDeep(path) {
                var pathKey = path + '';
                path = toPath(path);
                return function (object) {
                  return baseGet(object, path, pathKey);
                };
              }
              /**
               * The base implementation of `_.pullAt` without support for individual
               * index arguments and capturing the removed elements.
               *
               * @private
               * @param {Array} array The array to modify.
               * @param {number[]} indexes The indexes of elements to remove.
               * @returns {Array} Returns `array`.
               */
              function basePullAt(array, indexes) {
                var length = array ? indexes.length : 0;
                while (length--) {
                  var index = indexes[length];
                  if (index != previous && isIndex(index)) {
                    var previous = index;
                    splice.call(array, index, 1);
                  }
                }
                return array;
              }
              /**
               * The base implementation of `_.random` without support for argument juggling
               * and returning floating-point numbers.
               *
               * @private
               * @param {number} min The minimum possible value.
               * @param {number} max The maximum possible value.
               * @returns {number} Returns the random number.
               */
              function baseRandom(min, max) {
                return min + nativeFloor(nativeRandom() * (max - min + 1));
              }
              /**
               * The base implementation of `_.reduce` and `_.reduceRight` without support
               * for callback shorthands and `this` binding, which iterates over `collection`
               * using the provided `eachFunc`.
               *
               * @private
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @param {*} accumulator The initial value.
               * @param {boolean} initFromCollection Specify using the first or last element
               *  of `collection` as the initial value.
               * @param {Function} eachFunc The function to iterate over `collection`.
               * @returns {*} Returns the accumulated value.
               */
              function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
                eachFunc(collection, function (value, index, collection) {
                  accumulator = initFromCollection ? (initFromCollection = false, value) : iteratee(accumulator, value, index, collection);
                });
                return accumulator;
              }
              /**
               * The base implementation of `setData` without support for hot loop detection.
               *
               * @private
               * @param {Function} func The function to associate metadata with.
               * @param {*} data The metadata.
               * @returns {Function} Returns `func`.
               */
              var baseSetData = !metaMap ? identity : function (func, data) {
                metaMap.set(func, data);
                return func;
              };
              /**
               * The base implementation of `_.slice` without an iteratee call guard.
               *
               * @private
               * @param {Array} array The array to slice.
               * @param {number} [start=0] The start position.
               * @param {number} [end=array.length] The end position.
               * @returns {Array} Returns the slice of `array`.
               */
              function baseSlice(array, start, end) {
                var index = -1,
                  length = array.length;
                start = start == null ? 0 : +start || 0;
                if (start < 0) {
                  start = -start > length ? 0 : length + start;
                }
                end = end === undefined || end > length ? length : +end || 0;
                if (end < 0) {
                  end += length;
                }
                length = start > end ? 0 : end - start >>> 0;
                start >>>= 0;
                var result = Array(length);
                while (++index < length) {
                  result[index] = array[index + start];
                }
                return result;
              }
              /**
               * The base implementation of `_.some` without support for callback shorthands
               * and `this` binding.
               *
               * @private
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function} predicate The function invoked per iteration.
               * @returns {boolean} Returns `true` if any element passes the predicate check,
               *  else `false`.
               */
              function baseSome(collection, predicate) {
                var result;
                baseEach(collection, function (value, index, collection) {
                  result = predicate(value, index, collection);
                  return !result;
                });
                return !!result;
              }
              /**
               * The base implementation of `_.sortBy` which uses `comparer` to define
               * the sort order of `array` and replaces criteria objects with their
               * corresponding values.
               *
               * @private
               * @param {Array} array The array to sort.
               * @param {Function} comparer The function to define sort order.
               * @returns {Array} Returns `array`.
               */
              function baseSortBy(array, comparer) {
                var length = array.length;
                array.sort(comparer);
                while (length--) {
                  array[length] = array[length].value;
                }
                return array;
              }
              /**
               * The base implementation of `_.sortByOrder` without param guards.
               *
               * @private
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
               * @param {boolean[]} orders The sort orders of `iteratees`.
               * @returns {Array} Returns the new sorted array.
               */
              function baseSortByOrder(collection, iteratees, orders) {
                var callback = getCallback(),
                  index = -1;
                iteratees = arrayMap(iteratees, function (iteratee) {
                  return callback(iteratee);
                });
                var result = baseMap(collection, function (value) {
                  var criteria = arrayMap(iteratees, function (iteratee) {
                    return iteratee(value);
                  });
                  return {
                    'criteria': criteria,
                    'index': ++index,
                    'value': value
                  };
                });
                return baseSortBy(result, function (object, other) {
                  return compareMultiple(object, other, orders);
                });
              }
              /**
               * The base implementation of `_.sum` without support for callback shorthands
               * and `this` binding.
               *
               * @private
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function} iteratee The function invoked per iteration.
               * @returns {number} Returns the sum.
               */
              function baseSum(collection, iteratee) {
                var result = 0;
                baseEach(collection, function (value, index, collection) {
                  result += +iteratee(value, index, collection) || 0;
                });
                return result;
              }
              /**
               * The base implementation of `_.uniq` without support for callback shorthands
               * and `this` binding.
               *
               * @private
               * @param {Array} array The array to inspect.
               * @param {Function} [iteratee] The function invoked per iteration.
               * @returns {Array} Returns the new duplicate-value-free array.
               */
              function baseUniq(array, iteratee) {
                var index = -1,
                  indexOf = getIndexOf(),
                  length = array.length,
                  isCommon = indexOf == baseIndexOf,
                  isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
                  seen = isLarge ? createCache() : null,
                  result = [];
                if (seen) {
                  indexOf = cacheIndexOf;
                  isCommon = false;
                } else {
                  isLarge = false;
                  seen = iteratee ? [] : result;
                }
                outer: while (++index < length) {
                  var value = array[index],
                    computed = iteratee ? iteratee(value, index, array) : value;
                  if (isCommon && value === value) {
                    var seenIndex = seen.length;
                    while (seenIndex--) {
                      if (seen[seenIndex] === computed) {
                        continue outer;
                      }
                    }
                    if (iteratee) {
                      seen.push(computed);
                    }
                    result.push(value);
                  } else if (indexOf(seen, computed, 0) < 0) {
                    if (iteratee || isLarge) {
                      seen.push(computed);
                    }
                    result.push(value);
                  }
                }
                return result;
              }
              /**
               * The base implementation of `_.values` and `_.valuesIn` which creates an
               * array of `object` property values corresponding to the property names
               * of `props`.
               *
               * @private
               * @param {Object} object The object to query.
               * @param {Array} props The property names to get values for.
               * @returns {Object} Returns the array of property values.
               */
              function baseValues(object, props) {
                var index = -1,
                  length = props.length,
                  result = Array(length);
                while (++index < length) {
                  result[index] = object[props[index]];
                }
                return result;
              }
              /**
               * The base implementation of `_.dropRightWhile`, `_.dropWhile`, `_.takeRightWhile`,
               * and `_.takeWhile` without support for callback shorthands and `this` binding.
               *
               * @private
               * @param {Array} array The array to query.
               * @param {Function} predicate The function invoked per iteration.
               * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
               * @param {boolean} [fromRight] Specify iterating from right to left.
               * @returns {Array} Returns the slice of `array`.
               */
              function baseWhile(array, predicate, isDrop, fromRight) {
                var length = array.length,
                  index = fromRight ? length : -1;
                while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
                return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
              }
              /**
               * The base implementation of `wrapperValue` which returns the result of
               * performing a sequence of actions on the unwrapped `value`, where each
               * successive action is supplied the return value of the previous.
               *
               * @private
               * @param {*} value The unwrapped value.
               * @param {Array} actions Actions to peform to resolve the unwrapped value.
               * @returns {*} Returns the resolved value.
               */
              function baseWrapperValue(value, actions) {
                var result = value;
                if (result instanceof LazyWrapper) {
                  result = result.value();
                }
                var index = -1,
                  length = actions.length;
                while (++index < length) {
                  var action = actions[index];
                  result = action.func.apply(action.thisArg, arrayPush([result], action.args));
                }
                return result;
              }
              /**
               * Performs a binary search of `array` to determine the index at which `value`
               * should be inserted into `array` in order to maintain its sort order.
               *
               * @private
               * @param {Array} array The sorted array to inspect.
               * @param {*} value The value to evaluate.
               * @param {boolean} [retHighest] Specify returning the highest qualified index.
               * @returns {number} Returns the index at which `value` should be inserted
               *  into `array`.
               */
              function binaryIndex(array, value, retHighest) {
                var low = 0,
                  high = array ? array.length : low;
                if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
                  while (low < high) {
                    var mid = low + high >>> 1,
                      computed = array[mid];
                    if ((retHighest ? computed <= value : computed < value) && computed !== null) {
                      low = mid + 1;
                    } else {
                      high = mid;
                    }
                  }
                  return high;
                }
                return binaryIndexBy(array, value, identity, retHighest);
              }
              /**
               * This function is like `binaryIndex` except that it invokes `iteratee` for
               * `value` and each element of `array` to compute their sort ranking. The
               * iteratee is invoked with one argument; (value).
               *
               * @private
               * @param {Array} array The sorted array to inspect.
               * @param {*} value The value to evaluate.
               * @param {Function} iteratee The function invoked per iteration.
               * @param {boolean} [retHighest] Specify returning the highest qualified index.
               * @returns {number} Returns the index at which `value` should be inserted
               *  into `array`.
               */
              function binaryIndexBy(array, value, iteratee, retHighest) {
                value = iteratee(value);
                var low = 0,
                  high = array ? array.length : 0,
                  valIsNaN = value !== value,
                  valIsNull = value === null,
                  valIsUndef = value === undefined;
                while (low < high) {
                  var mid = nativeFloor((low + high) / 2),
                    computed = iteratee(array[mid]),
                    isDef = computed !== undefined,
                    isReflexive = computed === computed;
                  if (valIsNaN) {
                    var setLow = isReflexive || retHighest;
                  } else if (valIsNull) {
                    setLow = isReflexive && isDef && (retHighest || computed != null);
                  } else if (valIsUndef) {
                    setLow = isReflexive && (retHighest || isDef);
                  } else if (computed == null) {
                    setLow = false;
                  } else {
                    setLow = retHighest ? computed <= value : computed < value;
                  }
                  if (setLow) {
                    low = mid + 1;
                  } else {
                    high = mid;
                  }
                }
                return nativeMin(high, MAX_ARRAY_INDEX);
              }
              /**
               * A specialized version of `baseCallback` which only supports `this` binding
               * and specifying the number of arguments to provide to `func`.
               *
               * @private
               * @param {Function} func The function to bind.
               * @param {*} thisArg The `this` binding of `func`.
               * @param {number} [argCount] The number of arguments to provide to `func`.
               * @returns {Function} Returns the callback.
               */
              function bindCallback(func, thisArg, argCount) {
                if (typeof func != 'function') {
                  return identity;
                }
                if (thisArg === undefined) {
                  return func;
                }
                switch (argCount) {
                case 1:
                  return function (value) {
                    return func.call(thisArg, value);
                  };
                case 3:
                  return function (value, index, collection) {
                    return func.call(thisArg, value, index, collection);
                  };
                case 4:
                  return function (accumulator, value, index, collection) {
                    return func.call(thisArg, accumulator, value, index, collection);
                  };
                case 5:
                  return function (value, other, key, object, source) {
                    return func.call(thisArg, value, other, key, object, source);
                  };
                }
                return function () {
                  return func.apply(thisArg, arguments);
                };
              }
              /**
               * Creates a clone of the given array buffer.
               *
               * @private
               * @param {ArrayBuffer} buffer The array buffer to clone.
               * @returns {ArrayBuffer} Returns the cloned array buffer.
               */
              function bufferClone(buffer) {
                var result = new ArrayBuffer(buffer.byteLength),
                  view = new Uint8Array(result);
                view.set(new Uint8Array(buffer));
                return result;
              }
              /**
               * Creates an array that is the composition of partially applied arguments,
               * placeholders, and provided arguments into a single array of arguments.
               *
               * @private
               * @param {Array|Object} args The provided arguments.
               * @param {Array} partials The arguments to prepend to those provided.
               * @param {Array} holders The `partials` placeholder indexes.
               * @returns {Array} Returns the new array of composed arguments.
               */
              function composeArgs(args, partials, holders) {
                var holdersLength = holders.length,
                  argsIndex = -1,
                  argsLength = nativeMax(args.length - holdersLength, 0),
                  leftIndex = -1,
                  leftLength = partials.length,
                  result = Array(leftLength + argsLength);
                while (++leftIndex < leftLength) {
                  result[leftIndex] = partials[leftIndex];
                }
                while (++argsIndex < holdersLength) {
                  result[holders[argsIndex]] = args[argsIndex];
                }
                while (argsLength--) {
                  result[leftIndex++] = args[argsIndex++];
                }
                return result;
              }
              /**
               * This function is like `composeArgs` except that the arguments composition
               * is tailored for `_.partialRight`.
               *
               * @private
               * @param {Array|Object} args The provided arguments.
               * @param {Array} partials The arguments to append to those provided.
               * @param {Array} holders The `partials` placeholder indexes.
               * @returns {Array} Returns the new array of composed arguments.
               */
              function composeArgsRight(args, partials, holders) {
                var holdersIndex = -1,
                  holdersLength = holders.length,
                  argsIndex = -1,
                  argsLength = nativeMax(args.length - holdersLength, 0),
                  rightIndex = -1,
                  rightLength = partials.length,
                  result = Array(argsLength + rightLength);
                while (++argsIndex < argsLength) {
                  result[argsIndex] = args[argsIndex];
                }
                var offset = argsIndex;
                while (++rightIndex < rightLength) {
                  result[offset + rightIndex] = partials[rightIndex];
                }
                while (++holdersIndex < holdersLength) {
                  result[offset + holders[holdersIndex]] = args[argsIndex++];
                }
                return result;
              }
              /**
               * Creates a `_.countBy`, `_.groupBy`, `_.indexBy`, or `_.partition` function.
               *
               * @private
               * @param {Function} setter The function to set keys and values of the accumulator object.
               * @param {Function} [initializer] The function to initialize the accumulator object.
               * @returns {Function} Returns the new aggregator function.
               */
              function createAggregator(setter, initializer) {
                return function (collection, iteratee, thisArg) {
                  var result = initializer ? initializer() : {};
                  iteratee = getCallback(iteratee, thisArg, 3);
                  if (isArray(collection)) {
                    var index = -1,
                      length = collection.length;
                    while (++index < length) {
                      var value = collection[index];
                      setter(result, value, iteratee(value, index, collection), collection);
                    }
                  } else {
                    baseEach(collection, function (value, key, collection) {
                      setter(result, value, iteratee(value, key, collection), collection);
                    });
                  }
                  return result;
                };
              }
              /**
               * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
               *
               * @private
               * @param {Function} assigner The function to assign values.
               * @returns {Function} Returns the new assigner function.
               */
              function createAssigner(assigner) {
                return restParam(function (object, sources) {
                  var index = -1,
                    length = object == null ? 0 : sources.length,
                    customizer = length > 2 ? sources[length - 2] : undefined,
                    guard = length > 2 ? sources[2] : undefined,
                    thisArg = length > 1 ? sources[length - 1] : undefined;
                  if (typeof customizer == 'function') {
                    customizer = bindCallback(customizer, thisArg, 5);
                    length -= 2;
                  } else {
                    customizer = typeof thisArg == 'function' ? thisArg : undefined;
                    length -= customizer ? 1 : 0;
                  }
                  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                    customizer = length < 3 ? undefined : customizer;
                    length = 1;
                  }
                  while (++index < length) {
                    var source = sources[index];
                    if (source) {
                      assigner(object, source, customizer);
                    }
                  }
                  return object;
                });
              }
              /**
               * Creates a `baseEach` or `baseEachRight` function.
               *
               * @private
               * @param {Function} eachFunc The function to iterate over a collection.
               * @param {boolean} [fromRight] Specify iterating from right to left.
               * @returns {Function} Returns the new base function.
               */
              function createBaseEach(eachFunc, fromRight) {
                return function (collection, iteratee) {
                  var length = collection ? getLength(collection) : 0;
                  if (!isLength(length)) {
                    return eachFunc(collection, iteratee);
                  }
                  var index = fromRight ? length : -1,
                    iterable = toObject(collection);
                  while (fromRight ? index-- : ++index < length) {
                    if (iteratee(iterable[index], index, iterable) === false) {
                      break;
                    }
                  }
                  return collection;
                };
              }
              /**
               * Creates a base function for `_.forIn` or `_.forInRight`.
               *
               * @private
               * @param {boolean} [fromRight] Specify iterating from right to left.
               * @returns {Function} Returns the new base function.
               */
              function createBaseFor(fromRight) {
                return function (object, iteratee, keysFunc) {
                  var iterable = toObject(object),
                    props = keysFunc(object),
                    length = props.length,
                    index = fromRight ? length : -1;
                  while (fromRight ? index-- : ++index < length) {
                    var key = props[index];
                    if (iteratee(iterable[key], key, iterable) === false) {
                      break;
                    }
                  }
                  return object;
                };
              }
              /**
               * Creates a function that wraps `func` and invokes it with the `this`
               * binding of `thisArg`.
               *
               * @private
               * @param {Function} func The function to bind.
               * @param {*} [thisArg] The `this` binding of `func`.
               * @returns {Function} Returns the new bound function.
               */
              function createBindWrapper(func, thisArg) {
                var Ctor = createCtorWrapper(func);

                function wrapper() {
                  var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                  return fn.apply(thisArg, arguments);
                }
                return wrapper;
              }
              /**
               * Creates a `Set` cache object to optimize linear searches of large arrays.
               *
               * @private
               * @param {Array} [values] The values to cache.
               * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
               */
              function createCache(values) {
                return nativeCreate && Set ? new SetCache(values) : null;
              }
              /**
               * Creates a function that produces compound words out of the words in a
               * given string.
               *
               * @private
               * @param {Function} callback The function to combine each word.
               * @returns {Function} Returns the new compounder function.
               */
              function createCompounder(callback) {
                return function (string) {
                  var index = -1,
                    array = words(deburr(string)),
                    length = array.length,
                    result = '';
                  while (++index < length) {
                    result = callback(result, array[index], index);
                  }
                  return result;
                };
              }
              /**
               * Creates a function that produces an instance of `Ctor` regardless of
               * whether it was invoked as part of a `new` expression or by `call` or `apply`.
               *
               * @private
               * @param {Function} Ctor The constructor to wrap.
               * @returns {Function} Returns the new wrapped function.
               */
              function createCtorWrapper(Ctor) {
                return function () { // Use a `switch` statement to work with class constructors.
                  // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
                  // for more details.
                  var args = arguments;
                  switch (args.length) {
                  case 0:
                    return new Ctor();
                  case 1:
                    return new Ctor(args[0]);
                  case 2:
                    return new Ctor(args[0], args[1]);
                  case 3:
                    return new Ctor(args[0], args[1], args[2]);
                  case 4:
                    return new Ctor(args[0], args[1], args[2], args[3]);
                  case 5:
                    return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                  case 6:
                    return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                  case 7:
                    return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
                  }
                  var thisBinding = baseCreate(Ctor.prototype),
                    result = Ctor.apply(thisBinding, args); // Mimic the constructor's `return` behavior.
                  // See https://es5.github.io/#x13.2.2 for more details.
                  return isObject(result) ? result : thisBinding;
                };
              }
              /**
               * Creates a `_.curry` or `_.curryRight` function.
               *
               * @private
               * @param {boolean} flag The curry bit flag.
               * @returns {Function} Returns the new curry function.
               */
              function createCurry(flag) {
                function curryFunc(func, arity, guard) {
                  if (guard && isIterateeCall(func, arity, guard)) {
                    arity = undefined;
                  }
                  var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
                  result.placeholder = curryFunc.placeholder;
                  return result;
                }
                return curryFunc;
              }
              /**
               * Creates a `_.defaults` or `_.defaultsDeep` function.
               *
               * @private
               * @param {Function} assigner The function to assign values.
               * @param {Function} customizer The function to customize assigned values.
               * @returns {Function} Returns the new defaults function.
               */
              function createDefaults(assigner, customizer) {
                return restParam(function (args) {
                  var object = args[0];
                  if (object == null) {
                    return object;
                  }
                  args.push(customizer);
                  return assigner.apply(undefined, args);
                });
              }
              /**
               * Creates a `_.max` or `_.min` function.
               *
               * @private
               * @param {Function} comparator The function used to compare values.
               * @param {*} exValue The initial extremum value.
               * @returns {Function} Returns the new extremum function.
               */
              function createExtremum(comparator, exValue) {
                return function (collection, iteratee, thisArg) {
                  if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
                    iteratee = undefined;
                  }
                  iteratee = getCallback(iteratee, thisArg, 3);
                  if (iteratee.length == 1) {
                    collection = isArray(collection) ? collection : toIterable(collection);
                    var result = arrayExtremum(collection, iteratee, comparator, exValue);
                    if (!(collection.length && result === exValue)) {
                      return result;
                    }
                  }
                  return baseExtremum(collection, iteratee, comparator, exValue);
                };
              }
              /**
               * Creates a `_.find` or `_.findLast` function.
               *
               * @private
               * @param {Function} eachFunc The function to iterate over a collection.
               * @param {boolean} [fromRight] Specify iterating from right to left.
               * @returns {Function} Returns the new find function.
               */
              function createFind(eachFunc, fromRight) {
                return function (collection, predicate, thisArg) {
                  predicate = getCallback(predicate, thisArg, 3);
                  if (isArray(collection)) {
                    var index = baseFindIndex(collection, predicate, fromRight);
                    return index > -1 ? collection[index] : undefined;
                  }
                  return baseFind(collection, predicate, eachFunc);
                };
              }
              /**
               * Creates a `_.findIndex` or `_.findLastIndex` function.
               *
               * @private
               * @param {boolean} [fromRight] Specify iterating from right to left.
               * @returns {Function} Returns the new find function.
               */
              function createFindIndex(fromRight) {
                return function (array, predicate, thisArg) {
                  if (!(array && array.length)) {
                    return -1;
                  }
                  predicate = getCallback(predicate, thisArg, 3);
                  return baseFindIndex(array, predicate, fromRight);
                };
              }
              /**
               * Creates a `_.findKey` or `_.findLastKey` function.
               *
               * @private
               * @param {Function} objectFunc The function to iterate over an object.
               * @returns {Function} Returns the new find function.
               */
              function createFindKey(objectFunc) {
                return function (object, predicate, thisArg) {
                  predicate = getCallback(predicate, thisArg, 3);
                  return baseFind(object, predicate, objectFunc, true);
                };
              }
              /**
               * Creates a `_.flow` or `_.flowRight` function.
               *
               * @private
               * @param {boolean} [fromRight] Specify iterating from right to left.
               * @returns {Function} Returns the new flow function.
               */
              function createFlow(fromRight) {
                return function () {
                  var wrapper, length = arguments.length,
                    index = fromRight ? length : -1,
                    leftIndex = 0,
                    funcs = Array(length);
                  while (fromRight ? index-- : ++index < length) {
                    var func = funcs[leftIndex++] = arguments[index];
                    if (typeof func != 'function') {
                      throw new TypeError(FUNC_ERROR_TEXT);
                    }
                    if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
                      wrapper = new LodashWrapper([], true);
                    }
                  }
                  index = wrapper ? -1 : length;
                  while (++index < length) {
                    func = funcs[index];
                    var funcName = getFuncName(func),
                      data = funcName == 'wrapper' ? getData(func) : undefined;
                    if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
                      wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                    } else {
                      wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                    }
                  }
                  return function () {
                    var args = arguments,
                      value = args[0];
                    if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
                      return wrapper.plant(value).value();
                    }
                    var index = 0,
                      result = length ? funcs[index].apply(this, args) : value;
                    while (++index < length) {
                      result = funcs[index].call(this, result);
                    }
                    return result;
                  };
                };
              }
              /**
               * Creates a function for `_.forEach` or `_.forEachRight`.
               *
               * @private
               * @param {Function} arrayFunc The function to iterate over an array.
               * @param {Function} eachFunc The function to iterate over a collection.
               * @returns {Function} Returns the new each function.
               */
              function createForEach(arrayFunc, eachFunc) {
                return function (collection, iteratee, thisArg) {
                  return typeof iteratee == 'function' && thisArg === undefined && isArray(collection) ? arrayFunc(collection, iteratee) : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
                };
              }
              /**
               * Creates a function for `_.forIn` or `_.forInRight`.
               *
               * @private
               * @param {Function} objectFunc The function to iterate over an object.
               * @returns {Function} Returns the new each function.
               */
              function createForIn(objectFunc) {
                return function (object, iteratee, thisArg) {
                  if (typeof iteratee != 'function' || thisArg !== undefined) {
                    iteratee = bindCallback(iteratee, thisArg, 3);
                  }
                  return objectFunc(object, iteratee, keysIn);
                };
              }
              /**
               * Creates a function for `_.forOwn` or `_.forOwnRight`.
               *
               * @private
               * @param {Function} objectFunc The function to iterate over an object.
               * @returns {Function} Returns the new each function.
               */
              function createForOwn(objectFunc) {
                return function (object, iteratee, thisArg) {
                  if (typeof iteratee != 'function' || thisArg !== undefined) {
                    iteratee = bindCallback(iteratee, thisArg, 3);
                  }
                  return objectFunc(object, iteratee);
                };
              }
              /**
               * Creates a function for `_.mapKeys` or `_.mapValues`.
               *
               * @private
               * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
               * @returns {Function} Returns the new map function.
               */
              function createObjectMapper(isMapKeys) {
                return function (object, iteratee, thisArg) {
                  var result = {};
                  iteratee = getCallback(iteratee, thisArg, 3);
                  baseForOwn(object, function (value, key, object) {
                    var mapped = iteratee(value, key, object);
                    key = isMapKeys ? mapped : key;
                    value = isMapKeys ? value : mapped;
                    result[key] = value;
                  });
                  return result;
                };
              }
              /**
               * Creates a function for `_.padLeft` or `_.padRight`.
               *
               * @private
               * @param {boolean} [fromRight] Specify padding from the right.
               * @returns {Function} Returns the new pad function.
               */
              function createPadDir(fromRight) {
                return function (string, length, chars) {
                  string = baseToString(string);
                  return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
                };
              }
              /**
               * Creates a `_.partial` or `_.partialRight` function.
               *
               * @private
               * @param {boolean} flag The partial bit flag.
               * @returns {Function} Returns the new partial function.
               */
              function createPartial(flag) {
                var partialFunc = restParam(function (func, partials) {
                  var holders = replaceHolders(partials, partialFunc.placeholder);
                  return createWrapper(func, flag, undefined, partials, holders);
                });
                return partialFunc;
              }
              /**
               * Creates a function for `_.reduce` or `_.reduceRight`.
               *
               * @private
               * @param {Function} arrayFunc The function to iterate over an array.
               * @param {Function} eachFunc The function to iterate over a collection.
               * @returns {Function} Returns the new each function.
               */
              function createReduce(arrayFunc, eachFunc) {
                return function (collection, iteratee, accumulator, thisArg) {
                  var initFromArray = arguments.length < 3;
                  return typeof iteratee == 'function' && thisArg === undefined && isArray(collection) ? arrayFunc(collection, iteratee, accumulator, initFromArray) : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
                };
              }
              /**
               * Creates a function that wraps `func` and invokes it with optional `this`
               * binding of, partial application, and currying.
               *
               * @private
               * @param {Function|string} func The function or method name to reference.
               * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
               * @param {*} [thisArg] The `this` binding of `func`.
               * @param {Array} [partials] The arguments to prepend to those provided to the new function.
               * @param {Array} [holders] The `partials` placeholder indexes.
               * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
               * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
               * @param {Array} [argPos] The argument positions of the new function.
               * @param {number} [ary] The arity cap of `func`.
               * @param {number} [arity] The arity of `func`.
               * @returns {Function} Returns the new wrapped function.
               */
              function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
                var isAry = bitmask & ARY_FLAG,
                  isBind = bitmask & BIND_FLAG,
                  isBindKey = bitmask & BIND_KEY_FLAG,
                  isCurry = bitmask & CURRY_FLAG,
                  isCurryBound = bitmask & CURRY_BOUND_FLAG,
                  isCurryRight = bitmask & CURRY_RIGHT_FLAG,
                  Ctor = isBindKey ? undefined : createCtorWrapper(func);

                function wrapper() { // Avoid `arguments` object use disqualifying optimizations by
                  // converting it to an array before providing it to other functions.
                  var length = arguments.length,
                    index = length,
                    args = Array(length);
                  while (index--) {
                    args[index] = arguments[index];
                  }
                  if (partials) {
                    args = composeArgs(args, partials, holders);
                  }
                  if (partialsRight) {
                    args = composeArgsRight(args, partialsRight, holdersRight);
                  }
                  if (isCurry || isCurryRight) {
                    var placeholder = wrapper.placeholder,
                      argsHolders = replaceHolders(args, placeholder);
                    length -= argsHolders.length;
                    if (length < arity) {
                      var newArgPos = argPos ? arrayCopy(argPos) : undefined,
                        newArity = nativeMax(arity - length, 0),
                        newsHolders = isCurry ? argsHolders : undefined,
                        newHoldersRight = isCurry ? undefined : argsHolders,
                        newPartials = isCurry ? args : undefined,
                        newPartialsRight = isCurry ? undefined : args;
                      bitmask |= isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG;
                      bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
                      if (!isCurryBound) {
                        bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
                      }
                      var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
                        result = createHybridWrapper.apply(undefined, newData);
                      if (isLaziable(func)) {
                        setData(result, newData);
                      }
                      result.placeholder = placeholder;
                      return result;
                    }
                  }
                  var thisBinding = isBind ? thisArg : this,
                    fn = isBindKey ? thisBinding[func] : func;
                  if (argPos) {
                    args = reorder(args, argPos);
                  }
                  if (isAry && ary < args.length) {
                    args.length = ary;
                  }
                  if (this && this !== root && this instanceof wrapper) {
                    fn = Ctor || createCtorWrapper(func);
                  }
                  return fn.apply(thisBinding, args);
                }
                return wrapper;
              }
              /**
               * Creates the padding required for `string` based on the given `length`.
               * The `chars` string is truncated if the number of characters exceeds `length`.
               *
               * @private
               * @param {string} string The string to create padding for.
               * @param {number} [length=0] The padding length.
               * @param {string} [chars=' '] The string used as padding.
               * @returns {string} Returns the pad for `string`.
               */
              function createPadding(string, length, chars) {
                var strLength = string.length;
                length = +length;
                if (strLength >= length || !nativeIsFinite(length)) {
                  return '';
                }
                var padLength = length - strLength;
                chars = chars == null ? ' ' : chars + '';
                return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
              }
              /**
               * Creates a function that wraps `func` and invokes it with the optional `this`
               * binding of `thisArg` and the `partials` prepended to those provided to
               * the wrapper.
               *
               * @private
               * @param {Function} func The function to partially apply arguments to.
               * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
               * @param {*} thisArg The `this` binding of `func`.
               * @param {Array} partials The arguments to prepend to those provided to the new function.
               * @returns {Function} Returns the new bound function.
               */
              function createPartialWrapper(func, bitmask, thisArg, partials) {
                var isBind = bitmask & BIND_FLAG,
                  Ctor = createCtorWrapper(func);

                function wrapper() { // Avoid `arguments` object use disqualifying optimizations by
                  // converting it to an array before providing it `func`.
                  var argsIndex = -1,
                    argsLength = arguments.length,
                    leftIndex = -1,
                    leftLength = partials.length,
                    args = Array(leftLength + argsLength);
                  while (++leftIndex < leftLength) {
                    args[leftIndex] = partials[leftIndex];
                  }
                  while (argsLength--) {
                    args[leftIndex++] = arguments[++argsIndex];
                  }
                  var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                  return fn.apply(isBind ? thisArg : this, args);
                }
                return wrapper;
              }
              /**
               * Creates a `_.ceil`, `_.floor`, or `_.round` function.
               *
               * @private
               * @param {string} methodName The name of the `Math` method to use when rounding.
               * @returns {Function} Returns the new round function.
               */
              function createRound(methodName) {
                var func = Math[methodName];
                return function (number, precision) {
                  precision = precision === undefined ? 0 : +precision || 0;
                  if (precision) {
                    precision = pow(10, precision);
                    return func(number * precision) / precision;
                  }
                  return func(number);
                };
              }
              /**
               * Creates a `_.sortedIndex` or `_.sortedLastIndex` function.
               *
               * @private
               * @param {boolean} [retHighest] Specify returning the highest qualified index.
               * @returns {Function} Returns the new index function.
               */
              function createSortedIndex(retHighest) {
                return function (array, value, iteratee, thisArg) {
                  var callback = getCallback(iteratee);
                  return iteratee == null && callback === baseCallback ? binaryIndex(array, value, retHighest) : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
                };
              }
              /**
               * Creates a function that either curries or invokes `func` with optional
               * `this` binding and partially applied arguments.
               *
               * @private
               * @param {Function|string} func The function or method name to reference.
               * @param {number} bitmask The bitmask of flags.
               *  The bitmask may be composed of the following flags:
               *     1 - `_.bind`
               *     2 - `_.bindKey`
               *     4 - `_.curry` or `_.curryRight` of a bound function
               *     8 - `_.curry`
               *    16 - `_.curryRight`
               *    32 - `_.partial`
               *    64 - `_.partialRight`
               *   128 - `_.rearg`
               *   256 - `_.ary`
               * @param {*} [thisArg] The `this` binding of `func`.
               * @param {Array} [partials] The arguments to be partially applied.
               * @param {Array} [holders] The `partials` placeholder indexes.
               * @param {Array} [argPos] The argument positions of the new function.
               * @param {number} [ary] The arity cap of `func`.
               * @param {number} [arity] The arity of `func`.
               * @returns {Function} Returns the new wrapped function.
               */
              function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
                var isBindKey = bitmask & BIND_KEY_FLAG;
                if (!isBindKey && typeof func != 'function') {
                  throw new TypeError(FUNC_ERROR_TEXT);
                }
                var length = partials ? partials.length : 0;
                if (!length) {
                  bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
                  partials = holders = undefined;
                }
                length -= holders ? holders.length : 0;
                if (bitmask & PARTIAL_RIGHT_FLAG) {
                  var partialsRight = partials,
                    holdersRight = holders;
                  partials = holders = undefined;
                }
                var data = isBindKey ? undefined : getData(func),
                  newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
                if (data) {
                  mergeData(newData, data);
                  bitmask = newData[1];
                  arity = newData[9];
                }
                newData[9] = arity == null ? isBindKey ? 0 : func.length : nativeMax(arity - length, 0) || 0;
                if (bitmask == BIND_FLAG) {
                  var result = createBindWrapper(newData[0], newData[2]);
                } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
                  result = createPartialWrapper.apply(undefined, newData);
                } else {
                  result = createHybridWrapper.apply(undefined, newData);
                }
                var setter = data ? baseSetData : setData;
                return setter(result, newData);
              }
              /**
               * A specialized version of `baseIsEqualDeep` for arrays with support for
               * partial deep comparisons.
               *
               * @private
               * @param {Array} array The array to compare.
               * @param {Array} other The other array to compare.
               * @param {Function} equalFunc The function to determine equivalents of values.
               * @param {Function} [customizer] The function to customize comparing arrays.
               * @param {boolean} [isLoose] Specify performing partial comparisons.
               * @param {Array} [stackA] Tracks traversed `value` objects.
               * @param {Array} [stackB] Tracks traversed `other` objects.
               * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
               */
              function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
                var index = -1,
                  arrLength = array.length,
                  othLength = other.length;
                if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
                  return false;
                } // Ignore non-index properties.
                while (++index < arrLength) {
                  var arrValue = array[index],
                    othValue = other[index],
                    result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
                  if (result !== undefined) {
                    if (result) {
                      continue;
                    }
                    return false;
                  } // Recursively compare arrays (susceptible to call stack limits).
                  if (isLoose) {
                    if (!arraySome(other, function (othValue) {
                        return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
                      })) {
                      return false;
                    }
                  } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
                    return false;
                  }
                }
                return true;
              }
              /**
               * A specialized version of `baseIsEqualDeep` for comparing objects of
               * the same `toStringTag`.
               *
               * **Note:** This function only supports comparing values with tags of
               * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
               *
               * @private
               * @param {Object} object The object to compare.
               * @param {Object} other The other object to compare.
               * @param {string} tag The `toStringTag` of the objects to compare.
               * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
               */
              function equalByTag(object, other, tag) {
                switch (tag) {
                case boolTag:
                case dateTag: // Coerce dates and booleans to numbers, dates to milliseconds and booleans
                  // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
                  return +object == +other;
                case errorTag:
                  return object.name == other.name && object.message == other.message;
                case numberTag: // Treat `NaN` vs. `NaN` as equal.
                  return object != +object ? other != +other : object == +other;
                case regexpTag:
                case stringTag: // Coerce regexes to strings and treat strings primitives and string
                  // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
                  return object == other + '';
                }
                return false;
              }
              /**
               * A specialized version of `baseIsEqualDeep` for objects with support for
               * partial deep comparisons.
               *
               * @private
               * @param {Object} object The object to compare.
               * @param {Object} other The other object to compare.
               * @param {Function} equalFunc The function to determine equivalents of values.
               * @param {Function} [customizer] The function to customize comparing values.
               * @param {boolean} [isLoose] Specify performing partial comparisons.
               * @param {Array} [stackA] Tracks traversed `value` objects.
               * @param {Array} [stackB] Tracks traversed `other` objects.
               * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
               */
              function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
                var objProps = keys(object),
                  objLength = objProps.length,
                  othProps = keys(other),
                  othLength = othProps.length;
                if (objLength != othLength && !isLoose) {
                  return false;
                }
                var index = objLength;
                while (index--) {
                  var key = objProps[index];
                  if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
                    return false;
                  }
                }
                var skipCtor = isLoose;
                while (++index < objLength) {
                  key = objProps[index];
                  var objValue = object[key],
                    othValue = other[key],
                    result = customizer ? customizer(isLoose ? othValue : objValue, isLoose ? objValue : othValue, key) : undefined; // Recursively compare objects (susceptible to call stack limits).
                  if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
                    return false;
                  }
                  skipCtor || (skipCtor = key == 'constructor');
                }
                if (!skipCtor) {
                  var objCtor = object.constructor,
                    othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.
                  if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
                    return false;
                  }
                }
                return true;
              }
              /**
               * Gets the appropriate "callback" function. If the `_.callback` method is
               * customized this function returns the custom method, otherwise it returns
               * the `baseCallback` function. If arguments are provided the chosen function
               * is invoked with them and its result is returned.
               *
               * @private
               * @returns {Function} Returns the chosen function or its result.
               */
              function getCallback(func, thisArg, argCount) {
                var result = lodash.callback || callback;
                result = result === callback ? baseCallback : result;
                return argCount ? result(func, thisArg, argCount) : result;
              }
              /**
               * Gets metadata for `func`.
               *
               * @private
               * @param {Function} func The function to query.
               * @returns {*} Returns the metadata for `func`.
               */
              var getData = !metaMap ? noop : function (func) {
                return metaMap.get(func);
              };
              /**
               * Gets the name of `func`.
               *
               * @private
               * @param {Function} func The function to query.
               * @returns {string} Returns the function name.
               */
              function getFuncName(func) {
                var result = func.name,
                  array = realNames[result],
                  length = array ? array.length : 0;
                while (length--) {
                  var data = array[length],
                    otherFunc = data.func;
                  if (otherFunc == null || otherFunc == func) {
                    return data.name;
                  }
                }
                return result;
              }
              /**
               * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
               * customized this function returns the custom method, otherwise it returns
               * the `baseIndexOf` function. If arguments are provided the chosen function
               * is invoked with them and its result is returned.
               *
               * @private
               * @returns {Function|number} Returns the chosen function or its result.
               */
              function getIndexOf(collection, target, fromIndex) {
                var result = lodash.indexOf || indexOf;
                result = result === indexOf ? baseIndexOf : result;
                return collection ? result(collection, target, fromIndex) : result;
              }
              /**
               * Gets the "length" property value of `object`.
               *
               * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
               * that affects Safari on at least iOS 8.1-8.3 ARM64.
               *
               * @private
               * @param {Object} object The object to query.
               * @returns {*} Returns the "length" value.
               */
              var getLength = baseProperty('length');
              /**
               * Gets the propery names, values, and compare flags of `object`.
               *
               * @private
               * @param {Object} object The object to query.
               * @returns {Array} Returns the match data of `object`.
               */
              function getMatchData(object) {
                var result = pairs(object),
                  length = result.length;
                while (length--) {
                  result[length][2] = isStrictComparable(result[length][1]);
                }
                return result;
              }
              /**
               * Gets the native function at `key` of `object`.
               *
               * @private
               * @param {Object} object The object to query.
               * @param {string} key The key of the method to get.
               * @returns {*} Returns the function if it's native, else `undefined`.
               */
              function getNative(object, key) {
                var value = object == null ? undefined : object[key];
                return isNative(value) ? value : undefined;
              }
              /**
               * Gets the view, applying any `transforms` to the `start` and `end` positions.
               *
               * @private
               * @param {number} start The start of the view.
               * @param {number} end The end of the view.
               * @param {Array} transforms The transformations to apply to the view.
               * @returns {Object} Returns an object containing the `start` and `end`
               *  positions of the view.
               */
              function getView(start, end, transforms) {
                var index = -1,
                  length = transforms.length;
                while (++index < length) {
                  var data = transforms[index],
                    size = data.size;
                  switch (data.type) {
                  case 'drop':
                    start += size;
                    break;
                  case 'dropRight':
                    end -= size;
                    break;
                  case 'take':
                    end = nativeMin(end, start + size);
                    break;
                  case 'takeRight':
                    start = nativeMax(start, end - size);
                    break;
                  }
                }
                return {
                  'start': start,
                  'end': end
                };
              }
              /**
               * Initializes an array clone.
               *
               * @private
               * @param {Array} array The array to clone.
               * @returns {Array} Returns the initialized clone.
               */
              function initCloneArray(array) {
                var length = array.length,
                  result = new array.constructor(length); // Add array properties assigned by `RegExp#exec`.
                if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
                  result.index = array.index;
                  result.input = array.input;
                }
                return result;
              }
              /**
               * Initializes an object clone.
               *
               * @private
               * @param {Object} object The object to clone.
               * @returns {Object} Returns the initialized clone.
               */
              function initCloneObject(object) {
                var Ctor = object.constructor;
                if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
                  Ctor = Object;
                }
                return new Ctor();
              }
              /**
               * Initializes an object clone based on its `toStringTag`.
               *
               * **Note:** This function only supports cloning values with tags of
               * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
               *
               * @private
               * @param {Object} object The object to clone.
               * @param {string} tag The `toStringTag` of the object to clone.
               * @param {boolean} [isDeep] Specify a deep clone.
               * @returns {Object} Returns the initialized clone.
               */
              function initCloneByTag(object, tag, isDeep) {
                var Ctor = object.constructor;
                switch (tag) {
                case arrayBufferTag:
                  return bufferClone(object);
                case boolTag:
                case dateTag:
                  return new Ctor(+object);
                case float32Tag:
                case float64Tag:
                case int8Tag:
                case int16Tag:
                case int32Tag:
                case uint8Tag:
                case uint8ClampedTag:
                case uint16Tag:
                case uint32Tag:
                  var buffer = object.buffer;
                  return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);
                case numberTag:
                case stringTag:
                  return new Ctor(object);
                case regexpTag:
                  var result = new Ctor(object.source, reFlags.exec(object));
                  result.lastIndex = object.lastIndex;
                }
                return result;
              }
              /**
               * Invokes the method at `path` on `object`.
               *
               * @private
               * @param {Object} object The object to query.
               * @param {Array|string} path The path of the method to invoke.
               * @param {Array} args The arguments to invoke the method with.
               * @returns {*} Returns the result of the invoked method.
               */
              function invokePath(object, path, args) {
                if (object != null && !isKey(path, object)) {
                  path = toPath(path);
                  object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
                  path = last(path);
                }
                var func = object == null ? object : object[path];
                return func == null ? undefined : func.apply(object, args);
              }
              /**
               * Checks if `value` is array-like.
               *
               * @private
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
               */
              function isArrayLike(value) {
                return value != null && isLength(getLength(value));
              }
              /**
               * Checks if `value` is a valid array-like index.
               *
               * @private
               * @param {*} value The value to check.
               * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
               * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
               */
              function isIndex(value, length) {
                value = typeof value == 'number' || reIsUint.test(value) ? +value : -1;
                length = length == null ? MAX_SAFE_INTEGER : length;
                return value > -1 && value % 1 == 0 && value < length;
              }
              /**
               * Checks if the provided arguments are from an iteratee call.
               *
               * @private
               * @param {*} value The potential iteratee value argument.
               * @param {*} index The potential iteratee index or key argument.
               * @param {*} object The potential iteratee object argument.
               * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
               */
              function isIterateeCall(value, index, object) {
                if (!isObject(object)) {
                  return false;
                }
                var type = typeof index;
                if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
                  var other = object[index];
                  return value === value ? value === other : other !== other;
                }
                return false;
              }
              /**
               * Checks if `value` is a property name and not a property path.
               *
               * @private
               * @param {*} value The value to check.
               * @param {Object} [object] The object to query keys on.
               * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
               */
              function isKey(value, object) {
                var type = typeof value;
                if (type == 'string' && reIsPlainProp.test(value) || type == 'number') {
                  return true;
                }
                if (isArray(value)) {
                  return false;
                }
                var result = !reIsDeepProp.test(value);
                return result || object != null && value in toObject(object);
              }
              /**
               * Checks if `func` has a lazy counterpart.
               *
               * @private
               * @param {Function} func The function to check.
               * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
               */
              function isLaziable(func) {
                var funcName = getFuncName(func);
                if (!(funcName in LazyWrapper.prototype)) {
                  return false;
                }
                var other = lodash[funcName];
                if (func === other) {
                  return true;
                }
                var data = getData(other);
                return !!data && func === data[0];
              }
              /**
               * Checks if `value` is a valid array-like length.
               *
               * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
               *
               * @private
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
               */
              function isLength(value) {
                return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
              }
              /**
               * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
               *
               * @private
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` if suitable for strict
               *  equality comparisons, else `false`.
               */
              function isStrictComparable(value) {
                return value === value && !isObject(value);
              }
              /**
               * Merges the function metadata of `source` into `data`.
               *
               * Merging metadata reduces the number of wrappers required to invoke a function.
               * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
               * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
               * augment function arguments, making the order in which they are executed important,
               * preventing the merging of metadata. However, we make an exception for a safe
               * common case where curried functions have `_.ary` and or `_.rearg` applied.
               *
               * @private
               * @param {Array} data The destination metadata.
               * @param {Array} source The source metadata.
               * @returns {Array} Returns `data`.
               */
              function mergeData(data, source) {
                var bitmask = data[1],
                  srcBitmask = source[1],
                  newBitmask = bitmask | srcBitmask,
                  isCommon = newBitmask < ARY_FLAG;
                var isCombo = srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG || srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8] || srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG; // Exit early if metadata can't be merged.
                if (!(isCommon || isCombo)) {
                  return data;
                } // Use source `thisArg` if available.
                if (srcBitmask & BIND_FLAG) {
                  data[2] = source[2]; // Set when currying a bound function.
                  newBitmask |= bitmask & BIND_FLAG ? 0 : CURRY_BOUND_FLAG;
                } // Compose partial arguments.
                var value = source[3];
                if (value) {
                  var partials = data[3];
                  data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
                  data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
                } // Compose partial right arguments.
                value = source[5];
                if (value) {
                  partials = data[5];
                  data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
                  data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
                } // Use source `argPos` if available.
                value = source[7];
                if (value) {
                  data[7] = arrayCopy(value);
                } // Use source `ary` if it's smaller.
                if (srcBitmask & ARY_FLAG) {
                  data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
                } // Use source `arity` if one is not provided.
                if (data[9] == null) {
                  data[9] = source[9];
                } // Use source `func` and merge bitmasks.
                data[0] = source[0];
                data[1] = newBitmask;
                return data;
              }
              /**
               * Used by `_.defaultsDeep` to customize its `_.merge` use.
               *
               * @private
               * @param {*} objectValue The destination object property value.
               * @param {*} sourceValue The source object property value.
               * @returns {*} Returns the value to assign to the destination object.
               */
              function mergeDefaults(objectValue, sourceValue) {
                return objectValue === undefined ? sourceValue : merge(objectValue, sourceValue, mergeDefaults);
              }
              /**
               * A specialized version of `_.pick` which picks `object` properties specified
               * by `props`.
               *
               * @private
               * @param {Object} object The source object.
               * @param {string[]} props The property names to pick.
               * @returns {Object} Returns the new object.
               */
              function pickByArray(object, props) {
                object = toObject(object);
                var index = -1,
                  length = props.length,
                  result = {};
                while (++index < length) {
                  var key = props[index];
                  if (key in object) {
                    result[key] = object[key];
                  }
                }
                return result;
              }
              /**
               * A specialized version of `_.pick` which picks `object` properties `predicate`
               * returns truthy for.
               *
               * @private
               * @param {Object} object The source object.
               * @param {Function} predicate The function invoked per iteration.
               * @returns {Object} Returns the new object.
               */
              function pickByCallback(object, predicate) {
                var result = {};
                baseForIn(object, function (value, key, object) {
                  if (predicate(value, key, object)) {
                    result[key] = value;
                  }
                });
                return result;
              }
              /**
               * Reorder `array` according to the specified indexes where the element at
               * the first index is assigned as the first element, the element at
               * the second index is assigned as the second element, and so on.
               *
               * @private
               * @param {Array} array The array to reorder.
               * @param {Array} indexes The arranged array indexes.
               * @returns {Array} Returns `array`.
               */
              function reorder(array, indexes) {
                var arrLength = array.length,
                  length = nativeMin(indexes.length, arrLength),
                  oldArray = arrayCopy(array);
                while (length--) {
                  var index = indexes[length];
                  array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
                }
                return array;
              }
              /**
               * Sets metadata for `func`.
               *
               * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
               * period of time, it will trip its breaker and transition to an identity function
               * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
               * for more details.
               *
               * @private
               * @param {Function} func The function to associate metadata with.
               * @param {*} data The metadata.
               * @returns {Function} Returns `func`.
               */
              var setData = (function () {
                var count = 0,
                  lastCalled = 0;
                return function (key, value) {
                  var stamp = now(),
                    remaining = HOT_SPAN - (stamp - lastCalled);
                  lastCalled = stamp;
                  if (remaining > 0) {
                    if (++count >= HOT_COUNT) {
                      return key;
                    }
                  } else {
                    count = 0;
                  }
                  return baseSetData(key, value);
                };
              })();
              /**
               * A fallback implementation of `Object.keys` which creates an array of the
               * own enumerable property names of `object`.
               *
               * @private
               * @param {Object} object The object to query.
               * @returns {Array} Returns the array of property names.
               */
              function shimKeys(object) {
                var props = keysIn(object),
                  propsLength = props.length,
                  length = propsLength && object.length;
                var allowIndexes = !!length && isLength(length) && (isArray(object) || isArguments(object));
                var index = -1,
                  result = [];
                while (++index < propsLength) {
                  var key = props[index];
                  if (allowIndexes && isIndex(key, length) || hasOwnProperty.call(object, key)) {
                    result.push(key);
                  }
                }
                return result;
              }
              /**
               * Converts `value` to an array-like object if it's not one.
               *
               * @private
               * @param {*} value The value to process.
               * @returns {Array|Object} Returns the array-like object.
               */
              function toIterable(value) {
                if (value == null) {
                  return [];
                }
                if (!isArrayLike(value)) {
                  return values(value);
                }
                return isObject(value) ? value : Object(value);
              }
              /**
               * Converts `value` to an object if it's not one.
               *
               * @private
               * @param {*} value The value to process.
               * @returns {Object} Returns the object.
               */
              function toObject(value) {
                return isObject(value) ? value : Object(value);
              }
              /**
               * Converts `value` to property path array if it's not one.
               *
               * @private
               * @param {*} value The value to process.
               * @returns {Array} Returns the property path array.
               */
              function toPath(value) {
                if (isArray(value)) {
                  return value;
                }
                var result = [];
                baseToString(value).replace(rePropName, function (match, number, quote, string) {
                  result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
                });
                return result;
              }
              /**
               * Creates a clone of `wrapper`.
               *
               * @private
               * @param {Object} wrapper The wrapper to clone.
               * @returns {Object} Returns the cloned wrapper.
               */
              function wrapperClone(wrapper) {
                return wrapper instanceof LazyWrapper ? wrapper.clone() : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
              } /*------------------------------------------------------------------------*/
              /**
               * Creates an array of elements split into groups the length of `size`.
               * If `collection` can't be split evenly, the final chunk will be the remaining
               * elements.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to process.
               * @param {number} [size=1] The length of each chunk.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {Array} Returns the new array containing chunks.
               * @example
               *
               * _.chunk(['a', 'b', 'c', 'd'], 2);
               * // => [['a', 'b'], ['c', 'd']]
               *
               * _.chunk(['a', 'b', 'c', 'd'], 3);
               * // => [['a', 'b', 'c'], ['d']]
               */
              function chunk(array, size, guard) {
                if (guard ? isIterateeCall(array, size, guard) : size == null) {
                  size = 1;
                } else {
                  size = nativeMax(nativeFloor(size) || 1, 1);
                }
                var index = 0,
                  length = array ? array.length : 0,
                  resIndex = -1,
                  result = Array(nativeCeil(length / size));
                while (index < length) {
                  result[++resIndex] = baseSlice(array, index, index += size);
                }
                return result;
              }
              /**
               * Creates an array with all falsey values removed. The values `false`, `null`,
               * `0`, `""`, `undefined`, and `NaN` are falsey.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to compact.
               * @returns {Array} Returns the new array of filtered values.
               * @example
               *
               * _.compact([0, 1, false, 2, '', 3]);
               * // => [1, 2, 3]
               */
              function compact(array) {
                var index = -1,
                  length = array ? array.length : 0,
                  resIndex = -1,
                  result = [];
                while (++index < length) {
                  var value = array[index];
                  if (value) {
                    result[++resIndex] = value;
                  }
                }
                return result;
              }
              /**
               * Creates an array of unique `array` values not included in the other
               * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
               * for equality comparisons.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to inspect.
               * @param {...Array} [values] The arrays of values to exclude.
               * @returns {Array} Returns the new array of filtered values.
               * @example
               *
               * _.difference([1, 2, 3], [4, 2]);
               * // => [1, 3]
               */
              var difference = restParam(function (array, values) {
                return isObjectLike(array) && isArrayLike(array) ? baseDifference(array, baseFlatten(values, false, true)) : [];
              });
              /**
               * Creates a slice of `array` with `n` elements dropped from the beginning.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to query.
               * @param {number} [n=1] The number of elements to drop.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {Array} Returns the slice of `array`.
               * @example
               *
               * _.drop([1, 2, 3]);
               * // => [2, 3]
               *
               * _.drop([1, 2, 3], 2);
               * // => [3]
               *
               * _.drop([1, 2, 3], 5);
               * // => []
               *
               * _.drop([1, 2, 3], 0);
               * // => [1, 2, 3]
               */
              function drop(array, n, guard) {
                var length = array ? array.length : 0;
                if (!length) {
                  return [];
                }
                if (guard ? isIterateeCall(array, n, guard) : n == null) {
                  n = 1;
                }
                return baseSlice(array, n < 0 ? 0 : n);
              }
              /**
               * Creates a slice of `array` with `n` elements dropped from the end.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to query.
               * @param {number} [n=1] The number of elements to drop.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {Array} Returns the slice of `array`.
               * @example
               *
               * _.dropRight([1, 2, 3]);
               * // => [1, 2]
               *
               * _.dropRight([1, 2, 3], 2);
               * // => [1]
               *
               * _.dropRight([1, 2, 3], 5);
               * // => []
               *
               * _.dropRight([1, 2, 3], 0);
               * // => [1, 2, 3]
               */
              function dropRight(array, n, guard) {
                var length = array ? array.length : 0;
                if (!length) {
                  return [];
                }
                if (guard ? isIterateeCall(array, n, guard) : n == null) {
                  n = 1;
                }
                n = length - (+n || 0);
                return baseSlice(array, 0, n < 0 ? 0 : n);
              }
              /**
               * Creates a slice of `array` excluding elements dropped from the end.
               * Elements are dropped until `predicate` returns falsey. The predicate is
               * bound to `thisArg` and invoked with three arguments: (value, index, array).
               *
               * If a property name is provided for `predicate` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `predicate` the created `_.matches` style
               * callback returns `true` for elements that match the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to query.
               * @param {Function|Object|string} [predicate=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {Array} Returns the slice of `array`.
               * @example
               *
               * _.dropRightWhile([1, 2, 3], function(n) {
               *   return n > 1;
               * });
               * // => [1]
               *
               * var users = [
               *   { 'user': 'barney',  'active': true },
               *   { 'user': 'fred',    'active': false },
               *   { 'user': 'pebbles', 'active': false }
               * ];
               *
               * // using the `_.matches` callback shorthand
               * _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
               * // => ['barney', 'fred']
               *
               * // using the `_.matchesProperty` callback shorthand
               * _.pluck(_.dropRightWhile(users, 'active', false), 'user');
               * // => ['barney']
               *
               * // using the `_.property` callback shorthand
               * _.pluck(_.dropRightWhile(users, 'active'), 'user');
               * // => ['barney', 'fred', 'pebbles']
               */
              function dropRightWhile(array, predicate, thisArg) {
                return array && array.length ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true) : [];
              }
              /**
               * Creates a slice of `array` excluding elements dropped from the beginning.
               * Elements are dropped until `predicate` returns falsey. The predicate is
               * bound to `thisArg` and invoked with three arguments: (value, index, array).
               *
               * If a property name is provided for `predicate` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `predicate` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to query.
               * @param {Function|Object|string} [predicate=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {Array} Returns the slice of `array`.
               * @example
               *
               * _.dropWhile([1, 2, 3], function(n) {
               *   return n < 3;
               * });
               * // => [3]
               *
               * var users = [
               *   { 'user': 'barney',  'active': false },
               *   { 'user': 'fred',    'active': false },
               *   { 'user': 'pebbles', 'active': true }
               * ];
               *
               * // using the `_.matches` callback shorthand
               * _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
               * // => ['fred', 'pebbles']
               *
               * // using the `_.matchesProperty` callback shorthand
               * _.pluck(_.dropWhile(users, 'active', false), 'user');
               * // => ['pebbles']
               *
               * // using the `_.property` callback shorthand
               * _.pluck(_.dropWhile(users, 'active'), 'user');
               * // => ['barney', 'fred', 'pebbles']
               */
              function dropWhile(array, predicate, thisArg) {
                return array && array.length ? baseWhile(array, getCallback(predicate, thisArg, 3), true) : [];
              }
              /**
               * Fills elements of `array` with `value` from `start` up to, but not
               * including, `end`.
               *
               * **Note:** This method mutates `array`.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to fill.
               * @param {*} value The value to fill `array` with.
               * @param {number} [start=0] The start position.
               * @param {number} [end=array.length] The end position.
               * @returns {Array} Returns `array`.
               * @example
               *
               * var array = [1, 2, 3];
               *
               * _.fill(array, 'a');
               * console.log(array);
               * // => ['a', 'a', 'a']
               *
               * _.fill(Array(3), 2);
               * // => [2, 2, 2]
               *
               * _.fill([4, 6, 8], '*', 1, 2);
               * // => [4, '*', 8]
               */
              function fill(array, value, start, end) {
                var length = array ? array.length : 0;
                if (!length) {
                  return [];
                }
                if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
                  start = 0;
                  end = length;
                }
                return baseFill(array, value, start, end);
              }
              /**
               * This method is like `_.find` except that it returns the index of the first
               * element `predicate` returns truthy for instead of the element itself.
               *
               * If a property name is provided for `predicate` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `predicate` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to search.
               * @param {Function|Object|string} [predicate=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {number} Returns the index of the found element, else `-1`.
               * @example
               *
               * var users = [
               *   { 'user': 'barney',  'active': false },
               *   { 'user': 'fred',    'active': false },
               *   { 'user': 'pebbles', 'active': true }
               * ];
               *
               * _.findIndex(users, function(chr) {
               *   return chr.user == 'barney';
               * });
               * // => 0
               *
               * // using the `_.matches` callback shorthand
               * _.findIndex(users, { 'user': 'fred', 'active': false });
               * // => 1
               *
               * // using the `_.matchesProperty` callback shorthand
               * _.findIndex(users, 'active', false);
               * // => 0
               *
               * // using the `_.property` callback shorthand
               * _.findIndex(users, 'active');
               * // => 2
               */
              var findIndex = createFindIndex();
              /**
               * This method is like `_.findIndex` except that it iterates over elements
               * of `collection` from right to left.
               *
               * If a property name is provided for `predicate` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `predicate` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to search.
               * @param {Function|Object|string} [predicate=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {number} Returns the index of the found element, else `-1`.
               * @example
               *
               * var users = [
               *   { 'user': 'barney',  'active': true },
               *   { 'user': 'fred',    'active': false },
               *   { 'user': 'pebbles', 'active': false }
               * ];
               *
               * _.findLastIndex(users, function(chr) {
               *   return chr.user == 'pebbles';
               * });
               * // => 2
               *
               * // using the `_.matches` callback shorthand
               * _.findLastIndex(users, { 'user': 'barney', 'active': true });
               * // => 0
               *
               * // using the `_.matchesProperty` callback shorthand
               * _.findLastIndex(users, 'active', false);
               * // => 2
               *
               * // using the `_.property` callback shorthand
               * _.findLastIndex(users, 'active');
               * // => 0
               */
              var findLastIndex = createFindIndex(true);
              /**
               * Gets the first element of `array`.
               *
               * @static
               * @memberOf _
               * @alias head
               * @category Array
               * @param {Array} array The array to query.
               * @returns {*} Returns the first element of `array`.
               * @example
               *
               * _.first([1, 2, 3]);
               * // => 1
               *
               * _.first([]);
               * // => undefined
               */
              function first(array) {
                return array ? array[0] : undefined;
              }
              /**
               * Flattens a nested array. If `isDeep` is `true` the array is recursively
               * flattened, otherwise it is only flattened a single level.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to flatten.
               * @param {boolean} [isDeep] Specify a deep flatten.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {Array} Returns the new flattened array.
               * @example
               *
               * _.flatten([1, [2, 3, [4]]]);
               * // => [1, 2, 3, [4]]
               *
               * // using `isDeep`
               * _.flatten([1, [2, 3, [4]]], true);
               * // => [1, 2, 3, 4]
               */
              function flatten(array, isDeep, guard) {
                var length = array ? array.length : 0;
                if (guard && isIterateeCall(array, isDeep, guard)) {
                  isDeep = false;
                }
                return length ? baseFlatten(array, isDeep) : [];
              }
              /**
               * Recursively flattens a nested array.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to recursively flatten.
               * @returns {Array} Returns the new flattened array.
               * @example
               *
               * _.flattenDeep([1, [2, 3, [4]]]);
               * // => [1, 2, 3, 4]
               */
              function flattenDeep(array) {
                var length = array ? array.length : 0;
                return length ? baseFlatten(array, true) : [];
              }
              /**
               * Gets the index at which the first occurrence of `value` is found in `array`
               * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
               * for equality comparisons. If `fromIndex` is negative, it is used as the offset
               * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
               * performs a faster binary search.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to search.
               * @param {*} value The value to search for.
               * @param {boolean|number} [fromIndex=0] The index to search from or `true`
               *  to perform a binary search on a sorted array.
               * @returns {number} Returns the index of the matched value, else `-1`.
               * @example
               *
               * _.indexOf([1, 2, 1, 2], 2);
               * // => 1
               *
               * // using `fromIndex`
               * _.indexOf([1, 2, 1, 2], 2, 2);
               * // => 3
               *
               * // performing a binary search
               * _.indexOf([1, 1, 2, 2], 2, true);
               * // => 2
               */
              function indexOf(array, value, fromIndex) {
                var length = array ? array.length : 0;
                if (!length) {
                  return -1;
                }
                if (typeof fromIndex == 'number') {
                  fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
                } else if (fromIndex) {
                  var index = binaryIndex(array, value);
                  if (index < length && (value === value ? value === array[index] : array[index] !== array[index])) {
                    return index;
                  }
                  return -1;
                }
                return baseIndexOf(array, value, fromIndex || 0);
              }
              /**
               * Gets all but the last element of `array`.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to query.
               * @returns {Array} Returns the slice of `array`.
               * @example
               *
               * _.initial([1, 2, 3]);
               * // => [1, 2]
               */
              function initial(array) {
                return dropRight(array, 1);
              }
              /**
               * Creates an array of unique values that are included in all of the provided
               * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
               * for equality comparisons.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {...Array} [arrays] The arrays to inspect.
               * @returns {Array} Returns the new array of shared values.
               * @example
               * _.intersection([1, 2], [4, 2], [2, 1]);
               * // => [2]
               */
              var intersection = restParam(function (arrays) {
                var othLength = arrays.length,
                  othIndex = othLength,
                  caches = Array(length),
                  indexOf = getIndexOf(),
                  isCommon = indexOf == baseIndexOf,
                  result = [];
                while (othIndex--) {
                  var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
                  caches[othIndex] = isCommon && value.length >= 120 ? createCache(othIndex && value) : null;
                }
                var array = arrays[0],
                  index = -1,
                  length = array ? array.length : 0,
                  seen = caches[0];
                outer: while (++index < length) {
                  value = array[index];
                  if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
                    var othIndex = othLength;
                    while (--othIndex) {
                      var cache = caches[othIndex];
                      if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
                        continue outer;
                      }
                    }
                    if (seen) {
                      seen.push(value);
                    }
                    result.push(value);
                  }
                }
                return result;
              });
              /**
               * Gets the last element of `array`.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to query.
               * @returns {*} Returns the last element of `array`.
               * @example
               *
               * _.last([1, 2, 3]);
               * // => 3
               */
              function last(array) {
                var length = array ? array.length : 0;
                return length ? array[length - 1] : undefined;
              }
              /**
               * This method is like `_.indexOf` except that it iterates over elements of
               * `array` from right to left.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to search.
               * @param {*} value The value to search for.
               * @param {boolean|number} [fromIndex=array.length-1] The index to search from
               *  or `true` to perform a binary search on a sorted array.
               * @returns {number} Returns the index of the matched value, else `-1`.
               * @example
               *
               * _.lastIndexOf([1, 2, 1, 2], 2);
               * // => 3
               *
               * // using `fromIndex`
               * _.lastIndexOf([1, 2, 1, 2], 2, 2);
               * // => 1
               *
               * // performing a binary search
               * _.lastIndexOf([1, 1, 2, 2], 2, true);
               * // => 3
               */
              function lastIndexOf(array, value, fromIndex) {
                var length = array ? array.length : 0;
                if (!length) {
                  return -1;
                }
                var index = length;
                if (typeof fromIndex == 'number') {
                  index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
                } else if (fromIndex) {
                  index = binaryIndex(array, value, true) - 1;
                  var other = array[index];
                  if (value === value ? value === other : other !== other) {
                    return index;
                  }
                  return -1;
                }
                if (value !== value) {
                  return indexOfNaN(array, index, true);
                }
                while (index--) {
                  if (array[index] === value) {
                    return index;
                  }
                }
                return -1;
              }
              /**
               * Removes all provided values from `array` using
               * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
               * for equality comparisons.
               *
               * **Note:** Unlike `_.without`, this method mutates `array`.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to modify.
               * @param {...*} [values] The values to remove.
               * @returns {Array} Returns `array`.
               * @example
               *
               * var array = [1, 2, 3, 1, 2, 3];
               *
               * _.pull(array, 2, 3);
               * console.log(array);
               * // => [1, 1]
               */
              function pull() {
                var args = arguments,
                  array = args[0];
                if (!(array && array.length)) {
                  return array;
                }
                var index = 0,
                  indexOf = getIndexOf(),
                  length = args.length;
                while (++index < length) {
                  var fromIndex = 0,
                    value = args[index];
                  while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
                    splice.call(array, fromIndex, 1);
                  }
                }
                return array;
              }
              /**
               * Removes elements from `array` corresponding to the given indexes and returns
               * an array of the removed elements. Indexes may be specified as an array of
               * indexes or as individual arguments.
               *
               * **Note:** Unlike `_.at`, this method mutates `array`.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to modify.
               * @param {...(number|number[])} [indexes] The indexes of elements to remove,
               *  specified as individual indexes or arrays of indexes.
               * @returns {Array} Returns the new array of removed elements.
               * @example
               *
               * var array = [5, 10, 15, 20];
               * var evens = _.pullAt(array, 1, 3);
               *
               * console.log(array);
               * // => [5, 15]
               *
               * console.log(evens);
               * // => [10, 20]
               */
              var pullAt = restParam(function (array, indexes) {
                indexes = baseFlatten(indexes);
                var result = baseAt(array, indexes);
                basePullAt(array, indexes.sort(baseCompareAscending));
                return result;
              });
              /**
               * Removes all elements from `array` that `predicate` returns truthy for
               * and returns an array of the removed elements. The predicate is bound to
               * `thisArg` and invoked with three arguments: (value, index, array).
               *
               * If a property name is provided for `predicate` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `predicate` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * **Note:** Unlike `_.filter`, this method mutates `array`.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to modify.
               * @param {Function|Object|string} [predicate=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {Array} Returns the new array of removed elements.
               * @example
               *
               * var array = [1, 2, 3, 4];
               * var evens = _.remove(array, function(n) {
               *   return n % 2 == 0;
               * });
               *
               * console.log(array);
               * // => [1, 3]
               *
               * console.log(evens);
               * // => [2, 4]
               */
              function remove(array, predicate, thisArg) {
                var result = [];
                if (!(array && array.length)) {
                  return result;
                }
                var index = -1,
                  indexes = [],
                  length = array.length;
                predicate = getCallback(predicate, thisArg, 3);
                while (++index < length) {
                  var value = array[index];
                  if (predicate(value, index, array)) {
                    result.push(value);
                    indexes.push(index);
                  }
                }
                basePullAt(array, indexes);
                return result;
              }
              /**
               * Gets all but the first element of `array`.
               *
               * @static
               * @memberOf _
               * @alias tail
               * @category Array
               * @param {Array} array The array to query.
               * @returns {Array} Returns the slice of `array`.
               * @example
               *
               * _.rest([1, 2, 3]);
               * // => [2, 3]
               */
              function rest(array) {
                return drop(array, 1);
              }
              /**
               * Creates a slice of `array` from `start` up to, but not including, `end`.
               *
               * **Note:** This method is used instead of `Array#slice` to support node
               * lists in IE < 9 and to ensure dense arrays are returned.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to slice.
               * @param {number} [start=0] The start position.
               * @param {number} [end=array.length] The end position.
               * @returns {Array} Returns the slice of `array`.
               */
              function slice(array, start, end) {
                var length = array ? array.length : 0;
                if (!length) {
                  return [];
                }
                if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
                  start = 0;
                  end = length;
                }
                return baseSlice(array, start, end);
              }
              /**
               * Uses a binary search to determine the lowest index at which `value` should
               * be inserted into `array` in order to maintain its sort order. If an iteratee
               * function is provided it is invoked for `value` and each element of `array`
               * to compute their sort ranking. The iteratee is bound to `thisArg` and
               * invoked with one argument; (value).
               *
               * If a property name is provided for `iteratee` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `iteratee` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The sorted array to inspect.
               * @param {*} value The value to evaluate.
               * @param {Function|Object|string} [iteratee=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {number} Returns the index at which `value` should be inserted
               *  into `array`.
               * @example
               *
               * _.sortedIndex([30, 50], 40);
               * // => 1
               *
               * _.sortedIndex([4, 4, 5, 5], 5);
               * // => 2
               *
               * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
               *
               * // using an iteratee function
               * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
               *   return this.data[word];
               * }, dict);
               * // => 1
               *
               * // using the `_.property` callback shorthand
               * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
               * // => 1
               */
              var sortedIndex = createSortedIndex();
              /**
               * This method is like `_.sortedIndex` except that it returns the highest
               * index at which `value` should be inserted into `array` in order to
               * maintain its sort order.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The sorted array to inspect.
               * @param {*} value The value to evaluate.
               * @param {Function|Object|string} [iteratee=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {number} Returns the index at which `value` should be inserted
               *  into `array`.
               * @example
               *
               * _.sortedLastIndex([4, 4, 5, 5], 5);
               * // => 4
               */
              var sortedLastIndex = createSortedIndex(true);
              /**
               * Creates a slice of `array` with `n` elements taken from the beginning.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to query.
               * @param {number} [n=1] The number of elements to take.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {Array} Returns the slice of `array`.
               * @example
               *
               * _.take([1, 2, 3]);
               * // => [1]
               *
               * _.take([1, 2, 3], 2);
               * // => [1, 2]
               *
               * _.take([1, 2, 3], 5);
               * // => [1, 2, 3]
               *
               * _.take([1, 2, 3], 0);
               * // => []
               */
              function take(array, n, guard) {
                var length = array ? array.length : 0;
                if (!length) {
                  return [];
                }
                if (guard ? isIterateeCall(array, n, guard) : n == null) {
                  n = 1;
                }
                return baseSlice(array, 0, n < 0 ? 0 : n);
              }
              /**
               * Creates a slice of `array` with `n` elements taken from the end.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to query.
               * @param {number} [n=1] The number of elements to take.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {Array} Returns the slice of `array`.
               * @example
               *
               * _.takeRight([1, 2, 3]);
               * // => [3]
               *
               * _.takeRight([1, 2, 3], 2);
               * // => [2, 3]
               *
               * _.takeRight([1, 2, 3], 5);
               * // => [1, 2, 3]
               *
               * _.takeRight([1, 2, 3], 0);
               * // => []
               */
              function takeRight(array, n, guard) {
                var length = array ? array.length : 0;
                if (!length) {
                  return [];
                }
                if (guard ? isIterateeCall(array, n, guard) : n == null) {
                  n = 1;
                }
                n = length - (+n || 0);
                return baseSlice(array, n < 0 ? 0 : n);
              }
              /**
               * Creates a slice of `array` with elements taken from the end. Elements are
               * taken until `predicate` returns falsey. The predicate is bound to `thisArg`
               * and invoked with three arguments: (value, index, array).
               *
               * If a property name is provided for `predicate` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `predicate` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to query.
               * @param {Function|Object|string} [predicate=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {Array} Returns the slice of `array`.
               * @example
               *
               * _.takeRightWhile([1, 2, 3], function(n) {
               *   return n > 1;
               * });
               * // => [2, 3]
               *
               * var users = [
               *   { 'user': 'barney',  'active': true },
               *   { 'user': 'fred',    'active': false },
               *   { 'user': 'pebbles', 'active': false }
               * ];
               *
               * // using the `_.matches` callback shorthand
               * _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
               * // => ['pebbles']
               *
               * // using the `_.matchesProperty` callback shorthand
               * _.pluck(_.takeRightWhile(users, 'active', false), 'user');
               * // => ['fred', 'pebbles']
               *
               * // using the `_.property` callback shorthand
               * _.pluck(_.takeRightWhile(users, 'active'), 'user');
               * // => []
               */
              function takeRightWhile(array, predicate, thisArg) {
                return array && array.length ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true) : [];
              }
              /**
               * Creates a slice of `array` with elements taken from the beginning. Elements
               * are taken until `predicate` returns falsey. The predicate is bound to
               * `thisArg` and invoked with three arguments: (value, index, array).
               *
               * If a property name is provided for `predicate` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `predicate` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to query.
               * @param {Function|Object|string} [predicate=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {Array} Returns the slice of `array`.
               * @example
               *
               * _.takeWhile([1, 2, 3], function(n) {
               *   return n < 3;
               * });
               * // => [1, 2]
               *
               * var users = [
               *   { 'user': 'barney',  'active': false },
               *   { 'user': 'fred',    'active': false},
               *   { 'user': 'pebbles', 'active': true }
               * ];
               *
               * // using the `_.matches` callback shorthand
               * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
               * // => ['barney']
               *
               * // using the `_.matchesProperty` callback shorthand
               * _.pluck(_.takeWhile(users, 'active', false), 'user');
               * // => ['barney', 'fred']
               *
               * // using the `_.property` callback shorthand
               * _.pluck(_.takeWhile(users, 'active'), 'user');
               * // => []
               */
              function takeWhile(array, predicate, thisArg) {
                return array && array.length ? baseWhile(array, getCallback(predicate, thisArg, 3)) : [];
              }
              /**
               * Creates an array of unique values, in order, from all of the provided arrays
               * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
               * for equality comparisons.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {...Array} [arrays] The arrays to inspect.
               * @returns {Array} Returns the new array of combined values.
               * @example
               *
               * _.union([1, 2], [4, 2], [2, 1]);
               * // => [1, 2, 4]
               */
              var union = restParam(function (arrays) {
                return baseUniq(baseFlatten(arrays, false, true));
              });
              /**
               * Creates a duplicate-free version of an array, using
               * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
               * for equality comparisons, in which only the first occurence of each element
               * is kept. Providing `true` for `isSorted` performs a faster search algorithm
               * for sorted arrays. If an iteratee function is provided it is invoked for
               * each element in the array to generate the criterion by which uniqueness
               * is computed. The `iteratee` is bound to `thisArg` and invoked with three
               * arguments: (value, index, array).
               *
               * If a property name is provided for `iteratee` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `iteratee` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @alias unique
               * @category Array
               * @param {Array} array The array to inspect.
               * @param {boolean} [isSorted] Specify the array is sorted.
               * @param {Function|Object|string} [iteratee] The function invoked per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Array} Returns the new duplicate-value-free array.
               * @example
               *
               * _.uniq([2, 1, 2]);
               * // => [2, 1]
               *
               * // using `isSorted`
               * _.uniq([1, 1, 2], true);
               * // => [1, 2]
               *
               * // using an iteratee function
               * _.uniq([1, 2.5, 1.5, 2], function(n) {
               *   return this.floor(n);
               * }, Math);
               * // => [1, 2.5]
               *
               * // using the `_.property` callback shorthand
               * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
               * // => [{ 'x': 1 }, { 'x': 2 }]
               */
              function uniq(array, isSorted, iteratee, thisArg) {
                var length = array ? array.length : 0;
                if (!length) {
                  return [];
                }
                if (isSorted != null && typeof isSorted != 'boolean') {
                  thisArg = iteratee;
                  iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
                  isSorted = false;
                }
                var callback = getCallback();
                if (!(iteratee == null && callback === baseCallback)) {
                  iteratee = callback(iteratee, thisArg, 3);
                }
                return isSorted && getIndexOf() == baseIndexOf ? sortedUniq(array, iteratee) : baseUniq(array, iteratee);
              }
              /**
               * This method is like `_.zip` except that it accepts an array of grouped
               * elements and creates an array regrouping the elements to their pre-zip
               * configuration.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array of grouped elements to process.
               * @returns {Array} Returns the new array of regrouped elements.
               * @example
               *
               * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
               * // => [['fred', 30, true], ['barney', 40, false]]
               *
               * _.unzip(zipped);
               * // => [['fred', 'barney'], [30, 40], [true, false]]
               */
              function unzip(array) {
                if (!(array && array.length)) {
                  return [];
                }
                var index = -1,
                  length = 0;
                array = arrayFilter(array, function (group) {
                  if (isArrayLike(group)) {
                    length = nativeMax(group.length, length);
                    return true;
                  }
                });
                var result = Array(length);
                while (++index < length) {
                  result[index] = arrayMap(array, baseProperty(index));
                }
                return result;
              }
              /**
               * This method is like `_.unzip` except that it accepts an iteratee to specify
               * how regrouped values should be combined. The `iteratee` is bound to `thisArg`
               * and invoked with four arguments: (accumulator, value, index, group).
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array of grouped elements to process.
               * @param {Function} [iteratee] The function to combine regrouped values.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Array} Returns the new array of regrouped elements.
               * @example
               *
               * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
               * // => [[1, 10, 100], [2, 20, 200]]
               *
               * _.unzipWith(zipped, _.add);
               * // => [3, 30, 300]
               */
              function unzipWith(array, iteratee, thisArg) {
                var length = array ? array.length : 0;
                if (!length) {
                  return [];
                }
                var result = unzip(array);
                if (iteratee == null) {
                  return result;
                }
                iteratee = bindCallback(iteratee, thisArg, 4);
                return arrayMap(result, function (group) {
                  return arrayReduce(group, iteratee, undefined, true);
                });
              }
              /**
               * Creates an array excluding all provided values using
               * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
               * for equality comparisons.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {Array} array The array to filter.
               * @param {...*} [values] The values to exclude.
               * @returns {Array} Returns the new array of filtered values.
               * @example
               *
               * _.without([1, 2, 1, 3], 1, 2);
               * // => [3]
               */
              var without = restParam(function (array, values) {
                return isArrayLike(array) ? baseDifference(array, values) : [];
              });
              /**
               * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
               * of the provided arrays.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {...Array} [arrays] The arrays to inspect.
               * @returns {Array} Returns the new array of values.
               * @example
               *
               * _.xor([1, 2], [4, 2]);
               * // => [1, 4]
               */
              function xor() {
                var index = -1,
                  length = arguments.length;
                while (++index < length) {
                  var array = arguments[index];
                  if (isArrayLike(array)) {
                    var result = result ? arrayPush(baseDifference(result, array), baseDifference(array, result)) : array;
                  }
                }
                return result ? baseUniq(result) : [];
              }
              /**
               * Creates an array of grouped elements, the first of which contains the first
               * elements of the given arrays, the second of which contains the second elements
               * of the given arrays, and so on.
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {...Array} [arrays] The arrays to process.
               * @returns {Array} Returns the new array of grouped elements.
               * @example
               *
               * _.zip(['fred', 'barney'], [30, 40], [true, false]);
               * // => [['fred', 30, true], ['barney', 40, false]]
               */
              var zip = restParam(unzip);
              /**
               * The inverse of `_.pairs`; this method returns an object composed from arrays
               * of property names and values. Provide either a single two dimensional array,
               * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
               * and one of corresponding values.
               *
               * @static
               * @memberOf _
               * @alias object
               * @category Array
               * @param {Array} props The property names.
               * @param {Array} [values=[]] The property values.
               * @returns {Object} Returns the new object.
               * @example
               *
               * _.zipObject([['fred', 30], ['barney', 40]]);
               * // => { 'fred': 30, 'barney': 40 }
               *
               * _.zipObject(['fred', 'barney'], [30, 40]);
               * // => { 'fred': 30, 'barney': 40 }
               */
              function zipObject(props, values) {
                var index = -1,
                  length = props ? props.length : 0,
                  result = {};
                if (length && !values && !isArray(props[0])) {
                  values = [];
                }
                while (++index < length) {
                  var key = props[index];
                  if (values) {
                    result[key] = values[index];
                  } else if (key) {
                    result[key[0]] = key[1];
                  }
                }
                return result;
              }
              /**
               * This method is like `_.zip` except that it accepts an iteratee to specify
               * how grouped values should be combined. The `iteratee` is bound to `thisArg`
               * and invoked with four arguments: (accumulator, value, index, group).
               *
               * @static
               * @memberOf _
               * @category Array
               * @param {...Array} [arrays] The arrays to process.
               * @param {Function} [iteratee] The function to combine grouped values.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Array} Returns the new array of grouped elements.
               * @example
               *
               * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
               * // => [111, 222]
               */
              var zipWith = restParam(function (arrays) {
                var length = arrays.length,
                  iteratee = length > 2 ? arrays[length - 2] : undefined,
                  thisArg = length > 1 ? arrays[length - 1] : undefined;
                if (length > 2 && typeof iteratee == 'function') {
                  length -= 2;
                } else {
                  iteratee = length > 1 && typeof thisArg == 'function' ? (--length, thisArg) : undefined;
                  thisArg = undefined;
                }
                arrays.length = length;
                return unzipWith(arrays, iteratee, thisArg);
              }); /*------------------------------------------------------------------------*/
              /**
               * Creates a `lodash` object that wraps `value` with explicit method
               * chaining enabled.
               *
               * @static
               * @memberOf _
               * @category Chain
               * @param {*} value The value to wrap.
               * @returns {Object} Returns the new `lodash` wrapper instance.
               * @example
               *
               * var users = [
               *   { 'user': 'barney',  'age': 36 },
               *   { 'user': 'fred',    'age': 40 },
               *   { 'user': 'pebbles', 'age': 1 }
               * ];
               *
               * var youngest = _.chain(users)
               *   .sortBy('age')
               *   .map(function(chr) {
               *     return chr.user + ' is ' + chr.age;
               *   })
               *   .first()
               *   .value();
               * // => 'pebbles is 1'
               */
              function chain(value) {
                var result = lodash(value);
                result.__chain__ = true;
                return result;
              }
              /**
               * This method invokes `interceptor` and returns `value`. The interceptor is
               * bound to `thisArg` and invoked with one argument; (value). The purpose of
               * this method is to "tap into" a method chain in order to perform operations
               * on intermediate results within the chain.
               *
               * @static
               * @memberOf _
               * @category Chain
               * @param {*} value The value to provide to `interceptor`.
               * @param {Function} interceptor The function to invoke.
               * @param {*} [thisArg] The `this` binding of `interceptor`.
               * @returns {*} Returns `value`.
               * @example
               *
               * _([1, 2, 3])
               *  .tap(function(array) {
               *    array.pop();
               *  })
               *  .reverse()
               *  .value();
               * // => [2, 1]
               */
              function tap(value, interceptor, thisArg) {
                interceptor.call(thisArg, value);
                return value;
              }
              /**
               * This method is like `_.tap` except that it returns the result of `interceptor`.
               *
               * @static
               * @memberOf _
               * @category Chain
               * @param {*} value The value to provide to `interceptor`.
               * @param {Function} interceptor The function to invoke.
               * @param {*} [thisArg] The `this` binding of `interceptor`.
               * @returns {*} Returns the result of `interceptor`.
               * @example
               *
               * _('  abc  ')
               *  .chain()
               *  .trim()
               *  .thru(function(value) {
               *    return [value];
               *  })
               *  .value();
               * // => ['abc']
               */
              function thru(value, interceptor, thisArg) {
                return interceptor.call(thisArg, value);
              }
              /**
               * Enables explicit method chaining on the wrapper object.
               *
               * @name chain
               * @memberOf _
               * @category Chain
               * @returns {Object} Returns the new `lodash` wrapper instance.
               * @example
               *
               * var users = [
               *   { 'user': 'barney', 'age': 36 },
               *   { 'user': 'fred',   'age': 40 }
               * ];
               *
               * // without explicit chaining
               * _(users).first();
               * // => { 'user': 'barney', 'age': 36 }
               *
               * // with explicit chaining
               * _(users).chain()
               *   .first()
               *   .pick('user')
               *   .value();
               * // => { 'user': 'barney' }
               */
              function wrapperChain() {
                return chain(this);
              }
              /**
               * Executes the chained sequence and returns the wrapped result.
               *
               * @name commit
               * @memberOf _
               * @category Chain
               * @returns {Object} Returns the new `lodash` wrapper instance.
               * @example
               *
               * var array = [1, 2];
               * var wrapped = _(array).push(3);
               *
               * console.log(array);
               * // => [1, 2]
               *
               * wrapped = wrapped.commit();
               * console.log(array);
               * // => [1, 2, 3]
               *
               * wrapped.last();
               * // => 3
               *
               * console.log(array);
               * // => [1, 2, 3]
               */
              function wrapperCommit() {
                return new LodashWrapper(this.value(), this.__chain__);
              }
              /**
               * Creates a new array joining a wrapped array with any additional arrays
               * and/or values.
               *
               * @name concat
               * @memberOf _
               * @category Chain
               * @param {...*} [values] The values to concatenate.
               * @returns {Array} Returns the new concatenated array.
               * @example
               *
               * var array = [1];
               * var wrapped = _(array).concat(2, [3], [[4]]);
               *
               * console.log(wrapped.value());
               * // => [1, 2, 3, [4]]
               *
               * console.log(array);
               * // => [1]
               */
              var wrapperConcat = restParam(function (values) {
                values = baseFlatten(values);
                return this.thru(function (array) {
                  return arrayConcat(isArray(array) ? array : [toObject(array)], values);
                });
              });
              /**
               * Creates a clone of the chained sequence planting `value` as the wrapped value.
               *
               * @name plant
               * @memberOf _
               * @category Chain
               * @returns {Object} Returns the new `lodash` wrapper instance.
               * @example
               *
               * var array = [1, 2];
               * var wrapped = _(array).map(function(value) {
               *   return Math.pow(value, 2);
               * });
               *
               * var other = [3, 4];
               * var otherWrapped = wrapped.plant(other);
               *
               * otherWrapped.value();
               * // => [9, 16]
               *
               * wrapped.value();
               * // => [1, 4]
               */
              function wrapperPlant(value) {
                var result, parent = this;
                while (parent instanceof baseLodash) {
                  var clone = wrapperClone(parent);
                  if (result) {
                    previous.__wrapped__ = clone;
                  } else {
                    result = clone;
                  }
                  var previous = clone;
                  parent = parent.__wrapped__;
                }
                previous.__wrapped__ = value;
                return result;
              }
              /**
               * Reverses the wrapped array so the first element becomes the last, the
               * second element becomes the second to last, and so on.
               *
               * **Note:** This method mutates the wrapped array.
               *
               * @name reverse
               * @memberOf _
               * @category Chain
               * @returns {Object} Returns the new reversed `lodash` wrapper instance.
               * @example
               *
               * var array = [1, 2, 3];
               *
               * _(array).reverse().value()
               * // => [3, 2, 1]
               *
               * console.log(array);
               * // => [3, 2, 1]
               */
              function wrapperReverse() {
                var value = this.__wrapped__;
                var interceptor = function interceptor(value) {
                  return wrapped && wrapped.__dir__ < 0 ? value : value.reverse();
                };
                if (value instanceof LazyWrapper) {
                  var wrapped = value;
                  if (this.__actions__.length) {
                    wrapped = new LazyWrapper(this);
                  }
                  wrapped = wrapped.reverse();
                  wrapped.__actions__.push({
                    'func': thru,
                    'args': [interceptor],
                    'thisArg': undefined
                  });
                  return new LodashWrapper(wrapped, this.__chain__);
                }
                return this.thru(interceptor);
              }
              /**
               * Produces the result of coercing the unwrapped value to a string.
               *
               * @name toString
               * @memberOf _
               * @category Chain
               * @returns {string} Returns the coerced string value.
               * @example
               *
               * _([1, 2, 3]).toString();
               * // => '1,2,3'
               */
              function wrapperToString() {
                return this.value() + '';
              }
              /**
               * Executes the chained sequence to extract the unwrapped value.
               *
               * @name value
               * @memberOf _
               * @alias run, toJSON, valueOf
               * @category Chain
               * @returns {*} Returns the resolved unwrapped value.
               * @example
               *
               * _([1, 2, 3]).value();
               * // => [1, 2, 3]
               */
              function wrapperValue() {
                return baseWrapperValue(this.__wrapped__, this.__actions__);
              } /*------------------------------------------------------------------------*/
              /**
               * Creates an array of elements corresponding to the given keys, or indexes,
               * of `collection`. Keys may be specified as individual arguments or as arrays
               * of keys.
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {...(number|number[]|string|string[])} [props] The property names
               *  or indexes of elements to pick, specified individually or in arrays.
               * @returns {Array} Returns the new array of picked elements.
               * @example
               *
               * _.at(['a', 'b', 'c'], [0, 2]);
               * // => ['a', 'c']
               *
               * _.at(['barney', 'fred', 'pebbles'], 0, 2);
               * // => ['barney', 'pebbles']
               */
              var at = restParam(function (collection, props) {
                return baseAt(collection, baseFlatten(props));
              });
              /**
               * Creates an object composed of keys generated from the results of running
               * each element of `collection` through `iteratee`. The corresponding value
               * of each key is the number of times the key was returned by `iteratee`.
               * The `iteratee` is bound to `thisArg` and invoked with three arguments:
               * (value, index|key, collection).
               *
               * If a property name is provided for `iteratee` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `iteratee` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function|Object|string} [iteratee=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Object} Returns the composed aggregate object.
               * @example
               *
               * _.countBy([4.3, 6.1, 6.4], function(n) {
               *   return Math.floor(n);
               * });
               * // => { '4': 1, '6': 2 }
               *
               * _.countBy([4.3, 6.1, 6.4], function(n) {
               *   return this.floor(n);
               * }, Math);
               * // => { '4': 1, '6': 2 }
               *
               * _.countBy(['one', 'two', 'three'], 'length');
               * // => { '3': 2, '5': 1 }
               */
              var countBy = createAggregator(function (result, value, key) {
                hasOwnProperty.call(result, key) ? ++result[key] : result[key] = 1;
              });
              /**
               * Checks if `predicate` returns truthy for **all** elements of `collection`.
               * The predicate is bound to `thisArg` and invoked with three arguments:
               * (value, index|key, collection).
               *
               * If a property name is provided for `predicate` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `predicate` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @alias all
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function|Object|string} [predicate=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {boolean} Returns `true` if all elements pass the predicate check,
               *  else `false`.
               * @example
               *
               * _.every([true, 1, null, 'yes'], Boolean);
               * // => false
               *
               * var users = [
               *   { 'user': 'barney', 'active': false },
               *   { 'user': 'fred',   'active': false }
               * ];
               *
               * // using the `_.matches` callback shorthand
               * _.every(users, { 'user': 'barney', 'active': false });
               * // => false
               *
               * // using the `_.matchesProperty` callback shorthand
               * _.every(users, 'active', false);
               * // => true
               *
               * // using the `_.property` callback shorthand
               * _.every(users, 'active');
               * // => false
               */
              function every(collection, predicate, thisArg) {
                var func = isArray(collection) ? arrayEvery : baseEvery;
                if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
                  predicate = undefined;
                }
                if (typeof predicate != 'function' || thisArg !== undefined) {
                  predicate = getCallback(predicate, thisArg, 3);
                }
                return func(collection, predicate);
              }
              /**
               * Iterates over elements of `collection`, returning an array of all elements
               * `predicate` returns truthy for. The predicate is bound to `thisArg` and
               * invoked with three arguments: (value, index|key, collection).
               *
               * If a property name is provided for `predicate` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `predicate` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @alias select
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function|Object|string} [predicate=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {Array} Returns the new filtered array.
               * @example
               *
               * _.filter([4, 5, 6], function(n) {
               *   return n % 2 == 0;
               * });
               * // => [4, 6]
               *
               * var users = [
               *   { 'user': 'barney', 'age': 36, 'active': true },
               *   { 'user': 'fred',   'age': 40, 'active': false }
               * ];
               *
               * // using the `_.matches` callback shorthand
               * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
               * // => ['barney']
               *
               * // using the `_.matchesProperty` callback shorthand
               * _.pluck(_.filter(users, 'active', false), 'user');
               * // => ['fred']
               *
               * // using the `_.property` callback shorthand
               * _.pluck(_.filter(users, 'active'), 'user');
               * // => ['barney']
               */
              function filter(collection, predicate, thisArg) {
                var func = isArray(collection) ? arrayFilter : baseFilter;
                predicate = getCallback(predicate, thisArg, 3);
                return func(collection, predicate);
              }
              /**
               * Iterates over elements of `collection`, returning the first element
               * `predicate` returns truthy for. The predicate is bound to `thisArg` and
               * invoked with three arguments: (value, index|key, collection).
               *
               * If a property name is provided for `predicate` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `predicate` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @alias detect
               * @category Collection
               * @param {Array|Object|string} collection The collection to search.
               * @param {Function|Object|string} [predicate=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {*} Returns the matched element, else `undefined`.
               * @example
               *
               * var users = [
               *   { 'user': 'barney',  'age': 36, 'active': true },
               *   { 'user': 'fred',    'age': 40, 'active': false },
               *   { 'user': 'pebbles', 'age': 1,  'active': true }
               * ];
               *
               * _.result(_.find(users, function(chr) {
               *   return chr.age < 40;
               * }), 'user');
               * // => 'barney'
               *
               * // using the `_.matches` callback shorthand
               * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
               * // => 'pebbles'
               *
               * // using the `_.matchesProperty` callback shorthand
               * _.result(_.find(users, 'active', false), 'user');
               * // => 'fred'
               *
               * // using the `_.property` callback shorthand
               * _.result(_.find(users, 'active'), 'user');
               * // => 'barney'
               */
              var find = createFind(baseEach);
              /**
               * This method is like `_.find` except that it iterates over elements of
               * `collection` from right to left.
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to search.
               * @param {Function|Object|string} [predicate=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {*} Returns the matched element, else `undefined`.
               * @example
               *
               * _.findLast([1, 2, 3, 4], function(n) {
               *   return n % 2 == 1;
               * });
               * // => 3
               */
              var findLast = createFind(baseEachRight, true);
              /**
               * Performs a deep comparison between each element in `collection` and the
               * source object, returning the first element that has equivalent property
               * values.
               *
               * **Note:** This method supports comparing arrays, booleans, `Date` objects,
               * numbers, `Object` objects, regexes, and strings. Objects are compared by
               * their own, not inherited, enumerable properties. For comparing a single
               * own or inherited property value see `_.matchesProperty`.
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to search.
               * @param {Object} source The object of property values to match.
               * @returns {*} Returns the matched element, else `undefined`.
               * @example
               *
               * var users = [
               *   { 'user': 'barney', 'age': 36, 'active': true },
               *   { 'user': 'fred',   'age': 40, 'active': false }
               * ];
               *
               * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
               * // => 'barney'
               *
               * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
               * // => 'fred'
               */
              function findWhere(collection, source) {
                return find(collection, baseMatches(source));
              }
              /**
               * Iterates over elements of `collection` invoking `iteratee` for each element.
               * The `iteratee` is bound to `thisArg` and invoked with three arguments:
               * (value, index|key, collection). Iteratee functions may exit iteration early
               * by explicitly returning `false`.
               *
               * **Note:** As with other "Collections" methods, objects with a "length" property
               * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
               * may be used for object iteration.
               *
               * @static
               * @memberOf _
               * @alias each
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function} [iteratee=_.identity] The function invoked per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Array|Object|string} Returns `collection`.
               * @example
               *
               * _([1, 2]).forEach(function(n) {
               *   console.log(n);
               * }).value();
               * // => logs each value from left to right and returns the array
               *
               * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
               *   console.log(n, key);
               * });
               * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
               */
              var forEach = createForEach(arrayEach, baseEach);
              /**
               * This method is like `_.forEach` except that it iterates over elements of
               * `collection` from right to left.
               *
               * @static
               * @memberOf _
               * @alias eachRight
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function} [iteratee=_.identity] The function invoked per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Array|Object|string} Returns `collection`.
               * @example
               *
               * _([1, 2]).forEachRight(function(n) {
               *   console.log(n);
               * }).value();
               * // => logs each value from right to left and returns the array
               */
              var forEachRight = createForEach(arrayEachRight, baseEachRight);
              /**
               * Creates an object composed of keys generated from the results of running
               * each element of `collection` through `iteratee`. The corresponding value
               * of each key is an array of the elements responsible for generating the key.
               * The `iteratee` is bound to `thisArg` and invoked with three arguments:
               * (value, index|key, collection).
               *
               * If a property name is provided for `iteratee` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `iteratee` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function|Object|string} [iteratee=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Object} Returns the composed aggregate object.
               * @example
               *
               * _.groupBy([4.2, 6.1, 6.4], function(n) {
               *   return Math.floor(n);
               * });
               * // => { '4': [4.2], '6': [6.1, 6.4] }
               *
               * _.groupBy([4.2, 6.1, 6.4], function(n) {
               *   return this.floor(n);
               * }, Math);
               * // => { '4': [4.2], '6': [6.1, 6.4] }
               *
               * // using the `_.property` callback shorthand
               * _.groupBy(['one', 'two', 'three'], 'length');
               * // => { '3': ['one', 'two'], '5': ['three'] }
               */
              var groupBy = createAggregator(function (result, value, key) {
                if (hasOwnProperty.call(result, key)) {
                  result[key].push(value);
                } else {
                  result[key] = [value];
                }
              });
              /**
               * Checks if `value` is in `collection` using
               * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
               * for equality comparisons. If `fromIndex` is negative, it is used as the offset
               * from the end of `collection`.
               *
               * @static
               * @memberOf _
               * @alias contains, include
               * @category Collection
               * @param {Array|Object|string} collection The collection to search.
               * @param {*} target The value to search for.
               * @param {number} [fromIndex=0] The index to search from.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
               * @returns {boolean} Returns `true` if a matching element is found, else `false`.
               * @example
               *
               * _.includes([1, 2, 3], 1);
               * // => true
               *
               * _.includes([1, 2, 3], 1, 2);
               * // => false
               *
               * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
               * // => true
               *
               * _.includes('pebbles', 'eb');
               * // => true
               */
              function includes(collection, target, fromIndex, guard) {
                var length = collection ? getLength(collection) : 0;
                if (!isLength(length)) {
                  collection = values(collection);
                  length = collection.length;
                }
                if (typeof fromIndex != 'number' || guard && isIterateeCall(target, fromIndex, guard)) {
                  fromIndex = 0;
                } else {
                  fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex || 0;
                }
                return typeof collection == 'string' || !isArray(collection) && isString(collection) ? fromIndex <= length && collection.indexOf(target, fromIndex) > -1 : !!length && getIndexOf(collection, target, fromIndex) > -1;
              }
              /**
               * Creates an object composed of keys generated from the results of running
               * each element of `collection` through `iteratee`. The corresponding value
               * of each key is the last element responsible for generating the key. The
               * iteratee function is bound to `thisArg` and invoked with three arguments:
               * (value, index|key, collection).
               *
               * If a property name is provided for `iteratee` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `iteratee` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function|Object|string} [iteratee=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Object} Returns the composed aggregate object.
               * @example
               *
               * var keyData = [
               *   { 'dir': 'left', 'code': 97 },
               *   { 'dir': 'right', 'code': 100 }
               * ];
               *
               * _.indexBy(keyData, 'dir');
               * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
               *
               * _.indexBy(keyData, function(object) {
               *   return String.fromCharCode(object.code);
               * });
               * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
               *
               * _.indexBy(keyData, function(object) {
               *   return this.fromCharCode(object.code);
               * }, String);
               * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
               */
              var indexBy = createAggregator(function (result, value, key) {
                result[key] = value;
              });
              /**
               * Invokes the method at `path` of each element in `collection`, returning
               * an array of the results of each invoked method. Any additional arguments
               * are provided to each invoked method. If `methodName` is a function it is
               * invoked for, and `this` bound to, each element in `collection`.
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Array|Function|string} path The path of the method to invoke or
               *  the function invoked per iteration.
               * @param {...*} [args] The arguments to invoke the method with.
               * @returns {Array} Returns the array of results.
               * @example
               *
               * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
               * // => [[1, 5, 7], [1, 2, 3]]
               *
               * _.invoke([123, 456], String.prototype.split, '');
               * // => [['1', '2', '3'], ['4', '5', '6']]
               */
              var invoke = restParam(function (collection, path, args) {
                var index = -1,
                  isFunc = typeof path == 'function',
                  isProp = isKey(path),
                  result = isArrayLike(collection) ? Array(collection.length) : [];
                baseEach(collection, function (value) {
                  var func = isFunc ? path : isProp && value != null ? value[path] : undefined;
                  result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
                });
                return result;
              });
              /**
               * Creates an array of values by running each element in `collection` through
               * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
               * arguments: (value, index|key, collection).
               *
               * If a property name is provided for `iteratee` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `iteratee` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * Many lodash methods are guarded to work as iteratees for methods like
               * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
               *
               * The guarded methods are:
               * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
               * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
               * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
               * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
               * `sum`, `uniq`, and `words`
               *
               * @static
               * @memberOf _
               * @alias collect
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function|Object|string} [iteratee=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Array} Returns the new mapped array.
               * @example
               *
               * function timesThree(n) {
               *   return n * 3;
               * }
               *
               * _.map([1, 2], timesThree);
               * // => [3, 6]
               *
               * _.map({ 'a': 1, 'b': 2 }, timesThree);
               * // => [3, 6] (iteration order is not guaranteed)
               *
               * var users = [
               *   { 'user': 'barney' },
               *   { 'user': 'fred' }
               * ];
               *
               * // using the `_.property` callback shorthand
               * _.map(users, 'user');
               * // => ['barney', 'fred']
               */
              function map(collection, iteratee, thisArg) {
                var func = isArray(collection) ? arrayMap : baseMap;
                iteratee = getCallback(iteratee, thisArg, 3);
                return func(collection, iteratee);
              }
              /**
               * Creates an array of elements split into two groups, the first of which
               * contains elements `predicate` returns truthy for, while the second of which
               * contains elements `predicate` returns falsey for. The predicate is bound
               * to `thisArg` and invoked with three arguments: (value, index|key, collection).
               *
               * If a property name is provided for `predicate` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `predicate` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function|Object|string} [predicate=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {Array} Returns the array of grouped elements.
               * @example
               *
               * _.partition([1, 2, 3], function(n) {
               *   return n % 2;
               * });
               * // => [[1, 3], [2]]
               *
               * _.partition([1.2, 2.3, 3.4], function(n) {
               *   return this.floor(n) % 2;
               * }, Math);
               * // => [[1.2, 3.4], [2.3]]
               *
               * var users = [
               *   { 'user': 'barney',  'age': 36, 'active': false },
               *   { 'user': 'fred',    'age': 40, 'active': true },
               *   { 'user': 'pebbles', 'age': 1,  'active': false }
               * ];
               *
               * var mapper = function(array) {
               *   return _.pluck(array, 'user');
               * };
               *
               * // using the `_.matches` callback shorthand
               * _.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
               * // => [['pebbles'], ['barney', 'fred']]
               *
               * // using the `_.matchesProperty` callback shorthand
               * _.map(_.partition(users, 'active', false), mapper);
               * // => [['barney', 'pebbles'], ['fred']]
               *
               * // using the `_.property` callback shorthand
               * _.map(_.partition(users, 'active'), mapper);
               * // => [['fred'], ['barney', 'pebbles']]
               */
              var partition = createAggregator(function (result, value, key) {
                result[key ? 0 : 1].push(value);
              }, function () {
                return [[], []];
              });
              /**
               * Gets the property value of `path` from all elements in `collection`.
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Array|string} path The path of the property to pluck.
               * @returns {Array} Returns the property values.
               * @example
               *
               * var users = [
               *   { 'user': 'barney', 'age': 36 },
               *   { 'user': 'fred',   'age': 40 }
               * ];
               *
               * _.pluck(users, 'user');
               * // => ['barney', 'fred']
               *
               * var userIndex = _.indexBy(users, 'user');
               * _.pluck(userIndex, 'age');
               * // => [36, 40] (iteration order is not guaranteed)
               */
              function pluck(collection, path) {
                return map(collection, property(path));
              }
              /**
               * Reduces `collection` to a value which is the accumulated result of running
               * each element in `collection` through `iteratee`, where each successive
               * invocation is supplied the return value of the previous. If `accumulator`
               * is not provided the first element of `collection` is used as the initial
               * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
               * (accumulator, value, index|key, collection).
               *
               * Many lodash methods are guarded to work as iteratees for methods like
               * `_.reduce`, `_.reduceRight`, and `_.transform`.
               *
               * The guarded methods are:
               * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
               * and `sortByOrder`
               *
               * @static
               * @memberOf _
               * @alias foldl, inject
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function} [iteratee=_.identity] The function invoked per iteration.
               * @param {*} [accumulator] The initial value.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {*} Returns the accumulated value.
               * @example
               *
               * _.reduce([1, 2], function(total, n) {
               *   return total + n;
               * });
               * // => 3
               *
               * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
               *   result[key] = n * 3;
               *   return result;
               * }, {});
               * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
               */
              var reduce = createReduce(arrayReduce, baseEach);
              /**
               * This method is like `_.reduce` except that it iterates over elements of
               * `collection` from right to left.
               *
               * @static
               * @memberOf _
               * @alias foldr
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function} [iteratee=_.identity] The function invoked per iteration.
               * @param {*} [accumulator] The initial value.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {*} Returns the accumulated value.
               * @example
               *
               * var array = [[0, 1], [2, 3], [4, 5]];
               *
               * _.reduceRight(array, function(flattened, other) {
               *   return flattened.concat(other);
               * }, []);
               * // => [4, 5, 2, 3, 0, 1]
               */
              var reduceRight = createReduce(arrayReduceRight, baseEachRight);
              /**
               * The opposite of `_.filter`; this method returns the elements of `collection`
               * that `predicate` does **not** return truthy for.
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function|Object|string} [predicate=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {Array} Returns the new filtered array.
               * @example
               *
               * _.reject([1, 2, 3, 4], function(n) {
               *   return n % 2 == 0;
               * });
               * // => [1, 3]
               *
               * var users = [
               *   { 'user': 'barney', 'age': 36, 'active': false },
               *   { 'user': 'fred',   'age': 40, 'active': true }
               * ];
               *
               * // using the `_.matches` callback shorthand
               * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
               * // => ['barney']
               *
               * // using the `_.matchesProperty` callback shorthand
               * _.pluck(_.reject(users, 'active', false), 'user');
               * // => ['fred']
               *
               * // using the `_.property` callback shorthand
               * _.pluck(_.reject(users, 'active'), 'user');
               * // => ['barney']
               */
              function reject(collection, predicate, thisArg) {
                var func = isArray(collection) ? arrayFilter : baseFilter;
                predicate = getCallback(predicate, thisArg, 3);
                return func(collection, function (value, index, collection) {
                  return !predicate(value, index, collection);
                });
              }
              /**
               * Gets a random element or `n` random elements from a collection.
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to sample.
               * @param {number} [n] The number of elements to sample.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {*} Returns the random sample(s).
               * @example
               *
               * _.sample([1, 2, 3, 4]);
               * // => 2
               *
               * _.sample([1, 2, 3, 4], 2);
               * // => [3, 1]
               */
              function sample(collection, n, guard) {
                if (guard ? isIterateeCall(collection, n, guard) : n == null) {
                  collection = toIterable(collection);
                  var length = collection.length;
                  return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
                }
                var index = -1,
                  result = toArray(collection),
                  length = result.length,
                  lastIndex = length - 1;
                n = nativeMin(n < 0 ? 0 : +n || 0, length);
                while (++index < n) {
                  var rand = baseRandom(index, lastIndex),
                    value = result[rand];
                  result[rand] = result[index];
                  result[index] = value;
                }
                result.length = n;
                return result;
              }
              /**
               * Creates an array of shuffled values, using a version of the
               * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to shuffle.
               * @returns {Array} Returns the new shuffled array.
               * @example
               *
               * _.shuffle([1, 2, 3, 4]);
               * // => [4, 1, 3, 2]
               */
              function shuffle(collection) {
                return sample(collection, POSITIVE_INFINITY);
              }
              /**
               * Gets the size of `collection` by returning its length for array-like
               * values or the number of own enumerable properties for objects.
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to inspect.
               * @returns {number} Returns the size of `collection`.
               * @example
               *
               * _.size([1, 2, 3]);
               * // => 3
               *
               * _.size({ 'a': 1, 'b': 2 });
               * // => 2
               *
               * _.size('pebbles');
               * // => 7
               */
              function size(collection) {
                var length = collection ? getLength(collection) : 0;
                return isLength(length) ? length : keys(collection).length;
              }
              /**
               * Checks if `predicate` returns truthy for **any** element of `collection`.
               * The function returns as soon as it finds a passing value and does not iterate
               * over the entire collection. The predicate is bound to `thisArg` and invoked
               * with three arguments: (value, index|key, collection).
               *
               * If a property name is provided for `predicate` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `predicate` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @alias any
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function|Object|string} [predicate=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {boolean} Returns `true` if any element passes the predicate check,
               *  else `false`.
               * @example
               *
               * _.some([null, 0, 'yes', false], Boolean);
               * // => true
               *
               * var users = [
               *   { 'user': 'barney', 'active': true },
               *   { 'user': 'fred',   'active': false }
               * ];
               *
               * // using the `_.matches` callback shorthand
               * _.some(users, { 'user': 'barney', 'active': false });
               * // => false
               *
               * // using the `_.matchesProperty` callback shorthand
               * _.some(users, 'active', false);
               * // => true
               *
               * // using the `_.property` callback shorthand
               * _.some(users, 'active');
               * // => true
               */
              function some(collection, predicate, thisArg) {
                var func = isArray(collection) ? arraySome : baseSome;
                if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
                  predicate = undefined;
                }
                if (typeof predicate != 'function' || thisArg !== undefined) {
                  predicate = getCallback(predicate, thisArg, 3);
                }
                return func(collection, predicate);
              }
              /**
               * Creates an array of elements, sorted in ascending order by the results of
               * running each element in a collection through `iteratee`. This method performs
               * a stable sort, that is, it preserves the original sort order of equal elements.
               * The `iteratee` is bound to `thisArg` and invoked with three arguments:
               * (value, index|key, collection).
               *
               * If a property name is provided for `iteratee` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `iteratee` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function|Object|string} [iteratee=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Array} Returns the new sorted array.
               * @example
               *
               * _.sortBy([1, 2, 3], function(n) {
               *   return Math.sin(n);
               * });
               * // => [3, 1, 2]
               *
               * _.sortBy([1, 2, 3], function(n) {
               *   return this.sin(n);
               * }, Math);
               * // => [3, 1, 2]
               *
               * var users = [
               *   { 'user': 'fred' },
               *   { 'user': 'pebbles' },
               *   { 'user': 'barney' }
               * ];
               *
               * // using the `_.property` callback shorthand
               * _.pluck(_.sortBy(users, 'user'), 'user');
               * // => ['barney', 'fred', 'pebbles']
               */
              function sortBy(collection, iteratee, thisArg) {
                if (collection == null) {
                  return [];
                }
                if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
                  iteratee = undefined;
                }
                var index = -1;
                iteratee = getCallback(iteratee, thisArg, 3);
                var result = baseMap(collection, function (value, key, collection) {
                  return {
                    'criteria': iteratee(value, key, collection),
                    'index': ++index,
                    'value': value
                  };
                });
                return baseSortBy(result, compareAscending);
              }
              /**
               * This method is like `_.sortBy` except that it can sort by multiple iteratees
               * or property names.
               *
               * If a property name is provided for an iteratee the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If an object is provided for an iteratee the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {...(Function|Function[]|Object|Object[]|string|string[])} iteratees
               *  The iteratees to sort by, specified as individual values or arrays of values.
               * @returns {Array} Returns the new sorted array.
               * @example
               *
               * var users = [
               *   { 'user': 'fred',   'age': 48 },
               *   { 'user': 'barney', 'age': 36 },
               *   { 'user': 'fred',   'age': 42 },
               *   { 'user': 'barney', 'age': 34 }
               * ];
               *
               * _.map(_.sortByAll(users, ['user', 'age']), _.values);
               * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
               *
               * _.map(_.sortByAll(users, 'user', function(chr) {
               *   return Math.floor(chr.age / 10);
               * }), _.values);
               * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
               */
              var sortByAll = restParam(function (collection, iteratees) {
                if (collection == null) {
                  return [];
                }
                var guard = iteratees[2];
                if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
                  iteratees.length = 1;
                }
                return baseSortByOrder(collection, baseFlatten(iteratees), []);
              });
              /**
               * This method is like `_.sortByAll` except that it allows specifying the
               * sort orders of the iteratees to sort by. If `orders` is unspecified, all
               * values are sorted in ascending order. Otherwise, a value is sorted in
               * ascending order if its corresponding order is "asc", and descending if "desc".
               *
               * If a property name is provided for an iteratee the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If an object is provided for an iteratee the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
               * @param {boolean[]} [orders] The sort orders of `iteratees`.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
               * @returns {Array} Returns the new sorted array.
               * @example
               *
               * var users = [
               *   { 'user': 'fred',   'age': 48 },
               *   { 'user': 'barney', 'age': 34 },
               *   { 'user': 'fred',   'age': 42 },
               *   { 'user': 'barney', 'age': 36 }
               * ];
               *
               * // sort by `user` in ascending order and by `age` in descending order
               * _.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values);
               * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
               */
              function sortByOrder(collection, iteratees, orders, guard) {
                if (collection == null) {
                  return [];
                }
                if (guard && isIterateeCall(iteratees, orders, guard)) {
                  orders = undefined;
                }
                if (!isArray(iteratees)) {
                  iteratees = iteratees == null ? [] : [iteratees];
                }
                if (!isArray(orders)) {
                  orders = orders == null ? [] : [orders];
                }
                return baseSortByOrder(collection, iteratees, orders);
              }
              /**
               * Performs a deep comparison between each element in `collection` and the
               * source object, returning an array of all elements that have equivalent
               * property values.
               *
               * **Note:** This method supports comparing arrays, booleans, `Date` objects,
               * numbers, `Object` objects, regexes, and strings. Objects are compared by
               * their own, not inherited, enumerable properties. For comparing a single
               * own or inherited property value see `_.matchesProperty`.
               *
               * @static
               * @memberOf _
               * @category Collection
               * @param {Array|Object|string} collection The collection to search.
               * @param {Object} source The object of property values to match.
               * @returns {Array} Returns the new filtered array.
               * @example
               *
               * var users = [
               *   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
               *   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
               * ];
               *
               * _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
               * // => ['barney']
               *
               * _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
               * // => ['fred']
               */
              function where(collection, source) {
                return filter(collection, baseMatches(source));
              } /*------------------------------------------------------------------------*/
              /**
               * Gets the number of milliseconds that have elapsed since the Unix epoch
               * (1 January 1970 00:00:00 UTC).
               *
               * @static
               * @memberOf _
               * @category Date
               * @example
               *
               * _.defer(function(stamp) {
               *   console.log(_.now() - stamp);
               * }, _.now());
               * // => logs the number of milliseconds it took for the deferred function to be invoked
               */
              var now = nativeNow || function () {
                return new Date().getTime();
              }; /*------------------------------------------------------------------------*/
              /**
               * The opposite of `_.before`; this method creates a function that invokes
               * `func` once it is called `n` or more times.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {number} n The number of calls before `func` is invoked.
               * @param {Function} func The function to restrict.
               * @returns {Function} Returns the new restricted function.
               * @example
               *
               * var saves = ['profile', 'settings'];
               *
               * var done = _.after(saves.length, function() {
               *   console.log('done saving!');
               * });
               *
               * _.forEach(saves, function(type) {
               *   asyncSave({ 'type': type, 'complete': done });
               * });
               * // => logs 'done saving!' after the two async saves have completed
               */
              function after(n, func) {
                if (typeof func != 'function') {
                  if (typeof n == 'function') {
                    var temp = n;
                    n = func;
                    func = temp;
                  } else {
                    throw new TypeError(FUNC_ERROR_TEXT);
                  }
                }
                n = nativeIsFinite(n = +n) ? n : 0;
                return function () {
                  if (--n < 1) {
                    return func.apply(this, arguments);
                  }
                };
              }
              /**
               * Creates a function that accepts up to `n` arguments ignoring any
               * additional arguments.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} func The function to cap arguments for.
               * @param {number} [n=func.length] The arity cap.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {Function} Returns the new function.
               * @example
               *
               * _.map(['6', '8', '10'], _.ary(parseInt, 1));
               * // => [6, 8, 10]
               */
              function ary(func, n, guard) {
                if (guard && isIterateeCall(func, n, guard)) {
                  n = undefined;
                }
                n = func && n == null ? func.length : nativeMax(+n || 0, 0);
                return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
              }
              /**
               * Creates a function that invokes `func`, with the `this` binding and arguments
               * of the created function, while it is called less than `n` times. Subsequent
               * calls to the created function return the result of the last `func` invocation.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {number} n The number of calls at which `func` is no longer invoked.
               * @param {Function} func The function to restrict.
               * @returns {Function} Returns the new restricted function.
               * @example
               *
               * jQuery('#add').on('click', _.before(5, addContactToList));
               * // => allows adding up to 4 contacts to the list
               */
              function before(n, func) {
                var result;
                if (typeof func != 'function') {
                  if (typeof n == 'function') {
                    var temp = n;
                    n = func;
                    func = temp;
                  } else {
                    throw new TypeError(FUNC_ERROR_TEXT);
                  }
                }
                return function () {
                  if (--n > 0) {
                    result = func.apply(this, arguments);
                  }
                  if (n <= 1) {
                    func = undefined;
                  }
                  return result;
                };
              }
              /**
               * Creates a function that invokes `func` with the `this` binding of `thisArg`
               * and prepends any additional `_.bind` arguments to those provided to the
               * bound function.
               *
               * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
               * may be used as a placeholder for partially applied arguments.
               *
               * **Note:** Unlike native `Function#bind` this method does not set the "length"
               * property of bound functions.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} func The function to bind.
               * @param {*} thisArg The `this` binding of `func`.
               * @param {...*} [partials] The arguments to be partially applied.
               * @returns {Function} Returns the new bound function.
               * @example
               *
               * var greet = function(greeting, punctuation) {
               *   return greeting + ' ' + this.user + punctuation;
               * };
               *
               * var object = { 'user': 'fred' };
               *
               * var bound = _.bind(greet, object, 'hi');
               * bound('!');
               * // => 'hi fred!'
               *
               * // using placeholders
               * var bound = _.bind(greet, object, _, '!');
               * bound('hi');
               * // => 'hi fred!'
               */
              var bind = restParam(function (func, thisArg, partials) {
                var bitmask = BIND_FLAG;
                if (partials.length) {
                  var holders = replaceHolders(partials, bind.placeholder);
                  bitmask |= PARTIAL_FLAG;
                }
                return createWrapper(func, bitmask, thisArg, partials, holders);
              });
              /**
               * Binds methods of an object to the object itself, overwriting the existing
               * method. Method names may be specified as individual arguments or as arrays
               * of method names. If no method names are provided all enumerable function
               * properties, own and inherited, of `object` are bound.
               *
               * **Note:** This method does not set the "length" property of bound functions.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Object} object The object to bind and assign the bound methods to.
               * @param {...(string|string[])} [methodNames] The object method names to bind,
               *  specified as individual method names or arrays of method names.
               * @returns {Object} Returns `object`.
               * @example
               *
               * var view = {
               *   'label': 'docs',
               *   'onClick': function() {
               *     console.log('clicked ' + this.label);
               *   }
               * };
               *
               * _.bindAll(view);
               * jQuery('#docs').on('click', view.onClick);
               * // => logs 'clicked docs' when the element is clicked
               */
              var bindAll = restParam(function (object, methodNames) {
                methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);
                var index = -1,
                  length = methodNames.length;
                while (++index < length) {
                  var key = methodNames[index];
                  object[key] = createWrapper(object[key], BIND_FLAG, object);
                }
                return object;
              });
              /**
               * Creates a function that invokes the method at `object[key]` and prepends
               * any additional `_.bindKey` arguments to those provided to the bound function.
               *
               * This method differs from `_.bind` by allowing bound functions to reference
               * methods that may be redefined or don't yet exist.
               * See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
               * for more details.
               *
               * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
               * builds, may be used as a placeholder for partially applied arguments.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Object} object The object the method belongs to.
               * @param {string} key The key of the method.
               * @param {...*} [partials] The arguments to be partially applied.
               * @returns {Function} Returns the new bound function.
               * @example
               *
               * var object = {
               *   'user': 'fred',
               *   'greet': function(greeting, punctuation) {
               *     return greeting + ' ' + this.user + punctuation;
               *   }
               * };
               *
               * var bound = _.bindKey(object, 'greet', 'hi');
               * bound('!');
               * // => 'hi fred!'
               *
               * object.greet = function(greeting, punctuation) {
               *   return greeting + 'ya ' + this.user + punctuation;
               * };
               *
               * bound('!');
               * // => 'hiya fred!'
               *
               * // using placeholders
               * var bound = _.bindKey(object, 'greet', _, '!');
               * bound('hi');
               * // => 'hiya fred!'
               */
              var bindKey = restParam(function (object, key, partials) {
                var bitmask = BIND_FLAG | BIND_KEY_FLAG;
                if (partials.length) {
                  var holders = replaceHolders(partials, bindKey.placeholder);
                  bitmask |= PARTIAL_FLAG;
                }
                return createWrapper(key, bitmask, object, partials, holders);
              });
              /**
               * Creates a function that accepts one or more arguments of `func` that when
               * called either invokes `func` returning its result, if all `func` arguments
               * have been provided, or returns a function that accepts one or more of the
               * remaining `func` arguments, and so on. The arity of `func` may be specified
               * if `func.length` is not sufficient.
               *
               * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
               * may be used as a placeholder for provided arguments.
               *
               * **Note:** This method does not set the "length" property of curried functions.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} func The function to curry.
               * @param {number} [arity=func.length] The arity of `func`.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {Function} Returns the new curried function.
               * @example
               *
               * var abc = function(a, b, c) {
               *   return [a, b, c];
               * };
               *
               * var curried = _.curry(abc);
               *
               * curried(1)(2)(3);
               * // => [1, 2, 3]
               *
               * curried(1, 2)(3);
               * // => [1, 2, 3]
               *
               * curried(1, 2, 3);
               * // => [1, 2, 3]
               *
               * // using placeholders
               * curried(1)(_, 3)(2);
               * // => [1, 2, 3]
               */
              var curry = createCurry(CURRY_FLAG);
              /**
               * This method is like `_.curry` except that arguments are applied to `func`
               * in the manner of `_.partialRight` instead of `_.partial`.
               *
               * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
               * builds, may be used as a placeholder for provided arguments.
               *
               * **Note:** This method does not set the "length" property of curried functions.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} func The function to curry.
               * @param {number} [arity=func.length] The arity of `func`.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {Function} Returns the new curried function.
               * @example
               *
               * var abc = function(a, b, c) {
               *   return [a, b, c];
               * };
               *
               * var curried = _.curryRight(abc);
               *
               * curried(3)(2)(1);
               * // => [1, 2, 3]
               *
               * curried(2, 3)(1);
               * // => [1, 2, 3]
               *
               * curried(1, 2, 3);
               * // => [1, 2, 3]
               *
               * // using placeholders
               * curried(3)(1, _)(2);
               * // => [1, 2, 3]
               */
              var curryRight = createCurry(CURRY_RIGHT_FLAG);
              /**
               * Creates a debounced function that delays invoking `func` until after `wait`
               * milliseconds have elapsed since the last time the debounced function was
               * invoked. The debounced function comes with a `cancel` method to cancel
               * delayed invocations. Provide an options object to indicate that `func`
               * should be invoked on the leading and/or trailing edge of the `wait` timeout.
               * Subsequent calls to the debounced function return the result of the last
               * `func` invocation.
               *
               * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
               * on the trailing edge of the timeout only if the the debounced function is
               * invoked more than once during the `wait` timeout.
               *
               * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
               * for details over the differences between `_.debounce` and `_.throttle`.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} func The function to debounce.
               * @param {number} [wait=0] The number of milliseconds to delay.
               * @param {Object} [options] The options object.
               * @param {boolean} [options.leading=false] Specify invoking on the leading
               *  edge of the timeout.
               * @param {number} [options.maxWait] The maximum time `func` is allowed to be
               *  delayed before it is invoked.
               * @param {boolean} [options.trailing=true] Specify invoking on the trailing
               *  edge of the timeout.
               * @returns {Function} Returns the new debounced function.
               * @example
               *
               * // avoid costly calculations while the window size is in flux
               * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
               *
               * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
               * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
               *   'leading': true,
               *   'trailing': false
               * }));
               *
               * // ensure `batchLog` is invoked once after 1 second of debounced calls
               * var source = new EventSource('/stream');
               * jQuery(source).on('message', _.debounce(batchLog, 250, {
               *   'maxWait': 1000
               * }));
               *
               * // cancel a debounced call
               * var todoChanges = _.debounce(batchLog, 1000);
               * Object.observe(models.todo, todoChanges);
               *
               * Object.observe(models, function(changes) {
               *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
               *     todoChanges.cancel();
               *   }
               * }, ['delete']);
               *
               * // ...at some point `models.todo` is changed
               * models.todo.completed = true;
               *
               * // ...before 1 second has passed `models.todo` is deleted
               * // which cancels the debounced `todoChanges` call
               * delete models.todo;
               */
              function debounce(func, wait, options) {
                var args, maxTimeoutId, result, stamp, thisArg, timeoutId, trailingCall, lastCalled = 0,
                  maxWait = false,
                  trailing = true;
                if (typeof func != 'function') {
                  throw new TypeError(FUNC_ERROR_TEXT);
                }
                wait = wait < 0 ? 0 : +wait || 0;
                if (options === true) {
                  var leading = true;
                  trailing = false;
                } else if (isObject(options)) {
                  leading = !!options.leading;
                  maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
                  trailing = 'trailing' in options ? !!options.trailing : trailing;
                }

                function cancel() {
                  if (timeoutId) {
                    clearTimeout(timeoutId);
                  }
                  if (maxTimeoutId) {
                    clearTimeout(maxTimeoutId);
                  }
                  lastCalled = 0;
                  maxTimeoutId = timeoutId = trailingCall = undefined;
                }

                function complete(isCalled, id) {
                  if (id) {
                    clearTimeout(id);
                  }
                  maxTimeoutId = timeoutId = trailingCall = undefined;
                  if (isCalled) {
                    lastCalled = now();
                    result = func.apply(thisArg, args);
                    if (!timeoutId && !maxTimeoutId) {
                      args = thisArg = undefined;
                    }
                  }
                }

                function delayed() {
                  var remaining = wait - (now() - stamp);
                  if (remaining <= 0 || remaining > wait) {
                    complete(trailingCall, maxTimeoutId);
                  } else {
                    timeoutId = setTimeout(delayed, remaining);
                  }
                }

                function maxDelayed() {
                  complete(trailing, timeoutId);
                }

                function debounced() {
                  args = arguments;
                  stamp = now();
                  thisArg = this;
                  trailingCall = trailing && (timeoutId || !leading);
                  if (maxWait === false) {
                    var leadingCall = leading && !timeoutId;
                  } else {
                    if (!maxTimeoutId && !leading) {
                      lastCalled = stamp;
                    }
                    var remaining = maxWait - (stamp - lastCalled),
                      isCalled = remaining <= 0 || remaining > maxWait;
                    if (isCalled) {
                      if (maxTimeoutId) {
                        maxTimeoutId = clearTimeout(maxTimeoutId);
                      }
                      lastCalled = stamp;
                      result = func.apply(thisArg, args);
                    } else if (!maxTimeoutId) {
                      maxTimeoutId = setTimeout(maxDelayed, remaining);
                    }
                  }
                  if (isCalled && timeoutId) {
                    timeoutId = clearTimeout(timeoutId);
                  } else if (!timeoutId && wait !== maxWait) {
                    timeoutId = setTimeout(delayed, wait);
                  }
                  if (leadingCall) {
                    isCalled = true;
                    result = func.apply(thisArg, args);
                  }
                  if (isCalled && !timeoutId && !maxTimeoutId) {
                    args = thisArg = undefined;
                  }
                  return result;
                }
                debounced.cancel = cancel;
                return debounced;
              }
              /**
               * Defers invoking the `func` until the current call stack has cleared. Any
               * additional arguments are provided to `func` when it is invoked.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} func The function to defer.
               * @param {...*} [args] The arguments to invoke the function with.
               * @returns {number} Returns the timer id.
               * @example
               *
               * _.defer(function(text) {
               *   console.log(text);
               * }, 'deferred');
               * // logs 'deferred' after one or more milliseconds
               */
              var defer = restParam(function (func, args) {
                return baseDelay(func, 1, args);
              });
              /**
               * Invokes `func` after `wait` milliseconds. Any additional arguments are
               * provided to `func` when it is invoked.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} func The function to delay.
               * @param {number} wait The number of milliseconds to delay invocation.
               * @param {...*} [args] The arguments to invoke the function with.
               * @returns {number} Returns the timer id.
               * @example
               *
               * _.delay(function(text) {
               *   console.log(text);
               * }, 1000, 'later');
               * // => logs 'later' after one second
               */
              var delay = restParam(function (func, wait, args) {
                return baseDelay(func, wait, args);
              });
              /**
               * Creates a function that returns the result of invoking the provided
               * functions with the `this` binding of the created function, where each
               * successive invocation is supplied the return value of the previous.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {...Function} [funcs] Functions to invoke.
               * @returns {Function} Returns the new function.
               * @example
               *
               * function square(n) {
               *   return n * n;
               * }
               *
               * var addSquare = _.flow(_.add, square);
               * addSquare(1, 2);
               * // => 9
               */
              var flow = createFlow();
              /**
               * This method is like `_.flow` except that it creates a function that
               * invokes the provided functions from right to left.
               *
               * @static
               * @memberOf _
               * @alias backflow, compose
               * @category Function
               * @param {...Function} [funcs] Functions to invoke.
               * @returns {Function} Returns the new function.
               * @example
               *
               * function square(n) {
               *   return n * n;
               * }
               *
               * var addSquare = _.flowRight(square, _.add);
               * addSquare(1, 2);
               * // => 9
               */
              var flowRight = createFlow(true);
              /**
               * Creates a function that memoizes the result of `func`. If `resolver` is
               * provided it determines the cache key for storing the result based on the
               * arguments provided to the memoized function. By default, the first argument
               * provided to the memoized function is coerced to a string and used as the
               * cache key. The `func` is invoked with the `this` binding of the memoized
               * function.
               *
               * **Note:** The cache is exposed as the `cache` property on the memoized
               * function. Its creation may be customized by replacing the `_.memoize.Cache`
               * constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
               * method interface of `get`, `has`, and `set`.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} func The function to have its output memoized.
               * @param {Function} [resolver] The function to resolve the cache key.
               * @returns {Function} Returns the new memoizing function.
               * @example
               *
               * var upperCase = _.memoize(function(string) {
               *   return string.toUpperCase();
               * });
               *
               * upperCase('fred');
               * // => 'FRED'
               *
               * // modifying the result cache
               * upperCase.cache.set('fred', 'BARNEY');
               * upperCase('fred');
               * // => 'BARNEY'
               *
               * // replacing `_.memoize.Cache`
               * var object = { 'user': 'fred' };
               * var other = { 'user': 'barney' };
               * var identity = _.memoize(_.identity);
               *
               * identity(object);
               * // => { 'user': 'fred' }
               * identity(other);
               * // => { 'user': 'fred' }
               *
               * _.memoize.Cache = WeakMap;
               * var identity = _.memoize(_.identity);
               *
               * identity(object);
               * // => { 'user': 'fred' }
               * identity(other);
               * // => { 'user': 'barney' }
               */
              function memoize(func, resolver) {
                if (typeof func != 'function' || resolver && typeof resolver != 'function') {
                  throw new TypeError(FUNC_ERROR_TEXT);
                }
                var memoized = function memoized() {
                  var args = arguments,
                    key = resolver ? resolver.apply(this, args) : args[0],
                    cache = memoized.cache;
                  if (cache.has(key)) {
                    return cache.get(key);
                  }
                  var result = func.apply(this, args);
                  memoized.cache = cache.set(key, result);
                  return result;
                };
                memoized.cache = new memoize.Cache();
                return memoized;
              }
              /**
               * Creates a function that runs each argument through a corresponding
               * transform function.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} func The function to wrap.
               * @param {...(Function|Function[])} [transforms] The functions to transform
               * arguments, specified as individual functions or arrays of functions.
               * @returns {Function} Returns the new function.
               * @example
               *
               * function doubled(n) {
               *   return n * 2;
               * }
               *
               * function square(n) {
               *   return n * n;
               * }
               *
               * var modded = _.modArgs(function(x, y) {
               *   return [x, y];
               * }, square, doubled);
               *
               * modded(1, 2);
               * // => [1, 4]
               *
               * modded(5, 10);
               * // => [25, 20]
               */
              var modArgs = restParam(function (func, transforms) {
                transforms = baseFlatten(transforms);
                if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
                  throw new TypeError(FUNC_ERROR_TEXT);
                }
                var length = transforms.length;
                return restParam(function (args) {
                  var index = nativeMin(args.length, length);
                  while (index--) {
                    args[index] = transforms[index](args[index]);
                  }
                  return func.apply(this, args);
                });
              });
              /**
               * Creates a function that negates the result of the predicate `func`. The
               * `func` predicate is invoked with the `this` binding and arguments of the
               * created function.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} predicate The predicate to negate.
               * @returns {Function} Returns the new function.
               * @example
               *
               * function isEven(n) {
               *   return n % 2 == 0;
               * }
               *
               * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
               * // => [1, 3, 5]
               */
              function negate(predicate) {
                if (typeof predicate != 'function') {
                  throw new TypeError(FUNC_ERROR_TEXT);
                }
                return function () {
                  return !predicate.apply(this, arguments);
                };
              }
              /**
               * Creates a function that is restricted to invoking `func` once. Repeat calls
               * to the function return the value of the first call. The `func` is invoked
               * with the `this` binding and arguments of the created function.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} func The function to restrict.
               * @returns {Function} Returns the new restricted function.
               * @example
               *
               * var initialize = _.once(createApplication);
               * initialize();
               * initialize();
               * // `initialize` invokes `createApplication` once
               */
              function once(func) {
                return before(2, func);
              }
              /**
               * Creates a function that invokes `func` with `partial` arguments prepended
               * to those provided to the new function. This method is like `_.bind` except
               * it does **not** alter the `this` binding.
               *
               * The `_.partial.placeholder` value, which defaults to `_` in monolithic
               * builds, may be used as a placeholder for partially applied arguments.
               *
               * **Note:** This method does not set the "length" property of partially
               * applied functions.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} func The function to partially apply arguments to.
               * @param {...*} [partials] The arguments to be partially applied.
               * @returns {Function} Returns the new partially applied function.
               * @example
               *
               * var greet = function(greeting, name) {
               *   return greeting + ' ' + name;
               * };
               *
               * var sayHelloTo = _.partial(greet, 'hello');
               * sayHelloTo('fred');
               * // => 'hello fred'
               *
               * // using placeholders
               * var greetFred = _.partial(greet, _, 'fred');
               * greetFred('hi');
               * // => 'hi fred'
               */
              var partial = createPartial(PARTIAL_FLAG);
              /**
               * This method is like `_.partial` except that partially applied arguments
               * are appended to those provided to the new function.
               *
               * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
               * builds, may be used as a placeholder for partially applied arguments.
               *
               * **Note:** This method does not set the "length" property of partially
               * applied functions.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} func The function to partially apply arguments to.
               * @param {...*} [partials] The arguments to be partially applied.
               * @returns {Function} Returns the new partially applied function.
               * @example
               *
               * var greet = function(greeting, name) {
               *   return greeting + ' ' + name;
               * };
               *
               * var greetFred = _.partialRight(greet, 'fred');
               * greetFred('hi');
               * // => 'hi fred'
               *
               * // using placeholders
               * var sayHelloTo = _.partialRight(greet, 'hello', _);
               * sayHelloTo('fred');
               * // => 'hello fred'
               */
              var partialRight = createPartial(PARTIAL_RIGHT_FLAG);
              /**
               * Creates a function that invokes `func` with arguments arranged according
               * to the specified indexes where the argument value at the first index is
               * provided as the first argument, the argument value at the second index is
               * provided as the second argument, and so on.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} func The function to rearrange arguments for.
               * @param {...(number|number[])} indexes The arranged argument indexes,
               *  specified as individual indexes or arrays of indexes.
               * @returns {Function} Returns the new function.
               * @example
               *
               * var rearged = _.rearg(function(a, b, c) {
               *   return [a, b, c];
               * }, 2, 0, 1);
               *
               * rearged('b', 'c', 'a')
               * // => ['a', 'b', 'c']
               *
               * var map = _.rearg(_.map, [1, 0]);
               * map(function(n) {
               *   return n * 3;
               * }, [1, 2, 3]);
               * // => [3, 6, 9]
               */
              var rearg = restParam(function (func, indexes) {
                return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
              });
              /**
               * Creates a function that invokes `func` with the `this` binding of the
               * created function and arguments from `start` and beyond provided as an array.
               *
               * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} func The function to apply a rest parameter to.
               * @param {number} [start=func.length-1] The start position of the rest parameter.
               * @returns {Function} Returns the new function.
               * @example
               *
               * var say = _.restParam(function(what, names) {
               *   return what + ' ' + _.initial(names).join(', ') +
               *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
               * });
               *
               * say('hello', 'fred', 'barney', 'pebbles');
               * // => 'hello fred, barney, & pebbles'
               */
              function restParam(func, start) {
                if (typeof func != 'function') {
                  throw new TypeError(FUNC_ERROR_TEXT);
                }
                start = nativeMax(start === undefined ? func.length - 1 : +start || 0, 0);
                return function () {
                  var args = arguments,
                    index = -1,
                    length = nativeMax(args.length - start, 0),
                    rest = Array(length);
                  while (++index < length) {
                    rest[index] = args[start + index];
                  }
                  switch (start) {
                  case 0:
                    return func.call(this, rest);
                  case 1:
                    return func.call(this, args[0], rest);
                  case 2:
                    return func.call(this, args[0], args[1], rest);
                  }
                  var otherArgs = Array(start + 1);
                  index = -1;
                  while (++index < start) {
                    otherArgs[index] = args[index];
                  }
                  otherArgs[start] = rest;
                  return func.apply(this, otherArgs);
                };
              }
              /**
               * Creates a function that invokes `func` with the `this` binding of the created
               * function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
               *
               * **Note:** This method is based on the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} func The function to spread arguments over.
               * @returns {Function} Returns the new function.
               * @example
               *
               * var say = _.spread(function(who, what) {
               *   return who + ' says ' + what;
               * });
               *
               * say(['fred', 'hello']);
               * // => 'fred says hello'
               *
               * // with a Promise
               * var numbers = Promise.all([
               *   Promise.resolve(40),
               *   Promise.resolve(36)
               * ]);
               *
               * numbers.then(_.spread(function(x, y) {
               *   return x + y;
               * }));
               * // => a Promise of 76
               */
              function spread(func) {
                if (typeof func != 'function') {
                  throw new TypeError(FUNC_ERROR_TEXT);
                }
                return function (array) {
                  return func.apply(this, array);
                };
              }
              /**
               * Creates a throttled function that only invokes `func` at most once per
               * every `wait` milliseconds. The throttled function comes with a `cancel`
               * method to cancel delayed invocations. Provide an options object to indicate
               * that `func` should be invoked on the leading and/or trailing edge of the
               * `wait` timeout. Subsequent calls to the throttled function return the
               * result of the last `func` call.
               *
               * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
               * on the trailing edge of the timeout only if the the throttled function is
               * invoked more than once during the `wait` timeout.
               *
               * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
               * for details over the differences between `_.throttle` and `_.debounce`.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {Function} func The function to throttle.
               * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
               * @param {Object} [options] The options object.
               * @param {boolean} [options.leading=true] Specify invoking on the leading
               *  edge of the timeout.
               * @param {boolean} [options.trailing=true] Specify invoking on the trailing
               *  edge of the timeout.
               * @returns {Function} Returns the new throttled function.
               * @example
               *
               * // avoid excessively updating the position while scrolling
               * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
               *
               * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
               * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
               *   'trailing': false
               * }));
               *
               * // cancel a trailing throttled call
               * jQuery(window).on('popstate', throttled.cancel);
               */
              function throttle(func, wait, options) {
                var leading = true,
                  trailing = true;
                if (typeof func != 'function') {
                  throw new TypeError(FUNC_ERROR_TEXT);
                }
                if (options === false) {
                  leading = false;
                } else if (isObject(options)) {
                  leading = 'leading' in options ? !!options.leading : leading;
                  trailing = 'trailing' in options ? !!options.trailing : trailing;
                }
                return debounce(func, wait, {
                  'leading': leading,
                  'maxWait': +wait,
                  'trailing': trailing
                });
              }
              /**
               * Creates a function that provides `value` to the wrapper function as its
               * first argument. Any additional arguments provided to the function are
               * appended to those provided to the wrapper function. The wrapper is invoked
               * with the `this` binding of the created function.
               *
               * @static
               * @memberOf _
               * @category Function
               * @param {*} value The value to wrap.
               * @param {Function} wrapper The wrapper function.
               * @returns {Function} Returns the new function.
               * @example
               *
               * var p = _.wrap(_.escape, function(func, text) {
               *   return '<p>' + func(text) + '</p>';
               * });
               *
               * p('fred, barney, & pebbles');
               * // => '<p>fred, barney, &amp; pebbles</p>'
               */
              function wrap(value, wrapper) {
                wrapper = wrapper == null ? identity : wrapper;
                return createWrapper(wrapper, PARTIAL_FLAG, undefined, [value], []);
              } /*------------------------------------------------------------------------*/
              /**
               * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
               * otherwise they are assigned by reference. If `customizer` is provided it is
               * invoked to produce the cloned values. If `customizer` returns `undefined`
               * cloning is handled by the method instead. The `customizer` is bound to
               * `thisArg` and invoked with two argument; (value [, index|key, object]).
               *
               * **Note:** This method is loosely based on the
               * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
               * The enumerable properties of `arguments` objects and objects created by
               * constructors other than `Object` are cloned to plain `Object` objects. An
               * empty object is returned for uncloneable values such as functions, DOM nodes,
               * Maps, Sets, and WeakMaps.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to clone.
               * @param {boolean} [isDeep] Specify a deep clone.
               * @param {Function} [customizer] The function to customize cloning values.
               * @param {*} [thisArg] The `this` binding of `customizer`.
               * @returns {*} Returns the cloned value.
               * @example
               *
               * var users = [
               *   { 'user': 'barney' },
               *   { 'user': 'fred' }
               * ];
               *
               * var shallow = _.clone(users);
               * shallow[0] === users[0];
               * // => true
               *
               * var deep = _.clone(users, true);
               * deep[0] === users[0];
               * // => false
               *
               * // using a customizer callback
               * var el = _.clone(document.body, function(value) {
               *   if (_.isElement(value)) {
               *     return value.cloneNode(false);
               *   }
               * });
               *
               * el === document.body
               * // => false
               * el.nodeName
               * // => BODY
               * el.childNodes.length;
               * // => 0
               */
              function clone(value, isDeep, customizer, thisArg) {
                if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
                  isDeep = false;
                } else if (typeof isDeep == 'function') {
                  thisArg = customizer;
                  customizer = isDeep;
                  isDeep = false;
                }
                return typeof customizer == 'function' ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1)) : baseClone(value, isDeep);
              }
              /**
               * Creates a deep clone of `value`. If `customizer` is provided it is invoked
               * to produce the cloned values. If `customizer` returns `undefined` cloning
               * is handled by the method instead. The `customizer` is bound to `thisArg`
               * and invoked with two argument; (value [, index|key, object]).
               *
               * **Note:** This method is loosely based on the
               * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
               * The enumerable properties of `arguments` objects and objects created by
               * constructors other than `Object` are cloned to plain `Object` objects. An
               * empty object is returned for uncloneable values such as functions, DOM nodes,
               * Maps, Sets, and WeakMaps.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to deep clone.
               * @param {Function} [customizer] The function to customize cloning values.
               * @param {*} [thisArg] The `this` binding of `customizer`.
               * @returns {*} Returns the deep cloned value.
               * @example
               *
               * var users = [
               *   { 'user': 'barney' },
               *   { 'user': 'fred' }
               * ];
               *
               * var deep = _.cloneDeep(users);
               * deep[0] === users[0];
               * // => false
               *
               * // using a customizer callback
               * var el = _.cloneDeep(document.body, function(value) {
               *   if (_.isElement(value)) {
               *     return value.cloneNode(true);
               *   }
               * });
               *
               * el === document.body
               * // => false
               * el.nodeName
               * // => BODY
               * el.childNodes.length;
               * // => 20
               */
              function cloneDeep(value, customizer, thisArg) {
                return typeof customizer == 'function' ? baseClone(value, true, bindCallback(customizer, thisArg, 1)) : baseClone(value, true);
              }
              /**
               * Checks if `value` is greater than `other`.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to compare.
               * @param {*} other The other value to compare.
               * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
               * @example
               *
               * _.gt(3, 1);
               * // => true
               *
               * _.gt(3, 3);
               * // => false
               *
               * _.gt(1, 3);
               * // => false
               */
              function gt(value, other) {
                return value > other;
              }
              /**
               * Checks if `value` is greater than or equal to `other`.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to compare.
               * @param {*} other The other value to compare.
               * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
               * @example
               *
               * _.gte(3, 1);
               * // => true
               *
               * _.gte(3, 3);
               * // => true
               *
               * _.gte(1, 3);
               * // => false
               */
              function gte(value, other) {
                return value >= other;
              }
              /**
               * Checks if `value` is classified as an `arguments` object.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
               * @example
               *
               * _.isArguments(function() { return arguments; }());
               * // => true
               *
               * _.isArguments([1, 2, 3]);
               * // => false
               */
              function isArguments(value) {
                return isObjectLike(value) && isArrayLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
              }
              /**
               * Checks if `value` is classified as an `Array` object.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
               * @example
               *
               * _.isArray([1, 2, 3]);
               * // => true
               *
               * _.isArray(function() { return arguments; }());
               * // => false
               */
              var isArray = nativeIsArray || function (value) {
                return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
              };
              /**
               * Checks if `value` is classified as a boolean primitive or object.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
               * @example
               *
               * _.isBoolean(false);
               * // => true
               *
               * _.isBoolean(null);
               * // => false
               */
              function isBoolean(value) {
                return value === true || value === false || isObjectLike(value) && objToString.call(value) == boolTag;
              }
              /**
               * Checks if `value` is classified as a `Date` object.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
               * @example
               *
               * _.isDate(new Date);
               * // => true
               *
               * _.isDate('Mon April 23 2012');
               * // => false
               */
              function isDate(value) {
                return isObjectLike(value) && objToString.call(value) == dateTag;
              }
              /**
               * Checks if `value` is a DOM element.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
               * @example
               *
               * _.isElement(document.body);
               * // => true
               *
               * _.isElement('<body>');
               * // => false
               */
              function isElement(value) {
                return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
              }
              /**
               * Checks if `value` is empty. A value is considered empty unless it is an
               * `arguments` object, array, string, or jQuery-like collection with a length
               * greater than `0` or an object with own enumerable properties.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {Array|Object|string} value The value to inspect.
               * @returns {boolean} Returns `true` if `value` is empty, else `false`.
               * @example
               *
               * _.isEmpty(null);
               * // => true
               *
               * _.isEmpty(true);
               * // => true
               *
               * _.isEmpty(1);
               * // => true
               *
               * _.isEmpty([1, 2, 3]);
               * // => false
               *
               * _.isEmpty({ 'a': 1 });
               * // => false
               */
              function isEmpty(value) {
                if (value == null) {
                  return true;
                }
                if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) || isObjectLike(value) && isFunction(value.splice))) {
                  return !value.length;
                }
                return !keys(value).length;
              }
              /**
               * Performs a deep comparison between two values to determine if they are
               * equivalent. If `customizer` is provided it is invoked to compare values.
               * If `customizer` returns `undefined` comparisons are handled by the method
               * instead. The `customizer` is bound to `thisArg` and invoked with three
               * arguments: (value, other [, index|key]).
               *
               * **Note:** This method supports comparing arrays, booleans, `Date` objects,
               * numbers, `Object` objects, regexes, and strings. Objects are compared by
               * their own, not inherited, enumerable properties. Functions and DOM nodes
               * are **not** supported. Provide a customizer function to extend support
               * for comparing other values.
               *
               * @static
               * @memberOf _
               * @alias eq
               * @category Lang
               * @param {*} value The value to compare.
               * @param {*} other The other value to compare.
               * @param {Function} [customizer] The function to customize value comparisons.
               * @param {*} [thisArg] The `this` binding of `customizer`.
               * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
               * @example
               *
               * var object = { 'user': 'fred' };
               * var other = { 'user': 'fred' };
               *
               * object == other;
               * // => false
               *
               * _.isEqual(object, other);
               * // => true
               *
               * // using a customizer callback
               * var array = ['hello', 'goodbye'];
               * var other = ['hi', 'goodbye'];
               *
               * _.isEqual(array, other, function(value, other) {
               *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
               *     return true;
               *   }
               * });
               * // => true
               */
              function isEqual(value, other, customizer, thisArg) {
                customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
                var result = customizer ? customizer(value, other) : undefined;
                return result === undefined ? baseIsEqual(value, other, customizer) : !!result;
              }
              /**
               * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
               * `SyntaxError`, `TypeError`, or `URIError` object.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
               * @example
               *
               * _.isError(new Error);
               * // => true
               *
               * _.isError(Error);
               * // => false
               */
              function isError(value) {
                return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
              }
              /**
               * Checks if `value` is a finite primitive number.
               *
               * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
               * @example
               *
               * _.isFinite(10);
               * // => true
               *
               * _.isFinite('10');
               * // => false
               *
               * _.isFinite(true);
               * // => false
               *
               * _.isFinite(Object(10));
               * // => false
               *
               * _.isFinite(Infinity);
               * // => false
               */
              function isFinite(value) {
                return typeof value == 'number' && nativeIsFinite(value);
              }
              /**
               * Checks if `value` is classified as a `Function` object.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
               * @example
               *
               * _.isFunction(_);
               * // => true
               *
               * _.isFunction(/abc/);
               * // => false
               */
              function isFunction(value) { // The use of `Object#toString` avoids issues with the `typeof` operator
                // in older versions of Chrome and Safari which return 'function' for regexes
                // and Safari 8 equivalents which return 'object' for typed array constructors.
                return isObject(value) && objToString.call(value) == funcTag;
              }
              /**
               * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
               * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is an object, else `false`.
               * @example
               *
               * _.isObject({});
               * // => true
               *
               * _.isObject([1, 2, 3]);
               * // => true
               *
               * _.isObject(1);
               * // => false
               */
              function isObject(value) { // Avoid a V8 JIT bug in Chrome 19-20.
                // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
                var type = typeof value;
                return !!value && (type == 'object' || type == 'function');
              }
              /**
               * Performs a deep comparison between `object` and `source` to determine if
               * `object` contains equivalent property values. If `customizer` is provided
               * it is invoked to compare values. If `customizer` returns `undefined`
               * comparisons are handled by the method instead. The `customizer` is bound
               * to `thisArg` and invoked with three arguments: (value, other, index|key).
               *
               * **Note:** This method supports comparing properties of arrays, booleans,
               * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
               * and DOM nodes are **not** supported. Provide a customizer function to extend
               * support for comparing other values.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {Object} object The object to inspect.
               * @param {Object} source The object of property values to match.
               * @param {Function} [customizer] The function to customize value comparisons.
               * @param {*} [thisArg] The `this` binding of `customizer`.
               * @returns {boolean} Returns `true` if `object` is a match, else `false`.
               * @example
               *
               * var object = { 'user': 'fred', 'age': 40 };
               *
               * _.isMatch(object, { 'age': 40 });
               * // => true
               *
               * _.isMatch(object, { 'age': 36 });
               * // => false
               *
               * // using a customizer callback
               * var object = { 'greeting': 'hello' };
               * var source = { 'greeting': 'hi' };
               *
               * _.isMatch(object, source, function(value, other) {
               *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
               * });
               * // => true
               */
              function isMatch(object, source, customizer, thisArg) {
                customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
                return baseIsMatch(object, getMatchData(source), customizer);
              }
              /**
               * Checks if `value` is `NaN`.
               *
               * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
               * which returns `true` for `undefined` and other non-numeric values.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
               * @example
               *
               * _.isNaN(NaN);
               * // => true
               *
               * _.isNaN(new Number(NaN));
               * // => true
               *
               * isNaN(undefined);
               * // => true
               *
               * _.isNaN(undefined);
               * // => false
               */
              function isNaN(value) { // An `NaN` primitive is the only value that is not equal to itself.
                // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
                return isNumber(value) && value != +value;
              }
              /**
               * Checks if `value` is a native function.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
               * @example
               *
               * _.isNative(Array.prototype.push);
               * // => true
               *
               * _.isNative(_);
               * // => false
               */
              function isNative(value) {
                if (value == null) {
                  return false;
                }
                if (isFunction(value)) {
                  return reIsNative.test(fnToString.call(value));
                }
                return isObjectLike(value) && reIsHostCtor.test(value);
              }
              /**
               * Checks if `value` is `null`.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
               * @example
               *
               * _.isNull(null);
               * // => true
               *
               * _.isNull(void 0);
               * // => false
               */
              function isNull(value) {
                return value === null;
              }
              /**
               * Checks if `value` is classified as a `Number` primitive or object.
               *
               * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
               * as numbers, use the `_.isFinite` method.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
               * @example
               *
               * _.isNumber(8.4);
               * // => true
               *
               * _.isNumber(NaN);
               * // => true
               *
               * _.isNumber('8.4');
               * // => false
               */
              function isNumber(value) {
                return typeof value == 'number' || isObjectLike(value) && objToString.call(value) == numberTag;
              }
              /**
               * Checks if `value` is a plain object, that is, an object created by the
               * `Object` constructor or one with a `[[Prototype]]` of `null`.
               *
               * **Note:** This method assumes objects created by the `Object` constructor
               * have no inherited enumerable properties.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
               * @example
               *
               * function Foo() {
               *   this.a = 1;
               * }
               *
               * _.isPlainObject(new Foo);
               * // => false
               *
               * _.isPlainObject([1, 2, 3]);
               * // => false
               *
               * _.isPlainObject({ 'x': 0, 'y': 0 });
               * // => true
               *
               * _.isPlainObject(Object.create(null));
               * // => true
               */
              function isPlainObject(value) {
                var Ctor; // Exit early for non `Object` objects.
                if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) || !hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor))) {
                  return false;
                } // IE < 9 iterates inherited properties before own properties. If the first
                // iterated property is an object's own property then there are no inherited
                // enumerable properties.
                var result; // In most environments an object's own properties are iterated before
                // its inherited properties. If the last iterated property is an object's
                // own property then there are no inherited enumerable properties.
                baseForIn(value, function (subValue, key) {
                  result = key;
                });
                return result === undefined || hasOwnProperty.call(value, result);
              }
              /**
               * Checks if `value` is classified as a `RegExp` object.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
               * @example
               *
               * _.isRegExp(/abc/);
               * // => true
               *
               * _.isRegExp('/abc/');
               * // => false
               */
              function isRegExp(value) {
                return isObject(value) && objToString.call(value) == regexpTag;
              }
              /**
               * Checks if `value` is classified as a `String` primitive or object.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
               * @example
               *
               * _.isString('abc');
               * // => true
               *
               * _.isString(1);
               * // => false
               */
              function isString(value) {
                return typeof value == 'string' || isObjectLike(value) && objToString.call(value) == stringTag;
              }
              /**
               * Checks if `value` is classified as a typed array.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
               * @example
               *
               * _.isTypedArray(new Uint8Array);
               * // => true
               *
               * _.isTypedArray([]);
               * // => false
               */
              function isTypedArray(value) {
                return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
              }
              /**
               * Checks if `value` is `undefined`.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to check.
               * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
               * @example
               *
               * _.isUndefined(void 0);
               * // => true
               *
               * _.isUndefined(null);
               * // => false
               */
              function isUndefined(value) {
                return value === undefined;
              }
              /**
               * Checks if `value` is less than `other`.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to compare.
               * @param {*} other The other value to compare.
               * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
               * @example
               *
               * _.lt(1, 3);
               * // => true
               *
               * _.lt(3, 3);
               * // => false
               *
               * _.lt(3, 1);
               * // => false
               */
              function lt(value, other) {
                return value < other;
              }
              /**
               * Checks if `value` is less than or equal to `other`.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to compare.
               * @param {*} other The other value to compare.
               * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
               * @example
               *
               * _.lte(1, 3);
               * // => true
               *
               * _.lte(3, 3);
               * // => true
               *
               * _.lte(3, 1);
               * // => false
               */
              function lte(value, other) {
                return value <= other;
              }
              /**
               * Converts `value` to an array.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to convert.
               * @returns {Array} Returns the converted array.
               * @example
               *
               * (function() {
               *   return _.toArray(arguments).slice(1);
               * }(1, 2, 3));
               * // => [2, 3]
               */
              function toArray(value) {
                var length = value ? getLength(value) : 0;
                if (!isLength(length)) {
                  return values(value);
                }
                if (!length) {
                  return [];
                }
                return arrayCopy(value);
              }
              /**
               * Converts `value` to a plain object flattening inherited enumerable
               * properties of `value` to own properties of the plain object.
               *
               * @static
               * @memberOf _
               * @category Lang
               * @param {*} value The value to convert.
               * @returns {Object} Returns the converted plain object.
               * @example
               *
               * function Foo() {
               *   this.b = 2;
               * }
               *
               * Foo.prototype.c = 3;
               *
               * _.assign({ 'a': 1 }, new Foo);
               * // => { 'a': 1, 'b': 2 }
               *
               * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
               * // => { 'a': 1, 'b': 2, 'c': 3 }
               */
              function toPlainObject(value) {
                return baseCopy(value, keysIn(value));
              } /*------------------------------------------------------------------------*/
              /**
               * Recursively merges own enumerable properties of the source object(s), that
               * don't resolve to `undefined` into the destination object. Subsequent sources
               * overwrite property assignments of previous sources. If `customizer` is
               * provided it is invoked to produce the merged values of the destination and
               * source properties. If `customizer` returns `undefined` merging is handled
               * by the method instead. The `customizer` is bound to `thisArg` and invoked
               * with five arguments: (objectValue, sourceValue, key, object, source).
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The destination object.
               * @param {...Object} [sources] The source objects.
               * @param {Function} [customizer] The function to customize assigned values.
               * @param {*} [thisArg] The `this` binding of `customizer`.
               * @returns {Object} Returns `object`.
               * @example
               *
               * var users = {
               *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
               * };
               *
               * var ages = {
               *   'data': [{ 'age': 36 }, { 'age': 40 }]
               * };
               *
               * _.merge(users, ages);
               * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
               *
               * // using a customizer callback
               * var object = {
               *   'fruits': ['apple'],
               *   'vegetables': ['beet']
               * };
               *
               * var other = {
               *   'fruits': ['banana'],
               *   'vegetables': ['carrot']
               * };
               *
               * _.merge(object, other, function(a, b) {
               *   if (_.isArray(a)) {
               *     return a.concat(b);
               *   }
               * });
               * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
               */
              var merge = createAssigner(baseMerge);
              /**
               * Assigns own enumerable properties of source object(s) to the destination
               * object. Subsequent sources overwrite property assignments of previous sources.
               * If `customizer` is provided it is invoked to produce the assigned values.
               * The `customizer` is bound to `thisArg` and invoked with five arguments:
               * (objectValue, sourceValue, key, object, source).
               *
               * **Note:** This method mutates `object` and is based on
               * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
               *
               * @static
               * @memberOf _
               * @alias extend
               * @category Object
               * @param {Object} object The destination object.
               * @param {...Object} [sources] The source objects.
               * @param {Function} [customizer] The function to customize assigned values.
               * @param {*} [thisArg] The `this` binding of `customizer`.
               * @returns {Object} Returns `object`.
               * @example
               *
               * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
               * // => { 'user': 'fred', 'age': 40 }
               *
               * // using a customizer callback
               * var defaults = _.partialRight(_.assign, function(value, other) {
               *   return _.isUndefined(value) ? other : value;
               * });
               *
               * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
               * // => { 'user': 'barney', 'age': 36 }
               */
              var assign = createAssigner(function (object, source, customizer) {
                return customizer ? assignWith(object, source, customizer) : baseAssign(object, source);
              });
              /**
               * Creates an object that inherits from the given `prototype` object. If a
               * `properties` object is provided its own enumerable properties are assigned
               * to the created object.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} prototype The object to inherit from.
               * @param {Object} [properties] The properties to assign to the object.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {Object} Returns the new object.
               * @example
               *
               * function Shape() {
               *   this.x = 0;
               *   this.y = 0;
               * }
               *
               * function Circle() {
               *   Shape.call(this);
               * }
               *
               * Circle.prototype = _.create(Shape.prototype, {
               *   'constructor': Circle
               * });
               *
               * var circle = new Circle;
               * circle instanceof Circle;
               * // => true
               *
               * circle instanceof Shape;
               * // => true
               */
              function create(prototype, properties, guard) {
                var result = baseCreate(prototype);
                if (guard && isIterateeCall(prototype, properties, guard)) {
                  properties = undefined;
                }
                return properties ? baseAssign(result, properties) : result;
              }
              /**
               * Assigns own enumerable properties of source object(s) to the destination
               * object for all destination properties that resolve to `undefined`. Once a
               * property is set, additional values of the same property are ignored.
               *
               * **Note:** This method mutates `object`.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The destination object.
               * @param {...Object} [sources] The source objects.
               * @returns {Object} Returns `object`.
               * @example
               *
               * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
               * // => { 'user': 'barney', 'age': 36 }
               */
              var defaults = createDefaults(assign, assignDefaults);
              /**
               * This method is like `_.defaults` except that it recursively assigns
               * default properties.
               *
               * **Note:** This method mutates `object`.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The destination object.
               * @param {...Object} [sources] The source objects.
               * @returns {Object} Returns `object`.
               * @example
               *
               * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
               * // => { 'user': { 'name': 'barney', 'age': 36 } }
               *
               */
              var defaultsDeep = createDefaults(merge, mergeDefaults);
              /**
               * This method is like `_.find` except that it returns the key of the first
               * element `predicate` returns truthy for instead of the element itself.
               *
               * If a property name is provided for `predicate` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `predicate` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to search.
               * @param {Function|Object|string} [predicate=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
               * @example
               *
               * var users = {
               *   'barney':  { 'age': 36, 'active': true },
               *   'fred':    { 'age': 40, 'active': false },
               *   'pebbles': { 'age': 1,  'active': true }
               * };
               *
               * _.findKey(users, function(chr) {
               *   return chr.age < 40;
               * });
               * // => 'barney' (iteration order is not guaranteed)
               *
               * // using the `_.matches` callback shorthand
               * _.findKey(users, { 'age': 1, 'active': true });
               * // => 'pebbles'
               *
               * // using the `_.matchesProperty` callback shorthand
               * _.findKey(users, 'active', false);
               * // => 'fred'
               *
               * // using the `_.property` callback shorthand
               * _.findKey(users, 'active');
               * // => 'barney'
               */
              var findKey = createFindKey(baseForOwn);
              /**
               * This method is like `_.findKey` except that it iterates over elements of
               * a collection in the opposite order.
               *
               * If a property name is provided for `predicate` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `predicate` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to search.
               * @param {Function|Object|string} [predicate=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
               * @example
               *
               * var users = {
               *   'barney':  { 'age': 36, 'active': true },
               *   'fred':    { 'age': 40, 'active': false },
               *   'pebbles': { 'age': 1,  'active': true }
               * };
               *
               * _.findLastKey(users, function(chr) {
               *   return chr.age < 40;
               * });
               * // => returns `pebbles` assuming `_.findKey` returns `barney`
               *
               * // using the `_.matches` callback shorthand
               * _.findLastKey(users, { 'age': 36, 'active': true });
               * // => 'barney'
               *
               * // using the `_.matchesProperty` callback shorthand
               * _.findLastKey(users, 'active', false);
               * // => 'fred'
               *
               * // using the `_.property` callback shorthand
               * _.findLastKey(users, 'active');
               * // => 'pebbles'
               */
              var findLastKey = createFindKey(baseForOwnRight);
              /**
               * Iterates over own and inherited enumerable properties of an object invoking
               * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
               * with three arguments: (value, key, object). Iteratee functions may exit
               * iteration early by explicitly returning `false`.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to iterate over.
               * @param {Function} [iteratee=_.identity] The function invoked per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Object} Returns `object`.
               * @example
               *
               * function Foo() {
               *   this.a = 1;
               *   this.b = 2;
               * }
               *
               * Foo.prototype.c = 3;
               *
               * _.forIn(new Foo, function(value, key) {
               *   console.log(key);
               * });
               * // => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
               */
              var forIn = createForIn(baseFor);
              /**
               * This method is like `_.forIn` except that it iterates over properties of
               * `object` in the opposite order.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to iterate over.
               * @param {Function} [iteratee=_.identity] The function invoked per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Object} Returns `object`.
               * @example
               *
               * function Foo() {
               *   this.a = 1;
               *   this.b = 2;
               * }
               *
               * Foo.prototype.c = 3;
               *
               * _.forInRight(new Foo, function(value, key) {
               *   console.log(key);
               * });
               * // => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
               */
              var forInRight = createForIn(baseForRight);
              /**
               * Iterates over own enumerable properties of an object invoking `iteratee`
               * for each property. The `iteratee` is bound to `thisArg` and invoked with
               * three arguments: (value, key, object). Iteratee functions may exit iteration
               * early by explicitly returning `false`.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to iterate over.
               * @param {Function} [iteratee=_.identity] The function invoked per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Object} Returns `object`.
               * @example
               *
               * function Foo() {
               *   this.a = 1;
               *   this.b = 2;
               * }
               *
               * Foo.prototype.c = 3;
               *
               * _.forOwn(new Foo, function(value, key) {
               *   console.log(key);
               * });
               * // => logs 'a' and 'b' (iteration order is not guaranteed)
               */
              var forOwn = createForOwn(baseForOwn);
              /**
               * This method is like `_.forOwn` except that it iterates over properties of
               * `object` in the opposite order.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to iterate over.
               * @param {Function} [iteratee=_.identity] The function invoked per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Object} Returns `object`.
               * @example
               *
               * function Foo() {
               *   this.a = 1;
               *   this.b = 2;
               * }
               *
               * Foo.prototype.c = 3;
               *
               * _.forOwnRight(new Foo, function(value, key) {
               *   console.log(key);
               * });
               * // => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
               */
              var forOwnRight = createForOwn(baseForOwnRight);
              /**
               * Creates an array of function property names from all enumerable properties,
               * own and inherited, of `object`.
               *
               * @static
               * @memberOf _
               * @alias methods
               * @category Object
               * @param {Object} object The object to inspect.
               * @returns {Array} Returns the new array of property names.
               * @example
               *
               * _.functions(_);
               * // => ['after', 'ary', 'assign', ...]
               */
              function functions(object) {
                return baseFunctions(object, keysIn(object));
              }
              /**
               * Gets the property value at `path` of `object`. If the resolved value is
               * `undefined` the `defaultValue` is used in its place.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to query.
               * @param {Array|string} path The path of the property to get.
               * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
               * @returns {*} Returns the resolved value.
               * @example
               *
               * var object = { 'a': [{ 'b': { 'c': 3 } }] };
               *
               * _.get(object, 'a[0].b.c');
               * // => 3
               *
               * _.get(object, ['a', '0', 'b', 'c']);
               * // => 3
               *
               * _.get(object, 'a.b.c', 'default');
               * // => 'default'
               */
              function get(object, path, defaultValue) {
                var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
                return result === undefined ? defaultValue : result;
              }
              /**
               * Checks if `path` is a direct property.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to query.
               * @param {Array|string} path The path to check.
               * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
               * @example
               *
               * var object = { 'a': { 'b': { 'c': 3 } } };
               *
               * _.has(object, 'a');
               * // => true
               *
               * _.has(object, 'a.b.c');
               * // => true
               *
               * _.has(object, ['a', 'b', 'c']);
               * // => true
               */
              function has(object, path) {
                if (object == null) {
                  return false;
                }
                var result = hasOwnProperty.call(object, path);
                if (!result && !isKey(path)) {
                  path = toPath(path);
                  object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
                  if (object == null) {
                    return false;
                  }
                  path = last(path);
                  result = hasOwnProperty.call(object, path);
                }
                return result || isLength(object.length) && isIndex(path, object.length) && (isArray(object) || isArguments(object));
              }
              /**
               * Creates an object composed of the inverted keys and values of `object`.
               * If `object` contains duplicate values, subsequent values overwrite property
               * assignments of previous values unless `multiValue` is `true`.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to invert.
               * @param {boolean} [multiValue] Allow multiple values per key.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {Object} Returns the new inverted object.
               * @example
               *
               * var object = { 'a': 1, 'b': 2, 'c': 1 };
               *
               * _.invert(object);
               * // => { '1': 'c', '2': 'b' }
               *
               * // with `multiValue`
               * _.invert(object, true);
               * // => { '1': ['a', 'c'], '2': ['b'] }
               */
              function invert(object, multiValue, guard) {
                if (guard && isIterateeCall(object, multiValue, guard)) {
                  multiValue = undefined;
                }
                var index = -1,
                  props = keys(object),
                  length = props.length,
                  result = {};
                while (++index < length) {
                  var key = props[index],
                    value = object[key];
                  if (multiValue) {
                    if (hasOwnProperty.call(result, value)) {
                      result[value].push(key);
                    } else {
                      result[value] = [key];
                    }
                  } else {
                    result[value] = key;
                  }
                }
                return result;
              }
              /**
               * Creates an array of the own enumerable property names of `object`.
               *
               * **Note:** Non-object values are coerced to objects. See the
               * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
               * for more details.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to query.
               * @returns {Array} Returns the array of property names.
               * @example
               *
               * function Foo() {
               *   this.a = 1;
               *   this.b = 2;
               * }
               *
               * Foo.prototype.c = 3;
               *
               * _.keys(new Foo);
               * // => ['a', 'b'] (iteration order is not guaranteed)
               *
               * _.keys('hi');
               * // => ['0', '1']
               */
              var keys = !nativeKeys ? shimKeys : function (object) {
                var Ctor = object == null ? undefined : object.constructor;
                if (typeof Ctor == 'function' && Ctor.prototype === object || typeof object != 'function' && isArrayLike(object)) {
                  return shimKeys(object);
                }
                return isObject(object) ? nativeKeys(object) : [];
              };
              /**
               * Creates an array of the own and inherited enumerable property names of `object`.
               *
               * **Note:** Non-object values are coerced to objects.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to query.
               * @returns {Array} Returns the array of property names.
               * @example
               *
               * function Foo() {
               *   this.a = 1;
               *   this.b = 2;
               * }
               *
               * Foo.prototype.c = 3;
               *
               * _.keysIn(new Foo);
               * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
               */
              function keysIn(object) {
                if (object == null) {
                  return [];
                }
                if (!isObject(object)) {
                  object = Object(object);
                }
                var length = object.length;
                length = length && isLength(length) && (isArray(object) || isArguments(object)) && length || 0;
                var Ctor = object.constructor,
                  index = -1,
                  isProto = typeof Ctor == 'function' && Ctor.prototype === object,
                  result = Array(length),
                  skipIndexes = length > 0;
                while (++index < length) {
                  result[index] = index + '';
                }
                for (var key in object) {
                  if (!(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
                    result.push(key);
                  }
                }
                return result;
              }
              /**
               * The opposite of `_.mapValues`; this method creates an object with the
               * same values as `object` and keys generated by running each own enumerable
               * property of `object` through `iteratee`.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to iterate over.
               * @param {Function|Object|string} [iteratee=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Object} Returns the new mapped object.
               * @example
               *
               * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
               *   return key + value;
               * });
               * // => { 'a1': 1, 'b2': 2 }
               */
              var mapKeys = createObjectMapper(true);
              /**
               * Creates an object with the same keys as `object` and values generated by
               * running each own enumerable property of `object` through `iteratee`. The
               * iteratee function is bound to `thisArg` and invoked with three arguments:
               * (value, key, object).
               *
               * If a property name is provided for `iteratee` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `iteratee` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to iterate over.
               * @param {Function|Object|string} [iteratee=_.identity] The function invoked
               *  per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Object} Returns the new mapped object.
               * @example
               *
               * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
               *   return n * 3;
               * });
               * // => { 'a': 3, 'b': 6 }
               *
               * var users = {
               *   'fred':    { 'user': 'fred',    'age': 40 },
               *   'pebbles': { 'user': 'pebbles', 'age': 1 }
               * };
               *
               * // using the `_.property` callback shorthand
               * _.mapValues(users, 'age');
               * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
               */
              var mapValues = createObjectMapper();
              /**
               * The opposite of `_.pick`; this method creates an object composed of the
               * own and inherited enumerable properties of `object` that are not omitted.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The source object.
               * @param {Function|...(string|string[])} [predicate] The function invoked per
               *  iteration or property names to omit, specified as individual property
               *  names or arrays of property names.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {Object} Returns the new object.
               * @example
               *
               * var object = { 'user': 'fred', 'age': 40 };
               *
               * _.omit(object, 'age');
               * // => { 'user': 'fred' }
               *
               * _.omit(object, _.isNumber);
               * // => { 'user': 'fred' }
               */
              var omit = restParam(function (object, props) {
                if (object == null) {
                  return {};
                }
                if (typeof props[0] != 'function') {
                  var props = arrayMap(baseFlatten(props), String);
                  return pickByArray(object, baseDifference(keysIn(object), props));
                }
                var predicate = bindCallback(props[0], props[1], 3);
                return pickByCallback(object, function (value, key, object) {
                  return !predicate(value, key, object);
                });
              });
              /**
               * Creates a two dimensional array of the key-value pairs for `object`,
               * e.g. `[[key1, value1], [key2, value2]]`.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to query.
               * @returns {Array} Returns the new array of key-value pairs.
               * @example
               *
               * _.pairs({ 'barney': 36, 'fred': 40 });
               * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
               */
              function pairs(object) {
                object = toObject(object);
                var index = -1,
                  props = keys(object),
                  length = props.length,
                  result = Array(length);
                while (++index < length) {
                  var key = props[index];
                  result[index] = [key, object[key]];
                }
                return result;
              }
              /**
               * Creates an object composed of the picked `object` properties. Property
               * names may be specified as individual arguments or as arrays of property
               * names. If `predicate` is provided it is invoked for each property of `object`
               * picking the properties `predicate` returns truthy for. The predicate is
               * bound to `thisArg` and invoked with three arguments: (value, key, object).
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The source object.
               * @param {Function|...(string|string[])} [predicate] The function invoked per
               *  iteration or property names to pick, specified as individual property
               *  names or arrays of property names.
               * @param {*} [thisArg] The `this` binding of `predicate`.
               * @returns {Object} Returns the new object.
               * @example
               *
               * var object = { 'user': 'fred', 'age': 40 };
               *
               * _.pick(object, 'user');
               * // => { 'user': 'fred' }
               *
               * _.pick(object, _.isString);
               * // => { 'user': 'fred' }
               */
              var pick = restParam(function (object, props) {
                if (object == null) {
                  return {};
                }
                return typeof props[0] == 'function' ? pickByCallback(object, bindCallback(props[0], props[1], 3)) : pickByArray(object, baseFlatten(props));
              });
              /**
               * This method is like `_.get` except that if the resolved value is a function
               * it is invoked with the `this` binding of its parent object and its result
               * is returned.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to query.
               * @param {Array|string} path The path of the property to resolve.
               * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
               * @returns {*} Returns the resolved value.
               * @example
               *
               * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
               *
               * _.result(object, 'a[0].b.c1');
               * // => 3
               *
               * _.result(object, 'a[0].b.c2');
               * // => 4
               *
               * _.result(object, 'a.b.c', 'default');
               * // => 'default'
               *
               * _.result(object, 'a.b.c', _.constant('default'));
               * // => 'default'
               */
              function result(object, path, defaultValue) {
                var result = object == null ? undefined : object[path];
                if (result === undefined) {
                  if (object != null && !isKey(path, object)) {
                    path = toPath(path);
                    object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
                    result = object == null ? undefined : object[last(path)];
                  }
                  result = result === undefined ? defaultValue : result;
                }
                return isFunction(result) ? result.call(object) : result;
              }
              /**
               * Sets the property value of `path` on `object`. If a portion of `path`
               * does not exist it is created.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to augment.
               * @param {Array|string} path The path of the property to set.
               * @param {*} value The value to set.
               * @returns {Object} Returns `object`.
               * @example
               *
               * var object = { 'a': [{ 'b': { 'c': 3 } }] };
               *
               * _.set(object, 'a[0].b.c', 4);
               * console.log(object.a[0].b.c);
               * // => 4
               *
               * _.set(object, 'x[0].y.z', 5);
               * console.log(object.x[0].y.z);
               * // => 5
               */
              function set(object, path, value) {
                if (object == null) {
                  return object;
                }
                var pathKey = path + '';
                path = object[pathKey] != null || isKey(path, object) ? [pathKey] : toPath(path);
                var index = -1,
                  length = path.length,
                  lastIndex = length - 1,
                  nested = object;
                while (nested != null && ++index < length) {
                  var key = path[index];
                  if (isObject(nested)) {
                    if (index == lastIndex) {
                      nested[key] = value;
                    } else if (nested[key] == null) {
                      nested[key] = isIndex(path[index + 1]) ? [] : {};
                    }
                  }
                  nested = nested[key];
                }
                return object;
              }
              /**
               * An alternative to `_.reduce`; this method transforms `object` to a new
               * `accumulator` object which is the result of running each of its own enumerable
               * properties through `iteratee`, with each invocation potentially mutating
               * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
               * with four arguments: (accumulator, value, key, object). Iteratee functions
               * may exit iteration early by explicitly returning `false`.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Array|Object} object The object to iterate over.
               * @param {Function} [iteratee=_.identity] The function invoked per iteration.
               * @param {*} [accumulator] The custom accumulator value.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {*} Returns the accumulated value.
               * @example
               *
               * _.transform([2, 3, 4], function(result, n) {
               *   result.push(n *= n);
               *   return n % 2 == 0;
               * });
               * // => [4, 9]
               *
               * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
               *   result[key] = n * 3;
               * });
               * // => { 'a': 3, 'b': 6 }
               */
              function transform(object, iteratee, accumulator, thisArg) {
                var isArr = isArray(object) || isTypedArray(object);
                iteratee = getCallback(iteratee, thisArg, 4);
                if (accumulator == null) {
                  if (isArr || isObject(object)) {
                    var Ctor = object.constructor;
                    if (isArr) {
                      accumulator = isArray(object) ? new Ctor() : [];
                    } else {
                      accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
                    }
                  } else {
                    accumulator = {};
                  }
                }(isArr ? arrayEach : baseForOwn)(object, function (value, index, object) {
                  return iteratee(accumulator, value, index, object);
                });
                return accumulator;
              }
              /**
               * Creates an array of the own enumerable property values of `object`.
               *
               * **Note:** Non-object values are coerced to objects.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to query.
               * @returns {Array} Returns the array of property values.
               * @example
               *
               * function Foo() {
               *   this.a = 1;
               *   this.b = 2;
               * }
               *
               * Foo.prototype.c = 3;
               *
               * _.values(new Foo);
               * // => [1, 2] (iteration order is not guaranteed)
               *
               * _.values('hi');
               * // => ['h', 'i']
               */
              function values(object) {
                return baseValues(object, keys(object));
              }
              /**
               * Creates an array of the own and inherited enumerable property values
               * of `object`.
               *
               * **Note:** Non-object values are coerced to objects.
               *
               * @static
               * @memberOf _
               * @category Object
               * @param {Object} object The object to query.
               * @returns {Array} Returns the array of property values.
               * @example
               *
               * function Foo() {
               *   this.a = 1;
               *   this.b = 2;
               * }
               *
               * Foo.prototype.c = 3;
               *
               * _.valuesIn(new Foo);
               * // => [1, 2, 3] (iteration order is not guaranteed)
               */
              function valuesIn(object) {
                return baseValues(object, keysIn(object));
              } /*------------------------------------------------------------------------*/
              /**
               * Checks if `n` is between `start` and up to but not including, `end`. If
               * `end` is not specified it is set to `start` with `start` then set to `0`.
               *
               * @static
               * @memberOf _
               * @category Number
               * @param {number} n The number to check.
               * @param {number} [start=0] The start of the range.
               * @param {number} end The end of the range.
               * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
               * @example
               *
               * _.inRange(3, 2, 4);
               * // => true
               *
               * _.inRange(4, 8);
               * // => true
               *
               * _.inRange(4, 2);
               * // => false
               *
               * _.inRange(2, 2);
               * // => false
               *
               * _.inRange(1.2, 2);
               * // => true
               *
               * _.inRange(5.2, 4);
               * // => false
               */
              function inRange(value, start, end) {
                start = +start || 0;
                if (end === undefined) {
                  end = start;
                  start = 0;
                } else {
                  end = +end || 0;
                }
                return value >= nativeMin(start, end) && value < nativeMax(start, end);
              }
              /**
               * Produces a random number between `min` and `max` (inclusive). If only one
               * argument is provided a number between `0` and the given number is returned.
               * If `floating` is `true`, or either `min` or `max` are floats, a floating-point
               * number is returned instead of an integer.
               *
               * @static
               * @memberOf _
               * @category Number
               * @param {number} [min=0] The minimum possible value.
               * @param {number} [max=1] The maximum possible value.
               * @param {boolean} [floating] Specify returning a floating-point number.
               * @returns {number} Returns the random number.
               * @example
               *
               * _.random(0, 5);
               * // => an integer between 0 and 5
               *
               * _.random(5);
               * // => also an integer between 0 and 5
               *
               * _.random(5, true);
               * // => a floating-point number between 0 and 5
               *
               * _.random(1.2, 5.2);
               * // => a floating-point number between 1.2 and 5.2
               */
              function random(min, max, floating) {
                if (floating && isIterateeCall(min, max, floating)) {
                  max = floating = undefined;
                }
                var noMin = min == null,
                  noMax = max == null;
                if (floating == null) {
                  if (noMax && typeof min == 'boolean') {
                    floating = min;
                    min = 1;
                  } else if (typeof max == 'boolean') {
                    floating = max;
                    noMax = true;
                  }
                }
                if (noMin && noMax) {
                  max = 1;
                  noMax = false;
                }
                min = +min || 0;
                if (noMax) {
                  max = min;
                  min = 0;
                } else {
                  max = +max || 0;
                }
                if (floating || min % 1 || max % 1) {
                  var rand = nativeRandom();
                  return nativeMin(min + rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1))), max);
                }
                return baseRandom(min, max);
              } /*------------------------------------------------------------------------*/
              /**
               * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to convert.
               * @returns {string} Returns the camel cased string.
               * @example
               *
               * _.camelCase('Foo Bar');
               * // => 'fooBar'
               *
               * _.camelCase('--foo-bar');
               * // => 'fooBar'
               *
               * _.camelCase('__foo_bar__');
               * // => 'fooBar'
               */
              var camelCase = createCompounder(function (result, word, index) {
                word = word.toLowerCase();
                return result + (index ? word.charAt(0).toUpperCase() + word.slice(1) : word);
              });
              /**
               * Capitalizes the first character of `string`.
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to capitalize.
               * @returns {string} Returns the capitalized string.
               * @example
               *
               * _.capitalize('fred');
               * // => 'Fred'
               */
              function capitalize(string) {
                string = baseToString(string);
                return string && string.charAt(0).toUpperCase() + string.slice(1);
              }
              /**
               * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
               * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to deburr.
               * @returns {string} Returns the deburred string.
               * @example
               *
               * _.deburr('déjà vu');
               * // => 'deja vu'
               */
              function deburr(string) {
                string = baseToString(string);
                return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
              }
              /**
               * Checks if `string` ends with the given target string.
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to search.
               * @param {string} [target] The string to search for.
               * @param {number} [position=string.length] The position to search from.
               * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
               * @example
               *
               * _.endsWith('abc', 'c');
               * // => true
               *
               * _.endsWith('abc', 'b');
               * // => false
               *
               * _.endsWith('abc', 'b', 2);
               * // => true
               */
              function endsWith(string, target, position) {
                string = baseToString(string);
                target = target + '';
                var length = string.length;
                position = position === undefined ? length : nativeMin(position < 0 ? 0 : +position || 0, length);
                position -= target.length;
                return position >= 0 && string.indexOf(target, position) == position;
              }
              /**
               * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
               * their corresponding HTML entities.
               *
               * **Note:** No other characters are escaped. To escape additional characters
               * use a third-party library like [_he_](https://mths.be/he).
               *
               * Though the ">" character is escaped for symmetry, characters like
               * ">" and "/" don't need escaping in HTML and have no special meaning
               * unless they're part of a tag or unquoted attribute value.
               * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
               * (under "semi-related fun fact") for more details.
               *
               * Backticks are escaped because in Internet Explorer < 9, they can break out
               * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
               * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
               * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
               * for more details.
               *
               * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
               * to reduce XSS vectors.
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to escape.
               * @returns {string} Returns the escaped string.
               * @example
               *
               * _.escape('fred, barney, & pebbles');
               * // => 'fred, barney, &amp; pebbles'
               */
              function escape(string) { // Reset `lastIndex` because in IE < 9 `String#replace` does not.
                string = baseToString(string);
                return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
              }
              /**
               * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
               * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to escape.
               * @returns {string} Returns the escaped string.
               * @example
               *
               * _.escapeRegExp('[lodash](https://lodash.com/)');
               * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
               */
              function escapeRegExp(string) {
                string = baseToString(string);
                return string && reHasRegExpChars.test(string) ? string.replace(reRegExpChars, escapeRegExpChar) : string || '(?:)';
              }
              /**
               * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to convert.
               * @returns {string} Returns the kebab cased string.
               * @example
               *
               * _.kebabCase('Foo Bar');
               * // => 'foo-bar'
               *
               * _.kebabCase('fooBar');
               * // => 'foo-bar'
               *
               * _.kebabCase('__foo_bar__');
               * // => 'foo-bar'
               */
              var kebabCase = createCompounder(function (result, word, index) {
                return result + (index ? '-' : '') + word.toLowerCase();
              });
              /**
               * Pads `string` on the left and right sides if it's shorter than `length`.
               * Padding characters are truncated if they can't be evenly divided by `length`.
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to pad.
               * @param {number} [length=0] The padding length.
               * @param {string} [chars=' '] The string used as padding.
               * @returns {string} Returns the padded string.
               * @example
               *
               * _.pad('abc', 8);
               * // => '  abc   '
               *
               * _.pad('abc', 8, '_-');
               * // => '_-abc_-_'
               *
               * _.pad('abc', 3);
               * // => 'abc'
               */
              function pad(string, length, chars) {
                string = baseToString(string);
                length = +length;
                var strLength = string.length;
                if (strLength >= length || !nativeIsFinite(length)) {
                  return string;
                }
                var mid = (length - strLength) / 2,
                  leftLength = nativeFloor(mid),
                  rightLength = nativeCeil(mid);
                chars = createPadding('', rightLength, chars);
                return chars.slice(0, leftLength) + string + chars;
              }
              /**
               * Pads `string` on the left side if it's shorter than `length`. Padding
               * characters are truncated if they exceed `length`.
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to pad.
               * @param {number} [length=0] The padding length.
               * @param {string} [chars=' '] The string used as padding.
               * @returns {string} Returns the padded string.
               * @example
               *
               * _.padLeft('abc', 6);
               * // => '   abc'
               *
               * _.padLeft('abc', 6, '_-');
               * // => '_-_abc'
               *
               * _.padLeft('abc', 3);
               * // => 'abc'
               */
              var padLeft = createPadDir();
              /**
               * Pads `string` on the right side if it's shorter than `length`. Padding
               * characters are truncated if they exceed `length`.
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to pad.
               * @param {number} [length=0] The padding length.
               * @param {string} [chars=' '] The string used as padding.
               * @returns {string} Returns the padded string.
               * @example
               *
               * _.padRight('abc', 6);
               * // => 'abc   '
               *
               * _.padRight('abc', 6, '_-');
               * // => 'abc_-_'
               *
               * _.padRight('abc', 3);
               * // => 'abc'
               */
              var padRight = createPadDir(true);
              /**
               * Converts `string` to an integer of the specified radix. If `radix` is
               * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
               * in which case a `radix` of `16` is used.
               *
               * **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
               * of `parseInt`.
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} string The string to convert.
               * @param {number} [radix] The radix to interpret `value` by.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {number} Returns the converted integer.
               * @example
               *
               * _.parseInt('08');
               * // => 8
               *
               * _.map(['6', '08', '10'], _.parseInt);
               * // => [6, 8, 10]
               */
              function parseInt(string, radix, guard) { // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
                // Chrome fails to trim leading <BOM> whitespace characters.
                // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
                if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
                  radix = 0;
                } else if (radix) {
                  radix = +radix;
                }
                string = trim(string);
                return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
              }
              /**
               * Repeats the given string `n` times.
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to repeat.
               * @param {number} [n=0] The number of times to repeat the string.
               * @returns {string} Returns the repeated string.
               * @example
               *
               * _.repeat('*', 3);
               * // => '***'
               *
               * _.repeat('abc', 2);
               * // => 'abcabc'
               *
               * _.repeat('abc', 0);
               * // => ''
               */
              function repeat(string, n) {
                var result = '';
                string = baseToString(string);
                n = +n;
                if (n < 1 || !string || !nativeIsFinite(n)) {
                  return result;
                } // Leverage the exponentiation by squaring algorithm for a faster repeat.
                // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
                do {
                  if (n % 2) {
                    result += string;
                  }
                  n = nativeFloor(n / 2);
                  string += string;
                } while (n);
                return result;
              }
              /**
               * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to convert.
               * @returns {string} Returns the snake cased string.
               * @example
               *
               * _.snakeCase('Foo Bar');
               * // => 'foo_bar'
               *
               * _.snakeCase('fooBar');
               * // => 'foo_bar'
               *
               * _.snakeCase('--foo-bar');
               * // => 'foo_bar'
               */
              var snakeCase = createCompounder(function (result, word, index) {
                return result + (index ? '_' : '') + word.toLowerCase();
              });
              /**
               * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to convert.
               * @returns {string} Returns the start cased string.
               * @example
               *
               * _.startCase('--foo-bar');
               * // => 'Foo Bar'
               *
               * _.startCase('fooBar');
               * // => 'Foo Bar'
               *
               * _.startCase('__foo_bar__');
               * // => 'Foo Bar'
               */
              var startCase = createCompounder(function (result, word, index) {
                return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
              });
              /**
               * Checks if `string` starts with the given target string.
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to search.
               * @param {string} [target] The string to search for.
               * @param {number} [position=0] The position to search from.
               * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
               * @example
               *
               * _.startsWith('abc', 'a');
               * // => true
               *
               * _.startsWith('abc', 'b');
               * // => false
               *
               * _.startsWith('abc', 'b', 1);
               * // => true
               */
              function startsWith(string, target, position) {
                string = baseToString(string);
                position = position == null ? 0 : nativeMin(position < 0 ? 0 : +position || 0, string.length);
                return string.lastIndexOf(target, position) == position;
              }
              /**
               * Creates a compiled template function that can interpolate data properties
               * in "interpolate" delimiters, HTML-escape interpolated data properties in
               * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
               * properties may be accessed as free variables in the template. If a setting
               * object is provided it takes precedence over `_.templateSettings` values.
               *
               * **Note:** In the development build `_.template` utilizes
               * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
               * for easier debugging.
               *
               * For more information on precompiling templates see
               * [lodash's custom builds documentation](https://lodash.com/custom-builds).
               *
               * For more information on Chrome extension sandboxes see
               * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The template string.
               * @param {Object} [options] The options object.
               * @param {RegExp} [options.escape] The HTML "escape" delimiter.
               * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
               * @param {Object} [options.imports] An object to import into the template as free variables.
               * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
               * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
               * @param {string} [options.variable] The data object variable name.
               * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
               * @returns {Function} Returns the compiled template function.
               * @example
               *
               * // using the "interpolate" delimiter to create a compiled template
               * var compiled = _.template('hello <%= user %>!');
               * compiled({ 'user': 'fred' });
               * // => 'hello fred!'
               *
               * // using the HTML "escape" delimiter to escape data property values
               * var compiled = _.template('<b><%- value %></b>');
               * compiled({ 'value': '<script>' });
               * // => '<b>&lt;script&gt;</b>'
               *
               * // using the "evaluate" delimiter to execute JavaScript and generate HTML
               * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
               * compiled({ 'users': ['fred', 'barney'] });
               * // => '<li>fred</li><li>barney</li>'
               *
               * // using the internal `print` function in "evaluate" delimiters
               * var compiled = _.template('<% print("hello " + user); %>!');
               * compiled({ 'user': 'barney' });
               * // => 'hello barney!'
               *
               * // using the ES delimiter as an alternative to the default "interpolate" delimiter
               * var compiled = _.template('hello ${ user }!');
               * compiled({ 'user': 'pebbles' });
               * // => 'hello pebbles!'
               *
               * // using custom template delimiters
               * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
               * var compiled = _.template('hello {{ user }}!');
               * compiled({ 'user': 'mustache' });
               * // => 'hello mustache!'
               *
               * // using backslashes to treat delimiters as plain text
               * var compiled = _.template('<%= "\\<%- value %\\>" %>');
               * compiled({ 'value': 'ignored' });
               * // => '<%- value %>'
               *
               * // using the `imports` option to import `jQuery` as `jq`
               * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
               * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
               * compiled({ 'users': ['fred', 'barney'] });
               * // => '<li>fred</li><li>barney</li>'
               *
               * // using the `sourceURL` option to specify a custom sourceURL for the template
               * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
               * compiled(data);
               * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
               *
               * // using the `variable` option to ensure a with-statement isn't used in the compiled template
               * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
               * compiled.source;
               * // => function(data) {
               * //   var __t, __p = '';
               * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
               * //   return __p;
               * // }
               *
               * // using the `source` property to inline compiled templates for meaningful
               * // line numbers in error messages and a stack trace
               * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
               *   var JST = {\
               *     "main": ' + _.template(mainText).source + '\
               *   };\
               * ');
               */
              function template(string, options, otherOptions) { // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
                // and Laura Doktorova's doT.js (https://github.com/olado/doT).
                var settings = lodash.templateSettings;
                if (otherOptions && isIterateeCall(string, options, otherOptions)) {
                  options = otherOptions = undefined;
                }
                string = baseToString(string);
                options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);
                var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
                  importsKeys = keys(imports),
                  importsValues = baseValues(imports, importsKeys);
                var isEscaping, isEvaluating, index = 0,
                  interpolate = options.interpolate || reNoMatch,
                  source = "__p += '"; // Compile the regexp to match each delimiter.
                var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g'); // Use a sourceURL for easier debugging.
                var sourceURL = '//# sourceURL=' + ('sourceURL' in options ? options.sourceURL : 'lodash.templateSources[' + ++templateCounter + ']') + '\n';
                string.replace(reDelimiters, function (match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                  interpolateValue || (interpolateValue = esTemplateValue); // Escape characters that can't be included in string literals.
                  source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar); // Replace delimiters with snippets.
                  if (escapeValue) {
                    isEscaping = true;
                    source += "' +\n__e(" + escapeValue + ") +\n'";
                  }
                  if (evaluateValue) {
                    isEvaluating = true;
                    source += "';\n" + evaluateValue + ";\n__p += '";
                  }
                  if (interpolateValue) {
                    source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
                  }
                  index = offset + match.length; // The JS engine embedded in Adobe products requires returning the `match`
                  // string in order to produce the correct `offset` value.
                  return match;
                });
                source += "';\n"; // If `variable` is not specified wrap a with-statement around the generated
                // code to add the data object to the top of the scope chain.
                var variable = options.variable;
                if (!variable) {
                  source = 'with (obj) {\n' + source + '\n}\n';
                } // Cleanup code by stripping empty strings.
                source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;'); // Frame code as the function body.
                source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
                var result = attempt(function () {
                  return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
                }); // Provide the compiled function's source by its `toString` method or
                // the `source` property as a convenience for inlining compiled templates.
                result.source = source;
                if (isError(result)) {
                  throw result;
                }
                return result;
              }
              /**
               * Removes leading and trailing whitespace or specified characters from `string`.
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to trim.
               * @param {string} [chars=whitespace] The characters to trim.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {string} Returns the trimmed string.
               * @example
               *
               * _.trim('  abc  ');
               * // => 'abc'
               *
               * _.trim('-_-abc-_-', '_-');
               * // => 'abc'
               *
               * _.map(['  foo  ', '  bar  '], _.trim);
               * // => ['foo', 'bar']
               */
              function trim(string, chars, guard) {
                var value = string;
                string = baseToString(string);
                if (!string) {
                  return string;
                }
                if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
                  return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
                }
                chars = chars + '';
                return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
              }
              /**
               * Removes leading whitespace or specified characters from `string`.
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to trim.
               * @param {string} [chars=whitespace] The characters to trim.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {string} Returns the trimmed string.
               * @example
               *
               * _.trimLeft('  abc  ');
               * // => 'abc  '
               *
               * _.trimLeft('-_-abc-_-', '_-');
               * // => 'abc-_-'
               */
              function trimLeft(string, chars, guard) {
                var value = string;
                string = baseToString(string);
                if (!string) {
                  return string;
                }
                if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
                  return string.slice(trimmedLeftIndex(string));
                }
                return string.slice(charsLeftIndex(string, chars + ''));
              }
              /**
               * Removes trailing whitespace or specified characters from `string`.
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to trim.
               * @param {string} [chars=whitespace] The characters to trim.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {string} Returns the trimmed string.
               * @example
               *
               * _.trimRight('  abc  ');
               * // => '  abc'
               *
               * _.trimRight('-_-abc-_-', '_-');
               * // => '-_-abc'
               */
              function trimRight(string, chars, guard) {
                var value = string;
                string = baseToString(string);
                if (!string) {
                  return string;
                }
                if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
                  return string.slice(0, trimmedRightIndex(string) + 1);
                }
                return string.slice(0, charsRightIndex(string, chars + '') + 1);
              }
              /**
               * Truncates `string` if it's longer than the given maximum string length.
               * The last characters of the truncated string are replaced with the omission
               * string which defaults to "...".
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to truncate.
               * @param {Object|number} [options] The options object or maximum string length.
               * @param {number} [options.length=30] The maximum string length.
               * @param {string} [options.omission='...'] The string to indicate text is omitted.
               * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {string} Returns the truncated string.
               * @example
               *
               * _.trunc('hi-diddly-ho there, neighborino');
               * // => 'hi-diddly-ho there, neighbo...'
               *
               * _.trunc('hi-diddly-ho there, neighborino', 24);
               * // => 'hi-diddly-ho there, n...'
               *
               * _.trunc('hi-diddly-ho there, neighborino', {
               *   'length': 24,
               *   'separator': ' '
               * });
               * // => 'hi-diddly-ho there,...'
               *
               * _.trunc('hi-diddly-ho there, neighborino', {
               *   'length': 24,
               *   'separator': /,? +/
               * });
               * // => 'hi-diddly-ho there...'
               *
               * _.trunc('hi-diddly-ho there, neighborino', {
               *   'omission': ' [...]'
               * });
               * // => 'hi-diddly-ho there, neig [...]'
               */
              function trunc(string, options, guard) {
                if (guard && isIterateeCall(string, options, guard)) {
                  options = undefined;
                }
                var length = DEFAULT_TRUNC_LENGTH,
                  omission = DEFAULT_TRUNC_OMISSION;
                if (options != null) {
                  if (isObject(options)) {
                    var separator = 'separator' in options ? options.separator : separator;
                    length = 'length' in options ? +options.length || 0 : length;
                    omission = 'omission' in options ? baseToString(options.omission) : omission;
                  } else {
                    length = +options || 0;
                  }
                }
                string = baseToString(string);
                if (length >= string.length) {
                  return string;
                }
                var end = length - omission.length;
                if (end < 1) {
                  return omission;
                }
                var result = string.slice(0, end);
                if (separator == null) {
                  return result + omission;
                }
                if (isRegExp(separator)) {
                  if (string.slice(end).search(separator)) {
                    var match, newEnd, substring = string.slice(0, end);
                    if (!separator.global) {
                      separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
                    }
                    separator.lastIndex = 0;
                    while (match = separator.exec(substring)) {
                      newEnd = match.index;
                    }
                    result = result.slice(0, newEnd == null ? end : newEnd);
                  }
                } else if (string.indexOf(separator, end) != end) {
                  var index = result.lastIndexOf(separator);
                  if (index > -1) {
                    result = result.slice(0, index);
                  }
                }
                return result + omission;
              }
              /**
               * The inverse of `_.escape`; this method converts the HTML entities
               * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
               * corresponding characters.
               *
               * **Note:** No other HTML entities are unescaped. To unescape additional HTML
               * entities use a third-party library like [_he_](https://mths.be/he).
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to unescape.
               * @returns {string} Returns the unescaped string.
               * @example
               *
               * _.unescape('fred, barney, &amp; pebbles');
               * // => 'fred, barney, & pebbles'
               */
              function unescape(string) {
                string = baseToString(string);
                return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
              }
              /**
               * Splits `string` into an array of its words.
               *
               * @static
               * @memberOf _
               * @category String
               * @param {string} [string=''] The string to inspect.
               * @param {RegExp|string} [pattern] The pattern to match words.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {Array} Returns the words of `string`.
               * @example
               *
               * _.words('fred, barney, & pebbles');
               * // => ['fred', 'barney', 'pebbles']
               *
               * _.words('fred, barney, & pebbles', /[^, ]+/g);
               * // => ['fred', 'barney', '&', 'pebbles']
               */
              function words(string, pattern, guard) {
                if (guard && isIterateeCall(string, pattern, guard)) {
                  pattern = undefined;
                }
                string = baseToString(string);
                return string.match(pattern || reWords) || [];
              } /*------------------------------------------------------------------------*/
              /**
               * Attempts to invoke `func`, returning either the result or the caught error
               * object. Any additional arguments are provided to `func` when it is invoked.
               *
               * @static
               * @memberOf _
               * @category Utility
               * @param {Function} func The function to attempt.
               * @returns {*} Returns the `func` result or error object.
               * @example
               *
               * // avoid throwing errors for invalid selectors
               * var elements = _.attempt(function(selector) {
               *   return document.querySelectorAll(selector);
               * }, '>_>');
               *
               * if (_.isError(elements)) {
               *   elements = [];
               * }
               */
              var attempt = restParam(function (func, args) {
                try {
                  return func.apply(undefined, args);
                } catch (e) {
                  return isError(e) ? e : new Error(e);
                }
              });
              /**
               * Creates a function that invokes `func` with the `this` binding of `thisArg`
               * and arguments of the created function. If `func` is a property name the
               * created callback returns the property value for a given element. If `func`
               * is an object the created callback returns `true` for elements that contain
               * the equivalent object properties, otherwise it returns `false`.
               *
               * @static
               * @memberOf _
               * @alias iteratee
               * @category Utility
               * @param {*} [func=_.identity] The value to convert to a callback.
               * @param {*} [thisArg] The `this` binding of `func`.
               * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
               * @returns {Function} Returns the callback.
               * @example
               *
               * var users = [
               *   { 'user': 'barney', 'age': 36 },
               *   { 'user': 'fred',   'age': 40 }
               * ];
               *
               * // wrap to create custom callback shorthands
               * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
               *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
               *   if (!match) {
               *     return callback(func, thisArg);
               *   }
               *   return function(object) {
               *     return match[2] == 'gt'
               *       ? object[match[1]] > match[3]
               *       : object[match[1]] < match[3];
               *   };
               * });
               *
               * _.filter(users, 'age__gt36');
               * // => [{ 'user': 'fred', 'age': 40 }]
               */
              function callback(func, thisArg, guard) {
                if (guard && isIterateeCall(func, thisArg, guard)) {
                  thisArg = undefined;
                }
                return isObjectLike(func) ? matches(func) : baseCallback(func, thisArg);
              }
              /**
               * Creates a function that returns `value`.
               *
               * @static
               * @memberOf _
               * @category Utility
               * @param {*} value The value to return from the new function.
               * @returns {Function} Returns the new function.
               * @example
               *
               * var object = { 'user': 'fred' };
               * var getter = _.constant(object);
               *
               * getter() === object;
               * // => true
               */
              function constant(value) {
                return function () {
                  return value;
                };
              }
              /**
               * This method returns the first argument provided to it.
               *
               * @static
               * @memberOf _
               * @category Utility
               * @param {*} value Any value.
               * @returns {*} Returns `value`.
               * @example
               *
               * var object = { 'user': 'fred' };
               *
               * _.identity(object) === object;
               * // => true
               */
              function identity(value) {
                return value;
              }
              /**
               * Creates a function that performs a deep comparison between a given object
               * and `source`, returning `true` if the given object has equivalent property
               * values, else `false`.
               *
               * **Note:** This method supports comparing arrays, booleans, `Date` objects,
               * numbers, `Object` objects, regexes, and strings. Objects are compared by
               * their own, not inherited, enumerable properties. For comparing a single
               * own or inherited property value see `_.matchesProperty`.
               *
               * @static
               * @memberOf _
               * @category Utility
               * @param {Object} source The object of property values to match.
               * @returns {Function} Returns the new function.
               * @example
               *
               * var users = [
               *   { 'user': 'barney', 'age': 36, 'active': true },
               *   { 'user': 'fred',   'age': 40, 'active': false }
               * ];
               *
               * _.filter(users, _.matches({ 'age': 40, 'active': false }));
               * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
               */
              function matches(source) {
                return baseMatches(baseClone(source, true));
              }
              /**
               * Creates a function that compares the property value of `path` on a given
               * object to `value`.
               *
               * **Note:** This method supports comparing arrays, booleans, `Date` objects,
               * numbers, `Object` objects, regexes, and strings. Objects are compared by
               * their own, not inherited, enumerable properties.
               *
               * @static
               * @memberOf _
               * @category Utility
               * @param {Array|string} path The path of the property to get.
               * @param {*} srcValue The value to match.
               * @returns {Function} Returns the new function.
               * @example
               *
               * var users = [
               *   { 'user': 'barney' },
               *   { 'user': 'fred' }
               * ];
               *
               * _.find(users, _.matchesProperty('user', 'fred'));
               * // => { 'user': 'fred' }
               */
              function matchesProperty(path, srcValue) {
                return baseMatchesProperty(path, baseClone(srcValue, true));
              }
              /**
               * Creates a function that invokes the method at `path` on a given object.
               * Any additional arguments are provided to the invoked method.
               *
               * @static
               * @memberOf _
               * @category Utility
               * @param {Array|string} path The path of the method to invoke.
               * @param {...*} [args] The arguments to invoke the method with.
               * @returns {Function} Returns the new function.
               * @example
               *
               * var objects = [
               *   { 'a': { 'b': { 'c': _.constant(2) } } },
               *   { 'a': { 'b': { 'c': _.constant(1) } } }
               * ];
               *
               * _.map(objects, _.method('a.b.c'));
               * // => [2, 1]
               *
               * _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
               * // => [1, 2]
               */
              var method = restParam(function (path, args) {
                return function (object) {
                  return invokePath(object, path, args);
                };
              });
              /**
               * The opposite of `_.method`; this method creates a function that invokes
               * the method at a given path on `object`. Any additional arguments are
               * provided to the invoked method.
               *
               * @static
               * @memberOf _
               * @category Utility
               * @param {Object} object The object to query.
               * @param {...*} [args] The arguments to invoke the method with.
               * @returns {Function} Returns the new function.
               * @example
               *
               * var array = _.times(3, _.constant),
               *     object = { 'a': array, 'b': array, 'c': array };
               *
               * _.map(['a[2]', 'c[0]'], _.methodOf(object));
               * // => [2, 0]
               *
               * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
               * // => [2, 0]
               */
              var methodOf = restParam(function (object, args) {
                return function (path) {
                  return invokePath(object, path, args);
                };
              });
              /**
               * Adds all own enumerable function properties of a source object to the
               * destination object. If `object` is a function then methods are added to
               * its prototype as well.
               *
               * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
               * avoid conflicts caused by modifying the original.
               *
               * @static
               * @memberOf _
               * @category Utility
               * @param {Function|Object} [object=lodash] The destination object.
               * @param {Object} source The object of functions to add.
               * @param {Object} [options] The options object.
               * @param {boolean} [options.chain=true] Specify whether the functions added
               *  are chainable.
               * @returns {Function|Object} Returns `object`.
               * @example
               *
               * function vowels(string) {
               *   return _.filter(string, function(v) {
               *     return /[aeiou]/i.test(v);
               *   });
               * }
               *
               * _.mixin({ 'vowels': vowels });
               * _.vowels('fred');
               * // => ['e']
               *
               * _('fred').vowels().value();
               * // => ['e']
               *
               * _.mixin({ 'vowels': vowels }, { 'chain': false });
               * _('fred').vowels();
               * // => ['e']
               */
              function mixin(object, source, options) {
                if (options == null) {
                  var isObj = isObject(source),
                    props = isObj ? keys(source) : undefined,
                    methodNames = props && props.length ? baseFunctions(source, props) : undefined;
                  if (!(methodNames ? methodNames.length : isObj)) {
                    methodNames = false;
                    options = source;
                    source = object;
                    object = this;
                  }
                }
                if (!methodNames) {
                  methodNames = baseFunctions(source, keys(source));
                }
                var chain = true,
                  index = -1,
                  isFunc = isFunction(object),
                  length = methodNames.length;
                if (options === false) {
                  chain = false;
                } else if (isObject(options) && 'chain' in options) {
                  chain = options.chain;
                }
                while (++index < length) {
                  var methodName = methodNames[index],
                    func = source[methodName];
                  object[methodName] = func;
                  if (isFunc) {
                    object.prototype[methodName] = (function (func) {
                      return function () {
                        var chainAll = this.__chain__;
                        if (chain || chainAll) {
                          var result = object(this.__wrapped__),
                            actions = result.__actions__ = arrayCopy(this.__actions__);
                          actions.push({
                            'func': func,
                            'args': arguments,
                            'thisArg': object
                          });
                          result.__chain__ = chainAll;
                          return result;
                        }
                        return func.apply(object, arrayPush([this.value()], arguments));
                      };
                    })(func);
                  }
                }
                return object;
              }
              /**
               * Reverts the `_` variable to its previous value and returns a reference to
               * the `lodash` function.
               *
               * @static
               * @memberOf _
               * @category Utility
               * @returns {Function} Returns the `lodash` function.
               * @example
               *
               * var lodash = _.noConflict();
               */
              function noConflict() {
                root._ = oldDash;
                return this;
              }
              /**
               * A no-operation function that returns `undefined` regardless of the
               * arguments it receives.
               *
               * @static
               * @memberOf _
               * @category Utility
               * @example
               *
               * var object = { 'user': 'fred' };
               *
               * _.noop(object) === undefined;
               * // => true
               */
              function noop() {} // No operation performed.
              /**
               * Creates a function that returns the property value at `path` on a
               * given object.
               *
               * @static
               * @memberOf _
               * @category Utility
               * @param {Array|string} path The path of the property to get.
               * @returns {Function} Returns the new function.
               * @example
               *
               * var objects = [
               *   { 'a': { 'b': { 'c': 2 } } },
               *   { 'a': { 'b': { 'c': 1 } } }
               * ];
               *
               * _.map(objects, _.property('a.b.c'));
               * // => [2, 1]
               *
               * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
               * // => [1, 2]
               */
              function property(path) {
                return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
              }
              /**
               * The opposite of `_.property`; this method creates a function that returns
               * the property value at a given path on `object`.
               *
               * @static
               * @memberOf _
               * @category Utility
               * @param {Object} object The object to query.
               * @returns {Function} Returns the new function.
               * @example
               *
               * var array = [0, 1, 2],
               *     object = { 'a': array, 'b': array, 'c': array };
               *
               * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
               * // => [2, 0]
               *
               * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
               * // => [2, 0]
               */
              function propertyOf(object) {
                return function (path) {
                  return baseGet(object, toPath(path), path + '');
                };
              }
              /**
               * Creates an array of numbers (positive and/or negative) progressing from
               * `start` up to, but not including, `end`. If `end` is not specified it is
               * set to `start` with `start` then set to `0`. If `end` is less than `start`
               * a zero-length range is created unless a negative `step` is specified.
               *
               * @static
               * @memberOf _
               * @category Utility
               * @param {number} [start=0] The start of the range.
               * @param {number} end The end of the range.
               * @param {number} [step=1] The value to increment or decrement by.
               * @returns {Array} Returns the new array of numbers.
               * @example
               *
               * _.range(4);
               * // => [0, 1, 2, 3]
               *
               * _.range(1, 5);
               * // => [1, 2, 3, 4]
               *
               * _.range(0, 20, 5);
               * // => [0, 5, 10, 15]
               *
               * _.range(0, -4, -1);
               * // => [0, -1, -2, -3]
               *
               * _.range(1, 4, 0);
               * // => [1, 1, 1]
               *
               * _.range(0);
               * // => []
               */
              function range(start, end, step) {
                if (step && isIterateeCall(start, end, step)) {
                  end = step = undefined;
                }
                start = +start || 0;
                step = step == null ? 1 : +step || 0;
                if (end == null) {
                  end = start;
                  start = 0;
                } else {
                  end = +end || 0;
                } // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
                // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
                var index = -1,
                  length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
                  result = Array(length);
                while (++index < length) {
                  result[index] = start;
                  start += step;
                }
                return result;
              }
              /**
               * Invokes the iteratee function `n` times, returning an array of the results
               * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
               * one argument; (index).
               *
               * @static
               * @memberOf _
               * @category Utility
               * @param {number} n The number of times to invoke `iteratee`.
               * @param {Function} [iteratee=_.identity] The function invoked per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {Array} Returns the array of results.
               * @example
               *
               * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
               * // => [3, 6, 4]
               *
               * _.times(3, function(n) {
               *   mage.castSpell(n);
               * });
               * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
               *
               * _.times(3, function(n) {
               *   this.cast(n);
               * }, mage);
               * // => also invokes `mage.castSpell(n)` three times
               */
              function times(n, iteratee, thisArg) {
                n = nativeFloor(n); // Exit early to avoid a JSC JIT bug in Safari 8
                // where `Array(0)` is treated as `Array(1)`.
                if (n < 1 || !nativeIsFinite(n)) {
                  return [];
                }
                var index = -1,
                  result = Array(nativeMin(n, MAX_ARRAY_LENGTH));
                iteratee = bindCallback(iteratee, thisArg, 1);
                while (++index < n) {
                  if (index < MAX_ARRAY_LENGTH) {
                    result[index] = iteratee(index);
                  } else {
                    iteratee(index);
                  }
                }
                return result;
              }
              /**
               * Generates a unique ID. If `prefix` is provided the ID is appended to it.
               *
               * @static
               * @memberOf _
               * @category Utility
               * @param {string} [prefix] The value to prefix the ID with.
               * @returns {string} Returns the unique ID.
               * @example
               *
               * _.uniqueId('contact_');
               * // => 'contact_104'
               *
               * _.uniqueId();
               * // => '105'
               */
              function uniqueId(prefix) {
                var id = ++idCounter;
                return baseToString(prefix) + id;
              } /*------------------------------------------------------------------------*/
              /**
               * Adds two numbers.
               *
               * @static
               * @memberOf _
               * @category Math
               * @param {number} augend The first number to add.
               * @param {number} addend The second number to add.
               * @returns {number} Returns the sum.
               * @example
               *
               * _.add(6, 4);
               * // => 10
               */
              function add(augend, addend) {
                return (+augend || 0) + (+addend || 0);
              }
              /**
               * Calculates `n` rounded up to `precision`.
               *
               * @static
               * @memberOf _
               * @category Math
               * @param {number} n The number to round up.
               * @param {number} [precision=0] The precision to round up to.
               * @returns {number} Returns the rounded up number.
               * @example
               *
               * _.ceil(4.006);
               * // => 5
               *
               * _.ceil(6.004, 2);
               * // => 6.01
               *
               * _.ceil(6040, -2);
               * // => 6100
               */
              var ceil = createRound('ceil');
              /**
               * Calculates `n` rounded down to `precision`.
               *
               * @static
               * @memberOf _
               * @category Math
               * @param {number} n The number to round down.
               * @param {number} [precision=0] The precision to round down to.
               * @returns {number} Returns the rounded down number.
               * @example
               *
               * _.floor(4.006);
               * // => 4
               *
               * _.floor(0.046, 2);
               * // => 0.04
               *
               * _.floor(4060, -2);
               * // => 4000
               */
              var floor = createRound('floor');
              /**
               * Gets the maximum value of `collection`. If `collection` is empty or falsey
               * `-Infinity` is returned. If an iteratee function is provided it is invoked
               * for each value in `collection` to generate the criterion by which the value
               * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
               * arguments: (value, index, collection).
               *
               * If a property name is provided for `iteratee` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `iteratee` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Math
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function|Object|string} [iteratee] The function invoked per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {*} Returns the maximum value.
               * @example
               *
               * _.max([4, 2, 8, 6]);
               * // => 8
               *
               * _.max([]);
               * // => -Infinity
               *
               * var users = [
               *   { 'user': 'barney', 'age': 36 },
               *   { 'user': 'fred',   'age': 40 }
               * ];
               *
               * _.max(users, function(chr) {
               *   return chr.age;
               * });
               * // => { 'user': 'fred', 'age': 40 }
               *
               * // using the `_.property` callback shorthand
               * _.max(users, 'age');
               * // => { 'user': 'fred', 'age': 40 }
               */
              var max = createExtremum(gt, NEGATIVE_INFINITY);
              /**
               * Gets the minimum value of `collection`. If `collection` is empty or falsey
               * `Infinity` is returned. If an iteratee function is provided it is invoked
               * for each value in `collection` to generate the criterion by which the value
               * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
               * arguments: (value, index, collection).
               *
               * If a property name is provided for `iteratee` the created `_.property`
               * style callback returns the property value of the given element.
               *
               * If a value is also provided for `thisArg` the created `_.matchesProperty`
               * style callback returns `true` for elements that have a matching property
               * value, else `false`.
               *
               * If an object is provided for `iteratee` the created `_.matches` style
               * callback returns `true` for elements that have the properties of the given
               * object, else `false`.
               *
               * @static
               * @memberOf _
               * @category Math
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function|Object|string} [iteratee] The function invoked per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {*} Returns the minimum value.
               * @example
               *
               * _.min([4, 2, 8, 6]);
               * // => 2
               *
               * _.min([]);
               * // => Infinity
               *
               * var users = [
               *   { 'user': 'barney', 'age': 36 },
               *   { 'user': 'fred',   'age': 40 }
               * ];
               *
               * _.min(users, function(chr) {
               *   return chr.age;
               * });
               * // => { 'user': 'barney', 'age': 36 }
               *
               * // using the `_.property` callback shorthand
               * _.min(users, 'age');
               * // => { 'user': 'barney', 'age': 36 }
               */
              var min = createExtremum(lt, POSITIVE_INFINITY);
              /**
               * Calculates `n` rounded to `precision`.
               *
               * @static
               * @memberOf _
               * @category Math
               * @param {number} n The number to round.
               * @param {number} [precision=0] The precision to round to.
               * @returns {number} Returns the rounded number.
               * @example
               *
               * _.round(4.006);
               * // => 4
               *
               * _.round(4.006, 2);
               * // => 4.01
               *
               * _.round(4060, -2);
               * // => 4100
               */
              var round = createRound('round');
              /**
               * Gets the sum of the values in `collection`.
               *
               * @static
               * @memberOf _
               * @category Math
               * @param {Array|Object|string} collection The collection to iterate over.
               * @param {Function|Object|string} [iteratee] The function invoked per iteration.
               * @param {*} [thisArg] The `this` binding of `iteratee`.
               * @returns {number} Returns the sum.
               * @example
               *
               * _.sum([4, 6]);
               * // => 10
               *
               * _.sum({ 'a': 4, 'b': 6 });
               * // => 10
               *
               * var objects = [
               *   { 'n': 4 },
               *   { 'n': 6 }
               * ];
               *
               * _.sum(objects, function(object) {
               *   return object.n;
               * });
               * // => 10
               *
               * // using the `_.property` callback shorthand
               * _.sum(objects, 'n');
               * // => 10
               */
              function sum(collection, iteratee, thisArg) {
                if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
                  iteratee = undefined;
                }
                iteratee = getCallback(iteratee, thisArg, 3);
                return iteratee.length == 1 ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee) : baseSum(collection, iteratee);
              } /*------------------------------------------------------------------------*/ // Ensure wrappers are instances of `baseLodash`.
              lodash.prototype = baseLodash.prototype;
              LodashWrapper.prototype = baseCreate(baseLodash.prototype);
              LodashWrapper.prototype.constructor = LodashWrapper;
              LazyWrapper.prototype = baseCreate(baseLodash.prototype);
              LazyWrapper.prototype.constructor = LazyWrapper; // Add functions to the `Map` cache.
              MapCache.prototype['delete'] = mapDelete;
              MapCache.prototype.get = mapGet;
              MapCache.prototype.has = mapHas;
              MapCache.prototype.set = mapSet; // Add functions to the `Set` cache.
              SetCache.prototype.push = cachePush; // Assign cache to `_.memoize`.
              memoize.Cache = MapCache; // Add functions that return wrapped values when chaining.
              lodash.after = after;
              lodash.ary = ary;
              lodash.assign = assign;
              lodash.at = at;
              lodash.before = before;
              lodash.bind = bind;
              lodash.bindAll = bindAll;
              lodash.bindKey = bindKey;
              lodash.callback = callback;
              lodash.chain = chain;
              lodash.chunk = chunk;
              lodash.compact = compact;
              lodash.constant = constant;
              lodash.countBy = countBy;
              lodash.create = create;
              lodash.curry = curry;
              lodash.curryRight = curryRight;
              lodash.debounce = debounce;
              lodash.defaults = defaults;
              lodash.defaultsDeep = defaultsDeep;
              lodash.defer = defer;
              lodash.delay = delay;
              lodash.difference = difference;
              lodash.drop = drop;
              lodash.dropRight = dropRight;
              lodash.dropRightWhile = dropRightWhile;
              lodash.dropWhile = dropWhile;
              lodash.fill = fill;
              lodash.filter = filter;
              lodash.flatten = flatten;
              lodash.flattenDeep = flattenDeep;
              lodash.flow = flow;
              lodash.flowRight = flowRight;
              lodash.forEach = forEach;
              lodash.forEachRight = forEachRight;
              lodash.forIn = forIn;
              lodash.forInRight = forInRight;
              lodash.forOwn = forOwn;
              lodash.forOwnRight = forOwnRight;
              lodash.functions = functions;
              lodash.groupBy = groupBy;
              lodash.indexBy = indexBy;
              lodash.initial = initial;
              lodash.intersection = intersection;
              lodash.invert = invert;
              lodash.invoke = invoke;
              lodash.keys = keys;
              lodash.keysIn = keysIn;
              lodash.map = map;
              lodash.mapKeys = mapKeys;
              lodash.mapValues = mapValues;
              lodash.matches = matches;
              lodash.matchesProperty = matchesProperty;
              lodash.memoize = memoize;
              lodash.merge = merge;
              lodash.method = method;
              lodash.methodOf = methodOf;
              lodash.mixin = mixin;
              lodash.modArgs = modArgs;
              lodash.negate = negate;
              lodash.omit = omit;
              lodash.once = once;
              lodash.pairs = pairs;
              lodash.partial = partial;
              lodash.partialRight = partialRight;
              lodash.partition = partition;
              lodash.pick = pick;
              lodash.pluck = pluck;
              lodash.property = property;
              lodash.propertyOf = propertyOf;
              lodash.pull = pull;
              lodash.pullAt = pullAt;
              lodash.range = range;
              lodash.rearg = rearg;
              lodash.reject = reject;
              lodash.remove = remove;
              lodash.rest = rest;
              lodash.restParam = restParam;
              lodash.set = set;
              lodash.shuffle = shuffle;
              lodash.slice = slice;
              lodash.sortBy = sortBy;
              lodash.sortByAll = sortByAll;
              lodash.sortByOrder = sortByOrder;
              lodash.spread = spread;
              lodash.take = take;
              lodash.takeRight = takeRight;
              lodash.takeRightWhile = takeRightWhile;
              lodash.takeWhile = takeWhile;
              lodash.tap = tap;
              lodash.throttle = throttle;
              lodash.thru = thru;
              lodash.times = times;
              lodash.toArray = toArray;
              lodash.toPlainObject = toPlainObject;
              lodash.transform = transform;
              lodash.union = union;
              lodash.uniq = uniq;
              lodash.unzip = unzip;
              lodash.unzipWith = unzipWith;
              lodash.values = values;
              lodash.valuesIn = valuesIn;
              lodash.where = where;
              lodash.without = without;
              lodash.wrap = wrap;
              lodash.xor = xor;
              lodash.zip = zip;
              lodash.zipObject = zipObject;
              lodash.zipWith = zipWith; // Add aliases.
              lodash.backflow = flowRight;
              lodash.collect = map;
              lodash.compose = flowRight;
              lodash.each = forEach;
              lodash.eachRight = forEachRight;
              lodash.extend = assign;
              lodash.iteratee = callback;
              lodash.methods = functions;
              lodash.object = zipObject;
              lodash.select = filter;
              lodash.tail = rest;
              lodash.unique = uniq; // Add functions to `lodash.prototype`.
              mixin(lodash, lodash); /*------------------------------------------------------------------------*/ // Add functions that return unwrapped values when chaining.
              lodash.add = add;
              lodash.attempt = attempt;
              lodash.camelCase = camelCase;
              lodash.capitalize = capitalize;
              lodash.ceil = ceil;
              lodash.clone = clone;
              lodash.cloneDeep = cloneDeep;
              lodash.deburr = deburr;
              lodash.endsWith = endsWith;
              lodash.escape = escape;
              lodash.escapeRegExp = escapeRegExp;
              lodash.every = every;
              lodash.find = find;
              lodash.findIndex = findIndex;
              lodash.findKey = findKey;
              lodash.findLast = findLast;
              lodash.findLastIndex = findLastIndex;
              lodash.findLastKey = findLastKey;
              lodash.findWhere = findWhere;
              lodash.first = first;
              lodash.floor = floor;
              lodash.get = get;
              lodash.gt = gt;
              lodash.gte = gte;
              lodash.has = has;
              lodash.identity = identity;
              lodash.includes = includes;
              lodash.indexOf = indexOf;
              lodash.inRange = inRange;
              lodash.isArguments = isArguments;
              lodash.isArray = isArray;
              lodash.isBoolean = isBoolean;
              lodash.isDate = isDate;
              lodash.isElement = isElement;
              lodash.isEmpty = isEmpty;
              lodash.isEqual = isEqual;
              lodash.isError = isError;
              lodash.isFinite = isFinite;
              lodash.isFunction = isFunction;
              lodash.isMatch = isMatch;
              lodash.isNaN = isNaN;
              lodash.isNative = isNative;
              lodash.isNull = isNull;
              lodash.isNumber = isNumber;
              lodash.isObject = isObject;
              lodash.isPlainObject = isPlainObject;
              lodash.isRegExp = isRegExp;
              lodash.isString = isString;
              lodash.isTypedArray = isTypedArray;
              lodash.isUndefined = isUndefined;
              lodash.kebabCase = kebabCase;
              lodash.last = last;
              lodash.lastIndexOf = lastIndexOf;
              lodash.lt = lt;
              lodash.lte = lte;
              lodash.max = max;
              lodash.min = min;
              lodash.noConflict = noConflict;
              lodash.noop = noop;
              lodash.now = now;
              lodash.pad = pad;
              lodash.padLeft = padLeft;
              lodash.padRight = padRight;
              lodash.parseInt = parseInt;
              lodash.random = random;
              lodash.reduce = reduce;
              lodash.reduceRight = reduceRight;
              lodash.repeat = repeat;
              lodash.result = result;
              lodash.round = round;
              lodash.runInContext = runInContext;
              lodash.size = size;
              lodash.snakeCase = snakeCase;
              lodash.some = some;
              lodash.sortedIndex = sortedIndex;
              lodash.sortedLastIndex = sortedLastIndex;
              lodash.startCase = startCase;
              lodash.startsWith = startsWith;
              lodash.sum = sum;
              lodash.template = template;
              lodash.trim = trim;
              lodash.trimLeft = trimLeft;
              lodash.trimRight = trimRight;
              lodash.trunc = trunc;
              lodash.unescape = unescape;
              lodash.uniqueId = uniqueId;
              lodash.words = words; // Add aliases.
              lodash.all = every;
              lodash.any = some;
              lodash.contains = includes;
              lodash.eq = isEqual;
              lodash.detect = find;
              lodash.foldl = reduce;
              lodash.foldr = reduceRight;
              lodash.head = first;
              lodash.include = includes;
              lodash.inject = reduce;
              mixin(lodash, (function () {
                var source = {};
                baseForOwn(lodash, function (func, methodName) {
                  if (!lodash.prototype[methodName]) {
                    source[methodName] = func;
                  }
                });
                return source;
              })(), false); /*------------------------------------------------------------------------*/ // Add functions capable of returning wrapped and unwrapped values when chaining.
              lodash.sample = sample;
              lodash.prototype.sample = function (n) {
                if (!this.__chain__ && n == null) {
                  return sample(this.value());
                }
                return this.thru(function (value) {
                  return sample(value, n);
                });
              }; /*------------------------------------------------------------------------*/
              /**
               * The semantic version number.
               *
               * @static
               * @memberOf _
               * @type string
               */
              lodash.VERSION = VERSION; // Assign default placeholders.
              arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function (methodName) {
                lodash[methodName].placeholder = lodash;
              }); // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
              arrayEach(['drop', 'take'], function (methodName, index) {
                LazyWrapper.prototype[methodName] = function (n) {
                  var filtered = this.__filtered__;
                  if (filtered && !index) {
                    return new LazyWrapper(this);
                  }
                  n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);
                  var result = this.clone();
                  if (filtered) {
                    result.__takeCount__ = nativeMin(result.__takeCount__, n);
                  } else {
                    result.__views__.push({
                      'size': n,
                      'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
                    });
                  }
                  return result;
                };
                LazyWrapper.prototype[methodName + 'Right'] = function (n) {
                  return this.reverse()[methodName](n).reverse();
                };
              }); // Add `LazyWrapper` methods that accept an `iteratee` value.
              arrayEach(['filter', 'map', 'takeWhile'], function (methodName, index) {
                var type = index + 1,
                  isFilter = type != LAZY_MAP_FLAG;
                LazyWrapper.prototype[methodName] = function (iteratee, thisArg) {
                  var result = this.clone();
                  result.__iteratees__.push({
                    'iteratee': getCallback(iteratee, thisArg, 1),
                    'type': type
                  });
                  result.__filtered__ = result.__filtered__ || isFilter;
                  return result;
                };
              }); // Add `LazyWrapper` methods for `_.first` and `_.last`.
              arrayEach(['first', 'last'], function (methodName, index) {
                var takeName = 'take' + (index ? 'Right' : '');
                LazyWrapper.prototype[methodName] = function () {
                  return this[takeName](1).value()[0];
                };
              }); // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
              arrayEach(['initial', 'rest'], function (methodName, index) {
                var dropName = 'drop' + (index ? '' : 'Right');
                LazyWrapper.prototype[methodName] = function () {
                  return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
                };
              }); // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
              arrayEach(['pluck', 'where'], function (methodName, index) {
                var operationName = index ? 'filter' : 'map',
                  createCallback = index ? baseMatches : property;
                LazyWrapper.prototype[methodName] = function (value) {
                  return this[operationName](createCallback(value));
                };
              });
              LazyWrapper.prototype.compact = function () {
                return this.filter(identity);
              };
              LazyWrapper.prototype.reject = function (predicate, thisArg) {
                predicate = getCallback(predicate, thisArg, 1);
                return this.filter(function (value) {
                  return !predicate(value);
                });
              };
              LazyWrapper.prototype.slice = function (start, end) {
                start = start == null ? 0 : +start || 0;
                var result = this;
                if (result.__filtered__ && (start > 0 || end < 0)) {
                  return new LazyWrapper(result);
                }
                if (start < 0) {
                  result = result.takeRight(-start);
                } else if (start) {
                  result = result.drop(start);
                }
                if (end !== undefined) {
                  end = +end || 0;
                  result = end < 0 ? result.dropRight(-end) : result.take(end - start);
                }
                return result;
              };
              LazyWrapper.prototype.takeRightWhile = function (predicate, thisArg) {
                return this.reverse().takeWhile(predicate, thisArg).reverse();
              };
              LazyWrapper.prototype.toArray = function () {
                return this.take(POSITIVE_INFINITY);
              }; // Add `LazyWrapper` methods to `lodash.prototype`.
              baseForOwn(LazyWrapper.prototype, function (func, methodName) {
                var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
                  retUnwrapped = /^(?:first|last)$/.test(methodName),
                  lodashFunc = lodash[retUnwrapped ? 'take' + (methodName == 'last' ? 'Right' : '') : methodName];
                if (!lodashFunc) {
                  return;
                }
                lodash.prototype[methodName] = function () {
                  var args = retUnwrapped ? [1] : arguments,
                    chainAll = this.__chain__,
                    value = this.__wrapped__,
                    isHybrid = !!this.__actions__.length,
                    isLazy = value instanceof LazyWrapper,
                    iteratee = args[0],
                    useLazy = isLazy || isArray(value);
                  if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) { // Avoid lazy use if the iteratee has a "length" value other than `1`.
                    isLazy = useLazy = false;
                  }
                  var interceptor = function interceptor(value) {
                    return retUnwrapped && chainAll ? lodashFunc(value, 1)[0] : lodashFunc.apply(undefined, arrayPush([value], args));
                  };
                  var action = {
                      'func': thru,
                      'args': [interceptor],
                      'thisArg': undefined
                    },
                    onlyLazy = isLazy && !isHybrid;
                  if (retUnwrapped && !chainAll) {
                    if (onlyLazy) {
                      value = value.clone();
                      value.__actions__.push(action);
                      return func.call(value);
                    }
                    return lodashFunc.call(undefined, this.value())[0];
                  }
                  if (!retUnwrapped && useLazy) {
                    value = onlyLazy ? value : new LazyWrapper(this);
                    var result = func.apply(value, args);
                    result.__actions__.push(action);
                    return new LodashWrapper(result, chainAll);
                  }
                  return this.thru(interceptor);
                };
              }); // Add `Array` and `String` methods to `lodash.prototype`.
              arrayEach(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function (methodName) {
                var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
                  chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
                  retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);
                lodash.prototype[methodName] = function () {
                  var args = arguments;
                  if (retUnwrapped && !this.__chain__) {
                    return func.apply(this.value(), args);
                  }
                  return this[chainName](function (value) {
                    return func.apply(value, args);
                  });
                };
              }); // Map minified function names to their real names.
              baseForOwn(LazyWrapper.prototype, function (func, methodName) {
                var lodashFunc = lodash[methodName];
                if (lodashFunc) {
                  var key = lodashFunc.name,
                    names = realNames[key] || (realNames[key] = []);
                  names.push({
                    'name': methodName,
                    'func': lodashFunc
                  });
                }
              });
              realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{
                'name': 'wrapper',
                'func': undefined
              }]; // Add functions to the lazy wrapper.
              LazyWrapper.prototype.clone = lazyClone;
              LazyWrapper.prototype.reverse = lazyReverse;
              LazyWrapper.prototype.value = lazyValue; // Add chaining functions to the `lodash` wrapper.
              lodash.prototype.chain = wrapperChain;
              lodash.prototype.commit = wrapperCommit;
              lodash.prototype.concat = wrapperConcat;
              lodash.prototype.plant = wrapperPlant;
              lodash.prototype.reverse = wrapperReverse;
              lodash.prototype.toString = wrapperToString;
              lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue; // Add function aliases to the `lodash` wrapper.
              lodash.prototype.collect = lodash.prototype.map;
              lodash.prototype.head = lodash.prototype.first;
              lodash.prototype.select = lodash.prototype.filter;
              lodash.prototype.tail = lodash.prototype.rest;
              return lodash;
            } /*--------------------------------------------------------------------------*/ // Export lodash.
            var _ = runInContext(); // Some AMD build optimizers like r.js check for condition patterns like the following:
            if (true) { // Expose lodash to the global object when an AMD loader is present to avoid
              // errors in cases where lodash is loaded by a script tag and not intended
              // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
              // more details.
              root._ = _; // Define as an anonymous module so, through path mapping, it can be
              // referenced as the "underscore" module.
              !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return _;
              }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
            else if (freeExports && freeModule) { // Export for Node.js or RingoJS.
              if (moduleExports) {
                (freeModule.exports = _)._ = _;
              } // Export for Rhino with CommonJS support.
              else {
                freeExports._ = _;
              }
            } else { // Export for a browser or Rhino.
              root._ = _;
            }
          }).call(undefined);
          /* WEBPACK VAR INJECTION */
        }.call(exports, __webpack_require__(3)(module), (function () {
          return this;
        }())))

        /***/
      },
/* 3 */
/***/
      function (module, exports) {

        "use strict";

        module.exports = function (module) {
          if (!module.webpackPolyfill) {
            module.deprecate = function () {};
            module.paths = [];
            // module.parent = undefined by default
            module.children = [];
            module.webpackPolyfill = 1;
          }
          return module;
        };

        /***/
      },
/* 4 */
/***/
      function (module, exports) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports['default'] = {
          alarms: {
            methods: ['create', 'get', 'getAll', 'clear', 'clearAll'],
            properties: [],
            events: ['onAlarm']
          },
          bookmarks: {
            methods: ['get', 'getChildren', 'getRecent', 'getTree', 'getSubTree', 'search', 'create', 'move', 'update', 'remove', 'removeTree'],
            properties: [],
            events: ['onCreated', 'onRemoved', 'onChanged', 'onMoved', 'onChildrenReordered', 'onImportBegan', 'onImportEnded']
          },
          browserAction: {
            methods: ['setTitle', 'getTitle', 'setIcon', 'setPopup', 'getPopup', 'setBadgeText', 'getBadgeText', 'setBadgeBackgroundColor', 'getBadgeBackgroundColor', 'enable', 'disable'],
            properties: [],
            events: ['onClicked']
          },
          browsingData: {
            methods: ['settings', 'remove', 'removeAppcache', 'removeCache', 'removeCookies', 'removeDownloads', 'removeFileSystems', 'removeFormData', 'removeHistory', 'removeIndexedDB', 'removeLocalStorage', 'removePluginData', 'removePasswords', 'removeWebSQL'],
            properties: [],
            events: []
          },
          certificateProvider: {
            methods: [],
            properties: [],
            events: ['onCertificatesRequested', 'onSignDigestRequested']
          },
          commands: {
            methods: ['getAll'],
            properties: [],
            events: ['onCommand']
          },
          contentSettings: {
            methods: [],
            properties: ['cookies', 'images', 'javascript', 'location', 'plugins', 'popups', 'notifications', 'fullscreen', 'mouselock', 'unsandboxedPlugins', 'automaticDownloads'],
            events: []
          },
          contextMenus: {
            methods: ['create', 'update', 'remove', 'removeAll'],
            properties: [],
            events: ['onClicked']
          },
          cookies: {
            methods: ['get', 'getAll', 'set', 'remove', 'getAllCookieStores'],
            properties: [],
            events: ['onChanged']
          },
          'debugger': {
            methods: ['attach', 'detach', 'sendCommand', 'getTargets'],
            properties: [],
            events: ['onEvent', 'onDetach']
          },
          declarativeContent: {
            methods: [],
            properties: [],
            events: ['onPageChanged']
          },
          desktopCapture: {
            methods: ['chooseDesktopMedia', 'cancelChooseDesktopMedia'],
            properties: [],
            events: []
          },
          'devtools.inspectedWindow': {
            methods: ['eval', 'reload', 'getResources'],
            properties: ['tabId'],
            events: ['onResourceAdded', 'onResourceContentCommitted']
          },
          'devtools.network': {
            methods: ['getHAR'],
            properties: [],
            events: ['onRequestFinished', 'onNavigated']
          },
          'devtools.panels': {
            methods: ['create', 'setOpenResourceHandler', 'openResource '],
            properties: ['elements', 'sources'],
            events: []
          },
          downloads: {
            methods: ['download', 'search', 'pause', 'resume', 'cancel', 'getFileIcon', 'open', 'show', 'showDefaultFolder', 'erase', 'removeFile', 'acceptDanger', 'drag', 'setShelfEnabled'],
            properties: [],
            events: ['onCreated', 'onErased', 'onChanged', 'onDeterminingFilename']
          },
          extension: {
            methods: ['sendRequest', 'getURL', 'getViews', 'getBackgroundPage', 'getExtensionTabs', 'isAllowedIncognitoAccess', 'isAllowedFileSchemeAccess', 'setUpdateUrlData'],
            properties: ['lastError', 'inIncognitoContext'],
            events: ['onRequest', 'onRequestExternal']
          },
          fontSettings: {
            methods: ['clearFont', 'getFont', 'setFont', 'getFontList', 'clearDefaultFontSize', 'getDefaultFontSize', 'setDefaultFontSize', 'clearDefaultFixedFontSize', 'getDefaultFixedFontSize', 'setDefaultFixedFontSize', 'clearMinimumFontSize', 'getMinimumFontSize', 'setMinimumFontSize'],
            properties: [],
            events: ['onFontChanged', 'onDefaultFontSizeChanged', 'onDefaultFixedFontSizeChanged', 'onMinimumFontSizeChanged']
          },
          gcm: {
            methods: ['register', 'unregister', 'send'],
            properties: ['MAX_MESSAGE_SIZE'],
            events: ['onMessage', 'onMessagesDeleted', 'onSendError']
          },
          history: {
            methods: ['search', 'getVisits', 'addUrl', 'deleteUrl', 'deleteRange', 'deleteAll'],
            properties: [],
            events: ['onVisited', 'onVisitRemoved']
          },
          i18n: {
            methods: ['getAcceptLanguages', 'getMessage', 'getUILanguage', 'detectLanguage'],
            properties: [],
            events: []
          },
          identity: {
            methods: ['getAccounts', 'getAuthToken', 'getProfileUserInfo', 'removeCachedAuthToken', 'launchWebAuthFlow', 'getRedirectURL'],
            properties: [],
            events: ['onSignInChanged']
          },
          idle: {
            methods: ['queryState', 'setDetectionInterval'],
            properties: [],
            events: ['onStateChanged']
          },
          instanceID: {
            methods: ['getID', 'getCreationTime', 'getToken', 'deleteToken', 'deleteID'],
            properties: [],
            events: ['onTokenRefresh']
          },
          management: {
            methods: ['getAll', 'get', 'getSelf', 'getPermissionWarningsById', 'getPermissionWarningsByManifest', 'setEnabled', 'uninstall', 'uninstallSelf', 'launchApp', 'createAppShortcut', 'setLaunchType', 'generateAppForLink'],
            properties: [],
            events: ['onInstalled', 'onUninstalled', 'onEnabled', 'onDisabled']
          },
          notifications: {
            methods: ['create', 'update', 'clear', 'getAll', 'getPermissionLevel'],
            properties: [],
            events: ['onClosed', 'onClicked', 'onButtonClicked', 'onPermissionLevelChanged', 'onShowSettings']
          },
          omnibox: {
            methods: ['setDefaultSuggestion'],
            properties: [],
            events: ['onInputStarted', 'onInputChanged', 'onInputEntered', 'onInputCancelled']
          },
          pageAction: {
            methods: ['show', 'hide', 'setTitle', 'getTitle', 'setIcon', 'setPopup', 'getPopup'],
            properties: [],
            events: ['onClicked']
          },
          pageCapture: {
            methods: ['saveAsMHTML'],
            properties: [],
            events: []
          },
          permissions: {
            methods: ['getAll', 'contains', 'request', 'remove'],
            properties: [],
            events: ['onAdded', 'onRemoved']
          },
          printerProvider: {
            methods: [],
            properties: [],
            events: ['onGetPrintersRequested', 'onGetUsbPrinterInfoRequested', 'onGetCapabilityRequested', 'onPrintRequested']
          },
          'privacy.network.networkPredictionEnabled': {
            methods: ['get', 'set', 'clear'],
            properties: [],
            events: ['onChange']
          },
          'privacy.services.alternateErrorPagesEnabled': {
            methods: ['get', 'set', 'clear'],
            properties: [],
            events: ['onChange']
          },
          'privacy.services.autofillEnabled': {
            methods: ['get', 'set', 'clear'],
            properties: [],
            events: ['onChange']
          },
          'privacy.services.passwordSavingEnabled': {
            methods: ['get', 'set', 'clear'],
            properties: [],
            events: ['onChange']
          },
          'privacy.services.safeBrowsingEnabled': {
            methods: ['get', 'set', 'clear'],
            properties: [],
            events: ['onChange']
          },
          'privacy.services.searchSuggestEnabled': {
            methods: ['get', 'set', 'clear'],
            properties: [],
            events: ['onChange']
          },
          'privacy.services.spellingServiceEnabled': {
            methods: ['get', 'set', 'clear'],
            properties: [],
            events: ['onChange']
          },
          'privacy.services.translationServiceEnabled': {
            methods: ['get', 'set', 'clear'],
            properties: [],
            events: ['onChange']
          },
          'privacy.websites.hyperlinkAuditingEnabled': {
            methods: ['get', 'set', 'clear'],
            properties: [],
            events: ['onChange']
          },
          'privacy.websites.referrersEnabled': {
            methods: ['get', 'set', 'clear'],
            properties: [],
            events: ['onChange']
          },
          'privacy.websites.thirdPartyCookiesAllowed': {
            methods: ['get', 'set', 'clear'],
            properties: [],
            events: ['onChange']
          },
          proxy: {
            methods: [],
            properties: ['settings'],
            events: ['onProxyError']
          },
          runtime: {
            methods: ['getBackgroundPage', 'openOptionsPage', 'getManifest', 'getURL', 'setUninstallURL', 'reload', 'requestUpdateCheck', 'restart', 'connect', 'connectNative', 'sendMessage', 'sendNativeMessage', 'getPlatformInfo', 'getPackageDirectoryEntry'],
            properties: ['lastError', 'id'],
            events: ['onStartup', 'onInstalled', 'onSuspend', 'onSuspendCanceled', 'onUpdateAvailable', 'onBrowserUpdateAvailable', 'onConnect', 'onConnectExternal', 'onMessage', 'onMessageExternal', 'onRestartRequired']
          },
          sessions: {
            methods: ['getRecentlyClosed', 'getDevices', 'restore'],
            properties: ['MAX_SESSION_RESULTS'],
            events: ['onChanged']
          },
          storage: {
            methods: [],
            properties: [],
            events: ['onChanged']
          },
          'storage.local': {
            methods: ['clear', 'get', 'set', 'remove', 'getBytesInUse'],
            properties: [],
            events: []
          },
          'storage.managed': {
            methods: ['clear', 'get', 'set', 'remove', 'getBytesInUse'],
            properties: [],
            events: []
          },
          'storage.sync': {
            methods: ['clear', 'get', 'set', 'remove', 'getBytesInUse'],
            properties: [],
            events: []
          },
          'system.cpu': {
            methods: ['getInfo'],
            properties: [],
            events: []
          },
          'system.display': {
            methods: ['getInfo', 'setDisplayProperties'],
            properties: [],
            events: ['onDisplayChanged']
          },
          'system.memory': {
            methods: ['getInfo'],
            properties: [],
            events: []
          },
          'system.storage': {
            methods: ['getInfo', 'ejectDevice', 'getAvailableCapacity'],
            properties: [],
            events: ['onAttached', 'onDetached']
          },
          tabCapture: {
            methods: ['capture', 'getCapturedTabs'],
            properties: [],
            events: ['onStatusChanged']
          },
          tabs: {
            methods: ['get', 'getCurrent', 'connect', 'sendRequest', 'sendMessage', 'getSelected', 'getAllInWindow', 'create', 'duplicate', 'query', 'highlight', 'update', 'move', 'reload', 'remove', 'detectLanguage', 'captureVisibleTab', 'executeScript', 'insertCSS', 'setZoom', 'getZoom', 'setZoomSettings', 'getZoomSettings'],
            properties: ['TAB_ID_NONE'],
            events: ['onCreated', 'onUpdated', 'onMoved', 'onSelectionChanged', 'onActiveChanged', 'onActivated', 'onHighlightChanged', 'onHighlighted', 'onDetached', 'onAttached', 'onRemoved', 'onReplaced', 'onZoomChange']
          },
          topSites: {
            methods: ['get'],
            properties: [],
            events: []
          },
          tts: {
            methods: ['speak', 'stop', 'pause', 'resume', 'isSpeaking', 'getVoices'],
            properties: [],
            events: []
          },
          ttsEngine: {
            methods: [],
            properties: [],
            events: ['onSpeak', 'onStop', 'onPause', 'onResume']
          },
          webNavigation: {
            methods: ['getFrame', 'getAllFrames'],
            properties: [],
            events: ['onBeforeNavigate', 'onCommitted', 'onDOMContentLoaded', 'onCompleted', 'onErrorOccurred', 'onCreatedNavigationTarget', 'onReferenceFragmentUpdated', 'onTabReplaced', 'onHistoryStateUpdated']
          },
          webRequest: {
            methods: ['handlerBehaviorChanged'],
            properties: ['MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES'],
            events: ['onBeforeRequest', 'onBeforeSendHeaders', 'onSendHeaders', 'onHeadersReceived', 'onAuthRequired', 'onResponseStarted', 'onBeforeRedirect', 'onCompleted', 'onErrorOccurred']
          },
          windows: {
            methods: ['get', 'getCurrent', 'getLastFocused', 'getAll', 'create', 'update', 'remove'],
            properties: ['WINDOW_ID_NONE', 'WINDOW_ID_CURRENT'],
            events: ['onCreated', 'onRemoved', 'onFocusChanged']
          }
        };
        module.exports = exports['default'];

        /***/
      },
/* 5 */
/***/
      function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports['default'] = generateApi;

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            'default': obj
          };
        }

        var _lodash = __webpack_require__(2);

        var _lodash2 = _interopRequireDefault(_lodash);

        var _factoryCache = __webpack_require__(6);

        var _factoryCache2 = _interopRequireDefault(_factoryCache);

        var _factoryProperty = __webpack_require__(11);

        var _factoryProperty2 = _interopRequireDefault(_factoryProperty);

        /**
         * Returns stubbed chrome api
         * @param {Object} config
         * @returns {Object}
         */

        function generateApi(config) {
          return _lodash2['default'].reduce(config, function (result, _ref, namespace) {
            var methods = _ref.methods;
            var properties = _ref.properties;
            var events = _ref.events;

            appendNamespace(result, namespace);
            wrapEvents(result, namespace, events);
            wrapMethods(result, namespace, methods);
            wrapProperties(result, namespace, properties);
            return result;
          }, {});
        }

        /**
         * append namespace to chrome object
         * @param {Object} object
         * @param {String} namespace
         */
        function appendNamespace(object, namespace) {
          _lodash2['default'].set(object, namespace, {});
        }

        /**
         * Append stub methods
         * @param {Object} object
         * @param {String} namespace
         * @param {Array<String>} methods
         */
        function wrapMethods(object, namespace, methods) {
          methods.forEach(function (method) {
            Object.defineProperty(_lodash2['default'].get(object, namespace), method, {
              get: function get() {
                return _factoryCache2['default'].getStub(namespace, method);
              }
            });
          });
        }

        /**
         * Append stub getters/setters
         * @param {Object} object
         * @param {String} namespace
         * @param {Array<String>} properties
         */
        function wrapProperties(object, namespace, properties) {
          _lodash2['default'].forEach(properties, function (property) {
            appendProperty(object, namespace, property);
          });
        }

        /**
         * Append property stub
         * @param {Object} object
         * @param {String} namespace
         * @param {String} property
         */
        function appendProperty(object, namespace, property) {
          _lodash2['default'].set(object, namespace + '.' + property, null);
          _factoryProperty2['default'].cache(object, namespace, property);
        }

        /**
         * Append chrome events
         * @param {Object} object
         * @param {String} namespace
         * @param {Array<String>} events
         */
        function wrapEvents(object, namespace, events) {
          events.forEach(function (event) {
            Object.defineProperty(_lodash2['default'].get(object, namespace), event, {
              get: function get() {
                return _factoryCache2['default'].getEvent(namespace, event);
              }
            });
          });
        }
        module.exports = exports['default'];

        /***/
      },
/* 6 */
/***/
      function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            'default': obj
          };
        }

        var _events = __webpack_require__(7);

        var _events2 = _interopRequireDefault(_events);

        var _stubs = __webpack_require__(10);

        var _stubs2 = _interopRequireDefault(_stubs);

        exports['default'] = {

          stubCache: {},
          eventsCache: {},

          /**
           * Get stub value
           * @param namespace
           * @param method
           * @returns {sinon.stub}
           */
          getStub: function getStub(namespace, method) {
            var key = namespace + '.' + method;
            if (!(key in this.stubCache)) {
              this.stubCache[key] = _stubs2['default'].stub;
            }
            return this.stubCache[key];
          },

          /**
           * Get chrome event
           * @param {String} namespace
           * @param {String} event
           */
          getEvent: function getEvent(namespace, event) {
            var key = namespace + '.' + event;
            if (!(key in this.eventsCache)) {
              this.eventsCache[key] = _events2['default'].get();
            }
            return this.eventsCache[key];
          }
        };
        module.exports = exports['default'];

        /***/
      },
/* 7 */
/***/
      function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            'default': obj
          };
        }

        var _sinon = __webpack_require__(8);

        var _sinon2 = _interopRequireDefault(_sinon);

        var _eventsIndex = __webpack_require__(9);

        var _eventsIndex2 = _interopRequireDefault(_eventsIndex);

        exports['default'] = {

          events: [],
          sandbox: _sinon2['default'].sandbox.create(),

          /**
           * @returns {ChromeEvent}
           */
          get: function get() {
            var event = createEvent(this.sandbox);
            this.events.push(event);
            return event;
          },

          /**
           * Remove all listeners
           */
          reset: function reset() {
            this.sandbox.reset();
            this.events.forEach(function (event) {
              event.removeListeners();
            });
          },

          /**
           * Drop listeners
           */
          flush: function flush() {
            this.reset();
          }
        };

        /**
         * Create event
         * @param {sinon} sandbox
         */
        function createEvent(sandbox) {
          var event = new _eventsIndex2['default']();
          sandbox.spy(event, 'addListener');
          sandbox.spy(event, 'hasListener');
          sandbox.spy(event, 'removeListener');
          sandbox.spy(event, 'removeListeners');
          return event;
        }
        module.exports = exports['default'];

        /***/
      },
/* 8 */
/***/
      function (module, exports) {

        /**
         * Sinon.JS 1.17.2, 2015/10/21
         *
         * @author Christian Johansen (christian@cjohansen.no)
         * @author Contributors: https://github.com/cjohansen/Sinon.JS/blob/master/AUTHORS
         *
         * (The BSD License)
         *
         * Copyright (c) 2010-2014, Christian Johansen, christian@cjohansen.no
         * All rights reserved.
         *
         * Redistribution and use in source and binary forms, with or without modification,
         * are permitted provided that the following conditions are met:
         *
         *     * Redistributions of source code must retain the above copyright notice,
         *       this list of conditions and the following disclaimer.
         *     * Redistributions in binary form must reproduce the above copyright notice,
         *       this list of conditions and the following disclaimer in the documentation
         *       and/or other materials provided with the distribution.
         *     * Neither the name of Christian Johansen nor the names of his contributors
         *       may be used to endorse or promote products derived from this software
         *       without specific prior written permission.
         *
         * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
         * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
         * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
         * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
         * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
         * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
         * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
         * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
         * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
         * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
         */
        'use strict';
        (function (root, factory) {
          'use strict';
          if (typeof define === 'function' && define.amd) {
            define('sinon', [], function () {
              return root.sinon = factory();
            });
          } else if (typeof exports === 'object') {
            module.exports = factory();
          } else {
            root.sinon = factory();
          }
        })(undefined, function () {
          'use strict';
          var samsam, formatio, lolex;
          (function () {
            function define(mod, deps, fn) {
              if (mod == "samsam") {
                samsam = deps();
              } else if (typeof deps === "function" && mod.length === 0) {
                lolex = deps();
              } else if (typeof fn === "function") {
                formatio = fn(samsam);
              }
            }
            define.amd = {};
            (typeof define === "function" && define.amd && function (m) {
                define("samsam", m);
              } || typeof module === "object" && function (m) {
                module.exports = m();
              } || // Node
              function (m) {
                this.samsam = m();
              }) // Browser globals
            (function () {
              var o = Object.prototype;
              var div = typeof document !== "undefined" && document.createElement("div");

              function isNaN(value) { // Unlike global isNaN, this avoids type coercion
                // typeof check avoids IE host object issues, hat tip to
                // lodash
                var val = value; // JsLint thinks value !== value is "weird"
                return typeof value === "number" && value !== val;
              }

              function getClass(value) { // Returns the internal [[Class]] by calling Object.prototype.toString
                // with the provided value as this. Return value is a string, naming the
                // internal class, e.g. "Array"
                return o.toString.call(value).split(/[ \]]/)[1];
              }
              /**
               * @name samsam.isArguments
               * @param Object object
               *
               * Returns ``true`` if ``object`` is an ``arguments`` object,
               * ``false`` otherwise.
               */
              function isArguments(object) {
                if (getClass(object) === 'Arguments') {
                  return true;
                }
                if (typeof object !== "object" || typeof object.length !== "number" || getClass(object) === "Array") {
                  return false;
                }
                if (typeof object.callee == "function") {
                  return true;
                }
                try {
                  object[object.length] = 6;
                  delete object[object.length];
                } catch (e) {
                  return true;
                }
                return false;
              }
              /**
               * @name samsam.isElement
               * @param Object object
               *
               * Returns ``true`` if ``object`` is a DOM element node. Unlike
               * Underscore.js/lodash, this function will return ``false`` if ``object``
               * is an *element-like* object, i.e. a regular object with a ``nodeType``
               * property that holds the value ``1``.
               */
              function isElement(object) {
                if (!object || object.nodeType !== 1 || !div) {
                  return false;
                }
                try {
                  object.appendChild(div);
                  object.removeChild(div);
                } catch (e) {
                  return false;
                }
                return true;
              }
              /**
               * @name samsam.keys
               * @param Object object
               *
               * Return an array of own property names.
               */
              function keys(object) {
                var ks = [],
                  prop;
                for (prop in object) {
                  if (o.hasOwnProperty.call(object, prop)) {
                    ks.push(prop);
                  }
                }
                return ks;
              }
              /**
               * @name samsam.isDate
               * @param Object value
               *
               * Returns true if the object is a ``Date``, or *date-like*. Duck typing
               * of date objects work by checking that the object has a ``getTime``
               * function whose return value equals the return value from the object's
               * ``valueOf``.
               */
              function isDate(value) {
                return typeof value.getTime == "function" && value.getTime() == value.valueOf();
              }
              /**
               * @name samsam.isNegZero
               * @param Object value
               *
               * Returns ``true`` if ``value`` is ``-0``.
               */
              function isNegZero(value) {
                return value === 0 && 1 / value === -Infinity;
              }
              /**
               * @name samsam.equal
               * @param Object obj1
               * @param Object obj2
               *
               * Returns ``true`` if two objects are strictly equal. Compared to
               * ``===`` there are two exceptions:
               *
               *   - NaN is considered equal to NaN
               *   - -0 and +0 are not considered equal
               */
              function identical(obj1, obj2) {
                if (obj1 === obj2 || isNaN(obj1) && isNaN(obj2)) {
                  return obj1 !== 0 || isNegZero(obj1) === isNegZero(obj2);
                }
              }
              /**
               * @name samsam.deepEqual
               * @param Object obj1
               * @param Object obj2
               *
               * Deep equal comparison. Two values are "deep equal" if:
               *
               *   - They are equal, according to samsam.identical
               *   - They are both date objects representing the same time
               *   - They are both arrays containing elements that are all deepEqual
               *   - They are objects with the same set of properties, and each property
               *     in ``obj1`` is deepEqual to the corresponding property in ``obj2``
               *
               * Supports cyclic objects.
               */
              function deepEqualCyclic(obj1, obj2) { // used for cyclic comparison
                // contain already visited objects
                var objects1 = [],
                  objects2 = [], // contain pathes (position in the object structure)
                  // of the already visited objects
                  // indexes same as in objects arrays
                  paths1 = [],
                  paths2 = [], // contains combinations of already compared objects
                  // in the manner: { "$1['ref']$2['ref']": true }
                  compared = {};
                /**
                 * used to check, if the value of a property is an object
                 * (cyclic logic is only needed for objects)
                 * only needed for cyclic logic
                 */
                function isObject(value) {
                  if (typeof value === 'object' && value !== null && !(value instanceof Boolean) && !(value instanceof Date) && !(value instanceof Number) && !(value instanceof RegExp) && !(value instanceof String)) {
                    return true;
                  }
                  return false;
                }
                /**
                 * returns the index of the given object in the
                 * given objects array, -1 if not contained
                 * only needed for cyclic logic
                 */
                function getIndex(objects, obj) {
                  var i;
                  for (i = 0; i < objects.length; i++) {
                    if (objects[i] === obj) {
                      return i;
                    }
                  }
                  return -1;
                } // does the recursion for the deep equal check
                return (function deepEqual(obj1, obj2, path1, path2) {
                  var type1 = typeof obj1;
                  var type2 = typeof obj2; // == null also matches undefined
                  if (obj1 === obj2 || isNaN(obj1) || isNaN(obj2) || obj1 == null || obj2 == null || type1 !== "object" || type2 !== "object") {
                    return identical(obj1, obj2);
                  } // Elements are only equal if identical(expected, actual)
                  if (isElement(obj1) || isElement(obj2)) {
                    return false;
                  }
                  var isDate1 = isDate(obj1),
                    isDate2 = isDate(obj2);
                  if (isDate1 || isDate2) {
                    if (!isDate1 || !isDate2 || obj1.getTime() !== obj2.getTime()) {
                      return false;
                    }
                  }
                  if (obj1 instanceof RegExp && obj2 instanceof RegExp) {
                    if (obj1.toString() !== obj2.toString()) {
                      return false;
                    }
                  }
                  var class1 = getClass(obj1);
                  var class2 = getClass(obj2);
                  var keys1 = keys(obj1);
                  var keys2 = keys(obj2);
                  if (isArguments(obj1) || isArguments(obj2)) {
                    if (obj1.length !== obj2.length) {
                      return false;
                    }
                  } else {
                    if (type1 !== type2 || class1 !== class2 || keys1.length !== keys2.length) {
                      return false;
                    }
                  }
                  var key, i, l, // following vars are used for the cyclic logic
                    value1, value2, isObject1, isObject2, index1, index2, newPath1, newPath2;
                  for (i = 0, l = keys1.length; i < l; i++) {
                    key = keys1[i];
                    if (!o.hasOwnProperty.call(obj2, key)) {
                      return false;
                    } // Start of the cyclic logic
                    value1 = obj1[key];
                    value2 = obj2[key];
                    isObject1 = isObject(value1);
                    isObject2 = isObject(value2); // determine, if the objects were already visited
                    // (it's faster to check for isObject first, than to
                    // get -1 from getIndex for non objects)
                    index1 = isObject1 ? getIndex(objects1, value1) : -1;
                    index2 = isObject2 ? getIndex(objects2, value2) : -1; // determine the new pathes of the objects
                    // - for non cyclic objects the current path will be extended
                    //   by current property name
                    // - for cyclic objects the stored path is taken
                    newPath1 = index1 !== -1 ? paths1[index1] : path1 + '[' + JSON.stringify(key) + ']';
                    newPath2 = index2 !== -1 ? paths2[index2] : path2 + '[' + JSON.stringify(key) + ']'; // stop recursion if current objects are already compared
                    if (compared[newPath1 + newPath2]) {
                      return true;
                    } // remember the current objects and their pathes
                    if (index1 === -1 && isObject1) {
                      objects1.push(value1);
                      paths1.push(newPath1);
                    }
                    if (index2 === -1 && isObject2) {
                      objects2.push(value2);
                      paths2.push(newPath2);
                    } // remember that the current objects are already compared
                    if (isObject1 && isObject2) {
                      compared[newPath1 + newPath2] = true;
                    } // End of cyclic logic
                    // neither value1 nor value2 is a cycle
                    // continue with next level
                    if (!deepEqual(value1, value2, newPath1, newPath2)) {
                      return false;
                    }
                  }
                  return true;
                })(obj1, obj2, '$1', '$2');
              }
              var match;

              function arrayContains(array, subset) {
                if (subset.length === 0) {
                  return true;
                }
                var i, l, j, k;
                for (i = 0, l = array.length; i < l; ++i) {
                  if (match(array[i], subset[0])) {
                    for (j = 0, k = subset.length; j < k; ++j) {
                      if (!match(array[i + j], subset[j])) {
                        return false;
                      }
                    }
                    return true;
                  }
                }
                return false;
              }
              /**
               * @name samsam.match
               * @param Object object
               * @param Object matcher
               *
               * Compare arbitrary value ``object`` with matcher.
               */
              match = function match(object, matcher) {
                if (matcher && typeof matcher.test === "function") {
                  return matcher.test(object);
                }
                if (typeof matcher === "function") {
                  return matcher(object) === true;
                }
                if (typeof matcher === "string") {
                  matcher = matcher.toLowerCase();
                  var notNull = typeof object === "string" || !!object;
                  return notNull && String(object).toLowerCase().indexOf(matcher) >= 0;
                }
                if (typeof matcher === "number") {
                  return matcher === object;
                }
                if (typeof matcher === "boolean") {
                  return matcher === object;
                }
                if (typeof matcher === "undefined") {
                  return typeof object === "undefined";
                }
                if (matcher === null) {
                  return object === null;
                }
                if (getClass(object) === "Array" && getClass(matcher) === "Array") {
                  return arrayContains(object, matcher);
                }
                if (matcher && typeof matcher === "object") {
                  if (matcher === object) {
                    return true;
                  }
                  var prop;
                  for (prop in matcher) {
                    var value = object[prop];
                    if (typeof value === "undefined" && typeof object.getAttribute === "function") {
                      value = object.getAttribute(prop);
                    }
                    if (matcher[prop] === null || typeof matcher[prop] === 'undefined') {
                      if (value !== matcher[prop]) {
                        return false;
                      }
                    } else if (typeof value === "undefined" || !match(value, matcher[prop])) {
                      return false;
                    }
                  }
                  return true;
                }
                throw new Error("Matcher was not a string, a number, a " + "function, a boolean or an object");
              };
              return {
                isArguments: isArguments,
                isElement: isElement,
                isDate: isDate,
                isNegZero: isNegZero,
                identical: identical,
                deepEqual: deepEqualCyclic,
                match: match,
                keys: keys
              };
            });
            (typeof define === "function" && define.amd && function (m) {
              define("formatio", ["samsam"], m);
            } || typeof module === "object" && function (m) {
              module.exports = m(require("samsam"));
            } || function (m) {
              this.formatio = m(this.samsam);
            })(function (samsam) {
              var formatio = {
                excludeConstructors: ["Object", /^.$/],
                quoteStrings: true,
                limitChildrenCount: 0
              };
              var hasOwn = Object.prototype.hasOwnProperty;
              var specialObjects = [];
              if (typeof global !== "undefined") {
                specialObjects.push({
                  object: global,
                  value: "[object global]"
                });
              }
              if (typeof document !== "undefined") {
                specialObjects.push({
                  object: document,
                  value: "[object HTMLDocument]"
                });
              }
              if (typeof window !== "undefined") {
                specialObjects.push({
                  object: window,
                  value: "[object Window]"
                });
              }

              function functionName(func) {
                if (!func) {
                  return "";
                }
                if (func.displayName) {
                  return func.displayName;
                }
                if (func.name) {
                  return func.name;
                }
                var matches = func.toString().match(/function\s+([^\(]+)/m);
                return matches && matches[1] || "";
              }

              function _constructorName(f, object) {
                var name = functionName(object && object.constructor);
                var excludes = f.excludeConstructors || formatio.excludeConstructors || [];
                var i, l;
                for (i = 0, l = excludes.length; i < l; ++i) {
                  if (typeof excludes[i] === "string" && excludes[i] === name) {
                    return "";
                  } else if (excludes[i].test && excludes[i].test(name)) {
                    return "";
                  }
                }
                return name;
              }

              function isCircular(object, objects) {
                if (typeof object !== "object") {
                  return false;
                }
                var i, l;
                for (i = 0, l = objects.length; i < l; ++i) {
                  if (objects[i] === object) {
                    return true;
                  }
                }
                return false;
              }

              function _ascii(f, object, processed, indent) {
                if (typeof object === "string") {
                  var qs = f.quoteStrings;
                  var quote = typeof qs !== "boolean" || qs;
                  return processed || quote ? '"' + object + '"' : object;
                }
                if (typeof object === "function" && !(object instanceof RegExp)) {
                  return _ascii.func(object);
                }
                processed = processed || [];
                if (isCircular(object, processed)) {
                  return "[Circular]";
                }
                if (Object.prototype.toString.call(object) === "[object Array]") {
                  return _ascii.array.call(f, object, processed);
                }
                if (!object) {
                  return String(1 / object === -Infinity ? "-0" : object);
                }
                if (samsam.isElement(object)) {
                  return _ascii.element(object);
                }
                if (typeof object.toString === "function" && object.toString !== Object.prototype.toString) {
                  return object.toString();
                }
                var i, l;
                for (i = 0, l = specialObjects.length; i < l; i++) {
                  if (object === specialObjects[i].object) {
                    return specialObjects[i].value;
                  }
                }
                return _ascii.object.call(f, object, processed, indent);
              }
              _ascii.func = function (func) {
                return "function " + functionName(func) + "() {}";
              };
              _ascii.array = function (array, processed) {
                processed = processed || [];
                processed.push(array);
                var pieces = [];
                var i, l;
                l = this.limitChildrenCount > 0 ? Math.min(this.limitChildrenCount, array.length) : array.length;
                for (i = 0; i < l; ++i) {
                  pieces.push(_ascii(this, array[i], processed));
                }
                if (l < array.length) pieces.push("[... " + (array.length - l) + " more elements]");
                return "[" + pieces.join(", ") + "]";
              };
              _ascii.object = function (object, processed, indent) {
                processed = processed || [];
                processed.push(object);
                indent = indent || 0;
                var pieces = [],
                  properties = samsam.keys(object).sort();
                var length = 3;
                var prop, str, obj, i, k, l;
                l = this.limitChildrenCount > 0 ? Math.min(this.limitChildrenCount, properties.length) : properties.length;
                for (i = 0; i < l; ++i) {
                  prop = properties[i];
                  obj = object[prop];
                  if (isCircular(obj, processed)) {
                    str = "[Circular]";
                  } else {
                    str = _ascii(this, obj, processed, indent + 2);
                  }
                  str = (/\s/.test(prop) ? '"' + prop + '"' : prop) + ": " + str;
                  length += str.length;
                  pieces.push(str);
                }
                var cons = _constructorName(this, object);
                var prefix = cons ? "[" + cons + "] " : "";
                var is = "";
                for (i = 0, k = indent; i < k; ++i) {
                  is += " ";
                }
                if (l < properties.length) pieces.push("[... " + (properties.length - l) + " more elements]");
                if (length + indent > 80) {
                  return prefix + "{\n  " + is + pieces.join(",\n  " + is) + "\n" + is + "}";
                }
                return prefix + "{ " + pieces.join(", ") + " }";
              };
              _ascii.element = function (element) {
                var tagName = element.tagName.toLowerCase();
                var attrs = element.attributes,
                  attr, pairs = [],
                  attrName, i, l, val;
                for (i = 0, l = attrs.length; i < l; ++i) {
                  attr = attrs.item(i);
                  attrName = attr.nodeName.toLowerCase().replace("html:", "");
                  val = attr.nodeValue;
                  if (attrName !== "contenteditable" || val !== "inherit") {
                    if (!!val) {
                      pairs.push(attrName + "=\"" + val + "\"");
                    }
                  }
                }
                var formatted = "<" + tagName + (pairs.length > 0 ? " " : "");
                var content = element.innerHTML;
                if (content.length > 20) {
                  content = content.substr(0, 20) + "[...]";
                }
                var res = formatted + pairs.join(" ") + ">" + content + "</" + tagName + ">";
                return res.replace(/ contentEditable="inherit"/, "");
              };

              function Formatio(options) {
                for (var opt in options) {
                  this[opt] = options[opt];
                }
              }
              Formatio.prototype = {
                functionName: functionName,
                configure: function configure(options) {
                  return new Formatio(options);
                },
                constructorName: function constructorName(object) {
                  return _constructorName(this, object);
                },
                ascii: function ascii(object, processed, indent) {
                  return _ascii(this, object, processed, indent);
                }
              };
              return Formatio.prototype;
            });
            !(function (e) {
              if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
              else if ("function" == typeof define && define.amd) define([], e);
              else {
                var f;
                "undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.lolex = e();
              }
            })(function () {
              var define, module, exports;
              return (function e(t, n, r) {
                function s(o, u) {
                  if (!n[o]) {
                    if (!t[o]) {
                      var a = typeof require == "function" && require;
                      if (!u && a) return a(o, !0);
                      if (i) return i(o, !0);
                      var f = new Error("Cannot find module '" + o + "'");
                      throw (f.code = "MODULE_NOT_FOUND", f);
                    }
                    var l = n[o] = {
                      exports: {}
                    };
                    t[o][0].call(l.exports, function (e) {
                      var n = t[o][1][e];
                      return s(n ? n : e);
                    }, l, l.exports, e, t, n, r);
                  }
                  return n[o].exports;
                }
                var i = typeof require == "function" && require;
                for (var o = 0; o < r.length; o++) s(r[o]);
                return s;
              })({
                1: [function (require, module, exports) {
                  (function (global) { /*global global, window*/
                    (function (global) { // Make properties writable in IE, as per
                      // http://www.adequatelygood.com/Replacing-setTimeout-Globally.html
                      // JSLint being anal
                      var glbl = global;
                      global.setTimeout = glbl.setTimeout;
                      global.clearTimeout = glbl.clearTimeout;
                      global.setInterval = glbl.setInterval;
                      global.clearInterval = glbl.clearInterval;
                      global.Date = glbl.Date; // setImmediate is not a standard function
                      // avoid adding the prop to the window object if not present
                      if ('setImmediate' in global) {
                        global.setImmediate = glbl.setImmediate;
                        global.clearImmediate = glbl.clearImmediate;
                      } // node expects setTimeout/setInterval to return a fn object w/ .ref()/.unref()
                      // browsers, a number.
                      // see https://github.com/cjohansen/Sinon.JS/pull/436
                      var NOOP = function NOOP() {
                        return undefined;
                      };
                      var timeoutResult = setTimeout(NOOP, 0);
                      var addTimerReturnsObject = typeof timeoutResult === "object";
                      clearTimeout(timeoutResult);
                      var NativeDate = Date;
                      var uniqueTimerId = 1;
                      /**
                       * Parse strings like "01:10:00" (meaning 1 hour, 10 minutes, 0 seconds) into
                       * number of milliseconds. This is used to support human-readable strings passed
                       * to clock.tick()
                       */
                      function parseTime(str) {
                        if (!str) {
                          return 0;
                        }
                        var strings = str.split(":");
                        var l = strings.length,
                          i = l;
                        var ms = 0,
                          parsed;
                        if (l > 3 || !/^(\d\d:){0,2}\d\d?$/.test(str)) {
                          throw new Error("tick only understands numbers and 'h:m:s'");
                        }
                        while (i--) {
                          parsed = parseInt(strings[i], 10);
                          if (parsed >= 60) {
                            throw new Error("Invalid time " + str);
                          }
                          ms += parsed * Math.pow(60, l - i - 1);
                        }
                        return ms * 1000;
                      }
                      /**
                       * Used to grok the `now` parameter to createClock.
                       */
                      function getEpoch(epoch) {
                        if (!epoch) {
                          return 0;
                        }
                        if (typeof epoch.getTime === "function") {
                          return epoch.getTime();
                        }
                        if (typeof epoch === "number") {
                          return epoch;
                        }
                        throw new TypeError("now should be milliseconds since UNIX epoch");
                      }

                      function inRange(from, to, timer) {
                        return timer && timer.callAt >= from && timer.callAt <= to;
                      }

                      function mirrorDateProperties(target, source) {
                        var prop;
                        for (prop in source) {
                          if (source.hasOwnProperty(prop)) {
                            target[prop] = source[prop];
                          }
                        } // set special now implementation
                        if (source.now) {
                          target.now = function now() {
                            return target.clock.now;
                          };
                        } else {
                          delete target.now;
                        } // set special toSource implementation
                        if (source.toSource) {
                          target.toSource = function toSource() {
                            return source.toSource();
                          };
                        } else {
                          delete target.toSource;
                        } // set special toString implementation
                        target.toString = function toString() {
                          return source.toString();
                        };
                        target.prototype = source.prototype;
                        target.parse = source.parse;
                        target.UTC = source.UTC;
                        target.prototype.toUTCString = source.prototype.toUTCString;
                        return target;
                      }

                      function createDate() {
                        function ClockDate(year, month, date, hour, minute, second, ms) { // Defensive and verbose to avoid potential harm in passing
                          // explicit undefined when user does not pass argument
                          switch (arguments.length) {
                          case 0:
                            return new NativeDate(ClockDate.clock.now);
                          case 1:
                            return new NativeDate(year);
                          case 2:
                            return new NativeDate(year, month);
                          case 3:
                            return new NativeDate(year, month, date);
                          case 4:
                            return new NativeDate(year, month, date, hour);
                          case 5:
                            return new NativeDate(year, month, date, hour, minute);
                          case 6:
                            return new NativeDate(year, month, date, hour, minute, second);
                          default:
                            return new NativeDate(year, month, date, hour, minute, second, ms);
                          }
                        }
                        return mirrorDateProperties(ClockDate, NativeDate);
                      }

                      function addTimer(clock, timer) {
                        if (timer.func === undefined) {
                          throw new Error("Callback must be provided to timer calls");
                        }
                        if (!clock.timers) {
                          clock.timers = {};
                        }
                        timer.id = uniqueTimerId++;
                        timer.createdAt = clock.now;
                        timer.callAt = clock.now + (timer.delay || (clock.duringTick ? 1 : 0));
                        clock.timers[timer.id] = timer;
                        if (addTimerReturnsObject) {
                          return {
                            id: timer.id,
                            ref: NOOP,
                            unref: NOOP
                          };
                        }
                        return timer.id;
                      }

                      function compareTimers(a, b) { // Sort first by absolute timing
                        if (a.callAt < b.callAt) {
                          return -1;
                        }
                        if (a.callAt > b.callAt) {
                          return 1;
                        } // Sort next by immediate, immediate timers take precedence
                        if (a.immediate && !b.immediate) {
                          return -1;
                        }
                        if (!a.immediate && b.immediate) {
                          return 1;
                        } // Sort next by creation time, earlier-created timers take precedence
                        if (a.createdAt < b.createdAt) {
                          return -1;
                        }
                        if (a.createdAt > b.createdAt) {
                          return 1;
                        } // Sort next by id, lower-id timers take precedence
                        if (a.id < b.id) {
                          return -1;
                        }
                        if (a.id > b.id) {
                          return 1;
                        } // As timer ids are unique, no fallback `0` is necessary
                      }

                      function firstTimerInRange(clock, from, to) {
                        var timers = clock.timers,
                          timer = null,
                          id, isInRange;
                        for (id in timers) {
                          if (timers.hasOwnProperty(id)) {
                            isInRange = inRange(from, to, timers[id]);
                            if (isInRange && (!timer || compareTimers(timer, timers[id]) === 1)) {
                              timer = timers[id];
                            }
                          }
                        }
                        return timer;
                      }

                      function callTimer(clock, timer) {
                        var exception;
                        if (typeof timer.interval === "number") {
                          clock.timers[timer.id].callAt += timer.interval;
                        } else {
                          delete clock.timers[timer.id];
                        }
                        try {
                          if (typeof timer.func === "function") {
                            timer.func.apply(null, timer.args);
                          } else {
                            eval(timer.func);
                          }
                        } catch (e) {
                          exception = e;
                        }
                        if (!clock.timers[timer.id]) {
                          if (exception) {
                            throw exception;
                          }
                          return;
                        }
                        if (exception) {
                          throw exception;
                        }
                      }

                      function timerType(timer) {
                        if (timer.immediate) {
                          return "Immediate";
                        } else if (typeof timer.interval !== "undefined") {
                          return "Interval";
                        } else {
                          return "Timeout";
                        }
                      }

                      function clearTimer(clock, timerId, ttype) {
                        if (!timerId) { // null appears to be allowed in most browsers, and appears to be
                          // relied upon by some libraries, like Bootstrap carousel
                          return;
                        }
                        if (!clock.timers) {
                          clock.timers = [];
                        } // in Node, timerId is an object with .ref()/.unref(), and
                        // its .id field is the actual timer id.
                        if (typeof timerId === "object") {
                          timerId = timerId.id;
                        }
                        if (clock.timers.hasOwnProperty(timerId)) { // check that the ID matches a timer of the correct type
                          var timer = clock.timers[timerId];
                          if (timerType(timer) === ttype) {
                            delete clock.timers[timerId];
                          } else {
                            throw new Error("Cannot clear timer: timer created with set" + ttype + "() but cleared with clear" + timerType(timer) + "()");
                          }
                        }
                      }

                      function uninstall(clock, target) {
                        var method, i, l;
                        for (i = 0, l = clock.methods.length; i < l; i++) {
                          method = clock.methods[i];
                          if (target[method].hadOwnProperty) {
                            target[method] = clock["_" + method];
                          } else {
                            try {
                              delete target[method];
                            } catch (ignore) {}
                          }
                        } // Prevent multiple executions which will completely remove these props
                        clock.methods = [];
                      }

                      function hijackMethod(target, method, clock) {
                        var prop;
                        clock[method].hadOwnProperty = Object.prototype.hasOwnProperty.call(target, method);
                        clock["_" + method] = target[method];
                        if (method === "Date") {
                          var date = mirrorDateProperties(clock[method], target[method]);
                          target[method] = date;
                        } else {
                          target[method] = function () {
                            return clock[method].apply(clock, arguments);
                          };
                          for (prop in clock[method]) {
                            if (clock[method].hasOwnProperty(prop)) {
                              target[method][prop] = clock[method][prop];
                            }
                          }
                        }
                        target[method].clock = clock;
                      }
                      var timers = {
                        setTimeout: setTimeout,
                        clearTimeout: clearTimeout,
                        setImmediate: global.setImmediate,
                        clearImmediate: global.clearImmediate,
                        setInterval: setInterval,
                        clearInterval: clearInterval,
                        Date: Date
                      };
                      var keys = Object.keys || function (obj) {
                        var ks = [],
                          key;
                        for (key in obj) {
                          if (obj.hasOwnProperty(key)) {
                            ks.push(key);
                          }
                        }
                        return ks;
                      };
                      exports.timers = timers;

                      function createClock(now) {
                        var clock = {
                          now: getEpoch(now),
                          timeouts: {},
                          Date: createDate()
                        };
                        clock.Date.clock = clock;
                        clock.setTimeout = function setTimeout(func, timeout) {
                          return addTimer(clock, {
                            func: func,
                            args: Array.prototype.slice.call(arguments, 2),
                            delay: timeout
                          });
                        };
                        clock.clearTimeout = function clearTimeout(timerId) {
                          return clearTimer(clock, timerId, "Timeout");
                        };
                        clock.setInterval = function setInterval(func, timeout) {
                          return addTimer(clock, {
                            func: func,
                            args: Array.prototype.slice.call(arguments, 2),
                            delay: timeout,
                            interval: timeout
                          });
                        };
                        clock.clearInterval = function clearInterval(timerId) {
                          return clearTimer(clock, timerId, "Interval");
                        };
                        clock.setImmediate = function setImmediate(func) {
                          return addTimer(clock, {
                            func: func,
                            args: Array.prototype.slice.call(arguments, 1),
                            immediate: true
                          });
                        };
                        clock.clearImmediate = function clearImmediate(timerId) {
                          return clearTimer(clock, timerId, "Immediate");
                        };
                        clock.tick = function tick(ms) {
                          ms = typeof ms === "number" ? ms : parseTime(ms);
                          var tickFrom = clock.now,
                            tickTo = clock.now + ms,
                            previous = clock.now;
                          var timer = firstTimerInRange(clock, tickFrom, tickTo);
                          var oldNow;
                          clock.duringTick = true;
                          var firstException;
                          while (timer && tickFrom <= tickTo) {
                            if (clock.timers[timer.id]) {
                              tickFrom = clock.now = timer.callAt;
                              try {
                                oldNow = clock.now;
                                callTimer(clock, timer); // compensate for any setSystemTime() call during timer callback
                                if (oldNow !== clock.now) {
                                  tickFrom += clock.now - oldNow;
                                  tickTo += clock.now - oldNow;
                                  previous += clock.now - oldNow;
                                }
                              } catch (e) {
                                firstException = firstException || e;
                              }
                            }
                            timer = firstTimerInRange(clock, previous, tickTo);
                            previous = tickFrom;
                          }
                          clock.duringTick = false;
                          clock.now = tickTo;
                          if (firstException) {
                            throw firstException;
                          }
                          return clock.now;
                        };
                        clock.reset = function reset() {
                          clock.timers = {};
                        };
                        clock.setSystemTime = function setSystemTime(now) { // determine time difference
                          var newNow = getEpoch(now);
                          var difference = newNow - clock.now; // update 'system clock'
                          clock.now = newNow; // update timers and intervals to keep them stable
                          for (var id in clock.timers) {
                            if (clock.timers.hasOwnProperty(id)) {
                              var timer = clock.timers[id];
                              timer.createdAt += difference;
                              timer.callAt += difference;
                            }
                          }
                        };
                        return clock;
                      }
                      exports.createClock = createClock;
                      exports.install = function install(target, now, toFake) {
                        var i, l;
                        if (typeof target === "number") {
                          toFake = now;
                          now = target;
                          target = null;
                        }
                        if (!target) {
                          target = global;
                        }
                        var clock = createClock(now);
                        clock.uninstall = function () {
                          uninstall(clock, target);
                        };
                        clock.methods = toFake || [];
                        if (clock.methods.length === 0) {
                          clock.methods = keys(timers);
                        }
                        for (i = 0, l = clock.methods.length; i < l; i++) {
                          hijackMethod(target, clock.methods[i], clock);
                        }
                        return clock;
                      };
                    })(global || this);
                  }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
                }, {}]
              }, {}, [1])(1);
            });
          })();
          var define;
          /**
           * Sinon core utilities. For internal use only.
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2013 Christian Johansen
           */
          var sinon = (function () {
            "use strict"; // eslint-disable-line no-unused-vars
            var sinonModule;
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, exports, module) {
              sinonModule = module.exports = require("./sinon/util/core");
              require("./sinon/extend");
              require("./sinon/walk");
              require("./sinon/typeOf");
              require("./sinon/times_in_words");
              require("./sinon/spy");
              require("./sinon/call");
              require("./sinon/behavior");
              require("./sinon/stub");
              require("./sinon/mock");
              require("./sinon/collection");
              require("./sinon/assert");
              require("./sinon/sandbox");
              require("./sinon/test");
              require("./sinon/test_case");
              require("./sinon/match");
              require("./sinon/format");
              require("./sinon/log_error");
            }
            if (isAMD) {
              define(loadDependencies);
            } else if (isNode) {
              loadDependencies(require, module.exports, module);
              sinonModule = module.exports;
            } else {
              sinonModule = {};
            }
            return sinonModule;
          })();
          /**
           * @depend ../../sinon.js
           */
          /**
           * Sinon core utilities. For internal use only.
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2013 Christian Johansen
           */
          (function (sinonGlobal) {
            var div = typeof document !== "undefined" && document.createElement("div");
            var hasOwn = Object.prototype.hasOwnProperty;

            function isDOMNode(obj) {
              var success = false;
              try {
                obj.appendChild(div);
                success = div.parentNode === obj;
              } catch (e) {
                return false;
              } finally {
                try {
                  obj.removeChild(div);
                } catch (e) { // Remove failed, not much we can do about that
                }
              }
              return success;
            }

            function isElement(obj) {
              return div && obj && obj.nodeType === 1 && isDOMNode(obj);
            }

            function isFunction(obj) {
              return typeof obj === "function" || !!(obj && obj.constructor && obj.call && obj.apply);
            }

            function isReallyNaN(val) {
              return typeof val === "number" && isNaN(val);
            }

            function mirrorProperties(target, source) {
              for (var prop in source) {
                if (!hasOwn.call(target, prop)) {
                  target[prop] = source[prop];
                }
              }
            }

            function isRestorable(obj) {
              return typeof obj === "function" && typeof obj.restore === "function" && obj.restore.sinon;
            } // Cheap way to detect if we have ES5 support.
            var hasES5Support = ("keys" in Object);

            function makeApi(sinon) {
              sinon.wrapMethod = function wrapMethod(object, property, method) {
                if (!object) {
                  throw new TypeError("Should wrap property of object");
                }
                if (typeof method !== "function" && typeof method !== "object") {
                  throw new TypeError("Method wrapper should be a function or a property descriptor");
                }

                function checkWrappedMethod(wrappedMethod) {
                  var error;
                  if (!isFunction(wrappedMethod)) {
                    error = new TypeError("Attempted to wrap " + typeof wrappedMethod + " property " + property + " as function");
                  } else if (wrappedMethod.restore && wrappedMethod.restore.sinon) {
                    error = new TypeError("Attempted to wrap " + property + " which is already wrapped");
                  } else if (wrappedMethod.calledBefore) {
                    var verb = wrappedMethod.returns ? "stubbed" : "spied on";
                    error = new TypeError("Attempted to wrap " + property + " which is already " + verb);
                  }
                  if (error) {
                    if (wrappedMethod && wrappedMethod.stackTrace) {
                      error.stack += "\n--------------\n" + wrappedMethod.stackTrace;
                    }
                    throw error;
                  }
                }
                var error, wrappedMethod, i; // IE 8 does not support hasOwnProperty on the window object and Firefox has a problem
                // when using hasOwn.call on objects from other frames.
                var owned = object.hasOwnProperty ? object.hasOwnProperty(property) : hasOwn.call(object, property);
                if (hasES5Support) {
                  var methodDesc = typeof method === "function" ? {
                    value: method
                  } : method;
                  var wrappedMethodDesc = sinon.getPropertyDescriptor(object, property);
                  if (!wrappedMethodDesc) {
                    error = new TypeError("Attempted to wrap " + typeof wrappedMethod + " property " + property + " as function");
                  } else if (wrappedMethodDesc.restore && wrappedMethodDesc.restore.sinon) {
                    error = new TypeError("Attempted to wrap " + property + " which is already wrapped");
                  }
                  if (error) {
                    if (wrappedMethodDesc && wrappedMethodDesc.stackTrace) {
                      error.stack += "\n--------------\n" + wrappedMethodDesc.stackTrace;
                    }
                    throw error;
                  }
                  var types = sinon.objectKeys(methodDesc);
                  for (i = 0; i < types.length; i++) {
                    wrappedMethod = wrappedMethodDesc[types[i]];
                    checkWrappedMethod(wrappedMethod);
                  }
                  mirrorProperties(methodDesc, wrappedMethodDesc);
                  for (i = 0; i < types.length; i++) {
                    mirrorProperties(methodDesc[types[i]], wrappedMethodDesc[types[i]]);
                  }
                  Object.defineProperty(object, property, methodDesc);
                } else {
                  wrappedMethod = object[property];
                  checkWrappedMethod(wrappedMethod);
                  object[property] = method;
                  method.displayName = property;
                }
                method.displayName = property; // Set up a stack trace which can be used later to find what line of
                // code the original method was created on.
                method.stackTrace = new Error("Stack Trace for original").stack;
                method.restore = function () { // For prototype properties try to reset by delete first.
                  // If this fails (ex: localStorage on mobile safari) then force a reset
                  // via direct assignment.
                  if (!owned) { // In some cases `delete` may throw an error
                    try {
                      delete object[property];
                    } catch (e) {} // eslint-disable-line no-empty
                    // For native code functions `delete` fails without throwing an error
                    // on Chrome < 43, PhantomJS, etc.
                  } else if (hasES5Support) {
                    Object.defineProperty(object, property, wrappedMethodDesc);
                  } // Use strict equality comparison to check failures then force a reset
                  // via direct assignment.
                  if (object[property] === method) {
                    object[property] = wrappedMethod;
                  }
                };
                method.restore.sinon = true;
                if (!hasES5Support) {
                  mirrorProperties(method, wrappedMethod);
                }
                return method;
              };
              sinon.create = function create(proto) {
                var F = function F() {};
                F.prototype = proto;
                return new F();
              };
              sinon.deepEqual = function deepEqual(a, b) {
                if (sinon.match && sinon.match.isMatcher(a)) {
                  return a.test(b);
                }
                if (typeof a !== "object" || typeof b !== "object") {
                  return isReallyNaN(a) && isReallyNaN(b) || a === b;
                }
                if (isElement(a) || isElement(b)) {
                  return a === b;
                }
                if (a === b) {
                  return true;
                }
                if (a === null && b !== null || a !== null && b === null) {
                  return false;
                }
                if (a instanceof RegExp && b instanceof RegExp) {
                  return a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline;
                }
                var aString = Object.prototype.toString.call(a);
                if (aString !== Object.prototype.toString.call(b)) {
                  return false;
                }
                if (aString === "[object Date]") {
                  return a.valueOf() === b.valueOf();
                }
                var prop;
                var aLength = 0;
                var bLength = 0;
                if (aString === "[object Array]" && a.length !== b.length) {
                  return false;
                }
                for (prop in a) {
                  if (a.hasOwnProperty(prop)) {
                    aLength += 1;
                    if (!(prop in b)) {
                      return false;
                    }
                    if (!deepEqual(a[prop], b[prop])) {
                      return false;
                    }
                  }
                }
                for (prop in b) {
                  if (b.hasOwnProperty(prop)) {
                    bLength += 1;
                  }
                }
                return aLength === bLength;
              };
              sinon.functionName = function functionName(func) {
                var name = func.displayName || func.name; // Use function decomposition as a last resort to get function
                // name. Does not rely on function decomposition to work - if it
                // doesn't debugging will be slightly less informative
                // (i.e. toString will say 'spy' rather than 'myFunc').
                if (!name) {
                  var matches = func.toString().match(/function ([^\s\(]+)/);
                  name = matches && matches[1];
                }
                return name;
              };
              sinon.functionToString = function toString() {
                if (this.getCall && this.callCount) {
                  var thisValue, prop;
                  var i = this.callCount;
                  while (i--) {
                    thisValue = this.getCall(i).thisValue;
                    for (prop in thisValue) {
                      if (thisValue[prop] === this) {
                        return prop;
                      }
                    }
                  }
                }
                return this.displayName || "sinon fake";
              };
              sinon.objectKeys = function objectKeys(obj) {
                if (obj !== Object(obj)) {
                  throw new TypeError("sinon.objectKeys called on a non-object");
                }
                var keys = [];
                var key;
                for (key in obj) {
                  if (hasOwn.call(obj, key)) {
                    keys.push(key);
                  }
                }
                return keys;
              };
              sinon.getPropertyDescriptor = function getPropertyDescriptor(object, property) {
                var proto = object;
                var descriptor;
                while (proto && !(descriptor = Object.getOwnPropertyDescriptor(proto, property))) {
                  proto = Object.getPrototypeOf(proto);
                }
                return descriptor;
              };
              sinon.getConfig = function (custom) {
                var config = {};
                custom = custom || {};
                var defaults = sinon.defaultConfig;
                for (var prop in defaults) {
                  if (defaults.hasOwnProperty(prop)) {
                    config[prop] = custom.hasOwnProperty(prop) ? custom[prop] : defaults[prop];
                  }
                }
                return config;
              };
              sinon.defaultConfig = {
                injectIntoThis: true,
                injectInto: null,
                properties: ["spy", "stub", "mock", "clock", "server", "requests"],
                useFakeTimers: true,
                useFakeServer: true
              };
              sinon.timesInWords = function timesInWords(count) {
                return count === 1 && "once" || count === 2 && "twice" || count === 3 && "thrice" || (count || 0) + " times";
              };
              sinon.calledInOrder = function (spies) {
                for (var i = 1, l = spies.length; i < l; i++) {
                  if (!spies[i - 1].calledBefore(spies[i]) || !spies[i].called) {
                    return false;
                  }
                }
                return true;
              };
              sinon.orderByFirstCall = function (spies) {
                return spies.sort(function (a, b) { // uuid, won't ever be equal
                  var aCall = a.getCall(0);
                  var bCall = b.getCall(0);
                  var aId = aCall && aCall.callId || -1;
                  var bId = bCall && bCall.callId || -1;
                  return aId < bId ? -1 : 1;
                });
              };
              sinon.createStubInstance = function (constructor) {
                if (typeof constructor !== "function") {
                  throw new TypeError("The constructor should be a function.");
                }
                return sinon.stub(sinon.create(constructor.prototype));
              };
              sinon.restore = function (object) {
                if (object !== null && typeof object === "object") {
                  for (var prop in object) {
                    if (isRestorable(object[prop])) {
                      object[prop].restore();
                    }
                  }
                } else if (isRestorable(object)) {
                  object.restore();
                }
              };
              return sinon;
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, exports) {
              makeApi(exports);
            }
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon // eslint-disable-line no-undef
          );
          /**
           * @depend util/core.js
           */
          (function (sinonGlobal) {
            function makeApi(sinon) { // Adapted from https://developer.mozilla.org/en/docs/ECMAScript_DontEnum_attribute#JScript_DontEnum_Bug
              var hasDontEnumBug = (function () {
                var obj = {
                  constructor: function constructor() {
                    return "0";
                  },
                  toString: function toString() {
                    return "1";
                  },
                  valueOf: function valueOf() {
                    return "2";
                  },
                  toLocaleString: function toLocaleString() {
                    return "3";
                  },
                  prototype: function prototype() {
                    return "4";
                  },
                  isPrototypeOf: function isPrototypeOf() {
                    return "5";
                  },
                  propertyIsEnumerable: function propertyIsEnumerable() {
                    return "6";
                  },
                  hasOwnProperty: function hasOwnProperty() {
                    return "7";
                  },
                  length: function length() {
                    return "8";
                  },
                  unique: function unique() {
                    return "9";
                  }
                };
                var result = [];
                for (var prop in obj) {
                  if (obj.hasOwnProperty(prop)) {
                    result.push(obj[prop]());
                  }
                }
                return result.join("") !== "0123456789";
              })();
              /* Public: Extend target in place with all (own) properties from sources in-order. Thus, last source will
               *         override properties in previous sources.
               *
               * target - The Object to extend
               * sources - Objects to copy properties from.
               *
               * Returns the extended target
               */
              function extend(target /*, sources */ ) {
                var sources = Array.prototype.slice.call(arguments, 1);
                var source, i, prop;
                for (i = 0; i < sources.length; i++) {
                  source = sources[i];
                  for (prop in source) {
                    if (source.hasOwnProperty(prop)) {
                      target[prop] = source[prop];
                    }
                  } // Make sure we copy (own) toString method even when in JScript with DontEnum bug
                  // See https://developer.mozilla.org/en/docs/ECMAScript_DontEnum_attribute#JScript_DontEnum_Bug
                  if (hasDontEnumBug && source.hasOwnProperty("toString") && source.toString !== target.toString) {
                    target.toString = source.toString;
                  }
                }
                return target;
              }
              sinon.extend = extend;
              return sinon.extend;
            }

            function loadDependencies(require, exports, module) {
              var sinon = require("./util/core");
              module.exports = makeApi(sinon);
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon // eslint-disable-line no-undef
          );
          /**
           * @depend util/core.js
           */
          (function (sinonGlobal) {
            function makeApi(sinon) {
              function timesInWords(count) {
                switch (count) {
                case 1:
                  return "once";
                case 2:
                  return "twice";
                case 3:
                  return "thrice";
                default:
                  return (count || 0) + " times";
                }
              }
              sinon.timesInWords = timesInWords;
              return sinon.timesInWords;
            }

            function loadDependencies(require, exports, module) {
              var core = require("./util/core");
              module.exports = makeApi(core);
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon // eslint-disable-line no-undef
          );
          /**
           * @depend util/core.js
           */
          /**
           * Format functions
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2014 Christian Johansen
           */
          (function (sinonGlobal) {
            function makeApi(sinon) {
              function typeOf(value) {
                if (value === null) {
                  return "null";
                } else if (value === undefined) {
                  return "undefined";
                }
                var string = Object.prototype.toString.call(value);
                return string.substring(8, string.length - 1).toLowerCase();
              }
              sinon.typeOf = typeOf;
              return sinon.typeOf;
            }

            function loadDependencies(require, exports, module) {
              var core = require("./util/core");
              module.exports = makeApi(core);
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon // eslint-disable-line no-undef
          );
          /**
           * @depend util/core.js
           * @depend typeOf.js
           */
          /*jslint eqeqeq: false, onevar: false, plusplus: false*/ /*global module, require, sinon*/
          /**
           * Match functions
           *
           * @author Maximilian Antoni (mail@maxantoni.de)
           * @license BSD
           *
           * Copyright (c) 2012 Maximilian Antoni
           */
          (function (sinonGlobal) {
            function makeApi(sinon) {
              function assertType(value, type, name) {
                var actual = sinon.typeOf(value);
                if (actual !== type) {
                  throw new TypeError("Expected type of " + name + " to be " + type + ", but was " + actual);
                }
              }
              var matcher = {
                toString: function toString() {
                  return this.message;
                }
              };

              function isMatcher(object) {
                return matcher.isPrototypeOf(object);
              }

              function matchObject(expectation, actual) {
                if (actual === null || actual === undefined) {
                  return false;
                }
                for (var key in expectation) {
                  if (expectation.hasOwnProperty(key)) {
                    var exp = expectation[key];
                    var act = actual[key];
                    if (isMatcher(exp)) {
                      if (!exp.test(act)) {
                        return false;
                      }
                    } else if (sinon.typeOf(exp) === "object") {
                      if (!matchObject(exp, act)) {
                        return false;
                      }
                    } else if (!sinon.deepEqual(exp, act)) {
                      return false;
                    }
                  }
                }
                return true;
              }

              function match(expectation, message) {
                var m = sinon.create(matcher);
                var type = sinon.typeOf(expectation);
                switch (type) {
                case "object":
                  if (typeof expectation.test === "function") {
                    m.test = function (actual) {
                      return expectation.test(actual) === true;
                    };
                    m.message = "match(" + sinon.functionName(expectation.test) + ")";
                    return m;
                  }
                  var str = [];
                  for (var key in expectation) {
                    if (expectation.hasOwnProperty(key)) {
                      str.push(key + ": " + expectation[key]);
                    }
                  }
                  m.test = function (actual) {
                    return matchObject(expectation, actual);
                  };
                  m.message = "match(" + str.join(", ") + ")";
                  break;
                case "number":
                  m.test = function (actual) { // we need type coercion here
                    return expectation == actual; // eslint-disable-line eqeqeq
                  };
                  break;
                case "string":
                  m.test = function (actual) {
                    if (typeof actual !== "string") {
                      return false;
                    }
                    return actual.indexOf(expectation) !== -1;
                  };
                  m.message = "match(\"" + expectation + "\")";
                  break;
                case "regexp":
                  m.test = function (actual) {
                    if (typeof actual !== "string") {
                      return false;
                    }
                    return expectation.test(actual);
                  };
                  break;
                case "function":
                  m.test = expectation;
                  if (message) {
                    m.message = message;
                  } else {
                    m.message = "match(" + sinon.functionName(expectation) + ")";
                  }
                  break;
                default:
                  m.test = function (actual) {
                    return sinon.deepEqual(expectation, actual);
                  };
                }
                if (!m.message) {
                  m.message = "match(" + expectation + ")";
                }
                return m;
              }
              matcher.or = function (m2) {
                if (!arguments.length) {
                  throw new TypeError("Matcher expected");
                } else if (!isMatcher(m2)) {
                  m2 = match(m2);
                }
                var m1 = this;
                var or = sinon.create(matcher);
                or.test = function (actual) {
                  return m1.test(actual) || m2.test(actual);
                };
                or.message = m1.message + ".or(" + m2.message + ")";
                return or;
              };
              matcher.and = function (m2) {
                if (!arguments.length) {
                  throw new TypeError("Matcher expected");
                } else if (!isMatcher(m2)) {
                  m2 = match(m2);
                }
                var m1 = this;
                var and = sinon.create(matcher);
                and.test = function (actual) {
                  return m1.test(actual) && m2.test(actual);
                };
                and.message = m1.message + ".and(" + m2.message + ")";
                return and;
              };
              match.isMatcher = isMatcher;
              match.any = match(function () {
                return true;
              }, "any");
              match.defined = match(function (actual) {
                return actual !== null && actual !== undefined;
              }, "defined");
              match.truthy = match(function (actual) {
                return !!actual;
              }, "truthy");
              match.falsy = match(function (actual) {
                return !actual;
              }, "falsy");
              match.same = function (expectation) {
                return match(function (actual) {
                  return expectation === actual;
                }, "same(" + expectation + ")");
              };
              match.typeOf = function (type) {
                assertType(type, "string", "type");
                return match(function (actual) {
                  return sinon.typeOf(actual) === type;
                }, "typeOf(\"" + type + "\")");
              };
              match.instanceOf = function (type) {
                assertType(type, "function", "type");
                return match(function (actual) {
                  return actual instanceof type;
                }, "instanceOf(" + sinon.functionName(type) + ")");
              };

              function createPropertyMatcher(propertyTest, messagePrefix) {
                return function (property, value) {
                  assertType(property, "string", "property");
                  var onlyProperty = arguments.length === 1;
                  var message = messagePrefix + "(\"" + property + "\"";
                  if (!onlyProperty) {
                    message += ", " + value;
                  }
                  message += ")";
                  return match(function (actual) {
                    if (actual === undefined || actual === null || !propertyTest(actual, property)) {
                      return false;
                    }
                    return onlyProperty || sinon.deepEqual(value, actual[property]);
                  }, message);
                };
              }
              match.has = createPropertyMatcher(function (actual, property) {
                if (typeof actual === "object") {
                  return property in actual;
                }
                return actual[property] !== undefined;
              }, "has");
              match.hasOwn = createPropertyMatcher(function (actual, property) {
                return actual.hasOwnProperty(property);
              }, "hasOwn");
              match.bool = match.typeOf("boolean");
              match.number = match.typeOf("number");
              match.string = match.typeOf("string");
              match.object = match.typeOf("object");
              match.func = match.typeOf("function");
              match.array = match.typeOf("array");
              match.regexp = match.typeOf("regexp");
              match.date = match.typeOf("date");
              sinon.match = match;
              return match;
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, exports, module) {
              var sinon = require("./util/core");
              require("./typeOf");
              module.exports = makeApi(sinon);
            }
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon // eslint-disable-line no-undef
          );
          /**
           * @depend util/core.js
           */
          /**
           * Format functions
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2014 Christian Johansen
           */
          (function (sinonGlobal, formatio) {
            function makeApi(sinon) {
              function valueFormatter(value) {
                return "" + value;
              }

              function getFormatioFormatter() {
                var formatter = formatio.configure({
                  quoteStrings: false,
                  limitChildrenCount: 250
                });

                function format() {
                  return formatter.ascii.apply(formatter, arguments);
                }
                return format;
              }

              function getNodeFormatter() {
                try {
                  var util = require("util");
                } catch (e) { /* Node, but no util module - would be very old, but better safe than sorry */ }

                function format(v) {
                  var isObjectWithNativeToString = typeof v === "object" && v.toString === Object.prototype.toString;
                  return isObjectWithNativeToString ? util.inspect(v) : v;
                }
                return util ? format : valueFormatter;
              }
              var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
              var formatter;
              if (isNode) {
                try {
                  formatio = require("formatio");
                } catch (e) {} // eslint-disable-line no-empty
              }
              if (formatio) {
                formatter = getFormatioFormatter();
              } else if (isNode) {
                formatter = getNodeFormatter();
              } else {
                formatter = valueFormatter;
              }
              sinon.format = formatter;
              return sinon.format;
            }

            function loadDependencies(require, exports, module) {
              var sinon = require("./util/core");
              module.exports = makeApi(sinon);
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon, // eslint-disable-line no-undef
            typeof formatio === "object" && formatio // eslint-disable-line no-undef
          );
          /**
           * @depend util/core.js
           * @depend match.js
           * @depend format.js
           */
          /**
           * Spy calls
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @author Maximilian Antoni (mail@maxantoni.de)
           * @license BSD
           *
           * Copyright (c) 2010-2013 Christian Johansen
           * Copyright (c) 2013 Maximilian Antoni
           */
          (function (sinonGlobal) {
            var slice = Array.prototype.slice;

            function makeApi(sinon) {
              function throwYieldError(proxy, text, args) {
                var msg = sinon.functionName(proxy) + text;
                if (args.length) {
                  msg += " Received [" + slice.call(args).join(", ") + "]";
                }
                throw new Error(msg);
              }
              var callProto = {
                calledOn: function calledOn(thisValue) {
                  if (sinon.match && sinon.match.isMatcher(thisValue)) {
                    return thisValue.test(this.thisValue);
                  }
                  return this.thisValue === thisValue;
                },
                calledWith: function calledWith() {
                  var l = arguments.length;
                  if (l > this.args.length) {
                    return false;
                  }
                  for (var i = 0; i < l; i += 1) {
                    if (!sinon.deepEqual(arguments[i], this.args[i])) {
                      return false;
                    }
                  }
                  return true;
                },
                calledWithMatch: function calledWithMatch() {
                  var l = arguments.length;
                  if (l > this.args.length) {
                    return false;
                  }
                  for (var i = 0; i < l; i += 1) {
                    var actual = this.args[i];
                    var expectation = arguments[i];
                    if (!sinon.match || !sinon.match(expectation).test(actual)) {
                      return false;
                    }
                  }
                  return true;
                },
                calledWithExactly: function calledWithExactly() {
                  return arguments.length === this.args.length && this.calledWith.apply(this, arguments);
                },
                notCalledWith: function notCalledWith() {
                  return !this.calledWith.apply(this, arguments);
                },
                notCalledWithMatch: function notCalledWithMatch() {
                  return !this.calledWithMatch.apply(this, arguments);
                },
                returned: function returned(value) {
                  return sinon.deepEqual(value, this.returnValue);
                },
                threw: function threw(error) {
                  if (typeof error === "undefined" || !this.exception) {
                    return !!this.exception;
                  }
                  return this.exception === error || this.exception.name === error;
                },
                calledWithNew: function calledWithNew() {
                  return this.proxy.prototype && this.thisValue instanceof this.proxy;
                },
                calledBefore: function calledBefore(other) {
                  return this.callId < other.callId;
                },
                calledAfter: function calledAfter(other) {
                  return this.callId > other.callId;
                },
                callArg: function callArg(pos) {
                  this.args[pos]();
                },
                callArgOn: function callArgOn(pos, thisValue) {
                  this.args[pos].apply(thisValue);
                },
                callArgWith: function callArgWith(pos) {
                  this.callArgOnWith.apply(this, [pos, null].concat(slice.call(arguments, 1)));
                },
                callArgOnWith: function callArgOnWith(pos, thisValue) {
                  var args = slice.call(arguments, 2);
                  this.args[pos].apply(thisValue, args);
                },
                "yield": function _yield() {
                  this.yieldOn.apply(this, [null].concat(slice.call(arguments, 0)));
                },
                yieldOn: function yieldOn(thisValue) {
                  var args = this.args;
                  for (var i = 0, l = args.length; i < l; ++i) {
                    if (typeof args[i] === "function") {
                      args[i].apply(thisValue, slice.call(arguments, 1));
                      return;
                    }
                  }
                  throwYieldError(this.proxy, " cannot yield since no callback was passed.", args);
                },
                yieldTo: function yieldTo(prop) {
                  this.yieldToOn.apply(this, [prop, null].concat(slice.call(arguments, 1)));
                },
                yieldToOn: function yieldToOn(prop, thisValue) {
                  var args = this.args;
                  for (var i = 0, l = args.length; i < l; ++i) {
                    if (args[i] && typeof args[i][prop] === "function") {
                      args[i][prop].apply(thisValue, slice.call(arguments, 2));
                      return;
                    }
                  }
                  throwYieldError(this.proxy, " cannot yield to '" + prop + "' since no callback was passed.", args);
                },
                getStackFrames: function getStackFrames() { // Omit the error message and the two top stack frames in sinon itself:
                  return this.stack && this.stack.split("\n").slice(3);
                },
                toString: function toString() {
                  var callStr = this.proxy.toString() + "(";
                  var args = [];
                  for (var i = 0, l = this.args.length; i < l; ++i) {
                    args.push(sinon.format(this.args[i]));
                  }
                  callStr = callStr + args.join(", ") + ")";
                  if (typeof this.returnValue !== "undefined") {
                    callStr += " => " + sinon.format(this.returnValue);
                  }
                  if (this.exception) {
                    callStr += " !" + this.exception.name;
                    if (this.exception.message) {
                      callStr += "(" + this.exception.message + ")";
                    }
                  }
                  if (this.stack) {
                    callStr += this.getStackFrames()[0].replace(/^\s*(?:at\s+|@)?/, " at ");
                  }
                  return callStr;
                }
              };
              callProto.invokeCallback = callProto['yield'];

              function createSpyCall(spy, thisValue, args, returnValue, exception, id, stack) {
                if (typeof id !== "number") {
                  throw new TypeError("Call id is not a number");
                }
                var proxyCall = sinon.create(callProto);
                proxyCall.proxy = spy;
                proxyCall.thisValue = thisValue;
                proxyCall.args = args;
                proxyCall.returnValue = returnValue;
                proxyCall.exception = exception;
                proxyCall.callId = id;
                proxyCall.stack = stack;
                return proxyCall;
              }
              createSpyCall.toString = callProto.toString; // used by mocks
              sinon.spyCall = createSpyCall;
              return createSpyCall;
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, exports, module) {
              var sinon = require("./util/core");
              require("./match");
              require("./format");
              module.exports = makeApi(sinon);
            }
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon // eslint-disable-line no-undef
          );
          /**
           * @depend times_in_words.js
           * @depend util/core.js
           * @depend extend.js
           * @depend call.js
           * @depend format.js
           */
          /**
           * Spy functions
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2013 Christian Johansen
           */
          (function (sinonGlobal) {
            function makeApi(sinon) {
              var push = Array.prototype.push;
              var slice = Array.prototype.slice;
              var callId = 0;

              function spy(object, property, types) {
                if (!property && typeof object === "function") {
                  return spy.create(object);
                }
                if (!object && !property) {
                  return spy.create(function () {});
                }
                if (types) {
                  var methodDesc = sinon.getPropertyDescriptor(object, property);
                  for (var i = 0; i < types.length; i++) {
                    methodDesc[types[i]] = spy.create(methodDesc[types[i]]);
                  }
                  return sinon.wrapMethod(object, property, methodDesc);
                }
                return sinon.wrapMethod(object, property, spy.create(object[property]));
              }

              function matchingFake(fakes, args, strict) {
                if (!fakes) {
                  return undefined;
                }
                for (var i = 0, l = fakes.length; i < l; i++) {
                  if (fakes[i].matches(args, strict)) {
                    return fakes[i];
                  }
                }
              }

              function incrementCallCount() {
                this.called = true;
                this.callCount += 1;
                this.notCalled = false;
                this.calledOnce = this.callCount === 1;
                this.calledTwice = this.callCount === 2;
                this.calledThrice = this.callCount === 3;
              }

              function createCallProperties() {
                this.firstCall = this.getCall(0);
                this.secondCall = this.getCall(1);
                this.thirdCall = this.getCall(2);
                this.lastCall = this.getCall(this.callCount - 1);
              }
              var vars = "a,b,c,d,e,f,g,h,i,j,k,l";

              function createProxy(func, proxyLength) { // Retain the function length:
                var p;
                if (proxyLength) {
                  eval("p = (function proxy(" + vars.substring(0, proxyLength * 2 - 1) + // eslint-disable-line no-eval
                    ") { return p.invoke(func, this, slice.call(arguments)); });");
                } else {
                  p = function proxy() {
                    return p.invoke(func, this, slice.call(arguments));
                  };
                }
                p.isSinonProxy = true;
                return p;
              }
              var uuid = 0; // Public API
              var spyApi = {
                reset: function reset() {
                  if (this.invoking) {
                    var err = new Error("Cannot reset Sinon function while invoking it. " + "Move the call to .reset outside of the callback.");
                    err.name = "InvalidResetException";
                    throw err;
                  }
                  this.called = false;
                  this.notCalled = true;
                  this.calledOnce = false;
                  this.calledTwice = false;
                  this.calledThrice = false;
                  this.callCount = 0;
                  this.firstCall = null;
                  this.secondCall = null;
                  this.thirdCall = null;
                  this.lastCall = null;
                  this.args = [];
                  this.returnValues = [];
                  this.thisValues = [];
                  this.exceptions = [];
                  this.callIds = [];
                  this.stacks = [];
                  if (this.fakes) {
                    for (var i = 0; i < this.fakes.length; i++) {
                      this.fakes[i].reset();
                    }
                  }
                  return this;
                },
                create: function create(func, spyLength) {
                  var name;
                  if (typeof func !== "function") {
                    func = function () {};
                  } else {
                    name = sinon.functionName(func);
                  }
                  if (!spyLength) {
                    spyLength = func.length;
                  }
                  var proxy = createProxy(func, spyLength);
                  sinon.extend(proxy, spy);
                  delete proxy.create;
                  sinon.extend(proxy, func);
                  proxy.reset();
                  proxy.prototype = func.prototype;
                  proxy.displayName = name || "spy";
                  proxy.toString = sinon.functionToString;
                  proxy.instantiateFake = sinon.spy.create;
                  proxy.id = "spy#" + uuid++;
                  return proxy;
                },
                invoke: function invoke(func, thisValue, args) {
                  var matching = matchingFake(this.fakes, args);
                  var exception, returnValue;
                  incrementCallCount.call(this);
                  push.call(this.thisValues, thisValue);
                  push.call(this.args, args);
                  push.call(this.callIds, callId++); // Make call properties available from within the spied function:
                  createCallProperties.call(this);
                  try {
                    this.invoking = true;
                    if (matching) {
                      returnValue = matching.invoke(func, thisValue, args);
                    } else {
                      returnValue = (this.func || func).apply(thisValue, args);
                    }
                    var thisCall = this.getCall(this.callCount - 1);
                    if (thisCall.calledWithNew() && typeof returnValue !== "object") {
                      returnValue = thisValue;
                    }
                  } catch (e) {
                    exception = e;
                  } finally {
                    delete this.invoking;
                  }
                  push.call(this.exceptions, exception);
                  push.call(this.returnValues, returnValue);
                  push.call(this.stacks, new Error().stack); // Make return value and exception available in the calls:
                  createCallProperties.call(this);
                  if (exception !== undefined) {
                    throw exception;
                  }
                  return returnValue;
                },
                named: function named(name) {
                  this.displayName = name;
                  return this;
                },
                getCall: function getCall(i) {
                  if (i < 0 || i >= this.callCount) {
                    return null;
                  }
                  return sinon.spyCall(this, this.thisValues[i], this.args[i], this.returnValues[i], this.exceptions[i], this.callIds[i], this.stacks[i]);
                },
                getCalls: function getCalls() {
                  var calls = [];
                  var i;
                  for (i = 0; i < this.callCount; i++) {
                    calls.push(this.getCall(i));
                  }
                  return calls;
                },
                calledBefore: function calledBefore(spyFn) {
                  if (!this.called) {
                    return false;
                  }
                  if (!spyFn.called) {
                    return true;
                  }
                  return this.callIds[0] < spyFn.callIds[spyFn.callIds.length - 1];
                },
                calledAfter: function calledAfter(spyFn) {
                  if (!this.called || !spyFn.called) {
                    return false;
                  }
                  return this.callIds[this.callCount - 1] > spyFn.callIds[spyFn.callCount - 1];
                },
                withArgs: function withArgs() {
                  var args = slice.call(arguments);
                  if (this.fakes) {
                    var match = matchingFake(this.fakes, args, true);
                    if (match) {
                      return match;
                    }
                  } else {
                    this.fakes = [];
                  }
                  var original = this;
                  var fake = this.instantiateFake();
                  fake.matchingAguments = args;
                  fake.parent = this;
                  push.call(this.fakes, fake);
                  fake.withArgs = function () {
                    return original.withArgs.apply(original, arguments);
                  };
                  for (var i = 0; i < this.args.length; i++) {
                    if (fake.matches(this.args[i])) {
                      incrementCallCount.call(fake);
                      push.call(fake.thisValues, this.thisValues[i]);
                      push.call(fake.args, this.args[i]);
                      push.call(fake.returnValues, this.returnValues[i]);
                      push.call(fake.exceptions, this.exceptions[i]);
                      push.call(fake.callIds, this.callIds[i]);
                    }
                  }
                  createCallProperties.call(fake);
                  return fake;
                },
                matches: function matches(args, strict) {
                  var margs = this.matchingAguments;
                  if (margs.length <= args.length && sinon.deepEqual(margs, args.slice(0, margs.length))) {
                    return !strict || margs.length === args.length;
                  }
                },
                printf: function printf(format) {
                  var spyInstance = this;
                  var args = slice.call(arguments, 1);
                  var formatter;
                  return (format || "").replace(/%(.)/g, function (match, specifyer) {
                    formatter = spyApi.formatters[specifyer];
                    if (typeof formatter === "function") {
                      return formatter.call(null, spyInstance, args);
                    } else if (!isNaN(parseInt(specifyer, 10))) {
                      return sinon.format(args[specifyer - 1]);
                    }
                    return "%" + specifyer;
                  });
                }
              };

              function delegateToCalls(method, matchAny, actual, notCalled) {
                spyApi[method] = function () {
                  if (!this.called) {
                    if (notCalled) {
                      return notCalled.apply(this, arguments);
                    }
                    return false;
                  }
                  var currentCall;
                  var matches = 0;
                  for (var i = 0, l = this.callCount; i < l; i += 1) {
                    currentCall = this.getCall(i);
                    if (currentCall[actual || method].apply(currentCall, arguments)) {
                      matches += 1;
                      if (matchAny) {
                        return true;
                      }
                    }
                  }
                  return matches === this.callCount;
                };
              }
              delegateToCalls("calledOn", true);
              delegateToCalls("alwaysCalledOn", false, "calledOn");
              delegateToCalls("calledWith", true);
              delegateToCalls("calledWithMatch", true);
              delegateToCalls("alwaysCalledWith", false, "calledWith");
              delegateToCalls("alwaysCalledWithMatch", false, "calledWithMatch");
              delegateToCalls("calledWithExactly", true);
              delegateToCalls("alwaysCalledWithExactly", false, "calledWithExactly");
              delegateToCalls("neverCalledWith", false, "notCalledWith", function () {
                return true;
              });
              delegateToCalls("neverCalledWithMatch", false, "notCalledWithMatch", function () {
                return true;
              });
              delegateToCalls("threw", true);
              delegateToCalls("alwaysThrew", false, "threw");
              delegateToCalls("returned", true);
              delegateToCalls("alwaysReturned", false, "returned");
              delegateToCalls("calledWithNew", true);
              delegateToCalls("alwaysCalledWithNew", false, "calledWithNew");
              delegateToCalls("callArg", false, "callArgWith", function () {
                throw new Error(this.toString() + " cannot call arg since it was not yet invoked.");
              });
              spyApi.callArgWith = spyApi.callArg;
              delegateToCalls("callArgOn", false, "callArgOnWith", function () {
                throw new Error(this.toString() + " cannot call arg since it was not yet invoked.");
              });
              spyApi.callArgOnWith = spyApi.callArgOn;
              delegateToCalls("yield", false, "yield", function () {
                throw new Error(this.toString() + " cannot yield since it was not yet invoked.");
              }); // "invokeCallback" is an alias for "yield" since "yield" is invalid in strict mode.
              spyApi.invokeCallback = spyApi['yield'];
              delegateToCalls("yieldOn", false, "yieldOn", function () {
                throw new Error(this.toString() + " cannot yield since it was not yet invoked.");
              });
              delegateToCalls("yieldTo", false, "yieldTo", function (property) {
                throw new Error(this.toString() + " cannot yield to '" + property + "' since it was not yet invoked.");
              });
              delegateToCalls("yieldToOn", false, "yieldToOn", function (property) {
                throw new Error(this.toString() + " cannot yield to '" + property + "' since it was not yet invoked.");
              });
              spyApi.formatters = {
                c: function c(spyInstance) {
                  return sinon.timesInWords(spyInstance.callCount);
                },
                n: function n(spyInstance) {
                  return spyInstance.toString();
                },
                C: function C(spyInstance) {
                  var calls = [];
                  for (var i = 0, l = spyInstance.callCount; i < l; ++i) {
                    var stringifiedCall = "    " + spyInstance.getCall(i).toString();
                    if (/\n/.test(calls[i - 1])) {
                      stringifiedCall = "\n" + stringifiedCall;
                    }
                    push.call(calls, stringifiedCall);
                  }
                  return calls.length > 0 ? "\n" + calls.join("\n") : "";
                },
                t: function t(spyInstance) {
                  var objects = [];
                  for (var i = 0, l = spyInstance.callCount; i < l; ++i) {
                    push.call(objects, sinon.format(spyInstance.thisValues[i]));
                  }
                  return objects.join(", ");
                },
                "*": function _(spyInstance, args) {
                  var formatted = [];
                  for (var i = 0, l = args.length; i < l; ++i) {
                    push.call(formatted, sinon.format(args[i]));
                  }
                  return formatted.join(", ");
                }
              };
              sinon.extend(spy, spyApi);
              spy.spyCall = sinon.spyCall;
              sinon.spy = spy;
              return spy;
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, exports, module) {
              var core = require("./util/core");
              require("./call");
              require("./extend");
              require("./times_in_words");
              require("./format");
              module.exports = makeApi(core);
            }
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon // eslint-disable-line no-undef
          );
          /**
           * @depend util/core.js
           * @depend extend.js
           */
          /**
           * Stub behavior
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @author Tim Fischbach (mail@timfischbach.de)
           * @license BSD
           *
           * Copyright (c) 2010-2013 Christian Johansen
           */
          (function (sinonGlobal) {
            var slice = Array.prototype.slice;
            var join = Array.prototype.join;
            var useLeftMostCallback = -1;
            var useRightMostCallback = -2;
            var nextTick = (function () {
              if (typeof process === "object" && typeof process.nextTick === "function") {
                return process.nextTick;
              }
              if (typeof setImmediate === "function") {
                return setImmediate;
              }
              return function (callback) {
                setTimeout(callback, 0);
              };
            })();

            function throwsException(error, message) {
              if (typeof error === "string") {
                this.exception = new Error(message || "");
                this.exception.name = error;
              } else if (!error) {
                this.exception = new Error("Error");
              } else {
                this.exception = error;
              }
              return this;
            }

            function getCallback(behavior, args) {
              var callArgAt = behavior.callArgAt;
              if (callArgAt >= 0) {
                return args[callArgAt];
              }
              var argumentList;
              if (callArgAt === useLeftMostCallback) {
                argumentList = args;
              }
              if (callArgAt === useRightMostCallback) {
                argumentList = slice.call(args).reverse();
              }
              var callArgProp = behavior.callArgProp;
              for (var i = 0, l = argumentList.length; i < l; ++i) {
                if (!callArgProp && typeof argumentList[i] === "function") {
                  return argumentList[i];
                }
                if (callArgProp && argumentList[i] && typeof argumentList[i][callArgProp] === "function") {
                  return argumentList[i][callArgProp];
                }
              }
              return null;
            }

            function makeApi(sinon) {
              function getCallbackError(behavior, func, args) {
                if (behavior.callArgAt < 0) {
                  var msg;
                  if (behavior.callArgProp) {
                    msg = sinon.functionName(behavior.stub) + " expected to yield to '" + behavior.callArgProp + "', but no object with such a property was passed.";
                  } else {
                    msg = sinon.functionName(behavior.stub) + " expected to yield, but no callback was passed.";
                  }
                  if (args.length > 0) {
                    msg += " Received [" + join.call(args, ", ") + "]";
                  }
                  return msg;
                }
                return "argument at index " + behavior.callArgAt + " is not a function: " + func;
              }

              function callCallback(behavior, args) {
                if (typeof behavior.callArgAt === "number") {
                  var func = getCallback(behavior, args);
                  if (typeof func !== "function") {
                    throw new TypeError(getCallbackError(behavior, func, args));
                  }
                  if (behavior.callbackAsync) {
                    nextTick(function () {
                      func.apply(behavior.callbackContext, behavior.callbackArguments);
                    });
                  } else {
                    func.apply(behavior.callbackContext, behavior.callbackArguments);
                  }
                }
              }
              var proto = {
                create: function create(stub) {
                  var behavior = sinon.extend({}, sinon.behavior);
                  delete behavior.create;
                  behavior.stub = stub;
                  return behavior;
                },
                isPresent: function isPresent() {
                  return typeof this.callArgAt === "number" || this.exception || typeof this.returnArgAt === "number" || this.returnThis || this.returnValueDefined;
                },
                invoke: function invoke(context, args) {
                  callCallback(this, args);
                  if (this.exception) {
                    throw this.exception;
                  } else if (typeof this.returnArgAt === "number") {
                    return args[this.returnArgAt];
                  } else if (this.returnThis) {
                    return context;
                  }
                  return this.returnValue;
                },
                onCall: function onCall(index) {
                  return this.stub.onCall(index);
                },
                onFirstCall: function onFirstCall() {
                  return this.stub.onFirstCall();
                },
                onSecondCall: function onSecondCall() {
                  return this.stub.onSecondCall();
                },
                onThirdCall: function onThirdCall() {
                  return this.stub.onThirdCall();
                },
                withArgs: function withArgs() /* arguments */ {
                  throw new Error("Defining a stub by invoking \"stub.onCall(...).withArgs(...)\" " + "is not supported. Use \"stub.withArgs(...).onCall(...)\" " + "to define sequential behavior for calls with certain arguments.");
                },
                callsArg: function callsArg(pos) {
                  if (typeof pos !== "number") {
                    throw new TypeError("argument index is not number");
                  }
                  this.callArgAt = pos;
                  this.callbackArguments = [];
                  this.callbackContext = undefined;
                  this.callArgProp = undefined;
                  this.callbackAsync = false;
                  return this;
                },
                callsArgOn: function callsArgOn(pos, context) {
                  if (typeof pos !== "number") {
                    throw new TypeError("argument index is not number");
                  }
                  if (typeof context !== "object") {
                    throw new TypeError("argument context is not an object");
                  }
                  this.callArgAt = pos;
                  this.callbackArguments = [];
                  this.callbackContext = context;
                  this.callArgProp = undefined;
                  this.callbackAsync = false;
                  return this;
                },
                callsArgWith: function callsArgWith(pos) {
                  if (typeof pos !== "number") {
                    throw new TypeError("argument index is not number");
                  }
                  this.callArgAt = pos;
                  this.callbackArguments = slice.call(arguments, 1);
                  this.callbackContext = undefined;
                  this.callArgProp = undefined;
                  this.callbackAsync = false;
                  return this;
                },
                callsArgOnWith: function callsArgWith(pos, context) {
                  if (typeof pos !== "number") {
                    throw new TypeError("argument index is not number");
                  }
                  if (typeof context !== "object") {
                    throw new TypeError("argument context is not an object");
                  }
                  this.callArgAt = pos;
                  this.callbackArguments = slice.call(arguments, 2);
                  this.callbackContext = context;
                  this.callArgProp = undefined;
                  this.callbackAsync = false;
                  return this;
                },
                yields: function yields() {
                  this.callArgAt = useLeftMostCallback;
                  this.callbackArguments = slice.call(arguments, 0);
                  this.callbackContext = undefined;
                  this.callArgProp = undefined;
                  this.callbackAsync = false;
                  return this;
                },
                yieldsRight: function yieldsRight() {
                  this.callArgAt = useRightMostCallback;
                  this.callbackArguments = slice.call(arguments, 0);
                  this.callbackContext = undefined;
                  this.callArgProp = undefined;
                  this.callbackAsync = false;
                  return this;
                },
                yieldsOn: function yieldsOn(context) {
                  if (typeof context !== "object") {
                    throw new TypeError("argument context is not an object");
                  }
                  this.callArgAt = useLeftMostCallback;
                  this.callbackArguments = slice.call(arguments, 1);
                  this.callbackContext = context;
                  this.callArgProp = undefined;
                  this.callbackAsync = false;
                  return this;
                },
                yieldsTo: function yieldsTo(prop) {
                  this.callArgAt = useLeftMostCallback;
                  this.callbackArguments = slice.call(arguments, 1);
                  this.callbackContext = undefined;
                  this.callArgProp = prop;
                  this.callbackAsync = false;
                  return this;
                },
                yieldsToOn: function yieldsToOn(prop, context) {
                  if (typeof context !== "object") {
                    throw new TypeError("argument context is not an object");
                  }
                  this.callArgAt = useLeftMostCallback;
                  this.callbackArguments = slice.call(arguments, 2);
                  this.callbackContext = context;
                  this.callArgProp = prop;
                  this.callbackAsync = false;
                  return this;
                },
                throws: throwsException,
                throwsException: throwsException,
                returns: function returns(value) {
                  this.returnValue = value;
                  this.returnValueDefined = true;
                  this.exception = undefined;
                  return this;
                },
                returnsArg: function returnsArg(pos) {
                  if (typeof pos !== "number") {
                    throw new TypeError("argument index is not number");
                  }
                  this.returnArgAt = pos;
                  return this;
                },
                returnsThis: function returnsThis() {
                  this.returnThis = true;
                  return this;
                }
              };

              function createAsyncVersion(syncFnName) {
                return function () {
                  var result = this[syncFnName].apply(this, arguments);
                  this.callbackAsync = true;
                  return result;
                };
              } // create asynchronous versions of callsArg* and yields* methods
              for (var method in proto) { // need to avoid creating anotherasync versions of the newly added async methods
                if (proto.hasOwnProperty(method) && method.match(/^(callsArg|yields)/) && !method.match(/Async/)) {
                  proto[method + "Async"] = createAsyncVersion(method);
                }
              }
              sinon.behavior = proto;
              return proto;
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, exports, module) {
              var sinon = require("./util/core");
              require("./extend");
              module.exports = makeApi(sinon);
            }
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon // eslint-disable-line no-undef
          );
          /**
           * @depend util/core.js
           */
          (function (sinonGlobal) {
            function makeApi(sinon) {
              function walkInternal(obj, iterator, context, originalObj, seen) {
                var proto, prop;
                if (typeof Object.getOwnPropertyNames !== "function") { // We explicitly want to enumerate through all of the prototype's properties
                  // in this case, therefore we deliberately leave out an own property check.
                  /* eslint-disable guard-for-in */
                  for (prop in obj) {
                    iterator.call(context, obj[prop], prop, obj);
                  } /* eslint-enable guard-for-in */
                  return;
                }
                Object.getOwnPropertyNames(obj).forEach(function (k) {
                  if (!seen[k]) {
                    seen[k] = true;
                    var target = typeof Object.getOwnPropertyDescriptor(obj, k).get === "function" ? originalObj : obj;
                    iterator.call(context, target[k], k, target);
                  }
                });
                proto = Object.getPrototypeOf(obj);
                if (proto) {
                  walkInternal(proto, iterator, context, originalObj, seen);
                }
              }
              /* Public: walks the prototype chain of an object and iterates over every own property
               * name encountered. The iterator is called in the same fashion that Array.prototype.forEach
               * works, where it is passed the value, key, and own object as the 1st, 2nd, and 3rd positional
               * argument, respectively. In cases where Object.getOwnPropertyNames is not available, walk will
               * default to using a simple for..in loop.
               *
               * obj - The object to walk the prototype chain for.
               * iterator - The function to be called on each pass of the walk.
               * context - (Optional) When given, the iterator will be called with this object as the receiver.
               */
              function walk(obj, iterator, context) {
                return walkInternal(obj, iterator, context, obj, {});
              }
              sinon.walk = walk;
              return sinon.walk;
            }

            function loadDependencies(require, exports, module) {
              var sinon = require("./util/core");
              module.exports = makeApi(sinon);
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon // eslint-disable-line no-undef
          );
          /**
           * @depend util/core.js
           * @depend extend.js
           * @depend spy.js
           * @depend behavior.js
           * @depend walk.js
           */
          /**
           * Stub functions
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2013 Christian Johansen
           */
          (function (sinonGlobal) {
            function makeApi(sinon) {
              function stub(object, property, func) {
                if (!!func && typeof func !== "function" && typeof func !== "object") {
                  throw new TypeError("Custom stub should be a function or a property descriptor");
                }
                var wrapper;
                if (func) {
                  if (typeof func === "function") {
                    wrapper = sinon.spy && sinon.spy.create ? sinon.spy.create(func) : func;
                  } else {
                    wrapper = func;
                    if (sinon.spy && sinon.spy.create) {
                      var types = sinon.objectKeys(wrapper);
                      for (var i = 0; i < types.length; i++) {
                        wrapper[types[i]] = sinon.spy.create(wrapper[types[i]]);
                      }
                    }
                  }
                } else {
                  var stubLength = 0;
                  if (typeof object === "object" && typeof object[property] === "function") {
                    stubLength = object[property].length;
                  }
                  wrapper = stub.create(stubLength);
                }
                if (!object && typeof property === "undefined") {
                  return sinon.stub.create();
                }
                if (typeof property === "undefined" && typeof object === "object") {
                  sinon.walk(object || {}, function (value, prop, propOwner) { // we don't want to stub things like toString(), valueOf(), etc. so we only stub if the object
                    // is not Object.prototype
                    if (propOwner !== Object.prototype && prop !== "constructor" && typeof sinon.getPropertyDescriptor(propOwner, prop).value === "function") {
                      stub(object, prop);
                    }
                  });
                  return object;
                }
                return sinon.wrapMethod(object, property, wrapper);
              } /*eslint-disable no-use-before-define*/
              function getParentBehaviour(stubInstance) {
                return stubInstance.parent && getCurrentBehavior(stubInstance.parent);
              }

              function getDefaultBehavior(stubInstance) {
                return stubInstance.defaultBehavior || getParentBehaviour(stubInstance) || sinon.behavior.create(stubInstance);
              }

              function getCurrentBehavior(stubInstance) {
                var behavior = stubInstance.behaviors[stubInstance.callCount - 1];
                return behavior && behavior.isPresent() ? behavior : getDefaultBehavior(stubInstance);
              } /*eslint-enable no-use-before-define*/
              var uuid = 0;
              var proto = {
                create: function create(stubLength) {
                  var _functionStub = function functionStub() {
                    return getCurrentBehavior(_functionStub).invoke(this, arguments);
                  };
                  _functionStub.id = "stub#" + uuid++;
                  var orig = _functionStub;
                  _functionStub = sinon.spy.create(_functionStub, stubLength);
                  _functionStub.func = orig;
                  sinon.extend(_functionStub, stub);
                  _functionStub.instantiateFake = sinon.stub.create;
                  _functionStub.displayName = "stub";
                  _functionStub.toString = sinon.functionToString;
                  _functionStub.defaultBehavior = null;
                  _functionStub.behaviors = [];
                  return _functionStub;
                },
                resetBehavior: function resetBehavior() {
                  var i;
                  this.defaultBehavior = null;
                  this.behaviors = [];
                  delete this.returnValue;
                  delete this.returnArgAt;
                  this.returnThis = false;
                  if (this.fakes) {
                    for (i = 0; i < this.fakes.length; i++) {
                      this.fakes[i].resetBehavior();
                    }
                  }
                },
                onCall: function onCall(index) {
                  if (!this.behaviors[index]) {
                    this.behaviors[index] = sinon.behavior.create(this);
                  }
                  return this.behaviors[index];
                },
                onFirstCall: function onFirstCall() {
                  return this.onCall(0);
                },
                onSecondCall: function onSecondCall() {
                  return this.onCall(1);
                },
                onThirdCall: function onThirdCall() {
                  return this.onCall(2);
                }
              };

              function createBehavior(behaviorMethod) {
                return function () {
                  this.defaultBehavior = this.defaultBehavior || sinon.behavior.create(this);
                  this.defaultBehavior[behaviorMethod].apply(this.defaultBehavior, arguments);
                  return this;
                };
              }
              for (var method in sinon.behavior) {
                if (sinon.behavior.hasOwnProperty(method) && !proto.hasOwnProperty(method) && method !== "create" && method !== "withArgs" && method !== "invoke") {
                  proto[method] = createBehavior(method);
                }
              }
              sinon.extend(stub, proto);
              sinon.stub = stub;
              return stub;
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, exports, module) {
              var core = require("./util/core");
              require("./behavior");
              require("./spy");
              require("./extend");
              module.exports = makeApi(core);
            }
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon // eslint-disable-line no-undef
          );
          /**
           * @depend times_in_words.js
           * @depend util/core.js
           * @depend call.js
           * @depend extend.js
           * @depend match.js
           * @depend spy.js
           * @depend stub.js
           * @depend format.js
           */
          /**
           * Mock functions.
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2013 Christian Johansen
           */
          (function (sinonGlobal) {
            function makeApi(sinon) {
              var push = [].push;
              var match = sinon.match;

              function mock(object) { // if (typeof console !== undefined && console.warn) {
                //     console.warn("mock will be removed from Sinon.JS v2.0");
                // }
                if (!object) {
                  return sinon.expectation.create("Anonymous mock");
                }
                return mock.create(object);
              }

              function each(collection, callback) {
                if (!collection) {
                  return;
                }
                for (var i = 0, l = collection.length; i < l; i += 1) {
                  callback(collection[i]);
                }
              }

              function arrayEquals(arr1, arr2, compareLength) {
                if (compareLength && arr1.length !== arr2.length) {
                  return false;
                }
                for (var i = 0, l = arr1.length; i < l; i++) {
                  if (!sinon.deepEqual(arr1[i], arr2[i])) {
                    return false;
                  }
                }
                return true;
              }
              sinon.extend(mock, {
                create: function create(object) {
                  if (!object) {
                    throw new TypeError("object is null");
                  }
                  var mockObject = sinon.extend({}, mock);
                  mockObject.object = object;
                  delete mockObject.create;
                  return mockObject;
                },
                expects: function expects(method) {
                  if (!method) {
                    throw new TypeError("method is falsy");
                  }
                  if (!this.expectations) {
                    this.expectations = {};
                    this.proxies = [];
                  }
                  if (!this.expectations[method]) {
                    this.expectations[method] = [];
                    var mockObject = this;
                    sinon.wrapMethod(this.object, method, function () {
                      return mockObject.invokeMethod(method, this, arguments);
                    });
                    push.call(this.proxies, method);
                  }
                  var expectation = sinon.expectation.create(method);
                  push.call(this.expectations[method], expectation);
                  return expectation;
                },
                restore: function restore() {
                  var object = this.object;
                  each(this.proxies, function (proxy) {
                    if (typeof object[proxy].restore === "function") {
                      object[proxy].restore();
                    }
                  });
                },
                verify: function verify() {
                  var expectations = this.expectations || {};
                  var messages = [];
                  var met = [];
                  each(this.proxies, function (proxy) {
                    each(expectations[proxy], function (expectation) {
                      if (!expectation.met()) {
                        push.call(messages, expectation.toString());
                      } else {
                        push.call(met, expectation.toString());
                      }
                    });
                  });
                  this.restore();
                  if (messages.length > 0) {
                    sinon.expectation.fail(messages.concat(met).join("\n"));
                  } else if (met.length > 0) {
                    sinon.expectation.pass(messages.concat(met).join("\n"));
                  }
                  return true;
                },
                invokeMethod: function invokeMethod(method, thisValue, args) {
                  var expectations = this.expectations && this.expectations[method] ? this.expectations[method] : [];
                  var expectationsWithMatchingArgs = [];
                  var currentArgs = args || [];
                  var i, available;
                  for (i = 0; i < expectations.length; i += 1) {
                    var expectedArgs = expectations[i].expectedArguments || [];
                    if (arrayEquals(expectedArgs, currentArgs, expectations[i].expectsExactArgCount)) {
                      expectationsWithMatchingArgs.push(expectations[i]);
                    }
                  }
                  for (i = 0; i < expectationsWithMatchingArgs.length; i += 1) {
                    if (!expectationsWithMatchingArgs[i].met() && expectationsWithMatchingArgs[i].allowsCall(thisValue, args)) {
                      return expectationsWithMatchingArgs[i].apply(thisValue, args);
                    }
                  }
                  var messages = [];
                  var exhausted = 0;
                  for (i = 0; i < expectationsWithMatchingArgs.length; i += 1) {
                    if (expectationsWithMatchingArgs[i].allowsCall(thisValue, args)) {
                      available = available || expectationsWithMatchingArgs[i];
                    } else {
                      exhausted += 1;
                    }
                  }
                  if (available && exhausted === 0) {
                    return available.apply(thisValue, args);
                  }
                  for (i = 0; i < expectations.length; i += 1) {
                    push.call(messages, "    " + expectations[i].toString());
                  }
                  messages.unshift("Unexpected call: " + sinon.spyCall.toString.call({
                    proxy: method,
                    args: args
                  }));
                  sinon.expectation.fail(messages.join("\n"));
                }
              });
              var times = sinon.timesInWords;
              var slice = Array.prototype.slice;

              function callCountInWords(callCount) {
                if (callCount === 0) {
                  return "never called";
                }
                return "called " + times(callCount);
              }

              function expectedCallCountInWords(expectation) {
                var min = expectation.minCalls;
                var max = expectation.maxCalls;
                if (typeof min === "number" && typeof max === "number") {
                  var str = times(min);
                  if (min !== max) {
                    str = "at least " + str + " and at most " + times(max);
                  }
                  return str;
                }
                if (typeof min === "number") {
                  return "at least " + times(min);
                }
                return "at most " + times(max);
              }

              function receivedMinCalls(expectation) {
                var hasMinLimit = typeof expectation.minCalls === "number";
                return !hasMinLimit || expectation.callCount >= expectation.minCalls;
              }

              function receivedMaxCalls(expectation) {
                if (typeof expectation.maxCalls !== "number") {
                  return false;
                }
                return expectation.callCount === expectation.maxCalls;
              }

              function verifyMatcher(possibleMatcher, arg) {
                var isMatcher = match && match.isMatcher(possibleMatcher);
                return isMatcher && possibleMatcher.test(arg) || true;
              }
              sinon.expectation = {
                minCalls: 1,
                maxCalls: 1,
                create: function create(methodName) {
                  var expectation = sinon.extend(sinon.stub.create(), sinon.expectation);
                  delete expectation.create;
                  expectation.method = methodName;
                  return expectation;
                },
                invoke: function invoke(func, thisValue, args) {
                  this.verifyCallAllowed(thisValue, args);
                  return sinon.spy.invoke.apply(this, arguments);
                },
                atLeast: function atLeast(num) {
                  if (typeof num !== "number") {
                    throw new TypeError("'" + num + "' is not number");
                  }
                  if (!this.limitsSet) {
                    this.maxCalls = null;
                    this.limitsSet = true;
                  }
                  this.minCalls = num;
                  return this;
                },
                atMost: function atMost(num) {
                  if (typeof num !== "number") {
                    throw new TypeError("'" + num + "' is not number");
                  }
                  if (!this.limitsSet) {
                    this.minCalls = null;
                    this.limitsSet = true;
                  }
                  this.maxCalls = num;
                  return this;
                },
                never: function never() {
                  return this.exactly(0);
                },
                once: function once() {
                  return this.exactly(1);
                },
                twice: function twice() {
                  return this.exactly(2);
                },
                thrice: function thrice() {
                  return this.exactly(3);
                },
                exactly: function exactly(num) {
                  if (typeof num !== "number") {
                    throw new TypeError("'" + num + "' is not a number");
                  }
                  this.atLeast(num);
                  return this.atMost(num);
                },
                met: function met() {
                  return !this.failed && receivedMinCalls(this);
                },
                verifyCallAllowed: function verifyCallAllowed(thisValue, args) {
                  if (receivedMaxCalls(this)) {
                    this.failed = true;
                    sinon.expectation.fail(this.method + " already called " + times(this.maxCalls));
                  }
                  if ("expectedThis" in this && this.expectedThis !== thisValue) {
                    sinon.expectation.fail(this.method + " called with " + thisValue + " as thisValue, expected " + this.expectedThis);
                  }
                  if (!("expectedArguments" in this)) {
                    return;
                  }
                  if (!args) {
                    sinon.expectation.fail(this.method + " received no arguments, expected " + sinon.format(this.expectedArguments));
                  }
                  if (args.length < this.expectedArguments.length) {
                    sinon.expectation.fail(this.method + " received too few arguments (" + sinon.format(args) + "), expected " + sinon.format(this.expectedArguments));
                  }
                  if (this.expectsExactArgCount && args.length !== this.expectedArguments.length) {
                    sinon.expectation.fail(this.method + " received too many arguments (" + sinon.format(args) + "), expected " + sinon.format(this.expectedArguments));
                  }
                  for (var i = 0, l = this.expectedArguments.length; i < l; i += 1) {
                    if (!verifyMatcher(this.expectedArguments[i], args[i])) {
                      sinon.expectation.fail(this.method + " received wrong arguments " + sinon.format(args) + ", didn't match " + this.expectedArguments.toString());
                    }
                    if (!sinon.deepEqual(this.expectedArguments[i], args[i])) {
                      sinon.expectation.fail(this.method + " received wrong arguments " + sinon.format(args) + ", expected " + sinon.format(this.expectedArguments));
                    }
                  }
                },
                allowsCall: function allowsCall(thisValue, args) {
                  if (this.met() && receivedMaxCalls(this)) {
                    return false;
                  }
                  if ("expectedThis" in this && this.expectedThis !== thisValue) {
                    return false;
                  }
                  if (!("expectedArguments" in this)) {
                    return true;
                  }
                  args = args || [];
                  if (args.length < this.expectedArguments.length) {
                    return false;
                  }
                  if (this.expectsExactArgCount && args.length !== this.expectedArguments.length) {
                    return false;
                  }
                  for (var i = 0, l = this.expectedArguments.length; i < l; i += 1) {
                    if (!verifyMatcher(this.expectedArguments[i], args[i])) {
                      return false;
                    }
                    if (!sinon.deepEqual(this.expectedArguments[i], args[i])) {
                      return false;
                    }
                  }
                  return true;
                },
                withArgs: function withArgs() {
                  this.expectedArguments = slice.call(arguments);
                  return this;
                },
                withExactArgs: function withExactArgs() {
                  this.withArgs.apply(this, arguments);
                  this.expectsExactArgCount = true;
                  return this;
                },
                on: function on(thisValue) {
                  this.expectedThis = thisValue;
                  return this;
                },
                toString: function toString() {
                  var args = (this.expectedArguments || []).slice();
                  if (!this.expectsExactArgCount) {
                    push.call(args, "[...]");
                  }
                  var callStr = sinon.spyCall.toString.call({
                    proxy: this.method || "anonymous mock expectation",
                    args: args
                  });
                  var message = callStr.replace(", [...", "[, ...") + " " + expectedCallCountInWords(this);
                  if (this.met()) {
                    return "Expectation met: " + message;
                  }
                  return "Expected " + message + " (" + callCountInWords(this.callCount) + ")";
                },
                verify: function verify() {
                  if (!this.met()) {
                    sinon.expectation.fail(this.toString());
                  } else {
                    sinon.expectation.pass(this.toString());
                  }
                  return true;
                },
                pass: function pass(message) {
                  sinon.assert.pass(message);
                },
                fail: function fail(message) {
                  var exception = new Error(message);
                  exception.name = "ExpectationError";
                  throw exception;
                }
              };
              sinon.mock = mock;
              return mock;
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, exports, module) {
              var sinon = require("./util/core");
              require("./times_in_words");
              require("./call");
              require("./extend");
              require("./match");
              require("./spy");
              require("./stub");
              require("./format");
              module.exports = makeApi(sinon);
            }
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon // eslint-disable-line no-undef
          );
          /**
           * @depend util/core.js
           * @depend spy.js
           * @depend stub.js
           * @depend mock.js
           */
          /**
           * Collections of stubs, spies and mocks.
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2013 Christian Johansen
           */
          (function (sinonGlobal) {
            var push = [].push;
            var hasOwnProperty = Object.prototype.hasOwnProperty;

            function getFakes(fakeCollection) {
              if (!fakeCollection.fakes) {
                fakeCollection.fakes = [];
              }
              return fakeCollection.fakes;
            }

            function each(fakeCollection, method) {
              var fakes = getFakes(fakeCollection);
              for (var i = 0, l = fakes.length; i < l; i += 1) {
                if (typeof fakes[i][method] === "function") {
                  fakes[i][method]();
                }
              }
            }

            function compact(fakeCollection) {
              var fakes = getFakes(fakeCollection);
              var i = 0;
              while (i < fakes.length) {
                fakes.splice(i, 1);
              }
            }

            function makeApi(sinon) {
              var collection = {
                verify: function resolve() {
                  each(this, "verify");
                },
                restore: function restore() {
                  each(this, "restore");
                  compact(this);
                },
                reset: function restore() {
                  each(this, "reset");
                },
                verifyAndRestore: function verifyAndRestore() {
                  var exception;
                  try {
                    this.verify();
                  } catch (e) {
                    exception = e;
                  }
                  this.restore();
                  if (exception) {
                    throw exception;
                  }
                },
                add: function add(fake) {
                  push.call(getFakes(this), fake);
                  return fake;
                },
                spy: function spy() {
                  return this.add(sinon.spy.apply(sinon, arguments));
                },
                stub: function stub(object, property, value) {
                  if (property) {
                    var original = object[property];
                    if (typeof original !== "function") {
                      if (!hasOwnProperty.call(object, property)) {
                        throw new TypeError("Cannot stub non-existent own property " + property);
                      }
                      object[property] = value;
                      return this.add({
                        restore: function restore() {
                          object[property] = original;
                        }
                      });
                    }
                  }
                  if (!property && !!object && typeof object === "object") {
                    var stubbedObj = sinon.stub.apply(sinon, arguments);
                    for (var prop in stubbedObj) {
                      if (typeof stubbedObj[prop] === "function") {
                        this.add(stubbedObj[prop]);
                      }
                    }
                    return stubbedObj;
                  }
                  return this.add(sinon.stub.apply(sinon, arguments));
                },
                mock: function mock() {
                  return this.add(sinon.mock.apply(sinon, arguments));
                },
                inject: function inject(obj) {
                  var col = this;
                  obj.spy = function () {
                    return col.spy.apply(col, arguments);
                  };
                  obj.stub = function () {
                    return col.stub.apply(col, arguments);
                  };
                  obj.mock = function () {
                    return col.mock.apply(col, arguments);
                  };
                  return obj;
                }
              };
              sinon.collection = collection;
              return collection;
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, exports, module) {
              var sinon = require("./util/core");
              require("./mock");
              require("./spy");
              require("./stub");
              module.exports = makeApi(sinon);
            }
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon // eslint-disable-line no-undef
          );
          /**
           * Fake timer API
           * setTimeout
           * setInterval
           * clearTimeout
           * clearInterval
           * tick
           * reset
           * Date
           *
           * Inspired by jsUnitMockTimeOut from JsUnit
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2013 Christian Johansen
           */
          (function () {
            function makeApi(s, lol) { /*global lolex */
              var llx = typeof lolex !== "undefined" ? lolex : lol;
              s.useFakeTimers = function () {
                var now;
                var methods = Array.prototype.slice.call(arguments);
                if (typeof methods[0] === "string") {
                  now = 0;
                } else {
                  now = methods.shift();
                }
                var clock = llx.install(now || 0, methods);
                clock.restore = clock.uninstall;
                return clock;
              };
              s.clock = {
                create: function create(now) {
                  return llx.createClock(now);
                }
              };
              s.timers = {
                setTimeout: setTimeout,
                clearTimeout: clearTimeout,
                setImmediate: typeof setImmediate !== "undefined" ? setImmediate : undefined,
                clearImmediate: typeof clearImmediate !== "undefined" ? clearImmediate : undefined,
                setInterval: setInterval,
                clearInterval: clearInterval,
                Date: Date
              };
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, epxorts, module, lolex) {
              var core = require("./core");
              makeApi(core, lolex);
              module.exports = core;
            }
            if (isAMD) {
              define(loadDependencies);
            } else if (isNode) {
              loadDependencies(require, module.exports, module, require("lolex"));
            } else {
              makeApi(sinon); // eslint-disable-line no-undef
            }
          })();
          /**
           * Minimal Event interface implementation
           *
           * Original implementation by Sven Fuchs: https://gist.github.com/995028
           * Modifications and tests by Christian Johansen.
           *
           * @author Sven Fuchs (svenfuchs@artweb-design.de)
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2011 Sven Fuchs, Christian Johansen
           */
          if (typeof sinon === "undefined") {
            this.sinon = {};
          }(function () {
            var push = [].push;

            function makeApi(sinon) {
              sinon.Event = function Event(type, bubbles, cancelable, target) {
                this.initEvent(type, bubbles, cancelable, target);
              };
              sinon.Event.prototype = {
                initEvent: function initEvent(type, bubbles, cancelable, target) {
                  this.type = type;
                  this.bubbles = bubbles;
                  this.cancelable = cancelable;
                  this.target = target;
                },
                stopPropagation: function stopPropagation() {},
                preventDefault: function preventDefault() {
                  this.defaultPrevented = true;
                }
              };
              sinon.ProgressEvent = function ProgressEvent(type, progressEventRaw, target) {
                this.initEvent(type, false, false, target);
                this.loaded = progressEventRaw.loaded || null;
                this.total = progressEventRaw.total || null;
                this.lengthComputable = !!progressEventRaw.total;
              };
              sinon.ProgressEvent.prototype = new sinon.Event();
              sinon.ProgressEvent.prototype.constructor = sinon.ProgressEvent;
              sinon.CustomEvent = function CustomEvent(type, customData, target) {
                this.initEvent(type, false, false, target);
                this.detail = customData.detail || null;
              };
              sinon.CustomEvent.prototype = new sinon.Event();
              sinon.CustomEvent.prototype.constructor = sinon.CustomEvent;
              sinon.EventTarget = {
                addEventListener: function addEventListener(event, listener) {
                  this.eventListeners = this.eventListeners || {};
                  this.eventListeners[event] = this.eventListeners[event] || [];
                  push.call(this.eventListeners[event], listener);
                },
                removeEventListener: function removeEventListener(event, listener) {
                  var listeners = this.eventListeners && this.eventListeners[event] || [];
                  for (var i = 0, l = listeners.length; i < l; ++i) {
                    if (listeners[i] === listener) {
                      return listeners.splice(i, 1);
                    }
                  }
                },
                dispatchEvent: function dispatchEvent(event) {
                  var type = event.type;
                  var listeners = this.eventListeners && this.eventListeners[type] || [];
                  for (var i = 0; i < listeners.length; i++) {
                    if (typeof listeners[i] === "function") {
                      listeners[i].call(this, event);
                    } else {
                      listeners[i].handleEvent(event);
                    }
                  }
                  return !!event.defaultPrevented;
                }
              };
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require) {
              var sinon = require("./core");
              makeApi(sinon);
            }
            if (isAMD) {
              define(loadDependencies);
            } else if (isNode) {
              loadDependencies(require);
            } else {
              makeApi(sinon); // eslint-disable-line no-undef
            }
          })();
          /**
           * @depend util/core.js
           */
          /**
           * Logs errors
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2014 Christian Johansen
           */
          (function (sinonGlobal) { // cache a reference to setTimeout, so that our reference won't be stubbed out
            // when using fake timers and errors will still get logged
            // https://github.com/cjohansen/Sinon.JS/issues/381
            var realSetTimeout = setTimeout;

            function makeApi(sinon) {
              function log() {}

              function logError(label, err) {
                var msg = label + " threw exception: ";

                function throwLoggedError() {
                  err.message = msg + err.message;
                  throw err;
                }
                sinon.log(msg + "[" + err.name + "] " + err.message);
                if (err.stack) {
                  sinon.log(err.stack);
                }
                if (logError.useImmediateExceptions) {
                  throwLoggedError();
                } else {
                  logError.setTimeout(throwLoggedError, 0);
                }
              } // When set to true, any errors logged will be thrown immediately;
              // If set to false, the errors will be thrown in separate execution frame.
              logError.useImmediateExceptions = false; // wrap realSetTimeout with something we can stub in tests
              logError.setTimeout = function (func, timeout) {
                realSetTimeout(func, timeout);
              };
              var exports = {};
              exports.log = sinon.log = log;
              exports.logError = sinon.logError = logError;
              return exports;
            }

            function loadDependencies(require, exports, module) {
              var sinon = require("./util/core");
              module.exports = makeApi(sinon);
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon // eslint-disable-line no-undef
          );
          /**
           * @depend core.js
           * @depend ../extend.js
           * @depend event.js
           * @depend ../log_error.js
           */
          /**
           * Fake XDomainRequest object
           */
          if (typeof sinon === "undefined") {
            this.sinon = {};
          } // wrapper for global
          (function (global) {
            var xdr = {
              XDomainRequest: global.XDomainRequest
            };
            xdr.GlobalXDomainRequest = global.XDomainRequest;
            xdr.supportsXDR = typeof xdr.GlobalXDomainRequest !== "undefined";
            xdr.workingXDR = xdr.supportsXDR ? xdr.GlobalXDomainRequest : false;

            function makeApi(sinon) {
              sinon.xdr = xdr;

              function FakeXDomainRequest() {
                this.readyState = FakeXDomainRequest.UNSENT;
                this.requestBody = null;
                this.requestHeaders = {};
                this.status = 0;
                this.timeout = null;
                if (typeof FakeXDomainRequest.onCreate === "function") {
                  FakeXDomainRequest.onCreate(this);
                }
              }

              function verifyState(x) {
                if (x.readyState !== FakeXDomainRequest.OPENED) {
                  throw new Error("INVALID_STATE_ERR");
                }
                if (x.sendFlag) {
                  throw new Error("INVALID_STATE_ERR");
                }
              }

              function verifyRequestSent(x) {
                if (x.readyState === FakeXDomainRequest.UNSENT) {
                  throw new Error("Request not sent");
                }
                if (x.readyState === FakeXDomainRequest.DONE) {
                  throw new Error("Request done");
                }
              }

              function verifyResponseBodyType(body) {
                if (typeof body !== "string") {
                  var error = new Error("Attempted to respond to fake XDomainRequest with " + body + ", which is not a string.");
                  error.name = "InvalidBodyException";
                  throw error;
                }
              }
              sinon.extend(FakeXDomainRequest.prototype, sinon.EventTarget, {
                open: function open(method, url) {
                  this.method = method;
                  this.url = url;
                  this.responseText = null;
                  this.sendFlag = false;
                  this.readyStateChange(FakeXDomainRequest.OPENED);
                },
                readyStateChange: function readyStateChange(state) {
                  this.readyState = state;
                  var eventName = "";
                  switch (this.readyState) {
                  case FakeXDomainRequest.UNSENT:
                    break;
                  case FakeXDomainRequest.OPENED:
                    break;
                  case FakeXDomainRequest.LOADING:
                    if (this.sendFlag) { //raise the progress event
                      eventName = "onprogress";
                    }
                    break;
                  case FakeXDomainRequest.DONE:
                    if (this.isTimeout) {
                      eventName = "ontimeout";
                    } else if (this.errorFlag || this.status < 200 || this.status > 299) {
                      eventName = "onerror";
                    } else {
                      eventName = "onload";
                    }
                    break;
                  } // raising event (if defined)
                  if (eventName) {
                    if (typeof this[eventName] === "function") {
                      try {
                        this[eventName]();
                      } catch (e) {
                        sinon.logError("Fake XHR " + eventName + " handler", e);
                      }
                    }
                  }
                },
                send: function send(data) {
                  verifyState(this);
                  if (!/^(get|head)$/i.test(this.method)) {
                    this.requestBody = data;
                  }
                  this.requestHeaders["Content-Type"] = "text/plain;charset=utf-8";
                  this.errorFlag = false;
                  this.sendFlag = true;
                  this.readyStateChange(FakeXDomainRequest.OPENED);
                  if (typeof this.onSend === "function") {
                    this.onSend(this);
                  }
                },
                abort: function abort() {
                  this.aborted = true;
                  this.responseText = null;
                  this.errorFlag = true;
                  if (this.readyState > sinon.FakeXDomainRequest.UNSENT && this.sendFlag) {
                    this.readyStateChange(sinon.FakeXDomainRequest.DONE);
                    this.sendFlag = false;
                  }
                },
                setResponseBody: function setResponseBody(body) {
                  verifyRequestSent(this);
                  verifyResponseBodyType(body);
                  var chunkSize = this.chunkSize || 10;
                  var index = 0;
                  this.responseText = "";
                  do {
                    this.readyStateChange(FakeXDomainRequest.LOADING);
                    this.responseText += body.substring(index, index + chunkSize);
                    index += chunkSize;
                  } while (index < body.length);
                  this.readyStateChange(FakeXDomainRequest.DONE);
                },
                respond: function respond(status, contentType, body) { // content-type ignored, since XDomainRequest does not carry this
                  // we keep the same syntax for respond(...) as for FakeXMLHttpRequest to ease
                  // test integration across browsers
                  this.status = typeof status === "number" ? status : 200;
                  this.setResponseBody(body || "");
                },
                simulatetimeout: function simulatetimeout() {
                  this.status = 0;
                  this.isTimeout = true; // Access to this should actually throw an error
                  this.responseText = undefined;
                  this.readyStateChange(FakeXDomainRequest.DONE);
                }
              });
              sinon.extend(FakeXDomainRequest, {
                UNSENT: 0,
                OPENED: 1,
                LOADING: 3,
                DONE: 4
              });
              sinon.useFakeXDomainRequest = function useFakeXDomainRequest() {
                sinon.FakeXDomainRequest.restore = function restore(keepOnCreate) {
                  if (xdr.supportsXDR) {
                    global.XDomainRequest = xdr.GlobalXDomainRequest;
                  }
                  delete sinon.FakeXDomainRequest.restore;
                  if (keepOnCreate !== true) {
                    delete sinon.FakeXDomainRequest.onCreate;
                  }
                };
                if (xdr.supportsXDR) {
                  global.XDomainRequest = sinon.FakeXDomainRequest;
                }
                return sinon.FakeXDomainRequest;
              };
              sinon.FakeXDomainRequest = FakeXDomainRequest;
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, exports, module) {
              var sinon = require("./core");
              require("../extend");
              require("./event");
              require("../log_error");
              makeApi(sinon);
              module.exports = sinon;
            }
            if (isAMD) {
              define(loadDependencies);
            } else if (isNode) {
              loadDependencies(require, module.exports, module);
            } else {
              makeApi(sinon); // eslint-disable-line no-undef
            }
          })(typeof global !== "undefined" ? global : self);
          /**
           * @depend core.js
           * @depend ../extend.js
           * @depend event.js
           * @depend ../log_error.js
           */
          /**
           * Fake XMLHttpRequest object
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2013 Christian Johansen
           */
          (function (sinonGlobal, global) {
            function getWorkingXHR(globalScope) {
              var supportsXHR = typeof globalScope.XMLHttpRequest !== "undefined";
              if (supportsXHR) {
                return globalScope.XMLHttpRequest;
              }
              var supportsActiveX = typeof globalScope.ActiveXObject !== "undefined";
              if (supportsActiveX) {
                return function () {
                  return new globalScope.ActiveXObject("MSXML2.XMLHTTP.3.0");
                };
              }
              return false;
            }
            var supportsProgress = typeof ProgressEvent !== "undefined";
            var supportsCustomEvent = typeof CustomEvent !== "undefined";
            var supportsFormData = typeof FormData !== "undefined";
            var supportsArrayBuffer = typeof ArrayBuffer !== "undefined";
            var supportsBlob = typeof Blob === "function";
            var sinonXhr = {
              XMLHttpRequest: global.XMLHttpRequest
            };
            sinonXhr.GlobalXMLHttpRequest = global.XMLHttpRequest;
            sinonXhr.GlobalActiveXObject = global.ActiveXObject;
            sinonXhr.supportsActiveX = typeof sinonXhr.GlobalActiveXObject !== "undefined";
            sinonXhr.supportsXHR = typeof sinonXhr.GlobalXMLHttpRequest !== "undefined";
            sinonXhr.workingXHR = getWorkingXHR(global);
            sinonXhr.supportsCORS = sinonXhr.supportsXHR && "withCredentials" in new sinonXhr.GlobalXMLHttpRequest();
            var unsafeHeaders = {
              "Accept-Charset": true,
              "Accept-Encoding": true,
              Connection: true,
              "Content-Length": true,
              Cookie: true,
              Cookie2: true,
              "Content-Transfer-Encoding": true,
              Date: true,
              Expect: true,
              Host: true,
              "Keep-Alive": true,
              Referer: true,
              TE: true,
              Trailer: true,
              "Transfer-Encoding": true,
              Upgrade: true,
              "User-Agent": true,
              Via: true
            }; // An upload object is created for each
            // FakeXMLHttpRequest and allows upload
            // events to be simulated using uploadProgress
            // and uploadError.
            function UploadProgress() {
              this.eventListeners = {
                progress: [],
                load: [],
                abort: [],
                error: []
              };
            }
            UploadProgress.prototype.addEventListener = function addEventListener(event, listener) {
              this.eventListeners[event].push(listener);
            };
            UploadProgress.prototype.removeEventListener = function removeEventListener(event, listener) {
              var listeners = this.eventListeners[event] || [];
              for (var i = 0, l = listeners.length; i < l; ++i) {
                if (listeners[i] === listener) {
                  return listeners.splice(i, 1);
                }
              }
            };
            UploadProgress.prototype.dispatchEvent = function dispatchEvent(event) {
              var listeners = this.eventListeners[event.type] || [];
              for (var i = 0, listener;
                (listener = listeners[i]) != null; i++) {
                listener(event);
              }
            }; // Note that for FakeXMLHttpRequest to work pre ES5
            // we lose some of the alignment with the spec.
            // To ensure as close a match as possible,
            // set responseType before calling open, send or respond;
            function FakeXMLHttpRequest() {
              this.readyState = FakeXMLHttpRequest.UNSENT;
              this.requestHeaders = {};
              this.requestBody = null;
              this.status = 0;
              this.statusText = "";
              this.upload = new UploadProgress();
              this.responseType = "";
              this.response = "";
              if (sinonXhr.supportsCORS) {
                this.withCredentials = false;
              }
              var xhr = this;
              var events = ["loadstart", "load", "abort", "loadend"];

              function addEventListener(eventName) {
                xhr.addEventListener(eventName, function (event) {
                  var listener = xhr["on" + eventName];
                  if (listener && typeof listener === "function") {
                    listener.call(this, event);
                  }
                });
              }
              for (var i = events.length - 1; i >= 0; i--) {
                addEventListener(events[i]);
              }
              if (typeof FakeXMLHttpRequest.onCreate === "function") {
                FakeXMLHttpRequest.onCreate(this);
              }
            }

            function verifyState(xhr) {
              if (xhr.readyState !== FakeXMLHttpRequest.OPENED) {
                throw new Error("INVALID_STATE_ERR");
              }
              if (xhr.sendFlag) {
                throw new Error("INVALID_STATE_ERR");
              }
            }

            function getHeader(headers, header) {
              header = header.toLowerCase();
              for (var h in headers) {
                if (h.toLowerCase() === header) {
                  return h;
                }
              }
              return null;
            } // filtering to enable a white-list version of Sinon FakeXhr,
            // where whitelisted requests are passed through to real XHR
            function each(collection, callback) {
              if (!collection) {
                return;
              }
              for (var i = 0, l = collection.length; i < l; i += 1) {
                callback(collection[i]);
              }
            }

            function some(collection, callback) {
              for (var index = 0; index < collection.length; index++) {
                if (callback(collection[index]) === true) {
                  return true;
                }
              }
              return false;
            } // largest arity in XHR is 5 - XHR#open
            var apply = function apply(obj, method, args) {
              switch (args.length) {
              case 0:
                return obj[method]();
              case 1:
                return obj[method](args[0]);
              case 2:
                return obj[method](args[0], args[1]);
              case 3:
                return obj[method](args[0], args[1], args[2]);
              case 4:
                return obj[method](args[0], args[1], args[2], args[3]);
              case 5:
                return obj[method](args[0], args[1], args[2], args[3], args[4]);
              }
            };
            FakeXMLHttpRequest.filters = [];
            FakeXMLHttpRequest.addFilter = function addFilter(fn) {
              this.filters.push(fn);
            };
            var IE6Re = /MSIE 6/;
            FakeXMLHttpRequest.defake = function defake(fakeXhr, xhrArgs) {
              var xhr = new sinonXhr.workingXHR(); // eslint-disable-line new-cap
              each(["open", "setRequestHeader", "send", "abort", "getResponseHeader", "getAllResponseHeaders", "addEventListener", "overrideMimeType", "removeEventListener"], function (method) {
                fakeXhr[method] = function () {
                  return apply(xhr, method, arguments);
                };
              });
              var copyAttrs = function copyAttrs(args) {
                each(args, function (attr) {
                  try {
                    fakeXhr[attr] = xhr[attr];
                  } catch (e) {
                    if (!IE6Re.test(navigator.userAgent)) {
                      throw e;
                    }
                  }
                });
              };
              var stateChange = function stateChange() {
                fakeXhr.readyState = xhr.readyState;
                if (xhr.readyState >= FakeXMLHttpRequest.HEADERS_RECEIVED) {
                  copyAttrs(["status", "statusText"]);
                }
                if (xhr.readyState >= FakeXMLHttpRequest.LOADING) {
                  copyAttrs(["responseText", "response"]);
                }
                if (xhr.readyState === FakeXMLHttpRequest.DONE) {
                  copyAttrs(["responseXML"]);
                }
                if (fakeXhr.onreadystatechange) {
                  fakeXhr.onreadystatechange.call(fakeXhr, {
                    target: fakeXhr
                  });
                }
              };
              if (xhr.addEventListener) {
                for (var event in fakeXhr.eventListeners) {
                  if (fakeXhr.eventListeners.hasOwnProperty(event)) { /*eslint-disable no-loop-func*/
                    each(fakeXhr.eventListeners[event], function (handler) {
                      xhr.addEventListener(event, handler);
                    }); /*eslint-enable no-loop-func*/
                  }
                }
                xhr.addEventListener("readystatechange", stateChange);
              } else {
                xhr.onreadystatechange = stateChange;
              }
              apply(xhr, "open", xhrArgs);
            };
            FakeXMLHttpRequest.useFilters = false;

            function verifyRequestOpened(xhr) {
              if (xhr.readyState !== FakeXMLHttpRequest.OPENED) {
                throw new Error("INVALID_STATE_ERR - " + xhr.readyState);
              }
            }

            function verifyRequestSent(xhr) {
              if (xhr.readyState === FakeXMLHttpRequest.DONE) {
                throw new Error("Request done");
              }
            }

            function verifyHeadersReceived(xhr) {
              if (xhr.async && xhr.readyState !== FakeXMLHttpRequest.HEADERS_RECEIVED) {
                throw new Error("No headers received");
              }
            }

            function verifyResponseBodyType(body) {
              if (typeof body !== "string") {
                var error = new Error("Attempted to respond to fake XMLHttpRequest with " + body + ", which is not a string.");
                error.name = "InvalidBodyException";
                throw error;
              }
            }

            function convertToArrayBuffer(body) {
              var buffer = new ArrayBuffer(body.length);
              var view = new Uint8Array(buffer);
              for (var i = 0; i < body.length; i++) {
                var charCode = body.charCodeAt(i);
                if (charCode >= 256) {
                  throw new TypeError("arraybuffer or blob responseTypes require binary string, " + "invalid character " + body[i] + " found.");
                }
                view[i] = charCode;
              }
              return buffer;
            }

            function isXmlContentType(contentType) {
              return !contentType || /(text\/xml)|(application\/xml)|(\+xml)/.test(contentType);
            }

            function convertResponseBody(responseType, contentType, body) {
              if (responseType === "" || responseType === "text") {
                return body;
              } else if (supportsArrayBuffer && responseType === "arraybuffer") {
                return convertToArrayBuffer(body);
              } else if (responseType === "json") {
                try {
                  return JSON.parse(body);
                } catch (e) { // Return parsing failure as null
                  return null;
                }
              } else if (supportsBlob && responseType === "blob") {
                var blobOptions = {};
                if (contentType) {
                  blobOptions.type = contentType;
                }
                return new Blob([convertToArrayBuffer(body)], blobOptions);
              } else if (responseType === "document") {
                if (isXmlContentType(contentType)) {
                  return FakeXMLHttpRequest.parseXML(body);
                }
                return null;
              }
              throw new Error("Invalid responseType " + responseType);
            }

            function clearResponse(xhr) {
              if (xhr.responseType === "" || xhr.responseType === "text") {
                xhr.response = xhr.responseText = "";
              } else {
                xhr.response = xhr.responseText = null;
              }
              xhr.responseXML = null;
            }
            FakeXMLHttpRequest.parseXML = function parseXML(text) { // Treat empty string as parsing failure
              if (text !== "") {
                try {
                  if (typeof DOMParser !== "undefined") {
                    var parser = new DOMParser();
                    return parser.parseFromString(text, "text/xml");
                  }
                  var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
                  xmlDoc.async = "false";
                  xmlDoc.loadXML(text);
                  return xmlDoc;
                } catch (e) { // Unable to parse XML - no biggie
                }
              }
              return null;
            };
            FakeXMLHttpRequest.statusCodes = {
              100: "Continue",
              101: "Switching Protocols",
              200: "OK",
              201: "Created",
              202: "Accepted",
              203: "Non-Authoritative Information",
              204: "No Content",
              205: "Reset Content",
              206: "Partial Content",
              207: "Multi-Status",
              300: "Multiple Choice",
              301: "Moved Permanently",
              302: "Found",
              303: "See Other",
              304: "Not Modified",
              305: "Use Proxy",
              307: "Temporary Redirect",
              400: "Bad Request",
              401: "Unauthorized",
              402: "Payment Required",
              403: "Forbidden",
              404: "Not Found",
              405: "Method Not Allowed",
              406: "Not Acceptable",
              407: "Proxy Authentication Required",
              408: "Request Timeout",
              409: "Conflict",
              410: "Gone",
              411: "Length Required",
              412: "Precondition Failed",
              413: "Request Entity Too Large",
              414: "Request-URI Too Long",
              415: "Unsupported Media Type",
              416: "Requested Range Not Satisfiable",
              417: "Expectation Failed",
              422: "Unprocessable Entity",
              500: "Internal Server Error",
              501: "Not Implemented",
              502: "Bad Gateway",
              503: "Service Unavailable",
              504: "Gateway Timeout",
              505: "HTTP Version Not Supported"
            };

            function makeApi(sinon) {
              sinon.xhr = sinonXhr;
              sinon.extend(FakeXMLHttpRequest.prototype, sinon.EventTarget, {
                async: true,
                open: function open(method, url, async, username, password) {
                  this.method = method;
                  this.url = url;
                  this.async = typeof async === "boolean" ? async : true;
                  this.username = username;
                  this.password = password;
                  clearResponse(this);
                  this.requestHeaders = {};
                  this.sendFlag = false;
                  if (FakeXMLHttpRequest.useFilters === true) {
                    var xhrArgs = arguments;
                    var defake = some(FakeXMLHttpRequest.filters, function (filter) {
                      return filter.apply(this, xhrArgs);
                    });
                    if (defake) {
                      return FakeXMLHttpRequest.defake(this, arguments);
                    }
                  }
                  this.readyStateChange(FakeXMLHttpRequest.OPENED);
                },
                readyStateChange: function readyStateChange(state) {
                  this.readyState = state;
                  var readyStateChangeEvent = new sinon.Event("readystatechange", false, false, this);
                  if (typeof this.onreadystatechange === "function") {
                    try {
                      this.onreadystatechange(readyStateChangeEvent);
                    } catch (e) {
                      sinon.logError("Fake XHR onreadystatechange handler", e);
                    }
                  }
                  switch (this.readyState) {
                  case FakeXMLHttpRequest.DONE:
                    if (supportsProgress) {
                      this.upload.dispatchEvent(new sinon.ProgressEvent("progress", {
                        loaded: 100,
                        total: 100
                      }));
                      this.dispatchEvent(new sinon.ProgressEvent("progress", {
                        loaded: 100,
                        total: 100
                      }));
                    }
                    this.upload.dispatchEvent(new sinon.Event("load", false, false, this));
                    this.dispatchEvent(new sinon.Event("load", false, false, this));
                    this.dispatchEvent(new sinon.Event("loadend", false, false, this));
                    break;
                  }
                  this.dispatchEvent(readyStateChangeEvent);
                },
                setRequestHeader: function setRequestHeader(header, value) {
                  verifyState(this);
                  if (unsafeHeaders[header] || /^(Sec-|Proxy-)/.test(header)) {
                    throw new Error("Refused to set unsafe header \"" + header + "\"");
                  }
                  if (this.requestHeaders[header]) {
                    this.requestHeaders[header] += "," + value;
                  } else {
                    this.requestHeaders[header] = value;
                  }
                }, // Helps testing
                setResponseHeaders: function setResponseHeaders(headers) {
                  verifyRequestOpened(this);
                  this.responseHeaders = {};
                  for (var header in headers) {
                    if (headers.hasOwnProperty(header)) {
                      this.responseHeaders[header] = headers[header];
                    }
                  }
                  if (this.async) {
                    this.readyStateChange(FakeXMLHttpRequest.HEADERS_RECEIVED);
                  } else {
                    this.readyState = FakeXMLHttpRequest.HEADERS_RECEIVED;
                  }
                }, // Currently treats ALL data as a DOMString (i.e. no Document)
                send: function send(data) {
                  verifyState(this);
                  if (!/^(get|head)$/i.test(this.method)) {
                    var contentType = getHeader(this.requestHeaders, "Content-Type");
                    if (this.requestHeaders[contentType]) {
                      var value = this.requestHeaders[contentType].split(";");
                      this.requestHeaders[contentType] = value[0] + ";charset=utf-8";
                    } else if (supportsFormData && !(data instanceof FormData)) {
                      this.requestHeaders["Content-Type"] = "text/plain;charset=utf-8";
                    }
                    this.requestBody = data;
                  }
                  this.errorFlag = false;
                  this.sendFlag = this.async;
                  clearResponse(this);
                  this.readyStateChange(FakeXMLHttpRequest.OPENED);
                  if (typeof this.onSend === "function") {
                    this.onSend(this);
                  }
                  this.dispatchEvent(new sinon.Event("loadstart", false, false, this));
                },
                abort: function abort() {
                  this.aborted = true;
                  clearResponse(this);
                  this.errorFlag = true;
                  this.requestHeaders = {};
                  this.responseHeaders = {};
                  if (this.readyState > FakeXMLHttpRequest.UNSENT && this.sendFlag) {
                    this.readyStateChange(FakeXMLHttpRequest.DONE);
                    this.sendFlag = false;
                  }
                  this.readyState = FakeXMLHttpRequest.UNSENT;
                  this.dispatchEvent(new sinon.Event("abort", false, false, this));
                  this.upload.dispatchEvent(new sinon.Event("abort", false, false, this));
                  if (typeof this.onerror === "function") {
                    this.onerror();
                  }
                },
                getResponseHeader: function getResponseHeader(header) {
                  if (this.readyState < FakeXMLHttpRequest.HEADERS_RECEIVED) {
                    return null;
                  }
                  if (/^Set-Cookie2?$/i.test(header)) {
                    return null;
                  }
                  header = getHeader(this.responseHeaders, header);
                  return this.responseHeaders[header] || null;
                },
                getAllResponseHeaders: function getAllResponseHeaders() {
                  if (this.readyState < FakeXMLHttpRequest.HEADERS_RECEIVED) {
                    return "";
                  }
                  var headers = "";
                  for (var header in this.responseHeaders) {
                    if (this.responseHeaders.hasOwnProperty(header) && !/^Set-Cookie2?$/i.test(header)) {
                      headers += header + ": " + this.responseHeaders[header] + "\r\n";
                    }
                  }
                  return headers;
                },
                setResponseBody: function setResponseBody(body) {
                  verifyRequestSent(this);
                  verifyHeadersReceived(this);
                  verifyResponseBodyType(body);
                  var contentType = this.getResponseHeader("Content-Type");
                  var isTextResponse = this.responseType === "" || this.responseType === "text";
                  clearResponse(this);
                  if (this.async) {
                    var chunkSize = this.chunkSize || 10;
                    var index = 0;
                    do {
                      this.readyStateChange(FakeXMLHttpRequest.LOADING);
                      if (isTextResponse) {
                        this.responseText = this.response += body.substring(index, index + chunkSize);
                      }
                      index += chunkSize;
                    } while (index < body.length);
                  }
                  this.response = convertResponseBody(this.responseType, contentType, body);
                  if (isTextResponse) {
                    this.responseText = this.response;
                  }
                  if (this.responseType === "document") {
                    this.responseXML = this.response;
                  } else if (this.responseType === "" && isXmlContentType(contentType)) {
                    this.responseXML = FakeXMLHttpRequest.parseXML(this.responseText);
                  }
                  this.readyStateChange(FakeXMLHttpRequest.DONE);
                },
                respond: function respond(status, headers, body) {
                  this.status = typeof status === "number" ? status : 200;
                  this.statusText = FakeXMLHttpRequest.statusCodes[this.status];
                  this.setResponseHeaders(headers || {});
                  this.setResponseBody(body || "");
                },
                uploadProgress: function uploadProgress(progressEventRaw) {
                  if (supportsProgress) {
                    this.upload.dispatchEvent(new sinon.ProgressEvent("progress", progressEventRaw));
                  }
                },
                downloadProgress: function downloadProgress(progressEventRaw) {
                  if (supportsProgress) {
                    this.dispatchEvent(new sinon.ProgressEvent("progress", progressEventRaw));
                  }
                },
                uploadError: function uploadError(error) {
                  if (supportsCustomEvent) {
                    this.upload.dispatchEvent(new sinon.CustomEvent("error", {
                      detail: error
                    }));
                  }
                }
              });
              sinon.extend(FakeXMLHttpRequest, {
                UNSENT: 0,
                OPENED: 1,
                HEADERS_RECEIVED: 2,
                LOADING: 3,
                DONE: 4
              });
              sinon.useFakeXMLHttpRequest = function () {
                FakeXMLHttpRequest.restore = function restore(keepOnCreate) {
                  if (sinonXhr.supportsXHR) {
                    global.XMLHttpRequest = sinonXhr.GlobalXMLHttpRequest;
                  }
                  if (sinonXhr.supportsActiveX) {
                    global.ActiveXObject = sinonXhr.GlobalActiveXObject;
                  }
                  delete FakeXMLHttpRequest.restore;
                  if (keepOnCreate !== true) {
                    delete FakeXMLHttpRequest.onCreate;
                  }
                };
                if (sinonXhr.supportsXHR) {
                  global.XMLHttpRequest = FakeXMLHttpRequest;
                }
                if (sinonXhr.supportsActiveX) {
                  global.ActiveXObject = function ActiveXObject(objId) {
                    if (objId === "Microsoft.XMLHTTP" || /^Msxml2\.XMLHTTP/i.test(objId)) {
                      return new FakeXMLHttpRequest();
                    }
                    return new sinonXhr.GlobalActiveXObject(objId);
                  };
                }
                return FakeXMLHttpRequest;
              };
              sinon.FakeXMLHttpRequest = FakeXMLHttpRequest;
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, exports, module) {
              var sinon = require("./core");
              require("../extend");
              require("./event");
              require("../log_error");
              makeApi(sinon);
              module.exports = sinon;
            }
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon, // eslint-disable-line no-undef
            typeof global !== "undefined" ? global : self);
          /**
           * @depend fake_xdomain_request.js
           * @depend fake_xml_http_request.js
           * @depend ../format.js
           * @depend ../log_error.js
           */
          /**
           * The Sinon "server" mimics a web server that receives requests from
           * sinon.FakeXMLHttpRequest and provides an API to respond to those requests,
           * both synchronously and asynchronously. To respond synchronuously, canned
           * answers have to be provided upfront.
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2013 Christian Johansen
           */
          (function () {
            var push = [].push;

            function responseArray(handler) {
              var response = handler;
              if (Object.prototype.toString.call(handler) !== "[object Array]") {
                response = [200, {}, handler];
              }
              if (typeof response[2] !== "string") {
                throw new TypeError("Fake server response body should be string, but was " + typeof response[2]);
              }
              return response;
            }
            var wloc = typeof window !== "undefined" ? window.location : {};
            var rCurrLoc = new RegExp("^" + wloc.protocol + "//" + wloc.host);

            function matchOne(response, reqMethod, reqUrl) {
              var rmeth = response.method;
              var matchMethod = !rmeth || rmeth.toLowerCase() === reqMethod.toLowerCase();
              var url = response.url;
              var matchUrl = !url || url === reqUrl || typeof url.test === "function" && url.test(reqUrl);
              return matchMethod && matchUrl;
            }

            function match(response, request) {
              var requestUrl = request.url;
              if (!/^https?:\/\//.test(requestUrl) || rCurrLoc.test(requestUrl)) {
                requestUrl = requestUrl.replace(rCurrLoc, "");
              }
              if (matchOne(response, this.getHTTPMethod(request), requestUrl)) {
                if (typeof response.response === "function") {
                  var ru = response.url;
                  var args = [request].concat(ru && typeof ru.exec === "function" ? ru.exec(requestUrl).slice(1) : []);
                  return response.response.apply(response, args);
                }
                return true;
              }
              return false;
            }

            function makeApi(sinon) {
              sinon.fakeServer = {
                create: function create(config) {
                  var server = sinon.create(this);
                  server.configure(config);
                  if (!sinon.xhr.supportsCORS) {
                    this.xhr = sinon.useFakeXDomainRequest();
                  } else {
                    this.xhr = sinon.useFakeXMLHttpRequest();
                  }
                  server.requests = [];
                  this.xhr.onCreate = function (xhrObj) {
                    server.addRequest(xhrObj);
                  };
                  return server;
                },
                configure: function configure(config) {
                  var whitelist = {
                    "autoRespond": true,
                    "autoRespondAfter": true,
                    "respondImmediately": true,
                    "fakeHTTPMethods": true
                  };
                  var setting;
                  config = config || {};
                  for (setting in config) {
                    if (whitelist.hasOwnProperty(setting) && config.hasOwnProperty(setting)) {
                      this[setting] = config[setting];
                    }
                  }
                },
                addRequest: function addRequest(xhrObj) {
                  var server = this;
                  push.call(this.requests, xhrObj);
                  xhrObj.onSend = function () {
                    server.handleRequest(this);
                    if (server.respondImmediately) {
                      server.respond();
                    } else if (server.autoRespond && !server.responding) {
                      setTimeout(function () {
                        server.responding = false;
                        server.respond();
                      }, server.autoRespondAfter || 10);
                      server.responding = true;
                    }
                  };
                },
                getHTTPMethod: function getHTTPMethod(request) {
                  if (this.fakeHTTPMethods && /post/i.test(request.method)) {
                    var matches = (request.requestBody || "").match(/_method=([^\b;]+)/);
                    return matches ? matches[1] : request.method;
                  }
                  return request.method;
                },
                handleRequest: function handleRequest(xhr) {
                  if (xhr.async) {
                    if (!this.queue) {
                      this.queue = [];
                    }
                    push.call(this.queue, xhr);
                  } else {
                    this.processRequest(xhr);
                  }
                },
                log: function log(response, request) {
                  var str;
                  str = "Request:\n" + sinon.format(request) + "\n\n";
                  str += "Response:\n" + sinon.format(response) + "\n\n";
                  sinon.log(str);
                },
                respondWith: function respondWith(method, url, body) {
                  if (arguments.length === 1 && typeof method !== "function") {
                    this.response = responseArray(method);
                    return;
                  }
                  if (!this.responses) {
                    this.responses = [];
                  }
                  if (arguments.length === 1) {
                    body = method;
                    url = method = null;
                  }
                  if (arguments.length === 2) {
                    body = url;
                    url = method;
                    method = null;
                  }
                  push.call(this.responses, {
                    method: method,
                    url: url,
                    response: typeof body === "function" ? body : responseArray(body)
                  });
                },
                respond: function respond() {
                  if (arguments.length > 0) {
                    this.respondWith.apply(this, arguments);
                  }
                  var queue = this.queue || [];
                  var requests = queue.splice(0, queue.length);
                  for (var i = 0; i < requests.length; i++) {
                    this.processRequest(requests[i]);
                  }
                },
                processRequest: function processRequest(request) {
                  try {
                    if (request.aborted) {
                      return;
                    }
                    var response = this.response || [404, {}, ""];
                    if (this.responses) {
                      for (var l = this.responses.length, i = l - 1; i >= 0; i--) {
                        if (match.call(this, this.responses[i], request)) {
                          response = this.responses[i].response;
                          break;
                        }
                      }
                    }
                    if (request.readyState !== 4) {
                      this.log(response, request);
                      request.respond(response[0], response[1], response[2]);
                    }
                  } catch (e) {
                    sinon.logError("Fake server request processing", e);
                  }
                },
                restore: function restore() {
                  return this.xhr.restore && this.xhr.restore.apply(this.xhr, arguments);
                }
              };
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, exports, module) {
              var sinon = require("./core");
              require("./fake_xdomain_request");
              require("./fake_xml_http_request");
              require("../format");
              makeApi(sinon);
              module.exports = sinon;
            }
            if (isAMD) {
              define(loadDependencies);
            } else if (isNode) {
              loadDependencies(require, module.exports, module);
            } else {
              makeApi(sinon); // eslint-disable-line no-undef
            }
          })();
          /**
           * @depend fake_server.js
           * @depend fake_timers.js
           */
          /**
           * Add-on for sinon.fakeServer that automatically handles a fake timer along with
           * the FakeXMLHttpRequest. The direct inspiration for this add-on is jQuery
           * 1.3.x, which does not use xhr object's onreadystatehandler at all - instead,
           * it polls the object for completion with setInterval. Dispite the direct
           * motivation, there is nothing jQuery-specific in this file, so it can be used
           * in any environment where the ajax implementation depends on setInterval or
           * setTimeout.
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2013 Christian Johansen
           */
          (function () {
            function makeApi(sinon) {
              function Server() {}
              Server.prototype = sinon.fakeServer;
              sinon.fakeServerWithClock = new Server();
              sinon.fakeServerWithClock.addRequest = function addRequest(xhr) {
                if (xhr.async) {
                  if (typeof setTimeout.clock === "object") {
                    this.clock = setTimeout.clock;
                  } else {
                    this.clock = sinon.useFakeTimers();
                    this.resetClock = true;
                  }
                  if (!this.longestTimeout) {
                    var clockSetTimeout = this.clock.setTimeout;
                    var clockSetInterval = this.clock.setInterval;
                    var server = this;
                    this.clock.setTimeout = function (fn, timeout) {
                      server.longestTimeout = Math.max(timeout, server.longestTimeout || 0);
                      return clockSetTimeout.apply(this, arguments);
                    };
                    this.clock.setInterval = function (fn, timeout) {
                      server.longestTimeout = Math.max(timeout, server.longestTimeout || 0);
                      return clockSetInterval.apply(this, arguments);
                    };
                  }
                }
                return sinon.fakeServer.addRequest.call(this, xhr);
              };
              sinon.fakeServerWithClock.respond = function respond() {
                var returnVal = sinon.fakeServer.respond.apply(this, arguments);
                if (this.clock) {
                  this.clock.tick(this.longestTimeout || 0);
                  this.longestTimeout = 0;
                  if (this.resetClock) {
                    this.clock.restore();
                    this.resetClock = false;
                  }
                }
                return returnVal;
              };
              sinon.fakeServerWithClock.restore = function restore() {
                if (this.clock) {
                  this.clock.restore();
                }
                return sinon.fakeServer.restore.apply(this, arguments);
              };
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require) {
              var sinon = require("./core");
              require("./fake_server");
              require("./fake_timers");
              makeApi(sinon);
            }
            if (isAMD) {
              define(loadDependencies);
            } else if (isNode) {
              loadDependencies(require);
            } else {
              makeApi(sinon); // eslint-disable-line no-undef
            }
          })();
          /**
           * @depend util/core.js
           * @depend extend.js
           * @depend collection.js
           * @depend util/fake_timers.js
           * @depend util/fake_server_with_clock.js
           */
          /**
           * Manages fake collections as well as fake utilities such as Sinon's
           * timers and fake XHR implementation in one convenient object.
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2013 Christian Johansen
           */
          (function (sinonGlobal) {
            function makeApi(sinon) {
              var push = [].push;

              function exposeValue(sandbox, config, key, value) {
                if (!value) {
                  return;
                }
                if (config.injectInto && !(key in config.injectInto)) {
                  config.injectInto[key] = value;
                  sandbox.injectedKeys.push(key);
                } else {
                  push.call(sandbox.args, value);
                }
              }

              function prepareSandboxFromConfig(config) {
                var sandbox = sinon.create(sinon.sandbox);
                if (config.useFakeServer) {
                  if (typeof config.useFakeServer === "object") {
                    sandbox.serverPrototype = config.useFakeServer;
                  }
                  sandbox.useFakeServer();
                }
                if (config.useFakeTimers) {
                  if (typeof config.useFakeTimers === "object") {
                    sandbox.useFakeTimers.apply(sandbox, config.useFakeTimers);
                  } else {
                    sandbox.useFakeTimers();
                  }
                }
                return sandbox;
              }
              sinon.sandbox = sinon.extend(sinon.create(sinon.collection), {
                useFakeTimers: function useFakeTimers() {
                  this.clock = sinon.useFakeTimers.apply(sinon, arguments);
                  return this.add(this.clock);
                },
                serverPrototype: sinon.fakeServer,
                useFakeServer: function useFakeServer() {
                  var proto = this.serverPrototype || sinon.fakeServer;
                  if (!proto || !proto.create) {
                    return null;
                  }
                  this.server = proto.create();
                  return this.add(this.server);
                },
                inject: function inject(obj) {
                  sinon.collection.inject.call(this, obj);
                  if (this.clock) {
                    obj.clock = this.clock;
                  }
                  if (this.server) {
                    obj.server = this.server;
                    obj.requests = this.server.requests;
                  }
                  obj.match = sinon.match;
                  return obj;
                },
                restore: function restore() {
                  sinon.collection.restore.apply(this, arguments);
                  this.restoreContext();
                },
                restoreContext: function restoreContext() {
                  if (this.injectedKeys) {
                    for (var i = 0, j = this.injectedKeys.length; i < j; i++) {
                      delete this.injectInto[this.injectedKeys[i]];
                    }
                    this.injectedKeys = [];
                  }
                },
                create: function create(config) {
                  if (!config) {
                    return sinon.create(sinon.sandbox);
                  }
                  var sandbox = prepareSandboxFromConfig(config);
                  sandbox.args = sandbox.args || [];
                  sandbox.injectedKeys = [];
                  sandbox.injectInto = config.injectInto;
                  var prop, value;
                  var exposed = sandbox.inject({});
                  if (config.properties) {
                    for (var i = 0, l = config.properties.length; i < l; i++) {
                      prop = config.properties[i];
                      value = exposed[prop] || prop === "sandbox" && sandbox;
                      exposeValue(sandbox, config, prop, value);
                    }
                  } else {
                    exposeValue(sandbox, config, "sandbox", value);
                  }
                  return sandbox;
                },
                match: sinon.match
              });
              sinon.sandbox.useFakeXMLHttpRequest = sinon.sandbox.useFakeServer;
              return sinon.sandbox;
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, exports, module) {
              var sinon = require("./util/core");
              require("./extend");
              require("./util/fake_server_with_clock");
              require("./util/fake_timers");
              require("./collection");
              module.exports = makeApi(sinon);
            }
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon // eslint-disable-line no-undef
          );
          /**
           * @depend util/core.js
           * @depend sandbox.js
           */
          /**
           * Test function, sandboxes fakes
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2013 Christian Johansen
           */
          (function (sinonGlobal) {
            function makeApi(sinon) {
              var slice = Array.prototype.slice;

              function test(callback) {
                var type = typeof callback;
                if (type !== "function") {
                  throw new TypeError("sinon.test needs to wrap a test function, got " + type);
                }

                function sinonSandboxedTest() {
                  var config = sinon.getConfig(sinon.config);
                  config.injectInto = config.injectIntoThis && this || config.injectInto;
                  var sandbox = sinon.sandbox.create(config);
                  var args = slice.call(arguments);
                  var oldDone = args.length && args[args.length - 1];
                  var exception, result;
                  if (typeof oldDone === "function") {
                    args[args.length - 1] = function sinonDone(res) {
                      if (res) {
                        sandbox.restore();
                      } else {
                        sandbox.verifyAndRestore();
                      }
                      oldDone(res);
                    };
                  }
                  try {
                    result = callback.apply(this, args.concat(sandbox.args));
                  } catch (e) {
                    exception = e;
                  }
                  if (typeof oldDone !== "function") {
                    if (typeof exception !== "undefined") {
                      sandbox.restore();
                      throw exception;
                    } else {
                      sandbox.verifyAndRestore();
                    }
                  }
                  return result;
                }
                if (callback.length) {
                  return function sinonAsyncSandboxedTest(done) { // eslint-disable-line no-unused-vars
                    return sinonSandboxedTest.apply(this, arguments);
                  };
                }
                return sinonSandboxedTest;
              }
              test.config = {
                injectIntoThis: true,
                injectInto: null,
                properties: ["spy", "stub", "mock", "clock", "server", "requests"],
                useFakeTimers: true,
                useFakeServer: true
              };
              sinon.test = test;
              return test;
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, exports, module) {
              var core = require("./util/core");
              require("./sandbox");
              module.exports = makeApi(core);
            }
            if (isAMD) {
              define(loadDependencies);
            } else if (isNode) {
              loadDependencies(require, module.exports, module);
            } else if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon || null); // eslint-disable-line no-undef
          /**
           * @depend util/core.js
           * @depend test.js
           */
          /**
           * Test case, sandboxes all test functions
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2013 Christian Johansen
           */
          (function (sinonGlobal) {
            function createTest(property, setUp, tearDown) {
              return function () {
                if (setUp) {
                  setUp.apply(this, arguments);
                }
                var exception, result;
                try {
                  result = property.apply(this, arguments);
                } catch (e) {
                  exception = e;
                }
                if (tearDown) {
                  tearDown.apply(this, arguments);
                }
                if (exception) {
                  throw exception;
                }
                return result;
              };
            }

            function makeApi(sinon) {
              function testCase(tests, prefix) {
                if (!tests || typeof tests !== "object") {
                  throw new TypeError("sinon.testCase needs an object with test functions");
                }
                prefix = prefix || "test";
                var rPrefix = new RegExp("^" + prefix);
                var methods = {};
                var setUp = tests.setUp;
                var tearDown = tests.tearDown;
                var testName, property, method;
                for (testName in tests) {
                  if (tests.hasOwnProperty(testName) && !/^(setUp|tearDown)$/.test(testName)) {
                    property = tests[testName];
                    if (typeof property === "function" && rPrefix.test(testName)) {
                      method = property;
                      if (setUp || tearDown) {
                        method = createTest(property, setUp, tearDown);
                      }
                      methods[testName] = sinon.test(method);
                    } else {
                      methods[testName] = tests[testName];
                    }
                  }
                }
                return methods;
              }
              sinon.testCase = testCase;
              return testCase;
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, exports, module) {
              var core = require("./util/core");
              require("./test");
              module.exports = makeApi(core);
            }
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon // eslint-disable-line no-undef
          );
          /**
           * @depend times_in_words.js
           * @depend util/core.js
           * @depend match.js
           * @depend format.js
           */
          /**
           * Assertions matching the test spy retrieval interface.
           *
           * @author Christian Johansen (christian@cjohansen.no)
           * @license BSD
           *
           * Copyright (c) 2010-2013 Christian Johansen
           */
          (function (sinonGlobal, global) {
            var slice = Array.prototype.slice;

            function makeApi(sinon) {
              var assert;

              function verifyIsStub() {
                var method;
                for (var i = 0, l = arguments.length; i < l; ++i) {
                  method = arguments[i];
                  if (!method) {
                    assert.fail("fake is not a spy");
                  }
                  if (method.proxy && method.proxy.isSinonProxy) {
                    verifyIsStub(method.proxy);
                  } else {
                    if (typeof method !== "function") {
                      assert.fail(method + " is not a function");
                    }
                    if (typeof method.getCall !== "function") {
                      assert.fail(method + " is not stubbed");
                    }
                  }
                }
              }

              function failAssertion(object, msg) {
                object = object || global;
                var failMethod = object.fail || assert.fail;
                failMethod.call(object, msg);
              }

              function mirrorPropAsAssertion(name, method, message) {
                if (arguments.length === 2) {
                  message = method;
                  method = name;
                }
                assert[name] = function (fake) {
                  verifyIsStub(fake);
                  var args = slice.call(arguments, 1);
                  var failed = false;
                  if (typeof method === "function") {
                    failed = !method(fake);
                  } else {
                    failed = typeof fake[method] === "function" ? !fake[method].apply(fake, args) : !fake[method];
                  }
                  if (failed) {
                    failAssertion(this, (fake.printf || fake.proxy.printf).apply(fake, [message].concat(args)));
                  } else {
                    assert.pass(name);
                  }
                };
              }

              function exposedName(prefix, prop) {
                return !prefix || /^fail/.test(prop) ? prop : prefix + prop.slice(0, 1).toUpperCase() + prop.slice(1);
              }
              assert = {
                failException: "AssertError",
                fail: function fail(message) {
                  var error = new Error(message);
                  error.name = this.failException || assert.failException;
                  throw error;
                },
                pass: function pass() {},
                callOrder: function assertCallOrder() {
                  verifyIsStub.apply(null, arguments);
                  var expected = "";
                  var actual = "";
                  if (!sinon.calledInOrder(arguments)) {
                    try {
                      expected = [].join.call(arguments, ", ");
                      var calls = slice.call(arguments);
                      var i = calls.length;
                      while (i) {
                        if (!calls[--i].called) {
                          calls.splice(i, 1);
                        }
                      }
                      actual = sinon.orderByFirstCall(calls).join(", ");
                    } catch (e) { // If this fails, we'll just fall back to the blank string
                    }
                    failAssertion(this, "expected " + expected + " to be " + "called in order but were called as " + actual);
                  } else {
                    assert.pass("callOrder");
                  }
                },
                callCount: function assertCallCount(method, count) {
                  verifyIsStub(method);
                  if (method.callCount !== count) {
                    var msg = "expected %n to be called " + sinon.timesInWords(count) + " but was called %c%C";
                    failAssertion(this, method.printf(msg));
                  } else {
                    assert.pass("callCount");
                  }
                },
                expose: function expose(target, options) {
                  if (!target) {
                    throw new TypeError("target is null or undefined");
                  }
                  var o = options || {};
                  var prefix = typeof o.prefix === "undefined" && "assert" || o.prefix;
                  var includeFail = typeof o.includeFail === "undefined" || !!o.includeFail;
                  for (var method in this) {
                    if (method !== "expose" && (includeFail || !/^(fail)/.test(method))) {
                      target[exposedName(prefix, method)] = this[method];
                    }
                  }
                  return target;
                },
                match: function match(actual, expectation) {
                  var matcher = sinon.match(expectation);
                  if (matcher.test(actual)) {
                    assert.pass("match");
                  } else {
                    var formatted = ["expected value to match", "    expected = " + sinon.format(expectation), "    actual = " + sinon.format(actual)];
                    failAssertion(this, formatted.join("\n"));
                  }
                }
              };
              mirrorPropAsAssertion("called", "expected %n to have been called at least once but was never called");
              mirrorPropAsAssertion("notCalled", function (spy) {
                return !spy.called;
              }, "expected %n to not have been called but was called %c%C");
              mirrorPropAsAssertion("calledOnce", "expected %n to be called once but was called %c%C");
              mirrorPropAsAssertion("calledTwice", "expected %n to be called twice but was called %c%C");
              mirrorPropAsAssertion("calledThrice", "expected %n to be called thrice but was called %c%C");
              mirrorPropAsAssertion("calledOn", "expected %n to be called with %1 as this but was called with %t");
              mirrorPropAsAssertion("alwaysCalledOn", "expected %n to always be called with %1 as this but was called with %t");
              mirrorPropAsAssertion("calledWithNew", "expected %n to be called with new");
              mirrorPropAsAssertion("alwaysCalledWithNew", "expected %n to always be called with new");
              mirrorPropAsAssertion("calledWith", "expected %n to be called with arguments %*%C");
              mirrorPropAsAssertion("calledWithMatch", "expected %n to be called with match %*%C");
              mirrorPropAsAssertion("alwaysCalledWith", "expected %n to always be called with arguments %*%C");
              mirrorPropAsAssertion("alwaysCalledWithMatch", "expected %n to always be called with match %*%C");
              mirrorPropAsAssertion("calledWithExactly", "expected %n to be called with exact arguments %*%C");
              mirrorPropAsAssertion("alwaysCalledWithExactly", "expected %n to always be called with exact arguments %*%C");
              mirrorPropAsAssertion("neverCalledWith", "expected %n to never be called with arguments %*%C");
              mirrorPropAsAssertion("neverCalledWithMatch", "expected %n to never be called with match %*%C");
              mirrorPropAsAssertion("threw", "%n did not throw exception%C");
              mirrorPropAsAssertion("alwaysThrew", "%n did not always throw exception%C");
              sinon.assert = assert;
              return assert;
            }
            var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
            var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

            function loadDependencies(require, exports, module) {
              var sinon = require("./util/core");
              require("./match");
              require("./format");
              module.exports = makeApi(sinon);
            }
            if (isAMD) {
              define(loadDependencies);
              return;
            }
            if (isNode) {
              loadDependencies(require, module.exports, module);
              return;
            }
            if (sinonGlobal) {
              makeApi(sinonGlobal);
            }
          })(typeof sinon === "object" && sinon, // eslint-disable-line no-undef
            typeof global !== "undefined" ? global : self);
          return sinon;
        });
        /**
         * @author Christian Johansen (christian@cjohansen.no) and contributors
         * @license BSD
         *
         * Copyright (c) 2010-2014 Christian Johansen
         */

        /***/
      },
/* 9 */
/***/
      function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        var _createClass = (function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            'default': obj
          };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        var _lodash = __webpack_require__(2);

        var _lodash2 = _interopRequireDefault(_lodash);

        var ChromeEvent = (function () {

          /**
           * @constructor
           */

          function ChromeEvent() {
            _classCallCheck(this, ChromeEvent);

            this._listeners = [];
          }

          /**
           * Manual dispatch
           */

          _createClass(ChromeEvent, [{
            key: 'dispatch',
            value: function dispatch() {
              this.trigger.apply(this, arguments);
            }

            /**
             * Call all subscribed handlers
             */
      }, {
            key: 'trigger',
            value: function trigger() {
              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              this._listeners.forEach(function (handler) {
                handler.apply(null, args);
              });
            }

            /**
             * Async call all subscribed handlers
             */
      }, {
            key: 'triggerAsync',
            value: function triggerAsync() {
              var _this = this;

              for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              setTimeout(function () {
                _this.trigger.apply(_this, args);
              }, 0);
            }

            /**
             * Call all subscribed handlers, pass arguments ass array
             * @param {Array} args
             */
      }, {
            key: 'applyTrigger',
            value: function applyTrigger(args) {
              this.trigger.apply(this, args);
            }

            /**
             * Async call all subscribed handlers, pass arguments ass array
             * @param {Array} args
             */
      }, {
            key: 'applyTriggerAsync',
            value: function applyTriggerAsync(args) {
              this.triggerAsync.apply(this, args);
            }

            /**
             * Add event listener
             * @param {Function} handler
             */
      }, {
            key: 'addListener',
            value: function addListener(handler) {
              if (_lodash2['default'].isFunction(handler)) {
                this._listeners.push(handler);
              }
            }

            /**
             * Remove event listener
             * @param {Function} handler
             */
      }, {
            key: 'removeListener',
            value: function removeListener(handler) {
              var index = this._listeners.indexOf(handler);
              if (index >= 0) {
                this._listeners.splice(index, 1);
              }
            }

            /**
             * Check event listener exists
             * @param {Function} handler
             */
      }, {
            key: 'hasListener',
            value: function hasListener(handler) {
              return this._listeners.indexOf(handler) >= 0;
            }

            /**
             * Remove all listeners
             */
      }, {
            key: 'removeListeners',
            value: function removeListeners() {
              this._listeners = [];
            }
      }]);

          return ChromeEvent;
        })();

        exports['default'] = ChromeEvent;
        module.exports = exports['default'];

        /***/
      },
/* 10 */
/***/
      function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            'default': obj
          };
        }

        var _sinon = __webpack_require__(8);

        var _sinon2 = _interopRequireDefault(_sinon);

        exports['default'] = Object.defineProperties({

          stubs: [],

          /**
           * Reset all stubs
           */
          reset: function reset() {
            this.stubs.forEach(function (stub) {
              stub.reset();
            });
          },

          /**
           * Reset stubs data and behaviour
           */
          flush: function flush() {
            this.stubs.forEach(function (stub) {
              stub.reset();
              stub.resetBehavior();
            });
          }
        }, {
          stub: {
            /**
             * Get stub instance
             * @returns {sinon.stub}
             */

            get: function get() {
              var stub = _sinon2['default'].stub();
              this.stubs.push(stub);
              return stub;
            },
            configurable: true,
            enumerable: true
          }
        });
        module.exports = exports['default'];

        /***/
      },
/* 11 */
/***/
      function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            'default': obj
          };
        }

        var _lodash = __webpack_require__(2);

        var _lodash2 = _interopRequireDefault(_lodash);

        exports['default'] = {

          props: [],

          /**
           * Cache property
           * @param {Object} object
           * @param {String} namespace
           * @param {String} property
           */
          cache: function cache(object, namespace, property) {
            this.props.push({
              object: object,
              namespace: namespace,
              property: property
            });
          },

          /**
           * Flush property value
           */
          flush: function flush() {
            this.props.forEach(function (prop) {
              _lodash2['default'].set(prop.object, prop.namespace + '.' + prop.property, undefined);
            });
          }
        };
        module.exports = exports['default'];

        /***/
      },
/* 12 */
/***/
      function (module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        var _createClass = (function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};
            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
              }
            }
            newObj['default'] = obj;
            return newObj;
          }
        }

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            'default': obj
          };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        var _lodash = __webpack_require__(2);

        var _lodash2 = _interopRequireDefault(_lodash);

        var _URIjs = __webpack_require__(13);

        var _URIjs2 = _interopRequireDefault(_URIjs);

        var _cookie = __webpack_require__(17);

        var _cookie2 = _interopRequireDefault(_cookie);

        var _events = __webpack_require__(9);

        var _events2 = _interopRequireDefault(_events);

        var _assert = __webpack_require__(18);

        var assert = _interopRequireWildcard(_assert);

        var ChromeCookies = (function () {
          function ChromeCookies() {
            var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

            _classCallCheck(this, ChromeCookies);

            this._state = state;
            this.onChanged = new _events2['default']();
          }

          /**
           * Install plugin
           * @param {Object} chrome
           */

          _createClass(ChromeCookies, [{
            key: 'install',
            value: function install(chrome) {
              var plugin = this;
              this.chrome = chrome;
              Object.defineProperty(this.chrome, 'cookies', {
                get: function get() {
                  return plugin;
                }
              });
            }

            /**
             * get cookie by criteria
             * @param {Object} details
             * @param {String} details.url
             * @param {String} details.name
             * @param {Function} callback
             */
      }, {
            key: 'get',
            value: function get(details, callback) {
              assert.get.apply(null, arguments);
              var params = {
                name: details.name,
                domain: new _URIjs2['default'](details.url).hostname()
              };
              return this._invokeResult(_lodash2['default'].findWhere(this._state, params) || null, callback);
            }

            /**
             * get all cookie list by criteria
             * @param {AllCookieCriteria} details
             * @param {Function} callback
             */
      }, {
            key: 'getAll',
            value: function getAll(details, callback) {
              assert.getAll.apply(this, arguments);
              var params = details;
              if (params.url) {
                params.domain = new _URIjs2['default'](details.url).hostname();
                delete params.url;
              }
              return this._invokeResult(_lodash2['default'].where(this._state, params), callback);
            }

            /**
             * set cookie value
             * @param {ChromeCookie} details
             * @param {Function} callback
             */
      }, {
            key: 'set',
            value: function set(details, callback) {
              assert.set.apply(null, arguments);
              var cookie = new _cookie2['default'](details);
              var cookieInfo = cookie.info;
              this._appendCookie(cookieInfo);
              this._invokeResult(cookieInfo, callback);
            }

            /**
             * remove cookie
             * @param {Object} details
             * @param {String} details.url
             * @param {String} details.name
             * @param {Function} [callback]
             */
      }, {
            key: 'remove',
            value: function remove(details, callback) {
              assert.remove.apply(null, arguments);
              var params = {
                name: details.name,
                domain: new _URIjs2['default'](details.url).hostname()
              };
              var cookieInfo = _lodash2['default'].findWhere(this._state, params);
              if (cookieInfo) {
                var index = _lodash2['default'].findIndex(this._state, cookieInfo);
                this._state.splice(index, 1);
                this._triggerChange({
                  cause: 'explicit',
                  removed: true,
                  cookie: cookieInfo
                });
              }
              this._invokeResult(details, callback);
            }

            /**
             * Append new cookie
             * @param {Object} cookieInfo
             * @private
             */
      }, {
            key: '_appendCookie',
            value: function _appendCookie(cookieInfo) {
              var index = _lodash2['default'].findIndex(this._state, {
                name: cookieInfo.name,
                domain: cookieInfo.domain
              });
              if (index >= 0) {
                this._state.splice(index, 1, cookieInfo);
                this._triggerChange({
                  cause: 'overwrite',
                  removed: true,
                  cookie: cookieInfo
                });
                this._triggerChange({
                  cause: 'explicit',
                  removed: false,
                  cookie: cookieInfo
                });
              } else {
                this._state.push(cookieInfo);
                this._triggerChange({
                  cause: 'explicit',
                  removed: false,
                  cookie: cookieInfo
                });
              }
            }

            /**
             * Trigger change event
             * @param {Object} changeInfo
             * @private
             */
      }, {
            key: '_triggerChange',
            value: function _triggerChange(changeInfo) {
              this.onChanged.triggerAsync(changeInfo);
            }

            /**
             * Async invoke result
             * @param {*} result
             * @param {Function} callback
             * @private
             */
      }, {
            key: '_invokeResult',
            value: function _invokeResult(result, callback) {
              if (_lodash2['default'].isFunction(callback)) {
                setTimeout(function () {
                  return callback(result);
                }, 0);
              }
            }

            /**
             * @returns {Object}
             */
      }, {
            key: 'state',
            get: function get() {
              return this._state;
            },

            /**
             * @param {Object} value
             */
            set: function set(value) {
              this._state = value;
            }
      }]);

          return ChromeCookies;
        })();

        exports['default'] = ChromeCookies;
        module.exports = exports['default'];

        /***/
      },
/* 13 */
/***/
      function (module, exports, __webpack_require__) {

        /*!
         * URI.js - Mutating URLs
         *
         * Version: 1.16.1
         *
         * Author: Rodney Rehm
         * Web: http://medialize.github.io/URI.js/
         *
         * Licensed under
         *   MIT License http://www.opensource.org/licenses/mit-license
         *   GPL v3 http://opensource.org/licenses/GPL-3.0
         *
         */
        'use strict';

        (function (root, factory) {
          'use strict';
          // https://github.com/umdjs/umd/blob/master/returnExports.js
          if (true) {
            // Node
            module.exports = factory(__webpack_require__(14), __webpack_require__(15), __webpack_require__(16));
          } else if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define(['./punycode', './IPv6', './SecondLevelDomains'], factory);
          } else {
            // Browser globals (root is window)
            root.URI = factory(root.punycode, root.IPv6, root.SecondLevelDomains, root);
          }
        })(undefined, function (punycode, IPv6, SLD, root) {
          'use strict';
          /*global location, escape, unescape */
          // FIXME: v2.0.0 renamce non-camelCase properties to uppercase
          /*jshint camelcase: false */

          // save current URI variable, if any
          var _URI = root && root.URI;

          function URI(url, base) {
            var _urlSupplied = arguments.length >= 1;
            var _baseSupplied = arguments.length >= 2;

            // Allow instantiation without the 'new' keyword
            if (!(this instanceof URI)) {
              if (_urlSupplied) {
                if (_baseSupplied) {
                  return new URI(url, base);
                }

                return new URI(url);
              }

              return new URI();
            }

            if (url === undefined) {
              if (_urlSupplied) {
                throw new TypeError('undefined is not a valid argument for URI');
              }

              if (typeof location !== 'undefined') {
                url = location.href + '';
              } else {
                url = '';
              }
            }

            this.href(url);

            // resolve to base according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#constructor
            if (base !== undefined) {
              return this.absoluteTo(base);
            }

            return this;
          }

          URI.version = '1.16.1';

          var p = URI.prototype;
          var hasOwn = Object.prototype.hasOwnProperty;

          function escapeRegEx(string) {
            // https://github.com/medialize/URI.js/commit/85ac21783c11f8ccab06106dba9735a31a86924d#commitcomment-821963
            return string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
          }

          function getType(value) {
            // IE8 doesn't return [Object Undefined] but [Object Object] for undefined value
            if (value === undefined) {
              return 'Undefined';
            }

            return String(Object.prototype.toString.call(value)).slice(8, -1);
          }

          function isArray(obj) {
            return getType(obj) === 'Array';
          }

          function filterArrayValues(data, value) {
            var lookup = {};
            var i, length;

            if (getType(value) === 'RegExp') {
              lookup = null;
            } else if (isArray(value)) {
              for (i = 0, length = value.length; i < length; i++) {
                lookup[value[i]] = true;
              }
            } else {
              lookup[value] = true;
            }

            for (i = 0, length = data.length; i < length; i++) {
              /*jshint laxbreak: true */
              var _match = lookup && lookup[data[i]] !== undefined || !lookup && value.test(data[i]);
              /*jshint laxbreak: false */
              if (_match) {
                data.splice(i, 1);
                length--;
                i--;
              }
            }

            return data;
          }

          function arrayContains(list, value) {
            var i, length;

            // value may be string, number, array, regexp
            if (isArray(value)) {
              // Note: this can be optimized to O(n) (instead of current O(m * n))
              for (i = 0, length = value.length; i < length; i++) {
                if (!arrayContains(list, value[i])) {
                  return false;
                }
              }

              return true;
            }

            var _type = getType(value);
            for (i = 0, length = list.length; i < length; i++) {
              if (_type === 'RegExp') {
                if (typeof list[i] === 'string' && list[i].match(value)) {
                  return true;
                }
              } else if (list[i] === value) {
                return true;
              }
            }

            return false;
          }

          function arraysEqual(one, two) {
            if (!isArray(one) || !isArray(two)) {
              return false;
            }

            // arrays can't be equal if they have different amount of content
            if (one.length !== two.length) {
              return false;
            }

            one.sort();
            two.sort();

            for (var i = 0, l = one.length; i < l; i++) {
              if (one[i] !== two[i]) {
                return false;
              }
            }

            return true;
          }

          URI._parts = function () {
            return {
              protocol: null,
              username: null,
              password: null,
              hostname: null,
              urn: null,
              port: null,
              path: null,
              query: null,
              fragment: null,
              // state
              duplicateQueryParameters: URI.duplicateQueryParameters,
              escapeQuerySpace: URI.escapeQuerySpace
            };
          };
          // state: allow duplicate query parameters (a=1&a=1)
          URI.duplicateQueryParameters = false;
          // state: replaces + with %20 (space in query strings)
          URI.escapeQuerySpace = true;
          // static properties
          URI.protocol_expression = /^[a-z][a-z0-9.+-]*$/i;
          URI.idn_expression = /[^a-z0-9\.-]/i;
          URI.punycode_expression = /(xn--)/i;
          // well, 333.444.555.666 matches, but it sure ain't no IPv4 - do we care?
          URI.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
          // credits to Rich Brown
          // source: http://forums.intermapper.com/viewtopic.php?p=1096#1096
          // specification: http://www.ietf.org/rfc/rfc4291.txt
          URI.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
          // expression used is "gruber revised" (@gruber v2) determined to be the
          // best solution in a regex-golf we did a couple of ages ago at
          // * http://mathiasbynens.be/demo/url-regex
          // * http://rodneyrehm.de/t/url-regex.html
          URI.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;
          URI.findUri = {
            // valid "scheme://" or "www."
            start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
            // everything up to the next whitespace
            end: /[\s\r\n]|$/,
            // trim trailing punctuation captured by end RegExp
            trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/
          };
          // http://www.iana.org/assignments/uri-schemes.html
          // http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports
          URI.defaultPorts = {
            http: '80',
            https: '443',
            ftp: '21',
            gopher: '70',
            ws: '80',
            wss: '443'
          };
          // allowed hostname characters according to RFC 3986
          // ALPHA DIGIT "-" "." "_" "~" "!" "$" "&" "'" "(" ")" "*" "+" "," ";" "=" %encoded
          // I've never seen a (non-IDN) hostname other than: ALPHA DIGIT . -
          URI.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/;
          // map DOM Elements to their URI attribute
          URI.domAttributes = {
            'a': 'href',
            'blockquote': 'cite',
            'link': 'href',
            'base': 'href',
            'script': 'src',
            'form': 'action',
            'img': 'src',
            'area': 'href',
            'iframe': 'src',
            'embed': 'src',
            'source': 'src',
            'track': 'src',
            'input': 'src', // but only if type="image"
            'audio': 'src',
            'video': 'src'
          };
          URI.getDomAttribute = function (node) {
            if (!node || !node.nodeName) {
              return undefined;
            }

            var nodeName = node.nodeName.toLowerCase();
            // <input> should only expose src for type="image"
            if (nodeName === 'input' && node.type !== 'image') {
              return undefined;
            }

            return URI.domAttributes[nodeName];
          };

          function escapeForDumbFirefox36(value) {
            // https://github.com/medialize/URI.js/issues/91
            return escape(value);
          }

          // encoding / decoding according to RFC3986
          function strictEncodeURIComponent(string) {
            // see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/encodeURIComponent
            return encodeURIComponent(string).replace(/[!'()*]/g, escapeForDumbFirefox36).replace(/\*/g, '%2A');
          }
          URI.encode = strictEncodeURIComponent;
          URI.decode = decodeURIComponent;
          URI.iso8859 = function () {
            URI.encode = escape;
            URI.decode = unescape;
          };
          URI.unicode = function () {
            URI.encode = strictEncodeURIComponent;
            URI.decode = decodeURIComponent;
          };
          URI.characters = {
            pathname: {
              encode: {
                // RFC3986 2.1: For consistency, URI producers and normalizers should
                // use uppercase hexadecimal digits for all percent-encodings.
                expression: /%(24|26|2B|2C|3B|3D|3A|40)/ig,
                map: {
                  // -._~!'()*
                  '%24': '$',
                  '%26': '&',
                  '%2B': '+',
                  '%2C': ',',
                  '%3B': ';',
                  '%3D': '=',
                  '%3A': ':',
                  '%40': '@'
                }
              },
              decode: {
                expression: /[\/\?#]/g,
                map: {
                  '/': '%2F',
                  '?': '%3F',
                  '#': '%23'
                }
              }
            },
            reserved: {
              encode: {
                // RFC3986 2.1: For consistency, URI producers and normalizers should
                // use uppercase hexadecimal digits for all percent-encodings.
                expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,
                map: {
                  // gen-delims
                  '%3A': ':',
                  '%2F': '/',
                  '%3F': '?',
                  '%23': '#',
                  '%5B': '[',
                  '%5D': ']',
                  '%40': '@',
                  // sub-delims
                  '%21': '!',
                  '%24': '$',
                  '%26': '&',
                  '%27': '\'',
                  '%28': '(',
                  '%29': ')',
                  '%2A': '*',
                  '%2B': '+',
                  '%2C': ',',
                  '%3B': ';',
                  '%3D': '='
                }
              }
            },
            urnpath: {
              // The characters under `encode` are the characters called out by RFC 2141 as being acceptable
              // for usage in a URN. RFC2141 also calls out "-", ".", and "_" as acceptable characters, but
              // these aren't encoded by encodeURIComponent, so we don't have to call them out here. Also
              // note that the colon character is not featured in the encoding map; this is because URI.js
              // gives the colons in URNs semantic meaning as the delimiters of path segements, and so it
              // should not appear unencoded in a segment itself.
              // See also the note above about RFC3986 and capitalalized hex digits.
              encode: {
                expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,
                map: {
                  '%21': '!',
                  '%24': '$',
                  '%27': '\'',
                  '%28': '(',
                  '%29': ')',
                  '%2A': '*',
                  '%2B': '+',
                  '%2C': ',',
                  '%3B': ';',
                  '%3D': '=',
                  '%40': '@'
                }
              },
              // These characters are the characters called out by RFC2141 as "reserved" characters that
              // should never appear in a URN, plus the colon character (see note above).
              decode: {
                expression: /[\/\?#:]/g,
                map: {
                  '/': '%2F',
                  '?': '%3F',
                  '#': '%23',
                  ':': '%3A'
                }
              }
            }
          };
          URI.encodeQuery = function (string, escapeQuerySpace) {
            var escaped = URI.encode(string + '');
            if (escapeQuerySpace === undefined) {
              escapeQuerySpace = URI.escapeQuerySpace;
            }

            return escapeQuerySpace ? escaped.replace(/%20/g, '+') : escaped;
          };
          URI.decodeQuery = function (string, escapeQuerySpace) {
            string += '';
            if (escapeQuerySpace === undefined) {
              escapeQuerySpace = URI.escapeQuerySpace;
            }

            try {
              return URI.decode(escapeQuerySpace ? string.replace(/\+/g, '%20') : string);
            } catch (e) {
              // we're not going to mess with weird encodings,
              // give up and return the undecoded original string
              // see https://github.com/medialize/URI.js/issues/87
              // see https://github.com/medialize/URI.js/issues/92
              return string;
            }
          };
          // generate encode/decode path functions
          var _parts = {
            'encode': 'encode',
            'decode': 'decode'
          };
          var _part;
          var generateAccessor = function generateAccessor(_group, _part) {
            return function (string) {
              try {
                return URI[_part](string + '').replace(URI.characters[_group][_part].expression, function (c) {
                  return URI.characters[_group][_part].map[c];
                });
              } catch (e) {
                // we're not going to mess with weird encodings,
                // give up and return the undecoded original string
                // see https://github.com/medialize/URI.js/issues/87
                // see https://github.com/medialize/URI.js/issues/92
                return string;
              }
            };
          };

          for (_part in _parts) {
            URI[_part + 'PathSegment'] = generateAccessor('pathname', _parts[_part]);
            URI[_part + 'UrnPathSegment'] = generateAccessor('urnpath', _parts[_part]);
          }

          var generateSegmentedPathFunction = function generateSegmentedPathFunction(_sep, _codingFuncName, _innerCodingFuncName) {
            return function (string) {
              // Why pass in names of functions, rather than the function objects themselves? The
              // definitions of some functions (but in particular, URI.decode) will occasionally change due
              // to URI.js having ISO8859 and Unicode modes. Passing in the name and getting it will ensure
              // that the functions we use here are "fresh".
              var actualCodingFunc;
              if (!_innerCodingFuncName) {
                actualCodingFunc = URI[_codingFuncName];
              } else {
                actualCodingFunc = function (string) {
                  return URI[_codingFuncName](URI[_innerCodingFuncName](string));
                };
              }

              var segments = (string + '').split(_sep);

              for (var i = 0, length = segments.length; i < length; i++) {
                segments[i] = actualCodingFunc(segments[i]);
              }

              return segments.join(_sep);
            };
          };

          // This takes place outside the above loop because we don't want, e.g., encodeUrnPath functions.
          URI.decodePath = generateSegmentedPathFunction('/', 'decodePathSegment');
          URI.decodeUrnPath = generateSegmentedPathFunction(':', 'decodeUrnPathSegment');
          URI.recodePath = generateSegmentedPathFunction('/', 'encodePathSegment', 'decode');
          URI.recodeUrnPath = generateSegmentedPathFunction(':', 'encodeUrnPathSegment', 'decode');

          URI.encodeReserved = generateAccessor('reserved', 'encode');

          URI.parse = function (string, parts) {
            var pos;
            if (!parts) {
              parts = {};
            }
            // [protocol"://"[username[":"password]"@"]hostname[":"port]"/"?][path]["?"querystring]["#"fragment]

            // extract fragment
            pos = string.indexOf('#');
            if (pos > -1) {
              // escaping?
              parts.fragment = string.substring(pos + 1) || null;
              string = string.substring(0, pos);
            }

            // extract query
            pos = string.indexOf('?');
            if (pos > -1) {
              // escaping?
              parts.query = string.substring(pos + 1) || null;
              string = string.substring(0, pos);
            }

            // extract protocol
            if (string.substring(0, 2) === '//') {
              // relative-scheme
              parts.protocol = null;
              string = string.substring(2);
              // extract "user:pass@host:port"
              string = URI.parseAuthority(string, parts);
            } else {
              pos = string.indexOf(':');
              if (pos > -1) {
                parts.protocol = string.substring(0, pos) || null;
                if (parts.protocol && !parts.protocol.match(URI.protocol_expression)) {
                  // : may be within the path
                  parts.protocol = undefined;
                } else if (string.substring(pos + 1, pos + 3) === '//') {
                  string = string.substring(pos + 3);

                  // extract "user:pass@host:port"
                  string = URI.parseAuthority(string, parts);
                } else {
                  string = string.substring(pos + 1);
                  parts.urn = true;
                }
              }
            }

            // what's left must be the path
            parts.path = string;

            // and we're done
            return parts;
          };
          URI.parseHost = function (string, parts) {
            // Copy chrome, IE, opera backslash-handling behavior.
            // Back slashes before the query string get converted to forward slashes
            // See: https://github.com/joyent/node/blob/386fd24f49b0e9d1a8a076592a404168faeecc34/lib/url.js#L115-L124
            // See: https://code.google.com/p/chromium/issues/detail?id=25916
            // https://github.com/medialize/URI.js/pull/233
            string = string.replace(/\\/g, '/');

            // extract host:port
            var pos = string.indexOf('/');
            var bracketPos;
            var t;

            if (pos === -1) {
              pos = string.length;
            }

            if (string.charAt(0) === '[') {
              // IPv6 host - http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04#section-6
              // I claim most client software breaks on IPv6 anyways. To simplify things, URI only accepts
              // IPv6+port in the format [2001:db8::1]:80 (for the time being)
              bracketPos = string.indexOf(']');
              parts.hostname = string.substring(1, bracketPos) || null;
              parts.port = string.substring(bracketPos + 2, pos) || null;
              if (parts.port === '/') {
                parts.port = null;
              }
            } else {
              var firstColon = string.indexOf(':');
              var firstSlash = string.indexOf('/');
              var nextColon = string.indexOf(':', firstColon + 1);
              if (nextColon !== -1 && (firstSlash === -1 || nextColon < firstSlash)) {
                // IPv6 host contains multiple colons - but no port
                // this notation is actually not allowed by RFC 3986, but we're a liberal parser
                parts.hostname = string.substring(0, pos) || null;
                parts.port = null;
              } else {
                t = string.substring(0, pos).split(':');
                parts.hostname = t[0] || null;
                parts.port = t[1] || null;
              }
            }

            if (parts.hostname && string.substring(pos).charAt(0) !== '/') {
              pos++;
              string = '/' + string;
            }

            return string.substring(pos) || '/';
          };
          URI.parseAuthority = function (string, parts) {
            string = URI.parseUserinfo(string, parts);
            return URI.parseHost(string, parts);
          };
          URI.parseUserinfo = function (string, parts) {
            // extract username:password
            var firstSlash = string.indexOf('/');
            var pos = string.lastIndexOf('@', firstSlash > -1 ? firstSlash : string.length - 1);
            var t;

            // authority@ must come before /path
            if (pos > -1 && (firstSlash === -1 || pos < firstSlash)) {
              t = string.substring(0, pos).split(':');
              parts.username = t[0] ? URI.decode(t[0]) : null;
              t.shift();
              parts.password = t[0] ? URI.decode(t.join(':')) : null;
              string = string.substring(pos + 1);
            } else {
              parts.username = null;
              parts.password = null;
            }

            return string;
          };
          URI.parseQuery = function (string, escapeQuerySpace) {
            if (!string) {
              return {};
            }

            // throw out the funky business - "?"[name"="value"&"]+
            string = string.replace(/&+/g, '&').replace(/^\?*&*|&+$/g, '');

            if (!string) {
              return {};
            }

            var items = {};
            var splits = string.split('&');
            var length = splits.length;
            var v, name, value;

            for (var i = 0; i < length; i++) {
              v = splits[i].split('=');
              name = URI.decodeQuery(v.shift(), escapeQuerySpace);
              // no "=" is null according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#collect-url-parameters
              value = v.length ? URI.decodeQuery(v.join('='), escapeQuerySpace) : null;

              if (hasOwn.call(items, name)) {
                if (typeof items[name] === 'string' || items[name] === null) {
                  items[name] = [items[name]];
                }

                items[name].push(value);
              } else {
                items[name] = value;
              }
            }

            return items;
          };

          URI.build = function (parts) {
            var t = '';

            if (parts.protocol) {
              t += parts.protocol + ':';
            }

            if (!parts.urn && (t || parts.hostname)) {
              t += '//';
            }

            t += URI.buildAuthority(parts) || '';

            if (typeof parts.path === 'string') {
              if (parts.path.charAt(0) !== '/' && typeof parts.hostname === 'string') {
                t += '/';
              }

              t += parts.path;
            }

            if (typeof parts.query === 'string' && parts.query) {
              t += '?' + parts.query;
            }

            if (typeof parts.fragment === 'string' && parts.fragment) {
              t += '#' + parts.fragment;
            }
            return t;
          };
          URI.buildHost = function (parts) {
            var t = '';

            if (!parts.hostname) {
              return '';
            } else if (URI.ip6_expression.test(parts.hostname)) {
              t += '[' + parts.hostname + ']';
            } else {
              t += parts.hostname;
            }

            if (parts.port) {
              t += ':' + parts.port;
            }

            return t;
          };
          URI.buildAuthority = function (parts) {
            return URI.buildUserinfo(parts) + URI.buildHost(parts);
          };
          URI.buildUserinfo = function (parts) {
            var t = '';

            if (parts.username) {
              t += URI.encode(parts.username);

              if (parts.password) {
                t += ':' + URI.encode(parts.password);
              }

              t += '@';
            }

            return t;
          };
          URI.buildQuery = function (data, duplicateQueryParameters, escapeQuerySpace) {
            // according to http://tools.ietf.org/html/rfc3986 or http://labs.apache.org/webarch/uri/rfc/rfc3986.html
            // being »-._~!$&'()*+,;=:@/?« %HEX and alnum are allowed
            // the RFC explicitly states ?/foo being a valid use case, no mention of parameter syntax!
            // URI.js treats the query string as being application/x-www-form-urlencoded
            // see http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type

            var t = '';
            var unique, key, i, length;
            for (key in data) {
              if (hasOwn.call(data, key) && key) {
                if (isArray(data[key])) {
                  unique = {};
                  for (i = 0, length = data[key].length; i < length; i++) {
                    if (data[key][i] !== undefined && unique[data[key][i] + ''] === undefined) {
                      t += '&' + URI.buildQueryParameter(key, data[key][i], escapeQuerySpace);
                      if (duplicateQueryParameters !== true) {
                        unique[data[key][i] + ''] = true;
                      }
                    }
                  }
                } else if (data[key] !== undefined) {
                  t += '&' + URI.buildQueryParameter(key, data[key], escapeQuerySpace);
                }
              }
            }

            return t.substring(1);
          };
          URI.buildQueryParameter = function (name, value, escapeQuerySpace) {
            // http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type -- application/x-www-form-urlencoded
            // don't append "=" for null values, according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#url-parameter-serialization
            return URI.encodeQuery(name, escapeQuerySpace) + (value !== null ? '=' + URI.encodeQuery(value, escapeQuerySpace) : '');
          };

          URI.addQuery = function (data, name, value) {
            if (typeof name === 'object') {
              for (var key in name) {
                if (hasOwn.call(name, key)) {
                  URI.addQuery(data, key, name[key]);
                }
              }
            } else if (typeof name === 'string') {
              if (data[name] === undefined) {
                data[name] = value;
                return;
              } else if (typeof data[name] === 'string') {
                data[name] = [data[name]];
              }

              if (!isArray(value)) {
                value = [value];
              }

              data[name] = (data[name] || []).concat(value);
            } else {
              throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
            }
          };
          URI.removeQuery = function (data, name, value) {
            var i, length, key;

            if (isArray(name)) {
              for (i = 0, length = name.length; i < length; i++) {
                data[name[i]] = undefined;
              }
            } else if (getType(name) === 'RegExp') {
              for (key in data) {
                if (name.test(key)) {
                  data[key] = undefined;
                }
              }
            } else if (typeof name === 'object') {
              for (key in name) {
                if (hasOwn.call(name, key)) {
                  URI.removeQuery(data, key, name[key]);
                }
              }
            } else if (typeof name === 'string') {
              if (value !== undefined) {
                if (getType(value) === 'RegExp') {
                  if (!isArray(data[name]) && value.test(data[name])) {
                    data[name] = undefined;
                  } else {
                    data[name] = filterArrayValues(data[name], value);
                  }
                } else if (data[name] === value) {
                  data[name] = undefined;
                } else if (isArray(data[name])) {
                  data[name] = filterArrayValues(data[name], value);
                }
              } else {
                data[name] = undefined;
              }
            } else {
              throw new TypeError('URI.removeQuery() accepts an object, string, RegExp as the first parameter');
            }
          };
          URI.hasQuery = function (data, name, value, withinArray) {
            if (typeof name === 'object') {
              for (var key in name) {
                if (hasOwn.call(name, key)) {
                  if (!URI.hasQuery(data, key, name[key])) {
                    return false;
                  }
                }
              }

              return true;
            } else if (typeof name !== 'string') {
              throw new TypeError('URI.hasQuery() accepts an object, string as the name parameter');
            }

            switch (getType(value)) {
            case 'Undefined':
              // true if exists (but may be empty)
              return name in data; // data[name] !== undefined;

            case 'Boolean':
              // true if exists and non-empty
              var _booly = Boolean(isArray(data[name]) ? data[name].length : data[name]);
              return value === _booly;

            case 'Function':
              // allow complex comparison
              return !!value(data[name], name, data);

            case 'Array':
              if (!isArray(data[name])) {
                return false;
              }

              var op = withinArray ? arrayContains : arraysEqual;
              return op(data[name], value);

            case 'RegExp':
              if (!isArray(data[name])) {
                return Boolean(data[name] && data[name].match(value));
              }

              if (!withinArray) {
                return false;
              }

              return arrayContains(data[name], value);

            case 'Number':
              value = String(value);
              /* falls through */
            case 'String':
              if (!isArray(data[name])) {
                return data[name] === value;
              }

              if (!withinArray) {
                return false;
              }

              return arrayContains(data[name], value);

            default:
              throw new TypeError('URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter');
            }
          };

          URI.commonPath = function (one, two) {
            var length = Math.min(one.length, two.length);
            var pos;

            // find first non-matching character
            for (pos = 0; pos < length; pos++) {
              if (one.charAt(pos) !== two.charAt(pos)) {
                pos--;
                break;
              }
            }

            if (pos < 1) {
              return one.charAt(0) === two.charAt(0) && one.charAt(0) === '/' ? '/' : '';
            }

            // revert to last /
            if (one.charAt(pos) !== '/' || two.charAt(pos) !== '/') {
              pos = one.substring(0, pos).lastIndexOf('/');
            }

            return one.substring(0, pos + 1);
          };

          URI.withinString = function (string, callback, options) {
            options || (options = {});
            var _start = options.start || URI.findUri.start;
            var _end = options.end || URI.findUri.end;
            var _trim = options.trim || URI.findUri.trim;
            var _attributeOpen = /[a-z0-9-]=["']?$/i;

            _start.lastIndex = 0;
            while (true) {
              var match = _start.exec(string);
              if (!match) {
                break;
              }

              var start = match.index;
              if (options.ignoreHtml) {
                // attribut(e=["']?$)
                var attributeOpen = string.slice(Math.max(start - 3, 0), start);
                if (attributeOpen && _attributeOpen.test(attributeOpen)) {
                  continue;
                }
              }

              var end = start + string.slice(start).search(_end);
              var slice = string.slice(start, end).replace(_trim, '');
              if (options.ignore && options.ignore.test(slice)) {
                continue;
              }

              end = start + slice.length;
              var result = callback(slice, start, end, string);
              string = string.slice(0, start) + result + string.slice(end);
              _start.lastIndex = start + result.length;
            }

            _start.lastIndex = 0;
            return string;
          };

          URI.ensureValidHostname = function (v) {
            // Theoretically URIs allow percent-encoding in Hostnames (according to RFC 3986)
            // they are not part of DNS and therefore ignored by URI.js

            if (v.match(URI.invalid_hostname_characters)) {
              // test punycode
              if (!punycode) {
                throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-] and Punycode.js is not available');
              }

              if (punycode.toASCII(v).match(URI.invalid_hostname_characters)) {
                throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
              }
            }
          };

          // noConflict
          URI.noConflict = function (removeAll) {
            if (removeAll) {
              var unconflicted = {
                URI: this.noConflict()
              };

              if (root.URITemplate && typeof root.URITemplate.noConflict === 'function') {
                unconflicted.URITemplate = root.URITemplate.noConflict();
              }

              if (root.IPv6 && typeof root.IPv6.noConflict === 'function') {
                unconflicted.IPv6 = root.IPv6.noConflict();
              }

              if (root.SecondLevelDomains && typeof root.SecondLevelDomains.noConflict === 'function') {
                unconflicted.SecondLevelDomains = root.SecondLevelDomains.noConflict();
              }

              return unconflicted;
            } else if (root.URI === this) {
              root.URI = _URI;
            }

            return this;
          };

          p.build = function (deferBuild) {
            if (deferBuild === true) {
              this._deferred_build = true;
            } else if (deferBuild === undefined || this._deferred_build) {
              this._string = URI.build(this._parts);
              this._deferred_build = false;
            }

            return this;
          };

          p.clone = function () {
            return new URI(this);
          };

          p.valueOf = p.toString = function () {
            return this.build(false)._string;
          };

          function generateSimpleAccessor(_part) {
            return function (v, build) {
              if (v === undefined) {
                return this._parts[_part] || '';
              } else {
                this._parts[_part] = v || null;
                this.build(!build);
                return this;
              }
            };
          }

          function generatePrefixAccessor(_part, _key) {
            return function (v, build) {
              if (v === undefined) {
                return this._parts[_part] || '';
              } else {
                if (v !== null) {
                  v = v + '';
                  if (v.charAt(0) === _key) {
                    v = v.substring(1);
                  }
                }

                this._parts[_part] = v;
                this.build(!build);
                return this;
              }
            };
          }

          p.protocol = generateSimpleAccessor('protocol');
          p.username = generateSimpleAccessor('username');
          p.password = generateSimpleAccessor('password');
          p.hostname = generateSimpleAccessor('hostname');
          p.port = generateSimpleAccessor('port');
          p.query = generatePrefixAccessor('query', '?');
          p.fragment = generatePrefixAccessor('fragment', '#');

          p.search = function (v, build) {
            var t = this.query(v, build);
            return typeof t === 'string' && t.length ? '?' + t : t;
          };
          p.hash = function (v, build) {
            var t = this.fragment(v, build);
            return typeof t === 'string' && t.length ? '#' + t : t;
          };

          p.pathname = function (v, build) {
            if (v === undefined || v === true) {
              var res = this._parts.path || (this._parts.hostname ? '/' : '');
              return v ? (this._parts.urn ? URI.decodeUrnPath : URI.decodePath)(res) : res;
            } else {
              if (this._parts.urn) {
                this._parts.path = v ? URI.recodeUrnPath(v) : '';
              } else {
                this._parts.path = v ? URI.recodePath(v) : '/';
              }
              this.build(!build);
              return this;
            }
          };
          p.path = p.pathname;
          p.href = function (href, build) {
            var key;

            if (href === undefined) {
              return this.toString();
            }

            this._string = '';
            this._parts = URI._parts();

            var _URI = href instanceof URI;
            var _object = typeof href === 'object' && (href.hostname || href.path || href.pathname);
            if (href.nodeName) {
              var attribute = URI.getDomAttribute(href);
              href = href[attribute] || '';
              _object = false;
            }

            // window.location is reported to be an object, but it's not the sort
            // of object we're looking for:
            // * location.protocol ends with a colon
            // * location.query != object.search
            // * location.hash != object.fragment
            // simply serializing the unknown object should do the trick
            // (for location, not for everything...)
            if (!_URI && _object && href.pathname !== undefined) {
              href = href.toString();
            }

            if (typeof href === 'string' || href instanceof String) {
              this._parts = URI.parse(String(href), this._parts);
            } else if (_URI || _object) {
              var src = _URI ? href._parts : href;
              for (key in src) {
                if (hasOwn.call(this._parts, key)) {
                  this._parts[key] = src[key];
                }
              }
            } else {
              throw new TypeError('invalid input');
            }

            this.build(!build);
            return this;
          };

          // identification accessors
          p.is = function (what) {
            var ip = false;
            var ip4 = false;
            var ip6 = false;
            var name = false;
            var sld = false;
            var idn = false;
            var punycode = false;
            var relative = !this._parts.urn;

            if (this._parts.hostname) {
              relative = false;
              ip4 = URI.ip4_expression.test(this._parts.hostname);
              ip6 = URI.ip6_expression.test(this._parts.hostname);
              ip = ip4 || ip6;
              name = !ip;
              sld = name && SLD && SLD.has(this._parts.hostname);
              idn = name && URI.idn_expression.test(this._parts.hostname);
              punycode = name && URI.punycode_expression.test(this._parts.hostname);
            }

            switch (what.toLowerCase()) {
            case 'relative':
              return relative;

            case 'absolute':
              return !relative;

              // hostname identification
            case 'domain':
            case 'name':
              return name;

            case 'sld':
              return sld;

            case 'ip':
              return ip;

            case 'ip4':
            case 'ipv4':
            case 'inet4':
              return ip4;

            case 'ip6':
            case 'ipv6':
            case 'inet6':
              return ip6;

            case 'idn':
              return idn;

            case 'url':
              return !this._parts.urn;

            case 'urn':
              return !!this._parts.urn;

            case 'punycode':
              return punycode;
            }

            return null;
          };

          // component specific input validation
          var _protocol = p.protocol;
          var _port = p.port;
          var _hostname = p.hostname;

          p.protocol = function (v, build) {
            if (v !== undefined) {
              if (v) {
                // accept trailing ://
                v = v.replace(/:(\/\/)?$/, '');

                if (!v.match(URI.protocol_expression)) {
                  throw new TypeError('Protocol "' + v + '" contains characters other than [A-Z0-9.+-] or doesn\'t start with [A-Z]');
                }
              }
            }
            return _protocol.call(this, v, build);
          };
          p.scheme = p.protocol;
          p.port = function (v, build) {
            if (this._parts.urn) {
              return v === undefined ? '' : this;
            }

            if (v !== undefined) {
              if (v === 0) {
                v = null;
              }

              if (v) {
                v += '';
                if (v.charAt(0) === ':') {
                  v = v.substring(1);
                }

                if (v.match(/[^0-9]/)) {
                  throw new TypeError('Port "' + v + '" contains characters other than [0-9]');
                }
              }
            }
            return _port.call(this, v, build);
          };
          p.hostname = function (v, build) {
            if (this._parts.urn) {
              return v === undefined ? '' : this;
            }

            if (v !== undefined) {
              var x = {};
              var res = URI.parseHost(v, x);
              if (res !== '/') {
                throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
              }

              v = x.hostname;
            }
            return _hostname.call(this, v, build);
          };

          // compound accessors
          p.host = function (v, build) {
            if (this._parts.urn) {
              return v === undefined ? '' : this;
            }

            if (v === undefined) {
              return this._parts.hostname ? URI.buildHost(this._parts) : '';
            } else {
              var res = URI.parseHost(v, this._parts);
              if (res !== '/') {
                throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
              }

              this.build(!build);
              return this;
            }
          };
          p.authority = function (v, build) {
            if (this._parts.urn) {
              return v === undefined ? '' : this;
            }

            if (v === undefined) {
              return this._parts.hostname ? URI.buildAuthority(this._parts) : '';
            } else {
              var res = URI.parseAuthority(v, this._parts);
              if (res !== '/') {
                throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
              }

              this.build(!build);
              return this;
            }
          };
          p.userinfo = function (v, build) {
            if (this._parts.urn) {
              return v === undefined ? '' : this;
            }

            if (v === undefined) {
              if (!this._parts.username) {
                return '';
              }

              var t = URI.buildUserinfo(this._parts);
              return t.substring(0, t.length - 1);
            } else {
              if (v[v.length - 1] !== '@') {
                v += '@';
              }

              URI.parseUserinfo(v, this._parts);
              this.build(!build);
              return this;
            }
          };
          p.resource = function (v, build) {
            var parts;

            if (v === undefined) {
              return this.path() + this.search() + this.hash();
            }

            parts = URI.parse(v);
            this._parts.path = parts.path;
            this._parts.query = parts.query;
            this._parts.fragment = parts.fragment;
            this.build(!build);
            return this;
          };

          // fraction accessors
          p.subdomain = function (v, build) {
            if (this._parts.urn) {
              return v === undefined ? '' : this;
            }

            // convenience, return "www" from "www.example.org"
            if (v === undefined) {
              if (!this._parts.hostname || this.is('IP')) {
                return '';
              }

              // grab domain and add another segment
              var end = this._parts.hostname.length - this.domain().length - 1;
              return this._parts.hostname.substring(0, end) || '';
            } else {
              var e = this._parts.hostname.length - this.domain().length;
              var sub = this._parts.hostname.substring(0, e);
              var replace = new RegExp('^' + escapeRegEx(sub));

              if (v && v.charAt(v.length - 1) !== '.') {
                v += '.';
              }

              if (v) {
                URI.ensureValidHostname(v);
              }

              this._parts.hostname = this._parts.hostname.replace(replace, v);
              this.build(!build);
              return this;
            }
          };
          p.domain = function (v, build) {
            if (this._parts.urn) {
              return v === undefined ? '' : this;
            }

            if (typeof v === 'boolean') {
              build = v;
              v = undefined;
            }

            // convenience, return "example.org" from "www.example.org"
            if (v === undefined) {
              if (!this._parts.hostname || this.is('IP')) {
                return '';
              }

              // if hostname consists of 1 or 2 segments, it must be the domain
              var t = this._parts.hostname.match(/\./g);
              if (t && t.length < 2) {
                return this._parts.hostname;
              }

              // grab tld and add another segment
              var end = this._parts.hostname.length - this.tld(build).length - 1;
              end = this._parts.hostname.lastIndexOf('.', end - 1) + 1;
              return this._parts.hostname.substring(end) || '';
            } else {
              if (!v) {
                throw new TypeError('cannot set domain empty');
              }

              URI.ensureValidHostname(v);

              if (!this._parts.hostname || this.is('IP')) {
                this._parts.hostname = v;
              } else {
                var replace = new RegExp(escapeRegEx(this.domain()) + '$');
                this._parts.hostname = this._parts.hostname.replace(replace, v);
              }

              this.build(!build);
              return this;
            }
          };
          p.tld = function (v, build) {
            if (this._parts.urn) {
              return v === undefined ? '' : this;
            }

            if (typeof v === 'boolean') {
              build = v;
              v = undefined;
            }

            // return "org" from "www.example.org"
            if (v === undefined) {
              if (!this._parts.hostname || this.is('IP')) {
                return '';
              }

              var pos = this._parts.hostname.lastIndexOf('.');
              var tld = this._parts.hostname.substring(pos + 1);

              if (build !== true && SLD && SLD.list[tld.toLowerCase()]) {
                return SLD.get(this._parts.hostname) || tld;
              }

              return tld;
            } else {
              var replace;

              if (!v) {
                throw new TypeError('cannot set TLD empty');
              } else if (v.match(/[^a-zA-Z0-9-]/)) {
                if (SLD && SLD.is(v)) {
                  replace = new RegExp(escapeRegEx(this.tld()) + '$');
                  this._parts.hostname = this._parts.hostname.replace(replace, v);
                } else {
                  throw new TypeError('TLD "' + v + '" contains characters other than [A-Z0-9]');
                }
              } else if (!this._parts.hostname || this.is('IP')) {
                throw new ReferenceError('cannot set TLD on non-domain host');
              } else {
                replace = new RegExp(escapeRegEx(this.tld()) + '$');
                this._parts.hostname = this._parts.hostname.replace(replace, v);
              }

              this.build(!build);
              return this;
            }
          };
          p.directory = function (v, build) {
            if (this._parts.urn) {
              return v === undefined ? '' : this;
            }

            if (v === undefined || v === true) {
              if (!this._parts.path && !this._parts.hostname) {
                return '';
              }

              if (this._parts.path === '/') {
                return '/';
              }

              var end = this._parts.path.length - this.filename().length - 1;
              var res = this._parts.path.substring(0, end) || (this._parts.hostname ? '/' : '');

              return v ? URI.decodePath(res) : res;
            } else {
              var e = this._parts.path.length - this.filename().length;
              var directory = this._parts.path.substring(0, e);
              var replace = new RegExp('^' + escapeRegEx(directory));

              // fully qualifier directories begin with a slash
              if (!this.is('relative')) {
                if (!v) {
                  v = '/';
                }

                if (v.charAt(0) !== '/') {
                  v = '/' + v;
                }
              }

              // directories always end with a slash
              if (v && v.charAt(v.length - 1) !== '/') {
                v += '/';
              }

              v = URI.recodePath(v);
              this._parts.path = this._parts.path.replace(replace, v);
              this.build(!build);
              return this;
            }
          };
          p.filename = function (v, build) {
            if (this._parts.urn) {
              return v === undefined ? '' : this;
            }

            if (v === undefined || v === true) {
              if (!this._parts.path || this._parts.path === '/') {
                return '';
              }

              var pos = this._parts.path.lastIndexOf('/');
              var res = this._parts.path.substring(pos + 1);

              return v ? URI.decodePathSegment(res) : res;
            } else {
              var mutatedDirectory = false;

              if (v.charAt(0) === '/') {
                v = v.substring(1);
              }

              if (v.match(/\.?\//)) {
                mutatedDirectory = true;
              }

              var replace = new RegExp(escapeRegEx(this.filename()) + '$');
              v = URI.recodePath(v);
              this._parts.path = this._parts.path.replace(replace, v);

              if (mutatedDirectory) {
                this.normalizePath(build);
              } else {
                this.build(!build);
              }

              return this;
            }
          };
          p.suffix = function (v, build) {
            if (this._parts.urn) {
              return v === undefined ? '' : this;
            }

            if (v === undefined || v === true) {
              if (!this._parts.path || this._parts.path === '/') {
                return '';
              }

              var filename = this.filename();
              var pos = filename.lastIndexOf('.');
              var s, res;

              if (pos === -1) {
                return '';
              }

              // suffix may only contain alnum characters (yup, I made this up.)
              s = filename.substring(pos + 1);
              res = /^[a-z0-9%]+$/i.test(s) ? s : '';
              return v ? URI.decodePathSegment(res) : res;
            } else {
              if (v.charAt(0) === '.') {
                v = v.substring(1);
              }

              var suffix = this.suffix();
              var replace;

              if (!suffix) {
                if (!v) {
                  return this;
                }

                this._parts.path += '.' + URI.recodePath(v);
              } else if (!v) {
                replace = new RegExp(escapeRegEx('.' + suffix) + '$');
              } else {
                replace = new RegExp(escapeRegEx(suffix) + '$');
              }

              if (replace) {
                v = URI.recodePath(v);
                this._parts.path = this._parts.path.replace(replace, v);
              }

              this.build(!build);
              return this;
            }
          };
          p.segment = function (segment, v, build) {
            var separator = this._parts.urn ? ':' : '/';
            var path = this.path();
            var absolute = path.substring(0, 1) === '/';
            var segments = path.split(separator);

            if (segment !== undefined && typeof segment !== 'number') {
              build = v;
              v = segment;
              segment = undefined;
            }

            if (segment !== undefined && typeof segment !== 'number') {
              throw new Error('Bad segment "' + segment + '", must be 0-based integer');
            }

            if (absolute) {
              segments.shift();
            }

            if (segment < 0) {
              // allow negative indexes to address from the end
              segment = Math.max(segments.length + segment, 0);
            }

            if (v === undefined) {
              /*jshint laxbreak: true */
              return segment === undefined ? segments : segments[segment];
              /*jshint laxbreak: false */
            } else if (segment === null || segments[segment] === undefined) {
              if (isArray(v)) {
                segments = [];
                // collapse empty elements within array
                for (var i = 0, l = v.length; i < l; i++) {
                  if (!v[i].length && (!segments.length || !segments[segments.length - 1].length)) {
                    continue;
                  }

                  if (segments.length && !segments[segments.length - 1].length) {
                    segments.pop();
                  }

                  segments.push(v[i]);
                }
              } else if (v || typeof v === 'string') {
                if (segments[segments.length - 1] === '') {
                  // empty trailing elements have to be overwritten
                  // to prevent results such as /foo//bar
                  segments[segments.length - 1] = v;
                } else {
                  segments.push(v);
                }
              }
            } else {
              if (v) {
                segments[segment] = v;
              } else {
                segments.splice(segment, 1);
              }
            }

            if (absolute) {
              segments.unshift('');
            }

            return this.path(segments.join(separator), build);
          };
          p.segmentCoded = function (segment, v, build) {
            var segments, i, l;

            if (typeof segment !== 'number') {
              build = v;
              v = segment;
              segment = undefined;
            }

            if (v === undefined) {
              segments = this.segment(segment, v, build);
              if (!isArray(segments)) {
                segments = segments !== undefined ? URI.decode(segments) : undefined;
              } else {
                for (i = 0, l = segments.length; i < l; i++) {
                  segments[i] = URI.decode(segments[i]);
                }
              }

              return segments;
            }

            if (!isArray(v)) {
              v = typeof v === 'string' || v instanceof String ? URI.encode(v) : v;
            } else {
              for (i = 0, l = v.length; i < l; i++) {
                v[i] = URI.encode(v[i]);
              }
            }

            return this.segment(segment, v, build);
          };

          // mutating query string
          var q = p.query;
          p.query = function (v, build) {
            if (v === true) {
              return URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            } else if (typeof v === 'function') {
              var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
              var result = v.call(this, data);
              this._parts.query = URI.buildQuery(result || data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
              this.build(!build);
              return this;
            } else if (v !== undefined && typeof v !== 'string') {
              this._parts.query = URI.buildQuery(v, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
              this.build(!build);
              return this;
            } else {
              return q.call(this, v, build);
            }
          };
          p.setQuery = function (name, value, build) {
            var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);

            if (typeof name === 'string' || name instanceof String) {
              data[name] = value !== undefined ? value : null;
            } else if (typeof name === 'object') {
              for (var key in name) {
                if (hasOwn.call(name, key)) {
                  data[key] = name[key];
                }
              }
            } else {
              throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
            }

            this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
            if (typeof name !== 'string') {
              build = value;
            }

            this.build(!build);
            return this;
          };
          p.addQuery = function (name, value, build) {
            var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            URI.addQuery(data, name, value === undefined ? null : value);
            this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
            if (typeof name !== 'string') {
              build = value;
            }

            this.build(!build);
            return this;
          };
          p.removeQuery = function (name, value, build) {
            var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            URI.removeQuery(data, name, value);
            this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
            if (typeof name !== 'string') {
              build = value;
            }

            this.build(!build);
            return this;
          };
          p.hasQuery = function (name, value, withinArray) {
            var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            return URI.hasQuery(data, name, value, withinArray);
          };
          p.setSearch = p.setQuery;
          p.addSearch = p.addQuery;
          p.removeSearch = p.removeQuery;
          p.hasSearch = p.hasQuery;

          // sanitizing URLs
          p.normalize = function () {
            if (this._parts.urn) {
              return this.normalizeProtocol(false).normalizePath(false).normalizeQuery(false).normalizeFragment(false).build();
            }

            return this.normalizeProtocol(false).normalizeHostname(false).normalizePort(false).normalizePath(false).normalizeQuery(false).normalizeFragment(false).build();
          };
          p.normalizeProtocol = function (build) {
            if (typeof this._parts.protocol === 'string') {
              this._parts.protocol = this._parts.protocol.toLowerCase();
              this.build(!build);
            }

            return this;
          };
          p.normalizeHostname = function (build) {
            if (this._parts.hostname) {
              if (this.is('IDN') && punycode) {
                this._parts.hostname = punycode.toASCII(this._parts.hostname);
              } else if (this.is('IPv6') && IPv6) {
                this._parts.hostname = IPv6.best(this._parts.hostname);
              }

              this._parts.hostname = this._parts.hostname.toLowerCase();
              this.build(!build);
            }

            return this;
          };
          p.normalizePort = function (build) {
            // remove port of it's the protocol's default
            if (typeof this._parts.protocol === 'string' && this._parts.port === URI.defaultPorts[this._parts.protocol]) {
              this._parts.port = null;
              this.build(!build);
            }

            return this;
          };
          p.normalizePath = function (build) {
            var _path = this._parts.path;
            if (!_path) {
              return this;
            }

            if (this._parts.urn) {
              this._parts.path = URI.recodeUrnPath(this._parts.path);
              this.build(!build);
              return this;
            }

            if (this._parts.path === '/') {
              return this;
            }

            var _was_relative;
            var _leadingParents = '';
            var _parent, _pos;

            // handle relative paths
            if (_path.charAt(0) !== '/') {
              _was_relative = true;
              _path = '/' + _path;
            }

            // handle relative files (as opposed to directories)
            if (_path.slice(-3) === '/..' || _path.slice(-2) === '/.') {
              _path += '/';
            }

            // resolve simples
            _path = _path.replace(/(\/(\.\/)+)|(\/\.$)/g, '/').replace(/\/{2,}/g, '/');

            // remember leading parents
            if (_was_relative) {
              _leadingParents = _path.substring(1).match(/^(\.\.\/)+/) || '';
              if (_leadingParents) {
                _leadingParents = _leadingParents[0];
              }
            }

            // resolve parents
            while (true) {
              _parent = _path.indexOf('/..');
              if (_parent === -1) {
                // no more ../ to resolve
                break;
              } else if (_parent === 0) {
                // top level cannot be relative, skip it
                _path = _path.substring(3);
                continue;
              }

              _pos = _path.substring(0, _parent).lastIndexOf('/');
              if (_pos === -1) {
                _pos = _parent;
              }
              _path = _path.substring(0, _pos) + _path.substring(_parent + 3);
            }

            // revert to relative
            if (_was_relative && this.is('relative')) {
              _path = _leadingParents + _path.substring(1);
            }

            _path = URI.recodePath(_path);
            this._parts.path = _path;
            this.build(!build);
            return this;
          };
          p.normalizePathname = p.normalizePath;
          p.normalizeQuery = function (build) {
            if (typeof this._parts.query === 'string') {
              if (!this._parts.query.length) {
                this._parts.query = null;
              } else {
                this.query(URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace));
              }

              this.build(!build);
            }

            return this;
          };
          p.normalizeFragment = function (build) {
            if (!this._parts.fragment) {
              this._parts.fragment = null;
              this.build(!build);
            }

            return this;
          };
          p.normalizeSearch = p.normalizeQuery;
          p.normalizeHash = p.normalizeFragment;

          p.iso8859 = function () {
            // expect unicode input, iso8859 output
            var e = URI.encode;
            var d = URI.decode;

            URI.encode = escape;
            URI.decode = decodeURIComponent;
            try {
              this.normalize();
            } finally {
              URI.encode = e;
              URI.decode = d;
            }
            return this;
          };

          p.unicode = function () {
            // expect iso8859 input, unicode output
            var e = URI.encode;
            var d = URI.decode;

            URI.encode = strictEncodeURIComponent;
            URI.decode = unescape;
            try {
              this.normalize();
            } finally {
              URI.encode = e;
              URI.decode = d;
            }
            return this;
          };

          p.readable = function () {
            var uri = this.clone();
            // removing username, password, because they shouldn't be displayed according to RFC 3986
            uri.username('').password('').normalize();
            var t = '';
            if (uri._parts.protocol) {
              t += uri._parts.protocol + '://';
            }

            if (uri._parts.hostname) {
              if (uri.is('punycode') && punycode) {
                t += punycode.toUnicode(uri._parts.hostname);
                if (uri._parts.port) {
                  t += ':' + uri._parts.port;
                }
              } else {
                t += uri.host();
              }
            }

            if (uri._parts.hostname && uri._parts.path && uri._parts.path.charAt(0) !== '/') {
              t += '/';
            }

            t += uri.path(true);
            if (uri._parts.query) {
              var q = '';
              for (var i = 0, qp = uri._parts.query.split('&'), l = qp.length; i < l; i++) {
                var kv = (qp[i] || '').split('=');
                q += '&' + URI.decodeQuery(kv[0], this._parts.escapeQuerySpace).replace(/&/g, '%26');

                if (kv[1] !== undefined) {
                  q += '=' + URI.decodeQuery(kv[1], this._parts.escapeQuerySpace).replace(/&/g, '%26');
                }
              }
              t += '?' + q.substring(1);
            }

            t += URI.decodeQuery(uri.hash(), true);
            return t;
          };

          // resolving relative and absolute URLs
          p.absoluteTo = function (base) {
            var resolved = this.clone();
            var properties = ['protocol', 'username', 'password', 'hostname', 'port'];
            var basedir, i, p;

            if (this._parts.urn) {
              throw new Error('URNs do not have any generally defined hierarchical components');
            }

            if (!(base instanceof URI)) {
              base = new URI(base);
            }

            if (!resolved._parts.protocol) {
              resolved._parts.protocol = base._parts.protocol;
            }

            if (this._parts.hostname) {
              return resolved;
            }

            for (i = 0; p = properties[i]; i++) {
              resolved._parts[p] = base._parts[p];
            }

            if (!resolved._parts.path) {
              resolved._parts.path = base._parts.path;
              if (!resolved._parts.query) {
                resolved._parts.query = base._parts.query;
              }
            } else if (resolved._parts.path.substring(-2) === '..') {
              resolved._parts.path += '/';
            }

            if (resolved.path().charAt(0) !== '/') {
              basedir = base.directory();
              basedir = basedir ? basedir : base.path().indexOf('/') === 0 ? '/' : '';
              resolved._parts.path = (basedir ? basedir + '/' : '') + resolved._parts.path;
              resolved.normalizePath();
            }

            resolved.build();
            return resolved;
          };
          p.relativeTo = function (base) {
            var relative = this.clone().normalize();
            var relativeParts, baseParts, common, relativePath, basePath;

            if (relative._parts.urn) {
              throw new Error('URNs do not have any generally defined hierarchical components');
            }

            base = new URI(base).normalize();
            relativeParts = relative._parts;
            baseParts = base._parts;
            relativePath = relative.path();
            basePath = base.path();

            if (relativePath.charAt(0) !== '/') {
              throw new Error('URI is already relative');
            }

            if (basePath.charAt(0) !== '/') {
              throw new Error('Cannot calculate a URI relative to another relative URI');
            }

            if (relativeParts.protocol === baseParts.protocol) {
              relativeParts.protocol = null;
            }

            if (relativeParts.username !== baseParts.username || relativeParts.password !== baseParts.password) {
              return relative.build();
            }

            if (relativeParts.protocol !== null || relativeParts.username !== null || relativeParts.password !== null) {
              return relative.build();
            }

            if (relativeParts.hostname === baseParts.hostname && relativeParts.port === baseParts.port) {
              relativeParts.hostname = null;
              relativeParts.port = null;
            } else {
              return relative.build();
            }

            if (relativePath === basePath) {
              relativeParts.path = '';
              return relative.build();
            }

            // determine common sub path
            common = URI.commonPath(relativePath, basePath);

            // If the paths have nothing in common, return a relative URL with the absolute path.
            if (!common) {
              return relative.build();
            }

            var parents = baseParts.path.substring(common.length).replace(/[^\/]*$/, '').replace(/.*?\//g, '../');

            relativeParts.path = parents + relativeParts.path.substring(common.length) || './';

            return relative.build();
          };

          // comparing URIs
          p.equals = function (uri) {
            var one = this.clone();
            var two = new URI(uri);
            var one_map = {};
            var two_map = {};
            var checked = {};
            var one_query, two_query, key;

            one.normalize();
            two.normalize();

            // exact match
            if (one.toString() === two.toString()) {
              return true;
            }

            // extract query string
            one_query = one.query();
            two_query = two.query();
            one.query('');
            two.query('');

            // definitely not equal if not even non-query parts match
            if (one.toString() !== two.toString()) {
              return false;
            }

            // query parameters have the same length, even if they're permuted
            if (one_query.length !== two_query.length) {
              return false;
            }

            one_map = URI.parseQuery(one_query, this._parts.escapeQuerySpace);
            two_map = URI.parseQuery(two_query, this._parts.escapeQuerySpace);

            for (key in one_map) {
              if (hasOwn.call(one_map, key)) {
                if (!isArray(one_map[key])) {
                  if (one_map[key] !== two_map[key]) {
                    return false;
                  }
                } else if (!arraysEqual(one_map[key], two_map[key])) {
                  return false;
                }

                checked[key] = true;
              }
            }

            for (key in two_map) {
              if (hasOwn.call(two_map, key)) {
                if (!checked[key]) {
                  // two contains a parameter not present in one
                  return false;
                }
              }
            }

            return true;
          };

          // state
          p.duplicateQueryParameters = function (v) {
            this._parts.duplicateQueryParameters = !!v;
            return this;
          };

          p.escapeQuerySpace = function (v) {
            this._parts.escapeQuerySpace = !!v;
            return this;
          };

          return URI;
        });

        /***/
      },
/* 14 */
/***/
      function (module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_RESULT__; /* WEBPACK VAR INJECTION */
        (function (module, global) { /*! http://mths.be/punycode v1.2.3 by @mathias */
          'use strict';

          ;
          (function (root) {

            /** Detect free variables */
            var freeExports = typeof exports == 'object' && exports;
            var freeModule = typeof module == 'object' && module && module.exports == freeExports && module;
            var freeGlobal = typeof global == 'object' && global;
            if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
              root = freeGlobal;
            }

            /**
             * The `punycode` object.
             * @name punycode
             * @type Object
             */
            var punycode,


              /** Highest positive signed 32-bit float value */
              maxInt = 2147483647,
              // aka. 0x7FFFFFFF or 2^31-1

              /** Bootstring parameters */
              base = 36,
              tMin = 1,
              tMax = 26,
              skew = 38,
              damp = 700,
              initialBias = 72,
              initialN = 128,
              // 0x80
              delimiter = '-',
              // '\x2D'

              /** Regular expressions */
              regexPunycode = /^xn--/,
              regexNonASCII = /[^ -~]/,
              // unprintable ASCII chars + non-ASCII chars
              regexSeparators = /\x2E|\u3002|\uFF0E|\uFF61/g,
              // RFC 3490 separators

              /** Error messages */
              errors = {
                'overflow': 'Overflow: input needs wider integers to process',
                'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                'invalid-input': 'Invalid input'
              },


              /** Convenience shortcuts */
              baseMinusTMin = base - tMin,
              floor = Math.floor,
              stringFromCharCode = String.fromCharCode,


              /** Temporary variable */
              key;

            /*--------------------------------------------------------------------------*/

            /**
             * A generic error utility function.
             * @private
             * @param {String} type The error type.
             * @returns {Error} Throws a `RangeError` with the applicable error message.
             */
            function error(type) {
              throw RangeError(errors[type]);
            }

            /**
             * A generic `Array#map` utility function.
             * @private
             * @param {Array} array The array to iterate over.
             * @param {Function} callback The function that gets called for every array
             * item.
             * @returns {Array} A new array of values returned by the callback function.
             */
            function map(array, fn) {
              var length = array.length;
              while (length--) {
                array[length] = fn(array[length]);
              }
              return array;
            }

            /**
             * A simple `Array#map`-like wrapper to work with domain name strings.
             * @private
             * @param {String} domain The domain name.
             * @param {Function} callback The function that gets called for every
             * character.
             * @returns {Array} A new string of characters returned by the callback
             * function.
             */
            function mapDomain(string, fn) {
              return map(string.split(regexSeparators), fn).join('.');
            }

            /**
             * Creates an array containing the numeric code points of each Unicode
             * character in the string. While JavaScript uses UCS-2 internally,
             * this function will convert a pair of surrogate halves (each of which
             * UCS-2 exposes as separate characters) into a single code point,
             * matching UTF-16.
             * @see `punycode.ucs2.encode`
             * @see <http://mathiasbynens.be/notes/javascript-encoding>
             * @memberOf punycode.ucs2
             * @name decode
             * @param {String} string The Unicode input string (UCS-2).
             * @returns {Array} The new array of code points.
             */
            function ucs2decode(string) {
              var output = [],
                counter = 0,
                length = string.length,
                value,
                extra;
              while (counter < length) {
                value = string.charCodeAt(counter++);
                if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                  // high surrogate, and there is a next character
                  extra = string.charCodeAt(counter++);
                  if ((extra & 0xFC00) == 0xDC00) {
                    // low surrogate
                    output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                  } else {
                    // unmatched surrogate; only append this code unit, in case the next
                    // code unit is the high surrogate of a surrogate pair
                    output.push(value);
                    counter--;
                  }
                } else {
                  output.push(value);
                }
              }
              return output;
            }

            /**
             * Creates a string based on an array of numeric code points.
             * @see `punycode.ucs2.decode`
             * @memberOf punycode.ucs2
             * @name encode
             * @param {Array} codePoints The array of numeric code points.
             * @returns {String} The new Unicode string (UCS-2).
             */
            function ucs2encode(array) {
              return map(array, function (value) {
                var output = '';
                if (value > 0xFFFF) {
                  value -= 0x10000;
                  output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                  value = 0xDC00 | value & 0x3FF;
                }
                output += stringFromCharCode(value);
                return output;
              }).join('');
            }

            /**
             * Converts a basic code point into a digit/integer.
             * @see `digitToBasic()`
             * @private
             * @param {Number} codePoint The basic numeric code point value.
             * @returns {Number} The numeric value of a basic code point (for use in
             * representing integers) in the range `0` to `base - 1`, or `base` if
             * the code point does not represent a value.
             */
            function basicToDigit(codePoint) {
              if (codePoint - 48 < 10) {
                return codePoint - 22;
              }
              if (codePoint - 65 < 26) {
                return codePoint - 65;
              }
              if (codePoint - 97 < 26) {
                return codePoint - 97;
              }
              return base;
            }

            /**
             * Converts a digit/integer into a basic code point.
             * @see `basicToDigit()`
             * @private
             * @param {Number} digit The numeric value of a basic code point.
             * @returns {Number} The basic code point whose value (when used for
             * representing integers) is `digit`, which needs to be in the range
             * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
             * used; else, the lowercase form is used. The behavior is undefined
             * if `flag` is non-zero and `digit` has no uppercase form.
             */
            function digitToBasic(digit, flag) {
              //  0..25 map to ASCII a..z or A..Z
              // 26..35 map to ASCII 0..9
              return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
            }

            /**
             * Bias adaptation function as per section 3.4 of RFC 3492.
             * http://tools.ietf.org/html/rfc3492#section-3.4
             * @private
             */
            function adapt(delta, numPoints, firstTime) {
              var k = 0;
              delta = firstTime ? floor(delta / damp) : delta >> 1;
              delta += floor(delta / numPoints);
              for (; /* no initialization */ delta > baseMinusTMin * tMax >> 1; k += base) {
                delta = floor(delta / baseMinusTMin);
              }
              return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
            }

            /**
             * Converts a Punycode string of ASCII-only symbols to a string of Unicode
             * symbols.
             * @memberOf punycode
             * @param {String} input The Punycode string of ASCII-only symbols.
             * @returns {String} The resulting string of Unicode symbols.
             */
            function decode(input) {
              // Don't use UCS-2
              var output = [],
                inputLength = input.length,
                out,
                i = 0,
                n = initialN,
                bias = initialBias,
                basic,
                j,
                index,
                oldi,
                w,
                k,
                digit,
                t,
                length,

                /** Cached calculation results */
                baseMinusT;

              // Handle the basic code points: let `basic` be the number of input code
              // points before the last delimiter, or `0` if there is none, then copy
              // the first basic code points to the output.

              basic = input.lastIndexOf(delimiter);
              if (basic < 0) {
                basic = 0;
              }

              for (j = 0; j < basic; ++j) {
                // if it's not a basic code point
                if (input.charCodeAt(j) >= 0x80) {
                  error('not-basic');
                }
                output.push(input.charCodeAt(j));
              }

              // Main decoding loop: start just after the last delimiter if any basic code
              // points were copied; start at the beginning otherwise.

              for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */ {

                // `index` is the index of the next character to be consumed.
                // Decode a generalized variable-length integer into `delta`,
                // which gets added to `i`. The overflow checking is easier
                // if we increase `i` as we go, then subtract off its starting
                // value at the end to obtain `delta`.
                for (oldi = i, w = 1, k = base;; /* no condition */ k += base) {

                  if (index >= inputLength) {
                    error('invalid-input');
                  }

                  digit = basicToDigit(input.charCodeAt(index++));

                  if (digit >= base || digit > floor((maxInt - i) / w)) {
                    error('overflow');
                  }

                  i += digit * w;
                  t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

                  if (digit < t) {
                    break;
                  }

                  baseMinusT = base - t;
                  if (w > floor(maxInt / baseMinusT)) {
                    error('overflow');
                  }

                  w *= baseMinusT;
                }

                out = output.length + 1;
                bias = adapt(i - oldi, out, oldi == 0);

                // `i` was supposed to wrap around from `out` to `0`,
                // incrementing `n` each time, so we'll fix that now:
                if (floor(i / out) > maxInt - n) {
                  error('overflow');
                }

                n += floor(i / out);
                i %= out;

                // Insert `n` at position `i` of the output
                output.splice(i++, 0, n);
              }

              return ucs2encode(output);
            }

            /**
             * Converts a string of Unicode symbols to a Punycode string of ASCII-only
             * symbols.
             * @memberOf punycode
             * @param {String} input The string of Unicode symbols.
             * @returns {String} The resulting Punycode string of ASCII-only symbols.
             */
            function encode(input) {
              var n,
                delta,
                handledCPCount,
                basicLength,
                bias,
                j,
                m,
                q,
                k,
                t,
                currentValue,
                output = [],

                /** `inputLength` will hold the number of code points in `input`. */
                inputLength,

                /** Cached calculation results */
                handledCPCountPlusOne,
                baseMinusT,
                qMinusT;

              // Convert the input in UCS-2 to Unicode
              input = ucs2decode(input);

              // Cache the length
              inputLength = input.length;

              // Initialize the state
              n = initialN;
              delta = 0;
              bias = initialBias;

              // Handle the basic code points
              for (j = 0; j < inputLength; ++j) {
                currentValue = input[j];
                if (currentValue < 0x80) {
                  output.push(stringFromCharCode(currentValue));
                }
              }

              handledCPCount = basicLength = output.length;

              // `handledCPCount` is the number of code points that have been handled;
              // `basicLength` is the number of basic code points.

              // Finish the basic string - if it is not empty - with a delimiter
              if (basicLength) {
                output.push(delimiter);
              }

              // Main encoding loop:
              while (handledCPCount < inputLength) {

                // All non-basic code points < n have been handled already. Find the next
                // larger one:
                for (m = maxInt, j = 0; j < inputLength; ++j) {
                  currentValue = input[j];
                  if (currentValue >= n && currentValue < m) {
                    m = currentValue;
                  }
                }

                // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
                // but guard against overflow
                handledCPCountPlusOne = handledCPCount + 1;
                if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                  error('overflow');
                }

                delta += (m - n) * handledCPCountPlusOne;
                n = m;

                for (j = 0; j < inputLength; ++j) {
                  currentValue = input[j];

                  if (currentValue < n && ++delta > maxInt) {
                    error('overflow');
                  }

                  if (currentValue == n) {
                    // Represent delta as a generalized variable-length integer
                    for (q = delta, k = base;; /* no condition */ k += base) {
                      t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                      if (q < t) {
                        break;
                      }
                      qMinusT = q - t;
                      baseMinusT = base - t;
                      output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                      q = floor(qMinusT / baseMinusT);
                    }

                    output.push(stringFromCharCode(digitToBasic(q, 0)));
                    bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                    delta = 0;
                    ++handledCPCount;
                  }
                }

                ++delta;
                ++n;
              }
              return output.join('');
            }

            /**
             * Converts a Punycode string representing a domain name to Unicode. Only the
             * Punycoded parts of the domain name will be converted, i.e. it doesn't
             * matter if you call it on a string that has already been converted to
             * Unicode.
             * @memberOf punycode
             * @param {String} domain The Punycode domain name to convert to Unicode.
             * @returns {String} The Unicode representation of the given Punycode
             * string.
             */
            function toUnicode(domain) {
              return mapDomain(domain, function (string) {
                return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
              });
            }

            /**
             * Converts a Unicode string representing a domain name to Punycode. Only the
             * non-ASCII parts of the domain name will be converted, i.e. it doesn't
             * matter if you call it with a domain that's already in ASCII.
             * @memberOf punycode
             * @param {String} domain The domain name to convert, as a Unicode string.
             * @returns {String} The Punycode representation of the given domain name.
             */
            function toASCII(domain) {
              return mapDomain(domain, function (string) {
                return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
              });
            }

            /*--------------------------------------------------------------------------*/

            /** Define the public API */
            punycode = {
              /**
               * A string representing the current Punycode.js version number.
               * @memberOf punycode
               * @type String
               */
              'version': '1.2.3',
              /**
               * An object of methods to convert from JavaScript's internal character
               * representation (UCS-2) to Unicode code points, and back.
               * @see <http://mathiasbynens.be/notes/javascript-encoding>
               * @memberOf punycode
               * @type Object
               */
              'ucs2': {
                'decode': ucs2decode,
                'encode': ucs2encode
              },
              'decode': decode,
              'encode': encode,
              'toASCII': toASCII,
              'toUnicode': toUnicode
            };

            /** Expose `punycode` */
            // Some AMD build optimizers, like r.js, check for specific condition patterns
            // like the following:
            if (true) {
              !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return punycode;
              }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (freeExports && !freeExports.nodeType) {
              if (freeModule) {
                // in Node.js or RingoJS v0.8.0+
                freeModule.exports = punycode;
              } else {
                // in Narwhal or RingoJS v0.7.0-
                for (key in punycode) {
                  punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
                }
              }
            } else {
              // in Rhino or a web browser
              root.punycode = punycode;
            }
          })(undefined);
          /* WEBPACK VAR INJECTION */
        }.call(exports, __webpack_require__(3)(module), (function () {
          return this;
        }())))

        /***/
      },
/* 15 */
/***/
      function (module, exports, __webpack_require__) {

        /*!
         * URI.js - Mutating URLs
         * IPv6 Support
         *
         * Version: 1.16.1
         *
         * Author: Rodney Rehm
         * Web: http://medialize.github.io/URI.js/
         *
         * Licensed under
         *   MIT License http://www.opensource.org/licenses/mit-license
         *   GPL v3 http://opensource.org/licenses/GPL-3.0
         *
         */

        'use strict';

        (function (root, factory) {
          'use strict';
          // https://github.com/umdjs/umd/blob/master/returnExports.js
          if (true) {
            // Node
            module.exports = factory();
          } else if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define(factory);
          } else {
            // Browser globals (root is window)
            root.IPv6 = factory(root);
          }
        })(undefined, function (root) {
          'use strict';

          /*
          var _in = "fe80:0000:0000:0000:0204:61ff:fe9d:f156";
          var _out = IPv6.best(_in);
          var _expected = "fe80::204:61ff:fe9d:f156";
           console.log(_in, _out, _expected, _out === _expected);
          */

          // save current IPv6 variable, if any
          var _IPv6 = root && root.IPv6;

          function bestPresentation(address) {
            // based on:
            // Javascript to test an IPv6 address for proper format, and to
            // present the "best text representation" according to IETF Draft RFC at
            // http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04
            // 8 Feb 2010 Rich Brown, Dartware, LLC
            // Please feel free to use this code as long as you provide a link to
            // http://www.intermapper.com
            // http://intermapper.com/support/tools/IPV6-Validator.aspx
            // http://download.dartware.com/thirdparty/ipv6validator.js

            var _address = address.toLowerCase();
            var segments = _address.split(':');
            var length = segments.length;
            var total = 8;

            // trim colons (:: or ::a:b:c… or …a:b:c::)
            if (segments[0] === '' && segments[1] === '' && segments[2] === '') {
              // must have been ::
              // remove first two items
              segments.shift();
              segments.shift();
            } else if (segments[0] === '' && segments[1] === '') {
              // must have been ::xxxx
              // remove the first item
              segments.shift();
            } else if (segments[length - 1] === '' && segments[length - 2] === '') {
              // must have been xxxx::
              segments.pop();
            }

            length = segments.length;

            // adjust total segments for IPv4 trailer
            if (segments[length - 1].indexOf('.') !== -1) {
              // found a "." which means IPv4
              total = 7;
            }

            // fill empty segments them with "0000"
            var pos;
            for (pos = 0; pos < length; pos++) {
              if (segments[pos] === '') {
                break;
              }
            }

            if (pos < total) {
              segments.splice(pos, 1, '0000');
              while (segments.length < total) {
                segments.splice(pos, 0, '0000');
              }

              length = segments.length;
            }

            // strip leading zeros
            var _segments;
            for (var i = 0; i < total; i++) {
              _segments = segments[i].split('');
              for (var j = 0; j < 3; j++) {
                if (_segments[0] === '0' && _segments.length > 1) {
                  _segments.splice(0, 1);
                } else {
                  break;
                }
              }

              segments[i] = _segments.join('');
            }

            // find longest sequence of zeroes and coalesce them into one segment
            var best = -1;
            var _best = 0;
            var _current = 0;
            var current = -1;
            var inzeroes = false;
            // i; already declared

            for (i = 0; i < total; i++) {
              if (inzeroes) {
                if (segments[i] === '0') {
                  _current += 1;
                } else {
                  inzeroes = false;
                  if (_current > _best) {
                    best = current;
                    _best = _current;
                  }
                }
              } else {
                if (segments[i] === '0') {
                  inzeroes = true;
                  current = i;
                  _current = 1;
                }
              }
            }

            if (_current > _best) {
              best = current;
              _best = _current;
            }

            if (_best > 1) {
              segments.splice(best, _best, '');
            }

            length = segments.length;

            // assemble remaining segments
            var result = '';
            if (segments[0] === '') {
              result = ':';
            }

            for (i = 0; i < length; i++) {
              result += segments[i];
              if (i === length - 1) {
                break;
              }

              result += ':';
            }

            if (segments[length - 1] === '') {
              result += ':';
            }

            return result;
          }

          function noConflict() {
            /*jshint validthis: true */
            if (root.IPv6 === this) {
              root.IPv6 = _IPv6;
            }

            return this;
          }

          return {
            best: bestPresentation,
            noConflict: noConflict
          };
        });

        /***/
      },
/* 16 */
/***/
      function (module, exports, __webpack_require__) {

        /*!
         * URI.js - Mutating URLs
         * Second Level Domain (SLD) Support
         *
         * Version: 1.16.1
         *
         * Author: Rodney Rehm
         * Web: http://medialize.github.io/URI.js/
         *
         * Licensed under
         *   MIT License http://www.opensource.org/licenses/mit-license
         *   GPL v3 http://opensource.org/licenses/GPL-3.0
         *
         */

        'use strict';

        (function (root, factory) {
          'use strict';
          // https://github.com/umdjs/umd/blob/master/returnExports.js
          if (true) {
            // Node
            module.exports = factory();
          } else if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define(factory);
          } else {
            // Browser globals (root is window)
            root.SecondLevelDomains = factory(root);
          }
        })(undefined, function (root) {
          'use strict';

          // save current SecondLevelDomains variable, if any
          var _SecondLevelDomains = root && root.SecondLevelDomains;

          var SLD = {
            // list of known Second Level Domains
            // converted list of SLDs from https://github.com/gavingmiller/second-level-domains
            // ----
            // publicsuffix.org is more current and actually used by a couple of browsers internally.
            // downside is it also contains domains like "dyndns.org" - which is fine for the security
            // issues browser have to deal with (SOP for cookies, etc) - but is way overboard for URI.js
            // ----
            list: {
              'ac': ' com gov mil net org ',
              'ae': ' ac co gov mil name net org pro sch ',
              'af': ' com edu gov net org ',
              'al': ' com edu gov mil net org ',
              'ao': ' co ed gv it og pb ',
              'ar': ' com edu gob gov int mil net org tur ',
              'at': ' ac co gv or ',
              'au': ' asn com csiro edu gov id net org ',
              'ba': ' co com edu gov mil net org rs unbi unmo unsa untz unze ',
              'bb': ' biz co com edu gov info net org store tv ',
              'bh': ' biz cc com edu gov info net org ',
              'bn': ' com edu gov net org ',
              'bo': ' com edu gob gov int mil net org tv ',
              'br': ' adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ',
              'bs': ' com edu gov net org ',
              'bz': ' du et om ov rg ',
              'ca': ' ab bc mb nb nf nl ns nt nu on pe qc sk yk ',
              'ck': ' biz co edu gen gov info net org ',
              'cn': ' ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ',
              'co': ' com edu gov mil net nom org ',
              'cr': ' ac c co ed fi go or sa ',
              'cy': ' ac biz com ekloges gov ltd name net org parliament press pro tm ',
              'do': ' art com edu gob gov mil net org sld web ',
              'dz': ' art asso com edu gov net org pol ',
              'ec': ' com edu fin gov info med mil net org pro ',
              'eg': ' com edu eun gov mil name net org sci ',
              'er': ' com edu gov ind mil net org rochest w ',
              'es': ' com edu gob nom org ',
              'et': ' biz com edu gov info name net org ',
              'fj': ' ac biz com info mil name net org pro ',
              'fk': ' ac co gov net nom org ',
              'fr': ' asso com f gouv nom prd presse tm ',
              'gg': ' co net org ',
              'gh': ' com edu gov mil org ',
              'gn': ' ac com gov net org ',
              'gr': ' com edu gov mil net org ',
              'gt': ' com edu gob ind mil net org ',
              'gu': ' com edu gov net org ',
              'hk': ' com edu gov idv net org ',
              'hu': ' 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ',
              'id': ' ac co go mil net or sch web ',
              'il': ' ac co gov idf k12 muni net org ',
              'in': ' ac co edu ernet firm gen gov i ind mil net nic org res ',
              'iq': ' com edu gov i mil net org ',
              'ir': ' ac co dnssec gov i id net org sch ',
              'it': ' edu gov ',
              'je': ' co net org ',
              'jo': ' com edu gov mil name net org sch ',
              'jp': ' ac ad co ed go gr lg ne or ',
              'ke': ' ac co go info me mobi ne or sc ',
              'kh': ' com edu gov mil net org per ',
              'ki': ' biz com de edu gov info mob net org tel ',
              'km': ' asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ',
              'kn': ' edu gov net org ',
              'kr': ' ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ',
              'kw': ' com edu gov net org ',
              'ky': ' com edu gov net org ',
              'kz': ' com edu gov mil net org ',
              'lb': ' com edu gov net org ',
              'lk': ' assn com edu gov grp hotel int ltd net ngo org sch soc web ',
              'lr': ' com edu gov net org ',
              'lv': ' asn com conf edu gov id mil net org ',
              'ly': ' com edu gov id med net org plc sch ',
              'ma': ' ac co gov m net org press ',
              'mc': ' asso tm ',
              'me': ' ac co edu gov its net org priv ',
              'mg': ' com edu gov mil nom org prd tm ',
              'mk': ' com edu gov inf name net org pro ',
              'ml': ' com edu gov net org presse ',
              'mn': ' edu gov org ',
              'mo': ' com edu gov net org ',
              'mt': ' com edu gov net org ',
              'mv': ' aero biz com coop edu gov info int mil museum name net org pro ',
              'mw': ' ac co com coop edu gov int museum net org ',
              'mx': ' com edu gob net org ',
              'my': ' com edu gov mil name net org sch ',
              'nf': ' arts com firm info net other per rec store web ',
              'ng': ' biz com edu gov mil mobi name net org sch ',
              'ni': ' ac co com edu gob mil net nom org ',
              'np': ' com edu gov mil net org ',
              'nr': ' biz com edu gov info net org ',
              'om': ' ac biz co com edu gov med mil museum net org pro sch ',
              'pe': ' com edu gob mil net nom org sld ',
              'ph': ' com edu gov i mil net ngo org ',
              'pk': ' biz com edu fam gob gok gon gop gos gov net org web ',
              'pl': ' art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ',
              'pr': ' ac biz com edu est gov info isla name net org pro prof ',
              'ps': ' com edu gov net org plo sec ',
              'pw': ' belau co ed go ne or ',
              'ro': ' arts com firm info nom nt org rec store tm www ',
              'rs': ' ac co edu gov in org ',
              'sb': ' com edu gov net org ',
              'sc': ' com edu gov net org ',
              'sh': ' co com edu gov net nom org ',
              'sl': ' com edu gov net org ',
              'st': ' co com consulado edu embaixada gov mil net org principe saotome store ',
              'sv': ' com edu gob org red ',
              'sz': ' ac co org ',
              'tr': ' av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ',
              'tt': ' aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ',
              'tw': ' club com ebiz edu game gov idv mil net org ',
              'mu': ' ac co com gov net or org ',
              'mz': ' ac co edu gov org ',
              'na': ' co com ',
              'nz': ' ac co cri geek gen govt health iwi maori mil net org parliament school ',
              'pa': ' abo ac com edu gob ing med net nom org sld ',
              'pt': ' com edu gov int net nome org publ ',
              'py': ' com edu gov mil net org ',
              'qa': ' com edu gov mil net org ',
              're': ' asso com nom ',
              'ru': ' ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ',
              'rw': ' ac co com edu gouv gov int mil net ',
              'sa': ' com edu gov med net org pub sch ',
              'sd': ' com edu gov info med net org tv ',
              'se': ' a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ',
              'sg': ' com edu gov idn net org per ',
              'sn': ' art com edu gouv org perso univ ',
              'sy': ' com edu gov mil net news org ',
              'th': ' ac co go in mi net or ',
              'tj': ' ac biz co com edu go gov info int mil name net nic org test web ',
              'tn': ' agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ',
              'tz': ' ac co go ne or ',
              'ua': ' biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ',
              'ug': ' ac co go ne or org sc ',
              'uk': ' ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ',
              'us': ' dni fed isa kids nsn ',
              'uy': ' com edu gub mil net org ',
              've': ' co com edu gob info mil net org web ',
              'vi': ' co com k12 net org ',
              'vn': ' ac biz com edu gov health info int name net org pro ',
              'ye': ' co com gov ltd me net org plc ',
              'yu': ' ac co edu gov org ',
              'za': ' ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ',
              'zm': ' ac co com edu gov net org sch '
            },
            // gorhill 2013-10-25: Using indexOf() instead Regexp(). Significant boost
            // in both performance and memory footprint. No initialization required.
            // http://jsperf.com/uri-js-sld-regex-vs-binary-search/4
            // Following methods use lastIndexOf() rather than array.split() in order
            // to avoid any memory allocations.
            has: function has(domain) {
              var tldOffset = domain.lastIndexOf('.');
              if (tldOffset <= 0 || tldOffset >= domain.length - 1) {
                return false;
              }
              var sldOffset = domain.lastIndexOf('.', tldOffset - 1);
              if (sldOffset <= 0 || sldOffset >= tldOffset - 1) {
                return false;
              }
              var sldList = SLD.list[domain.slice(tldOffset + 1)];
              if (!sldList) {
                return false;
              }
              return sldList.indexOf(' ' + domain.slice(sldOffset + 1, tldOffset) + ' ') >= 0;
            },
            is: function is(domain) {
              var tldOffset = domain.lastIndexOf('.');
              if (tldOffset <= 0 || tldOffset >= domain.length - 1) {
                return false;
              }
              var sldOffset = domain.lastIndexOf('.', tldOffset - 1);
              if (sldOffset >= 0) {
                return false;
              }
              var sldList = SLD.list[domain.slice(tldOffset + 1)];
              if (!sldList) {
                return false;
              }
              return sldList.indexOf(' ' + domain.slice(0, tldOffset) + ' ') >= 0;
            },
            get: function get(domain) {
              var tldOffset = domain.lastIndexOf('.');
              if (tldOffset <= 0 || tldOffset >= domain.length - 1) {
                return null;
              }
              var sldOffset = domain.lastIndexOf('.', tldOffset - 1);
              if (sldOffset <= 0 || sldOffset >= tldOffset - 1) {
                return null;
              }
              var sldList = SLD.list[domain.slice(tldOffset + 1)];
              if (!sldList) {
                return null;
              }
              if (sldList.indexOf(' ' + domain.slice(sldOffset + 1, tldOffset) + ' ') < 0) {
                return null;
              }
              return domain.slice(sldOffset + 1);
            },
            noConflict: function noConflict() {
              if (root.SecondLevelDomains === this) {
                root.SecondLevelDomains = _SecondLevelDomains;
              }
              return this;
            }
          };

          return SLD;
        });

        /***/
      },
/* 17 */
/***/
      function (module, exports, __webpack_require__) {

        /**
         * @overview
         * chrome.cookies.Cookie fake module
         */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        var _createClass = (function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            'default': obj
          };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        var _lodash = __webpack_require__(2);

        var _lodash2 = _interopRequireDefault(_lodash);

        var _URIjs = __webpack_require__(13);

        var _URIjs2 = _interopRequireDefault(_URIjs);

        var ChromeCookie = (function () {
          function ChromeCookie(details) {
            _classCallCheck(this, ChromeCookie);

            ChromeCookie.assertParams(details);
            this.details = details;
            this.url = details.url;
          }

          /**
           * get chrome cookie value
           * @returns {Object}
           */

          _createClass(ChromeCookie, [{
            key: 'info',
            get: function get() {
              var domain = new _URIjs2['default'](this.details.url).hostname();
              var data = {
                name: this.details.name || '',
                value: this.details.value || '',
                domain: domain,
                hostOnly: domain.charAt(0) !== '.',
                httpOnly: Boolean(this.details.httpOnly),
                secure: Boolean(this.details.secure),
                session: _lodash2['default'].isUndefined(this.details.expirationDate),
                path: this.details.path || new _URIjs2['default'](this.details.url).path()
              };
              if (this.details.expirationDate) {
                data.expirationDate = this.details.expirationDate;
              }
              return data;
            }

            /**
             * assert cookie params
             * @param {CookieDetails} details
             */
      }], [{
            key: 'assertParams',
            value: function assertParams(details) {
              if (!details.url) {
                throw new Error('details.url required');
              }
            }
      }]);

          return ChromeCookie;
        })();

        exports['default'] = ChromeCookie;
        module.exports = exports['default'];

        /***/
      },
/* 18 */
/***/
      function (module, exports, __webpack_require__) {

        /**
         * @overview
         * Assertation module for chrome.cookies.* methods
         */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.get = get;
        exports.getAll = getAll;
        exports.set = set;
        exports.remove = remove;

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            'default': obj
          };
        }

        var _lodash = __webpack_require__(2);

        var _lodash2 = _interopRequireDefault(_lodash);

        /**
         * assert chrome.cookies.get arguments
         * @param {CookieCriteria} details
         * @param {Function} callback
         * @throws TypeError
         */

        function get(details, callback) {
          if (!_lodash2['default'].isString(details.name)) {
            throwError('name');
          }

          if (!_lodash2['default'].isString(details.url)) {
            throwError('url');
          }

          if (!_lodash2['default'].isFunction(callback)) {
            throwError('callback');
          }
        }

        /**
         * assert chrome.cookie.getAll arguments
         * @param {AllCookieCriteria} details
         * @param {Function} callback
         */

        function getAll(details, callback) {
          if (!_lodash2['default'].isPlainObject(details)) {
            throwError('details');
          }
          if (!_lodash2['default'].isFunction(callback)) {
            throwError('callback');
          }
        }

        /**
         * assert chrome.cookies.set arguments
         * @param {AllCookieCriteria} details
         */

        function set(details) {
          if (!_lodash2['default'].isString(details.url)) {
            throwError('url');
          }
        }

        /**
         * assert chrome.cookies.remove arguments
         * @param {Object} details
         */

        function remove(details) {
          if (!_lodash2['default'].isString(details.url)) {
            throwError('url');
          }
          if (!_lodash2['default'].isString(details.name)) {
            throwError('name');
          }
        }

        /**
         * throws type error
         * @param {String} argument
         */
        function throwError(argument) {
          throw new Error(argument + ' required');
        }

        /***/
      }
/******/
      ])
});;
