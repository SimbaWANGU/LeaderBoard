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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\r\\n}\\r\\n\\r\\n.mainContainer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  margin-left: 8%;\\r\\n}\\r\\n\\r\\n.mainSection {\\r\\n  width: 100%;\\r\\n  height: 90%;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\n.scoresDisplay {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin: auto;\\r\\n  margin-top: 0;\\r\\n  width: 43%;\\r\\n}\\r\\n\\r\\n.addScoresDisplay {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin: auto;\\r\\n  margin-top: 0;\\r\\n  width: 43%;\\r\\n}\\r\\n\\r\\n.headingDiv {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  margin: auto;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.subTitle {\\r\\n  margin: auto;\\r\\n  padding: 1%;\\r\\n}\\r\\n\\r\\n.refreshButton {\\r\\n  margin: auto;\\r\\n  background-color: white;\\r\\n  line-height: 18px;\\r\\n  font-weight: bold;\\r\\n  box-shadow: 2px 2px;\\r\\n  padding: 0 10px 0 10px;\\r\\n}\\r\\n\\r\\n.unorderedList {\\r\\n  border: 2px solid;\\r\\n  list-style-type: none;\\r\\n  padding-left: 0;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.unorderedList :nth-child(odd) {\\r\\n  background-color: rgba(128, 128, 128, 0.3);\\r\\n}\\r\\n\\r\\n.unorderedListItem {\\r\\n  line-height: 30px;\\r\\n  font-size: 16px;\\r\\n  padding-left: 5%;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.dataInput {\\r\\n  line-height: 30px;\\r\\n  margin-top: 10px;\\r\\n  margin-bottom: 10px;\\r\\n  border: 2px solid;\\r\\n  padding: 0 10px;\\r\\n}\\r\\n\\r\\n.submitButton {\\r\\n  margin: auto;\\r\\n  margin-right: 0;\\r\\n  background-color: white;\\r\\n  line-height: 18px;\\r\\n  font-weight: bold;\\r\\n  box-shadow: 2px 2px;\\r\\n  padding: 0 10px 0 10px;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  background-color: rgba(128, 128, 128, 0.5);\\r\\n  height: 5%;\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.footerImage {\\r\\n  height: 80%;\\r\\n  float: right;\\r\\n  padding: 5px;\\r\\n  transform: rotate(45deg);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leaderboard/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://leaderboard/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/declarations.js */ \"./src/modules/declarations.js\");\n/* harmony import */ var _modules_refresh_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/refresh.js */ \"./src/modules/refresh.js\");\n/* harmony import */ var _modules_postGame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/postGame.js */ \"./src/modules/postGame.js\");\n\n\n\n\n\nconst component = () => {\n  _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.mainContainer.appendChild(_modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.title);\n\n  _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.headingDiv.appendChild(_modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.subTitle);\n\n  _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.refreshButton.addEventListener('click', () => {\n    if (_modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.unorderedList.innerHTML === '') {\n      (0,_modules_refresh_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n        .then((response) => {\n          response.forEach((res) => {\n            const unorderedListItem = document.createElement('li');\n            unorderedListItem.classList.add('unorderedListItem');\n            unorderedListItem.innerText = `${res.user} : ${res.score}`;\n            _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.unorderedList.appendChild(unorderedListItem);\n          });\n        });\n    } else {\n      _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.unorderedList.innerHTML = '';\n      (0,_modules_refresh_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n        .then((response) => {\n          response.forEach((res) => {\n            const unorderedListItem = document.createElement('li');\n            unorderedListItem.classList.add('unorderedListItem');\n            unorderedListItem.innerText = `${res.user} : ${res.score}`;\n            _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.unorderedList.appendChild(unorderedListItem);\n          });\n        });\n    }\n  });\n  _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.headingDiv.appendChild(_modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.refreshButton);\n\n  _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.scoresDisplay.appendChild(_modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.headingDiv);\n  _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.scoresDisplay.appendChild(_modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.unorderedList);\n\n  _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.mainSection.appendChild(_modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.scoresDisplay);\n\n  _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.addScoresDisplay.appendChild(_modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.subTitle2);\n  _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.addScoresDisplay.appendChild(_modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.nameInput);\n  _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.addScoresDisplay.appendChild(_modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.scoreInput);\n\n  _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.submitButton.addEventListener('click', (e) => {\n    if (_modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.nameInput.value === '' || _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.scoreInput.value === '') {\n      e.preventDefault();\n    } else {\n      (0,_modules_postGame_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.nameInput.value, _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.scoreInput.value);\n      _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.nameInput.value = '';\n      _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.scoreInput.value = '';\n    }\n  });\n  _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.addScoresDisplay.appendChild(_modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.submitButton);\n\n  _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.mainSection.appendChild(_modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.addScoresDisplay);\n\n  _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.mainContainer.appendChild(_modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.mainSection);\n  _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.mainContainer.appendChild(_modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.footer);\n  return _modules_declarations_js__WEBPACK_IMPORTED_MODULE_1__.mainContainer;\n};\n\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/declarations.js":
/*!*************************************!*\
  !*** ./src/modules/declarations.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addScoresDisplay\": () => (/* binding */ addScoresDisplay),\n/* harmony export */   \"footer\": () => (/* binding */ footer),\n/* harmony export */   \"headingDiv\": () => (/* binding */ headingDiv),\n/* harmony export */   \"mainContainer\": () => (/* binding */ mainContainer),\n/* harmony export */   \"mainSection\": () => (/* binding */ mainSection),\n/* harmony export */   \"nameInput\": () => (/* binding */ nameInput),\n/* harmony export */   \"refreshButton\": () => (/* binding */ refreshButton),\n/* harmony export */   \"scoreInput\": () => (/* binding */ scoreInput),\n/* harmony export */   \"scoresDisplay\": () => (/* binding */ scoresDisplay),\n/* harmony export */   \"subTitle\": () => (/* binding */ subTitle),\n/* harmony export */   \"subTitle2\": () => (/* binding */ subTitle2),\n/* harmony export */   \"submitButton\": () => (/* binding */ submitButton),\n/* harmony export */   \"title\": () => (/* binding */ title),\n/* harmony export */   \"unorderedList\": () => (/* binding */ unorderedList)\n/* harmony export */ });\n/* harmony import */ var _images_footsteps_silhouette_variant_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/footsteps-silhouette-variant.png */ \"./src/images/footsteps-silhouette-variant.png\");\n\n\nconst mainContainer = document.createElement('div');\nmainContainer.classList.add('mainContainer');\n\nconst title = document.createElement('h1');\ntitle.innerText = 'Leaderboard';\ntitle.classList.add('title');\n\nconst mainSection = document.createElement('div');\nmainSection.classList.add('mainSection');\n\nconst scoresDisplay = document.createElement('div');\nscoresDisplay.classList.add('scoresDisplay');\n\nconst headingDiv = document.createElement('div');\nheadingDiv.classList.add('headingDiv');\n\nconst subTitle = document.createElement('h2');\nsubTitle.classList.add('subTitle');\nsubTitle.innerText = 'Recent Scores';\n\nconst refreshButton = document.createElement('button');\nrefreshButton.classList.add('refreshButton');\nrefreshButton.innerText = 'Refresh';\n\nconst unorderedList = document.createElement('ul');\nunorderedList.classList.add('unorderedList');\n\nconst addScoresDisplay = document.createElement('div');\naddScoresDisplay.classList.add('addScoresDisplay');\n\nconst subTitle2 = document.createElement('h2');\nsubTitle2.classList.add('subTitle');\nsubTitle2.innerText = 'Add your Scores';\n\nconst nameInput = document.createElement('input');\nnameInput.classList.add('dataInput');\nnameInput.placeholder = 'Your name';\n\nconst scoreInput = document.createElement('input');\nscoreInput.classList.add('dataInput');\nscoreInput.placeholder = 'Your Score';\n\nconst submitButton = document.createElement('button');\nsubmitButton.classList.add('submitButton');\nsubmitButton.innerText = 'Submit';\n\nconst footer = document.createElement('footer');\nfooter.classList.add('footer');\nfooter.innerText = ' .';\n\nconst image = document.createElement('img');\nimage.classList.add('footerImage');\nimage.src = _images_footsteps_silhouette_variant_png__WEBPACK_IMPORTED_MODULE_0__;\n\nfooter.appendChild(image);\n\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/declarations.js?");

/***/ }),

/***/ "./src/modules/postGame.js":
/*!*********************************!*\
  !*** ./src/modules/postGame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postGame = async (userName, userScore) => {\n  const values = JSON.stringify({\n    user: userName,\n    score: userScore,\n  });\n  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CDJ8oUTB9lzH5vIwdnUz/scores', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: values,\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postGame);\n\n//# sourceURL=webpack://leaderboard/./src/modules/postGame.js?");

/***/ }),

/***/ "./src/modules/refresh.js":
/*!********************************!*\
  !*** ./src/modules/refresh.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst refresh = async () => {\n  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CDJ8oUTB9lzH5vIwdnUz/scores');\n  const results = await response.json();\n  return results.result;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refresh);\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/refresh.js?");

/***/ }),

/***/ "./src/images/footsteps-silhouette-variant.png":
/*!*****************************************************!*\
  !*** ./src/images/footsteps-silhouette-variant.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa9dd7fb8fbb46b690f4.png\";\n\n//# sourceURL=webpack://leaderboard/./src/images/footsteps-silhouette-variant.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
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