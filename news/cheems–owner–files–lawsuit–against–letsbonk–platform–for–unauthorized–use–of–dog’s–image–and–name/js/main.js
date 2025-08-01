/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@threespot/expand-toggle/dist/expand-toggle.m.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@threespot/expand-toggle/dist/expand-toggle.m.js ***!
  \***************************************************************************/
/***/ (function(module) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
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
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_187__.r = function(exports) {
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
/******/ 	__nested_webpack_require_187__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_187__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_187__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_187__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ExpandToggle; });\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ev_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ev-emitter */ \"./node_modules/ev-emitter/ev-emitter.js\");\n/* harmony import */ var ev_emitter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ev_emitter__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n/**\n * Wrap the last X words in an HTML tag to prevent them from wrapping (i.e. orphans)\n * @param {HTMLElement} el - Toggle button DOM node\n * @param {Object} opts - Options\n * @param {string} [opts.expandedClasses=\"\"] - Class(es) to apply when expanded\n * @param {boolean} [opts.shouldToggleHeight=false] - Whether or not to animate height\n * @param {string} [opts.activeToggleText=\"\"] - Expanded state toggle button text\n * @param {boolean} [opts.shouldStartExpanded=false] - Whether menu should start expanded\n * @param {function} [opts.onReady=\"\"] - Ready callback function\n */\n\nvar ExpandToggle =\n/*#__PURE__*/\nfunction (_EventEmitter) {\n  _inherits(ExpandToggle, _EventEmitter);\n\n  function ExpandToggle(el, opts) {\n    var _this;\n\n    _classCallCheck(this, ExpandToggle);\n\n    // Have to call super() first before referencing “this” since we’re extending EventEmitter\n    // https://stackoverflow.com/a/43591507/673457\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpandToggle).call(this));\n    _this.el = el;\n    _this.targetId = _this.el.getAttribute(\"data-expands\");\n    _this.targetEl = document.getElementById(_this.targetId); // Ensure target element exist before initializing\n\n    if (!_this.targetEl) {\n      console.warn(\"Can\\u2019t find expandable target with id \\u201C\".concat(_this.targetId, \"\\u201D\"));\n      return _possibleConstructorReturn(_this, false);\n    } // Use Object.assign() to merge “opts” object with default values in this.options\n\n\n    _this.options = Object.assign({}, {\n      expandedClasses: \"\",\n      // string, accepts multiple space-separated classes\n      shouldToggleHeight: false,\n      // should target element’s height be animated using max-height\n      activeToggleText: \"\",\n      // expanded state toggle button text\n      shouldStartExpanded: false,\n      // component starts expanded on init\n      onReady: null // ready callback function\n\n    }, opts); // Check for custom expanded class(es)\n\n    _this.expandedClasses = _this.el.getAttribute(\"data-expands-class\") || _this.options.expandedClasses;\n\n    if (_this.expandedClasses.length) {\n      // Check if active class string contains multiple classes\n      if (_this.expandedClasses.indexOf(\" \") > -1) {\n        // Convert to array and remove any empty string values\n        // caused by having multiple spaces in a row.\n        _this.expandedClasses = _this.expandedClasses.split(\" \").filter(function (n) {\n          return n.length;\n        });\n      } else {\n        // We still need to convert a single active class to an array\n        // so we can use the spread syntax later in classList.add()\n        _this.expandedClasses = [_this.expandedClasses];\n      }\n    } // Check if height should be animated\n\n\n    _this.shouldToggleHeight = _this.el.hasAttribute(\"data-expands-height\") || _this.options.shouldToggleHeight; // Check if component should start expanded\n\n    _this.shouldStartExpanded = _this.el.hasAttribute(\"data-expanded\") || _this.options.shouldStartExpanded; // Check for custom toggle button text to use when expanded\n\n    _this.hasActiveText = false;\n    _this.textEl = _this.el.querySelector(\"[data-expands-text]\");\n\n    if (_this.textEl) {\n      _this.defaultToggleText = _this.textEl.textContent;\n      _this.activeToggleText = _this.textEl.getAttribute(\"data-expands-text\") || _this.options.activeToggleText;\n      _this.hasActiveText = !!_this.activeToggleText.length;\n    }\n\n    _this.init();\n\n    return _this;\n  }\n\n  _createClass(ExpandToggle, [{\n    key: \"init\",\n    value: function init() {\n      // Store state to avoid calling resize handler after component has been destroyed\n      this.hasInitialized = true; // Accessibility setup\n\n      this.el.setAttribute(\"aria-haspopup\", true);\n      this.el.setAttribute(\"aria-expanded\", this.shouldStartExpanded); // Omit “aria-controls” for now\n      // See https://inclusive-components.design/menus-menu-buttons/#ariacontrols\n      // this.el.setAttribute(\"aria-controls\", this.targetId);\n\n      this.targetEl.setAttribute(\"aria-hidden\", !this.shouldStartExpanded);\n\n      if (this.el.tagName.toLowerCase() === \"a\") {\n        this.el.setAttribute(\"role\", \"button\");\n      }\n\n      if (this.shouldToggleHeight) {\n        this.heightToggleSetup();\n      } // Click event listener on toggle button\n      // Note: Callback needs to be assigned to a let so we can remove it since we’re using bind()\n      // https://stackoverflow.com/a/22870717/673457\n\n\n      this.clickHandler = this.toggle.bind(this);\n      this.el.addEventListener(\"click\", this.clickHandler); // Keyboard listeners on toggle button\n\n      this.keydownHandler = this.keyboardEvents.bind(this);\n      this.el.addEventListener(\"keydown\", this.keydownHandler); // Check for onReady callback\n\n      if (typeof this.options.onReady === \"function\") {\n        this.options.onReady();\n      }\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this.hasInitialized = false; // Remove event listeners\n\n      this.el.removeEventListener(\"click\", this.clickHandler);\n      this.el.removeEventListener(\"keydown\", this.keydownHandler);\n      window.removeEventListener(\"resize\", this.resizeHandler); // Remove aria attributes\n\n      this.el.removeAttribute(\"aria-haspopup\");\n      this.el.removeAttribute(\"aria-expanded\");\n      this.targetEl.removeAttribute(\"aria-hidden\");\n      this.targetEl.style.removeProperty(\"max-height\");\n\n      if (this.el.tagName.toLowerCase() === \"a\") {\n        this.el.removeAttribute(\"role\");\n      } // Reset toggle text\n\n\n      if (this.hasActiveText) {\n        this.textEl.textContent = this.defaultToggleText;\n      } // Remove custom classes\n\n\n      if (this.expandedClasses.length) {\n        var _this$el$classList, _this$targetEl$classL;\n\n        (_this$el$classList = this.el.classList).remove.apply(_this$el$classList, _toConsumableArray(this.expandedClasses));\n\n        (_this$targetEl$classL = this.targetEl.classList).remove.apply(_this$targetEl$classL, _toConsumableArray(this.expandedClasses));\n      }\n\n      this.emitEvent(\"destroy\");\n    }\n  }, {\n    key: \"keyboardEvents\",\n    value: function keyboardEvents(event) {\n      // Expand with down arrow\n      if (event.keyCode == 40) {\n        this.expand();\n      } else if (event.keyCode == 38 || event.keyCode == 27) {\n        // Close with up arrow or escape key\n        this.collapse();\n      }\n    }\n  }, {\n    key: \"heightToggleSetup\",\n    value: function heightToggleSetup() {\n      var _this2 = this;\n\n      this.targetParentEl = this.targetEl.parentNode; // Set max-height to the expanded height so we can animate it.\n\n      window.requestAnimationFrame(this.updateExpandedHeight.bind(this));\n      this.resizeHandler = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (event) {\n        // Due to debounce() it’s possible for this to run after destroy() has been called.\n        // To avoid this edge case, check “this.hasInitialized” first.\n        if (_this2.hasInitialized) {\n          window.requestAnimationFrame(_this2.updateExpandedHeight.bind(_this2));\n        }\n      }, 100).bind(this); // Update target element’s max-height on resize\n\n      window.addEventListener(\"resize\", this.resizeHandler);\n    } // Set max-height of target element to its expanded height without triggering relayout.\n    //\n    // This technique works by creating an absolutely-positioned invisible clone of the target\n    // element and calculating its height. This avoids any relayout that would otherwise occur\n    // if the element was briefly expanded so we could measure it.\n    //\n    // Note: We’re using CSS to transition max-height instead jQuery’s slideToggle(),\n    //       or another 3rd-party lib like Velocity.js, to avoid loading a large lib.\n\n  }, {\n    key: \"updateExpandedHeight\",\n    value: function updateExpandedHeight() {\n      // Get width of original element so we can apply it to the clone\n      var nodeWidth = Math.round(parseFloat(this.targetEl.offsetWidth)); // Create clone of node\n\n      var cloneEl = this.targetEl.cloneNode(true); // 'true' includes child nodes\n      // Inline styles added to prevent reflow, ensure clone is same size as expanded element\n\n      cloneEl.style.cssText = \"max-height: none !important; position: absolute !important; right: 100% !important; visibility: hidden !important; width: \".concat(nodeWidth, \"px !important; -webkit-transition: none !important; -moz-transition: none !important; transition: none !important\"); // Update “aria-hidden” attribute\n\n      cloneEl.setAttribute(\"aria-hidden\", false); // Remove id just to be safe\n\n      cloneEl.removeAttribute(\"id\"); // Remove “name” attributes to prevent resetting checkbox or radio elements\n\n      var childElsWithId = cloneEl.querySelectorAll(\"[name]\"); // IE-friendly way of iterating over a NodeList\n\n      Array.prototype.forEach.call(childElsWithId, function (el) {\n        el.removeAttribute(\"name\");\n      }); // Append clone to document, save as new let so we can remove it later\n\n      var newEl = this.targetParentEl.insertBefore(cloneEl, this.targetEl); // Calculate height\n\n      var expandedHeight = Math.round(parseFloat(newEl.offsetHeight)); // Remove cloned node to clean up after ourselves\n\n      this.targetParentEl.removeChild(newEl); // Apply inline max-height to collapsed element\n      // Note: CSS is overriding this when aria-hidden=\"true\"\n\n      this.targetEl.style.maxHeight = expandedHeight + \"px\";\n    }\n  }, {\n    key: \"expand\",\n    value: function expand(event) {\n      // Update toggle text\n      if (this.hasActiveText) {\n        this.textEl.textContent = this.activeToggleText;\n      } // Add classes\n\n\n      if (this.expandedClasses.length) {\n        var _this$el$classList2, _this$targetEl$classL2;\n\n        (_this$el$classList2 = this.el.classList).add.apply(_this$el$classList2, _toConsumableArray(this.expandedClasses));\n\n        (_this$targetEl$classL2 = this.targetEl.classList).add.apply(_this$targetEl$classL2, _toConsumableArray(this.expandedClasses));\n      } // Update aria attributes\n\n\n      this.el.setAttribute(\"aria-expanded\", true);\n      this.targetEl.setAttribute(\"aria-hidden\", false); // Emit event and include original event as an argument\n\n      this.emitEvent(\"expand\", event);\n    }\n  }, {\n    key: \"collapse\",\n    value: function collapse(event) {\n      // Update toggle text\n      if (this.hasActiveText) {\n        this.textEl.textContent = this.defaultToggleText;\n      } // Remove classes\n\n\n      if (this.expandedClasses.length) {\n        var _this$el$classList3, _this$targetEl$classL3;\n\n        (_this$el$classList3 = this.el.classList).remove.apply(_this$el$classList3, _toConsumableArray(this.expandedClasses));\n\n        (_this$targetEl$classL3 = this.targetEl.classList).remove.apply(_this$targetEl$classL3, _toConsumableArray(this.expandedClasses));\n      } // Update aria attributes\n\n\n      this.el.setAttribute(\"aria-expanded\", false);\n      this.targetEl.setAttribute(\"aria-hidden\", true); // Emit event and include original event as an argument\n\n      this.emitEvent(\"collapse\", event);\n    }\n  }, {\n    key: \"toggle\",\n    value: function toggle(event) {\n      // Prevent default in case toggle element is a link instead of a button\n      event.preventDefault();\n\n      if (this.el.getAttribute(\"aria-expanded\") === \"true\") {\n        this.collapse(event);\n      } else {\n        this.expand(event);\n      }\n    }\n  }]);\n\n  return ExpandToggle;\n}(ev_emitter__WEBPACK_IMPORTED_MODULE_1___default.a);\n\n\n\n//# sourceURL=webpack://%5Bname%5DLink/./index.js?");

/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**\n * EvEmitter v1.1.0\n * Lil' event emitter\n * MIT License\n */\n\n/* jshint unused: true, undef: true, strict: true */\n\n( function( global, factory ) {\n  // universal module definition\n  /* jshint strict: false */ /* globals define, module, window */\n  if ( true ) {\n    // AMD - RequireJS\n    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n\n}( typeof window != 'undefined' ? window : this, function() {\n\n\"use strict\";\n\nfunction EvEmitter() {}\n\nvar proto = EvEmitter.prototype;\n\nproto.on = function( eventName, listener ) {\n  if ( !eventName || !listener ) {\n    return;\n  }\n  // set events hash\n  var events = this._events = this._events || {};\n  // set listeners array\n  var listeners = events[ eventName ] = events[ eventName ] || [];\n  // only add once\n  if ( listeners.indexOf( listener ) == -1 ) {\n    listeners.push( listener );\n  }\n\n  return this;\n};\n\nproto.once = function( eventName, listener ) {\n  if ( !eventName || !listener ) {\n    return;\n  }\n  // add event\n  this.on( eventName, listener );\n  // set once flag\n  // set onceEvents hash\n  var onceEvents = this._onceEvents = this._onceEvents || {};\n  // set onceListeners object\n  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};\n  // set flag\n  onceListeners[ listener ] = true;\n\n  return this;\n};\n\nproto.off = function( eventName, listener ) {\n  var listeners = this._events && this._events[ eventName ];\n  if ( !listeners || !listeners.length ) {\n    return;\n  }\n  var index = listeners.indexOf( listener );\n  if ( index != -1 ) {\n    listeners.splice( index, 1 );\n  }\n\n  return this;\n};\n\nproto.emitEvent = function( eventName, args ) {\n  var listeners = this._events && this._events[ eventName ];\n  if ( !listeners || !listeners.length ) {\n    return;\n  }\n  // copy over to avoid interference if .off() in listener\n  listeners = listeners.slice(0);\n  args = args || [];\n  // once stuff\n  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];\n\n  for ( var i=0; i < listeners.length; i++ ) {\n    var listener = listeners[i]\n    var isOnce = onceListeners && onceListeners[ listener ];\n    if ( isOnce ) {\n      // remove listener\n      // remove before trigger to prevent recursion\n      this.off( eventName, listener );\n      // unset once flag\n      delete onceListeners[ listener ];\n    }\n    // trigger listener\n    listener.apply( this, args );\n  }\n\n  return this;\n};\n\nproto.allOff = function() {\n  delete this._events;\n  delete this._onceEvents;\n};\n\nreturn EvEmitter;\n\n}));\n\n\n//# sourceURL=webpack://%5Bname%5DLink/./node_modules/ev-emitter/ev-emitter.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://%5Bname%5DLink/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://%5Bname%5DLink/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://%5Bname%5DLink/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://%5Bname%5DLink/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://%5Bname%5DLink/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://%5Bname%5DLink/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    now = __webpack_require__(/*! ./now */ \"./node_modules/lodash/now.js\"),\n    toNumber = __webpack_require__(/*! ./toNumber */ \"./node_modules/lodash/toNumber.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max,\n    nativeMin = Math.min;\n\n/**\n * Creates a debounced function that delays invoking `func` until after `wait`\n * milliseconds have elapsed since the last time the debounced function was\n * invoked. The debounced function comes with a `cancel` method to cancel\n * delayed `func` invocations and a `flush` method to immediately invoke them.\n * Provide `options` to indicate whether `func` should be invoked on the\n * leading and/or trailing edge of the `wait` timeout. The `func` is invoked\n * with the last arguments provided to the debounced function. Subsequent\n * calls to the debounced function return the result of the last `func`\n * invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the debounced function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.debounce` and `_.throttle`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to debounce.\n * @param {number} [wait=0] The number of milliseconds to delay.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=false]\n *  Specify invoking on the leading edge of the timeout.\n * @param {number} [options.maxWait]\n *  The maximum time `func` is allowed to be delayed before it's invoked.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new debounced function.\n * @example\n *\n * // Avoid costly calculations while the window size is in flux.\n * jQuery(window).on('resize', _.debounce(calculateLayout, 150));\n *\n * // Invoke `sendMail` when clicked, debouncing subsequent calls.\n * jQuery(element).on('click', _.debounce(sendMail, 300, {\n *   'leading': true,\n *   'trailing': false\n * }));\n *\n * // Ensure `batchLog` is invoked once after 1 second of debounced calls.\n * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });\n * var source = new EventSource('/stream');\n * jQuery(source).on('message', debounced);\n *\n * // Cancel the trailing debounced invocation.\n * jQuery(window).on('popstate', debounced.cancel);\n */\nfunction debounce(func, wait, options) {\n  var lastArgs,\n      lastThis,\n      maxWait,\n      result,\n      timerId,\n      lastCallTime,\n      lastInvokeTime = 0,\n      leading = false,\n      maxing = false,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  wait = toNumber(wait) || 0;\n  if (isObject(options)) {\n    leading = !!options.leading;\n    maxing = 'maxWait' in options;\n    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n\n  function invokeFunc(time) {\n    var args = lastArgs,\n        thisArg = lastThis;\n\n    lastArgs = lastThis = undefined;\n    lastInvokeTime = time;\n    result = func.apply(thisArg, args);\n    return result;\n  }\n\n  function leadingEdge(time) {\n    // Reset any `maxWait` timer.\n    lastInvokeTime = time;\n    // Start the timer for the trailing edge.\n    timerId = setTimeout(timerExpired, wait);\n    // Invoke the leading edge.\n    return leading ? invokeFunc(time) : result;\n  }\n\n  function remainingWait(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime,\n        timeWaiting = wait - timeSinceLastCall;\n\n    return maxing\n      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)\n      : timeWaiting;\n  }\n\n  function shouldInvoke(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime;\n\n    // Either this is the first call, activity has stopped and we're at the\n    // trailing edge, the system time has gone backwards and we're treating\n    // it as the trailing edge, or we've hit the `maxWait` limit.\n    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||\n      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));\n  }\n\n  function timerExpired() {\n    var time = now();\n    if (shouldInvoke(time)) {\n      return trailingEdge(time);\n    }\n    // Restart the timer.\n    timerId = setTimeout(timerExpired, remainingWait(time));\n  }\n\n  function trailingEdge(time) {\n    timerId = undefined;\n\n    // Only invoke if we have `lastArgs` which means `func` has been\n    // debounced at least once.\n    if (trailing && lastArgs) {\n      return invokeFunc(time);\n    }\n    lastArgs = lastThis = undefined;\n    return result;\n  }\n\n  function cancel() {\n    if (timerId !== undefined) {\n      clearTimeout(timerId);\n    }\n    lastInvokeTime = 0;\n    lastArgs = lastCallTime = lastThis = timerId = undefined;\n  }\n\n  function flush() {\n    return timerId === undefined ? result : trailingEdge(now());\n  }\n\n  function debounced() {\n    var time = now(),\n        isInvoking = shouldInvoke(time);\n\n    lastArgs = arguments;\n    lastThis = this;\n    lastCallTime = time;\n\n    if (isInvoking) {\n      if (timerId === undefined) {\n        return leadingEdge(lastCallTime);\n      }\n      if (maxing) {\n        // Handle invocations in a tight loop.\n        clearTimeout(timerId);\n        timerId = setTimeout(timerExpired, wait);\n        return invokeFunc(lastCallTime);\n      }\n    }\n    if (timerId === undefined) {\n      timerId = setTimeout(timerExpired, wait);\n    }\n    return result;\n  }\n  debounced.cancel = cancel;\n  debounced.flush = flush;\n  return debounced;\n}\n\nmodule.exports = debounce;\n\n\n//# sourceURL=webpack://%5Bname%5DLink/./node_modules/lodash/debounce.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://%5Bname%5DLink/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://%5Bname%5DLink/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack://%5Bname%5DLink/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/**\n * Gets the timestamp of the number of milliseconds that have elapsed since\n * the Unix epoch (1 January 1970 00:00:00 UTC).\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Date\n * @returns {number} Returns the timestamp.\n * @example\n *\n * _.defer(function(stamp) {\n *   console.log(_.now() - stamp);\n * }, _.now());\n * // => Logs the number of milliseconds it took for the deferred invocation.\n */\nvar now = function() {\n  return root.Date.now();\n};\n\nmodule.exports = now;\n\n\n//# sourceURL=webpack://%5Bname%5DLink/./node_modules/lodash/now.js?");

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = toNumber;\n\n\n//# sourceURL=webpack://%5Bname%5DLink/./node_modules/lodash/toNumber.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://%5Bname%5DLink/(webpack)/buildin/global.js?");

/***/ })

/******/ });
//# sourceMappingURL=expand-toggle.commonjs2.js.map

/***/ }),

/***/ "../../node_modules/@threespot/fluid-iframe/dist/fluid-iframe.m.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@threespot/fluid-iframe/dist/fluid-iframe.m.js ***!
  \*************************************************************************/
/***/ (function(module) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
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
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_187__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Wrap the last X words in an HTML tag to prevent them from wrapping (i.e. orphans)\n * @param {HTMLElement} el - iframe element\n * @param {Object} opts - Options\n * @param {number} [opts.defaultAspectRatio=9/16] - Fallback aspect ratio if height and width are undefined\n * @param {number|boolean} [opts.forceRatio=false] - Aspect ratio override (ignores iframe’s actual dimensions)\n * @param {boolean} [opts.inlineStyles=true] - Apply inline styles (set to “false” if using CSS)\n * @param {boolean} [opts.wrap=true] - Whether or not to add a wrapper div to the iframe. Setting to “false” means the video can’t be displayed wider than its original width.\n * @param {string} [opts.classes=\"\"] - Class(es) to add to the wrapper or iframe (depends on wrap option)\n */\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar FluidFrame = function FluidFrame(el, opts) {\n  _classCallCheck(this, FluidFrame);\n\n  var self = this;\n  this.el = el;\n\n  // Check if target element is an iframe\n  if (this.el.tagName.toLowerCase() !== \"iframe\") {\n    console.warn(\"FluidFrame only works on iframes, not <\" + this.el.tagName.toLowerCase() + \"> tags\");\n    return false;\n  }\n\n  // Use Object.assign() to merge “opts” object with default values in this.options\n  this.options = Object.assign({}, {\n    defaultAspectRatio: 9 / 16,\n    forceRatio: false, // set aspect ratio to use regardless of actual dimensions of iframe\n    inlineStyles: true, // apply inline styles to wrapper or iframe (depends on wrap option)\n    wrap: true, // adds a div wrapper around the iframe\n    classes: \"\" // custom class(es) to add to the wrapper or iframe (depends on wrap option)\n  }, opts);\n\n  // If inline styles are disabled, “classes” and “forceRatio” must be defined.\n  if (!this.options.inlineStyles && !this.options.classes && !this.options.forceRatio) {\n    console.warn(\"FluidFrame: If inline styles are disabled, a fixed aspect ratio must be defined along with custom classes.\");\n    return false;\n  }\n\n  // Get intrinsic dimensions\n  this.width = this.el.width ? parseInt(this.el.width) : this.el.offsetWidth;\n  this.height = this.el.height ? parseInt(this.el.height) : this.el.offsetHeight;\n\n  // Determine the aspect ratio\n  if (parseFloat(this.options.forceRatio)) {\n    this.aspectRatio = parseFloat(this.options.forceRatio);\n  } else {\n    this.aspectRatio = !this.width && !this.height ? this.options.defaultAspectRatio : this.height / this.width;\n  }\n\n  // Wrap iframe in div with padding-top equal to aspect ratio as a percentage\n  if (this.options.wrap) {\n    this.wrapper = document.createElement(\"div\");\n    this.el.parentNode.insertBefore(this.wrapper, this.el);\n    this.wrapper.appendChild(this.el);\n  }\n\n  // Check for custom classes\n  if (this.options.classes.length) {\n    // Check if string contains multiple classes\n    if (this.options.classes.indexOf(\" \") > -1) {\n      // Convert to array and remove empty items (caused by extra whitespace)\n      this.options.classes = this.options.classes.split(\" \").filter(function (n) {\n        return n.length;\n      });\n    } else {\n      // We still need to convert a single class to an array\n      // in order to use the spread syntax below.\n      this.options.classes = [this.options.classes];\n    }\n\n    // Add classes\n    if (this.options.wrap) {\n      var _wrapper$classList;\n\n      (_wrapper$classList = this.wrapper.classList).add.apply(_wrapper$classList, _toConsumableArray(this.options.classes));\n    } else {\n      var _el$classList;\n\n      (_el$classList = this.el.classList).add.apply(_el$classList, _toConsumableArray(this.options.classes));\n    }\n  }\n\n  // Add inline styles\n  if (this.options.inlineStyles) {\n    if (this.options.wrap) {\n      this.wrapper.setAttribute(\"style\", \"padding-top: \" + 100 * this.aspectRatio + \"%; position: relative;\");\n\n      // Set iframe to absolutely fill the parent div\n      this.el.setAttribute(\"style\", \"height: 100%; left: 0; position: absolute; top: 0; width: 100%;\");\n    } else {\n      // Inspired by https://github.com/dollarshaveclub/reframe.js#-noframejs\n      this.el.setAttribute(\"style\", \"display: block; height: \" + 100 * this.aspectRatio + \"vw; margin-left: auto; margin-right: auto; max-height: \" + this.height + \"px; max-width: 100%; width: \" + this.width + \"px;\");\n    }\n  }\n};\n\nexports.default = FluidFrame;\n\n//# sourceURL=webpack://%5Bname%5DLink/./index.js?");

/***/ })

