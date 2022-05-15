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
exports.id = "pages/api/addTweet";
exports.ids = ["pages/api/addTweet"];
exports.modules = {

/***/ "(api)/./pages/api/addTweet.ts":
/*!*******************************!*\
  !*** ./pages/api/addTweet.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const data = JSON.parse(req.body);\n    const mutations = {\n        mutations: [\n            {\n                create: {\n                    _type: \"tweet\",\n                    text: data.text,\n                    username: data.username,\n                    blockTweet: false,\n                    profileImg: data.profileImg,\n                    image: data.image\n                }\n            }\n        ]\n    };\n    const apiEndpoint = `https://${\"vsq93qn4\"}.api.sanity.io/v2021-10-21/data/mutate/${\"production\"}`;\n    const result = await fetch(apiEndpoint, {\n        headers: {\n            \"content-type\": \"application/json\",\n            Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`\n        },\n        body: JSON.stringify(mutations),\n        method: \"POST\"\n    });\n    const json = await result.json();\n    res.status(201).json({\n        message: \"Added!\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkVHdlZXQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQU9lLGVBQWVBLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUNFLE1BQU1DLElBQUksR0FBYUMsSUFBSSxDQUFDQyxLQUFLLENBQUNKLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDO0lBQzNDLE1BQU1DLFNBQVMsR0FBRztRQUNkQSxTQUFTLEVBQUU7WUFDUDtnQkFDSUMsTUFBTSxFQUFFO29CQUNKQyxLQUFLLEVBQUUsT0FBTztvQkFDZEMsSUFBSSxFQUFFUCxJQUFJLENBQUNPLElBQUk7b0JBQ2ZDLFFBQVEsRUFBRVIsSUFBSSxDQUFDUSxRQUFRO29CQUN2QkMsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCQyxVQUFVLEVBQUVWLElBQUksQ0FBQ1UsVUFBVTtvQkFDM0JDLEtBQUssRUFBRVgsSUFBSSxDQUFDVyxLQUFLO2lCQUNwQjthQUNKO1NBQ0o7S0FDRDtJQUNELE1BQU1DLFdBQVcsR0FBRyxDQUFDLFFBQVEsRUFBRUMsVUFBeUMsQ0FBQyx1Q0FBdUMsRUFBRUEsWUFBc0MsQ0FBQyxDQUFDO0lBQzFKLE1BQU1JLE1BQU0sR0FBRyxNQUFNQyxLQUFLLENBQUNOLFdBQVcsRUFBQztRQUNuQ08sT0FBTyxFQUFFO1lBQ0wsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQ0MsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sZ0JBQWdCLENBQUMsQ0FBQztTQUMxRDtRQUNEbEIsSUFBSSxFQUFFRixJQUFJLENBQUNxQixTQUFTLENBQUNsQixTQUFTLENBQUM7UUFDL0JtQixNQUFNLEVBQUUsTUFBTTtLQUVqQixDQUFDO0lBQ0YsTUFBTUMsSUFBSSxHQUFHLE1BQU1QLE1BQU0sQ0FBQ08sSUFBSSxFQUFFO0lBQ3JDekIsR0FBRyxDQUFDMEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRCxJQUFJLENBQUM7UUFBRUUsT0FBTyxFQUFFLFFBQVE7S0FBRSxDQUFDO0NBQzVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2FkZFR3ZWV0LnRzPzM1YmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHtUd2VldEJvZHl9IGZyb20gJy4uLy4uL3R5cGluZ3MnO1xyXG50eXBlIERhdGEgPSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxyXG4pIHtcclxuICAgIGNvbnN0IGRhdGE6VHdlZXRCb2R5ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XHJcbiAgICBjb25zdCBtdXRhdGlvbnMgPSB7XHJcbiAgICAgICAgbXV0YXRpb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIF90eXBlOiAndHdlZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGRhdGEudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBibG9ja1R3ZWV0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlSW1nOiBkYXRhLnByb2ZpbGVJbWcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgIH1cclxuICAgICAgIGNvbnN0IGFwaUVuZHBvaW50ID0gYGh0dHBzOi8vJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRH0uYXBpLnNhbml0eS5pby92MjAyMS0xMC0yMS9kYXRhL211dGF0ZS8ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUfWBcclxuICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGFwaUVuZHBvaW50LHtcclxuICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5TQU5JVFlfQVBJX1RPS0VOfWBcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG11dGF0aW9ucyksXHJcbiAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcclxuXHJcbiAgICAgICB9KVxyXG4gICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcbiAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnQWRkZWQhJyB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJtdXRhdGlvbnMiLCJjcmVhdGUiLCJfdHlwZSIsInRleHQiLCJ1c2VybmFtZSIsImJsb2NrVHdlZXQiLCJwcm9maWxlSW1nIiwiaW1hZ2UiLCJhcGlFbmRwb2ludCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicmVzdWx0IiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIlNBTklUWV9BUElfVE9LRU4iLCJzdHJpbmdpZnkiLCJtZXRob2QiLCJqc29uIiwic3RhdHVzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/addTweet.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addTweet.ts"));
module.exports = __webpack_exports__;

})();