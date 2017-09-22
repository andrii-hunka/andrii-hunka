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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__output__ = __webpack_require__(2);


__WEBPACK_IMPORTED_MODULE_0__view__["a" /* default */].render();
Object(__WEBPACK_IMPORTED_MODULE_1__output__["a" /* default */])();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let view = {
    render: function() {
        let app = document.createElement("div");
        app.setAttribute("class","app");
        app.innerHTML = `
            <input type="number" id="value1"></input>
            <input type="number" id="value2"></input>
            <span id="output"></span>
            <div class="operations">
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
            </div>
        `;
        document.getElementsByTagName("body")[0].appendChild(app);
    }
}
/* harmony default export */ __webpack_exports__["a"] = (view);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operations__ = __webpack_require__(3);

/* harmony default export */ __webpack_exports__["a"] = (function() {
    document.getElementsByClassName("operations")[0].addEventListener("click", function(event) {
        let target = event.target;
        let operation = target.innerText;
        let output = document.getElementById("output");
        let value1 = parseInt(document.getElementById("value1").value);
        let value2 = parseInt(document.getElementById("value2").value);
        switch(operation) {
            case "+" :
                output.innerText = `= ${__WEBPACK_IMPORTED_MODULE_0__operations__["a" /* default */].add(value1, value2)}`;
                break;
            case "-" :
                output.innerText = `= ${__WEBPACK_IMPORTED_MODULE_0__operations__["a" /* default */].sub(value1, value2)}`;
                break;
            case "*" :
                output.innerText = `= ${__WEBPACK_IMPORTED_MODULE_0__operations__["a" /* default */].mul(value1, value2)}`;
                break;
            case "/" :
                output.innerText = `= ${__WEBPACK_IMPORTED_MODULE_0__operations__["a" /* default */].div(value1, value2)}`;
                break;
        }
    });
    // document.getElementById("output").innerText = result;
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let operation = {
    add: function(a,b) {
        return a + b;
    },
    sub: function(a,b) {
        return a - b;
    },
    mul: function(a,b) {
        return a * b; 
    },
    div: function(a,b) {
        return a / b;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (operation);

/***/ })
/******/ ]);