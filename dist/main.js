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

/***/ "./src/battery.js":
/*!************************!*\
  !*** ./src/battery.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Battery; });\nclass Battery {\n  constructor(game){\n    this.image0 = document.getElementById(\"battery-0\");\n    this.image1 = document.getElementById(\"battery-1\");\n    this.image2 = document.getElementById(\"battery-2\");\n    this.image3 = document.getElementById(\"battery-3\");\n    this.image4 = document.getElementById(\"battery-4\");\n    this.image5 = document.getElementById(\"battery-5\");\n    this.image6 = document.getElementById(\"battery-6\");\n\n    this.game = game;\n    this.size = 100;\n  }\n\n  draw(ctx){\n    if (this.game.meter > 6) ctx.drawImage(this.image6, -15, -10, this.size, this.size);\n\n      switch (this.game.meter) {\n      case 0:\n        ctx.drawImage(this.image0, -15, -10, this.size, this.size);\n        break;\n      case 1:\n        ctx.drawImage(this.image1, -15, -10, this.size, this.size);\n        break;\n      case 2:\n        ctx.drawImage(this.image2, -15, -10, this.size, this.size);\n        break;\n      case 3:\n        ctx.drawImage(this.image3, -15, -10, this.size, this.size);\n        break;\n      case 4:\n        ctx.drawImage(this.image4, -15, -10, this.size, this.size);\n        break;\n      case 5:\n        ctx.drawImage(this.image5, -15, -10, this.size, this.size);\n        break;\n      case 6:\n        ctx.drawImage(this.image6, -15, -10, this.size, this.size);\n        break;\n    }\n    \n  }\n\n  update(dt){\n\n  }\n}\n\n//# sourceURL=webpack:///./src/battery.js?");

/***/ }),

/***/ "./src/collision.js":
/*!**************************!*\
  !*** ./src/collision.js ***!
  \**************************/
/*! exports provided: detectCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detectCollision\", function() { return detectCollision; });\nfunction detectCollision (eel, fish) {\n  let fishDimensions = {\n    xStart: fish.position.x,\n    xEnd: fish.position.x + fish.size,\n    yStart: fish.position.y,\n    yEnd: fish.position.y + fish.size\n  };\n  let mouthOfEel = {\n    xStart: eel.position.x + 80,\n    xEnd: eel.position.x + eel.width - 50,\n    yStart: eel.position.y + 80,\n    yEnd: eel.position.y + eel.height\n  };\n\n  if (mouthOfEel.xStart < fishDimensions.xEnd &&\n    mouthOfEel.xEnd > fishDimensions.xStart &&\n    mouthOfEel.yStart < fishDimensions.yEnd &&\n    mouthOfEel.yEnd > fishDimensions.yStart){\n      return true;\n    } else {\n      return false;\n    }\n}\n\n//# sourceURL=webpack:///./src/collision.js?");

/***/ }),

