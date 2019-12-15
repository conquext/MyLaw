"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _controllers = require("../controllers");

var _validation = _interopRequireDefault(require("../middlewares/validation"));

var getAttendees = _controllers.AttendeesController.getAttendees,
    addAttendee = _controllers.AttendeesController.addAttendee,
    getAttendee = _controllers.AttendeesController.getAttendee,
    removeAttendees = _controllers.AttendeesController.removeAttendees;
var addAttendeeCheck = _validation["default"].addAttendeeCheck;

var attendeesRoute = function attendeesRoute(app) {
  app.get("/api/v1/attendees/", getAttendees);
  app.get("/api/v1/attendees/:id", getAttendee);
  app.post("/api/v1/attendees/", addAttendeeCheck, addAttendee);
  app["delete"]("/api/v1/attendees/:id", removeAttendees); // app.post("/api/v1/attendees/:id/talk", addAttendeesToTalk);
};

var _default = attendeesRoute;
exports["default"] = _default;