/******/ });
//# sourceMappingURL=fluid-iframe.commonjs2.js.map

/***/ }),

/***/ "../../node_modules/@threespot/mailto/dist/mailto.m.js":
/*!*************************************************************!*\
  !*** ../../node_modules/@threespot/mailto/dist/mailto.m.js ***!
  \*************************************************************/
/***/ (function(module) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
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
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_187__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar obscureString = \"[at]\";\n\n/**\n * Replaces obscured element with a mailto link <br>\n * Uses an elements \"data-email\" attribute to convert them to mailto links, using\n * the value of that attribute as the email address.\n * Inner HTML is preserved and any occurrences of \"[at]\" are converted to \"@\".\n */\n\nvar MailToLink = function () {\n  /**\n   * Create link from obscured element\n   * @param {object} el - dom node\n   */\n  function MailToLink(el) {\n    _classCallCheck(this, MailToLink);\n\n    this.el = el;\n    var link = void 0,\n        dataAttr = void 0,\n        href = void 0;\n\n    // Generate mailto href\n    try {\n      dataAttr = el.getAttribute(\"data-email\");\n      href = \"mailto:\" + this.replaceObscuredString(dataAttr);\n    } catch (e) {\n      throw Error(\"MailToLink: constructor requires a DOM node object\");\n    }\n\n    // Replace [at] with @ in link text\n    var linkHtml = el.innerHTML;\n    if (linkHtml.indexOf(obscureString) > 0) {\n      linkHtml = this.replaceObscuredString(linkHtml);\n      el.innerHTML = linkHtml;\n    }\n\n    // Add mailto href to link tags\n    if (el.nodeName === \"A\") {\n      el.setAttribute(\"href\", href);\n    } else {\n      // Create link tag, remove original element\n      var classNames = el.getAttribute(\"class\");\n      link = this.createLinkReplacement(href, linkHtml, classNames);\n      // Insert link and remove original element\n      el.insertAdjacentHTML(\"beforebegin\", link.outerHTML);\n      el.parentNode.removeChild(el);\n\n      // replace instance el with new element\n      this.el = link;\n    }\n  }\n\n  /**\n   * Create link to replace the original element\n   * @param {string} href - value to apply to link\n   * @param {string} body - body to insert to link\n   * @param {string} classNames - values to add to the link\n   * @returns {object} link - DOM element\n   */\n\n\n  _createClass(MailToLink, [{\n    key: \"createLinkReplacement\",\n    value: function createLinkReplacement(href, body) {\n      var classNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n\n      var link = document.createElement(\"a\");\n      link.setAttribute(\"href\", href);\n      if (classNames) {\n        link.setAttribute(\"class\", classNames);\n      }\n      link.innerHTML = body;\n      return link;\n    }\n\n    /**\n     * Replace obscured string with valid email address\n     * @param {string} str - obscured email string\n     * @return {string} newStr - valid email string\n     */\n\n  }, {\n    key: \"replaceObscuredString\",\n    value: function replaceObscuredString(str) {\n      var newStr = void 0;\n      try {\n        newStr = str.replace(obscureString, \"@\");\n      } catch (e) {\n        throw Error(\"MailToLink: `data-email` attribute for mailto replacement. Link not created\");\n      }\n      return newStr;\n    }\n  }]);\n\n  return MailToLink;\n}();\n\nexports.default = MailToLink;\n\n//# sourceURL=webpack://%5Bname%5DLink/./index.js?");

/***/ })

/******/ });
//# sourceMappingURL=mailto.commonjs2.js.map

/***/ }),

/***/ "../../node_modules/@threespot/object-fit-image/dist/object-fit-image.m.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@threespot/object-fit-image/dist/object-fit-image.m.js ***!
  \*********************************************************************************/
/***/ (function(module) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
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
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_187__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("//------------------------------------------------------------------------\n//\n//------------------------------------------------------------------------\n\n\n/**\n * Polyfill “object-fit” (IE 11-, aOS 4.4-) by applying <img>/<picture> src as “background-image” on target wrapper\n * @param {HTMLElement} el - Image wrapper element\n * @param {Object} opts - Options\n * @param {string|boolean} [opts.visuallyHiddenClass=false] - Class to add to the image to visually hide it (defaults to using inline styles)\n * @param {string} [opts.backgroundPosition=\"50% 50%\"] - Optional background-position coordinates\n */\n\n// Detect “object-fit” support\n// Note: Edge 16+ only supports “object-fit” on img tags, but that’s all we’re using it for.\n// https://caniuse.com/#feat=object-fit\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar supportsObjectFit = \"objectFit\" in document.documentElement.style;\n\n// Visually hidden CSS\n// https://github.com/h5bp/html5-boilerplate/blob/d6561f2c4792b10c181b62a17e78a064d0a27884/dist/css/main.css#L128-L147\nvar visuallyHiddenCSS = \"border: 0; clip: rect(0 0 0 0); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; white-space: nowrap; width: 1px;\";\n\nvar ObjectFitImage = function () {\n  function ObjectFitImage(el, opts) {\n    _classCallCheck(this, ObjectFitImage);\n\n    // Do nothing if `object-fit` is supported\n    if (supportsObjectFit) {\n      return false;\n    }\n\n    // Use Object.assign() to merge “opts” object with default values in this.options\n    this.options = Object.assign({}, {\n      visuallyHiddenClass: false,\n      backgroundPosition: \"50% 50%\"\n    }, opts);\n\n    var self = this;\n    this.el = el;\n    this.img = this.el.querySelector('.bg-image-source');\n\n    if (!this.img) {\n      console.warn(\"ObjectFitImage: No source image found. Add “bg-image-source” class to target image.\");\n      return false;\n    }\n\n    // If target is a <picture> element, get img tag\n    if (this.img.tagName.toLowerCase() !== \"img\") {\n      this.img = this.img.getElementsByTagName(\"img\")[0];\n\n      if (!this.img) {\n        console.warn(\"ObjectFitImage: No image tag found in “bg-image-source” element.\");\n        return false;\n      }\n    }\n\n    // Visually hide the img tag to keep alt text accessible (as opposed to “display: none”)\n    if (this.options.visuallyHiddenClass && this.options.visuallyHiddenClass.length) {\n      this.img.classList.add(this.options.visuallyHiddenClass);\n    } else {\n      this.img.setAttribute(\"style\", visuallyHiddenCSS);\n    }\n\n    // Check if “currentSrc” is supported\n    this.supportsCurrentSrc = typeof this.img.currentSrc !== \"undefined\";\n\n    // Bind to onload event, which will fire whenever the source changes\n    this.img.onload = function () {\n      self.update(\"img onload\");\n    };\n\n    // Update if “onload” event fired before this script was parsed\n    this.update(\"init\");\n  }\n\n  // Update parent wrapper\n\n\n  _createClass(ObjectFitImage, [{\n    key: \"update\",\n    value: function update(msg) {\n      // console.log(msg, {currentSrc: `${this.img.currentSrc}`, src: `${this.img.src}`});\n      var source = this.supportsCurrentSrc && this.img.currentSrc.length ? this.img.currentSrc : this.img.src;\n\n      if (!source.length) {\n        this.el.style.backgroundImage = \"\";\n      } else {\n        this.el.setAttribute(\"style\", \"background-image: url('\" + source + \"'); background-size: cover; background-position: \" + this.options.backgroundPosition + \";\");\n      }\n    }\n  }]);\n\n  return ObjectFitImage;\n}();\n\nexports.default = ObjectFitImage;\n\n//# sourceURL=webpack://%5Bname%5DLink/./index.js?");

/***/ })

/******/ });
//# sourceMappingURL=object-fit-image.commonjs2.js.map

/***/ }),

/***/ "../../node_modules/@threespot/unorphanize/dist/unorphanize.m.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@threespot/unorphanize/dist/unorphanize.m.js ***!
  \***********************************************************************/
/***/ (function(module) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
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
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_187__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * Wrap the last X words in an HTML tag to prevent them from wrapping (i.e. orphans)\n * @param {HTMLElement} el - Target DOM node\n * @param {Object} opts - Options\n * @param {number} [opts.wordCount=2] - Minimum number of words required to wrap to a new line\n * @param {string} [opts.wrapEl=span] - Tag name to use for the wrapper element\n * @param {boolean} [opts.inlineStyles=true] - Add “white-space: nowrap;” to elements as inline style\n * @param {string} [opts.className=u-nowrap] - Class name to apply to wrapper element\n * @param {string} [opts.append] - Any arbitrary string or HTML to append inside of the wrapper element\n */\nvar Unorphanize = function () {\n  function Unorphanize(el, opts) {\n    _classCallCheck(this, Unorphanize);\n\n    this.el = el;\n\n    try {\n      // Note: Using textContent instead of innerText avoids a reflow but includes text hidden by CSS.\n      // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText\n      this.origText = this.el.textContent;\n      this.childNodes = this.el.children;\n    } catch (e) {\n      throw Error('Unorphanize: Constructor requires a DOM node object');\n    }\n\n    // Exit if el is undefined or has no content\n    if (el.innerHTML.trim().length === 0) {\n      console.warn('Unorphanize: Element contains no text or child nodes');\n    }\n\n    // Use Object.assign() to merge “options” object with default values object\n    this.options = Object.assign({}, {\n      wordCount: 2, // accepts any integer\n      wrapEl: \"span\", // accepts any tag name\n      inlineStyles: true, // will add “white-space: nowrap;” to wrapper el\n      className: \"\", // accepts any valid class name\n      append: \"\" // accepts any arbitrary HTML\n    }, opts);\n\n    // Convert to integer\n    this.options.wordCount = parseInt(this.options.wordCount, 10);\n\n    // Default to 2 if non-integer value was passed\n    if (isNaN(this.options.wordCount)) {\n      this.options.wordCount = 2;\n    }\n\n    // Subtract 1 of an “append” string was passed\n    if (this.options.append.length) {\n      this.options.wordCount -= 1;\n    }\n\n    // If no children, use simple method that doesn’t account for child nodes\n    if (this.childNodes.length === 0) {\n      // Update target element with new HTML\n      this.el.innerHTML = (0, _utils.wrapPlainTextWords)(this.origText, this.options);\n      // console.log(\"No children \\n\", this.el.outerHTML.replace(/\\r?\\n|\\r/g,\" \"));\n    } else {\n      // If there are child nodes, we must use more advanced logic\n      this.wrapRichText();\n    }\n  }\n\n  /**\n   * Parse child node text and adjacent strings, update variables\n   * @param {HTMLElement} childEl - Child node\n   */\n\n\n  _createClass(Unorphanize, [{\n    key: \"updateChildNodeVars\",\n    value: function updateChildNodeVars() {\n      this.childHtml = this.childEl.outerHTML;\n\n      // Use split to find text before and after the child\n      this.currentChildSplit = this.el.innerHTML.split(this.childHtml);\n      this.textBeforeChild = this.currentChildSplit[0];\n      this.textAfterChild = this.currentChildSplit[1] || \"\";\n\n      // For every child after the first, we don’t want to re-count the words\n      // from the previous child and any text to the right of it. We determine\n      // where this is by searching for the first “<” character.\n      this.markupIndex = this.textAfterChild.indexOf(\"<\");\n\n      // Get just the text after the child, but before any previously evaluated children.\n      this.plainText = this.markupIndex > -1 ? this.textAfterChild.substring(0, this.markupIndex) : this.textAfterChild;\n\n      // Save the previously evaluated markup to add back later\n      this.previousString = this.markupIndex > -1 ? this.textAfterChild.substring(this.markupIndex) : \"\";\n\n      // Save the child node text\n      this.childText = this.childEl.textContent.trim();\n\n      // Count words in child node (if no text, count as 1 word, e.g. svg or img tag)\n      this.childWordCount = this.childText.length ? this.childText.trim().split(\" \").length : 1;\n\n      // Convert plain text to array, fallback to null if no text\n      // Note: A string of whitespce returns 1 for this.plainText.trim().split(\" \"),\n      //       so check the trimmed length and set to null if it’s all whitespce.\n      this.plainTextWords = this.plainText.trim().length ? this.plainText.trim().split(\" \") : null;\n\n      // Count words after child, not including previously evaluated text\n      this.plainTextWordCount = this.plainTextWords !== null ? this.plainTextWords.length : 0;\n\n      // If the plain text doesn’t start with a space, treat the first words as part of the child element’s last word.\n      this.partialWord = \"\";\n\n      if (this.plainTextWordCount > 0 && this.plainText.search(/\\S/) === 0) {\n        // Save partial word string, remove from plainTextWords array\n        this.partialWord = this.plainTextWords.shift();\n        // Subtract 1 from plain text word count\n        this.plainTextWordCount--;\n      }\n    }\n\n    // Format text before the first child\n\n  }, {\n    key: \"formatTextBeforeFirstChild\",\n    value: function formatTextBeforeFirstChild() {\n      // After all the children have been evaluated, check for text before the first child.\n      var elInnerHTML = this.el.innerHTML;\n      var firstChildIndex = elInnerHTML.indexOf(\"<\");\n      this.textBeforeChild = firstChildIndex > -1 ? elInnerHTML.substring(0, firstChildIndex) : elInnerHTML;\n\n      // Save the previously evaluated string to add back later\n      var stringAfterText = firstChildIndex > -1 ? elInnerHTML.substring(firstChildIndex) : \"\";\n\n      if (this.textBeforeChild.trim().length > 0) {\n        var words = this.textBeforeChild.trim().split(\" \");\n\n        if (words.length + this.previousWordCount === this.options.wordCount) {\n          // Prevent entire element from wrapping\n\n          if (this.options.inlineStyles) {\n            this.el.setAttribute(\"style\", _utils.nowrapCSS);\n          }\n\n          if (this.options.className.length) {\n            this.el.classList.add(this.options.className);\n          }\n\n          // console.log(\"Text and children exactly equal word count \\n\", this.el.outerHTML.replace(/\\r?\\n|\\r/g,\" \"));\n          return true;\n        } else if (words.length + this.previousWordCount >= this.options.wordCount) {\n          // Get number of additional words needed\n          var wordsNeeded = this.options.wordCount - this.previousWordCount;\n\n          // Split string into two parts\n          var leftoverText = (0, _utils.getLeadingSpace)(this.textBeforeChild) + words.splice(0, words.length - wordsNeeded).join(\" \");\n          var textToWrap = words.join(\" \") + (0, _utils.getTrailingSpace)(this.textBeforeChild);\n\n          // Update target element HTML\n          this.el.innerHTML = leftoverText + (0, _utils.wrapString)(textToWrap + stringAfterText, this.options);\n          // console.log(\"Text and string have more than enough words \\n\", this.el.outerHTML.replace(/\\r?\\n|\\r/g,\" \"));\n          return true;\n        }\n      }\n    }\n\n    // In order to avoid using complex RegEx to parse HTML (see links below),\n    // we’re looping through each child element. The steps are as follows:\n    //\n    // - Check for any text to the right of the current child element.\n    // - If there is text, see how many words there are.\n    // - Check if the first word has a leading space. If not, consider it part\n    //   of the previous child element and don’t include in word count.\n    // - If there are at least this.options.wordCount words, use wrapPlainTextWords() on the text.\n    // - If there are not enough words, check the child element’s text.\n    // - If the child has no space after it, consider its last word as part\n    //   of the first plain text word to the right, so subtract 1 from word count.\n    // - If the child has exactly enough words, wrap the child and the text\n    //   to the right using wrapString().\n    // - If the child has too many words, we can’t safely break it up to wrap just the\n    //   desired number of words. Exit and do nothing.\n    // - If the child doesn’t have enough words, move on to the next child.\n    // - If all children have been checked and we still don’t have enough words,\n    //   check for any text to the left of the first child.\n    // - If the left text has exactly enough words, add a class of this.options.className (i.e. “u-nowrap”)\n    // - If the left text has too many words, figure out how many we need and wrap along\n    //   with the text to the right using wrapString().\n    // - If the left text doens’t have enough words, exit and do nothing.\n    //\n    // Why we’re not using RegEx:\n    // https://blog.codinghorror.com/parsing-html-the-cthulhu-way/\n    // https://stackoverflow.com/a/1732454/673457\n\n  }, {\n    key: \"wrapRichText\",\n    value: function wrapRichText() {\n      // Keep track of the number of “words” (includes tags with no text, like SVG)\n      // so we can tell if it’s safe to wrap plain text and child elements together.\n      // For example: `foo <b>bar.</b>` or `<b>foo</b> bar.`\n      this.previousWordCount = 0;\n\n      for (var i = this.childNodes.length; i > 0; i--) {\n        this.childEl = this.childNodes[i - 1];\n\n        // Update node text and adjacent string variables\n        this.updateChildNodeVars();\n\n        // If no plain text, only check the child’s text\n        //------------------------------------------------------------------------\n        if (this.plainTextWordCount === 0) {\n          if (this.childWordCount + this.previousWordCount >= this.options.wordCount) {\n            if (this.previousWordCount === 0) {\n              // If child has no text, wrap it (e.g. an svg/img that we’re appending content to)\n              if (!this.childText.length) {\n                this.childEl.outerHTML = (0, _utils.wrapString)(this.childEl.outerHTML, this.options);\n              } else {\n                // Child has enough words by itself, so we can wrap its inner text\n                this.childEl.innerHTML = (0, _utils.wrapPlainTextWords)(this.childEl.textContent, this.options);\n              }\n              // console.log(\"Last child has enough words \\n\", this.el.outerHTML.replace(/\\r?\\n|\\r/g,\" \"));\n              return true;\n            } else if (this.childWordCount + this.previousWordCount === this.options.wordCount) {\n              // If the child’s words plus the previous words are exactly enough, wrap both.\n              this.el.innerHTML = this.textBeforeChild + (0, _utils.wrapString)(this.childHtml + this.textAfterChild, this.options);\n              // console.log(\"Last child and previous text have exactly enough words \\n\", this.el.outerHTML.replace(/\\r?\\n|\\r/g,\" \"));\n              return true;\n            } else if (this.childWordCount + this.previousWordCount > this.options.wordCount) {\n              console.warn(\"Unorphanize: Can’t safely prevent orphans on this element \\n\", this.el);\n              return true;\n            }\n          } else {\n            // Increment this.previousWordCount and continue with for loop\n            // console.log(\"Child has too few words, increment this.previousWordCount by\", this.childWordCount);\n            this.previousWordCount += this.childWordCount;\n          }\n        }\n        // Text and previous string have exactly enough words\n        //------------------------------------------------------------------------\n        else if (this.plainTextWordCount + this.previousWordCount === this.options.wordCount) {\n            // Update target element HTML\n            this.el.innerHTML = this.textBeforeChild + this.childHtml + (0, _utils.wrapString)(this.plainText + this.previousString, this.options);\n            // console.log(\"Text and previous string have exactly enough words \\n\", this.el.outerHTML.replace(/\\r?\\n|\\r/g,\" \"));\n            return true;\n          }\n          // Text and previous string have more than enough words\n          //------------------------------------------------------------------------\n          else if (this.plainTextWordCount + this.previousWordCount > this.options.wordCount) {\n              // Get number of additional words needed\n              var wordsNeeded = this.options.wordCount - this.previousWordCount;\n\n              // Split string into two parts, add back leading/trailing space\n              var leftoverText = (0, _utils.getLeadingSpace)(this.plainText) + this.plainTextWords.splice(0, this.plainTextWordCount - wordsNeeded).join(\" \");\n              var textToWrap = this.plainTextWords.join(\" \") + (0, _utils.getTrailingSpace)(this.plainText);\n\n              // Update target element HTML\n              this.el.innerHTML = this.textBeforeChild + this.childHtml + leftoverText + (0, _utils.wrapString)(textToWrap + this.previousString, this.options);\n              // console.log(\"Text and string have more than enough words \\n\", this.el.outerHTML.replace(/\\r?\\n|\\r/g,\" \"));\n              return true;\n            }\n            // Child words plus text and previous string have exactly enough words\n            //------------------------------------------------------------------------\n            else if (this.childWordCount + this.plainTextWordCount + this.previousWordCount === this.options.wordCount) {\n                // Update target element HTML\n                this.el.innerHTML = this.textBeforeChild + (0, _utils.wrapString)(this.childHtml + this.plainText + this.previousString, this.options);\n                // console.log(\"Child words plus text plus previous text have exactly enough words \\n\", this.el.outerHTML.replace(/\\r?\\n|\\r/g,\" \"));\n                return true;\n              }\n              // Child words plus text and previous string have more than enough words\n              //------------------------------------------------------------------------\n              else if (this.childWordCount + this.plainTextWordCount + this.previousWordCount > this.options.wordCount) {\n                  console.warn(\"Unorphanize: Can’t safely prevent orphans on this element \\n\", this.el);\n                  return true;\n                } else {\n                  // Increment this.previousWordCount and continue with for loop\n                  this.previousWordCount += this.childWordCount + this.plainTextWordCount;\n                  // console.log(\"Increment word count to \", this.previousWordCount);\n                }\n      }\n\n      // If we still don’t have enough words to wrap, check for any text before the first child\n      this.formatTextBeforeFirstChild();\n    }\n  }]);\n\n  return Unorphanize;\n}();\n\nexports.default = Unorphanize;\n\n//# sourceURL=webpack://%5Bname%5DLink/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getLeadingSpace = getLeadingSpace;\nexports.getTrailingSpace = getTrailingSpace;\nexports.wrapString = wrapString;\nexports.wrapPlainTextWords = wrapPlainTextWords;\n// Inlines styles to prevent wrapping\nvar nowrapCSS = exports.nowrapCSS = \"white-space: nowrap !important;\";\n\n/**\n * Get leading whitespace of string\n * @param {string} string - Source string\n * @return {string} Leading whitespace string\n */\nfunction getLeadingSpace(string) {\n  // Return everything before first non-whitespace character\n  return string.substring(0, string.search(/\\S/));\n}\n\n/**\n * Get trailing whitespace\n * @param {string} string - Source string\n * @return {string} Trailing whitespace string\n */\nfunction getTrailingSpace(string) {\n  var trailingSpaceIndex = string.search(/\\s+$/);\n  // RegEx finds 1 or more consecutive spaces at the end of the string\n  return trailingSpaceIndex > -1 ? string.substring(string.search(/\\s+$/), string.length) : \"\";\n}\n\n/**\n * Wrap entire string in span and return HTML\n * @param {string} string - Plain text string\n * @return {string} Source string wrapped in HTML tag\n */\nfunction wrapString(string, options) {\n  var classAttr = \" class=\\\"\" + options.className + \"\\\"\";\n  var styleAttr = \" style=\\\"\" + nowrapCSS + \"\\\"\";\n\n  // This unusual syntax formatting avoids adding line breaks to returned string\n  return \"\\n    <\" + options.wrapEl + (options.className.length ? classAttr : \"\") + (options.inlineStyles ? styleAttr : \"\") + \">\" + string + options.append + \"</\" + options.wrapEl + \">\";\n}\n\n/**\n * Wrap last X words of plain text string in HTML tag\n * @param {string} text - Plain text string\n * @return {string} String with last words wrapped in HTML tag\n */\nfunction wrapPlainTextWords(text, options) {\n  // Create word array\n  // (trim text to avoid counting leading/trailing spaces)\n  var allWords = text.trim().split(\" \");\n\n  // Return original text if not enough words to wrap\n  if (allWords.length < options.wordCount) {\n    return text;\n  }\n\n  // Find the last X words that should not wrap\n  var lastWords = allWords.splice(allWords.length - options.wordCount, options.wordCount);\n\n  // Add back leading/trailing space\n  var startString = getLeadingSpace(text) + allWords.join(\" \");\n  var endString = lastWords.join(\" \") + getTrailingSpace(text);\n\n  var classAttr = \" class=\\\"\" + options.className + \"\\\"\";\n  var styleAttr = \" style=\\\"\" + nowrapCSS + \"\\\"\";\n\n  // This unusual syntax formatting avoids adding line breaks to returned string\n  return \"\\n    \" + (startString.length ? startString + \" \" : \" \") + \"<\" + options.wrapEl + (options.className.length ? classAttr : \"\") + (options.inlineStyles ? styleAttr : \"\") + \">\" + endString + options.append + \"</\" + options.wrapEl + \">\";\n}\n\n//# sourceURL=webpack://%5Bname%5DLink/./src/utils.js?");

/***/ })

/******/ });
//# sourceMappingURL=unorphanize.commonjs2.js.map

