(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dragdrop"],{

/***/ "./src/dragdrop.js":
/*!*************************!*\
  !*** ./src/dragdrop.js ***!
  \*************************/
/*! exports provided: onDrag, onDragStart, onDragEnd, onDragOver, onDragEnter, onDragLeave, onDrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDrag\", function() { return onDrag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDragStart\", function() { return onDragStart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDragEnd\", function() { return onDragEnd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDragOver\", function() { return onDragOver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDragEnter\", function() { return onDragEnter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDragLeave\", function() { return onDragLeave; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDrop\", function() { return onDrop; });\nlet draggedElm;\r\n// Elements\r\nconst image = document.getElementById(\"image\");\r\nconst title = document.querySelector(\".title\");\r\n\r\nfunction onDrag(e) {\r\n  console.log(\"Dragging\");\r\n}\r\n\r\nfunction onDragStart(e) {\r\n  console.log(\"Drag Start\");\r\n  draggedElm = e.target;\r\n  e.target.style.backgroundColor = \"#666666\";\r\n}\r\n\r\nfunction onDragEnd(e) {\r\n  console.log(\"Drag End\");\r\n  e.target.style.backgroundColor = \"\";\r\n}\r\n\r\nfunction onDragOver(e) {\r\n  // prevent default to allow drop for dropzone\r\n  e.preventDefault();\r\n}\r\n\r\nfunction onDragEnter(e) {\r\n  console.log(\"Drag Enter\", e.target);\r\n  e.target.style.backgroundColor = \"#bdc3c7\";\r\n}\r\n\r\nfunction onDragLeave(e) {\r\n  console.log(\"Drag Leave\");\r\n  e.target.style.backgroundColor = \"\";\r\n}\r\n\r\nfunction onDrop(e) {\r\n  e.preventDefault();\r\n  console.log(\"Drop\", e.target);\r\n  e.target.style.backgroundColor = \"\";\r\n  draggedElm.style.backgroundColor = \"\";\r\n  image.style.width = \"600px\";\r\n  draggedElm.removeChild(title);\r\n  draggedElm.parentNode.removeChild(draggedElm);\r\n  e.target.appendChild(draggedElm);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/dragdrop.js?");

/***/ })

},[["./src/dragdrop.js","runtime"]]]);