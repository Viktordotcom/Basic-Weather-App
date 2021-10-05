/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/darkmode-js/lib/darkmode-js.js":
/*!*****************************************************!*\
  !*** ./node_modules/darkmode-js/lib/darkmode-js.js ***!
  \*****************************************************/
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_597__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_597__);
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
/******/ 	__nested_webpack_require_597__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_597__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_597__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_597__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_597__.r = function(exports) {
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
/******/ 	__nested_webpack_require_597__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_597__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_597__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_597__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_597__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_597__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_597__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_597__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_597__(__nested_webpack_require_597__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/darkmode.js":
/*!*************************!*\
  !*** ./src/darkmode.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IS_BROWSER = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var IS_BROWSER = typeof window !== 'undefined';
exports.IS_BROWSER = IS_BROWSER;

var Darkmode =
/*#__PURE__*/
function () {
  function Darkmode(options) {
    _classCallCheck(this, Darkmode);

    if (!IS_BROWSER) {
      return;
    }

    var defaultOptions = {
      bottom: '32px',
      right: '32px',
      left: 'unset',
      time: '0.3s',
      mixColor: '#fff',
      backgroundColor: '#fff',
      buttonColorDark: '#100f2c',
      buttonColorLight: '#fff',
      label: '',
      saveInCookies: true,
      autoMatchOsTheme: true
    };
    options = Object.assign({}, defaultOptions, options);
    var css = "\n      .darkmode-layer {\n        position: fixed;\n        pointer-events: none;\n        background: ".concat(options.mixColor, ";\n        transition: all ").concat(options.time, " ease;\n        mix-blend-mode: difference;\n      }\n\n      .darkmode-layer--button {\n        width: 2.9rem;\n        height: 2.9rem;\n        border-radius: 50%;\n        right: ").concat(options.right, ";\n        bottom: ").concat(options.bottom, ";\n        left: ").concat(options.left, ";\n      }\n\n      .darkmode-layer--simple {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        transform: scale(1) !important;\n      }\n\n      .darkmode-layer--expanded {\n        transform: scale(100);\n        border-radius: 0;\n      }\n\n      .darkmode-layer--no-transition {\n        transition: none;\n      }\n\n      .darkmode-toggle {\n        background: ").concat(options.buttonColorDark, ";\n        width: 3rem;\n        height: 3rem;\n        position: fixed;\n        border-radius: 50%;\n        border:none;\n        right: ").concat(options.right, ";\n        bottom: ").concat(options.bottom, ";\n        left: ").concat(options.left, ";\n        cursor: pointer;\n        transition: all 0.5s ease;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .darkmode-toggle--white {\n        background: ").concat(options.buttonColorLight, ";\n      }\n\n      .darkmode-toggle--inactive {\n        display: none;\n      }\n\n      .darkmode-background {\n        background: ").concat(options.backgroundColor, ";\n        position: fixed;\n        pointer-events: none;\n        z-index: -10;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n\n      img, .darkmode-ignore {\n        isolation: isolate;\n        display: inline-block;\n      }\n\n      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n        .darkmode-toggle {display: none !important}\n      }\n\n      @supports (-ms-ime-align:auto), (-ms-accelerator:true) {\n        .darkmode-toggle {display: none !important}\n      }\n    ");
    var layer = document.createElement('div');
    var button = document.createElement('button');
    var background = document.createElement('div');
    button.innerHTML = options.label;
    button.classList.add('darkmode-toggle--inactive');
    layer.classList.add('darkmode-layer');
    background.classList.add('darkmode-background');
    var darkmodeActivated = window.localStorage.getItem('darkmode') === 'true';
    var preferedThemeOs = options.autoMatchOsTheme && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var darkmodeNeverActivatedByAction = window.localStorage.getItem('darkmode') === null;

    if (darkmodeActivated === true && options.saveInCookies || darkmodeNeverActivatedByAction && preferedThemeOs) {
      layer.classList.add('darkmode-layer--expanded', 'darkmode-layer--simple', 'darkmode-layer--no-transition');
      button.classList.add('darkmode-toggle--white');
      document.body.classList.add('darkmode--activated');
    }

    document.body.insertBefore(button, document.body.firstChild);
    document.body.insertBefore(layer, document.body.firstChild);
    document.body.insertBefore(background, document.body.firstChild);
    this.addStyle(css);
    this.button = button;
    this.layer = layer;
    this.saveInCookies = options.saveInCookies;
    this.time = options.time;
  }

  _createClass(Darkmode, [{
    key: "addStyle",
    value: function addStyle(css) {
      var linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('type', 'text/css');
      linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(css));
      document.head.appendChild(linkElement);
    }
  }, {
    key: "showWidget",
    value: function showWidget() {
      var _this = this;

      if (!IS_BROWSER) {
        return;
      }

      var button = this.button;
      var layer = this.layer;
      var time = parseFloat(this.time) * 1000;
      button.classList.add('darkmode-toggle');
      button.classList.remove('darkmode-toggle--inactive');
      button.setAttribute("aria-label", "Activate dark mode");
      button.setAttribute("aria-checked", "false");
      button.setAttribute("role", "checkbox");
      layer.classList.add('darkmode-layer--button');
      button.addEventListener('click', function () {
        var isDarkmode = _this.isActivated();

        if (!isDarkmode) {
          layer.classList.add('darkmode-layer--expanded');
          button.setAttribute('disabled', true);
          setTimeout(function () {
            layer.classList.add('darkmode-layer--no-transition');
            layer.classList.add('darkmode-layer--simple');
            button.removeAttribute('disabled');
          }, time);
        } else {
          layer.classList.remove('darkmode-layer--simple');
          button.setAttribute('disabled', true);
          setTimeout(function () {
            layer.classList.remove('darkmode-layer--no-transition');
            layer.classList.remove('darkmode-layer--expanded');
            button.removeAttribute('disabled');
          }, 1);
        }

        button.classList.toggle('darkmode-toggle--white');
        document.body.classList.toggle('darkmode--activated');
        window.localStorage.setItem('darkmode', !isDarkmode);
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (!IS_BROWSER) {
        return;
      }

      var layer = this.layer;
      var isDarkmode = this.isActivated();
      var button = this.button;
      layer.classList.toggle('darkmode-layer--simple');
      document.body.classList.toggle('darkmode--activated');
      window.localStorage.setItem('darkmode', !isDarkmode);
      button.setAttribute("aria-label", "De-activate dark mode");
      button.setAttribute("aria-checked", "true");
    }
  }, {
    key: "isActivated",
    value: function isActivated() {
      if (!IS_BROWSER) {
        return null;
      }

      return document.body.classList.contains('darkmode--activated');
    }
  }]);

  return Darkmode;
}();

exports.default = Darkmode;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_12131__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _darkmode = _interopRequireWildcard(__nested_webpack_require_12131__(/*! ./darkmode */ "./src/darkmode.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = _darkmode.default;
/* eslint-disable */

exports.default = _default;

if (_darkmode.IS_BROWSER) {
  (function (window) {
    window.Darkmode = _darkmode.default;
  })(window);
}
/* eslint-enable */


module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXJrbW9kZS1qcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvZGFya21vZGUuanMiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiSVNfQlJPV1NFUiIsIndpbmRvdyIsIkRhcmttb2RlIiwib3B0aW9ucyIsImRlZmF1bHRPcHRpb25zIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0IiwidGltZSIsIm1peENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYnV0dG9uQ29sb3JEYXJrIiwiYnV0dG9uQ29sb3JMaWdodCIsImxhYmVsIiwic2F2ZUluQ29va2llcyIsImF1dG9NYXRjaE9zVGhlbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJjc3MiLCJsYXllciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsImJhY2tncm91bmQiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXJrbW9kZUFjdGl2YXRlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcmVmZXJlZFRoZW1lT3MiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYWRkU3R5bGUiLCJsaW5rRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcnNlRmxvYXQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiaXNEYXJrbW9kZSIsImlzQWN0aXZhdGVkIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsInRvZ2dsZSIsInNldEl0ZW0iLCJjb250YWlucyJdLCJtYXBwaW5n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OUIsY0FBUSxDQUFDYyxJQUFULENBQWNULFNBQWQsQ0FBd0J5QixNQUF4QixDQUErQixxQkFBL0I7QUFDQWpELFlBQU0sQ0FBQzJCLFlBQVAsQ0FBb0J1QixPQUFwQixDQUE0QixVQUE1QixFQUF3QyxDQUFDTCxVQUF6QztBQUNBeEIsWUFBTSxDQUFDaUIsWUFBUCxDQUFvQixZQUFwQixFQUFrQyx1QkFBbEM7QUFDQWpCLFlBQU0sQ0FBQ2lCLFlBQVAsQ0FBb0IsY0FBcEIsRUFBb0MsTUFBcEM7QUFFRDs7O2tDQUVhO0FBQ1osVUFBSSxDQUFDdkMsVUFBTCxFQUFpQjtBQUNmLGVBQU8sSUFBUDtBQUNEOztBQUNELGFBQU9vQixRQUFRLENBQUNjLElBQVQsQ0FBY1QsU0FBZCxDQUF3QjJCLFFBQXhCLENBQWlDLHFCQUFqQyxDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsT0g7Ozs7O0FBR0E7Ozs7QUFDQSwwQkFBZ0I7QUFDZCxHQUFDLFVBQVNuRCxNQUFULEVBQWlCO0FBQ2hCQSxVQUFNLENBQUNDLFFBQVA7QUFDRCxHQUZELEVBRUdELE1BRkg7QUFHRDtBQUNEIiwiZmlsZSI6ImRhcmttb2RlLWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkYXJrbW9kZS1qc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkYXJrbW9kZS1qc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkYXJrbW9kZS1qc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBJU19CUk9XU0VSID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhcmttb2RlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgYm90dG9tOiAnMzJweCcsXG4gICAgICByaWdodDogJzMycHgnLFxuICAgICAgbGVmdDogJ3Vuc2V0JyxcbiAgICAgIHRpbWU6ICcwLjNzJyxcbiAgICAgIG1peENvbG9yOiAnI2ZmZicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIGJ1dHRvbkNvbG9yRGFyazogJyMxMDBmMmMnLFxuICAgICAgYnV0dG9uQ29sb3JMaWdodDogJyNmZmYnLFxuICAgICAgbGFiZWw6ICcnLFxuICAgICAgc2F2ZUluQ29va2llczogdHJ1ZSxcbiAgICAgIGF1dG9NYXRjaE9zVGhlbWU6IHRydWVcbiAgICB9O1xuXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgIGNvbnN0IGNzcyA9IGBcbiAgICAgIC5kYXJrbW9kZS1sYXllciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7b3B0aW9ucy5taXhDb2xvcn07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAke29wdGlvbnMudGltZX0gZWFzZTtcbiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS1sYXllci0tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDIuOXJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjlyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcmlnaHQ6ICR7b3B0aW9ucy5yaWdodH07XG4gICAgICAgIGJvdHRvbTogJHtvcHRpb25zLmJvdHRvbX07XG4gICAgICAgIGxlZnQ6ICR7b3B0aW9ucy5sZWZ0fTtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLWxheWVyLS1zaW1wbGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLWxheWVyLS1leHBhbmRlZCB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uIHtcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLXRvZ2dsZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7b3B0aW9ucy5idXR0b25Db2xvckRhcmt9O1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIHJpZ2h0OiAke29wdGlvbnMucmlnaHR9O1xuICAgICAgICBib3R0b206ICR7b3B0aW9ucy5ib3R0b219O1xuICAgICAgICBsZWZ0OiAke29wdGlvbnMubGVmdH07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS10b2dnbGUtLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtvcHRpb25zLmJ1dHRvbkNvbG9yTGlnaHR9O1xuICAgICAgfVxuXG4gICAgICAuZGFya21vZGUtdG9nZ2xlLS1pbmFjdGl2ZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtvcHRpb25zLmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHotaW5kZXg6IC0xMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICBpbWcsIC5kYXJrbW9kZS1pZ25vcmUge1xuICAgICAgICBpc29sYXRpb246IGlzb2xhdGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgICAgICAgLmRhcmttb2RlLXRvZ2dsZSB7ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50fVxuICAgICAgfVxuXG4gICAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0byksICgtbXMtYWNjZWxlcmF0b3I6dHJ1ZSkge1xuICAgICAgICAuZGFya21vZGUtdG9nZ2xlIHtkaXNwbGF5OiBub25lICFpbXBvcnRhbnR9XG4gICAgICB9XG4gICAgYDtcblxuICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IG9wdGlvbnMubGFiZWw7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLXRvZ2dsZS0taW5hY3RpdmUnKTtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllcicpO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtYmFja2dyb3VuZCcpO1xuXG4gICAgY29uc3QgZGFya21vZGVBY3RpdmF0ZWQgPVxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrbW9kZScpID09PSAndHJ1ZSc7XG4gICAgY29uc3QgcHJlZmVyZWRUaGVtZU9zID1cbiAgICAgIG9wdGlvbnMuYXV0b01hdGNoT3NUaGVtZSAmJlxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xuICAgIGNvbnN0IGRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiA9XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rhcmttb2RlJykgPT09IG51bGw7XG5cbiAgICBpZiAoXG4gICAgICAoZGFya21vZGVBY3RpdmF0ZWQgPT09IHRydWUgJiYgb3B0aW9ucy5zYXZlSW5Db29raWVzKSB8fFxuICAgICAgKGRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiAmJiBwcmVmZXJlZFRoZW1lT3MpXG4gICAgKSB7XG4gICAgICBsYXllci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAnZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkJyxcbiAgICAgICAgJ2Rhcmttb2RlLWxheWVyLS1zaW1wbGUnLFxuICAgICAgICAnZGFya21vZGUtbGF5ZXItLW5vLXRyYW5zaXRpb24nXG4gICAgICApO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLXRvZ2dsZS0td2hpdGUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtLWFjdGl2YXRlZCcpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGJ1dHRvbiwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShsYXllciwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShiYWNrZ3JvdW5kLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuXG4gICAgdGhpcy5hZGRTdHlsZShjc3MpO1xuXG4gICAgdGhpcy5idXR0b24gPSBidXR0b247XG4gICAgdGhpcy5sYXllciA9IGxheWVyO1xuICAgIHRoaXMuc2F2ZUluQ29va2llcyA9IG9wdGlvbnMuc2F2ZUluQ29va2llcztcbiAgICB0aGlzLnRpbWUgPSBvcHRpb25zLnRpbWU7XG4gIH1cblxuICBhZGRTdHlsZShjc3MpIHtcbiAgICBjb25zdCBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAnaHJlZicsXG4gICAgICAnZGF0YTp0ZXh0L2NzcztjaGFyc2V0PVVURi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoY3NzKVxuICAgICk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XG4gIH1cblxuICBzaG93V2lkZ2V0KCkge1xuICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvbjtcbiAgICBjb25zdCBsYXllciA9IHRoaXMubGF5ZXI7XG4gICAgY29uc3QgdGltZSA9IHBhcnNlRmxvYXQodGhpcy50aW1lKSAqIDEwMDA7XG5cbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtdG9nZ2xlJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLXRvZ2dsZS0taW5hY3RpdmUnKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkFjdGl2YXRlIGRhcmsgbW9kZVwiKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIsIFwiZmFsc2VcIik7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllci0tYnV0dG9uJyk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpc0Rhcmttb2RlID0gdGhpcy5pc0FjdGl2YXRlZCgpO1xuXG4gICAgICBpZiAoIWlzRGFya21vZGUpIHtcbiAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtbGF5ZXItLXNpbXBsZScpO1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0sIHRpbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUtbGF5ZXItLXNpbXBsZScpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsYXllci5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrbW9kZS1sYXllci0tbm8tdHJhbnNpdGlvbicpO1xuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLWxheWVyLS1leHBhbmRlZCcpO1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0sIDEpO1xuICAgICAgfVxuXG4gICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUtdG9nZ2xlLS13aGl0ZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrbW9kZS0tYWN0aXZhdGVkJyk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rhcmttb2RlJywgIWlzRGFya21vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYXllciA9IHRoaXMubGF5ZXI7XG4gICAgY29uc3QgaXNEYXJrbW9kZSA9IHRoaXMuaXNBY3RpdmF0ZWQoKTtcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvbjtcblxuICAgIGxheWVyLmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLWxheWVyLS1zaW1wbGUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rhcmttb2RlJywgIWlzRGFya21vZGUpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiRGUtYWN0aXZhdGUgZGFyayBtb2RlXCIpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuXG4gIH1cblxuICBpc0FjdGl2YXRlZCgpIHtcbiAgICBpZiAoIUlTX0JST1dTRVIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcbiAgfVxufVxuIiwiaW1wb3J0IERhcmttb2RlLCB7IElTX0JST1dTRVIgfSBmcm9tICcuL2Rhcmttb2RlJztcclxuZXhwb3J0IGRlZmF1bHQgRGFya21vZGU7XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5pZiAoSVNfQlJPV1NFUikge1xyXG4gIChmdW5jdGlvbih3aW5kb3cpIHtcclxuICAgIHdpbmRvdy5EYXJrbW9kZSA9IERhcmttb2RlO1xyXG4gIH0pKHdpbmRvdyk7XHJcbn1cclxuLyogZXNsaW50LWVuYWJsZSAqL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData),
/* harmony export */   "getImageData": () => (/* binding */ getImageData),
/* harmony export */   "convertKelvinToCelsius": () => (/* binding */ convertKelvinToCelsius),
/* harmony export */   "convertCelsiusToFarenheit": () => (/* binding */ convertCelsiusToFarenheit)
/* harmony export */ });
async function getWeatherData() {
  try {
    const API_KEY = "71a8d60b6ad049e9a5213a0839b3565a";
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${
        document.querySelector("input").value
      }&APPID=${API_KEY}`
    );
    const data = response.json();

    return data;
  } catch (err) {
    return err;
  }
}

async function getImageData() {
  try {
    const API_KEY = "CkoGftj7IkqFnNRkm1dFFnIXV6b2ZTO7";
    const weatherData = await getWeatherData();
    let weatherDescription = weatherData.weather[0].main;
    if (weatherDescription === "Clear") {
      weatherDescription = "Clear sky";
    }
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${weatherDescription}`,
      { mode: `cors` }
    );
    const data = response.json();

    return data;
  } catch (err) {
    return err;
  }
}

function convertKelvinToCelsius(temp) {
  const result = Math.round(temp - 273.15);
  return result;
}

function convertCelsiusToFarenheit(temp) {
  const result = Math.round((temp * 9) / 5 + 32);
  return result;
}


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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var darkmode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! darkmode-js */ "./node_modules/darkmode-js/lib/darkmode-js.js");
/* harmony import */ var darkmode_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(darkmode_js__WEBPACK_IMPORTED_MODULE_1__);