/***/ }),

/***/ "../../node_modules/console-polyfill/index.js":
/*!****************************************************!*\
  !*** ../../node_modules/console-polyfill/index.js ***!
  \****************************************************/
/***/ (function() {

// Console-polyfill. MIT license.
// https://github.com/paulmillr/console-polyfill
// Make it safe to do console.log() always.
(function(global) {
  'use strict';
  if (!global.console) {
    global.console = {};
  }
  var con = global.console;
  var prop, method;
  var dummy = function() {};
  var properties = ['memory'];
  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
     'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
  while (prop = properties.pop()) if (!con[prop]) con[prop] = {};
  while (method = methods.pop()) if (!con[method]) con[method] = dummy;
  // Using `this` for web workers & supports Browserify / Webpack.
})(typeof window === 'undefined' ? this : window);


/***/ }),

/***/ "../../node_modules/fg-loadjs/loadJS.js":
/*!**********************************************!*\
  !*** ../../node_modules/fg-loadjs/loadJS.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
(function( w ){
	var loadJS = function( src, cb, ordered ){
		"use strict";
		var tmp;
		var ref = w.document.getElementsByTagName( "script" )[ 0 ];
		var script = w.document.createElement( "script" );

		if (typeof(cb) === 'boolean') {
			tmp = ordered;
			ordered = cb;
			cb = tmp;
		}

		script.src = src;
		script.async = !ordered;
		ref.parentNode.insertBefore( script, ref );

		if (cb && typeof(cb) === "function") {
			script.onload = cb;
		}
		return script;
	};
	// commonjs
	if( true ){
		module.exports = loadJS;
	}
	else {}
}( typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : this ));


/***/ }),

/***/ "../../node_modules/fontfaceobserver/fontfaceobserver.js":
/*!***************************************************************!*\
  !*** ../../node_modules/fontfaceobserver/fontfaceobserver.js ***!
  \***************************************************************/
/***/ (function(module) {

/* Font Face Observer v2.3.0 - © Bram Stein. License: BSD-3-Clause */(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());

(function(){function p(a,c){document.addEventListener?a.addEventListener("scroll",c,!1):a.attachEvent("scroll",c)}function u(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function b(){document.removeEventListener("DOMContentLoaded",b);a()}):document.attachEvent("onreadystatechange",function g(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",g),a()})};function w(a){this.g=document.createElement("div");this.g.setAttribute("aria-hidden","true");this.g.appendChild(document.createTextNode(a));this.h=document.createElement("span");this.i=document.createElement("span");this.m=document.createElement("span");this.j=document.createElement("span");this.l=-1;this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.h.appendChild(this.m);this.i.appendChild(this.j);this.g.appendChild(this.h);this.g.appendChild(this.i)}
function x(a,c){a.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+c+";"}function B(a){var c=a.g.offsetWidth,b=c+100;a.j.style.width=b+"px";a.i.scrollLeft=b;a.h.scrollLeft=a.h.scrollWidth+100;return a.l!==c?(a.l=c,!0):!1}function C(a,c){function b(){var e=g;B(e)&&null!==e.g.parentNode&&c(e.l)}var g=a;p(a.h,b);p(a.i,b);B(a)};function D(a,c,b){c=c||{};b=b||window;this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal";this.context=b}var E=null,F=null,G=null,H=null;function I(a){null===F&&(M(a)&&/Apple/.test(window.navigator.vendor)?(a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),F=!!a&&603>parseInt(a[1],10)):F=!1);return F}function M(a){null===H&&(H=!!a.document.fonts);return H}
function N(a,c){var b=a.style,g=a.weight;if(null===G){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(q){}G=""!==e.style.font}return[b,g,G?a.stretch:"","100px",c].join(" ")}
D.prototype.load=function(a,c){var b=this,g=a||"BESbswy",e=0,q=c||3E3,J=(new Date).getTime();return new Promise(function(K,L){if(M(b.context)&&!I(b.context)){var O=new Promise(function(r,t){function h(){(new Date).getTime()-J>=q?t(Error(""+q+"ms timeout exceeded")):b.context.document.fonts.load(N(b,'"'+b.family+'"'),g).then(function(n){1<=n.length?r():setTimeout(h,25)},t)}h()}),P=new Promise(function(r,t){e=setTimeout(function(){t(Error(""+q+"ms timeout exceeded"))},q)});Promise.race([P,O]).then(function(){clearTimeout(e);
K(b)},L)}else u(function(){function r(){var d;if(d=-1!=k&&-1!=l||-1!=k&&-1!=m||-1!=l&&-1!=m)(d=k!=l&&k!=m&&l!=m)||(null===E&&(d=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),E=!!d&&(536>parseInt(d[1],10)||536===parseInt(d[1],10)&&11>=parseInt(d[2],10))),d=E&&(k==y&&l==y&&m==y||k==z&&l==z&&m==z||k==A&&l==A&&m==A)),d=!d;d&&(null!==f.parentNode&&f.parentNode.removeChild(f),clearTimeout(e),K(b))}function t(){if((new Date).getTime()-J>=q)null!==f.parentNode&&f.parentNode.removeChild(f),
L(Error(""+q+"ms timeout exceeded"));else{var d=b.context.document.hidden;if(!0===d||void 0===d)k=h.g.offsetWidth,l=n.g.offsetWidth,m=v.g.offsetWidth,r();e=setTimeout(t,50)}}var h=new w(g),n=new w(g),v=new w(g),k=-1,l=-1,m=-1,y=-1,z=-1,A=-1,f=document.createElement("div");f.dir="ltr";x(h,N(b,"sans-serif"));x(n,N(b,"serif"));x(v,N(b,"monospace"));f.appendChild(h.g);f.appendChild(n.g);f.appendChild(v.g);b.context.document.body.appendChild(f);y=h.g.offsetWidth;z=n.g.offsetWidth;A=v.g.offsetWidth;t();
C(h,function(d){k=d;r()});x(h,N(b,'"'+b.family+'",sans-serif'));C(n,function(d){l=d;r()});x(n,N(b,'"'+b.family+'",serif'));C(v,function(d){m=d;r()});x(v,N(b,'"'+b.family+'",monospace'))})})}; true?module.exports=D:(0);}());


/***/ }),

/***/ "../../node_modules/lodash/_Symbol.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash/_Symbol.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "../../node_modules/lodash/_baseGetTag.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_baseGetTag.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../../node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../../node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "../../node_modules/lodash/_baseTrim.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_baseTrim.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "../../node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "../../node_modules/lodash/_freeGlobal.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_freeGlobal.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "../../node_modules/lodash/_getRawTag.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_getRawTag.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "../../node_modules/lodash/_objectToString.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_objectToString.js ***!
  \****************************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "../../node_modules/lodash/_root.js":
/*!******************************************!*\
  !*** ../../node_modules/lodash/_root.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "../../node_modules/lodash/_trimmedEndIndex.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash/_trimmedEndIndex.js ***!
  \*****************************************************/
/***/ (function(module) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "../../node_modules/lodash/before.js":
/*!*******************************************!*\
  !*** ../../node_modules/lodash/before.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./toInteger */ "../../node_modules/lodash/toInteger.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

module.exports = before;


/***/ }),

/***/ "../../node_modules/lodash/debounce.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/debounce.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "../../node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "../../node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "../../node_modules/lodash/isObject.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isObject.js ***!
  \*********************************************/
/***/ (function(module) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
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
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "../../node_modules/lodash/isObjectLike.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/isObjectLike.js ***!
  \*************************************************/
/***/ (function(module) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "../../node_modules/lodash/isSymbol.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isSymbol.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "../../node_modules/lodash/now.js":
/*!****************************************!*\
  !*** ../../node_modules/lodash/now.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "../../node_modules/lodash/once.js":
/*!*****************************************!*\
  !*** ../../node_modules/lodash/once.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var before = __webpack_require__(/*! ./before */ "../../node_modules/lodash/before.js");

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

module.exports = once;


/***/ }),

/***/ "../../node_modules/lodash/toFinite.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/toFinite.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "../../node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "../../node_modules/lodash/toInteger.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/toInteger.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "../../node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "../../node_modules/lodash/toNumber.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/toNumber.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "../../node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "../../node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "../../node_modules/mdn-polyfills/CustomEvent.js":
/*!*******************************************************!*\
  !*** ../../node_modules/mdn-polyfills/CustomEvent.js ***!
  \*******************************************************/
/***/ (function() {

!function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}"function"!=typeof window.CustomEvent&&(t.prototype=window.Event.prototype,window.CustomEvent=t)}();


/***/ }),

/***/ "../../node_modules/mdn-polyfills/Element.prototype.closest.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/mdn-polyfills/Element.prototype.closest.js ***!
  \*********************************************************************/
/***/ (function() {

Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});


/***/ }),

/***/ "../../node_modules/mdn-polyfills/NodeList.prototype.forEach.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/mdn-polyfills/NodeList.prototype.forEach.js ***!
  \**********************************************************************/
/***/ (function() {

window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(o,t){t=t||window;for(var i=0;i<this.length;i++)o.call(t,this[i],i,this)});


/***/ }),

/***/ "../../node_modules/mdn-polyfills/Object.assign.js":
/*!*********************************************************!*\
  !*** ../../node_modules/mdn-polyfills/Object.assign.js ***!
  \*********************************************************/
/***/ (function() {

"function"!=typeof Object.assign&&(Object.assign=function(n){if(null==n)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(n),t=1;t<arguments.length;t++){var e=arguments[t];if(null!=e)for(var o in e)e.hasOwnProperty(o)&&(r[o]=e[o])}return r});


/***/ }),

/***/ "../../node_modules/picturefill/dist/picturefill.js":
/*!**********************************************************!*\
  !*** ../../node_modules/picturefill/dist/picturefill.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
(function(window) {
	/*jshint eqnull:true */
	var ua = navigator.userAgent;

	if ( window.HTMLPictureElement && ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) ) {
		addEventListener("resize", (function() {
			var timer;

			var dummySrc = document.createElement("source");

			var fixRespimg = function(img) {
				var source, sizes;
				var picture = img.parentNode;

				if (picture.nodeName.toUpperCase() === "PICTURE") {
					source = dummySrc.cloneNode();

					picture.insertBefore(source, picture.firstElementChild);
					setTimeout(function() {
						picture.removeChild(source);
					});
				} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
					img._pfLastSize = img.offsetWidth;
					sizes = img.sizes;
					img.sizes += ",100vw";
					setTimeout(function() {
						img.sizes = sizes;
					});
				}
			};

			var findPictureImgs = function() {
				var i;
				var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
				for (i = 0; i < imgs.length; i++) {
					fixRespimg(imgs[i]);
				}
			};
			var onResize = function() {
				clearTimeout(timer);
				timer = setTimeout(findPictureImgs, 99);
			};
			var mq = window.matchMedia && matchMedia("(orientation: landscape)");
			var init = function() {
				onResize();

				if (mq && mq.addListener) {
					mq.addListener(onResize);
				}
			};

			dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

			if (/^[c|i]|d$/.test(document.readyState || "")) {
				init();
			} else {
				document.addEventListener("DOMContentLoaded", init);
			}

			return onResize;
		})());
	}
})(window);

/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */

