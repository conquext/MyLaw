"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _talks = _interopRequireDefault(require("./talks"));

var _attendees = _interopRequireDefault(require("./attendees"));

// import userRoute from "./userRoute";
var routes = function routes(app) {
  (0, _attendees["default"])(app);
  (0, _talks["default"])(app); //   userRoute(app);
};

var _default = routes;
exports["default"] = _default;