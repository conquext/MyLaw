"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = require("../db");

var _response = _interopRequireDefault(require("../utils/response"));

var _search = _interopRequireDefault(require("../helpers/search"));

var errorResponse = _response["default"].errorResponse,
    successResponse = _response["default"].successResponse;

var returnActualData = function returnActualData(data) {
  return data.filter(function (datum) {
    return !datum.deleted;
  });
};
/**
 * Attendees representing the Attendees controller
 * @class AttendeesController
 * @description Attendees Controller
 */


var AttendeesController =
/*#__PURE__*/
function () {
  function AttendeesController() {
    (0, _classCallCheck2["default"])(this, AttendeesController);
  }

  (0, _createClass2["default"])(AttendeesController, null, [{
    key: "addAttendee",

    /**
     * Handles addition of attendees
     * Route: POST: api/v1/attendees
     * @param {object} req - HTTP Request object
     * @param {object} res - HTTP Response object
     * @return {res} res - HTTP Response object
     */
    value: function addAttendee(req, res) {
      var id, _req$body, name, email, newId, newAttendee;

      return _regenerator["default"].async(function addAttendee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = _db.attendees.length;
              _context.prev = 1;
              _req$body = req.body, name = _req$body.name, email = _req$body.email;
              newId = _db.attendees[_db.attendees.length - 1].id + 1;

              if (!(_search["default"].find(_db.attendees, "email", email).length > 0)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", errorResponse(res, 409, "Duplicate attendee"));

            case 6:
              newAttendee = {
                id: newId,
                name: name,
                email: email
              };

              _db.attendees.push(newAttendee);

              return _context.abrupt("return", successResponse(res, 200, "New attendee added successfully", returnActualData(_db.attendees)));

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              return _context.abrupt("return", errorResponse(res, 500, [_context.t0]));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 11]]);
    }
    /**
     * Get an attendee
     * Route: GET: api/v1/attendees/:id
     * @param {object} req - HTTP Request object
     * @param {object} res - HTTP Response object
     * @return {res} res - HTTP Response object
     */

  }, {
    key: "getAttendee",
    value: function getAttendee(req, res) {
      var attendeeId, attendeeFound, email;
      return _regenerator["default"].async(function getAttendee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              attendeeId = parseInt(req.params.id, 10);
              attendeeFound = null;

              if (req.query.email) {
                email = req.query.email;
                attendeeFound = _search["default"].find(_db.attendees, "email", email);
              } else {
                attendeeFound = _search["default"].find(_db.attendees, "id", attendeeId);
              }

              if (!(attendeeFound.length >= 1)) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", successResponse(res, 200, "Attendee retrieved successfully", attendeeFound));

            case 6:
              return _context2.abrupt("return", errorResponse(res, 404, "No attendee found"));

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", errorResponse(res, 500, [_context2.t0]));

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 9]]);
    }
    /**
     * Get all attendees
     * Route: GET: api/v1/attendees
     * @param {object} req - HTTP Request object
     * @param {object} res - HTTP Response object
     * @return {res} res - HTTP Response object
     */

  }, {
    key: "getAttendees",
    value: function getAttendees(req, res) {
      var attendeesFound;
      return _regenerator["default"].async(function getAttendees$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              attendeesFound = [];

              _db.attendees.map(function (attendee) {
                if (!attendee.deleted) {
                  attendeesFound.push(attendee);
                }
              });

              attendeesFound.length > 0 ? successResponse(res, 200, "Attendees Record", attendeesFound) : errorResponse(res, 404, "No attendees found");
              _context3.next = 9;
              break;

            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", errorResponse(res, 500, [_context3.t0]));

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 6]]);
    }
    /**
     * Add attendees to talk
     * Route: POST: api/v1/attendees/talk:id
     * @param {object} req - HTTP Request object
     * @param {object} res - HTTP Response object
     * @return {res} res - HTTP Response object
     * @memberof AttendeesController
     */

  }, {
    key: "addAttendeesToTalk",
    value: function addAttendeesToTalk(req, res) {
      return _regenerator["default"].async(function addAttendeesToTalk$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              try {} catch (error) {}

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
    /**
     * Remove a talk
     * Route: DELETE: api/v1/attendees/:id
     * @param {object} req - HTTP Request object
     * @param {object} res - HTTP Response object
     * @return {res} res - HTTP Response object
     * @memberof AttendeeController
     */

  }, {
    key: "removeAttendees",
    value: function removeAttendees(req, res) {
      var thisId, attendeeFound;
      return _regenerator["default"].async(function removeAttendees$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              thisId = parseInt(req.params.id, 10);
              attendeeFound = _db.attendees.filter(function (attendee) {
                return !attendee.deleted && attendee.id === thisId;
              });

              if (!(Object.keys(attendeeFound).length === 0)) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return", errorResponse(res, 404, "No attendee data found"));

            case 5:
              attendeeFound[0].deleted = true;
              return _context5.abrupt("return", successResponse(res, 200, "Attendee deleted successfully"));

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
              return _context5.abrupt("return", errorResponse(res, 500, [_context5.t0]));

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[0, 9]]);
    }
  }]);
  return AttendeesController;
}();

var _default = AttendeesController;
exports["default"] = _default;