(function( window, document, undefined ) {
	// Enable strict mode
	"use strict";

	// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
	document.createElement( "picture" );

	var warn, eminpx, alwaysCheckWDescriptor, evalId;
	// local object for method references and testing exposure
	var pf = {};
	var isSupportTestReady = false;
	var noop = function() {};
	var image = document.createElement( "img" );
	var getImgAttr = image.getAttribute;
	var setImgAttr = image.setAttribute;
	var removeImgAttr = image.removeAttribute;
	var docElem = document.documentElement;
	var types = {};
	var cfg = {
		//resource selection:
		algorithm: ""
	};
	var srcAttr = "data-pfsrc";
	var srcsetAttr = srcAttr + "set";
	// ua sniffing is done for undetectable img loading features,
	// to do some non crucial perf optimizations
	var ua = navigator.userAgent;
	var supportAbort = (/rident/).test(ua) || ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35 );
	var curSrcProp = "currentSrc";
	var regWDesc = /\s+\+?\d+(e\d+)?w/;
	var regSize = /(\([^)]+\))?\s*(.+)/;
	var setOptions = window.picturefillCFG;
	/**
	 * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
	 */
	// baseStyle also used by getEmValue (i.e.: width: 1em is important)
	var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
	var fsCss = "font-size:100%!important;";
	var isVwDirty = true;

	var cssCache = {};
	var sizeLengthCache = {};
	var DPR = window.devicePixelRatio;
	var units = {
		px: 1,
		"in": 96
	};
	var anchor = document.createElement( "a" );
	/**
	 * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
	 * @type {boolean}
	 */
	var alreadyRun = false;

	// Reusable, non-"g" Regexes

	// (Don't use \s, to avoid matching non-breaking space.)
	var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
	    regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
	    regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
	    regexTrailingCommas = /[,]+$/,
	    regexNonNegativeInteger = /^\d+$/,

	    // ( Positive or negative or unsigned integers or decimals, without or without exponents.
	    // Must include at least one digit.
	    // According to spec tests any decimal point must be followed by a digit.
	    // No leading plus sign is allowed.)
	    // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
	    regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

	var on = function(obj, evt, fn, capture) {
		if ( obj.addEventListener ) {
			obj.addEventListener(evt, fn, capture || false);
		} else if ( obj.attachEvent ) {
			obj.attachEvent( "on" + evt, fn);
		}
	};

	/**
	 * simple memoize function:
	 */

	var memoize = function(fn) {
		var cache = {};
		return function(input) {
			if ( !(input in cache) ) {
				cache[ input ] = fn(input);
			}
			return cache[ input ];
		};
	};

	// UTILITY FUNCTIONS

	// Manual is faster than RegEx
	// http://jsperf.com/whitespace-character/5
	function isSpace(c) {
		return (c === "\u0020" || // space
		        c === "\u0009" || // horizontal tab
		        c === "\u000A" || // new line
		        c === "\u000C" || // form feed
		        c === "\u000D");  // carriage return
	}

	/**
	 * gets a mediaquery and returns a boolean or gets a css length and returns a number
	 * @param css mediaqueries or css length
	 * @returns {boolean|number}
	 *
	 * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
	 */
	var evalCSS = (function() {

		var regLength = /^([\d\.]+)(em|vw|px)$/;
		var replace = function() {
			var args = arguments, index = 0, string = args[0];
			while (++index in args) {
				string = string.replace(args[index], args[++index]);
			}
			return string;
		};

		var buildStr = memoize(function(css) {

			return "return " + replace((css || "").toLowerCase(),
				// interpret `and`
				/\band\b/g, "&&",

				// interpret `,`
				/,/g, "||",

				// interpret `min-` as >=
				/min-([a-z-\s]+):/g, "e.$1>=",

				// interpret `max-` as <=
				/max-([a-z-\s]+):/g, "e.$1<=",

				//calc value
				/calc([^)]+)/g, "($1)",

				// interpret css values
				/(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
				//make eval less evil
				/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, ""
			) + ";";
		});

		return function(css, length) {
			var parsedLength;
			if (!(css in cssCache)) {
				cssCache[css] = false;
				if (length && (parsedLength = css.match( regLength ))) {
					cssCache[css] = parsedLength[ 1 ] * units[parsedLength[ 2 ]];
				} else {
					/*jshint evil:true */
					try{
						cssCache[css] = new Function("e", buildStr(css))(units);
					} catch(e) {}
					/*jshint evil:false */
				}
			}
			return cssCache[css];
		};
	})();

	var setResolution = function( candidate, sizesattr ) {
		if ( candidate.w ) { // h = means height: || descriptor.type === 'h' do not handle yet...
			candidate.cWidth = pf.calcListLength( sizesattr || "100vw" );
			candidate.res = candidate.w / candidate.cWidth ;
		} else {
			candidate.res = candidate.d;
		}
		return candidate;
	};

	/**
	 *
	 * @param opt
	 */
	var picturefill = function( opt ) {

		if (!isSupportTestReady) {return;}

		var elements, i, plen;

		var options = opt || {};

		if ( options.elements && options.elements.nodeType === 1 ) {
			if ( options.elements.nodeName.toUpperCase() === "IMG" ) {
				options.elements =  [ options.elements ];
			} else {
				options.context = options.elements;
				options.elements =  null;
			}
		}

		elements = options.elements || pf.qsa( (options.context || document), ( options.reevaluate || options.reselect ) ? pf.sel : pf.selShort );

		if ( (plen = elements.length) ) {

			pf.setupRun( options );
			alreadyRun = true;

			// Loop through all elements
			for ( i = 0; i < plen; i++ ) {
				pf.fillImg(elements[ i ], options);
			}

			pf.teardownRun( options );
		}
	};

	/**
	 * outputs a warning for the developer
	 * @param {message}
	 * @type {Function}
	 */
	warn = ( window.console && console.warn ) ?
		function( message ) {
			console.warn( message );
		} :
		noop
	;

	if ( !(curSrcProp in image) ) {
		curSrcProp = "src";
	}

	// Add support for standard mime types.
	types[ "image/jpeg" ] = true;
	types[ "image/gif" ] = true;
	types[ "image/png" ] = true;

	function detectTypeSupport( type, typeUri ) {
		// based on Modernizr's lossless img-webp test
		// note: asynchronous
		var image = new window.Image();
		image.onerror = function() {
			types[ type ] = false;
			picturefill();
		};
		image.onload = function() {
			types[ type ] = image.width === 1;
			picturefill();
		};
		image.src = typeUri;
		return "pending";
	}

	// test svg support
	types[ "image/svg+xml" ] = document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#Image", "1.1" );

	/**
	 * updates the internal vW property with the current viewport width in px
	 */
	function updateMetrics() {

		isVwDirty = false;
		DPR = window.devicePixelRatio;
		cssCache = {};
		sizeLengthCache = {};

		pf.DPR = DPR || 1;

		units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
		units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

		units.vw = units.width / 100;
		units.vh = units.height / 100;

		evalId = [ units.height, units.width, DPR ].join("-");

		units.em = pf.getEmValue();
		units.rem = units.em;
	}

	function chooseLowRes( lowerValue, higherValue, dprValue, isCached ) {
		var bonusFactor, tooMuch, bonus, meanDensity;

		//experimental
		if (cfg.algorithm === "saveData" ){
			if ( lowerValue > 2.7 ) {
				meanDensity = dprValue + 1;
			} else {
				tooMuch = higherValue - dprValue;
				bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

				bonus = tooMuch * bonusFactor;

				if (isCached) {
					bonus += 0.1 * bonusFactor;
				}

				meanDensity = lowerValue + bonus;
			}
		} else {
			meanDensity = (dprValue > 1) ?
				Math.sqrt(lowerValue * higherValue) :
				lowerValue;
		}

		return meanDensity > dprValue;
	}

	function applyBestCandidate( img ) {
		var srcSetCandidates;
		var matchingSet = pf.getSet( img );
		var evaluated = false;
		if ( matchingSet !== "pending" ) {
			evaluated = evalId;
			if ( matchingSet ) {
				srcSetCandidates = pf.setRes( matchingSet );
				pf.applySetCandidate( srcSetCandidates, img );
			}
		}
		img[ pf.ns ].evaled = evaluated;
	}

	function ascendingSort( a, b ) {
		return a.res - b.res;
	}

	function setSrcToCur( img, src, set ) {
		var candidate;
		if ( !set && src ) {
			set = img[ pf.ns ].sets;
			set = set && set[set.length - 1];
		}

		candidate = getCandidateForSrc(src, set);

		if ( candidate ) {
			src = pf.makeUrl(src);
			img[ pf.ns ].curSrc = src;
			img[ pf.ns ].curCan = candidate;

			if ( !candidate.res ) {
				setResolution( candidate, candidate.set.sizes );
			}
		}
		return candidate;
	}

	function getCandidateForSrc( src, set ) {
		var i, candidate, candidates;
		if ( src && set ) {
			candidates = pf.parseSet( set );
			src = pf.makeUrl(src);
			for ( i = 0; i < candidates.length; i++ ) {
				if ( src === pf.makeUrl(candidates[ i ].url) ) {
					candidate = candidates[ i ];
					break;
				}
			}
		}
		return candidate;
	}

	function getAllSourceElements( picture, candidates ) {
		var i, len, source, srcset;

		// SPEC mismatch intended for size and perf:
		// actually only source elements preceding the img should be used
		// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
		var sources = picture.getElementsByTagName( "source" );

		for ( i = 0, len = sources.length; i < len; i++ ) {
			source = sources[ i ];
			source[ pf.ns ] = true;
			srcset = source.getAttribute( "srcset" );

			// if source does not have a srcset attribute, skip
			if ( srcset ) {
				candidates.push( {
					srcset: srcset,
					media: source.getAttribute( "media" ),
					type: source.getAttribute( "type" ),
					sizes: source.getAttribute( "sizes" )
				} );
			}
		}
	}

	/**
	 * Srcset Parser
	 * By Alex Bell |  MIT License
	 *
	 * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
	 *
	 * Based super duper closely on the reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
	 */

	// 1. Let input be the value passed to this algorithm.
	// (TO-DO : Explain what "set" argument is here. Maybe choose a more
	// descriptive & more searchable name.  Since passing the "set" in really has
	// nothing to do with parsing proper, I would prefer this assignment eventually
	// go in an external fn.)
	function parseSrcset(input, set) {

		function collectCharacters(regEx) {
			var chars,
			    match = regEx.exec(input.substring(pos));
			if (match) {
				chars = match[ 0 ];
				pos += chars.length;
				return chars;
			}
		}

		var inputLength = input.length,
		    url,
		    descriptors,
		    currentDescriptor,
		    state,
		    c,

		    // 2. Let position be a pointer into input, initially pointing at the start
		    //    of the string.
		    pos = 0,

		    // 3. Let candidates be an initially empty source set.
		    candidates = [];

		/**
		* Adds descriptor properties to a candidate, pushes to the candidates array
		* @return undefined
		*/
		// (Declared outside of the while loop so that it's only created once.
		// (This fn is defined before it is used, in order to pass JSHINT.
		// Unfortunately this breaks the sequencing of the spec comments. :/ )
		function parseDescriptors() {

			// 9. Descriptor parser: Let error be no.
			var pError = false,

			// 10. Let width be absent.
			// 11. Let density be absent.
			// 12. Let future-compat-h be absent. (We're implementing it now as h)
			    w, d, h, i,
			    candidate = {},
			    desc, lastChar, value, intVal, floatVal;

			// 13. For each descriptor in descriptors, run the appropriate set of steps
			// from the following list:
			for (i = 0 ; i < descriptors.length; i++) {
				desc = descriptors[ i ];

				lastChar = desc[ desc.length - 1 ];
				value = desc.substring(0, desc.length - 1);
				intVal = parseInt(value, 10);
				floatVal = parseFloat(value);

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0077 LATIN SMALL LETTER W character
				if (regexNonNegativeInteger.test(value) && (lastChar === "w")) {

					// If width and density are not both absent, then let error be yes.
					if (w || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes.
					// Otherwise, let width be the result.
					if (intVal === 0) {pError = true;} else {w = intVal;}

				// If the descriptor consists of a valid floating-point number followed by
				// a U+0078 LATIN SMALL LETTER X character
				} else if (regexFloatingPoint.test(value) && (lastChar === "x")) {

					// If width, density and future-compat-h are not all absent, then let error
					// be yes.
					if (w || d || h) {pError = true;}

					// Apply the rules for parsing floating-point number values to the descriptor.
					// If the result is less than zero, let error be yes. Otherwise, let density
					// be the result.
					if (floatVal < 0) {pError = true;} else {d = floatVal;}

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0068 LATIN SMALL LETTER H character
				} else if (regexNonNegativeInteger.test(value) && (lastChar === "h")) {

					// If height and density are not both absent, then let error be yes.
					if (h || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes. Otherwise, let future-compat-h
					// be the result.
					if (intVal === 0) {pError = true;} else {h = intVal;}

				// Anything else, Let error be yes.
				} else {pError = true;}
			} // (close step 13 for loop)

			// 15. If error is still no, then append a new image source to candidates whose
			// URL is url, associated with a width width if not absent and a pixel
			// density density if not absent. Otherwise, there is a parse error.
			if (!pError) {
				candidate.url = url;

				if (w) { candidate.w = w;}
				if (d) { candidate.d = d;}
				if (h) { candidate.h = h;}
				if (!h && !d && !w) {candidate.d = 1;}
				if (candidate.d === 1) {set.has1x = true;}
				candidate.set = set;

				candidates.push(candidate);
			}
		} // (close parseDescriptors fn)

		/**
		* Tokenizes descriptor properties prior to parsing
		* Returns undefined.
		* (Again, this fn is defined before it is used, in order to pass JSHINT.
		* Unfortunately this breaks the logical sequencing of the spec comments. :/ )
		*/
		function tokenize() {

			// 8.1. Descriptor tokeniser: Skip whitespace
			collectCharacters(regexLeadingSpaces);

			// 8.2. Let current descriptor be the empty string.
			currentDescriptor = "";

			// 8.3. Let state be in descriptor.
			state = "in descriptor";

			while (true) {

				// 8.4. Let c be the character at position.
				c = input.charAt(pos);

				//  Do the following depending on the value of state.
				//  For the purpose of this step, "EOF" is a special character representing
				//  that position is past the end of input.

				// In descriptor
				if (state === "in descriptor") {
					// Do the following, depending on the value of c:

				  // Space character
				  // If current descriptor is not empty, append current descriptor to
				  // descriptors and let current descriptor be the empty string.
				  // Set state to after descriptor.
					if (isSpace(c)) {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
							currentDescriptor = "";
							state = "after descriptor";
						}

					// U+002C COMMA (,)
					// Advance position to the next character in input. If current descriptor
					// is not empty, append current descriptor to descriptors. Jump to the step
					// labeled descriptor parser.
					} else if (c === ",") {
						pos += 1;
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

					// U+0028 LEFT PARENTHESIS (()
					// Append c to current descriptor. Set state to in parens.
					} else if (c === "\u0028") {
						currentDescriptor = currentDescriptor + c;
						state = "in parens";

					// EOF
					// If current descriptor is not empty, append current descriptor to
					// descriptors. Jump to the step labeled descriptor parser.
					} else if (c === "") {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

					// Anything else
					// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}
				// (end "in descriptor"

				// In parens
				} else if (state === "in parens") {

					// U+0029 RIGHT PARENTHESIS ())
					// Append c to current descriptor. Set state to in descriptor.
					if (c === ")") {
						currentDescriptor = currentDescriptor + c;
						state = "in descriptor";

					// EOF
					// Append current descriptor to descriptors. Jump to the step labeled
					// descriptor parser.
					} else if (c === "") {
						descriptors.push(currentDescriptor);
						parseDescriptors();
						return;

					// Anything else
					// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}

				// After descriptor
				} else if (state === "after descriptor") {

					// Do the following, depending on the value of c:
					// Space character: Stay in this state.
					if (isSpace(c)) {

					// EOF: Jump to the step labeled descriptor parser.
					} else if (c === "") {
						parseDescriptors();
						return;

					// Anything else
					// Set state to in descriptor. Set position to the previous character in input.
					} else {
						state = "in descriptor";
						pos -= 1;

					}
				}

				// Advance position to the next character in input.
				pos += 1;

			// Repeat this step.
			} // (close while true loop)
		}

		// 4. Splitting loop: Collect a sequence of characters that are space
		//    characters or U+002C COMMA characters. If any U+002C COMMA characters
		//    were collected, that is a parse error.
		while (true) {
			collectCharacters(regexLeadingCommasOrSpaces);

			// 5. If position is past the end of input, return candidates and abort these steps.
			if (pos >= inputLength) {
				return candidates; // (we're done, this is the sole return path)
			}

			// 6. Collect a sequence of characters that are not space characters,
			//    and let that be url.
			url = collectCharacters(regexLeadingNotSpaces);

			// 7. Let descriptors be a new empty list.
			descriptors = [];

			// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
			//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
			//         more than one character, that is a parse error.
			if (url.slice(-1) === ",") {
				url = url.replace(regexTrailingCommas, "");
				// (Jump ahead to step 9 to skip tokenization and just push the candidate).
				parseDescriptors();

			//	Otherwise, follow these substeps:
			} else {
				tokenize();
			} // (close else of step 8)

		// 16. Return to the step labeled splitting loop.
		} // (Close of big while loop.)
	}

	/*
	 * Sizes Parser
	 *
	 * By Alex Bell |  MIT License
	 *
	 * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
	 *
	 * Reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
	 *
	 * Most comments are copied in directly from the spec
	 * (except for comments in parens).
	 *
	 * Grammar is:
	 * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
	 * <source-size> = <media-condition> <source-size-value>
	 * <source-size-value> = <length>
	 * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
	 *
	 * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
	 * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
	 *
	 * Returns the first valid <css-length> with a media condition that evaluates to true,
	 * or "100vw" if all valid media conditions evaluate to false.
	 *
	 */

	function parseSizes(strValue) {

		// (Percentage CSS lengths are not allowed in this case, to avoid confusion:
		// https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
		// CSS allows a single optional plus or minus sign:
		// http://www.w3.org/TR/CSS2/syndata.html#numbers
		// CSS is ASCII case-insensitive:
		// http://www.w3.org/TR/CSS2/syndata.html#characters )
		// Spec allows exponential notation for <number> type:
		// http://dev.w3.org/csswg/css-values/#numbers
		var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

		// (This is a quick and lenient test. Because of optional unlimited-depth internal
		// grouping parens and strict spacing rules, this could get very complicated.)
		var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

		var i;
		var unparsedSizesList;
		var unparsedSizesListLength;
		var unparsedSize;
		var lastComponentValue;
		var size;

		// UTILITY FUNCTIONS

		//  (Toy CSS parser. The goals here are:
		//  1) expansive test coverage without the weight of a full CSS parser.
		//  2) Avoiding regex wherever convenient.
		//  Quick tests: http://jsfiddle.net/gtntL4gr/3/
		//  Returns an array of arrays.)
		function parseComponentValues(str) {
			var chrctr;
			var component = "";
			var componentArray = [];
			var listArray = [];
			var parenDepth = 0;
			var pos = 0;
			var inComment = false;

			function pushComponent() {
				if (component) {
					componentArray.push(component);
					component = "";
				}
			}

			function pushComponentArray() {
				if (componentArray[0]) {
					listArray.push(componentArray);
					componentArray = [];
				}
			}

			// (Loop forwards from the beginning of the string.)
			while (true) {
				chrctr = str.charAt(pos);

				if (chrctr === "") { // ( End of string reached.)
					pushComponent();
					pushComponentArray();
					return listArray;
				} else if (inComment) {
					if ((chrctr === "*") && (str[pos + 1] === "/")) { // (At end of a comment.)
						inComment = false;
						pos += 2;
						pushComponent();
						continue;
					} else {
						pos += 1; // (Skip all characters inside comments.)
						continue;
					}
				} else if (isSpace(chrctr)) {
					// (If previous character in loop was also a space, or if
					// at the beginning of the string, do not add space char to
					// component.)
					if ( (str.charAt(pos - 1) && isSpace( str.charAt(pos - 1) ) ) || !component ) {
						pos += 1;
						continue;
					} else if (parenDepth === 0) {
						pushComponent();
						pos +=1;
						continue;
					} else {
						// (Replace any space character with a plain space for legibility.)
						chrctr = " ";
					}
				} else if (chrctr === "(") {
					parenDepth += 1;
				} else if (chrctr === ")") {
					parenDepth -= 1;
				} else if (chrctr === ",") {
					pushComponent();
					pushComponentArray();
					pos += 1;
					continue;
				} else if ( (chrctr === "/") && (str.charAt(pos + 1) === "*") ) {
					inComment = true;
					pos += 2;
					continue;
				}

				component = component + chrctr;
				pos += 1;
			}
		}

		function isValidNonNegativeSourceSizeValue(s) {
			if (regexCssLengthWithUnits.test(s) && (parseFloat(s) >= 0)) {return true;}
			if (regexCssCalc.test(s)) {return true;}
			// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
			// "-0 is equivalent to 0 and is not a negative number." which means that
			// unitless zero and unitless negative zero must be accepted as special cases.)
			if ((s === "0") || (s === "-0") || (s === "+0")) {return true;}
			return false;
		}

		// When asked to parse a sizes attribute from an element, parse a
		// comma-separated list of component values from the value of the element's
		// sizes attribute (or the empty string, if the attribute is absent), and let
		// unparsed sizes list be the result.
		// http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

		unparsedSizesList = parseComponentValues(strValue);
		unparsedSizesListLength = unparsedSizesList.length;

		// For each unparsed size in unparsed sizes list:
		for (i = 0; i < unparsedSizesListLength; i++) {
			unparsedSize = unparsedSizesList[i];

			// 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
			// ( parseComponentValues() already omits spaces outside of parens. )

			// If unparsed size is now empty, that is a parse error; continue to the next
			// iteration of this algorithm.
			// ( parseComponentValues() won't push an empty array. )

			// 2. If the last component value in unparsed size is a valid non-negative
			// <source-size-value>, let size be its value and remove the component value
			// from unparsed size. Any CSS function other than the calc() function is
			// invalid. Otherwise, there is a parse error; continue to the next iteration
			// of this algorithm.
			// http://dev.w3.org/csswg/css-syntax/#parse-component-value
			lastComponentValue = unparsedSize[unparsedSize.length - 1];

			if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
				size = lastComponentValue;
				unparsedSize.pop();
			} else {
				continue;
			}

			// 3. Remove all consecutive <whitespace-token>s from the end of unparsed
			// size. If unparsed size is now empty, return size and exit this algorithm.
			// If this was not the last item in unparsed sizes list, that is a parse error.
			if (unparsedSize.length === 0) {
				return size;
			}

			// 4. Parse the remaining component values in unparsed size as a
			// <media-condition>. If it does not parse correctly, or it does parse
			// correctly but the <media-condition> evaluates to false, continue to the
			// next iteration of this algorithm.
			// (Parsing all possible compound media conditions in JS is heavy, complicated,
			// and the payoff is unclear. Is there ever an situation where the
			// media condition parses incorrectly but still somehow evaluates to true?
			// Can we just rely on the browser/polyfill to do it?)
			unparsedSize = unparsedSize.join(" ");
			if (!(pf.matchesMedia( unparsedSize ) ) ) {
				continue;
			}

			// 5. Return size and exit this algorithm.
			return size;
		}

		// If the above algorithm exhausts unparsed sizes list without returning a
		// size value, return 100vw.
		return "100vw";
	}

	// namespace
	pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

	// srcset support test
	pf.supSrcset = "srcset" in image;
	pf.supSizes = "sizes" in image;
	pf.supPicture = !!window.HTMLPictureElement;

	// UC browser does claim to support srcset and picture, but not sizes,
	// this extended test reveals the browser does support nothing
	if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
		(function(image2) {
			image.srcset = "data:,a";
			image2.src = "data:,a";
			pf.supSrcset = image.complete === image2.complete;
			pf.supPicture = pf.supSrcset && pf.supPicture;
		})(document.createElement("img"));
	}

	// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
	if (pf.supSrcset && !pf.supSizes) {

		(function() {
			var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
			var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
			var img = document.createElement("img");
			var test = function() {
				var width = img.width;

				if (width === 2) {
					pf.supSizes = true;
				}

				alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

				isSupportTestReady = true;
				// force async
				setTimeout(picturefill);
			};

			img.onload = test;
			img.onerror = test;
			img.setAttribute("sizes", "9px");

			img.srcset = width1 + " 1w," + width2 + " 9w";
			img.src = width1;
		})();

	} else {
		isSupportTestReady = true;
	}

	// using pf.qsa instead of dom traversing does scale much better,
	// especially on sites mixing responsive and non-responsive images
	pf.selShort = "picture>img,img[srcset]";
	pf.sel = pf.selShort;
	pf.cfg = cfg;

	/**
	 * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
	 */
	pf.DPR = (DPR  || 1 );
	pf.u = units;

	// container of supported mime types that one might need to qualify before using
	pf.types =  types;

	pf.setSize = noop;

	/**
	 * Gets a string and returns the absolute URL
	 * @param src
	 * @returns {String} absolute URL
	 */

	pf.makeUrl = memoize(function(src) {
		anchor.href = src;
		return anchor.href;
	});

	/**
	 * Gets a DOM element or document and a selctor and returns the found matches
	 * Can be extended with jQuery/Sizzle for IE7 support
	 * @param context
	 * @param sel
	 * @returns {NodeList|Array}
	 */
	pf.qsa = function(context, sel) {
		return ( "querySelector" in context ) ? context.querySelectorAll(sel) : [];
	};

	/**
	 * Shortcut method for matchMedia ( for easy overriding in tests )
	 * wether native or pf.mMQ is used will be decided lazy on first call
	 * @returns {boolean}
	 */
	pf.matchesMedia = function() {
		if ( window.matchMedia && (matchMedia( "(min-width: 0.1em)" ) || {}).matches ) {
			pf.matchesMedia = function( media ) {
				return !media || ( matchMedia( media ).matches );
			};
		} else {
			pf.matchesMedia = pf.mMQ;
		}

		return pf.matchesMedia.apply( this, arguments );
	};

	/**
	 * A simplified matchMedia implementation for IE8 and IE9
	 * handles only min-width/max-width with px or em values
	 * @param media
	 * @returns {boolean}
	 */
	pf.mMQ = function( media ) {
		return media ? evalCSS(media) : true;
	};

	/**
	 * Returns the calculated length in css pixel from the given sourceSizeValue
	 * http://dev.w3.org/csswg/css-values-3/#length-value
	 * intended Spec mismatches:
	 * * Does not check for invalid use of CSS functions
	 * * Does handle a computed length of 0 the same as a negative and therefore invalid value
	 * @param sourceSizeValue
	 * @returns {Number}
	 */
	pf.calcLength = function( sourceSizeValue ) {

		var value = evalCSS(sourceSizeValue, true) || false;
		if (value < 0) {
			value = false;
		}

		return value;
	};

	/**
	 * Takes a type string and checks if its supported
	 */

	pf.supportsType = function( type ) {
		return ( type ) ? types[ type ] : true;
	};

	/**
	 * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
	 * @param sourceSizeStr
	 * @returns {*}
	 */
	pf.parseSize = memoize(function( sourceSizeStr ) {
		var match = ( sourceSizeStr || "" ).match(regSize);
		return {
			media: match && match[1],
			length: match && match[2]
		};
	});

	pf.parseSet = function( set ) {
		if ( !set.cands ) {
			set.cands = parseSrcset(set.srcset, set);
		}
		return set.cands;
	};

	/**
	 * returns 1em in css px for html/body default size
	 * function taken from respondjs
	 * @returns {*|number}
	 */
	pf.getEmValue = function() {
		var body;
		if ( !eminpx && (body = document.body) ) {
			var div = document.createElement( "div" ),
				originalHTMLCSS = docElem.style.cssText,
				originalBodyCSS = body.style.cssText;

			div.style.cssText = baseStyle;

			// 1em in a media query is the value of the default font size of the browser
			// reset docElem and body to ensure the correct value is returned
			docElem.style.cssText = fsCss;
			body.style.cssText = fsCss;

			body.appendChild( div );
			eminpx = div.offsetWidth;
			body.removeChild( div );

			//also update eminpx before returning
			eminpx = parseFloat( eminpx, 10 );

			// restore the original values
			docElem.style.cssText = originalHTMLCSS;
			body.style.cssText = originalBodyCSS;

		}
		return eminpx || 16;
	};

	/**
	 * Takes a string of sizes and returns the width in pixels as a number
	 */
	pf.calcListLength = function( sourceSizeListStr ) {
		// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
		//
		//                           or (min-width:30em) calc(30% - 15px)
		if ( !(sourceSizeListStr in sizeLengthCache) || cfg.uT ) {
			var winningLength = pf.calcLength( parseSizes( sourceSizeListStr ) );

			sizeLengthCache[ sourceSizeListStr ] = !winningLength ? units.width : winningLength;
		}

		return sizeLengthCache[ sourceSizeListStr ];
	};

	/**
	 * Takes a candidate object with a srcset property in the form of url/
	 * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
	 *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
	 *     "images/pic-small.png"
	 * Get an array of image candidates in the form of
	 *      {url: "/foo/bar.png", resolution: 1}
	 * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
	 * If sizes is specified, res is calculated
	 */
	pf.setRes = function( set ) {
		var candidates;
		if ( set ) {

			candidates = pf.parseSet( set );

			for ( var i = 0, len = candidates.length; i < len; i++ ) {
				setResolution( candidates[ i ], set.sizes );
			}
		}
		return candidates;
	};

	pf.setRes.res = setResolution;

	pf.applySetCandidate = function( candidates, img ) {
		if ( !candidates.length ) {return;}
		var candidate,
			i,
			j,
			length,
			bestCandidate,
			curSrc,
			curCan,
			candidateSrc,
			abortCurSrc;

		var imageData = img[ pf.ns ];
		var dpr = pf.DPR;

		curSrc = imageData.curSrc || img[curSrcProp];

		curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

		// if we have a current source, we might either become lazy or give this source some advantage
		if ( curCan && curCan.set === candidates[ 0 ].set ) {

			// if browser can abort image request and the image has a higher pixel density than needed
			// and this image isn't downloaded yet, we skip next part and try to save bandwidth
			abortCurSrc = (supportAbort && !img.complete && curCan.res - 0.1 > dpr);

			if ( !abortCurSrc ) {
				curCan.cached = true;

				// if current candidate is "best", "better" or "okay",
				// set it to bestCandidate
				if ( curCan.res >= dpr ) {
					bestCandidate = curCan;
				}
			}
		}

		if ( !bestCandidate ) {

			candidates.sort( ascendingSort );

			length = candidates.length;
			bestCandidate = candidates[ length - 1 ];

			for ( i = 0; i < length; i++ ) {
				candidate = candidates[ i ];
				if ( candidate.res >= dpr ) {
					j = i - 1;

					// we have found the perfect candidate,
					// but let's improve this a little bit with some assumptions ;-)
					if (candidates[ j ] &&
						(abortCurSrc || curSrc !== pf.makeUrl( candidate.url )) &&
						chooseLowRes(candidates[ j ].res, candidate.res, dpr, candidates[ j ].cached)) {

						bestCandidate = candidates[ j ];

					} else {
						bestCandidate = candidate;
					}
					break;
				}
			}
		}

		if ( bestCandidate ) {

			candidateSrc = pf.makeUrl( bestCandidate.url );

			imageData.curSrc = candidateSrc;
			imageData.curCan = bestCandidate;

			if ( candidateSrc !== curSrc ) {
				pf.setSrc( img, bestCandidate );
			}
			pf.setSize( img );
		}
	};

	pf.setSrc = function( img, bestCandidate ) {
		var origWidth;
		img.src = bestCandidate.url;

		// although this is a specific Safari issue, we don't want to take too much different code paths
		if ( bestCandidate.set.type === "image/svg+xml" ) {
			origWidth = img.style.width;
			img.style.width = (img.offsetWidth + 1) + "px";

			// next line only should trigger a repaint
			// if... is only done to trick dead code removal
			if ( img.offsetWidth + 1 ) {
				img.style.width = origWidth;
			}
		}
	};

	pf.getSet = function( img ) {
		var i, set, supportsType;
		var match = false;
		var sets = img [ pf.ns ].sets;

		for ( i = 0; i < sets.length && !match; i++ ) {
			set = sets[i];

			if ( !set.srcset || !pf.matchesMedia( set.media ) || !(supportsType = pf.supportsType( set.type )) ) {
				continue;
			}

			if ( supportsType === "pending" ) {
				set = supportsType;
			}

			match = set;
			break;
		}

		return match;
	};

	pf.parseSets = function( element, parent, options ) {
		var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

		var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
		var imageData = element[ pf.ns ];

		if ( imageData.src === undefined || options.src ) {
			imageData.src = getImgAttr.call( element, "src" );
			if ( imageData.src ) {
				setImgAttr.call( element, srcAttr, imageData.src );
			} else {
				removeImgAttr.call( element, srcAttr );
			}
		}

		if ( imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset ) {
			srcsetAttribute = getImgAttr.call( element, "srcset" );
			imageData.srcset = srcsetAttribute;
			srcsetParsed = true;
		}

		imageData.sets = [];

		if ( hasPicture ) {
			imageData.pic = true;
			getAllSourceElements( parent, imageData.sets );
		}

		if ( imageData.srcset ) {
			imageSet = {
				srcset: imageData.srcset,
				sizes: getImgAttr.call( element, "sizes" )
			};

			imageData.sets.push( imageSet );

			isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

			// add normal src as candidate, if source has no w descriptor
			if ( !isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x ) {
				imageSet.srcset += ", " + imageData.src;
				imageSet.cands.push({
					url: imageData.src,
					d: 1,
					set: imageSet
				});
			}

		} else if ( imageData.src ) {
			imageData.sets.push( {
				srcset: imageData.src,
				sizes: null
			} );
		}

		imageData.curCan = null;
		imageData.curSrc = undefined;

		// if img has picture or the srcset was removed or has a srcset and does not support srcset at all
		// or has a w descriptor (and does not support sizes) set support to false to evaluate
		imageData.supported = !( hasPicture || ( imageSet && !pf.supSrcset ) || (isWDescripor && !pf.supSizes) );

		if ( srcsetParsed && pf.supSrcset && !imageData.supported ) {
			if ( srcsetAttribute ) {
				setImgAttr.call( element, srcsetAttr, srcsetAttribute );
				element.srcset = "";
			} else {
				removeImgAttr.call( element, srcsetAttr );
			}
		}

		if (imageData.supported && !imageData.srcset && ((!imageData.src && element.src) ||  element.src !== pf.makeUrl(imageData.src))) {
			if (imageData.src === null) {
				element.removeAttribute("src");
			} else {
				element.src = imageData.src;
			}
		}

		imageData.parsed = true;
	};

	pf.fillImg = function(element, options) {
		var imageData;
		var extreme = options.reselect || options.reevaluate;

		// expando for caching data on the img
		if ( !element[ pf.ns ] ) {
			element[ pf.ns ] = {};
		}

		imageData = element[ pf.ns ];

		// if the element has already been evaluated, skip it
		// unless `options.reevaluate` is set to true ( this, for example,
		// is set to true when running `picturefill` on `resize` ).
		if ( !extreme && imageData.evaled === evalId ) {
			return;
		}

		if ( !imageData.parsed || options.reevaluate ) {
			pf.parseSets( element, element.parentNode, options );
		}

		if ( !imageData.supported ) {
			applyBestCandidate( element );
		} else {
			imageData.evaled = evalId;
		}
	};

	pf.setupRun = function() {
		if ( !alreadyRun || isVwDirty || (DPR !== window.devicePixelRatio) ) {
			updateMetrics();
		}
	};

	// If picture is supported, well, that's awesome.
	if ( pf.supPicture ) {
		picturefill = noop;
		pf.fillImg = noop;
	} else {

		 // Set up picture polyfill by polling the document
		(function() {
			var isDomReady;
			var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

			var run = function() {
				var readyState = document.readyState || "";

				timerId = setTimeout(run, readyState === "loading" ? 200 :  999);
				if ( document.body ) {
					pf.fillImgs();
					isDomReady = isDomReady || regReady.test(readyState);
					if ( isDomReady ) {
						clearTimeout( timerId );
					}

				}
			};

			var timerId = setTimeout(run, document.body ? 9 : 99);

			// Also attach picturefill on resize and readystatechange
			// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
			var debounce = function(func, wait) {
				var timeout, timestamp;
				var later = function() {
					var last = (new Date()) - timestamp;

					if (last < wait) {
						timeout = setTimeout(later, wait - last);
					} else {
						timeout = null;
						func();
					}
				};

				return function() {
					timestamp = new Date();

					if (!timeout) {
						timeout = setTimeout(later, wait);
					}
				};
			};
			var lastClientWidth = docElem.clientHeight;
			var onResize = function() {
				isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
				lastClientWidth = docElem.clientHeight;
				if ( isVwDirty ) {
					pf.fillImgs();
				}
			};

			on( window, "resize", debounce(onResize, 99 ) );
			on( document, "readystatechange", run );
		})();
	}

	pf.picturefill = picturefill;
	//use this internally for easy monkey patching/performance testing
	pf.fillImgs = picturefill;
	pf.teardownRun = noop;

	/* expose methods for testing */
	picturefill._ = pf;

	window.picturefillCFG = {
		pf: pf,
		push: function(args) {
			var name = args.shift();
			if (typeof pf[name] === "function") {
				pf[name].apply(pf, args);
			} else {
				cfg[name] = args[0];
				if (alreadyRun) {
					pf.fillImgs( { reselect: true } );
				}
			}
		}
	};

	while (setOptions && setOptions.length) {
		window.picturefillCFG.push(setOptions.shift());
	}

	/* expose picturefill */
	window.picturefill = picturefill;

	/* expose picturefill */
	if (  true && typeof module.exports === "object" ) {
		// CommonJS, just export
		module.exports = picturefill;
	} else if ( true ) {
		// AMD support
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return picturefill; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// IE8 evals this sync, so it must be the last thing we do
	if ( !pf.supPicture ) {
		types[ "image/webp" ] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==" );
	}

} )( window, document );