/***/ "./src/eel.js":
/*!********************!*\
  !*** ./src/eel.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Eel; });\nclass Eel {\n\n  constructor(game){\n    this.image1 = document.getElementById(\"eel\");\n    this.image2 = document.getElementById(\"eel-super\");\n\n    this.game = game;\n    this.gameWidth = game.gameWidth;\n    this.gameHeight = game.gameHeight;\n\n    this.width = 120;\n    this.height = 40;\n    this.current = false;\n\n    this.maxSpeed = 10;\n    this.speed = 0;\n\n    this.position = {\n      x: this.width / 4,\n      y: this.gameHeight / 2 - this.height / 2 - 50\n    };\n  }\n\n  activateCurrent(){\n    if (this.game.meter >= 6){\n      this.current = true;\n      document.getElementById(\"current\").play();\n      this.game.meter = 0;\n      setTimeout(() => this.current = false, 8000);\n    }\n  }\n\n  moveUp() {\n    this.speed = -this.maxSpeed;\n  }\n\n  moveDown() {\n    this.speed = this.maxSpeed;\n  }\n\n  stop() {\n    this.speed = 0;\n  }\n\n\n  draw(ctx) {\n    if (!this.current) {\n      ctx.drawImage(this.image1, this.position.x, this.position.y);\n    } else {\n      ctx.drawImage(this.image2, this.position.x, this.position.y);\n    }\n  }\n\n  update(dt) {\n    \n    this.position.y += this.speed;\n\n    if (this.position.y < -30) this.position.y = -30;\n    if (this.position.y + this.height + 50 > this.gameHeight){ \n      this.position.y = this.gameHeight - this.height - 50;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/eel.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _eel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eel */ \"./src/eel.js\");\n/* harmony import */ var _prey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prey */ \"./src/prey.js\");\n/* harmony import */ var _predator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./predator */ \"./src/predator.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n/* harmony import */ var _battery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./battery */ \"./src/battery.js\");\n\n\n\n\n\n\nconst GAMESTATE = {\n  PAUSED: 0,\n  RUNNING: 1,\n  MENU: 2,\n  GAMEOVER: 3\n};\n\nclass Game {\n  constructor (gameWidth, gameHeight) {\n    this.gameWidth = gameWidth;\n    this.gameHeight = gameHeight;\n    \n    this.gamestate = GAMESTATE.MENU;\n    this.gameObjects = [];\n    this.eel = new _eel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.battery = new _battery__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this);\n    this.lives = 1;\n    this.score = 0;\n    this.meter = 0;\n    this.music = document.getElementById(\"music\");\n\n    new _input__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.eel, this);\n  }\n\n  start() {\n    this.music.play();\n\n    if (this.gamestate !== GAMESTATE.MENU) {\n          return;\n        }\n\n    let prey = [];\n    let predators = [];\n\n    for(let i = 0; i < 4; i++){\n      prey.push(new _prey__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this));\n      predators.push(new _predator__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this));\n    }\n\n    this.gameObjects = [\n      this.eel,\n      this.battery,\n      ...prey,\n      ...predators\n    ];\n\n    this.gamestate = GAMESTATE.RUNNING;\n  }\n\n  reset() {\n    if (this.gamestate === GAMESTATE.GAMEOVER){\n      location.reload();\n    }\n  }\n\n  update(dt) {\n    if (this.gamestate === GAMESTATE.RUNNING){\n      this.score += 1;\n    }\n\n    if (this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;\n\n    if (this.gamestate === GAMESTATE.PAUSED || \n        this.gamestate === GAMESTATE.MENU ||\n        this.gamestate === GAMESTATE.GAMEOVER) {\n          return;\n        }\n\n    this.gameObjects.forEach(obj => obj.update(dt));\n  }\n\n  draw(ctx) {\n    this.gameObjects.forEach(obj => obj.draw(ctx));\n\n    // SCORE\n    ctx.font = \"20px Arial\";\n    ctx.fillStyle = \"white\";\n    ctx.textAlign = \"start\";\n    ctx.fillText(this.score, 10, 20);\n    \n    // PAUSE\n    if (this.gamestate === GAMESTATE.PAUSED){\n      ctx.rect(0, 0, this.gameWidth, this.gameHeight);\n      ctx.fillStyle = \"rgba(0,0,0,0.5)\";\n      ctx.fill();\n\n      ctx.font = \"20px Arial\";\n      ctx.fillStyle = \"white\";\n      ctx.textAlign = \"center\";\n      ctx.fillText(\"PAUSED\", this.gameWidth / 2, this.gameHeight / 2);\n\n    }\n\n\n    // START MENU\n    if (this.gamestate === GAMESTATE.MENU){\n      ctx.rect(0, 0, this.gameWidth, this.gameHeight);\n      ctx.fillStyle = \"rgba(0,0,0,0.5)\";\n      ctx.fill();\n\n      ctx.font = \"20px Arial\";\n      ctx.fillStyle = \"white\";\n      ctx.textAlign = \"center\";\n      ctx.fillText(\"Eat smaller prey and avoid larger predators!\", this.gameWidth / 2, this.gameHeight / 2 - 75);\n      ctx.fillText(\"Use UP and DOWN keys to move\", this.gameWidth / 2, this.gameHeight / 2 - 35);\n      ctx.fillText(\"Press C to activate your electric current when fully charged!\", this.gameWidth / 2, this.gameHeight / 2);\n      ctx.fillText(\"Press P to pause game\", this.gameWidth / 2, this.gameHeight / 2 + 35);\n      ctx.fillText(\"Press SPACEBAR to start game\", this.gameWidth / 2, this.gameHeight / 2 + 75);\n\n    }\n\n    // GAME OVER\n    if (this.gamestate === GAMESTATE.GAMEOVER){\n      this.music.pause();\n      ctx.rect(0, 0, this.gameWidth, this.gameHeight);\n      ctx.fillStyle = \"rgba(0,0,0,1)\";\n      ctx.fill();\n\n      ctx.font = \"20px Arial\";\n      ctx.fillStyle = \"white\";\n      ctx.textAlign = \"center\";\n      ctx.fillText(\"GAME OVER\", this.gameWidth / 2, this.gameHeight / 2 - 20);\n      ctx.fillText(`SCORE ${this.score}`, this.gameWidth / 2, this.gameHeight / 2 + 10);\n      ctx.textAlign = \"start\";\n      ctx.fillText(\"Press R to reset\", 10, 20);\n\n    }\n  }\n\n  togglePause(){\n    if (this.gamestate == GAMESTATE.PAUSED){\n      this.gamestate = GAMESTATE.RUNNING;\n    } else {\n      this.gamestate = GAMESTATE.PAUSED;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nlet canvas = document.getElementById(\"gameScreen\");\n\nlet ctx = canvas.getContext(\"2d\");\n\nconst GAME_WIDTH = 700;\nconst GAME_HEIGHT = 500;\n\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](GAME_WIDTH, GAME_HEIGHT);\n\nlet lastTime = 0;\n\n\nfunction gameLoop(timestamp) {\n  let dt = timestamp - lastTime;\n  lastTime = timestamp;\n\n  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);\n\n  game.update(dt);\n  game.draw(ctx);\n  \n\n  requestAnimationFrame(gameLoop);\n}\n\nrequestAnimationFrame(gameLoop);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\nclass InputHandler {\n  constructor(eel, game){\n\n    document.addEventListener(\"keydown\", (event) => {\n\n      switch(event.keyCode){\n        case 38:\n          eel.moveUp();\n          break;\n        case 40:\n          eel.moveDown();\n          break;\n        case 80:\n          game.togglePause();\n          break; \n        case 32:\n          game.start();\n          break;\n        case 82:\n          game.reset();\n          break;\n        case 67:\n          eel.activateCurrent();\n          break;\n      }\n    });\n\n    document.addEventListener(\"keyup\", (event) => {\n\n      switch(event.keyCode){\n        case 38:\n          if (eel.speed < 0) eel.stop();\n          break;\n        case 40:\n          if (eel.speed > 0) eel.stop();\n          break;\n      }\n    });\n  }\n\n\n}\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/predator.js":
