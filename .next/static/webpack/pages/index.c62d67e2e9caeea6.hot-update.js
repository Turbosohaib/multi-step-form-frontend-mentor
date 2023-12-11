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

/***/ "./src/components/Step2.js":
/*!*********************************!*\
  !*** ./src/components/Step2.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Step2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Step2(param) {\n    let { steps, setSteps } = param;\n    _s();\n    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [plan, setPlan] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const handleCheckboxChange = ()=>{\n        setIsChecked(!isChecked);\n        setPlan((plan)=>{\n            return {\n                ...plan,\n                status: !isChecked\n            };\n        });\n        console.log(\"Plan: \", plan);\n    };\n    const handleGoBack = ()=>{\n        setSteps({\n            step1: true,\n            step2: false,\n            step3: false,\n            step4: false\n        });\n    };\n    const handleSelectPlan = (plan)=>{\n        plan.status = isChecked;\n        setPlan(plan);\n        console.log(\"plan: \", plan);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(steps.step2 ? \"block\" : \"hidden\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-semibold\",\n                children: \"Select your plan\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[20px] mt-3 text-[#a3a3ad]\",\n                children: \"You have the option of monthly or yearly billing.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>handleSelectPlan({\n                                        plan: \"Arcade\",\n                                        cost: \"$9/mo\"\n                                    }),\n                                className: \"border-2 hover:border-blue-900 hover:bg-[#f8f9fe] \".concat((plan === null || plan === void 0 ? void 0 : plan.plan) === \"Arcade\" ? \"bg-[#f8f9fe] border-blue-900\" : \"\", \" rounded-lg p-5 mr-[20px] w-[170px] cursor-pointer\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        className: \"mb-12\",\n                                        src: \"/assets/images/icon-arcade.svg\",\n                                        alt: \"icon-arcade\",\n                                        width: 50,\n                                        height: 50\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: \"Arcade\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg font-medium text-[#9696a0] opacity-50\",\n                                        children: \"$9/mo\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>handleSelectPlan({\n                                        plan: \"Advanced\",\n                                        cost: \"$12/mo\"\n                                    }),\n                                className: \"border-2 hover:border-blue-900 hover:bg-[#f8f9fe] \".concat((plan === null || plan === void 0 ? void 0 : plan.plan) === \"Advanced\" ? \"bg-[#f8f9fe] border-blue-900\" : \"\", \" rounded-lg p-5 w-[170px] cursor-pointer\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        className: \"mb-12\",\n                                        src: \"/assets/images/icon-advanced.svg\",\n                                        alt: \"icon-advanced\",\n                                        width: 50,\n                                        height: 50\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: \"Advanced\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg font-medium text-[#9696a0] opacity-50\",\n                                        children: \"$12/mo\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>handleSelectPlan({\n                                        plan: \"Pro\",\n                                        cost: \"$15/mo\"\n                                    }),\n                                className: \"border-2 hover:border-blue-900 hover:bg-[#f8f9fe] \".concat((plan === null || plan === void 0 ? void 0 : plan.plan) === \"Pro\" ? \"bg-[#f8f9fe] border-blue-900\" : \"\", \" rounded-lg p-5 w-[175px] ml-[20px] cursor-pointer\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        className: \"mb-12\",\n                                        src: \"/assets/images/icon-pro.svg\",\n                                        alt: \"icon-pro\",\n                                        width: 50,\n                                        height: 50\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: \"Pro\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg font-medium text-[#9696a0] opacity-50\",\n                                        children: \"$15/mo\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex justify-center p-5 mt-10 bg-[#f8f9fe]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-md font-semibold\",\n                                    children: \"Monthly\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"relative inline-flex items-center cursor-pointer mx-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            value: \"\",\n                                            className: \"sr-only peer\",\n                                            checked: isChecked,\n                                            onChange: handleCheckboxChange\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-12 h-6 bg-blue-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-900 rounded-full peer \".concat(isChecked ? \"peer-checked:after:translate-x-full peer-checked:after:border-white\" : \"\", \" after:content-[''] after:absolute after:top-[2px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[20px] after:w-[20px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-900\")\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                            lineNumber: 108,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-md font-semibold text-[#a0a0aa]\",\n                                    children: \"Yearly\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex items-center justify-between mt-[115px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleGoBack,\n                                className: \"text-center text-lg font-semibold hover:text-blue-900\",\n                                children: \"Go Back\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                // onClick={handleSubmit}\n                                className: \"text-center font-medium text-lg items-center px-6 py-3 hover:bg-[#174a8b] bg-[#03295a]  text-white rounded-lg\",\n                                children: \"Next Step\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                                lineNumber: 126,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Frontend_mentor\\\\multi-step-form-main\\\\multi-step-form\\\\src\\\\components\\\\Step2.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Step2, \"h7pmtLsX0xECsv0KVhbsuAqVla8=\");\n_c = Step2;\nvar _c;\n$RefreshReg$(_c, \"Step2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztnQ0FBYzs4Q0FDckQsOERBQUNTO29DQUFNVCxXQUFVOztzREFDZiw4REFBQ1U7NENBQ0NDLE1BQUs7NENBQ0xDLE9BQU07NENBQ05aLFdBQVU7NENBQ1ZhLFNBQVM1Qjs0Q0FDVDZCLFVBQVV6Qjs7Ozs7O3NEQUVaLDhEQUFDVTs0Q0FDQ0MsV0FBVywySUFJVixPQUhDZixZQUNJLHdFQUNBLElBQ0w7Ozs7Ozs7Ozs7Ozs4Q0FHTCw4REFBQ2M7b0NBQUlDLFdBQVU7OENBQXVDOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHMUQsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2U7Z0NBQ0NaLFNBQVNWO2dDQUNUTyxXQUFVOzBDQUNYOzs7Ozs7MENBR0QsOERBQUNlO2dDQUNDLHlCQUF5QjtnQ0FDekJmLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBcEl3QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1N0ZXAyLmpzPzg1YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGVwMih7IHN0ZXBzLCBzZXRTdGVwcyB9KSB7XHJcbiAgY29uc3QgW2lzQ2hlY2tlZCwgc2V0SXNDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoZWNrYm94Q2hhbmdlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpO1xyXG4gICAgc2V0UGxhbigocGxhbikgPT4ge1xyXG4gICAgICByZXR1cm4geyAuLi5wbGFuLCBzdGF0dXM6ICFpc0NoZWNrZWQgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJQbGFuOiBcIiwgcGxhbik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR29CYWNrID0gKCkgPT4ge1xyXG4gICAgc2V0U3RlcHMoe1xyXG4gICAgICBzdGVwMTogdHJ1ZSxcclxuICAgICAgc3RlcDI6IGZhbHNlLFxyXG4gICAgICBzdGVwMzogZmFsc2UsXHJcbiAgICAgIHN0ZXA0OiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdFBsYW4gPSAocGxhbikgPT4ge1xyXG4gICAgcGxhbi5zdGF0dXMgPSBpc0NoZWNrZWQ7XHJcbiAgICBzZXRQbGFuKHBsYW4pO1xyXG4gICAgY29uc29sZS5sb2coXCJwbGFuOiBcIiwgcGxhbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdGVwcy5zdGVwMiA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJ9YH0+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkXCI+U2VsZWN0IHlvdXIgcGxhbjwvaDE+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzIwcHhdIG10LTMgdGV4dC1bI2EzYTNhZF1cIj5cclxuICAgICAgICBZb3UgaGF2ZSB0aGUgb3B0aW9uIG9mIG1vbnRobHkgb3IgeWVhcmx5IGJpbGxpbmcuXHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXhcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0UGxhbih7IHBsYW46IFwiQXJjYWRlXCIsIGNvc3Q6IFwiJDkvbW9cIiB9KX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyLTIgaG92ZXI6Ym9yZGVyLWJsdWUtOTAwIGhvdmVyOmJnLVsjZjhmOWZlXSAke1xyXG4gICAgICAgICAgICAgIHBsYW4/LnBsYW4gPT09IFwiQXJjYWRlXCIgPyBcImJnLVsjZjhmOWZlXSBib3JkZXItYmx1ZS05MDBcIiA6IFwiXCJcclxuICAgICAgICAgICAgfSByb3VuZGVkLWxnIHAtNSBtci1bMjBweF0gdy1bMTcwcHhdIGN1cnNvci1wb2ludGVyYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMTJcIlxyXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2ljb24tYXJjYWRlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiaWNvbi1hcmNhZGVcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXs1MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPkFyY2FkZTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1bIzk2OTZhMF0gb3BhY2l0eS01MFwiPlxyXG4gICAgICAgICAgICAgICQ5L21vXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgaGFuZGxlU2VsZWN0UGxhbih7IHBsYW46IFwiQWR2YW5jZWRcIiwgY29zdDogXCIkMTIvbW9cIiB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlci0yIGhvdmVyOmJvcmRlci1ibHVlLTkwMCBob3ZlcjpiZy1bI2Y4ZjlmZV0gJHtcclxuICAgICAgICAgICAgICBwbGFuPy5wbGFuID09PSBcIkFkdmFuY2VkXCIgPyBcImJnLVsjZjhmOWZlXSBib3JkZXItYmx1ZS05MDBcIiA6IFwiXCJcclxuICAgICAgICAgICAgfSByb3VuZGVkLWxnIHAtNSB3LVsxNzBweF0gY3Vyc29yLXBvaW50ZXJgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xMlwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbi1hZHZhbmNlZC5zdmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cImljb24tYWR2YW5jZWRcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXs1MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPkFkdmFuY2VkPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LVsjOTY5NmEwXSBvcGFjaXR5LTUwXCI+XHJcbiAgICAgICAgICAgICAgJDEyL21vXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdFBsYW4oeyBwbGFuOiBcIlByb1wiLCBjb3N0OiBcIiQxNS9tb1wiIH0pfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXItMiBob3Zlcjpib3JkZXItYmx1ZS05MDAgaG92ZXI6YmctWyNmOGY5ZmVdICR7XHJcbiAgICAgICAgICAgICAgcGxhbj8ucGxhbiA9PT0gXCJQcm9cIiA/IFwiYmctWyNmOGY5ZmVdIGJvcmRlci1ibHVlLTkwMFwiIDogXCJcIlxyXG4gICAgICAgICAgICB9IHJvdW5kZWQtbGcgcC01IHctWzE3NXB4XSBtbC1bMjBweF0gY3Vyc29yLXBvaW50ZXJgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xMlwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbi1wcm8uc3ZnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJpY29uLXByb1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+UHJvPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LVsjOTY5NmEwXSBvcGFjaXR5LTUwXCI+XHJcbiAgICAgICAgICAgICAgJDE1L21vXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBwLTUgbXQtMTAgYmctWyNmOGY5ZmVdXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW1kIGZvbnQtc2VtaWJvbGRcIj5Nb250aGx5PC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIG14LTRcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzci1vbmx5IHBlZXJcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17aXNDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoZWNrYm94Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMiBoLTYgYmctYmx1ZS03MDAgcGVlci1mb2N1czpvdXRsaW5lLW5vbmUgcGVlci1mb2N1czpyaW5nLTQgcGVlci1mb2N1czpyaW5nLWJsdWUtMzAwIGRhcms6cGVlci1mb2N1czpyaW5nLWJsdWUtOTAwIHJvdW5kZWQtZnVsbCBwZWVyICR7XHJcbiAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJwZWVyLWNoZWNrZWQ6YWZ0ZXI6dHJhbnNsYXRlLXgtZnVsbCBwZWVyLWNoZWNrZWQ6YWZ0ZXI6Ym9yZGVyLXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH0gYWZ0ZXI6Y29udGVudC1bJyddIGFmdGVyOmFic29sdXRlIGFmdGVyOnRvcC1bMnB4XSBhZnRlcjpsZWZ0LVs0cHhdIGFmdGVyOmJnLXdoaXRlIGFmdGVyOmJvcmRlci1ncmF5LTMwMCBhZnRlcjpib3JkZXIgYWZ0ZXI6cm91bmRlZC1mdWxsIGFmdGVyOmgtWzIwcHhdIGFmdGVyOnctWzIwcHhdIGFmdGVyOnRyYW5zaXRpb24tYWxsIGRhcms6Ym9yZGVyLWdyYXktNjAwIHBlZXItY2hlY2tlZDpiZy1ibHVlLTkwMGB9XHJcbiAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1zZW1pYm9sZCB0ZXh0LVsjYTBhMGFhXVwiPlllYXJseTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LVsxMTVweF1cIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlR29CYWNrfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC1ibHVlLTkwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAvLyBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtbWVkaXVtIHRleHQtbGcgaXRlbXMtY2VudGVyIHB4LTYgcHktMyBob3ZlcjpiZy1bIzE3NGE4Yl0gYmctWyMwMzI5NWFdICB0ZXh0LXdoaXRlIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBOZXh0IFN0ZXBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJTdGVwMiIsInN0ZXBzIiwic2V0U3RlcHMiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJwbGFuIiwic2V0UGxhbiIsImhhbmRsZUNoZWNrYm94Q2hhbmdlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUdvQmFjayIsInN0ZXAxIiwic3RlcDIiLCJzdGVwMyIsInN0ZXA0IiwiaGFuZGxlU2VsZWN0UGxhbiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsIm9uQ2xpY2siLCJjb3N0Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Step2.js\n"));

/***/ })

});