/***/ }),

/***/ "../../node_modules/what-input/dist/what-input.js":
/*!********************************************************!*\
  !*** ../../node_modules/what-input/dist/what-input.js ***!
  \********************************************************/
/***/ (function(module) {

/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.12
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __nested_webpack_require_738__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_738__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_738__.m = modules;

/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_738__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_738__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_738__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function () {
	  /*
	   * bail out if there is no document or window
	   * (i.e. in a node/non-DOM environment)
	   *
	   * Return a stubbed API instead
	   */
	  if (typeof document === 'undefined' || typeof window === 'undefined') {
	    return {
	      // always return "initial" because no interaction will ever be detected
	      ask: function ask() {
	        return 'initial';
	      },

	      // always return null
	      element: function element() {
	        return null;
	      },

	      // no-op
	      ignoreKeys: function ignoreKeys() {},

	      // no-op
	      specificKeys: function specificKeys() {},

	      // no-op
	      registerOnChange: function registerOnChange() {},

	      // no-op
	      unRegisterOnChange: function unRegisterOnChange() {}
	    };
	  }

	  /*
	   * variables
	   */

	  // cache document.documentElement
	  var docElem = document.documentElement;

	  // currently focused dom element
	  var currentElement = null;

	  // last used input type
	  var currentInput = 'initial';

	  // last used input intent
	  var currentIntent = currentInput;

	  // UNIX timestamp of current event
	  var currentTimestamp = Date.now();

	  // check for a `data-whatpersist` attribute on either the `html` or `body` elements, defaults to `true`
	  var shouldPersist = false;

	  // form input types
	  var formInputs = ['button', 'input', 'select', 'textarea'];

	  // empty array for holding callback functions
	  var functionList = [];

	  // list of modifier keys commonly used with the mouse and
	  // can be safely ignored to prevent false keyboard detection
	  var ignoreMap = [16, // shift
	  17, // control
	  18, // alt
	  91, // Windows key / left Apple cmd
	  93 // Windows menu / right Apple cmd
	  ];

	  var specificMap = [];

	  // mapping of events to input types
	  var inputMap = {
	    keydown: 'keyboard',
	    keyup: 'keyboard',
	    mousedown: 'mouse',
	    mousemove: 'mouse',
	    MSPointerDown: 'pointer',
	    MSPointerMove: 'pointer',
	    pointerdown: 'pointer',
	    pointermove: 'pointer',
	    touchstart: 'touch',
	    touchend: 'touch'

	    // boolean: true if the page is being scrolled
	  };var isScrolling = false;

	  // store current mouse position
	  var mousePos = {
	    x: null,
	    y: null

	    // map of IE 10 pointer events
	  };var pointerMap = {
	    2: 'touch',
	    3: 'touch', // treat pen like touch
	    4: 'mouse'

	    // check support for passive event listeners
	  };var supportsPassive = false;

	  try {
	    var opts = Object.defineProperty({}, 'passive', {
	      get: function get() {
	        supportsPassive = true;
	      }
	    });

	    window.addEventListener('test', null, opts);
	  } catch (e) {}
	  // fail silently


	  /*
	   * set up
	   */

	  var setUp = function setUp() {
	    // add correct mouse wheel event mapping to `inputMap`
	    inputMap[detectWheel()] = 'mouse';

	    addListeners();
	  };

	  /*
	   * events
	   */

	  var addListeners = function addListeners() {
	    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
	    // can only demonstrate potential, but not actual, interaction
	    // and are treated separately
	    var options = supportsPassive ? { passive: true, capture: true } : true;

	    document.addEventListener('DOMContentLoaded', setPersist, true);

	    // pointer events (mouse, pen, touch)
	    if (window.PointerEvent) {
	      window.addEventListener('pointerdown', setInput, true);
	      window.addEventListener('pointermove', setIntent, true);
	    } else if (window.MSPointerEvent) {
	      window.addEventListener('MSPointerDown', setInput, true);
	      window.addEventListener('MSPointerMove', setIntent, true);
	    } else {
	      // mouse events
	      window.addEventListener('mousedown', setInput, true);
	      window.addEventListener('mousemove', setIntent, true);

	      // touch events
	      if ('ontouchstart' in window) {
	        window.addEventListener('touchstart', setInput, options);
	        window.addEventListener('touchend', setInput, true);
	      }
	    }

	    // mouse wheel
	    window.addEventListener(detectWheel(), setIntent, options);

	    // keyboard events
	    window.addEventListener('keydown', setInput, true);
	    window.addEventListener('keyup', setInput, true);

	    // focus events
	    window.addEventListener('focusin', setElement, true);
	    window.addEventListener('focusout', clearElement, true);
	  };

	  // checks if input persistence should happen and
	  // get saved state from session storage if true (defaults to `false`)
	  var setPersist = function setPersist() {
	    shouldPersist = !(docElem.getAttribute('data-whatpersist') === 'false' || document.body.getAttribute('data-whatpersist') === 'false');

	    if (shouldPersist) {
	      // check for session variables and use if available
	      try {
	        if (window.sessionStorage.getItem('what-input')) {
	          currentInput = window.sessionStorage.getItem('what-input');
	        }

	        if (window.sessionStorage.getItem('what-intent')) {
	          currentIntent = window.sessionStorage.getItem('what-intent');
	        }
	      } catch (e) {
	        // fail silently
	      }
	    }

	    // always run these so at least `initial` state is set
	    doUpdate('input');
	    doUpdate('intent');
	  };

	  // checks conditions before updating new input
	  var setInput = function setInput(event) {
	    var eventKey = event.which;
	    var value = inputMap[event.type];

	    if (value === 'pointer') {
	      value = pointerType(event);
	    }

	    var ignoreMatch = !specificMap.length && ignoreMap.indexOf(eventKey) === -1;

	    var specificMatch = specificMap.length && specificMap.indexOf(eventKey) !== -1;

	    var shouldUpdate = value === 'keyboard' && eventKey && (ignoreMatch || specificMatch) || value === 'mouse' || value === 'touch';

	    // prevent touch detection from being overridden by event execution order
	    if (validateTouch(value)) {
	      shouldUpdate = false;
	    }

	    if (shouldUpdate && currentInput !== value) {
	      currentInput = value;

	      persistInput('input', currentInput);
	      doUpdate('input');
	    }

	    if (shouldUpdate && currentIntent !== value) {
	      // preserve intent for keyboard interaction with form fields
	      var activeElem = document.activeElement;
	      var notFormInput = activeElem && activeElem.nodeName && (formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1 || activeElem.nodeName.toLowerCase() === 'button' && !checkClosest(activeElem, 'form'));

	      if (notFormInput) {
	        currentIntent = value;

	        persistInput('intent', currentIntent);
	        doUpdate('intent');
	      }
	    }
	  };

	  // updates the doc and `inputTypes` array with new input
	  var doUpdate = function doUpdate(which) {
	    docElem.setAttribute('data-what' + which, which === 'input' ? currentInput : currentIntent);

	    fireFunctions(which);
	  };

	  // updates input intent for `mousemove` and `pointermove`
	  var setIntent = function setIntent(event) {
	    var value = inputMap[event.type];

	    if (value === 'pointer') {
	      value = pointerType(event);
	    }

	    // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
	    detectScrolling(event);

	    // only execute if scrolling isn't happening
	    if ((!isScrolling && !validateTouch(value) || isScrolling && event.type === 'wheel' || event.type === 'mousewheel' || event.type === 'DOMMouseScroll') && currentIntent !== value) {
	      currentIntent = value;

	      persistInput('intent', currentIntent);
	      doUpdate('intent');
	    }
	  };

	  var setElement = function setElement(event) {
	    if (!event.target.nodeName) {
	      // If nodeName is undefined, clear the element
	      // This can happen if click inside an <svg> element.
	      clearElement();
	      return;
	    }

	    currentElement = event.target.nodeName.toLowerCase();
	    docElem.setAttribute('data-whatelement', currentElement);

	    if (event.target.classList && event.target.classList.length) {
	      docElem.setAttribute('data-whatclasses', event.target.classList.toString().replace(' ', ','));
	    }
	  };

	  var clearElement = function clearElement() {
	    currentElement = null;

	    docElem.removeAttribute('data-whatelement');
	    docElem.removeAttribute('data-whatclasses');
	  };

	  var persistInput = function persistInput(which, value) {
	    if (shouldPersist) {
	      try {
	        window.sessionStorage.setItem('what-' + which, value);
	      } catch (e) {
	        // fail silently
	      }
	    }
	  };

	  /*
	   * utilities
	   */

	  var pointerType = function pointerType(event) {
	    if (typeof event.pointerType === 'number') {
	      return pointerMap[event.pointerType];
	    } else {
	      // treat pen like touch
	      return event.pointerType === 'pen' ? 'touch' : event.pointerType;
	    }
	  };

	  // prevent touch detection from being overridden by event execution order
	  var validateTouch = function validateTouch(value) {
	    var timestamp = Date.now();

	    var touchIsValid = value === 'mouse' && currentInput === 'touch' && timestamp - currentTimestamp < 200;

	    currentTimestamp = timestamp;

	    return touchIsValid;
	  };

	  // detect version of mouse wheel event to use
	  // via https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
	  var detectWheel = function detectWheel() {
	    var wheelType = null;

	    // Modern browsers support "wheel"
	    if ('onwheel' in document.createElement('div')) {
	      wheelType = 'wheel';
	    } else {
	      // Webkit and IE support at least "mousewheel"
	      // or assume that remaining browsers are older Firefox
	      wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
	    }

	    return wheelType;
	  };

	  // runs callback functions
	  var fireFunctions = function fireFunctions(type) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].type === type) {
	        functionList[i].fn.call(undefined, type === 'input' ? currentInput : currentIntent);
	      }
	    }
	  };

	  // finds matching element in an object
	  var objPos = function objPos(match) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].fn === match) {
	        return i;
	      }
	    }
	  };

	  var detectScrolling = function detectScrolling(event) {
	    if (mousePos.x !== event.screenX || mousePos.y !== event.screenY) {
	      isScrolling = false;

	      mousePos.x = event.screenX;
	      mousePos.y = event.screenY;
	    } else {
	      isScrolling = true;
	    }
	  };

	  // manual version of `closest()`
	  var checkClosest = function checkClosest(elem, tag) {
	    var ElementPrototype = window.Element.prototype;

	    if (!ElementPrototype.matches) {
	      ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.webkitMatchesSelector;
	    }

	    if (!ElementPrototype.closest) {
	      do {
	        if (elem.matches(tag)) {
	          return elem;
	        }

	        elem = elem.parentElement || elem.parentNode;
	      } while (elem !== null && elem.nodeType === 1);

	      return null;
	    } else {
	      return elem.closest(tag);
	    }
	  };

	  /*
	   * init
	   */

	  // don't start script unless browser cuts the mustard
	  // (also passes if polyfills are used)
	  if ('addEventListener' in window && Array.prototype.indexOf) {
	    setUp();
	  }

	  /*
	   * api
	   */

	  return {
	    // returns string: the current input type
	    // opt: 'intent'|'input'
	    // 'input' (default): returns the same value as the `data-whatinput` attribute
	    // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
	    ask: function ask(opt) {
	      return opt === 'intent' ? currentIntent : currentInput;
	    },

	    // returns string: the currently focused element or null
	    element: function element() {
	      return currentElement;
	    },

	    // overwrites ignored keys with provided array
	    ignoreKeys: function ignoreKeys(arr) {
	      ignoreMap = arr;
	    },

	    // overwrites specific char keys to update on
	    specificKeys: function specificKeys(arr) {
	      specificMap = arr;
	    },

	    // attach functions to input and intent "events"
	    // funct: function to fire on change
	    // eventType: 'input'|'intent'
	    registerOnChange: function registerOnChange(fn, eventType) {
	      functionList.push({
	        fn: fn,
	        type: eventType || 'input'
	      });
	    },

	    unRegisterOnChange: function unRegisterOnChange(fn) {
	      var position = objPos(fn);

	      if (position || position === 0) {
	        functionList.splice(position, 1);
	      }
	    },

	    clearStorage: function clearStorage() {
	      window.sessionStorage.clear();
	    }
	  };
	}();

/***/ })
/******/ ])
});
;

/***/ }),

/***/ "./scripts/lib/form-validation.js":
/*!****************************************!*\
  !*** ./scripts/lib/form-validation.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//------------------------------------------------------------------------
// Basic form validation
//
// Usage Info:
// • Add “js-validate” to <form> or other wrapper
// • Add appropriate data-validate value to each input
//   - data-validate="email"
//   - data-validate="phone"
//   - data-validate="number"
//   - data-validate="zip"
//   - data-validate="notempty"
// • Add error message markup inside of <label>
//     <span class="is-hidden" data-validate="error" role="alert">Please enter a valid email address</span>
// • Add `data-validate="submit"` to submit button
//     <button type="submit" data-validate="submit">Submit</button>
//     To disable scrolling to the first error message, add the “data-no-jump” attribute
// • Required fields should use `aria-required="true"` when possible, but `required` and `data-validate-required` will also work
//  • For groups of checkboxes, wrap in <fieldset data-validate-required> and add appropriate `data-validate-group` value (see examples below)
//    - data-validate-group="min-1"
//    - data-validate-group="max-2"
//    - data-validate-group="notempty"
//  • For groups of radios, wrap in <fieldset role="radiogroup" aria-required="true"> and add appropriate `data-validate-group` value (see examples above)
//------------------------------------------------------------------------


var ValidateForm = function ValidateForm(el) {
  this.el = el;
  this.isAjaxSubmit = this.el.hasAttribute("data-form-ajax");

  // Add the “novalidate” attribute to form to disable default browser error messages if using “required” attribute
  // Note: `prop('novalidate', true)` doesn't work for some reason ¯\_(ツ)_/¯
  this.el.setAttribute("novalidate", "novalidate");

  // Find error messages
  this.errorMsgs = this.el.querySelectorAll("[data-validate='error']");

  // Submit button
  this.submitBtn = this.el.querySelector("[data-validate='submit']");

  if (!this.submitBtn) {
    console.warn("Form is missing “button[data-validate=\"submit\"]” element, skipping validation.", this.el);
    return false;
  }

  this.shouldScroll = this.submitBtn.hasAttribute("data-no-jump");
  this.submitText = this.submitBtn.textContent;

  // Elements that require validation, set to `aria-invalid='true'` on load
  this.validateEls = this.el.querySelectorAll("[data-validate]");
  // Convert NodeList to an array
  // Note: We can’t use the spread syntax because Buble doesn’t transpile correctly
  //     Buble demo: https://buble.surge.sh/#var%20foo%20%3D%20%5B...bar%5D%3B
  //     Babel demo: https://babeljs.io/repl/#?code_lz=G4QwTgBAZg9jEF4IG0B06BG4C6BuIA
  this.validateEls = [].slice.call(this.validateEls);

  // Exclude submit and error messages
  this.validateEls = [].concat( this.validateEls ).filter(
    function (el) { return el.getAttribute("data-validate") !== "submit" &&
      el.getAttribute("data-validate") !== "error"; }
  );

  // Cache the associated elements refences to render error messages
  // this.storeElementReferences(this.$validateEls);

  // Groups of checkboxes/radios that require validation
  this.groups = this.el.querySelectorAll("[data-validate-group]");
  // Convert NodeList to an array
  this.groups = [].slice.call(this.groups);

  this.currentGroup = false;

  // Store previously focused checkbox/radio group, validate when focus changes
  this.prevGroup = false;

  // Validating every possible email is a fool’s errand and not necessary.
  // Instead, just check for at least one “@” and “.”
  // https://davidcel.is/posts/stop-validating-email-addresses-with-regex/
  this.emailRegex = /^.+@.+\..+$/;

  // If more validation is desired, we can check for only one “@”
  // Based on https://github.com/plataformatec/devise/blob/593ae41f9dac165a404b05cd3abd959245c64908/lib/devise.rb#L109-L113
  // this.emailRegex =/^[^@\s]+@([^@\s]+\.)+[^@\s]+$/;

  // Numeric value test (allows single decimal)
  this.numericRegex = /^((\d+)|(\.\d+)|(\d+\.\d+))%?$/;

  // Phone number test (very loose, allows everything except line breaks)
  this.phoneRegex = /^.+$/;

  // Postal code RegEx, allows from 2–12 letters, numbers, spaces, or dashes
  this.zipRegex = /^[\w\d\- ]{2,12}$/;

  this.bindEvents();
};

ValidateForm.prototype.bindEvents = function bindEvents () {
    var this$1 = this;

  var self = this;

  // Validate on blur (i.e. when input loses focus)
  this.validateEls.forEach(function (el) { return el.addEventListener("blur", function (evt) { return this$1.validate(evt); }); }
  );

  // Selects, radios, and checkboxes require listening to the “change” event instead of “blur”
  // Validate on blur (i.e. when input loses focus)
  this.validateEls.forEach(function (el) { return el.addEventListener("change", function (evt) { return this$1.validate(evt); }); }
  );

  // Validate groups of selects, radios, or checkboxes
  var groupInputEls = document.querySelectorAll(
    "[data-validate-group] input"
  );

  groupInputEls.forEach(function (el) { return el.addEventListener("change", function (evt) { return this$1.validateGroup(evt); }); }
  );

  // Hide error messages while typing
  var validateTextInputs = this.validateEls.filter(
    function (el) { return el.tagName.toLowerCase() === "input" ||
      el.tagName.toLowerCase() === "textarea"; }
  );

  validateTextInputs.forEach(function (el) { return el.addEventListener("input", function (evt) { return this$1.hideErrorMsg(evt.target); }); }
  );

  // Don’t allow non-numerical characters in number inputs
  var validateNumberInputs = this.validateEls.filter(
    function (el) { return el.getAttribute("data-validate") === "number"; }
  );

  validateNumberInputs.forEach(function (el) { return el.addEventListener("keypress", function (evt) { return this$1.numberEvent(evt); }); }
  );

  // Validate form on submit
  this.el.addEventListener("submit", function (evt) { return this$1.submitHandler(evt); });

  // Using the back button in Firefox and Safari displays a cached page with the submit button still disabled, so we have to manually reenable it.
  // https://bugzilla.mozilla.org/show_bug.cgi?id=443289
  // http://stackoverflow.com/a/13123626/
  window.addEventListener("pageshow", function(evt) {
    if (evt.persisted) {
      self.resetSubmitButton();
    }
  });
};

ValidateForm.prototype.isEmail = function isEmail (str) {
  return this.emailRegex.test(str);
};

ValidateForm.prototype.isNumeric = function isNumeric (str) {
  return this.numericRegex.test(str);
};

ValidateForm.prototype.isPhone = function isPhone (str) {
  return this.phoneRegex.test(str);
};

ValidateForm.prototype.isZip = function isZip (str) {
  return this.zipRegex.test(str);
};

ValidateForm.prototype.isEmpty = function isEmpty (el) {
  // For checkboxes and radio buttons, use the “chacked” attribute
  if (
    el.getAttribute("type") === "checkbox" ||
    el.getAttribute("type") === "radio"
  ) {
    return !el.checked;
  } else {
    // For all other elements, use the value
    return !el.value;
  }
};

// We can’t apply the “required” attribute or “aria-required="true"” on checkbox inputs, or groups of them, so we have to use thecustom “data-validate-required” attribute
// https://github.com/GoogleChrome/accessibility-developer-tools/issues/283
ValidateForm.prototype.isRequired = function isRequired (el) {
  return (
    el.getAttribute("aria-required") === "true" ||
    el.required ||
    el.hasAttribute("data-validate-required")
  );
};

ValidateForm.prototype.numberEvent = function numberEvent (evt) {
  // Get typed character
  var key = String.fromCharCode(evt.which);
  var allowedChars = /[,.0-9%]/;

  // Don't allow non-number characters to be entered
  if (!allowedChars.test(key)) {
    evt.preventDefault();
  }
};

// Get label element whose “for” attribute matches current element’s “id” attribute
ValidateForm.prototype.getErrorMsgParent = function getErrorMsgParent (el) {
  // If element has an ID, look for an associated label
  if (el.hasAttribute("id")) {
    return this.el.querySelector(("[for=\"" + (el.getAttribute("id")) + "\"]"));
  } else {
    // Groups don’t have IDs and associated labels, so get error message parent
    var errorMsg = el.querySelector("[data-validate='error']");
    return errorMsg.length ? errorMsg.parentNode : false;
  }
};

// Get error message element associated with form element
ValidateForm.prototype.getErrorMsg = function getErrorMsg (el) {
  return this.getErrorMsgParent(el).querySelector("[data-validate='error']");
};

// Show an element’s error message and update its “aria-invalid” state
ValidateForm.prototype.showErrorMsg = function showErrorMsg (el) {
  var errorMsg = this.getErrorMsg(el);
  errorMsg.classList.remove("is-hidden");
  el.classList.add("is-invalid");
  el.setAttribute("aria-invalid", true);
};

// Hide an element’s error message and update its “aria-invalid” state
ValidateForm.prototype.hideErrorMsg = function hideErrorMsg (el) {
  var errorMsg = this.getErrorMsg(el);
  errorMsg.classList.add("is-hidden");
  el.classList.remove("is-invalid");
  el.setAttribute("aria-invalid", false);
};

// Show group error
ValidateForm.prototype.showGroupErrorMsg = function showGroupErrorMsg (el) {
  el.setAttribute("aria-invalid", true);

  var errorMsg = el.querySelector("[data-validate='error']");

  if (errorMsg) {
    errorMsg.classList.remove("is-hidden");
  }
};

// Clear group error
ValidateForm.prototype.hideGroupErrorMsg = function hideGroupErrorMsg (el) {
  el.setAttribute("aria-invalid", false);

  var errorMsg = el.querySelector("[data-validate='error']");
  if (errorMsg.length) {
    errorMsg.classList.add("is-hidden");
  }
};

// Toggle error message
ValidateForm.prototype.toggleErrorMsg = function toggleErrorMsg (isValid, el) {
  if (isValid) {
    this.hideErrorMsg(el);
  } else {
    this.showErrorMsg(el);
  }
};

ValidateForm.prototype.getInvalidFields = function getInvalidFields () {
  // Find all validated elements
  var invalidEls = ( this.validateEls ).concat( this.groups);
  // Filter only invalid ones
  invalidEls = [].concat( invalidEls ).filter(
    function (el) { return el.getAttribute("aria-invalid") === "true"; }
  );

  return invalidEls;
};

// Test if element is valid and toggle error msg
ValidateForm.prototype.validateEl = function validateEl (el) {
  var type = el.getAttribute("data-validate");
  var val = el.value;

  switch (type) {
    // Emails
    case "email":
      this.toggleErrorMsg(this.isEmail(val), el);
      break;

    // Numbers (allows single decimal and/or % sign)
    case "number":
      val = val.replace(/,/g, ""); // strip commas
      el.value = val;
      this.toggleErrorMsg(this.isNumeric(val), el);
      break;

    // Phone number (allows everything except line breaks)
    case "phone":
      this.toggleErrorMsg(this.isPhone(val), el);
      break;

    // ZIP code (from 2–12 letters, numbers, dashes, or spaces)
    case "zip":
      this.toggleErrorMsg(this.isZip(val), el);
      break;

    // Not empty
    case "notempty":
      this.toggleErrorMsg(!this.isEmpty(el), el);
      break;
  }
};

// Event handler to validate elements on blur or change
ValidateForm.prototype.validate = function validate (evt) {
  var targetEl = evt.target;

  // Exclude blank optional fields
  if (this.isRequired(targetEl) || !this.isEmpty(targetEl)) {
    this.validateEl(targetEl);
  }

  // Reset current group (the elements that trigger this function aren’t part of a group)
  this.currentGroup = false;
};

// Validate all single elements
ValidateForm.prototype.validateAll = function validateAll () {
  var self = this;

  this.validateEls.forEach(function(el) {
    // Exclude optional fields that are blank
    if (self.isRequired(el) || !self.isEmpty(el)) {
      self.validateEl(el);
    }
  });
};

// Validate group when focus leaves (can’t detect blur on fieldsets)
ValidateForm.prototype.validateGroupEl = function validateGroupEl (el) {
  var condition = el.getAttribute("data-validate-group");
  var isExact = !isNaN(condition); // true if string can be converted to a number
  var checkedEls = el.querySelectorAll("input:checked");

  // Matches exact number of checked elements
  if (isExact && parseInt(condition, 10) === checkedEls.length) {
    this.hideGroupErrorMsg(el);
    return false;
  }

  // Has at least one checked element
  if (condition === "notempty" && checkedEls.length > 0) {
    this.hideGroupErrorMsg(el);
    return false;
  }

  // Min/max conditions
  var isMinMax =
    condition.indexOf("min-") === 0 || condition.indexOf("max-") === 0;

  if (isMinMax) {
    var conditionArr = condition.split("-");
    var type = conditionArr[0];
    var value = parseInt(conditionArr[1], 10);

    if (type === "min" && checkedEls.length >= value) {
      this.hideGroupErrorMsg(el);
      return false;
    } else if (type === "max" && checkedEls.length <= value) {
      this.hideGroupErrorMsg(el);
      return false;
    }
  }

  // Show error
  this.showGroupErrorMsg(el);
};

// Event handler to validate group on change
ValidateForm.prototype.validateGroup = function validateGroup (evt) {
  var targetEl = evt.target;
  var currentGroup = targetEl.closest("[data-validate-group]");

  // Clear error on current group
  this.hideGroupErrorMsg(currentGroup);

  // If no previous group, set it to current group
  if (!this.prevGroup) {
    this.prevGroup = currentGroup;
  } else if (!!this.prevGroup && !currentGroup.isEqualNode(this.prevGroup)) {
    // If group has changed, validate the previous group
    this.validateGroupEl(this.prevGroup);

    // Update previous group
    this.prevGroup = currentGroup;
  }
};

// Validate all groups
ValidateForm.prototype.validateAllGroups = function validateAllGroups () {
  var self = this;

  this.groups.forEach(function(el) {
    // Validate required groups and those with selected items
    // (non-required groups without any selected items will be ignored)
    if (self.isRequired(el) || el.checked) {
      self.validateGroupEl(el);
    }
  });
};

// Submit form data via XMLHttpRequest()
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript
ValidateForm.prototype.sendData = function sendData () {
  var self = this;

  var XHR = new XMLHttpRequest();
  // Use FormData interface (IE 10+)
  // https://developer.mozilla.org/en-US/docs/Web/API/FormData
  var FD = new FormData(this.el);

  // console.log([...FD]);

  // Define what happens on successful data submission
  XHR.addEventListener("load", function() {
    var successShow = self.el.getAttribute("data-success-show");
    var successHide = self.el.getAttribute("data-success-hide");

    // Hide elements on success
    if (successHide) {
      document
        .querySelectorAll(successHide)
        .forEach(function (el) { return (el.style.display = "none"); });
    }

    // Show elements on success
    if (successShow) {
      document
        .querySelectorAll(successShow)
        .forEach(function (el) { return (el.style.display = "block"); });
    }

    // TODO: Make form reset optional

    // Reset form fields
    var inputEls = self.el.querySelectorAll("input");
    var textareas = self.el.querySelectorAll("textarea");

    var allInputs = inputEls.concat( textareas).filter(
      function (el) { return el.getAttribute("type") !== "hidden" ||
        el.getAttribute("type") !== "submit"; }
    );

    // Reset form fields
    allInputs.forEach(function(el) {
      el.value = "";
      el.checked = false;
    });

    self.resetSubmitButton();
  });

  // Define what happens in case of error
  XHR.addEventListener("error", function() {
    var errorShow = self.el.getAttribute("data-error-show");

    // Show elements on success
    if (errorShow) {
      document
        .querySelectorAll(errorShow)
        .forEach(function (el) { return (el.style.display = "block"); });
    }

    self.resetSubmitButton();

    console.error(
      "Unable to post form data to " + self.el.getAttribute("action")
    );
  });

  // Set up our request
  XHR.open("POST", this.el.getAttribute("action"));

  // Send our FormData object; HTTP headers are set automatically
  XHR.send(FD);
};

ValidateForm.prototype.resetSubmitButton = function resetSubmitButton () {
  this.submitBtn.disabled = false;
  this.submitBtn.setAttribute("aria-busy", "false");
};

// Don't allow submit if validation errors are present
ValidateForm.prototype.submitHandler = function submitHandler (evt) {
  // Validate all single elements
  this.validateAll();

  // Validate all groups
  this.validateAllGroups();

  // Check for invalid fields
  var invalidEls = this.getInvalidFields();

  // If form is invalid, scroll to first error message
  if (invalidEls.length) {
    // Prevent form submission
    evt.preventDefault();

    // Focus input
    invalidEls[0].focus();

    // Find associated label and scroll into view
    var label = document.querySelector(("[for=\"" + (invalidEls[0].id) + "\"]"));

    if (label) {
      label.scrollIntoView();
    } else {
      // If can’t find label, scroll to input
      invalidEls[0].scrollIntoView();
    }
  } else {
    // Disable submit button to prevent multiple submissions
    this.submitBtn.disabled = true;
    this.submitBtn.setAttribute("aria-busy", "true");

    // Check if form should submit via AJAX
    if (this.isAjaxSubmit) {
      evt.preventDefault();
      this.sendData();
    }

    // Optional: Trigger “form-valid” event for other modules
    // Backbone.trigger('form-valid', $(evt.target));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ValidateForm);


/***/ }),

