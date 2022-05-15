"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getComments";
exports.ids = ["pages/api/getComments"];
exports.modules = {

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ "(api)/./pages/api/getComments.ts":
/*!**********************************!*\
  !*** ./pages/api/getComments.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.js\");\n\n\nconst commentQuery = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`*[_type==\"comment\" && references(*[_type=='tweet' && _id==$tweetId ]._id)] {\r\n    _id,\r\n    ...\r\n    \r\n} | order(_createdAt desc)`;\nasync function handler(req, res) {\n    const { tweetId  } = req.query;\n    const comments = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(commentQuery, {\n        tweetId\n    });\n    console.log(comments);\n//res.status(200).json({ name: 'John Doe' })\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q29tbWVudHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVpQztBQUNXO0FBRzVDLE1BQU1FLFlBQVksR0FBR0YsNkNBQUksQ0FBQztBQU8xQjtJQUlJO0lBQ0E7UUFDSU0sT0FBTztBQUNUO0lBQ0ZJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUMsQ0FBQztBQUN4QixrRkFBNEM7Q0FDN0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0Q29tbWVudHMudHM/MTc4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQge2dyb3F9IGZyb20gJ25leHQtc2FuaXR5JztcclxuaW1wb3J0IHsgc2FuaXR5Q2xpZW50IH0gZnJvbSAnLi4vLi4vc2FuaXR5JztcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4uLy4uL3R5cGluZ3MnO1xyXG5cclxuY29uc3QgY29tbWVudFF1ZXJ5ID0gZ3JvcWAqW190eXBlPT1cImNvbW1lbnRcIiAmJiByZWZlcmVuY2VzKCpbX3R5cGU9PSd0d2VldCcgJiYgX2lkPT0kdHdlZXRJZCBdLl9pZCldIHtcclxuICAgIF9pZCxcclxuICAgIC4uLlxyXG4gICAgXHJcbn0gfCBvcmRlcihfY3JlYXRlZEF0IGRlc2MpYFxyXG50eXBlIERhdGEgPSBDb21tZW50W11cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxyXG4pIHtcclxuICAgIGNvbnN0IHt0d2VldElkfT0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc3QgY29tbWVudHM6IENvbW1lbnRbXT0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKGNvbW1lbnRRdWVyeSx7XHJcbiAgICAgICAgdHdlZXRJZFxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGNvbW1lbnRzKTtcclxuICAvL3Jlcy5zdGF0dXMoMjAwKS5qc29uKHsgbmFtZTogJ0pvaG4gRG9lJyB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJncm9xIiwic2FuaXR5Q2xpZW50IiwiY29tbWVudFF1ZXJ5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInR3ZWV0SWQiLCJxdWVyeSIsImNvbW1lbnRzIiwiZmV0Y2giLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getComments.ts\n");

/***/ }),

/***/ "(api)/./sanity.js":
/*!*******************!*\
  !*** ./sanity.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient),\n/* harmony export */   \"sanityConfig\": () => (/* binding */ sanityConfig)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n\nconst sanityConfig = {\n    dataset: \"production\" || 0,\n    projectId: \"vsq93qn4\",\n    apiVersion: \"2021-10-21\",\n    useCdn: true\n};\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(sanityConfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zYW5pdHkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUVuQyxNQUFNQyxZQUFZLEdBQUc7SUFDMUJDLE9BQU8sRUFBRUMsWUFBc0MsSUFBSSxDQUFZO0lBQy9ERyxTQUFTLEVBQUVILFVBQXlDO0lBQ3BESyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsTUFBTSxFQUFFLElBQUk7Q0FDYjtBQUNNLE1BQU1DLFlBQVksR0FBR1YseURBQVksQ0FBQ0MsWUFBWSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2FuaXR5LmpzPzg1ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnbmV4dC1zYW5pdHknXHJcblxyXG5leHBvcnQgY29uc3Qgc2FuaXR5Q29uZmlnID0ge1xyXG4gIGRhdGFzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIHx8ICdwcm9kdWN0aW9uJyxcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lELFxyXG4gIGFwaVZlcnNpb246ICcyMDIxLTEwLTIxJyxcclxuICB1c2VDZG46IHRydWUsXHJcbn1cclxuZXhwb3J0IGNvbnN0IHNhbml0eUNsaWVudCA9IGNyZWF0ZUNsaWVudChzYW5pdHlDb25maWcpXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzYW5pdHlDb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJhcGlWZXJzaW9uIiwidXNlQ2RuIiwic2FuaXR5Q2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./sanity.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getComments.ts"));
module.exports = __webpack_exports__;

})();