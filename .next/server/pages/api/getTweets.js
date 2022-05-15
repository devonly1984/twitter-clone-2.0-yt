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
exports.id = "pages/api/getTweets";
exports.ids = ["pages/api/getTweets"];
exports.modules = {

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ "(api)/./pages/api/getTweets.ts":
/*!********************************!*\
  !*** ./pages/api/getTweets.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.js\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst feedQuery = next_sanity__WEBPACK_IMPORTED_MODULE_1__.groq`*[_type==\"tweet\" && !blockTweet] {\r\n  _id,\r\n  ...\r\n} | order(_createdAt desc)`;\nasync function handler(req, res) {\n    const tweets = await _sanity__WEBPACK_IMPORTED_MODULE_0__.sanityClient.fetch(feedQuery);\n    res.status(200).json({\n        tweets\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VHdlZXRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLMkM7QUFDVDtBQUNsQyxNQUFNRSxTQUFTLEdBQUdELDZDQUFJLENBQUM7QUFRdkI7SUFJRTtJQUVBSSxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO0FBQU87S0FBQyxDQUFDO0NBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2dldFR3ZWV0cy50cz9jNWYyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5cclxuaW1wb3J0IHsgVHdlZXQgfSBmcm9tICcuLi8uLi90eXBpbmdzJ1xyXG5pbXBvcnQgeyBzYW5pdHlDbGllbnQgfSBmcm9tICcuLi8uLi9zYW5pdHknXHJcbmltcG9ydCB7IGdyb3EgfSBmcm9tICduZXh0LXNhbml0eSdcclxuY29uc3QgZmVlZFF1ZXJ5ID0gZ3JvcWAqW190eXBlPT1cInR3ZWV0XCIgJiYgIWJsb2NrVHdlZXRdIHtcclxuICBfaWQsXHJcbiAgLi4uXHJcbn0gfCBvcmRlcihfY3JlYXRlZEF0IGRlc2MpYFxyXG50eXBlIERhdGEgPSB7XHJcbiAgdHdlZXRzOiBUd2VldFtdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxyXG4pIHtcclxuICBjb25zdCB0d2VldHM6IFR3ZWV0W10gPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2goZmVlZFF1ZXJ5KTtcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe3R3ZWV0c30pXHJcbn1cclxuIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsImdyb3EiLCJmZWVkUXVlcnkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidHdlZXRzIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getTweets.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getTweets.ts"));
module.exports = __webpack_exports__;

})();