/***/ "./scripts/lib/tooltips.js":
/*!*********************************!*\
  !*** ./scripts/lib/tooltips.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "../../node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
//------------------------------------------------------------------------
// Tooltips
//
// Based on https://inclusive-components.design/tooltips-toggletips/
//------------------------------------------------------------------------



/**
 * Wrap the last X words in an HTML tag to prevent them from wrapping (i.e. orphans)
 * @param {HTMLElement} el - Tooltip DOM node
 * @param {Object} opts - Options
 * @param {string} [opts.classes=""] - Class(es) to apply to tooltip
 * @param {number} [opts.gutter=0] - Gutter space around main content well
 */
var Tooltip = function Tooltip(el, opts) {
  this.el = el;
  this.tooltipContent = this.el.getAttribute("title");

  if ( !this.tooltipContent ) {
    console.warn(("“" + (this.el.textContent.trim()) + "” tooltip has no “title” content"));
    return false;
  }

  // Use Object.assign() to merge “opts” object with default values in this.options
  this.options = Object.assign(
    {},
    {
      classes: "", // string, accepts multiple space-separated classes
      gutter: 0,// gutter space around main content well
      prepend: "",// HTML to prepend to tooltip
      append: ""// HTML to append to tooltip
    },
    opts
  );

  // Build tooltip, add attributes
  this.setup();

  // Event listeners
  this.events();

  // Determine tooltip position on load
  this.updatePosition();
};

Tooltip.prototype.setup = function setup () {
  this.isOpen = false;
  // Generate unique ID for each tooltip
  // https://gist.github.com/gordonbrander/2230317
  this.uniqueID = Math.random().toString(36).substr(2, 4);
  this.parentEl = this.el.parentNode;
  // this.mediaQueryList = window.matchMedia(`(min-width: ${this.options.breakpoint})`);

  // Add ARIA attributes
  this.el.setAttribute("aria-describedby", "tooltip-" + this.uniqueID);
  this.el.setAttribute("aria-expanded", "false");
  this.el.setAttribute("role", "button");
  this.el.classList.add("js-init");

  // Remove “title” attribute
  this.el.removeAttribute("title");

  // Build tooltip
  this.tooltipEl = document.createElement('span');
  this.tooltipEl.setAttribute("aria-hidden", "true");
  this.tooltipEl.setAttribute("data-tooltip-menu","");// for styling purposes
  this.tooltipEl.setAttribute("id", ("tooltip-" + (this.uniqueID)));
  this.tooltipEl.setAttribute("role", "tooltip");

  if (this.options.classes) {
    this.tooltipEl.setAttribute("class", this.options.classes);
  }

  this.tooltipEl.innerHTML = this.options.prepend + this.tooltipContent + this.options.append;

  // We could could also do this, but I thinks it’s a little harder to read:
  // https://davidwalsh.name/convert-html-stings-dom-nodes
  // this.tooltipEl = new DOMParser().parseFromString(`
  // <span id="tooltip-${this.uniqueID}" class="${this.options.classes}" aria-hidden="true" aria-expanded="false" role="alert"
  //   ${this.tooltipContent}
  // </span>
  // `, 'text/html').body.firstChild;

  this.el.appendChild(this.tooltipEl);
};

Tooltip.prototype.events = function events () {
  var self = this;

  // Toggle on click
  this.el.addEventListener("click", function(evt) {
    // Prevent default on clicks inside of tooltip menu
    if (self.tooltipEl.isSameNode(evt.target)) {
      evt.preventDefault();
    } else {
      self.toggle(evt);
    }
  });

  // Close tooltip if click off of it
  window.addEventListener("click", function(evt) {
    if (self.isOpen && !self.el.contains(evt.target)) {
      self.hideTooltip();
    }
  });

  // Update tooltip position once web fonts have loaded
  document.documentElement.addEventListener("fonts-loaded", function() {
    self.updatePosition();
  });

  // Hide on resize, recalc position
  window.addEventListener(
    "resize",
    lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function() {
      if ( self.isOpen ) {
        self.hideTooltip();
      }

      self.updatePosition();
    }, 150)
  );
};

Tooltip.prototype.updatePosition = function updatePosition () {
  // Reset alignment classes/attributes, centers tooltip over toggle
  this.el.classList.remove("is-fullwidth");
  this.tooltipEl.setAttribute("data-align", "");

  // if ( !this.mediaQueryList.matches ) {
  // return false;
  // }

  var bodyWidth = window.innerWidth - (this.options.gutter * 2);
  var bodyRightCutoff = window.innerWidth - this.options.gutter;

  var toggleBoundingRect = this.el.getBoundingClientRect();
  var toggleRightOffset = toggleBoundingRect.right;

  var tooltipBoundingRect = this.tooltipEl.getBoundingClientRect();
  var tooltipLeftOffset = tooltipBoundingRect.left;
  var tooltipRightOffset = tooltipBoundingRect.right;
  var tooltipWidth = tooltipBoundingRect.width;

  var cutoffRight = tooltipRightOffset > bodyRightCutoff;
  var cutoffLeft = tooltipLeftOffset < this.options.gutter;

  // If tooltip fits, do nothing to keep it centered
  if (!cutoffLeft && !cutoffRight) {
    return false;
  }

  // If right side is cutoff…
  if (tooltipRightOffset > bodyRightCutoff) {
    // …check if left side would fit before right aligning
    if (tooltipWidth <= toggleRightOffset - this.options.gutter) {
      this.tooltipEl.setAttribute("data-align", "right");
      return false;
    }
  }

  // If left side is cutoff…
  if (tooltipLeftOffset < this.options.gutter) {
    // …check if right side would fit before left aligning
    if (bodyWidth - tooltipLeftOffset <= tooltipWidth) {
      this.tooltipEl.setAttribute("data-align", "left");
      return false;
    }
  }

  // Tooltip can’t be aligned to toggle so make it full width
  this.el.classList.add("is-fullwidth");
  this.tooltipEl.setAttribute("data-align", "full");
};

Tooltip.prototype.showTooltip = function showTooltip () {
  this.isOpen = true;
  this.el.setAttribute("aria-expanded", "true");
  this.tooltipEl.setAttribute("aria-hidden", "false");
};

Tooltip.prototype.hideTooltip = function hideTooltip () {
  this.isOpen = false;
  this.el.setAttribute("aria-expanded", "false");
  this.tooltipEl.setAttribute("aria-hidden", "true");
};

// Toggle expandable
Tooltip.prototype.toggle = function toggle (evt) {
  evt.preventDefault();

  if (this.isOpen) {
    this.hideTooltip();
  }
  else {
    this.showTooltip();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);


/***/ }),

/***/ "./scripts/modules/autosubmit-form.js":
/*!********************************************!*\
  !*** ./scripts/modules/autosubmit-form.js ***!
  \********************************************/
/***/ (function() {

"use strict";
//------------------------------------------------------------------------
// Autosubmit form when field is changed with a mouse (requires “what-input”)
//------------------------------------------------------------------------


document.querySelectorAll('form [data-autosubmit]').forEach(function (el) {
  el.addEventListener("change", function () {
    // Don’t autosubmit for non-mouse users
    if (window.document.documentElement.getAttribute("data-whatinput") === "mouse") {
      var formEl = el.closest("form");
      if (formEl) {
        formEl.submit();
      }
    }
  });
});


/***/ }),

/***/ "./scripts/modules/background-picture.js":
/*!***********************************************!*\
  !*** ./scripts/modules/background-picture.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _threespot_object_fit_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @threespot/object-fit-image */ "../../node_modules/@threespot/object-fit-image/dist/object-fit-image.m.js");
/* harmony import */ var _threespot_object_fit_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_threespot_object_fit_image__WEBPACK_IMPORTED_MODULE_0__);




var imageWrappers = document.querySelectorAll(".bg-image");

imageWrappers.forEach(function (el) { return new (_threespot_object_fit_image__WEBPACK_IMPORTED_MODULE_0___default())(el, {
  visuallyHiddenClass: "u-screenreader"
}); });


/***/ }),

/***/ "./scripts/modules/donation-promo.js":
/*!*******************************************!*\
  !*** ./scripts/modules/donation-promo.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//------------------------------------------------------------------------
// Donation promo
//------------------------------------------------------------------------


var DonatePromo = function DonatePromo(el) {
  var this$1 = this;

  this.el = el;
  this.form = this.el.querySelector(".DonatePromo-form");
  this.closeButton = this.el.querySelector(".DonatePromo-close");
  this.titleEl = this.el.querySelector(".DonatePromo-title");
  this.radios = this.el.querySelectorAll(".DonatePromo-amount-input");
  this.otherAmountInput = this.el.querySelector(".DonatePromo-other-input");
  this.otherAmountName = this.otherAmountInput.getAttribute("data-name");

  // Listen for clicks on close button
  this.closeButton.addEventListener("click", function () {
    this$1.close();
  });

  // Listen for form submit
  this.form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    // Set localStorage value so promo won’t be shown again
    this$1.setLocalStorage();
    this$1.form.submit();
  });

  // Clear custom amount field when radios are selected
  this.radios.forEach(function (el) {
    el.addEventListener("change", function () {
      this$1.otherAmountInput.value = "";
    });

    // Clear other amount field “name” attribute to avoid
    // issues when submitting to Engaging Networks.
    this$1.otherAmountInput.name = "";
  });

  // Reset radios when custom amount is input
  this.otherAmountInput.addEventListener("keydown", function () {
    this$1.radios.forEach(function (el) {
      el.checked = false;
    });

    // Set “name” attribute based on “data-name” attribute so
    // it will work with Engaging Network’s invalid form makrup.
    if (this$1.otherAmountName) {
      this$1.otherAmountInput.name = this$1.otherAmountName;
    }
  });
};

DonatePromo.prototype.setLocalStorage = function setLocalStorage () {
  // Save promo info in localStorage, including date so we can allow it to expire
  // https://stackoverflow.com/a/4275854/673457
  var data = {
    title: this.titleEl.textContent.trim(),
    date: new Date().getTime()
  };

  localStorage.setItem("promo", JSON.stringify(data));
};

DonatePromo.prototype.close = function close () {
  this.setLocalStorage();

  // Hide promo (class must match donation_promo.blade.php and _donation-promo.scss)
  document.documentElement.classList.remove("show-promo");
};

/* harmony default export */ __webpack_exports__["default"] = (DonatePromo);

// Disable Promo if we have a has value
if (window.location.hash) {
  document.documentElement.classList.remove("show-promo");
}

// Only init on homepage if not already hidden
if (document.body.classList.contains('home') && !document.body.classList.contains('hide-donation-promo') && !window.location.hash) {
  var el = document.querySelector(".DonatePromo");

  if (el) {
    new DonatePromo(el);
  }
}


/***/ }),

/***/ "./scripts/modules/expand-toggle.js":
/*!******************************************!*\
  !*** ./scripts/modules/expand-toggle.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @threespot/expand-toggle */ "../../node_modules/@threespot/expand-toggle/dist/expand-toggle.m.js");
/* harmony import */ var _threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0__);
//  Init “expand” links on Issue pages


document.querySelectorAll('[data-expands="body-more"]').forEach(function (el) { return new (_threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0___default())(el); });


/***/ }),

/***/ "./scripts/modules/external-links.js":
/*!*******************************************!*\
  !*** ./scripts/modules/external-links.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _threespot_unorphanize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @threespot/unorphanize */ "../../node_modules/@threespot/unorphanize/dist/unorphanize.m.js");
/* harmony import */ var _threespot_unorphanize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_threespot_unorphanize__WEBPACK_IMPORTED_MODULE_0__);
//------------------------------------------------------------------------
// Automatically add an icon to external links
//------------------------------------------------------------------------
// Import the ES5 code since Webpack isn’t setup to transpile external resources


var externalIcon = '<svg class="external-icon" viewBox="0 0 576 512" preserveAspectRatio="xMidYMid meet" height="14" width="16"><path d="M448 279v185c0 27-21 48-48 48H48c-27 0-48-21-48-48V112c0-27 21-48 48-48h248a24 24 0 0 1 17 7l16 16c15 15 4 41-17 41H64v320h320V295c0-6 3-12 7-17l16-16c15-15 41-4 41 17zM576 37c0-20-17-37-37-37H380c-15 0-28 13-28 28v18c0 16 13 28 29 28l67-2-249 247c-9 9-9 25 0 34l24 24c9 9 25 9 34 0l247-249-2 67c0 16 12 29 28 29h18c15 0 28-13 28-28V37z"/></svg>';

// Find all non-relative links
var links = document.querySelectorAll('.u-richtext a[href^="http"]');

// Convert NodeList to an array
// Note: We can’t use the spread syntax because Buble doesn’t transpile correctly
//       Buble demo: https://buble.surge.sh/#var%20foo%20%3D%20%5B...bar%5D%3B
//       Babel demo: https://babeljs.io/repl/#?code_lz=G4QwTgBAZg9jEF4IG0B06BG4C6BuIA
links = [].slice.call(links);

if (links.length) {
  // Filter out buttons and links inside of divs (i.e. shortcodes)
  links = links.filter( function(el) {
    var isInsideDiv = el.parentNode.tagName.toLowerCase() === "div" || false;
    var isButton = el.classList.contains("btn");
    var isImage = el.querySelector('img');

    if (isImage) {
      el.classList.add('external-image');
    }
    return !isInsideDiv && !isButton  && !isImage;
  });
}

// Add external link class and icon
links.forEach(function(el) {
  // Create a dummy anchor element to easily get the hostname of the href attribute
  // https://gist.github.com/jlong/2428561
  var a = document.createElement("a");
  a.href = el.href;

  // Compare the link hostname to the window hostname
  if (a.hostname !== window.location.hostname) {
    new (_threespot_unorphanize__WEBPACK_IMPORTED_MODULE_0___default())(el, {
      inlineStyles: false,
      className: "u-nowrap is-external",
      append: externalIcon,
    });
  }
});


/***/ }),

/***/ "./scripts/modules/filter-toggle.js":
/*!******************************************!*\
  !*** ./scripts/modules/filter-toggle.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @threespot/expand-toggle */ "../../node_modules/@threespot/expand-toggle/dist/expand-toggle.m.js");
/* harmony import */ var _threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0__);
//------------------------------------------------------------------------
// Filter toggle button in mobile view
//------------------------------------------------------------------------




var FilterToggle = function FilterToggle(el) {
  var this$1 = this;

  // NOTE: Breakpoint must match $row-bp in _filters.scss
  this.mediaQueryList = window.matchMedia("(max-width: 899px)");// subtract 1px for max-width media queries
  this.el = el;
  this.contentEl = document.getElementById(this.el.getAttribute("data-expands"));

  // Listen for breakpoint change
  this.mediaQueryList.addListener(function (evt) {
    if (evt.matches) {
      this$1.init();
    } else {
      this$1.destroy();
    }
  });

  // Init on load
  if (this.mediaQueryList.matches) {
    this.init();
  }

  // Init any submenus (e.g. article types)
  if (this.contentEl) {
    this.initSubmenus();
  }
};

FilterToggle.prototype.init = function init () {
  this.toggleExpand = new (_threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0___default())(this.el);
};

FilterToggle.prototype.destroy = function destroy () {
  this.toggleExpand.destroy();
};

// Init any submenus (e.g. article types)
FilterToggle.prototype.initSubmenus = function initSubmenus () {
    var this$1 = this;

  this.contentEl.querySelectorAll("[data-expands]").forEach(function (el) {
    var toggle = new (_threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0___default())(el);

    // Update parent wrapper height when expanded
    toggle.on("expand", function () {
      // Parent toggle is only created in mobile view, so check for it first
      if (this$1.toggleExpand) {
        this$1.toggleExpand.updateExpandedHeight();
      }
    });

    // Close with escape key
    window.addEventListener("keydown", function (evt) {
      if (evt.which === 27) {
        toggle.collapse();
      }
    });

    // Close nav if click off of it
    window.addEventListener("click", function (evt) {
      if (!evt.target.closest(".Filters-item")) {
        toggle.collapse();
      }
    });
  });
};

