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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXJrbW9kZS1qcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvZGFya21vZGUuanMiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiSVNfQlJPV1NFUiIsIndpbmRvdyIsIkRhcmttb2RlIiwib3B0aW9ucyIsImRlZmF1bHRPcHRpb25zIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0IiwidGltZSIsIm1peENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYnV0dG9uQ29sb3JEYXJrIiwiYnV0dG9uQ29sb3JMaWdodCIsImxhYmVsIiwic2F2ZUluQ29va2llcyIsImF1dG9NYXRjaE9zVGhlbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJjc3MiLCJsYXllciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsImJhY2tncm91bmQiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXJrbW9kZUFjdGl2YXRlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcmVmZXJlZFRoZW1lT3MiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYWRkU3R5bGUiLCJsaW5rRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcnNlRmxvYXQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiaXNEYXJrbW9kZSIsImlzQWN0aXZhdGVkIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsInRvZ2dsZSIsInNldEl0ZW0iLCJjb250YWlucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZPLElBQU1BLFVBQVUsR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFdBQXJDOzs7SUFFY0MsUTs7O0FBQ25CLG9CQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFFBQUksQ0FBQ0gsVUFBTCxFQUFpQjtBQUNmO0FBQ0Q7O0FBRUQsUUFBTUksY0FBYyxHQUFHO0FBQ3JCQyxZQUFNLEVBQUUsTUFEYTtBQUVyQkMsV0FBSyxFQUFFLE1BRmM7QUFHckJDLFVBQUksRUFBRSxPQUhlO0FBSXJCQyxVQUFJLEVBQUUsTUFKZTtBQUtyQkMsY0FBUSxFQUFFLE1BTFc7QUFNckJDLHFCQUFlLEVBQUUsTUFOSTtBQU9yQkMscUJBQWUsRUFBRSxTQVBJO0FBUXJCQyxzQkFBZ0IsRUFBRSxNQVJHO0FBU3JCQyxXQUFLLEVBQUUsRUFUYztBQVVyQkMsbUJBQWEsRUFBRSxJQVZNO0FBV3JCQyxzQkFBZ0IsRUFBRTtBQVhHLEtBQXZCO0FBY0FaLFdBQU8sR0FBR2EsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQmIsY0FBbEIsRUFBa0NELE9BQWxDLENBQVY7QUFFQSxRQUFNZSxHQUFHLHFIQUlTZixPQUFPLENBQUNNLFFBSmpCLHdDQUthTixPQUFPLENBQUNLLElBTHJCLG1NQWFJTCxPQUFPLENBQUNHLEtBYlosZ0NBY0tILE9BQU8sQ0FBQ0UsTUFkYiw4QkFlR0YsT0FBTyxDQUFDSSxJQWZYLHFhQW9DU0osT0FBTyxDQUFDUSxlQXBDakIseUpBMENJUixPQUFPLENBQUNHLEtBMUNaLGdDQTJDS0gsT0FBTyxDQUFDRSxNQTNDYiw4QkE0Q0dGLE9BQU8sQ0FBQ0ksSUE1Q1gsc09BcURTSixPQUFPLENBQUNTLGdCQXJEakIsb0pBNkRTVCxPQUFPLENBQUNPLGVBN0RqQiw4aUJBQVQ7QUFxRkEsUUFBTVMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBLFFBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQSxRQUFNRSxVQUFVLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUVBQyxVQUFNLENBQUNFLFNBQVAsR0FBbUJyQixPQUFPLENBQUNVLEtBQTNCO0FBQ0FTLFVBQU0sQ0FBQ0csU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsMkJBQXJCO0FBQ0FQLFNBQUssQ0FBQ00sU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsZ0JBQXBCO0FBQ0FILGNBQVUsQ0FBQ0UsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIscUJBQXpCO0FBRUEsUUFBTUMsaUJBQWlCLEdBQ3JCMUIsTUFBTSxDQUFDMkIsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsVUFBNUIsTUFBNEMsTUFEOUM7QUFFQSxRQUFNQyxlQUFlLEdBQ25CM0IsT0FBTyxDQUFDWSxnQkFBUixJQUNBZCxNQUFNLENBQUM4QixVQUFQLENBQWtCLDhCQUFsQixFQUFrREMsT0FGcEQ7QUFHQSxRQUFNQyw4QkFBOEIsR0FDbENoQyxNQUFNLENBQUMyQixZQUFQLENBQW9CQyxPQUFwQixDQUE0QixVQUE1QixNQUE0QyxJQUQ5Qzs7QUFHQSxRQUNHRixpQkFBaUIsS0FBSyxJQUF0QixJQUE4QnhCLE9BQU8sQ0FBQ1csYUFBdkMsSUFDQ21CLDhCQUE4QixJQUFJSCxlQUZyQyxFQUdFO0FBQ0FYLFdBQUssQ0FBQ00sU0FBTixDQUFnQkMsR0FBaEIsQ0FDRSwwQkFERixFQUVFLHdCQUZGLEVBR0UsK0JBSEY7QUFLQUosWUFBTSxDQUFDRyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQix3QkFBckI7QUFDQU4sY0FBUSxDQUFDYyxJQUFULENBQWNULFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLHFCQUE1QjtBQUNEOztBQUVETixZQUFRLENBQUNjLElBQVQsQ0FBY0MsWUFBZCxDQUEyQmIsTUFBM0IsRUFBbUNGLFFBQVEsQ0FBQ2MsSUFBVCxDQUFjRSxVQUFqRDtBQUNBaEIsWUFBUSxDQUFDYyxJQUFULENBQWNDLFlBQWQsQ0FBMkJoQixLQUEzQixFQUFrQ0MsUUFBUSxDQUFDYyxJQUFULENBQWNFLFVBQWhEO0FBQ0FoQixZQUFRLENBQUNjLElBQVQsQ0FBY0MsWUFBZCxDQUEyQlosVUFBM0IsRUFBdUNILFFBQVEsQ0FBQ2MsSUFBVCxDQUFjRSxVQUFyRDtBQUVBLFNBQUtDLFFBQUwsQ0FBY25CLEdBQWQ7QUFFQSxTQUFLSSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLSCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLTCxhQUFMLEdBQXFCWCxPQUFPLENBQUNXLGFBQTdCO0FBQ0EsU0FBS04sSUFBTCxHQUFZTCxPQUFPLENBQUNLLElBQXBCO0FBQ0Q7Ozs7NkJBRVFVLEcsRUFBSztBQUNaLFVBQU1vQixXQUFXLEdBQUdsQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBcEI7QUFFQWlCLGlCQUFXLENBQUNDLFlBQVosQ0FBeUIsS0FBekIsRUFBZ0MsWUFBaEM7QUFDQUQsaUJBQVcsQ0FBQ0MsWUFBWixDQUF5QixNQUF6QixFQUFpQyxVQUFqQztBQUNBRCxpQkFBVyxDQUFDQyxZQUFaLENBQ0UsTUFERixFQUVFLGlDQUFpQ0Msa0JBQWtCLENBQUN0QixHQUFELENBRnJEO0FBSUFFLGNBQVEsQ0FBQ3FCLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkosV0FBMUI7QUFDRDs7O2lDQUVZO0FBQUE7O0FBQ1gsVUFBSSxDQUFDdEMsVUFBTCxFQUFpQjtBQUNmO0FBQ0Q7O0FBQ0QsVUFBTXNCLE1BQU0sR0FBRyxLQUFLQSxNQUFwQjtBQUNBLFVBQU1ILEtBQUssR0FBRyxLQUFLQSxLQUFuQjtBQUNBLFVBQU1YLElBQUksR0FBR21DLFVBQVUsQ0FBQyxLQUFLbkMsSUFBTixDQUFWLEdBQXdCLElBQXJDO0FBRUFjLFlBQU0sQ0FBQ0csU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsaUJBQXJCO0FBQ0FKLFlBQU0sQ0FBQ0csU0FBUCxDQUFpQm1CLE1BQWpCLENBQXdCLDJCQUF4QjtBQUNBdEIsWUFBTSxDQUFDaUIsWUFBUCxDQUFvQixZQUFwQixFQUFrQyxvQkFBbEM7QUFDQWpCLFlBQU0sQ0FBQ2lCLFlBQVAsQ0FBb0IsY0FBcEIsRUFBb0MsT0FBcEM7QUFDQWpCLFlBQU0sQ0FBQ2lCLFlBQVAsQ0FBb0IsTUFBcEIsRUFBNEIsVUFBNUI7QUFDQXBCLFdBQUssQ0FBQ00sU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0Isd0JBQXBCO0FBRUFKLFlBQU0sQ0FBQ3VCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDckMsWUFBTUMsVUFBVSxHQUFHLEtBQUksQ0FBQ0MsV0FBTCxFQUFuQjs7QUFFQSxZQUFJLENBQUNELFVBQUwsRUFBaUI7QUFDZjNCLGVBQUssQ0FBQ00sU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsMEJBQXBCO0FBQ0FKLGdCQUFNLENBQUNpQixZQUFQLENBQW9CLFVBQXBCLEVBQWdDLElBQWhDO0FBQ0FTLG9CQUFVLENBQUMsWUFBTTtBQUNmN0IsaUJBQUssQ0FBQ00sU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsK0JBQXBCO0FBQ0FQLGlCQUFLLENBQUNNLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLHdCQUFwQjtBQUNBSixrQkFBTSxDQUFDMkIsZUFBUCxDQUF1QixVQUF2QjtBQUNELFdBSlMsRUFJUHpDLElBSk8sQ0FBVjtBQUtELFNBUkQsTUFRTztBQUNMVyxlQUFLLENBQUNNLFNBQU4sQ0FBZ0JtQixNQUFoQixDQUF1Qix3QkFBdkI7QUFDQXRCLGdCQUFNLENBQUNpQixZQUFQLENBQW9CLFVBQXBCLEVBQWdDLElBQWhDO0FBQ0FTLG9CQUFVLENBQUMsWUFBTTtBQUNmN0IsaUJBQUssQ0FBQ00sU0FBTixDQUFnQm1CLE1BQWhCLENBQXVCLCtCQUF2QjtBQUNBekIsaUJBQUssQ0FBQ00sU0FBTixDQUFnQm1CLE1BQWhCLENBQXVCLDBCQUF2QjtBQUNBdEIsa0JBQU0sQ0FBQzJCLGVBQVAsQ0FBdUIsVUFBdkI7QUFDRCxXQUpTLEVBSVAsQ0FKTyxDQUFWO0FBS0Q7O0FBRUQzQixjQUFNLENBQUNHLFNBQVAsQ0FBaUJ5QixNQUFqQixDQUF3Qix3QkFBeEI7QUFDQTlCLGdCQUFRLENBQUNjLElBQVQsQ0FBY1QsU0FBZCxDQUF3QnlCLE1BQXhCLENBQStCLHFCQUEvQjtBQUNBakQsY0FBTSxDQUFDMkIsWUFBUCxDQUFvQnVCLE9BQXBCLENBQTRCLFVBQTVCLEVBQXdDLENBQUNMLFVBQXpDO0FBQ0QsT0F4QkQ7QUF5QkQ7Ozs2QkFFUTtBQUNQLFVBQUksQ0FBQzlDLFVBQUwsRUFBaUI7QUFDZjtBQUNEOztBQUNELFVBQU1tQixLQUFLLEdBQUcsS0FBS0EsS0FBbkI7QUFDQSxVQUFNMkIsVUFBVSxHQUFHLEtBQUtDLFdBQUwsRUFBbkI7QUFDQSxVQUFNekIsTUFBTSxHQUFHLEtBQUtBLE1BQXBCO0FBRUFILFdBQUssQ0FBQ00sU0FBTixDQUFnQnlCLE1BQWhCLENBQXVCLHdCQUF2QjtBQUNBOUIsY0FBUSxDQUFDYyxJQUFULENBQWNULFNBQWQsQ0FBd0J5QixNQUF4QixDQUErQixxQkFBL0I7QUFDQWpELFlBQU0sQ0FBQzJCLFlBQVAsQ0FBb0J1QixPQUFwQixDQUE0QixVQUE1QixFQUF3QyxDQUFDTCxVQUF6QztBQUNBeEIsWUFBTSxDQUFDaUIsWUFBUCxDQUFvQixZQUFwQixFQUFrQyx1QkFBbEM7QUFDQWpCLFlBQU0sQ0FBQ2lCLFlBQVAsQ0FBb0IsY0FBcEIsRUFBb0MsTUFBcEM7QUFFRDs7O2tDQUVhO0FBQ1osVUFBSSxDQUFDdkMsVUFBTCxFQUFpQjtBQUNmLGVBQU8sSUFBUDtBQUNEOztBQUNELGFBQU9vQixRQUFRLENBQUNjLElBQVQsQ0FBY1QsU0FBZCxDQUF3QjJCLFFBQXhCLENBQWlDLHFCQUFqQyxDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsT0g7Ozs7O0FBR0E7Ozs7QUFDQSwwQkFBZ0I7QUFDZCxHQUFDLFVBQVNuRCxNQUFULEVBQWlCO0FBQ2hCQSxVQUFNLENBQUNDLFFBQVA7QUFDRCxHQUZELEVBRUdELE1BRkg7QUFHRDtBQUNEIiwiZmlsZSI6ImRhcmttb2RlLWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkYXJrbW9kZS1qc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkYXJrbW9kZS1qc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkYXJrbW9kZS1qc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBJU19CUk9XU0VSID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhcmttb2RlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgYm90dG9tOiAnMzJweCcsXG4gICAgICByaWdodDogJzMycHgnLFxuICAgICAgbGVmdDogJ3Vuc2V0JyxcbiAgICAgIHRpbWU6ICcwLjNzJyxcbiAgICAgIG1peENvbG9yOiAnI2ZmZicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIGJ1dHRvbkNvbG9yRGFyazogJyMxMDBmMmMnLFxuICAgICAgYnV0dG9uQ29sb3JMaWdodDogJyNmZmYnLFxuICAgICAgbGFiZWw6ICcnLFxuICAgICAgc2F2ZUluQ29va2llczogdHJ1ZSxcbiAgICAgIGF1dG9NYXRjaE9zVGhlbWU6IHRydWVcbiAgICB9O1xuXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgIGNvbnN0IGNzcyA9IGBcbiAgICAgIC5kYXJrbW9kZS1sYXllciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7b3B0aW9ucy5taXhDb2xvcn07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAke29wdGlvbnMudGltZX0gZWFzZTtcbiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS1sYXllci0tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDIuOXJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjlyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcmlnaHQ6ICR7b3B0aW9ucy5yaWdodH07XG4gICAgICAgIGJvdHRvbTogJHtvcHRpb25zLmJvdHRvbX07XG4gICAgICAgIGxlZnQ6ICR7b3B0aW9ucy5sZWZ0fTtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLWxheWVyLS1zaW1wbGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLWxheWVyLS1leHBhbmRlZCB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uIHtcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmRhcmttb2RlLXRvZ2dsZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7b3B0aW9ucy5idXR0b25Db2xvckRhcmt9O1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIHJpZ2h0OiAke29wdGlvbnMucmlnaHR9O1xuICAgICAgICBib3R0b206ICR7b3B0aW9ucy5ib3R0b219O1xuICAgICAgICBsZWZ0OiAke29wdGlvbnMubGVmdH07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS10b2dnbGUtLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtvcHRpb25zLmJ1dHRvbkNvbG9yTGlnaHR9O1xuICAgICAgfVxuXG4gICAgICAuZGFya21vZGUtdG9nZ2xlLS1pbmFjdGl2ZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrbW9kZS1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtvcHRpb25zLmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHotaW5kZXg6IC0xMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICBpbWcsIC5kYXJrbW9kZS1pZ25vcmUge1xuICAgICAgICBpc29sYXRpb246IGlzb2xhdGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgICAgICAgLmRhcmttb2RlLXRvZ2dsZSB7ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50fVxuICAgICAgfVxuXG4gICAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0byksICgtbXMtYWNjZWxlcmF0b3I6dHJ1ZSkge1xuICAgICAgICAuZGFya21vZGUtdG9nZ2xlIHtkaXNwbGF5OiBub25lICFpbXBvcnRhbnR9XG4gICAgICB9XG4gICAgYDtcblxuICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IG9wdGlvbnMubGFiZWw7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLXRvZ2dsZS0taW5hY3RpdmUnKTtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllcicpO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtYmFja2dyb3VuZCcpO1xuXG4gICAgY29uc3QgZGFya21vZGVBY3RpdmF0ZWQgPVxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrbW9kZScpID09PSAndHJ1ZSc7XG4gICAgY29uc3QgcHJlZmVyZWRUaGVtZU9zID1cbiAgICAgIG9wdGlvbnMuYXV0b01hdGNoT3NUaGVtZSAmJlxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xuICAgIGNvbnN0IGRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiA9XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rhcmttb2RlJykgPT09IG51bGw7XG5cbiAgICBpZiAoXG4gICAgICAoZGFya21vZGVBY3RpdmF0ZWQgPT09IHRydWUgJiYgb3B0aW9ucy5zYXZlSW5Db29raWVzKSB8fFxuICAgICAgKGRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiAmJiBwcmVmZXJlZFRoZW1lT3MpXG4gICAgKSB7XG4gICAgICBsYXllci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAnZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkJyxcbiAgICAgICAgJ2Rhcmttb2RlLWxheWVyLS1zaW1wbGUnLFxuICAgICAgICAnZGFya21vZGUtbGF5ZXItLW5vLXRyYW5zaXRpb24nXG4gICAgICApO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLXRvZ2dsZS0td2hpdGUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtLWFjdGl2YXRlZCcpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGJ1dHRvbiwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShsYXllciwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShiYWNrZ3JvdW5kLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuXG4gICAgdGhpcy5hZGRTdHlsZShjc3MpO1xuXG4gICAgdGhpcy5idXR0b24gPSBidXR0b247XG4gICAgdGhpcy5sYXllciA9IGxheWVyO1xuICAgIHRoaXMuc2F2ZUluQ29va2llcyA9IG9wdGlvbnMuc2F2ZUluQ29va2llcztcbiAgICB0aGlzLnRpbWUgPSBvcHRpb25zLnRpbWU7XG4gIH1cblxuICBhZGRTdHlsZShjc3MpIHtcbiAgICBjb25zdCBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAnaHJlZicsXG4gICAgICAnZGF0YTp0ZXh0L2NzcztjaGFyc2V0PVVURi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoY3NzKVxuICAgICk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XG4gIH1cblxuICBzaG93V2lkZ2V0KCkge1xuICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvbjtcbiAgICBjb25zdCBsYXllciA9IHRoaXMubGF5ZXI7XG4gICAgY29uc3QgdGltZSA9IHBhcnNlRmxvYXQodGhpcy50aW1lKSAqIDEwMDA7XG5cbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtdG9nZ2xlJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLXRvZ2dsZS0taW5hY3RpdmUnKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkFjdGl2YXRlIGRhcmsgbW9kZVwiKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIsIFwiZmFsc2VcIik7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllci0tYnV0dG9uJyk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpc0Rhcmttb2RlID0gdGhpcy5pc0FjdGl2YXRlZCgpO1xuXG4gICAgICBpZiAoIWlzRGFya21vZGUpIHtcbiAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtbGF5ZXItLXNpbXBsZScpO1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0sIHRpbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUtbGF5ZXItLXNpbXBsZScpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsYXllci5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrbW9kZS1sYXllci0tbm8tdHJhbnNpdGlvbicpO1xuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLWxheWVyLS1leHBhbmRlZCcpO1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0sIDEpO1xuICAgICAgfVxuXG4gICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUtdG9nZ2xlLS13aGl0ZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrbW9kZS0tYWN0aXZhdGVkJyk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rhcmttb2RlJywgIWlzRGFya21vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYXllciA9IHRoaXMubGF5ZXI7XG4gICAgY29uc3QgaXNEYXJrbW9kZSA9IHRoaXMuaXNBY3RpdmF0ZWQoKTtcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvbjtcblxuICAgIGxheWVyLmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLWxheWVyLS1zaW1wbGUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rhcmttb2RlJywgIWlzRGFya21vZGUpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiRGUtYWN0aXZhdGUgZGFyayBtb2RlXCIpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuXG4gIH1cblxuICBpc0FjdGl2YXRlZCgpIHtcbiAgICBpZiAoIUlTX0JST1dTRVIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcbiAgfVxufVxuIiwiaW1wb3J0IERhcmttb2RlLCB7IElTX0JST1dTRVIgfSBmcm9tICcuL2Rhcmttb2RlJztcclxuZXhwb3J0IGRlZmF1bHQgRGFya21vZGU7XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5pZiAoSVNfQlJPV1NFUikge1xyXG4gIChmdW5jdGlvbih3aW5kb3cpIHtcclxuICAgIHdpbmRvdy5EYXJrbW9kZSA9IERhcmttb2RlO1xyXG4gIH0pKHdpbmRvdyk7XHJcbn1cclxuLyogZXNsaW50LWVuYWJsZSAqL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9

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
    const countryIconSrc = `${data.sys.country}`.toLowerCase();

    mainContainer.setAttribute("class", "main-container");
    titleH.textContent = data.name;
    temperaturePara.textContent = `${isConvertedTemptoCelsius}  ??C`;
    descriptionPara.textContent = data.weather[0].main;
    detailedDescriptionPara.textContent = data.weather[0].description;

    tempParaIcon.className = "material-icons";
    tempDescIcon.className = "material-icons";
    tempDetailedDescIcon.className = "material-icons";
    countryIcon.src = `https://flagcdn.com/32x24/${countryIconSrc}.png`;
    toggleTempBtn.textContent = `??F`;
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
        ? (temperaturePara.textContent = `${isConvertedTempToFarenheit} ??F`)
        : (temperaturePara.textContent = `${isConvertedTemptoCelsius}  ??C`);

      if (temperaturePara.textContent.includes("C")) {
        toggleTempBtn.textContent = "??F";
      } else if (temperaturePara.textContent.includes("F")) {
        toggleTempBtn.textContent = `??C`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsNEJBQTRCO0FBQ3hFLDRDQUE0QywyQkFBMkI7O0FBRXZFO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFZO0FBQ25DO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hNS1wcm9qZWN0LXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvZGFya21vZGUtanMvbGliL2Rhcmttb2RlLWpzLmpzIiwid2VicGFjazovL2E1LXByb2plY3Qtd2VhdGhlcmFwcC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vYTUtcHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2E1LXByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hNS1wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2E1LXByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2E1LXByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2E1LXByb2plY3Qtd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRhcmttb2RlLWpzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRhcmttb2RlLWpzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRhcmttb2RlLWpzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL3NyYy9kYXJrbW9kZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9kYXJrbW9kZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5JU19CUk9XU0VSID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBJU19CUk9XU0VSID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLklTX0JST1dTRVIgPSBJU19CUk9XU0VSO1xuXG52YXIgRGFya21vZGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEYXJrbW9kZShvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhcmttb2RlKTtcblxuICAgIGlmICghSVNfQlJPV1NFUikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIGJvdHRvbTogJzMycHgnLFxuICAgICAgcmlnaHQ6ICczMnB4JyxcbiAgICAgIGxlZnQ6ICd1bnNldCcsXG4gICAgICB0aW1lOiAnMC4zcycsXG4gICAgICBtaXhDb2xvcjogJyNmZmYnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBidXR0b25Db2xvckRhcms6ICcjMTAwZjJjJyxcbiAgICAgIGJ1dHRvbkNvbG9yTGlnaHQ6ICcjZmZmJyxcbiAgICAgIGxhYmVsOiAnJyxcbiAgICAgIHNhdmVJbkNvb2tpZXM6IHRydWUsXG4gICAgICBhdXRvTWF0Y2hPc1RoZW1lOiB0cnVlXG4gICAgfTtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIHZhciBjc3MgPSBcIlxcbiAgICAgIC5kYXJrbW9kZS1sYXllciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQ6IFwiLmNvbmNhdChvcHRpb25zLm1peENvbG9yLCBcIjtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBcIikuY29uY2F0KG9wdGlvbnMudGltZSwgXCIgZWFzZTtcXG4gICAgICAgIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGFya21vZGUtbGF5ZXItLWJ1dHRvbiB7XFxuICAgICAgICB3aWR0aDogMi45cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAyLjlyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICByaWdodDogXCIpLmNvbmNhdChvcHRpb25zLnJpZ2h0LCBcIjtcXG4gICAgICAgIGJvdHRvbTogXCIpLmNvbmNhdChvcHRpb25zLmJvdHRvbSwgXCI7XFxuICAgICAgICBsZWZ0OiBcIikuY29uY2F0KG9wdGlvbnMubGVmdCwgXCI7XFxuICAgICAgfVxcblxcbiAgICAgIC5kYXJrbW9kZS1sYXllci0tc2ltcGxlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgIWltcG9ydGFudDtcXG4gICAgICB9XFxuXFxuICAgICAgLmRhcmttb2RlLWxheWVyLS1leHBhbmRlZCB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGFya21vZGUtbGF5ZXItLW5vLXRyYW5zaXRpb24ge1xcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgLmRhcmttb2RlLXRvZ2dsZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBcIikuY29uY2F0KG9wdGlvbnMuYnV0dG9uQ29sb3JEYXJrLCBcIjtcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYm9yZGVyOm5vbmU7XFxuICAgICAgICByaWdodDogXCIpLmNvbmNhdChvcHRpb25zLnJpZ2h0LCBcIjtcXG4gICAgICAgIGJvdHRvbTogXCIpLmNvbmNhdChvcHRpb25zLmJvdHRvbSwgXCI7XFxuICAgICAgICBsZWZ0OiBcIikuY29uY2F0KG9wdGlvbnMubGVmdCwgXCI7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgLmRhcmttb2RlLXRvZ2dsZS0td2hpdGUge1xcbiAgICAgICAgYmFja2dyb3VuZDogXCIpLmNvbmNhdChvcHRpb25zLmJ1dHRvbkNvbG9yTGlnaHQsIFwiO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGFya21vZGUtdG9nZ2xlLS1pbmFjdGl2ZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGFya21vZGUtYmFja2dyb3VuZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBcIikuY29uY2F0KG9wdGlvbnMuYmFja2dyb3VuZENvbG9yLCBcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgei1pbmRleDogLTEwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgIH1cXG5cXG4gICAgICBpbWcsIC5kYXJrbW9kZS1pZ25vcmUge1xcbiAgICAgICAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIH1cXG5cXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xcbiAgICAgICAgLmRhcmttb2RlLXRvZ2dsZSB7ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50fVxcbiAgICAgIH1cXG5cXG4gICAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0byksICgtbXMtYWNjZWxlcmF0b3I6dHJ1ZSkge1xcbiAgICAgICAgLmRhcmttb2RlLXRvZ2dsZSB7ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50fVxcbiAgICAgIH1cXG4gICAgXCIpO1xuICAgIHZhciBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB2YXIgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBvcHRpb25zLmxhYmVsO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS10b2dnbGUtLWluYWN0aXZlJyk7XG4gICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtbGF5ZXInKTtcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWJhY2tncm91bmQnKTtcbiAgICB2YXIgZGFya21vZGVBY3RpdmF0ZWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rhcmttb2RlJykgPT09ICd0cnVlJztcbiAgICB2YXIgcHJlZmVyZWRUaGVtZU9zID0gb3B0aW9ucy5hdXRvTWF0Y2hPc1RoZW1lICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcbiAgICB2YXIgZGFya21vZGVOZXZlckFjdGl2YXRlZEJ5QWN0aW9uID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrbW9kZScpID09PSBudWxsO1xuXG4gICAgaWYgKGRhcmttb2RlQWN0aXZhdGVkID09PSB0cnVlICYmIG9wdGlvbnMuc2F2ZUluQ29va2llcyB8fCBkYXJrbW9kZU5ldmVyQWN0aXZhdGVkQnlBY3Rpb24gJiYgcHJlZmVyZWRUaGVtZU9zKSB7XG4gICAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllci0tZXhwYW5kZWQnLCAnZGFya21vZGUtbGF5ZXItLXNpbXBsZScsICdkYXJrbW9kZS1sYXllci0tbm8tdHJhbnNpdGlvbicpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLXRvZ2dsZS0td2hpdGUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtLWFjdGl2YXRlZCcpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGJ1dHRvbiwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShsYXllciwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShiYWNrZ3JvdW5kLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIHRoaXMuYWRkU3R5bGUoY3NzKTtcbiAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcbiAgICB0aGlzLmxheWVyID0gbGF5ZXI7XG4gICAgdGhpcy5zYXZlSW5Db29raWVzID0gb3B0aW9ucy5zYXZlSW5Db29raWVzO1xuICAgIHRoaXMudGltZSA9IG9wdGlvbnMudGltZTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEYXJrbW9kZSwgW3tcbiAgICBrZXk6IFwiYWRkU3R5bGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkU3R5bGUoY3NzKSB7XG4gICAgICB2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsICdkYXRhOnRleHQvY3NzO2NoYXJzZXQ9VVRGLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChjc3MpKTtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGlua0VsZW1lbnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaG93V2lkZ2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dXaWRnZXQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIUlTX0JST1dTRVIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgYnV0dG9uID0gdGhpcy5idXR0b247XG4gICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyO1xuICAgICAgdmFyIHRpbWUgPSBwYXJzZUZsb2F0KHRoaXMudGltZSkgKiAxMDAwO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLXRvZ2dsZScpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLXRvZ2dsZS0taW5hY3RpdmUnKTtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiQWN0aXZhdGUgZGFyayBtb2RlXCIpO1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1idXR0b24nKTtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzRGFya21vZGUgPSBfdGhpcy5pc0FjdGl2YXRlZCgpO1xuXG4gICAgICAgIGlmICghaXNEYXJrbW9kZSkge1xuICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyLS1leHBhbmRlZCcpO1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS1sYXllci0tbm8tdHJhbnNpdGlvbicpO1xuICAgICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUtbGF5ZXItLXNpbXBsZScpO1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICB9LCB0aW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXllci5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrbW9kZS1sYXllci0tc2ltcGxlJyk7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgICBsYXllci5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrbW9kZS1sYXllci0tZXhwYW5kZWQnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgfSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUtdG9nZ2xlLS13aGl0ZScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrbW9kZScsICFpc0Rhcmttb2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0b2dnbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgaWYgKCFJU19CUk9XU0VSKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGxheWVyID0gdGhpcy5sYXllcjtcbiAgICAgIHZhciBpc0Rhcmttb2RlID0gdGhpcy5pc0FjdGl2YXRlZCgpO1xuICAgICAgdmFyIGJ1dHRvbiA9IHRoaXMuYnV0dG9uO1xuICAgICAgbGF5ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZGFya21vZGUtbGF5ZXItLXNpbXBsZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrbW9kZS0tYWN0aXZhdGVkJyk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rhcmttb2RlJywgIWlzRGFya21vZGUpO1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJEZS1hY3RpdmF0ZSBkYXJrIG1vZGVcIik7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIsIFwidHJ1ZVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNBY3RpdmF0ZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNBY3RpdmF0ZWQoKSB7XG4gICAgICBpZiAoIUlTX0JST1dTRVIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFya21vZGUtLWFjdGl2YXRlZCcpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEYXJrbW9kZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRGFya21vZGU7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZGFya21vZGUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Rhcmttb2RlICovIFwiLi9zcmMvZGFya21vZGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfZGVmYXVsdCA9IF9kYXJrbW9kZS5kZWZhdWx0O1xuLyogZXNsaW50LWRpc2FibGUgKi9cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbmlmIChfZGFya21vZGUuSVNfQlJPV1NFUikge1xuICAoZnVuY3Rpb24gKHdpbmRvdykge1xuICAgIHdpbmRvdy5EYXJrbW9kZSA9IF9kYXJrbW9kZS5kZWZhdWx0O1xuICB9KSh3aW5kb3cpO1xufVxuLyogZXNsaW50LWVuYWJsZSAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlrWVhKcmJXOWtaUzFxY3k5M1pXSndZV05yTDNWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRpTENKM1pXSndZV05yT2k4dlpHRnlhMjF2WkdVdGFuTXZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWlMQ0ozWldKd1lXTnJPaTh2WkdGeWEyMXZaR1V0YW5NdkxpOXpjbU12WkdGeWEyMXZaR1V1YW5NaUxDSjNaV0p3WVdOck9pOHZaR0Z5YTIxdlpHVXRhbk12TGk5emNtTXZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHNpU1ZOZlFsSlBWMU5GVWlJc0luZHBibVJ2ZHlJc0lrUmhjbXR0YjJSbElpd2liM0IwYVc5dWN5SXNJbVJsWm1GMWJIUlBjSFJwYjI1eklpd2lZbTkwZEc5dElpd2ljbWxuYUhRaUxDSnNaV1owSWl3aWRHbHRaU0lzSW0xcGVFTnZiRzl5SWl3aVltRmphMmR5YjNWdVpFTnZiRzl5SWl3aVluVjBkRzl1UTI5c2IzSkVZWEpySWl3aVluVjBkRzl1UTI5c2IzSk1hV2RvZENJc0lteGhZbVZzSWl3aWMyRjJaVWx1UTI5dmEybGxjeUlzSW1GMWRHOU5ZWFJqYUU5elZHaGxiV1VpTENKUFltcGxZM1FpTENKaGMzTnBaMjRpTENKamMzTWlMQ0pzWVhsbGNpSXNJbVJ2WTNWdFpXNTBJaXdpWTNKbFlYUmxSV3hsYldWdWRDSXNJbUoxZEhSdmJpSXNJbUpoWTJ0bmNtOTFibVFpTENKcGJtNWxja2hVVFV3aUxDSmpiR0Z6YzB4cGMzUWlMQ0poWkdRaUxDSmtZWEpyYlc5a1pVRmpkR2wyWVhSbFpDSXNJbXh2WTJGc1UzUnZjbUZuWlNJc0ltZGxkRWwwWlcwaUxDSndjbVZtWlhKbFpGUm9aVzFsVDNNaUxDSnRZWFJqYUUxbFpHbGhJaXdpYldGMFkyaGxjeUlzSW1SaGNtdHRiMlJsVG1WMlpYSkJZM1JwZG1GMFpXUkNlVUZqZEdsdmJpSXNJbUp2WkhraUxDSnBibk5sY25SQ1pXWnZjbVVpTENKbWFYSnpkRU5vYVd4a0lpd2lZV1JrVTNSNWJHVWlMQ0pzYVc1clJXeGxiV1Z1ZENJc0luTmxkRUYwZEhKcFluVjBaU0lzSW1WdVkyOWtaVlZTU1VOdmJYQnZibVZ1ZENJc0ltaGxZV1FpTENKaGNIQmxibVJEYUdsc1pDSXNJbkJoY25ObFJteHZZWFFpTENKeVpXMXZkbVVpTENKaFpHUkZkbVZ1ZEV4cGMzUmxibVZ5SWl3aWFYTkVZWEpyYlc5a1pTSXNJbWx6UVdOMGFYWmhkR1ZrSWl3aWMyVjBWR2x0Wlc5MWRDSXNJbkpsYlc5MlpVRjBkSEpwWW5WMFpTSXNJblJ2WjJkc1pTSXNJbk5sZEVsMFpXMGlMQ0pqYjI1MFlXbHVjeUpkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6dEJRVU5FTEU4N1FVTldRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHdEVRVUV3UXl4blEwRkJaME03UVVGRE1VVTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5SVUZCZDBRc2EwSkJRV3RDTzBGQlF6RkZPMEZCUTBFc2VVUkJRV2xFTEdOQlFXTTdRVUZETDBRN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsRVFVRjVReXhwUTBGQmFVTTdRVUZETVVVc2QwaEJRV2RJTEcxQ1FVRnRRaXhGUVVGRk8wRkJRM0pKTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVOQlFUSkNMREJDUVVFd1FpeEZRVUZGTzBGQlEzWkVMSGxEUVVGcFF5eGxRVUZsTzBGQlEyaEVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERoRVFVRnpSQ3dyUkVGQkswUTdPMEZCUlhKSU8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRGJFWlBMRWxCUVUxQkxGVkJRVlVzUjBGQlJ5eFBRVUZQUXl4TlFVRlFMRXRCUVd0Q0xGZEJRWEpET3pzN1NVRkZZME1zVVRzN08wRkJRMjVDTEc5Q1FVRlpReXhQUVVGYUxFVkJRWEZDTzBGQlFVRTdPMEZCUTI1Q0xGRkJRVWtzUTBGQlEwZ3NWVUZCVEN4RlFVRnBRanRCUVVObU8wRkJRMFE3TzBGQlJVUXNVVUZCVFVrc1kwRkJZeXhIUVVGSE8wRkJRM0pDUXl4WlFVRk5MRVZCUVVVc1RVRkVZVHRCUVVWeVFrTXNWMEZCU3l4RlFVRkZMRTFCUm1NN1FVRkhja0pETEZWQlFVa3NSVUZCUlN4UFFVaGxPMEZCU1hKQ1F5eFZRVUZKTEVWQlFVVXNUVUZLWlR0QlFVdHlRa01zWTBGQlVTeEZRVUZGTEUxQlRGYzdRVUZOY2tKRExIRkNRVUZsTEVWQlFVVXNUVUZPU1R0QlFVOXlRa01zY1VKQlFXVXNSVUZCUlN4VFFWQkpPMEZCVVhKQ1F5eHpRa0ZCWjBJc1JVRkJSU3hOUVZKSE8wRkJVM0pDUXl4WFFVRkxMRVZCUVVVc1JVRlVZenRCUVZWeVFrTXNiVUpCUVdFc1JVRkJSU3hKUVZaTk8wRkJWM0pDUXl4elFrRkJaMElzUlVGQlJUdEJRVmhITEV0QlFYWkNPMEZCWTBGYUxGZEJRVThzUjBGQlIyRXNUVUZCVFN4RFFVRkRReXhOUVVGUUxFTkJRV01zUlVGQlpDeEZRVUZyUW1Jc1kwRkJiRUlzUlVGQmEwTkVMRTlCUVd4RExFTkJRVlk3UVVGRlFTeFJRVUZOWlN4SFFVRkhMSEZJUVVsVFppeFBRVUZQTEVOQlFVTk5MRkZCU21wQ0xIZERRVXRoVGl4UFFVRlBMRU5CUVVOTExFbEJUSEpDTEcxTlFXRkpUQ3hQUVVGUExFTkJRVU5ITEV0Qllsb3NaME5CWTB0SUxFOUJRVThzUTBGQlEwVXNUVUZrWWl3NFFrRmxSMFlzVDBGQlR5eERRVUZEU1N4SlFXWllMSEZoUVc5RFUwb3NUMEZCVHl4RFFVRkRVU3hsUVhCRGFrSXNlVXBCTUVOSlVpeFBRVUZQTEVOQlFVTkhMRXRCTVVOYUxHZERRVEpEUzBnc1QwRkJUeXhEUVVGRFJTeE5RVE5EWWl3NFFrRTBRMGRHTEU5QlFVOHNRMEZCUTBrc1NVRTFRMWdzYzA5QmNVUlRTaXhQUVVGUExFTkJRVU5UTEdkQ1FYSkVha0lzYjBwQk5rUlRWQ3hQUVVGUExFTkJRVU5QTEdWQk4wUnFRaXc0YVVKQlFWUTdRVUZ4UmtFc1VVRkJUVk1zUzBGQlN5eEhRVUZIUXl4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSXNTMEZCZGtJc1EwRkJaRHRCUVVOQkxGRkJRVTFETEUxQlFVMHNSMEZCUjBZc1VVRkJVU3hEUVVGRFF5eGhRVUZVTEVOQlFYVkNMRkZCUVhaQ0xFTkJRV1k3UVVGRFFTeFJRVUZOUlN4VlFVRlZMRWRCUVVkSUxGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRaXhMUVVGMlFpeERRVUZ1UWp0QlFVVkJReXhWUVVGTkxFTkJRVU5GTEZOQlFWQXNSMEZCYlVKeVFpeFBRVUZQTEVOQlFVTlZMRXRCUVROQ08wRkJRMEZUTEZWQlFVMHNRMEZCUTBjc1UwRkJVQ3hEUVVGcFFrTXNSMEZCYWtJc1EwRkJjVUlzTWtKQlFYSkNPMEZCUTBGUUxGTkJRVXNzUTBGQlEwMHNVMEZCVGl4RFFVRm5Ra01zUjBGQmFFSXNRMEZCYjBJc1owSkJRWEJDTzBGQlEwRklMR05CUVZVc1EwRkJRMFVzVTBGQldDeERRVUZ4UWtNc1IwRkJja0lzUTBGQmVVSXNjVUpCUVhwQ08wRkJSVUVzVVVGQlRVTXNhVUpCUVdsQ0xFZEJRM0pDTVVJc1RVRkJUU3hEUVVGRE1rSXNXVUZCVUN4RFFVRnZRa01zVDBGQmNFSXNRMEZCTkVJc1ZVRkJOVUlzVFVGQk5FTXNUVUZFT1VNN1FVRkZRU3hSUVVGTlF5eGxRVUZsTEVkQlEyNUNNMElzVDBGQlR5eERRVUZEV1N4blFrRkJVaXhKUVVOQlpDeE5RVUZOTEVOQlFVTTRRaXhWUVVGUUxFTkJRV3RDTERoQ1FVRnNRaXhGUVVGclJFTXNUMEZHY0VRN1FVRkhRU3hSUVVGTlF5dzRRa0ZCT0VJc1IwRkRiRU5vUXl4TlFVRk5MRU5CUVVNeVFpeFpRVUZRTEVOQlFXOUNReXhQUVVGd1FpeERRVUUwUWl4VlFVRTFRaXhOUVVFMFF5eEpRVVE1UXpzN1FVRkhRU3hSUVVOSFJpeHBRa0ZCYVVJc1MwRkJTeXhKUVVGMFFpeEpRVUU0UW5oQ0xFOUJRVThzUTBGQlExY3NZVUZCZGtNc1NVRkRRMjFDTERoQ1FVRTRRaXhKUVVGSlNDeGxRVVp5UXl4RlFVZEZPMEZCUTBGWUxGZEJRVXNzUTBGQlEwMHNVMEZCVGl4RFFVRm5Ra01zUjBGQmFFSXNRMEZEUlN3d1FrRkVSaXhGUVVWRkxIZENRVVpHTEVWQlIwVXNLMEpCU0VZN1FVRkxRVW9zV1VGQlRTeERRVUZEUnl4VFFVRlFMRU5CUVdsQ1F5eEhRVUZxUWl4RFFVRnhRaXgzUWtGQmNrSTdRVUZEUVU0c1kwRkJVU3hEUVVGRFl5eEpRVUZVTEVOQlFXTlVMRk5CUVdRc1EwRkJkMEpETEVkQlFYaENMRU5CUVRSQ0xIRkNRVUUxUWp0QlFVTkVPenRCUVVWRVRpeFpRVUZSTEVOQlFVTmpMRWxCUVZRc1EwRkJZME1zV1VGQlpDeERRVUV5UW1Jc1RVRkJNMElzUlVGQmJVTkdMRkZCUVZFc1EwRkJRMk1zU1VGQlZDeERRVUZqUlN4VlFVRnFSRHRCUVVOQmFFSXNXVUZCVVN4RFFVRkRZeXhKUVVGVUxFTkJRV05ETEZsQlFXUXNRMEZCTWtKb1FpeExRVUV6UWl4RlFVRnJRME1zVVVGQlVTeERRVUZEWXl4SlFVRlVMRU5CUVdORkxGVkJRV2hFTzBGQlEwRm9RaXhaUVVGUkxFTkJRVU5qTEVsQlFWUXNRMEZCWTBNc1dVRkJaQ3hEUVVFeVFsb3NWVUZCTTBJc1JVRkJkVU5JTEZGQlFWRXNRMEZCUTJNc1NVRkJWQ3hEUVVGalJTeFZRVUZ5UkR0QlFVVkJMRk5CUVV0RExGRkJRVXdzUTBGQlkyNUNMRWRCUVdRN1FVRkZRU3hUUVVGTFNTeE5RVUZNTEVkQlFXTkJMRTFCUVdRN1FVRkRRU3hUUVVGTFNDeExRVUZNTEVkQlFXRkJMRXRCUVdJN1FVRkRRU3hUUVVGTFRDeGhRVUZNTEVkQlFYRkNXQ3hQUVVGUExFTkJRVU5YTEdGQlFUZENPMEZCUTBFc1UwRkJTMDRzU1VGQlRDeEhRVUZaVEN4UFFVRlBMRU5CUVVOTExFbEJRWEJDTzBGQlEwUTdPenM3TmtKQlJWRlZMRWNzUlVGQlN6dEJRVU5hTEZWQlFVMXZRaXhYUVVGWExFZEJRVWRzUWl4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSXNUVUZCZGtJc1EwRkJjRUk3UVVGRlFXbENMR2xDUVVGWExFTkJRVU5ETEZsQlFWb3NRMEZCZVVJc1MwRkJla0lzUlVGQlowTXNXVUZCYUVNN1FVRkRRVVFzYVVKQlFWY3NRMEZCUTBNc1dVRkJXaXhEUVVGNVFpeE5RVUY2UWl4RlFVRnBReXhWUVVGcVF6dEJRVU5CUkN4cFFrRkJWeXhEUVVGRFF5eFpRVUZhTEVOQlEwVXNUVUZFUml4RlFVVkZMR2xEUVVGcFEwTXNhMEpCUVd0Q0xFTkJRVU4wUWl4SFFVRkVMRU5CUm5KRU8wRkJTVUZGTEdOQlFWRXNRMEZCUTNGQ0xFbEJRVlFzUTBGQlkwTXNWMEZCWkN4RFFVRXdRa29zVjBGQk1VSTdRVUZEUkRzN08ybERRVVZaTzBGQlFVRTdPMEZCUTFnc1ZVRkJTU3hEUVVGRGRFTXNWVUZCVEN4RlFVRnBRanRCUVVObU8wRkJRMFE3TzBGQlEwUXNWVUZCVFhOQ0xFMUJRVTBzUjBGQlJ5eExRVUZMUVN4TlFVRndRanRCUVVOQkxGVkJRVTFJTEV0QlFVc3NSMEZCUnl4TFFVRkxRU3hMUVVGdVFqdEJRVU5CTEZWQlFVMVlMRWxCUVVrc1IwRkJSMjFETEZWQlFWVXNRMEZCUXl4TFFVRkxia01zU1VGQlRpeERRVUZXTEVkQlFYZENMRWxCUVhKRE8wRkJSVUZqTEZsQlFVMHNRMEZCUTBjc1UwRkJVQ3hEUVVGcFFrTXNSMEZCYWtJc1EwRkJjVUlzYVVKQlFYSkNPMEZCUTBGS0xGbEJRVTBzUTBGQlEwY3NVMEZCVUN4RFFVRnBRbTFDTEUxQlFXcENMRU5CUVhkQ0xESkNRVUY0UWp0QlFVTkJkRUlzV1VGQlRTeERRVUZEYVVJc1dVRkJVQ3hEUVVGdlFpeFpRVUZ3UWl4RlFVRnJReXh2UWtGQmJFTTdRVUZEUVdwQ0xGbEJRVTBzUTBGQlEybENMRmxCUVZBc1EwRkJiMElzWTBGQmNFSXNSVUZCYjBNc1QwRkJjRU03UVVGRFFXcENMRmxCUVUwc1EwRkJRMmxDTEZsQlFWQXNRMEZCYjBJc1RVRkJjRUlzUlVGQk5FSXNWVUZCTlVJN1FVRkRRWEJDTEZkQlFVc3NRMEZCUTAwc1UwRkJUaXhEUVVGblFrTXNSMEZCYUVJc1EwRkJiMElzZDBKQlFYQkNPMEZCUlVGS0xGbEJRVTBzUTBGQlEzVkNMR2RDUVVGUUxFTkJRWGRDTEU5QlFYaENMRVZCUVdsRExGbEJRVTA3UVVGRGNrTXNXVUZCVFVNc1ZVRkJWU3hIUVVGSExFdEJRVWtzUTBGQlEwTXNWMEZCVEN4RlFVRnVRanM3UVVGRlFTeFpRVUZKTEVOQlFVTkVMRlZCUVV3c1JVRkJhVUk3UVVGRFpqTkNMR1ZCUVVzc1EwRkJRMDBzVTBGQlRpeERRVUZuUWtNc1IwRkJhRUlzUTBGQmIwSXNNRUpCUVhCQ08wRkJRMEZLTEdkQ1FVRk5MRU5CUVVOcFFpeFpRVUZRTEVOQlFXOUNMRlZCUVhCQ0xFVkJRV2RETEVsQlFXaERPMEZCUTBGVExHOUNRVUZWTEVOQlFVTXNXVUZCVFR0QlFVTm1OMElzYVVKQlFVc3NRMEZCUTAwc1UwRkJUaXhEUVVGblFrTXNSMEZCYUVJc1EwRkJiMElzSzBKQlFYQkNPMEZCUTBGUUxHbENRVUZMTEVOQlFVTk5MRk5CUVU0c1EwRkJaMEpETEVkQlFXaENMRU5CUVc5Q0xIZENRVUZ3UWp0QlFVTkJTaXhyUWtGQlRTeERRVUZETWtJc1pVRkJVQ3hEUVVGMVFpeFZRVUYyUWp0QlFVTkVMRmRCU2xNc1JVRkpVSHBETEVsQlNrOHNRMEZCVmp0QlFVdEVMRk5CVWtRc1RVRlJUenRCUVVOTVZ5eGxRVUZMTEVOQlFVTk5MRk5CUVU0c1EwRkJaMEp0UWl4TlFVRm9RaXhEUVVGMVFpeDNRa0ZCZGtJN1FVRkRRWFJDTEdkQ1FVRk5MRU5CUVVOcFFpeFpRVUZRTEVOQlFXOUNMRlZCUVhCQ0xFVkJRV2RETEVsQlFXaERPMEZCUTBGVExHOUNRVUZWTEVOQlFVTXNXVUZCVFR0QlFVTm1OMElzYVVKQlFVc3NRMEZCUTAwc1UwRkJUaXhEUVVGblFtMUNMRTFCUVdoQ0xFTkJRWFZDTEN0Q1FVRjJRanRCUVVOQmVrSXNhVUpCUVVzc1EwRkJRMDBzVTBGQlRpeERRVUZuUW0xQ0xFMUJRV2hDTEVOQlFYVkNMREJDUVVGMlFqdEJRVU5CZEVJc2EwSkJRVTBzUTBGQlF6SkNMR1ZCUVZBc1EwRkJkVUlzVlVGQmRrSTdRVUZEUkN4WFFVcFRMRVZCU1ZBc1EwRktUeXhEUVVGV08wRkJTMFE3TzBGQlJVUXpRaXhqUVVGTkxFTkJRVU5ITEZOQlFWQXNRMEZCYVVKNVFpeE5RVUZxUWl4RFFVRjNRaXgzUWtGQmVFSTdRVUZEUVRsQ0xHZENRVUZSTEVOQlFVTmpMRWxCUVZRc1EwRkJZMVFzVTBGQlpDeERRVUYzUW5sQ0xFMUJRWGhDTEVOQlFTdENMSEZDUVVFdlFqdEJRVU5CYWtRc1kwRkJUU3hEUVVGRE1rSXNXVUZCVUN4RFFVRnZRblZDTEU5QlFYQkNMRU5CUVRSQ0xGVkJRVFZDTEVWQlFYZERMRU5CUVVOTUxGVkJRWHBETzBGQlEwUXNUMEY0UWtRN1FVRjVRa1E3T3pzMlFrRkZVVHRCUVVOUUxGVkJRVWtzUTBGQlF6bERMRlZCUVV3c1JVRkJhVUk3UVVGRFpqdEJRVU5FT3p0QlFVTkVMRlZCUVUxdFFpeExRVUZMTEVkQlFVY3NTMEZCUzBFc1MwRkJia0k3UVVGRFFTeFZRVUZOTWtJc1ZVRkJWU3hIUVVGSExFdEJRVXRETEZkQlFVd3NSVUZCYmtJN1FVRkRRU3hWUVVGTmVrSXNUVUZCVFN4SFFVRkhMRXRCUVV0QkxFMUJRWEJDTzBGQlJVRklMRmRCUVVzc1EwRkJRMDBzVTBGQlRpeERRVUZuUW5sQ0xFMUJRV2hDTEVOQlFYVkNMSGRDUVVGMlFqdEJRVU5CT1VJc1kwRkJVU3hEUVVGRFl5eEpRVUZVTEVOQlFXTlVMRk5CUVdRc1EwRkJkMEo1UWl4TlFVRjRRaXhEUVVFclFpeHhRa0ZCTDBJN1FVRkRRV3BFTEZsQlFVMHNRMEZCUXpKQ0xGbEJRVkFzUTBGQmIwSjFRaXhQUVVGd1FpeERRVUUwUWl4VlFVRTFRaXhGUVVGM1F5eERRVUZEVEN4VlFVRjZRenRCUVVOQmVFSXNXVUZCVFN4RFFVRkRhVUlzV1VGQlVDeERRVUZ2UWl4WlFVRndRaXhGUVVGclF5eDFRa0ZCYkVNN1FVRkRRV3BDTEZsQlFVMHNRMEZCUTJsQ0xGbEJRVkFzUTBGQmIwSXNZMEZCY0VJc1JVRkJiME1zVFVGQmNFTTdRVUZGUkRzN08ydERRVVZoTzBGQlExb3NWVUZCU1N4RFFVRkRka01zVlVGQlRDeEZRVUZwUWp0QlFVTm1MR1ZCUVU4c1NVRkJVRHRCUVVORU96dEJRVU5FTEdGQlFVOXZRaXhSUVVGUkxFTkJRVU5qTEVsQlFWUXNRMEZCWTFRc1UwRkJaQ3hEUVVGM1FqSkNMRkZCUVhoQ0xFTkJRV2xETEhGQ1FVRnFReXhEUVVGUU8wRkJRMFE3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVU5zVDBnN096czdPMEZCUjBFN096czdRVUZEUVN3d1FrRkJaMEk3UVVGRFpDeEhRVUZETEZWQlFWTnVSQ3hOUVVGVUxFVkJRV2xDTzBGQlEyaENRU3hWUVVGTkxFTkJRVU5ETEZGQlFWQTdRVUZEUkN4SFFVWkVMRVZCUlVkRUxFMUJSa2c3UVVGSFJEdEJRVU5FSWl3aVptbHNaU0k2SW1SaGNtdHRiMlJsTFdwekxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1SUhkbFluQmhZMnRWYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVLSEp2YjNRc0lHWmhZM1J2Y25rcElIdGNibHgwYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvWENKa1lYSnJiVzlrWlMxcWMxd2lMQ0JiWFN3Z1ptRmpkRzl5ZVNrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHVjRjRzl5ZEhOYlhDSmtZWEpyYlc5a1pTMXFjMXdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpWeHVYSFJjZEhKdmIzUmJYQ0prWVhKcmJXOWtaUzFxYzF3aVhTQTlJR1poWTNSdmNua29LVHRjYm4wcEtIUjVjR1Z2WmlCelpXeG1JQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QS9JSE5sYkdZZ09pQjBhR2x6TENCbWRXNWpkR2x2YmlncElIdGNibkpsZEhWeWJpQWlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2daMlYwT2lCblpYUjBaWElnZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JmWDJWelRXOWtkV3hsSUc5dUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNcElIdGNiaUJjZEZ4MGFXWW9kSGx3Wlc5bUlGTjViV0p2YkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbktTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnl3Z2V5QjJZV3gxWlRvZ0owMXZaSFZzWlNjZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJQ2RmWDJWelRXOWtkV3hsSnl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdOeVpXRjBaU0JoSUdaaGEyVWdibUZ0WlhOd1lXTmxJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURFNklIWmhiSFZsSUdseklHRWdiVzlrZFd4bElHbGtMQ0J5WlhGMWFYSmxJR2wwWEc0Z1hIUXZMeUJ0YjJSbElDWWdNam9nYldWeVoyVWdZV3hzSUhCeWIzQmxjblJwWlhNZ2IyWWdkbUZzZFdVZ2FXNTBieUIwYUdVZ2JuTmNiaUJjZEM4dklHMXZaR1VnSmlBME9pQnlaWFIxY200Z2RtRnNkV1VnZDJobGJpQmhiSEpsWVdSNUlHNXpJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURoOE1Ub2dZbVZvWVhabElHeHBhMlVnY21WeGRXbHlaVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NTBJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXNJRzF2WkdVcElIdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlERXBJSFpoYkhWbElEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWgyWVd4MVpTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQTRLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEdsbUtDaHRiMlJsSUNZZ05Da2dKaVlnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMllXeDFaU0FtSmlCMllXeDFaUzVmWDJWelRXOWtkV3hsS1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RIWmhjaUJ1Y3lBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaWh1Y3lrN1hHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHVjeXdnSjJSbFptRjFiSFFuTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lIWmhiSFZsT2lCMllXeDFaU0I5S1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURJZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUNFOUlDZHpkSEpwYm1jbktTQm1iM0lvZG1GeUlHdGxlU0JwYmlCMllXeDFaU2tnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHNXpMQ0JyWlhrc0lHWjFibU4wYVc5dUtHdGxlU2tnZXlCeVpYUjFjbTRnZG1Gc2RXVmJhMlY1WFRzZ2ZTNWlhVzVrS0c1MWJHd3NJR3RsZVNrcE8xeHVJRngwWEhSeVpYUjFjbTRnYm5NN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnWENJdUwzTnlZeTlwYm1SbGVDNXFjMXdpS1R0Y2JpSXNJbVY0Y0c5eWRDQmpiMjV6ZENCSlUxOUNVazlYVTBWU0lEMGdkSGx3Wlc5bUlIZHBibVJ2ZHlBaFBUMGdKM1Z1WkdWbWFXNWxaQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRVJoY210dGIyUmxJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9iM0IwYVc5dWN5a2dlMXh1SUNBZ0lHbG1JQ2doU1ZOZlFsSlBWMU5GVWlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmx4dUlDQWdJR052Ym5OMElHUmxabUYxYkhSUGNIUnBiMjV6SUQwZ2UxeHVJQ0FnSUNBZ1ltOTBkRzl0T2lBbk16SndlQ2NzWEc0Z0lDQWdJQ0J5YVdkb2REb2dKek15Y0hnbkxGeHVJQ0FnSUNBZ2JHVm1kRG9nSjNWdWMyVjBKeXhjYmlBZ0lDQWdJSFJwYldVNklDY3dMak56Snl4Y2JpQWdJQ0FnSUcxcGVFTnZiRzl5T2lBbkkyWm1aaWNzWEc0Z0lDQWdJQ0JpWVdOclozSnZkVzVrUTI5c2IzSTZJQ2NqWm1abUp5eGNiaUFnSUNBZ0lHSjFkSFJ2YmtOdmJHOXlSR0Z5YXpvZ0p5TXhNREJtTW1NbkxGeHVJQ0FnSUNBZ1luVjBkRzl1UTI5c2IzSk1hV2RvZERvZ0p5Tm1abVluTEZ4dUlDQWdJQ0FnYkdGaVpXdzZJQ2NuTEZ4dUlDQWdJQ0FnYzJGMlpVbHVRMjl2YTJsbGN6b2dkSEoxWlN4Y2JpQWdJQ0FnSUdGMWRHOU5ZWFJqYUU5elZHaGxiV1U2SUhSeWRXVmNiaUFnSUNCOU8xeHVYRzRnSUNBZ2IzQjBhVzl1Y3lBOUlFOWlhbVZqZEM1aGMzTnBaMjRvZTMwc0lHUmxabUYxYkhSUGNIUnBiMjV6TENCdmNIUnBiMjV6S1R0Y2JseHVJQ0FnSUdOdmJuTjBJR056Y3lBOUlHQmNiaUFnSUNBZ0lDNWtZWEpyYlc5a1pTMXNZWGxsY2lCN1hHNGdJQ0FnSUNBZ0lIQnZjMmwwYVc5dU9pQm1hWGhsWkR0Y2JpQWdJQ0FnSUNBZ2NHOXBiblJsY2kxbGRtVnVkSE02SUc1dmJtVTdYRzRnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVE2SUNSN2IzQjBhVzl1Y3k1dGFYaERiMnh2Y24wN1hHNGdJQ0FnSUNBZ0lIUnlZVzV6YVhScGIyNDZJR0ZzYkNBa2UyOXdkR2x2Ym5NdWRHbHRaWDBnWldGelpUdGNiaUFnSUNBZ0lDQWdiV2w0TFdKc1pXNWtMVzF2WkdVNklHUnBabVpsY21WdVkyVTdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzVrWVhKcmJXOWtaUzFzWVhsbGNpMHRZblYwZEc5dUlIdGNiaUFnSUNBZ0lDQWdkMmxrZEdnNklESXVPWEpsYlR0Y2JpQWdJQ0FnSUNBZ2FHVnBaMmgwT2lBeUxqbHlaVzA3WEc0Z0lDQWdJQ0FnSUdKdmNtUmxjaTF5WVdScGRYTTZJRFV3SlR0Y2JpQWdJQ0FnSUNBZ2NtbG5hSFE2SUNSN2IzQjBhVzl1Y3k1eWFXZG9kSDA3WEc0Z0lDQWdJQ0FnSUdKdmRIUnZiVG9nSkh0dmNIUnBiMjV6TG1KdmRIUnZiWDA3WEc0Z0lDQWdJQ0FnSUd4bFpuUTZJQ1I3YjNCMGFXOXVjeTVzWldaMGZUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMbVJoY210dGIyUmxMV3hoZVdWeUxTMXphVzF3YkdVZ2UxeHVJQ0FnSUNBZ0lDQjNhV1IwYURvZ01UQXdKVHRjYmlBZ0lDQWdJQ0FnYUdWcFoyaDBPaUF4TURBbE8xeHVJQ0FnSUNBZ0lDQjBiM0E2SURBN1hHNGdJQ0FnSUNBZ0lHeGxablE2SURBN1hHNGdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJUb2djMk5oYkdVb01Ta2dJV2x0Y0c5eWRHRnVkRHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnTG1SaGNtdHRiMlJsTFd4aGVXVnlMUzFsZUhCaGJtUmxaQ0I3WEc0Z0lDQWdJQ0FnSUhSeVlXNXpabTl5YlRvZ2MyTmhiR1VvTVRBd0tUdGNiaUFnSUNBZ0lDQWdZbTl5WkdWeUxYSmhaR2wxY3pvZ01EdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMbVJoY210dGIyUmxMV3hoZVdWeUxTMXVieTEwY21GdWMybDBhVzl1SUh0Y2JpQWdJQ0FnSUNBZ2RISmhibk5wZEdsdmJqb2dibTl1WlR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0xtUmhjbXR0YjJSbExYUnZaMmRzWlNCN1hHNGdJQ0FnSUNBZ0lHSmhZMnRuY205MWJtUTZJQ1I3YjNCMGFXOXVjeTVpZFhSMGIyNURiMnh2Y2tSaGNtdDlPMXh1SUNBZ0lDQWdJQ0IzYVdSMGFEb2dNM0psYlR0Y2JpQWdJQ0FnSUNBZ2FHVnBaMmgwT2lBemNtVnRPMXh1SUNBZ0lDQWdJQ0J3YjNOcGRHbHZiam9nWm1sNFpXUTdYRzRnSUNBZ0lDQWdJR0p2Y21SbGNpMXlZV1JwZFhNNklEVXdKVHRjYmlBZ0lDQWdJQ0FnWW05eVpHVnlPbTV2Ym1VN1hHNGdJQ0FnSUNBZ0lISnBaMmgwT2lBa2UyOXdkR2x2Ym5NdWNtbG5hSFI5TzF4dUlDQWdJQ0FnSUNCaWIzUjBiMjA2SUNSN2IzQjBhVzl1Y3k1aWIzUjBiMjE5TzF4dUlDQWdJQ0FnSUNCc1pXWjBPaUFrZTI5d2RHbHZibk11YkdWbWRIMDdYRzRnSUNBZ0lDQWdJR04xY25OdmNqb2djRzlwYm5SbGNqdGNiaUFnSUNBZ0lDQWdkSEpoYm5OcGRHbHZiam9nWVd4c0lEQXVOWE1nWldGelpUdGNiaUFnSUNBZ0lDQWdaR2x6Y0d4aGVUb2dabXhsZUR0Y2JpQWdJQ0FnSUNBZ2FuVnpkR2xtZVMxamIyNTBaVzUwT2lCalpXNTBaWEk3WEc0Z0lDQWdJQ0FnSUdGc2FXZHVMV2wwWlcxek9pQmpaVzUwWlhJN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDNWtZWEpyYlc5a1pTMTBiMmRuYkdVdExYZG9hWFJsSUh0Y2JpQWdJQ0FnSUNBZ1ltRmphMmR5YjNWdVpEb2dKSHR2Y0hScGIyNXpMbUoxZEhSdmJrTnZiRzl5VEdsbmFIUjlPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0F1WkdGeWEyMXZaR1V0ZEc5bloyeGxMUzFwYm1GamRHbDJaU0I3WEc0Z0lDQWdJQ0FnSUdScGMzQnNZWGs2SUc1dmJtVTdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzVrWVhKcmJXOWtaUzFpWVdOclozSnZkVzVrSUh0Y2JpQWdJQ0FnSUNBZ1ltRmphMmR5YjNWdVpEb2dKSHR2Y0hScGIyNXpMbUpoWTJ0bmNtOTFibVJEYjJ4dmNuMDdYRzRnSUNBZ0lDQWdJSEJ2YzJsMGFXOXVPaUJtYVhobFpEdGNiaUFnSUNBZ0lDQWdjRzlwYm5SbGNpMWxkbVZ1ZEhNNklHNXZibVU3WEc0Z0lDQWdJQ0FnSUhvdGFXNWtaWGc2SUMweE1EdGNiaUFnSUNBZ0lDQWdkMmxrZEdnNklERXdNQ1U3WEc0Z0lDQWdJQ0FnSUdobGFXZG9kRG9nTVRBd0pUdGNiaUFnSUNBZ0lDQWdkRzl3T2lBd08xeHVJQ0FnSUNBZ0lDQnNaV1owT2lBd08xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBiV2NzSUM1a1lYSnJiVzlrWlMxcFoyNXZjbVVnZTF4dUlDQWdJQ0FnSUNCcGMyOXNZWFJwYjI0NklHbHpiMnhoZEdVN1hHNGdJQ0FnSUNBZ0lHUnBjM0JzWVhrNklHbHViR2x1WlMxaWJHOWphenRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnUUcxbFpHbGhJSE5qY21WbGJpQmhibVFnS0MxdGN5MW9hV2RvTFdOdmJuUnlZWE4wT2lCaFkzUnBkbVVwTENBb0xXMXpMV2hwWjJndFkyOXVkSEpoYzNRNklHNXZibVVwSUh0Y2JpQWdJQ0FnSUNBZ0xtUmhjbXR0YjJSbExYUnZaMmRzWlNCN1pHbHpjR3hoZVRvZ2JtOXVaU0FoYVcxd2IzSjBZVzUwZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCQWMzVndjRzl5ZEhNZ0tDMXRjeTFwYldVdFlXeHBaMjQ2WVhWMGJ5a3NJQ2d0YlhNdFlXTmpaV3hsY21GMGIzSTZkSEoxWlNrZ2UxeHVJQ0FnSUNBZ0lDQXVaR0Z5YTIxdlpHVXRkRzluWjJ4bElIdGthWE53YkdGNU9pQnViMjVsSUNGcGJYQnZjblJoYm5SOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnWUR0Y2JseHVJQ0FnSUdOdmJuTjBJR3hoZVdWeUlEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWs3WEc0Z0lDQWdZMjl1YzNRZ1luVjBkRzl1SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWW5WMGRHOXVKeWs3WEc0Z0lDQWdZMjl1YzNRZ1ltRmphMmR5YjNWdVpDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0oyUnBkaWNwTzF4dVhHNGdJQ0FnWW5WMGRHOXVMbWx1Ym1WeVNGUk5UQ0E5SUc5d2RHbHZibk11YkdGaVpXdzdYRzRnSUNBZ1luVjBkRzl1TG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMlJoY210dGIyUmxMWFJ2WjJkc1pTMHRhVzVoWTNScGRtVW5LVHRjYmlBZ0lDQnNZWGxsY2k1amJHRnpjMHhwYzNRdVlXUmtLQ2RrWVhKcmJXOWtaUzFzWVhsbGNpY3BPMXh1SUNBZ0lHSmhZMnRuY205MWJtUXVZMnhoYzNOTWFYTjBMbUZrWkNnblpHRnlhMjF2WkdVdFltRmphMmR5YjNWdVpDY3BPMXh1WEc0Z0lDQWdZMjl1YzNRZ1pHRnlhMjF2WkdWQlkzUnBkbUYwWldRZ1BWeHVJQ0FnSUNBZ2QybHVaRzkzTG14dlkyRnNVM1J2Y21GblpTNW5aWFJKZEdWdEtDZGtZWEpyYlc5a1pTY3BJRDA5UFNBbmRISjFaU2M3WEc0Z0lDQWdZMjl1YzNRZ2NISmxabVZ5WldSVWFHVnRaVTl6SUQxY2JpQWdJQ0FnSUc5d2RHbHZibk11WVhWMGIwMWhkR05vVDNOVWFHVnRaU0FtSmx4dUlDQWdJQ0FnZDJsdVpHOTNMbTFoZEdOb1RXVmthV0VvSnlod2NtVm1aWEp6TFdOdmJHOXlMWE5qYUdWdFpUb2daR0Z5YXlrbktTNXRZWFJqYUdWek8xeHVJQ0FnSUdOdmJuTjBJR1JoY210dGIyUmxUbVYyWlhKQlkzUnBkbUYwWldSQ2VVRmpkR2x2YmlBOVhHNGdJQ0FnSUNCM2FXNWtiM2N1Ykc5allXeFRkRzl5WVdkbExtZGxkRWwwWlcwb0oyUmhjbXR0YjJSbEp5a2dQVDA5SUc1MWJHdzdYRzVjYmlBZ0lDQnBaaUFvWEc0Z0lDQWdJQ0FvWkdGeWEyMXZaR1ZCWTNScGRtRjBaV1FnUFQwOUlIUnlkV1VnSmlZZ2IzQjBhVzl1Y3k1ellYWmxTVzVEYjI5cmFXVnpLU0I4ZkZ4dUlDQWdJQ0FnS0dSaGNtdHRiMlJsVG1WMlpYSkJZM1JwZG1GMFpXUkNlVUZqZEdsdmJpQW1KaUJ3Y21WbVpYSmxaRlJvWlcxbFQzTXBYRzRnSUNBZ0tTQjdYRzRnSUNBZ0lDQnNZWGxsY2k1amJHRnpjMHhwYzNRdVlXUmtLRnh1SUNBZ0lDQWdJQ0FuWkdGeWEyMXZaR1V0YkdGNVpYSXRMV1Y0Y0dGdVpHVmtKeXhjYmlBZ0lDQWdJQ0FnSjJSaGNtdHRiMlJsTFd4aGVXVnlMUzF6YVcxd2JHVW5MRnh1SUNBZ0lDQWdJQ0FuWkdGeWEyMXZaR1V0YkdGNVpYSXRMVzV2TFhSeVlXNXphWFJwYjI0blhHNGdJQ0FnSUNBcE8xeHVJQ0FnSUNBZ1luVjBkRzl1TG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMlJoY210dGIyUmxMWFJ2WjJkc1pTMHRkMmhwZEdVbktUdGNiaUFnSUNBZ0lHUnZZM1Z0Wlc1MExtSnZaSGt1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25aR0Z5YTIxdlpHVXRMV0ZqZEdsMllYUmxaQ2NwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR1J2WTNWdFpXNTBMbUp2WkhrdWFXNXpaWEowUW1WbWIzSmxLR0oxZEhSdmJpd2daRzlqZFcxbGJuUXVZbTlrZVM1bWFYSnpkRU5vYVd4a0tUdGNiaUFnSUNCa2IyTjFiV1Z1ZEM1aWIyUjVMbWx1YzJWeWRFSmxabTl5WlNoc1lYbGxjaXdnWkc5amRXMWxiblF1WW05a2VTNW1hWEp6ZEVOb2FXeGtLVHRjYmlBZ0lDQmtiMk4xYldWdWRDNWliMlI1TG1sdWMyVnlkRUpsWm05eVpTaGlZV05yWjNKdmRXNWtMQ0JrYjJOMWJXVnVkQzVpYjJSNUxtWnBjbk4wUTJocGJHUXBPMXh1WEc0Z0lDQWdkR2hwY3k1aFpHUlRkSGxzWlNoamMzTXBPMXh1WEc0Z0lDQWdkR2hwY3k1aWRYUjBiMjRnUFNCaWRYUjBiMjQ3WEc0Z0lDQWdkR2hwY3k1c1lYbGxjaUE5SUd4aGVXVnlPMXh1SUNBZ0lIUm9hWE11YzJGMlpVbHVRMjl2YTJsbGN5QTlJRzl3ZEdsdmJuTXVjMkYyWlVsdVEyOXZhMmxsY3p0Y2JpQWdJQ0IwYUdsekxuUnBiV1VnUFNCdmNIUnBiMjV6TG5ScGJXVTdYRzRnSUgxY2JseHVJQ0JoWkdSVGRIbHNaU2hqYzNNcElIdGNiaUFnSUNCamIyNXpkQ0JzYVc1clJXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJ4cGJtc25LVHRjYmx4dUlDQWdJR3hwYm10RmJHVnRaVzUwTG5ObGRFRjBkSEpwWW5WMFpTZ25jbVZzSnl3Z0ozTjBlV3hsYzJobFpYUW5LVHRjYmlBZ0lDQnNhVzVyUld4bGJXVnVkQzV6WlhSQmRIUnlhV0oxZEdVb0ozUjVjR1VuTENBbmRHVjRkQzlqYzNNbktUdGNiaUFnSUNCc2FXNXJSV3hsYldWdWRDNXpaWFJCZEhSeWFXSjFkR1VvWEc0Z0lDQWdJQ0FuYUhKbFppY3NYRzRnSUNBZ0lDQW5aR0YwWVRwMFpYaDBMMk56Y3p0amFHRnljMlYwUFZWVVJpMDRMQ2NnS3lCbGJtTnZaR1ZWVWtsRGIyMXdiMjVsYm5Rb1kzTnpLVnh1SUNBZ0lDazdYRzRnSUNBZ1pHOWpkVzFsYm5RdWFHVmhaQzVoY0hCbGJtUkRhR2xzWkNoc2FXNXJSV3hsYldWdWRDazdYRzRnSUgxY2JseHVJQ0J6YUc5M1YybGtaMlYwS0NrZ2UxeHVJQ0FnSUdsbUlDZ2hTVk5mUWxKUFYxTkZVaWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNiaUFnSUNCamIyNXpkQ0JpZFhSMGIyNGdQU0IwYUdsekxtSjFkSFJ2Ymp0Y2JpQWdJQ0JqYjI1emRDQnNZWGxsY2lBOUlIUm9hWE11YkdGNVpYSTdYRzRnSUNBZ1kyOXVjM1FnZEdsdFpTQTlJSEJoY25ObFJteHZZWFFvZEdocGN5NTBhVzFsS1NBcUlERXdNREE3WEc1Y2JpQWdJQ0JpZFhSMGIyNHVZMnhoYzNOTWFYTjBMbUZrWkNnblpHRnlhMjF2WkdVdGRHOW5aMnhsSnlrN1hHNGdJQ0FnWW5WMGRHOXVMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMlJoY210dGIyUmxMWFJ2WjJkc1pTMHRhVzVoWTNScGRtVW5LVHRjYmlBZ0lDQmlkWFIwYjI0dWMyVjBRWFIwY21saWRYUmxLRndpWVhKcFlTMXNZV0psYkZ3aUxDQmNJa0ZqZEdsMllYUmxJR1JoY21zZ2JXOWtaVndpS1R0Y2JpQWdJQ0JpZFhSMGIyNHVjMlYwUVhSMGNtbGlkWFJsS0Z3aVlYSnBZUzFqYUdWamEyVmtYQ0lzSUZ3aVptRnNjMlZjSWlrN1hHNGdJQ0FnWW5WMGRHOXVMbk5sZEVGMGRISnBZblYwWlNoY0luSnZiR1ZjSWl3Z1hDSmphR1ZqYTJKdmVGd2lLVHRjYmlBZ0lDQnNZWGxsY2k1amJHRnpjMHhwYzNRdVlXUmtLQ2RrWVhKcmJXOWtaUzFzWVhsbGNpMHRZblYwZEc5dUp5azdYRzVjYmlBZ0lDQmlkWFIwYjI0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb0tTQTlQaUI3WEc0Z0lDQWdJQ0JqYjI1emRDQnBjMFJoY210dGIyUmxJRDBnZEdocGN5NXBjMEZqZEdsMllYUmxaQ2dwTzF4dVhHNGdJQ0FnSUNCcFppQW9JV2x6UkdGeWEyMXZaR1VwSUh0Y2JpQWdJQ0FnSUNBZ2JHRjVaWEl1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25aR0Z5YTIxdlpHVXRiR0Y1WlhJdExXVjRjR0Z1WkdWa0p5azdYRzRnSUNBZ0lDQWdJR0oxZEhSdmJpNXpaWFJCZEhSeWFXSjFkR1VvSjJScGMyRmliR1ZrSnl3Z2RISjFaU2s3WEc0Z0lDQWdJQ0FnSUhObGRGUnBiV1Z2ZFhRb0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lHeGhlV1Z5TG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMlJoY210dGIyUmxMV3hoZVdWeUxTMXVieTEwY21GdWMybDBhVzl1SnlrN1hHNGdJQ0FnSUNBZ0lDQWdiR0Y1WlhJdVkyeGhjM05NYVhOMExtRmtaQ2duWkdGeWEyMXZaR1V0YkdGNVpYSXRMWE5wYlhCc1pTY3BPMXh1SUNBZ0lDQWdJQ0FnSUdKMWRIUnZiaTV5WlcxdmRtVkJkSFJ5YVdKMWRHVW9KMlJwYzJGaWJHVmtKeWs3WEc0Z0lDQWdJQ0FnSUgwc0lIUnBiV1VwTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnYkdGNVpYSXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25aR0Z5YTIxdlpHVXRiR0Y1WlhJdExYTnBiWEJzWlNjcE8xeHVJQ0FnSUNBZ0lDQmlkWFIwYjI0dWMyVjBRWFIwY21saWRYUmxLQ2RrYVhOaFlteGxaQ2NzSUhSeWRXVXBPMXh1SUNBZ0lDQWdJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNCc1lYbGxjaTVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2RrWVhKcmJXOWtaUzFzWVhsbGNpMHRibTh0ZEhKaGJuTnBkR2x2YmljcE8xeHVJQ0FnSUNBZ0lDQWdJR3hoZVdWeUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyUmhjbXR0YjJSbExXeGhlV1Z5TFMxbGVIQmhibVJsWkNjcE8xeHVJQ0FnSUNBZ0lDQWdJR0oxZEhSdmJpNXlaVzF2ZG1WQmRIUnlhV0oxZEdVb0oyUnBjMkZpYkdWa0p5azdYRzRnSUNBZ0lDQWdJSDBzSURFcE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQmlkWFIwYjI0dVkyeGhjM05NYVhOMExuUnZaMmRzWlNnblpHRnlhMjF2WkdVdGRHOW5aMnhsTFMxM2FHbDBaU2NwTzF4dUlDQWdJQ0FnWkc5amRXMWxiblF1WW05a2VTNWpiR0Z6YzB4cGMzUXVkRzluWjJ4bEtDZGtZWEpyYlc5a1pTMHRZV04wYVhaaGRHVmtKeWs3WEc0Z0lDQWdJQ0IzYVc1a2IzY3ViRzlqWVd4VGRHOXlZV2RsTG5ObGRFbDBaVzBvSjJSaGNtdHRiMlJsSnl3Z0lXbHpSR0Z5YTIxdlpHVXBPMXh1SUNBZ0lIMHBPMXh1SUNCOVhHNWNiaUFnZEc5bloyeGxLQ2tnZTF4dUlDQWdJR2xtSUNnaFNWTmZRbEpQVjFORlVpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JpQWdJQ0JqYjI1emRDQnNZWGxsY2lBOUlIUm9hWE11YkdGNVpYSTdYRzRnSUNBZ1kyOXVjM1FnYVhORVlYSnJiVzlrWlNBOUlIUm9hWE11YVhOQlkzUnBkbUYwWldRb0tUdGNiaUFnSUNCamIyNXpkQ0JpZFhSMGIyNGdQU0IwYUdsekxtSjFkSFJ2Ymp0Y2JseHVJQ0FnSUd4aGVXVnlMbU5zWVhOelRHbHpkQzUwYjJkbmJHVW9KMlJoY210dGIyUmxMV3hoZVdWeUxTMXphVzF3YkdVbktUdGNiaUFnSUNCa2IyTjFiV1Z1ZEM1aWIyUjVMbU5zWVhOelRHbHpkQzUwYjJkbmJHVW9KMlJoY210dGIyUmxMUzFoWTNScGRtRjBaV1FuS1R0Y2JpQWdJQ0IzYVc1a2IzY3ViRzlqWVd4VGRHOXlZV2RsTG5ObGRFbDBaVzBvSjJSaGNtdHRiMlJsSnl3Z0lXbHpSR0Z5YTIxdlpHVXBPMXh1SUNBZ0lHSjFkSFJ2Ymk1elpYUkJkSFJ5YVdKMWRHVW9YQ0poY21saExXeGhZbVZzWENJc0lGd2lSR1V0WVdOMGFYWmhkR1VnWkdGeWF5QnRiMlJsWENJcE8xeHVJQ0FnSUdKMWRIUnZiaTV6WlhSQmRIUnlhV0oxZEdVb1hDSmhjbWxoTFdOb1pXTnJaV1JjSWl3Z1hDSjBjblZsWENJcE8xeHVYRzRnSUgxY2JseHVJQ0JwYzBGamRHbDJZWFJsWkNncElIdGNiaUFnSUNCcFppQW9JVWxUWDBKU1QxZFRSVklwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ1ZFd4c08xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdaRzlqZFcxbGJuUXVZbTlrZVM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyUmhjbXR0YjJSbExTMWhZM1JwZG1GMFpXUW5LVHRjYmlBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUVSaGNtdHRiMlJsTENCN0lFbFRYMEpTVDFkVFJWSWdmU0JtY205dElDY3VMMlJoY210dGIyUmxKenRjY2x4dVpYaHdiM0owSUdSbFptRjFiSFFnUkdGeWEyMXZaR1U3WEhKY2JseHlYRzR2S2lCbGMyeHBiblF0WkdsellXSnNaU0FxTDF4eVhHNXBaaUFvU1ZOZlFsSlBWMU5GVWlrZ2UxeHlYRzRnSUNobWRXNWpkR2x2YmloM2FXNWtiM2NwSUh0Y2NseHVJQ0FnSUhkcGJtUnZkeTVFWVhKcmJXOWtaU0E5SUVSaGNtdHRiMlJsTzF4eVhHNGdJSDBwS0hkcGJtUnZkeWs3WEhKY2JuMWNjbHh1THlvZ1pYTnNhVzUwTFdWdVlXSnNaU0FxTDF4eVhHNGlYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjkiLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgQVBJX0tFWSA9IFwiNzFhOGQ2MGI2YWQwNDllOWE1MjEzYTA4MzliMzU2NWFcIjtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWVcbiAgICAgIH0mQVBQSUQ9JHtBUElfS0VZfWBcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW1hZ2VEYXRhKCkge1xuICB0cnkge1xuICAgIGNvbnN0IEFQSV9LRVkgPSBcIkNrb0dmdGo3SWtxRm5OUmttMWRGRm5JWFY2YjJaVE83XCI7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YSgpO1xuICAgIGxldCB3ZWF0aGVyRGVzY3JpcHRpb24gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgaWYgKHdlYXRoZXJEZXNjcmlwdGlvbiA9PT0gXCJDbGVhclwiKSB7XG4gICAgICB3ZWF0aGVyRGVzY3JpcHRpb24gPSBcIkNsZWFyIHNreVwiO1xuICAgIH1cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PSR7QVBJX0tFWX0mcz0ke3dlYXRoZXJEZXNjcmlwdGlvbn1gLFxuICAgICAgeyBtb2RlOiBgY29yc2AgfVxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0S2VsdmluVG9DZWxzaXVzKHRlbXApIHtcbiAgY29uc3QgcmVzdWx0ID0gTWF0aC5yb3VuZCh0ZW1wIC0gMjczLjE1KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRDZWxzaXVzVG9GYXJlbmhlaXQodGVtcCkge1xuICBjb25zdCByZXN1bHQgPSBNYXRoLnJvdW5kKCh0ZW1wICogOSkgLyA1ICsgMzIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIGdldFdlYXRoZXJEYXRhLFxuICBnZXRJbWFnZURhdGEsXG4gIGNvbnZlcnRLZWx2aW5Ub0NlbHNpdXMsXG4gIGNvbnZlcnRDZWxzaXVzVG9GYXJlbmhlaXQsXG59IGZyb20gXCIuL2FwcFwiO1xuXG5pbXBvcnQgRGFya21vZGUgZnJvbSBcImRhcmttb2RlLWpzXCI7XG5cbm5ldyBEYXJrbW9kZSgpLnNob3dXaWRnZXQoKTtcblxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuY29uc3QgZGF0YUVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JcIik7XG5jb25zdCBpbnB1dEVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZXJyb3JcIik7XG5cbmZ1bmN0aW9uIHNob3dGb3JtSW5wdXRFcnJvcigpIHtcbiAgaWYgKHNlYXJjaEJveC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICBpbnB1dEVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiTnVtYmVycyBhbmQgc3ltYm9scyBhcmUgbm90IHN1cHBvcnRlZCFcIjtcbiAgfVxuICBpZiAoc2VhcmNoQm94LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGlucHV0RXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZW50ZXIgbG9jYXRpb25cIjtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJUZXh0dWFsRGF0YSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoKTtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZUggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgY291bnRyeUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IHRlbXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWVudVwiKTtcbiAgICBjb25zdCBkZXNjQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1lbnVcIik7XG4gICAgY29uc3QgZGV0YWlsZWREZXNjQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1lbnVcIik7XG4gICAgY29uc3QgdGVtcGVyYXR1cmVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZGV0YWlsZWREZXNjcmlwdGlvblBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCB0ZW1wUGFyYUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCB0ZW1wRGVzY0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCB0ZW1wRGV0YWlsZWREZXNjSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IHRvZ2dsZVRlbXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGlzQ29udmVydGVkVGVtcHRvQ2Vsc2l1cyA9IGNvbnZlcnRLZWx2aW5Ub0NlbHNpdXMoZGF0YS5tYWluLnRlbXApO1xuICAgIGNvbnN0IGlzQ29udmVydGVkVGVtcFRvRmFyZW5oZWl0ID0gY29udmVydENlbHNpdXNUb0ZhcmVuaGVpdChcbiAgICAgIGlzQ29udmVydGVkVGVtcHRvQ2Vsc2l1c1xuICAgICk7XG4gICAgY29uc3QgY291bnRyeUljb25TcmMgPSBgJHtkYXRhLnN5cy5jb3VudHJ5fWAudG9Mb3dlckNhc2UoKTtcblxuICAgIG1haW5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgICB0aXRsZUgudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gICAgdGVtcGVyYXR1cmVQYXJhLnRleHRDb250ZW50ID0gYCR7aXNDb252ZXJ0ZWRUZW1wdG9DZWxzaXVzfSAgwrBDYDtcbiAgICBkZXNjcmlwdGlvblBhcmEudGV4dENvbnRlbnQgPSBkYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICBkZXRhaWxlZERlc2NyaXB0aW9uUGFyYS50ZXh0Q29udGVudCA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICAgIHRlbXBQYXJhSWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zXCI7XG4gICAgdGVtcERlc2NJY29uLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnNcIjtcbiAgICB0ZW1wRGV0YWlsZWREZXNjSWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zXCI7XG4gICAgY291bnRyeUljb24uc3JjID0gYGh0dHBzOi8vZmxhZ2Nkbi5jb20vMzJ4MjQvJHtjb3VudHJ5SWNvblNyY30ucG5nYDtcbiAgICB0b2dnbGVUZW1wQnRuLnRleHRDb250ZW50ID0gYMKwRmA7XG4gICAgdGVtcFBhcmFJY29uLnRleHRDb250ZW50ID0gXCJ0aGVybW9zdGF0XCI7XG4gICAgdGVtcERldGFpbGVkRGVzY0ljb24udGV4dENvbnRlbnQgPSBcImluZm9cIjtcbiAgICBzd2l0Y2ggKGRhdGEud2VhdGhlclswXS5tYWluKSB7XG4gICAgICBjYXNlIFwiQ2xlYXJcIjpcbiAgICAgICAgdGVtcERlc2NJY29uLnRleHRDb250ZW50ID0gXCJ3Yl9zdW5ueVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJDbG91ZHNcIjpcbiAgICAgICAgdGVtcERlc2NJY29uLnRleHRDb250ZW50ID0gXCJjbG91ZFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJSYWluXCI6XG4gICAgICAgIHRlbXBEZXNjSWNvbi50ZXh0Q29udGVudCA9IFwid2F0ZXJfZHJvcFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJTdG9ybVwiOlxuICAgICAgICB0ZW1wRGVzY0ljb24udGV4dENvbnRlbnQgPSBcImZsYXNoX29uXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGVtcERlc2NJY29uLnRleHRDb250ZW50ID0gXCJmaWx0ZXJfZHJhbWFcIjtcbiAgICB9XG5cbiAgICB0b2dnbGVUZW1wQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0ZW1wZXJhdHVyZVBhcmEuY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZWRcIik7XG4gICAgICB0ZW1wZXJhdHVyZVBhcmEuY2xhc3NOYW1lID09PSBcImNoYW5nZWRcIlxuICAgICAgICA/ICh0ZW1wZXJhdHVyZVBhcmEudGV4dENvbnRlbnQgPSBgJHtpc0NvbnZlcnRlZFRlbXBUb0ZhcmVuaGVpdH0gwrBGYClcbiAgICAgICAgOiAodGVtcGVyYXR1cmVQYXJhLnRleHRDb250ZW50ID0gYCR7aXNDb252ZXJ0ZWRUZW1wdG9DZWxzaXVzfSAgwrBDYCk7XG5cbiAgICAgIGlmICh0ZW1wZXJhdHVyZVBhcmEudGV4dENvbnRlbnQuaW5jbHVkZXMoXCJDXCIpKSB7XG4gICAgICAgIHRvZ2dsZVRlbXBCdG4udGV4dENvbnRlbnQgPSBcIsKwRlwiO1xuICAgICAgfSBlbHNlIGlmICh0ZW1wZXJhdHVyZVBhcmEudGV4dENvbnRlbnQuaW5jbHVkZXMoXCJGXCIpKSB7XG4gICAgICAgIHRvZ2dsZVRlbXBCdG4udGV4dENvbnRlbnQgPSBgwrBDYDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRlbXBDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVQYXJhKTtcbiAgICB0ZW1wQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBQYXJhSWNvbik7XG4gICAgZGVzY0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblBhcmEpO1xuICAgIGRlc2NDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcERlc2NJY29uKTtcbiAgICBkZXRhaWxlZERlc2NDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsZWREZXNjcmlwdGlvblBhcmEpO1xuICAgIGRldGFpbGVkRGVzY0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wRGV0YWlsZWREZXNjSWNvbik7XG4gICAgdGl0bGVILmFwcGVuZENoaWxkKGNvdW50cnlJY29uKTtcbiAgICB0aXRsZUguYXBwZW5kQ2hpbGQodG9nZ2xlVGVtcEJ0bik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUgpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGVtcENvbnRhaW5lcik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjQ29udGFpbmVyKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbGVkRGVzY0NvbnRhaW5lcik7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGF0YUVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiTG9jYXRpb24gbm90IGZvdW5kIVwiO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkYXRhRXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9LCAyMDAwKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJJbWFnZURhdGEoKSB7XG4gIGNvbnN0IGltZ0JvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZ0JvcmRlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImltYWdlLWNvbnRhaW5lclwiKTtcbiAgaW1nQm9yZGVyLmFwcGVuZENoaWxkKGltZyk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaW1nQm9yZGVyKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0SW1hZ2VEYXRhKCk7XG4gICAgaW1nLnNyYyA9IGF3YWl0IGRhdGEuZGF0YS5pbWFnZXMuZml4ZWRfd2lkdGgudXJsO1xuICAgIGltZ0JvcmRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtpbWcuc3JjfVwiKWA7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGltZ0JvcmRlci50ZXh0Q29udGVudCA9IFwiQ291bGRuJ3QgZmluZCBpbWFnZSFcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGltZ0JvcmRlci5yZW1vdmUoKTtcbiAgICB9LCAyMDAwKTtcbiAgfVxufVxuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoc2VhcmNoQm94LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgcmVuZGVySW1hZ2VEYXRhKCk7XG4gICAgcmVuZGVyVGV4dHVhbERhdGEoKTtcbiAgICBpbnB1dEVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH0gZWxzZSB7XG4gICAgc2hvd0Zvcm1JbnB1dEVycm9yKCk7XG4gIH1cbn0pO1xuXG5zZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgaWYgKHNlYXJjaEJveC52YWxpZGl0eS52YWxpZCkge1xuICAgIGlucHV0RXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICBzaG93Rm9ybUlucHV0RXJyb3IoKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=