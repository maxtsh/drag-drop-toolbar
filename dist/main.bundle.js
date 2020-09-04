(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/dragdrop.js":
/*!*************************!*\
  !*** ./src/dragdrop.js ***!
  \*************************/
/*! exports provided: onDrag, onDragStart, onDragEnd, onDragOver, onDragEnter, onDragLeave, onDrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDrag\", function() { return onDrag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDragStart\", function() { return onDragStart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDragEnd\", function() { return onDragEnd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDragOver\", function() { return onDragOver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDragEnter\", function() { return onDragEnter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDragLeave\", function() { return onDragLeave; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDrop\", function() { return onDrop; });\nlet draggedElm;\r\n// Elements\r\nconst image = document.getElementById(\"image\");\r\nconst title = document.querySelector(\".title\");\r\n\r\nfunction onDrag(e) {\r\n  console.log(\"Dragging\");\r\n}\r\n\r\nfunction onDragStart(e) {\r\n  console.log(\"Drag Start\");\r\n  draggedElm = e.target;\r\n  e.target.style.backgroundColor = \"#666666\";\r\n}\r\n\r\nfunction onDragEnd(e) {\r\n  console.log(\"Drag End\");\r\n  e.target.style.backgroundColor = \"\";\r\n}\r\n\r\nfunction onDragOver(e) {\r\n  // prevent default to allow drop for dropzone\r\n  e.preventDefault();\r\n}\r\n\r\nfunction onDragEnter(e) {\r\n  console.log(\"Drag Enter\", e.target);\r\n  e.target.style.backgroundColor = \"#bdc3c7\";\r\n}\r\n\r\nfunction onDragLeave(e) {\r\n  console.log(\"Drag Leave\");\r\n  e.target.style.backgroundColor = \"\";\r\n}\r\n\r\nfunction onDrop(e) {\r\n  e.preventDefault();\r\n  console.log(\"Drop\", e.target);\r\n  e.target.style.backgroundColor = \"\";\r\n  draggedElm.style.backgroundColor = \"\";\r\n  image.style.width = \"600px\";\r\n  draggedElm.removeChild(title);\r\n  draggedElm.parentNode.removeChild(draggedElm);\r\n  e.target.appendChild(draggedElm);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/dragdrop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dragdrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragdrop */ \"./src/dragdrop.js\");\n\r\n\r\nconst toolbar = document.querySelector(\".toolbar\");\r\n// Iframe\r\nconst iframe = document.querySelector(\".preview-builder\");\r\nconst iframeDoc = iframe.contentDocument;\r\n\r\ntoolbar.addEventListener(\"drag\", _dragdrop__WEBPACK_IMPORTED_MODULE_0__[\"onDrag\"]);\r\ntoolbar.addEventListener(\"dragstart\", _dragdrop__WEBPACK_IMPORTED_MODULE_0__[\"onDragStart\"]);\r\ntoolbar.addEventListener(\"dragend\", _dragdrop__WEBPACK_IMPORTED_MODULE_0__[\"onDragEnd\"]);\r\niframeDoc.addEventListener(\"dragover\", _dragdrop__WEBPACK_IMPORTED_MODULE_0__[\"onDragOver\"]);\r\niframeDoc.addEventListener(\"dragenter\", _dragdrop__WEBPACK_IMPORTED_MODULE_0__[\"onDragEnter\"]);\r\niframeDoc.addEventListener(\"dragleave\", _dragdrop__WEBPACK_IMPORTED_MODULE_0__[\"onDragLeave\"]);\r\niframeDoc.addEventListener(\"drop\", _dragdrop__WEBPACK_IMPORTED_MODULE_0__[\"onDrop\"]);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

},[["./src/index.js","runtime"]]]);