// Init
var el = document.querySelector('.Filters-toggle[data-expands]');

if (el) {
  new FilterToggle(el);
}


/***/ }),

/***/ "./scripts/modules/fluid-iframes.js":
/*!******************************************!*\
  !*** ./scripts/modules/fluid-iframes.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _threespot_fluid_iframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @threespot/fluid-iframe */ "../../node_modules/@threespot/fluid-iframe/dist/fluid-iframe.m.js");
/* harmony import */ var _threespot_fluid_iframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_threespot_fluid_iframe__WEBPACK_IMPORTED_MODULE_0__);
//------------------------------------------------------------------------
// Make iframes responsive, preserving their aspect ratio (like FitVid.js)
//------------------------------------------------------------------------




var iframes = document.querySelectorAll(".u-richtext > iframe");

iframes.forEach(function (el) { return new (_threespot_fluid_iframe__WEBPACK_IMPORTED_MODULE_0___default())(el); });


/***/ }),

/***/ "./scripts/modules/font-face.js":
/*!**************************************!*\
  !*** ./scripts/modules/font-face.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mdn_polyfills_CustomEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdn-polyfills/CustomEvent */ "../../node_modules/mdn-polyfills/CustomEvent.js");
/* harmony import */ var mdn_polyfills_CustomEvent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_CustomEvent__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fontfaceobserver_fontfaceobserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fontfaceobserver/fontfaceobserver */ "../../node_modules/fontfaceobserver/fontfaceobserver.js");
/* harmony import */ var fontfaceobserver_fontfaceobserver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fontfaceobserver_fontfaceobserver__WEBPACK_IMPORTED_MODULE_1__);
//------------------------------------------------------------------------
// Setup Font Face Observer to check when fonts have loaded
// https://fontfaceobserver.com
// https://www.filamentgroup.com/lab/font-events.html
// https://jonsuh.com/blog/font-loading-with-font-events/
// Note: Now that `font-display` is supported in some browsers, check for support first.
//       Once all modern browsers support it, consider loading fontfaceobserver asynchronously,
//       and possibly adding the Promise polyfill via Bable instead of bundling it in fontfaceobserver.
// http://caniuse.com/#feat=css-font-rendering-controls
// https://css-tricks.com/font-display-masses/#article-header-id-3
//------------------------------------------------------------------------

// CustomEvent polyfill (IE 11- and aOS 4.3-)
// https://caniuse.com/#search=CustomEvent


// Font face observer script allows us to detect when web fonts have been downloaded
// NOTE: The main file in “fontfaceobserver” doesn’t include the Promise polyfill so we’re linking to the one that does


// Only run if fonts have not been previously loaded
if ('sessionStorage' in window && !sessionStorage.fontsLoaded) {
  var htmlEl = document.documentElement;

  // Create new instance of FontFaceObserver for each font file
  var untitledSerif = new (fontfaceobserver_fontfaceobserver__WEBPACK_IMPORTED_MODULE_1___default())('Untitled Serif', { weight: 400 });
  var untitledSerifItalic = new (fontfaceobserver_fontfaceobserver__WEBPACK_IMPORTED_MODULE_1___default())('Untitled Serif', {
    weight: 400,
    style: 'italic'
  });

  var untitledSerifBold = new (fontfaceobserver_fontfaceobserver__WEBPACK_IMPORTED_MODULE_1___default())('Untitled Serif', { weight: 700 });
  var untitledSerifBoldItalic = new (fontfaceobserver_fontfaceobserver__WEBPACK_IMPORTED_MODULE_1___default())('Untitled Serif', {
    weight: 700,
    style: 'italic'
  });

  // Promise polyfill provided by fontfaceobserver.js
  Promise.all([
    untitledSerif.load(),
    untitledSerifItalic.load(),
    untitledSerifBold.load(),
    untitledSerifBoldItalic.load()
  ])
    .then(function() {
      // Add class
      htmlEl.className += ' fonts-loaded';

      // Set session var
      sessionStorage.fontsLoaded = true;

      // Emit font-loaded event (used by expandable module to trigger height recalc)
      var triggerEvent = function() {
        var fontEvent = new CustomEvent('fonts-loaded');
        htmlEl.dispatchEvent(fontEvent);
      };

      // Use setTimeout to allow browser to paint first
      window.setTimeout(triggerEvent, 0);
    })
    .catch(function() {
      console.warn('Could not resolve Promise that webfonts loaded');
    });
}


/***/ }),

/***/ "./scripts/modules/form-validation.js":
/*!********************************************!*\
  !*** ./scripts/modules/form-validation.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_form_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/form-validation */ "./scripts/lib/form-validation.js");
//------------------------------------------------------------------------
// Basic form validation
//
// Usage Info:
// • Add “js-validate” to <form> or other wrapper
// • Add appropriate data-validate value to each input
//   - data-validate="email"
//   - data-validate="phone"
//   - data-validate="number"
//   - data-validate="zip"
//   - data-validate="notempty"
// • Add error message markup inside of <label>
//     <span class="is-hidden" data-validate="error" role="alert">Please enter a valid email address</span>
// • Add `data-validate="submit"` to submit button
//     <button type="submit" data-validate="submit">Submit</button>
//     To disable scrolling to the first error message, add the “data-no-jump” attribute
// • Required fields should use `aria-required="true"` when possible, but `required` and `data-validate-required` will also work
//  • For groups of checkboxes, wrap in <fieldset data-validate-required> and add appropriate `data-validate-group` value (see examples below)
//    - data-validate-group="min-1"
//    - data-validate-group="max-2"
//    - data-validate-group="notempty"
//  • For groups of radios, wrap in <fieldset role="radiogroup" aria-required="true"> and add appropriate `data-validate-group` value (see examples above)
//------------------------------------------------------------------------




document.querySelectorAll("form[data-validate]").forEach(function (el) { return new _lib_form_validation__WEBPACK_IMPORTED_MODULE_0__["default"](el); });


/***/ }),

/***/ "./scripts/modules/link-icons.js":
/*!***************************************!*\
  !*** ./scripts/modules/link-icons.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _threespot_unorphanize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @threespot/unorphanize */ "../../node_modules/@threespot/unorphanize/dist/unorphanize.m.js");
/* harmony import */ var _threespot_unorphanize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_threespot_unorphanize__WEBPACK_IMPORTED_MODULE_0__);
//------------------------------------------------------------------------
// Append icons to links and prevent them from wrapping
//
// Note: “height” and “width” attributes will be used as the default size
//        but can be overridden using “data-icon-width”/“data-icon-height”
//------------------------------------------------------------------------


// Use simple rounding function since we only need one decimal place.
// This apprach has issues when rounding to more decimal places:
// e.g. Math.round(1.005 * 100) / 100; // 1 instead of 1.01
// http://www.jacklmoore.com/notes/rounding-in-javascript/
var roundSingleDecimal = function(number) {
  return Math.round(number * 10) / 10;
};

// When more decimal places are desired, see this MDN page for a better function:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round#A_better_solution
//
// function round(number, precision) {
//   var shift = function (number, exponent) {
//     var numArray = ("" + number).split("e");
//     return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
//   };
//   return shift(Math.round(shift(number, +exponent)), -exponent);
// }

var icons = {
  arrow: {
    class: "icon icon-arrow",
    viewBox: "0 0 118 91",
    width: 17,
    // height: 13, // optionally set the default height
    path: "<path d=\"M72.7 0l42 42 3.4 3.5-3.4 3.5-42 42-7.1-7.1L99 50.4H0v-9.9h99L65.6 7.1 72.7 0z\"/>"
    // customAttrs: '' // optional additional attrs (e.g. fill="none" stroke="#fff" stroke-width="1")
  },
  chevDown: {
    class: "icon icon-chevDown",
    viewBox: "0 0 423 234",
    width: 18,
    path: "<path d=\"M23 0l188.5 188.5L400 0l23 23-200 200-11.5 11-11.5-11L0 23 23 0z\"/>"
  },
  download: {
    class: "icon icon-download",
    viewBox: "0 0 576 768",
    width: 12,
    path: "<path d=\"M256 0h64v530l169-169 46 46-224 224-23 22-23-22L41 407l46-46 169 169V0zM0 704h576v64H0v-64z\"/>"
  },
  external: {
    class: "icon icon-external",
    viewBox: "0 0 576 512",
    width: 16,
    path: "<path d=\"M448 279v185c0 27-21 48-48 48H48c-27 0-48-21-48-48V112c0-27 21-48 48-48h248a24 24 0 0 1 17 7l16 16c15 15 4 41-17 41H64v320h320V295c0-6 3-12 7-17l16-16c15-15 41-4 41 17zM576 37c0-20-17-37-37-37H380c-15 0-28 13-28 28v18c0 16 13 28 29 28l67-2-249 247c-9 9-9 25 0 34l24 24c9 9 25 9 34 0l247-249-2 67c0 16 12 29 28 29h18c15 0 28-13 28-28V37z\"/>"
  },
  triangle: {
    class: "icon icon-triangle",
    viewBox: "0 0 365 730",
    width: 6,
    path: "<path d=\"M0 0l55 54 288 288 22 23-22 23L55 676 0 730V0zm64 155v420l210-210L64 155z\"/>"
  }
};

var buildSVG = function(icon) {
  return ("\n    <svg class=\"" + (icon.class) + "\" viewBox=\"" + (icon.viewBox) + "\" width=\"" + (icon.width) + "\" height=\"" + (icon.height) + "\" preserveAspectRatio=\"xMidYMid meet\" aria-hidden=\"true\" focusable=\"false\" " + (icon.customAttrs) + ">\n      " + (icon.path) + "\n    </svg>");
};

var fileTypes = ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx"];

var nodes = document.querySelectorAll("[data-icon]");

nodes.forEach(function(el) {
  var iconName = el.getAttribute("data-icon");

  // Check if icon exists
  if (!(iconName in icons)) {
    console.warn(("Icon “" + iconName + "” was not found in link-icons.js"), el);
    return false;
  }

  // If link is external, use external icon (excluding certain CTA links/buttons below)
  // NOTE: This is project-specific, edit as needed.
  // External link test from https://gist.github.com/jlong/2428561
  if (
    !el.classList.contains("HomepageFeature-button") &&
    !el.classList.contains("ActionPromo-button") &&
    !el.classList.contains("DonatePromo-submit") &&
    !el.classList.contains("exclude")
  ) {
    var a = document.createElement("a");
    a.href = el.href;
    if (a.hostname !== window.location.hostname) {
      iconName = "external";
    }

    // Check if link is a file, use download icon
    var fileExt = a.pathname.split(".").pop();

    if (fileTypes.indexOf(fileExt) > -1) {
      iconName = "download";
    }
  }

  // Create new object for this icon so we can change
  // the dimensions without affecting the defaults.
  var icon = {};

  // Copy values from original icons object
  Object.assign(icon, icons[iconName]);

  // Check for custom size attributes
  var iconHeight = el.getAttribute("data-icon-height");
  var iconWidth = el.getAttribute("data-icon-width");

  // Validate height and width values if present
  // Note: Use unary plus (+) operator to convert strings to numbers
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus_()
  if (iconHeight) {
    if (isNaN(+iconHeight)) {
      console.warn(("Can’t parse data-icon-height value of “" + iconHeight + "” on " + el));
      return false;
    } else {
      icon.height = +iconHeight;
    }
  }

  if (iconWidth) {
    if (isNaN(+iconWidth)) {
      console.warn(("Can parse data-icon-width value of “" + iconWidth + "” on " + el));
      return false;
    } else {
      icon.width = +iconWidth;
    }
  }

  // Make sure either the height or width has been defined
  if (!icon.height && !icon.width) {
    console.warn(("No height or width defined for icon “" + iconName + "”"), icon);
    return false;
  }

  // Calculate height or width if only one dimension was provided
  // Note: We can’t rely on CSS to resize SVGs in IE11-
  //       because IE doesn’t respect the viewBox ratio.
  var viewBoxArr = icon.viewBox.split(" ");

  // Validate viewBox value
  if (viewBoxArr.length !== 4) {
    console.warn(("Icon “" + iconName + "” has a malformed viewBox attribute: “" + (icon.viewBox) + "”"));
    return false;
  }

  // Calculate aspect ratio
  var aspectRatio = +viewBoxArr[2] / +viewBoxArr[3];

  // Calculate height if width was provided
  if (!icon.height && icon.width) {
    icon.height = roundSingleDecimal(icon.width / aspectRatio);
  }

  // Calculate width if height was provided
  if (!icon.width && icon.height) {
    icon.width = roundSingleDecimal(icon.height * aspectRatio);
  }

  // Insert the icon using Unorphanize to prevent wrapping
  new (_threespot_unorphanize__WEBPACK_IMPORTED_MODULE_0___default())(el, {
    inlineStyles: false,
    className: "u-nowrap",
    append: buildSVG(icon)
  });
});


/***/ }),

/***/ "./scripts/modules/mailto.js":
/*!***********************************!*\
  !*** ./scripts/modules/mailto.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _threespot_mailto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @threespot/mailto */ "../../node_modules/@threespot/mailto/dist/mailto.m.js");
/* harmony import */ var _threespot_mailto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_threespot_mailto__WEBPACK_IMPORTED_MODULE_0__);




document.querySelectorAll("[data-email]").forEach(function(el) {
  new (_threespot_mailto__WEBPACK_IMPORTED_MODULE_0___default())(el);
});


/***/ }),

/***/ "./scripts/modules/nav.js":
/*!********************************!*\
  !*** ./scripts/modules/nav.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @threespot/expand-toggle */ "../../node_modules/@threespot/expand-toggle/dist/expand-toggle.m.js");
/* harmony import */ var _threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0__);
//------------------------------------------------------------------------
// Main nav
//------------------------------------------------------------------------



var NavMenu = function NavMenu() {
  var this$1 = this;

  // NOTE: Breakpoint must match $layout-nav-bp in _layout-vars.scss
  this.mediaQueryList = window.matchMedia("(min-width: 800px)");
  this.mobileNavToggle = document.querySelector(".Header-button--menu");
  this.desktopNavToggle = document.querySelector(".Header-button--nav");
  this.desktopSearchToggle = document.querySelector(".Header-button--search");
  this.subnavToggles = document.querySelectorAll(".Nav-toggle");
  this.subnavExpandToggles = []; // store references so we can destroy later
  this.isDesktop = null;

  // NOTE: These events are shared for both mobile and desktop

  // Close nav if click off of it
  window.addEventListener("click", function (evt) {
    if (
      this$1.isMenuExpanded() &&
      !evt.target.closest("#menu") &&
      !evt.target.closest(".Header-button--menu")
    ) {
      if (this$1.isDesktop) {
        this$1.desktopExpandToggle.collapse();
      } else {
        this$1.mobileExpandToggle.collapse();
      }
    }

    // Close desktop search toggle if click off of it
    if (
      this$1.isDesktop &&
      this$1.desktopSearchToggle.getAttribute("aria-expanded") == "true" &&
      !evt.target.closest("#nav-search") &&
      !evt.target.closest(".Header-button--search")
    ) {
      this$1.searchExpandToggle.collapse();
    }
  });

  // Close with escape key
  window.addEventListener("keydown", function (evt) {
    if (evt.which === 27) {
      // Main nav
      if (this$1.isMenuExpanded()) {
        if (this$1.isDesktop) {
          this$1.desktopExpandToggle.collapse();
        } else {
          this$1.mobileExpandToggle.collapse();
        }
      }

      // Search
      if (
        this$1.isDesktop &&
        this$1.desktopSearchToggle.getAttribute("aria-expanded") == "true"
      ) {
        this$1.searchExpandToggle.collapse();
      }
    }
  });

  // Listen for breakpoint change
  this.mediaQueryList.addListener(function (evt) {
    if (evt.matches) {
      this$1.destroyMobileNav();
      this$1.initDesktopNav();
    } else {
      this$1.destroyDesktopNav();
      this$1.initMobileNav();
    }
  });

  // Init on load
  if (this.mediaQueryList.matches) {
    this.initDesktopNav();
  } else {
    this.initMobileNav();
  }
};

NavMenu.prototype.isMenuExpanded = function isMenuExpanded () {
  if (this.isDesktop) {
    return this.desktopNavToggle.getAttribute("aria-expanded") == "true";
  } else {
    return this.mobileNavToggle.getAttribute("aria-expanded") == "true";
  }
};

NavMenu.prototype.initMobileNav = function initMobileNav () {
    var this$1 = this;

  this.isDesktop = false;
  // Save subnav toggles to array so we can access then all later
  this.mobileExpandToggle = new (_threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0___default())(this.mobileNavToggle);

  // init submenus
  this.subnavToggles.forEach(function (el) {
    var toggle = new (_threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0___default())(el);
    this$1.subnavExpandToggles.push(toggle);

    // Update nav menu height when a sublist is expanded or collapsed
    toggle.on("expand", function () {
      this$1.mobileExpandToggle.updateExpandedHeight();
    });

    toggle.on("collapse", function () {
      this$1.mobileExpandToggle.updateExpandedHeight();
    });
  });
};

NavMenu.prototype.destroyMobileNav = function destroyMobileNav () {
  this.mobileExpandToggle.destroy();

  // destroy submenus
  this.subnavExpandToggles.forEach(function (el) {
    el.destroy();
  });

  this.subnavExpandToggles = [];
};

NavMenu.prototype.initDesktopNav = function initDesktopNav () {
    var this$1 = this;

  this.isDesktop = true;
  this.desktopExpandToggle = new (_threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0___default())(this.desktopNavToggle);

  // Search toggle
  this.searchExpandToggle = new (_threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0___default())(this.desktopSearchToggle);
  this.searchInput = this.searchExpandToggle.targetEl.querySelector("[type='search']");

  // Hide search menu when main nav is open
  this.desktopExpandToggle.on("expand", function () {
    this$1.searchExpandToggle.collapse();
  });

  // Hide main nav when search menu is open
  this.searchExpandToggle.on("expand", function () {
    this$1.desktopExpandToggle.collapse();

    // Focus the search input
    if (this$1.searchInput) {
      this$1.searchInput.focus();
    }
  });
};

NavMenu.prototype.destroyDesktopNav = function destroyDesktopNav () {
  this.desktopExpandToggle.destroy();

  // Search toggle
  this.searchExpandToggle.destroy();
};

// Init
new NavMenu();


/***/ }),

/***/ "./scripts/modules/nice-select.js":
/*!****************************************!*\
  !*** ./scripts/modules/nice-select.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/* eslint-disable */
/*  jQuery Nice Select - v1.1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */

(function ($) {

    $.fn.niceSelect = function (method) {

        // Methods
        if (typeof method == 'string') {
            if (method == 'update') {
                this.each(function () {
                    var $select = $(this);
                    var $dropdown = $(this).next('.nice-select');
                    var open = $dropdown.hasClass('open');

                    if ($dropdown.length) {
                        $dropdown.remove();
                        create_nice_select($select);

                        if (open) {
                            $select.next().trigger('click');
                        }
                    }
                });
            } else if (method == 'destroy') {
                this.each(function () {
                    var $select = $(this);
                    var $dropdown = $(this).next('.nice-select');

                    if ($dropdown.length) {
                        $dropdown.remove();
                        $select.css('display', '');
                    }
                });
                if ($('.nice-select').length == 0) {
                    $(document).off('.nice_select');
                }
            } else {
                console.log('Method "' + method + '" does not exist.')
            }
            return this;
        }

        // Hide native select
        this.hide();

        // Create custom markup
        this.each(function () {
            var $select = $(this);
            if (!$select.next().hasClass('nice-select')) {
                create_nice_select($select);
            }
        });

        function create_nice_select($select) {
            $select.after($('<div></div>')
                .addClass('nice-select')
                .attr('data-expands', $select.attr('data-expands') || null)
                .attr('data-expands-height', '')
                .addClass($select.attr('class') || '')
                .addClass($select.attr('disabled') ? 'disabled' : '')
                .attr('tabindex', $select.attr('disabled') ? null : '0')
                .html('<span class="current"></span><ul class="list"></ul>')
            );

            var $dropdown = $select.next();
            var $options = $select.find('option');
            var $selected = $select.find('option:selected');

            $dropdown.find('.current').html($selected.data('display') || $selected.text());

            $options.each(function (i) {
                var $option = $(this);
                var display = $option.data('display');

                $dropdown.find('ul')
                    .attr('id', $select.attr('data-expands') || null)
                    .append($('<li></li>')
                        .attr('data-value', $option.val())
                        .attr('data-display', (display || null))
                        .addClass('option' +
                            ($option.is(':selected') ? ' selected' : '') +
                            ($option.is(':disabled') ? ' disabled' : ''))
                        .html($option.text())
                    );
            });
        }

        /* Event listeners */

        // Unbind existing events in case that the plugin has been initialized before
        $(document).off('.nice_select');

        // Open/close
        $(document).on('click.nice_select', '.nice-select', function (event) {
            var $dropdown = $(this);

            $('.nice-select').not($dropdown).removeClass('open');
            $dropdown.toggleClass('open');

            if ($dropdown.hasClass('open')) {
                $dropdown.find('.option');
                $dropdown.find('.focus').removeClass('focus');
                $dropdown.find('.selected').addClass('focus');
            } else {
                $dropdown.focus();
            }
        });

        // Close when clicking outside
        $(document).on('click.nice_select', function (event) {
            if ($(event.target).closest('.nice-select').length === 0) {
                $('.nice-select').removeClass('open').find('.option');
            }
        });

        // Option click
        $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function (event) {
            var $option = $(this);
            var $dropdown = $option.closest('.nice-select');

            $dropdown.find('.selected').removeClass('selected');
            $option.addClass('selected');

            var text = $option.data('display') || $option.text();
            $dropdown.find('.current').text(text);

            $dropdown.prev('select').val($option.data('value')).trigger('click');
            $dropdown.toggleClass('open');
            $(this).closest("form").submit();
        });

        // Keyboard events
        $(document).on('keydown.nice_select', '.nice-select', function (event) {
            var $dropdown = $(this);
            var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected'));

            // Space or Enter
            if (event.keyCode == 32 || event.keyCode == 13) {
                if ($dropdown.hasClass('open')) {
                    $focused_option.trigger('click');
                } else {
                    $dropdown.trigger('click');
                }
                return false;
                // Down
            } else if (event.keyCode == 40) {
                if (!$dropdown.hasClass('open')) {
                    $dropdown.trigger('click');
                } else {
                    var $next = $focused_option.nextAll('.option:not(.disabled)').first();
                    if ($next.length > 0) {
                        $dropdown.find('.focus').removeClass('focus');
                        $next.addClass('focus');
                    }
                }
                return false;
                // Up
            } else if (event.keyCode == 38) {
                if (!$dropdown.hasClass('open')) {
                    $dropdown.trigger('click');
                } else {
                    var $prev = $focused_option.prevAll('.option:not(.disabled)').first();
                    if ($prev.length > 0) {
                        $dropdown.find('.focus').removeClass('focus');
                        $prev.addClass('focus');
                    }
                }
                return false;
                // Esc
            } else if (event.keyCode == 27) {
                if ($dropdown.hasClass('open')) {
                    $dropdown.trigger('click');
                }
                // Tab
            } else if (event.keyCode == 9) {
                if ($dropdown.hasClass('open')) {
                    return false;
                }
            }
        });

        // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
        var style = document.createElement('a').style;
        style.cssText = 'pointer-events:auto';
        if (style.pointerEvents !== 'auto') {
            $('html').addClass('no-csspointerevents');
        }

        return this;

    };

}(jQuery));

$(document).ready(function () {
    $('#filters select').niceSelect();
});

/***/ }),

/***/ "./scripts/modules/orphans.js":
/*!************************************!*\
  !*** ./scripts/modules/orphans.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _threespot_unorphanize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @threespot/unorphanize */ "../../node_modules/@threespot/unorphanize/dist/unorphanize.m.js");
