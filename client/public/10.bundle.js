(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{304:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(314);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(315);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(316);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(317);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(355);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(359);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(358);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(356);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(303);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31);\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar EditTalkForm =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(EditTalkForm, _React$Component);\n\n  function EditTalkForm() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditTalkForm);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(EditTalkForm)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {\n      id: "",\n      input: {\n        topic: "",\n        speakerId: ""\n      },\n      dropdownOpen: false,\n      errors: {}\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "toggle", function () {\n      return _this.setState({\n        dropdownOpen: !_this.state.dropdownOpen\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onChange", function (e) {\n      var updatedInput = _objectSpread({}, _this.state.input);\n\n      updatedInput[e.target.name] = e.target.value;\n\n      _this.setState({\n        input: updatedInput\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onSelectHandler", function (e) {\n      var updatedInput = _objectSpread({}, _this.state.input);\n\n      updatedInput["speakerId"] = e.target.value;\n\n      _this.setState({\n        input: updatedInput\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "submitForm", function (e) {\n      e.preventDefault();\n\n      _this.props.assigntalk(_this.state.id, _this.state.input.speakerId);\n\n      _this.props.onHide();\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditTalkForm, [{\n    key: "componentDidMount",\n    value: function componentDidMount() {\n      var output = this.props.updatedobject;\n      var oldInput = {};\n      oldInput.topic = output.topic;\n      oldInput.speakerId = output.speakerId || "";\n      this.setState({\n        id: output.id,\n        input: oldInput\n      });\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          errors = _this$state.errors,\n          input = _this$state.input;\n      var _this$context = this.context,\n          attendees = _this$context.attendees,\n          getSpeaker = _this$context.getSpeaker;\n      var speaker = getSpeaker(input.speakerId);\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {\n        onSubmit: this.submitForm\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {\n        "for": "last"\n      }, "Topic"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {\n        type: "text",\n        name: "topic",\n        id: "topic",\n        onChange: this.onChange,\n        value: this.state.input.topic === null ? "" : this.state.input.topic\n      }), errors.topic && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {\n        className: "invalid-feedback"\n      }, errors.topic)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {\n        "for": "speaker"\n      }, "Speaker"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {\n        isOpen: this.state.dropdownOpen,\n        toggle: this.toggle\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {\n        caret: true\n      }, speaker ? speaker.name : "Select speaker"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {\n        onChange: this.onChange\n      }, attendees.map(function (attendee) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {\n          key: attendee.id,\n          name: "speakerId",\n          value: attendee.id,\n          onClick: _this2.onChange\n        }, attendee.name);\n      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], null, "Update"));\n    }\n  }]);\n\n  return EditTalkForm;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(EditTalkForm, "contextType", _context__WEBPACK_IMPORTED_MODULE_17__[/* AppContext */ "a"]);\n\n/* harmony default export */ __webpack_exports__["default"] = (EditTalkForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzA0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRWRpdFRhbGtGb3JtLmpzPzdhZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBGb3JtLFxuICBGb3JtR3JvdXAsXG4gIExhYmVsLFxuICBJbnB1dCxcbiAgRHJvcGRvd24sXG4gIERyb3Bkb3duVG9nZ2xlLFxuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duSXRlbVxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuY2xhc3MgRWRpdFRhbGtGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gQXBwQ29udGV4dDtcblxuICBzdGF0ZSA9IHtcbiAgICBpZDogXCJcIixcbiAgICBpbnB1dDoge1xuICAgICAgdG9waWM6IFwiXCIsXG4gICAgICBzcGVha2VySWQ6IFwiXCJcbiAgICB9LFxuICAgIGRyb3Bkb3duT3BlbjogZmFsc2UsXG4gICAgZXJyb3JzOiB7fVxuICB9O1xuXG4gIHRvZ2dsZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBkcm9wZG93bk9wZW46ICF0aGlzLnN0YXRlLmRyb3Bkb3duT3BlbiB9KTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBvdXRwdXQgPSB0aGlzLnByb3BzLnVwZGF0ZWRvYmplY3Q7XG4gICAgY29uc3Qgb2xkSW5wdXQgPSB7fTtcbiAgICBvbGRJbnB1dC50b3BpYyA9IG91dHB1dC50b3BpYztcbiAgICBvbGRJbnB1dC5zcGVha2VySWQgPSBvdXRwdXQuc3BlYWtlcklkIHx8IFwiXCI7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaWQ6IG91dHB1dC5pZCwgaW5wdXQ6IG9sZElucHV0IH0pO1xuICB9XG5cbiAgb25DaGFuZ2UgPSBlID0+IHtcbiAgICBsZXQgdXBkYXRlZElucHV0ID0geyAuLi50aGlzLnN0YXRlLmlucHV0IH07XG4gICAgdXBkYXRlZElucHV0W2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0OiB1cGRhdGVkSW5wdXQgfSk7XG4gIH07XG5cbiAgb25TZWxlY3RIYW5kbGVyID0gZSA9PiB7XG4gICAgbGV0IHVwZGF0ZWRJbnB1dCA9IHsgLi4udGhpcy5zdGF0ZS5pbnB1dCB9O1xuICAgIHVwZGF0ZWRJbnB1dFtcInNwZWFrZXJJZFwiXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dDogdXBkYXRlZElucHV0IH0pO1xuICB9O1xuXG4gIHN1Ym1pdEZvcm0gPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5hc3NpZ250YWxrKHRoaXMuc3RhdGUuaWQsIHRoaXMuc3RhdGUuaW5wdXQuc3BlYWtlcklkKTtcbiAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVycm9ycywgaW5wdXQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBhdHRlbmRlZXMsIGdldFNwZWFrZXIgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIGNvbnN0IHNwZWFrZXIgPSBnZXRTcGVha2VyKGlucHV0LnNwZWFrZXJJZCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX0+XG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPExhYmVsIGZvcj1cImxhc3RcIj5Ub3BpYzwvTGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwidG9waWNcIlxuICAgICAgICAgICAgaWQ9XCJ0b3BpY1wiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dC50b3BpYyA9PT0gbnVsbCA/IFwiXCIgOiB0aGlzLnN0YXRlLmlucHV0LnRvcGljXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7ZXJyb3JzLnRvcGljICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMudG9waWN9PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPExhYmVsIGZvcj1cInNwZWFrZXJcIj5TcGVha2VyPC9MYWJlbD5cbiAgICAgICAgICA8RHJvcGRvd24gaXNPcGVuPXt0aGlzLnN0YXRlLmRyb3Bkb3duT3Blbn0gdG9nZ2xlPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgY2FyZXQ+XG4gICAgICAgICAgICAgIHtzcGVha2VyID8gc3BlYWtlci5uYW1lIDogXCJTZWxlY3Qgc3BlYWtlclwifVxuICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9PlxuICAgICAgICAgICAgICB7YXR0ZW5kZWVzLm1hcChhdHRlbmRlZSA9PiAoXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXthdHRlbmRlZS5pZH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcGVha2VySWRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2F0dGVuZGVlLmlkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YXR0ZW5kZWUubmFtZX1cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICA8QnV0dG9uPlVwZGF0ZTwvQnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFRhbGtGb3JtO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBWUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUExQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQW9CQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFpQkE7Ozs7QUF6RkE7QUFDQTtBQURBO0FBQ0E7QUEyRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///304\n')}}]);