/*!*************************!*\
  !*** ./src/predator.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Predator; });\n/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collision */ \"./src/collision.js\");\n\n\nclass Predator {\n  constructor(game) {\n    this.image = document.getElementById(\"predator\");\n    this.size = 180;\n\n    this.gameWidth = game.gameWidth;\n    this.gameHeight = game.gameHeight;\n    this.game = game;\n\n    this.position = {\n      x: game.gameWidth + Math.random() * 300,\n      y: game.gameHeight - Math.random() * game.gameHeight - 85\n    };\n\n    this.speed = {x: -7};\n  }\n\n  draw(ctx) {\n    ctx.drawImage(this.image,\n                  this.position.x,\n                  this.position.y,\n                  this.size,\n                  this.size);\n  }\n\n  respawn() {\n    this.position.x = this.gameWidth + Math.random() * 300;\n    this.position.y = this.gameHeight - Math.random() * this.gameHeight - 85;\n  }\n\n  update(dt) {\n    this.position.x += this.speed.x;\n\n    if (this.position.x + this.size < 0) {\n      this.respawn();\n    }\n\n    if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"detectCollision\"])(this.game.eel, this) && !this.game.eel.current) {\n      this.game.lives -= 1;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/predator.js?");

/***/ }),

/***/ "./src/prey.js":
/*!*********************!*\
  !*** ./src/prey.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Prey; });\n/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collision */ \"./src/collision.js\");\n\n\nclass Prey {\n\n  constructor(game) {\n    this.image = document.getElementById(\"tiny\");\n    this.size = 100;\n\n    this.gameWidth = game.gameWidth;\n    this.gameHeight = game.gameHeight;\n    this.game = game;\n    \n    this.position = {\n      x: game.gameWidth + Math.random() * 200, \n      y: game.gameHeight - Math.random() * game.gameHeight - 85\n    };\n\n    this.speed = {x: -8};\n  }\n\n  draw(ctx) {\n    ctx.drawImage(this.image, \n                  this.position.x, \n                  this.position.y,\n                  this.size,\n                  this.size);\n  }\n\n  respawn() {\n    this.position.x = this.gameWidth + Math.random() * 200;\n    this.position.y = this.gameHeight - Math.random() * this.gameHeight - 85;\n  }\n\n  update(dt) {\n    this.position.x += this.speed.x;\n\n    if (this.position.x + this.size < 0){\n      this.respawn();\n    }\n\n    if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"detectCollision\"])(this.game.eel, this)){\n      this.game.score += 250;\n      document.getElementById(\"shock\").play();\n      this.respawn();\n\n      if (!this.game.eel.current){\n        this.game.meter += 1;\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/prey.js?");

/***/ })

/******/ });