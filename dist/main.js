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

/***/ "./src/film.js":
/*!*********************!*\
  !*** ./src/film.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Film{\r\n  constructor(title, status){\r\n    this.title = title;\r\n    this.status = status;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Film);\n\n//# sourceURL=webpack:///./src/film.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _film__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./film */ \"./src/film.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayFilms);\r\n\r\ndocument.querySelector('#film-form').addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n\r\n  const title = document.querySelector('#title').value;\r\n  const status = document.querySelector('#status').value;\r\n\r\n  if(title === ''){\r\n    alert('Enter film title');\r\n  } else {\r\n    const film = new _film__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, status);\r\n\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addFilmToList(film);\r\n\r\n    _storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addFilm(film);\r\n  \r\n    _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearFields();\r\n  }\r\n});\r\n\r\ndocument.querySelector('#film-list').addEventListener('click', (e) => {\r\n  if(e.target.classList.contains('delete')) {\r\n    e.target.parentElement.parentElement.remove();\r\n  }\r\n  _storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeFilm(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Store{\r\n  static getFilms(){\r\n    let films;\r\n    if(localStorage.getItem('films') === null){\r\n      films = [];\r\n    } else {\r\n      films = JSON.parse(localStorage.getItem('films'));\r\n    }\r\n\r\n    return films;\r\n  }\r\n\r\n  static addFilm(film){\r\n    const films = Store.getFilms();\r\n\r\n    films.push(film);\r\n\r\n    localStorage.setItem('films', JSON.stringify(films));\r\n  }\r\n\r\n  static removeFilm(title){\r\n    const films = Store.getFilms();\r\n\r\n    films.forEach((film, index) => {\r\n      if(film.title === title){\r\n        films.splice(index, 1);\r\n      }\r\n    });\r\n\r\n    localStorage.setItem('films', JSON.stringify(films));\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Store);\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\r\n\r\nclass UI{\r\n  constructor(){\r\n    this.Store = new _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n  }\r\n  static displayFilms(){\r\n\r\n    const films = _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFilms();\r\n\r\n    films.forEach((film) => {\r\n      UI.addFilmToList(film);\r\n    })\r\n  }\r\n\r\n  static addFilmToList(film){\r\n    const list = document.querySelector('#film-list');\r\n\r\n    const row = document.createElement('tr');\r\n\r\n    row.innerHTML = `\r\n      <td class=\"item-title\">${film.title}</td>\r\n      <td class=\"item-status\">${film.status}</td>\r\n      <td><a href=\"#\" class=\"delete\"></a></td>\r\n    `;\r\n\r\n    list.appendChild(row);\r\n  }\r\n\r\n  static clearFields(){\r\n    document.querySelector('#title').value = '';\r\n    document.querySelector('#status').value = '';\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (UI);\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ })

/******/ });