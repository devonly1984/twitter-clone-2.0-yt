"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Widgets.tsx":
/*!********************************!*\
  !*** ./components/Widgets.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-twitter-embed */ \"./node_modules/react-twitter-embed/dist/index.modern.js\");\nvar _this = undefined;\n\n\n\nvar Widgets = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-2 mt-2 col-span-2 hidden lg:inline\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.SearchIcon, {\n                        className: \"h-5 w-5 text-gray-400\"\n                    }, void 0, false, {\n                        fileName: \"/home/wewhite/Documents/GitHub/twitter-2.0-clone-yt/components/Widgets.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search Twitter\",\n                        className: \"bg-transparent outline-none flex-1 \"\n                    }, void 0, false, {\n                        fileName: \"/home/wewhite/Documents/GitHub/twitter-2.0-clone-yt/components/Widgets.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/wewhite/Documents/GitHub/twitter-2.0-clone-yt/components/Widgets.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_twitter_embed__WEBPACK_IMPORTED_MODULE_1__.TwitterTimelineEmbed, {\n                sourceType: \"profile\",\n                screenName: \"sonnysangha\",\n                options: {\n                    height: 1000\n                }\n            }, void 0, false, {\n                fileName: \"/home/wewhite/Documents/GitHub/twitter-2.0-clone-yt/components/Widgets.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/wewhite/Documents/GitHub/twitter-2.0-clone-yt/components/Widgets.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this);\n};\n_c = Widgets;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Widgets);\nvar _c;\n$RefreshReg$(_c, \"Widgets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpZGdldHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQXFEO0FBQ0s7QUFFMUQsSUFBTUUsT0FBTyxHQUFHLFdBQU07SUFDcEIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHVDQUF1Qzs7MEJBRXBELDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsZ0VBQWdFOztrQ0FDN0UsOERBQUNKLGdFQUFVO3dCQUFDSSxTQUFTLEVBQUMsdUJBQXVCOzs7Ozs2QkFBRztrQ0FDaEQsOERBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxNQUFNO3dCQUFDQyxXQUFXLEVBQUMsZ0JBQWdCO3dCQUFDSCxTQUFTLEVBQUMscUNBQXFDOzs7Ozs2QkFBRTs7Ozs7O3FCQUM3RjswQkFDTiw4REFBQ0gscUVBQW9CO2dCQUFDTyxVQUFVLEVBQUMsU0FBUztnQkFDMUNDLFVBQVUsRUFBQyxhQUFhO2dCQUN4QkMsT0FBTyxFQUFFO29CQUFDQyxNQUFNLEVBQUUsSUFBSTtpQkFBQzs7Ozs7cUJBQUc7Ozs7OzthQUN0QixDQUNQO0NBQ0Y7QUFiS1QsS0FBQUEsT0FBTztBQWViLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV2lkZ2V0cy50c3g/ZGQ2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xyXG5pbXBvcnQgeyBUd2l0dGVyVGltZWxpbmVFbWJlZCB9IGZyb20gJ3JlYWN0LXR3aXR0ZXItZW1iZWQnXHJcblxyXG5jb25zdCBXaWRnZXRzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgbXQtMiBjb2wtc3Bhbi0yIGhpZGRlbiBsZzppbmxpbmVcIj5cclxuICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgYmctZ3JheS0xMDAgcC0zIHJvdW5kZWQtZnVsbCBtdC0yIFwiPlxyXG4gICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggVHdpdHRlclwiIGNsYXNzTmFtZT0nYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lIGZsZXgtMSAnLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxUd2l0dGVyVGltZWxpbmVFbWJlZCBzb3VyY2VUeXBlPVwicHJvZmlsZVwiXHJcbiAgICAgIHNjcmVlbk5hbWU9J3Nvbm55c2FuZ2hhJ1xyXG4gICAgICBvcHRpb25zPXt7aGVpZ2h0OiAxMDAwfX0vPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRzXHJcbiJdLCJuYW1lcyI6WyJTZWFyY2hJY29uIiwiVHdpdHRlclRpbWVsaW5lRW1iZWQiLCJXaWRnZXRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzb3VyY2VUeXBlIiwic2NyZWVuTmFtZSIsIm9wdGlvbnMiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Widgets.tsx\n");

/***/ })

});