new (darkmode_js__WEBPACK_IMPORTED_MODULE_1___default())().showWidget();

const section = document.querySelector("section");
const form = document.querySelector("form");
const searchBox = document.querySelector("input");
const dataErrorMessage = document.querySelector(".error");
const inputErrorMessage = document.getElementById("input-error");

function showFormInputError() {
  if (searchBox.validity.patternMismatch) {
    inputErrorMessage.textContent = "Numbers and symbols are not supported!";
  }
  if (searchBox.validity.valueMissing) {
    inputErrorMessage.textContent = "Please enter location";
  }
}

async function renderTextualData() {
  try {
    const data = await (0,_app__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)();
    const mainContainer = document.createElement("div");
    const titleH = document.createElement("h3");
    const countryIcon = document.createElement("img");
    const tempContainer = document.createElement("menu");
    const descContainer = document.createElement("menu");
    const detailedDescContainer = document.createElement("menu");
    const temperaturePara = document.createElement("p");
    const descriptionPara = document.createElement("p");
    const detailedDescriptionPara = document.createElement("p");
    const tempParaIcon = document.createElement("span");
    const tempDescIcon = document.createElement("span");
    const tempDetailedDescIcon = document.createElement("span");
    const toggleTempBtn = document.createElement("button");
    const isConvertedTemptoCelsius = (0,_app__WEBPACK_IMPORTED_MODULE_0__.convertKelvinToCelsius)(data.main.temp);
    const isConvertedTempToFarenheit = (0,_app__WEBPACK_IMPORTED_MODULE_0__.convertCelsiusToFarenheit)(
      isConvertedTemptoCelsius
    );
    mainContainer.setAttribute("class", "main-container");
    titleH.textContent = data.name;
    temperaturePara.textContent = `${isConvertedTemptoCelsius}  °C`;
    descriptionPara.textContent = data.weather[0].main;
    detailedDescriptionPara.textContent = data.weather[0].description;

    tempParaIcon.className = "material-icons";
    tempDescIcon.className = "material-icons";
    tempDetailedDescIcon.className = "material-icons";
    countryIcon.src = `https://www.countryflags.io/${data.sys.country}/shiny/32.png`;
    toggleTempBtn.textContent = `°F`;
    tempParaIcon.textContent = "thermostat";
    tempDetailedDescIcon.textContent = "info";
    switch (data.weather[0].main) {
      case "Clear":
        tempDescIcon.textContent = "wb_sunny";
        break;
      case "Clouds":
        tempDescIcon.textContent = "cloud";
        break;
      case "Rain":
        tempDescIcon.textContent = "water_drop";
        break;
      case "Storm":
        tempDescIcon.textContent = "flash_on";
        break;
      default:
        tempDescIcon.textContent = "filter_drama";
    }

    toggleTempBtn.addEventListener("click", () => {
      temperaturePara.classList.toggle("changed");
      temperaturePara.className === "changed"
        ? (temperaturePara.textContent = `${isConvertedTempToFarenheit} °F`)
        : (temperaturePara.textContent = `${isConvertedTemptoCelsius}  °C`);

      if (temperaturePara.textContent.includes("C")) {
        toggleTempBtn.textContent = "°F";
      } else if (temperaturePara.textContent.includes("F")) {
        toggleTempBtn.textContent = `°C`;
      }
    });

    

    tempContainer.appendChild(temperaturePara);
    tempContainer.appendChild(tempParaIcon);
    descContainer.appendChild(descriptionPara);
    descContainer.appendChild(tempDescIcon);
    detailedDescContainer.appendChild(detailedDescriptionPara);
    detailedDescContainer.appendChild(tempDetailedDescIcon);
    titleH.appendChild(countryIcon);
    titleH.appendChild(toggleTempBtn);
    mainContainer.appendChild(titleH);
    mainContainer.appendChild(tempContainer);
    mainContainer.appendChild(descContainer);
    mainContainer.appendChild(detailedDescContainer);
    section.appendChild(mainContainer);
  } catch (err) {
    dataErrorMessage.textContent = "Location not found!";

    setTimeout(() => {
      dataErrorMessage.textContent = "";
    }, 2000);
  }
}

async function renderImageData() {
  const imgBorder = document.createElement("div");
  const img = document.createElement("img");
  imgBorder.setAttribute("class", "image-container");
  imgBorder.appendChild(img);
  section.appendChild(imgBorder);
  try {
    const data = await (0,_app__WEBPACK_IMPORTED_MODULE_0__.getImageData)();
    img.src = await data.data.images.fixed_width.url;
    imgBorder.style.backgroundImage = `url("${img.src}")`;
  } catch (err) {
    imgBorder.textContent = "Couldn't find image!";
    setTimeout(() => {
      imgBorder.remove();
    }, 2000);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (searchBox.validity.valid) {
    renderImageData();
    renderTextualData();
    inputErrorMessage.textContent = "";
  } else {
    showFormInputError();
  }
});