/* harmony import */ var _threespot_unorphanize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_threespot_unorphanize__WEBPACK_IMPORTED_MODULE_0__);
//------------------------------------------------------------------------
// Wrap words to prevent orphans
//
// Basic example:
//
//   <p data-orphans>Lorem ipsum dolor sit amet</p>
//
// Output:
//
//   <p>Lorem ipsum dolor <span class="u-nowrap">sit amet</span></p>
//
//------------------------------------------------------------------------
// Custom word count:
//
//   <p data-orphans="3">Lorem ipsum dolor sit amet</p>
//
// Output:
//
//   <p>Lorem ipsum <span class="u-nowrap">dolor sit amet</span></p>
//
//------------------------------------------------------------------------
// Requires the following CSS rule:
//
//   &-nowrap {
//     @include fs-min-width(320px) {
//       display: inline-block !important;
//       white-space: nowrap !important;
//     }
//   }
//
//------------------------------------------------------------------------


var nodes = document.querySelectorAll("[data-orphans]");

nodes.forEach(function(el) {
  var options = {
    inlineStyles: false,
    className: "u-nowrap"
  };

  // Check for custom word count
  var wordCount = el.getAttribute("data-orphans");

  // Set custom word count if defined (defaults to 2)
  if (wordCount) {
    options.wordCount = wordCount;
  }

  new (_threespot_unorphanize__WEBPACK_IMPORTED_MODULE_0___default())(el, options);
});


/***/ }),

/***/ "./scripts/modules/project-nav.js":
/*!****************************************!*\
  !*** ./scripts/modules/project-nav.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @threespot/expand-toggle */ "../../node_modules/@threespot/expand-toggle/dist/expand-toggle.m.js");
/* harmony import */ var _threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0__);
//------------------------------------------------------------------------
// Project page jump link nav
//------------------------------------------------------------------------



var ProjectJumpNav = function ProjectJumpNav(el) {
  var this$1 = this;

  this.el = el;

  // Check for empty list element
  this.navList = this.el.querySelector(".ProjectNav-list");

  if (!this.navList) {
    return false;
  }

  // Check for richtext
  this.richtextEls = document.querySelectorAll("#main .u-richtext");

  if (!this.richtextEls.length) {
    return false;
  }

  // Check for headings
  this.headings = [];

  this.richtextEls.forEach(function (el) {
    var ref;

    // Only use H2 since that’s the top-level heading in wysiwyg components
    // Note: We can’t use the spread syntax because Buble doesn’t transpile correctly
    var headings = [].slice.call(el.querySelectorAll("h2[id]"));
    (ref = this$1.headings).push.apply(ref, headings);
  });

  // Do nothing if less than 2 headings
  if (!this.headings || this.headings.length < 2) {
    return false;
  }

  // Generate nav list based on headings
  this.buildList();

  // Mobile nav toggle setup
  //---------------------------------
  // NOTE: Breakpoint must match $layout-nav-bp in _project-nav.scss
  this.mediaQueryList = window.matchMedia("(min-width: 900px)");
  this.toggle = this.el.querySelector(".ProjectNav-toggle");

  // Listen for breakpoint change
  this.mediaQueryList.addListener(function (evt) {
    if (evt.matches) {
      this$1.destroyToggle();
    } else {
      this$1.initToggle();
    }
  });

  // Init on load
  if (!this.mediaQueryList.matches) {
    this.initToggle();
  }
};

// Add links to nav
ProjectJumpNav.prototype.buildList = function buildList () {
  var listItems = '';

  this.headings.forEach(function (el) {
    listItems += "\n        <li class=\"ProjectNav-item\">\n          <a class=\"ProjectNav-link\" href=\"#" + (el.id) + "\">\n            <span class=\"ProjectNav-link-text\">" + (el.textContent) + "</span>\n          </a>\n        </li>\n      ";
  });

  this.navList.innerHTML = listItems;

  // Show element (hidden by inline styles)
  this.el.style.removeProperty("display");
};

ProjectJumpNav.prototype.initToggle = function initToggle () {
  this.toggleExpand = new (_threespot_expand_toggle__WEBPACK_IMPORTED_MODULE_0___default())(this.toggle);
};

ProjectJumpNav.prototype.destroyToggle = function destroyToggle () {
  this.toggleExpand.destroy();
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectJumpNav);

// Init on Project pages and State
if (document.body.classList.contains('single-project') || document.body.classList.contains('single-state') || document.body.classList.contains('single-territory')) {
  var el = document.querySelector(".ProjectNav");

  if (el) {
    new ProjectJumpNav(el);
  }
}


/***/ }),

/***/ "./scripts/modules/scrollable-tables.js":
/*!**********************************************!*\
  !*** ./scripts/modules/scrollable-tables.js ***!
  \**********************************************/
/***/ (function() {

//------------------------------------------------------------------------
// Allow tables to scroll horizontally in narrow viewports
//------------------------------------------------------------------------
var tables = document.querySelectorAll(".u-richtext > table");

tables.forEach(function(el) {
  var wrapper = document.createElement("div");
  // Add “u-richtext” class since table styles are only applied to direct children (see _richtext.scss)
  wrapper.className = "u-richtext js-tablewrap";
  // Allow scrollbar when needed
  wrapper.style.overflow = "auto";
  // Set tabindex="0" for keyboard accessiblity
  // https://www.paciellogroup.com/blog/2016/02/short-note-on-improving-usability-of-scrollable-regions/
  wrapper.tabIndex = 0;
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
});


/***/ }),

/***/ "./scripts/modules/state.js":
/*!**********************************!*\
  !*** ./scripts/modules/state.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//------------------------------------------------------------------------
// Controls State Page Content Views Visibility
//------------------------------------------------------------------------


var StateContentViews = function StateContentViews(el) {
  this.el = el;

  // get a common slug for elements to hide
  var slug = this.el.closest('[data-hide]').getAttribute('data-hide');

  //get the view title, text, and shortcode
  var toHide = document.querySelectorAll(("[data-hide=\"" + slug + "\"]"));

  var quickLink = document.querySelector((".ProjectNav-link[href=\"#" + slug + "\"]")).closest('.ProjectNav-item');

  //check for fallback view
  var fallback = document.querySelector(("[data-hide=\"" + slug + "-fallback\"]"));

  toHide.forEach(function (hideMe) {
    // Turn back on the Title & Text if we have a fallback
    var isPrimary = hideMe.classList.contains('primary');
    if (fallback && isPrimary) {
      toHide.forEach(function (element) { return element.style.display = 'block'; });
      fallback.style.display = 'block';
      quickLink.style.display = 'block';
      hideMe.style.display = 'none';
    } else {
      hideMe.style.display = 'none';
      quickLink.style.display = 'none';
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (StateContentViews);

// Init on State Posts
if (document.body.classList.contains('single-state') || document.body.classList.contains('single-territory')) {
  var el = document.querySelectorAll('.pt-cv-no-post');

  if (el) {
    el.forEach(function (el) { return new StateContentViews(el); });
  }
}


/***/ }),

/***/ "./scripts/modules/timeline.js":
/*!*************************************!*\
  !*** ./scripts/modules/timeline.js ***!
  \*************************************/
/***/ (function() {

"use strict";
//------------------------------------------------------------------------
// Timeline filters
//------------------------------------------------------------------------


var Timeline = function Timeline(el) {
  var this$1 = this;

  this.el = el;

  // Check if there are items to filter
  if (this.el.querySelectorAll(".Timeline-item--secondary").length) {
    // Show filters
    this.el.querySelector(".Timeline-controls").classList.add("is-active");
  }
  else {
    this.el.classList.add("js-init");
    return false;
  }

  this.filterToggle = this.el.querySelectorAll("[data-filter]");
  this.resetToggle = this.el.querySelectorAll("[data-reset]");
  this.entries = this.el.querySelectorAll(".Timeline-item");

  this.filterToggle.forEach(function (el) {
    el.addEventListener("click", this$1.filter.bind(this$1));
  });

  this.resetToggle.forEach(function (el) {
    el.addEventListener("click", this$1.showAll.bind(this$1));
  });

  var defaultToggle = this.el.querySelector("[data-default]");

  if (defaultToggle) {
    defaultToggle.click();
  }

  this.el.classList.add("js-init");
};

Timeline.prototype.hideAll = function hideAll () {
  this.entries.forEach(function (el) {
    el.classList.add("is-hidden");
  });
};

Timeline.prototype.showAll = function showAll (evt) {
  this.updateToggles(evt.target);

  this.entries.forEach(function (el) {
    el.classList.remove("is-hidden");
  });
};

Timeline.prototype.updateToggles = function updateToggles (activeToggleEl) {
  var oldActiveToggle = this.el.querySelector(".Timeline-toggle.is-active");

  if (oldActiveToggle) {
    oldActiveToggle.classList.remove("is-active");
    oldActiveToggle.setAttribute("aria-pressed", "false")
  }

  activeToggleEl.classList.add("is-active");
  activeToggleEl.setAttribute("aria-pressed", "true")
};

Timeline.prototype.filter = function filter (evt) {
  this.hideAll();

  var toggle = evt.target;
  var selector = toggle.getAttribute("data-filter");
  var targetEls = this.el.querySelectorAll(selector);

  this.updateToggles(toggle);

  targetEls.forEach(function (el) {
    el.classList.remove("is-hidden");
  });
};

// Init
var timelines = document.querySelectorAll(".Timeline");
timelines.forEach(function (el) { return new Timeline(el); });


/***/ }),

/***/ "./scripts/modules/tooltips.js":
/*!*************************************!*\
  !*** ./scripts/modules/tooltips.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_tooltips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/tooltips */ "./scripts/lib/tooltips.js");
// Tooltips




document.querySelectorAll("[data-tooltip][title]").forEach(function(el) {
  new _lib_tooltips__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
    // min space between tooltip and edge of screen
    gutter: 10,
    // Prepend hidden “Definition” screen reader text for glossary terms
    prepend: el.href && el.href.indexOf("glossary") ? "<span class=\"u-screenreader\">Definition: </span>" : "",
    // Append a period if there isn't one for better screen reader experience
    append: el.title.trim().slice(-1) !== "." ? "<span class=\"u-screenreader\">.</span>" : ""
  });
});


/***/ }),

/***/ "./scripts/modules/vimeo.js":
/*!**********************************!*\
  !*** ./scripts/modules/vimeo.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/once */ "../../node_modules/lodash/once.js");
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_once__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fg_loadjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fg-loadjs */ "../../node_modules/fg-loadjs/loadJS.js");
/* harmony import */ var fg_loadjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fg_loadjs__WEBPACK_IMPORTED_MODULE_1__);
// Vimeo video players
// https://github.com/vimeo/player.js
//
// This module will dynamically load the JS API, build the players, and attach event listeners for GTM.
//
// <div data-vimeo="65171201"><a href="https://vimeo.com/141050050">Watch video on Vimeo</a></div>
//------------------------------------------------------------------------




var VimeoPlayer = function VimeoPlayer(config) {
  var self = this;
  this.el = config.el;
  this.id = this.el.getAttribute("data-vimeo");

  // Create video player
  // Docs https://github.com/vimeo/player.js#embed-options
  this.player = new window.Vimeo.Player(this.el, {
    byline: false,
    color: "009cde",
    id: this.id,
    portrait: false,
    title: false
  });

  // Get the video title
  this.player
    .getVideoTitle()
    .then(function(title) {
      self.videoTitle = title;
      // Replace generic title attribute value with video title for better accessiblity.
      // Add a period so screen readers pause, making it easier to understand.
      self.el.setAttribute('title', "Video player: " + title + ".");
    })
    .catch(function(error) {
      console.warn(error);
      self.videoTitle = "Title not found";
    });

  // Play event listener
  this.player.on("play", function() {
    self.gtmVideoAction("play");
  });

  // Finished event listener
  this.player.on("ended", function() {
    self.gtmVideoAction("finished");
  });

  // These functions should only run once
  // http://underscorejs.org/#once
  this.track10sec = lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(this.track10sec);
  this.track50percent = lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(this.track50percent);

  // Track progress (fires every ~250ms)
  this.player.on("timeupdate", function(data) {
    // console.log(data.seconds + 's - ' + (data.percent * 100) + '% played');

    // 10s elapsed
    if (data.seconds >= 10) {
      self.track10sec();
    }

    // 50% watched
    if (data.percent >= 0.5) {
      self.track50percent();
    }
  });
};

VimeoPlayer.prototype.track10sec = function track10sec () {
  this.gtmVideoAction("watched 10s");
};

VimeoPlayer.prototype.track50percent = function track50percent () {
  this.gtmVideoAction("watched 50%");
};

// Helper to push data to GTM dataLayer
VimeoPlayer.prototype.gtmVideoAction = function gtmVideoAction (action) {
  // console.log({
  // 'event': 'customVideoEvent',
  // 'videoTitle': this.videoTitle,
  // 'videoAction': action
  // });

  // Use try/catch just in case GTM hasn’t loaded yet
  try {
    window.dataLayer.push({
      event: "customVideoEvent",
      videoAction: action,
      videoTitle: this.videoTitle
    });
  } catch (e) {
    console.warn("GTM: Unable to push Vimeo data to dataLayer");
  }
};

// Find videos
var videos = document.querySelectorAll('[data-vimeo], iframe[src*="vimeo.com"]');

// Load JS API and create video players if present
if (videos.length) {
  // Build video players
  var buildPlayers = function() {
    videos.forEach(function(item) {
      new VimeoPlayer({ el: item });
    });
  };

  // Load JS API if not already loaded
  // https://github.com/vimeo/player.js
  if (typeof window.Vimeo == "undefined") {
    // Get the script then build the players
    fg_loadjs__WEBPACK_IMPORTED_MODULE_1___default()("https://player.vimeo.com/api/player.js", function() {
      buildPlayers();
    });
  } else {
    buildPlayers();
  }
}


/***/ }),

/***/ "./scripts/modules/youtube.js":
/*!************************************!*\
  !*** ./scripts/modules/youtube.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fg_loadjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fg-loadjs */ "../../node_modules/fg-loadjs/loadJS.js");
/* harmony import */ var fg_loadjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fg_loadjs__WEBPACK_IMPORTED_MODULE_0__);
//------------------------------------------------------------------------
// YouTube video player tracking and dynamic loading
//
// TODO: Only build player once it’s scrolled into view
//
// How to track player events in GTM
// https://www.simoahava.com/analytics/the-youtube-video-trigger-in-google-tag-manager/
//
// Requires YouTube Data API key to add proper “title” for accessiblity
// https://developers.google.com/youtube/v3/getting-started
//
// Video players can be built dynamically using data attributes:
// <div data-youtube="FuYW3GdPhsc">
//   <a href="https://www.youtube.com/watch?v=FuYW3GdPhsc">Watch video on YouTube</a>
// </div>
//------------------------------------------------------------------------
/*global YT*/


var publicKey = window.ALDF && window.ALDF.YOUTUBE_PUBLIC_KEY;

var YoutubePlayer = function YoutubePlayer(config) {
  if (!publicKey) {
    console.warn("No YouTube API public key provided, can’t get video title");
    return false;
  }

  this.el = config.el;

  // Generate unique ID for each video
  // https://gist.github.com/gordonbrander/2230317
  this.uniqueID = "YT_" + Math.random().toString(36).substr(2, 4);

  // Check if iframe embed
  if (this.el.nodeName.toLowerCase() === "iframe") {
    var iframeSrc = this.el.getAttribute("src");

    // Add enablejsapi=1 to src to enable GTM tracking
    if (
      iframeSrc.indexOf("enablejsapi") === -1 ||
      iframeSrc.indexOf("wmode") === -1
    ) {
      var separator = iframeSrc.indexOf("?") > 0 ? "&" : "?";
      iframeSrc += separator + "enablejsapi=1&wmode=opaque";
      this.el.setAttribute("src", iframeSrc);
    }
  } else {
    // Get playerVars from optional data attributes if present
    this.collectVars();

    // Get YouTube video ID
    this.videoID = this.el.getAttribute("data-youtube");

    if (!this.videoID) {
      console.warn("Missing YouTube ID");
      return false;
    }

    // Replace fallback content with placeholder element that iframe will replace
    this.el.innerHTML = "<div id=" + (this.uniqueID) + ">";

    // Check for video title
    this.videoTitle = this.el.getAttribute("data-youtube-title") || "";

    // Lookup title if not provided
    if (!this.videoTitle.length) {
      this.videoTitle = this.getVideoTitle();
    }
  }

  // Insert the video player
  this.buildPlayer();
};

YoutubePlayer.prototype.getVideoTitle = function getVideoTitle () {
  this.getVideoData(function(data) {
    if ("items" in data && data.items.length) {
      var video = data.items[0];
      return video.snippet.title.trim();
      // self.description = video.snippet.description || '';
    } else {
      console.warn("Can’t get YouTube data for video ID" + self.videoID);
    }
  });
};

// Plain JS AJAX request
// https://plainjs.com/javascript/ajax/making-cors-ajax-get-requests-54/
YoutubePlayer.prototype.getCORS = function getCORS (url, success, error) {
    var xhr = new XMLHttpRequest();
    if (!('withCredentials' in xhr)) { xhr = new XDomainRequest(); } // fix IE8/9
    xhr.open('GET', url);
    xhr.onload = success;
    xhr.onerror = error;
    xhr.send();
    return xhr;
};

// Get video metadata using YouTube gdata API
// https://www.googleapis.com/youtube/v3/videos?id=jZ4cur1kgog
YoutubePlayer.prototype.getVideoData = function getVideoData (callback) {
  var self = this;
  var url = "https://www.googleapis.com/youtube/v3/videos?id=" + (self.videoID) + "&key=" + publicKey + "&part=snippet,contentDetails";

  this.getCORS(url, function(request) {
    var response = request.currentTarget.response || request.target.responseText;
    callback(JSON.parse(response));
  }, function() {
    self.videoTitle = "Title not found";
  });
};

// Collect player vars from data attributes (if present)
YoutubePlayer.prototype.collectVars = function collectVars () {
  this.playerVars = {};
  this.playerVars.autohide = this.el.getAttribute("data-youtube-autohide") || 1;
  this.playerVars.autoplay = this.el.getAttribute("data-youtube-autoplay") || 0;
  // controls=2 does not work when enablejsapi=1
  this.playerVars.controls = this.el.getAttribute("data-youtube-controls") || 1;
  this.playerVars.iv_load_policy = this.el.getAttribute("data-youtube-iv_load_policy") || 3;
  this.playerVars.showinfo = this.el.getAttribute("data-youtube-showinfo") || 0;
  this.playerVars.rel = this.el.getAttribute("data-youtube-rel") || 0;
  this.playerVars.wmode = "opaque";
  // console.log('this.playerVars', this.playerVars);
};

YoutubePlayer.prototype.buildPlayer = function buildPlayer () {
  var self = this;
  // Replace the placeholder element with the iframe
  this.player = new YT.Player(this.uniqueID, {
    videoId: self.videoID,
    playerVars: self.playerVars,
    events: {
      onReady: function() {
        // console.log('YT ready', self.uniqueID);
      }
    }
  });
};

// Find videos
var videos = document.querySelectorAll("[data-youtube], iframe[src*='youtube.com'], iframe[src*='youtube-nocookie.com']");

// Load JS API and create video players if present
if (publicKey && videos.length) {
  // Build video players
  var buildPlayers = function() {
    videos.forEach(function(item) {
      new YoutubePlayer({ el: item });
    });
  };

  // Check if YouTube script has already run
  // https://developers.google.com/youtube/iframe_api_reference
  if (typeof window.onYouTubeIframeAPIReady == "undefined") {
    // Set custom “onYouTubeIframeAPIReady” callback that will fire once the script has downloaded
    window.onYouTubeIframeAPIReady = function() {
      buildPlayers();
    };

    // Get YouTube JS API script
    fg_loadjs__WEBPACK_IMPORTED_MODULE_0___default()("https://www.youtube.com/iframe_api", function() {
      // YouTube script automatically calls onYouTubeIframeAPIReady()
    });
  } else {
    // If YouTube script has previously run, we can build players immediately
    buildPlayers();
  }
}


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = jQuery;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var console_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! console-polyfill */ "../../node_modules/console-polyfill/index.js");
/* harmony import */ var console_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(console_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdn_polyfills_NodeList_prototype_forEach__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdn-polyfills/NodeList.prototype.forEach */ "../../node_modules/mdn-polyfills/NodeList.prototype.forEach.js");
/* harmony import */ var mdn_polyfills_NodeList_prototype_forEach__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_NodeList_prototype_forEach__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdn_polyfills_Object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdn-polyfills/Object.assign */ "../../node_modules/mdn-polyfills/Object.assign.js");
/* harmony import */ var mdn_polyfills_Object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_Object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdn_polyfills_Element_prototype_closest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdn-polyfills/Element.prototype.closest */ "../../node_modules/mdn-polyfills/Element.prototype.closest.js");
/* harmony import */ var mdn_polyfills_Element_prototype_closest__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_Element_prototype_closest__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_font_face__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/font-face */ "./scripts/modules/font-face.js");
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! what-input */ "../../node_modules/what-input/dist/what-input.js");
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(what_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! picturefill */ "../../node_modules/picturefill/dist/picturefill.js");
/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(picturefill__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_autosubmit_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/autosubmit-form */ "./scripts/modules/autosubmit-form.js");
/* harmony import */ var _modules_autosubmit_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_autosubmit_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_background_picture__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/background-picture */ "./scripts/modules/background-picture.js");
/* harmony import */ var _modules_donation_promo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/donation-promo */ "./scripts/modules/donation-promo.js");
/* harmony import */ var _modules_expand_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/expand-toggle */ "./scripts/modules/expand-toggle.js");
/* harmony import */ var _modules_external_links__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/external-links */ "./scripts/modules/external-links.js");
/* harmony import */ var _modules_filter_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/filter-toggle */ "./scripts/modules/filter-toggle.js");
/* harmony import */ var _modules_fluid_iframes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/fluid-iframes */ "./scripts/modules/fluid-iframes.js");
/* harmony import */ var _modules_form_validation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/form-validation */ "./scripts/modules/form-validation.js");
/* harmony import */ var _modules_link_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/link-icons */ "./scripts/modules/link-icons.js");
/* harmony import */ var _modules_mailto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/mailto */ "./scripts/modules/mailto.js");
/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/nav */ "./scripts/modules/nav.js");
/* harmony import */ var _modules_orphans__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/orphans */ "./scripts/modules/orphans.js");
/* harmony import */ var _modules_project_nav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/project-nav */ "./scripts/modules/project-nav.js");
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/state */ "./scripts/modules/state.js");
/* harmony import */ var _modules_scrollable_tables__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/scrollable-tables */ "./scripts/modules/scrollable-tables.js");
/* harmony import */ var _modules_scrollable_tables__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_modules_scrollable_tables__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _modules_timeline__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/timeline */ "./scripts/modules/timeline.js");
/* harmony import */ var _modules_timeline__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_modules_timeline__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _modules_tooltips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/tooltips */ "./scripts/modules/tooltips.js");
/* harmony import */ var _modules_nice_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/nice-select */ "./scripts/modules/nice-select.js");
/* harmony import */ var _modules_nice_select__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_modules_nice_select__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _modules_vimeo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modules/vimeo */ "./scripts/modules/vimeo.js");
/* harmony import */ var _modules_youtube__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modules/youtube */ "./scripts/modules/youtube.js");
//------------------------------------------------------------------------
// This file contains site-wide JS that will be packaged into a single file
//------------------------------------------------------------------------


// console() polyfill for IE 9 (throws error when dev tools are closed)


// NodeList.prototype.forEach() polyfill


// Object.assign polyfill


// Element.prototype.closest polyfill


// Font face observer to detect when font files have loaded.
// Can drop once font-display is supported:
// http://caniuse.com/#feat=css-font-rendering-controls


// Detect input method in order to hide outlines in an accessible manner
// https://github.com/ten1seven/what-input


// Picture element polyfill
// Required for IE 11- and Android 4.4-
// http://caniuse.com/#feat=picture


// Modules
// import "./modules/aria-label-text";


















 // OPTIONAL: Tracks Vimeo video events in GTM
 // OPTIONAL: Tracks Vimeo video events in GTM
}();
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

}();
/******/ })()
;
//# sourceMappingURL=main.js.map