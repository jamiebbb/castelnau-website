"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"f34aa4065e42\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGphbWllXFxPbmVEcml2ZSAtIFBob2VuaXggQXNzZXQgTWFuYWdlbWVudCBQYXJ0bmVyc1xcQ2FzdGVsbmF1IEdyb3VwXFxTY3JhcGluZ1xcV2Vic2l0ZVxcY2FzdGVsbmF1LXdlYnNpdGVcXHNyY1xcYXBwXFxnbG9iYWxzLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImYzNGFhNDA2NWU0MlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/StockPriceDisplay.tsx":
/*!**********************************************!*\
  !*** ./src/components/StockPriceDisplay.tsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StockPriceDisplay)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_stockData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/stockData */ \"(app-pages-browser)/./src/lib/stockData.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction StockPriceDisplay() {\n    _s();\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [marketCap, setMarketCap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [lastUpdated, setLastUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"StockPriceDisplay.useEffect\": ()=>{\n            const fetchData = {\n                \"StockPriceDisplay.useEffect.fetchData\": async ()=>{\n                    const data = await (0,_lib_stockData__WEBPACK_IMPORTED_MODULE_2__.getStockData)();\n                    setPrice(data.currentPrice.toFixed(1));\n                    setMarketCap((data.marketCap / 1000000).toFixed(2) + 'M'); // Convert to millions with 2 decimal places\n                    setLastUpdated(new Date(data.lastUpdated).toLocaleDateString());\n                }\n            }[\"StockPriceDisplay.useEffect.fetchData\"];\n            fetchData();\n        }\n    }[\"StockPriceDisplay.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center space-x-4 text-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white\",\n                        children: \"Share Price: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jamie\\\\OneDrive - Phoenix Asset Management Partners\\\\Castelnau Group\\\\Scraping\\\\Website\\\\castelnau-website\\\\src\\\\components\\\\StockPriceDisplay.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white font-semibold\",\n                        children: [\n                            price,\n                            \"p\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jamie\\\\OneDrive - Phoenix Asset Management Partners\\\\Castelnau Group\\\\Scraping\\\\Website\\\\castelnau-website\\\\src\\\\components\\\\StockPriceDisplay.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jamie\\\\OneDrive - Phoenix Asset Management Partners\\\\Castelnau Group\\\\Scraping\\\\Website\\\\castelnau-website\\\\src\\\\components\\\\StockPriceDisplay.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white/70\",\n                children: \"|\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jamie\\\\OneDrive - Phoenix Asset Management Partners\\\\Castelnau Group\\\\Scraping\\\\Website\\\\castelnau-website\\\\src\\\\components\\\\StockPriceDisplay.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white\",\n                        children: \"NAV: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jamie\\\\OneDrive - Phoenix Asset Management Partners\\\\Castelnau Group\\\\Scraping\\\\Website\\\\castelnau-website\\\\src\\\\components\\\\StockPriceDisplay.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white font-semibold\",\n                        children: \"101.00p\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jamie\\\\OneDrive - Phoenix Asset Management Partners\\\\Castelnau Group\\\\Scraping\\\\Website\\\\castelnau-website\\\\src\\\\components\\\\StockPriceDisplay.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jamie\\\\OneDrive - Phoenix Asset Management Partners\\\\Castelnau Group\\\\Scraping\\\\Website\\\\castelnau-website\\\\src\\\\components\\\\StockPriceDisplay.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white/70\",\n                children: \"|\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jamie\\\\OneDrive - Phoenix Asset Management Partners\\\\Castelnau Group\\\\Scraping\\\\Website\\\\castelnau-website\\\\src\\\\components\\\\StockPriceDisplay.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white\",\n                        children: \"Market Cap: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jamie\\\\OneDrive - Phoenix Asset Management Partners\\\\Castelnau Group\\\\Scraping\\\\Website\\\\castelnau-website\\\\src\\\\components\\\\StockPriceDisplay.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white font-semibold\",\n                        children: [\n                            \"\\xa3\",\n                            marketCap\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jamie\\\\OneDrive - Phoenix Asset Management Partners\\\\Castelnau Group\\\\Scraping\\\\Website\\\\castelnau-website\\\\src\\\\components\\\\StockPriceDisplay.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jamie\\\\OneDrive - Phoenix Asset Management Partners\\\\Castelnau Group\\\\Scraping\\\\Website\\\\castelnau-website\\\\src\\\\components\\\\StockPriceDisplay.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white/70\",\n                children: \"|\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jamie\\\\OneDrive - Phoenix Asset Management Partners\\\\Castelnau Group\\\\Scraping\\\\Website\\\\castelnau-website\\\\src\\\\components\\\\StockPriceDisplay.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white/70\",\n                children: [\n                    \"Updated: \",\n                    lastUpdated\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jamie\\\\OneDrive - Phoenix Asset Management Partners\\\\Castelnau Group\\\\Scraping\\\\Website\\\\castelnau-website\\\\src\\\\components\\\\StockPriceDisplay.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jamie\\\\OneDrive - Phoenix Asset Management Partners\\\\Castelnau Group\\\\Scraping\\\\Website\\\\castelnau-website\\\\src\\\\components\\\\StockPriceDisplay.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(StockPriceDisplay, \"7nqx6J3pq74vGAgeybhDq37fHPY=\");\n_c = StockPriceDisplay;\nvar _c;\n$RefreshReg$(_c, \"StockPriceDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1N0b2NrUHJpY2VEaXNwbGF5LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ0o7QUFFaEMsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBZ0I7SUFDbEQsTUFBTSxDQUFDSyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFnQjtJQUMxRCxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQWdCO0lBRTlERCxnREFBU0E7dUNBQUM7WUFDUixNQUFNVTt5REFBWTtvQkFDaEIsTUFBTUMsT0FBTyxNQUFNVCw0REFBWUE7b0JBQy9CRyxTQUFTTSxLQUFLQyxZQUFZLENBQUNDLE9BQU8sQ0FBQztvQkFDbkNOLGFBQWEsQ0FBQ0ksS0FBS0wsU0FBUyxHQUFHLE9BQU0sRUFBR08sT0FBTyxDQUFDLEtBQUssTUFBTSw0Q0FBNEM7b0JBQ3ZHSixlQUFlLElBQUlLLEtBQUtILEtBQUtILFdBQVcsRUFBRU8sa0JBQWtCO2dCQUM5RDs7WUFDQUw7UUFDRjtzQ0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDs7a0NBQ0MsOERBQUNFO3dCQUFLRCxXQUFVO2tDQUFhOzs7Ozs7a0NBQzdCLDhEQUFDQzt3QkFBS0QsV0FBVTs7NEJBQTRCYjs0QkFBTTs7Ozs7Ozs7Ozs7OzswQkFFcEQsOERBQUNZO2dCQUFJQyxXQUFVOzBCQUFnQjs7Ozs7OzBCQUMvQiw4REFBQ0Q7O2tDQUNDLDhEQUFDRTt3QkFBS0QsV0FBVTtrQ0FBYTs7Ozs7O2tDQUM3Qiw4REFBQ0M7d0JBQUtELFdBQVU7a0NBQTJCOzs7Ozs7Ozs7Ozs7MEJBRTdDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBZ0I7Ozs7OzswQkFDL0IsOERBQUNEOztrQ0FDQyw4REFBQ0U7d0JBQUtELFdBQVU7a0NBQWE7Ozs7OztrQ0FDN0IsOERBQUNDO3dCQUFLRCxXQUFVOzs0QkFBMkI7NEJBQUVYOzs7Ozs7Ozs7Ozs7OzBCQUUvQyw4REFBQ1U7Z0JBQUlDLFdBQVU7MEJBQWdCOzs7Ozs7MEJBQy9CLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQWdCO29CQUNuQlQ7Ozs7Ozs7Ozs7Ozs7QUFJbEI7R0FyQ3dCTDtLQUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxqYW1pZVxcT25lRHJpdmUgLSBQaG9lbml4IEFzc2V0IE1hbmFnZW1lbnQgUGFydG5lcnNcXENhc3RlbG5hdSBHcm91cFxcU2NyYXBpbmdcXFdlYnNpdGVcXGNhc3RlbG5hdS13ZWJzaXRlXFxzcmNcXGNvbXBvbmVudHNcXFN0b2NrUHJpY2VEaXNwbGF5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRTdG9ja0RhdGEgfSBmcm9tICdAL2xpYi9zdG9ja0RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdG9ja1ByaWNlRGlzcGxheSgpIHtcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW21hcmtldENhcCwgc2V0TWFya2V0Q2FwXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbGFzdFVwZGF0ZWQsIHNldExhc3RVcGRhdGVkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFN0b2NrRGF0YSgpO1xuICAgICAgc2V0UHJpY2UoZGF0YS5jdXJyZW50UHJpY2UudG9GaXhlZCgxKSk7XG4gICAgICBzZXRNYXJrZXRDYXAoKGRhdGEubWFya2V0Q2FwIC8gMTAwMDAwMCkudG9GaXhlZCgyKSArICdNJyk7IC8vIENvbnZlcnQgdG8gbWlsbGlvbnMgd2l0aCAyIGRlY2ltYWwgcGxhY2VzXG4gICAgICBzZXRMYXN0VXBkYXRlZChuZXcgRGF0ZShkYXRhLmxhc3RVcGRhdGVkKS50b0xvY2FsZURhdGVTdHJpbmcoKSk7XG4gICAgfTtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgdGV4dC1zbVwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlNoYXJlIFByaWNlOiA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zZW1pYm9sZFwiPntwcmljZX1wPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNzBcIj58PC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+TkFWOiA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zZW1pYm9sZFwiPjEwMS4wMHA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS83MFwiPnw8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5NYXJrZXQgQ2FwOiA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zZW1pYm9sZFwiPsKje21hcmtldENhcH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS83MFwiPnw8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS83MFwiPlxuICAgICAgICBVcGRhdGVkOiB7bGFzdFVwZGF0ZWR9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0U3RvY2tEYXRhIiwiU3RvY2tQcmljZURpc3BsYXkiLCJwcmljZSIsInNldFByaWNlIiwibWFya2V0Q2FwIiwic2V0TWFya2V0Q2FwIiwibGFzdFVwZGF0ZWQiLCJzZXRMYXN0VXBkYXRlZCIsImZldGNoRGF0YSIsImRhdGEiLCJjdXJyZW50UHJpY2UiLCJ0b0ZpeGVkIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/StockPriceDisplay.tsx\n"));

/***/ })

});