searchBox.addEventListener("input", () => {
  if (searchBox.validity.valid) {
    inputErrorMessage.textContent = "";
  } else {
    showFormInputError();
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDRDQUE0Qyw0QkFBNEI7QUFDeEUsNENBQTRDLDJCQUEyQjs7QUFFdkU7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0RBQVk7QUFDbkM7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2E1LXByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9kYXJrbW9kZS1qcy9saWIvZGFya21vZGUtanMuanMiLCJ3ZWJwYWNrOi8vYTUtcHJvamVjdC13ZWF0aGVyYXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9hNS1wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYTUtcHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2E1LXByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYTUtcHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYTUtcHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYTUtcHJvamVjdC13ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZGFya21vZGUtanNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGFya21vZGUtanNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGFya21vZGUtanNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vc3JjL2Rhcmttb2RlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2Rhcmttb2RlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLklTX0JST1dTRVIgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuSVNfQlJPV1NFUiA9IElTX0JST1dTRVI7XG5cbnZhciBEYXJrbW9kZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERhcmttb2RlKG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGFya21vZGUpO1xuXG4gICAgaWYgKCFJU19CUk9XU0VSKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgYm90dG9tOiAnMzJweCcsXG4gICAgICByaWdodDogJzMycHgnLFxuICAgICAgbGVmdDogJ3Vuc2V0JyxcbiAgICAgIHRpbWU6ICcwLjNzJyxcbiAgICAgIG1peENvbG9yOiAnI2ZmZicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIGJ1dHRvbkNvbG9yRGFyazogJyMxMDBmMmMnLFxuICAgICAgYnV0dG9uQ29sb3JMaWdodDogJyNmZmYnLFxuICAgICAgbGFiZWw6ICcnLFxuICAgICAgc2F2ZUluQ29va2llczogdHJ1ZSxcbiAgICAgIGF1dG9NYXRjaE9zVGhlbWU6IHRydWVcbiAgICB9O1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgdmFyIGNzcyA9IFwiXFxuICAgICAgLmRhcmttb2RlLWxheWVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZDogXCIuY29uY2F0KG9wdGlvbnMubWl4Q29sb3IsIFwiO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIFwiKS5jb25jYXQob3B0aW9ucy50aW1lLCBcIiBlYXNlO1xcbiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XFxuICAgICAgfVxcblxcbiAgICAgIC5kYXJrbW9kZS1sYXllci0tYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiAyLjlyZW07XFxuICAgICAgICBoZWlnaHQ6IDIuOXJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIHJpZ2h0OiBcIikuY29uY2F0KG9wdGlvbnMucmlnaHQsIFwiO1xcbiAgICAgICAgYm90dG9tOiBcIikuY29uY2F0KG9wdGlvbnMuYm90dG9tLCBcIjtcXG4gICAgICAgIGxlZnQ6IFwiKS5jb25jYXQob3B0aW9ucy5sZWZ0LCBcIjtcXG4gICAgICB9XFxuXFxuICAgICAgLmRhcmttb2RlLWxheWVyLS1zaW1wbGUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSAhaW1wb3J0YW50O1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgfVxcblxcbiAgICAgIC5kYXJrbW9kZS1sYXllci0tbm8tdHJhbnNpdGlvbiB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGFya21vZGUtdG9nZ2xlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IFwiKS5jb25jYXQob3B0aW9ucy5idXR0b25Db2xvckRhcmssIFwiO1xcbiAgICAgICAgd2lkdGg6IDNyZW07XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBib3JkZXI6bm9uZTtcXG4gICAgICAgIHJpZ2h0OiBcIikuY29uY2F0KG9wdGlvbnMucmlnaHQsIFwiO1xcbiAgICAgICAgYm90dG9tOiBcIikuY29uY2F0KG9wdGlvbnMuYm90dG9tLCBcIjtcXG4gICAgICAgIGxlZnQ6IFwiKS5jb25jYXQob3B0aW9ucy5sZWZ0LCBcIjtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGFya21vZGUtdG9nZ2xlLS13aGl0ZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBcIikuY29uY2F0KG9wdGlvbnMuYnV0dG9uQ29sb3JMaWdodCwgXCI7XFxuICAgICAgfVxcblxcbiAgICAgIC5kYXJrbW9kZS10b2dnbGUtLWluYWN0aXZlIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgIC5kYXJrbW9kZS1iYWNrZ3JvdW5kIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IFwiKS5jb25jYXQob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IsIFwiO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICB6LWluZGV4OiAtMTA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgfVxcblxcbiAgICAgIGltZywgLmRhcmttb2RlLWlnbm9yZSB7XFxuICAgICAgICBpc29sYXRpb246IGlzb2xhdGU7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgfVxcblxcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XFxuICAgICAgICAuZGFya21vZGUtdG9nZ2xlIHtkaXNwbGF5OiBub25lICFpbXBvcnRhbnR9XFxuICAgICAgfVxcblxcbiAgICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKSwgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSB7XFxuICAgICAgICAuZGFya21vZGUtdG9nZ2xlIHtkaXNwbGF5OiBub25lICFpbXBvcnRhbnR9XFxuICAgICAgfVxcbiAgICBcIik7XG4gICAgdmFyIGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHZhciBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IG9wdGlvbnMubGFiZWw7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLXRvZ2dsZS0taW5hY3RpdmUnKTtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllcicpO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtYmFja2dyb3VuZCcpO1xuICAgIHZhciBkYXJrbW9kZUFjdGl2YXRlZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya21vZGUnKSA9PT0gJ3RydWUnO1xuICAgIHZhciBwcmVmZXJlZFRoZW1lT3MgPSBvcHRpb25zLmF1dG9NYXRjaE9zVGhlbWUgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xuICAgIHZhciBkYXJrbW9kZU5ldmVyQWN0aXZhdGVkQnlBY3Rpb24gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rhcmttb2RlJykgPT09IG51bGw7XG5cbiAgICBpZiAoZGFya21vZGVBY3RpdmF0ZWQgPT09IHRydWUgJiYgb3B0aW9ucy5zYXZlSW5Db29raWVzIHx8IGRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiAmJiBwcmVmZXJlZFRoZW1lT3MpIHtcbiAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1leHBhbmRlZCcsICdkYXJrbW9kZS1sYXllci0tc2ltcGxlJywgJ2Rhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uJyk7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtdG9nZ2xlLS13aGl0ZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS0tYWN0aXZhdGVkJyk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoYnV0dG9uLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGxheWVyLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGJhY2tncm91bmQsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgdGhpcy5hZGRTdHlsZShjc3MpO1xuICAgIHRoaXMuYnV0dG9uID0gYnV0dG9uO1xuICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcbiAgICB0aGlzLnNhdmVJbkNvb2tpZXMgPSBvcHRpb25zLnNhdmVJbkNvb2tpZXM7XG4gICAgdGhpcy50aW1lID0gb3B0aW9ucy50aW1lO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERhcmttb2RlLCBbe1xuICAgIGtleTogXCJhZGRTdHlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRTdHlsZShjc3MpIHtcbiAgICAgIHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgJ2RhdGE6dGV4dC9jc3M7Y2hhcnNldD1VVEYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KGNzcykpO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNob3dXaWRnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd1dpZGdldCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBidXR0b24gPSB0aGlzLmJ1dHRvbjtcbiAgICAgIHZhciBsYXllciA9IHRoaXMubGF5ZXI7XG4gICAgICB2YXIgdGltZSA9IHBhcnNlRmxvYXQodGhpcy50aW1lKSAqIDEwMDA7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtdG9nZ2xlJyk7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUtdG9nZ2xlLS1pbmFjdGl2ZScpO1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJBY3RpdmF0ZSBkYXJrIG1vZGVcIik7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIsIFwiZmFsc2VcIik7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtbGF5ZXItLWJ1dHRvbicpO1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNEYXJrbW9kZSA9IF90aGlzLmlzQWN0aXZhdGVkKCk7XG5cbiAgICAgICAgaWYgKCFpc0Rhcmttb2RlKSB7XG4gICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkJyk7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllci0tc2ltcGxlJyk7XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgIH0sIHRpbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLWxheWVyLS1zaW1wbGUnKTtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUtbGF5ZXItLW5vLXRyYW5zaXRpb24nKTtcbiAgICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLWxheWVyLS1leHBhbmRlZCcpO1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrbW9kZS10b2dnbGUtLXdoaXRlJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUtLWFjdGl2YXRlZCcpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rhcmttb2RlJywgIWlzRGFya21vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRvZ2dsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICBpZiAoIUlTX0JST1dTRVIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyO1xuICAgICAgdmFyIGlzRGFya21vZGUgPSB0aGlzLmlzQWN0aXZhdGVkKCk7XG4gICAgICB2YXIgYnV0dG9uID0gdGhpcy5idXR0b247XG4gICAgICBsYXllci5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrbW9kZS1sYXllci0tc2ltcGxlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya21vZGUnLCAhaXNEYXJrbW9kZSk7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkRlLWFjdGl2YXRlIGRhcmsgbW9kZVwiKTtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0FjdGl2YXRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0FjdGl2YXRlZCgpIHtcbiAgICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrbW9kZS0tYWN0aXZhdGVkJyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERhcmttb2RlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBEYXJrbW9kZTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9kYXJrbW9kZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZGFya21vZGUgKi8gXCIuL3NyYy9kYXJrbW9kZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF9kZWZhdWx0ID0gX2Rhcmttb2RlLmRlZmF1bHQ7XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuaWYgKF9kYXJrbW9kZS5JU19CUk9XU0VSKSB7XG4gIChmdW5jdGlvbiAod2luZG93KSB7XG4gICAgd2luZG93LkRhcmttb2RlID0gX2Rhcmttb2RlLmRlZmF1bHQ7XG4gIH0pKHdpbmRvdyk7XG59XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OWtZWEpyYlc5a1pTMXFjeTkzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0ozWldKd1lXTnJPaTh2WkdGeWEyMXZaR1V0YW5NdmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZaR0Z5YTIxdlpHVXRhbk12TGk5emNtTXZaR0Z5YTIxdlpHVXVhbk1pTENKM1pXSndZV05yT2k4dlpHRnlhMjF2WkdVdGFuTXZMaTl6Y21NdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sc2lTVk5mUWxKUFYxTkZVaUlzSW5kcGJtUnZkeUlzSWtSaGNtdHRiMlJsSWl3aWIzQjBhVzl1Y3lJc0ltUmxabUYxYkhSUGNIUnBiMjV6SWl3aVltOTBkRzl0SWl3aWNtbG5hSFFpTENKc1pXWjBJaXdpZEdsdFpTSXNJbTFwZUVOdmJHOXlJaXdpWW1GamEyZHliM1Z1WkVOdmJHOXlJaXdpWW5WMGRHOXVRMjlzYjNKRVlYSnJJaXdpWW5WMGRHOXVRMjlzYjNKTWFXZG9kQ0lzSW14aFltVnNJaXdpYzJGMlpVbHVRMjl2YTJsbGN5SXNJbUYxZEc5TllYUmphRTl6VkdobGJXVWlMQ0pQWW1wbFkzUWlMQ0poYzNOcFoyNGlMQ0pqYzNNaUxDSnNZWGxsY2lJc0ltUnZZM1Z0Wlc1MElpd2lZM0psWVhSbFJXeGxiV1Z1ZENJc0ltSjFkSFJ2YmlJc0ltSmhZMnRuY205MWJtUWlMQ0pwYm01bGNraFVUVXdpTENKamJHRnpjMHhwYzNRaUxDSmhaR1FpTENKa1lYSnJiVzlrWlVGamRHbDJZWFJsWkNJc0lteHZZMkZzVTNSdmNtRm5aU0lzSW1kbGRFbDBaVzBpTENKd2NtVm1aWEpsWkZSb1pXMWxUM01pTENKdFlYUmphRTFsWkdsaElpd2liV0YwWTJobGN5SXNJbVJoY210dGIyUmxUbVYyWlhKQlkzUnBkbUYwWldSQ2VVRmpkR2x2YmlJc0ltSnZaSGtpTENKcGJuTmxjblJDWldadmNtVWlMQ0ptYVhKemRFTm9hV3hrSWl3aVlXUmtVM1I1YkdVaUxDSnNhVzVyUld4bGJXVnVkQ0lzSW5ObGRFRjBkSEpwWW5WMFpTSXNJbVZ1WTI5a1pWVlNTVU52YlhCdmJtVnVkQ0lzSW1obFlXUWlMQ0poY0hCbGJtUkRhR2xzWkNJc0luQmhjbk5sUm14dllYUWlMQ0p5WlcxdmRtVWlMQ0poWkdSRmRtVnVkRXhwYzNSbGJtVnlJaXdpYVhORVlYSnJiVzlrWlNJc0ltbHpRV04wYVhaaGRHVmtJaXdpYzJWMFZHbHRaVzkxZENJc0luSmxiVzkyWlVGMGRISnBZblYwWlNJc0luUnZaMmRzWlNJc0luTmxkRWwwWlcwaUxDSmpiMjUwWVdsdWN5SmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEd0RVFVRXdReXhuUTBGQlowTTdRVUZETVVVN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blJVRkJkMFFzYTBKQlFXdENPMEZCUXpGRk8wRkJRMEVzZVVSQlFXbEVMR05CUVdNN1FVRkRMMFE3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xFUVVGNVF5eHBRMEZCYVVNN1FVRkRNVVVzZDBoQlFXZElMRzFDUVVGdFFpeEZRVUZGTzBGQlEzSkpPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVU5CUVRKQ0xEQkNRVUV3UWl4RlFVRkZPMEZCUTNaRUxIbERRVUZwUXl4bFFVRmxPMEZCUTJoRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRGhFUVVGelJDd3JSRUZCSzBRN08wRkJSWEpJTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEYkVaUExFbEJRVTFCTEZWQlFWVXNSMEZCUnl4UFFVRlBReXhOUVVGUUxFdEJRV3RDTEZkQlFYSkRPenM3U1VGRlkwTXNVVHM3TzBGQlEyNUNMRzlDUVVGWlF5eFBRVUZhTEVWQlFYRkNPMEZCUVVFN08wRkJRMjVDTEZGQlFVa3NRMEZCUTBnc1ZVRkJUQ3hGUVVGcFFqdEJRVU5tTzBGQlEwUTdPMEZCUlVRc1VVRkJUVWtzWTBGQll5eEhRVUZITzBGQlEzSkNReXhaUVVGTkxFVkJRVVVzVFVGRVlUdEJRVVZ5UWtNc1YwRkJTeXhGUVVGRkxFMUJSbU03UVVGSGNrSkRMRlZCUVVrc1JVRkJSU3hQUVVobE8wRkJTWEpDUXl4VlFVRkpMRVZCUVVVc1RVRktaVHRCUVV0eVFrTXNZMEZCVVN4RlFVRkZMRTFCVEZjN1FVRk5ja0pETEhGQ1FVRmxMRVZCUVVVc1RVRk9TVHRCUVU5eVFrTXNjVUpCUVdVc1JVRkJSU3hUUVZCSk8wRkJVWEpDUXl4elFrRkJaMElzUlVGQlJTeE5RVkpITzBGQlUzSkNReXhYUVVGTExFVkJRVVVzUlVGVVl6dEJRVlZ5UWtNc2JVSkJRV0VzUlVGQlJTeEpRVlpOTzBGQlYzSkNReXh6UWtGQlowSXNSVUZCUlR0QlFWaEhMRXRCUVhaQ08wRkJZMEZhTEZkQlFVOHNSMEZCUjJFc1RVRkJUU3hEUVVGRFF5eE5RVUZRTEVOQlFXTXNSVUZCWkN4RlFVRnJRbUlzWTBGQmJFSXNSVUZCYTBORUxFOUJRV3hETEVOQlFWWTdRVUZGUVN4UlFVRk5aU3hIUVVGSExIRklRVWxUWml4UFFVRlBMRU5CUVVOTkxGRkJTbXBDTEhkRFFVdGhUaXhQUVVGUExFTkJRVU5MTEVsQlRISkNMRzFOUVdGSlRDeFBRVUZQTEVOQlFVTkhMRXRCWWxvc1owTkJZMHRJTEU5QlFVOHNRMEZCUTBVc1RVRmtZaXc0UWtGbFIwWXNUMEZCVHl4RFFVRkRTU3hKUVdaWUxIRmhRVzlEVTBvc1QwRkJUeXhEUVVGRFVTeGxRWEJEYWtJc2VVcEJNRU5KVWl4UFFVRlBMRU5CUVVOSExFdEJNVU5hTEdkRFFUSkRTMGdzVDBGQlR5eERRVUZEUlN4TlFUTkRZaXc0UWtFMFEwZEdMRTlCUVU4c1EwRkJRMGtzU1VFMVExZ3NjMDlCY1VSVFNpeFBRVUZQTEVOQlFVTlRMR2RDUVhKRWFrSXNiMHBCTmtSVFZDeFBRVUZQTEVOQlFVTlBMR1ZCTjBScVFpdzRhVUpCUVZRN1FVRnhSa0VzVVVGQlRWTXNTMEZCU3l4SFFVRkhReXhSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVJc1MwRkJka0lzUTBGQlpEdEJRVU5CTEZGQlFVMURMRTFCUVUwc1IwRkJSMFlzVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ0xGRkJRWFpDTEVOQlFXWTdRVUZEUVN4UlFVRk5SU3hWUVVGVkxFZEJRVWRJTEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFpeExRVUYyUWl4RFFVRnVRanRCUVVWQlF5eFZRVUZOTEVOQlFVTkZMRk5CUVZBc1IwRkJiVUp5UWl4UFFVRlBMRU5CUVVOVkxFdEJRVE5DTzBGQlEwRlRMRlZCUVUwc1EwRkJRMGNzVTBGQlVDeERRVUZwUWtNc1IwRkJha0lzUTBGQmNVSXNNa0pCUVhKQ08wRkJRMEZRTEZOQlFVc3NRMEZCUTAwc1UwRkJUaXhEUVVGblFrTXNSMEZCYUVJc1EwRkJiMElzWjBKQlFYQkNPMEZCUTBGSUxHTkJRVlVzUTBGQlEwVXNVMEZCV0N4RFFVRnhRa01zUjBGQmNrSXNRMEZCZVVJc2NVSkJRWHBDTzBGQlJVRXNVVUZCVFVNc2FVSkJRV2xDTEVkQlEzSkNNVUlzVFVGQlRTeERRVUZETWtJc1dVRkJVQ3hEUVVGdlFrTXNUMEZCY0VJc1EwRkJORUlzVlVGQk5VSXNUVUZCTkVNc1RVRkVPVU03UVVGRlFTeFJRVUZOUXl4bFFVRmxMRWRCUTI1Q00wSXNUMEZCVHl4RFFVRkRXU3huUWtGQlVpeEpRVU5CWkN4TlFVRk5MRU5CUVVNNFFpeFZRVUZRTEVOQlFXdENMRGhDUVVGc1FpeEZRVUZyUkVNc1QwRkdjRVE3UVVGSFFTeFJRVUZOUXl3NFFrRkJPRUlzUjBGRGJFTm9ReXhOUVVGTkxFTkJRVU15UWl4WlFVRlFMRU5CUVc5Q1F5eFBRVUZ3UWl4RFFVRTBRaXhWUVVFMVFpeE5RVUUwUXl4SlFVUTVRenM3UVVGSFFTeFJRVU5IUml4cFFrRkJhVUlzUzBGQlN5eEpRVUYwUWl4SlFVRTRRbmhDTEU5QlFVOHNRMEZCUTFjc1lVRkJka01zU1VGRFEyMUNMRGhDUVVFNFFpeEpRVUZKU0N4bFFVWnlReXhGUVVkRk8wRkJRMEZZTEZkQlFVc3NRMEZCUTAwc1UwRkJUaXhEUVVGblFrTXNSMEZCYUVJc1EwRkRSU3d3UWtGRVJpeEZRVVZGTEhkQ1FVWkdMRVZCUjBVc0swSkJTRVk3UVVGTFFVb3NXVUZCVFN4RFFVRkRSeXhUUVVGUUxFTkJRV2xDUXl4SFFVRnFRaXhEUVVGeFFpeDNRa0ZCY2tJN1FVRkRRVTRzWTBGQlVTeERRVUZEWXl4SlFVRlVMRU5CUVdOVUxGTkJRV1FzUTBGQmQwSkRMRWRCUVhoQ0xFTkJRVFJDTEhGQ1FVRTFRanRCUVVORU96dEJRVVZFVGl4WlFVRlJMRU5CUVVOakxFbEJRVlFzUTBGQlkwTXNXVUZCWkN4RFFVRXlRbUlzVFVGQk0wSXNSVUZCYlVOR0xGRkJRVkVzUTBGQlEyTXNTVUZCVkN4RFFVRmpSU3hWUVVGcVJEdEJRVU5CYUVJc1dVRkJVU3hEUVVGRFl5eEpRVUZVTEVOQlFXTkRMRmxCUVdRc1EwRkJNa0pvUWl4TFFVRXpRaXhGUVVGclEwTXNVVUZCVVN4RFFVRkRZeXhKUVVGVUxFTkJRV05GTEZWQlFXaEVPMEZCUTBGb1FpeFpRVUZSTEVOQlFVTmpMRWxCUVZRc1EwRkJZME1zV1VGQlpDeERRVUV5UWxvc1ZVRkJNMElzUlVGQmRVTklMRkZCUVZFc1EwRkJRMk1zU1VGQlZDeERRVUZqUlN4VlFVRnlSRHRCUVVWQkxGTkJRVXRETEZGQlFVd3NRMEZCWTI1Q0xFZEJRV1E3UVVGRlFTeFRRVUZMU1N4TlFVRk1MRWRCUVdOQkxFMUJRV1E3UVVGRFFTeFRRVUZMU0N4TFFVRk1MRWRCUVdGQkxFdEJRV0k3UVVGRFFTeFRRVUZMVEN4aFFVRk1MRWRCUVhGQ1dDeFBRVUZQTEVOQlFVTlhMR0ZCUVRkQ08wRkJRMEVzVTBGQlMwNHNTVUZCVEN4SFFVRlpUQ3hQUVVGUExFTkJRVU5MTEVsQlFYQkNPMEZCUTBRN096czdOa0pCUlZGVkxFY3NSVUZCU3p0QlFVTmFMRlZCUVUxdlFpeFhRVUZYTEVkQlFVZHNRaXhSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVJc1RVRkJka0lzUTBGQmNFSTdRVUZGUVdsQ0xHbENRVUZYTEVOQlFVTkRMRmxCUVZvc1EwRkJlVUlzUzBGQmVrSXNSVUZCWjBNc1dVRkJhRU03UVVGRFFVUXNhVUpCUVZjc1EwRkJRME1zV1VGQldpeERRVUY1UWl4TlFVRjZRaXhGUVVGcFF5eFZRVUZxUXp0QlFVTkJSQ3hwUWtGQlZ5eERRVUZEUXl4WlFVRmFMRU5CUTBVc1RVRkVSaXhGUVVWRkxHbERRVUZwUTBNc2EwSkJRV3RDTEVOQlFVTjBRaXhIUVVGRUxFTkJSbkpFTzBGQlNVRkZMR05CUVZFc1EwRkJRM0ZDTEVsQlFWUXNRMEZCWTBNc1YwRkJaQ3hEUVVFd1Frb3NWMEZCTVVJN1FVRkRSRHM3TzJsRFFVVlpPMEZCUVVFN08wRkJRMWdzVlVGQlNTeERRVUZEZEVNc1ZVRkJUQ3hGUVVGcFFqdEJRVU5tTzBGQlEwUTdPMEZCUTBRc1ZVRkJUWE5DTEUxQlFVMHNSMEZCUnl4TFFVRkxRU3hOUVVGd1FqdEJRVU5CTEZWQlFVMUlMRXRCUVVzc1IwRkJSeXhMUVVGTFFTeExRVUZ1UWp0QlFVTkJMRlZCUVUxWUxFbEJRVWtzUjBGQlIyMURMRlZCUVZVc1EwRkJReXhMUVVGTGJrTXNTVUZCVGl4RFFVRldMRWRCUVhkQ0xFbEJRWEpETzBGQlJVRmpMRmxCUVUwc1EwRkJRMGNzVTBGQlVDeERRVUZwUWtNc1IwRkJha0lzUTBGQmNVSXNhVUpCUVhKQ08wRkJRMEZLTEZsQlFVMHNRMEZCUTBjc1UwRkJVQ3hEUVVGcFFtMUNMRTFCUVdwQ0xFTkJRWGRDTERKQ1FVRjRRanRCUVVOQmRFSXNXVUZCVFN4RFFVRkRhVUlzV1VGQlVDeERRVUZ2UWl4WlFVRndRaXhGUVVGclF5eHZRa0ZCYkVNN1FVRkRRV3BDTEZsQlFVMHNRMEZCUTJsQ0xGbEJRVkFzUTBGQmIwSXNZMEZCY0VJc1JVRkJiME1zVDBGQmNFTTdRVUZEUVdwQ0xGbEJRVTBzUTBGQlEybENMRmxCUVZBc1EwRkJiMElzVFVGQmNFSXNSVUZCTkVJc1ZVRkJOVUk3UVVGRFFYQkNMRmRCUVVzc1EwRkJRMDBzVTBGQlRpeERRVUZuUWtNc1IwRkJhRUlzUTBGQmIwSXNkMEpCUVhCQ08wRkJSVUZLTEZsQlFVMHNRMEZCUTNWQ0xHZENRVUZRTEVOQlFYZENMRTlCUVhoQ0xFVkJRV2xETEZsQlFVMDdRVUZEY2tNc1dVRkJUVU1zVlVGQlZTeEhRVUZITEV0QlFVa3NRMEZCUTBNc1YwRkJUQ3hGUVVGdVFqczdRVUZGUVN4WlFVRkpMRU5CUVVORUxGVkJRVXdzUlVGQmFVSTdRVUZEWmpOQ0xHVkJRVXNzUTBGQlEwMHNVMEZCVGl4RFFVRm5Ra01zUjBGQmFFSXNRMEZCYjBJc01FSkJRWEJDTzBGQlEwRktMR2RDUVVGTkxFTkJRVU5wUWl4WlFVRlFMRU5CUVc5Q0xGVkJRWEJDTEVWQlFXZERMRWxCUVdoRE8wRkJRMEZUTEc5Q1FVRlZMRU5CUVVNc1dVRkJUVHRCUVVObU4wSXNhVUpCUVVzc1EwRkJRMDBzVTBGQlRpeERRVUZuUWtNc1IwRkJhRUlzUTBGQmIwSXNLMEpCUVhCQ08wRkJRMEZRTEdsQ1FVRkxMRU5CUVVOTkxGTkJRVTRzUTBGQlowSkRMRWRCUVdoQ0xFTkJRVzlDTEhkQ1FVRndRanRCUVVOQlNpeHJRa0ZCVFN4RFFVRkRNa0lzWlVGQlVDeERRVUYxUWl4VlFVRjJRanRCUVVORUxGZEJTbE1zUlVGSlVIcERMRWxCU2s4c1EwRkJWanRCUVV0RUxGTkJVa1FzVFVGUlR6dEJRVU5NVnl4bFFVRkxMRU5CUVVOTkxGTkJRVTRzUTBGQlowSnRRaXhOUVVGb1FpeERRVUYxUWl4M1FrRkJka0k3UVVGRFFYUkNMR2RDUVVGTkxFTkJRVU5wUWl4WlFVRlFMRU5CUVc5Q0xGVkJRWEJDTEVWQlFXZERMRWxCUVdoRE8wRkJRMEZUTEc5Q1FVRlZMRU5CUVVNc1dVRkJUVHRCUVVObU4wSXNhVUpCUVVzc1EwRkJRMDBzVTBGQlRpeERRVUZuUW0xQ0xFMUJRV2hDTEVOQlFYVkNMQ3RDUVVGMlFqdEJRVU5CZWtJc2FVSkJRVXNzUTBGQlEwMHNVMEZCVGl4RFFVRm5RbTFDTEUxQlFXaENMRU5CUVhWQ0xEQkNRVUYyUWp0QlFVTkJkRUlzYTBKQlFVMHNRMEZCUXpKQ0xHVkJRVkFzUTBGQmRVSXNWVUZCZGtJN1FVRkRSQ3hYUVVwVExFVkJTVkFzUTBGS1R5eERRVUZXTzBGQlMwUTdPMEZCUlVRelFpeGpRVUZOTEVOQlFVTkhMRk5CUVZBc1EwRkJhVUo1UWl4TlFVRnFRaXhEUVVGM1FpeDNRa0ZCZUVJN1FVRkRRVGxDTEdkQ1FVRlJMRU5CUVVOakxFbEJRVlFzUTBGQlkxUXNVMEZCWkN4RFFVRjNRbmxDTEUxQlFYaENMRU5CUVN0Q0xIRkNRVUV2UWp0QlFVTkJha1FzWTBGQlRTeERRVUZETWtJc1dVRkJVQ3hEUVVGdlFuVkNMRTlCUVhCQ0xFTkJRVFJDTEZWQlFUVkNMRVZCUVhkRExFTkJRVU5NTEZWQlFYcERPMEZCUTBRc1QwRjRRa1E3UVVGNVFrUTdPenMyUWtGRlVUdEJRVU5RTEZWQlFVa3NRMEZCUXpsRExGVkJRVXdzUlVGQmFVSTdRVUZEWmp0QlFVTkVPenRCUVVORUxGVkJRVTF0UWl4TFFVRkxMRWRCUVVjc1MwRkJTMEVzUzBGQmJrSTdRVUZEUVN4VlFVRk5Na0lzVlVGQlZTeEhRVUZITEV0QlFVdERMRmRCUVV3c1JVRkJia0k3UVVGRFFTeFZRVUZOZWtJc1RVRkJUU3hIUVVGSExFdEJRVXRCTEUxQlFYQkNPMEZCUlVGSUxGZEJRVXNzUTBGQlEwMHNVMEZCVGl4RFFVRm5RbmxDTEUxQlFXaENMRU5CUVhWQ0xIZENRVUYyUWp0QlFVTkJPVUlzWTBGQlVTeERRVUZEWXl4SlFVRlVMRU5CUVdOVUxGTkJRV1FzUTBGQmQwSjVRaXhOUVVGNFFpeERRVUVyUWl4eFFrRkJMMEk3UVVGRFFXcEVMRmxCUVUwc1EwRkJRekpDTEZsQlFWQXNRMEZCYjBKMVFpeFBRVUZ3UWl4RFFVRTBRaXhWUVVFMVFpeEZRVUYzUXl4RFFVRkRUQ3hWUVVGNlF6dEJRVU5CZUVJc1dVRkJUU3hEUVVGRGFVSXNXVUZCVUN4RFFVRnZRaXhaUVVGd1FpeEZRVUZyUXl4MVFrRkJiRU03UVVGRFFXcENMRmxCUVUwc1EwRkJRMmxDTEZsQlFWQXNRMEZCYjBJc1kwRkJjRUlzUlVGQmIwTXNUVUZCY0VNN1FVRkZSRHM3TzJ0RFFVVmhPMEZCUTFvc1ZVRkJTU3hEUVVGRGRrTXNWVUZCVEN4RlFVRnBRanRCUVVObUxHVkJRVThzU1VGQlVEdEJRVU5FT3p0QlFVTkVMR0ZCUVU5dlFpeFJRVUZSTEVOQlFVTmpMRWxCUVZRc1EwRkJZMVFzVTBGQlpDeERRVUYzUWpKQ0xGRkJRWGhDTEVOQlFXbERMSEZDUVVGcVF5eERRVUZRTzBGQlEwUTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVTnNUMGc3T3pzN08wRkJSMEU3T3pzN1FVRkRRU3d3UWtGQlowSTdRVUZEWkN4SFFVRkRMRlZCUVZOdVJDeE5RVUZVTEVWQlFXbENPMEZCUTJoQ1FTeFZRVUZOTEVOQlFVTkRMRkZCUVZBN1FVRkRSQ3hIUVVaRUxFVkJSVWRFTEUxQlJrZzdRVUZIUkR0QlFVTkVJaXdpWm1sc1pTSTZJbVJoY210dGIyUmxMV3B6TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnWkdWbWFXNWxMbUZ0WkNsY2JseDBYSFJrWldacGJtVW9YQ0prWVhKcmJXOWtaUzFxYzF3aUxDQmJYU3dnWm1GamRHOXllU2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEdWNGNHOXlkSE5iWENKa1lYSnJiVzlrWlMxcWMxd2lYU0E5SUdaaFkzUnZjbmtvS1R0Y2JseDBaV3h6WlZ4dVhIUmNkSEp2YjNSYlhDSmtZWEpyYlc5a1pTMXFjMXdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hSNWNHVnZaaUJ6Wld4bUlDRTlQU0FuZFc1a1pXWnBibVZrSnlBL0lITmxiR1lnT2lCMGFHbHpMQ0JtZFc1amRHbHZiaWdwSUh0Y2JuSmxkSFZ5YmlBaUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaUE5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1wSUh0Y2JpQmNkRngwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeXdnZXlCMllXeDFaVG9nSjAxdlpIVnNaU2NnZlNrN1hHNGdYSFJjZEgxY2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JREU2SUhaaGJIVmxJR2x6SUdFZ2JXOWtkV3hsSUdsa0xDQnlaWEYxYVhKbElHbDBYRzRnWEhRdkx5QnRiMlJsSUNZZ01qb2diV1Z5WjJVZ1lXeHNJSEJ5YjNCbGNuUnBaWE1nYjJZZ2RtRnNkV1VnYVc1MGJ5QjBhR1VnYm5OY2JpQmNkQzh2SUcxdlpHVWdKaUEwT2lCeVpYUjFjbTRnZG1Gc2RXVWdkMmhsYmlCaGJISmxZV1I1SUc1eklHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JRGg4TVRvZ1ltVm9ZWFpsSUd4cGEyVWdjbVZ4ZFdseVpWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1MElEMGdablZ1WTNScGIyNG9kbUZzZFdVc0lHMXZaR1VwSUh0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBNEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkR2xtS0NodGIyUmxJQ1lnTkNrZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIyWVd4MVpTQW1KaUIyWVd4MVpTNWZYMlZ6VFc5a2RXeGxLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpaHVjeWs3WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNodWN5d2dKMlJsWm1GMWJIUW5MQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUhaaGJIVmxPaUIyWVd4MVpTQjlLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRElnSmlZZ2RIbHdaVzltSUhaaGJIVmxJQ0U5SUNkemRISnBibWNuS1NCbWIzSW9kbUZ5SUd0bGVTQnBiaUIyWVd4MVpTa2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0c1ekxDQnJaWGtzSUdaMWJtTjBhVzl1S0d0bGVTa2dleUJ5WlhSMWNtNGdkbUZzZFdWYmEyVjVYVHNnZlM1aWFXNWtLRzUxYkd3c0lHdGxlU2twTzF4dUlGeDBYSFJ5WlhSMWNtNGdibk03WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdYQ0l1TDNOeVl5OXBibVJsZUM1cWMxd2lLVHRjYmlJc0ltVjRjRzl5ZENCamIyNXpkQ0JKVTE5Q1VrOVhVMFZTSUQwZ2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ0ozVnVaR1ZtYVc1bFpDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFUmhjbXR0YjJSbElIdGNiaUFnWTI5dWMzUnlkV04wYjNJb2IzQjBhVzl1Y3lrZ2UxeHVJQ0FnSUdsbUlDZ2hTVk5mUWxKUFYxTkZVaWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnZibk4wSUdSbFptRjFiSFJQY0hScGIyNXpJRDBnZTF4dUlDQWdJQ0FnWW05MGRHOXRPaUFuTXpKd2VDY3NYRzRnSUNBZ0lDQnlhV2RvZERvZ0p6TXljSGduTEZ4dUlDQWdJQ0FnYkdWbWREb2dKM1Z1YzJWMEp5eGNiaUFnSUNBZ0lIUnBiV1U2SUNjd0xqTnpKeXhjYmlBZ0lDQWdJRzFwZUVOdmJHOXlPaUFuSTJabVppY3NYRzRnSUNBZ0lDQmlZV05yWjNKdmRXNWtRMjlzYjNJNklDY2pabVptSnl4Y2JpQWdJQ0FnSUdKMWRIUnZia052Ykc5eVJHRnlhem9nSnlNeE1EQm1NbU1uTEZ4dUlDQWdJQ0FnWW5WMGRHOXVRMjlzYjNKTWFXZG9kRG9nSnlObVptWW5MRnh1SUNBZ0lDQWdiR0ZpWld3NklDY25MRnh1SUNBZ0lDQWdjMkYyWlVsdVEyOXZhMmxsY3pvZ2RISjFaU3hjYmlBZ0lDQWdJR0YxZEc5TllYUmphRTl6VkdobGJXVTZJSFJ5ZFdWY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnYjNCMGFXOXVjeUE5SUU5aWFtVmpkQzVoYzNOcFoyNG9lMzBzSUdSbFptRjFiSFJQY0hScGIyNXpMQ0J2Y0hScGIyNXpLVHRjYmx4dUlDQWdJR052Ym5OMElHTnpjeUE5SUdCY2JpQWdJQ0FnSUM1a1lYSnJiVzlrWlMxc1lYbGxjaUI3WEc0Z0lDQWdJQ0FnSUhCdmMybDBhVzl1T2lCbWFYaGxaRHRjYmlBZ0lDQWdJQ0FnY0c5cGJuUmxjaTFsZG1WdWRITTZJRzV2Ym1VN1hHNGdJQ0FnSUNBZ0lHSmhZMnRuY205MWJtUTZJQ1I3YjNCMGFXOXVjeTV0YVhoRGIyeHZjbjA3WEc0Z0lDQWdJQ0FnSUhSeVlXNXphWFJwYjI0NklHRnNiQ0FrZTI5d2RHbHZibk11ZEdsdFpYMGdaV0Z6WlR0Y2JpQWdJQ0FnSUNBZ2JXbDRMV0pzWlc1a0xXMXZaR1U2SUdScFptWmxjbVZ1WTJVN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDNWtZWEpyYlc5a1pTMXNZWGxsY2kwdFluVjBkRzl1SUh0Y2JpQWdJQ0FnSUNBZ2QybGtkR2c2SURJdU9YSmxiVHRjYmlBZ0lDQWdJQ0FnYUdWcFoyaDBPaUF5TGpseVpXMDdYRzRnSUNBZ0lDQWdJR0p2Y21SbGNpMXlZV1JwZFhNNklEVXdKVHRjYmlBZ0lDQWdJQ0FnY21sbmFIUTZJQ1I3YjNCMGFXOXVjeTV5YVdkb2RIMDdYRzRnSUNBZ0lDQWdJR0p2ZEhSdmJUb2dKSHR2Y0hScGIyNXpMbUp2ZEhSdmJYMDdYRzRnSUNBZ0lDQWdJR3hsWm5RNklDUjdiM0IwYVc5dWN5NXNaV1owZlR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0xtUmhjbXR0YjJSbExXeGhlV1Z5TFMxemFXMXdiR1VnZTF4dUlDQWdJQ0FnSUNCM2FXUjBhRG9nTVRBd0pUdGNiaUFnSUNBZ0lDQWdhR1ZwWjJoME9pQXhNREFsTzF4dUlDQWdJQ0FnSUNCMGIzQTZJREE3WEc0Z0lDQWdJQ0FnSUd4bFpuUTZJREE3WEc0Z0lDQWdJQ0FnSUhSeVlXNXpabTl5YlRvZ2MyTmhiR1VvTVNrZ0lXbHRjRzl5ZEdGdWREdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMbVJoY210dGIyUmxMV3hoZVdWeUxTMWxlSEJoYm1SbFpDQjdYRzRnSUNBZ0lDQWdJSFJ5WVc1elptOXliVG9nYzJOaGJHVW9NVEF3S1R0Y2JpQWdJQ0FnSUNBZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTUR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0xtUmhjbXR0YjJSbExXeGhlV1Z5TFMxdWJ5MTBjbUZ1YzJsMGFXOXVJSHRjYmlBZ0lDQWdJQ0FnZEhKaGJuTnBkR2x2YmpvZ2JtOXVaVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnTG1SaGNtdHRiMlJsTFhSdloyZHNaU0I3WEc0Z0lDQWdJQ0FnSUdKaFkydG5jbTkxYm1RNklDUjdiM0IwYVc5dWN5NWlkWFIwYjI1RGIyeHZja1JoY210OU8xeHVJQ0FnSUNBZ0lDQjNhV1IwYURvZ00zSmxiVHRjYmlBZ0lDQWdJQ0FnYUdWcFoyaDBPaUF6Y21WdE8xeHVJQ0FnSUNBZ0lDQndiM05wZEdsdmJqb2dabWw0WldRN1hHNGdJQ0FnSUNBZ0lHSnZjbVJsY2kxeVlXUnBkWE02SURVd0pUdGNiaUFnSUNBZ0lDQWdZbTl5WkdWeU9tNXZibVU3WEc0Z0lDQWdJQ0FnSUhKcFoyaDBPaUFrZTI5d2RHbHZibk11Y21sbmFIUjlPMXh1SUNBZ0lDQWdJQ0JpYjNSMGIyMDZJQ1I3YjNCMGFXOXVjeTVpYjNSMGIyMTlPMXh1SUNBZ0lDQWdJQ0JzWldaME9pQWtlMjl3ZEdsdmJuTXViR1ZtZEgwN1hHNGdJQ0FnSUNBZ0lHTjFjbk52Y2pvZ2NHOXBiblJsY2p0Y2JpQWdJQ0FnSUNBZ2RISmhibk5wZEdsdmJqb2dZV3hzSURBdU5YTWdaV0Z6WlR0Y2JpQWdJQ0FnSUNBZ1pHbHpjR3hoZVRvZ1pteGxlRHRjYmlBZ0lDQWdJQ0FnYW5WemRHbG1lUzFqYjI1MFpXNTBPaUJqWlc1MFpYSTdYRzRnSUNBZ0lDQWdJR0ZzYVdkdUxXbDBaVzF6T2lCalpXNTBaWEk3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM1a1lYSnJiVzlrWlMxMGIyZG5iR1V0TFhkb2FYUmxJSHRjYmlBZ0lDQWdJQ0FnWW1GamEyZHliM1Z1WkRvZ0pIdHZjSFJwYjI1ekxtSjFkSFJ2YmtOdmJHOXlUR2xuYUhSOU8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQXVaR0Z5YTIxdlpHVXRkRzluWjJ4bExTMXBibUZqZEdsMlpTQjdYRzRnSUNBZ0lDQWdJR1JwYzNCc1lYazZJRzV2Ym1VN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDNWtZWEpyYlc5a1pTMWlZV05yWjNKdmRXNWtJSHRjYmlBZ0lDQWdJQ0FnWW1GamEyZHliM1Z1WkRvZ0pIdHZjSFJwYjI1ekxtSmhZMnRuY205MWJtUkRiMnh2Y24wN1hHNGdJQ0FnSUNBZ0lIQnZjMmwwYVc5dU9pQm1hWGhsWkR0Y2JpQWdJQ0FnSUNBZ2NHOXBiblJsY2kxbGRtVnVkSE02SUc1dmJtVTdYRzRnSUNBZ0lDQWdJSG90YVc1a1pYZzZJQzB4TUR0Y2JpQWdJQ0FnSUNBZ2QybGtkR2c2SURFd01DVTdYRzRnSUNBZ0lDQWdJR2hsYVdkb2REb2dNVEF3SlR0Y2JpQWdJQ0FnSUNBZ2RHOXdPaUF3TzF4dUlDQWdJQ0FnSUNCc1pXWjBPaUF3TzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCcGJXY3NJQzVrWVhKcmJXOWtaUzFwWjI1dmNtVWdlMXh1SUNBZ0lDQWdJQ0JwYzI5c1lYUnBiMjQ2SUdsemIyeGhkR1U3WEc0Z0lDQWdJQ0FnSUdScGMzQnNZWGs2SUdsdWJHbHVaUzFpYkc5amF6dGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdRRzFsWkdsaElITmpjbVZsYmlCaGJtUWdLQzF0Y3kxb2FXZG9MV052Ym5SeVlYTjBPaUJoWTNScGRtVXBMQ0FvTFcxekxXaHBaMmd0WTI5dWRISmhjM1E2SUc1dmJtVXBJSHRjYmlBZ0lDQWdJQ0FnTG1SaGNtdHRiMlJsTFhSdloyZHNaU0I3WkdsemNHeGhlVG9nYm05dVpTQWhhVzF3YjNKMFlXNTBmVnh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JBYzNWd2NHOXlkSE1nS0MxdGN5MXBiV1V0WVd4cFoyNDZZWFYwYnlrc0lDZ3RiWE10WVdOalpXeGxjbUYwYjNJNmRISjFaU2tnZTF4dUlDQWdJQ0FnSUNBdVpHRnlhMjF2WkdVdGRHOW5aMnhsSUh0a2FYTndiR0Y1T2lCdWIyNWxJQ0ZwYlhCdmNuUmhiblI5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdZRHRjYmx4dUlDQWdJR052Ym5OMElHeGhlV1Z5SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWkdsMkp5azdYRzRnSUNBZ1kyOXVjM1FnWW5WMGRHOXVJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25ZblYwZEc5dUp5azdYRzRnSUNBZ1kyOXVjM1FnWW1GamEyZHliM1Z1WkNBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJScGRpY3BPMXh1WEc0Z0lDQWdZblYwZEc5dUxtbHVibVZ5U0ZSTlRDQTlJRzl3ZEdsdmJuTXViR0ZpWld3N1hHNGdJQ0FnWW5WMGRHOXVMbU5zWVhOelRHbHpkQzVoWkdRb0oyUmhjbXR0YjJSbExYUnZaMmRzWlMwdGFXNWhZM1JwZG1VbktUdGNiaUFnSUNCc1lYbGxjaTVqYkdGemMweHBjM1F1WVdSa0tDZGtZWEpyYlc5a1pTMXNZWGxsY2ljcE8xeHVJQ0FnSUdKaFkydG5jbTkxYm1RdVkyeGhjM05NYVhOMExtRmtaQ2duWkdGeWEyMXZaR1V0WW1GamEyZHliM1Z1WkNjcE8xeHVYRzRnSUNBZ1kyOXVjM1FnWkdGeWEyMXZaR1ZCWTNScGRtRjBaV1FnUFZ4dUlDQWdJQ0FnZDJsdVpHOTNMbXh2WTJGc1UzUnZjbUZuWlM1blpYUkpkR1Z0S0Nka1lYSnJiVzlrWlNjcElEMDlQU0FuZEhKMVpTYzdYRzRnSUNBZ1kyOXVjM1FnY0hKbFptVnlaV1JVYUdWdFpVOXpJRDFjYmlBZ0lDQWdJRzl3ZEdsdmJuTXVZWFYwYjAxaGRHTm9UM05VYUdWdFpTQW1KbHh1SUNBZ0lDQWdkMmx1Wkc5M0xtMWhkR05vVFdWa2FXRW9KeWh3Y21WbVpYSnpMV052Ykc5eUxYTmphR1Z0WlRvZ1pHRnlheWtuS1M1dFlYUmphR1Z6TzF4dUlDQWdJR052Ym5OMElHUmhjbXR0YjJSbFRtVjJaWEpCWTNScGRtRjBaV1JDZVVGamRHbHZiaUE5WEc0Z0lDQWdJQ0IzYVc1a2IzY3ViRzlqWVd4VGRHOXlZV2RsTG1kbGRFbDBaVzBvSjJSaGNtdHRiMlJsSnlrZ1BUMDlJRzUxYkd3N1hHNWNiaUFnSUNCcFppQW9YRzRnSUNBZ0lDQW9aR0Z5YTIxdlpHVkJZM1JwZG1GMFpXUWdQVDA5SUhSeWRXVWdKaVlnYjNCMGFXOXVjeTV6WVhabFNXNURiMjlyYVdWektTQjhmRnh1SUNBZ0lDQWdLR1JoY210dGIyUmxUbVYyWlhKQlkzUnBkbUYwWldSQ2VVRmpkR2x2YmlBbUppQndjbVZtWlhKbFpGUm9aVzFsVDNNcFhHNGdJQ0FnS1NCN1hHNGdJQ0FnSUNCc1lYbGxjaTVqYkdGemMweHBjM1F1WVdSa0tGeHVJQ0FnSUNBZ0lDQW5aR0Z5YTIxdlpHVXRiR0Y1WlhJdExXVjRjR0Z1WkdWa0p5eGNiaUFnSUNBZ0lDQWdKMlJoY210dGIyUmxMV3hoZVdWeUxTMXphVzF3YkdVbkxGeHVJQ0FnSUNBZ0lDQW5aR0Z5YTIxdlpHVXRiR0Y1WlhJdExXNXZMWFJ5WVc1emFYUnBiMjRuWEc0Z0lDQWdJQ0FwTzF4dUlDQWdJQ0FnWW5WMGRHOXVMbU5zWVhOelRHbHpkQzVoWkdRb0oyUmhjbXR0YjJSbExYUnZaMmRzWlMwdGQyaHBkR1VuS1R0Y2JpQWdJQ0FnSUdSdlkzVnRaVzUwTG1KdlpIa3VZMnhoYzNOTWFYTjBMbUZrWkNnblpHRnlhMjF2WkdVdExXRmpkR2wyWVhSbFpDY3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHUnZZM1Z0Wlc1MExtSnZaSGt1YVc1elpYSjBRbVZtYjNKbEtHSjFkSFJ2Yml3Z1pHOWpkVzFsYm5RdVltOWtlUzVtYVhKemRFTm9hV3hrS1R0Y2JpQWdJQ0JrYjJOMWJXVnVkQzVpYjJSNUxtbHVjMlZ5ZEVKbFptOXlaU2hzWVhsbGNpd2daRzlqZFcxbGJuUXVZbTlrZVM1bWFYSnpkRU5vYVd4a0tUdGNiaUFnSUNCa2IyTjFiV1Z1ZEM1aWIyUjVMbWx1YzJWeWRFSmxabTl5WlNoaVlXTnJaM0p2ZFc1a0xDQmtiMk4xYldWdWRDNWliMlI1TG1acGNuTjBRMmhwYkdRcE8xeHVYRzRnSUNBZ2RHaHBjeTVoWkdSVGRIbHNaU2hqYzNNcE8xeHVYRzRnSUNBZ2RHaHBjeTVpZFhSMGIyNGdQU0JpZFhSMGIyNDdYRzRnSUNBZ2RHaHBjeTVzWVhsbGNpQTlJR3hoZVdWeU8xeHVJQ0FnSUhSb2FYTXVjMkYyWlVsdVEyOXZhMmxsY3lBOUlHOXdkR2x2Ym5NdWMyRjJaVWx1UTI5dmEybGxjenRjYmlBZ0lDQjBhR2x6TG5ScGJXVWdQU0J2Y0hScGIyNXpMblJwYldVN1hHNGdJSDFjYmx4dUlDQmhaR1JUZEhsc1pTaGpjM01wSUh0Y2JpQWdJQ0JqYjI1emRDQnNhVzVyUld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMnhwYm1zbktUdGNibHh1SUNBZ0lHeHBibXRGYkdWdFpXNTBMbk5sZEVGMGRISnBZblYwWlNnbmNtVnNKeXdnSjNOMGVXeGxjMmhsWlhRbktUdGNiaUFnSUNCc2FXNXJSV3hsYldWdWRDNXpaWFJCZEhSeWFXSjFkR1VvSjNSNWNHVW5MQ0FuZEdWNGRDOWpjM01uS1R0Y2JpQWdJQ0JzYVc1clJXeGxiV1Z1ZEM1elpYUkJkSFJ5YVdKMWRHVW9YRzRnSUNBZ0lDQW5hSEpsWmljc1hHNGdJQ0FnSUNBblpHRjBZVHAwWlhoMEwyTnpjenRqYUdGeWMyVjBQVlZVUmkwNExDY2dLeUJsYm1OdlpHVlZVa2xEYjIxd2IyNWxiblFvWTNOektWeHVJQ0FnSUNrN1hHNGdJQ0FnWkc5amRXMWxiblF1YUdWaFpDNWhjSEJsYm1SRGFHbHNaQ2hzYVc1clJXeGxiV1Z1ZENrN1hHNGdJSDFjYmx4dUlDQnphRzkzVjJsa1oyVjBLQ2tnZTF4dUlDQWdJR2xtSUNnaFNWTmZRbEpQVjFORlVpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JpQWdJQ0JqYjI1emRDQmlkWFIwYjI0Z1BTQjBhR2x6TG1KMWRIUnZianRjYmlBZ0lDQmpiMjV6ZENCc1lYbGxjaUE5SUhSb2FYTXViR0Y1WlhJN1hHNGdJQ0FnWTI5dWMzUWdkR2x0WlNBOUlIQmhjbk5sUm14dllYUW9kR2hwY3k1MGFXMWxLU0FxSURFd01EQTdYRzVjYmlBZ0lDQmlkWFIwYjI0dVkyeGhjM05NYVhOMExtRmtaQ2duWkdGeWEyMXZaR1V0ZEc5bloyeGxKeWs3WEc0Z0lDQWdZblYwZEc5dUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyUmhjbXR0YjJSbExYUnZaMmRzWlMwdGFXNWhZM1JwZG1VbktUdGNiaUFnSUNCaWRYUjBiMjR1YzJWMFFYUjBjbWxpZFhSbEtGd2lZWEpwWVMxc1lXSmxiRndpTENCY0lrRmpkR2wyWVhSbElHUmhjbXNnYlc5a1pWd2lLVHRjYmlBZ0lDQmlkWFIwYjI0dWMyVjBRWFIwY21saWRYUmxLRndpWVhKcFlTMWphR1ZqYTJWa1hDSXNJRndpWm1Gc2MyVmNJaWs3WEc0Z0lDQWdZblYwZEc5dUxuTmxkRUYwZEhKcFluVjBaU2hjSW5KdmJHVmNJaXdnWENKamFHVmphMkp2ZUZ3aUtUdGNiaUFnSUNCc1lYbGxjaTVqYkdGemMweHBjM1F1WVdSa0tDZGtZWEpyYlc5a1pTMXNZWGxsY2kwdFluVjBkRzl1SnlrN1hHNWNiaUFnSUNCaWRYUjBiMjR1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvS1NBOVBpQjdYRzRnSUNBZ0lDQmpiMjV6ZENCcGMwUmhjbXR0YjJSbElEMGdkR2hwY3k1cGMwRmpkR2wyWVhSbFpDZ3BPMXh1WEc0Z0lDQWdJQ0JwWmlBb0lXbHpSR0Z5YTIxdlpHVXBJSHRjYmlBZ0lDQWdJQ0FnYkdGNVpYSXVZMnhoYzNOTWFYTjBMbUZrWkNnblpHRnlhMjF2WkdVdGJHRjVaWEl0TFdWNGNHRnVaR1ZrSnlrN1hHNGdJQ0FnSUNBZ0lHSjFkSFJ2Ymk1elpYUkJkSFJ5YVdKMWRHVW9KMlJwYzJGaWJHVmtKeXdnZEhKMVpTazdYRzRnSUNBZ0lDQWdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUd4aGVXVnlMbU5zWVhOelRHbHpkQzVoWkdRb0oyUmhjbXR0YjJSbExXeGhlV1Z5TFMxdWJ5MTBjbUZ1YzJsMGFXOXVKeWs3WEc0Z0lDQWdJQ0FnSUNBZ2JHRjVaWEl1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25aR0Z5YTIxdlpHVXRiR0Y1WlhJdExYTnBiWEJzWlNjcE8xeHVJQ0FnSUNBZ0lDQWdJR0oxZEhSdmJpNXlaVzF2ZG1WQmRIUnlhV0oxZEdVb0oyUnBjMkZpYkdWa0p5azdYRzRnSUNBZ0lDQWdJSDBzSUhScGJXVXBPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdiR0Y1WlhJdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnblpHRnlhMjF2WkdVdGJHRjVaWEl0TFhOcGJYQnNaU2NwTzF4dUlDQWdJQ0FnSUNCaWRYUjBiMjR1YzJWMFFYUjBjbWxpZFhSbEtDZGthWE5oWW14bFpDY3NJSFJ5ZFdVcE8xeHVJQ0FnSUNBZ0lDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0JzWVhsbGNpNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGtZWEpyYlc5a1pTMXNZWGxsY2kwdGJtOHRkSEpoYm5OcGRHbHZiaWNwTzF4dUlDQWdJQ0FnSUNBZ0lHeGhlV1Z5TG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjJSaGNtdHRiMlJsTFd4aGVXVnlMUzFsZUhCaGJtUmxaQ2NwTzF4dUlDQWdJQ0FnSUNBZ0lHSjFkSFJ2Ymk1eVpXMXZkbVZCZEhSeWFXSjFkR1VvSjJScGMyRmliR1ZrSnlrN1hHNGdJQ0FnSUNBZ0lIMHNJREVwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCaWRYUjBiMjR1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duWkdGeWEyMXZaR1V0ZEc5bloyeGxMUzEzYUdsMFpTY3BPMXh1SUNBZ0lDQWdaRzlqZFcxbGJuUXVZbTlrZVM1amJHRnpjMHhwYzNRdWRHOW5aMnhsS0Nka1lYSnJiVzlrWlMwdFlXTjBhWFpoZEdWa0p5azdYRzRnSUNBZ0lDQjNhVzVrYjNjdWJHOWpZV3hUZEc5eVlXZGxMbk5sZEVsMFpXMG9KMlJoY210dGIyUmxKeXdnSVdselJHRnlhMjF2WkdVcE8xeHVJQ0FnSUgwcE8xeHVJQ0I5WEc1Y2JpQWdkRzluWjJ4bEtDa2dlMXh1SUNBZ0lHbG1JQ2doU1ZOZlFsSlBWMU5GVWlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmlBZ0lDQmpiMjV6ZENCc1lYbGxjaUE5SUhSb2FYTXViR0Y1WlhJN1hHNGdJQ0FnWTI5dWMzUWdhWE5FWVhKcmJXOWtaU0E5SUhSb2FYTXVhWE5CWTNScGRtRjBaV1FvS1R0Y2JpQWdJQ0JqYjI1emRDQmlkWFIwYjI0Z1BTQjBhR2x6TG1KMWRIUnZianRjYmx4dUlDQWdJR3hoZVdWeUxtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oyUmhjbXR0YjJSbExXeGhlV1Z5TFMxemFXMXdiR1VuS1R0Y2JpQWdJQ0JrYjJOMWJXVnVkQzVpYjJSNUxtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oyUmhjbXR0YjJSbExTMWhZM1JwZG1GMFpXUW5LVHRjYmlBZ0lDQjNhVzVrYjNjdWJHOWpZV3hUZEc5eVlXZGxMbk5sZEVsMFpXMG9KMlJoY210dGIyUmxKeXdnSVdselJHRnlhMjF2WkdVcE8xeHVJQ0FnSUdKMWRIUnZiaTV6WlhSQmRIUnlhV0oxZEdVb1hDSmhjbWxoTFd4aFltVnNYQ0lzSUZ3aVJHVXRZV04wYVhaaGRHVWdaR0Z5YXlCdGIyUmxYQ0lwTzF4dUlDQWdJR0oxZEhSdmJpNXpaWFJCZEhSeWFXSjFkR1VvWENKaGNtbGhMV05vWldOclpXUmNJaXdnWENKMGNuVmxYQ0lwTzF4dVhHNGdJSDFjYmx4dUlDQnBjMEZqZEdsMllYUmxaQ2dwSUh0Y2JpQWdJQ0JwWmlBb0lVbFRYMEpTVDFkVFJWSXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnVkV3hzTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1pHOWpkVzFsYm5RdVltOWtlUzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJSaGNtdHRiMlJsTFMxaFkzUnBkbUYwWldRbktUdGNiaUFnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJRVJoY210dGIyUmxMQ0I3SUVsVFgwSlNUMWRUUlZJZ2ZTQm1jbTl0SUNjdUwyUmhjbXR0YjJSbEp6dGNjbHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdSR0Z5YTIxdlpHVTdYSEpjYmx4eVhHNHZLaUJsYzJ4cGJuUXRaR2x6WVdKc1pTQXFMMXh5WEc1cFppQW9TVk5mUWxKUFYxTkZVaWtnZTF4eVhHNGdJQ2htZFc1amRHbHZiaWgzYVc1a2IzY3BJSHRjY2x4dUlDQWdJSGRwYm1SdmR5NUVZWEpyYlc5a1pTQTlJRVJoY210dGIyUmxPMXh5WEc0Z0lIMHBLSGRwYm1SdmR5azdYSEpjYm4xY2NseHVMeW9nWlhOc2FXNTBMV1Z1WVdKc1pTQXFMMXh5WEc0aVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOSIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBBUElfS0VZID0gXCI3MWE4ZDYwYjZhZDA0OWU5YTUyMTNhMDgzOWIzNTY1YVwiO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZVxuICAgICAgfSZBUFBJRD0ke0FQSV9LRVl9YFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbWFnZURhdGEoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgQVBJX0tFWSA9IFwiQ2tvR2Z0ajdJa3FGbk5Sa20xZEZGbklYVjZiMlpUTzdcIjtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKCk7XG4gICAgbGV0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICBpZiAod2VhdGhlckRlc2NyaXB0aW9uID09PSBcIkNsZWFyXCIpIHtcbiAgICAgIHdlYXRoZXJEZXNjcmlwdGlvbiA9IFwiQ2xlYXIgc2t5XCI7XG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9JHtBUElfS0VZfSZzPSR7d2VhdGhlckRlc2NyaXB0aW9ufWAsXG4gICAgICB7IG1vZGU6IGBjb3JzYCB9XG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRLZWx2aW5Ub0NlbHNpdXModGVtcCkge1xuICBjb25zdCByZXN1bHQgPSBNYXRoLnJvdW5kKHRlbXAgLSAyNzMuMTUpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENlbHNpdXNUb0ZhcmVuaGVpdCh0ZW1wKSB7XG4gIGNvbnN0IHJlc3VsdCA9IE1hdGgucm91bmQoKHRlbXAgKiA5KSAvIDUgKyAzMik7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgZ2V0V2VhdGhlckRhdGEsXG4gIGdldEltYWdlRGF0YSxcbiAgY29udmVydEtlbHZpblRvQ2Vsc2l1cyxcbiAgY29udmVydENlbHNpdXNUb0ZhcmVuaGVpdCxcbn0gZnJvbSBcIi4vYXBwXCI7XG5cbmltcG9ydCBEYXJrbW9kZSBmcm9tIFwiZGFya21vZGUtanNcIjtcblxubmV3IERhcmttb2RlKCkuc2hvd1dpZGdldCgpO1xuXG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5jb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5jb25zdCBkYXRhRXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKTtcbmNvbnN0IGlucHV0RXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1lcnJvclwiKTtcblxuZnVuY3Rpb24gc2hvd0Zvcm1JbnB1dEVycm9yKCkge1xuICBpZiAoc2VhcmNoQm94LnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgIGlucHV0RXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJOdW1iZXJzIGFuZCBzeW1ib2xzIGFyZSBub3Qgc3VwcG9ydGVkIVwiO1xuICB9XG4gIGlmIChzZWFyY2hCb3gudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgaW5wdXRFcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBlbnRlciBsb2NhdGlvblwiO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlclRleHR1YWxEYXRhKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YSgpO1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlSCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBjb3VudHJ5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY29uc3QgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZW51XCIpO1xuICAgIGNvbnN0IGRlc2NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWVudVwiKTtcbiAgICBjb25zdCBkZXRhaWxlZERlc2NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWVudVwiKTtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBkZXRhaWxlZERlc2NyaXB0aW9uUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHRlbXBQYXJhSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IHRlbXBEZXNjSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IHRlbXBEZXRhaWxlZERlc2NJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3QgdG9nZ2xlVGVtcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgaXNDb252ZXJ0ZWRUZW1wdG9DZWxzaXVzID0gY29udmVydEtlbHZpblRvQ2Vsc2l1cyhkYXRhLm1haW4udGVtcCk7XG4gICAgY29uc3QgaXNDb252ZXJ0ZWRUZW1wVG9GYXJlbmhlaXQgPSBjb252ZXJ0Q2Vsc2l1c1RvRmFyZW5oZWl0KFxuICAgICAgaXNDb252ZXJ0ZWRUZW1wdG9DZWxzaXVzXG4gICAgKTtcbiAgICBtYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbi1jb250YWluZXJcIik7XG4gICAgdGl0bGVILnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICAgIHRlbXBlcmF0dXJlUGFyYS50ZXh0Q29udGVudCA9IGAke2lzQ29udmVydGVkVGVtcHRvQ2Vsc2l1c30gIMKwQ2A7XG4gICAgZGVzY3JpcHRpb25QYXJhLnRleHRDb250ZW50ID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgZGV0YWlsZWREZXNjcmlwdGlvblBhcmEudGV4dENvbnRlbnQgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cbiAgICB0ZW1wUGFyYUljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29uc1wiO1xuICAgIHRlbXBEZXNjSWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zXCI7XG4gICAgdGVtcERldGFpbGVkRGVzY0ljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29uc1wiO1xuICAgIGNvdW50cnlJY29uLnNyYyA9IGBodHRwczovL3d3dy5jb3VudHJ5ZmxhZ3MuaW8vJHtkYXRhLnN5cy5jb3VudHJ5fS9zaGlueS8zMi5wbmdgO1xuICAgIHRvZ2dsZVRlbXBCdG4udGV4dENvbnRlbnQgPSBgwrBGYDtcbiAgICB0ZW1wUGFyYUljb24udGV4dENvbnRlbnQgPSBcInRoZXJtb3N0YXRcIjtcbiAgICB0ZW1wRGV0YWlsZWREZXNjSWNvbi50ZXh0Q29udGVudCA9IFwiaW5mb1wiO1xuICAgIHN3aXRjaCAoZGF0YS53ZWF0aGVyWzBdLm1haW4pIHtcbiAgICAgIGNhc2UgXCJDbGVhclwiOlxuICAgICAgICB0ZW1wRGVzY0ljb24udGV4dENvbnRlbnQgPSBcIndiX3N1bm55XCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkNsb3Vkc1wiOlxuICAgICAgICB0ZW1wRGVzY0ljb24udGV4dENvbnRlbnQgPSBcImNsb3VkXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIlJhaW5cIjpcbiAgICAgICAgdGVtcERlc2NJY29uLnRleHRDb250ZW50ID0gXCJ3YXRlcl9kcm9wXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIlN0b3JtXCI6XG4gICAgICAgIHRlbXBEZXNjSWNvbi50ZXh0Q29udGVudCA9IFwiZmxhc2hfb25cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0ZW1wRGVzY0ljb24udGV4dENvbnRlbnQgPSBcImZpbHRlcl9kcmFtYVwiO1xuICAgIH1cblxuICAgIHRvZ2dsZVRlbXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRlbXBlcmF0dXJlUGFyYS5jbGFzc0xpc3QudG9nZ2xlKFwiY2hhbmdlZFwiKTtcbiAgICAgIHRlbXBlcmF0dXJlUGFyYS5jbGFzc05hbWUgPT09IFwiY2hhbmdlZFwiXG4gICAgICAgID8gKHRlbXBlcmF0dXJlUGFyYS50ZXh0Q29udGVudCA9IGAke2lzQ29udmVydGVkVGVtcFRvRmFyZW5oZWl0fSDCsEZgKVxuICAgICAgICA6ICh0ZW1wZXJhdHVyZVBhcmEudGV4dENvbnRlbnQgPSBgJHtpc0NvbnZlcnRlZFRlbXB0b0NlbHNpdXN9ICDCsENgKTtcblxuICAgICAgaWYgKHRlbXBlcmF0dXJlUGFyYS50ZXh0Q29udGVudC5pbmNsdWRlcyhcIkNcIikpIHtcbiAgICAgICAgdG9nZ2xlVGVtcEJ0bi50ZXh0Q29udGVudCA9IFwiwrBGXCI7XG4gICAgICB9IGVsc2UgaWYgKHRlbXBlcmF0dXJlUGFyYS50ZXh0Q29udGVudC5pbmNsdWRlcyhcIkZcIikpIHtcbiAgICAgICAgdG9nZ2xlVGVtcEJ0bi50ZXh0Q29udGVudCA9IGDCsENgO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG5cbiAgICB0ZW1wQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlUGFyYSk7XG4gICAgdGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wUGFyYUljb24pO1xuICAgIGRlc2NDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhKTtcbiAgICBkZXNjQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBEZXNjSWNvbik7XG4gICAgZGV0YWlsZWREZXNjQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbGVkRGVzY3JpcHRpb25QYXJhKTtcbiAgICBkZXRhaWxlZERlc2NDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcERldGFpbGVkRGVzY0ljb24pO1xuICAgIHRpdGxlSC5hcHBlbmRDaGlsZChjb3VudHJ5SWNvbik7XG4gICAgdGl0bGVILmFwcGVuZENoaWxkKHRvZ2dsZVRlbXBCdG4pO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVIKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBDb250YWluZXIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY0NvbnRhaW5lcik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxlZERlc2NDb250YWluZXIpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRhdGFFcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uIG5vdCBmb3VuZCFcIjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGF0YUVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSwgMjAwMCk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVySW1hZ2VEYXRhKCkge1xuICBjb25zdCBpbWdCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWdCb3JkZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbWFnZS1jb250YWluZXJcIik7XG4gIGltZ0JvcmRlci5hcHBlbmRDaGlsZChpbWcpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGltZ0JvcmRlcik7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEltYWdlRGF0YSgpO1xuICAgIGltZy5zcmMgPSBhd2FpdCBkYXRhLmRhdGEuaW1hZ2VzLmZpeGVkX3dpZHRoLnVybDtcbiAgICBpbWdCb3JkZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7aW1nLnNyY31cIilgO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpbWdCb3JkZXIudGV4dENvbnRlbnQgPSBcIkNvdWxkbid0IGZpbmQgaW1hZ2UhXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpbWdCb3JkZXIucmVtb3ZlKCk7XG4gICAgfSwgMjAwMCk7XG4gIH1cbn1cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKHNlYXJjaEJveC52YWxpZGl0eS52YWxpZCkge1xuICAgIHJlbmRlckltYWdlRGF0YSgpO1xuICAgIHJlbmRlclRleHR1YWxEYXRhKCk7XG4gICAgaW5wdXRFcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9IGVsc2Uge1xuICAgIHNob3dGb3JtSW5wdXRFcnJvcigpO1xuICB9XG59KTtcblxuc2VhcmNoQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gIGlmIChzZWFyY2hCb3gudmFsaWRpdHkudmFsaWQpIHtcbiAgICBpbnB1dEVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH0gZWxzZSB7XG4gICAgc2hvd0Zvcm1JbnB1dEVycm9yKCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9