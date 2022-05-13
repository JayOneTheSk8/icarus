/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chapters.js":
/*!*************************!*\
  !*** ./src/chapters.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  title: \"Chapter 1: Elements of Surprise\",\n  url: \"https://docs.google.com/document/d/e/2PACX-1vSiHGgXpHJxO1qckESRXOUt_adlMs6I_2XnETQp5fnbswfMO9PMsMM4Tii5wyareH21fGAMEwMhoNjJ/pub?embedded=true\"\n}, {\n  title: \"Chapter 2: Baby Bird\",\n  url: \"https://docs.google.com/document/d/e/2PACX-1vS258XjyRvs9e6tryYoksmcxCZLeeN1oFQvpHV6475jZE0ejNAQC7C2okfKSiDKY33wDnokANK2GVVE/pub?embedded=true\"\n}, {\n  title: \"Chapter 3: Blood Brothers\",\n  url: \"https://docs.google.com/document/d/e/2PACX-1vRZQbR-PZduZtUK6EtRm9D2U7nBpRTohNl41npT035JCY3NXB8wXdJ2ZJWtq_g2imJV8PUnaVqekH2z/pub?embedded=true\"\n}]);\n\n//# sourceURL=webpack://icarus-blog/./src/chapters.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chapters */ \"./src/chapters.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n // Constants\n\nvar WINDOW_LIMIT = 1105;\nvar chapterSrcMap = {}; // Elements\n\nvar body = document.getElementById('home');\nvar darkModeButton = document.getElementById('dark-mode-button');\nvar mobileDarkModeButton = document.getElementById('dark-mode-button-mobile');\nvar chapterNamesList = document.getElementById('chapter-list');\nvar chapterDropdown = document.getElementById('chapter-dropdown');\nvar chapterSelectContainer = document.getElementById('chapter-select-container');\nvar chapterSelect = document.getElementById('chapter-select');\nvar currentChapterTitle = document.getElementById('document-title');\nvar currentDocumentIFrame = document.getElementById('document-display'); // Variables\n\nvar usingMobile = false; // Event Handlers\n\ndarkModeButton.onchange = function (e) {\n  body.className = e.target.checked ? \"dark-mode\" : \"\";\n  mobileDarkModeButton.checked = e.target.checked;\n};\n\nmobileDarkModeButton.onchange = function (e) {\n  body.className = e.target.checked ? \"dark-mode\" : \"\";\n  darkModeButton.checked = e.target.checked;\n};\n\nchapterSelect.onchange = function (e) {\n  // Only if the chapter is not already displayed\n  if (currentChapterTitle.innerText !== e.target.value) {\n    // Set the current iframe's src to the chapter's url\n    currentDocumentIFrame.src = chapterSrcMap[e.target.value]; // Set the title\n\n    currentChapterTitle.innerText = e.target.value;\n  }\n}; // Functions\n\n\nvar changeToMobile = function changeToMobile(setMobile) {\n  chapterDropdown.className = setMobile ? 'chapter-dropdown-mobile' : 'chapter-dropdown';\n  chapterSelectContainer.className = setMobile ? 'chapter-select-container-mobile' : 'chapter-select-container';\n  currentDocumentIFrame.className = setMobile ? 'document-display-mobile' : 'document-display';\n  currentChapterTitle.className = setMobile ? 'document-title-mobile' : 'document-title';\n  usingMobile = setMobile;\n};\n\nvar chapterClickFunc = function chapterClickFunc(chapterUrl) {\n  return function (e) {\n    // Only if the chapter is not already displayed\n    if (currentChapterTitle.innerText !== e.target.innerText) {\n      // Set the current iframe's src to the chapter's url\n      currentDocumentIFrame.src = chapterUrl; // Set the title\n\n      currentChapterTitle.innerText = e.target.innerText; // Set correct value in select\n\n      chapterSelect.value = e.target.innerText;\n    }\n  };\n};\n\nvar handleResize = function handleResize(e) {\n  // If the width is below the limit and it isn't already using mobile classes\n  if (e.target.innerWidth < WINDOW_LIMIT && !usingMobile) {\n    // Set the classes to mobile type\n    changeToMobile(true);\n  } else if (e.target.innerWidth >= WINDOW_LIMIT && usingMobile) {\n    // Otherwise if we are using mobile\n    // Set the classes to regular type\n    changeToMobile(false);\n  }\n}; // Create Chapter Options\n\n\nvar _iterator = _createForOfIteratorHelper(_chapters__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n    _step;\n\ntry {\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    var chapter = _step.value;\n    // Create chapter list div\n    var chapEl = document.createElement('div'); // Use class name and insert title\n\n    chapEl.className = 'chapter-name';\n    chapEl.innerText = chapter.title; // Set onclick function and add to list\n\n    chapEl.onclick = chapterClickFunc(chapter.url);\n    chapterNamesList.appendChild(chapEl); // Add select option\n\n    var chapOpt = document.createElement('option'); // Use option class name and insert title\n\n    chapOpt.className = 'chapter-option';\n    chapOpt.innerText = chapter.title; // Set value and add src to map for onchange function\n\n    chapOpt.value = chapter.title;\n    chapterSrcMap[chapter.title] = chapter.url; // Add to chapter select\n\n    chapterSelect.appendChild(chapOpt);\n  } // Start on chapter 1\n\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\ncurrentChapterTitle.innerText = _chapters__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0].title;\ncurrentDocumentIFrame.src = _chapters__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0].url; // Add event listener to window\n\nwindow.addEventListener('resize', handleResize); // Resize if on mobile\n\nif (window.innerWidth < WINDOW_LIMIT) {\n  changeToMobile(true);\n}\n\n//# sourceURL=webpack://icarus-blog/./src/index.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;