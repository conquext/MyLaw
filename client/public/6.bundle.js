(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{288:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(344);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(339);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(284);\n/* harmony import */ var _hoc_asyncComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31);\n\n\n\n\nvar AsyncAddTalkForm = Object(_hoc_asyncComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(function () {\n  return __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 291));\n});\nvar AsyncEditTalkForm = Object(_hoc_asyncComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(function () {\n  return Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, 293));\n});\nvar AsyncAddAttendeeForm = Object(_hoc_asyncComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(function () {\n  return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 297));\n});\n\nvar ModalForm = function ModalForm(props) {\n  var form = "";\n\n  if (props.form === "UpdateTalk") {\n    form = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AsyncEditTalkForm, props);\n  }\n\n  if (props.form === "AddNewTalk") {\n    form = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AsyncAddTalkForm, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {\n      addtalk: props.addtalk\n    }));\n  }\n\n  if (props.form === "AddNewAttendee") {\n    form = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AsyncAddAttendeeForm, props);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {\n    "aria-labelledby": "contained-modal-title-vcenter wtf",\n    className: "fade"\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].Header, {\n    closeButton: true\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].Title, {\n    id: "contained-modal-title-vcenter"\n  }, props.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].Body, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, form)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].Footer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    onClick: props.onHide\n  }, "Close")));\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (ModalForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3JtLmpzPzJiMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiwgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IGFzeW5jQ29tcG9uZW50IGZyb20gXCIuLi9ob2MvYXN5bmNDb21wb25lbnRcIjtcblxuY29uc3QgQXN5bmNBZGRUYWxrRm9ybSA9IGFzeW5jQ29tcG9uZW50KCgpID0+IHtcbiAgcmV0dXJuIGltcG9ydChcIi4vQWRkVGFsa0Zvcm1cIik7XG59KTtcblxuY29uc3QgQXN5bmNFZGl0VGFsa0Zvcm0gPSBhc3luY0NvbXBvbmVudCgoKSA9PiB7XG4gIHJldHVybiBpbXBvcnQoXCIuL0VkaXRUYWxrRm9ybVwiKTtcbn0pO1xuXG5jb25zdCBBc3luY0FkZEF0dGVuZGVlRm9ybSA9IGFzeW5jQ29tcG9uZW50KCgpID0+IHtcbiAgcmV0dXJuIGltcG9ydChcIi4vQWRkQXR0ZW5kZWVGb3JtXCIpO1xufSk7XG5cbmNvbnN0IE1vZGFsRm9ybSA9IHByb3BzID0+IHtcbiAgbGV0IGZvcm0gPSBcIlwiO1xuXG4gIGlmIChwcm9wcy5mb3JtID09PSBcIlVwZGF0ZVRhbGtcIikge1xuICAgIGZvcm0gPSA8QXN5bmNFZGl0VGFsa0Zvcm0gey4uLnByb3BzfSAvPjtcbiAgfVxuXG4gIGlmIChwcm9wcy5mb3JtID09PSBcIkFkZE5ld1RhbGtcIikge1xuICAgIGZvcm0gPSA8QXN5bmNBZGRUYWxrRm9ybSB7Li4ucHJvcHN9IGFkZHRhbGs9e3Byb3BzLmFkZHRhbGt9IC8+O1xuICB9XG5cbiAgaWYgKHByb3BzLmZvcm0gPT09IFwiQWRkTmV3QXR0ZW5kZWVcIikge1xuICAgIGZvcm0gPSA8QXN5bmNBZGRBdHRlbmRlZUZvcm0gey4uLnByb3BzfSAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlciB3dGZcIlxuICAgICAgY2xhc3NOYW1lPVwiZmFkZVwiXG4gICAgPlxuICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgPE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cbiAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgIDwvTW9kYWwuVGl0bGU+XG4gICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICA8Q29udGFpbmVyPntmb3JtfTwvQ29udGFpbmVyPlxuICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkhpZGV9PkNsb3NlPC9CdXR0b24+XG4gICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICA8L01vZGFsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxGb3JtO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBUUE7QUFBQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///288\n')},338:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ModalForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(288);\n\n\n\nvar AddTalkModal = function AddTalkModal(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModalForm__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {\n    title: "Add New Talk",\n    form: "AddNewTalk",\n    show: props.show,\n    onHide: props.onHide,\n    addtalk: props.addtalk\n  });\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (AddTalkModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzM4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWRkVGFsa01vZGFsLmpzPzE2ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsRm9ybSBmcm9tIFwiLi9Nb2RhbEZvcm1cIjtcblxuY29uc3QgQWRkVGFsa01vZGFsID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNb2RhbEZvcm1cbiAgICAgIHRpdGxlPVwiQWRkIE5ldyBUYWxrXCJcbiAgICAgIGZvcm09XCJBZGROZXdUYWxrXCJcbiAgICAgIHNob3c9e3Byb3BzLnNob3d9XG4gICAgICBvbkhpZGU9e3Byb3BzLm9uSGlkZX1cbiAgICAgIGFkZHRhbGs9e3Byb3BzLmFkZHRhbGt9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRhbGtNb2RhbDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///338\n')}}]);