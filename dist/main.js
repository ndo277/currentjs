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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/eel.js":
/*!********************!*\
  !*** ./src/eel.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Eel; });\nclass Eel {\n\n  constructor(gameWidth, gameHeight){\n    this.image = document.getElementById(\"eel\");\n\n    this.gameWidth = gameWidth;\n    this.gameHeight = gameHeight;\n\n    this.width = 120;\n    this.height = 50;\n\n    this.maxSpeed = 10;\n    this.speed = 0;\n\n    this.position = {\n      x: this.width / 4,\n      y: gameHeight / 2 - this.height / 2 - 50\n    };\n  }\n\n  moveUp() {\n    this.speed = -this.maxSpeed;\n  }\n\n  moveDown() {\n    this.speed = this.maxSpeed;\n  }\n\n  stop() {\n    this.speed = 0;\n  }\n\n\n  draw(ctx) {\n    ctx.drawImage(this.image, this.position.x, this.position.y);\n  }\n\n  update(dt) {\n    \n    this.position.y += this.speed;\n\n    if (this.position.y < 0) this.position.y = 0;\n    if (this.position.y + this.height + 50 > this.gameHeight) this.position.y = this.gameHeight - this.height - 50;\n  }\n}\n\n//# sourceURL=webpack:///./src/eel.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eel */ \"./src/eel.js\");\n/* harmony import */ var _prey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prey */ \"./src/prey.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n\n\n\n\nlet canvas = document.getElementById(\"gameScreen\");\n\nlet ctx = canvas.getContext(\"2d\");\n\nconst GAME_WIDTH = 700;\nconst GAME_HEIGHT = 500;\n\nlet eel = new _eel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](GAME_WIDTH, GAME_HEIGHT);\nlet prey = new _prey__WEBPACK_IMPORTED_MODULE_1__[\"default\"](GAME_WIDTH, GAME_HEIGHT);\n\nnew _input__WEBPACK_IMPORTED_MODULE_2__[\"default\"](eel);\n\nlet lastTime = 0;\n\n\nfunction gameLoop(timestamp) {\n  let dt = timestamp - lastTime;\n  lastTime = timestamp;\n\n  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);\n\n  eel.update(dt);\n  eel.draw(ctx);\n\n  prey.update(dt);\n  prey.draw(ctx);\n  \n\n  requestAnimationFrame(gameLoop);\n}\n\nrequestAnimationFrame(gameLoop);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\n/* harmony import */ var _eel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eel */ \"./src/eel.js\");\n\n\nclass InputHandler {\n  constructor(eel){\n\n    document.addEventListener(\"keydown\", (event) => {\n\n      switch(event.keyCode){\n        case 38:\n          eel.moveUp();\n          break;\n        case 40:\n          eel.moveDown();\n          break;\n      }\n    });\n\n    document.addEventListener(\"keyup\", (event) => {\n\n      switch(event.keyCode){\n        case 38:\n          if (eel.speed < 0) eel.stop();\n          break;\n        case 40:\n          if (eel.speed > 0) eel.stop();\n          break;\n      }\n    });\n  }\n\n\n}\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/prey.js":
/*!*********************!*\
  !*** ./src/prey.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Prey; });\nclass Prey {\n\n  constructor(gameWidth, gameHeight) {\n    this.image = document.getElementById(\"tiny\");\n\n    this.gameWidth = gameWidth;\n    this.gameHeight = gameHeight;\n    \n    this.position = {\n      x: this.gameWidth, \n      y: 100\n    };\n\n    this.speed = {x: -2};\n  }\n\n  draw(ctx) {\n    ctx.drawImage(this.image, this.position.x, this.position.y);\n  }\n\n  update(dt) {\n    this.position.x += this.speed.x;\n  }\n}\n\n//# sourceURL=webpack:///./src/prey.js?");

/***/ })

/******/ });