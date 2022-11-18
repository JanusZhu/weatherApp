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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/view */ \"./src/modules/view.js\");\n\n\n\nconst data = _modules_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWeatherData(\"Seoul\");\n_modules_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadData(data);\n\nconst form = document.querySelector(\"form\");\nconst searchBtn = document.querySelector(\".search\");\nconst searchInput = document.querySelector(\"#city\");\nconst switchBtn = document.querySelector(\".switch\");\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n});\n\nsearchBtn.addEventListener(\"click\", () => {\n  if (searchInput.value === \"\") {\n    return;\n  }\n  _modules_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadData(_modules_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWeatherData(searchInput.value));\n});\n\nswitchBtn.addEventListener(\"click\", () => {\n  if (switchBtn.textContent === \"°C\") {\n    switchBtn.textContent = \"°F\";\n  } else {\n    switchBtn.textContent = \"°C\";\n  }\n  _modules_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeUnit();\n  _modules_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadData(\n    _modules_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWeatherData(document.querySelector(\"#cityName\").textContent)\n  );\n});\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable prefer-template */\nconst view = (() => {\n  const unit = \"°\";\n  const errorMessage = document.querySelector(\"#errorMessage\");\n  function handleNotFound(city) {\n    errorMessage.textContent = `City ${city} not found`;\n  }\n  async function loadData(e) {\n    const data = await e;\n    if (data) {\n      // eslint-disable-next-line spaced-comment\n      //console.log(data);\n      errorMessage.textContent = \"\";\n      document.querySelector(\"#cityName\").textContent = data.cityName;\n      document.querySelector(\"#countryName\").textContent =\n        \", \" + data.countryName;\n      document.querySelector(\"#description\").textContent = data.description;\n      document.querySelector(\"#temperature\").textContent =\n        Math.round(data.temperature) + unit;\n      document.querySelector(\"#minTemp\").textContent =\n        \"Min: \" + Math.round(data.minTemp) + unit;\n      document.querySelector(\"#maxTemp\").textContent =\n        \"Max: \" + Math.round(data.maxTemp) + unit;\n      document.querySelector(\"#feelsLike\").textContent =\n        Math.round(data.feelsLike) + unit;\n      // eslint-disable-next-line prefer-template\n      document.querySelector(\"#humidity\").textContent = data.humidity + \"%\";\n    }\n  }\n  return { loadData, handleNotFound };\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/view.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/modules/view.js\");\n\n\nconst weather = (() => {\n  let defaultUnit = \"metric\";\n  function convertData(data) {\n    const {\n      name: cityName,\n      sys: { country: countryName },\n      main: {\n        temp: temperature,\n        feels_like: feelsLike,\n        temp_min: minTemp,\n        temp_max: maxTemp,\n        humidity,\n      },\n      weather: [{ main: description }],\n    } = data;\n    return {\n      cityName,\n      countryName,\n      description,\n      temperature,\n      feelsLike,\n      minTemp,\n      maxTemp,\n      humidity,\n    };\n  }\n  function changeUnit() {\n    if (defaultUnit === \"metric\") {\n      defaultUnit = \"imperial\";\n    } else {\n      defaultUnit = \"metric\";\n    }\n  }\n  async function getWeatherData(city) {\n    try {\n      const response = await fetch(\n        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${defaultUnit}&APPID=28fe7b5f9a78838c639143fc517e4343`,\n        { mode: \"cors\" }\n      );\n      if (!response.ok) {\n        throw new Error(\"City not found\");\n      }\n      const json = await response.json();\n      const data = convertData(json);\n      return data;\n    } catch (error) {\n      if (error.message === \"City not found\") {\n        _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handleNotFound(city);\n      }\n      return null;\n    }\n  }\n  return { getWeatherData, changeUnit };\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/weather.js?");

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